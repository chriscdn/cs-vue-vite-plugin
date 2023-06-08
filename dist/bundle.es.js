import { defineComponent as S, h as le, openBlock as u, createElementBlock as p, renderSlot as F, createElementVNode as k, normalizeStyle as se, resolveComponent as A, createVNode as U, withCtx as z, resolveDirective as ke, withDirectives as ne, normalizeClass as X, withKeys as fe, withModifiers as oe, vModelText as we, Fragment as q, renderList as Z, createTextVNode as Q, toDisplayString as B, createCommentVNode as M, inject as _t, createBlock as N, mergeProps as Ue, vModelDynamic as bt, Teleport as yt, Transition as ge, setBlockTracking as ze, ref as vt, TransitionGroup as Se, useCssVars as Re, vModelRadio as $t, vModelSelect as kt } from "vue";
import L from "lodash.get";
import { directive as Oe } from "vue3-click-away";
import xe from "@chriscdn/promise-semaphore";
import { format as Ve } from "date-fns";
import { disableBodyScroll as wt, enableBodyScroll as St } from "body-scroll-lock";
import Ot from "@googlicius/build-url";
import xt from "js-cookie";
import { Session as jt } from "@kweli/cs-rest";
const Ie = {
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
    // OnClick added with Vue3... ?
    isClickable() {
      return !this.disabled && !!(this.$attrs.onClick || // this.$attrs.click ||
      this.link || this.to || this.href);
    }
  },
  methods: {
    click(e) {
      this.$emit("click", e);
    },
    generateRouteLink() {
      let e = "div", t = {};
      return this.href ? (e = "a", t = {
        // attrs: {
        href: this.href,
        target: this.target
        // },
      }) : this.to && (e = this.nuxt ? "nuxt-link" : "router-link", t = {
        props: {
          to: this.to
        }
      }), { tag: e, data: t };
    }
  }
}, G = (e, t = "px") => {
  if (!(e == null || e === ""))
    return isNaN(+e) ? String(e) : `${Number(e)}${t}`;
}, he = S({
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
      const e = {}, t = G(this.height), n = G(this.minHeight), i = G(this.minWidth), l = G(this.maxHeight), s = G(this.maxWidth), r = G(this.width);
      return t && (e.height = t), n && (e.minHeight = n), i && (e.minWidth = i), l && (e.maxHeight = l), s && (e.maxWidth = s), r && (e.width = r), e;
    }
  }
}), Ct = S({
  mixins: [he, Ie],
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
      return le(
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
const Pt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ct
}, Symbol.toStringTag, { value: "Module" })), Tt = S({});
const x = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, l] of t)
    n[i] = l;
  return n;
}, Kt = { class: "k-card-actions" };
function Mt(e, t, n, i, l, s) {
  return u(), p("div", Kt, [
    F(e.$slots, "default")
  ]);
}
const At = /* @__PURE__ */ x(Tt, [["render", Mt]]), Lt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: At
}, Symbol.toStringTag, { value: "Module" })), zt = S({});
const Vt = { class: "k-card-text" };
function Bt(e, t, n, i, l, s) {
  return u(), p("div", Vt, [
    F(e.$slots, "default")
  ]);
}
const Ft = /* @__PURE__ */ x(zt, [["render", Bt]]), Nt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ft
}, Symbol.toStringTag, { value: "Module" })), Et = S({});
const Dt = { class: "k-card-title" };
function Ut(e, t, n, i, l, s) {
  return u(), p("div", Dt, [
    F(e.$slots, "default")
  ]);
}
const Rt = /* @__PURE__ */ x(Et, [["render", Ut]]), It = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Rt
}, Symbol.toStringTag, { value: "Module" })), Wt = S({
  setup() {
    return { config: ee(me) };
  }
}), qt = { clsas: "space-y-2" }, Ht = /* @__PURE__ */ k("hr", null, null, -1), Gt = ["href"];
function Qt(e, t, n, i, l, s) {
  return u(), p("div", qt, [
    Ht,
    k("a", {
      href: `${e.config.baseUrl}?func=admin.index`
    }, "Admin Home", 8, Gt)
  ]);
}
const Yt = /* @__PURE__ */ x(Wt, [["render", Qt]]), Xt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Yt
}, Symbol.toStringTag, { value: "Module" }));
function Jt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var We = {}, qe = {}, je = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return t;
    }
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
})(je);
var He = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return t;
    }
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
})(He);
var Ge = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return t;
    }
  });
  function t(n, i) {
    return n === void 0 ? i : Array.isArray(n) ? n : [
      ...new Set(i.filter((s) => n !== !1 && n[s] !== !1).concat(Object.keys(n).filter((s) => n[s] !== !1)))
    ];
  }
})(Ge);
var Qe = {}, _e = {}, Ce = { exports: {} }, D = String, Ye = function() {
  return { isColorSupported: !1, reset: D, bold: D, dim: D, italic: D, underline: D, inverse: D, hidden: D, strikethrough: D, black: D, red: D, green: D, yellow: D, blue: D, magenta: D, cyan: D, white: D, gray: D, bgBlack: D, bgRed: D, bgGreen: D, bgYellow: D, bgBlue: D, bgMagenta: D, bgCyan: D, bgWhite: D };
};
Ce.exports = Ye();
Ce.exports.createColors = Ye;
var Xe = Ce.exports;
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(d, o) {
    for (var f in o)
      Object.defineProperty(d, f, {
        enumerable: !0,
        get: o[f]
      });
  }
  t(e, {
    dim: function() {
      return r;
    },
    default: function() {
      return a;
    }
  });
  const n = /* @__PURE__ */ i(Xe);
  function i(d) {
    return d && d.__esModule ? d : {
      default: d
    };
  }
  let l = /* @__PURE__ */ new Set();
  function s(d, o, f) {
    typeof process < "u" && process.env.JEST_WORKER_ID || f && l.has(f) || (f && l.add(f), console.warn(""), o.forEach((b) => console.warn(d, "-", b)));
  }
  function r(d) {
    return n.default.dim(d);
  }
  const a = {
    info(d, o) {
      s(n.default.bold(n.default.cyan("info")), ...Array.isArray(d) ? [
        d
      ] : [
        o,
        d
      ]);
    },
    warn(d, o) {
      s(n.default.bold(n.default.yellow("warn")), ...Array.isArray(d) ? [
        d
      ] : [
        o,
        d
      ]);
    },
    risk(d, o) {
      s(n.default.bold(n.default.magenta("risk")), ...Array.isArray(d) ? [
        d
      ] : [
        o,
        d
      ]);
    }
  };
})(_e);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return l;
    }
  });
  const t = /* @__PURE__ */ n(_e);
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
})(Qe);
var Je = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "defaults", {
    enumerable: !0,
    get: function() {
      return t;
    }
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
})(Je);
var Ze = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "toPath", {
    enumerable: !0,
    get: function() {
      return t;
    }
  });
  function t(n) {
    if (Array.isArray(n))
      return n;
    let i = n.split("[").length - 1, l = n.split("]").length - 1;
    if (i !== l)
      throw new Error(`Path is invalid. Has unbalanced brackets: ${n}`);
    return n.split(/\.(?![^\[]*\])|[\[\]]/g).filter(Boolean);
  }
})(Ze);
var et = {}, be = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(b, _) {
    for (var O in _)
      Object.defineProperty(b, O, {
        enumerable: !0,
        get: _[O]
      });
  }
  t(e, {
    flagEnabled: function() {
      return a;
    },
    issueFlagNotices: function() {
      return o;
    },
    default: function() {
      return f;
    }
  });
  const n = /* @__PURE__ */ l(Xe), i = /* @__PURE__ */ l(_e);
  function l(b) {
    return b && b.__esModule ? b : {
      default: b
    };
  }
  let s = {
    optimizeUniversalDefaults: !1,
    generalizedModifiers: !0,
    get disableColorOpacityUtilitiesByDefault() {
      return !1;
    },
    get relativeContentPathsByDefault() {
      return !1;
    }
  }, r = {
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
  function a(b, _) {
    if (r.future.includes(_)) {
      var O, y, T;
      return b.future === "all" || ((T = (y = b == null || (O = b.future) === null || O === void 0 ? void 0 : O[_]) !== null && y !== void 0 ? y : s[_]) !== null && T !== void 0 ? T : !1);
    }
    if (r.experimental.includes(_)) {
      var V, R, I;
      return b.experimental === "all" || ((I = (R = b == null || (V = b.experimental) === null || V === void 0 ? void 0 : V[_]) !== null && R !== void 0 ? R : s[_]) !== null && I !== void 0 ? I : !1);
    }
    return !1;
  }
  function d(b) {
    if (b.experimental === "all")
      return r.experimental;
    var _;
    return Object.keys((_ = b?.experimental) !== null && _ !== void 0 ? _ : {}).filter((O) => r.experimental.includes(O) && b.experimental[O]);
  }
  function o(b) {
    if (process.env.JEST_WORKER_ID === void 0 && d(b).length > 0) {
      let _ = d(b).map((O) => n.default.yellow(O)).join(", ");
      i.default.warn("experimental-flags-enabled", [
        `You have enabled experimental features: ${_}`,
        "Experimental features in Tailwind CSS are not covered by semver, may introduce breaking changes, and can change at any time."
      ]);
    }
  }
  const f = r;
})(be);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "normalizeConfig", {
    enumerable: !0,
    get: function() {
      return s;
    }
  });
  const t = be, n = /* @__PURE__ */ l(_e);
  function i(r) {
    if (typeof WeakMap != "function")
      return null;
    var a = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new WeakMap();
    return (i = function(o) {
      return o ? d : a;
    })(r);
  }
  function l(r, a) {
    if (!a && r && r.__esModule)
      return r;
    if (r === null || typeof r != "object" && typeof r != "function")
      return {
        default: r
      };
    var d = i(a);
    if (d && d.has(r))
      return d.get(r);
    var o = {}, f = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var b in r)
      if (b !== "default" && Object.prototype.hasOwnProperty.call(r, b)) {
        var _ = f ? Object.getOwnPropertyDescriptor(r, b) : null;
        _ && (_.get || _.set) ? Object.defineProperty(o, b, _) : o[b] = r[b];
      }
    return o.default = r, d && d.set(r, o), o;
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
      let { content: f, purge: b, safelist: _ } = r;
      return Array.isArray(_) ? _ : Array.isArray(f?.safelist) ? f.safelist : Array.isArray(b?.safelist) ? b.safelist : Array.isArray(b == null || (o = b.options) === null || o === void 0 ? void 0 : o.safelist) ? b.options.safelist : [];
    })(), r.blocklist = (() => {
      let { blocklist: o } = r;
      if (Array.isArray(o)) {
        if (o.every((f) => typeof f == "string"))
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
      var d;
      r.prefix = (d = r.prefix) !== null && d !== void 0 ? d : "";
    }
    r.content = {
      relative: (() => {
        let { content: o } = r;
        return o?.relative ? o.relative : (0, t.flagEnabled)(r, "relativeContentPathsByDefault");
      })(),
      files: (() => {
        let { content: o, purge: f } = r;
        return Array.isArray(f) ? f : Array.isArray(f?.content) ? f.content : Array.isArray(o) ? o : Array.isArray(o?.content) ? o.content : Array.isArray(o?.files) ? o.files : [];
      })(),
      extract: (() => {
        let o = (() => {
          var _, O, y, T, V, R, I, E, W, H;
          return !((_ = r.purge) === null || _ === void 0) && _.extract ? r.purge.extract : !((O = r.content) === null || O === void 0) && O.extract ? r.content.extract : !((y = r.purge) === null || y === void 0 || (T = y.extract) === null || T === void 0) && T.DEFAULT ? r.purge.extract.DEFAULT : !((V = r.content) === null || V === void 0 || (R = V.extract) === null || R === void 0) && R.DEFAULT ? r.content.extract.DEFAULT : !((I = r.purge) === null || I === void 0 || (E = I.options) === null || E === void 0) && E.extractors ? r.purge.options.extractors : !((W = r.content) === null || W === void 0 || (H = W.options) === null || H === void 0) && H.extractors ? r.content.options.extractors : {};
        })(), f = {}, b = (() => {
          var _, O, y, T;
          if (!((_ = r.purge) === null || _ === void 0 || (O = _.options) === null || O === void 0) && O.defaultExtractor)
            return r.purge.options.defaultExtractor;
          if (!((y = r.content) === null || y === void 0 || (T = y.options) === null || T === void 0) && T.defaultExtractor)
            return r.content.options.defaultExtractor;
        })();
        if (b !== void 0 && (f.DEFAULT = b), typeof o == "function")
          f.DEFAULT = o;
        else if (Array.isArray(o))
          for (let { extensions: _, extractor: O } of o ?? [])
            for (let y of _)
              f[y] = O;
        else
          typeof o == "object" && o !== null && Object.assign(f, o);
        return f;
      })(),
      transform: (() => {
        let o = (() => {
          var b, _, O, y, T, V;
          return !((b = r.purge) === null || b === void 0) && b.transform ? r.purge.transform : !((_ = r.content) === null || _ === void 0) && _.transform ? r.content.transform : !((O = r.purge) === null || O === void 0 || (y = O.transform) === null || y === void 0) && y.DEFAULT ? r.purge.transform.DEFAULT : !((T = r.content) === null || T === void 0 || (V = T.transform) === null || V === void 0) && V.DEFAULT ? r.content.transform.DEFAULT : {};
        })(), f = {};
        return typeof o == "function" && (f.DEFAULT = o), typeof o == "object" && o !== null && Object.assign(f, o), f;
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
})(et);
var tt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return t;
    }
  });
  function t(n) {
    if (Object.prototype.toString.call(n) !== "[object Object]")
      return !1;
    const i = Object.getPrototypeOf(n);
    return i === null || i === Object.prototype;
  }
})(tt);
var nt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "cloneDeep", {
    enumerable: !0,
    get: function() {
      return t;
    }
  });
  function t(n) {
    return Array.isArray(n) ? n.map((i) => t(i)) : typeof n == "object" && n !== null ? Object.fromEntries(Object.entries(n).map(([i, l]) => [
      i,
      t(l)
    ])) : n;
  }
})(nt);
var rt = {}, ot = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return t;
    }
  });
  function t(n) {
    return n.replace(/\\,/g, "\\2c ");
  }
})(ot);
var Pe = {}, Te = {}, st = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return t;
    }
  });
  const t = {
    aliceblue: [
      240,
      248,
      255
    ],
    antiquewhite: [
      250,
      235,
      215
    ],
    aqua: [
      0,
      255,
      255
    ],
    aquamarine: [
      127,
      255,
      212
    ],
    azure: [
      240,
      255,
      255
    ],
    beige: [
      245,
      245,
      220
    ],
    bisque: [
      255,
      228,
      196
    ],
    black: [
      0,
      0,
      0
    ],
    blanchedalmond: [
      255,
      235,
      205
    ],
    blue: [
      0,
      0,
      255
    ],
    blueviolet: [
      138,
      43,
      226
    ],
    brown: [
      165,
      42,
      42
    ],
    burlywood: [
      222,
      184,
      135
    ],
    cadetblue: [
      95,
      158,
      160
    ],
    chartreuse: [
      127,
      255,
      0
    ],
    chocolate: [
      210,
      105,
      30
    ],
    coral: [
      255,
      127,
      80
    ],
    cornflowerblue: [
      100,
      149,
      237
    ],
    cornsilk: [
      255,
      248,
      220
    ],
    crimson: [
      220,
      20,
      60
    ],
    cyan: [
      0,
      255,
      255
    ],
    darkblue: [
      0,
      0,
      139
    ],
    darkcyan: [
      0,
      139,
      139
    ],
    darkgoldenrod: [
      184,
      134,
      11
    ],
    darkgray: [
      169,
      169,
      169
    ],
    darkgreen: [
      0,
      100,
      0
    ],
    darkgrey: [
      169,
      169,
      169
    ],
    darkkhaki: [
      189,
      183,
      107
    ],
    darkmagenta: [
      139,
      0,
      139
    ],
    darkolivegreen: [
      85,
      107,
      47
    ],
    darkorange: [
      255,
      140,
      0
    ],
    darkorchid: [
      153,
      50,
      204
    ],
    darkred: [
      139,
      0,
      0
    ],
    darksalmon: [
      233,
      150,
      122
    ],
    darkseagreen: [
      143,
      188,
      143
    ],
    darkslateblue: [
      72,
      61,
      139
    ],
    darkslategray: [
      47,
      79,
      79
    ],
    darkslategrey: [
      47,
      79,
      79
    ],
    darkturquoise: [
      0,
      206,
      209
    ],
    darkviolet: [
      148,
      0,
      211
    ],
    deeppink: [
      255,
      20,
      147
    ],
    deepskyblue: [
      0,
      191,
      255
    ],
    dimgray: [
      105,
      105,
      105
    ],
    dimgrey: [
      105,
      105,
      105
    ],
    dodgerblue: [
      30,
      144,
      255
    ],
    firebrick: [
      178,
      34,
      34
    ],
    floralwhite: [
      255,
      250,
      240
    ],
    forestgreen: [
      34,
      139,
      34
    ],
    fuchsia: [
      255,
      0,
      255
    ],
    gainsboro: [
      220,
      220,
      220
    ],
    ghostwhite: [
      248,
      248,
      255
    ],
    gold: [
      255,
      215,
      0
    ],
    goldenrod: [
      218,
      165,
      32
    ],
    gray: [
      128,
      128,
      128
    ],
    green: [
      0,
      128,
      0
    ],
    greenyellow: [
      173,
      255,
      47
    ],
    grey: [
      128,
      128,
      128
    ],
    honeydew: [
      240,
      255,
      240
    ],
    hotpink: [
      255,
      105,
      180
    ],
    indianred: [
      205,
      92,
      92
    ],
    indigo: [
      75,
      0,
      130
    ],
    ivory: [
      255,
      255,
      240
    ],
    khaki: [
      240,
      230,
      140
    ],
    lavender: [
      230,
      230,
      250
    ],
    lavenderblush: [
      255,
      240,
      245
    ],
    lawngreen: [
      124,
      252,
      0
    ],
    lemonchiffon: [
      255,
      250,
      205
    ],
    lightblue: [
      173,
      216,
      230
    ],
    lightcoral: [
      240,
      128,
      128
    ],
    lightcyan: [
      224,
      255,
      255
    ],
    lightgoldenrodyellow: [
      250,
      250,
      210
    ],
    lightgray: [
      211,
      211,
      211
    ],
    lightgreen: [
      144,
      238,
      144
    ],
    lightgrey: [
      211,
      211,
      211
    ],
    lightpink: [
      255,
      182,
      193
    ],
    lightsalmon: [
      255,
      160,
      122
    ],
    lightseagreen: [
      32,
      178,
      170
    ],
    lightskyblue: [
      135,
      206,
      250
    ],
    lightslategray: [
      119,
      136,
      153
    ],
    lightslategrey: [
      119,
      136,
      153
    ],
    lightsteelblue: [
      176,
      196,
      222
    ],
    lightyellow: [
      255,
      255,
      224
    ],
    lime: [
      0,
      255,
      0
    ],
    limegreen: [
      50,
      205,
      50
    ],
    linen: [
      250,
      240,
      230
    ],
    magenta: [
      255,
      0,
      255
    ],
    maroon: [
      128,
      0,
      0
    ],
    mediumaquamarine: [
      102,
      205,
      170
    ],
    mediumblue: [
      0,
      0,
      205
    ],
    mediumorchid: [
      186,
      85,
      211
    ],
    mediumpurple: [
      147,
      112,
      219
    ],
    mediumseagreen: [
      60,
      179,
      113
    ],
    mediumslateblue: [
      123,
      104,
      238
    ],
    mediumspringgreen: [
      0,
      250,
      154
    ],
    mediumturquoise: [
      72,
      209,
      204
    ],
    mediumvioletred: [
      199,
      21,
      133
    ],
    midnightblue: [
      25,
      25,
      112
    ],
    mintcream: [
      245,
      255,
      250
    ],
    mistyrose: [
      255,
      228,
      225
    ],
    moccasin: [
      255,
      228,
      181
    ],
    navajowhite: [
      255,
      222,
      173
    ],
    navy: [
      0,
      0,
      128
    ],
    oldlace: [
      253,
      245,
      230
    ],
    olive: [
      128,
      128,
      0
    ],
    olivedrab: [
      107,
      142,
      35
    ],
    orange: [
      255,
      165,
      0
    ],
    orangered: [
      255,
      69,
      0
    ],
    orchid: [
      218,
      112,
      214
    ],
    palegoldenrod: [
      238,
      232,
      170
    ],
    palegreen: [
      152,
      251,
      152
    ],
    paleturquoise: [
      175,
      238,
      238
    ],
    palevioletred: [
      219,
      112,
      147
    ],
    papayawhip: [
      255,
      239,
      213
    ],
    peachpuff: [
      255,
      218,
      185
    ],
    peru: [
      205,
      133,
      63
    ],
    pink: [
      255,
      192,
      203
    ],
    plum: [
      221,
      160,
      221
    ],
    powderblue: [
      176,
      224,
      230
    ],
    purple: [
      128,
      0,
      128
    ],
    rebeccapurple: [
      102,
      51,
      153
    ],
    red: [
      255,
      0,
      0
    ],
    rosybrown: [
      188,
      143,
      143
    ],
    royalblue: [
      65,
      105,
      225
    ],
    saddlebrown: [
      139,
      69,
      19
    ],
    salmon: [
      250,
      128,
      114
    ],
    sandybrown: [
      244,
      164,
      96
    ],
    seagreen: [
      46,
      139,
      87
    ],
    seashell: [
      255,
      245,
      238
    ],
    sienna: [
      160,
      82,
      45
    ],
    silver: [
      192,
      192,
      192
    ],
    skyblue: [
      135,
      206,
      235
    ],
    slateblue: [
      106,
      90,
      205
    ],
    slategray: [
      112,
      128,
      144
    ],
    slategrey: [
      112,
      128,
      144
    ],
    snow: [
      255,
      250,
      250
    ],
    springgreen: [
      0,
      255,
      127
    ],
    steelblue: [
      70,
      130,
      180
    ],
    tan: [
      210,
      180,
      140
    ],
    teal: [
      0,
      128,
      128
    ],
    thistle: [
      216,
      191,
      216
    ],
    tomato: [
      255,
      99,
      71
    ],
    turquoise: [
      64,
      224,
      208
    ],
    violet: [
      238,
      130,
      238
    ],
    wheat: [
      245,
      222,
      179
    ],
    white: [
      255,
      255,
      255
    ],
    whitesmoke: [
      245,
      245,
      245
    ],
    yellow: [
      255,
      255,
      0
    ],
    yellowgreen: [
      154,
      205,
      50
    ]
  };
})(st);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(y, T) {
    for (var V in T)
      Object.defineProperty(y, V, {
        enumerable: !0,
        get: T[V]
      });
  }
  t(e, {
    parseColor: function() {
      return _;
    },
    formatColor: function() {
      return O;
    }
  });
  const n = /* @__PURE__ */ i(st);
  function i(y) {
    return y && y.__esModule ? y : {
      default: y
    };
  }
  let l = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i, s = /^#([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i, r = /(?:\d+|\d*\.\d+)%?/, a = /(?:\s*,\s*|\s+)/, d = /\s*[,/]\s*/, o = /var\(--(?:[^ )]*?)\)/, f = new RegExp(`^(rgba?)\\(\\s*(${r.source}|${o.source})(?:${a.source}(${r.source}|${o.source}))?(?:${a.source}(${r.source}|${o.source}))?(?:${d.source}(${r.source}|${o.source}))?\\s*\\)$`), b = new RegExp(`^(hsla?)\\(\\s*((?:${r.source})(?:deg|rad|grad|turn)?|${o.source})(?:${a.source}(${r.source}|${o.source}))?(?:${a.source}(${r.source}|${o.source}))?(?:${d.source}(${r.source}|${o.source}))?\\s*\\)$`);
  function _(y, { loose: T = !1 } = {}) {
    var V, R;
    if (typeof y != "string")
      return null;
    if (y = y.trim(), y === "transparent")
      return {
        mode: "rgb",
        color: [
          "0",
          "0",
          "0"
        ],
        alpha: "0"
      };
    if (y in n.default)
      return {
        mode: "rgb",
        color: n.default[y].map((Y) => Y.toString())
      };
    let I = y.replace(s, (Y, re, te, h, C) => [
      "#",
      re,
      re,
      te,
      te,
      h,
      h,
      C ? C + C : ""
    ].join("")).match(l);
    if (I !== null)
      return {
        mode: "rgb",
        color: [
          parseInt(I[1], 16),
          parseInt(I[2], 16),
          parseInt(I[3], 16)
        ].map((Y) => Y.toString()),
        alpha: I[4] ? (parseInt(I[4], 16) / 255).toString() : void 0
      };
    var E;
    let W = (E = y.match(f)) !== null && E !== void 0 ? E : y.match(b);
    if (W === null)
      return null;
    let H = [
      W[2],
      W[3],
      W[4]
    ].filter(Boolean).map((Y) => Y.toString());
    return H.length === 2 && H[0].startsWith("var(") ? {
      mode: W[1],
      color: [
        H[0]
      ],
      alpha: H[1]
    } : !T && H.length !== 3 || H.length < 3 && !H.some((Y) => /^var\(.*?\)$/.test(Y)) ? null : {
      mode: W[1],
      color: H,
      alpha: (V = W[5]) === null || V === void 0 || (R = V.toString) === null || R === void 0 ? void 0 : R.call(V)
    };
  }
  function O({ mode: y, color: T, alpha: V }) {
    let R = V !== void 0;
    return y === "rgba" || y === "hsla" ? `${y}(${T.join(", ")}${R ? `, ${V}` : ""})` : `${y}(${T.join(" ")}${R ? ` / ${V}` : ""})`;
  }
})(Te);
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
    withAlphaValue: function() {
      return i;
    },
    default: function() {
      return l;
    }
  });
  const n = Te;
  function i(s, r, a) {
    if (typeof s == "function")
      return s({
        opacityValue: r
      });
    let d = (0, n.parseColor)(s, {
      loose: !0
    });
    return d === null ? a : (0, n.formatColor)({
      ...d,
      alpha: r
    });
  }
  function l({ color: s, property: r, variable: a }) {
    let d = [].concat(r);
    if (typeof s == "function")
      return {
        [a]: "1",
        ...Object.fromEntries(d.map((f) => [
          f,
          s({
            opacityVariable: a,
            opacityValue: `var(${a})`
          })
        ]))
      };
    const o = (0, n.parseColor)(s);
    return o === null ? Object.fromEntries(d.map((f) => [
      f,
      s
    ])) : o.alpha !== void 0 ? Object.fromEntries(d.map((f) => [
      f,
      s
    ])) : {
      [a]: "1",
      ...Object.fromEntries(d.map((f) => [
        f,
        (0, n.formatColor)({
          ...o,
          alpha: `var(${a})`
        })
      ]))
    };
  }
})(Pe);
var Ke = {}, it = {}, ye = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "splitAtTopLevelOnly", {
    enumerable: !0,
    get: function() {
      return t;
    }
  });
  function t(n, i) {
    let l = [], s = [], r = 0, a = !1;
    for (let d = 0; d < n.length; d++) {
      let o = n[d];
      l.length === 0 && o === i[0] && !a && (i.length === 1 || n.slice(d, d + i.length) === i) && (s.push(n.slice(r, d)), r = d + i.length), a ? a = !1 : o === "\\" && (a = !0), o === "(" || o === "[" || o === "{" ? l.push(o) : (o === ")" && l[l.length - 1] === "(" || o === "]" && l[l.length - 1] === "[" || o === "}" && l[l.length - 1] === "{") && l.pop();
    }
    return s.push(n.slice(r)), s;
  }
})(ye);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(d, o) {
    for (var f in o)
      Object.defineProperty(d, f, {
        enumerable: !0,
        get: o[f]
      });
  }
  t(e, {
    parseBoxShadowValue: function() {
      return r;
    },
    formatBoxShadowValue: function() {
      return a;
    }
  });
  const n = ye;
  let i = /* @__PURE__ */ new Set([
    "inset",
    "inherit",
    "initial",
    "revert",
    "unset"
  ]), l = /\ +(?![^(]*\))/g, s = /^-?(\d+|\.\d+)(.*?)$/g;
  function r(d) {
    return (0, n.splitAtTopLevelOnly)(d, ",").map((f) => {
      let b = f.trim(), _ = {
        raw: b
      }, O = b.split(l), y = /* @__PURE__ */ new Set();
      for (let T of O)
        s.lastIndex = 0, !y.has("KEYWORD") && i.has(T) ? (_.keyword = T, y.add("KEYWORD")) : s.test(T) ? y.has("X") ? y.has("Y") ? y.has("BLUR") ? y.has("SPREAD") || (_.spread = T, y.add("SPREAD")) : (_.blur = T, y.add("BLUR")) : (_.y = T, y.add("Y")) : (_.x = T, y.add("X")) : _.color ? (_.unknown || (_.unknown = []), _.unknown.push(T)) : _.color = T;
      return _.valid = _.x !== void 0 && _.y !== void 0, _;
    });
  }
  function a(d) {
    return d.map((o) => o.valid ? [
      o.keyword,
      o.x,
      o.y,
      o.blur,
      o.spread,
      o.color
    ].filter(Boolean).join(" ") : o.raw).join(", ");
  }
})(it);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(c, j) {
    for (var P in j)
      Object.defineProperty(c, P, {
        enumerable: !0,
        get: j[P]
      });
  }
  t(e, {
    normalize: function() {
      return o;
    },
    url: function() {
      return f;
    },
    number: function() {
      return b;
    },
    percentage: function() {
      return _;
    },
    length: function() {
      return T;
    },
    lineWidth: function() {
      return R;
    },
    shadow: function() {
      return I;
    },
    color: function() {
      return E;
    },
    image: function() {
      return W;
    },
    gradient: function() {
      return Y;
    },
    position: function() {
      return te;
    },
    familyName: function() {
      return h;
    },
    genericName: function() {
      return w;
    },
    absoluteSize: function() {
      return v;
    },
    relativeSize: function() {
      return g;
    }
  });
  const n = Te, i = it, l = ye;
  let s = [
    "min",
    "max",
    "clamp",
    "calc"
  ];
  function r(c) {
    return s.some((j) => new RegExp(`^${j}\\(.*\\)`).test(c));
  }
  const a = "--tw-placeholder", d = new RegExp(a, "g");
  function o(c, j = !0) {
    return c.startsWith("--") ? `var(${c})` : c.includes("url(") ? c.split(/(url\(.*?\))/g).filter(Boolean).map((P) => /^url\(.*?\)$/.test(P) ? P : o(P, !1)).join("") : (c = c.replace(/([^\\])_+/g, (P, K) => K + " ".repeat(P.length - 1)).replace(/^_/g, " ").replace(/\\_/g, "_"), j && (c = c.trim()), c = c.replace(/(calc|min|max|clamp)\(.+\)/g, (P) => {
      let K = [];
      return P.replace(/var\((--.+?)[,)]/g, (J, Le) => (K.push(Le), J.replace(Le, a))).replace(/(-?\d*\.?\d(?!\b-\d.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g, "$1 $2 ").replace(d, () => K.shift());
    }), c);
  }
  function f(c) {
    return c.startsWith("url(");
  }
  function b(c) {
    return !isNaN(Number(c)) || r(c);
  }
  function _(c) {
    return c.endsWith("%") && b(c.slice(0, -1)) || r(c);
  }
  let y = `(?:${[
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
  function T(c) {
    return c === "0" || new RegExp(`^[+-]?[0-9]*.?[0-9]+(?:[eE][+-]?[0-9]+)?${y}$`).test(c) || r(c);
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
    let j = (0, i.parseBoxShadowValue)(o(c));
    for (let P of j)
      if (!P.valid)
        return !1;
    return !0;
  }
  function E(c) {
    let j = 0;
    return (0, l.splitAtTopLevelOnly)(c, "_").every((K) => (K = o(K), K.startsWith("var(") ? !0 : (0, n.parseColor)(K, {
      loose: !0
    }) !== null ? (j++, !0) : !1)) ? j > 0 : !1;
  }
  function W(c) {
    let j = 0;
    return (0, l.splitAtTopLevelOnly)(c, ",").every((K) => (K = o(K), K.startsWith("var(") ? !0 : f(K) || Y(K) || [
      "element(",
      "image(",
      "cross-fade(",
      "image-set("
    ].some((J) => K.startsWith(J)) ? (j++, !0) : !1)) ? j > 0 : !1;
  }
  let H = /* @__PURE__ */ new Set([
    "linear-gradient",
    "radial-gradient",
    "repeating-linear-gradient",
    "repeating-radial-gradient",
    "conic-gradient"
  ]);
  function Y(c) {
    c = o(c);
    for (let j of H)
      if (c.startsWith(`${j}(`))
        return !0;
    return !1;
  }
  let re = /* @__PURE__ */ new Set([
    "center",
    "top",
    "right",
    "bottom",
    "left"
  ]);
  function te(c) {
    let j = 0;
    return (0, l.splitAtTopLevelOnly)(c, "_").every((K) => (K = o(K), K.startsWith("var(") ? !0 : re.has(K) || T(K) || _(K) ? (j++, !0) : !1)) ? j > 0 : !1;
  }
  function h(c) {
    let j = 0;
    return (0, l.splitAtTopLevelOnly)(c, ",").every((K) => (K = o(K), K.startsWith("var(") ? !0 : K.includes(" ") && !/(['"])([^"']+)\1/g.test(K) || /^\d/g.test(K) ? !1 : (j++, !0))) ? j > 0 : !1;
  }
  let C = /* @__PURE__ */ new Set([
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
  function w(c) {
    return C.has(c);
  }
  let m = /* @__PURE__ */ new Set([
    "xx-small",
    "x-small",
    "small",
    "medium",
    "large",
    "x-large",
    "x-large",
    "xxx-large"
  ]);
  function v(c) {
    return m.has(c);
  }
  let $ = /* @__PURE__ */ new Set([
    "larger",
    "smaller"
  ]);
  function g(c) {
    return $.has(c);
  }
})(Ke);
var lt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "backgroundSize", {
    enumerable: !0,
    get: function() {
      return i;
    }
  });
  const t = Ke, n = ye;
  function i(l) {
    let s = [
      "cover",
      "contain"
    ];
    return (0, n.splitAtTopLevelOnly)(l, ",").every((r) => {
      let a = (0, n.splitAtTopLevelOnly)(r, "_").filter(Boolean);
      return a.length === 1 && s.includes(a[0]) ? !0 : a.length !== 1 && a.length !== 2 ? !1 : a.every((d) => (0, t.length)(d) || (0, t.percentage)(d) || d === "auto");
    });
  }
})(lt);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(h, C) {
    for (var w in C)
      Object.defineProperty(h, w, {
        enumerable: !0,
        get: C[w]
      });
  }
  t(e, {
    updateAllClasses: function() {
      return o;
    },
    asValue: function() {
      return _;
    },
    parseColorFormat: function() {
      return T;
    },
    asColor: function() {
      return R;
    },
    asLookupValue: function() {
      return I;
    },
    typeMap: function() {
      return W;
    },
    coerceValue: function() {
      return re;
    },
    getMatchingTypes: function() {
      return te;
    }
  });
  const n = /* @__PURE__ */ d(ot), i = Pe, l = Ke, s = /* @__PURE__ */ d(je), r = lt, a = be;
  function d(h) {
    return h && h.__esModule ? h : {
      default: h
    };
  }
  function o(h, C) {
    h.walkClasses((w) => {
      w.value = C(w.value), w.raws && w.raws.value && (w.raws.value = (0, n.default)(w.raws.value));
    });
  }
  function f(h, C) {
    if (!O(h))
      return;
    let w = h.slice(1, -1);
    if (C(w))
      return (0, l.normalize)(w);
  }
  function b(h, C = {}, w) {
    let m = C[h];
    if (m !== void 0)
      return (0, s.default)(m);
    if (O(h)) {
      let v = f(h, w);
      return v === void 0 ? void 0 : (0, s.default)(v);
    }
  }
  function _(h, C = {}, { validate: w = () => !0 } = {}) {
    var m;
    let v = (m = C.values) === null || m === void 0 ? void 0 : m[h];
    return v !== void 0 ? v : C.supportsNegativeValues && h.startsWith("-") ? b(h.slice(1), C.values, w) : f(h, w);
  }
  function O(h) {
    return h.startsWith("[") && h.endsWith("]");
  }
  function y(h) {
    let C = h.lastIndexOf("/");
    return C === -1 || C === h.length - 1 ? [
      h,
      void 0
    ] : O(h) && !h.includes("]/[") ? [
      h,
      void 0
    ] : [
      h.slice(0, C),
      h.slice(C + 1)
    ];
  }
  function T(h) {
    if (typeof h == "string" && h.includes("<alpha-value>")) {
      let C = h;
      return ({ opacityValue: w = 1 }) => C.replace("<alpha-value>", w);
    }
    return h;
  }
  function V(h) {
    return (0, l.normalize)(h.slice(1, -1));
  }
  function R(h, C = {}, { tailwindConfig: w = {} } = {}) {
    var m;
    if (((m = C.values) === null || m === void 0 ? void 0 : m[h]) !== void 0) {
      var v;
      return T((v = C.values) === null || v === void 0 ? void 0 : v[h]);
    }
    let [$, g] = y(h);
    if (g !== void 0) {
      var c, j, P, K;
      let J = (K = (c = C.values) === null || c === void 0 ? void 0 : c[$]) !== null && K !== void 0 ? K : O($) ? $.slice(1, -1) : void 0;
      return J === void 0 ? void 0 : (J = T(J), O(g) ? (0, i.withAlphaValue)(J, V(g)) : ((j = w.theme) === null || j === void 0 || (P = j.opacity) === null || P === void 0 ? void 0 : P[g]) === void 0 ? void 0 : (0, i.withAlphaValue)(J, w.theme.opacity[g]));
    }
    return _(h, C, {
      validate: l.color
    });
  }
  function I(h, C = {}) {
    var w;
    return (w = C.values) === null || w === void 0 ? void 0 : w[h];
  }
  function E(h) {
    return (C, w) => _(C, w, {
      validate: h
    });
  }
  let W = {
    any: _,
    color: R,
    url: E(l.url),
    image: E(l.image),
    length: E(l.length),
    percentage: E(l.percentage),
    position: E(l.position),
    lookup: I,
    "generic-name": E(l.genericName),
    "family-name": E(l.familyName),
    number: E(l.number),
    "line-width": E(l.lineWidth),
    "absolute-size": E(l.absoluteSize),
    "relative-size": E(l.relativeSize),
    shadow: E(l.shadow),
    size: E(r.backgroundSize)
  }, H = Object.keys(W);
  function Y(h, C) {
    let w = h.indexOf(C);
    return w === -1 ? [
      void 0,
      h
    ] : [
      h.slice(0, w),
      h.slice(w + 1)
    ];
  }
  function re(h, C, w, m) {
    if (w.values && C in w.values)
      for (let { type: $ } of h ?? []) {
        let g = W[$](C, w, {
          tailwindConfig: m
        });
        if (g !== void 0)
          return [
            g,
            $,
            null
          ];
      }
    if (O(C)) {
      let $ = C.slice(1, -1), [g, c] = Y($, ":");
      if (!/^[\w-_]+$/g.test(g))
        c = $;
      else if (g !== void 0 && !H.includes(g))
        return [];
      if (c.length > 0 && H.includes(g))
        return [
          _(`[${c}]`, w),
          g,
          null
        ];
    }
    let v = te(h, C, w, m);
    for (let $ of v)
      return $;
    return [];
  }
  function* te(h, C, w, m) {
    let v = (0, a.flagEnabled)(m, "generalizedModifiers"), [$, g] = y(C);
    if (v && w.modifiers != null && (w.modifiers === "any" || typeof w.modifiers == "object" && (g && O(g) || g in w.modifiers)) || ($ = C, g = void 0), g !== void 0 && $ === "" && ($ = "DEFAULT"), g !== void 0 && typeof w.modifiers == "object") {
      var j, P;
      let K = (P = (j = w.modifiers) === null || j === void 0 ? void 0 : j[g]) !== null && P !== void 0 ? P : null;
      K !== null ? g = K : O(g) && (g = V(g));
    }
    for (let { type: K } of h ?? []) {
      let J = W[K]($, w, {
        tailwindConfig: m
      });
      J !== void 0 && (yield [
        J,
        K,
        g ?? null
      ]);
    }
  }
})(rt);
var at = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return t;
    }
  });
  function t(n) {
    return typeof n == "function" ? n({}) : n;
  }
})(at);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return w;
    }
  });
  const t = /* @__PURE__ */ O(je), n = /* @__PURE__ */ O(He), i = /* @__PURE__ */ O(Ge), l = /* @__PURE__ */ O(Qe), s = Je, r = Ze, a = et, d = /* @__PURE__ */ O(tt), o = nt, f = rt, b = Pe, _ = /* @__PURE__ */ O(at);
  function O(m) {
    return m && m.__esModule ? m : {
      default: m
    };
  }
  function y(m) {
    return typeof m == "function";
  }
  function T(m, ...v) {
    let $ = v.pop();
    for (let g of v)
      for (let c in g) {
        let j = $(m[c], g[c]);
        j === void 0 ? (0, d.default)(m[c]) && (0, d.default)(g[c]) ? m[c] = T({}, m[c], g[c], $) : m[c] = g[c] : m[c] = j;
      }
    return m;
  }
  const V = {
    colors: l.default,
    negative(m) {
      return Object.keys(m).filter((v) => m[v] !== "0").reduce((v, $) => {
        let g = (0, t.default)(m[$]);
        return g !== void 0 && (v[`-${$}`] = g), v;
      }, {});
    },
    breakpoints(m) {
      return Object.keys(m).filter((v) => typeof m[v] == "string").reduce((v, $) => ({
        ...v,
        [`screen-${$}`]: m[$]
      }), {});
    }
  };
  function R(m, ...v) {
    return y(m) ? m(...v) : m;
  }
  function I(m) {
    return m.reduce((v, { extend: $ }) => T(v, $, (g, c) => g === void 0 ? [
      c
    ] : Array.isArray(g) ? [
      c,
      ...g
    ] : [
      c,
      g
    ]), {});
  }
  function E(m) {
    return {
      ...m.reduce((v, $) => (0, s.defaults)(v, $), {}),
      // In order to resolve n config objects, we combine all of their `extend` properties
      // into arrays instead of objects so they aren't overridden.
      extend: I(m)
    };
  }
  function W(m, v) {
    if (Array.isArray(m) && (0, d.default)(m[0]))
      return m.concat(v);
    if (Array.isArray(v) && (0, d.default)(v[0]) && (0, d.default)(m))
      return [
        m,
        ...v
      ];
    if (Array.isArray(v))
      return v;
  }
  function H({ extend: m, ...v }) {
    return T(v, m, ($, g) => !y($) && !g.some(y) ? T({}, $, ...g, W) : (c, j) => T({}, ...[
      $,
      ...g
    ].map((P) => R(P, c, j)), W));
  }
  function* Y(m) {
    let v = (0, r.toPath)(m);
    if (v.length === 0 || (yield v, Array.isArray(m)))
      return;
    let $ = /^(.*?)\s*\/\s*([^/]+)$/, g = m.match($);
    if (g !== null) {
      let [, c, j] = g, P = (0, r.toPath)(c);
      P.alpha = j, yield P;
    }
  }
  function re(m) {
    const v = ($, g) => {
      for (const c of Y($)) {
        let j = 0, P = m;
        for (; P != null && j < c.length; )
          P = P[c[j++]], P = y(P) && (c.alpha === void 0 || j <= c.length - 1) ? P(v, V) : P;
        if (P !== void 0) {
          if (c.alpha !== void 0) {
            let K = (0, f.parseColorFormat)(P);
            return (0, b.withAlphaValue)(K, c.alpha, (0, _.default)(K));
          }
          return (0, d.default)(P) ? (0, o.cloneDeep)(P) : P;
        }
      }
      return g;
    };
    return Object.assign(v, {
      theme: v,
      ...V
    }), Object.keys(m).reduce(($, g) => ($[g] = y(m[g]) ? m[g](v, V) : m[g], $), {});
  }
  function te(m) {
    let v = [];
    return m.forEach(($) => {
      v = [
        ...v,
        $
      ];
      var g;
      const c = (g = $?.plugins) !== null && g !== void 0 ? g : [];
      c.length !== 0 && c.forEach((j) => {
        j.__isOptionsFunction && (j = j());
        var P;
        v = [
          ...v,
          ...te([
            (P = j?.config) !== null && P !== void 0 ? P : {}
          ])
        ];
      });
    }), v;
  }
  function h(m) {
    return [
      ...m
    ].reduceRight(($, g) => y(g) ? g({
      corePlugins: $
    }) : (0, i.default)(g, $), n.default);
  }
  function C(m) {
    return [
      ...m
    ].reduceRight(($, g) => [
      ...$,
      ...g
    ], []);
  }
  function w(m) {
    let v = [
      ...te(m),
      {
        prefix: "",
        important: !1,
        separator: ":"
      }
    ];
    var $, g;
    return (0, a.normalizeConfig)((0, s.defaults)({
      theme: re(H(E(v.map((c) => ($ = c?.theme) !== null && $ !== void 0 ? $ : {})))),
      corePlugins: h(v.map((c) => c.corePlugins)),
      plugins: C(m.map((c) => (g = c?.plugins) !== null && g !== void 0 ? g : []))
    }, ...v));
  }
})(qe);
var ut = {}, Zt = {
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
    get: function() {
      return l;
    }
  });
  const t = /* @__PURE__ */ i(Zt), n = be;
  function i(s) {
    return s && s.__esModule ? s : {
      default: s
    };
  }
  function l(s) {
    var r;
    const a = ((r = s?.presets) !== null && r !== void 0 ? r : [
      t.default
    ]).slice().reverse().flatMap((f) => l(f instanceof Function ? f() : f)), d = {
      // Add experimental configs here...
      respectDefaultRingColorOpacity: {
        theme: {
          ringColor: ({ theme: f }) => ({
            DEFAULT: "#3b82f67f",
            ...f("colors")
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
    }, o = Object.keys(d).filter((f) => (0, n.flagEnabled)(s, f)).map((f) => d[f]);
    return [
      s,
      ...o,
      ...a
    ];
  }
})(ut);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return l;
    }
  });
  const t = /* @__PURE__ */ i(qe), n = /* @__PURE__ */ i(ut);
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
})(We);
let ve = We;
var en = (ve.__esModule ? ve : { default: ve }).default;
const tn = /* @__PURE__ */ Jt(en), nn = {
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
  // safelist: ["hidden"],
  // important: '.k-app',
}, rn = tn(nn);
function on(e) {
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
const sn = S({
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
      const t = L(rn, ["theme", "colors"]), n = L(t, e);
      return typeof n == "string" ? n : e;
    },
    fontColorForBackgroundColor(e) {
      const t = on(e);
      return t.alpha * 255 < 150 || Math.round(
        (t.red * 299 + t.green * 587 + t.blue * 114) / 1e3
      ) > 125 ? "#000" : "#fff";
    }
  }
}), ln = S({
  mixins: [sn]
});
const an = { class: "flex-grow" };
function un(e, t, n, i, l, s) {
  return u(), p("div", {
    class: "k-alert",
    style: se([e.colorableBackgroundStyle, e.colorableTextStyleForBackground])
  }, [
    k("div", an, [
      F(e.$slots, "default")
    ])
  ], 4);
}
const dn = /* @__PURE__ */ x(ln, [["render", un]]), cn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dn
}, Symbol.toStringTag, { value: "Module" }));
const pn = {}, fn = { class: "k-app" };
function mn(e, t) {
  const n = A("KSnackbar"), i = A("KConfirm");
  return u(), p("div", fn, [
    U(i, null, {
      default: z(() => [
        U(n, null, {
          default: z(() => [
            F(e.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    })
  ]);
}
const gn = /* @__PURE__ */ x(pn, [["render", mn]]), hn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: gn
}, Symbol.toStringTag, { value: "Module" })), _n = S({
  directives: {
    ClickAway: Oe
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
        width: G(this.width)
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
    valueLocal: {
      set(e) {
        e ? this.returnObject ? this.$emit("update:modelValue", e) : this.$emit("update:modelValue", L(e, this.itemValue, e)) : this.$emit("update:modelValue", null);
      },
      get() {
        return this.isObject(this.modelValue) ? this.modelValue : this.items.find(
          (e) => L(e, this.itemValue, e) == this.modelValue
        );
      }
    },
    isValidSelection() {
      return !!this.valueLocal;
    }
  },
  watch: {
    inputText(e) {
      this.$emit("update:search-input", e);
    },
    items() {
      this.currentFocus = -1, this.valueLocal && (this.combobox || (this.inputText = String(
        this.isObject(this.valueLocal) ? L(this.valueLocal, this.itemText, "") : this.valueLocal
      )));
    },
    valueLocal: {
      handler(e) {
        this.inputText = L(this.valueLocal, this.itemText, e);
      },
      immediate: !0
    },
    focus(e) {
      e || this.valueLocal || this.combobox || (this.inputText = null);
    }
  },
  methods: {
    async select(e) {
      this.combobox || (e = Math.max(e, 0));
      const t = this.items[e];
      this.combobox ? t && (this.valueLocal = t) : (this.valueLocal = t, this.inputText = L(
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
      this.valueLocal = null;
    },
    keyup() {
      this.combobox ? this.valueLocal = this.inputText : this.valueLocal = null;
    }
  }
});
const bn = { class: "k-autocomplete-input" }, yn = ["placeholder", "readonly"], vn = {
  key: 0,
  class: "k-autocomplete-items"
}, $n = ["onClick"];
function kn(e, t, n, i, l, s) {
  const r = ke("click-away");
  return ne((u(), p("div", {
    class: "k-autocomplete",
    style: se([e.style])
  }, [
    F(e.$slots, "prepend", { item: e.valueLocal }),
    k("div", bn, [
      ne(k("input", {
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = (a) => e.inputText = a),
        class: X(["k-input", { invalidSelection: !e.isValidSelection }]),
        type: "search",
        autocomplete: "off",
        placeholder: e.placeholderText,
        readonly: !e.editable,
        onSearch: t[1] || (t[1] = (...a) => e.clearInput && e.clearInput(...a)),
        onKeydown: [
          t[2] || (t[2] = fe(oe((a) => e.currentFocus = Math.max(-1, e.currentFocus - 1), ["prevent"]), ["arrow-up"])),
          t[3] || (t[3] = fe(oe((a) => e.currentFocus = Math.min(e.items.length - 1, e.currentFocus + 1), ["prevent"]), ["arrow-down"])),
          t[4] || (t[4] = fe(oe((a) => e.select(e.currentFocus), ["prevent"]), ["enter"])),
          t[6] || (t[6] = fe((...a) => e.setBlur && e.setBlur(...a), ["tab"]))
        ],
        onFocus: t[5] || (t[5] = (...a) => e.setFocus && e.setFocus(...a)),
        onKeyup: t[7] || (t[7] = (...a) => e.keyup && e.keyup(...a))
      }, null, 42, yn), [
        [we, e.inputText]
      ]),
      e.focus && e.items.length && e.inputText ? (u(), p("div", vn, [
        (u(!0), p(q, null, Z(e.itemsFiltered, (a, d) => (u(), p("div", {
          key: d,
          class: X(["k-autocomplete-item", { "k-autocomplete-active": e.currentFocus == d }]),
          onClick: (o) => e.select(d)
        }, [
          F(e.$slots, "item", { item: a }, () => [
            Q(B(a), 1)
          ])
        ], 10, $n))), 128))
      ])) : M("", !0)
    ])
  ], 4)), [
    [r, e.setBlur]
  ]);
}
const wn = /* @__PURE__ */ x(_n, [["render", kn]]), Sn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: wn
}, Symbol.toStringTag, { value: "Module" }));
function ee(e, t) {
  const n = _t(e, t);
  if (!n)
    throw new Error(`Could not resolve ${e.description}`);
  return n;
}
const ie = Symbol("session"), me = Symbol("config"), On = Symbol("snackbar"), xn = Symbol(
  "confirmDialogKey"
), de = new xe();
function jn(e) {
  const t = e.results.data.properties, n = e.results.data.versions, i = n[n.length - 1];
  return {
    dataid: t.id,
    name: t.name,
    subtype: t.type,
    subtypename: t.type_name,
    comment: t.description,
    mimetype: t.mime_type,
    parentid: t.parent_id,
    createdate: t.create_date,
    modifydate: t.modify_date,
    gif: t.icon,
    gif32: t.icon_large,
    giflarge: t.icon_large,
    ownerid: t.owner_user_id,
    groupid: t.owner_group_id,
    version: i?.version_number,
    versionnum: i?.version_number_name,
    modifiedImageCallback: "",
    categories: {},
    url: ""
  };
}
class Cn {
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
class Pn {
  nodes;
  nodeLookupQueue;
  constructor() {
    this.nodes = {}, this.nodeLookupQueue = new Cn();
  }
  registerUsers(t) {
    t.forEach((n) => this.nodes[n.dataid] = n);
  }
  async lookupLegacy(t, n) {
    if (n)
      try {
        if (await de.acquire(n), this.nodes[n])
          return this.nodes[n];
        {
          const i = await t.nodes.node({ dataid: n }), l = jn(i.data);
          return this.nodes[n] = l, l;
        }
      } finally {
        de.release(n);
      }
  }
  async lookupRPC(t, n) {
    return n ? (await de.acquire(n), this.nodes[n] ? (de.release(n), this.nodes[n]) : new Promise((i) => {
      const l = (s) => {
        this.nodes[n] = s, i(s), de.release(n);
      };
      this.nodeLookupQueue.queue(t, l, n);
    })) : null;
  }
  async lookup(t, n, i = !1) {
    return i ? this.lookupLegacy(t, n) : this.lookupRPC(t, n);
  }
}
const Tn = new Pn(), Kn = S({
  setup() {
    return { session: ee(ie) };
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
    },
    legacy: {
      type: Boolean,
      default: !1
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
        e && (this.nodeRecLocal = await Tn.lookup(
          this.session,
          e,
          this.legacy
        ));
      },
      immediate: !0
    }
  }
}), Mn = {
  key: 0,
  class: "flex"
}, An = ["src"], Ln = ["href"], zn = ["innerHTML"];
function Vn(e, t, n, i, l, s) {
  const r = A("KFunctionMenu");
  return e.nodeRecResolved ? (u(), p("div", Mn, [
    e.image ? (u(), p("img", {
      key: 0,
      src: e.nodeRecResolved.gif
    }, null, 8, An)) : M("", !0),
    Q(" "),
    k("a", {
      href: e.nodeRecResolved.url
    }, B(e.nodeRecResolved.name), 9, Ln),
    e.clickable ? (u(), N(r, {
      key: 1,
      dataid: e.nodeRecResolved.dataid
    }, null, 8, ["dataid"])) : M("", !0),
    k("span", {
      innerHTML: e.nodeRecResolved.modifiedImageCallback
    }, null, 8, zn)
  ])) : M("", !0);
}
const Bn = /* @__PURE__ */ x(Kn, [["render", Vn]]), Fn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Bn
}, Symbol.toStringTag, { value: "Module" })), Nn = S({
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
const En = ["disabled"];
function Dn(e, t, n, i, l, s) {
  return u(), p("button", Ue({
    class: ["k-button", e.classObj],
    disabled: e.disabled,
    type: "button"
  }, e.$attrs, {
    onClick: t[0] || (t[0] = (r) => e.$emit("click"))
  }), [
    F(e.$slots, "default")
  ], 16, En);
}
const Un = /* @__PURE__ */ x(Nn, [["render", Dn]]), Rn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Un
}, Symbol.toStringTag, { value: "Module" })), In = S({
  provide() {
    return {
      // @ts-ignore - not sure why this complains
      [xn]: this
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
function Wn(e, t, n, i, l, s) {
  const r = A("KCardTitle"), a = A("KCardText"), d = A("KSpacer"), o = A("KButton"), f = A("KCardActions"), b = A("KCard"), _ = A("KDialog");
  return u(), p(q, null, [
    F(e.$slots, "default"),
    U(_, {
      modelValue: e.dialog,
      "onUpdate:modelValue": t[2] || (t[2] = (O) => e.dialog = O),
      "max-width": "30vw",
      "min-width": "20vw",
      "z-index": 50
    }, {
      default: z(() => [
        U(b, null, {
          default: z(() => [
            e.title ? (u(), N(r, { key: 0 }, {
              default: z(() => [
                Q(B(e.title), 1)
              ]),
              _: 1
            })) : M("", !0),
            e.message ? (u(), N(a, { key: 1 }, {
              default: z(() => [
                Q(B(e.message), 1)
              ]),
              _: 1
            })) : M("", !0),
            U(f, null, {
              default: z(() => [
                U(d),
                e.noLabel ? (u(), N(o, {
                  key: 0,
                  small: "",
                  onClick: t[0] || (t[0] = (O) => e.dismiss(!1))
                }, {
                  default: z(() => [
                    Q(B(e.noLabel), 1)
                  ]),
                  _: 1
                })) : M("", !0),
                e.yesLabel ? (u(), N(o, {
                  key: 1,
                  small: "",
                  onClick: t[1] || (t[1] = (O) => e.dismiss(!0))
                }, {
                  default: z(() => [
                    Q(B(e.yesLabel), 1)
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
const qn = /* @__PURE__ */ x(In, [["render", Wn]]), Hn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qn
}, Symbol.toStringTag, { value: "Module" })), Gn = S({
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
      return t ? this.time ? Ve(t, "yyyy-MM-dd'T'HH:mm:ss") : Ve(t, "yyyy-MM-dd") : null;
    }
  }
});
const Qn = { class: "k-date-time-picker" }, Yn = ["type", "readonly"];
function Xn(e, t, n, i, l, s) {
  const r = A("KButton");
  return u(), p("div", Qn, [
    ne(k("input", {
      "onUpdate:modelValue": t[0] || (t[0] = (a) => e.localModelValue = a),
      class: "k-input",
      type: e.type,
      readonly: !e.editable
    }, null, 8, Yn), [
      [bt, e.localModelValue]
    ]),
    e.editable ? (u(), p(q, { key: 0 }, [
      U(r, {
        small: "",
        onClick: e.setToNow
      }, {
        default: z(() => [
          Q(" Now ")
        ]),
        _: 1
      }, 8, ["onClick"]),
      U(r, {
        small: "",
        onClick: t[1] || (t[1] = (a) => e.$emit("update:modelValue", null))
      }, {
        default: z(() => [
          Q(" Clear ")
        ]),
        _: 1
      })
    ], 64)) : M("", !0)
  ]);
}
const Jn = /* @__PURE__ */ x(Gn, [["render", Xn]]), Zn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Jn
}, Symbol.toStringTag, { value: "Module" })), er = S({
  directives: {
    ClickAway: Oe
  },
  mixins: [he],
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
      default: 0
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
      this.$emit("update:modelValue", e), e ? (await this.$nextTick(), wt(this.$refs.content)) : St(this.$refs.content);
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
function tr(e, t, n, i, l, s) {
  const r = ke("click-away");
  return u(), p(q, null, [
    F(e.$slots, "activator", { on: e.on }),
    e.mounted ? (u(), N(yt, {
      key: 0,
      to: ".k-app"
    }, [
      U(ge, { name: "fade" }, {
        default: z(() => [
          e.dialog ? (u(), p("div", {
            key: 0,
            class: "k-dialog",
            style: se([e.style])
          }, [
            ne((u(), p("div", {
              ref: "content",
              class: X(["k-dialog-content", e.classObj]),
              style: se([e.measurableStyles])
            }, [
              F(e.$slots, "default", { on: e.on })
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
const nr = /* @__PURE__ */ x(er, [["render", tr]]), rr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nr
}, Symbol.toStringTag, { value: "Module" })), or = S({
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
      const e = G(this.size);
      return this.outline ? {
        borderStyle: "solid",
        borderWidth: G(this.outlineWidth),
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
function sr(e, t, n, i, l, s) {
  return u(), p("div", {
    class: "k-dot",
    style: se([e.style])
  }, [
    F(e.$slots, "default")
  ], 4);
}
const ir = /* @__PURE__ */ x(or, [["render", sr]]), lr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ir
}, Symbol.toStringTag, { value: "Module" })), ae = S({
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
}), ar = {
  mixins: [ae]
};
const ur = {
  key: 0,
  class: "k-form-field-label"
};
function dr(e, t, n, i, l, s) {
  return u(), p("div", null, [
    e.label ? (u(), p("div", ur, B(e.label), 1)) : M("", !0),
    F(e.$slots, "default"),
    (u(!0), p(q, null, Z(e.successMessages, (r, a) => (u(), p("div", {
      key: a,
      class: "k-formfield--success"
    }, B(r), 1))), 128)),
    (u(!0), p(q, null, Z(e.errorMessages, (r, a) => (u(), p("div", {
      key: a,
      class: "k-formfield--error"
    }, B(r), 1))), 128))
  ]);
}
const cr = /* @__PURE__ */ x(ar, [["render", dr]]), pr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cr,
  mixin: ae
}, Symbol.toStringTag, { value: "Module" })), fr = S({
  setup() {
    return { config: ee(me) };
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
}), mr = { key: 0 }, gr = ["id"], hr = ["src"], _r = ["id", "src"];
function br(e, t, n, i, l, s) {
  return e.dataid ? (u(), p("span", mr, [
    k("a", {
      id: e.aid,
      href: "#",
      class: "functionMenuHotspot",
      onClick: t[2] || (t[2] = oe((...r) => e.onclick && e.onclick(...r), ["prevent"]))
    }, [
      e.isModernFunctionMenu ? (u(), p("img", {
        key: 0,
        src: `${e.config.img}spacer.gif`,
        alt: "Functions"
      }, null, 8, hr)) : (u(), p("img", {
        key: 1,
        id: e.xid,
        src: e.image,
        border: "0",
        alt: "Functions",
        title: "Functions",
        onMouseover: t[0] || (t[0] = (...r) => e.onmouseover && e.onmouseover(...r)),
        onMouseout: t[1] || (t[1] = (...r) => e.onmouseout && e.onmouseout(...r))
      }, null, 40, _r))
    ], 8, gr),
    t[3] || (ze(-1), t[3] = k("div", {
      id: e.zid,
      ref: "functionMenuDiv",
      class: "functionMenuDiv"
    }, null, 8, ["id"]), ze(1), t[3])
  ])) : M("", !0);
}
const yr = /* @__PURE__ */ x(fr, [["render", br]]), vr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: yr
}, Symbol.toStringTag, { value: "Module" })), $r = S({});
const kr = { class: "k-progress-line" };
function wr(e, t, n, i, l, s) {
  return u(), p("div", kr);
}
const Sr = /* @__PURE__ */ x($r, [["render", wr]]), Or = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sr
}, Symbol.toStringTag, { value: "Module" })), xr = S({});
const jr = { class: "k-list" };
function Cr(e, t, n, i, l, s) {
  return u(), p("div", jr, [
    F(e.$slots, "default")
  ]);
}
const Pr = /* @__PURE__ */ x(xr, [["render", Cr]]), Tr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pr
}, Symbol.toStringTag, { value: "Module" })), Kr = S({});
const Mr = { class: "k-list-item-title" };
function Ar(e, t, n, i, l, s) {
  return u(), p("div", Mr, [
    F(e.$slots, "default")
  ]);
}
const dt = /* @__PURE__ */ x(Kr, [["render", Ar]]), Lr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dt
}, Symbol.toStringTag, { value: "Module" })), zr = S({});
const Vr = { class: "k-list-item-subtitle" };
function Br(e, t, n, i, l, s) {
  return u(), p("div", Vr, [
    F(e.$slots, "default")
  ]);
}
const ct = /* @__PURE__ */ x(zr, [["render", Br]]), Fr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ct
}, Symbol.toStringTag, { value: "Module" })), Nr = S({
  mixins: [Ie],
  props: {
    title: {
      type: String,
      default: null
    },
    subtitle: {
      type: String,
      default: null
    }
  },
  computed: {
    classObj() {
      return {
        "k-list-item": !0,
        "k-list-item-clickable": this.isClickable
      };
    }
  },
  render() {
    const { tag: e, data: t } = this.generateRouteLink(), n = this.title ? le(dt, {}, { default: () => [this.title] }) : null, i = this.subtitle ? le(ct, {}, { default: () => [this.subtitle] }) : null, l = this.$slots.default ? this.$slots.default() : [n, i].filter((o) => !!o), s = le(
      "div",
      { class: "k-list-item-body" },
      {
        default: () => l
      }
    ), r = this.$slots.prepend ? le(
      "div",
      { class: "k-list-item-prepend" },
      {
        default: () => this.$slots.prepend()
      }
    ) : null, a = this.$slots.append ? le(
      "div",
      { class: "k-list-item-append" },
      {
        default: () => this.$slots.append()
      }
    ) : null;
    return le(
      e,
      {
        ...t,
        class: this.classObj
      },
      [r, s, a].filter((o) => !!o)
    );
  }
});
const Er = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Nr
}, Symbol.toStringTag, { value: "Module" })), Dr = S({
  directives: {
    ClickAway: Oe
  },
  setup() {
    return { menuButton: vt() };
  },
  props: {
    submenu: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      visible: !1,
      left: 0,
      top: 0,
      height: 0,
      width: 0
    };
  },
  computed: {
    styleDropDownItems() {
      return this.submenu ? {
        left: G(this.width),
        top: G(0)
      } : {
        left: G(this.left),
        top: G(this.height)
      };
    },
    dropDownMenuItemsClassObj() {
      return {
        hidden: !this.visible
      };
    }
  },
  methods: {
    clickAway() {
      this.visible && this.showMenu(!1);
    },
    updatePosition() {
      this.menuButton && (this.left = this.menuButton.offsetLeft, this.height = this.menuButton.offsetHeight, this.width = this.menuButton.offsetWidth);
    },
    showMenu(e) {
      this.updatePosition(), this.visible = e;
    },
    toggleMenu() {
      this.showMenu(!this.visible);
    },
    mouseEnter() {
      this.submenu && this.showMenu(!0);
    },
    mouseLeave() {
      this.submenu && this.showMenu(!1);
    }
  }
});
const Ur = { ref: "menuButton" };
function Rr(e, t, n, i, l, s) {
  const r = ke("click-away");
  return u(), p("div", {
    class: "k-menu",
    onMouseenter: t[0] || (t[0] = (...a) => e.mouseEnter && e.mouseEnter(...a)),
    onMouseleave: t[1] || (t[1] = (...a) => e.mouseLeave && e.mouseLeave(...a))
  }, [
    ne((u(), p("div", Ur, [
      F(e.$slots, "activator", {
        on: { click: e.toggleMenu }
      })
    ])), [
      [r, e.clickAway]
    ]),
    k("div", {
      class: X(["k-menu-items", e.dropDownMenuItemsClassObj]),
      style: se(e.styleDropDownItems)
    }, [
      F(e.$slots, "default")
    ], 6)
  ], 32);
}
const Ir = /* @__PURE__ */ x(Dr, [["render", Rr]]), Wr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ir
}, Symbol.toStringTag, { value: "Module" })), qr = {}, Hr = {
  class: "w-4 h-4",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, Gr = /* @__PURE__ */ k("path", {
  "fill-rule": "evenodd",
  d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
  "clip-rule": "evenodd"
}, null, -1), Qr = [
  Gr
];
function Yr(e, t) {
  return u(), p("svg", Hr, Qr);
}
const Xr = /* @__PURE__ */ x(qr, [["render", Yr]]), Jr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xr
}, Symbol.toStringTag, { value: "Module" })), Zr = S({
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
const eo = { class: "k-multi-widget" }, to = { class: "k-multi-buttons" }, no = /* @__PURE__ */ k("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ k("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z" })
], -1), ro = /* @__PURE__ */ k("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ k("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" })
], -1);
function oo(e, t, n, i, l, s) {
  const r = A("KButton"), a = A("KCard");
  return u(), N(a, { class: "k-multi" }, {
    default: z(() => [
      U(Se, {
        name: "fade",
        tag: "div"
      }, {
        default: z(() => [
          (u(!0), p(q, null, Z(e.valueLocal, (d, o) => (u(), p("div", {
            key: `k-multi-${d}`,
            class: "k-multi-item"
          }, [
            k("div", eo, [
              F(e.$slots, "default", {
                index: o,
                value: d,
                update: (f) => e.update(o, f)
              })
            ]),
            k("div", to, [
              e.canRemove ? (u(), N(r, {
                key: 0,
                text: "",
                onClick: (f) => e.remove(o)
              }, {
                default: z(() => [
                  no
                ]),
                _: 2
              }, 1032, ["onClick"])) : M("", !0),
              e.canAdd ? (u(), N(r, {
                key: 1,
                text: "",
                onClick: (f) => e.add(o)
              }, {
                default: z(() => [
                  ro
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
const so = /* @__PURE__ */ x(Zr, [["render", oo]]), io = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: so
}, Symbol.toStringTag, { value: "Module" })), lo = S({
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
const ao = { class: "k-multi-widget" }, uo = /* @__PURE__ */ k("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ k("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z" })
], -1);
function co(e, t, n, i, l, s) {
  const r = A("KButton"), a = A("KCard");
  return u(), N(a, { class: "k-multi" }, {
    default: z(() => [
      U(Se, {
        name: "fade",
        tag: "div"
      }, {
        default: z(() => [
          (u(!0), p(q, null, Z(e.valueLocal, (d, o) => (u(), p("div", {
            key: `k-multi-${d}`,
            class: "k-multi-item"
          }, [
            k("div", ao, [
              F(e.$slots, "readonly", {
                index: o,
                value: d
              }, () => [
                Q(B(d), 1)
              ])
            ]),
            e.readonly ? M("", !0) : (u(), N(r, {
              key: 0,
              text: "",
              onClick: (f) => e.remove(o)
            }, {
              default: z(() => [
                uo
              ]),
              _: 2
            }, 1032, ["onClick"]))
          ]))), 128))
        ]),
        _: 3
      }),
      e.canAdd ? F(e.$slots, "add", {
        key: 0,
        add: e.add
      }) : M("", !0)
    ]),
    _: 3
  });
}
const po = /* @__PURE__ */ x(lo, [["render", co]]), fo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: po
}, Symbol.toStringTag, { value: "Module" })), mo = S({
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
function go(e, t, n, i, l, s) {
  const r = A("KUserLink"), a = A("KUserPicker"), d = A("KMulti2");
  return u(), N(d, {
    modelValue: e.userIdsLocal,
    "onUpdate:modelValue": t[0] || (t[0] = (o) => e.userIdsLocal = o),
    readonly: e.readonly
  }, {
    readonly: z(({ value: o }) => [
      U(r, {
        user: o,
        gif: ""
      }, null, 8, ["user"])
    ]),
    add: z(({ add: o }) => [
      U(a, {
        "onUpdate:modelValue": (f) => o(f),
        users: e.users,
        groups: e.groups
      }, null, 8, ["onUpdate:modelValue", "users", "groups"])
    ]),
    _: 1
  }, 8, ["modelValue", "readonly"]);
}
const ho = /* @__PURE__ */ x(mo, [["render", go]]), _o = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ho
}, Symbol.toStringTag, { value: "Module" })), Be = new xe();
class bo {
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
      if (await Be.acquire(n), !this.nodes[n]) {
        const i = await t.nodes.ancestors(n);
        this.nodes[n] = L(i, "data.ancestors", []);
      }
      return this.nodes[n];
    } finally {
      Be.release(n);
    }
  }
}
const pt = new bo(), yo = S({
  setup() {
    return { session: ee(ie) };
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
        e && (this.breadcrumb = await pt.lookup(this.session, e));
      },
      immediate: !0
    }
  }
});
const vo = { class: "k-node-breadcrumb" };
function $o(e, t, n, i, l, s) {
  return u(), p("div", vo, [
    (u(!0), p(q, null, Z(e.breadcrumb, (r, a) => (u(), p(q, {
      key: r.dataid
    }, [
      Q(B(r.name) + " ", 1),
      a < e.breadcrumb.length - 1 ? (u(), p(q, { key: 0 }, [
        Q(" ▶ ")
      ], 64)) : M("", !0)
    ], 64))), 128))
  ]);
}
const ft = /* @__PURE__ */ x(yo, [["render", $o]]), ko = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ft
}, Symbol.toStringTag, { value: "Module" })), wo = S({
  components: { KNodeAncestor: ft },
  setup() {
    return {
      session: ee(ie),
      config: ee(me)
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
      return Ot(this.config.baseUrl, {
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
        this.dataid ? this.breadcrumb = await pt.lookup(
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
      return this.objid ?? parseInt(xt.get("TargetBrowseObjID") ?? "0");
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
const So = { class: "k-node-picker-field" }, Oo = ["value"];
function xo(e, t, n, i, l, s) {
  const r = A("KButton"), a = A("KNodeAncestor");
  return u(), p("div", So, [
    k("input", {
      ref: "input",
      type: "text",
      class: "k-input",
      value: e.name,
      onFocus: t[0] || (t[0] = (...d) => e.openWindow && e.openWindow(...d))
    }, null, 40, Oo),
    U(r, {
      small: "",
      onClick: e.openWindow
    }, {
      default: z(() => [
        Q(B(e.browseButtonLabel), 1)
      ]),
      _: 1
    }, 8, ["onClick"]),
    e.clearable ? (u(), N(r, {
      key: 0,
      small: "",
      onClick: e.clear
    }, {
      default: z(() => [
        Q(B(e.clearButtonLabel), 1)
      ]),
      _: 1
    }, 8, ["onClick"])) : M("", !0),
    e.dataid ? (u(), N(a, {
      key: 1,
      dataid: e.dataid
    }, null, 8, ["dataid"])) : M("", !0)
  ]);
}
const jo = /* @__PURE__ */ x(wo, [["render", xo]]), Co = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: jo
}, Symbol.toStringTag, { value: "Module" })), Po = S({
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
const To = { class: "k-one-moment" }, Ko = { class: "k-one-moment-label" };
function Mo(e, t, n, i, l, s) {
  const r = A("KSpinner"), a = A("KDialog");
  return u(), N(a, { "model-value": e.loading }, {
    default: z(() => [
      k("div", To, [
        U(r, {
          height: 36,
          width: 36
        }),
        k("div", Ko, B(e.label), 1)
      ])
    ]),
    _: 1
  }, 8, ["model-value"]);
}
const Ao = /* @__PURE__ */ x(Po, [["render", Mo]]), Lo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ao
}, Symbol.toStringTag, { value: "Module" })), zo = S({
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
function Vo(e, t, n, i, l, s) {
  return u(), p("div", null, [
    F(e.$slots, "default", { active: e.active })
  ]);
}
const Bo = /* @__PURE__ */ x(zo, [["render", Vo]]), Fo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Bo
}, Symbol.toStringTag, { value: "Module" })), No = S({
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
const Eo = { class: "text-xl" }, Do = { key: 0 }, Uo = { class: "rhmuted" };
function Ro(e, t, n, i, l, s) {
  return u(), p("div", Eo, [
    Q(B(e.title), 1),
    e.subtitle ? (u(), p("span", Do, [
      Q(": "),
      k("span", Uo, B(e.subtitle), 1)
    ])) : M("", !0)
  ]);
}
const Io = /* @__PURE__ */ x(No, [["render", Ro], ["__scopeId", "data-v-c72c9204"]]), Wo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Io
}, Symbol.toStringTag, { value: "Module" })), qo = S({
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
      return L(this.pagination, "pageRange", []);
    },
    pageSizes() {
      return L(this.pagination, "pageSizes", []);
    },
    pageNumber() {
      return L(this.pagination, "pageNumber", 0);
    },
    pageSize: {
      get() {
        return L(this.pagination, "pageSize", 0);
      },
      set(e) {
        this.$emit("update:pageSize", e);
      }
    },
    hasPrevious() {
      return L(this.pagination, "hasPrevious", !1);
    },
    hasNext() {
      return L(this.pagination, "hasNext", !1);
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
const Ho = { class: "k-pagination" }, Go = {
  key: 1,
  class: "k-pagination-buttons"
}, Qo = {
  key: 0,
  class: "k-pagination-button"
}, Yo = /* @__PURE__ */ k("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ k("path", { d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" })
], -1), Xo = [
  Yo
], Jo = { key: 0 }, Zo = ["onClick"], es = {
  key: 1,
  class: "k-pagination-button"
}, ts = /* @__PURE__ */ k("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ k("path", { d: "M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" })
], -1), ns = [
  ts
], rs = { key: 2 };
function os(e, t, n, i, l, s) {
  const r = A("KSelect");
  return u(), p("div", Ho, [
    e.potentiallyMultiplePages ? (u(), N(r, {
      key: 0,
      modelValue: e.pageSize,
      "onUpdate:modelValue": t[0] || (t[0] = (a) => e.pageSize = a),
      items: e.pageSizes,
      label: "Page Size"
    }, null, 8, ["modelValue", "items"])) : M("", !0),
    e.hasPrevious || e.hasNext ? (u(), p("div", Go, [
      e.hasPrevious ? (u(), p("a", Qo, Xo)) : M("", !0),
      (u(!0), p(q, null, Z(e.pageRange, (a) => (u(), p(q, { key: a }, [
        a === "|" ? (u(), p("div", Jo, "...")) : (u(), p("a", {
          key: 1,
          class: X(["k-pagination-button k-pagination-button-border", e.classObj(a)]),
          onClick: (d) => e.$emit("update:modelValue", a)
        }, B(a), 11, Zo))
      ], 64))), 128)),
      e.hasNext ? (u(), p("a", es, ns)) : M("", !0)
    ])) : M("", !0),
    e.potentiallyMultiplePages ? (u(), p("div", rs, " Displaying " + B(e.pagination.startIndex) + "-" + B(e.pagination.endIndex) + " of " + B(e.pagination.count) + " items. ", 1)) : M("", !0)
  ]);
}
const ss = /* @__PURE__ */ x(qo, [["render", os]]), is = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ss
}, Symbol.toStringTag, { value: "Module" })), ls = S({
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
    pagination() {
      const { offset: e, limit: t, count: n } = this.modelValue;
      return { offset: e, limit: t, count: n };
    },
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
    offset() {
      return this.pagination.offset ?? 0;
    },
    limit() {
      return this.pagination.limit ?? 0;
    },
    count() {
      return this.pagination.count ?? 0;
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
const as = { class: "k-pagination2" }, us = { class: "k-pagination2-buttons" }, ds = /* @__PURE__ */ k("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ k("path", { d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" })
], -1), cs = [
  ds
], ps = ["onClick"], fs = /* @__PURE__ */ k("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ k("path", { d: "M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" })
], -1), ms = [
  fs
];
function gs(e, t, n, i, l, s) {
  const r = A("KSelect");
  return u(), p("div", as, [
    k("div", null, [
      U(r, {
        modelValue: e.pageSize,
        "onUpdate:modelValue": t[0] || (t[0] = (a) => e.pageSize = a),
        items: e.pageSizes,
        label: "Page Size"
      }, null, 8, ["modelValue", "items"])
    ]),
    e.pageCount > 1 ? (u(), p(q, { key: 0 }, [
      k("div", us, [
        e.hasPrevious ? (u(), p("a", {
          key: 0,
          class: "k-pagination2-arrow-button",
          onClick: t[1] || (t[1] = (a) => e.clickedPageNumber(e.pageNumber0 - 1))
        }, cs)) : M("", !0),
        (u(!0), p(q, null, Z(e.pageRange0, (a) => (u(), p("div", {
          key: a,
          class: X(["k-pagination2-button", e.classObj(a)]),
          onClick: (d) => e.clickedPageNumber(a)
        }, B(a + 1), 11, ps))), 128)),
        e.hasNext ? (u(), p("a", {
          key: 1,
          class: "k-pagination2-arrow-button",
          onClick: t[2] || (t[2] = (a) => e.clickedPageNumber(e.pageNumber0 + 1))
        }, ms)) : M("", !0)
      ]),
      k("div", null, B(e.pageNumber) + " of " + B(e.pageCount) + " pages", 1)
    ], 64)) : M("", !0)
  ]);
}
const hs = /* @__PURE__ */ x(ls, [["render", gs]]), _s = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: hs
}, Symbol.toStringTag, { value: "Module" })), Me = S({
  mixins: [he],
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
}), Fe = () => {
  Re((e) => ({
    fe06e366: e.color
  }));
}, Ne = Me.setup;
Me.setup = Ne ? (e, t) => (Fe(), Ne(e, t)) : Fe;
const bs = /* @__PURE__ */ k("circle", {
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), ys = /* @__PURE__ */ k("path", {
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), vs = [
  bs,
  ys
];
function $s(e, t, n, i, l, s) {
  return u(), p("svg", {
    style: se(e.measurableStyles),
    class: "k-spinner",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, vs, 4);
}
const mt = /* @__PURE__ */ x(Me, [["render", $s]]), ks = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mt
}, Symbol.toStringTag, { value: "Module" })), ws = S({
  components: { KSpinner: mt },
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
const Ss = {
  key: 0,
  class: "centerOverlay"
};
function Os(e, t, n, i, l, s) {
  const r = A("KSpinner");
  return e.loading ? (u(), p("div", Ss, [
    U(r, {
      "max-width": e.size,
      "max-height": e.size
    }, null, 8, ["max-width", "max-height"])
  ])) : M("", !0);
}
const xs = /* @__PURE__ */ x(ws, [["render", Os]]), js = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xs
}, Symbol.toStringTag, { value: "Module" })), Cs = S({
  mixins: [ae],
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
      return this.isObject(e) ? L(e, this.itemText) : e;
    },
    getItemValue(e) {
      return this.isObject(e) ? L(e, this.itemValue) : e;
    },
    getItemDisabled(e) {
      return this.isObject(e) ? L(e, "disabled", !1) : !1;
    }
  }
});
const Ps = ["id", "value", "disabled"], Ts = ["for"];
function Ks(e, t, n, i, l, s) {
  const r = A("KSpinner"), a = A("KFormFieldWrapper");
  return u(), p("div", null, [
    U(a, {
      label: e.label,
      "success-messages": e.successMessages,
      "error-messages": e.errorMessages
    }, {
      default: z(() => [
        U(ge, {
          name: "fade",
          mode: "out-in"
        }, {
          default: z(() => [
            e.loading ? (u(), N(r, { key: 0 })) : (u(), p("div", {
              key: 1,
              class: X(["k-radiogroup", e.classObj])
            }, [
              (u(!0), p(q, null, Z(e.items, (d) => (u(), p("div", {
                key: e.getItemValue(d),
                class: "k-radiogroup-item"
              }, [
                ne(k("input", {
                  id: e.getItemValue(d),
                  "onUpdate:modelValue": t[0] || (t[0] = (o) => e.localValue = o),
                  type: "radio",
                  value: e.getItemValue(d),
                  disabled: e.getItemDisabled(d)
                }, null, 8, Ps), [
                  [$t, e.localValue]
                ]),
                k("label", {
                  for: e.getItemValue(d)
                }, B(e.getItemText(d)), 9, Ts)
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
const Ms = /* @__PURE__ */ x(Cs, [["render", Ks]]), As = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ms
}, Symbol.toStringTag, { value: "Module" })), Ls = S({
  inject: ["ksnackbar"],
  methods: {
    click() {
    }
  }
});
function zs(e, t, n, i, l, s) {
  return u(), p("div", null, [
    k("button", {
      onClick: t[0] || (t[0] = (...r) => e.click && e.click(...r))
    }, "click")
  ]);
}
const Vs = /* @__PURE__ */ x(Ls, [["render", zs]]), Bs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Vs
}, Symbol.toStringTag, { value: "Module" })), Fs = S({
  mixins: [ae],
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
    },
    clearable: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  computed: {
    disabledResolved() {
      return this.disabled || this.readonly;
    },
    valueLocal: {
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
      return this.isObject(e) ? L(e, this.itemText) : e;
    },
    getItemValue(e) {
      return this.isObject(e) ? L(e, this.itemValue) : e;
    },
    getItemDisabled(e) {
      return this.isObject(e) ? L(e, this.itemDisabled, !1) : !1;
    },
    arrify(e) {
      return Array.isArray(e) ? e : [e];
    }
  }
});
const Ns = { class: "k-select" }, Es = ["disabled"], Ds = ["value", "disabled"];
function Us(e, t, n, i, l, s) {
  const r = A("KButton"), a = A("KSpinner"), d = A("KFormFieldWrapper");
  return u(), N(d, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: z(() => [
      k("div", Ns, [
        ne(k("select", {
          "onUpdate:modelValue": t[0] || (t[0] = (o) => e.valueLocal = o),
          class: X(e.classObj),
          disabled: e.disabledResolved
        }, [
          (u(!0), p(q, null, Z(e.items, (o) => (u(), p("option", {
            key: e.getItemValue(o),
            value: e.getItemValue(o),
            disabled: e.getItemDisabled(o)
          }, B(e.getItemText(o)), 9, Ds))), 128))
        ], 10, Es), [
          [kt, e.valueLocal]
        ]),
        e.clearable ? (u(), N(r, {
          key: 0,
          onClick: t[1] || (t[1] = (o) => e.valueLocal = null),
          small: ""
        }, {
          default: z(() => [
            Q("clear")
          ]),
          _: 1
        })) : M("", !0),
        U(ge, { name: "fade" }, {
          default: z(() => [
            e.loading ? (u(), N(a, {
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
const Rs = /* @__PURE__ */ x(Fs, [["render", Us]]), Is = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Rs
}, Symbol.toStringTag, { value: "Module" })), Ws = S({});
const qs = { class: "k-smart-ui-panel" }, Hs = {
  key: 0,
  class: "k-smart-ui-panel-header"
}, Gs = { class: "k-smart-ui-panel-body" }, Qs = {
  key: 1,
  class: "k-smart-ui-panel-footer"
};
function Ys(e, t, n, i, l, s) {
  return u(), p("div", qs, [
    e.$slots.header ? (u(), p("div", Hs, [
      F(e.$slots, "header")
    ])) : M("", !0),
    k("div", Gs, [
      F(e.$slots, "default")
    ]),
    e.$slots.footer ? (u(), p("div", Qs, [
      F(e.$slots, "footer")
    ])) : M("", !0)
  ]);
}
const Xs = /* @__PURE__ */ x(Ws, [["render", Ys]]), Js = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xs
}, Symbol.toStringTag, { value: "Module" })), Zs = S({
  provide() {
    return {
      // @ts-ignore - not sure why this complains
      [On]: this
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
const ei = { class: "k-snackbar" }, ti = { class: "k-snackbar-item-message" }, ni = {
  key: 0,
  class: "k-snackbar-title"
}, ri = {
  key: 1,
  class: "k-snackbar-text"
}, oi = {
  key: 0,
  class: "k-snackbar-action"
}, si = ["onClick"];
function ii(e, t, n, i, l, s) {
  return u(), p(q, null, [
    F(e.$slots, "default"),
    k("div", ei, [
      U(Se, {
        name: "slide",
        tag: "div",
        mode: "out-in"
      }, {
        default: z(() => [
          (u(!0), p(q, null, Z(e.items, (r) => (u(), p("div", {
            key: r.index,
            class: X(["k-snackbar-item", e.classObj(r)])
          }, [
            k("div", ti, [
              r.title ? (u(), p("div", ni, B(r.title), 1)) : M("", !0),
              r.message ? (u(), p("div", ri, B(r.message), 1)) : M("", !0)
            ]),
            r.action ? (u(), p("div", oi, [
              k("a", {
                href: "#",
                onClick: oe((a) => e.action(r), ["prevent"])
              }, B(r.actionLabel), 9, si)
            ])) : M("", !0)
          ], 2))), 128))
        ]),
        _: 1
      })
    ])
  ], 64);
}
const li = /* @__PURE__ */ x(Zs, [["render", ii]]), ai = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: li
}, Symbol.toStringTag, { value: "Module" })), ui = S({
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
const di = {
  key: 0,
  class: "j-sort-header-arrow"
}, ci = {
  key: 1,
  class: "j-sort-header-arrow"
};
function pi(e, t, n, i, l, s) {
  return u(), p("a", {
    href: "#",
    onClick: t[0] || (t[0] = oe((...r) => e.emitClick && e.emitClick(...r), ["prevent"]))
  }, [
    F(e.$slots, "default"),
    U(ge, {
      name: "fade",
      mode: "out-in"
    }, {
      default: z(() => [
        e.isActive && e.sortAsc ? (u(), p("span", di, "↑")) : e.isActive ? (u(), p("span", ci, "↓")) : M("", !0)
      ]),
      _: 1
    })
  ]);
}
const fi = /* @__PURE__ */ x(ui, [["render", pi]]), mi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fi
}, Symbol.toStringTag, { value: "Module" }));
const gi = {}, hi = { class: "k-spacer" };
function _i(e, t) {
  return u(), p("div", hi);
}
const bi = /* @__PURE__ */ x(gi, [["render", _i]]), yi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bi
}, Symbol.toStringTag, { value: "Module" })), Ae = S({
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
      return G(this.height);
    },
    innerSizePx() {
      return G(this.innerSize);
    },
    paddingPx() {
      return G(this.padding);
    },
    switchWidthPx() {
      return G(this.trans + this.height);
    },
    transPx() {
      return `translateX(${G(this.trans)})`;
    }
  }
}), Ee = () => {
  Re((e) => ({
    "2f4ab6bd": e.switchWidthPx,
    "3acd298c": e.heightPx,
    "37d7127c": e.innerSizePx,
    "13e4c99c": e.paddingPx,
    "79abc333": e.transPx
  }));
}, De = Ae.setup;
Ae.setup = De ? (e, t) => (Ee(), De(e, t)) : Ee;
const vi = /* @__PURE__ */ k("span", { class: "k-switch-slider" }, null, -1), $i = [
  vi
];
function ki(e, t, n, i, l, s) {
  return u(), p("div", {
    class: X(["k-switch", e.classObj]),
    onClick: t[0] || (t[0] = (...r) => e.toggle && e.toggle(...r))
  }, $i, 2);
}
const wi = /* @__PURE__ */ x(Ae, [["render", ki]]), Si = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: wi
}, Symbol.toStringTag, { value: "Module" })), Oi = S({
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
function xi(e, t, n, i, l, s) {
  const r = A("KLinearProgressIndicator");
  return u(), p("div", null, [
    e.loading ? (u(), N(r, { key: 0 })) : M("", !0),
    k("table", {
      class: X(["k-table", e.classObj])
    }, [
      F(e.$slots, "default")
    ], 2)
  ]);
}
const ji = /* @__PURE__ */ x(Oi, [["render", xi]]), Ci = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ji
}, Symbol.toStringTag, { value: "Module" })), Pi = S({
  mixins: [ae],
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
const Ti = ["rows"];
function Ki(e, t, n, i, l, s) {
  const r = A("KFormFieldWrapper");
  return u(), N(r, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: z(() => [
      ne(k("textarea", Ue({
        "onUpdate:modelValue": t[0] || (t[0] = (a) => e.valueLocal = a)
      }, e.$attrs, {
        spellcheck: "false",
        class: [e.classObj, "k-textarea"],
        rows: e.rows,
        onKeydown: t[1] || (t[1] = fe(oe((...a) => e.tabber && e.tabber(...a), ["prevent"]), ["tab"]))
      }), null, 16, Ti), [
        [we, e.valueLocal]
      ])
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const Mi = /* @__PURE__ */ x(Pi, [["render", Ki]]), Ai = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Mi
}, Symbol.toStringTag, { value: "Module" })), Li = S({
  mixins: [ae],
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
const zi = ["placeholder"];
function Vi(e, t, n, i, l, s) {
  const r = A("KFormFieldWrapper");
  return u(), N(r, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: z(() => [
      ne(k("input", {
        "onUpdate:modelValue": t[0] || (t[0] = (a) => e.value = a),
        class: X(["k-input-text-field", e.classObj]),
        placeholder: e.placeholder
      }, null, 10, zi), [
        [we, e.value]
      ])
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const Bi = /* @__PURE__ */ x(Li, [["render", Vi]]), Fi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Bi
}, Symbol.toStringTag, { value: "Module" })), Ni = S({
  setup() {
    return {
      config: ee(me),
      session: ee(ie)
    };
  },
  mixins: [he],
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
      return L(this.userRec, "type", this.type);
    },
    url() {
      return this.userType === this.session.members.USER ? `${this.config.img}guy.gif` : this.userType === this.session.members.GROUP ? `${this.config.img}2-guys.gif` : this.userType > 0 ? `${this.config.img}projectgroup.gif` : null;
    }
  }
}), Ei = ["src"];
function Di(e, t, n, i, l, s) {
  return e.url ? (u(), p("img", {
    key: 0,
    src: e.url,
    style: se([e.measurableStyles])
  }, null, 12, Ei)) : M("", !0);
}
const Ui = /* @__PURE__ */ x(Ni, [["render", Di]]), Ri = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ui
}, Symbol.toStringTag, { value: "Module" })), ce = new xe();
function Ii(e) {
  const t = e.results.data.properties;
  return {
    name: t.name,
    userid: t.id,
    displayname: t.name_formatted,
    gif: null,
    type: t.type,
    isDeleted: t.deleted,
    firstName: t.first_name,
    lastName: t.last_name,
    email: t.business_email,
    groupid: t.group_id,
    title: t.title,
    isUser: t.type === 0,
    isGroup: t.type === 1,
    isRole: t.type >= 2e3,
    isRecordsManager: !1,
    canLogin: t.privilege_login,
    isAdmin: t.privilege_system_admin_rights,
    locale: t.display_language,
    userdata: null,
    photoid: null
  };
}
class Wi {
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
class qi {
  users;
  userLookupQueue;
  constructor() {
    this.users = {}, this.userLookupQueue = new Wi();
  }
  registerUsers(t) {
    t.forEach((n) => this.users[n.userid] = n);
  }
  async lookupLegacy(t, n) {
    if (n)
      try {
        if (await ce.acquire(n), this.users[n])
          return this.users[n];
        {
          const i = await t.members.member(n), l = Ii(i.data);
          return this.users[n] = l, l;
        }
      } finally {
        ce.release(n);
      }
    else
      return null;
  }
  async lookupRPC(t, n) {
    return n ? (await ce.acquire(n), this.users[n] ? (ce.release(n), this.users[n]) : new Promise((i) => {
      const l = (s) => {
        this.users[n] = s, i(s), ce.release(n);
      };
      this.userLookupQueue.queue(t, l, n);
    })) : null;
  }
  async lookup(t, n, i = !1) {
    return i ? this.lookupLegacy(t, n) : this.lookupRPC(t, n);
  }
}
const gt = new qi(), Hi = S({
  setup() {
    return { session: ee(ie) };
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
    },
    legacy: {
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
      return L(this.userRecLocal, "id") ?? L(this.userRecLocal, "userid");
    },
    // userLocal() {
    //   return this.user ?? this.userid ?? this.userRec
    // },
    displayName() {
      return L(this.userRecLocal, "display_name") ?? L(this.userRecLocal, "displayname") ?? L(this.userRecLocal, "name");
    },
    type() {
      return L(this.userRecLocal, "type");
    }
  },
  watch: {
    user: {
      async handler(e) {
        this.isInteger(e) ? this.userRecLocal = await gt.lookup(
          this.session,
          e,
          this.legacy
        ) : this.userRecLocal = e;
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
const Gi = {
  key: 0,
  class: "k-user-link"
};
function Qi(e, t, n, i, l, s) {
  const r = A("KUserGIF");
  return e.userRecLocal ? (u(), p("span", Gi, [
    e.gif ? (u(), N(r, {
      key: 0,
      "user-rec": e.userRecLocal
    }, null, 8, ["user-rec"])) : M("", !0),
    Q("   "),
    k("a", {
      href: "#",
      onClick: t[0] || (t[0] = oe((...a) => e.click && e.click(...a), ["prevent"]))
    }, B(e.displayName), 1)
  ])) : M("", !0);
}
const Yi = /* @__PURE__ */ x(Hi, [["render", Qi]]), Xi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Yi
}, Symbol.toStringTag, { value: "Module" })), Ji = S({
  mixins: [ae],
  setup() {
    return { session: ee(ie) };
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
          text: L(n, "name_formatted"),
          value: L(n, "id"),
          type: L(n, "type")
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
          const t = await gt.lookup(
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
const Zi = { class: "flex items-center gap-1" };
function el(e, t, n, i, l, s) {
  const r = A("KUserGIF"), a = A("KAutocomplete"), d = A("KUserLink"), o = A("KFormFieldWrapper");
  return u(), N(o, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: z(() => [
      e.editable ? (u(), N(a, {
        key: 0,
        modelValue: e.valueLocal,
        "onUpdate:modelValue": t[0] || (t[0] = (f) => e.valueLocal = f),
        "search-input": e.searchText,
        "onUpdate:searchInput": t[1] || (t[1] = (f) => e.searchText = f),
        class: "k-user-picker",
        placeholder: e.placeholder,
        width: e.width,
        loading: e.loading,
        items: e.items,
        "return-object": e.returnObject,
        combobox: !1
      }, {
        prepend: z(({ item: f }) => [
          f ? (u(), N(r, {
            key: 0,
            type: f.type
          }, null, 8, ["type"])) : (u(), N(r, {
            key: 1,
            type: e.USER
          }, null, 8, ["type"]))
        ]),
        item: z(({ item: f }) => [
          k("div", Zi, [
            U(r, {
              type: f.type
            }, null, 8, ["type"]),
            Q(" " + B(f.text), 1)
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "search-input", "placeholder", "width", "loading", "items", "return-object"])) : (u(), N(d, {
        key: 1,
        user: e.modelValue,
        gif: ""
      }, null, 8, ["user"]))
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const ht = /* @__PURE__ */ x(Ji, [["render", el]]), tl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ht
}, Symbol.toStringTag, { value: "Module" })), nl = S({
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
const rl = { class: "k-tabs" }, ol = { class: "k-tabs-nav" }, sl = ["href", "onClick"], il = { class: "k-tabs-content" };
function ll(e, t, n, i, l, s) {
  return u(), p("div", rl, [
    k("div", ol, [
      (u(!0), p(q, null, Z(e.tabs, (r) => (u(), p("div", {
        key: r.name,
        class: X(e.classObj(r))
      }, [
        k("a", {
          href: `#${r.name}`,
          onClick: (a) => e.selectTab(r.name)
        }, B(r.title), 9, sl)
      ], 2))), 128))
    ]),
    k("div", il, [
      F(e.$slots, "default")
    ])
  ]);
}
const al = /* @__PURE__ */ x(nl, [["render", ll]]), ul = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: al
}, Symbol.toStringTag, { value: "Module" })), dl = S({
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
      return this.name == L(this.tabs, "selectedTab");
    }
  }
}), cl = { key: 0 };
function pl(e, t, n, i, l, s) {
  return e.isSelected ? (u(), p("div", cl, [
    F(e.$slots, "default")
  ])) : M("", !0);
}
const fl = /* @__PURE__ */ x(dl, [["render", pl]]), ml = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fl
}, Symbol.toStringTag, { value: "Module" })), gl = S({
  extends: ht,
  setup() {
    return { session: ee(ie) };
  },
  methods: {
    async loadInitialValue() {
      const e = this.modelValue;
      if (e)
        try {
          this.pleaseWait = !0, this.readonly = !0, this.loading = !0;
          const t = await this.session.members.member(
            e,
            "v1"
          ), n = L(t, "data.data.first_name"), i = L(t, "data.data.last_name"), l = L(t, "data.data.name"), s = `${n} ${i} (${l})`;
          this.items = [
            {
              text: s,
              value: L(t, "data.data.id"),
              type: L(t, "data.data.type")
            }
          ], this.select = s;
        } finally {
          this.pleaseWait = !1, this.readonly = !1, this.loading = !1;
        }
    }
  }
}), hl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: gl
}, Symbol.toStringTag, { value: "Module" }));
function pe(e) {
  return (t, n = {}) => new Promise((i) => {
    window.csui.require(
      ["csui/dialogs/modal.alert/modal.alert"],
      function(l) {
        l[e](i, t, null, n);
      }
    );
  });
}
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
const jl = () => ({
  showSuccess: pe("showSuccess"),
  showInformation: pe("showInformation"),
  showWarning: pe("showWarning"),
  showError: pe("showError"),
  showMessage: pe("showMessage"),
  confirmSuccess: ue("confirmSuccess"),
  confirmInformation: ue("confirmInformation"),
  confirmWarning: ue("confirmWarning"),
  confirmError: ue("confirmError"),
  confirmQuestion: ue("confirmQuestion"),
  confirmMessage: ue("confirmMessage")
}), Cl = (e, t) => {
  const n = t.sortKey, l = t.sortAsc ? 1 : -1;
  return [...e].sort((s, r) => {
    if (n) {
      const a = String(L(s, n, "") ?? ""), d = String(L(r, n, "") ?? "");
      return l * a.toLowerCase().localeCompare(d.toLowerCase());
    } else
      return 0;
  });
}, _l = /* @__PURE__ */ Object.assign({
  "./components/Card/KCard.vue": Pt,
  "./components/Card/KCardActions.vue": Lt,
  "./components/Card/KCardText.vue": Nt,
  "./components/Card/KCardTitle.vue": It,
  "./components/KAdminLink.vue": Xt,
  "./components/KAlert.vue": cn,
  "./components/KApp.vue": hn,
  "./components/KAutocomplete.vue": Sn,
  "./components/KBrowseLink.vue": Fn,
  "./components/KButton.vue": Rn,
  "./components/KConfirm.vue": Hn,
  "./components/KDateTimePicker.vue": Zn,
  "./components/KDialog.vue": rr,
  "./components/KDot.vue": lr,
  "./components/KFormFieldWrapper.vue": pr,
  "./components/KFunctionMenu.vue": vr,
  "./components/KLinearProgressIndicator.vue": Or,
  "./components/KList/KList.vue": Tr,
  "./components/KList/KListItem.vue": Er,
  "./components/KList/KListItemSubtitle.vue": Fr,
  "./components/KList/KListItemTitle.vue": Lr,
  "./components/KMenu/KMenu.vue": Wr,
  "./components/KMenu/KRightCaret.vue": Jr,
  "./components/KMulti.vue": io,
  "./components/KMulti2.vue": fo,
  "./components/KMultiUserPicker.vue": _o,
  "./components/KNodeAncestor.vue": ko,
  "./components/KNodePickerField.vue": Co,
  "./components/KOneMoment.vue": Lo,
  "./components/KPageDropZone.vue": Fo,
  "./components/KPageTitle.vue": Wo,
  "./components/KPagination.vue": is,
  "./components/KPagination2.vue": _s,
  "./components/KPleaseWait.vue": js,
  "./components/KRadioGroup.vue": As,
  "./components/KScratch.vue": Bs,
  "./components/KSelect.vue": Is,
  "./components/KSmartUIPanel.vue": Js,
  "./components/KSnackbar.vue": ai,
  "./components/KSortHeader.vue": mi,
  "./components/KSpacer.vue": yi,
  "./components/KSpinner.vue": ks,
  "./components/KSwitch.vue": Si,
  "./components/KTable.vue": Ci,
  "./components/KTextArea.vue": Ai,
  "./components/KTextField.vue": Fi,
  "./components/KUserGIF.vue": Ri,
  "./components/KUserLink.vue": Xi,
  "./components/KUserPicker.vue": tl,
  "./components/KUserPickerLegacy.vue": hl,
  "./components/Tabs/KTabItem.vue": ml,
  "./components/Tabs/KTabs.vue": ul
});
let $e;
const Pl = {
  install(e, t) {
    Object.entries(_l).forEach(
      ([i, l]) => {
        const s = i?.split("/")?.pop()?.replace(/\.\w+$/, "");
        e.component(s, l.default);
      }
    ), $e = new jt(t);
    const n = {
      userId: t.userId,
      img: t.img,
      baseUrl: t.baseUrl,
      jsLongDateFormat: t.datelong,
      jsShortDateFormat: t.dateshort
    };
    e.provide(ie, $e), e.provide(me, n);
  }
}, Tl = () => $e;
export {
  me as configKey,
  xn as confirmDialogKey,
  Pl as default,
  Cl as generalSort,
  ee as injectStrict,
  Tn as nodeLookup,
  ie as sessionKey,
  On as snackbarKey,
  Tl as useSession,
  jl as useSmartUI,
  gt as userLookup
};
