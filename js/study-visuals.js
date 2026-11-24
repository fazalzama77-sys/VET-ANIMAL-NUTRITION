(function () {
  "use strict";

  const visualTypes = {
    trace: { label: "Step through", icon: "layers" },
    compare: { label: "Compare paths", icon: "branch" },
    model: { label: "Try a model", icon: "chart" }
  };
  const number = new Intl.NumberFormat("en-IN", { maximumFractionDigits: 2 });

  function measure(value, unit) {
    return number.format(value) + (unit.startsWith("%") ? "" : " ") + unit;
  }

  function escape(text) {
    return String(text).replace(/[&<>"']/g, char => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[char]);
  }

  function lessonLink(id) {
    return id ? `<a class="study-visual__lesson" href="#/topic/${escape(id)}">Read the related lesson</a>` : "";
  }

  function mountChoices(body, visual, id) {
    const isTrace = visual.type === "trace";
    const items = isTrace ? visual.steps : visual.cases;
    body.insertAdjacentHTML("beforeend", `
      <div class="study-visual__choices" role="group" aria-label="${isTrace ? "Steps" : "Cases"}">
        ${items.map(([label], i) => `
          <button type="button" class="study-visual__choice" aria-pressed="false">
            ${isTrace ? `<span class="study-visual__step" aria-hidden="true">${i + 1}</span>` : ""}
            <span>${escape(label)}</span>
          </button>`).join("")}
      </div>
      <div class="study-visual__scene"></div>
      <div class="study-visual__result" aria-live="polite" aria-atomic="true"></div>
      <div class="study-visual__link"></div>`);

    const buttons = body.querySelectorAll(".study-visual__choice");
    const result = body.querySelector(".study-visual__result");
    const link = body.querySelector(".study-visual__link");
    const updateScene = window.mountStudyScene?.(body.querySelector(".study-visual__scene"), id);
    function select(index) {
      buttons.forEach((button, i) => button.setAttribute("aria-pressed", String(index === i)));
      const [label, detail, pathDetail, pathLesson] = items[index];
      if (isTrace) {
        result.innerHTML = `<div class="study-visual__frame"><strong>${escape(label)}</strong><p>${escape(detail)}</p></div>`;
        link.innerHTML = lessonLink(pathDetail);
      } else {
        result.innerHTML = `<div class="study-visual__frame">
          <ol class="study-visual__path" aria-label="${escape(label)} pathway">
            ${detail.map(node => `<li>${escape(node)}</li>`).join("")}
          </ol><p>${escape(pathDetail)}</p></div>`;
        link.innerHTML = lessonLink(pathLesson);
      }
      updateScene?.(index);
    }

    buttons.forEach((button, i) => button.addEventListener("click", () => select(i)));
    select(0);
  }

  function drawCurve(canvas, body, visual, supply) {
    const context = canvas.getContext("2d");
    if (!context) return;
    const { min, max } = visual.controls[0];
    const { breakpoint } = visual.graphic;
    const scale = visual.rows[0].scale;
    const styles = getComputedStyle(body);
    const ink = styles.getPropertyValue("--text-muted").trim();
    const accent = styles.getPropertyValue("--vis-accent").trim();
    const x = value => 42 + 448 * (value - min) / (max - min);
    const y = value => 135 - 111 * value / scale;
    const atSupply = value => visual.calculate(value)[0];

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.strokeStyle = ink;
    context.lineWidth = 1;
    context.beginPath();
    context.moveTo(x(min), y(scale));
    context.lineTo(x(min), y(0));
    context.lineTo(x(max), y(0));
    context.stroke();
    context.fillStyle = ink;
    context.font = "20px sans-serif";
    context.textAlign = "right";
    context.fillText(scale, x(min) - 6, y(scale) + 5);
    context.textAlign = "center";
    [min, breakpoint, max].forEach(value => context.fillText(value, x(value), 158));

    context.setLineDash([5, 4]);
    context.beginPath();
    context.moveTo(x(breakpoint), y(0));
    context.lineTo(x(breakpoint), y(atSupply(breakpoint)));
    context.stroke();
    context.setLineDash([]);

    context.strokeStyle = accent;
    context.lineWidth = 4;
    context.beginPath();
    context.moveTo(x(min), y(atSupply(min)));
    context.lineTo(x(breakpoint), y(atSupply(breakpoint)));
    context.lineTo(x(max), y(atSupply(max)));
    context.stroke();
    context.fillStyle = accent;
    context.beginPath();
    context.arc(x(supply), y(atSupply(supply)), 7, 0, 2 * Math.PI);
    context.fill();
  }

  function mountModel(body, visual, id) {
    const graphic = visual.graphic;
    const square = graphic && graphic.type === "square";
    const curve = graphic && graphic.type === "curve";
    body.insertAdjacentHTML("beforeend", `
      <div class="study-visual__scene"></div>
      <div class="study-visual__model">
        <div class="study-visual__controls">
          ${visual.controls.map((control, i) => `
            <div class="study-visual__control">
              <div class="study-visual__metric">
                <label for="study-${id}-${i}">${escape(control.label)}</label>
                <span class="study-visual__input-value" aria-hidden="true"></span>
              </div>
              <input id="study-${id}-${i}" type="range" min="${control.min}" max="${control.max}"
                step="${control.step}" value="${control.initial}">
            </div>`).join("")}
          <button class="study-visual__reset" type="button">Reset values</button>
        </div>
        <div class="study-visual__data">
          ${square ? `<div class="study-visual__square" aria-hidden="true">
            <span>${graphic.low}% CP</span><span data-parts="low"></span>
            <strong data-target></strong>
            <span>${graphic.high}% CP</span><span data-parts="high"></span>
          </div>` : ""}
          ${curve ? `<figure class="study-visual__curve">
            <figcaption>Response (units)</figcaption>
            <canvas width="520" height="170" role="img" aria-label="Illustrated response rises to a breakpoint at 8 units of nutrient supply and then plateaus."></canvas>
            <span>Nutrient supply (units)</span>
          </figure>` : ""}
          ${visual.rows.map(row => `
            <div class="study-visual__readout">
              <div class="study-visual__metric"><span>${escape(row.label)}</span><strong></strong></div>
              <div class="study-visual__bar${row.signed ? " study-visual__bar--signed" : ""}" aria-hidden="true"><span></span></div>
            </div>`).join("")}
          <p class="study-visual__explain" aria-live="polite" aria-atomic="true"></p>
        </div>
      </div>`);

    const inputs = Array.from(body.querySelectorAll('input[type="range"]'));
    const labels = body.querySelectorAll(".study-visual__input-value");
    const readouts = body.querySelectorAll(".study-visual__readout");
    const explain = body.querySelector(".study-visual__explain");
    const canvas = body.querySelector("canvas");
    const updateScene = window.mountStudyScene?.(body.querySelector(".study-visual__scene"), id);

    function update() {
      const values = inputs.map((input, i) => {
        const value = input.valueAsNumber;
        const label = measure(value, visual.controls[i].unit);
        labels[i].textContent = label;
        input.setAttribute("aria-valuetext", label);
        return value;
      });

      const amounts = visual.calculate(...values);
      amounts.forEach((value, i) => {
        const row = visual.rows[i];
        const readout = readouts[i];
        const fill = readout.querySelector(".study-visual__bar span");
        readout.querySelector("strong").textContent = measure(value, row.unit);
        fill.classList.toggle("is-negative", value < 0);
        fill.style.setProperty("--fill", Math.min(Math.abs(value) / row.scale, 1));
      });
      updateScene?.(amounts);
      explain.textContent = visual.explain(...values);
      if (square) {
        const target = values[0];
        body.querySelector("[data-target]").textContent = `${target}% CP`;
        body.querySelector('[data-parts="low"]').textContent = `${graphic.high - target} parts`;
        body.querySelector('[data-parts="high"]').textContent = `${target - graphic.low} parts`;
      }
      if (curve) drawCurve(canvas, body, visual, values[0]);
    }

    inputs.forEach(input => input.addEventListener("input", update));
    body.querySelector(".study-visual__reset").addEventListener("click", () => {
      inputs.forEach((input, i) => { input.value = visual.controls[i].initial; });
      update();
    });
    if (curve) body.closest("details").addEventListener("toggle", update);
    update();
  }

  window.mountStudyVisual = function (slot, id) {
    const visual = window.studyVisuals?.[id];
    if (!slot || !visual) return;
    const { label, icon } = visualTypes[visual.type];
    slot.innerHTML = `
      <details class="study-visual study-visual--${visual.type}">
        <summary class="study-visual__summary">
          <span class="study-visual__icon study-visual__icon--${icon}" aria-hidden="true"><i></i><i></i><i></i></span>
          <span class="study-visual__heading">
            <span class="study-visual__kind">${label}</span>
            <strong>${escape(visual.title)}</strong>
          </span>
          <span class="study-visual__chevron" aria-hidden="true"></span>
        </summary>
        <div class="study-visual__body"><p class="study-visual__prompt">${escape(visual.prompt)}</p></div>
      </details>`;
    const body = slot.querySelector(".study-visual__body");
    if (visual.type === "model") mountModel(body, visual, id);
    else mountChoices(body, visual, id);
  };
}());
