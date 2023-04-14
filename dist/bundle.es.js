import { defineComponent as T, h as ct, openBlock as d, createElementBlock as m, renderSlot as U, inject as Fe, Fragment as q, createElementVNode as w, normalizeStyle as ie, resolveComponent as z, createVNode as B, withCtx as L, resolveDirective as Ne, withDirectives as oe, normalizeClass as J, withKeys as ae, withModifiers as re, vModelText as ve, renderList as Z, createTextVNode as G, toDisplayString as F, createCommentVNode as M, createBlock as D, mergeProps as De, vModelDynamic as pt, Teleport as ft, Transition as de, setBlockTracking as Pe, TransitionGroup as $e, useCssVars as Ee, vModelRadio as mt, vModelSelect as gt } from "vue";
import A from "lodash.get";
import { directive as Be } from "vue3-click-away";
import ke from "@chriscdn/promise-semaphore";
import { format as Ke } from "date-fns";
import { disableBodyScroll as ht, enableBodyScroll as _t } from "body-scroll-lock";
import bt from "@googlicius/build-url";
import yt from "js-cookie";
import { Session as vt } from "@kweli/cs-rest";
const $t = {
  props: {
    disabled: {
      type: Boolean,
      default: !1
    },
    link: {
      type: Boolean,
      default: !1
    },
    target: {
      type: String,
      default: "_self"
    },
    nuxt: {
      type: Boolean,
      default: !1
    },
    to: {
      type: [String, Object],
      default: null
    },
    href: {
      type: String,
      default: null
    }
  },
  computed: {
    isClickable() {
      return !this.disabled && !!(this.$attrs.click || this.link || this.to || this.href);
    }
  },
  methods: {
    click(e) {
      this.$emit("click", e);
    },
    generateRouteLink() {
      let e = "div", t = {};
      return this.href ? (e = "a", t = {
        attrs: {
          href: this.href,
          target: this.target
        }
      }) : this.to && (e = this.nuxt ? "nuxt-link" : "router-link", t = {
        props: {
          to: this.to
        }
      }), { tag: e, data: t };
    }
  }
}, X = (e, t = "px") => {
  if (!(e == null || e === ""))
    return isNaN(+e) ? String(e) : `${Number(e)}${t}`;
}, ce = T({
  props: {
    height: {
      type: [Number, String],
      default: null
    },
    maxHeight: {
      type: [Number, String],
      default: null
    },
    maxWidth: {
      type: [Number, String],
      default: null
    },
    minHeight: {
      type: [Number, String],
      default: null
    },
    minWidth: {
      type: [Number, String],
      default: null
    },
    width: {
      type: [Number, String],
      default: null
    }
  },
  computed: {
    measurableStyles() {
      const e = {}, t = X(this.height), n = X(this.minHeight), i = X(this.minWidth), l = X(this.maxHeight), s = X(this.maxWidth), r = X(this.width);
      return t && (e.height = t), n && (e.minHeight = n), i && (e.minWidth = i), l && (e.maxHeight = l), s && (e.maxWidth = s), r && (e.width = r), e;
    }
  }
}), kt = T({
  mixins: [ce, $t],
  computed: {
    classObj() {
      return {
        "k-card": !0,
        "k-card-clickable": this.isClickable
      };
    }
  },
  methods: {
    renderCard() {
      const { tag: e, data: t } = this.generateRouteLink();
      return ct(
        e,
        {
          ...t,
          class: this.classObj,
          style: [this.measurableStyles]
        },
        [...this.$slots.default()]
      );
    }
  },
  render() {
    return this.renderCard();
  }
});
const wt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: kt
}, Symbol.toStringTag, { value: "Module" })), St = T({});
const P = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, l] of t)
    n[i] = l;
  return n;
}, Ot = { class: "k-card-actions" };
function xt(e, t, n, i, l, s) {
  return d(), m("div", Ot, [
    U(e.$slots, "default")
  ]);
}
const jt = /* @__PURE__ */ P(St, [["render", xt]]), Tt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: jt
}, Symbol.toStringTag, { value: "Module" })), Ct = T({});
const Pt = { class: "k-card-text" };
function Kt(e, t, n, i, l, s) {
  return d(), m("div", Pt, [
    U(e.$slots, "default")
  ]);
}
const Mt = /* @__PURE__ */ P(Ct, [["render", Kt]]), At = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Mt
}, Symbol.toStringTag, { value: "Module" })), Vt = T({});
const zt = { class: "k-card-title" };
function Lt(e, t, n, i, l, s) {
  return d(), m("div", zt, [
    U(e.$slots, "default")
  ]);
}
const Ft = /* @__PURE__ */ P(Vt, [["render", Lt]]), Nt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ft
}, Symbol.toStringTag, { value: "Module" })), Dt = T({
  setup() {
    return { config: Fe("config", {}) };
  }
}), Et = /* @__PURE__ */ w("hr", null, null, -1), Bt = ["href"];
function Ut(e, t, n, i, l, s) {
  return d(), m(q, null, [
    Et,
    w("a", {
      href: `${e.config.baseURL}?func=admin.index`
    }, "Admin Home", 8, Bt)
  ], 64);
}
const Rt = /* @__PURE__ */ P(Dt, [["render", Ut]]), It = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Rt
}, Symbol.toStringTag, { value: "Module" }));
var Ue = {}, Re = {}, we = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: () => t
  });
  function t(n) {
    if (n = `${n}`, n === "0")
      return "0";
    if (/^[+-]?(\d+|\d*\.\d+)(e[+-]?\d+)?(%|\w+)?$/.test(n))
      return n.replace(/^[+-]?/, (l) => l === "-" ? "" : "-");
    let i = [
      "var",
      "calc",
      "min",
      "max",
      "clamp"
    ];
    for (const l of i)
      if (n.includes(`${l}(`))
        return `calc(${n} * -1)`;
  }
})(we);
var Ie = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: () => t
  });
  const t = [
    "preflight",
    "container",
    "accessibility",
    "pointerEvents",
    "visibility",
    "position",
    "inset",
    "isolation",
    "zIndex",
    "order",
    "gridColumn",
    "gridColumnStart",
    "gridColumnEnd",
    "gridRow",
    "gridRowStart",
    "gridRowEnd",
    "float",
    "clear",
    "margin",
    "boxSizing",
    "lineClamp",
    "display",
    "aspectRatio",
    "height",
    "maxHeight",
    "minHeight",
    "width",
    "minWidth",
    "maxWidth",
    "flex",
    "flexShrink",
    "flexGrow",
    "flexBasis",
    "tableLayout",
    "captionSide",
    "borderCollapse",
    "borderSpacing",
    "transformOrigin",
    "translate",
    "rotate",
    "skew",
    "scale",
    "transform",
    "animation",
    "cursor",
    "touchAction",
    "userSelect",
    "resize",
    "scrollSnapType",
    "scrollSnapAlign",
    "scrollSnapStop",
    "scrollMargin",
    "scrollPadding",
    "listStylePosition",
    "listStyleType",
    "listStyleImage",
    "appearance",
    "columns",
    "breakBefore",
    "breakInside",
    "breakAfter",
    "gridAutoColumns",
    "gridAutoFlow",
    "gridAutoRows",
    "gridTemplateColumns",
    "gridTemplateRows",
    "flexDirection",
    "flexWrap",
    "placeContent",
    "placeItems",
    "alignContent",
    "alignItems",
    "justifyContent",
    "justifyItems",
    "gap",
    "space",
    "divideWidth",
    "divideStyle",
    "divideColor",
    "divideOpacity",
    "placeSelf",
    "alignSelf",
    "justifySelf",
    "overflow",
    "overscrollBehavior",
    "scrollBehavior",
    "textOverflow",
    "hyphens",
    "whitespace",
    "wordBreak",
    "borderRadius",
    "borderWidth",
    "borderStyle",
    "borderColor",
    "borderOpacity",
    "backgroundColor",
    "backgroundOpacity",
    "backgroundImage",
    "gradientColorStops",
    "boxDecorationBreak",
    "backgroundSize",
    "backgroundAttachment",
    "backgroundClip",
    "backgroundPosition",
    "backgroundRepeat",
    "backgroundOrigin",
    "fill",
    "stroke",
    "strokeWidth",
    "objectFit",
    "objectPosition",
    "padding",
    "textAlign",
    "textIndent",
    "verticalAlign",
    "fontFamily",
    "fontSize",
    "fontWeight",
    "textTransform",
    "fontStyle",
    "fontVariantNumeric",
    "lineHeight",
    "letterSpacing",
    "textColor",
    "textOpacity",
    "textDecoration",
    "textDecorationColor",
    "textDecorationStyle",
    "textDecorationThickness",
    "textUnderlineOffset",
    "fontSmoothing",
    "placeholderColor",
    "placeholderOpacity",
    "caretColor",
    "accentColor",
    "opacity",
    "backgroundBlendMode",
    "mixBlendMode",
    "boxShadow",
    "boxShadowColor",
    "outlineStyle",
    "outlineWidth",
    "outlineOffset",
    "outlineColor",
    "ringWidth",
    "ringColor",
    "ringOpacity",
    "ringOffsetWidth",
    "ringOffsetColor",
    "blur",
    "brightness",
    "contrast",
    "dropShadow",
    "grayscale",
    "hueRotate",
    "invert",
    "saturate",
    "sepia",
    "filter",
    "backdropBlur",
    "backdropBrightness",
    "backdropContrast",
    "backdropGrayscale",
    "backdropHueRotate",
    "backdropInvert",
    "backdropOpacity",
    "backdropSaturate",
    "backdropSepia",
    "backdropFilter",
    "transitionProperty",
    "transitionDelay",
    "transitionDuration",
    "transitionTimingFunction",
    "willChange",
    "content"
  ];
})(Ie);
var We = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: () => t
  });
  function t(n, i) {
    return n === void 0 ? i : Array.isArray(n) ? n : [
      ...new Set(i.filter((s) => n !== !1 && n[s] !== !1).concat(Object.keys(n).filter((s) => n[s] !== !1)))
    ];
  }
})(We);
var qe = {}, pe = {}, ue = {}, Wt = {
  get exports() {
    return ue;
  },
  set exports(e) {
    ue = e;
  }
}, E = String, He = function() {
  return { isColorSupported: !1, reset: E, bold: E, dim: E, italic: E, underline: E, inverse: E, hidden: E, strikethrough: E, black: E, red: E, green: E, yellow: E, blue: E, magenta: E, cyan: E, white: E, gray: E, bgBlack: E, bgRed: E, bgGreen: E, bgYellow: E, bgBlue: E, bgMagenta: E, bgCyan: E, bgWhite: E };
};
Wt.exports = He();
ue.createColors = He;
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(u, o) {
    for (var p in o)
      Object.defineProperty(u, p, {
        enumerable: !0,
        get: o[p]
      });
  }
  t(e, {
    dim: () => r,
    default: () => a
  });
  const n = /* @__PURE__ */ i(ue);
  function i(u) {
    return u && u.__esModule ? u : {
      default: u
    };
  }
  let l = /* @__PURE__ */ new Set();
  function s(u, o, p) {
    typeof process < "u" && process.env.JEST_WORKER_ID || p && l.has(p) || (p && l.add(p), console.warn(""), o.forEach((K) => console.warn(u, "-", K)));
  }
  function r(u) {
    return n.default.dim(u);
  }
  const a = {
    info(u, o) {
      s(n.default.bold(n.default.cyan("info")), ...Array.isArray(u) ? [
        u
      ] : [
        o,
        u
      ]);
    },
    warn(u, o) {
      s(n.default.bold(n.default.yellow("warn")), ...Array.isArray(u) ? [
        u
      ] : [
        o,
        u
      ]);
    },
    risk(u, o) {
      s(n.default.bold(n.default.magenta("risk")), ...Array.isArray(u) ? [
        u
      ] : [
        o,
        u
      ]);
    }
  };
})(pe);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: () => l
  });
  const t = /* @__PURE__ */ n(pe);
  function n(s) {
    return s && s.__esModule ? s : {
      default: s
    };
  }
  function i({ version: s, from: r, to: a }) {
    t.default.warn(`${r}-color-renamed`, [
      `As of Tailwind CSS ${s}, \`${r}\` has been renamed to \`${a}\`.`,
      "Update your configuration file to silence this warning."
    ]);
  }
  const l = {
    inherit: "inherit",
    current: "currentColor",
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    slate: {
      50: "#f8fafc",
      100: "#f1f5f9",
      200: "#e2e8f0",
      300: "#cbd5e1",
      400: "#94a3b8",
      500: "#64748b",
      600: "#475569",
      700: "#334155",
      800: "#1e293b",
      900: "#0f172a",
      950: "#020617"
    },
    gray: {
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
      950: "#030712"
    },
    zinc: {
      50: "#fafafa",
      100: "#f4f4f5",
      200: "#e4e4e7",
      300: "#d4d4d8",
      400: "#a1a1aa",
      500: "#71717a",
      600: "#52525b",
      700: "#3f3f46",
      800: "#27272a",
      900: "#18181b",
      950: "#09090b"
    },
    neutral: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#e5e5e5",
      300: "#d4d4d4",
      400: "#a3a3a3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#171717",
      950: "#0a0a0a"
    },
    stone: {
      50: "#fafaf9",
      100: "#f5f5f4",
      200: "#e7e5e4",
      300: "#d6d3d1",
      400: "#a8a29e",
      500: "#78716c",
      600: "#57534e",
      700: "#44403c",
      800: "#292524",
      900: "#1c1917",
      950: "#0c0a09"
    },
    red: {
      50: "#fef2f2",
      100: "#fee2e2",
      200: "#fecaca",
      300: "#fca5a5",
      400: "#f87171",
      500: "#ef4444",
      600: "#dc2626",
      700: "#b91c1c",
      800: "#991b1b",
      900: "#7f1d1d",
      950: "#450a0a"
    },
    orange: {
      50: "#fff7ed",
      100: "#ffedd5",
      200: "#fed7aa",
      300: "#fdba74",
      400: "#fb923c",
      500: "#f97316",
      600: "#ea580c",
      700: "#c2410c",
      800: "#9a3412",
      900: "#7c2d12",
      950: "#431407"
    },
    amber: {
      50: "#fffbeb",
      100: "#fef3c7",
      200: "#fde68a",
      300: "#fcd34d",
      400: "#fbbf24",
      500: "#f59e0b",
      600: "#d97706",
      700: "#b45309",
      800: "#92400e",
      900: "#78350f",
      950: "#451a03"
    },
    yellow: {
      50: "#fefce8",
      100: "#fef9c3",
      200: "#fef08a",
      300: "#fde047",
      400: "#facc15",
      500: "#eab308",
      600: "#ca8a04",
      700: "#a16207",
      800: "#854d0e",
      900: "#713f12",
      950: "#422006"
    },
    lime: {
      50: "#f7fee7",
      100: "#ecfccb",
      200: "#d9f99d",
      300: "#bef264",
      400: "#a3e635",
      500: "#84cc16",
      600: "#65a30d",
      700: "#4d7c0f",
      800: "#3f6212",
      900: "#365314",
      950: "#1a2e05"
    },
    green: {
      50: "#f0fdf4",
      100: "#dcfce7",
      200: "#bbf7d0",
      300: "#86efac",
      400: "#4ade80",
      500: "#22c55e",
      600: "#16a34a",
      700: "#15803d",
      800: "#166534",
      900: "#14532d",
      950: "#052e16"
    },
    emerald: {
      50: "#ecfdf5",
      100: "#d1fae5",
      200: "#a7f3d0",
      300: "#6ee7b7",
      400: "#34d399",
      500: "#10b981",
      600: "#059669",
      700: "#047857",
      800: "#065f46",
      900: "#064e3b",
      950: "#022c22"
    },
    teal: {
      50: "#f0fdfa",
      100: "#ccfbf1",
      200: "#99f6e4",
      300: "#5eead4",
      400: "#2dd4bf",
      500: "#14b8a6",
      600: "#0d9488",
      700: "#0f766e",
      800: "#115e59",
      900: "#134e4a",
      950: "#042f2e"
    },
    cyan: {
      50: "#ecfeff",
      100: "#cffafe",
      200: "#a5f3fc",
      300: "#67e8f9",
      400: "#22d3ee",
      500: "#06b6d4",
      600: "#0891b2",
      700: "#0e7490",
      800: "#155e75",
      900: "#164e63",
      950: "#083344"
    },
    sky: {
      50: "#f0f9ff",
      100: "#e0f2fe",
      200: "#bae6fd",
      300: "#7dd3fc",
      400: "#38bdf8",
      500: "#0ea5e9",
      600: "#0284c7",
      700: "#0369a1",
      800: "#075985",
      900: "#0c4a6e",
      950: "#082f49"
    },
    blue: {
      50: "#eff6ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8",
      800: "#1e40af",
      900: "#1e3a8a",
      950: "#172554"
    },
    indigo: {
      50: "#eef2ff",
      100: "#e0e7ff",
      200: "#c7d2fe",
      300: "#a5b4fc",
      400: "#818cf8",
      500: "#6366f1",
      600: "#4f46e5",
      700: "#4338ca",
      800: "#3730a3",
      900: "#312e81",
      950: "#1e1b4b"
    },
    violet: {
      50: "#f5f3ff",
      100: "#ede9fe",
      200: "#ddd6fe",
      300: "#c4b5fd",
      400: "#a78bfa",
      500: "#8b5cf6",
      600: "#7c3aed",
      700: "#6d28d9",
      800: "#5b21b6",
      900: "#4c1d95",
      950: "#2e1065"
    },
    purple: {
      50: "#faf5ff",
      100: "#f3e8ff",
      200: "#e9d5ff",
      300: "#d8b4fe",
      400: "#c084fc",
      500: "#a855f7",
      600: "#9333ea",
      700: "#7e22ce",
      800: "#6b21a8",
      900: "#581c87",
      950: "#3b0764"
    },
    fuchsia: {
      50: "#fdf4ff",
      100: "#fae8ff",
      200: "#f5d0fe",
      300: "#f0abfc",
      400: "#e879f9",
      500: "#d946ef",
      600: "#c026d3",
      700: "#a21caf",
      800: "#86198f",
      900: "#701a75",
      950: "#4a044e"
    },
    pink: {
      50: "#fdf2f8",
      100: "#fce7f3",
      200: "#fbcfe8",
      300: "#f9a8d4",
      400: "#f472b6",
      500: "#ec4899",
      600: "#db2777",
      700: "#be185d",
      800: "#9d174d",
      900: "#831843",
      950: "#500724"
    },
    rose: {
      50: "#fff1f2",
      100: "#ffe4e6",
      200: "#fecdd3",
      300: "#fda4af",
      400: "#fb7185",
      500: "#f43f5e",
      600: "#e11d48",
      700: "#be123c",
      800: "#9f1239",
      900: "#881337",
      950: "#4c0519"
    },
    get lightBlue() {
      return i({
        version: "v2.2",
        from: "lightBlue",
        to: "sky"
      }), this.sky;
    },
    get warmGray() {
      return i({
        version: "v3.0",
        from: "warmGray",
        to: "stone"
      }), this.stone;
    },
    get trueGray() {
      return i({
        version: "v3.0",
        from: "trueGray",
        to: "neutral"
      }), this.neutral;
    },
    get coolGray() {
      return i({
        version: "v3.0",
        from: "coolGray",
        to: "gray"
      }), this.gray;
    },
    get blueGray() {
      return i({
        version: "v3.0",
        from: "blueGray",
        to: "slate"
      }), this.slate;
    }
  };
})(qe);
var Ge = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "defaults", {
    enumerable: !0,
    get: () => t
  });
  function t(n, ...i) {
    for (let r of i) {
      for (let a in r) {
        var l;
        !(n == null || (l = n.hasOwnProperty) === null || l === void 0) && l.call(n, a) || (n[a] = r[a]);
      }
      for (let a of Object.getOwnPropertySymbols(r)) {
        var s;
        !(n == null || (s = n.hasOwnProperty) === null || s === void 0) && s.call(n, a) || (n[a] = r[a]);
      }
    }
    return n;
  }
})(Ge);
var Qe = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "toPath", {
    enumerable: !0,
    get: () => t
  });
  function t(n) {
    if (Array.isArray(n))
      return n;
    let i = n.split("[").length - 1, l = n.split("]").length - 1;
    if (i !== l)
      throw new Error(`Path is invalid. Has unbalanced brackets: ${n}`);
    return n.split(/\.(?![^\[]*\])|[\[\]]/g).filter(Boolean);
  }
})(Qe);
var Xe = {}, fe = {}, Ye = {};
const qt = "tailwindcss", Ht = "3.3.1", Gt = "A utility-first CSS framework for rapidly building custom user interfaces.", Qt = "MIT", Xt = "lib/index.js", Yt = "types/index.d.ts", Jt = "https://github.com/tailwindlabs/tailwindcss.git", Zt = "https://github.com/tailwindlabs/tailwindcss/issues", en = "https://tailwindcss.com", tn = {
  tailwind: "lib/cli.js",
  tailwindcss: "lib/cli.js"
}, nn = {
  engine: "stable"
}, rn = {
  prebuild: "npm run generate && rimraf lib",
  build: "swc src --out-dir lib --copy-files",
  postbuild: "esbuild lib/cli-peer-dependencies.js --bundle --platform=node --outfile=peers/index.js --define:process.env.CSS_TRANSFORMER_WASM=false",
  "rebuild-fixtures": "npm run build && node -r @swc/register scripts/rebuildFixtures.js",
  style: "eslint .",
  pretest: "npm run generate",
  test: "jest",
  "test:integrations": "npm run test --prefix ./integrations",
  "install:integrations": "node scripts/install-integrations.js",
  "generate:plugin-list": "node -r @swc/register scripts/create-plugin-list.js",
  "generate:types": "node -r @swc/register scripts/generate-types.js",
  generate: "npm run generate:plugin-list && npm run generate:types",
  "release-channel": "node ./scripts/release-channel.js",
  "release-notes": "node ./scripts/release-notes.js",
  prepublishOnly: "npm install --force && npm run build"
}, on = [
  "src/*",
  "cli/*",
  "lib/*",
  "peers/*",
  "scripts/*.js",
  "stubs/*",
  "nesting/*",
  "types/**/*",
  "*.d.ts",
  "*.css",
  "*.js"
], sn = {
  "@swc/cli": "0.1.59",
  "@swc/core": "1.3.24",
  "@swc/jest": "0.2.24",
  "@swc/register": "0.1.10",
  autoprefixer: "^10.4.13",
  browserslist: "^4.21.4",
  concurrently: "^7.5.0",
  cssnano: "^5.1.14",
  esbuild: "^0.16.10",
  eslint: "^8.31.0",
  "eslint-config-prettier": "^8.6.0",
  "eslint-plugin-prettier": "^4.2.1",
  jest: "^28.1.3",
  "jest-diff": "^28.1.3",
  lightningcss: "^1.18.0",
  prettier: "^2.8.1",
  rimraf: "^3.0.0",
  "source-map-js": "^1.0.2",
  turbo: "^1.6.3"
}, ln = {
  postcss: "^8.0.9"
}, an = {
  arg: "^5.0.2",
  chokidar: "^3.5.3",
  "color-name": "^1.1.4",
  didyoumean: "^1.2.2",
  dlv: "^1.1.3",
  "fast-glob": "^3.2.12",
  "glob-parent": "^6.0.2",
  "is-glob": "^4.0.3",
  jiti: "^1.17.2",
  lilconfig: "^2.0.6",
  micromatch: "^4.0.5",
  "normalize-path": "^3.0.0",
  "object-hash": "^3.0.0",
  picocolors: "^1.0.0",
  postcss: "^8.0.9",
  "postcss-import": "^14.1.0",
  "postcss-js": "^4.0.0",
  "postcss-load-config": "^3.1.4",
  "postcss-nested": "6.0.0",
  "postcss-selector-parser": "^6.0.11",
  "postcss-value-parser": "^4.2.0",
  "quick-lru": "^5.1.1",
  resolve: "^1.22.1",
  sucrase: "^3.29.0"
}, un = [
  "> 1%",
  "not edge <= 18",
  "not ie 11",
  "not op_mini all"
], dn = {
  testTimeout: 3e4,
  setupFilesAfterEnv: [
    "<rootDir>/jest/customMatchers.js"
  ],
  testPathIgnorePatterns: [
    "/node_modules/",
    "/integrations/",
    "/standalone-cli/",
    "\\.test\\.skip\\.js$"
  ],
  transformIgnorePatterns: [
    "node_modules/(?!lightningcss)"
  ],
  transform: {
    "\\.js$": "@swc/jest",
    "\\.ts$": "@swc/jest"
  }
}, cn = {
  node: ">=12.13.0"
}, pn = {
  name: qt,
  version: Ht,
  description: Gt,
  license: Qt,
  main: Xt,
  types: Yt,
  repository: Jt,
  bugs: Zt,
  homepage: en,
  bin: tn,
  tailwindcss: nn,
  scripts: rn,
  files: on,
  devDependencies: sn,
  peerDependencies: ln,
  dependencies: an,
  browserslist: un,
  jest: dn,
  engines: cn
};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(f, k) {
    for (var V in k)
      Object.defineProperty(f, V, {
        enumerable: !0,
        get: k[V]
      });
  }
  t(e, {
    env: () => s,
    contextMap: () => r,
    configContextMap: () => a,
    contextSourcesMap: () => u,
    sourceHashMap: () => o,
    NOT_ON_DEMAND: () => p,
    NONE: () => K,
    resolveDebug: () => v
  });
  const n = /* @__PURE__ */ i(pn);
  function i(f) {
    return f && f.__esModule ? f : {
      default: f
    };
  }
  let l = n.default.tailwindcss.engine === "oxide";
  const s = typeof process < "u" ? {
    NODE_ENV: process.env.NODE_ENV,
    DEBUG: v(process.env.DEBUG),
    ENGINE: n.default.tailwindcss.engine,
    OXIDE: g(process.env.OXIDE, l)
  } : {
    NODE_ENV: "production",
    DEBUG: !1,
    ENGINE: n.default.tailwindcss.engine,
    OXIDE: l
  }, r = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), p = new String("*"), K = Symbol("__NONE__");
  function g(f, k) {
    return f === void 0 ? k : !(f === "0" || f === "false");
  }
  function v(f) {
    if (f === void 0)
      return !1;
    if (f === "true" || f === "1")
      return !0;
    if (f === "false" || f === "0")
      return !1;
    if (f === "*")
      return !0;
    let k = f.split(",").map((V) => V.split(":")[0]);
    return k.includes("-tailwindcss") ? !1 : !!k.includes("tailwindcss");
  }
})(Ye);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(g, v) {
    for (var f in v)
      Object.defineProperty(g, f, {
        enumerable: !0,
        get: v[f]
      });
  }
  t(e, {
    flagEnabled: () => u,
    issueFlagNotices: () => p,
    default: () => K
  });
  const n = /* @__PURE__ */ s(ue), i = /* @__PURE__ */ s(pe), l = Ye;
  function s(g) {
    return g && g.__esModule ? g : {
      default: g
    };
  }
  let r = {
    optimizeUniversalDefaults: !1,
    generalizedModifiers: !0,
    get disableColorOpacityUtilitiesByDefault() {
      return l.env.OXIDE;
    },
    get relativeContentPathsByDefault() {
      return l.env.OXIDE;
    }
  }, a = {
    future: [
      "hoverOnlyWhenSupported",
      "respectDefaultRingColorOpacity",
      "disableColorOpacityUtilitiesByDefault",
      "relativeContentPathsByDefault"
    ],
    experimental: [
      "optimizeUniversalDefaults",
      "generalizedModifiers"
    ]
  };
  function u(g, v) {
    if (a.future.includes(v)) {
      var f, k, V;
      return g.future === "all" || ((V = (k = g == null || (f = g.future) === null || f === void 0 ? void 0 : f[v]) !== null && k !== void 0 ? k : r[v]) !== null && V !== void 0 ? V : !1);
    }
    if (a.experimental.includes(v)) {
      var R, I, N;
      return g.experimental === "all" || ((N = (I = g == null || (R = g.experimental) === null || R === void 0 ? void 0 : R[v]) !== null && I !== void 0 ? I : r[v]) !== null && N !== void 0 ? N : !1);
    }
    return !1;
  }
  function o(g) {
    if (g.experimental === "all")
      return a.experimental;
    var v;
    return Object.keys((v = g?.experimental) !== null && v !== void 0 ? v : {}).filter((f) => a.experimental.includes(f) && g.experimental[f]);
  }
  function p(g) {
    if (process.env.JEST_WORKER_ID === void 0 && o(g).length > 0) {
      let v = o(g).map((f) => n.default.yellow(f)).join(", ");
      i.default.warn("experimental-flags-enabled", [
        `You have enabled experimental features: ${v}`,
        "Experimental features in Tailwind CSS are not covered by semver, may introduce breaking changes, and can change at any time."
      ]);
    }
  }
  const K = a;
})(fe);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "normalizeConfig", {
    enumerable: !0,
    get: () => s
  });
  const t = fe, n = /* @__PURE__ */ l(pe);
  function i(r) {
    if (typeof WeakMap != "function")
      return null;
    var a = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new WeakMap();
    return (i = function(o) {
      return o ? u : a;
    })(r);
  }
  function l(r, a) {
    if (!a && r && r.__esModule)
      return r;
    if (r === null || typeof r != "object" && typeof r != "function")
      return {
        default: r
      };
    var u = i(a);
    if (u && u.has(r))
      return u.get(r);
    var o = {}, p = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var K in r)
      if (K !== "default" && Object.prototype.hasOwnProperty.call(r, K)) {
        var g = p ? Object.getOwnPropertyDescriptor(r, K) : null;
        g && (g.get || g.set) ? Object.defineProperty(o, K, g) : o[K] = r[K];
      }
    return o.default = r, u && u.set(r, o), o;
  }
  function s(r) {
    if ((() => {
      if (r.purge || !r.content || !Array.isArray(r.content) && !(typeof r.content == "object" && r.content !== null))
        return !1;
      if (Array.isArray(r.content))
        return r.content.every((o) => typeof o == "string" ? !0 : !(typeof o?.raw != "string" || o?.extension && typeof o?.extension != "string"));
      if (typeof r.content == "object" && r.content !== null) {
        if (Object.keys(r.content).some((o) => ![
          "files",
          "relative",
          "extract",
          "transform"
        ].includes(o)))
          return !1;
        if (Array.isArray(r.content.files)) {
          if (!r.content.files.every((o) => typeof o == "string" ? !0 : !(typeof o?.raw != "string" || o?.extension && typeof o?.extension != "string")))
            return !1;
          if (typeof r.content.extract == "object") {
            for (let o of Object.values(r.content.extract))
              if (typeof o != "function")
                return !1;
          } else if (!(r.content.extract === void 0 || typeof r.content.extract == "function"))
            return !1;
          if (typeof r.content.transform == "object") {
            for (let o of Object.values(r.content.transform))
              if (typeof o != "function")
                return !1;
          } else if (!(r.content.transform === void 0 || typeof r.content.transform == "function"))
            return !1;
          if (typeof r.content.relative != "boolean" && typeof r.content.relative < "u")
            return !1;
        }
        return !0;
      }
      return !1;
    })() || n.default.warn("purge-deprecation", [
      "The `purge`/`content` options have changed in Tailwind CSS v3.0.",
      "Update your configuration file to eliminate this warning.",
      "https://tailwindcss.com/docs/upgrade-guide#configure-content-sources"
    ]), r.safelist = (() => {
      var o;
      let { content: p, purge: K, safelist: g } = r;
      return Array.isArray(g) ? g : Array.isArray(p?.safelist) ? p.safelist : Array.isArray(K?.safelist) ? K.safelist : Array.isArray(K == null || (o = K.options) === null || o === void 0 ? void 0 : o.safelist) ? K.options.safelist : [];
    })(), r.blocklist = (() => {
      let { blocklist: o } = r;
      if (Array.isArray(o)) {
        if (o.every((p) => typeof p == "string"))
          return o;
        n.default.warn("blocklist-invalid", [
          "The `blocklist` option must be an array of strings.",
          "https://tailwindcss.com/docs/content-configuration#discarding-classes"
        ]);
      }
      return [];
    })(), typeof r.prefix == "function")
      n.default.warn("prefix-function", [
        "As of Tailwind CSS v3.0, `prefix` cannot be a function.",
        "Update `prefix` in your configuration to be a string to eliminate this warning.",
        "https://tailwindcss.com/docs/upgrade-guide#prefix-cannot-be-a-function"
      ]), r.prefix = "";
    else {
      var u;
      r.prefix = (u = r.prefix) !== null && u !== void 0 ? u : "";
    }
    r.content = {
      relative: (() => {
        let { content: o } = r;
        return o?.relative ? o.relative : (0, t.flagEnabled)(r, "relativeContentPathsByDefault");
      })(),
      files: (() => {
        let { content: o, purge: p } = r;
        return Array.isArray(p) ? p : Array.isArray(p?.content) ? p.content : Array.isArray(o) ? o : Array.isArray(o?.content) ? o.content : Array.isArray(o?.files) ? o.files : [];
      })(),
      extract: (() => {
        let o = (() => {
          var g, v, f, k, V, R, I, N, W, H;
          return !((g = r.purge) === null || g === void 0) && g.extract ? r.purge.extract : !((v = r.content) === null || v === void 0) && v.extract ? r.content.extract : !((f = r.purge) === null || f === void 0 || (k = f.extract) === null || k === void 0) && k.DEFAULT ? r.purge.extract.DEFAULT : !((V = r.content) === null || V === void 0 || (R = V.extract) === null || R === void 0) && R.DEFAULT ? r.content.extract.DEFAULT : !((I = r.purge) === null || I === void 0 || (N = I.options) === null || N === void 0) && N.extractors ? r.purge.options.extractors : !((W = r.content) === null || W === void 0 || (H = W.options) === null || H === void 0) && H.extractors ? r.content.options.extractors : {};
        })(), p = {}, K = (() => {
          var g, v, f, k;
          if (!((g = r.purge) === null || g === void 0 || (v = g.options) === null || v === void 0) && v.defaultExtractor)
            return r.purge.options.defaultExtractor;
          if (!((f = r.content) === null || f === void 0 || (k = f.options) === null || k === void 0) && k.defaultExtractor)
            return r.content.options.defaultExtractor;
        })();
        if (K !== void 0 && (p.DEFAULT = K), typeof o == "function")
          p.DEFAULT = o;
        else if (Array.isArray(o))
          for (let { extensions: g, extractor: v } of o ?? [])
            for (let f of g)
              p[f] = v;
        else
          typeof o == "object" && o !== null && Object.assign(p, o);
        return p;
      })(),
      transform: (() => {
        let o = (() => {
          var K, g, v, f, k, V;
          return !((K = r.purge) === null || K === void 0) && K.transform ? r.purge.transform : !((g = r.content) === null || g === void 0) && g.transform ? r.content.transform : !((v = r.purge) === null || v === void 0 || (f = v.transform) === null || f === void 0) && f.DEFAULT ? r.purge.transform.DEFAULT : !((k = r.content) === null || k === void 0 || (V = k.transform) === null || V === void 0) && V.DEFAULT ? r.content.transform.DEFAULT : {};
        })(), p = {};
        return typeof o == "function" && (p.DEFAULT = o), typeof o == "object" && o !== null && Object.assign(p, o), p;
      })()
    };
    for (let o of r.content.files)
      if (typeof o == "string" && /{([^,]*?)}/g.test(o)) {
        n.default.warn("invalid-glob-braces", [
          `The glob pattern ${(0, n.dim)(o)} in your Tailwind CSS configuration is invalid.`,
          `Update it to ${(0, n.dim)(o.replace(/{([^,]*?)}/g, "$1"))} to silence this warning.`
        ]);
        break;
      }
    return r;
  }
})(Xe);
var Je = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: () => t
  });
  function t(n) {
    if (Object.prototype.toString.call(n) !== "[object Object]")
      return !1;
    const i = Object.getPrototypeOf(n);
    return i === null || i === Object.prototype;
  }
})(Je);
var Ze = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "cloneDeep", {
    enumerable: !0,
    get: () => t
  });
  function t(n) {
    return Array.isArray(n) ? n.map((i) => t(i)) : typeof n == "object" && n !== null ? Object.fromEntries(Object.entries(n).map(([i, l]) => [
      i,
      t(l)
    ])) : n;
  }
})(Ze);
var et = {}, tt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: () => t
  });
  function t(n) {
    return n.replace(/\\,/g, "\\2c ");
  }
})(tt);
var Se = {}, Oe = {}, fn = {
  aliceblue: [240, 248, 255],
  antiquewhite: [250, 235, 215],
  aqua: [0, 255, 255],
  aquamarine: [127, 255, 212],
  azure: [240, 255, 255],
  beige: [245, 245, 220],
  bisque: [255, 228, 196],
  black: [0, 0, 0],
  blanchedalmond: [255, 235, 205],
  blue: [0, 0, 255],
  blueviolet: [138, 43, 226],
  brown: [165, 42, 42],
  burlywood: [222, 184, 135],
  cadetblue: [95, 158, 160],
  chartreuse: [127, 255, 0],
  chocolate: [210, 105, 30],
  coral: [255, 127, 80],
  cornflowerblue: [100, 149, 237],
  cornsilk: [255, 248, 220],
  crimson: [220, 20, 60],
  cyan: [0, 255, 255],
  darkblue: [0, 0, 139],
  darkcyan: [0, 139, 139],
  darkgoldenrod: [184, 134, 11],
  darkgray: [169, 169, 169],
  darkgreen: [0, 100, 0],
  darkgrey: [169, 169, 169],
  darkkhaki: [189, 183, 107],
  darkmagenta: [139, 0, 139],
  darkolivegreen: [85, 107, 47],
  darkorange: [255, 140, 0],
  darkorchid: [153, 50, 204],
  darkred: [139, 0, 0],
  darksalmon: [233, 150, 122],
  darkseagreen: [143, 188, 143],
  darkslateblue: [72, 61, 139],
  darkslategray: [47, 79, 79],
  darkslategrey: [47, 79, 79],
  darkturquoise: [0, 206, 209],
  darkviolet: [148, 0, 211],
  deeppink: [255, 20, 147],
  deepskyblue: [0, 191, 255],
  dimgray: [105, 105, 105],
  dimgrey: [105, 105, 105],
  dodgerblue: [30, 144, 255],
  firebrick: [178, 34, 34],
  floralwhite: [255, 250, 240],
  forestgreen: [34, 139, 34],
  fuchsia: [255, 0, 255],
  gainsboro: [220, 220, 220],
  ghostwhite: [248, 248, 255],
  gold: [255, 215, 0],
  goldenrod: [218, 165, 32],
  gray: [128, 128, 128],
  green: [0, 128, 0],
  greenyellow: [173, 255, 47],
  grey: [128, 128, 128],
  honeydew: [240, 255, 240],
  hotpink: [255, 105, 180],
  indianred: [205, 92, 92],
  indigo: [75, 0, 130],
  ivory: [255, 255, 240],
  khaki: [240, 230, 140],
  lavender: [230, 230, 250],
  lavenderblush: [255, 240, 245],
  lawngreen: [124, 252, 0],
  lemonchiffon: [255, 250, 205],
  lightblue: [173, 216, 230],
  lightcoral: [240, 128, 128],
  lightcyan: [224, 255, 255],
  lightgoldenrodyellow: [250, 250, 210],
  lightgray: [211, 211, 211],
  lightgreen: [144, 238, 144],
  lightgrey: [211, 211, 211],
  lightpink: [255, 182, 193],
  lightsalmon: [255, 160, 122],
  lightseagreen: [32, 178, 170],
  lightskyblue: [135, 206, 250],
  lightslategray: [119, 136, 153],
  lightslategrey: [119, 136, 153],
  lightsteelblue: [176, 196, 222],
  lightyellow: [255, 255, 224],
  lime: [0, 255, 0],
  limegreen: [50, 205, 50],
  linen: [250, 240, 230],
  magenta: [255, 0, 255],
  maroon: [128, 0, 0],
  mediumaquamarine: [102, 205, 170],
  mediumblue: [0, 0, 205],
  mediumorchid: [186, 85, 211],
  mediumpurple: [147, 112, 219],
  mediumseagreen: [60, 179, 113],
  mediumslateblue: [123, 104, 238],
  mediumspringgreen: [0, 250, 154],
  mediumturquoise: [72, 209, 204],
  mediumvioletred: [199, 21, 133],
  midnightblue: [25, 25, 112],
  mintcream: [245, 255, 250],
  mistyrose: [255, 228, 225],
  moccasin: [255, 228, 181],
  navajowhite: [255, 222, 173],
  navy: [0, 0, 128],
  oldlace: [253, 245, 230],
  olive: [128, 128, 0],
  olivedrab: [107, 142, 35],
  orange: [255, 165, 0],
  orangered: [255, 69, 0],
  orchid: [218, 112, 214],
  palegoldenrod: [238, 232, 170],
  palegreen: [152, 251, 152],
  paleturquoise: [175, 238, 238],
  palevioletred: [219, 112, 147],
  papayawhip: [255, 239, 213],
  peachpuff: [255, 218, 185],
  peru: [205, 133, 63],
  pink: [255, 192, 203],
  plum: [221, 160, 221],
  powderblue: [176, 224, 230],
  purple: [128, 0, 128],
  rebeccapurple: [102, 51, 153],
  red: [255, 0, 0],
  rosybrown: [188, 143, 143],
  royalblue: [65, 105, 225],
  saddlebrown: [139, 69, 19],
  salmon: [250, 128, 114],
  sandybrown: [244, 164, 96],
  seagreen: [46, 139, 87],
  seashell: [255, 245, 238],
  sienna: [160, 82, 45],
  silver: [192, 192, 192],
  skyblue: [135, 206, 235],
  slateblue: [106, 90, 205],
  slategray: [112, 128, 144],
  slategrey: [112, 128, 144],
  snow: [255, 250, 250],
  springgreen: [0, 255, 127],
  steelblue: [70, 130, 180],
  tan: [210, 180, 140],
  teal: [0, 128, 128],
  thistle: [216, 191, 216],
  tomato: [255, 99, 71],
  turquoise: [64, 224, 208],
  violet: [238, 130, 238],
  wheat: [245, 222, 179],
  white: [255, 255, 255],
  whitesmoke: [245, 245, 245],
  yellow: [255, 255, 0],
  yellowgreen: [154, 205, 50]
};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(f, k) {
    for (var V in k)
      Object.defineProperty(f, V, {
        enumerable: !0,
        get: k[V]
      });
  }
  t(e, {
    parseColor: () => g,
    formatColor: () => v
  });
  const n = /* @__PURE__ */ i(fn);
  function i(f) {
    return f && f.__esModule ? f : {
      default: f
    };
  }
  let l = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i, s = /^#([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i, r = /(?:\d+|\d*\.\d+)%?/, a = /(?:\s*,\s*|\s+)/, u = /\s*[,/]\s*/, o = /var\(--(?:[^ )]*?)\)/, p = new RegExp(`^(rgba?)\\(\\s*(${r.source}|${o.source})(?:${a.source}(${r.source}|${o.source}))?(?:${a.source}(${r.source}|${o.source}))?(?:${u.source}(${r.source}|${o.source}))?\\s*\\)$`), K = new RegExp(`^(hsla?)\\(\\s*((?:${r.source})(?:deg|rad|grad|turn)?|${o.source})(?:${a.source}(${r.source}|${o.source}))?(?:${a.source}(${r.source}|${o.source}))?(?:${u.source}(${r.source}|${o.source}))?\\s*\\)$`);
  function g(f, { loose: k = !1 } = {}) {
    var V, R;
    if (typeof f != "string")
      return null;
    if (f = f.trim(), f === "transparent")
      return {
        mode: "rgb",
        color: [
          "0",
          "0",
          "0"
        ],
        alpha: "0"
      };
    if (f in n.default)
      return {
        mode: "rgb",
        color: n.default[f].map((Q) => Q.toString())
      };
    let I = f.replace(s, (Q, ne, ee, _, x) => [
      "#",
      ne,
      ne,
      ee,
      ee,
      _,
      _,
      x ? x + x : ""
    ].join("")).match(l);
    if (I !== null)
      return {
        mode: "rgb",
        color: [
          parseInt(I[1], 16),
          parseInt(I[2], 16),
          parseInt(I[3], 16)
        ].map((Q) => Q.toString()),
        alpha: I[4] ? (parseInt(I[4], 16) / 255).toString() : void 0
      };
    var N;
    let W = (N = f.match(p)) !== null && N !== void 0 ? N : f.match(K);
    if (W === null)
      return null;
    let H = [
      W[2],
      W[3],
      W[4]
    ].filter(Boolean).map((Q) => Q.toString());
    return H.length === 2 && H[0].startsWith("var(") ? {
      mode: W[1],
      color: [
        H[0]
      ],
      alpha: H[1]
    } : !k && H.length !== 3 || H.length < 3 && !H.some((Q) => /^var\(.*?\)$/.test(Q)) ? null : {
      mode: W[1],
      color: H,
      alpha: (V = W[5]) === null || V === void 0 || (R = V.toString) === null || R === void 0 ? void 0 : R.call(V)
    };
  }
  function v({ mode: f, color: k, alpha: V }) {
    let R = V !== void 0;
    return f === "rgba" || f === "hsla" ? `${f}(${k.join(", ")}${R ? `, ${V}` : ""})` : `${f}(${k.join(" ")}${R ? ` / ${V}` : ""})`;
  }
})(Oe);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(s, r) {
    for (var a in r)
      Object.defineProperty(s, a, {
        enumerable: !0,
        get: r[a]
      });
  }
  t(e, {
    withAlphaValue: () => i,
    default: () => l
  });
  const n = Oe;
  function i(s, r, a) {
    if (typeof s == "function")
      return s({
        opacityValue: r
      });
    let u = (0, n.parseColor)(s, {
      loose: !0
    });
    return u === null ? a : (0, n.formatColor)({
      ...u,
      alpha: r
    });
  }
  function l({ color: s, property: r, variable: a }) {
    let u = [].concat(r);
    if (typeof s == "function")
      return {
        [a]: "1",
        ...Object.fromEntries(u.map((p) => [
          p,
          s({
            opacityVariable: a,
            opacityValue: `var(${a})`
          })
        ]))
      };
    const o = (0, n.parseColor)(s);
    return o === null ? Object.fromEntries(u.map((p) => [
      p,
      s
    ])) : o.alpha !== void 0 ? Object.fromEntries(u.map((p) => [
      p,
      s
    ])) : {
      [a]: "1",
      ...Object.fromEntries(u.map((p) => [
        p,
        (0, n.formatColor)({
          ...o,
          alpha: `var(${a})`
        })
      ]))
    };
  }
})(Se);
var xe = {}, nt = {}, me = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "splitAtTopLevelOnly", {
    enumerable: !0,
    get: () => t
  });
  function t(n, i) {
    let l = [], s = [], r = 0, a = !1;
    for (let u = 0; u < n.length; u++) {
      let o = n[u];
      l.length === 0 && o === i[0] && !a && (i.length === 1 || n.slice(u, u + i.length) === i) && (s.push(n.slice(r, u)), r = u + i.length), a ? a = !1 : o === "\\" && (a = !0), o === "(" || o === "[" || o === "{" ? l.push(o) : (o === ")" && l[l.length - 1] === "(" || o === "]" && l[l.length - 1] === "[" || o === "}" && l[l.length - 1] === "{") && l.pop();
    }
    return s.push(n.slice(r)), s;
  }
})(me);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(u, o) {
    for (var p in o)
      Object.defineProperty(u, p, {
        enumerable: !0,
        get: o[p]
      });
  }
  t(e, {
    parseBoxShadowValue: () => r,
    formatBoxShadowValue: () => a
  });
  const n = me;
  let i = /* @__PURE__ */ new Set([
    "inset",
    "inherit",
    "initial",
    "revert",
    "unset"
  ]), l = /\ +(?![^(]*\))/g, s = /^-?(\d+|\.\d+)(.*?)$/g;
  function r(u) {
    return (0, n.splitAtTopLevelOnly)(u, ",").map((p) => {
      let K = p.trim(), g = {
        raw: K
      }, v = K.split(l), f = /* @__PURE__ */ new Set();
      for (let k of v)
        s.lastIndex = 0, !f.has("KEYWORD") && i.has(k) ? (g.keyword = k, f.add("KEYWORD")) : s.test(k) ? f.has("X") ? f.has("Y") ? f.has("BLUR") ? f.has("SPREAD") || (g.spread = k, f.add("SPREAD")) : (g.blur = k, f.add("BLUR")) : (g.y = k, f.add("Y")) : (g.x = k, f.add("X")) : g.color ? (g.unknown || (g.unknown = []), g.unknown.push(k)) : g.color = k;
      return g.valid = g.x !== void 0 && g.y !== void 0, g;
    });
  }
  function a(u) {
    return u.map((o) => o.valid ? [
      o.keyword,
      o.x,
      o.y,
      o.blur,
      o.spread,
      o.color
    ].filter(Boolean).join(" ") : o.raw).join(", ");
  }
})(nt);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(c, O) {
    for (var j in O)
      Object.defineProperty(c, j, {
        enumerable: !0,
        get: O[j]
      });
  }
  t(e, {
    normalize: () => o,
    url: () => p,
    number: () => K,
    percentage: () => g,
    length: () => k,
    lineWidth: () => R,
    shadow: () => I,
    color: () => N,
    image: () => W,
    gradient: () => Q,
    position: () => ee,
    familyName: () => _,
    genericName: () => S,
    absoluteSize: () => y,
    relativeSize: () => b
  });
  const n = Oe, i = nt, l = me;
  let s = [
    "min",
    "max",
    "clamp",
    "calc"
  ];
  function r(c) {
    return s.some((O) => new RegExp(`^${O}\\(.*\\)`).test(c));
  }
  const a = "--tw-placeholder", u = new RegExp(a, "g");
  function o(c, O = !0) {
    return c.startsWith("--") ? `var(${c})` : c.includes("url(") ? c.split(/(url\(.*?\))/g).filter(Boolean).map((j) => /^url\(.*?\)$/.test(j) ? j : o(j, !1)).join("") : (c = c.replace(/([^\\])_+/g, (j, C) => C + " ".repeat(j.length - 1)).replace(/^_/g, " ").replace(/\\_/g, "_"), O && (c = c.trim()), c = c.replace(/(calc|min|max|clamp)\(.+\)/g, (j) => {
      let C = [];
      return j.replace(/var\((--.+?)[,)]/g, (Y, Ce) => (C.push(Ce), Y.replace(Ce, a))).replace(/(-?\d*\.?\d(?!\b-\d.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g, "$1 $2 ").replace(u, () => C.shift());
    }), c);
  }
  function p(c) {
    return c.startsWith("url(");
  }
  function K(c) {
    return !isNaN(Number(c)) || r(c);
  }
  function g(c) {
    return c.endsWith("%") && K(c.slice(0, -1)) || r(c);
  }
  let f = `(?:${[
    "cm",
    "mm",
    "Q",
    "in",
    "pc",
    "pt",
    "px",
    "em",
    "ex",
    "ch",
    "rem",
    "lh",
    "rlh",
    "vw",
    "vh",
    "vmin",
    "vmax",
    "vb",
    "vi",
    "svw",
    "svh",
    "lvw",
    "lvh",
    "dvw",
    "dvh",
    "cqw",
    "cqh",
    "cqi",
    "cqb",
    "cqmin",
    "cqmax"
  ].join("|")})`;
  function k(c) {
    return c === "0" || new RegExp(`^[+-]?[0-9]*.?[0-9]+(?:[eE][+-]?[0-9]+)?${f}$`).test(c) || r(c);
  }
  let V = /* @__PURE__ */ new Set([
    "thin",
    "medium",
    "thick"
  ]);
  function R(c) {
    return V.has(c);
  }
  function I(c) {
    let O = (0, i.parseBoxShadowValue)(o(c));
    for (let j of O)
      if (!j.valid)
        return !1;
    return !0;
  }
  function N(c) {
    let O = 0;
    return (0, l.splitAtTopLevelOnly)(c, "_").every((C) => (C = o(C), C.startsWith("var(") ? !0 : (0, n.parseColor)(C, {
      loose: !0
    }) !== null ? (O++, !0) : !1)) ? O > 0 : !1;
  }
  function W(c) {
    let O = 0;
    return (0, l.splitAtTopLevelOnly)(c, ",").every((C) => (C = o(C), C.startsWith("var(") ? !0 : p(C) || Q(C) || [
      "element(",
      "image(",
      "cross-fade(",
      "image-set("
    ].some((Y) => C.startsWith(Y)) ? (O++, !0) : !1)) ? O > 0 : !1;
  }
  let H = /* @__PURE__ */ new Set([
    "linear-gradient",
    "radial-gradient",
    "repeating-linear-gradient",
    "repeating-radial-gradient",
    "conic-gradient"
  ]);
  function Q(c) {
    c = o(c);
    for (let O of H)
      if (c.startsWith(`${O}(`))
        return !0;
    return !1;
  }
  let ne = /* @__PURE__ */ new Set([
    "center",
    "top",
    "right",
    "bottom",
    "left"
  ]);
  function ee(c) {
    let O = 0;
    return (0, l.splitAtTopLevelOnly)(c, "_").every((C) => (C = o(C), C.startsWith("var(") ? !0 : ne.has(C) || k(C) || g(C) ? (O++, !0) : !1)) ? O > 0 : !1;
  }
  function _(c) {
    let O = 0;
    return (0, l.splitAtTopLevelOnly)(c, ",").every((C) => (C = o(C), C.startsWith("var(") ? !0 : C.includes(" ") && !/(['"])([^"']+)\1/g.test(C) || /^\d/g.test(C) ? !1 : (O++, !0))) ? O > 0 : !1;
  }
  let x = /* @__PURE__ */ new Set([
    "serif",
    "sans-serif",
    "monospace",
    "cursive",
    "fantasy",
    "system-ui",
    "ui-serif",
    "ui-sans-serif",
    "ui-monospace",
    "ui-rounded",
    "math",
    "emoji",
    "fangsong"
  ]);
  function S(c) {
    return x.has(c);
  }
  let h = /* @__PURE__ */ new Set([
    "xx-small",
    "x-small",
    "small",
    "medium",
    "large",
    "x-large",
    "x-large",
    "xxx-large"
  ]);
  function y(c) {
    return h.has(c);
  }
  let $ = /* @__PURE__ */ new Set([
    "larger",
    "smaller"
  ]);
  function b(c) {
    return $.has(c);
  }
})(xe);
var rt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "backgroundSize", {
    enumerable: !0,
    get: () => i
  });
  const t = xe, n = me;
  function i(l) {
    let s = [
      "cover",
      "contain"
    ];
    return (0, n.splitAtTopLevelOnly)(l, ",").every((r) => {
      let a = (0, n.splitAtTopLevelOnly)(r, "_").filter(Boolean);
      return a.length === 1 && s.includes(a[0]) ? !0 : a.length !== 1 && a.length !== 2 ? !1 : a.every((u) => (0, t.length)(u) || (0, t.percentage)(u) || u === "auto");
    });
  }
})(rt);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(_, x) {
    for (var S in x)
      Object.defineProperty(_, S, {
        enumerable: !0,
        get: x[S]
      });
  }
  t(e, {
    updateAllClasses: () => o,
    asValue: () => g,
    parseColorFormat: () => k,
    asColor: () => R,
    asLookupValue: () => I,
    typeMap: () => W,
    coerceValue: () => ne,
    getMatchingTypes: () => ee
  });
  const n = /* @__PURE__ */ u(tt), i = Se, l = xe, s = /* @__PURE__ */ u(we), r = rt, a = fe;
  function u(_) {
    return _ && _.__esModule ? _ : {
      default: _
    };
  }
  function o(_, x) {
    _.walkClasses((S) => {
      S.value = x(S.value), S.raws && S.raws.value && (S.raws.value = (0, n.default)(S.raws.value));
    });
  }
  function p(_, x) {
    if (!v(_))
      return;
    let S = _.slice(1, -1);
    if (x(S))
      return (0, l.normalize)(S);
  }
  function K(_, x = {}, S) {
    let h = x[_];
    if (h !== void 0)
      return (0, s.default)(h);
    if (v(_)) {
      let y = p(_, S);
      return y === void 0 ? void 0 : (0, s.default)(y);
    }
  }
  function g(_, x = {}, { validate: S = () => !0 } = {}) {
    var h;
    let y = (h = x.values) === null || h === void 0 ? void 0 : h[_];
    return y !== void 0 ? y : x.supportsNegativeValues && _.startsWith("-") ? K(_.slice(1), x.values, S) : p(_, S);
  }
  function v(_) {
    return _.startsWith("[") && _.endsWith("]");
  }
  function f(_) {
    let x = _.lastIndexOf("/");
    return x === -1 || x === _.length - 1 ? [
      _,
      void 0
    ] : v(_) && !_.includes("]/[") ? [
      _,
      void 0
    ] : [
      _.slice(0, x),
      _.slice(x + 1)
    ];
  }
  function k(_) {
    if (typeof _ == "string" && _.includes("<alpha-value>")) {
      let x = _;
      return ({ opacityValue: S = 1 }) => x.replace("<alpha-value>", S);
    }
    return _;
  }
  function V(_) {
    return _ = _.slice(1, -1), _.startsWith("--") && (_ = `var(${_})`), _;
  }
  function R(_, x = {}, { tailwindConfig: S = {} } = {}) {
    var h;
    if (((h = x.values) === null || h === void 0 ? void 0 : h[_]) !== void 0) {
      var y;
      return k((y = x.values) === null || y === void 0 ? void 0 : y[_]);
    }
    let [$, b] = f(_);
    if (b !== void 0) {
      var c, O, j, C;
      let Y = (C = (c = x.values) === null || c === void 0 ? void 0 : c[$]) !== null && C !== void 0 ? C : v($) ? $.slice(1, -1) : void 0;
      return Y === void 0 ? void 0 : (Y = k(Y), v(b) ? (0, i.withAlphaValue)(Y, V(b)) : ((O = S.theme) === null || O === void 0 || (j = O.opacity) === null || j === void 0 ? void 0 : j[b]) === void 0 ? void 0 : (0, i.withAlphaValue)(Y, S.theme.opacity[b]));
    }
    return g(_, x, {
      validate: l.color
    });
  }
  function I(_, x = {}) {
    var S;
    return (S = x.values) === null || S === void 0 ? void 0 : S[_];
  }
  function N(_) {
    return (x, S) => g(x, S, {
      validate: _
    });
  }
  let W = {
    any: g,
    color: R,
    url: N(l.url),
    image: N(l.image),
    length: N(l.length),
    percentage: N(l.percentage),
    position: N(l.position),
    lookup: I,
    "generic-name": N(l.genericName),
    "family-name": N(l.familyName),
    number: N(l.number),
    "line-width": N(l.lineWidth),
    "absolute-size": N(l.absoluteSize),
    "relative-size": N(l.relativeSize),
    shadow: N(l.shadow),
    size: N(r.backgroundSize)
  }, H = Object.keys(W);
  function Q(_, x) {
    let S = _.indexOf(x);
    return S === -1 ? [
      void 0,
      _
    ] : [
      _.slice(0, S),
      _.slice(S + 1)
    ];
  }
  function ne(_, x, S, h) {
    if (S.values && x in S.values)
      for (let { type: $ } of _ ?? []) {
        let b = W[$](x, S, {
          tailwindConfig: h
        });
        if (b !== void 0)
          return [
            b,
            $,
            null
          ];
      }
    if (v(x)) {
      let $ = x.slice(1, -1), [b, c] = Q($, ":");
      if (!/^[\w-_]+$/g.test(b))
        c = $;
      else if (b !== void 0 && !H.includes(b))
        return [];
      if (c.length > 0 && H.includes(b))
        return [
          g(`[${c}]`, S),
          b,
          null
        ];
    }
    let y = ee(_, x, S, h);
    for (let $ of y)
      return $;
    return [];
  }
  function* ee(_, x, S, h) {
    let y = (0, a.flagEnabled)(h, "generalizedModifiers"), [$, b] = f(x);
    if (y && S.modifiers != null && (S.modifiers === "any" || typeof S.modifiers == "object" && (b && v(b) || b in S.modifiers)) || ($ = x, b = void 0), b !== void 0 && $ === "" && ($ = "DEFAULT"), b !== void 0 && typeof S.modifiers == "object") {
      var O, j;
      let C = (j = (O = S.modifiers) === null || O === void 0 ? void 0 : O[b]) !== null && j !== void 0 ? j : null;
      C !== null ? b = C : v(b) && (b = V(b));
    }
    for (let { type: C } of _ ?? []) {
      let Y = W[C]($, S, {
        tailwindConfig: h
      });
      Y !== void 0 && (yield [
        Y,
        C,
        b ?? null
      ]);
    }
  }
})(et);
var ot = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: () => t
  });
  function t(n) {
    return typeof n == "function" ? n({}) : n;
  }
})(ot);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: () => S
  });
  const t = /* @__PURE__ */ v(we), n = /* @__PURE__ */ v(Ie), i = /* @__PURE__ */ v(We), l = /* @__PURE__ */ v(qe), s = Ge, r = Qe, a = Xe, u = /* @__PURE__ */ v(Je), o = Ze, p = et, K = Se, g = /* @__PURE__ */ v(ot);
  function v(h) {
    return h && h.__esModule ? h : {
      default: h
    };
  }
  function f(h) {
    return typeof h == "function";
  }
  function k(h, ...y) {
    let $ = y.pop();
    for (let b of y)
      for (let c in b) {
        let O = $(h[c], b[c]);
        O === void 0 ? (0, u.default)(h[c]) && (0, u.default)(b[c]) ? h[c] = k({}, h[c], b[c], $) : h[c] = b[c] : h[c] = O;
      }
    return h;
  }
  const V = {
    colors: l.default,
    negative(h) {
      return Object.keys(h).filter((y) => h[y] !== "0").reduce((y, $) => {
        let b = (0, t.default)(h[$]);
        return b !== void 0 && (y[`-${$}`] = b), y;
      }, {});
    },
    breakpoints(h) {
      return Object.keys(h).filter((y) => typeof h[y] == "string").reduce((y, $) => ({
        ...y,
        [`screen-${$}`]: h[$]
      }), {});
    }
  };
  function R(h, ...y) {
    return f(h) ? h(...y) : h;
  }
  function I(h) {
    return h.reduce((y, { extend: $ }) => k(y, $, (b, c) => b === void 0 ? [
      c
    ] : Array.isArray(b) ? [
      c,
      ...b
    ] : [
      c,
      b
    ]), {});
  }
  function N(h) {
    return {
      ...h.reduce((y, $) => (0, s.defaults)(y, $), {}),
      // In order to resolve n config objects, we combine all of their `extend` properties
      // into arrays instead of objects so they aren't overridden.
      extend: I(h)
    };
  }
  function W(h, y) {
    if (Array.isArray(h) && (0, u.default)(h[0]))
      return h.concat(y);
    if (Array.isArray(y) && (0, u.default)(y[0]) && (0, u.default)(h))
      return [
        h,
        ...y
      ];
    if (Array.isArray(y))
      return y;
  }
  function H({ extend: h, ...y }) {
    return k(y, h, ($, b) => !f($) && !b.some(f) ? k({}, $, ...b, W) : (c, O) => k({}, ...[
      $,
      ...b
    ].map((j) => R(j, c, O)), W));
  }
  function* Q(h) {
    let y = (0, r.toPath)(h);
    if (y.length === 0 || (yield y, Array.isArray(h)))
      return;
    let $ = /^(.*?)\s*\/\s*([^/]+)$/, b = h.match($);
    if (b !== null) {
      let [, c, O] = b, j = (0, r.toPath)(c);
      j.alpha = O, yield j;
    }
  }
  function ne(h) {
    const y = ($, b) => {
      for (const c of Q($)) {
        let O = 0, j = h;
        for (; j != null && O < c.length; )
          j = j[c[O++]], j = f(j) && (c.alpha === void 0 || O <= c.length - 1) ? j(y, V) : j;
        if (j !== void 0) {
          if (c.alpha !== void 0) {
            let C = (0, p.parseColorFormat)(j);
            return (0, K.withAlphaValue)(C, c.alpha, (0, g.default)(C));
          }
          return (0, u.default)(j) ? (0, o.cloneDeep)(j) : j;
        }
      }
      return b;
    };
    return Object.assign(y, {
      theme: y,
      ...V
    }), Object.keys(h).reduce(($, b) => ($[b] = f(h[b]) ? h[b](y, V) : h[b], $), {});
  }
  function ee(h) {
    let y = [];
    return h.forEach(($) => {
      y = [
        ...y,
        $
      ];
      var b;
      const c = (b = $?.plugins) !== null && b !== void 0 ? b : [];
      c.length !== 0 && c.forEach((O) => {
        O.__isOptionsFunction && (O = O());
        var j;
        y = [
          ...y,
          ...ee([
            (j = O?.config) !== null && j !== void 0 ? j : {}
          ])
        ];
      });
    }), y;
  }
  function _(h) {
    return [
      ...h
    ].reduceRight(($, b) => f(b) ? b({
      corePlugins: $
    }) : (0, i.default)(b, $), n.default);
  }
  function x(h) {
    return [
      ...h
    ].reduceRight(($, b) => [
      ...$,
      ...b
    ], []);
  }
  function S(h) {
    let y = [
      ...ee(h),
      {
        prefix: "",
        important: !1,
        separator: ":"
      }
    ];
    var $, b;
    return (0, a.normalizeConfig)((0, s.defaults)({
      theme: ne(H(N(y.map((c) => ($ = c?.theme) !== null && $ !== void 0 ? $ : {})))),
      corePlugins: _(y.map((c) => c.corePlugins)),
      plugins: x(h.map((c) => (b = c?.plugins) !== null && b !== void 0 ? b : []))
    }, ...y));
  }
})(Re);
var st = {}, mn = {
  content: [],
  presets: [],
  darkMode: "media",
  // or 'class'
  theme: {
    accentColor: ({ theme: e }) => ({
      ...e("colors"),
      auto: "auto"
    }),
    animation: {
      none: "none",
      spin: "spin 1s linear infinite",
      ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
      pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      bounce: "bounce 1s infinite"
    },
    aria: {
      checked: 'checked="true"',
      disabled: 'disabled="true"',
      expanded: 'expanded="true"',
      hidden: 'hidden="true"',
      pressed: 'pressed="true"',
      readonly: 'readonly="true"',
      required: 'required="true"',
      selected: 'selected="true"'
    },
    aspectRatio: {
      auto: "auto",
      square: "1 / 1",
      video: "16 / 9"
    },
    backdropBlur: ({ theme: e }) => e("blur"),
    backdropBrightness: ({ theme: e }) => e("brightness"),
    backdropContrast: ({ theme: e }) => e("contrast"),
    backdropGrayscale: ({ theme: e }) => e("grayscale"),
    backdropHueRotate: ({ theme: e }) => e("hueRotate"),
    backdropInvert: ({ theme: e }) => e("invert"),
    backdropOpacity: ({ theme: e }) => e("opacity"),
    backdropSaturate: ({ theme: e }) => e("saturate"),
    backdropSepia: ({ theme: e }) => e("sepia"),
    backgroundColor: ({ theme: e }) => e("colors"),
    backgroundImage: {
      none: "none",
      "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))",
      "gradient-to-tr": "linear-gradient(to top right, var(--tw-gradient-stops))",
      "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
      "gradient-to-br": "linear-gradient(to bottom right, var(--tw-gradient-stops))",
      "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))",
      "gradient-to-bl": "linear-gradient(to bottom left, var(--tw-gradient-stops))",
      "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))",
      "gradient-to-tl": "linear-gradient(to top left, var(--tw-gradient-stops))"
    },
    backgroundOpacity: ({ theme: e }) => e("opacity"),
    backgroundPosition: {
      bottom: "bottom",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top"
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain"
    },
    blur: {
      0: "0",
      none: "0",
      sm: "4px",
      DEFAULT: "8px",
      md: "12px",
      lg: "16px",
      xl: "24px",
      "2xl": "40px",
      "3xl": "64px"
    },
    borderColor: ({ theme: e }) => ({
      ...e("colors"),
      DEFAULT: e("colors.gray.200", "currentColor")
    }),
    borderOpacity: ({ theme: e }) => e("opacity"),
    borderRadius: {
      none: "0px",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      full: "9999px"
    },
    borderSpacing: ({ theme: e }) => ({
      ...e("spacing")
    }),
    borderWidth: {
      DEFAULT: "1px",
      0: "0px",
      2: "2px",
      4: "4px",
      8: "8px"
    },
    boxShadow: {
      sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
      md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
      inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
      none: "none"
    },
    boxShadowColor: ({ theme: e }) => e("colors"),
    brightness: {
      0: "0",
      50: ".5",
      75: ".75",
      90: ".9",
      95: ".95",
      100: "1",
      105: "1.05",
      110: "1.1",
      125: "1.25",
      150: "1.5",
      200: "2"
    },
    caretColor: ({ theme: e }) => e("colors"),
    colors: ({ colors: e }) => ({
      inherit: e.inherit,
      current: e.current,
      transparent: e.transparent,
      black: e.black,
      white: e.white,
      slate: e.slate,
      gray: e.gray,
      zinc: e.zinc,
      neutral: e.neutral,
      stone: e.stone,
      red: e.red,
      orange: e.orange,
      amber: e.amber,
      yellow: e.yellow,
      lime: e.lime,
      green: e.green,
      emerald: e.emerald,
      teal: e.teal,
      cyan: e.cyan,
      sky: e.sky,
      blue: e.blue,
      indigo: e.indigo,
      violet: e.violet,
      purple: e.purple,
      fuchsia: e.fuchsia,
      pink: e.pink,
      rose: e.rose
    }),
    columns: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      "3xs": "16rem",
      "2xs": "18rem",
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      "7xl": "80rem"
    },
    container: {},
    content: {
      none: "none"
    },
    contrast: {
      0: "0",
      50: ".5",
      75: ".75",
      100: "1",
      125: "1.25",
      150: "1.5",
      200: "2"
    },
    cursor: {
      auto: "auto",
      default: "default",
      pointer: "pointer",
      wait: "wait",
      text: "text",
      move: "move",
      help: "help",
      "not-allowed": "not-allowed",
      none: "none",
      "context-menu": "context-menu",
      progress: "progress",
      cell: "cell",
      crosshair: "crosshair",
      "vertical-text": "vertical-text",
      alias: "alias",
      copy: "copy",
      "no-drop": "no-drop",
      grab: "grab",
      grabbing: "grabbing",
      "all-scroll": "all-scroll",
      "col-resize": "col-resize",
      "row-resize": "row-resize",
      "n-resize": "n-resize",
      "e-resize": "e-resize",
      "s-resize": "s-resize",
      "w-resize": "w-resize",
      "ne-resize": "ne-resize",
      "nw-resize": "nw-resize",
      "se-resize": "se-resize",
      "sw-resize": "sw-resize",
      "ew-resize": "ew-resize",
      "ns-resize": "ns-resize",
      "nesw-resize": "nesw-resize",
      "nwse-resize": "nwse-resize",
      "zoom-in": "zoom-in",
      "zoom-out": "zoom-out"
    },
    divideColor: ({ theme: e }) => e("borderColor"),
    divideOpacity: ({ theme: e }) => e("borderOpacity"),
    divideWidth: ({ theme: e }) => e("borderWidth"),
    dropShadow: {
      sm: "0 1px 1px rgb(0 0 0 / 0.05)",
      DEFAULT: ["0 1px 2px rgb(0 0 0 / 0.1)", "0 1px 1px rgb(0 0 0 / 0.06)"],
      md: ["0 4px 3px rgb(0 0 0 / 0.07)", "0 2px 2px rgb(0 0 0 / 0.06)"],
      lg: ["0 10px 8px rgb(0 0 0 / 0.04)", "0 4px 3px rgb(0 0 0 / 0.1)"],
      xl: ["0 20px 13px rgb(0 0 0 / 0.03)", "0 8px 5px rgb(0 0 0 / 0.08)"],
      "2xl": "0 25px 25px rgb(0 0 0 / 0.15)",
      none: "0 0 #0000"
    },
    fill: ({ theme: e }) => ({
      none: "none",
      ...e("colors")
    }),
    flex: {
      1: "1 1 0%",
      auto: "1 1 auto",
      initial: "0 1 auto",
      none: "none"
    },
    flexBasis: ({ theme: e }) => ({
      auto: "auto",
      ...e("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      "1/12": "8.333333%",
      "2/12": "16.666667%",
      "3/12": "25%",
      "4/12": "33.333333%",
      "5/12": "41.666667%",
      "6/12": "50%",
      "7/12": "58.333333%",
      "8/12": "66.666667%",
      "9/12": "75%",
      "10/12": "83.333333%",
      "11/12": "91.666667%",
      full: "100%"
    }),
    flexGrow: {
      0: "0",
      DEFAULT: "1"
    },
    flexShrink: {
      0: "0",
      DEFAULT: "1"
    },
    fontFamily: {
      sans: [
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ],
      serif: ["ui-serif", "Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
      mono: [
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace"
      ]
    },
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.25rem" }],
      base: ["1rem", { lineHeight: "1.5rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "1.75rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
      "5xl": ["3rem", { lineHeight: "1" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
      "7xl": ["4.5rem", { lineHeight: "1" }],
      "8xl": ["6rem", { lineHeight: "1" }],
      "9xl": ["8rem", { lineHeight: "1" }]
    },
    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900"
    },
    gap: ({ theme: e }) => e("spacing"),
    gradientColorStops: ({ theme: e }) => e("colors"),
    gradientColorStopPositions: {
      "0%": "0%",
      "5%": "5%",
      "10%": "10%",
      "15%": "15%",
      "20%": "20%",
      "25%": "25%",
      "30%": "30%",
      "35%": "35%",
      "40%": "40%",
      "45%": "45%",
      "50%": "50%",
      "55%": "55%",
      "60%": "60%",
      "65%": "65%",
      "70%": "70%",
      "75%": "75%",
      "80%": "80%",
      "85%": "85%",
      "90%": "90%",
      "95%": "95%",
      "100%": "100%"
    },
    grayscale: {
      0: "0",
      DEFAULT: "100%"
    },
    gridAutoColumns: {
      auto: "auto",
      min: "min-content",
      max: "max-content",
      fr: "minmax(0, 1fr)"
    },
    gridAutoRows: {
      auto: "auto",
      min: "min-content",
      max: "max-content",
      fr: "minmax(0, 1fr)"
    },
    gridColumn: {
      auto: "auto",
      "span-1": "span 1 / span 1",
      "span-2": "span 2 / span 2",
      "span-3": "span 3 / span 3",
      "span-4": "span 4 / span 4",
      "span-5": "span 5 / span 5",
      "span-6": "span 6 / span 6",
      "span-7": "span 7 / span 7",
      "span-8": "span 8 / span 8",
      "span-9": "span 9 / span 9",
      "span-10": "span 10 / span 10",
      "span-11": "span 11 / span 11",
      "span-12": "span 12 / span 12",
      "span-full": "1 / -1"
    },
    gridColumnEnd: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      13: "13"
    },
    gridColumnStart: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      13: "13"
    },
    gridRow: {
      auto: "auto",
      "span-1": "span 1 / span 1",
      "span-2": "span 2 / span 2",
      "span-3": "span 3 / span 3",
      "span-4": "span 4 / span 4",
      "span-5": "span 5 / span 5",
      "span-6": "span 6 / span 6",
      "span-full": "1 / -1"
    },
    gridRowEnd: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7"
    },
    gridRowStart: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7"
    },
    gridTemplateColumns: {
      none: "none",
      1: "repeat(1, minmax(0, 1fr))",
      2: "repeat(2, minmax(0, 1fr))",
      3: "repeat(3, minmax(0, 1fr))",
      4: "repeat(4, minmax(0, 1fr))",
      5: "repeat(5, minmax(0, 1fr))",
      6: "repeat(6, minmax(0, 1fr))",
      7: "repeat(7, minmax(0, 1fr))",
      8: "repeat(8, minmax(0, 1fr))",
      9: "repeat(9, minmax(0, 1fr))",
      10: "repeat(10, minmax(0, 1fr))",
      11: "repeat(11, minmax(0, 1fr))",
      12: "repeat(12, minmax(0, 1fr))"
    },
    gridTemplateRows: {
      none: "none",
      1: "repeat(1, minmax(0, 1fr))",
      2: "repeat(2, minmax(0, 1fr))",
      3: "repeat(3, minmax(0, 1fr))",
      4: "repeat(4, minmax(0, 1fr))",
      5: "repeat(5, minmax(0, 1fr))",
      6: "repeat(6, minmax(0, 1fr))"
    },
    height: ({ theme: e }) => ({
      auto: "auto",
      ...e("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      full: "100%",
      screen: "100vh",
      min: "min-content",
      max: "max-content",
      fit: "fit-content"
    }),
    hueRotate: {
      0: "0deg",
      15: "15deg",
      30: "30deg",
      60: "60deg",
      90: "90deg",
      180: "180deg"
    },
    inset: ({ theme: e }) => ({
      auto: "auto",
      ...e("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      full: "100%"
    }),
    invert: {
      0: "0",
      DEFAULT: "100%"
    },
    keyframes: {
      spin: {
        to: {
          transform: "rotate(360deg)"
        }
      },
      ping: {
        "75%, 100%": {
          transform: "scale(2)",
          opacity: "0"
        }
      },
      pulse: {
        "50%": {
          opacity: ".5"
        }
      },
      bounce: {
        "0%, 100%": {
          transform: "translateY(-25%)",
          animationTimingFunction: "cubic-bezier(0.8,0,1,1)"
        },
        "50%": {
          transform: "none",
          animationTimingFunction: "cubic-bezier(0,0,0.2,1)"
        }
      }
    },
    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0em",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em"
    },
    lineHeight: {
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
      3: ".75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem"
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal"
    },
    listStyleImage: {
      none: "none"
    },
    margin: ({ theme: e }) => ({
      auto: "auto",
      ...e("spacing")
    }),
    lineClamp: {
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6"
    },
    maxHeight: ({ theme: e }) => ({
      ...e("spacing"),
      none: "none",
      full: "100%",
      screen: "100vh",
      min: "min-content",
      max: "max-content",
      fit: "fit-content"
    }),
    maxWidth: ({ theme: e, breakpoints: t }) => ({
      none: "none",
      0: "0rem",
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      "7xl": "80rem",
      full: "100%",
      min: "min-content",
      max: "max-content",
      fit: "fit-content",
      prose: "65ch",
      ...t(e("screens"))
    }),
    minHeight: {
      0: "0px",
      full: "100%",
      screen: "100vh",
      min: "min-content",
      max: "max-content",
      fit: "fit-content"
    },
    minWidth: {
      0: "0px",
      full: "100%",
      min: "min-content",
      max: "max-content",
      fit: "fit-content"
    },
    objectPosition: {
      bottom: "bottom",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top"
    },
    opacity: {
      0: "0",
      5: "0.05",
      10: "0.1",
      20: "0.2",
      25: "0.25",
      30: "0.3",
      40: "0.4",
      50: "0.5",
      60: "0.6",
      70: "0.7",
      75: "0.75",
      80: "0.8",
      90: "0.9",
      95: "0.95",
      100: "1"
    },
    order: {
      first: "-9999",
      last: "9999",
      none: "0",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12"
    },
    outlineColor: ({ theme: e }) => e("colors"),
    outlineOffset: {
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px"
    },
    outlineWidth: {
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px"
    },
    padding: ({ theme: e }) => e("spacing"),
    placeholderColor: ({ theme: e }) => e("colors"),
    placeholderOpacity: ({ theme: e }) => e("opacity"),
    ringColor: ({ theme: e }) => ({
      DEFAULT: e("colors.blue.500", "#3b82f6"),
      ...e("colors")
    }),
    ringOffsetColor: ({ theme: e }) => e("colors"),
    ringOffsetWidth: {
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px"
    },
    ringOpacity: ({ theme: e }) => ({
      DEFAULT: "0.5",
      ...e("opacity")
    }),
    ringWidth: {
      DEFAULT: "3px",
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px"
    },
    rotate: {
      0: "0deg",
      1: "1deg",
      2: "2deg",
      3: "3deg",
      6: "6deg",
      12: "12deg",
      45: "45deg",
      90: "90deg",
      180: "180deg"
    },
    saturate: {
      0: "0",
      50: ".5",
      100: "1",
      150: "1.5",
      200: "2"
    },
    scale: {
      0: "0",
      50: ".5",
      75: ".75",
      90: ".9",
      95: ".95",
      100: "1",
      105: "1.05",
      110: "1.1",
      125: "1.25",
      150: "1.5"
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px"
    },
    scrollMargin: ({ theme: e }) => ({
      ...e("spacing")
    }),
    scrollPadding: ({ theme: e }) => e("spacing"),
    sepia: {
      0: "0",
      DEFAULT: "100%"
    },
    skew: {
      0: "0deg",
      1: "1deg",
      2: "2deg",
      3: "3deg",
      6: "6deg",
      12: "12deg"
    },
    space: ({ theme: e }) => ({
      ...e("spacing")
    }),
    spacing: {
      px: "1px",
      0: "0px",
      0.5: "0.125rem",
      1: "0.25rem",
      1.5: "0.375rem",
      2: "0.5rem",
      2.5: "0.625rem",
      3: "0.75rem",
      3.5: "0.875rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
      14: "3.5rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      28: "7rem",
      32: "8rem",
      36: "9rem",
      40: "10rem",
      44: "11rem",
      48: "12rem",
      52: "13rem",
      56: "14rem",
      60: "15rem",
      64: "16rem",
      72: "18rem",
      80: "20rem",
      96: "24rem"
    },
    stroke: ({ theme: e }) => ({
      none: "none",
      ...e("colors")
    }),
    strokeWidth: {
      0: "0",
      1: "1",
      2: "2"
    },
    supports: {},
    data: {},
    textColor: ({ theme: e }) => e("colors"),
    textDecorationColor: ({ theme: e }) => e("colors"),
    textDecorationThickness: {
      auto: "auto",
      "from-font": "from-font",
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px"
    },
    textIndent: ({ theme: e }) => ({
      ...e("spacing")
    }),
    textOpacity: ({ theme: e }) => e("opacity"),
    textUnderlineOffset: {
      auto: "auto",
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px"
    },
    transformOrigin: {
      center: "center",
      top: "top",
      "top-right": "top right",
      right: "right",
      "bottom-right": "bottom right",
      bottom: "bottom",
      "bottom-left": "bottom left",
      left: "left",
      "top-left": "top left"
    },
    transitionDelay: {
      0: "0s",
      75: "75ms",
      100: "100ms",
      150: "150ms",
      200: "200ms",
      300: "300ms",
      500: "500ms",
      700: "700ms",
      1e3: "1000ms"
    },
    transitionDuration: {
      DEFAULT: "150ms",
      0: "0s",
      75: "75ms",
      100: "100ms",
      150: "150ms",
      200: "200ms",
      300: "300ms",
      500: "500ms",
      700: "700ms",
      1e3: "1000ms"
    },
    transitionProperty: {
      none: "none",
      all: "all",
      DEFAULT: "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
      colors: "color, background-color, border-color, text-decoration-color, fill, stroke",
      opacity: "opacity",
      shadow: "box-shadow",
      transform: "transform"
    },
    transitionTimingFunction: {
      DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
      linear: "linear",
      in: "cubic-bezier(0.4, 0, 1, 1)",
      out: "cubic-bezier(0, 0, 0.2, 1)",
      "in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
    },
    translate: ({ theme: e }) => ({
      ...e("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      full: "100%"
    }),
    width: ({ theme: e }) => ({
      auto: "auto",
      ...e("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      "1/12": "8.333333%",
      "2/12": "16.666667%",
      "3/12": "25%",
      "4/12": "33.333333%",
      "5/12": "41.666667%",
      "6/12": "50%",
      "7/12": "58.333333%",
      "8/12": "66.666667%",
      "9/12": "75%",
      "10/12": "83.333333%",
      "11/12": "91.666667%",
      full: "100%",
      screen: "100vw",
      min: "min-content",
      max: "max-content",
      fit: "fit-content"
    }),
    willChange: {
      auto: "auto",
      scroll: "scroll-position",
      contents: "contents",
      transform: "transform"
    },
    zIndex: {
      auto: "auto",
      0: "0",
      10: "10",
      20: "20",
      30: "30",
      40: "40",
      50: "50"
    }
  },
  plugins: []
};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: () => l
  });
  const t = /* @__PURE__ */ i(mn), n = fe;
  function i(s) {
    return s && s.__esModule ? s : {
      default: s
    };
  }
  function l(s) {
    var r;
    const a = ((r = s?.presets) !== null && r !== void 0 ? r : [
      t.default
    ]).slice().reverse().flatMap((p) => l(p instanceof Function ? p() : p)), u = {
      // Add experimental configs here...
      respectDefaultRingColorOpacity: {
        theme: {
          ringColor: ({ theme: p }) => ({
            DEFAULT: "#3b82f67f",
            ...p("colors")
          })
        }
      },
      disableColorOpacityUtilitiesByDefault: {
        corePlugins: {
          backgroundOpacity: !1,
          borderOpacity: !1,
          divideOpacity: !1,
          placeholderOpacity: !1,
          ringOpacity: !1,
          textOpacity: !1
        }
      }
    }, o = Object.keys(u).filter((p) => (0, n.flagEnabled)(s, p)).map((p) => u[p]);
    return [
      s,
      ...o,
      ...a
    ];
  }
})(st);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: () => l
  });
  const t = /* @__PURE__ */ i(Re), n = /* @__PURE__ */ i(st);
  function i(s) {
    return s && s.__esModule ? s : {
      default: s
    };
  }
  function l(...s) {
    let [, ...r] = (0, n.default)(s[0]);
    return (0, t.default)([
      ...s,
      ...r
    ]);
  }
})(Ue);
let he = Ue;
var gn = (he.__esModule ? he : { default: he }).default, hn = {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {}
  },
  variants: {
    extend: {
      backgroundColor: ["active"]
      // permits active:bg-red-50 type classes
    }
  },
  plugins: []
};
const _n = gn(hn);
function bn(e) {
  e = e.replace("#", "");
  const t = parseInt(
    e.length === 3 ? e.slice(0, 1).repeat(2) : e.slice(0, 2),
    16
  ), n = parseInt(
    e.length === 3 ? e.slice(1, 2).repeat(2) : e.slice(2, 4),
    16
  ), i = parseInt(
    e.length === 3 ? e.slice(2, 3).repeat(2) : e.slice(4, 6),
    16
  ), l = parseInt(e.length === 3 ? "ff" : e.slice(6, 8), 16);
  return {
    red: t,
    green: n,
    blue: i,
    alpha: l
  };
}
const yn = T({
  props: {
    color: {
      type: String,
      default: null
    },
    textColor: {
      type: String,
      default: null
    }
  },
  computed: {
    resolvedColor() {
      return this.resolveColor(this.color);
    },
    resolvedTextColor() {
      return this.resolveColor(this.textColor);
    },
    colorableTextStyle() {
      return {
        color: this.resolvedTextColor ?? this.resolvedColor
      };
    },
    colorableTextStyleForBackground() {
      return {
        color: this.resolvedTextColor ?? this.fontColorForBackgroundColor(this.resolvedColor)
      };
    },
    colorableBackgroundStyle() {
      return {
        backgroundColor: this.resolvedColor
      };
    }
  },
  methods: {
    resolveColor(e) {
      const t = A(_n, ["theme", "colors"]), n = A(t, e);
      return typeof n == "string" ? n : e;
    },
    fontColorForBackgroundColor(e) {
      const t = bn(e);
      return t.alpha * 255 < 150 || Math.round(
        (t.red * 299 + t.green * 587 + t.blue * 114) / 1e3
      ) > 125 ? "#000" : "#fff";
    }
  }
}), vn = T({
  mixins: [yn]
});
const $n = { class: "flex-grow" };
function kn(e, t, n, i, l, s) {
  return d(), m("div", {
    class: "k-alert",
    style: ie([e.colorableBackgroundStyle, e.colorableTextStyleForBackground])
  }, [
    w("div", $n, [
      U(e.$slots, "default")
    ])
  ], 4);
}
const wn = /* @__PURE__ */ P(vn, [["render", kn]]), Sn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: wn
}, Symbol.toStringTag, { value: "Module" }));
const On = {}, xn = { class: "k-app" };
function jn(e, t) {
  const n = z("KSnackbar"), i = z("KConfirm");
  return d(), m("div", xn, [
    B(i, null, {
      default: L(() => [
        B(n, null, {
          default: L(() => [
            U(e.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    })
  ]);
}
const Tn = /* @__PURE__ */ P(On, [["render", jn]]), Cn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Tn
}, Symbol.toStringTag, { value: "Module" })), Pn = T({
  directives: {
    ClickAway: Be
  },
  // model: {
  //     prop: 'value',
  //     event: 'change',
  // },
  props: {
    modelValue: {
      type: [String, Object, Number],
      default: null
    },
    itemValue: {
      type: String,
      default: "value"
    },
    itemText: {
      type: String,
      default: "text"
    },
    returnObject: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      default: "Start typing..."
    },
    // readonly: {
    //  type: Boolean,
    //  default: false
    // },
    width: {
      type: [String, Number],
      default: "100%"
    },
    items: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: !1
    },
    combobox: {
      type: Boolean,
      default: !1
    },
    filter: {
      type: Function,
      default: (e) => !!e
    },
    editable: {
      type: Boolean,
      default: !0
    }
  },
  data() {
    return {
      inputText: null,
      // this.displayValueFormatter(this.modelValue),
      currentFocus: -1,
      focus: !1
      // captureKeyStrokes: true,
    };
  },
  computed: {
    style() {
      return {
        width: X(this.width)
      };
    },
    itemsFiltered() {
      return this.items.filter(
        (e) => this.filter(e)
      );
    },
    placeholderText() {
      return this.editable ? this.placeholder : void 0;
    },
    localValue: {
      set(e) {
        e ? this.returnObject ? this.$emit("update:modelValue", e) : this.$emit("update:modelValue", A(e, this.itemValue, e)) : this.$emit("update:modelValue", null);
      },
      get() {
        return this.isObject(this.modelValue) ? this.modelValue : this.items.find(
          (e) => A(e, this.itemValue, e) == this.modelValue
        );
      }
    },
    isValidSelection() {
      return !!this.localValue;
    }
  },
  watch: {
    inputText(e) {
      this.$emit("update:search-input", e);
    },
    items() {
      this.currentFocus = -1, this.localValue && (this.combobox || (this.inputText = String(
        this.isObject(this.localValue) ? A(this.localValue, this.itemText, "") : this.localValue
      )));
    },
    value: {
      handler(e) {
        this.inputText = A(this.localValue, this.itemText, e);
      },
      immediate: !0
    },
    focus(e) {
      e || this.localValue || this.combobox || (this.inputText = null);
    }
  },
  methods: {
    async select(e) {
      this.combobox || (e = Math.max(e, 0));
      const t = this.items[e];
      this.combobox ? t && (this.localValue = t) : (this.localValue = t, this.inputText = A(
        t,
        this.itemText,
        t
      )), await this.$nextTick(), this.setBlur();
    },
    setFocus() {
      this.focus = !0;
    },
    setBlur() {
      this.$refs.input.blur(), this.focus = !1;
    },
    isObject(e) {
      return typeof e == "object" && e instanceof Object && !(e instanceof Array);
    },
    clearInput() {
      this.localValue = null;
    },
    keyup() {
      this.combobox ? this.localValue = this.inputText : this.localValue = null;
    }
  }
});
const Kn = { class: "k-autocomplete-input" }, Mn = ["placeholder", "readonly"], An = {
  key: 0,
  class: "k-autocomplete-items"
}, Vn = ["onClick"];
function zn(e, t, n, i, l, s) {
  const r = Ne("click-away");
  return oe((d(), m("div", {
    class: "k-autocomplete",
    style: ie([e.style])
  }, [
    U(e.$slots, "prepend", { item: e.localValue }),
    w("div", Kn, [
      oe(w("input", {
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = (a) => e.inputText = a),
        class: J(["k-input", { invalidSelection: !e.isValidSelection }]),
        type: "search",
        autocomplete: "off",
        placeholder: e.placeholderText,
        readonly: !e.editable,
        onSearch: t[1] || (t[1] = (...a) => e.clearInput && e.clearInput(...a)),
        onKeydown: [
          t[2] || (t[2] = ae(re((a) => e.currentFocus = Math.max(-1, e.currentFocus - 1), ["prevent"]), ["arrow-up"])),
          t[3] || (t[3] = ae(re((a) => e.currentFocus = Math.min(e.items.length - 1, e.currentFocus + 1), ["prevent"]), ["arrow-down"])),
          t[4] || (t[4] = ae(re((a) => e.select(e.currentFocus), ["prevent"]), ["enter"])),
          t[6] || (t[6] = ae((...a) => e.setBlur && e.setBlur(...a), ["tab"]))
        ],
        onFocus: t[5] || (t[5] = (...a) => e.setFocus && e.setFocus(...a)),
        onKeyup: t[7] || (t[7] = (...a) => e.keyup && e.keyup(...a))
      }, null, 42, Mn), [
        [ve, e.inputText]
      ]),
      e.focus && e.items.length && e.inputText ? (d(), m("div", An, [
        (d(!0), m(q, null, Z(e.itemsFiltered, (a, u) => (d(), m("div", {
          key: u,
          class: J(["k-autocomplete-item", { "k-autocomplete-active": e.currentFocus == u }]),
          onClick: (o) => e.select(u)
        }, [
          U(e.$slots, "item", { item: a }, () => [
            G(F(a), 1)
          ])
        ], 10, Vn))), 128))
      ])) : M("", !0)
    ])
  ], 4)), [
    [r, e.setBlur]
  ]);
}
const Ln = /* @__PURE__ */ P(Pn, [["render", zn]]), Fn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ln
}, Symbol.toStringTag, { value: "Module" }));
function te(e, t) {
  const n = Fe(e, t);
  if (!n)
    throw new Error(`Could not resolve ${e.description}`);
  return n;
}
const se = Symbol("session"), ge = Symbol("config"), Nn = Symbol("snackbar"), Dn = Symbol("confirmDialogKey"), _e = new ke();
class En {
  session;
  queueItems;
  intervalId;
  constructor() {
    this.session = null, this.queueItems = [], this.intervalId = 0;
  }
  resetQueue() {
    this.queueItems = [];
  }
  queue(t, n, i) {
    this.session = t, this.queueItems.push({
      resolveFunc: n,
      dataId: i
    }), clearInterval(this.intervalId), this.intervalId = setTimeout(this.processQueue.bind(this), 50);
  }
  async processQueue() {
    const t = this.session.rpcClient("/api/v1/rh/rpc/node/"), n = this.queueItems;
    this.resetQueue(), n.forEach((i) => {
      const l = i.dataId;
      t.queue("NodeLookup", { dataId: l });
    });
    try {
      (await t.batch(!0)).forEach((l, s) => {
        const r = n[s].resolveFunc;
        r(l);
      });
    } catch {
      n.forEach((i) => i.resolveFunc(null));
    }
  }
}
class Bn {
  nodes;
  nodeLookupQueue;
  constructor() {
    this.nodes = {}, this.nodeLookupQueue = new En();
  }
  registerUsers(t) {
    t.forEach((n) => this.nodes[n.dataid] = n);
  }
  async lookup(t, n) {
    return n ? (await _e.acquire(n), this.nodes[n] ? (_e.release(n), this.nodes[n]) : new Promise((i) => {
      const l = (s) => {
        this.nodes[n] = s, i(s), _e.release(n);
      };
      this.nodeLookupQueue.queue(t, l, n);
    })) : null;
  }
}
const Un = new Bn(), Rn = T({
  setup() {
    return { session: te(se) };
  },
  props: {
    nodeRec: {
      type: Object,
      default: null
    },
    dataid: {
      type: Number,
      default: null
    },
    image: {
      type: Boolean,
      default: !0
    },
    clickable: {
      type: Boolean,
      default: !0
    }
  },
  data() {
    return {
      nodeRecLocal: null
    };
  },
  computed: {
    nodeRecResolved() {
      return this.nodeRec ?? this.nodeRecLocal;
    }
  },
  watch: {
    dataid: {
      async handler(e) {
        e && (this.nodeRecLocal = await Un.lookup(this.session, e));
      },
      immediate: !0
    }
  }
}), In = { key: 0 }, Wn = ["src"], qn = ["href"], Hn = ["innerHTML"];
function Gn(e, t, n, i, l, s) {
  const r = z("KFunctionMenu");
  return e.nodeRecResolved ? (d(), m("span", In, [
    e.image ? (d(), m("img", {
      key: 0,
      src: e.nodeRecResolved.gif
    }, null, 8, Wn)) : M("", !0),
    G(" "),
    w("a", {
      href: e.nodeRecResolved.url
    }, F(e.nodeRecResolved.name), 9, qn),
    e.clickable ? (d(), D(r, {
      key: 1,
      dataid: e.nodeRecResolved.dataid
    }, null, 8, ["dataid"])) : M("", !0),
    w("span", {
      innerHTML: e.nodeRecResolved.modifiedImageCallback
    }, null, 8, Hn)
  ])) : M("", !0);
}
const Qn = /* @__PURE__ */ P(Rn, [["render", Gn]]), Xn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qn
}, Symbol.toStringTag, { value: "Module" })), Yn = T({
  props: {
    small: {
      type: Boolean,
      default: !1
    },
    text: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["click"],
  computed: {
    classObj() {
      return {
        "k-button--small": this.small,
        "k-button--text": this.text,
        "k-button--disabled": this.disabled
        // 'k-button--icon': this.icon,
      };
    }
  }
});
const Jn = ["disabled"];
function Zn(e, t, n, i, l, s) {
  return d(), m("button", De({
    class: ["k-button", e.classObj],
    disabled: e.disabled,
    type: "button"
  }, e.$attrs, {
    onClick: t[0] || (t[0] = (r) => e.$emit("click"))
  }), [
    U(e.$slots, "default")
  ], 16, Jn);
}
const er = /* @__PURE__ */ P(Yn, [["render", Zn]]), tr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: er
}, Symbol.toStringTag, { value: "Module" })), nr = T({
  provide() {
    return {
      // @ts-ignore - not sure why this complains
      [Dn]: this
    };
  },
  data() {
    return {
      dialog: !1,
      noLabel: "Cancel",
      yesLabel: "OK",
      title: null,
      message: null,
      resolve: null
    };
  },
  methods: {
    dismiss(e) {
      this.dialog = !1, this.resolve && (this.resolve(e), this.resolve = null);
    },
    alert({
      yesLabel: e = "OK",
      title: t,
      message: n
    }) {
      return this.confirm({ yesLabel: e, title: t, message: n });
    },
    confirm({
      noLabel: e = "Cancel",
      yesLabel: t = "OK",
      title: n,
      message: i
    }) {
      return this.noLabel = e, this.yesLabel = t, this.title = n, this.message = i, new Promise((l) => {
        this.resolve = l, this.dialog = !0;
      });
    }
  }
});
function rr(e, t, n, i, l, s) {
  const r = z("KCardTitle"), a = z("KCardText"), u = z("KSpacer"), o = z("KButton"), p = z("KCardActions"), K = z("KCard"), g = z("KDialog");
  return d(), m(q, null, [
    U(e.$slots, "default"),
    B(g, {
      modelValue: e.dialog,
      "onUpdate:modelValue": t[2] || (t[2] = (v) => e.dialog = v),
      "max-width": "30vw",
      "min-width": "20vw"
    }, {
      default: L(() => [
        B(K, null, {
          default: L(() => [
            e.title ? (d(), D(r, { key: 0 }, {
              default: L(() => [
                G(F(e.title), 1)
              ]),
              _: 1
            })) : M("", !0),
            e.message ? (d(), D(a, { key: 1 }, {
              default: L(() => [
                G(F(e.message), 1)
              ]),
              _: 1
            })) : M("", !0),
            B(p, null, {
              default: L(() => [
                B(u),
                e.noLabel ? (d(), D(o, {
                  key: 0,
                  small: "",
                  onClick: t[0] || (t[0] = (v) => e.dismiss(!1))
                }, {
                  default: L(() => [
                    G(F(e.noLabel), 1)
                  ]),
                  _: 1
                })) : M("", !0),
                e.yesLabel ? (d(), D(o, {
                  key: 1,
                  small: "",
                  onClick: t[1] || (t[1] = (v) => e.dismiss(!0))
                }, {
                  default: L(() => [
                    G(F(e.yesLabel), 1)
                  ]),
                  _: 1
                })) : M("", !0)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["modelValue"])
  ], 64);
}
const or = /* @__PURE__ */ P(nr, [["render", rr]]), sr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: or
}, Symbol.toStringTag, { value: "Module" })), ir = T({
  props: {
    modelValue: {
      type: [String, Date],
      default: null
    },
    time: {
      type: Boolean,
      default: !1
    },
    editable: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["update:modelValue"],
  computed: {
    type() {
      return this.time ? "datetime-local" : "date";
    },
    localModelValue: {
      set(e) {
        this.$emit("update:modelValue", this.formatForDatePicker(e));
      },
      get() {
        return this.formatForDatePicker(this.modelValue);
      }
    }
  },
  methods: {
    parse(e) {
      return e ? new Date(e) : null;
    },
    setToNow() {
      this.localModelValue = /* @__PURE__ */ new Date();
    },
    formatForDatePicker(e) {
      const t = this.parse(e);
      return t ? this.time ? Ke(t, "yyyy-MM-dd'T'HH:mm:ss") : Ke(t, "yyyy-MM-dd") : null;
    }
  }
});
const lr = { class: "k-date-time-picker" }, ar = ["type", "readonly"];
function ur(e, t, n, i, l, s) {
  const r = z("KButton");
  return d(), m("div", lr, [
    oe(w("input", {
      "onUpdate:modelValue": t[0] || (t[0] = (a) => e.localModelValue = a),
      class: "k-input",
      type: e.type,
      readonly: !e.editable
    }, null, 8, ar), [
      [pt, e.localModelValue]
    ]),
    e.editable ? (d(), m(q, { key: 0 }, [
      B(r, {
        small: "",
        onClick: e.setToNow
      }, {
        default: L(() => [
          G(" Now ")
        ]),
        _: 1
      }, 8, ["onClick"]),
      B(r, {
        small: "",
        onClick: t[1] || (t[1] = (a) => e.$emit("update:modelValue", null))
      }, {
        default: L(() => [
          G(" Clear ")
        ]),
        _: 1
      })
    ], 64)) : M("", !0)
  ]);
}
const dr = /* @__PURE__ */ P(ir, [["render", ur]]), cr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dr
}, Symbol.toStringTag, { value: "Module" })), pr = T({
  directives: {
    ClickAway: Be
  },
  mixins: [ce],
  props: {
    modelValue: {
      type: Boolean,
      required: !1
    },
    persistent: {
      type: Boolean,
      default: !1
    },
    scrollable: {
      type: Boolean,
      default: !1
    },
    width: {
      type: [Number, String],
      default: "75vw"
    },
    maxHeight: {
      type: [Number, String],
      default: "90%"
    },
    zIndex: {
      type: [Number],
      default: 10
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      dialog: !1,
      mounted: !1
    };
  },
  computed: {
    classObj() {
      return {
        "k-dialog--scrollable": this.scrollable
      };
    },
    style() {
      return {
        zIndex: this.zIndex
      };
    }
  },
  watch: {
    modelValue: {
      handler(e) {
        this.dialog = e;
      },
      immediate: !0
    },
    async dialog(e) {
      this.$emit("update:modelValue", e), e ? (await this.$nextTick(), ht(this.$refs.content)) : _t(this.$refs.content);
    }
  },
  mounted() {
    this.mounted = !0;
  },
  methods: {
    clickAway() {
      this.persistent || this.closeDialog();
    },
    closeDialog() {
      this.dialog && (this.dialog = !1);
    },
    on() {
      this.dialog = !this.dialog;
    }
  }
});
function fr(e, t, n, i, l, s) {
  const r = Ne("click-away");
  return d(), m(q, null, [
    U(e.$slots, "activator", { on: e.on }),
    e.mounted ? (d(), D(ft, {
      key: 0,
      to: ".k-app"
    }, [
      B(de, { name: "fade" }, {
        default: L(() => [
          e.dialog ? (d(), m("div", {
            key: 0,
            class: "k-dialog",
            style: ie([e.style])
          }, [
            oe((d(), m("div", {
              ref: "content",
              class: J(["k-dialog-content", e.classObj]),
              style: ie([e.measurableStyles])
            }, [
              U(e.$slots, "default", { on: e.on })
            ], 6)), [
              [r, e.clickAway]
            ])
          ], 4)) : M("", !0)
        ]),
        _: 3
      })
    ])) : M("", !0)
  ], 64);
}
const mr = /* @__PURE__ */ P(pr, [["render", fr]]), gr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mr
}, Symbol.toStringTag, { value: "Module" })), hr = T({
  props: {
    color: {
      type: String,
      default: "green"
    },
    size: {
      type: [String, Number],
      default: "0.75em"
    },
    outline: {
      type: Boolean,
      default: !1
    },
    outlineWidth: {
      type: [String, Number],
      default: 2
    }
  },
  computed: {
    style() {
      const e = X(this.size);
      return this.outline ? {
        borderStyle: "solid",
        borderWidth: X(this.outlineWidth),
        borderColor: this.color,
        width: e,
        height: e
      } : {
        width: e,
        height: e,
        backgroundColor: this.color
      };
    }
  }
});
function _r(e, t, n, i, l, s) {
  return d(), m("div", {
    class: "k-dot",
    style: ie([e.style])
  }, [
    U(e.$slots, "default")
  ], 4);
}
const br = /* @__PURE__ */ P(hr, [["render", _r]]), yr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: br
}, Symbol.toStringTag, { value: "Module" })), le = T({
  props: {
    label: {
      type: String,
      default: null
    },
    successMessages: {
      type: Array,
      default: () => []
    },
    errorMessages: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    hasSuccess() {
      return !!this.successMessages.length;
    },
    hasError() {
      return !!this.errorMessages.length;
    },
    classObj() {
      return {
        "k-input": !0,
        "k-input--success": this.hasSuccess && !this.hasError,
        "k-input--error": this.hasError
      };
    }
  }
}), vr = {
  mixins: [le]
};
const $r = {
  key: 0,
  class: "k-form-field-label"
};
function kr(e, t, n, i, l, s) {
  return d(), m("div", null, [
    e.label ? (d(), m("div", $r, F(e.label), 1)) : M("", !0),
    U(e.$slots, "default"),
    (d(!0), m(q, null, Z(e.successMessages, (r, a) => (d(), m("div", {
      key: a,
      class: "k-formfield--success"
    }, F(r), 1))), 128)),
    (d(!0), m(q, null, Z(e.errorMessages, (r, a) => (d(), m("div", {
      key: a,
      class: "k-formfield--error"
    }, F(r), 1))), 128))
  ]);
}
const wr = /* @__PURE__ */ P(vr, [["render", kr]]), Sr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: wr,
  mixin: le
}, Symbol.toStringTag, { value: "Module" })), Or = T({
  setup() {
    return { config: te(ge) };
  },
  props: {
    // The DataId of the node.
    dataid: {
      type: Number,
      required: !0
    },
    func: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      image: ""
    };
  },
  computed: {
    uniqueid() {
      return Math.random().toString(36).substring(2, 15);
    },
    isModernFunctionMenu() {
      return !!window.functionMenuExpansionStatus;
    },
    aid() {
      return this.isModernFunctionMenu ? this.xid : void 0;
    },
    xid() {
      return `x${this.dataid}${this.uniqueid}`;
    },
    zid() {
      return `z${this.dataid}${this.uniqueid}`;
    }
  },
  watch: {
    // reset the cached menu
    dataid() {
      const e = this.$refs.functionMenuDiv;
      if (e)
        for (; e.firstChild; )
          e.removeChild(e.firstChild);
    }
  },
  mounted() {
    this.isModernFunctionMenu || this.onmouseout();
  },
  methods: {
    onclick(e) {
      if (window.setSectionName && window.showFunctionMenu2)
        return window.setSectionName(this.uniqueid), window.showFunctionMenu2("", this.dataid, e, "", this.func), window.setSectionName(""), !1;
      throw new Error("KFunctionMenu window global functions missing.");
    },
    onmouseover() {
      this.image = `${this.config.img}webdoc/actions_hover.png`;
    },
    onmouseout() {
      this.image = `${this.config.img}webdoc/actions.png`;
    }
  }
}), xr = { key: 0 }, jr = ["id"], Tr = ["src"], Cr = ["id", "src"];
function Pr(e, t, n, i, l, s) {
  return e.dataid ? (d(), m("span", xr, [
    w("a", {
      id: e.aid,
      href: "#",
      class: "functionMenuHotspot",
      onClick: t[2] || (t[2] = re((...r) => e.onclick && e.onclick(...r), ["prevent"]))
    }, [
      e.isModernFunctionMenu ? (d(), m("img", {
        key: 0,
        src: `${e.config.img}spacer.gif`,
        alt: "Functions"
      }, null, 8, Tr)) : (d(), m("img", {
        key: 1,
        id: e.xid,
        src: e.image,
        border: "0",
        alt: "Functions",
        title: "Functions",
        onMouseover: t[0] || (t[0] = (...r) => e.onmouseover && e.onmouseover(...r)),
        onMouseout: t[1] || (t[1] = (...r) => e.onmouseout && e.onmouseout(...r))
      }, null, 40, Cr))
    ], 8, jr),
    t[3] || (Pe(-1), t[3] = w("div", {
      id: e.zid,
      ref: "functionMenuDiv",
      class: "functionMenuDiv"
    }, null, 8, ["id"]), Pe(1), t[3])
  ])) : M("", !0);
}
const Kr = /* @__PURE__ */ P(Or, [["render", Pr]]), Mr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Kr
}, Symbol.toStringTag, { value: "Module" })), Ar = T({});
const Vr = { class: "k-progress-line" };
function zr(e, t, n, i, l, s) {
  return d(), m("div", Vr);
}
const Lr = /* @__PURE__ */ P(Ar, [["render", zr]]), Fr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Lr
}, Symbol.toStringTag, { value: "Module" })), Nr = T({
  props: {
    modelValue: {
      type: Array,
      required: !0
    },
    minItems: {
      type: Number,
      default: 0
    },
    maxItems: {
      type: Number,
      default: 100
    },
    template: {
      type: Object,
      // default: () => {},
      default: null
    }
  },
  emits: ["update:modelValue"],
  computed: {
    valueLocal: {
      get() {
        return this.modelValue.length == 0 ? [this.template] : this.modelValue;
      },
      set(e) {
        this.$emit("update:modelValue", e);
      }
    },
    canAdd() {
      return this.count < this.maxItems;
    },
    canRemove() {
      return this.minItems < this.count;
    },
    count() {
      return this.valueLocal.length;
    }
  },
  methods: {
    add(e) {
      const t = [...this.valueLocal];
      t.splice(e + 1, 0, this.template), this.valueLocal = t;
    },
    remove(e) {
      const t = [...this.valueLocal];
      t.splice(e, 1), this.valueLocal = t;
    },
    update(e, t) {
      const n = [...this.valueLocal];
      n[e] = t, this.valueLocal = n;
    }
  }
});
const Dr = { class: "k-multi-widget" }, Er = { class: "k-multi-buttons" }, Br = /* @__PURE__ */ w("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ w("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z" })
], -1), Ur = /* @__PURE__ */ w("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ w("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" })
], -1);
function Rr(e, t, n, i, l, s) {
  const r = z("KButton"), a = z("KCard");
  return d(), D(a, { class: "k-multi" }, {
    default: L(() => [
      B($e, {
        name: "fade",
        tag: "div"
      }, {
        default: L(() => [
          (d(!0), m(q, null, Z(e.valueLocal, (u, o) => (d(), m("div", {
            key: `k-multi-${u}`,
            class: "k-multi-item"
          }, [
            w("div", Dr, [
              U(e.$slots, "default", {
                index: o,
                value: u,
                update: (p) => e.update(o, p)
              })
            ]),
            w("div", Er, [
              e.canRemove ? (d(), D(r, {
                key: 0,
                text: "",
                onClick: (p) => e.remove(o)
              }, {
                default: L(() => [
                  Br
                ]),
                _: 2
              }, 1032, ["onClick"])) : M("", !0),
              e.canAdd ? (d(), D(r, {
                key: 1,
                text: "",
                onClick: (p) => e.add(o)
              }, {
                default: L(() => [
                  Ur
                ]),
                _: 2
              }, 1032, ["onClick"])) : M("", !0)
            ])
          ]))), 128))
        ]),
        _: 3
      })
    ]),
    _: 3
  });
}
const Ir = /* @__PURE__ */ P(Nr, [["render", Rr]]), Wr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ir
}, Symbol.toStringTag, { value: "Module" })), qr = T({
  props: {
    modelValue: {
      type: Array,
      required: !0
    },
    maxItems: {
      type: Number,
      default: 100
    },
    readonly: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  computed: {
    valueLocal: {
      get() {
        return this.modelValue;
      },
      set(e) {
        this.$emit("update:modelValue", e);
      }
    },
    count() {
      return this.valueLocal?.length ?? 0;
    },
    canAdd() {
      return this.count < this.maxItems && !this.readonly;
    }
  },
  methods: {
    add(e) {
      e && (this.valueLocal = [...this.valueLocal, e].filter(
        (t, n, i) => i.indexOf(t) === n
      ));
    },
    remove(e) {
      const t = [...this.valueLocal];
      t.splice(e, 1), this.valueLocal = t;
    }
  }
});
const Hr = { class: "k-multi-widget" }, Gr = /* @__PURE__ */ w("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ w("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z" })
], -1);
function Qr(e, t, n, i, l, s) {
  const r = z("KButton"), a = z("KCard");
  return d(), D(a, { class: "k-multi" }, {
    default: L(() => [
      B($e, {
        name: "fade",
        tag: "div"
      }, {
        default: L(() => [
          (d(!0), m(q, null, Z(e.valueLocal, (u, o) => (d(), m("div", {
            key: `k-multi-${u}`,
            class: "k-multi-item"
          }, [
            w("div", Hr, [
              U(e.$slots, "readonly", {
                index: o,
                value: u
              }, () => [
                G(F(u), 1)
              ])
            ]),
            e.readonly ? M("", !0) : (d(), D(r, {
              key: 0,
              text: "",
              onClick: (p) => e.remove(o)
            }, {
              default: L(() => [
                Gr
              ]),
              _: 2
            }, 1032, ["onClick"]))
          ]))), 128))
        ]),
        _: 3
      }),
      e.canAdd ? U(e.$slots, "add", {
        key: 0,
        add: e.add
      }) : M("", !0)
    ]),
    _: 3
  });
}
const Xr = /* @__PURE__ */ P(qr, [["render", Qr]]), Yr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xr
}, Symbol.toStringTag, { value: "Module" })), Jr = T({
  props: {
    modelValue: {
      type: Array,
      required: !0
    },
    users: {
      type: Boolean,
      default: !0
    },
    groups: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    userIdsLocal: {
      set(e) {
        this.$emit("update:modelValue", e);
      },
      get() {
        return this.modelValue;
      }
    }
  }
});
function Zr(e, t, n, i, l, s) {
  const r = z("KUserLink"), a = z("KUserPicker"), u = z("KMulti2");
  return d(), D(u, {
    modelValue: e.userIdsLocal,
    "onUpdate:modelValue": t[0] || (t[0] = (o) => e.userIdsLocal = o),
    readonly: e.readonly
  }, {
    readonly: L(({ value: o }) => [
      B(r, {
        user: o,
        gif: ""
      }, null, 8, ["user"])
    ]),
    add: L(({ add: o }) => [
      B(a, {
        "onUpdate:modelValue": (p) => o(p),
        users: e.users,
        groups: e.groups
      }, null, 8, ["onUpdate:modelValue", "users", "groups"])
    ]),
    _: 1
  }, 8, ["modelValue", "readonly"]);
}
const eo = /* @__PURE__ */ P(Jr, [["render", Zr]]), to = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: eo
}, Symbol.toStringTag, { value: "Module" })), Me = new ke();
class no {
  nodes;
  constructor() {
    this.nodes = {};
  }
  // registerNodes(items: Array<Record<string, any>>) {
  //   items.forEach((user) => {
  //     this.nodes[user.value] = user
  //   })
  // }
  async lookup(t, n) {
    try {
      if (await Me.acquire(n), !this.nodes[n]) {
        const i = await t.nodes.ancestors(n);
        this.nodes[n] = A(i, "data.ancestors", []);
      }
      return this.nodes[n];
    } finally {
      Me.release(n);
    }
  }
}
const it = new no(), ro = T({
  setup() {
    return { session: te(se) };
  },
  props: {
    dataid: {
      type: Number,
      required: !0
    }
  },
  data() {
    return {
      breadcrumb: []
    };
  },
  watch: {
    dataid: {
      async handler(e) {
        e && (this.breadcrumb = await it.lookup(this.session, e));
      },
      immediate: !0
    }
  }
});
const oo = { class: "k-node-breadcrumb" };
function so(e, t, n, i, l, s) {
  return d(), m("div", oo, [
    (d(!0), m(q, null, Z(e.breadcrumb, (r, a) => (d(), m(q, {
      key: r.dataid
    }, [
      G(F(r.name) + " ", 1),
      a < e.breadcrumb.length - 1 ? (d(), m(q, { key: 0 }, [
        G(" ▶ ")
      ], 64)) : M("", !0)
    ], 64))), 128))
  ]);
}
const lt = /* @__PURE__ */ P(ro, [["render", so]]), io = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: lt
}, Symbol.toStringTag, { value: "Module" })), lo = T({
  components: { KNodeAncestor: lt },
  setup() {
    return {
      session: te(se),
      config: te(ge)
    };
  },
  props: {
    modelValue: {
      type: Number,
      default: null
    },
    title: {
      type: String,
      default: "Target Browse"
    },
    objid: {
      type: Number,
      default: null
    },
    selectPerm: {
      type: Number,
      default: 2
      // read permissions
    },
    width: {
      type: Number,
      default: 800
    },
    height: {
      type: Number,
      default: 600
    },
    selectScreen: {
      type: Array,
      default: () => []
    },
    browseButtonLabel: {
      type: String,
      default: "Browse Content Server..."
    },
    clearable: {
      type: Boolean,
      defalut: !0
    },
    clearButtonLabel: {
      type: String,
      default: "clear"
    }
  },
  data() {
    return {
      breadcrumb: []
    };
  },
  computed: {
    dataid: {
      set(e) {
        this.$emit("update:modelValue", e);
      },
      get() {
        return this.modelValue;
      }
    },
    uniqueid() {
      return `targetbrowse_${Math.random().toString(36).substring(2, 15)}`;
    },
    // breadcrumbString() {
    //   if (this.breadcrumb) {
    //     return `Path: ${this.breadcrumb.replace(':', ' &#9654; ')}`
    //   } else {
    //     return null
    //   }
    // },
    globalCallbackFunctionName() {
      return `${this.uniqueid}_DoSelection`;
    },
    selectScreenString() {
      return this.selectScreen.length ? {
        selectScreen: `{${this.selectScreen.join(",")}}`
      } : null;
    },
    urlParams() {
      return {
        func: "ll",
        objAction: "TargetBrowse",
        headerLabel: this.title,
        objid: String(this.targetBrowseObjID()),
        selectPerm: String(this.selectPerm),
        ...this.selectScreenString,
        formname: "theFormName",
        fieldPrefix: this.uniqueid
      };
    },
    url() {
      return bt(this.config.baseUrl, {
        queryParams: this.urlParams
      });
    },
    name() {
      return this.breadcrumb[this.breadcrumb.length - 1]?.name;
    },
    windowParams() {
      const e = {
        width: this.width,
        height: this.height,
        resizable: "yes",
        menubar: "no",
        scrollbars: "yes",
        toolbar: "yes"
      };
      return Object.entries(e).map(([t, n]) => `${t}=${n}`).join(",");
    }
  },
  watch: {
    dataid: {
      async handler() {
        this.dataid ? this.breadcrumb = await it.lookup(
          this.session,
          this.dataid
        ) : this.breadcrumb = [];
      },
      immediate: !0
    }
  },
  async mounted() {
    window[this.globalCallbackFunctionName] = this.callback;
  },
  beforeUnmount() {
    delete window[this.globalCallbackFunctionName];
  },
  // async mounted() {
  //   window['PGDLORCOJEEWEAQEFAUS'] = this.callback
  // },
  // beforeUnmount() {
  //   delete window['PGDLORCOJEEWEAQEFAUS']
  // },
  methods: {
    openWindow() {
      window.open(this.url, "WindowName", this.windowParams);
      const e = this.$refs.input;
      e && e.blur();
    },
    targetBrowseObjID() {
      return this.objid ?? parseInt(yt.get("TargetBrowseObjID") ?? "0");
    },
    didCloseWindow() {
      console.log("didClose");
    },
    // callback(dataid: number, breadcrumb: string) {
    callback(e) {
      this.dataid = e;
    },
    clear() {
      this.breadcrumb = [], this.dataid = null;
    }
  }
});
const ao = { class: "k-node-picker-field" }, uo = ["value"];
function co(e, t, n, i, l, s) {
  const r = z("KButton"), a = z("KNodeAncestor");
  return d(), m("div", ao, [
    w("input", {
      ref: "input",
      type: "text",
      class: "k-input",
      value: e.name,
      onFocus: t[0] || (t[0] = (...u) => e.openWindow && e.openWindow(...u))
    }, null, 40, uo),
    B(r, {
      small: "",
      onClick: e.openWindow
    }, {
      default: L(() => [
        G(F(e.browseButtonLabel), 1)
      ]),
      _: 1
    }, 8, ["onClick"]),
    e.clearable ? (d(), D(r, {
      key: 0,
      small: "",
      onClick: e.clear
    }, {
      default: L(() => [
        G(F(e.clearButtonLabel), 1)
      ]),
      _: 1
    }, 8, ["onClick"])) : M("", !0),
    e.dataid ? (d(), D(a, {
      key: 1,
      dataid: e.dataid
    }, null, 8, ["dataid"])) : M("", !0)
  ]);
}
const po = /* @__PURE__ */ P(lo, [["render", co]]), fo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: po
}, Symbol.toStringTag, { value: "Module" })), mo = T({
  props: {
    loading: {
      type: Boolean,
      default: !1
    },
    label: {
      type: String,
      default: "One moment..."
    }
  }
});
const go = { class: "k-one-moment" }, ho = { class: "k-one-moment-label" };
function _o(e, t, n, i, l, s) {
  const r = z("KSpinner"), a = z("KDialog");
  return d(), D(a, { "model-value": e.loading }, {
    default: L(() => [
      w("div", go, [
        B(r, {
          height: 36,
          width: 36
        }),
        w("div", ho, F(e.label), 1)
      ])
    ]),
    _: 1
  }, 8, ["model-value"]);
}
const bo = /* @__PURE__ */ P(mo, [["render", _o]]), yo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bo
}, Symbol.toStringTag, { value: "Module" })), vo = T({
  props: {
    mimetypes: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      active: !1,
      lastTarget: null
    };
  },
  mounted() {
    window.addEventListener("dragenter", this.dragenter), window.addEventListener("dragleave", this.dragleave), window.addEventListener("dragover", this.dragover), window.addEventListener("drop", this.drop);
  },
  beforeUnmount() {
    window.removeEventListener("dragenter", this.dragenter), window.removeEventListener("dragleave", this.dragleave), window.removeEventListener("dragover", this.dragover), window.removeEventListener("drop", this.drop);
  },
  methods: {
    isFile(e) {
      return e.dataTransfer?.types.some((t) => t === "Files") ?? !1;
    },
    dragenter(e) {
      this.isFile(e) && (this.lastTarget = e.target, this.active = !0);
    },
    dragleave(e) {
      e.preventDefault(), (e.target === this.lastTarget || e.target === window.document) && (this.active = !1);
    },
    dragover(e) {
      e.preventDefault();
    },
    drop(e) {
      if (e.preventDefault(), e.dataTransfer && e.dataTransfer.files.length) {
        this.$emit("predrop");
        let t = Array.from(e.dataTransfer.files);
        this.mimetypes && (t = t.filter((n) => this.mimetypes.includes(n.type))), this.$emit("drop", t);
      }
      this.active = !1;
    }
  }
});
function $o(e, t, n, i, l, s) {
  return d(), m("div", null, [
    U(e.$slots, "default", { active: e.active })
  ]);
}
const ko = /* @__PURE__ */ P(vo, [["render", $o]]), wo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ko
}, Symbol.toStringTag, { value: "Module" })), So = T({
  props: {
    title: {
      type: String,
      required: !0
    },
    subtitle: {
      type: String,
      default: null
    }
  }
});
const Oo = { key: 0 }, xo = { class: "rhmuted" };
function jo(e, t, n, i, l, s) {
  return d(), m("h1", null, [
    G(F(e.title), 1),
    e.subtitle ? (d(), m("span", Oo, [
      G(": "),
      w("span", xo, F(e.subtitle) + " - 2", 1)
    ])) : M("", !0)
  ]);
}
const To = /* @__PURE__ */ P(So, [["render", jo], ["__scopeId", "data-v-8d8d8837"]]), Co = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: To
}, Symbol.toStringTag, { value: "Module" })), Po = T({
  props: {
    modelValue: {
      type: Number,
      required: !0
    },
    pagination: {
      type: Object,
      required: !0
    }
    // length: {
    //   type: Number,
    //   required: true,
    // },
  },
  emits: ["update:modelValue", "update:pageSize"],
  computed: {
    potentiallyMultiplePages() {
      return Math.min(...this.pageSizes) < this.pagination.count;
    },
    pageRange() {
      return A(this.pagination, "pageRange", []);
    },
    pageSizes() {
      return A(this.pagination, "pageSizes", []);
    },
    pageNumber() {
      return A(this.pagination, "pageNumber", 0);
    },
    pageSize: {
      get() {
        return A(this.pagination, "pageSize", 0);
      },
      set(e) {
        this.$emit("update:pageSize", e);
      }
    },
    hasPrevious() {
      return A(this.pagination, "hasPrevious", !1);
    },
    hasNext() {
      return A(this.pagination, "hasNext", !1);
    }
  },
  methods: {
    classObj(e) {
      return {
        "k-pagination-button-selected": e == this.pageNumber
      };
    }
  }
});
const Ko = { class: "k-pagination" }, Mo = {
  key: 1,
  class: "k-pagination-buttons"
}, Ao = {
  key: 0,
  class: "k-pagination-button"
}, Vo = /* @__PURE__ */ w("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ w("path", { d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" })
], -1), zo = [
  Vo
], Lo = { key: 0 }, Fo = ["onClick"], No = {
  key: 1,
  class: "k-pagination-button"
}, Do = /* @__PURE__ */ w("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ w("path", { d: "M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" })
], -1), Eo = [
  Do
], Bo = { key: 2 };
function Uo(e, t, n, i, l, s) {
  const r = z("KSelect");
  return d(), m("div", Ko, [
    e.potentiallyMultiplePages ? (d(), D(r, {
      key: 0,
      modelValue: e.pageSize,
      "onUpdate:modelValue": t[0] || (t[0] = (a) => e.pageSize = a),
      items: e.pageSizes,
      label: "Page Size"
    }, null, 8, ["modelValue", "items"])) : M("", !0),
    e.hasPrevious || e.hasNext ? (d(), m("div", Mo, [
      e.hasPrevious ? (d(), m("a", Ao, zo)) : M("", !0),
      (d(!0), m(q, null, Z(e.pageRange, (a) => (d(), m(q, { key: a }, [
        a === "|" ? (d(), m("div", Lo, "...")) : (d(), m("a", {
          key: 1,
          class: J(["k-pagination-button k-pagination-button-border", e.classObj(a)]),
          onClick: (u) => e.$emit("update:modelValue", a)
        }, F(a), 11, Fo))
      ], 64))), 128)),
      e.hasNext ? (d(), m("a", No, Eo)) : M("", !0)
    ])) : M("", !0),
    e.potentiallyMultiplePages ? (d(), m("div", Bo, " Displaying " + F(e.pagination.startIndex) + "-" + F(e.pagination.endIndex) + " of " + F(e.pagination.count) + " items. ", 1)) : M("", !0)
  ]);
}
const Ro = /* @__PURE__ */ P(Po, [["render", Uo]]), Io = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ro
}, Symbol.toStringTag, { value: "Module" })), Wo = T({
  props: {
    modelValue: {
      type: Object,
      required: !0
    }
  },
  data() {
    return {
      pageSizes: [10, 25, 50, 100]
    };
  },
  computed: {
    pageSize: {
      get() {
        return this.limit;
      },
      set(e) {
        this.$emit("update:modelValue", {
          ...this.pagination,
          offset: 0,
          limit: e
        });
      }
    },
    pagination() {
      return this.modelValue;
    },
    offset() {
      return A(this.pagination, "offset", 0);
    },
    limit() {
      return A(this.pagination, "limit", 0);
    },
    count() {
      return A(this.pagination, "count", 0);
    },
    lastPageNumber0() {
      return Math.ceil(this.count / this.limit) - 1;
    },
    lastPageNumber() {
      return this.lastPageNumber0 + 1;
    },
    pageCount() {
      return this.lastPageNumber;
    },
    pageRange0() {
      const e = [], i = Math.max(0, this.pageNumber0 - 5), l = Math.min(this.lastPageNumber0, i + 10), s = Math.max(0, l - 10);
      for (let r = s; r <= l; r++)
        e.push(r);
      return e;
    },
    pageNumber0() {
      return Math.floor(this.offset / this.limit);
    },
    pageNumber() {
      return this.pageNumber0 + 1;
    },
    hasPrevious() {
      return this.pageNumber0 > 0;
    },
    hasNext() {
      return this.pageNumber0 < this.lastPageNumber0;
    }
  },
  methods: {
    classObj(e) {
      return {
        "k-pagination2-button-selected": e == this.pageNumber0
      };
    },
    clickedPageNumber(e) {
      const t = Math.max(0, Math.min(e, this.lastPageNumber0));
      this.$emit("update:modelValue", {
        ...this.pagination,
        offset: t * this.limit
      });
    }
  }
});
const qo = { class: "k-pagination2" }, Ho = { class: "k-pagination2-buttons" }, Go = /* @__PURE__ */ w("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ w("path", { d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" })
], -1), Qo = [
  Go
], Xo = ["onClick"], Yo = /* @__PURE__ */ w("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ w("path", { d: "M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" })
], -1), Jo = [
  Yo
];
function Zo(e, t, n, i, l, s) {
  const r = z("KSelect");
  return d(), m("div", qo, [
    w("div", null, [
      B(r, {
        modelValue: e.pageSize,
        "onUpdate:modelValue": t[0] || (t[0] = (a) => e.pageSize = a),
        items: e.pageSizes,
        label: "Page Size"
      }, null, 8, ["modelValue", "items"])
    ]),
    e.pageCount > 1 ? (d(), m(q, { key: 0 }, [
      w("div", Ho, [
        e.hasPrevious ? (d(), m("a", {
          key: 0,
          class: "k-pagination2-arrow-button",
          onClick: t[1] || (t[1] = (a) => e.clickedPageNumber(e.pageNumber0 - 1))
        }, Qo)) : M("", !0),
        (d(!0), m(q, null, Z(e.pageRange0, (a) => (d(), m("div", {
          key: a,
          class: J(["k-pagination2-button", e.classObj(a)]),
          onClick: (u) => e.clickedPageNumber(a)
        }, F(a + 1), 11, Xo))), 128)),
        e.hasNext ? (d(), m("a", {
          key: 1,
          class: "k-pagination2-arrow-button",
          onClick: t[2] || (t[2] = (a) => e.clickedPageNumber(e.pageNumber0 + 1))
        }, Jo)) : M("", !0)
      ]),
      w("div", null, F(e.pageNumber) + " of " + F(e.pageCount) + " pages", 1)
    ], 64)) : M("", !0)
  ]);
}
const es = /* @__PURE__ */ P(Wo, [["render", Zo]]), ts = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: es
}, Symbol.toStringTag, { value: "Module" })), je = T({
  mixins: [ce],
  props: {
    color: {
      type: String,
      default: "#05447e"
    },
    maxHeight: {
      type: [Number, String],
      default: "1.25rem"
    },
    maxWidth: {
      type: [Number, String],
      default: "1.25rem"
    }
  }
}), Ae = () => {
  Ee((e) => ({
    "519b76bc": e.color
  }));
}, Ve = je.setup;
je.setup = Ve ? (e, t) => (Ae(), Ve(e, t)) : Ae;
const ns = /* @__PURE__ */ w("circle", {
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), rs = /* @__PURE__ */ w("path", {
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), os = [
  ns,
  rs
];
function ss(e, t, n, i, l, s) {
  return d(), m("svg", {
    style: ie(e.measurableStyles),
    class: "k-spinner",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, os, 4);
}
const at = /* @__PURE__ */ P(je, [["render", ss]]), is = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: at
}, Symbol.toStringTag, { value: "Module" })), ls = T({
  components: { KSpinner: at },
  props: {
    loading: {
      type: Boolean,
      default: !1
    },
    size: {
      type: Number,
      default: 100
    }
  }
});
const as = {
  key: 0,
  class: "centerOverlay"
};
function us(e, t, n, i, l, s) {
  const r = z("KSpinner");
  return e.loading ? (d(), m("div", as, [
    B(r, {
      "max-width": e.size,
      "max-height": e.size
    }, null, 8, ["max-width", "max-height"])
  ])) : M("", !0);
}
const ds = /* @__PURE__ */ P(ls, [["render", us]]), cs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ds
}, Symbol.toStringTag, { value: "Module" })), ps = T({
  mixins: [le],
  props: {
    modelValue: {
      type: [String, Object, Number],
      default: null
    },
    items: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: !1
    },
    itemValue: {
      type: String,
      default: "value"
    },
    itemText: {
      type: String,
      default: "text"
    },
    vertical: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  computed: {
    localValue: {
      get() {
        return this.modelValue;
      },
      set(e) {
        this.$emit("update:modelValue", e);
      }
    },
    classObj() {
      return {
        "k-radiogroup--vertical": this.vertical
      };
    }
  },
  methods: {
    isObject(e) {
      return typeof e == "object" && e instanceof Object && !(e instanceof Array);
    },
    getItemText(e) {
      return this.isObject(e) ? A(e, this.itemText) : e;
    },
    getItemValue(e) {
      return this.isObject(e) ? A(e, this.itemValue) : e;
    },
    getItemDisabled(e) {
      return this.isObject(e) ? A(e, "disabled", !1) : !1;
    }
  }
});
const fs = ["id", "value", "disabled"], ms = ["for"];
function gs(e, t, n, i, l, s) {
  const r = z("KSpinner"), a = z("KFormFieldWrapper");
  return d(), m("div", null, [
    B(a, {
      label: e.label,
      "success-messages": e.successMessages,
      "error-messages": e.errorMessages
    }, {
      default: L(() => [
        B(de, {
          name: "fade",
          mode: "out-in"
        }, {
          default: L(() => [
            e.loading ? (d(), D(r, { key: 0 })) : (d(), m("div", {
              key: 1,
              class: J(["k-radiogroup", e.classObj])
            }, [
              (d(!0), m(q, null, Z(e.items, (u) => (d(), m("div", {
                key: e.getItemValue(u),
                class: "k-radiogroup-item"
              }, [
                oe(w("input", {
                  id: e.getItemValue(u),
                  "onUpdate:modelValue": t[0] || (t[0] = (o) => e.localValue = o),
                  type: "radio",
                  value: e.getItemValue(u),
                  disabled: e.getItemDisabled(u)
                }, null, 8, fs), [
                  [mt, e.localValue]
                ]),
                w("label", {
                  for: e.getItemValue(u)
                }, F(e.getItemText(u)), 9, ms)
              ]))), 128))
            ], 2))
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["label", "success-messages", "error-messages"])
  ]);
}
const hs = /* @__PURE__ */ P(ps, [["render", gs]]), _s = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: hs
}, Symbol.toStringTag, { value: "Module" })), bs = T({
  inject: ["ksnackbar"],
  methods: {
    click() {
    }
  }
});
function ys(e, t, n, i, l, s) {
  return d(), m("div", null, [
    w("button", {
      onClick: t[0] || (t[0] = (...r) => e.click && e.click(...r))
    }, "click")
  ]);
}
const vs = /* @__PURE__ */ P(bs, [["render", ys]]), $s = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vs
}, Symbol.toStringTag, { value: "Module" })), ks = T({
  mixins: [le],
  props: {
    modelValue: {
      type: [String, Object, Number],
      default: null
    },
    multiple: {
      type: Boolean,
      default: !1
    },
    items: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: !1
    },
    itemValue: {
      type: String,
      default: "value"
    },
    itemText: {
      type: String,
      default: "text"
    },
    itemDisabled: {
      type: String,
      default: "disabled"
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  computed: {
    disabledResolved() {
      return this.disabled || this.readonly;
    },
    localValue: {
      get() {
        return this.multiple ? this.arrify(this.modelValue) : this.modelValue;
      },
      set(e) {
        this.$emit("update:modelValue", e);
      }
    }
  },
  methods: {
    isObject(e) {
      return typeof e == "object" && e instanceof Object && !(e instanceof Array);
    },
    getItemText(e) {
      return this.isObject(e) ? A(e, this.itemText) : e;
    },
    getItemValue(e) {
      return this.isObject(e) ? A(e, this.itemValue) : e;
    },
    getItemDisabled(e) {
      return this.isObject(e) ? A(e, this.itemDisabled, !1) : !1;
    },
    arrify(e) {
      return Array.isArray(e) ? e : [e];
    }
  }
});
const ws = { class: "k-select" }, Ss = ["disabled"], Os = ["value", "disabled"];
function xs(e, t, n, i, l, s) {
  const r = z("KSpinner"), a = z("KFormFieldWrapper");
  return d(), D(a, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: L(() => [
      w("div", ws, [
        oe(w("select", {
          "onUpdate:modelValue": t[0] || (t[0] = (u) => e.localValue = u),
          class: J(e.classObj),
          disabled: e.disabledResolved
        }, [
          (d(!0), m(q, null, Z(e.items, (u) => (d(), m("option", {
            key: e.getItemValue(u),
            value: e.getItemValue(u),
            disabled: e.getItemDisabled(u)
          }, F(e.getItemText(u)), 9, Os))), 128))
        ], 10, Ss), [
          [gt, e.localValue]
        ]),
        B(de, { name: "fade" }, {
          default: L(() => [
            e.loading ? (d(), D(r, {
              key: 0,
              class: "k-select--spinner"
            })) : M("", !0)
          ]),
          _: 1
        })
      ])
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const js = /* @__PURE__ */ P(ks, [["render", xs]]), Ts = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: js
}, Symbol.toStringTag, { value: "Module" })), Cs = T({
  provide() {
    return {
      // @ts-ignore - not sure why this complains
      [Nn]: this
    };
  },
  data() {
    return {
      index: 0,
      nitems: {}
    };
  },
  computed: {
    items() {
      return Object.values(this.nitems).sort((e, t) => t.index - e.index);
    }
  },
  // mounted() {
  //   // debugger
  //   emitter.on('success', this.success)
  //   emitter.on('error', this.error)
  // },
  // unmounted() {
  //   emitter.off('success', this.success)
  //   emitter.off('error', this.error)
  // },
  methods: {
    classObj(e) {
      return {
        "k-snackbar-item--success": e.type === "success",
        "k-snackbar-item--error": e.type === "error"
      };
    },
    action(e) {
      const t = e.action;
      t && t(() => this.dismiss(e.index));
    },
    dismiss(e) {
      delete this.nitems[e];
    },
    nextIndex() {
      return this.index += 1, this.index;
    },
    success(e) {
      this.queue("success", e);
    },
    error(e) {
      this.queue("error", e);
    },
    queue(e, {
      title: t,
      message: n,
      timeout: i = 6e3,
      actionLabel: l = "close",
      action: s
    }) {
      const r = this.nextIndex();
      s == null && (s = () => this.dismiss(r));
      const a = {
        title: t,
        message: n,
        timeout: i,
        actionLabel: l,
        action: s,
        type: e,
        index: r
      };
      this.nitems[r] = a, console.log(i), setInterval(() => this.dismiss(r), i);
    }
  }
});
const Ps = { class: "k-snackbar" }, Ks = { class: "k-snackbar-item-message" }, Ms = {
  key: 0,
  class: "k-snackbar-title"
}, As = {
  key: 1,
  class: "k-snackbar-text"
}, Vs = {
  key: 0,
  class: "k-snackbar-action"
}, zs = ["onClick"];
function Ls(e, t, n, i, l, s) {
  return d(), m(q, null, [
    U(e.$slots, "default"),
    w("div", Ps, [
      B($e, {
        name: "slide",
        tag: "div",
        mode: "out-in"
      }, {
        default: L(() => [
          (d(!0), m(q, null, Z(e.items, (r) => (d(), m("div", {
            key: r.index,
            class: J(["k-snackbar-item", e.classObj(r)])
          }, [
            w("div", Ks, [
              r.title ? (d(), m("div", Ms, F(r.title), 1)) : M("", !0),
              r.message ? (d(), m("div", As, F(r.message), 1)) : M("", !0)
            ]),
            r.action ? (d(), m("div", Vs, [
              w("a", {
                href: "#",
                onClick: re((a) => e.action(r), ["prevent"])
              }, F(r.actionLabel), 9, zs)
            ])) : M("", !0)
          ], 2))), 128))
        ]),
        _: 1
      })
    ])
  ], 64);
}
const Fs = /* @__PURE__ */ P(Cs, [["render", Ls]]), Ns = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fs
}, Symbol.toStringTag, { value: "Module" })), Ds = T({
  props: {
    keypath: {
      type: String,
      required: !0
    },
    modelValue: {
      type: Object,
      default: () => {
      }
    }
  },
  computed: {
    sortKey() {
      return this.modelValue.sortKey;
    },
    sortAsc() {
      return !!this.modelValue.sortAsc;
    },
    isActive() {
      return this.keypath == this.sortKey;
    }
  },
  methods: {
    emitClick() {
      return this.$emit("update:modelValue", {
        sortKey: this.keypath,
        sortAsc: this.isActive ? !this.sortAsc : !0
      });
    }
  }
});
const Es = {
  key: 0,
  class: "j-sort-header-arrow"
}, Bs = {
  key: 1,
  class: "j-sort-header-arrow"
};
function Us(e, t, n, i, l, s) {
  return d(), m("a", {
    href: "#",
    onClick: t[0] || (t[0] = re((...r) => e.emitClick && e.emitClick(...r), ["prevent"]))
  }, [
    U(e.$slots, "default"),
    B(de, {
      name: "fade",
      mode: "out-in"
    }, {
      default: L(() => [
        e.isActive && e.sortAsc ? (d(), m("span", Es, "↓")) : e.isActive ? (d(), m("span", Bs, "↑")) : M("", !0)
      ]),
      _: 1
    })
  ]);
}
const Rs = /* @__PURE__ */ P(Ds, [["render", Us]]), Is = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Rs
}, Symbol.toStringTag, { value: "Module" }));
const Ws = {}, qs = { class: "k-spacer" };
function Hs(e, t) {
  return d(), m("div", qs);
}
const Gs = /* @__PURE__ */ P(Ws, [["render", Hs]]), Qs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Gs
}, Symbol.toStringTag, { value: "Module" })), Te = T({
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      padding: 4,
      height: 26,
      trans: 20
    };
  },
  methods: {
    toggle() {
      this.readonly || (this.on = !this.on);
    }
  },
  computed: {
    on: {
      get() {
        return this.modelValue;
      },
      set(e) {
        this.$emit("update:modelValue", e);
      }
    },
    classObj() {
      return {
        "k-switch--on": this.on,
        "k-switch--readonly": this.readonly
      };
    },
    innerSize() {
      return this.height - 2 * this.padding;
    },
    heightPx() {
      return X(this.height);
    },
    innerSizePx() {
      return X(this.innerSize);
    },
    paddingPx() {
      return X(this.padding);
    },
    switchWidthPx() {
      return X(this.trans + this.height);
    },
    transPx() {
      return `translateX(${X(this.trans)})`;
    }
  }
}), ze = () => {
  Ee((e) => ({
    "005bd1d4": e.switchWidthPx,
    b8c194da: e.heightPx,
    "110bcd4a": e.innerSizePx,
    75578316: e.paddingPx,
    "19f49a4c": e.transPx
  }));
}, Le = Te.setup;
Te.setup = Le ? (e, t) => (ze(), Le(e, t)) : ze;
const Xs = /* @__PURE__ */ w("span", { class: "k-switch-slider" }, null, -1), Ys = [
  Xs
];
function Js(e, t, n, i, l, s) {
  return d(), m("div", {
    class: J(["k-switch", e.classObj]),
    onClick: t[0] || (t[0] = (...r) => e.toggle && e.toggle(...r))
  }, Ys, 2);
}
const Zs = /* @__PURE__ */ P(Te, [["render", Js]]), ei = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zs
}, Symbol.toStringTag, { value: "Module" })), ti = T({
  props: {
    properties: {
      type: Boolean,
      default: !1
    },
    striped: {
      type: Boolean,
      default: !1
    },
    loading: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    classObj() {
      return {
        "k-table--properties": this.properties,
        "k-table--striped": this.isStriped
      };
    },
    isStriped() {
      return this.striped && !this.properties;
    }
  }
});
function ni(e, t, n, i, l, s) {
  const r = z("KLinearProgressIndicator");
  return d(), m("div", null, [
    e.loading ? (d(), D(r, { key: 0 })) : M("", !0),
    w("table", {
      class: J(["k-table", e.classObj])
    }, [
      U(e.$slots, "default")
    ], 2)
  ]);
}
const ri = /* @__PURE__ */ P(ti, [["render", ni]]), oi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ri
}, Symbol.toStringTag, { value: "Module" })), si = T({
  mixins: [le],
  inheritAttrs: !1,
  props: {
    modelValue: {
      type: String,
      default: null
    },
    rows: {
      type: Number,
      default: 5
    }
  },
  emits: ["update:modelValue"],
  computed: {
    valueLocal: {
      // The <textarea> element expects a string or undefined.
      get() {
        return this.modelValue || void 0;
      },
      // We emit a string or null.
      set(e) {
        this.$emit("update:modelValue", e || null);
      }
    }
  },
  methods: {
    tabber(e) {
      const t = e.target, n = this.valueLocal, i = t.selectionStart;
      if (n && i) {
        const l = n.slice(0, i), s = n.slice(i), r = `${l}	${s}`;
        this.valueLocal = r, t.value = r, t.selectionStart = i + 1, t.selectionEnd = i + 1;
      }
    }
  }
});
const ii = ["rows"];
function li(e, t, n, i, l, s) {
  const r = z("KFormFieldWrapper");
  return d(), D(r, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: L(() => [
      oe(w("textarea", De({
        "onUpdate:modelValue": t[0] || (t[0] = (a) => e.valueLocal = a)
      }, e.$attrs, {
        spellcheck: "false",
        class: [e.classObj, "k-textarea"],
        rows: e.rows,
        onKeydown: t[1] || (t[1] = ae(re((...a) => e.tabber && e.tabber(...a), ["prevent"]), ["tab"]))
      }), null, 16, ii), [
        [ve, e.valueLocal]
      ])
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const ai = /* @__PURE__ */ P(si, [["render", li]]), ui = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ai
}, Symbol.toStringTag, { value: "Module" })), di = T({
  mixins: [le],
  props: {
    modelValue: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: void 0
    }
  },
  emits: ["update:modelValue"],
  computed: {
    value: {
      get() {
        return this.modelValue || void 0;
      },
      set(e) {
        this.$emit("update:modelValue", e || null);
      }
    }
  }
});
const ci = ["placeholder"];
function pi(e, t, n, i, l, s) {
  const r = z("KFormFieldWrapper");
  return d(), D(r, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: L(() => [
      oe(w("input", {
        "onUpdate:modelValue": t[0] || (t[0] = (a) => e.value = a),
        class: J(["k-input-text-field", e.classObj]),
        placeholder: e.placeholder
      }, null, 10, ci), [
        [ve, e.value]
      ])
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const fi = /* @__PURE__ */ P(di, [["render", pi]]), mi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fi
}, Symbol.toStringTag, { value: "Module" })), gi = T({
  setup() {
    return {
      config: te(ge),
      session: te(se)
    };
  },
  mixins: [ce],
  props: {
    userRec: {
      type: Object,
      default: null
    },
    type: {
      type: Number,
      default: 0
    },
    height: {
      type: [Number, String],
      default: 16
    },
    width: {
      type: [Number, String],
      default: 16
    }
  },
  computed: {
    userType() {
      return A(this.userRec, "type", this.type);
    },
    url() {
      return this.userType === this.session.members.USER ? `${this.config.img}guy.gif` : this.userType === this.session.members.GROUP ? `${this.config.img}2-guys.gif` : this.userType > 0 ? `${this.config.img}projectgroup.gif` : null;
    }
  }
}), hi = ["src"];
function _i(e, t, n, i, l, s) {
  return e.url ? (d(), m("img", {
    key: 0,
    src: e.url,
    style: ie([e.measurableStyles])
  }, null, 12, hi)) : M("", !0);
}
const bi = /* @__PURE__ */ P(gi, [["render", _i]]), yi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bi
}, Symbol.toStringTag, { value: "Module" })), be = new ke();
class vi {
  session;
  queueItems;
  intervalId;
  constructor() {
    this.session = null, this.queueItems = [], this.intervalId = 0;
  }
  resetQueue() {
    this.queueItems = [];
  }
  queue(t, n, i) {
    this.session = t, this.queueItems.push({
      resolveFunc: n,
      userId: i
    }), clearInterval(this.intervalId), this.intervalId = setTimeout(this.processQueue.bind(this), 50);
  }
  async processQueue() {
    const t = this.session.rpcClient("/api/v1/rh/rpc/user/"), n = this.queueItems;
    this.resetQueue(), n.forEach((i) => {
      const l = i.userId;
      t.queue("UserLookup", { userId: l });
    });
    try {
      (await t.batch(!0)).forEach((l, s) => {
        const r = n[s].resolveFunc;
        r(l);
      });
    } catch {
      n.forEach((i) => i.resolveFunc(null));
    }
  }
}
class $i {
  users;
  userLookupQueue;
  constructor() {
    this.users = {}, this.userLookupQueue = new vi();
  }
  registerUsers(t) {
    t.forEach((n) => this.users[n.userid] = n);
  }
  async lookup(t, n) {
    return n ? (await be.acquire(n), this.users[n] ? (be.release(n), this.users[n]) : new Promise((i) => {
      const l = (s) => {
        this.users[n] = s, i(s), be.release(n);
      };
      this.userLookupQueue.queue(t, l, n);
    })) : null;
  }
}
const ut = new $i(), ki = T({
  setup() {
    return { session: te(se) };
  },
  props: {
    user: {
      type: [Number, Object],
      default: null
    },
    // //  this is deprecated
    // userRec: {
    //   type: Object,
    //   default: null,
    // },
    // // @deprecated
    // userid: {
    //   type: Number,
    //   default: null,
    // },
    gif: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      userRecLocal: null
    };
  },
  computed: {
    userIdLocal() {
      return A(this.userRecLocal, "id") ?? A(this.userRecLocal, "userid");
    },
    // userLocal() {
    //   return this.user ?? this.userid ?? this.userRec
    // },
    displayName() {
      return A(this.userRecLocal, "display_name") ?? A(this.userRecLocal, "displayname") ?? A(this.userRecLocal, "name");
    },
    type() {
      return A(this.userRecLocal, "type");
    }
  },
  watch: {
    user: {
      async handler(e) {
        this.isInteger(e) ? this.userRecLocal = await ut.lookup(this.session, e) : this.userRecLocal = e;
      },
      immediate: !0
    }
  },
  methods: {
    isInteger(e) {
      return !isNaN(e) && typeof e == "number";
    },
    click() {
      window.baseURL && window.doUserDialog && (window.baseUrl = window.baseURL, window.doUserDialog(this.userIdLocal));
    }
  }
});
const wi = {
  key: 0,
  class: "k-user-link"
};
function Si(e, t, n, i, l, s) {
  const r = z("KUserGIF");
  return e.userRecLocal ? (d(), m("span", wi, [
    e.gif ? (d(), D(r, {
      key: 0,
      "user-rec": e.userRecLocal
    }, null, 8, ["user-rec"])) : M("", !0),
    G("  "),
    w("a", {
      href: "#",
      onClick: t[0] || (t[0] = re((...a) => e.click && e.click(...a), ["prevent"]))
    }, F(e.displayName), 1)
  ])) : M("", !0);
}
const Oi = /* @__PURE__ */ P(ki, [["render", Si]]), xi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Oi
}, Symbol.toStringTag, { value: "Module" })), ji = T({
  mixins: [le],
  setup() {
    return { session: te(se) };
  },
  props: {
    modelValue: {
      type: Number,
      default: null
    },
    users: {
      type: Boolean,
      default: !0
    },
    groups: {
      type: Boolean,
      default: !1
    },
    width: {
      type: [String, Number],
      default: "100%"
    },
    returnObject: {
      type: Boolean,
      default: !1
    },
    // Why?  document if you add this back
    // combobox: {
    //   type: Boolean,
    //   default: false,
    // },
    editable: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      loading: !1,
      readonly: !1,
      pleaseWait: !1,
      searchText: null,
      items: [],
      select: null
    };
  },
  computed: {
    USER() {
      return this.session.members.USER;
    },
    GROUP() {
      return this.session.members.GROUP;
    },
    valueLocal: {
      /**
       * @param {number} value
       */
      set(e) {
        this.$emit("update:modelValue", e);
      },
      get() {
        return this.modelValue;
      }
    },
    options() {
      let e = null;
      return this.users && this.groups ? e = null : this.users ? e = this.USER : this.groups && (e = this.GROUP), {
        where_type: e
      };
    },
    placeholder() {
      return this.pleaseWait ? "Loading..." : this.users && this.groups ? "Search for user or group..." : this.users ? "Search for user..." : this.groups ? "Search for group..." : "";
    }
  },
  watch: {
    searchText(e) {
      e && e !== this.select && this.querySelections(e);
    },
    valueLocal: {
      handler() {
        this.loadInitialValue();
      },
      immediate: !0
    }
  },
  methods: {
    // querySelections: debounce(async function (v) {
    async querySelections(e) {
      console.log("KUserPicker: needs debounce");
      try {
        this.loading = !0;
        const t = await this.session.members.userQuery(
          e,
          this.options,
          "v1"
        );
        this.items = t.data.data.map((n) => ({
          text: A(n, "name_formatted"),
          value: A(n, "id"),
          type: A(n, "type")
        }));
      } finally {
        this.loading = !1;
      }
    },
    // }, 500),
    // formatChoice(item: Record<string, any>) {
    //   return get(item, 'text', '')
    // },
    async loadInitialValue() {
      const e = this.modelValue;
      if (e)
        try {
          this.pleaseWait = !0, this.readonly = !0, this.loading = !0;
          const t = await ut.lookup(
            this.session,
            e
          );
          t && (this.items = [
            {
              text: t.displayname,
              type: t.type,
              value: t.userid
            }
          ], this.select = t.displayname);
        } finally {
          this.pleaseWait = !1, this.readonly = !1, this.loading = !1;
        }
    }
  }
});
const Ti = { class: "flex items-center gap-1" };
function Ci(e, t, n, i, l, s) {
  const r = z("KUserGIF"), a = z("KAutocomplete"), u = z("KUserLink"), o = z("KFormFieldWrapper");
  return d(), D(o, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: L(() => [
      e.editable ? (d(), D(a, {
        key: 0,
        modelValue: e.valueLocal,
        "onUpdate:modelValue": t[0] || (t[0] = (p) => e.valueLocal = p),
        "search-input": e.searchText,
        "onUpdate:searchInput": t[1] || (t[1] = (p) => e.searchText = p),
        class: "k-user-picker",
        placeholder: e.placeholder,
        width: e.width,
        loading: e.loading,
        items: e.items,
        "return-object": e.returnObject,
        combobox: !1
      }, {
        prepend: L(({ item: p }) => [
          p ? (d(), D(r, {
            key: 0,
            type: p.type
          }, null, 8, ["type"])) : (d(), D(r, {
            key: 1,
            type: e.USER
          }, null, 8, ["type"]))
        ]),
        item: L(({ item: p }) => [
          w("div", Ti, [
            B(r, {
              type: p.type
            }, null, 8, ["type"]),
            G(" " + F(p.text), 1)
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "search-input", "placeholder", "width", "loading", "items", "return-object"])) : (d(), D(u, {
        key: 1,
        user: e.modelValue,
        gif: ""
      }, null, 8, ["user"]))
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const dt = /* @__PURE__ */ P(ji, [["render", Ci]]), Pi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dt
}, Symbol.toStringTag, { value: "Module" })), Ki = T({
  name: "KTabItem",
  // Name required by KTabs to detecting which children are tabs
  inject: ["tabs"],
  props: {
    title: {
      type: String,
      required: !0
    },
    name: {
      type: String,
      required: !0
    }
  },
  computed: {
    isSelected() {
      return this.name == A(this.tabs, "selectedTab");
    }
  }
}), Mi = { key: 0 };
function Ai(e, t, n, i, l, s) {
  return e.isSelected ? (d(), m("div", Mi, [
    U(e.$slots, "default")
  ])) : M("", !0);
}
const Vi = /* @__PURE__ */ P(Ki, [["render", Ai]]), zi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Vi
}, Symbol.toStringTag, { value: "Module" })), Li = T({
  provide() {
    return {
      tabs: this
    };
  },
  emits: ["update:modelValue"],
  props: {
    modelValue: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      selectedTab: this.modelValue
    };
  },
  computed: {
    /**
     * This implementation has to do with tabs being dynamically rendered with a for loop.
     * The child is not of type KTabItem if rendered in a loop.  The `.children` lookup
     * takes care of that.
     */
    tabs() {
      const e = (s) => s.type.name === "KTabItem", t = (s) => typeof s.type == "symbol", n = (s) => s.children && Array.isArray(s.children) && s.children.length && s.children.some(e), i = (s) => t(s) && n(s);
      return (this.$slots.default ? this.$slots.default() : []).filter((s) => e(s) || i(s)).flatMap((s) => i(s) ? s.children : s).map((s) => ({
        name: s.props.name,
        title: s.props.title
      }));
    },
    tabNames() {
      return this.tabs.map((e) => e.name);
    }
  },
  mounted() {
    this.selectedTab = this.initialSelectedTab();
  },
  watch: {
    selectedTab(e) {
      this.$emit("update:modelValue", e);
    },
    modelValue(e) {
      this.selectTab(e);
    }
  },
  methods: {
    initialSelectedTab() {
      const e = window.location.hash.replace("#", ""), t = this.tabNames[0];
      return [this.selectedTab, e, t].find(
        (n) => !!n
      );
    },
    selectTab(e) {
      this.selectedTab = this.tabNames.includes(e) ? e : this.tabNames[0];
    },
    classObj(e) {
      return {
        "k-tabs-nav-tab": !0,
        "k-tabs-active": this.selectedTab == e.name
      };
    }
  }
});
const Fi = { class: "k-tabs" }, Ni = { class: "k-tabs-nav" }, Di = ["href", "onClick"], Ei = { class: "k-tabs-content" };
function Bi(e, t, n, i, l, s) {
  return d(), m("div", Fi, [
    w("div", Ni, [
      (d(!0), m(q, null, Z(e.tabs, (r) => (d(), m("div", {
        key: r.name,
        class: J(e.classObj(r))
      }, [
        w("a", {
          href: `#${r.name}`,
          onClick: (a) => e.selectTab(r.name)
        }, F(r.title), 9, Di)
      ], 2))), 128))
    ]),
    w("div", Ei, [
      U(e.$slots, "default")
    ])
  ]);
}
const Ui = /* @__PURE__ */ P(Li, [["render", Bi]]), Ri = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ui
}, Symbol.toStringTag, { value: "Module" })), Ii = T({
  extends: dt,
  setup() {
    return { session: te(se) };
  },
  methods: {
    async loadInitialValue() {
      const e = this.modelValue;
      if (e)
        try {
          this.pleaseWait = !0, this.readonly = !0, this.loading = !0;
          const t = await this.session.members.member(e, "v1"), n = A(t, "data.data.first_name"), i = A(t, "data.data.last_name"), l = A(t, "data.data.name"), s = `${n} ${i} (${l})`;
          this.items = [
            {
              text: s,
              value: A(t, "data.data.id"),
              type: A(t, "data.data.type")
            }
          ], this.select = s;
        } finally {
          this.pleaseWait = !1, this.readonly = !1, this.loading = !1;
        }
    }
  }
}), Wi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ii
}, Symbol.toStringTag, { value: "Module" }));
const qi = /* @__PURE__ */ Object.assign({
  "./components/Card/KCard.vue": wt,
  "./components/Card/KCardActions.vue": Tt,
  "./components/Card/KCardText.vue": At,
  "./components/Card/KCardTitle.vue": Nt,
  "./components/KAdminLink.vue": It,
  "./components/KAlert.vue": Sn,
  "./components/KApp.vue": Cn,
  "./components/KAutocomplete.vue": Fn,
  "./components/KBrowseLink.vue": Xn,
  "./components/KButton.vue": tr,
  "./components/KConfirm.vue": sr,
  "./components/KDateTimePicker.vue": cr,
  "./components/KDialog.vue": gr,
  "./components/KDot.vue": yr,
  "./components/KFormFieldWrapper.vue": Sr,
  "./components/KFunctionMenu.vue": Mr,
  "./components/KLinearProgressIndicator.vue": Fr,
  "./components/KMulti.vue": Wr,
  "./components/KMulti2.vue": Yr,
  "./components/KMultiUserPicker.vue": to,
  "./components/KNodeAncestor.vue": io,
  "./components/KNodePickerField.vue": fo,
  "./components/KOneMoment.vue": yo,
  "./components/KPageDropZone.vue": wo,
  "./components/KPageTitle.vue": Co,
  "./components/KPagination.vue": Io,
  "./components/KPagination2.vue": ts,
  "./components/KPleaseWait.vue": cs,
  "./components/KRadioGroup.vue": _s,
  "./components/KScratch.vue": $s,
  "./components/KSelect.vue": Ts,
  "./components/KSnackbar.vue": Ns,
  "./components/KSortHeader.vue": Is,
  "./components/KSpacer.vue": Qs,
  "./components/KSpinner.vue": is,
  "./components/KSwitch.vue": ei,
  "./components/KTable.vue": oi,
  "./components/KTextArea.vue": ui,
  "./components/KTextField.vue": mi,
  "./components/KUserGIF.vue": yi,
  "./components/KUserLink.vue": xi,
  "./components/KUserPicker.vue": Pi,
  "./components/KUserPickerLegacy.vue": Wi,
  "./components/Tabs/KTabItem.vue": zi,
  "./components/Tabs/KTabs.vue": Ri
});
let ye;
const nl = {
  install(e, t) {
    Object.entries(qi).forEach(
      ([i, l]) => {
        const s = i?.split("/")?.pop()?.replace(/\.\w+$/, "");
        e.component(s, l.default);
      }
    ), ye = new vt(t);
    const n = {
      img: t.img,
      baseUrl: t.baseUrl,
      jsLongDateFormat: t.datelong,
      jsShortDateFormat: t.dateshort
    };
    e.provide(se, ye), e.provide(ge, n);
  }
}, rl = () => ye;
export {
  ge as configKey,
  Dn as confirmDialogKey,
  nl as default,
  te as injectStrict,
  Un as nodeLookup,
  se as sessionKey,
  Nn as snackbarKey,
  rl as useSession,
  ut as userLookup
};
