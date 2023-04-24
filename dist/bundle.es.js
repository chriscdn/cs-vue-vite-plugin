import { defineComponent as T, h as ft, openBlock as d, createElementBlock as m, renderSlot as B, inject as Ne, Fragment as q, createElementVNode as k, normalizeStyle as ie, resolveComponent as z, createVNode as U, withCtx as L, resolveDirective as De, withDirectives as oe, normalizeClass as J, withKeys as de, withModifiers as re, vModelText as we, renderList as Z, createTextVNode as G, toDisplayString as F, createCommentVNode as M, createBlock as N, mergeProps as Be, vModelDynamic as mt, Teleport as gt, Transition as pe, setBlockTracking as Me, TransitionGroup as ke, useCssVars as Ue, vModelRadio as ht, vModelSelect as _t } from "vue";
import A from "lodash.get";
import { directive as Ie } from "vue3-click-away";
import Se from "@chriscdn/promise-semaphore";
import { format as Ae } from "date-fns";
import { disableBodyScroll as bt, enableBodyScroll as yt } from "body-scroll-lock";
import vt from "@googlicius/build-url";
import $t from "js-cookie";
import { Session as wt } from "@kweli/cs-rest";
const kt = {
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
}, fe = T({
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
}), St = T({
  mixins: [fe, kt],
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
      return ft(
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
const Ot = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: St
}, Symbol.toStringTag, { value: "Module" })), xt = T({});
const C = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, l] of t)
    n[i] = l;
  return n;
}, jt = { class: "k-card-actions" };
function Tt(e, t, n, i, l, s) {
  return d(), m("div", jt, [
    B(e.$slots, "default")
  ]);
}
const Pt = /* @__PURE__ */ C(xt, [["render", Tt]]), Ct = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pt
}, Symbol.toStringTag, { value: "Module" })), Kt = T({});
const Mt = { class: "k-card-text" };
function At(e, t, n, i, l, s) {
  return d(), m("div", Mt, [
    B(e.$slots, "default")
  ]);
}
const Vt = /* @__PURE__ */ C(Kt, [["render", At]]), zt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Vt
}, Symbol.toStringTag, { value: "Module" })), Lt = T({});
const Ft = { class: "k-card-title" };
function Et(e, t, n, i, l, s) {
  return d(), m("div", Ft, [
    B(e.$slots, "default")
  ]);
}
const Nt = /* @__PURE__ */ C(Lt, [["render", Et]]), Dt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Nt
}, Symbol.toStringTag, { value: "Module" })), Bt = T({
  setup() {
    return { config: Ne("config", {}) };
  }
}), Ut = /* @__PURE__ */ k("hr", null, null, -1), It = ["href"];
function Rt(e, t, n, i, l, s) {
  return d(), m(q, null, [
    Ut,
    k("a", {
      href: `${e.config.baseURL}?func=admin.index`
    }, "Admin Home", 8, It)
  ], 64);
}
const Wt = /* @__PURE__ */ C(Bt, [["render", Rt]]), qt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wt
}, Symbol.toStringTag, { value: "Module" }));
var Re = {}, We = {}, Oe = {};
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
})(Oe);
var qe = {};
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
})(qe);
var He = {};
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
})(He);
var Ge = {}, me = {}, ce = {}, Ht = {
  get exports() {
    return ce;
  },
  set exports(e) {
    ce = e;
  }
}, D = String, Qe = function() {
  return { isColorSupported: !1, reset: D, bold: D, dim: D, italic: D, underline: D, inverse: D, hidden: D, strikethrough: D, black: D, red: D, green: D, yellow: D, blue: D, magenta: D, cyan: D, white: D, gray: D, bgBlack: D, bgRed: D, bgGreen: D, bgYellow: D, bgBlue: D, bgMagenta: D, bgCyan: D, bgWhite: D };
};
Ht.exports = Qe();
ce.createColors = Qe;
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
  const n = /* @__PURE__ */ i(ce);
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
})(me);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: () => l
  });
  const t = /* @__PURE__ */ n(me);
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
})(Ge);
var Xe = {};
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
})(Xe);
var Ye = {};
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
})(Ye);
var Je = {}, ge = {}, Ze = {};
const Gt = "tailwindcss", Qt = "3.3.1", Xt = "A utility-first CSS framework for rapidly building custom user interfaces.", Yt = "MIT", Jt = "lib/index.js", Zt = "types/index.d.ts", en = "https://github.com/tailwindlabs/tailwindcss.git", tn = "https://github.com/tailwindlabs/tailwindcss/issues", nn = "https://tailwindcss.com", rn = {
  tailwind: "lib/cli.js",
  tailwindcss: "lib/cli.js"
}, on = {
  engine: "stable"
}, sn = {
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
}, ln = [
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
], an = {
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
}, un = {
  postcss: "^8.0.9"
}, dn = {
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
}, cn = [
  "> 1%",
  "not edge <= 18",
  "not ie 11",
  "not op_mini all"
], pn = {
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
}, fn = {
  node: ">=12.13.0"
}, mn = {
  name: Gt,
  version: Qt,
  description: Xt,
  license: Yt,
  main: Jt,
  types: Zt,
  repository: en,
  bugs: tn,
  homepage: nn,
  bin: rn,
  tailwindcss: on,
  scripts: sn,
  files: ln,
  devDependencies: an,
  peerDependencies: un,
  dependencies: dn,
  browserslist: cn,
  jest: pn,
  engines: fn
};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(f, w) {
    for (var V in w)
      Object.defineProperty(f, V, {
        enumerable: !0,
        get: w[V]
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
  const n = /* @__PURE__ */ i(mn);
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
  function g(f, w) {
    return f === void 0 ? w : !(f === "0" || f === "false");
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
    let w = f.split(",").map((V) => V.split(":")[0]);
    return w.includes("-tailwindcss") ? !1 : !!w.includes("tailwindcss");
  }
})(Ze);
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
  const n = /* @__PURE__ */ s(ce), i = /* @__PURE__ */ s(me), l = Ze;
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
      var f, w, V;
      return g.future === "all" || ((V = (w = g == null || (f = g.future) === null || f === void 0 ? void 0 : f[v]) !== null && w !== void 0 ? w : r[v]) !== null && V !== void 0 ? V : !1);
    }
    if (a.experimental.includes(v)) {
      var I, R, E;
      return g.experimental === "all" || ((E = (R = g == null || (I = g.experimental) === null || I === void 0 ? void 0 : I[v]) !== null && R !== void 0 ? R : r[v]) !== null && E !== void 0 ? E : !1);
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
})(ge);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "normalizeConfig", {
    enumerable: !0,
    get: () => s
  });
  const t = ge, n = /* @__PURE__ */ l(me);
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
          var g, v, f, w, V, I, R, E, W, H;
          return !((g = r.purge) === null || g === void 0) && g.extract ? r.purge.extract : !((v = r.content) === null || v === void 0) && v.extract ? r.content.extract : !((f = r.purge) === null || f === void 0 || (w = f.extract) === null || w === void 0) && w.DEFAULT ? r.purge.extract.DEFAULT : !((V = r.content) === null || V === void 0 || (I = V.extract) === null || I === void 0) && I.DEFAULT ? r.content.extract.DEFAULT : !((R = r.purge) === null || R === void 0 || (E = R.options) === null || E === void 0) && E.extractors ? r.purge.options.extractors : !((W = r.content) === null || W === void 0 || (H = W.options) === null || H === void 0) && H.extractors ? r.content.options.extractors : {};
        })(), p = {}, K = (() => {
          var g, v, f, w;
          if (!((g = r.purge) === null || g === void 0 || (v = g.options) === null || v === void 0) && v.defaultExtractor)
            return r.purge.options.defaultExtractor;
          if (!((f = r.content) === null || f === void 0 || (w = f.options) === null || w === void 0) && w.defaultExtractor)
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
          var K, g, v, f, w, V;
          return !((K = r.purge) === null || K === void 0) && K.transform ? r.purge.transform : !((g = r.content) === null || g === void 0) && g.transform ? r.content.transform : !((v = r.purge) === null || v === void 0 || (f = v.transform) === null || f === void 0) && f.DEFAULT ? r.purge.transform.DEFAULT : !((w = r.content) === null || w === void 0 || (V = w.transform) === null || V === void 0) && V.DEFAULT ? r.content.transform.DEFAULT : {};
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
})(Je);
var et = {};
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
})(et);
var tt = {};
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
})(tt);
var nt = {}, rt = {};
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
})(rt);
var xe = {}, je = {}, gn = {
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
  function t(f, w) {
    for (var V in w)
      Object.defineProperty(f, V, {
        enumerable: !0,
        get: w[V]
      });
  }
  t(e, {
    parseColor: () => g,
    formatColor: () => v
  });
  const n = /* @__PURE__ */ i(gn);
  function i(f) {
    return f && f.__esModule ? f : {
      default: f
    };
  }
  let l = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i, s = /^#([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i, r = /(?:\d+|\d*\.\d+)%?/, a = /(?:\s*,\s*|\s+)/, u = /\s*[,/]\s*/, o = /var\(--(?:[^ )]*?)\)/, p = new RegExp(`^(rgba?)\\(\\s*(${r.source}|${o.source})(?:${a.source}(${r.source}|${o.source}))?(?:${a.source}(${r.source}|${o.source}))?(?:${u.source}(${r.source}|${o.source}))?\\s*\\)$`), K = new RegExp(`^(hsla?)\\(\\s*((?:${r.source})(?:deg|rad|grad|turn)?|${o.source})(?:${a.source}(${r.source}|${o.source}))?(?:${a.source}(${r.source}|${o.source}))?(?:${u.source}(${r.source}|${o.source}))?\\s*\\)$`);
  function g(f, { loose: w = !1 } = {}) {
    var V, I;
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
    let R = f.replace(s, (Q, ne, ee, _, x) => [
      "#",
      ne,
      ne,
      ee,
      ee,
      _,
      _,
      x ? x + x : ""
    ].join("")).match(l);
    if (R !== null)
      return {
        mode: "rgb",
        color: [
          parseInt(R[1], 16),
          parseInt(R[2], 16),
          parseInt(R[3], 16)
        ].map((Q) => Q.toString()),
        alpha: R[4] ? (parseInt(R[4], 16) / 255).toString() : void 0
      };
    var E;
    let W = (E = f.match(p)) !== null && E !== void 0 ? E : f.match(K);
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
    } : !w && H.length !== 3 || H.length < 3 && !H.some((Q) => /^var\(.*?\)$/.test(Q)) ? null : {
      mode: W[1],
      color: H,
      alpha: (V = W[5]) === null || V === void 0 || (I = V.toString) === null || I === void 0 ? void 0 : I.call(V)
    };
  }
  function v({ mode: f, color: w, alpha: V }) {
    let I = V !== void 0;
    return f === "rgba" || f === "hsla" ? `${f}(${w.join(", ")}${I ? `, ${V}` : ""})` : `${f}(${w.join(" ")}${I ? ` / ${V}` : ""})`;
  }
})(je);
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
  const n = je;
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
})(xe);
var Te = {}, ot = {}, he = {};
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
})(he);
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
  const n = he;
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
      for (let w of v)
        s.lastIndex = 0, !f.has("KEYWORD") && i.has(w) ? (g.keyword = w, f.add("KEYWORD")) : s.test(w) ? f.has("X") ? f.has("Y") ? f.has("BLUR") ? f.has("SPREAD") || (g.spread = w, f.add("SPREAD")) : (g.blur = w, f.add("BLUR")) : (g.y = w, f.add("Y")) : (g.x = w, f.add("X")) : g.color ? (g.unknown || (g.unknown = []), g.unknown.push(w)) : g.color = w;
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
})(ot);
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
    length: () => w,
    lineWidth: () => I,
    shadow: () => R,
    color: () => E,
    image: () => W,
    gradient: () => Q,
    position: () => ee,
    familyName: () => _,
    genericName: () => S,
    absoluteSize: () => y,
    relativeSize: () => b
  });
  const n = je, i = ot, l = he;
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
    return c.startsWith("--") ? `var(${c})` : c.includes("url(") ? c.split(/(url\(.*?\))/g).filter(Boolean).map((j) => /^url\(.*?\)$/.test(j) ? j : o(j, !1)).join("") : (c = c.replace(/([^\\])_+/g, (j, P) => P + " ".repeat(j.length - 1)).replace(/^_/g, " ").replace(/\\_/g, "_"), O && (c = c.trim()), c = c.replace(/(calc|min|max|clamp)\(.+\)/g, (j) => {
      let P = [];
      return j.replace(/var\((--.+?)[,)]/g, (Y, Ke) => (P.push(Ke), Y.replace(Ke, a))).replace(/(-?\d*\.?\d(?!\b-\d.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g, "$1 $2 ").replace(u, () => P.shift());
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
  function w(c) {
    return c === "0" || new RegExp(`^[+-]?[0-9]*.?[0-9]+(?:[eE][+-]?[0-9]+)?${f}$`).test(c) || r(c);
  }
  let V = /* @__PURE__ */ new Set([
    "thin",
    "medium",
    "thick"
  ]);
  function I(c) {
    return V.has(c);
  }
  function R(c) {
    let O = (0, i.parseBoxShadowValue)(o(c));
    for (let j of O)
      if (!j.valid)
        return !1;
    return !0;
  }
  function E(c) {
    let O = 0;
    return (0, l.splitAtTopLevelOnly)(c, "_").every((P) => (P = o(P), P.startsWith("var(") ? !0 : (0, n.parseColor)(P, {
      loose: !0
    }) !== null ? (O++, !0) : !1)) ? O > 0 : !1;
  }
  function W(c) {
    let O = 0;
    return (0, l.splitAtTopLevelOnly)(c, ",").every((P) => (P = o(P), P.startsWith("var(") ? !0 : p(P) || Q(P) || [
      "element(",
      "image(",
      "cross-fade(",
      "image-set("
    ].some((Y) => P.startsWith(Y)) ? (O++, !0) : !1)) ? O > 0 : !1;
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
    return (0, l.splitAtTopLevelOnly)(c, "_").every((P) => (P = o(P), P.startsWith("var(") ? !0 : ne.has(P) || w(P) || g(P) ? (O++, !0) : !1)) ? O > 0 : !1;
  }
  function _(c) {
    let O = 0;
    return (0, l.splitAtTopLevelOnly)(c, ",").every((P) => (P = o(P), P.startsWith("var(") ? !0 : P.includes(" ") && !/(['"])([^"']+)\1/g.test(P) || /^\d/g.test(P) ? !1 : (O++, !0))) ? O > 0 : !1;
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
})(Te);
var st = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "backgroundSize", {
    enumerable: !0,
    get: () => i
  });
  const t = Te, n = he;
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
})(st);
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
    parseColorFormat: () => w,
    asColor: () => I,
    asLookupValue: () => R,
    typeMap: () => W,
    coerceValue: () => ne,
    getMatchingTypes: () => ee
  });
  const n = /* @__PURE__ */ u(rt), i = xe, l = Te, s = /* @__PURE__ */ u(Oe), r = st, a = ge;
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
  function w(_) {
    if (typeof _ == "string" && _.includes("<alpha-value>")) {
      let x = _;
      return ({ opacityValue: S = 1 }) => x.replace("<alpha-value>", S);
    }
    return _;
  }
  function V(_) {
    return _ = _.slice(1, -1), _.startsWith("--") && (_ = `var(${_})`), _;
  }
  function I(_, x = {}, { tailwindConfig: S = {} } = {}) {
    var h;
    if (((h = x.values) === null || h === void 0 ? void 0 : h[_]) !== void 0) {
      var y;
      return w((y = x.values) === null || y === void 0 ? void 0 : y[_]);
    }
    let [$, b] = f(_);
    if (b !== void 0) {
      var c, O, j, P;
      let Y = (P = (c = x.values) === null || c === void 0 ? void 0 : c[$]) !== null && P !== void 0 ? P : v($) ? $.slice(1, -1) : void 0;
      return Y === void 0 ? void 0 : (Y = w(Y), v(b) ? (0, i.withAlphaValue)(Y, V(b)) : ((O = S.theme) === null || O === void 0 || (j = O.opacity) === null || j === void 0 ? void 0 : j[b]) === void 0 ? void 0 : (0, i.withAlphaValue)(Y, S.theme.opacity[b]));
    }
    return g(_, x, {
      validate: l.color
    });
  }
  function R(_, x = {}) {
    var S;
    return (S = x.values) === null || S === void 0 ? void 0 : S[_];
  }
  function E(_) {
    return (x, S) => g(x, S, {
      validate: _
    });
  }
  let W = {
    any: g,
    color: I,
    url: E(l.url),
    image: E(l.image),
    length: E(l.length),
    percentage: E(l.percentage),
    position: E(l.position),
    lookup: R,
    "generic-name": E(l.genericName),
    "family-name": E(l.familyName),
    number: E(l.number),
    "line-width": E(l.lineWidth),
    "absolute-size": E(l.absoluteSize),
    "relative-size": E(l.relativeSize),
    shadow: E(l.shadow),
    size: E(r.backgroundSize)
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
      let P = (j = (O = S.modifiers) === null || O === void 0 ? void 0 : O[b]) !== null && j !== void 0 ? j : null;
      P !== null ? b = P : v(b) && (b = V(b));
    }
    for (let { type: P } of _ ?? []) {
      let Y = W[P]($, S, {
        tailwindConfig: h
      });
      Y !== void 0 && (yield [
        Y,
        P,
        b ?? null
      ]);
    }
  }
})(nt);
var it = {};
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
})(it);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: () => S
  });
  const t = /* @__PURE__ */ v(Oe), n = /* @__PURE__ */ v(qe), i = /* @__PURE__ */ v(He), l = /* @__PURE__ */ v(Ge), s = Xe, r = Ye, a = Je, u = /* @__PURE__ */ v(et), o = tt, p = nt, K = xe, g = /* @__PURE__ */ v(it);
  function v(h) {
    return h && h.__esModule ? h : {
      default: h
    };
  }
  function f(h) {
    return typeof h == "function";
  }
  function w(h, ...y) {
    let $ = y.pop();
    for (let b of y)
      for (let c in b) {
        let O = $(h[c], b[c]);
        O === void 0 ? (0, u.default)(h[c]) && (0, u.default)(b[c]) ? h[c] = w({}, h[c], b[c], $) : h[c] = b[c] : h[c] = O;
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
  function I(h, ...y) {
    return f(h) ? h(...y) : h;
  }
  function R(h) {
    return h.reduce((y, { extend: $ }) => w(y, $, (b, c) => b === void 0 ? [
      c
    ] : Array.isArray(b) ? [
      c,
      ...b
    ] : [
      c,
      b
    ]), {});
  }
  function E(h) {
    return {
      ...h.reduce((y, $) => (0, s.defaults)(y, $), {}),
      // In order to resolve n config objects, we combine all of their `extend` properties
      // into arrays instead of objects so they aren't overridden.
      extend: R(h)
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
    return w(y, h, ($, b) => !f($) && !b.some(f) ? w({}, $, ...b, W) : (c, O) => w({}, ...[
      $,
      ...b
    ].map((j) => I(j, c, O)), W));
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
            let P = (0, p.parseColorFormat)(j);
            return (0, K.withAlphaValue)(P, c.alpha, (0, g.default)(P));
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
      theme: ne(H(E(y.map((c) => ($ = c?.theme) !== null && $ !== void 0 ? $ : {})))),
      corePlugins: _(y.map((c) => c.corePlugins)),
      plugins: x(h.map((c) => (b = c?.plugins) !== null && b !== void 0 ? b : []))
    }, ...y));
  }
})(We);
var lt = {}, hn = {
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
  const t = /* @__PURE__ */ i(hn), n = ge;
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
})(lt);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: () => l
  });
  const t = /* @__PURE__ */ i(We), n = /* @__PURE__ */ i(lt);
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
})(Re);
let be = Re;
var _n = (be.__esModule ? be : { default: be }).default;
const bn = {
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
  plugins: [],
  corePlugins: {
    // Preflight does some global page normalization, which can mess up app which embed
    // cs-vue-vite in a standard CS page.  e.g., it adds img {display: block;}, which breaks some CS stuff.
    // https://tailwindcss.com/docs/preflight
    preflight: !1
  }
  // important: '.k-app',
}, yn = _n(bn);
function vn(e) {
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
const $n = T({
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
      const t = A(yn, ["theme", "colors"]), n = A(t, e);
      return typeof n == "string" ? n : e;
    },
    fontColorForBackgroundColor(e) {
      const t = vn(e);
      return t.alpha * 255 < 150 || Math.round(
        (t.red * 299 + t.green * 587 + t.blue * 114) / 1e3
      ) > 125 ? "#000" : "#fff";
    }
  }
}), wn = T({
  mixins: [$n]
});
const kn = { class: "flex-grow" };
function Sn(e, t, n, i, l, s) {
  return d(), m("div", {
    class: "k-alert",
    style: ie([e.colorableBackgroundStyle, e.colorableTextStyleForBackground])
  }, [
    k("div", kn, [
      B(e.$slots, "default")
    ])
  ], 4);
}
const On = /* @__PURE__ */ C(wn, [["render", Sn]]), xn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: On
}, Symbol.toStringTag, { value: "Module" }));
const jn = {}, Tn = { class: "k-app" };
function Pn(e, t) {
  const n = z("KSnackbar"), i = z("KConfirm");
  return d(), m("div", Tn, [
    U(i, null, {
      default: L(() => [
        U(n, null, {
          default: L(() => [
            B(e.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    })
  ]);
}
const Cn = /* @__PURE__ */ C(jn, [["render", Pn]]), Kn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Cn
}, Symbol.toStringTag, { value: "Module" })), Mn = T({
  directives: {
    ClickAway: Ie
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
const An = { class: "k-autocomplete-input" }, Vn = ["placeholder", "readonly"], zn = {
  key: 0,
  class: "k-autocomplete-items"
}, Ln = ["onClick"];
function Fn(e, t, n, i, l, s) {
  const r = De("click-away");
  return oe((d(), m("div", {
    class: "k-autocomplete",
    style: ie([e.style])
  }, [
    B(e.$slots, "prepend", { item: e.localValue }),
    k("div", An, [
      oe(k("input", {
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = (a) => e.inputText = a),
        class: J(["k-input", { invalidSelection: !e.isValidSelection }]),
        type: "search",
        autocomplete: "off",
        placeholder: e.placeholderText,
        readonly: !e.editable,
        onSearch: t[1] || (t[1] = (...a) => e.clearInput && e.clearInput(...a)),
        onKeydown: [
          t[2] || (t[2] = de(re((a) => e.currentFocus = Math.max(-1, e.currentFocus - 1), ["prevent"]), ["arrow-up"])),
          t[3] || (t[3] = de(re((a) => e.currentFocus = Math.min(e.items.length - 1, e.currentFocus + 1), ["prevent"]), ["arrow-down"])),
          t[4] || (t[4] = de(re((a) => e.select(e.currentFocus), ["prevent"]), ["enter"])),
          t[6] || (t[6] = de((...a) => e.setBlur && e.setBlur(...a), ["tab"]))
        ],
        onFocus: t[5] || (t[5] = (...a) => e.setFocus && e.setFocus(...a)),
        onKeyup: t[7] || (t[7] = (...a) => e.keyup && e.keyup(...a))
      }, null, 42, Vn), [
        [we, e.inputText]
      ]),
      e.focus && e.items.length && e.inputText ? (d(), m("div", zn, [
        (d(!0), m(q, null, Z(e.itemsFiltered, (a, u) => (d(), m("div", {
          key: u,
          class: J(["k-autocomplete-item", { "k-autocomplete-active": e.currentFocus == u }]),
          onClick: (o) => e.select(u)
        }, [
          B(e.$slots, "item", { item: a }, () => [
            G(F(a), 1)
          ])
        ], 10, Ln))), 128))
      ])) : M("", !0)
    ])
  ], 4)), [
    [r, e.setBlur]
  ]);
}
const En = /* @__PURE__ */ C(Mn, [["render", Fn]]), Nn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: En
}, Symbol.toStringTag, { value: "Module" }));
function te(e, t) {
  const n = Ne(e, t);
  if (!n)
    throw new Error(`Could not resolve ${e.description}`);
  return n;
}
const se = Symbol("session"), _e = Symbol("config"), Dn = Symbol("snackbar"), Bn = Symbol("confirmDialogKey"), ye = new Se();
class Un {
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
class In {
  nodes;
  nodeLookupQueue;
  constructor() {
    this.nodes = {}, this.nodeLookupQueue = new Un();
  }
  registerUsers(t) {
    t.forEach((n) => this.nodes[n.dataid] = n);
  }
  async lookup(t, n) {
    return n ? (await ye.acquire(n), this.nodes[n] ? (ye.release(n), this.nodes[n]) : new Promise((i) => {
      const l = (s) => {
        this.nodes[n] = s, i(s), ye.release(n);
      };
      this.nodeLookupQueue.queue(t, l, n);
    })) : null;
  }
}
const Rn = new In(), Wn = T({
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
        e && (this.nodeRecLocal = await Rn.lookup(this.session, e));
      },
      immediate: !0
    }
  }
}), qn = { key: 0 }, Hn = ["src"], Gn = ["href"], Qn = ["innerHTML"];
function Xn(e, t, n, i, l, s) {
  const r = z("KFunctionMenu");
  return e.nodeRecResolved ? (d(), m("span", qn, [
    e.image ? (d(), m("img", {
      key: 0,
      src: e.nodeRecResolved.gif
    }, null, 8, Hn)) : M("", !0),
    G(" "),
    k("a", {
      href: e.nodeRecResolved.url
    }, F(e.nodeRecResolved.name), 9, Gn),
    e.clickable ? (d(), N(r, {
      key: 1,
      dataid: e.nodeRecResolved.dataid
    }, null, 8, ["dataid"])) : M("", !0),
    k("span", {
      innerHTML: e.nodeRecResolved.modifiedImageCallback
    }, null, 8, Qn)
  ])) : M("", !0);
}
const Yn = /* @__PURE__ */ C(Wn, [["render", Xn]]), Jn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Yn
}, Symbol.toStringTag, { value: "Module" })), Zn = T({
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
const er = ["disabled"];
function tr(e, t, n, i, l, s) {
  return d(), m("button", Be({
    class: ["k-button", e.classObj],
    disabled: e.disabled,
    type: "button"
  }, e.$attrs, {
    onClick: t[0] || (t[0] = (r) => e.$emit("click"))
  }), [
    B(e.$slots, "default")
  ], 16, er);
}
const nr = /* @__PURE__ */ C(Zn, [["render", tr]]), rr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nr
}, Symbol.toStringTag, { value: "Module" })), or = T({
  provide() {
    return {
      // @ts-ignore - not sure why this complains
      [Bn]: this
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
function sr(e, t, n, i, l, s) {
  const r = z("KCardTitle"), a = z("KCardText"), u = z("KSpacer"), o = z("KButton"), p = z("KCardActions"), K = z("KCard"), g = z("KDialog");
  return d(), m(q, null, [
    B(e.$slots, "default"),
    U(g, {
      modelValue: e.dialog,
      "onUpdate:modelValue": t[2] || (t[2] = (v) => e.dialog = v),
      "max-width": "30vw",
      "min-width": "20vw"
    }, {
      default: L(() => [
        U(K, null, {
          default: L(() => [
            e.title ? (d(), N(r, { key: 0 }, {
              default: L(() => [
                G(F(e.title), 1)
              ]),
              _: 1
            })) : M("", !0),
            e.message ? (d(), N(a, { key: 1 }, {
              default: L(() => [
                G(F(e.message), 1)
              ]),
              _: 1
            })) : M("", !0),
            U(p, null, {
              default: L(() => [
                U(u),
                e.noLabel ? (d(), N(o, {
                  key: 0,
                  small: "",
                  onClick: t[0] || (t[0] = (v) => e.dismiss(!1))
                }, {
                  default: L(() => [
                    G(F(e.noLabel), 1)
                  ]),
                  _: 1
                })) : M("", !0),
                e.yesLabel ? (d(), N(o, {
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
const ir = /* @__PURE__ */ C(or, [["render", sr]]), lr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ir
}, Symbol.toStringTag, { value: "Module" })), ar = T({
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
      return t ? this.time ? Ae(t, "yyyy-MM-dd'T'HH:mm:ss") : Ae(t, "yyyy-MM-dd") : null;
    }
  }
});
const ur = { class: "k-date-time-picker" }, dr = ["type", "readonly"];
function cr(e, t, n, i, l, s) {
  const r = z("KButton");
  return d(), m("div", ur, [
    oe(k("input", {
      "onUpdate:modelValue": t[0] || (t[0] = (a) => e.localModelValue = a),
      class: "k-input",
      type: e.type,
      readonly: !e.editable
    }, null, 8, dr), [
      [mt, e.localModelValue]
    ]),
    e.editable ? (d(), m(q, { key: 0 }, [
      U(r, {
        small: "",
        onClick: e.setToNow
      }, {
        default: L(() => [
          G(" Now ")
        ]),
        _: 1
      }, 8, ["onClick"]),
      U(r, {
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
const pr = /* @__PURE__ */ C(ar, [["render", cr]]), fr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pr
}, Symbol.toStringTag, { value: "Module" })), mr = T({
  directives: {
    ClickAway: Ie
  },
  mixins: [fe],
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
      this.$emit("update:modelValue", e), e ? (await this.$nextTick(), bt(this.$refs.content)) : yt(this.$refs.content);
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
function gr(e, t, n, i, l, s) {
  const r = De("click-away");
  return d(), m(q, null, [
    B(e.$slots, "activator", { on: e.on }),
    e.mounted ? (d(), N(gt, {
      key: 0,
      to: ".k-app"
    }, [
      U(pe, { name: "fade" }, {
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
              B(e.$slots, "default", { on: e.on })
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
const hr = /* @__PURE__ */ C(mr, [["render", gr]]), _r = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: hr
}, Symbol.toStringTag, { value: "Module" })), br = T({
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
function yr(e, t, n, i, l, s) {
  return d(), m("div", {
    class: "k-dot",
    style: ie([e.style])
  }, [
    B(e.$slots, "default")
  ], 4);
}
const vr = /* @__PURE__ */ C(br, [["render", yr]]), $r = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vr
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
}), wr = {
  mixins: [le]
};
const kr = {
  key: 0,
  class: "k-form-field-label"
};
function Sr(e, t, n, i, l, s) {
  return d(), m("div", null, [
    e.label ? (d(), m("div", kr, F(e.label), 1)) : M("", !0),
    B(e.$slots, "default"),
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
const Or = /* @__PURE__ */ C(wr, [["render", Sr]]), xr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Or,
  mixin: le
}, Symbol.toStringTag, { value: "Module" })), jr = T({
  setup() {
    return { config: te(_e) };
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
}), Tr = { key: 0 }, Pr = ["id"], Cr = ["src"], Kr = ["id", "src"];
function Mr(e, t, n, i, l, s) {
  return e.dataid ? (d(), m("span", Tr, [
    k("a", {
      id: e.aid,
      href: "#",
      class: "functionMenuHotspot",
      onClick: t[2] || (t[2] = re((...r) => e.onclick && e.onclick(...r), ["prevent"]))
    }, [
      e.isModernFunctionMenu ? (d(), m("img", {
        key: 0,
        src: `${e.config.img}spacer.gif`,
        alt: "Functions"
      }, null, 8, Cr)) : (d(), m("img", {
        key: 1,
        id: e.xid,
        src: e.image,
        border: "0",
        alt: "Functions",
        title: "Functions",
        onMouseover: t[0] || (t[0] = (...r) => e.onmouseover && e.onmouseover(...r)),
        onMouseout: t[1] || (t[1] = (...r) => e.onmouseout && e.onmouseout(...r))
      }, null, 40, Kr))
    ], 8, Pr),
    t[3] || (Me(-1), t[3] = k("div", {
      id: e.zid,
      ref: "functionMenuDiv",
      class: "functionMenuDiv"
    }, null, 8, ["id"]), Me(1), t[3])
  ])) : M("", !0);
}
const Ar = /* @__PURE__ */ C(jr, [["render", Mr]]), Vr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ar
}, Symbol.toStringTag, { value: "Module" })), zr = T({});
const Lr = { class: "k-progress-line" };
function Fr(e, t, n, i, l, s) {
  return d(), m("div", Lr);
}
const Er = /* @__PURE__ */ C(zr, [["render", Fr]]), Nr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Er
}, Symbol.toStringTag, { value: "Module" })), Dr = T({
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
const Br = { class: "k-multi-widget" }, Ur = { class: "k-multi-buttons" }, Ir = /* @__PURE__ */ k("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ k("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z" })
], -1), Rr = /* @__PURE__ */ k("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ k("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" })
], -1);
function Wr(e, t, n, i, l, s) {
  const r = z("KButton"), a = z("KCard");
  return d(), N(a, { class: "k-multi" }, {
    default: L(() => [
      U(ke, {
        name: "fade",
        tag: "div"
      }, {
        default: L(() => [
          (d(!0), m(q, null, Z(e.valueLocal, (u, o) => (d(), m("div", {
            key: `k-multi-${u}`,
            class: "k-multi-item"
          }, [
            k("div", Br, [
              B(e.$slots, "default", {
                index: o,
                value: u,
                update: (p) => e.update(o, p)
              })
            ]),
            k("div", Ur, [
              e.canRemove ? (d(), N(r, {
                key: 0,
                text: "",
                onClick: (p) => e.remove(o)
              }, {
                default: L(() => [
                  Ir
                ]),
                _: 2
              }, 1032, ["onClick"])) : M("", !0),
              e.canAdd ? (d(), N(r, {
                key: 1,
                text: "",
                onClick: (p) => e.add(o)
              }, {
                default: L(() => [
                  Rr
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
const qr = /* @__PURE__ */ C(Dr, [["render", Wr]]), Hr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qr
}, Symbol.toStringTag, { value: "Module" })), Gr = T({
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
const Qr = { class: "k-multi-widget" }, Xr = /* @__PURE__ */ k("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ k("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z" })
], -1);
function Yr(e, t, n, i, l, s) {
  const r = z("KButton"), a = z("KCard");
  return d(), N(a, { class: "k-multi" }, {
    default: L(() => [
      U(ke, {
        name: "fade",
        tag: "div"
      }, {
        default: L(() => [
          (d(!0), m(q, null, Z(e.valueLocal, (u, o) => (d(), m("div", {
            key: `k-multi-${u}`,
            class: "k-multi-item"
          }, [
            k("div", Qr, [
              B(e.$slots, "readonly", {
                index: o,
                value: u
              }, () => [
                G(F(u), 1)
              ])
            ]),
            e.readonly ? M("", !0) : (d(), N(r, {
              key: 0,
              text: "",
              onClick: (p) => e.remove(o)
            }, {
              default: L(() => [
                Xr
              ]),
              _: 2
            }, 1032, ["onClick"]))
          ]))), 128))
        ]),
        _: 3
      }),
      e.canAdd ? B(e.$slots, "add", {
        key: 0,
        add: e.add
      }) : M("", !0)
    ]),
    _: 3
  });
}
const Jr = /* @__PURE__ */ C(Gr, [["render", Yr]]), Zr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Jr
}, Symbol.toStringTag, { value: "Module" })), eo = T({
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
function to(e, t, n, i, l, s) {
  const r = z("KUserLink"), a = z("KUserPicker"), u = z("KMulti2");
  return d(), N(u, {
    modelValue: e.userIdsLocal,
    "onUpdate:modelValue": t[0] || (t[0] = (o) => e.userIdsLocal = o),
    readonly: e.readonly
  }, {
    readonly: L(({ value: o }) => [
      U(r, {
        user: o,
        gif: ""
      }, null, 8, ["user"])
    ]),
    add: L(({ add: o }) => [
      U(a, {
        "onUpdate:modelValue": (p) => o(p),
        users: e.users,
        groups: e.groups
      }, null, 8, ["onUpdate:modelValue", "users", "groups"])
    ]),
    _: 1
  }, 8, ["modelValue", "readonly"]);
}
const no = /* @__PURE__ */ C(eo, [["render", to]]), ro = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: no
}, Symbol.toStringTag, { value: "Module" })), Ve = new Se();
class oo {
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
      if (await Ve.acquire(n), !this.nodes[n]) {
        const i = await t.nodes.ancestors(n);
        this.nodes[n] = A(i, "data.ancestors", []);
      }
      return this.nodes[n];
    } finally {
      Ve.release(n);
    }
  }
}
const at = new oo(), so = T({
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
        e && (this.breadcrumb = await at.lookup(this.session, e));
      },
      immediate: !0
    }
  }
});
const io = { class: "k-node-breadcrumb" };
function lo(e, t, n, i, l, s) {
  return d(), m("div", io, [
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
const ut = /* @__PURE__ */ C(so, [["render", lo]]), ao = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ut
}, Symbol.toStringTag, { value: "Module" })), uo = T({
  components: { KNodeAncestor: ut },
  setup() {
    return {
      session: te(se),
      config: te(_e)
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
      return vt(this.config.baseUrl, {
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
        this.dataid ? this.breadcrumb = await at.lookup(
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
      return this.objid ?? parseInt($t.get("TargetBrowseObjID") ?? "0");
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
const co = { class: "k-node-picker-field" }, po = ["value"];
function fo(e, t, n, i, l, s) {
  const r = z("KButton"), a = z("KNodeAncestor");
  return d(), m("div", co, [
    k("input", {
      ref: "input",
      type: "text",
      class: "k-input",
      value: e.name,
      onFocus: t[0] || (t[0] = (...u) => e.openWindow && e.openWindow(...u))
    }, null, 40, po),
    U(r, {
      small: "",
      onClick: e.openWindow
    }, {
      default: L(() => [
        G(F(e.browseButtonLabel), 1)
      ]),
      _: 1
    }, 8, ["onClick"]),
    e.clearable ? (d(), N(r, {
      key: 0,
      small: "",
      onClick: e.clear
    }, {
      default: L(() => [
        G(F(e.clearButtonLabel), 1)
      ]),
      _: 1
    }, 8, ["onClick"])) : M("", !0),
    e.dataid ? (d(), N(a, {
      key: 1,
      dataid: e.dataid
    }, null, 8, ["dataid"])) : M("", !0)
  ]);
}
const mo = /* @__PURE__ */ C(uo, [["render", fo]]), go = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mo
}, Symbol.toStringTag, { value: "Module" })), ho = T({
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
const _o = { class: "k-one-moment" }, bo = { class: "k-one-moment-label" };
function yo(e, t, n, i, l, s) {
  const r = z("KSpinner"), a = z("KDialog");
  return d(), N(a, { "model-value": e.loading }, {
    default: L(() => [
      k("div", _o, [
        U(r, {
          height: 36,
          width: 36
        }),
        k("div", bo, F(e.label), 1)
      ])
    ]),
    _: 1
  }, 8, ["model-value"]);
}
const vo = /* @__PURE__ */ C(ho, [["render", yo]]), $o = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vo
}, Symbol.toStringTag, { value: "Module" })), wo = T({
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
function ko(e, t, n, i, l, s) {
  return d(), m("div", null, [
    B(e.$slots, "default", { active: e.active })
  ]);
}
const So = /* @__PURE__ */ C(wo, [["render", ko]]), Oo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: So
}, Symbol.toStringTag, { value: "Module" })), xo = T({
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
const jo = { class: "text-xl" }, To = { key: 0 }, Po = { class: "rhmuted" };
function Co(e, t, n, i, l, s) {
  return d(), m("div", jo, [
    G(F(e.title), 1),
    e.subtitle ? (d(), m("span", To, [
      G(": "),
      k("span", Po, F(e.subtitle), 1)
    ])) : M("", !0)
  ]);
}
const Ko = /* @__PURE__ */ C(xo, [["render", Co], ["__scopeId", "data-v-7d540f1b"]]), Mo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ko
}, Symbol.toStringTag, { value: "Module" })), Ao = T({
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
const Vo = { class: "k-pagination" }, zo = {
  key: 1,
  class: "k-pagination-buttons"
}, Lo = {
  key: 0,
  class: "k-pagination-button"
}, Fo = /* @__PURE__ */ k("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ k("path", { d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" })
], -1), Eo = [
  Fo
], No = { key: 0 }, Do = ["onClick"], Bo = {
  key: 1,
  class: "k-pagination-button"
}, Uo = /* @__PURE__ */ k("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ k("path", { d: "M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" })
], -1), Io = [
  Uo
], Ro = { key: 2 };
function Wo(e, t, n, i, l, s) {
  const r = z("KSelect");
  return d(), m("div", Vo, [
    e.potentiallyMultiplePages ? (d(), N(r, {
      key: 0,
      modelValue: e.pageSize,
      "onUpdate:modelValue": t[0] || (t[0] = (a) => e.pageSize = a),
      items: e.pageSizes,
      label: "Page Size"
    }, null, 8, ["modelValue", "items"])) : M("", !0),
    e.hasPrevious || e.hasNext ? (d(), m("div", zo, [
      e.hasPrevious ? (d(), m("a", Lo, Eo)) : M("", !0),
      (d(!0), m(q, null, Z(e.pageRange, (a) => (d(), m(q, { key: a }, [
        a === "|" ? (d(), m("div", No, "...")) : (d(), m("a", {
          key: 1,
          class: J(["k-pagination-button k-pagination-button-border", e.classObj(a)]),
          onClick: (u) => e.$emit("update:modelValue", a)
        }, F(a), 11, Do))
      ], 64))), 128)),
      e.hasNext ? (d(), m("a", Bo, Io)) : M("", !0)
    ])) : M("", !0),
    e.potentiallyMultiplePages ? (d(), m("div", Ro, " Displaying " + F(e.pagination.startIndex) + "-" + F(e.pagination.endIndex) + " of " + F(e.pagination.count) + " items. ", 1)) : M("", !0)
  ]);
}
const qo = /* @__PURE__ */ C(Ao, [["render", Wo]]), Ho = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qo
}, Symbol.toStringTag, { value: "Module" })), Go = T({
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
const Qo = { class: "k-pagination2" }, Xo = { class: "k-pagination2-buttons" }, Yo = /* @__PURE__ */ k("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ k("path", { d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" })
], -1), Jo = [
  Yo
], Zo = ["onClick"], es = /* @__PURE__ */ k("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ k("path", { d: "M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" })
], -1), ts = [
  es
];
function ns(e, t, n, i, l, s) {
  const r = z("KSelect");
  return d(), m("div", Qo, [
    k("div", null, [
      U(r, {
        modelValue: e.pageSize,
        "onUpdate:modelValue": t[0] || (t[0] = (a) => e.pageSize = a),
        items: e.pageSizes,
        label: "Page Size"
      }, null, 8, ["modelValue", "items"])
    ]),
    e.pageCount > 1 ? (d(), m(q, { key: 0 }, [
      k("div", Xo, [
        e.hasPrevious ? (d(), m("a", {
          key: 0,
          class: "k-pagination2-arrow-button",
          onClick: t[1] || (t[1] = (a) => e.clickedPageNumber(e.pageNumber0 - 1))
        }, Jo)) : M("", !0),
        (d(!0), m(q, null, Z(e.pageRange0, (a) => (d(), m("div", {
          key: a,
          class: J(["k-pagination2-button", e.classObj(a)]),
          onClick: (u) => e.clickedPageNumber(a)
        }, F(a + 1), 11, Zo))), 128)),
        e.hasNext ? (d(), m("a", {
          key: 1,
          class: "k-pagination2-arrow-button",
          onClick: t[2] || (t[2] = (a) => e.clickedPageNumber(e.pageNumber0 + 1))
        }, ts)) : M("", !0)
      ]),
      k("div", null, F(e.pageNumber) + " of " + F(e.pageCount) + " pages", 1)
    ], 64)) : M("", !0)
  ]);
}
const rs = /* @__PURE__ */ C(Go, [["render", ns]]), os = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: rs
}, Symbol.toStringTag, { value: "Module" })), Pe = T({
  mixins: [fe],
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
}), ze = () => {
  Ue((e) => ({
    "519b76bc": e.color
  }));
}, Le = Pe.setup;
Pe.setup = Le ? (e, t) => (ze(), Le(e, t)) : ze;
const ss = /* @__PURE__ */ k("circle", {
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), is = /* @__PURE__ */ k("path", {
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), ls = [
  ss,
  is
];
function as(e, t, n, i, l, s) {
  return d(), m("svg", {
    style: ie(e.measurableStyles),
    class: "k-spinner",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, ls, 4);
}
const dt = /* @__PURE__ */ C(Pe, [["render", as]]), us = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dt
}, Symbol.toStringTag, { value: "Module" })), ds = T({
  components: { KSpinner: dt },
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
const cs = {
  key: 0,
  class: "centerOverlay"
};
function ps(e, t, n, i, l, s) {
  const r = z("KSpinner");
  return e.loading ? (d(), m("div", cs, [
    U(r, {
      "max-width": e.size,
      "max-height": e.size
    }, null, 8, ["max-width", "max-height"])
  ])) : M("", !0);
}
const fs = /* @__PURE__ */ C(ds, [["render", ps]]), ms = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fs
}, Symbol.toStringTag, { value: "Module" })), gs = T({
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
const hs = ["id", "value", "disabled"], _s = ["for"];
function bs(e, t, n, i, l, s) {
  const r = z("KSpinner"), a = z("KFormFieldWrapper");
  return d(), m("div", null, [
    U(a, {
      label: e.label,
      "success-messages": e.successMessages,
      "error-messages": e.errorMessages
    }, {
      default: L(() => [
        U(pe, {
          name: "fade",
          mode: "out-in"
        }, {
          default: L(() => [
            e.loading ? (d(), N(r, { key: 0 })) : (d(), m("div", {
              key: 1,
              class: J(["k-radiogroup", e.classObj])
            }, [
              (d(!0), m(q, null, Z(e.items, (u) => (d(), m("div", {
                key: e.getItemValue(u),
                class: "k-radiogroup-item"
              }, [
                oe(k("input", {
                  id: e.getItemValue(u),
                  "onUpdate:modelValue": t[0] || (t[0] = (o) => e.localValue = o),
                  type: "radio",
                  value: e.getItemValue(u),
                  disabled: e.getItemDisabled(u)
                }, null, 8, hs), [
                  [ht, e.localValue]
                ]),
                k("label", {
                  for: e.getItemValue(u)
                }, F(e.getItemText(u)), 9, _s)
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
const ys = /* @__PURE__ */ C(gs, [["render", bs]]), vs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ys
}, Symbol.toStringTag, { value: "Module" })), $s = T({
  inject: ["ksnackbar"],
  methods: {
    click() {
    }
  }
});
function ws(e, t, n, i, l, s) {
  return d(), m("div", null, [
    k("button", {
      onClick: t[0] || (t[0] = (...r) => e.click && e.click(...r))
    }, "click")
  ]);
}
const ks = /* @__PURE__ */ C($s, [["render", ws]]), Ss = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ks
}, Symbol.toStringTag, { value: "Module" })), Os = T({
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
const xs = { class: "k-select" }, js = ["disabled"], Ts = ["value", "disabled"];
function Ps(e, t, n, i, l, s) {
  const r = z("KSpinner"), a = z("KFormFieldWrapper");
  return d(), N(a, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: L(() => [
      k("div", xs, [
        oe(k("select", {
          "onUpdate:modelValue": t[0] || (t[0] = (u) => e.localValue = u),
          class: J(e.classObj),
          disabled: e.disabledResolved
        }, [
          (d(!0), m(q, null, Z(e.items, (u) => (d(), m("option", {
            key: e.getItemValue(u),
            value: e.getItemValue(u),
            disabled: e.getItemDisabled(u)
          }, F(e.getItemText(u)), 9, Ts))), 128))
        ], 10, js), [
          [_t, e.localValue]
        ]),
        U(pe, { name: "fade" }, {
          default: L(() => [
            e.loading ? (d(), N(r, {
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
const Cs = /* @__PURE__ */ C(Os, [["render", Ps]]), Ks = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Cs
}, Symbol.toStringTag, { value: "Module" })), Ms = T({});
const As = { class: "k-smart-ui-panel" }, Vs = {
  key: 0,
  class: "k-smart-ui-panel-header"
}, zs = { class: "k-smart-ui-panel-body" }, Ls = {
  key: 1,
  class: "k-smart-ui-panel-footer"
};
function Fs(e, t, n, i, l, s) {
  return d(), m("div", As, [
    e.$slots.header ? (d(), m("div", Vs, [
      B(e.$slots, "header")
    ])) : M("", !0),
    k("div", zs, [
      B(e.$slots, "default")
    ]),
    e.$slots.footer ? (d(), m("div", Ls, [
      B(e.$slots, "footer")
    ])) : M("", !0)
  ]);
}
const Es = /* @__PURE__ */ C(Ms, [["render", Fs]]), Ns = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Es
}, Symbol.toStringTag, { value: "Module" })), Ds = T({
  provide() {
    return {
      // @ts-ignore - not sure why this complains
      [Dn]: this
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
const Bs = { class: "k-snackbar" }, Us = { class: "k-snackbar-item-message" }, Is = {
  key: 0,
  class: "k-snackbar-title"
}, Rs = {
  key: 1,
  class: "k-snackbar-text"
}, Ws = {
  key: 0,
  class: "k-snackbar-action"
}, qs = ["onClick"];
function Hs(e, t, n, i, l, s) {
  return d(), m(q, null, [
    B(e.$slots, "default"),
    k("div", Bs, [
      U(ke, {
        name: "slide",
        tag: "div",
        mode: "out-in"
      }, {
        default: L(() => [
          (d(!0), m(q, null, Z(e.items, (r) => (d(), m("div", {
            key: r.index,
            class: J(["k-snackbar-item", e.classObj(r)])
          }, [
            k("div", Us, [
              r.title ? (d(), m("div", Is, F(r.title), 1)) : M("", !0),
              r.message ? (d(), m("div", Rs, F(r.message), 1)) : M("", !0)
            ]),
            r.action ? (d(), m("div", Ws, [
              k("a", {
                href: "#",
                onClick: re((a) => e.action(r), ["prevent"])
              }, F(r.actionLabel), 9, qs)
            ])) : M("", !0)
          ], 2))), 128))
        ]),
        _: 1
      })
    ])
  ], 64);
}
const Gs = /* @__PURE__ */ C(Ds, [["render", Hs]]), Qs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Gs
}, Symbol.toStringTag, { value: "Module" })), Xs = T({
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
const Ys = {
  key: 0,
  class: "j-sort-header-arrow"
}, Js = {
  key: 1,
  class: "j-sort-header-arrow"
};
function Zs(e, t, n, i, l, s) {
  return d(), m("a", {
    href: "#",
    onClick: t[0] || (t[0] = re((...r) => e.emitClick && e.emitClick(...r), ["prevent"]))
  }, [
    B(e.$slots, "default"),
    U(pe, {
      name: "fade",
      mode: "out-in"
    }, {
      default: L(() => [
        e.isActive && e.sortAsc ? (d(), m("span", Ys, "↓")) : e.isActive ? (d(), m("span", Js, "↑")) : M("", !0)
      ]),
      _: 1
    })
  ]);
}
const ei = /* @__PURE__ */ C(Xs, [["render", Zs]]), ti = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ei
}, Symbol.toStringTag, { value: "Module" }));
const ni = {}, ri = { class: "k-spacer" };
function oi(e, t) {
  return d(), m("div", ri);
}
const si = /* @__PURE__ */ C(ni, [["render", oi]]), ii = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: si
}, Symbol.toStringTag, { value: "Module" })), Ce = T({
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
}), Fe = () => {
  Ue((e) => ({
    "005bd1d4": e.switchWidthPx,
    b8c194da: e.heightPx,
    "110bcd4a": e.innerSizePx,
    75578316: e.paddingPx,
    "19f49a4c": e.transPx
  }));
}, Ee = Ce.setup;
Ce.setup = Ee ? (e, t) => (Fe(), Ee(e, t)) : Fe;
const li = /* @__PURE__ */ k("span", { class: "k-switch-slider" }, null, -1), ai = [
  li
];
function ui(e, t, n, i, l, s) {
  return d(), m("div", {
    class: J(["k-switch", e.classObj]),
    onClick: t[0] || (t[0] = (...r) => e.toggle && e.toggle(...r))
  }, ai, 2);
}
const di = /* @__PURE__ */ C(Ce, [["render", ui]]), ci = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: di
}, Symbol.toStringTag, { value: "Module" })), pi = T({
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
function fi(e, t, n, i, l, s) {
  const r = z("KLinearProgressIndicator");
  return d(), m("div", null, [
    e.loading ? (d(), N(r, { key: 0 })) : M("", !0),
    k("table", {
      class: J(["k-table", e.classObj])
    }, [
      B(e.$slots, "default")
    ], 2)
  ]);
}
const mi = /* @__PURE__ */ C(pi, [["render", fi]]), gi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mi
}, Symbol.toStringTag, { value: "Module" })), hi = T({
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
const _i = ["rows"];
function bi(e, t, n, i, l, s) {
  const r = z("KFormFieldWrapper");
  return d(), N(r, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: L(() => [
      oe(k("textarea", Be({
        "onUpdate:modelValue": t[0] || (t[0] = (a) => e.valueLocal = a)
      }, e.$attrs, {
        spellcheck: "false",
        class: [e.classObj, "k-textarea"],
        rows: e.rows,
        onKeydown: t[1] || (t[1] = de(re((...a) => e.tabber && e.tabber(...a), ["prevent"]), ["tab"]))
      }), null, 16, _i), [
        [we, e.valueLocal]
      ])
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const yi = /* @__PURE__ */ C(hi, [["render", bi]]), vi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: yi
}, Symbol.toStringTag, { value: "Module" })), $i = T({
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
const wi = ["placeholder"];
function ki(e, t, n, i, l, s) {
  const r = z("KFormFieldWrapper");
  return d(), N(r, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: L(() => [
      oe(k("input", {
        "onUpdate:modelValue": t[0] || (t[0] = (a) => e.value = a),
        class: J(["k-input-text-field", e.classObj]),
        placeholder: e.placeholder
      }, null, 10, wi), [
        [we, e.value]
      ])
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const Si = /* @__PURE__ */ C($i, [["render", ki]]), Oi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Si
}, Symbol.toStringTag, { value: "Module" })), xi = T({
  setup() {
    return {
      config: te(_e),
      session: te(se)
    };
  },
  mixins: [fe],
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
}), ji = ["src"];
function Ti(e, t, n, i, l, s) {
  return e.url ? (d(), m("img", {
    key: 0,
    src: e.url,
    style: ie([e.measurableStyles])
  }, null, 12, ji)) : M("", !0);
}
const Pi = /* @__PURE__ */ C(xi, [["render", Ti]]), Ci = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pi
}, Symbol.toStringTag, { value: "Module" })), ve = new Se();
class Ki {
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
class Mi {
  users;
  userLookupQueue;
  constructor() {
    this.users = {}, this.userLookupQueue = new Ki();
  }
  registerUsers(t) {
    t.forEach((n) => this.users[n.userid] = n);
  }
  async lookup(t, n) {
    return n ? (await ve.acquire(n), this.users[n] ? (ve.release(n), this.users[n]) : new Promise((i) => {
      const l = (s) => {
        this.users[n] = s, i(s), ve.release(n);
      };
      this.userLookupQueue.queue(t, l, n);
    })) : null;
  }
}
const ct = new Mi(), Ai = T({
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
        this.isInteger(e) ? this.userRecLocal = await ct.lookup(this.session, e) : this.userRecLocal = e;
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
const Vi = {
  key: 0,
  class: "k-user-link"
};
function zi(e, t, n, i, l, s) {
  const r = z("KUserGIF");
  return e.userRecLocal ? (d(), m("span", Vi, [
    e.gif ? (d(), N(r, {
      key: 0,
      "user-rec": e.userRecLocal
    }, null, 8, ["user-rec"])) : M("", !0),
    G("  "),
    k("a", {
      href: "#",
      onClick: t[0] || (t[0] = re((...a) => e.click && e.click(...a), ["prevent"]))
    }, F(e.displayName), 1)
  ])) : M("", !0);
}
const Li = /* @__PURE__ */ C(Ai, [["render", zi]]), Fi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Li
}, Symbol.toStringTag, { value: "Module" })), Ei = T({
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
          const t = await ct.lookup(
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
const Ni = { class: "flex items-center gap-1" };
function Di(e, t, n, i, l, s) {
  const r = z("KUserGIF"), a = z("KAutocomplete"), u = z("KUserLink"), o = z("KFormFieldWrapper");
  return d(), N(o, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: L(() => [
      e.editable ? (d(), N(a, {
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
          p ? (d(), N(r, {
            key: 0,
            type: p.type
          }, null, 8, ["type"])) : (d(), N(r, {
            key: 1,
            type: e.USER
          }, null, 8, ["type"]))
        ]),
        item: L(({ item: p }) => [
          k("div", Ni, [
            U(r, {
              type: p.type
            }, null, 8, ["type"]),
            G(" " + F(p.text), 1)
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "search-input", "placeholder", "width", "loading", "items", "return-object"])) : (d(), N(u, {
        key: 1,
        user: e.modelValue,
        gif: ""
      }, null, 8, ["user"]))
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const pt = /* @__PURE__ */ C(Ei, [["render", Di]]), Bi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pt
}, Symbol.toStringTag, { value: "Module" })), Ui = T({
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
}), Ii = { key: 0 };
function Ri(e, t, n, i, l, s) {
  return e.isSelected ? (d(), m("div", Ii, [
    B(e.$slots, "default")
  ])) : M("", !0);
}
const Wi = /* @__PURE__ */ C(Ui, [["render", Ri]]), qi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wi
}, Symbol.toStringTag, { value: "Module" })), Hi = T({
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
const Gi = { class: "k-tabs" }, Qi = { class: "k-tabs-nav" }, Xi = ["href", "onClick"], Yi = { class: "k-tabs-content" };
function Ji(e, t, n, i, l, s) {
  return d(), m("div", Gi, [
    k("div", Qi, [
      (d(!0), m(q, null, Z(e.tabs, (r) => (d(), m("div", {
        key: r.name,
        class: J(e.classObj(r))
      }, [
        k("a", {
          href: `#${r.name}`,
          onClick: (a) => e.selectTab(r.name)
        }, F(r.title), 9, Xi)
      ], 2))), 128))
    ]),
    k("div", Yi, [
      B(e.$slots, "default")
    ])
  ]);
}
const Zi = /* @__PURE__ */ C(Hi, [["render", Ji]]), el = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zi
}, Symbol.toStringTag, { value: "Module" })), tl = T({
  extends: pt,
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
}), nl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: tl
}, Symbol.toStringTag, { value: "Module" }));
function ue(e) {
  return (t, n = {}) => new Promise((i) => {
    window.csui.require(
      ["csui/dialogs/modal.alert/modal.alert"],
      function(l) {
        l[e](i, t, null, n);
      }
    );
  });
}
function ae(e) {
  return (t, n = {}) => new Promise((i) => {
    window.csui.require(
      ["csui/dialogs/modal.alert/modal.alert"],
      function(l) {
        l[e](i, t, null, n);
      }
    );
  });
}
const fl = () => ({
  showSuccess: ue("showSuccess"),
  // showInfo: generateShow("showInfo"),
  showInformation: ue("showInformation"),
  showWarning: ue("showWarning"),
  showError: ue("showError"),
  showMessage: ue("showMessage"),
  confirmSuccess: ae("confirmSuccess"),
  // confirmInfo: generateConfirm("confirmInfo"),
  confirmInformation: ae("confirmInformation"),
  confirmWarning: ae("confirmWarning"),
  confirmError: ae("confirmError"),
  confirmQuestion: ae("confirmQuestion"),
  confirmMessage: ae("confirmMessage")
}), rl = /* @__PURE__ */ Object.assign({
  "./components/Card/KCard.vue": Ot,
  "./components/Card/KCardActions.vue": Ct,
  "./components/Card/KCardText.vue": zt,
  "./components/Card/KCardTitle.vue": Dt,
  "./components/KAdminLink.vue": qt,
  "./components/KAlert.vue": xn,
  "./components/KApp.vue": Kn,
  "./components/KAutocomplete.vue": Nn,
  "./components/KBrowseLink.vue": Jn,
  "./components/KButton.vue": rr,
  "./components/KConfirm.vue": lr,
  "./components/KDateTimePicker.vue": fr,
  "./components/KDialog.vue": _r,
  "./components/KDot.vue": $r,
  "./components/KFormFieldWrapper.vue": xr,
  "./components/KFunctionMenu.vue": Vr,
  "./components/KLinearProgressIndicator.vue": Nr,
  "./components/KMulti.vue": Hr,
  "./components/KMulti2.vue": Zr,
  "./components/KMultiUserPicker.vue": ro,
  "./components/KNodeAncestor.vue": ao,
  "./components/KNodePickerField.vue": go,
  "./components/KOneMoment.vue": $o,
  "./components/KPageDropZone.vue": Oo,
  "./components/KPageTitle.vue": Mo,
  "./components/KPagination.vue": Ho,
  "./components/KPagination2.vue": os,
  "./components/KPleaseWait.vue": ms,
  "./components/KRadioGroup.vue": vs,
  "./components/KScratch.vue": Ss,
  "./components/KSelect.vue": Ks,
  "./components/KSmartUIPanel.vue": Ns,
  "./components/KSnackbar.vue": Qs,
  "./components/KSortHeader.vue": ti,
  "./components/KSpacer.vue": ii,
  "./components/KSpinner.vue": us,
  "./components/KSwitch.vue": ci,
  "./components/KTable.vue": gi,
  "./components/KTextArea.vue": vi,
  "./components/KTextField.vue": Oi,
  "./components/KUserGIF.vue": Ci,
  "./components/KUserLink.vue": Fi,
  "./components/KUserPicker.vue": Bi,
  "./components/KUserPickerLegacy.vue": nl,
  "./components/Tabs/KTabItem.vue": qi,
  "./components/Tabs/KTabs.vue": el
});
let $e;
const ml = {
  install(e, t) {
    Object.entries(rl).forEach(
      ([i, l]) => {
        const s = i?.split("/")?.pop()?.replace(/\.\w+$/, "");
        e.component(s, l.default);
      }
    ), $e = new wt(t);
    const n = {
      img: t.img,
      baseUrl: t.baseUrl,
      jsLongDateFormat: t.datelong,
      jsShortDateFormat: t.dateshort
    };
    e.provide(se, $e), e.provide(_e, n);
  }
}, gl = () => $e;
export {
  _e as configKey,
  Bn as confirmDialogKey,
  ml as default,
  te as injectStrict,
  Rn as nodeLookup,
  se as sessionKey,
  Dn as snackbarKey,
  gl as useSession,
  fl as useSmartUI,
  ct as userLookup
};
