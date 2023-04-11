import { defineComponent as j, h as ut, openBlock as u, createElementBlock as f, renderSlot as U, inject as Fe, Fragment as I, createElementVNode as k, normalizeStyle as se, resolveComponent as V, createVNode as E, withCtx as z, resolveDirective as Be, withDirectives as ne, normalizeClass as J, withKeys as le, withModifiers as re, vModelText as ye, renderList as Z, createTextVNode as H, toDisplayString as F, createCommentVNode as M, createBlock as N, mergeProps as Ne, vModelDynamic as dt, Teleport as ct, Transition as ue, setBlockTracking as Pe, TransitionGroup as ve, vModelRadio as pt, vModelSelect as ft, useCssVars as De } from "vue";
import A from "lodash.get";
import { directive as Ee } from "vue3-click-away";
import $e from "@chriscdn/promise-semaphore";
import { format as Ke } from "date-fns";
import { disableBodyScroll as mt, enableBodyScroll as gt } from "body-scroll-lock";
import ht from "build-url";
import _t from "js-cookie";
import { Session as bt } from "@kweli/cs-rest";
const yt = {
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
}, de = j({
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
      const e = {}, t = X(this.height), n = X(this.minHeight), i = X(this.minWidth), l = X(this.maxHeight), r = X(this.maxWidth), s = X(this.width);
      return t && (e.height = t), n && (e.minHeight = n), i && (e.minWidth = i), l && (e.maxHeight = l), r && (e.maxWidth = r), s && (e.width = s), e;
    }
  }
}), vt = j({
  mixins: [de, yt],
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
      return ut(
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
const $t = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vt
}, Symbol.toStringTag, { value: "Module" })), kt = j({});
const K = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, l] of t)
    n[i] = l;
  return n;
}, wt = { class: "k-card-actions" };
function St(e, t, n, i, l, r) {
  return u(), f("div", wt, [
    U(e.$slots, "default")
  ]);
}
const Ot = /* @__PURE__ */ K(kt, [["render", St]]), xt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ot
}, Symbol.toStringTag, { value: "Module" })), Tt = j({});
const jt = { class: "k-card-text" };
function Ct(e, t, n, i, l, r) {
  return u(), f("div", jt, [
    U(e.$slots, "default")
  ]);
}
const Pt = /* @__PURE__ */ K(Tt, [["render", Ct]]), Kt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pt
}, Symbol.toStringTag, { value: "Module" })), At = j({});
const Mt = { class: "k-card-title" };
function Vt(e, t, n, i, l, r) {
  return u(), f("div", Mt, [
    U(e.$slots, "default")
  ]);
}
const zt = /* @__PURE__ */ K(At, [["render", Vt]]), Lt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zt
}, Symbol.toStringTag, { value: "Module" })), Ft = j({
  setup() {
    return { config: Fe("config", {}) };
  }
}), Bt = /* @__PURE__ */ k("hr", null, null, -1), Nt = ["href"];
function Dt(e, t, n, i, l, r) {
  return u(), f(I, null, [
    Bt,
    k("a", {
      href: `${e.config.baseURL}?func=admin.index`
    }, "Admin Home", 8, Nt)
  ], 64);
}
const Et = /* @__PURE__ */ K(Ft, [["render", Dt]]), Ut = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Et
}, Symbol.toStringTag, { value: "Module" }));
var Ue = {}, Re = {}, ke = {};
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
})(ke);
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
      ...new Set(i.filter((r) => n !== !1 && n[r] !== !1).concat(Object.keys(n).filter((r) => n[r] !== !1)))
    ];
  }
})(We);
var qe = {}, ce = {}, ae = {}, Rt = {
  get exports() {
    return ae;
  },
  set exports(e) {
    ae = e;
  }
}, D = String, He = function() {
  return { isColorSupported: !1, reset: D, bold: D, dim: D, italic: D, underline: D, inverse: D, hidden: D, strikethrough: D, black: D, red: D, green: D, yellow: D, blue: D, magenta: D, cyan: D, white: D, gray: D, bgBlack: D, bgRed: D, bgGreen: D, bgYellow: D, bgBlue: D, bgMagenta: D, bgCyan: D, bgWhite: D };
};
Rt.exports = He();
ae.createColors = He;
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(o, d) {
    for (var p in d)
      Object.defineProperty(o, p, {
        enumerable: !0,
        get: d[p]
      });
  }
  t(e, {
    dim: () => s,
    default: () => a
  });
  const n = /* @__PURE__ */ i(ae);
  function i(o) {
    return o && o.__esModule ? o : {
      default: o
    };
  }
  let l = /* @__PURE__ */ new Set();
  function r(o, d, p) {
    typeof process < "u" && process.env.JEST_WORKER_ID || p && l.has(p) || (p && l.add(p), console.warn(""), d.forEach((b) => console.warn(o, "-", b)));
  }
  function s(o) {
    return n.default.dim(o);
  }
  const a = {
    info(o, d) {
      r(n.default.bold(n.default.cyan("info")), ...Array.isArray(o) ? [
        o
      ] : [
        d,
        o
      ]);
    },
    warn(o, d) {
      r(n.default.bold(n.default.yellow("warn")), ...Array.isArray(o) ? [
        o
      ] : [
        d,
        o
      ]);
    },
    risk(o, d) {
      r(n.default.bold(n.default.magenta("risk")), ...Array.isArray(o) ? [
        o
      ] : [
        d,
        o
      ]);
    }
  };
})(ce);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: () => l
  });
  const t = /* @__PURE__ */ n(ce);
  function n(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  function i({ version: r, from: s, to: a }) {
    t.default.warn(`${s}-color-renamed`, [
      `As of Tailwind CSS ${r}, \`${s}\` has been renamed to \`${a}\`.`,
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
      900: "#0f172a"
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
      900: "#111827"
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
      900: "#18181b"
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
      900: "#171717"
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
      900: "#1c1917"
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
      900: "#7f1d1d"
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
      900: "#7c2d12"
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
      900: "#78350f"
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
      900: "#713f12"
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
      900: "#365314"
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
      900: "#14532d"
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
      900: "#064e3b"
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
      900: "#134e4a"
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
      900: "#164e63"
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
      900: "#0c4a6e"
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
      900: "#1e3a8a"
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
      900: "#312e81"
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
      900: "#4c1d95"
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
      900: "#581c87"
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
      900: "#701a75"
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
      900: "#831843"
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
      900: "#881337"
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
    for (let s of i) {
      for (let a in s) {
        var l;
        !(n == null || (l = n.hasOwnProperty) === null || l === void 0) && l.call(n, a) || (n[a] = s[a]);
      }
      for (let a of Object.getOwnPropertySymbols(s)) {
        var r;
        !(n == null || (r = n.hasOwnProperty) === null || r === void 0) && r.call(n, a) || (n[a] = s[a]);
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
var Ye = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "normalizeConfig", {
    enumerable: !0,
    get: () => l
  });
  const t = /* @__PURE__ */ i(ce);
  function n(r) {
    if (typeof WeakMap != "function")
      return null;
    var s = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap();
    return (n = function(o) {
      return o ? a : s;
    })(r);
  }
  function i(r, s) {
    if (!s && r && r.__esModule)
      return r;
    if (r === null || typeof r != "object" && typeof r != "function")
      return {
        default: r
      };
    var a = n(s);
    if (a && a.has(r))
      return a.get(r);
    var o = {}, d = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var p in r)
      if (p !== "default" && Object.prototype.hasOwnProperty.call(r, p)) {
        var b = d ? Object.getOwnPropertyDescriptor(r, p) : null;
        b && (b.get || b.set) ? Object.defineProperty(o, p, b) : o[p] = r[p];
      }
    return o.default = r, a && a.set(r, o), o;
  }
  function l(r) {
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
    })() || t.default.warn("purge-deprecation", [
      "The `purge`/`content` options have changed in Tailwind CSS v3.0.",
      "Update your configuration file to eliminate this warning.",
      "https://tailwindcss.com/docs/upgrade-guide#configure-content-sources"
    ]), r.safelist = (() => {
      var o;
      let { content: d, purge: p, safelist: b } = r;
      return Array.isArray(b) ? b : Array.isArray(d?.safelist) ? d.safelist : Array.isArray(p?.safelist) ? p.safelist : Array.isArray(p == null || (o = p.options) === null || o === void 0 ? void 0 : o.safelist) ? p.options.safelist : [];
    })(), r.blocklist = (() => {
      let { blocklist: o } = r;
      if (Array.isArray(o)) {
        if (o.every((d) => typeof d == "string"))
          return o;
        t.default.warn("blocklist-invalid", [
          "The `blocklist` option must be an array of strings.",
          "https://tailwindcss.com/docs/content-configuration#discarding-classes"
        ]);
      }
      return [];
    })(), typeof r.prefix == "function")
      t.default.warn("prefix-function", [
        "As of Tailwind CSS v3.0, `prefix` cannot be a function.",
        "Update `prefix` in your configuration to be a string to eliminate this warning.",
        "https://tailwindcss.com/docs/upgrade-guide#prefix-cannot-be-a-function"
      ]), r.prefix = "";
    else {
      var a;
      r.prefix = (a = r.prefix) !== null && a !== void 0 ? a : "";
    }
    r.content = {
      relative: (() => {
        var o;
        let { content: d } = r;
        if (d?.relative)
          return d.relative;
        var p;
        return (p = (o = r.future) === null || o === void 0 ? void 0 : o.relativeContentPathsByDefault) !== null && p !== void 0 ? p : !1;
      })(),
      files: (() => {
        let { content: o, purge: d } = r;
        return Array.isArray(d) ? d : Array.isArray(d?.content) ? d.content : Array.isArray(o) ? o : Array.isArray(o?.content) ? o.content : Array.isArray(o?.files) ? o.files : [];
      })(),
      extract: (() => {
        let o = (() => {
          var b, v, S, y, P, B, R, L, G, q;
          return !((b = r.purge) === null || b === void 0) && b.extract ? r.purge.extract : !((v = r.content) === null || v === void 0) && v.extract ? r.content.extract : !((S = r.purge) === null || S === void 0 || (y = S.extract) === null || y === void 0) && y.DEFAULT ? r.purge.extract.DEFAULT : !((P = r.content) === null || P === void 0 || (B = P.extract) === null || B === void 0) && B.DEFAULT ? r.content.extract.DEFAULT : !((R = r.purge) === null || R === void 0 || (L = R.options) === null || L === void 0) && L.extractors ? r.purge.options.extractors : !((G = r.content) === null || G === void 0 || (q = G.options) === null || q === void 0) && q.extractors ? r.content.options.extractors : {};
        })(), d = {}, p = (() => {
          var b, v, S, y;
          if (!((b = r.purge) === null || b === void 0 || (v = b.options) === null || v === void 0) && v.defaultExtractor)
            return r.purge.options.defaultExtractor;
          if (!((S = r.content) === null || S === void 0 || (y = S.options) === null || y === void 0) && y.defaultExtractor)
            return r.content.options.defaultExtractor;
        })();
        if (p !== void 0 && (d.DEFAULT = p), typeof o == "function")
          d.DEFAULT = o;
        else if (Array.isArray(o))
          for (let { extensions: b, extractor: v } of o ?? [])
            for (let S of b)
              d[S] = v;
        else
          typeof o == "object" && o !== null && Object.assign(d, o);
        return d;
      })(),
      transform: (() => {
        let o = (() => {
          var p, b, v, S, y, P;
          return !((p = r.purge) === null || p === void 0) && p.transform ? r.purge.transform : !((b = r.content) === null || b === void 0) && b.transform ? r.content.transform : !((v = r.purge) === null || v === void 0 || (S = v.transform) === null || S === void 0) && S.DEFAULT ? r.purge.transform.DEFAULT : !((y = r.content) === null || y === void 0 || (P = y.transform) === null || P === void 0) && P.DEFAULT ? r.content.transform.DEFAULT : {};
        })(), d = {};
        return typeof o == "function" && (d.DEFAULT = o), typeof o == "object" && o !== null && Object.assign(d, o), d;
      })()
    };
    for (let o of r.content.files)
      if (typeof o == "string" && /{([^,]*?)}/g.test(o)) {
        t.default.warn("invalid-glob-braces", [
          `The glob pattern ${(0, t.dim)(o)} in your Tailwind CSS configuration is invalid.`,
          `Update it to ${(0, t.dim)(o.replace(/{([^,]*?)}/g, "$1"))} to silence this warning.`
        ]);
        break;
      }
    return r;
  }
})(Ye);
var Xe = {};
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
})(Xe);
var Je = {};
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
})(Je);
var Ze = {}, et = {};
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
})(et);
var we = {}, Se = {}, It = {
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
  function t(y, P) {
    for (var B in P)
      Object.defineProperty(y, B, {
        enumerable: !0,
        get: P[B]
      });
  }
  t(e, {
    parseColor: () => v,
    formatColor: () => S
  });
  const n = /* @__PURE__ */ i(It);
  function i(y) {
    return y && y.__esModule ? y : {
      default: y
    };
  }
  let l = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i, r = /^#([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i, s = /(?:\d+|\d*\.\d+)%?/, a = /(?:\s*,\s*|\s+)/, o = /\s*[,/]\s*/, d = /var\(--(?:[^ )]*?)\)/, p = new RegExp(`^(rgba?)\\(\\s*(${s.source}|${d.source})(?:${a.source}(${s.source}|${d.source}))?(?:${a.source}(${s.source}|${d.source}))?(?:${o.source}(${s.source}|${d.source}))?\\s*\\)$`), b = new RegExp(`^(hsla?)\\(\\s*((?:${s.source})(?:deg|rad|grad|turn)?|${d.source})(?:${a.source}(${s.source}|${d.source}))?(?:${a.source}(${s.source}|${d.source}))?(?:${o.source}(${s.source}|${d.source}))?\\s*\\)$`);
  function v(y, { loose: P = !1 } = {}) {
    var B, R;
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
        color: n.default[y].map((Q) => Q.toString())
      };
    let L = y.replace(r, (Q, te, h, T, $) => [
      "#",
      te,
      te,
      h,
      h,
      T,
      T,
      $ ? $ + $ : ""
    ].join("")).match(l);
    if (L !== null)
      return {
        mode: "rgb",
        color: [
          parseInt(L[1], 16),
          parseInt(L[2], 16),
          parseInt(L[3], 16)
        ].map((Q) => Q.toString()),
        alpha: L[4] ? (parseInt(L[4], 16) / 255).toString() : void 0
      };
    var G;
    let q = (G = y.match(p)) !== null && G !== void 0 ? G : y.match(b);
    if (q === null)
      return null;
    let Y = [
      q[2],
      q[3],
      q[4]
    ].filter(Boolean).map((Q) => Q.toString());
    return Y.length === 2 && Y[0].startsWith("var(") ? {
      mode: q[1],
      color: [
        Y[0]
      ],
      alpha: Y[1]
    } : !P && Y.length !== 3 || Y.length < 3 && !Y.some((Q) => /^var\(.*?\)$/.test(Q)) ? null : {
      mode: q[1],
      color: Y,
      alpha: (B = q[5]) === null || B === void 0 || (R = B.toString) === null || R === void 0 ? void 0 : R.call(B)
    };
  }
  function S({ mode: y, color: P, alpha: B }) {
    let R = B !== void 0;
    return y === "rgba" || y === "hsla" ? `${y}(${P.join(", ")}${R ? `, ${B}` : ""})` : `${y}(${P.join(" ")}${R ? ` / ${B}` : ""})`;
  }
})(Se);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(r, s) {
    for (var a in s)
      Object.defineProperty(r, a, {
        enumerable: !0,
        get: s[a]
      });
  }
  t(e, {
    withAlphaValue: () => i,
    default: () => l
  });
  const n = Se;
  function i(r, s, a) {
    if (typeof r == "function")
      return r({
        opacityValue: s
      });
    let o = (0, n.parseColor)(r, {
      loose: !0
    });
    return o === null ? a : (0, n.formatColor)({
      ...o,
      alpha: s
    });
  }
  function l({ color: r, property: s, variable: a }) {
    let o = [].concat(s);
    if (typeof r == "function")
      return {
        [a]: "1",
        ...Object.fromEntries(o.map((p) => [
          p,
          r({
            opacityVariable: a,
            opacityValue: `var(${a})`
          })
        ]))
      };
    const d = (0, n.parseColor)(r);
    return d === null ? Object.fromEntries(o.map((p) => [
      p,
      r
    ])) : d.alpha !== void 0 ? Object.fromEntries(o.map((p) => [
      p,
      r
    ])) : {
      [a]: "1",
      ...Object.fromEntries(o.map((p) => [
        p,
        (0, n.formatColor)({
          ...d,
          alpha: `var(${a})`
        })
      ]))
    };
  }
})(we);
var Oe = {}, tt = {}, pe = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "splitAtTopLevelOnly", {
    enumerable: !0,
    get: () => t
  });
  function t(n, i) {
    let l = [], r = [], s = 0;
    for (let a = 0; a < n.length; a++) {
      let o = n[a];
      l.length === 0 && o === i[0] && (i.length === 1 || n.slice(a, a + i.length) === i) && (r.push(n.slice(s, a)), s = a + i.length), o === "(" || o === "[" || o === "{" ? l.push(o) : (o === ")" && l[l.length - 1] === "(" || o === "]" && l[l.length - 1] === "[" || o === "}" && l[l.length - 1] === "{") && l.pop();
    }
    return r.push(n.slice(s)), r;
  }
})(pe);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(o, d) {
    for (var p in d)
      Object.defineProperty(o, p, {
        enumerable: !0,
        get: d[p]
      });
  }
  t(e, {
    parseBoxShadowValue: () => s,
    formatBoxShadowValue: () => a
  });
  const n = pe;
  let i = /* @__PURE__ */ new Set([
    "inset",
    "inherit",
    "initial",
    "revert",
    "unset"
  ]), l = /\ +(?![^(]*\))/g, r = /^-?(\d+|\.\d+)(.*?)$/g;
  function s(o) {
    return (0, n.splitAtTopLevelOnly)(o, ",").map((p) => {
      let b = p.trim(), v = {
        raw: b
      }, S = b.split(l), y = /* @__PURE__ */ new Set();
      for (let P of S)
        r.lastIndex = 0, !y.has("KEYWORD") && i.has(P) ? (v.keyword = P, y.add("KEYWORD")) : r.test(P) ? y.has("X") ? y.has("Y") ? y.has("BLUR") ? y.has("SPREAD") || (v.spread = P, y.add("SPREAD")) : (v.blur = P, y.add("BLUR")) : (v.y = P, y.add("Y")) : (v.x = P, y.add("X")) : v.color ? (v.unknown || (v.unknown = []), v.unknown.push(P)) : v.color = P;
      return v.valid = v.x !== void 0 && v.y !== void 0, v;
    });
  }
  function a(o) {
    return o.map((d) => d.valid ? [
      d.keyword,
      d.x,
      d.y,
      d.blur,
      d.spread,
      d.color
    ].filter(Boolean).join(" ") : d.raw).join(", ");
  }
})(tt);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(c, x) {
    for (var O in x)
      Object.defineProperty(c, O, {
        enumerable: !0,
        get: x[O]
      });
  }
  t(e, {
    normalize: () => d,
    url: () => p,
    number: () => b,
    percentage: () => v,
    length: () => P,
    lineWidth: () => R,
    shadow: () => L,
    color: () => G,
    image: () => q,
    gradient: () => Q,
    position: () => h,
    familyName: () => T,
    genericName: () => W,
    absoluteSize: () => _,
    relativeSize: () => w
  });
  const n = Se, i = tt, l = pe;
  let r = [
    "min",
    "max",
    "clamp",
    "calc"
  ];
  function s(c) {
    return r.some((x) => new RegExp(`^${x}\\(.*\\)`).test(c));
  }
  const a = "--tw-placeholder", o = new RegExp(a, "g");
  function d(c, x = !0) {
    return c.includes("url(") ? c.split(/(url\(.*?\))/g).filter(Boolean).map((O) => /^url\(.*?\)$/.test(O) ? O : d(O, !1)).join("") : (c = c.replace(/([^\\])_+/g, (O, C) => C + " ".repeat(O.length - 1)).replace(/^_/g, " ").replace(/\\_/g, "_"), x && (c = c.trim()), c = c.replace(/(calc|min|max|clamp)\(.+\)/g, (O) => {
      let C = [];
      return O.replace(/var\((--.+?)[,)]/g, (me, Ce) => (C.push(Ce), me.replace(Ce, a))).replace(/(-?\d*\.?\d(?!\b-\d.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g, "$1 $2 ").replace(o, () => C.shift());
    }), c);
  }
  function p(c) {
    return c.startsWith("url(");
  }
  function b(c) {
    return !isNaN(Number(c)) || s(c);
  }
  function v(c) {
    return c.endsWith("%") && b(c.slice(0, -1)) || s(c);
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
  function P(c) {
    return c === "0" || new RegExp(`^[+-]?[0-9]*.?[0-9]+(?:[eE][+-]?[0-9]+)?${y}$`).test(c) || s(c);
  }
  let B = /* @__PURE__ */ new Set([
    "thin",
    "medium",
    "thick"
  ]);
  function R(c) {
    return B.has(c);
  }
  function L(c) {
    let x = (0, i.parseBoxShadowValue)(d(c));
    for (let O of x)
      if (!O.valid)
        return !1;
    return !0;
  }
  function G(c) {
    let x = 0;
    return (0, l.splitAtTopLevelOnly)(c, "_").every((C) => (C = d(C), C.startsWith("var(") ? !0 : (0, n.parseColor)(C, {
      loose: !0
    }) !== null ? (x++, !0) : !1)) ? x > 0 : !1;
  }
  function q(c) {
    let x = 0;
    return (0, l.splitAtTopLevelOnly)(c, ",").every((C) => (C = d(C), C.startsWith("var(") ? !0 : p(C) || Q(C) || [
      "element(",
      "image(",
      "cross-fade(",
      "image-set("
    ].some((me) => C.startsWith(me)) ? (x++, !0) : !1)) ? x > 0 : !1;
  }
  let Y = /* @__PURE__ */ new Set([
    "linear-gradient",
    "radial-gradient",
    "repeating-linear-gradient",
    "repeating-radial-gradient",
    "conic-gradient"
  ]);
  function Q(c) {
    c = d(c);
    for (let x of Y)
      if (c.startsWith(`${x}(`))
        return !0;
    return !1;
  }
  let te = /* @__PURE__ */ new Set([
    "center",
    "top",
    "right",
    "bottom",
    "left"
  ]);
  function h(c) {
    let x = 0;
    return (0, l.splitAtTopLevelOnly)(c, "_").every((C) => (C = d(C), C.startsWith("var(") ? !0 : te.has(C) || P(C) || v(C) ? (x++, !0) : !1)) ? x > 0 : !1;
  }
  function T(c) {
    let x = 0;
    return (0, l.splitAtTopLevelOnly)(c, ",").every((C) => (C = d(C), C.startsWith("var(") ? !0 : C.includes(" ") && !/(['"])([^"']+)\1/g.test(C) || /^\d/g.test(C) ? !1 : (x++, !0))) ? x > 0 : !1;
  }
  let $ = /* @__PURE__ */ new Set([
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
  function W(c) {
    return $.has(c);
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
  function _(c) {
    return m.has(c);
  }
  let g = /* @__PURE__ */ new Set([
    "larger",
    "smaller"
  ]);
  function w(c) {
    return g.has(c);
  }
})(Oe);
var rt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "backgroundSize", {
    enumerable: !0,
    get: () => i
  });
  const t = Oe, n = pe;
  function i(l) {
    let r = [
      "cover",
      "contain"
    ];
    return (0, n.splitAtTopLevelOnly)(l, ",").every((s) => {
      let a = (0, n.splitAtTopLevelOnly)(s, "_").filter(Boolean);
      return a.length === 1 && r.includes(a[0]) ? !0 : a.length !== 1 && a.length !== 2 ? !1 : a.every((o) => (0, t.length)(o) || (0, t.percentage)(o) || o === "auto");
    });
  }
})(rt);
var xe = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(b, v) {
    for (var S in v)
      Object.defineProperty(b, S, {
        enumerable: !0,
        get: v[S]
      });
  }
  t(e, {
    flagEnabled: () => a,
    issueFlagNotices: () => d,
    default: () => p
  });
  const n = /* @__PURE__ */ l(ae), i = /* @__PURE__ */ l(ce);
  function l(b) {
    return b && b.__esModule ? b : {
      default: b
    };
  }
  let r = {
    optimizeUniversalDefaults: !1,
    generalizedModifiers: !0
  }, s = {
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
  function a(b, v) {
    if (s.future.includes(v)) {
      var S, y, P;
      return b.future === "all" || ((P = (y = b == null || (S = b.future) === null || S === void 0 ? void 0 : S[v]) !== null && y !== void 0 ? y : r[v]) !== null && P !== void 0 ? P : !1);
    }
    if (s.experimental.includes(v)) {
      var B, R, L;
      return b.experimental === "all" || ((L = (R = b == null || (B = b.experimental) === null || B === void 0 ? void 0 : B[v]) !== null && R !== void 0 ? R : r[v]) !== null && L !== void 0 ? L : !1);
    }
    return !1;
  }
  function o(b) {
    if (b.experimental === "all")
      return s.experimental;
    var v;
    return Object.keys((v = b?.experimental) !== null && v !== void 0 ? v : {}).filter((S) => s.experimental.includes(S) && b.experimental[S]);
  }
  function d(b) {
    if (process.env.JEST_WORKER_ID === void 0 && o(b).length > 0) {
      let v = o(b).map((S) => n.default.yellow(S)).join(", ");
      i.default.warn("experimental-flags-enabled", [
        `You have enabled experimental features: ${v}`,
        "Experimental features in Tailwind CSS are not covered by semver, may introduce breaking changes, and can change at any time."
      ]);
    }
  }
  const p = s;
})(xe);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(h, T) {
    for (var $ in T)
      Object.defineProperty(h, $, {
        enumerable: !0,
        get: T[$]
      });
  }
  t(e, {
    updateAllClasses: () => d,
    asValue: () => v,
    parseColorFormat: () => P,
    asColor: () => B,
    asLookupValue: () => R,
    typeMap: () => G,
    coerceValue: () => Q,
    getMatchingTypes: () => te
  });
  const n = /* @__PURE__ */ o(et), i = we, l = Oe, r = /* @__PURE__ */ o(ke), s = rt, a = xe;
  function o(h) {
    return h && h.__esModule ? h : {
      default: h
    };
  }
  function d(h, T) {
    h.walkClasses(($) => {
      $.value = T($.value), $.raws && $.raws.value && ($.raws.value = (0, n.default)($.raws.value));
    });
  }
  function p(h, T) {
    if (!S(h))
      return;
    let $ = h.slice(1, -1);
    if (T($))
      return (0, l.normalize)($);
  }
  function b(h, T = {}, $) {
    let W = T[h];
    if (W !== void 0)
      return (0, r.default)(W);
    if (S(h)) {
      let m = p(h, $);
      return m === void 0 ? void 0 : (0, r.default)(m);
    }
  }
  function v(h, T = {}, { validate: $ = () => !0 } = {}) {
    var W;
    let m = (W = T.values) === null || W === void 0 ? void 0 : W[h];
    return m !== void 0 ? m : T.supportsNegativeValues && h.startsWith("-") ? b(h.slice(1), T.values, $) : p(h, $);
  }
  function S(h) {
    return h.startsWith("[") && h.endsWith("]");
  }
  function y(h) {
    let T = h.lastIndexOf("/");
    return T === -1 || T === h.length - 1 ? [
      h,
      void 0
    ] : S(h) && !h.includes("]/[") ? [
      h,
      void 0
    ] : [
      h.slice(0, T),
      h.slice(T + 1)
    ];
  }
  function P(h) {
    if (typeof h == "string" && h.includes("<alpha-value>")) {
      let T = h;
      return ({ opacityValue: $ = 1 }) => T.replace("<alpha-value>", $);
    }
    return h;
  }
  function B(h, T = {}, { tailwindConfig: $ = {} } = {}) {
    var W;
    if (((W = T.values) === null || W === void 0 ? void 0 : W[h]) !== void 0) {
      var m;
      return P((m = T.values) === null || m === void 0 ? void 0 : m[h]);
    }
    let [_, g] = y(h);
    if (g !== void 0) {
      var w, c, x, O;
      let C = (O = (w = T.values) === null || w === void 0 ? void 0 : w[_]) !== null && O !== void 0 ? O : S(_) ? _.slice(1, -1) : void 0;
      return C === void 0 ? void 0 : (C = P(C), S(g) ? (0, i.withAlphaValue)(C, g.slice(1, -1)) : ((c = $.theme) === null || c === void 0 || (x = c.opacity) === null || x === void 0 ? void 0 : x[g]) === void 0 ? void 0 : (0, i.withAlphaValue)(C, $.theme.opacity[g]));
    }
    return v(h, T, {
      validate: l.color
    });
  }
  function R(h, T = {}) {
    var $;
    return ($ = T.values) === null || $ === void 0 ? void 0 : $[h];
  }
  function L(h) {
    return (T, $) => v(T, $, {
      validate: h
    });
  }
  let G = {
    any: v,
    color: B,
    url: L(l.url),
    image: L(l.image),
    length: L(l.length),
    percentage: L(l.percentage),
    position: L(l.position),
    lookup: R,
    "generic-name": L(l.genericName),
    "family-name": L(l.familyName),
    number: L(l.number),
    "line-width": L(l.lineWidth),
    "absolute-size": L(l.absoluteSize),
    "relative-size": L(l.relativeSize),
    shadow: L(l.shadow),
    size: L(s.backgroundSize)
  }, q = Object.keys(G);
  function Y(h, T) {
    let $ = h.indexOf(T);
    return $ === -1 ? [
      void 0,
      h
    ] : [
      h.slice(0, $),
      h.slice($ + 1)
    ];
  }
  function Q(h, T, $, W) {
    if ($.values && T in $.values)
      for (let { type: _ } of h ?? []) {
        let g = G[_](T, $, {
          tailwindConfig: W
        });
        if (g !== void 0)
          return [
            g,
            _,
            null
          ];
      }
    if (S(T)) {
      let _ = T.slice(1, -1), [g, w] = Y(_, ":");
      if (!/^[\w-_]+$/g.test(g))
        w = _;
      else if (g !== void 0 && !q.includes(g))
        return [];
      if (w.length > 0 && q.includes(g))
        return [
          v(`[${w}]`, $),
          g,
          null
        ];
    }
    let m = te(h, T, $, W);
    for (let _ of m)
      return _;
    return [];
  }
  function* te(h, T, $, W) {
    let m = (0, a.flagEnabled)(W, "generalizedModifiers"), [_, g] = y(T);
    if (m && $.modifiers != null && ($.modifiers === "any" || typeof $.modifiers == "object" && (g && S(g) || g in $.modifiers)) || (_ = T, g = void 0), g !== void 0 && _ === "" && (_ = "DEFAULT"), g !== void 0 && typeof $.modifiers == "object") {
      var c, x;
      let O = (x = (c = $.modifiers) === null || c === void 0 ? void 0 : c[g]) !== null && x !== void 0 ? x : null;
      O !== null ? g = O : S(g) && (g = g.slice(1, -1));
    }
    for (let { type: O } of h ?? []) {
      let C = G[O](_, $, {
        tailwindConfig: W
      });
      C !== void 0 && (yield [
        C,
        O,
        g ?? null
      ]);
    }
  }
})(Ze);
var nt = {};
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
})(nt);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: () => W
  });
  const t = /* @__PURE__ */ S(ke), n = /* @__PURE__ */ S(Ie), i = /* @__PURE__ */ S(We), l = /* @__PURE__ */ S(qe), r = Ge, s = Qe, a = Ye, o = /* @__PURE__ */ S(Xe), d = Je, p = Ze, b = we, v = /* @__PURE__ */ S(nt);
  function S(m) {
    return m && m.__esModule ? m : {
      default: m
    };
  }
  function y(m) {
    return typeof m == "function";
  }
  function P(m, ..._) {
    let g = _.pop();
    for (let w of _)
      for (let c in w) {
        let x = g(m[c], w[c]);
        x === void 0 ? (0, o.default)(m[c]) && (0, o.default)(w[c]) ? m[c] = P({}, m[c], w[c], g) : m[c] = w[c] : m[c] = x;
      }
    return m;
  }
  const B = {
    colors: l.default,
    negative(m) {
      return Object.keys(m).filter((_) => m[_] !== "0").reduce((_, g) => {
        let w = (0, t.default)(m[g]);
        return w !== void 0 && (_[`-${g}`] = w), _;
      }, {});
    },
    breakpoints(m) {
      return Object.keys(m).filter((_) => typeof m[_] == "string").reduce((_, g) => ({
        ..._,
        [`screen-${g}`]: m[g]
      }), {});
    }
  };
  function R(m, ..._) {
    return y(m) ? m(..._) : m;
  }
  function L(m) {
    return m.reduce((_, { extend: g }) => P(_, g, (w, c) => w === void 0 ? [
      c
    ] : Array.isArray(w) ? [
      c,
      ...w
    ] : [
      c,
      w
    ]), {});
  }
  function G(m) {
    return {
      ...m.reduce((_, g) => (0, r.defaults)(_, g), {}),
      // In order to resolve n config objects, we combine all of their `extend` properties
      // into arrays instead of objects so they aren't overridden.
      extend: L(m)
    };
  }
  function q(m, _) {
    if (Array.isArray(m) && (0, o.default)(m[0]))
      return m.concat(_);
    if (Array.isArray(_) && (0, o.default)(_[0]) && (0, o.default)(m))
      return [
        m,
        ..._
      ];
    if (Array.isArray(_))
      return _;
  }
  function Y({ extend: m, ..._ }) {
    return P(_, m, (g, w) => !y(g) && !w.some(y) ? P({}, g, ...w, q) : (c, x) => P({}, ...[
      g,
      ...w
    ].map((O) => R(O, c, x)), q));
  }
  function* Q(m) {
    let _ = (0, s.toPath)(m);
    if (_.length === 0 || (yield _, Array.isArray(m)))
      return;
    let g = /^(.*?)\s*\/\s*([^/]+)$/, w = m.match(g);
    if (w !== null) {
      let [, c, x] = w, O = (0, s.toPath)(c);
      O.alpha = x, yield O;
    }
  }
  function te(m) {
    const _ = (g, w) => {
      for (const c of Q(g)) {
        let x = 0, O = m;
        for (; O != null && x < c.length; )
          O = O[c[x++]], O = y(O) && (c.alpha === void 0 || x <= c.length - 1) ? O(_, B) : O;
        if (O !== void 0) {
          if (c.alpha !== void 0) {
            let C = (0, p.parseColorFormat)(O);
            return (0, b.withAlphaValue)(C, c.alpha, (0, v.default)(C));
          }
          return (0, o.default)(O) ? (0, d.cloneDeep)(O) : O;
        }
      }
      return w;
    };
    return Object.assign(_, {
      theme: _,
      ...B
    }), Object.keys(m).reduce((g, w) => (g[w] = y(m[w]) ? m[w](_, B) : m[w], g), {});
  }
  function h(m) {
    let _ = [];
    return m.forEach((g) => {
      _ = [
        ..._,
        g
      ];
      var w;
      const c = (w = g?.plugins) !== null && w !== void 0 ? w : [];
      c.length !== 0 && c.forEach((x) => {
        x.__isOptionsFunction && (x = x());
        var O;
        _ = [
          ..._,
          ...h([
            (O = x?.config) !== null && O !== void 0 ? O : {}
          ])
        ];
      });
    }), _;
  }
  function T(m) {
    return [
      ...m
    ].reduceRight((g, w) => y(w) ? w({
      corePlugins: g
    }) : (0, i.default)(w, g), n.default);
  }
  function $(m) {
    return [
      ...m
    ].reduceRight((g, w) => [
      ...g,
      ...w
    ], []);
  }
  function W(m) {
    let _ = [
      ...h(m),
      {
        prefix: "",
        important: !1,
        separator: ":"
      }
    ];
    var g, w;
    return (0, a.normalizeConfig)((0, r.defaults)({
      theme: te(Y(G(_.map((c) => (g = c?.theme) !== null && g !== void 0 ? g : {})))),
      corePlugins: T(_.map((c) => c.corePlugins)),
      plugins: $(m.map((c) => (w = c?.plugins) !== null && w !== void 0 ? w : []))
    }, ..._));
  }
})(Re);
var ot = {}, Wt = {
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
    margin: ({ theme: e }) => ({
      auto: "auto",
      ...e("spacing")
    }),
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
  const t = /* @__PURE__ */ i(Wt), n = xe;
  function i(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  function l(r) {
    var s;
    const a = ((s = r?.presets) !== null && s !== void 0 ? s : [
      t.default
    ]).slice().reverse().flatMap((p) => l(p instanceof Function ? p() : p)), o = {
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
    }, d = Object.keys(o).filter((p) => (0, n.flagEnabled)(r, p)).map((p) => o[p]);
    return [
      r,
      ...d,
      ...a
    ];
  }
})(ot);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: () => l
  });
  const t = /* @__PURE__ */ i(Re), n = /* @__PURE__ */ i(ot);
  function i(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  function l(...r) {
    let [, ...s] = (0, n.default)(r[0]);
    return (0, t.default)([
      ...r,
      ...s
    ]);
  }
})(Ue);
let ge = Ue;
var qt = (ge.__esModule ? ge : { default: ge }).default, Ht = {
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
const Gt = qt(Ht);
function Qt(e) {
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
const Yt = j({
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
      const t = A(Gt, ["theme", "colors"]), n = A(t, e);
      return typeof n == "string" ? n : e;
    },
    fontColorForBackgroundColor(e) {
      const t = Qt(e);
      return t.alpha * 255 < 150 || Math.round(
        (t.red * 299 + t.green * 587 + t.blue * 114) / 1e3
      ) > 125 ? "#000" : "#fff";
    }
  }
}), Xt = j({
  mixins: [Yt]
});
const Jt = { class: "flex-grow" };
function Zt(e, t, n, i, l, r) {
  return u(), f("div", {
    class: "k-alert",
    style: se([e.colorableBackgroundStyle, e.colorableTextStyleForBackground])
  }, [
    k("div", Jt, [
      U(e.$slots, "default")
    ])
  ], 4);
}
const er = /* @__PURE__ */ K(Xt, [["render", Zt]]), tr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: er
}, Symbol.toStringTag, { value: "Module" }));
const rr = {}, nr = { class: "k-app" };
function or(e, t) {
  const n = V("KSnackbar"), i = V("KConfirm");
  return u(), f("div", nr, [
    E(i, null, {
      default: z(() => [
        E(n, null, {
          default: z(() => [
            U(e.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    })
  ]);
}
const sr = /* @__PURE__ */ K(rr, [["render", or]]), ir = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: sr
}, Symbol.toStringTag, { value: "Module" })), lr = j({
  directives: {
    ClickAway: Ee
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
const ar = { class: "k-autocomplete-input" }, ur = ["placeholder", "readonly"], dr = {
  key: 0,
  class: "k-autocomplete-items"
}, cr = ["onClick"];
function pr(e, t, n, i, l, r) {
  const s = Be("click-away");
  return ne((u(), f("div", {
    class: "k-autocomplete",
    style: se([e.style])
  }, [
    U(e.$slots, "prepend", { item: e.localValue }),
    k("div", ar, [
      ne(k("input", {
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = (a) => e.inputText = a),
        class: J(["k-input", { invalidSelection: !e.isValidSelection }]),
        type: "search",
        autocomplete: "off",
        placeholder: e.placeholderText,
        readonly: !e.editable,
        onSearch: t[1] || (t[1] = (...a) => e.clearInput && e.clearInput(...a)),
        onKeydown: [
          t[2] || (t[2] = le(re((a) => e.currentFocus = Math.max(-1, e.currentFocus - 1), ["prevent"]), ["arrow-up"])),
          t[3] || (t[3] = le(re((a) => e.currentFocus = Math.min(e.items.length - 1, e.currentFocus + 1), ["prevent"]), ["arrow-down"])),
          t[4] || (t[4] = le(re((a) => e.select(e.currentFocus), ["prevent"]), ["enter"])),
          t[6] || (t[6] = le((...a) => e.setBlur && e.setBlur(...a), ["tab"]))
        ],
        onFocus: t[5] || (t[5] = (...a) => e.setFocus && e.setFocus(...a)),
        onKeyup: t[7] || (t[7] = (...a) => e.keyup && e.keyup(...a))
      }, null, 42, ur), [
        [ye, e.inputText]
      ]),
      e.focus && e.items.length && e.inputText ? (u(), f("div", dr, [
        (u(!0), f(I, null, Z(e.itemsFiltered, (a, o) => (u(), f("div", {
          key: o,
          class: J(["k-autocomplete-item", { "k-autocomplete-active": e.currentFocus == o }]),
          onClick: (d) => e.select(o)
        }, [
          U(e.$slots, "item", { item: a }, () => [
            H(F(a), 1)
          ])
        ], 10, cr))), 128))
      ])) : M("", !0)
    ])
  ], 4)), [
    [s, e.setBlur]
  ]);
}
const fr = /* @__PURE__ */ K(lr, [["render", pr]]), mr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fr
}, Symbol.toStringTag, { value: "Module" }));
function ee(e, t) {
  const n = Fe(e, t);
  if (!n)
    throw new Error(`Could not resolve ${e.description}`);
  return n;
}
const oe = Symbol("session"), fe = Symbol("config"), gr = Symbol("snackbar"), hr = Symbol("confirmDialogKey"), he = new $e();
class _r {
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
      (await t.batch(!0)).forEach((l, r) => {
        const s = n[r].resolveFunc;
        s(l);
      });
    } catch {
      n.forEach((i) => i.resolveFunc(null));
    }
  }
}
class br {
  nodes;
  nodeLookupQueue;
  constructor() {
    this.nodes = {}, this.nodeLookupQueue = new _r();
  }
  registerUsers(t) {
    t.forEach((n) => this.nodes[n.dataid] = n);
  }
  async lookup(t, n) {
    return n ? (await he.acquire(n), this.nodes[n] ? (he.release(n), this.nodes[n]) : new Promise((i) => {
      const l = (r) => {
        this.nodes[n] = r, i(r), he.release(n);
      };
      this.nodeLookupQueue.queue(t, l, n);
    })) : null;
  }
}
const yr = new br(), vr = j({
  setup() {
    return { session: ee(oe) };
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
        e && (this.nodeRecLocal = await yr.lookup(this.session, e));
      },
      immediate: !0
    }
  }
}), $r = { key: 0 }, kr = ["src"], wr = ["href"], Sr = ["innerHTML"];
function Or(e, t, n, i, l, r) {
  const s = V("KFunctionMenu");
  return e.nodeRecResolved ? (u(), f("span", $r, [
    e.image ? (u(), f("img", {
      key: 0,
      src: e.nodeRecResolved.gif
    }, null, 8, kr)) : M("", !0),
    H(" "),
    k("a", {
      href: e.nodeRecResolved.url
    }, F(e.nodeRecResolved.name), 9, wr),
    e.clickable ? (u(), N(s, {
      key: 1,
      dataid: e.nodeRecResolved.dataid
    }, null, 8, ["dataid"])) : M("", !0),
    k("span", {
      innerHTML: e.nodeRecResolved.modifiedImageCallback
    }, null, 8, Sr)
  ])) : M("", !0);
}
const xr = /* @__PURE__ */ K(vr, [["render", Or]]), Tr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xr
}, Symbol.toStringTag, { value: "Module" })), jr = j({
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
const Cr = ["disabled"];
function Pr(e, t, n, i, l, r) {
  return u(), f("button", Ne({
    class: ["k-button", e.classObj],
    disabled: e.disabled,
    type: "button"
  }, e.$attrs, {
    onClick: t[0] || (t[0] = (s) => e.$emit("click"))
  }), [
    U(e.$slots, "default")
  ], 16, Cr);
}
const Kr = /* @__PURE__ */ K(jr, [["render", Pr]]), Ar = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Kr
}, Symbol.toStringTag, { value: "Module" })), Mr = j({
  provide() {
    return {
      // @ts-ignore - not sure why this complains
      [hr]: this
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
function Vr(e, t, n, i, l, r) {
  const s = V("KCardTitle"), a = V("KCardText"), o = V("KSpacer"), d = V("KButton"), p = V("KCardActions"), b = V("KCard"), v = V("KDialog");
  return u(), f(I, null, [
    U(e.$slots, "default"),
    E(v, {
      modelValue: e.dialog,
      "onUpdate:modelValue": t[2] || (t[2] = (S) => e.dialog = S),
      "max-width": "30vw",
      "min-width": "20vw"
    }, {
      default: z(() => [
        E(b, null, {
          default: z(() => [
            e.title ? (u(), N(s, { key: 0 }, {
              default: z(() => [
                H(F(e.title), 1)
              ]),
              _: 1
            })) : M("", !0),
            e.message ? (u(), N(a, { key: 1 }, {
              default: z(() => [
                H(F(e.message), 1)
              ]),
              _: 1
            })) : M("", !0),
            E(p, null, {
              default: z(() => [
                E(o),
                e.noLabel ? (u(), N(d, {
                  key: 0,
                  small: "",
                  onClick: t[0] || (t[0] = (S) => e.dismiss(!1))
                }, {
                  default: z(() => [
                    H(F(e.noLabel), 1)
                  ]),
                  _: 1
                })) : M("", !0),
                e.yesLabel ? (u(), N(d, {
                  key: 1,
                  small: "",
                  onClick: t[1] || (t[1] = (S) => e.dismiss(!0))
                }, {
                  default: z(() => [
                    H(F(e.yesLabel), 1)
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
const zr = /* @__PURE__ */ K(Mr, [["render", Vr]]), Lr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zr
}, Symbol.toStringTag, { value: "Module" })), Fr = j({
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
const Br = { class: "k-date-time-picker" }, Nr = ["type", "readonly"];
function Dr(e, t, n, i, l, r) {
  const s = V("KButton");
  return u(), f("div", Br, [
    ne(k("input", {
      "onUpdate:modelValue": t[0] || (t[0] = (a) => e.localModelValue = a),
      class: "k-input",
      type: e.type,
      readonly: !e.editable
    }, null, 8, Nr), [
      [dt, e.localModelValue]
    ]),
    e.editable ? (u(), f(I, { key: 0 }, [
      E(s, {
        small: "",
        onClick: e.setToNow
      }, {
        default: z(() => [
          H(" Now ")
        ]),
        _: 1
      }, 8, ["onClick"]),
      E(s, {
        small: "",
        onClick: t[1] || (t[1] = (a) => e.$emit("update:modelValue", null))
      }, {
        default: z(() => [
          H(" Clear ")
        ]),
        _: 1
      })
    ], 64)) : M("", !0)
  ]);
}
const Er = /* @__PURE__ */ K(Fr, [["render", Dr]]), Ur = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Er
}, Symbol.toStringTag, { value: "Module" })), Rr = j({
  directives: {
    ClickAway: Ee
  },
  mixins: [de],
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
      this.$emit("update:modelValue", e), e ? (await this.$nextTick(), mt(this.$refs.content)) : gt(this.$refs.content);
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
function Ir(e, t, n, i, l, r) {
  const s = Be("click-away");
  return u(), f(I, null, [
    U(e.$slots, "activator", { on: e.on }),
    e.mounted ? (u(), N(ct, {
      key: 0,
      to: ".k-app"
    }, [
      E(ue, { name: "fade" }, {
        default: z(() => [
          e.dialog ? (u(), f("div", {
            key: 0,
            class: "k-dialog",
            style: se([e.style])
          }, [
            ne((u(), f("div", {
              ref: "content",
              class: J(["k-dialog-content", e.classObj]),
              style: se([e.measurableStyles])
            }, [
              U(e.$slots, "default", { on: e.on })
            ], 6)), [
              [s, e.clickAway]
            ])
          ], 4)) : M("", !0)
        ]),
        _: 3
      })
    ])) : M("", !0)
  ], 64);
}
const Wr = /* @__PURE__ */ K(Rr, [["render", Ir]]), qr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wr
}, Symbol.toStringTag, { value: "Module" })), Hr = j({
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
function Gr(e, t, n, i, l, r) {
  return u(), f("div", {
    class: "k-dot",
    style: se([e.style])
  }, [
    U(e.$slots, "default")
  ], 4);
}
const Qr = /* @__PURE__ */ K(Hr, [["render", Gr]]), Yr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qr
}, Symbol.toStringTag, { value: "Module" })), ie = j({
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
}), Xr = {
  mixins: [ie]
};
const Jr = {
  key: 0,
  class: "k-form-field-label"
};
function Zr(e, t, n, i, l, r) {
  return u(), f("div", null, [
    e.label ? (u(), f("div", Jr, F(e.label), 1)) : M("", !0),
    U(e.$slots, "default"),
    (u(!0), f(I, null, Z(e.successMessages, (s, a) => (u(), f("div", {
      key: a,
      class: "k-formfield--success"
    }, F(s), 1))), 128)),
    (u(!0), f(I, null, Z(e.errorMessages, (s, a) => (u(), f("div", {
      key: a,
      class: "k-formfield--error"
    }, F(s), 1))), 128))
  ]);
}
const en = /* @__PURE__ */ K(Xr, [["render", Zr]]), tn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: en,
  mixin: ie
}, Symbol.toStringTag, { value: "Module" })), rn = j({
  setup() {
    return { config: ee(fe) };
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
}), nn = { key: 0 }, on = ["id"], sn = ["src"], ln = ["id", "src"];
function an(e, t, n, i, l, r) {
  return e.dataid ? (u(), f("span", nn, [
    k("a", {
      id: e.aid,
      href: "#",
      class: "functionMenuHotspot",
      onClick: t[2] || (t[2] = re((...s) => e.onclick && e.onclick(...s), ["prevent"]))
    }, [
      e.isModernFunctionMenu ? (u(), f("img", {
        key: 0,
        src: `${e.config.img}spacer.gif`,
        alt: "Functions"
      }, null, 8, sn)) : (u(), f("img", {
        key: 1,
        id: e.xid,
        src: e.image,
        border: "0",
        alt: "Functions",
        title: "Functions",
        onMouseover: t[0] || (t[0] = (...s) => e.onmouseover && e.onmouseover(...s)),
        onMouseout: t[1] || (t[1] = (...s) => e.onmouseout && e.onmouseout(...s))
      }, null, 40, ln))
    ], 8, on),
    t[3] || (Pe(-1), t[3] = k("div", {
      id: e.zid,
      ref: "functionMenuDiv",
      class: "functionMenuDiv"
    }, null, 8, ["id"]), Pe(1), t[3])
  ])) : M("", !0);
}
const un = /* @__PURE__ */ K(rn, [["render", an]]), dn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: un
}, Symbol.toStringTag, { value: "Module" })), cn = j({});
const pn = { class: "k-progress-line" };
function fn(e, t, n, i, l, r) {
  return u(), f("div", pn);
}
const mn = /* @__PURE__ */ K(cn, [["render", fn]]), gn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mn
}, Symbol.toStringTag, { value: "Module" })), hn = j({
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
const _n = { class: "k-multi-widget" }, bn = { class: "k-multi-buttons" }, yn = /* @__PURE__ */ k("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ k("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z" })
], -1), vn = /* @__PURE__ */ k("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ k("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" })
], -1);
function $n(e, t, n, i, l, r) {
  const s = V("KButton"), a = V("KCard");
  return u(), N(a, { class: "k-multi" }, {
    default: z(() => [
      E(ve, {
        name: "fade",
        tag: "div"
      }, {
        default: z(() => [
          (u(!0), f(I, null, Z(e.valueLocal, (o, d) => (u(), f("div", {
            key: `k-multi-${o}`,
            class: "k-multi-item"
          }, [
            k("div", _n, [
              U(e.$slots, "default", {
                index: d,
                value: o,
                update: (p) => e.update(d, p)
              })
            ]),
            k("div", bn, [
              e.canRemove ? (u(), N(s, {
                key: 0,
                text: "",
                onClick: (p) => e.remove(d)
              }, {
                default: z(() => [
                  yn
                ]),
                _: 2
              }, 1032, ["onClick"])) : M("", !0),
              e.canAdd ? (u(), N(s, {
                key: 1,
                text: "",
                onClick: (p) => e.add(d)
              }, {
                default: z(() => [
                  vn
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
const kn = /* @__PURE__ */ K(hn, [["render", $n]]), wn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: kn
}, Symbol.toStringTag, { value: "Module" })), Sn = j({
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
const On = { class: "k-multi-widget" }, xn = /* @__PURE__ */ k("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ k("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z" })
], -1);
function Tn(e, t, n, i, l, r) {
  const s = V("KButton"), a = V("KCard");
  return u(), N(a, { class: "k-multi" }, {
    default: z(() => [
      E(ve, {
        name: "fade",
        tag: "div"
      }, {
        default: z(() => [
          (u(!0), f(I, null, Z(e.valueLocal, (o, d) => (u(), f("div", {
            key: `k-multi-${o}`,
            class: "k-multi-item"
          }, [
            k("div", On, [
              U(e.$slots, "readonly", {
                index: d,
                value: o
              }, () => [
                H(F(o), 1)
              ])
            ]),
            e.readonly ? M("", !0) : (u(), N(s, {
              key: 0,
              text: "",
              onClick: (p) => e.remove(d)
            }, {
              default: z(() => [
                xn
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
const jn = /* @__PURE__ */ K(Sn, [["render", Tn]]), Cn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: jn
}, Symbol.toStringTag, { value: "Module" })), Pn = j({
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
function Kn(e, t, n, i, l, r) {
  const s = V("KUserLink"), a = V("KUserPicker"), o = V("KMulti2");
  return u(), N(o, {
    modelValue: e.userIdsLocal,
    "onUpdate:modelValue": t[0] || (t[0] = (d) => e.userIdsLocal = d),
    readonly: e.readonly
  }, {
    readonly: z(({ value: d }) => [
      E(s, {
        user: d,
        gif: ""
      }, null, 8, ["user"])
    ]),
    add: z(({ add: d }) => [
      E(a, {
        "onUpdate:modelValue": (p) => d(p),
        users: e.users,
        groups: e.groups
      }, null, 8, ["onUpdate:modelValue", "users", "groups"])
    ]),
    _: 1
  }, 8, ["modelValue", "readonly"]);
}
const An = /* @__PURE__ */ K(Pn, [["render", Kn]]), Mn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: An
}, Symbol.toStringTag, { value: "Module" })), Ae = new $e();
class Vn {
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
      if (await Ae.acquire(n), !this.nodes[n]) {
        const i = await t.nodes.ancestors(n);
        this.nodes[n] = A(i, "data.ancestors", []);
      }
      return this.nodes[n];
    } finally {
      Ae.release(n);
    }
  }
}
const st = new Vn(), zn = j({
  setup() {
    return { session: ee(oe) };
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
        e && (this.breadcrumb = await st.lookup(this.session, e));
      },
      immediate: !0
    }
  }
});
const Ln = { class: "k-node-breadcrumb" };
function Fn(e, t, n, i, l, r) {
  return u(), f("div", Ln, [
    (u(!0), f(I, null, Z(e.breadcrumb, (s, a) => (u(), f(I, {
      key: s.dataid
    }, [
      H(F(s.name) + " ", 1),
      a < e.breadcrumb.length - 1 ? (u(), f(I, { key: 0 }, [
        H(" ▶ ")
      ], 64)) : M("", !0)
    ], 64))), 128))
  ]);
}
const it = /* @__PURE__ */ K(zn, [["render", Fn]]), Bn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: it
}, Symbol.toStringTag, { value: "Module" })), Nn = j({
  components: { KNodeAncestor: it },
  setup() {
    return {
      session: ee(oe),
      config: ee(fe)
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
      return ht(this.config.baseUrl, {
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
        this.dataid ? this.breadcrumb = await st.lookup(
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
      return this.objid ?? parseInt(_t.get("TargetBrowseObjID") ?? "0");
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
const Dn = { class: "k-node-picker-field" }, En = ["value"];
function Un(e, t, n, i, l, r) {
  const s = V("KButton"), a = V("KNodeAncestor");
  return u(), f("div", Dn, [
    k("input", {
      ref: "input",
      type: "text",
      class: "k-input",
      value: e.name,
      onFocus: t[0] || (t[0] = (...o) => e.openWindow && e.openWindow(...o))
    }, null, 40, En),
    E(s, {
      small: "",
      onClick: e.openWindow
    }, {
      default: z(() => [
        H(F(e.browseButtonLabel), 1)
      ]),
      _: 1
    }, 8, ["onClick"]),
    e.clearable ? (u(), N(s, {
      key: 0,
      small: "",
      onClick: e.clear
    }, {
      default: z(() => [
        H(F(e.clearButtonLabel), 1)
      ]),
      _: 1
    }, 8, ["onClick"])) : M("", !0),
    e.dataid ? (u(), N(a, {
      key: 1,
      dataid: e.dataid
    }, null, 8, ["dataid"])) : M("", !0)
  ]);
}
const Rn = /* @__PURE__ */ K(Nn, [["render", Un]]), In = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Rn
}, Symbol.toStringTag, { value: "Module" })), Wn = j({
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
const qn = { class: "k-one-moment" }, Hn = { class: "k-one-moment-label" };
function Gn(e, t, n, i, l, r) {
  const s = V("KSpinner"), a = V("KDialog");
  return u(), N(a, { "model-value": e.loading }, {
    default: z(() => [
      k("div", qn, [
        E(s, {
          height: 36,
          width: 36
        }),
        k("div", Hn, F(e.label), 1)
      ])
    ]),
    _: 1
  }, 8, ["model-value"]);
}
const Qn = /* @__PURE__ */ K(Wn, [["render", Gn]]), Yn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qn
}, Symbol.toStringTag, { value: "Module" })), Xn = j({
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
function Jn(e, t, n, i, l, r) {
  return u(), f("div", null, [
    U(e.$slots, "default", { active: e.active })
  ]);
}
const Zn = /* @__PURE__ */ K(Xn, [["render", Jn]]), eo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zn
}, Symbol.toStringTag, { value: "Module" })), to = j({
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
const ro = { key: 0 }, no = { class: "rhmuted" };
function oo(e, t, n, i, l, r) {
  return u(), f("h1", null, [
    H(F(e.title), 1),
    e.subtitle ? (u(), f("span", ro, [
      H(": "),
      k("span", no, F(e.subtitle) + " - 2", 1)
    ])) : M("", !0)
  ]);
}
const so = /* @__PURE__ */ K(to, [["render", oo], ["__scopeId", "data-v-8d8d8837"]]), io = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: so
}, Symbol.toStringTag, { value: "Module" })), lo = j({
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
const ao = { class: "k-pagination" }, uo = {
  key: 1,
  class: "k-pagination-buttons"
}, co = {
  key: 0,
  class: "k-pagination-button"
}, po = /* @__PURE__ */ k("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ k("path", { d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" })
], -1), fo = [
  po
], mo = { key: 0 }, go = ["onClick"], ho = {
  key: 1,
  class: "k-pagination-button"
}, _o = /* @__PURE__ */ k("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ k("path", { d: "M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" })
], -1), bo = [
  _o
], yo = { key: 2 };
function vo(e, t, n, i, l, r) {
  const s = V("KSelect");
  return u(), f("div", ao, [
    e.potentiallyMultiplePages ? (u(), N(s, {
      key: 0,
      modelValue: e.pageSize,
      "onUpdate:modelValue": t[0] || (t[0] = (a) => e.pageSize = a),
      items: e.pageSizes,
      label: "Page Size"
    }, null, 8, ["modelValue", "items"])) : M("", !0),
    e.hasPrevious || e.hasNext ? (u(), f("div", uo, [
      e.hasPrevious ? (u(), f("a", co, fo)) : M("", !0),
      (u(!0), f(I, null, Z(e.pageRange, (a) => (u(), f(I, { key: a }, [
        a === "|" ? (u(), f("div", mo, "...")) : (u(), f("a", {
          key: 1,
          class: J(["k-pagination-button k-pagination-button-border", e.classObj(a)]),
          onClick: (o) => e.$emit("update:modelValue", a)
        }, F(a), 11, go))
      ], 64))), 128)),
      e.hasNext ? (u(), f("a", ho, bo)) : M("", !0)
    ])) : M("", !0),
    e.potentiallyMultiplePages ? (u(), f("div", yo, " Displaying " + F(e.pagination.startIndex) + "-" + F(e.pagination.endIndex) + " of " + F(e.pagination.count) + " items. ", 1)) : M("", !0)
  ]);
}
const $o = /* @__PURE__ */ K(lo, [["render", vo]]), ko = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $o
}, Symbol.toStringTag, { value: "Module" })), wo = j({
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
      const e = [], i = Math.max(0, this.pageNumber0 - 5), l = Math.min(this.lastPageNumber0, i + 10), r = Math.max(0, l - 10);
      for (let s = r; s <= l; s++)
        e.push(s);
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
const So = { class: "k-pagination2" }, Oo = { class: "k-pagination2-buttons" }, xo = /* @__PURE__ */ k("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ k("path", { d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" })
], -1), To = [
  xo
], jo = ["onClick"], Co = /* @__PURE__ */ k("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ k("path", { d: "M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" })
], -1), Po = [
  Co
];
function Ko(e, t, n, i, l, r) {
  const s = V("KSelect");
  return u(), f("div", So, [
    k("div", null, [
      E(s, {
        modelValue: e.pageSize,
        "onUpdate:modelValue": t[0] || (t[0] = (a) => e.pageSize = a),
        items: e.pageSizes,
        label: "Page Size"
      }, null, 8, ["modelValue", "items"])
    ]),
    e.pageCount > 1 ? (u(), f(I, { key: 0 }, [
      k("div", Oo, [
        e.hasPrevious ? (u(), f("a", {
          key: 0,
          class: "k-pagination2-arrow-button",
          onClick: t[1] || (t[1] = (a) => e.clickedPageNumber(e.pageNumber0 - 1))
        }, To)) : M("", !0),
        (u(!0), f(I, null, Z(e.pageRange0, (a) => (u(), f("div", {
          key: a,
          class: J(["k-pagination2-button", e.classObj(a)]),
          onClick: (o) => e.clickedPageNumber(a)
        }, F(a + 1), 11, jo))), 128)),
        e.hasNext ? (u(), f("a", {
          key: 1,
          class: "k-pagination2-arrow-button",
          onClick: t[2] || (t[2] = (a) => e.clickedPageNumber(e.pageNumber0 + 1))
        }, Po)) : M("", !0)
      ]),
      k("div", null, F(e.pageNumber) + " of " + F(e.pageCount) + " pages", 1)
    ], 64)) : M("", !0)
  ]);
}
const Ao = /* @__PURE__ */ K(wo, [["render", Ko]]), Mo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ao
}, Symbol.toStringTag, { value: "Module" })), Vo = j({
  mixins: [ie],
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
const zo = ["id", "value", "disabled"], Lo = ["for"];
function Fo(e, t, n, i, l, r) {
  const s = V("KSpinner"), a = V("KFormFieldWrapper");
  return u(), f("div", null, [
    E(a, {
      label: e.label,
      "success-messages": e.successMessages,
      "error-messages": e.errorMessages
    }, {
      default: z(() => [
        E(ue, {
          name: "fade",
          mode: "out-in"
        }, {
          default: z(() => [
            e.loading ? (u(), N(s, { key: 0 })) : (u(), f("div", {
              key: 1,
              class: J(["k-radiogroup", e.classObj])
            }, [
              (u(!0), f(I, null, Z(e.items, (o) => (u(), f("div", {
                key: e.getItemValue(o),
                class: "k-radiogroup-item"
              }, [
                ne(k("input", {
                  id: e.getItemValue(o),
                  "onUpdate:modelValue": t[0] || (t[0] = (d) => e.localValue = d),
                  type: "radio",
                  value: e.getItemValue(o),
                  disabled: e.getItemDisabled(o)
                }, null, 8, zo), [
                  [pt, e.localValue]
                ]),
                k("label", {
                  for: e.getItemValue(o)
                }, F(e.getItemText(o)), 9, Lo)
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
const Bo = /* @__PURE__ */ K(Vo, [["render", Fo]]), No = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Bo
}, Symbol.toStringTag, { value: "Module" })), Do = j({
  inject: ["ksnackbar"],
  methods: {
    click() {
    }
  }
});
function Eo(e, t, n, i, l, r) {
  return u(), f("div", null, [
    k("button", {
      onClick: t[0] || (t[0] = (...s) => e.click && e.click(...s))
    }, "click")
  ]);
}
const Uo = /* @__PURE__ */ K(Do, [["render", Eo]]), Ro = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Uo
}, Symbol.toStringTag, { value: "Module" })), Io = j({
  mixins: [ie],
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
const Wo = { class: "k-select" }, qo = ["disabled"], Ho = ["value", "disabled"];
function Go(e, t, n, i, l, r) {
  const s = V("KSpinner"), a = V("KFormFieldWrapper");
  return u(), N(a, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: z(() => [
      k("div", Wo, [
        ne(k("select", {
          "onUpdate:modelValue": t[0] || (t[0] = (o) => e.localValue = o),
          class: J(e.classObj),
          disabled: e.disabledResolved
        }, [
          (u(!0), f(I, null, Z(e.items, (o) => (u(), f("option", {
            key: e.getItemValue(o),
            value: e.getItemValue(o),
            disabled: e.getItemDisabled(o)
          }, F(e.getItemText(o)), 9, Ho))), 128))
        ], 10, qo), [
          [ft, e.localValue]
        ]),
        E(ue, { name: "fade" }, {
          default: z(() => [
            e.loading ? (u(), N(s, {
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
const Qo = /* @__PURE__ */ K(Io, [["render", Go]]), Yo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qo
}, Symbol.toStringTag, { value: "Module" })), Xo = j({
  provide() {
    return {
      // @ts-ignore - not sure why this complains
      [gr]: this
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
      action: r
    }) {
      const s = this.nextIndex();
      r == null && (r = () => this.dismiss(s));
      const a = {
        title: t,
        message: n,
        timeout: i,
        actionLabel: l,
        action: r,
        type: e,
        index: s
      };
      this.nitems[s] = a, console.log(i), setInterval(() => this.dismiss(s), i);
    }
  }
});
const Jo = { class: "k-snackbar" }, Zo = { class: "k-snackbar-item-message" }, es = {
  key: 0,
  class: "k-snackbar-title"
}, ts = {
  key: 1,
  class: "k-snackbar-text"
}, rs = {
  key: 0,
  class: "k-snackbar-action"
}, ns = ["onClick"];
function os(e, t, n, i, l, r) {
  return u(), f(I, null, [
    U(e.$slots, "default"),
    k("div", Jo, [
      E(ve, {
        name: "slide",
        tag: "div",
        mode: "out-in"
      }, {
        default: z(() => [
          (u(!0), f(I, null, Z(e.items, (s) => (u(), f("div", {
            key: s.index,
            class: J(["k-snackbar-item", e.classObj(s)])
          }, [
            k("div", Zo, [
              s.title ? (u(), f("div", es, F(s.title), 1)) : M("", !0),
              s.message ? (u(), f("div", ts, F(s.message), 1)) : M("", !0)
            ]),
            s.action ? (u(), f("div", rs, [
              k("a", {
                href: "#",
                onClick: re((a) => e.action(s), ["prevent"])
              }, F(s.actionLabel), 9, ns)
            ])) : M("", !0)
          ], 2))), 128))
        ]),
        _: 1
      })
    ])
  ], 64);
}
const ss = /* @__PURE__ */ K(Xo, [["render", os]]), is = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ss
}, Symbol.toStringTag, { value: "Module" })), ls = j({
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
const as = {
  key: 0,
  class: "j-sort-header-arrow"
}, us = {
  key: 1,
  class: "j-sort-header-arrow"
};
function ds(e, t, n, i, l, r) {
  return u(), f("a", {
    href: "#",
    onClick: t[0] || (t[0] = re((...s) => e.emitClick && e.emitClick(...s), ["prevent"]))
  }, [
    U(e.$slots, "default"),
    E(ue, {
      name: "fade",
      mode: "out-in"
    }, {
      default: z(() => [
        e.isActive && e.sortAsc ? (u(), f("span", as, "↓")) : e.isActive ? (u(), f("span", us, "↑")) : M("", !0)
      ]),
      _: 1
    })
  ]);
}
const cs = /* @__PURE__ */ K(ls, [["render", ds]]), ps = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cs
}, Symbol.toStringTag, { value: "Module" }));
const fs = {}, ms = { class: "k-spacer" };
function gs(e, t) {
  return u(), f("div", ms);
}
const hs = /* @__PURE__ */ K(fs, [["render", gs]]), _s = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: hs
}, Symbol.toStringTag, { value: "Module" })), Te = j({
  mixins: [de],
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
}), Me = () => {
  De((e) => ({
    "519b76bc": e.color
  }));
}, Ve = Te.setup;
Te.setup = Ve ? (e, t) => (Me(), Ve(e, t)) : Me;
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
function $s(e, t, n, i, l, r) {
  return u(), f("svg", {
    style: se(e.measurableStyles),
    class: "k-spinner",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, vs, 4);
}
const ks = /* @__PURE__ */ K(Te, [["render", $s]]), ws = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ks
}, Symbol.toStringTag, { value: "Module" })), je = j({
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
  De((e) => ({
    "005bd1d4": e.switchWidthPx,
    b8c194da: e.heightPx,
    "110bcd4a": e.innerSizePx,
    75578316: e.paddingPx,
    "19f49a4c": e.transPx
  }));
}, Le = je.setup;
je.setup = Le ? (e, t) => (ze(), Le(e, t)) : ze;
const Ss = /* @__PURE__ */ k("span", { class: "k-switch-slider" }, null, -1), Os = [
  Ss
];
function xs(e, t, n, i, l, r) {
  return u(), f("div", {
    class: J(["k-switch", e.classObj]),
    onClick: t[0] || (t[0] = (...s) => e.toggle && e.toggle(...s))
  }, Os, 2);
}
const Ts = /* @__PURE__ */ K(je, [["render", xs]]), js = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ts
}, Symbol.toStringTag, { value: "Module" })), Cs = j({
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
function Ps(e, t, n, i, l, r) {
  const s = V("KLinearProgressIndicator");
  return u(), f("div", null, [
    e.loading ? (u(), N(s, { key: 0 })) : M("", !0),
    k("table", {
      class: J(["k-table", e.classObj])
    }, [
      U(e.$slots, "default")
    ], 2)
  ]);
}
const Ks = /* @__PURE__ */ K(Cs, [["render", Ps]]), As = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ks
}, Symbol.toStringTag, { value: "Module" })), Ms = j({
  mixins: [ie],
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
        const l = n.slice(0, i), r = n.slice(i), s = `${l}	${r}`;
        this.valueLocal = s, t.value = s, t.selectionStart = i + 1, t.selectionEnd = i + 1;
      }
    }
  }
});
const Vs = ["rows"];
function zs(e, t, n, i, l, r) {
  const s = V("KFormFieldWrapper");
  return u(), N(s, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: z(() => [
      ne(k("textarea", Ne({
        "onUpdate:modelValue": t[0] || (t[0] = (a) => e.valueLocal = a)
      }, e.$attrs, {
        spellcheck: "false",
        class: [e.classObj, "k-textarea"],
        rows: e.rows,
        onKeydown: t[1] || (t[1] = le(re((...a) => e.tabber && e.tabber(...a), ["prevent"]), ["tab"]))
      }), null, 16, Vs), [
        [ye, e.valueLocal]
      ])
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const Ls = /* @__PURE__ */ K(Ms, [["render", zs]]), Fs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ls
}, Symbol.toStringTag, { value: "Module" })), Bs = j({
  mixins: [ie],
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
const Ns = ["placeholder"];
function Ds(e, t, n, i, l, r) {
  const s = V("KFormFieldWrapper");
  return u(), N(s, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: z(() => [
      ne(k("input", {
        "onUpdate:modelValue": t[0] || (t[0] = (a) => e.value = a),
        class: J(["k-input-text-field", e.classObj]),
        placeholder: e.placeholder
      }, null, 10, Ns), [
        [ye, e.value]
      ])
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const Es = /* @__PURE__ */ K(Bs, [["render", Ds]]), Us = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Es
}, Symbol.toStringTag, { value: "Module" })), Rs = j({
  setup() {
    return {
      config: ee(fe),
      session: ee(oe)
    };
  },
  mixins: [de],
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
}), Is = ["src"];
function Ws(e, t, n, i, l, r) {
  return e.url ? (u(), f("img", {
    key: 0,
    src: e.url,
    style: se([e.measurableStyles])
  }, null, 12, Is)) : M("", !0);
}
const qs = /* @__PURE__ */ K(Rs, [["render", Ws]]), Hs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qs
}, Symbol.toStringTag, { value: "Module" })), _e = new $e();
class Gs {
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
      (await t.batch(!0)).forEach((l, r) => {
        const s = n[r].resolveFunc;
        s(l);
      });
    } catch {
      n.forEach((i) => i.resolveFunc(null));
    }
  }
}
class Qs {
  users;
  userLookupQueue;
  constructor() {
    this.users = {}, this.userLookupQueue = new Gs();
  }
  registerUsers(t) {
    t.forEach((n) => this.users[n.userid] = n);
  }
  async lookup(t, n) {
    return n ? (await _e.acquire(n), this.users[n] ? (_e.release(n), this.users[n]) : new Promise((i) => {
      const l = (r) => {
        this.users[n] = r, i(r), _e.release(n);
      };
      this.userLookupQueue.queue(t, l, n);
    })) : null;
  }
}
const lt = new Qs(), Ys = j({
  setup() {
    return { session: ee(oe) };
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
        this.isInteger(e) ? this.userRecLocal = await lt.lookup(this.session, e) : this.userRecLocal = e;
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
const Xs = {
  key: 0,
  class: "k-user-link"
};
function Js(e, t, n, i, l, r) {
  const s = V("KUserGIF");
  return e.userRecLocal ? (u(), f("span", Xs, [
    e.gif ? (u(), N(s, {
      key: 0,
      "user-rec": e.userRecLocal
    }, null, 8, ["user-rec"])) : M("", !0),
    H("  "),
    k("a", {
      href: "#",
      onClick: t[0] || (t[0] = re((...a) => e.click && e.click(...a), ["prevent"]))
    }, F(e.displayName), 1)
  ])) : M("", !0);
}
const Zs = /* @__PURE__ */ K(Ys, [["render", Js]]), ei = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zs
}, Symbol.toStringTag, { value: "Module" })), ti = j({
  mixins: [ie],
  setup() {
    return { session: ee(oe) };
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
          const t = await lt.lookup(
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
const ri = { class: "flex items-center gap-1" };
function ni(e, t, n, i, l, r) {
  const s = V("KUserGIF"), a = V("KAutocomplete"), o = V("KUserLink"), d = V("KFormFieldWrapper");
  return u(), N(d, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: z(() => [
      e.editable ? (u(), N(a, {
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
        prepend: z(({ item: p }) => [
          p ? (u(), N(s, {
            key: 0,
            type: p.type
          }, null, 8, ["type"])) : (u(), N(s, {
            key: 1,
            type: e.USER
          }, null, 8, ["type"]))
        ]),
        item: z(({ item: p }) => [
          k("div", ri, [
            E(s, {
              type: p.type
            }, null, 8, ["type"]),
            H(" " + F(p.text), 1)
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "search-input", "placeholder", "width", "loading", "items", "return-object"])) : (u(), N(o, {
        key: 1,
        user: e.modelValue,
        gif: ""
      }, null, 8, ["user"]))
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const at = /* @__PURE__ */ K(ti, [["render", ni]]), oi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: at
}, Symbol.toStringTag, { value: "Module" })), si = j({
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
}), ii = { key: 0 };
function li(e, t, n, i, l, r) {
  return e.isSelected ? (u(), f("div", ii, [
    U(e.$slots, "default")
  ])) : M("", !0);
}
const ai = /* @__PURE__ */ K(si, [["render", li]]), ui = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ai
}, Symbol.toStringTag, { value: "Module" })), di = j({
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
      const e = (r) => r.type.name === "KTabItem", t = (r) => typeof r.type == "symbol", n = (r) => r.children && Array.isArray(r.children) && r.children.length && r.children.some(e), i = (r) => t(r) && n(r);
      return (this.$slots.default ? this.$slots.default() : []).filter((r) => e(r) || i(r)).flatMap((r) => i(r) ? r.children : r).map((r) => ({
        name: r.props.name,
        title: r.props.title
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
const ci = { class: "k-tabs" }, pi = { class: "k-tabs-nav" }, fi = ["href", "onClick"], mi = { class: "k-tabs-content" };
function gi(e, t, n, i, l, r) {
  return u(), f("div", ci, [
    k("div", pi, [
      (u(!0), f(I, null, Z(e.tabs, (s) => (u(), f("div", {
        key: s.name,
        class: J(e.classObj(s))
      }, [
        k("a", {
          href: `#${s.name}`,
          onClick: (a) => e.selectTab(s.name)
        }, F(s.title), 9, fi)
      ], 2))), 128))
    ]),
    k("div", mi, [
      U(e.$slots, "default")
    ])
  ]);
}
const hi = /* @__PURE__ */ K(di, [["render", gi]]), _i = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: hi
}, Symbol.toStringTag, { value: "Module" })), bi = j({
  extends: at,
  setup() {
    return { session: ee(oe) };
  },
  methods: {
    async loadInitialValue() {
      const e = this.modelValue;
      if (e)
        try {
          this.pleaseWait = !0, this.readonly = !0, this.loading = !0;
          const t = await this.session.members.member(e, "v1"), n = A(t, "data.data.first_name"), i = A(t, "data.data.last_name"), l = A(t, "data.data.name"), r = `${n} ${i} (${l})`;
          this.items = [
            {
              text: r,
              value: A(t, "data.data.id"),
              type: A(t, "data.data.type")
            }
          ], this.select = r;
        } finally {
          this.pleaseWait = !1, this.readonly = !1, this.loading = !1;
        }
    }
  }
}), yi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bi
}, Symbol.toStringTag, { value: "Module" }));
const vi = /* @__PURE__ */ Object.assign({
  "./components/Card/KCard.vue": $t,
  "./components/Card/KCardActions.vue": xt,
  "./components/Card/KCardText.vue": Kt,
  "./components/Card/KCardTitle.vue": Lt,
  "./components/KAdminLink.vue": Ut,
  "./components/KAlert.vue": tr,
  "./components/KApp.vue": ir,
  "./components/KAutocomplete.vue": mr,
  "./components/KBrowseLink.vue": Tr,
  "./components/KButton.vue": Ar,
  "./components/KConfirm.vue": Lr,
  "./components/KDateTimePicker.vue": Ur,
  "./components/KDialog.vue": qr,
  "./components/KDot.vue": Yr,
  "./components/KFormFieldWrapper.vue": tn,
  "./components/KFunctionMenu.vue": dn,
  "./components/KLinearProgressIndicator.vue": gn,
  "./components/KMulti.vue": wn,
  "./components/KMulti2.vue": Cn,
  "./components/KMultiUserPicker.vue": Mn,
  "./components/KNodeAncestor.vue": Bn,
  "./components/KNodePickerField.vue": In,
  "./components/KOneMoment.vue": Yn,
  "./components/KPageDropZone.vue": eo,
  "./components/KPageTitle.vue": io,
  "./components/KPagination.vue": ko,
  "./components/KPagination2.vue": Mo,
  "./components/KRadioGroup.vue": No,
  "./components/KScratch.vue": Ro,
  "./components/KSelect.vue": Yo,
  "./components/KSnackbar.vue": is,
  "./components/KSortHeader.vue": ps,
  "./components/KSpacer.vue": _s,
  "./components/KSpinner.vue": ws,
  "./components/KSwitch.vue": js,
  "./components/KTable.vue": As,
  "./components/KTextArea.vue": Fs,
  "./components/KTextField.vue": Us,
  "./components/KUserGIF.vue": Hs,
  "./components/KUserLink.vue": ei,
  "./components/KUserPicker.vue": oi,
  "./components/KUserPickerLegacy.vue": yi,
  "./components/Tabs/KTabItem.vue": ui,
  "./components/Tabs/KTabs.vue": _i
});
let be;
const Pi = {
  install(e, t) {
    Object.entries(vi).forEach(
      ([i, l]) => {
        const r = i?.split("/")?.pop()?.replace(/\.\w+$/, "");
        e.component(r, l.default);
      }
    ), be = new bt(t);
    const n = {
      img: t.img,
      baseUrl: t.baseUrl,
      jsLongDateFormat: t.datelong,
      jsShortDateFormat: t.dateshort
    };
    e.provide(oe, be), e.provide(fe, n);
  }
}, Ki = () => be;
export {
  fe as configKey,
  hr as confirmDialogKey,
  Pi as default,
  ee as injectStrict,
  yr as nodeLookup,
  oe as sessionKey,
  gr as snackbarKey,
  Ki as useSession,
  lt as userLookup
};
