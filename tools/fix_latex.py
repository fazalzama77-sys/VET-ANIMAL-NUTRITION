"""Convert raw LaTeX math ($...$, $$...$$) and markdown **bold** inside data
strings into plain HTML, since the app has no math renderer.

Usage:  python tools/fix_latex.py            (rewrites files in place)
Only string literals containing '$' or '**' are touched; nothing else changes.
"""
import json, re, sys, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
FILES = sorted(ROOT.glob("data/*.JS")) + sorted(ROOT.glob("tools/build_unit*.py"))

SYMBOLS = {
    "times": "×", "cdot": "·", "div": "÷", "pm": "±", "approx": "≈", "ge": "≥", "geq": "≥",
    "le": "≤", "leq": "≤", "neq": "≠", "rightarrow": "→", "to": "→", "longrightarrow": "⟶",
    "leftarrow": "←", "Rightarrow": "⇒", "implies": "⇒", "rightleftharpoons": "⇌",
    "uparrow": "↑", "downarrow": "↓", "Downarrow": "⇓", "alpha": "α", "beta": "β",
    "gamma": "γ", "delta": "δ", "Delta": "Δ", "mu": "μ", "omega": "ω", "epsilon": "ε",
    "varepsilon": "ε", "lambda": "λ", "pi": "π", "sigma": "σ", "Sigma": "Σ", "sum": "Σ",
    "circ": "°", "bullet": "•", "dots": "…", "ldots": "…", "cdots": "⋯", "infty": "∞",
    "max": "max", "min": "min", "log": "log", "ln": "ln",
    "quad": "&emsp;", "qquad": "&emsp;&emsp;",
}
TEXT_CMDS = {"text", "mathrm", "textrm", "mathit", "operatorname"}


def read_group(s, i):
    """s[i] == '{' -> (inner, index after closing brace)."""
    depth = 0
    for j in range(i, len(s)):
        if s[j] == "{":
            depth += 1
        elif s[j] == "}":
            depth -= 1
            if depth == 0:
                return s[i + 1:j], j + 1
    return s[i + 1:], len(s)


def read_arg(s, i):
    while i < len(s) and s[i] == " ":
        i += 1
    if i < len(s) and s[i] == "{":
        return read_group(s, i)
    if i < len(s) and s[i] == "\\":
        m = re.match(r"\\([A-Za-z]+|.)", s[i:])
        return s[i:i + m.end()], i + m.end()
    return s[i:i + 1], i + 1


def matrix(body):
    rows = [r for r in re.split(r"\\\\", body) if r.strip()]
    html = '<table class="eq-matrix">'
    for r in rows:
        html += "<tr>" + "".join("<td>%s</td>" % conv(c.strip()) for c in r.split("&")) + "</tr>"
    return html + "</table>"


def conv(s):
    out, i = [], 0
    while i < len(s):
        c = s[i]
        if c == "\\":
            m = re.match(r"\\([A-Za-z]+|.)", s[i:])
            name, i = m.group(1), i + m.end()
            if name == "begin":
                env, i = read_arg(s, i)
                end = s.find("\\end{%s}" % env, i)
                end = len(s) if end < 0 else end
                out.append(matrix(s[i:end]))
                i = end + len("\\end{%s}" % env)
            elif name in TEXT_CMDS:
                a, i = read_arg(s, i)
                out.append(conv(a))
            elif name == "mathbf" or name == "textbf" or name == "boldsymbol":
                a, i = read_arg(s, i)
                out.append("<b>%s</b>" % conv(a))
            elif name == "frac" or name == "dfrac":
                a, i = read_arg(s, i)
                b, i = read_arg(s, i)
                out.append('<span class="frac"><span>%s</span><span>%s</span></span>' % (conv(a), conv(b)))
            elif name == "sqrt":
                a, i = read_arg(s, i)
                out.append("√(%s)" % conv(a))
            elif name == "xrightarrow":
                a, i = read_arg(s, i)
                out.append('<span class="xarrow"><small>%s</small>⟶</span>' % conv(a))
            elif name == "bar" or name == "overline":
                a, i = read_arg(s, i)
                out.append(conv(a) + "̄")
            elif name == "not":
                a, i = read_arg(s, i)
                out.append(conv(a) + "̸")
            elif name in ("left", "right"):
                if i < len(s) and s[i] == ".":
                    i += 1
            elif name in SYMBOLS:
                out.append(SYMBOLS[name])
            elif name in "%$&#_{}":
                out.append(name)
            elif name in (",", ";", ":", " ", "!"):
                out.append(" " if name != "!" else "")
            elif name == "\\":
                out.append("<br>")
            else:
                raise ValueError("unknown command \\" + name)
        elif c in "_^":
            a, i = read_arg(s, i + 1)
            tag = "sub" if c == "_" else "sup"
            out.append("<%s>%s</%s>" % (tag, conv(a), tag))
        elif c == "{":
            a, i = read_group(s, i)
            out.append(conv(a))
        elif c == "}":
            i += 1
        else:
            out.append(c)
            i += 1
    return "".join(out)


def convert(text):
    text = re.sub(r"\$\$(.+?)\$\$", lambda m: '<span class="eq-block">%s</span>' % conv(m.group(1).strip()), text, flags=re.S)
    text = re.sub(r"\$(.+?)\$", lambda m: '<span class="eq">%s</span>' % conv(m.group(1)), text, flags=re.S)
    text = re.sub(r"\*\*(.+?)\*\*", r"<b>\1</b>", text, flags=re.S)
    return text


STR = re.compile(r'"(?:[^"\\\n]|\\.)*"')


def fix_file(path):
    src = path.read_text(encoding="utf-8")
    n = 0

    def repl(m):
        nonlocal n
        lit = m.group(0)
        if "$" not in lit and "**" not in lit:
            return lit
        val = json.loads(lit)
        if val.count("$") % 2:
            raise ValueError("%s: odd number of $ in %r" % (path.name, val[:120]))
        new = convert(val)
        if new == val:
            return lit
        n += 1
        return json.dumps(new, ensure_ascii=False)

    out = STR.sub(repl, src)
    if out != src:
        path.write_text(out, encoding="utf-8")
    print("%-28s %d strings fixed" % (path.name, n))


if __name__ == "__main__":
    for p in FILES:
        fix_file(p)
