(function () {
  "use strict";

  const width = 720;
  const height = 344;
  const duration = 3500;
  const palette = {
    ink: "--text", muted: "--text-muted", surface: "--surface", ground: "--bg-alt",
    line: "--border-strong", blue: "--ivri-blue", teal: "--ivri-teal", purple: "--ivri-purple",
    amber: "--ivri-amber-fill", coral: "--ivri-coral", sage: "--ivri-sage"
  };

  const scenes = {
    "u1-t14": { title: "Energy waterfall", description: "Energy leaves at each step. Move a loss slider to see which columns change.", draw: energy },
    "u1-t21": {
      title: "Inside a silage bunker", description: "Drag to rotate the cutaway or use the angle slider. Switch cases to see the effect of a leak.",
      draw: bunker, turn: true, play: "Replay airflow", captions: ["Cover keeps air out", "Air enters at the gap"]
    },
    "u2-t03": { title: "Where the nitrogen goes", description: "Thicker streams carry more nitrogen. Raise the urinary loss enough to see nitrogen come from body reserves.", draw: nitrogen },
    "u3-t08": {
      title: "Follow the feed inside a calf", description: "Simplified side view. Use the food buttons to see where each route ends.",
      draw: calf, play: "Replay feed route", captions: ["Antibody uptake in the intestine", "Milk is digested beyond the rumen", "Fermentation in the rumen"]
    },
    "u4-t06": {
      title: "Follow the feed inside a horse", description: "Simplified side view. Compare digestion in the small intestine with fermentation in the hindgut.",
      draw: horse, play: "Replay feed route", captions: ["Starch digestion in the small intestine", "Fibre fermentation in the caecum and colon"]
    }
  };

  function shape(ctx, points, fill, stroke) {
    ctx.beginPath();
    points.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y));
    ctx.closePath();
    if (fill) { ctx.fillStyle = fill; ctx.fill(); }
    if (stroke) { ctx.strokeStyle = stroke; ctx.stroke(); }
  }

  function fillPath(ctx, data, fill, stroke, lineWidth = 2) {
    const path = new Path2D(data);
    ctx.lineJoin = "round";
    if (fill) { ctx.fillStyle = fill; ctx.fill(path); }
    if (stroke) {
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = stroke;
      ctx.stroke(path);
    }
  }

  function dot(ctx, x, y, radius, fill) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = fill;
    ctx.fill();
  }

  function line(ctx, start, end, color, lineWidth = 2) {
    ctx.beginPath();
    ctx.moveTo(...start);
    ctx.lineTo(...end);
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = color;
    ctx.stroke();
  }

  function label(ctx, text, x, y, color, size = 20, weight = 650, align = "center") {
    ctx.fillStyle = color;
    ctx.textAlign = align;
    ctx.font = `${weight} ${size}px system-ui, sans-serif`;
    ctx.fillText(text, x, y);
  }

  function box(ctx, x, y, w, h, fill, border) {
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(x, y, w, h, 8);
    else ctx.rect(x, y, w, h);
    ctx.fillStyle = fill;
    ctx.fill();
    if (border) { ctx.strokeStyle = border; ctx.lineWidth = 1; ctx.stroke(); }
  }

  function energy(ctx, p, state) {
    const amounts = state.display.length ? state.display : state.value;
    if (!Array.isArray(amounts)) return;
    const names = ["Gross", "Digestible", "Metabolisable", "Net"];
    const losses = ["Faecal loss", "Urine + gas", "Heat"];
    const positions = [94, 271, 449, 626];
    const base = 268;
    const top = v => base - v * 1.83;
    line(ctx, [26, base], [694, base], p.muted, 1.25);

    positions.forEach((x, i) => {
      if (i < 3) {
        const height = amounts[i] - amounts[i + 1];
        const middle = (x + positions[i + 1]) / 2;
        line(ctx, [x + 34, top(amounts[i])], [middle, top(amounts[i])], p.muted, 1.5);
        line(ctx, [middle, top(amounts[i])], [middle, top(amounts[i + 1])], p.coral, 5);
        line(ctx, [middle, top(amounts[i + 1])], [positions[i + 1] - 34, top(amounts[i + 1])], p.muted, 1.5);
        label(ctx, losses[i], middle, 42, p.muted, 18, 550);
        label(ctx, "−" + Math.round(height), middle, 69, p.coral, 24);
      }
    });
    positions.forEach((x, i) => {
      const amount = amounts[i];
      const y = top(amount);
      box(ctx, x - 34, y, 68, Math.max(4, base - y), i === 3 ? p.sage : p.purple);
      label(ctx, Math.round(amount), x, y - 10, p.ink, 24);
      label(ctx, names[i], x, 306, p.ink, 20);
    });
  }

  function nitrogen(ctx, p, state) {
    const amounts = state.display.length ? state.display : state.value;
    if (!Array.isArray(amounts)) return;
    const [intake, absorbed, retained] = amounts;
    const faecal = intake - absorbed;
    const urinary = absorbed - retained;
    const retainedPositive = Math.max(retained, 0);
    const bodyLoss = Math.max(-retained, 0);
    const scale = 1.35;

    function stream(x1, y1, x2, y2, amount, color) {
      if (amount < 0.1) return;
      const middle = (x1 + x2) / 2;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.bezierCurveTo(middle, y1, middle, y2, x2, y2);
      ctx.lineWidth = amount * scale;
      ctx.strokeStyle = color;
      ctx.stroke();
    }

    const inputY = 157;
    const absorbedY = inputY + faecal * scale / 2;
    const urineY = 113;
    const urineFromAbsorbed = Math.min(absorbed, urinary);
    stream(72, inputY, 236, inputY, intake, p.blue);
    stream(236, absorbedY, 447, 195, absorbed, p.teal);
    stream(236, inputY - absorbed * scale / 2, 640, 54, faecal, p.amber);
    stream(447, 195 - retainedPositive * scale / 2, 640, urineY, urineFromAbsorbed, p.purple);
    stream(447, 195 + urineFromAbsorbed * scale / 2, 640, 244, retainedPositive, p.sage);
    if (bodyLoss >= 0.1) {
      stream(385, 297, 640, urineY + urinary * scale / 2, bodyLoss, p.coral);
      label(ctx, `Body N used ${Math.round(bodyLoss)}`, 376, 327, p.coral, 19);
    }
    label(ctx, `Feed ${Math.round(intake)}`, 104, 100, p.ink, 21);
    label(ctx, `Apparently absorbed ${Math.round(absorbed)}`, 329, 238, p.ink, 20);
    label(ctx, `Faeces ${Math.round(faecal)}`, 610, 25, p.ink, 21);
    label(ctx, `Urine ${Math.round(urinary)}`, 605, 178, p.ink, 21);
    label(ctx, `Retained ${Math.round(retained)}`, 607, 293, retained < 0 ? p.coral : p.ink, 21);
  }

  function bunker(ctx, p, state) {
    const leak = state.value === 1;
    const angle = state.turn * Math.PI / 180;
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    const project = ([x, y, z]) => {
      const front = z * cos - x * sin;
      return [360 + x * cos + z * sin, 222 - y * 0.83 + front * 0.49];
    };
    const plane = (left, right, near, far, level) => [[left, level, near], [right, level, near], [right, level, far], [left, level, far]];
    const surfaces = [];
    const add = (vertices, tone, bias = 0) => {
      const depth = vertices.reduce((sum, [x, y, z]) => sum + (z * cos - x * sin) * 0.85 + y * 0.46, 0) / vertices.length;
      surfaces.push({ vertices, tone, depth: depth + bias });
    };
    const cuboid = (l, r, near, far, base, top, tones) => {
      const [a, b, c, d] = plane(l, r, near, far, base);
      const [A, B, C, D] = plane(l, r, near, far, top);
      if (tones[0]) add([A, D, C, B], tones[0]);
      if (cos >= 0) add([a, A, B, b], tones[1]);
      else add([d, D, C, c], tones[1]);
      if (sin >= 0) add([a, d, D, A], tones[2]);
      else add([b, c, C, B], tones[2]);
    };
    shape(ctx, plane(-204, 204, 113, -113, -7).map(project), p.ground, p.line);
    cuboid(-148, 148, 89, -89, 0, 68, [null, p.sage, p.teal]);
    const end = cos >= 0 ? 91 : -91;
    const coveredFace = (l, r) => add([[l, 48, end], [l, 70, end], [r, 70, end], [r, 48, end]], p.blue);
    coveredFace(-148, leak ? 28 : 148);
    if (leak) coveredFace(68, 148);
    add(plane(-149, leak ? 27 : 149, 90, -90, 70), p.blue, 1);
    if (leak) {
      add(plane(67, 149, 90, -90, 70), p.blue, 1);
      add(plane(27, 67, 89, -89, 68), p.sage);
      add([[27, 70, 90], [39, 82, 88], [40, 86, -90], [27, 70, -90]], p.teal, 3);
    }
    const wall = [p.surface, p.muted, p.ground];
    cuboid(-170, -148, 100, -100, 0, 104, wall);
    cuboid(148, 170, 100, -100, 0, 104, wall);
    surfaces.sort((a, b) => a.depth - b.depth).forEach(({ vertices, tone }) => {
      ctx.lineWidth = 1.2;
      shape(ctx, vertices.map(project), tone, p.line);
    });

    const seam = project([49, 74, 5]);
    if (leak) {
      const strength = state.phase >= 0 ? Math.sin(state.phase * Math.PI * 3) : 0;
      ctx.save();
      ctx.globalAlpha = 0.25 + strength * 0.12;
      dot(ctx, ...seam, 21, p.amber);
      ctx.restore();
      dot(ctx, ...seam, 7, p.coral);
      if (state.phase >= 0) {
        for (let i = 0; i < 8; i++) {
          const progress = (state.phase * 2.2 + i / 8) % 1;
          const originX = seam[0] + (i % 2 ? 116 : -116) * (1 - progress);
          const originY = seam[1] - (71 + 14 * (i % 3)) * (1 - progress);
          dot(ctx, originX, originY, 3 + progress * 3, p.amber);
        }
      }
    }
    line(ctx, [360, 53], leak ? seam : project([0, 70, 0]), leak ? p.coral : p.teal, 2);
    box(ctx, 234, 17, 252, 40, p.surface, p.line);
    label(ctx, leak ? "Air enters at the gap" : "Cover keeps air out", 360, 44, leak ? p.coral : p.ink, 20);
    label(ctx, leak ? "Exposed forage can heat" : "Packed forage under cover", 360, 324, p.ink, 20);
  }

  const calfSilhouette = "M104 134 L73 112 Q62 95 69 72 Q85 74 104 85 Q116 65 139 70 L155 91 L181 133 Q218 113 267 116 Q331 96 416 113 Q518 102 564 139 Q590 167 572 224 L562 287 L541 287 L540 236 L518 209 L497 216 L500 291 L479 291 L469 233 Q405 266 315 236 L293 291 L269 291 L269 235 L244 210 L229 280 L204 280 L194 214 Q175 191 171 172 L143 166 L114 175 Q83 170 91 147 Z";
  const horseSilhouette = "M95 117 Q81 112 87 93 L98 66 L103 34 L119 60 L137 35 L142 70 Q179 100 212 137 Q247 106 303 118 Q356 129 408 120 Q474 104 537 134 Q571 149 573 184 L557 230 L571 286 L546 286 L527 241 L511 223 L499 292 L477 292 L480 224 Q407 263 291 229 L276 287 L252 287 L253 228 L234 215 L215 288 L193 288 L193 200 Q166 176 152 134 L135 145 L104 149 Q87 146 91 133 Z";
  const rumen = "M310 155 C339 134 416 129 448 157 C477 181 457 216 421 224 C365 238 292 219 293 185 Q293 166 310 155 Z";
  const abomasum = "M319 215 C352 208 379 220 410 220 C426 220 429 230 410 241 Q370 258 327 238 Q307 226 319 215 Z";
  const calfIntestine = "M422 215 Q425 200 444 207 Q480 191 489 210 Q506 228 484 237 Q501 245 477 255 Q450 261 438 243 Q418 247 422 215 Z";
  const horseStomach = "M260 156 Q282 138 312 149 Q334 159 317 184 Q298 199 269 186 Q250 178 260 156 Z";
  const horseIntestine = "M319 178 Q334 152 364 162 Q408 147 427 170 Q441 185 420 200 Q429 218 401 224 Q355 237 326 209 Q304 194 319 178 Z";
  const horseHindgut = "M423 220 Q458 213 475 190 Q484 172 467 168 Q450 173 448 183 Q438 192 437 179 Q433 165 463 151 Q496 145 515 173 Q533 202 510 220 Q493 241 450 248 Q390 268 339 243 Q325 236 336 226 Q355 226 384 236 Q405 239 423 220 Z";

  function anatomy(ctx, p, outline, tail, organPaths, route, callout, state) {
    fillPath(ctx, tail, null, p.muted, 6);
    line(ctx, [74, 292], [648, 292], p.line, 1.5);
    fillPath(ctx, outline, p.ground, p.muted, 2.8);
    dot(ctx, 115, 103, 4, p.ink);
    organPaths.forEach(([organ, color, active]) => {
      ctx.save();
      ctx.globalAlpha = active ? 0.42 : 0.15;
      fillPath(ctx, organ, color);
      ctx.restore();
      fillPath(ctx, organ, null, active ? color : p.muted, active ? 3.5 : 1.5);
    });
    // Draw the path beneath moving markers so the full route is also legible with motion off.
    ctx.lineCap = "round";
    for (let i = 1; i < route.length; i++) line(ctx, route[i - 1], route[i], p.blue, 5);
    route.forEach(([x, y], i) => {
      if (i === 0 || i === route.length - 1) {
        dot(ctx, x, y, 9, p.surface);
        dot(ctx, x, y, 6, p.blue);
      }
    });
    if (state.phase >= 0) animateRoute(ctx, route, p, state.phase);
    line(ctx, route.at(-1), [569, 80], p.blue, 1.8);
    box(ctx, 388, 35, 290, 48, p.surface, p.line);
    label(ctx, callout, 533, 66, p.ink, 22);
  }

  function animateRoute(ctx, route, p, phase) {
    const distances = route.slice(1).map(([x, y], i) => Math.hypot(x - route[i][0], y - route[i][1]));
    const length = distances.reduce((sum, distance) => sum + distance, 0);
    for (let i = 0; i < 7; i++) {
      let position = ((phase * 1.5 + i / 7) % 1) * length;
      let index = 0;
      while (index < distances.length - 1 && position > distances[index]) position -= distances[index++];
      const start = route[index];
      const end = route[index + 1];
      const fraction = position / distances[index];
      dot(ctx, start[0] + (end[0] - start[0]) * fraction, start[1] + (end[1] - start[1]) * fraction, 5.5, p.amber);
    }
  }

  function calf(ctx, p, state) {
    const starter = state.value === 2;
    const mouth = [[107, 157], [148, 151], [181, 153], [221, 164], [280, 168]];
    const route = mouth.concat(starter ? [[319, 177], [350, 189], [382, 184]] :
      [[299, 194], [325, 225], [365, 232], [416, 224], [458, 227]]);
    anatomy(ctx, p, calfSilhouette, "M557 144 C594 138 615 151 602 184 Q594 203 606 236",
      [[rumen, p.teal, starter], [abomasum, p.purple, !starter], [calfIntestine, p.sage, !starter]],
      route, starter ? "Fermentation in the rumen" : state.value === 0 ? "Antibody uptake in intestine" : "Milk digested after rumen", state);
    label(ctx, "Rumen", 355, 133, starter ? p.ink : p.muted, 18);
    label(ctx, "Abomasum", 374, 272, starter ? p.muted : p.ink, 18);
  }

  function horse(ctx, p, state) {
    const fibre = state.value === 1;
    const mouth = [[106, 131], [133, 120], [161, 130], [212, 162], [267, 169], [294, 172], [333, 183], [376, 187]];
    const route = fibre ? mouth.concat([[417, 192], [457, 174], [492, 176], [506, 201], [477, 225], [439, 237]]) : mouth;
    anatomy(ctx, p, horseSilhouette, "M547 144 Q605 113 621 150 Q639 186 616 237 Q609 256 630 271",
      [[horseStomach, p.purple, false], [horseIntestine, p.teal, !fibre], [horseHindgut, p.amber, fibre]],
      route, fibre ? "Caecum and colon" : "Small intestine", state);
    label(ctx, "Stomach", 282, 136, p.muted, 18);
    label(ctx, "Hindgut", 484, 268, fibre ? p.ink : p.muted, 18);
  }

  window.mountStudyScene = function (slot, id) {
    const scene = scenes[id];
    if (!scene) return () => {};
    slot.innerHTML = `<figure class="study-scene">
      <figcaption><strong>${scene.title}</strong><p>${scene.description}</p></figcaption>
      <canvas width="${width * 2}" height="${height * 2}" aria-hidden="true"></canvas>
      ${scene.captions ? '<p class="study-scene__caption" aria-hidden="true"></p>' : ""}
      <div class="study-scene__controls"${scene.play || scene.turn ? "" : " hidden"}>
        ${scene.turn ? `<label for="study-scene-turn-${id}">Turn the model</label>
          <input id="study-scene-turn-${id}" type="range" min="-150" max="150" value="-31" step="1">` : ""}
        ${scene.play ? `<button type="button" class="study-visual__reset">${scene.play}</button>` : ""}
      </div>
    </figure>`;
    const canvas = slot.querySelector("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return () => {};
    ctx.scale(2, 2);
    const details = slot.closest("details");
    const turn = slot.querySelector("input");
    const replay = slot.querySelector("button");
    const caption = slot.querySelector(".study-scene__caption");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const state = { value: 0, display: [], turn: -31, phase: -1 };
    let frame;

    function draw() {
      const styles = getComputedStyle(slot);
      const colors = {};
      for (const [key, token] of Object.entries(palette)) colors[key] = styles.getPropertyValue(token).trim();
      ctx.clearRect(0, 0, width, height);
      ctx.save();
      scene.draw(ctx, colors, state);
      ctx.restore();
    }

    function animate(ms, update, end) {
      cancelAnimationFrame(frame);
      if (!details.open || reducedMotion.matches) { end(); draw(); return; }
      let start;
      function tick(now) {
        start ??= now;
        const progress = Math.min((now - start) / ms, 1);
        if (progress < 1 && slot.isConnected && details.open) {
          update(progress);
          draw();
          frame = requestAnimationFrame(tick);
        } else { end(); draw(); }
      }
      frame = requestAnimationFrame(tick);
    }

    function play() {
      if (!replay || replay.disabled) return;
      animate(duration, phase => { state.phase = phase; }, () => { state.phase = -1; });
    }

    if (turn) {
      function rotate() {
        state.turn = turn.valueAsNumber;
        turn.setAttribute("aria-valuetext", `${state.turn} degrees`);
        draw();
      }
      turn.addEventListener("input", rotate);
      rotate();

      let drag;
      canvas.classList.add("study-scene__draggable");
      canvas.addEventListener("pointerdown", event => {
        if (!event.isPrimary || event.button !== 0) return;
        drag = { x: event.clientX, turn: state.turn, pointer: event.pointerId };
        canvas.setPointerCapture(event.pointerId);
      });
      canvas.addEventListener("pointermove", event => {
        if (!drag || event.pointerId !== drag.pointer || !(event.buttons & 1)) return;
        turn.value = Math.max(-150, Math.min(150, drag.turn + (event.clientX - drag.x) * 0.75));
        rotate();
      });
      ["pointerup", "pointercancel", "lostpointercapture"].forEach(type => {
        canvas.addEventListener(type, event => {
          if (drag && event.pointerId === drag.pointer) drag = null;
        });
      });
    }
    if (replay) replay.addEventListener("click", play);
    details.addEventListener("toggle", () => {
      if (details.open) { draw(); play(); }
    });

    return value => {
      state.value = value;
      if (Array.isArray(value)) {
        const start = state.display.length ? state.display.slice() : value;
        animate(220, progress => {
          state.display = value.map((number, i) => start[i] + (number - start[i]) * progress);
        }, () => { state.display = value; });
      } else {
        if (caption) caption.textContent = scene.captions[value];
        if (replay) replay.disabled = reducedMotion.matches || (scene.turn && value === 0);
        cancelAnimationFrame(frame);
        state.phase = -1;
        draw();
        play();
      }
    };
  };
}());
