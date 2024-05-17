var Ht = Object.defineProperty;
var Gt = (e, t, n) => t in e ? Ht(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var te = (e, t, n) => (Gt(e, typeof t != "symbol" ? t + "" : t, n), n);
import { defineComponent as S, h as fe, openBlock as u, createElementBlock as p, renderSlot as F, mergeProps as pe, createElementVNode as k, toDisplayString as I, createCommentVNode as L, normalizeStyle as ie, resolveComponent as C, createVNode as B, withCtx as P, resolveDirective as De, withDirectives as ae, normalizeClass as ee, withKeys as $e, withModifiers as ue, vModelText as Fe, Fragment as U, renderList as Q, createTextVNode as J, inject as dt, toRefs as ct, ref as se, computed as Se, watch as Ue, createBlock as z, unref as we, vModelDynamic as Qt, Teleport as ft, Transition as Te, setBlockTracking as et, toHandlers as Oe, TransitionGroup as Ne, mergeModels as Yt, useModel as Jt, useCssVars as pt, vModelRadio as Xt, vModelSelect as Zt } from "vue";
import V from "lodash.get";
import { directive as Ee } from "vue3-click-away";
import Ce from "@chriscdn/promise-semaphore";
import { format as tt } from "date-fns";
import { disableBodyScroll as en, enableBodyScroll as tn } from "body-scroll-lock";
import nt from "hotkeys-js";
import nn from "@chriscdn/build-url";
import rn from "js-cookie";
import { Session as on } from "@kweli/cs-rest";
import rt from "intl-dateformat";
const mt = S({
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
}), Y = (e, t = "px") => {
  if (!(e == null || e === ""))
    return isNaN(+e) ? String(e) : `${Number(e)}${t}`;
}, Me = S({
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
      const e = {}, t = Y(this.height), n = Y(this.minHeight), o = Y(this.minWidth), a = Y(this.maxHeight), i = Y(this.maxWidth), r = Y(this.width);
      return t && (e.height = t), n && (e.minHeight = n), o && (e.minWidth = o), a && (e.maxHeight = a), i && (e.maxWidth = i), r && (e.width = r), e;
    }
  }
}), sn = S({
  mixins: [Me, mt],
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
      return fe(
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
}), an = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: sn
}, Symbol.toStringTag, { value: "Module" })), ln = S({}), M = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, a] of t)
    n[o] = a;
  return n;
}, un = { class: "k-card-actions" };
function dn(e, t, n, o, a, i) {
  return u(), p("div", un, [
    F(e.$slots, "default")
  ]);
}
const cn = /* @__PURE__ */ M(ln, [["render", dn]]), fn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cn
}, Symbol.toStringTag, { value: "Module" })), pn = S({}), mn = { class: "k-card-text" };
function hn(e, t, n, o, a, i) {
  return u(), p("div", mn, [
    F(e.$slots, "default")
  ]);
}
const gn = /* @__PURE__ */ M(pn, [["render", hn]]), bn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: gn
}, Symbol.toStringTag, { value: "Module" })), _n = S({}), vn = { class: "k-card-title" };
function yn(e, t, n, o, a, i) {
  return u(), p("div", vn, [
    F(e.$slots, "default")
  ]);
}
const $n = /* @__PURE__ */ M(_n, [["render", yn]]), kn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $n
}, Symbol.toStringTag, { value: "Module" })), wn = S({
  name: "MenuDownIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    // fillColor: {
    //   type: String,
    //   default: "currentColor",
    // },
    size: {
      type: Number,
      default: 16
    }
  }
}), Sn = ["aria-hidden", "aria-label"], On = ["width", "height"], xn = { d: "M7,10L12,15L17,10H7Z" }, Tn = { key: 0 };
function Cn(e, t, n, o, a, i) {
  return u(), p("span", pe(e.$attrs, {
    "aria-hidden": !e.title,
    "aria-label": e.title,
    class: "material-design-icon menu-down-icon animate-spin",
    role: "img",
    onClick: t[0] || (t[0] = (r) => e.$emit("click", r))
  }), [
    (u(), p("svg", {
      class: "fill-black hover:fill-green-500 transition-colors",
      width: e.size,
      height: e.size,
      viewBox: "7 10 10 5"
    }, [
      k("path", xn, [
        e.title ? (u(), p("title", Tn, I(e.title), 1)) : L("", !0)
      ])
    ], 8, On))
  ], 16, Sn);
}
const Re = /* @__PURE__ */ M(wn, [["render", Cn]]), Mn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Re
}, Symbol.toStringTag, { value: "Module" })), jn = {}, Pn = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, Kn = /* @__PURE__ */ k("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z" }, null, -1), An = [
  Kn
];
function Ln(e, t) {
  return u(), p("svg", Pn, An);
}
const zn = /* @__PURE__ */ M(jn, [["render", Ln]]), Vn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zn
}, Symbol.toStringTag, { value: "Module" })), Bn = S({
  setup() {
    return { config: Z(he) };
  }
}), In = { clsas: "space-y-2" }, Dn = /* @__PURE__ */ k("hr", null, null, -1), Fn = ["href"];
function Un(e, t, n, o, a, i) {
  return u(), p("div", In, [
    Dn,
    k("a", {
      href: `${e.config.baseUrl}?func=admin.index`
    }, "Admin Home", 8, Fn)
  ]);
}
const Nn = /* @__PURE__ */ M(Bn, [["render", Un]]), En = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Nn
}, Symbol.toStringTag, { value: "Module" }));
function Rn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ht = {}, gt = {}, qe = {};
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
      return n.replace(/^[+-]?/, (a) => a === "-" ? "" : "-");
    let o = [
      "var",
      "calc",
      "min",
      "max",
      "clamp"
    ];
    for (const a of o)
      if (n.includes(`${a}(`))
        return `calc(${n} * -1)`;
  }
})(qe);
var bt = {};
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
    "size",
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
    "textWrap",
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
    "contain",
    "content",
    "forcedColorAdjust"
  ];
})(bt);
var _t = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return t;
    }
  });
  function t(n, o) {
    return n === void 0 ? o : Array.isArray(n) ? n : [
      ...new Set(o.filter((i) => n !== !1 && n[i] !== !1).concat(Object.keys(n).filter((i) => n[i] !== !1)))
    ];
  }
})(_t);
var vt = {}, je = {}, We = { exports: {} }, R = String, yt = function() {
  return { isColorSupported: !1, reset: R, bold: R, dim: R, italic: R, underline: R, inverse: R, hidden: R, strikethrough: R, black: R, red: R, green: R, yellow: R, blue: R, magenta: R, cyan: R, white: R, gray: R, bgBlack: R, bgRed: R, bgGreen: R, bgYellow: R, bgBlue: R, bgMagenta: R, bgCyan: R, bgWhite: R };
};
We.exports = yt();
We.exports.createColors = yt;
var $t = We.exports;
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(d, s) {
    for (var c in s)
      Object.defineProperty(d, c, {
        enumerable: !0,
        get: s[c]
      });
  }
  t(e, {
    dim: function() {
      return r;
    },
    default: function() {
      return l;
    }
  });
  const n = /* @__PURE__ */ o($t);
  function o(d) {
    return d && d.__esModule ? d : {
      default: d
    };
  }
  let a = /* @__PURE__ */ new Set();
  function i(d, s, c) {
    typeof process < "u" && process.env.JEST_WORKER_ID || c && a.has(c) || (c && a.add(c), console.warn(""), s.forEach((h) => console.warn(d, "-", h)));
  }
  function r(d) {
    return n.default.dim(d);
  }
  const l = {
    info(d, s) {
      i(n.default.bold(n.default.cyan("info")), ...Array.isArray(d) ? [
        d
      ] : [
        s,
        d
      ]);
    },
    warn(d, s) {
      i(n.default.bold(n.default.yellow("warn")), ...Array.isArray(d) ? [
        d
      ] : [
        s,
        d
      ]);
    },
    risk(d, s) {
      i(n.default.bold(n.default.magenta("risk")), ...Array.isArray(d) ? [
        d
      ] : [
        s,
        d
      ]);
    }
  };
})(je);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return a;
    }
  });
  const t = /* @__PURE__ */ n(je);
  function n(i) {
    return i && i.__esModule ? i : {
      default: i
    };
  }
  function o({ version: i, from: r, to: l }) {
    t.default.warn(`${r}-color-renamed`, [
      `As of Tailwind CSS ${i}, \`${r}\` has been renamed to \`${l}\`.`,
      "Update your configuration file to silence this warning."
    ]);
  }
  const a = {
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
      return o({
        version: "v2.2",
        from: "lightBlue",
        to: "sky"
      }), this.sky;
    },
    get warmGray() {
      return o({
        version: "v3.0",
        from: "warmGray",
        to: "stone"
      }), this.stone;
    },
    get trueGray() {
      return o({
        version: "v3.0",
        from: "trueGray",
        to: "neutral"
      }), this.neutral;
    },
    get coolGray() {
      return o({
        version: "v3.0",
        from: "coolGray",
        to: "gray"
      }), this.gray;
    },
    get blueGray() {
      return o({
        version: "v3.0",
        from: "blueGray",
        to: "slate"
      }), this.slate;
    }
  };
})(vt);
var kt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "defaults", {
    enumerable: !0,
    get: function() {
      return t;
    }
  });
  function t(n, ...o) {
    for (let r of o) {
      for (let l in r) {
        var a;
        !(n == null || (a = n.hasOwnProperty) === null || a === void 0) && a.call(n, l) || (n[l] = r[l]);
      }
      for (let l of Object.getOwnPropertySymbols(r)) {
        var i;
        !(n == null || (i = n.hasOwnProperty) === null || i === void 0) && i.call(n, l) || (n[l] = r[l]);
      }
    }
    return n;
  }
})(kt);
var wt = {};
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
    let o = n.split("[").length - 1, a = n.split("]").length - 1;
    if (o !== a)
      throw new Error(`Path is invalid. Has unbalanced brackets: ${n}`);
    return n.split(/\.(?![^\[]*\])|[\[\]]/g).filter(Boolean);
  }
})(wt);
var St = {}, Pe = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(h, f) {
    for (var $ in f)
      Object.defineProperty(h, $, {
        enumerable: !0,
        get: f[$]
      });
  }
  t(e, {
    flagEnabled: function() {
      return l;
    },
    issueFlagNotices: function() {
      return s;
    },
    default: function() {
      return c;
    }
  });
  const n = /* @__PURE__ */ a($t), o = /* @__PURE__ */ a(je);
  function a(h) {
    return h && h.__esModule ? h : {
      default: h
    };
  }
  let i = {
    optimizeUniversalDefaults: !1,
    generalizedModifiers: !0,
    disableColorOpacityUtilitiesByDefault: !1,
    relativeContentPathsByDefault: !1
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
  function l(h, f) {
    if (r.future.includes(f)) {
      var $, b, O;
      return h.future === "all" || ((O = (b = h == null || ($ = h.future) === null || $ === void 0 ? void 0 : $[f]) !== null && b !== void 0 ? b : i[f]) !== null && O !== void 0 ? O : !1);
    }
    if (r.experimental.includes(f)) {
      var D, q, W;
      return h.experimental === "all" || ((W = (q = h == null || (D = h.experimental) === null || D === void 0 ? void 0 : D[f]) !== null && q !== void 0 ? q : i[f]) !== null && W !== void 0 ? W : !1);
    }
    return !1;
  }
  function d(h) {
    if (h.experimental === "all")
      return r.experimental;
    var f;
    return Object.keys((f = h == null ? void 0 : h.experimental) !== null && f !== void 0 ? f : {}).filter(($) => r.experimental.includes($) && h.experimental[$]);
  }
  function s(h) {
    if (process.env.JEST_WORKER_ID === void 0 && d(h).length > 0) {
      let f = d(h).map(($) => n.default.yellow($)).join(", ");
      o.default.warn("experimental-flags-enabled", [
        `You have enabled experimental features: ${f}`,
        "Experimental features in Tailwind CSS are not covered by semver, may introduce breaking changes, and can change at any time."
      ]);
    }
  }
  const c = r;
})(Pe);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "normalizeConfig", {
    enumerable: !0,
    get: function() {
      return i;
    }
  });
  const t = Pe, n = /* @__PURE__ */ a(je);
  function o(r) {
    if (typeof WeakMap != "function")
      return null;
    var l = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new WeakMap();
    return (o = function(s) {
      return s ? d : l;
    })(r);
  }
  function a(r, l) {
    if (r && r.__esModule)
      return r;
    if (r === null || typeof r != "object" && typeof r != "function")
      return {
        default: r
      };
    var d = o(l);
    if (d && d.has(r))
      return d.get(r);
    var s = {}, c = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var h in r)
      if (h !== "default" && Object.prototype.hasOwnProperty.call(r, h)) {
        var f = c ? Object.getOwnPropertyDescriptor(r, h) : null;
        f && (f.get || f.set) ? Object.defineProperty(s, h, f) : s[h] = r[h];
      }
    return s.default = r, d && d.set(r, s), s;
  }
  function i(r) {
    if ((() => {
      if (r.purge || !r.content || !Array.isArray(r.content) && !(typeof r.content == "object" && r.content !== null))
        return !1;
      if (Array.isArray(r.content))
        return r.content.every((s) => typeof s == "string" ? !0 : !(typeof (s == null ? void 0 : s.raw) != "string" || s != null && s.extension && typeof (s == null ? void 0 : s.extension) != "string"));
      if (typeof r.content == "object" && r.content !== null) {
        if (Object.keys(r.content).some((s) => ![
          "files",
          "relative",
          "extract",
          "transform"
        ].includes(s)))
          return !1;
        if (Array.isArray(r.content.files)) {
          if (!r.content.files.every((s) => typeof s == "string" ? !0 : !(typeof (s == null ? void 0 : s.raw) != "string" || s != null && s.extension && typeof (s == null ? void 0 : s.extension) != "string")))
            return !1;
          if (typeof r.content.extract == "object") {
            for (let s of Object.values(r.content.extract))
              if (typeof s != "function")
                return !1;
          } else if (!(r.content.extract === void 0 || typeof r.content.extract == "function"))
            return !1;
          if (typeof r.content.transform == "object") {
            for (let s of Object.values(r.content.transform))
              if (typeof s != "function")
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
      var s;
      let { content: c, purge: h, safelist: f } = r;
      return Array.isArray(f) ? f : Array.isArray(c == null ? void 0 : c.safelist) ? c.safelist : Array.isArray(h == null ? void 0 : h.safelist) ? h.safelist : Array.isArray(h == null || (s = h.options) === null || s === void 0 ? void 0 : s.safelist) ? h.options.safelist : [];
    })(), r.blocklist = (() => {
      let { blocklist: s } = r;
      if (Array.isArray(s)) {
        if (s.every((c) => typeof c == "string"))
          return s;
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
        let { content: s } = r;
        return s != null && s.relative ? s.relative : (0, t.flagEnabled)(r, "relativeContentPathsByDefault");
      })(),
      files: (() => {
        let { content: s, purge: c } = r;
        return Array.isArray(c) ? c : Array.isArray(c == null ? void 0 : c.content) ? c.content : Array.isArray(s) ? s : Array.isArray(s == null ? void 0 : s.content) ? s.content : Array.isArray(s == null ? void 0 : s.files) ? s.files : [];
      })(),
      extract: (() => {
        let s = (() => {
          var f, $, b, O, D, q, W, N, H, G;
          return !((f = r.purge) === null || f === void 0) && f.extract ? r.purge.extract : !(($ = r.content) === null || $ === void 0) && $.extract ? r.content.extract : !((b = r.purge) === null || b === void 0 || (O = b.extract) === null || O === void 0) && O.DEFAULT ? r.purge.extract.DEFAULT : !((D = r.content) === null || D === void 0 || (q = D.extract) === null || q === void 0) && q.DEFAULT ? r.content.extract.DEFAULT : !((W = r.purge) === null || W === void 0 || (N = W.options) === null || N === void 0) && N.extractors ? r.purge.options.extractors : !((H = r.content) === null || H === void 0 || (G = H.options) === null || G === void 0) && G.extractors ? r.content.options.extractors : {};
        })(), c = {}, h = (() => {
          var f, $, b, O;
          if (!((f = r.purge) === null || f === void 0 || ($ = f.options) === null || $ === void 0) && $.defaultExtractor)
            return r.purge.options.defaultExtractor;
          if (!((b = r.content) === null || b === void 0 || (O = b.options) === null || O === void 0) && O.defaultExtractor)
            return r.content.options.defaultExtractor;
        })();
        if (h !== void 0 && (c.DEFAULT = h), typeof s == "function")
          c.DEFAULT = s;
        else if (Array.isArray(s))
          for (let { extensions: f, extractor: $ } of s ?? [])
            for (let b of f)
              c[b] = $;
        else
          typeof s == "object" && s !== null && Object.assign(c, s);
        return c;
      })(),
      transform: (() => {
        let s = (() => {
          var h, f, $, b, O, D;
          return !((h = r.purge) === null || h === void 0) && h.transform ? r.purge.transform : !((f = r.content) === null || f === void 0) && f.transform ? r.content.transform : !(($ = r.purge) === null || $ === void 0 || (b = $.transform) === null || b === void 0) && b.DEFAULT ? r.purge.transform.DEFAULT : !((O = r.content) === null || O === void 0 || (D = O.transform) === null || D === void 0) && D.DEFAULT ? r.content.transform.DEFAULT : {};
        })(), c = {};
        return typeof s == "function" && (c.DEFAULT = s), typeof s == "object" && s !== null && Object.assign(c, s), c;
      })()
    };
    for (let s of r.content.files)
      if (typeof s == "string" && /{([^,]*?)}/g.test(s)) {
        n.default.warn("invalid-glob-braces", [
          `The glob pattern ${(0, n.dim)(s)} in your Tailwind CSS configuration is invalid.`,
          `Update it to ${(0, n.dim)(s.replace(/{([^,]*?)}/g, "$1"))} to silence this warning.`
        ]);
        break;
      }
    return r;
  }
})(St);
var Ot = {};
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
    const o = Object.getPrototypeOf(n);
    return o === null || Object.getPrototypeOf(o) === null;
  }
})(Ot);
var xt = {};
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
    return Array.isArray(n) ? n.map((o) => t(o)) : typeof n == "object" && n !== null ? Object.fromEntries(Object.entries(n).map(([o, a]) => [
      o,
      t(a)
    ])) : n;
  }
})(xt);
var Tt = {}, Ct = {};
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
})(Ct);
var He = {}, Ge = {}, Mt = {};
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
})(Mt);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(b, O) {
    for (var D in O)
      Object.defineProperty(b, D, {
        enumerable: !0,
        get: O[D]
      });
  }
  t(e, {
    parseColor: function() {
      return f;
    },
    formatColor: function() {
      return $;
    }
  });
  const n = /* @__PURE__ */ o(Mt);
  function o(b) {
    return b && b.__esModule ? b : {
      default: b
    };
  }
  let a = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i, i = /^#([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i, r = /(?:\d+|\d*\.\d+)%?/, l = /(?:\s*,\s*|\s+)/, d = /\s*[,/]\s*/, s = /var\(--(?:[^ )]*?)(?:,(?:[^ )]*?|var\(--[^ )]*?\)))?\)/, c = new RegExp(`^(rgba?)\\(\\s*(${r.source}|${s.source})(?:${l.source}(${r.source}|${s.source}))?(?:${l.source}(${r.source}|${s.source}))?(?:${d.source}(${r.source}|${s.source}))?\\s*\\)$`), h = new RegExp(`^(hsla?)\\(\\s*((?:${r.source})(?:deg|rad|grad|turn)?|${s.source})(?:${l.source}(${r.source}|${s.source}))?(?:${l.source}(${r.source}|${s.source}))?(?:${d.source}(${r.source}|${s.source}))?\\s*\\)$`);
  function f(b, { loose: O = !1 } = {}) {
    var D, q;
    if (typeof b != "string")
      return null;
    if (b = b.trim(), b === "transparent")
      return {
        mode: "rgb",
        color: [
          "0",
          "0",
          "0"
        ],
        alpha: "0"
      };
    if (b in n.default)
      return {
        mode: "rgb",
        color: n.default[b].map((X) => X.toString())
      };
    let W = b.replace(i, (X, le, re, _, x) => [
      "#",
      le,
      le,
      re,
      re,
      _,
      _,
      x ? x + x : ""
    ].join("")).match(a);
    if (W !== null)
      return {
        mode: "rgb",
        color: [
          parseInt(W[1], 16),
          parseInt(W[2], 16),
          parseInt(W[3], 16)
        ].map((X) => X.toString()),
        alpha: W[4] ? (parseInt(W[4], 16) / 255).toString() : void 0
      };
    var N;
    let H = (N = b.match(c)) !== null && N !== void 0 ? N : b.match(h);
    if (H === null)
      return null;
    let G = [
      H[2],
      H[3],
      H[4]
    ].filter(Boolean).map((X) => X.toString());
    return G.length === 2 && G[0].startsWith("var(") ? {
      mode: H[1],
      color: [
        G[0]
      ],
      alpha: G[1]
    } : !O && G.length !== 3 || G.length < 3 && !G.some((X) => /^var\(.*?\)$/.test(X)) ? null : {
      mode: H[1],
      color: G,
      alpha: (D = H[5]) === null || D === void 0 || (q = D.toString) === null || q === void 0 ? void 0 : q.call(D)
    };
  }
  function $({ mode: b, color: O, alpha: D }) {
    let q = D !== void 0;
    return b === "rgba" || b === "hsla" ? `${b}(${O.join(", ")}${q ? `, ${D}` : ""})` : `${b}(${O.join(" ")}${q ? ` / ${D}` : ""})`;
  }
})(Ge);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(i, r) {
    for (var l in r)
      Object.defineProperty(i, l, {
        enumerable: !0,
        get: r[l]
      });
  }
  t(e, {
    withAlphaValue: function() {
      return o;
    },
    default: function() {
      return a;
    }
  });
  const n = Ge;
  function o(i, r, l) {
    if (typeof i == "function")
      return i({
        opacityValue: r
      });
    let d = (0, n.parseColor)(i, {
      loose: !0
    });
    return d === null ? l : (0, n.formatColor)({
      ...d,
      alpha: r
    });
  }
  function a({ color: i, property: r, variable: l }) {
    let d = [].concat(r);
    if (typeof i == "function")
      return {
        [l]: "1",
        ...Object.fromEntries(d.map((c) => [
          c,
          i({
            opacityVariable: l,
            opacityValue: `var(${l})`
          })
        ]))
      };
    const s = (0, n.parseColor)(i);
    return s === null ? Object.fromEntries(d.map((c) => [
      c,
      i
    ])) : s.alpha !== void 0 ? Object.fromEntries(d.map((c) => [
      c,
      i
    ])) : {
      [l]: "1",
      ...Object.fromEntries(d.map((c) => [
        c,
        (0, n.formatColor)({
          ...s,
          alpha: `var(${l})`
        })
      ]))
    };
  }
})(He);
var Qe = {}, jt = {}, Ke = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "splitAtTopLevelOnly", {
    enumerable: !0,
    get: function() {
      return t;
    }
  });
  function t(n, o) {
    let a = [], i = [], r = 0, l = !1;
    for (let d = 0; d < n.length; d++) {
      let s = n[d];
      a.length === 0 && s === o[0] && !l && (o.length === 1 || n.slice(d, d + o.length) === o) && (i.push(n.slice(r, d)), r = d + o.length), l ? l = !1 : s === "\\" && (l = !0), s === "(" || s === "[" || s === "{" ? a.push(s) : (s === ")" && a[a.length - 1] === "(" || s === "]" && a[a.length - 1] === "[" || s === "}" && a[a.length - 1] === "{") && a.pop();
    }
    return i.push(n.slice(r)), i;
  }
})(Ke);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(d, s) {
    for (var c in s)
      Object.defineProperty(d, c, {
        enumerable: !0,
        get: s[c]
      });
  }
  t(e, {
    parseBoxShadowValue: function() {
      return r;
    },
    formatBoxShadowValue: function() {
      return l;
    }
  });
  const n = Ke;
  let o = /* @__PURE__ */ new Set([
    "inset",
    "inherit",
    "initial",
    "revert",
    "unset"
  ]), a = /\ +(?![^(]*\))/g, i = /^-?(\d+|\.\d+)(.*?)$/g;
  function r(d) {
    return (0, n.splitAtTopLevelOnly)(d, ",").map((c) => {
      let h = c.trim(), f = {
        raw: h
      }, $ = h.split(a), b = /* @__PURE__ */ new Set();
      for (let O of $)
        i.lastIndex = 0, !b.has("KEYWORD") && o.has(O) ? (f.keyword = O, b.add("KEYWORD")) : i.test(O) ? b.has("X") ? b.has("Y") ? b.has("BLUR") ? b.has("SPREAD") || (f.spread = O, b.add("SPREAD")) : (f.blur = O, b.add("BLUR")) : (f.y = O, b.add("Y")) : (f.x = O, b.add("X")) : f.color ? (f.unknown || (f.unknown = []), f.unknown.push(O)) : f.color = O;
      return f.valid = f.x !== void 0 && f.y !== void 0, f;
    });
  }
  function l(d) {
    return d.map((s) => s.valid ? [
      s.keyword,
      s.x,
      s.y,
      s.blur,
      s.spread,
      s.color
    ].filter(Boolean).join(" ") : s.raw).join(", ");
  }
})(jt);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(m, j) {
    for (var A in j)
      Object.defineProperty(m, A, {
        enumerable: !0,
        get: j[A]
      });
  }
  t(e, {
    normalize: function() {
      return d;
    },
    url: function() {
      return c;
    },
    number: function() {
      return h;
    },
    percentage: function() {
      return f;
    },
    length: function() {
      return O;
    },
    lineWidth: function() {
      return q;
    },
    shadow: function() {
      return W;
    },
    color: function() {
      return N;
    },
    image: function() {
      return H;
    },
    gradient: function() {
      return X;
    },
    position: function() {
      return re;
    },
    familyName: function() {
      return _;
    },
    genericName: function() {
      return T;
    },
    absoluteSize: function() {
      return y;
    },
    relativeSize: function() {
      return v;
    }
  });
  const n = Ge, o = jt, a = Ke;
  let i = [
    "min",
    "max",
    "clamp",
    "calc"
  ];
  function r(m) {
    return i.some((j) => new RegExp(`^${j}\\(.*\\)`).test(m));
  }
  const l = /* @__PURE__ */ new Set([
    // Concrete properties
    "scroll-timeline-name",
    "timeline-scope",
    "view-timeline-name",
    "font-palette",
    // Shorthand properties
    "scroll-timeline",
    "animation-timeline",
    "view-timeline"
  ]);
  function d(m, j = null, A = !0) {
    let K = j && l.has(j.property);
    return m.startsWith("--") && !K ? `var(${m})` : m.includes("url(") ? m.split(/(url\(.*?\))/g).filter(Boolean).map((E) => /^url\(.*?\)$/.test(E) ? E : d(E, j, !1)).join("") : (m = m.replace(/([^\\])_+/g, (E, Le) => Le + " ".repeat(E.length - 1)).replace(/^_/g, " ").replace(/\\_/g, "_"), A && (m = m.trim()), m = s(m), m);
  }
  function s(m) {
    let j = [
      "theme"
    ], A = [
      "min-content",
      "max-content",
      "fit-content",
      // Env
      "safe-area-inset-top",
      "safe-area-inset-right",
      "safe-area-inset-bottom",
      "safe-area-inset-left",
      "titlebar-area-x",
      "titlebar-area-y",
      "titlebar-area-width",
      "titlebar-area-height",
      "keyboard-inset-top",
      "keyboard-inset-right",
      "keyboard-inset-bottom",
      "keyboard-inset-left",
      "keyboard-inset-width",
      "keyboard-inset-height",
      "radial-gradient",
      "linear-gradient",
      "conic-gradient",
      "repeating-radial-gradient",
      "repeating-linear-gradient",
      "repeating-conic-gradient"
    ];
    return m.replace(/(calc|min|max|clamp)\(.+\)/g, (K) => {
      let E = "";
      function Le() {
        let ne = E.trimEnd();
        return ne[ne.length - 1];
      }
      for (let ne = 0; ne < K.length; ne++) {
        let be = function(oe) {
          return oe.split("").every((ce, ke) => K[ne + ke] === ce);
        }, ze = function(oe) {
          let ce = 1 / 0;
          for (let Wt of oe) {
            let Be = K.indexOf(Wt, ne);
            Be !== -1 && Be < ce && (ce = Be);
          }
          let ke = K.slice(ne, ce);
          return ne += ke.length - 1, ke;
        }, Ve = K[ne];
        if (be("var"))
          E += ze([
            ")",
            ","
          ]);
        else if (A.some((oe) => be(oe))) {
          let oe = A.find((ce) => be(ce));
          E += oe, ne += oe.length - 1;
        } else
          j.some((oe) => be(oe)) ? E += ze([
            ")"
          ]) : be("[") ? E += ze([
            "]"
          ]) : [
            "+",
            "-",
            "*",
            "/"
          ].includes(Ve) && ![
            "(",
            "+",
            "-",
            "*",
            "/",
            ","
          ].includes(Le()) ? E += ` ${Ve} ` : E += Ve;
      }
      return E.replace(/\s+/g, " ");
    });
  }
  function c(m) {
    return m.startsWith("url(");
  }
  function h(m) {
    return !isNaN(Number(m)) || r(m);
  }
  function f(m) {
    return m.endsWith("%") && h(m.slice(0, -1)) || r(m);
  }
  let b = `(?:${[
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
  function O(m) {
    return m === "0" || new RegExp(`^[+-]?[0-9]*.?[0-9]+(?:[eE][+-]?[0-9]+)?${b}$`).test(m) || r(m);
  }
  let D = /* @__PURE__ */ new Set([
    "thin",
    "medium",
    "thick"
  ]);
  function q(m) {
    return D.has(m);
  }
  function W(m) {
    let j = (0, o.parseBoxShadowValue)(d(m));
    for (let A of j)
      if (!A.valid)
        return !1;
    return !0;
  }
  function N(m) {
    let j = 0;
    return (0, a.splitAtTopLevelOnly)(m, "_").every((K) => (K = d(K), K.startsWith("var(") ? !0 : (0, n.parseColor)(K, {
      loose: !0
    }) !== null ? (j++, !0) : !1)) ? j > 0 : !1;
  }
  function H(m) {
    let j = 0;
    return (0, a.splitAtTopLevelOnly)(m, ",").every((K) => (K = d(K), K.startsWith("var(") ? !0 : c(K) || X(K) || [
      "element(",
      "image(",
      "cross-fade(",
      "image-set("
    ].some((E) => K.startsWith(E)) ? (j++, !0) : !1)) ? j > 0 : !1;
  }
  let G = /* @__PURE__ */ new Set([
    "conic-gradient",
    "linear-gradient",
    "radial-gradient",
    "repeating-conic-gradient",
    "repeating-linear-gradient",
    "repeating-radial-gradient"
  ]);
  function X(m) {
    m = d(m);
    for (let j of G)
      if (m.startsWith(`${j}(`))
        return !0;
    return !1;
  }
  let le = /* @__PURE__ */ new Set([
    "center",
    "top",
    "right",
    "bottom",
    "left"
  ]);
  function re(m) {
    let j = 0;
    return (0, a.splitAtTopLevelOnly)(m, "_").every((K) => (K = d(K), K.startsWith("var(") ? !0 : le.has(K) || O(K) || f(K) ? (j++, !0) : !1)) ? j > 0 : !1;
  }
  function _(m) {
    let j = 0;
    return (0, a.splitAtTopLevelOnly)(m, ",").every((K) => (K = d(K), K.startsWith("var(") ? !0 : K.includes(" ") && !/(['"])([^"']+)\1/g.test(K) || /^\d/g.test(K) ? !1 : (j++, !0))) ? j > 0 : !1;
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
  function T(m) {
    return x.has(m);
  }
  let g = /* @__PURE__ */ new Set([
    "xx-small",
    "x-small",
    "small",
    "medium",
    "large",
    "x-large",
    "xx-large",
    "xxx-large"
  ]);
  function y(m) {
    return g.has(m);
  }
  let w = /* @__PURE__ */ new Set([
    "larger",
    "smaller"
  ]);
  function v(m) {
    return w.has(m);
  }
})(Qe);
var Pt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "backgroundSize", {
    enumerable: !0,
    get: function() {
      return o;
    }
  });
  const t = Qe, n = Ke;
  function o(a) {
    let i = [
      "cover",
      "contain"
    ];
    return (0, n.splitAtTopLevelOnly)(a, ",").every((r) => {
      let l = (0, n.splitAtTopLevelOnly)(r, "_").filter(Boolean);
      return l.length === 1 && i.includes(l[0]) ? !0 : l.length !== 1 && l.length !== 2 ? !1 : l.every((d) => (0, t.length)(d) || (0, t.percentage)(d) || d === "auto");
    });
  }
})(Pt);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(_, x) {
    for (var T in x)
      Object.defineProperty(_, T, {
        enumerable: !0,
        get: x[T]
      });
  }
  t(e, {
    updateAllClasses: function() {
      return s;
    },
    asValue: function() {
      return f;
    },
    parseColorFormat: function() {
      return O;
    },
    asColor: function() {
      return q;
    },
    asLookupValue: function() {
      return W;
    },
    typeMap: function() {
      return H;
    },
    coerceValue: function() {
      return le;
    },
    getMatchingTypes: function() {
      return re;
    }
  });
  const n = /* @__PURE__ */ d(Ct), o = He, a = Qe, i = /* @__PURE__ */ d(qe), r = Pt, l = Pe;
  function d(_) {
    return _ && _.__esModule ? _ : {
      default: _
    };
  }
  function s(_, x) {
    _.walkClasses((T) => {
      T.value = x(T.value), T.raws && T.raws.value && (T.raws.value = (0, n.default)(T.raws.value));
    });
  }
  function c(_, x) {
    if (!$(_))
      return;
    let T = _.slice(1, -1);
    if (x(T))
      return (0, a.normalize)(T);
  }
  function h(_, x = {}, T) {
    let g = x[_];
    if (g !== void 0)
      return (0, i.default)(g);
    if ($(_)) {
      let y = c(_, T);
      return y === void 0 ? void 0 : (0, i.default)(y);
    }
  }
  function f(_, x = {}, { validate: T = () => !0 } = {}) {
    var g;
    let y = (g = x.values) === null || g === void 0 ? void 0 : g[_];
    return y !== void 0 ? y : x.supportsNegativeValues && _.startsWith("-") ? h(_.slice(1), x.values, T) : c(_, T);
  }
  function $(_) {
    return _.startsWith("[") && _.endsWith("]");
  }
  function b(_) {
    let x = _.lastIndexOf("/"), T = _.lastIndexOf("[", x), g = _.indexOf("]", x);
    return _[x - 1] === "]" || _[x + 1] === "[" || T !== -1 && g !== -1 && T < x && x < g && (x = _.lastIndexOf("/", T)), x === -1 || x === _.length - 1 ? [
      _,
      void 0
    ] : $(_) && !_.includes("]/[") ? [
      _,
      void 0
    ] : [
      _.slice(0, x),
      _.slice(x + 1)
    ];
  }
  function O(_) {
    if (typeof _ == "string" && _.includes("<alpha-value>")) {
      let x = _;
      return ({ opacityValue: T = 1 }) => x.replace("<alpha-value>", T);
    }
    return _;
  }
  function D(_) {
    return (0, a.normalize)(_.slice(1, -1));
  }
  function q(_, x = {}, { tailwindConfig: T = {} } = {}) {
    var g;
    if (((g = x.values) === null || g === void 0 ? void 0 : g[_]) !== void 0) {
      var y;
      return O((y = x.values) === null || y === void 0 ? void 0 : y[_]);
    }
    let [w, v] = b(_);
    if (v !== void 0) {
      var m, j, A, K;
      let E = (K = (m = x.values) === null || m === void 0 ? void 0 : m[w]) !== null && K !== void 0 ? K : $(w) ? w.slice(1, -1) : void 0;
      return E === void 0 ? void 0 : (E = O(E), $(v) ? (0, o.withAlphaValue)(E, D(v)) : ((j = T.theme) === null || j === void 0 || (A = j.opacity) === null || A === void 0 ? void 0 : A[v]) === void 0 ? void 0 : (0, o.withAlphaValue)(E, T.theme.opacity[v]));
    }
    return f(_, x, {
      validate: a.color
    });
  }
  function W(_, x = {}) {
    var T;
    return (T = x.values) === null || T === void 0 ? void 0 : T[_];
  }
  function N(_) {
    return (x, T) => f(x, T, {
      validate: _
    });
  }
  let H = {
    any: f,
    color: q,
    url: N(a.url),
    image: N(a.image),
    length: N(a.length),
    percentage: N(a.percentage),
    position: N(a.position),
    lookup: W,
    "generic-name": N(a.genericName),
    "family-name": N(a.familyName),
    number: N(a.number),
    "line-width": N(a.lineWidth),
    "absolute-size": N(a.absoluteSize),
    "relative-size": N(a.relativeSize),
    shadow: N(a.shadow),
    size: N(r.backgroundSize)
  }, G = Object.keys(H);
  function X(_, x) {
    let T = _.indexOf(x);
    return T === -1 ? [
      void 0,
      _
    ] : [
      _.slice(0, T),
      _.slice(T + 1)
    ];
  }
  function le(_, x, T, g) {
    if (T.values && x in T.values)
      for (let { type: w } of _ ?? []) {
        let v = H[w](x, T, {
          tailwindConfig: g
        });
        if (v !== void 0)
          return [
            v,
            w,
            null
          ];
      }
    if ($(x)) {
      let w = x.slice(1, -1), [v, m] = X(w, ":");
      if (!/^[\w-_]+$/g.test(v))
        m = w;
      else if (v !== void 0 && !G.includes(v))
        return [];
      if (m.length > 0 && G.includes(v))
        return [
          f(`[${m}]`, T),
          v,
          null
        ];
    }
    let y = re(_, x, T, g);
    for (let w of y)
      return w;
    return [];
  }
  function* re(_, x, T, g) {
    let y = (0, l.flagEnabled)(g, "generalizedModifiers"), [w, v] = b(x);
    if (y && T.modifiers != null && (T.modifiers === "any" || typeof T.modifiers == "object" && (v && $(v) || v in T.modifiers)) || (w = x, v = void 0), v !== void 0 && w === "" && (w = "DEFAULT"), v !== void 0 && typeof T.modifiers == "object") {
      var j, A;
      let K = (A = (j = T.modifiers) === null || j === void 0 ? void 0 : j[v]) !== null && A !== void 0 ? A : null;
      K !== null ? v = K : $(v) && (v = D(v));
    }
    for (let { type: K } of _ ?? []) {
      let E = H[K](w, T, {
        tailwindConfig: g
      });
      E !== void 0 && (yield [
        E,
        K,
        v ?? null
      ]);
    }
  }
})(Tt);
var Kt = {};
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
})(Kt);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return T;
    }
  });
  const t = /* @__PURE__ */ $(qe), n = /* @__PURE__ */ $(bt), o = /* @__PURE__ */ $(_t), a = /* @__PURE__ */ $(vt), i = kt, r = wt, l = St, d = /* @__PURE__ */ $(Ot), s = xt, c = Tt, h = He, f = /* @__PURE__ */ $(Kt);
  function $(g) {
    return g && g.__esModule ? g : {
      default: g
    };
  }
  function b(g) {
    return typeof g == "function";
  }
  function O(g, ...y) {
    let w = y.pop();
    for (let v of y)
      for (let m in v) {
        let j = w(g[m], v[m]);
        j === void 0 ? (0, d.default)(g[m]) && (0, d.default)(v[m]) ? g[m] = O({}, g[m], v[m], w) : g[m] = v[m] : g[m] = j;
      }
    return g;
  }
  const D = {
    colors: a.default,
    negative(g) {
      return Object.keys(g).filter((y) => g[y] !== "0").reduce((y, w) => {
        let v = (0, t.default)(g[w]);
        return v !== void 0 && (y[`-${w}`] = v), y;
      }, {});
    },
    breakpoints(g) {
      return Object.keys(g).filter((y) => typeof g[y] == "string").reduce((y, w) => ({
        ...y,
        [`screen-${w}`]: g[w]
      }), {});
    }
  };
  function q(g, ...y) {
    return b(g) ? g(...y) : g;
  }
  function W(g) {
    return g.reduce((y, { extend: w }) => O(y, w, (v, m) => v === void 0 ? [
      m
    ] : Array.isArray(v) ? [
      m,
      ...v
    ] : [
      m,
      v
    ]), {});
  }
  function N(g) {
    return {
      ...g.reduce((y, w) => (0, i.defaults)(y, w), {}),
      // In order to resolve n config objects, we combine all of their `extend` properties
      // into arrays instead of objects so they aren't overridden.
      extend: W(g)
    };
  }
  function H(g, y) {
    if (Array.isArray(g) && (0, d.default)(g[0]))
      return g.concat(y);
    if (Array.isArray(y) && (0, d.default)(y[0]) && (0, d.default)(g))
      return [
        g,
        ...y
      ];
    if (Array.isArray(y))
      return y;
  }
  function G({ extend: g, ...y }) {
    return O(y, g, (w, v) => !b(w) && !v.some(b) ? O({}, w, ...v, H) : (m, j) => O({}, ...[
      w,
      ...v
    ].map((A) => q(A, m, j)), H));
  }
  function* X(g) {
    let y = (0, r.toPath)(g);
    if (y.length === 0 || (yield y, Array.isArray(g)))
      return;
    let w = /^(.*?)\s*\/\s*([^/]+)$/, v = g.match(w);
    if (v !== null) {
      let [, m, j] = v, A = (0, r.toPath)(m);
      A.alpha = j, yield A;
    }
  }
  function le(g) {
    const y = (w, v) => {
      for (const m of X(w)) {
        let j = 0, A = g;
        for (; A != null && j < m.length; )
          A = A[m[j++]], A = b(A) && (m.alpha === void 0 || j <= m.length - 1) ? A(y, D) : A;
        if (A !== void 0) {
          if (m.alpha !== void 0) {
            let K = (0, c.parseColorFormat)(A);
            return (0, h.withAlphaValue)(K, m.alpha, (0, f.default)(K));
          }
          return (0, d.default)(A) ? (0, s.cloneDeep)(A) : A;
        }
      }
      return v;
    };
    return Object.assign(y, {
      theme: y,
      ...D
    }), Object.keys(g).reduce((w, v) => (w[v] = b(g[v]) ? g[v](y, D) : g[v], w), {});
  }
  function re(g) {
    let y = [];
    return g.forEach((w) => {
      y = [
        ...y,
        w
      ];
      var v;
      const m = (v = w == null ? void 0 : w.plugins) !== null && v !== void 0 ? v : [];
      m.length !== 0 && m.forEach((j) => {
        j.__isOptionsFunction && (j = j());
        var A;
        y = [
          ...y,
          ...re([
            (A = j == null ? void 0 : j.config) !== null && A !== void 0 ? A : {}
          ])
        ];
      });
    }), y;
  }
  function _(g) {
    return [
      ...g
    ].reduceRight((w, v) => b(v) ? v({
      corePlugins: w
    }) : (0, o.default)(v, w), n.default);
  }
  function x(g) {
    return [
      ...g
    ].reduceRight((w, v) => [
      ...w,
      ...v
    ], []);
  }
  function T(g) {
    let y = [
      ...re(g),
      {
        prefix: "",
        important: !1,
        separator: ":"
      }
    ];
    var w, v;
    return (0, l.normalizeConfig)((0, i.defaults)({
      theme: le(G(N(y.map((m) => (w = m == null ? void 0 : m.theme) !== null && w !== void 0 ? w : {})))),
      corePlugins: _(y.map((m) => m.corePlugins)),
      plugins: x(g.map((m) => (v = m == null ? void 0 : m.plugins) !== null && v !== void 0 ? v : []))
    }, ...y));
  }
})(gt);
var At = {}, qn = {
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
      busy: 'busy="true"',
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
      "span-7": "span 7 / span 7",
      "span-8": "span 8 / span 8",
      "span-9": "span 9 / span 9",
      "span-10": "span 10 / span 10",
      "span-11": "span 11 / span 11",
      "span-12": "span 12 / span 12",
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
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      13: "13"
    },
    gridRowStart: {
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
    gridTemplateColumns: {
      none: "none",
      subgrid: "subgrid",
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
      subgrid: "subgrid",
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
      svh: "100svh",
      lvh: "100lvh",
      dvh: "100dvh",
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
      svh: "100svh",
      lvh: "100lvh",
      dvh: "100dvh",
      min: "min-content",
      max: "max-content",
      fit: "fit-content"
    }),
    maxWidth: ({ theme: e, breakpoints: t }) => ({
      ...e("spacing"),
      none: "none",
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
    minHeight: ({ theme: e }) => ({
      ...e("spacing"),
      full: "100%",
      screen: "100vh",
      svh: "100svh",
      lvh: "100lvh",
      dvh: "100dvh",
      min: "min-content",
      max: "max-content",
      fit: "fit-content"
    }),
    minWidth: ({ theme: e }) => ({
      ...e("spacing"),
      full: "100%",
      min: "min-content",
      max: "max-content",
      fit: "fit-content"
    }),
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
      15: "0.15",
      20: "0.2",
      25: "0.25",
      30: "0.3",
      35: "0.35",
      40: "0.4",
      45: "0.45",
      50: "0.5",
      55: "0.55",
      60: "0.6",
      65: "0.65",
      70: "0.7",
      75: "0.75",
      80: "0.8",
      85: "0.85",
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
    size: ({ theme: e }) => ({
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
      min: "min-content",
      max: "max-content",
      fit: "fit-content"
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
      svw: "100svw",
      lvw: "100lvw",
      dvw: "100dvw",
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
      return a;
    }
  });
  const t = /* @__PURE__ */ o(qn), n = Pe;
  function o(i) {
    return i && i.__esModule ? i : {
      default: i
    };
  }
  function a(i) {
    var r;
    const l = ((r = i == null ? void 0 : i.presets) !== null && r !== void 0 ? r : [
      t.default
    ]).slice().reverse().flatMap((c) => a(c instanceof Function ? c() : c)), d = {
      // Add experimental configs here...
      respectDefaultRingColorOpacity: {
        theme: {
          ringColor: ({ theme: c }) => ({
            DEFAULT: "#3b82f67f",
            ...c("colors")
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
    }, s = Object.keys(d).filter((c) => (0, n.flagEnabled)(i, c)).map((c) => d[c]);
    return [
      i,
      ...s,
      ...l
    ];
  }
})(At);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return a;
    }
  });
  const t = /* @__PURE__ */ o(gt), n = /* @__PURE__ */ o(At);
  function o(i) {
    return i && i.__esModule ? i : {
      default: i
    };
  }
  function a(...i) {
    let [, ...r] = (0, n.default)(i[0]);
    return (0, t.default)([
      ...i,
      ...r
    ]);
  }
})(ht);
let Ie = ht;
var Wn = (Ie.__esModule ? Ie : { default: Ie }).default;
const Hn = /* @__PURE__ */ Rn(Wn), Gn = {
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
  },
  // safelist: ["hidden"],
  important: ".k-app"
}, Qn = Hn(Gn);
function Yn(e) {
  e = e.replace("#", "");
  const t = parseInt(
    e.length === 3 ? e.slice(0, 1).repeat(2) : e.slice(0, 2),
    16
  ), n = parseInt(
    e.length === 3 ? e.slice(1, 2).repeat(2) : e.slice(2, 4),
    16
  ), o = parseInt(
    e.length === 3 ? e.slice(2, 3).repeat(2) : e.slice(4, 6),
    16
  ), a = parseInt(e.length === 3 ? "ff" : e.slice(6, 8), 16);
  return {
    red: t,
    green: n,
    blue: o,
    alpha: a
  };
}
const Jn = S({
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
      const t = V(Qn, ["theme", "colors"]), n = V(t, e);
      return typeof n == "string" ? n : e;
    },
    fontColorForBackgroundColor(e) {
      const t = Yn(e);
      return t.alpha * 255 < 150 || Math.round(
        (t.red * 299 + t.green * 587 + t.blue * 114) / 1e3
      ) > 125 ? "#000" : "#fff";
    }
  }
}), Xn = S({
  mixins: [Jn]
}), Zn = { class: "flex-grow" };
function er(e, t, n, o, a, i) {
  return u(), p("div", {
    class: "k-alert",
    style: ie([e.colorableBackgroundStyle, e.colorableTextStyleForBackground])
  }, [
    k("div", Zn, [
      F(e.$slots, "default")
    ])
  ], 4);
}
const tr = /* @__PURE__ */ M(Xn, [["render", er]]), nr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: tr
}, Symbol.toStringTag, { value: "Module" })), rr = {}, or = { class: "k-app" };
function sr(e, t) {
  const n = C("KSnackbar"), o = C("KConfirm");
  return u(), p("div", or, [
    B(o, null, {
      default: P(() => [
        B(n, null, {
          default: P(() => [
            F(e.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    })
  ]);
}
const ir = /* @__PURE__ */ M(rr, [["render", sr]]), ar = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ir
}, Symbol.toStringTag, { value: "Module" })), lr = S({
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
        width: Y(this.width)
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
        e ? this.returnObject ? this.$emit("update:modelValue", e) : this.$emit("update:modelValue", V(e, this.itemValue, e)) : this.$emit("update:modelValue", null);
      },
      get() {
        return this.isObject(this.modelValue) ? this.modelValue : this.items.find(
          (e) => V(e, this.itemValue, e) == this.modelValue
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
        this.isObject(this.valueLocal) ? V(this.valueLocal, this.itemText, "") : this.valueLocal
      )));
    },
    valueLocal: {
      handler(e) {
        this.inputText = V(this.valueLocal, this.itemText, e);
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
      this.combobox ? t && (this.valueLocal = t) : (this.valueLocal = t, this.inputText = V(
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
}), ur = { class: "k-autocomplete-input" }, dr = ["placeholder", "readonly"], cr = {
  key: 0,
  class: "k-autocomplete-items"
}, fr = ["onClick"];
function pr(e, t, n, o, a, i) {
  const r = De("click-away");
  return ae((u(), p("div", {
    class: "k-autocomplete",
    style: ie([e.style])
  }, [
    F(e.$slots, "prepend", { item: e.valueLocal }),
    k("div", ur, [
      ae(k("input", {
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = (l) => e.inputText = l),
        class: ee(["k-input", { invalidSelection: !e.isValidSelection }]),
        type: "search",
        autocomplete: "off",
        placeholder: e.placeholderText,
        readonly: !e.editable,
        onSearch: t[1] || (t[1] = (...l) => e.clearInput && e.clearInput(...l)),
        onKeydown: [
          t[2] || (t[2] = $e(ue((l) => e.currentFocus = Math.max(-1, e.currentFocus - 1), ["prevent"]), ["arrow-up"])),
          t[3] || (t[3] = $e(ue((l) => e.currentFocus = Math.min(e.items.length - 1, e.currentFocus + 1), ["prevent"]), ["arrow-down"])),
          t[4] || (t[4] = $e(ue((l) => e.select(e.currentFocus), ["prevent"]), ["enter"])),
          t[6] || (t[6] = $e((...l) => e.setBlur && e.setBlur(...l), ["tab"]))
        ],
        onFocus: t[5] || (t[5] = (...l) => e.setFocus && e.setFocus(...l)),
        onKeyup: t[7] || (t[7] = (...l) => e.keyup && e.keyup(...l))
      }, null, 42, dr), [
        [Fe, e.inputText]
      ]),
      e.focus && e.items.length && e.inputText ? (u(), p("div", cr, [
        (u(!0), p(U, null, Q(e.itemsFiltered, (l, d) => (u(), p("div", {
          key: d,
          class: ee(["k-autocomplete-item", { "k-autocomplete-active": e.currentFocus == d }]),
          onClick: (s) => e.select(d)
        }, [
          F(e.$slots, "item", { item: l }, () => [
            J(I(l), 1)
          ])
        ], 10, fr))), 128))
      ])) : L("", !0)
    ])
  ], 4)), [
    [r, e.setBlur]
  ]);
}
const mr = /* @__PURE__ */ M(lr, [["render", pr]]), hr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mr
}, Symbol.toStringTag, { value: "Module" })), _e = new Ce(), gr = (e) => {
  const t = e.results.data.properties, n = e.results.data.versions, o = n[n.length - 1];
  return {
    dataId: t.id,
    name: t.name,
    subtype: t.type,
    subtypeName: t.type_name,
    comment: t.description,
    mimetype: t.mime_type,
    parentId: t.parent_id,
    createDate: t.create_date,
    modifyDate: t.modify_date,
    gif: t.icon,
    gif32: t.icon_large,
    userId: t.owner_user_id,
    groupId: t.owner_group_id,
    version: o == null ? void 0 : o.version_number,
    versionNum: o == null ? void 0 : o.version_number_name,
    modifiedImageCallback: "",
    categories: {},
    url: "",
    exatt1: null,
    originDataId: null
  };
};
class br {
  constructor() {
    te(this, "session");
    te(this, "queueItems");
    te(this, "intervalId");
    this.session = null, this.queueItems = [], this.intervalId = 0;
  }
  resetQueue() {
    this.queueItems = [];
  }
  queue(t, n, o) {
    this.session = t, this.queueItems.push({
      resolveFunc: n,
      dataId: o
    }), clearInterval(this.intervalId), this.queueItems.length < 20 ? this.intervalId = setTimeout(this.processQueue.bind(this), 50) : this.processQueue();
  }
  async processQueue() {
    const t = this.session.rpcClient("/api/v1/rh/rpc/node/"), n = this.queueItems;
    this.resetQueue();
    const o = n.map((i) => i.dataId), a = await t.request("NodesLookup", {
      dataids: o
    });
    n.forEach((i) => {
      const r = i.dataId, l = i.resolveFunc, d = a.find((s) => s.dataId === r);
      l(d ?? null);
    });
  }
}
class _r {
  constructor() {
    te(this, "nodes");
    te(this, "nodeLookupQueue");
    this.nodes = {}, this.nodeLookupQueue = new br();
  }
  async lookupLegacy(t, n) {
    if (n)
      try {
        if (await _e.acquire(n), this.nodes.hasOwnProperty(n))
          return this.nodes[n];
        {
          const o = await t.nodes.node({ dataid: n }), a = gr(o.data);
          return this.nodes[n] = a, a;
        }
      } catch {
        return this.nodes[n] = null, null;
      } finally {
        _e.release(n);
      }
  }
  async lookupRPC(t, n) {
    return n ? (await _e.acquire(n), this.nodes.hasOwnProperty(n) ? (_e.release(n), this.nodes[n]) : new Promise((o, a) => {
      const i = (r) => {
        r instanceof Error ? a(r) : (this.nodes[n] = r, o(r)), _e.release(n);
      };
      this.nodeLookupQueue.queue(t, i, n);
    })) : null;
  }
  async lookup(t, n, o = !1) {
    return o ? this.lookupLegacy(t, n) : this.lookupRPC(t, n);
  }
}
const Lt = new _r();
function Z(e, t) {
  const n = dt(e, t);
  if (!n)
    throw new Error(`Could not resolve ${e.description}`);
  return n;
}
const me = Symbol("session"), he = Symbol("config"), zt = Symbol("snackbar"), Vt = Symbol(
  "dateTimeFormatterKey"
), Bt = Symbol("confirmDialogKey"), Ae = () => {
  const e = dt(me, null);
  if (!e)
    throw new Error(
      "Failed to inject session. Make sure @kweli/cs-vue-vite-plugin is set up properly."
    );
  return e;
}, vr = {}, yr = { class: "h-3 w-36 bg-slate-200 rounded animate-pulse" };
function $r(e, t) {
  return u(), p("div", yr);
}
const It = /* @__PURE__ */ M(vr, [["render", $r]]), kr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: It
}, Symbol.toStringTag, { value: "Module" })), wr = { class: "flex items-center gap-2" }, Sr = { class: "flex items-center gap-2" }, Or = ["src"], xr = ["href"], Tr = ["innerHTML"], Cr = /* @__PURE__ */ S({
  __name: "KBrowseLink",
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
    },
    modernMenu: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = Ae(), n = e, { nodeRec: o, dataid: a, image: i, clickable: r, legacy: l, modernMenu: d } = ct(n), s = se(null), c = se(!1), h = Se(() => o.value ?? s.value);
    return Ue(
      a,
      async (f) => {
        if (f)
          try {
            c.value = !0, s.value = await Lt.lookup(
              t,
              f,
              l.value
            );
          } finally {
            c.value = !1;
          }
      },
      { immediate: !0 }
    ), (f, $) => {
      const b = C("KFunctionMenuModern"), O = C("KFunctionMenu");
      return u(), p("div", wr, [
        c.value ? (u(), z(It, { key: 0 })) : h.value ? (u(), p(U, { key: 1 }, [
          k("div", Sr, [
            we(i) ? (u(), p("img", {
              key: 0,
              src: h.value.gif,
              width: "16",
              height: "16"
            }, null, 8, Or)) : L("", !0),
            k("a", {
              href: h.value.url
            }, I(h.value.name), 9, xr)
          ]),
          we(r) ? (u(), p(U, { key: 0 }, [
            we(d) ? (u(), z(b, {
              key: 0,
              dataid: h.value.dataId
            }, null, 8, ["dataid"])) : (u(), z(O, {
              key: 1,
              dataid: h.value.dataId
            }, null, 8, ["dataid"]))
          ], 64)) : L("", !0),
          k("div", {
            class: "flex items-center",
            innerHTML: h.value.modifiedImageCallback
          }, null, 8, Tr)
        ], 64)) : L("", !0)
      ]);
    };
  }
}), Mr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Cr
}, Symbol.toStringTag, { value: "Module" })), jr = S({
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
}), Pr = ["disabled"];
function Kr(e, t, n, o, a, i) {
  return u(), p("button", pe({
    class: ["k-button", e.classObj],
    disabled: e.disabled,
    type: "button"
  }, e.$attrs, {
    onClick: t[0] || (t[0] = (r) => e.$emit("click"))
  }), [
    F(e.$slots, "default")
  ], 16, Pr);
}
const Ar = /* @__PURE__ */ M(jr, [["render", Kr]]), Lr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ar
}, Symbol.toStringTag, { value: "Module" })), zr = S({
  provide() {
    return {
      // @ts-ignore - not sure why this complains
      [Bt]: this
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
      message: o
    }) {
      return this.noLabel = e, this.yesLabel = t, this.title = n, this.message = o, new Promise((a) => {
        this.resolve = a, this.dialog = !0;
      });
    }
  }
});
function Vr(e, t, n, o, a, i) {
  const r = C("KCardTitle"), l = C("KCardText"), d = C("KSpacer"), s = C("KButton"), c = C("KCardActions"), h = C("KCard"), f = C("KDialog");
  return u(), p(U, null, [
    F(e.$slots, "default"),
    B(f, {
      modelValue: e.dialog,
      "onUpdate:modelValue": t[2] || (t[2] = ($) => e.dialog = $),
      "max-width": "30vw",
      "min-width": "20vw",
      "z-index": 50
    }, {
      default: P(() => [
        B(h, null, {
          default: P(() => [
            e.title ? (u(), z(r, { key: 0 }, {
              default: P(() => [
                J(I(e.title), 1)
              ]),
              _: 1
            })) : L("", !0),
            e.message ? (u(), z(l, { key: 1 }, {
              default: P(() => [
                J(I(e.message), 1)
              ]),
              _: 1
            })) : L("", !0),
            B(c, null, {
              default: P(() => [
                B(d),
                e.noLabel ? (u(), z(s, {
                  key: 0,
                  small: "",
                  onClick: t[0] || (t[0] = ($) => e.dismiss(!1))
                }, {
                  default: P(() => [
                    J(I(e.noLabel), 1)
                  ]),
                  _: 1
                })) : L("", !0),
                e.yesLabel ? (u(), z(s, {
                  key: 1,
                  small: "",
                  onClick: t[1] || (t[1] = ($) => e.dismiss(!0))
                }, {
                  default: P(() => [
                    J(I(e.yesLabel), 1)
                  ]),
                  _: 1
                })) : L("", !0)
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
const Br = /* @__PURE__ */ M(zr, [["render", Vr]]), Ir = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Br
}, Symbol.toStringTag, { value: "Module" })), Dr = S({
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
      return t ? this.time ? tt(t, "yyyy-MM-dd'T'HH:mm:ss") : tt(t, "yyyy-MM-dd") : null;
    }
  }
}), Fr = { class: "k-date-time-picker" }, Ur = ["type", "readonly"];
function Nr(e, t, n, o, a, i) {
  const r = C("KButton");
  return u(), p("div", Fr, [
    ae(k("input", {
      "onUpdate:modelValue": t[0] || (t[0] = (l) => e.localModelValue = l),
      class: "k-input",
      type: e.type,
      readonly: !e.editable
    }, null, 8, Ur), [
      [Qt, e.localModelValue]
    ]),
    e.editable ? (u(), p(U, { key: 0 }, [
      B(r, {
        small: "",
        onClick: e.setToNow
      }, {
        default: P(() => [
          J(" Now ")
        ]),
        _: 1
      }, 8, ["onClick"]),
      B(r, {
        small: "",
        onClick: t[1] || (t[1] = (l) => e.$emit("update:modelValue", null))
      }, {
        default: P(() => [
          J(" Clear ")
        ]),
        _: 1
      })
    ], 64)) : L("", !0)
  ]);
}
const Er = /* @__PURE__ */ M(Dr, [["render", Nr]]), Rr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Er
}, Symbol.toStringTag, { value: "Module" })), qr = S({
  directives: {
    ClickAway: Ee
  },
  mixins: [Me],
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
      this.$emit("update:modelValue", e), e ? (await this.$nextTick(), en(this.$refs.content)) : tn(this.$refs.content);
    }
  },
  mounted() {
    this.mounted = !0, nt("esc", () => {
      this.persistent || (this.dialog = !1);
    });
  },
  beforeUnmount() {
    nt.unbind("esc");
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
function Wr(e, t, n, o, a, i) {
  const r = De("click-away");
  return u(), p(U, null, [
    F(e.$slots, "activator", { on: e.on }),
    e.mounted ? (u(), z(ft, {
      key: 0,
      to: ".k-app"
    }, [
      B(Te, { name: "fade" }, {
        default: P(() => [
          e.dialog ? (u(), p("div", {
            key: 0,
            class: "k-dialog",
            style: ie([e.style])
          }, [
            ae((u(), p("div", {
              ref: "content",
              class: ee(["k-dialog-content", e.classObj]),
              style: ie([e.measurableStyles])
            }, [
              F(e.$slots, "default", { on: e.on })
            ], 6)), [
              [r, e.clickAway]
            ])
          ], 4)) : L("", !0)
        ]),
        _: 3
      })
    ])) : L("", !0)
  ], 64);
}
const Hr = /* @__PURE__ */ M(qr, [["render", Wr]]), Gr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Hr
}, Symbol.toStringTag, { value: "Module" })), Qr = {}, Yr = { class: "k-divider" };
function Jr(e, t) {
  return u(), p("div", Yr);
}
const Ye = /* @__PURE__ */ M(Qr, [["render", Jr]]), Xr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ye
}, Symbol.toStringTag, { value: "Module" })), Zr = S({
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
      const e = Y(this.size);
      return this.outline ? {
        borderStyle: "solid",
        borderWidth: Y(this.outlineWidth),
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
function eo(e, t, n, o, a, i) {
  return u(), p("div", {
    class: "k-dot",
    style: ie([e.style])
  }, [
    F(e.$slots, "default")
  ], 4);
}
const to = /* @__PURE__ */ M(Zr, [["render", eo]]), no = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: to
}, Symbol.toStringTag, { value: "Module" })), de = S({
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
}), ro = {
  mixins: [de]
}, oo = {
  key: 0,
  class: "k-form-field-label"
};
function so(e, t, n, o, a, i) {
  return u(), p("div", null, [
    e.label ? (u(), p("div", oo, I(e.label), 1)) : L("", !0),
    F(e.$slots, "default"),
    (u(!0), p(U, null, Q(e.successMessages, (r, l) => (u(), p("div", {
      key: l,
      class: "k-formfield--success"
    }, I(r), 1))), 128)),
    (u(!0), p(U, null, Q(e.errorMessages, (r, l) => (u(), p("div", {
      key: l,
      class: "k-formfield--error"
    }, I(r), 1))), 128))
  ]);
}
const io = /* @__PURE__ */ M(ro, [["render", so]]), ao = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: io,
  mixin: de
}, Symbol.toStringTag, { value: "Module" })), lo = S({
  setup() {
    return { config: Z(he) };
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
}), uo = { key: 0 }, co = ["id"], fo = ["src"], po = ["id", "src"];
function mo(e, t, n, o, a, i) {
  return e.dataid ? (u(), p("span", uo, [
    k("a", {
      id: e.aid,
      href: "#",
      class: "functionMenuHotspot",
      onClick: t[2] || (t[2] = ue((...r) => e.onclick && e.onclick(...r), ["prevent"]))
    }, [
      e.isModernFunctionMenu ? (u(), p("img", {
        key: 0,
        src: `${e.config.img}spacer.gif`,
        alt: "Functions"
      }, null, 8, fo)) : (u(), p("img", {
        key: 1,
        id: e.xid,
        src: e.image,
        border: "0",
        alt: "Functions",
        title: "Functions",
        onMouseover: t[0] || (t[0] = (...r) => e.onmouseover && e.onmouseover(...r)),
        onMouseout: t[1] || (t[1] = (...r) => e.onmouseout && e.onmouseout(...r))
      }, null, 40, po))
    ], 8, co),
    t[3] || (et(-1), t[3] = k("div", {
      id: e.zid,
      ref: "functionMenuDiv",
      class: "functionMenuDiv"
    }, null, 8, ["id"]), et(1), t[3])
  ])) : L("", !0);
}
const ho = /* @__PURE__ */ M(lo, [["render", mo]]), go = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ho
}, Symbol.toStringTag, { value: "Module" })), bo = S({}), _o = { class: "k-list-item-title" };
function vo(e, t, n, o, a, i) {
  return u(), p("div", _o, [
    F(e.$slots, "default")
  ]);
}
const Dt = /* @__PURE__ */ M(bo, [["render", vo]]), yo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dt
}, Symbol.toStringTag, { value: "Module" })), $o = S({}), ko = { class: "k-list-item-subtitle" };
function wo(e, t, n, o, a, i) {
  return u(), p("div", ko, [
    F(e.$slots, "default")
  ]);
}
const Ft = /* @__PURE__ */ M($o, [["render", wo]]), So = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ft
}, Symbol.toStringTag, { value: "Module" })), Oo = S({
  mixins: [mt],
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
    const { tag: e, data: t } = this.generateRouteLink(), n = this.title ? fe(Dt, {}, { default: () => [this.title] }) : null, o = this.subtitle ? fe(Ft, {}, { default: () => [this.subtitle] }) : null, a = n || o ? [n, o].filter((s) => !!s) : this.$slots.default ? this.$slots.default() : null, i = fe(
      "div",
      { class: "k-list-item-body" },
      {
        default: () => a
      }
    ), r = this.$slots.prepend ? fe(
      "div",
      { class: "k-list-item-prepend" },
      {
        default: () => this.$slots.prepend()
      }
    ) : null, l = this.$slots.append ? fe(
      "div",
      { class: "k-list-item-append" },
      {
        default: () => this.$slots.append()
      }
    ) : null;
    return fe(
      e,
      {
        ...t,
        class: this.classObj
      },
      [r, i, l].filter((s) => !!s)
    );
  }
}), Je = /* @__PURE__ */ M(Oo, [["__scopeId", "data-v-f06ea25f"]]), xo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Je
}, Symbol.toStringTag, { value: "Module" })), ot = new Ce(), To = S({
  components: { KMenuDownIcon: Re, KListItem: Je, KDivider: Ye },
  setup() {
    return { session: Ae() };
  },
  props: {
    dataid: {
      type: Number,
      required: !0
    },
    size: {
      type: Number,
      default: 12
    }
  },
  data() {
    return {
      visible: !1,
      actions: [],
      loading: !1
    };
  },
  watch: {
    visible: {
      handler(e) {
        e && this.refreshActions();
      }
    }
  },
  methods: {
    async refreshActions() {
      try {
        if (await ot.acquire(this.dataid), this.actions.length === 0) {
          this.loading = !0;
          const { data: e } = await this.session.get(
            `/api/v1/nodes/${this.dataid}/actions`
          );
          this.actions = e.actions;
        }
      } finally {
        this.loading = !1, ot.release(this.dataid);
      }
    }
  }
});
function Co(e, t, n, o, a, i) {
  const r = C("KMenuDownIcon"), l = C("KDivider"), d = C("KRightCaret"), s = C("KListItem"), c = C("KList"), h = C("KMenu");
  return u(), z(h, {
    modelValue: e.visible,
    "onUpdate:modelValue": t[0] || (t[0] = (f) => e.visible = f),
    loading: e.loading
  }, {
    activator: P(({ on: f }) => [
      B(r, pe({ size: e.size }, Oe(f), { class: "cursor-pointer" }), null, 16, ["size"])
    ]),
    default: P(() => [
      B(c, null, {
        default: P(() => [
          (u(!0), p(U, null, Q(e.actions, (f, $) => (u(), p(U, null, [
            f.signature === "-" ? (u(), z(l, {
              key: `${$}`
            })) : f.children.length ? (u(), z(h, {
              submenu: "",
              key: `a${$}`
            }, {
              activator: P(({ on: b }) => [
                B(s, pe({
                  title: f.name
                }, Oe(b)), {
                  append: P(() => [
                    B(d)
                  ]),
                  _: 2
                }, 1040, ["title"])
              ]),
              default: P(() => [
                B(c, null, {
                  default: P(() => [
                    (u(!0), p(U, null, Q(f.children, (b, O) => (u(), z(s, {
                      key: `b${O}`,
                      title: b.name,
                      href: b.url
                    }, null, 8, ["title", "href"]))), 128))
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1024)) : (u(), z(s, {
              title: f.name,
              href: f.url,
              key: `c${$}`
            }, null, 8, ["title", "href"]))
          ], 64))), 256))
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["modelValue", "loading"]);
}
const Mo = /* @__PURE__ */ M(To, [["render", Co]]), jo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Mo
}, Symbol.toStringTag, { value: "Module" })), Po = S({
  components: { KMenuDownIcon: Re, KListItem: Je, KDivider: Ye },
  setup() {
    return { configuration: Z(he) };
  },
  props: {
    dataid: {
      type: Number,
      required: !0
    },
    size: {
      type: Number,
      default: 12
    }
  },
  data() {
    return {
      visible: !1,
      // actions: [{
      //   name: "Properties",
      //   url: ``
      // }] as TAction[],
      loading: !1
    };
  },
  computed: {
    actions() {
      return [
        {
          name: "Open",
          url: `${this.configuration.baseUrl}/app/nodes/${this.dataid}`,
          signature: "open",
          children: []
        },
        {
          name: "Audit",
          url: `${this.configuration.baseUrl}/app/nodes/${this.dataid}/metadata/navigator?dropdown=audit`,
          signature: "audit",
          children: []
        },
        {
          name: "Properties",
          url: `${this.configuration.baseUrl}/app/nodes/${this.dataid}/metadata/navigator`,
          signature: "properties",
          children: []
        }
      ];
    }
  }
});
function Ko(e, t, n, o, a, i) {
  const r = C("KMenuDownIcon"), l = C("KDivider"), d = C("KRightCaret"), s = C("KListItem"), c = C("KList"), h = C("KMenu");
  return u(), z(h, {
    modelValue: e.visible,
    "onUpdate:modelValue": t[0] || (t[0] = (f) => e.visible = f),
    loading: e.loading
  }, {
    activator: P(({ on: f }) => [
      B(r, pe({ size: e.size }, Oe(f), { class: "cursor-pointer" }), null, 16, ["size"])
    ]),
    default: P(() => [
      B(c, null, {
        default: P(() => [
          (u(!0), p(U, null, Q(e.actions, (f, $) => (u(), p(U, null, [
            f.signature === "-" ? (u(), z(l, {
              key: `${$}`
            })) : f.children.length ? (u(), z(h, {
              submenu: "",
              key: `a${$}`
            }, {
              activator: P(({ on: b }) => [
                B(s, pe({
                  title: f.name
                }, Oe(b)), {
                  append: P(() => [
                    B(d)
                  ]),
                  _: 2
                }, 1040, ["title"])
              ]),
              default: P(() => [
                B(c, null, {
                  default: P(() => [
                    (u(!0), p(U, null, Q(f.children, (b, O) => (u(), z(s, {
                      key: `b${O}`,
                      title: b.name,
                      href: b.url
                    }, null, 8, ["title", "href"]))), 128))
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1024)) : (u(), z(s, {
              title: f.name,
              href: f.url,
              key: `c${$}`
            }, null, 8, ["title", "href"]))
          ], 64))), 256))
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["modelValue", "loading"]);
}
const Ao = /* @__PURE__ */ M(Po, [["render", Ko]]), Lo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ao
}, Symbol.toStringTag, { value: "Module" })), zo = S({}), Vo = { class: "k-progress-line" };
function Bo(e, t, n, o, a, i) {
  return u(), p("div", Vo);
}
const Io = /* @__PURE__ */ M(zo, [["render", Bo]]), Do = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Io
}, Symbol.toStringTag, { value: "Module" })), Fo = S({}), Uo = { class: "k-list" };
function No(e, t, n, o, a, i) {
  return u(), p("div", Uo, [
    F(e.$slots, "default")
  ]);
}
const Eo = /* @__PURE__ */ M(Fo, [["render", No]]), Ro = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Eo
}, Symbol.toStringTag, { value: "Module" })), qo = S({
  directives: {
    ClickAway: Ee
  },
  setup() {
    const e = se(null);
    return { menuItems: se(null), menuActivator: e };
  },
  props: {
    modelValue: {
      type: Boolean,
      default: null
    },
    submenu: {
      type: Boolean,
      default: !1
    },
    loading: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      visibleLocal: this.modelValue ?? !1,
      appBox: null,
      menuActivatorBox: null,
      menuItemsBox: null
    };
  },
  emits: ["update:modelValue"],
  computed: {
    visible: {
      get() {
        return this.modelValue ?? this.visibleLocal;
      },
      set(e) {
        this.visibleLocal = e, this.$emit("update:modelValue", e);
      }
    },
    styleDropDownItems() {
      if (this.appBox && this.menuActivatorBox && this.menuItemsBox) {
        const e = window.innerHeight, t = this.menuItemsBox.height, n = 8, o = this.menuActivatorBox.top - n, a = Math.max(
          0,
          n + this.menuActivatorBox.top + t - e
        ), i = Math.min(a, o);
        return {
          top: Y(
            this.menuActivatorBox.top - this.appBox.top - i
          ),
          left: Y(this.menuActivatorBox.right - this.appBox.left)
        };
      } else
        return {};
    },
    dropDownMenuItemsClassObj() {
      return {
        hidden: !this.visible
      };
    }
  },
  watch: {
    loading: {
      async handler(e) {
        e || this.updatePosition();
      }
    }
  },
  methods: {
    clickAway() {
      this.visible && this.showMenu(!1);
    },
    async updatePosition() {
      if (this.menuActivator && this.menuItems) {
        await this.$nextTick();
        const e = document.querySelector(".k-app");
        e && (this.appBox = e.getBoundingClientRect(), this.menuActivatorBox = this.menuActivator.getBoundingClientRect(), this.menuItemsBox = this.menuItems.getBoundingClientRect());
      }
    },
    showMenu(e) {
      this.visible = e, this.updatePosition();
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
}), Wo = {
  key: 0,
  class: "flex items-center justify-center p-2"
};
function Ho(e, t, n, o, a, i) {
  const r = C("KSpinner"), l = De("click-away");
  return u(), p("div", {
    class: "k-menu",
    onMouseenter: t[3] || (t[3] = (...d) => e.mouseEnter && e.mouseEnter(...d))
  }, [
    ae((u(), p("div", {
      ref: "menuActivator",
      onMouseleave: t[0] || (t[0] = (...d) => e.mouseLeave && e.mouseLeave(...d))
    }, [
      F(e.$slots, "activator", {
        on: { click: e.toggleMenu }
      })
    ], 32)), [
      [l, e.clickAway]
    ]),
    (u(), z(ft, { to: ".k-app" }, [
      k("div", {
        onMouseenter: t[1] || (t[1] = (...d) => e.mouseEnter && e.mouseEnter(...d)),
        onMouseleave: t[2] || (t[2] = (...d) => e.mouseLeave && e.mouseLeave(...d)),
        ref: "menuItems",
        class: ee(["k-menu-items", e.dropDownMenuItemsClassObj]),
        style: ie(e.styleDropDownItems)
      }, [
        e.loading ? (u(), p("div", Wo, [
          B(r)
        ])) : F(e.$slots, "default", { key: 1 })
      ], 38)
    ]))
  ], 32);
}
const Go = /* @__PURE__ */ M(qo, [["render", Ho]]), Qo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Go
}, Symbol.toStringTag, { value: "Module" })), Yo = {}, Jo = {
  class: "w-5 h-5",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, Xo = /* @__PURE__ */ k("path", {
  "fill-rule": "evenodd",
  d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
  "clip-rule": "evenodd"
}, null, -1), Zo = [
  Xo
];
function es(e, t) {
  return u(), p("svg", Jo, Zo);
}
const ts = /* @__PURE__ */ M(Yo, [["render", es]]), ns = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ts
}, Symbol.toStringTag, { value: "Module" })), rs = S({
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
}), os = { class: "k-multi-widget" }, ss = { class: "k-multi-buttons" }, is = /* @__PURE__ */ k("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ k("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z" })
], -1), as = /* @__PURE__ */ k("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ k("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" })
], -1);
function ls(e, t, n, o, a, i) {
  const r = C("KButton"), l = C("KCard");
  return u(), z(l, { class: "k-multi" }, {
    default: P(() => [
      B(Ne, {
        name: "fade",
        tag: "div"
      }, {
        default: P(() => [
          (u(!0), p(U, null, Q(e.valueLocal, (d, s) => (u(), p("div", {
            key: `k-multi-${d}`,
            class: "k-multi-item"
          }, [
            k("div", os, [
              F(e.$slots, "default", {
                index: s,
                value: d,
                update: (c) => e.update(s, c)
              })
            ]),
            k("div", ss, [
              e.canRemove ? (u(), z(r, {
                key: 0,
                text: "",
                onClick: (c) => e.remove(s)
              }, {
                default: P(() => [
                  is
                ]),
                _: 2
              }, 1032, ["onClick"])) : L("", !0),
              e.canAdd ? (u(), z(r, {
                key: 1,
                text: "",
                onClick: (c) => e.add(s)
              }, {
                default: P(() => [
                  as
                ]),
                _: 2
              }, 1032, ["onClick"])) : L("", !0)
            ])
          ]))), 128))
        ]),
        _: 3
      })
    ]),
    _: 3
  });
}
const us = /* @__PURE__ */ M(rs, [["render", ls]]), ds = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: us
}, Symbol.toStringTag, { value: "Module" })), cs = S({
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
      var e;
      return ((e = this.valueLocal) == null ? void 0 : e.length) ?? 0;
    },
    canAdd() {
      return this.count < this.maxItems && !this.readonly;
    }
  },
  methods: {
    add(e) {
      e && (this.valueLocal = [...this.valueLocal, e].filter(
        (t, n, o) => o.indexOf(t) === n
      ));
    },
    remove(e) {
      const t = [...this.valueLocal];
      t.splice(e, 1), this.valueLocal = t;
    }
  }
}), fs = { class: "k-multi-widget" }, ps = /* @__PURE__ */ k("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ k("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z" })
], -1);
function ms(e, t, n, o, a, i) {
  const r = C("KButton"), l = C("KCard");
  return u(), z(l, { class: "k-multi" }, {
    default: P(() => [
      B(Ne, {
        name: "fade",
        tag: "div"
      }, {
        default: P(() => [
          (u(!0), p(U, null, Q(e.valueLocal, (d, s) => (u(), p("div", {
            key: `k-multi-${d}`,
            class: "k-multi-item"
          }, [
            k("div", fs, [
              F(e.$slots, "readonly", {
                index: s,
                value: d
              }, () => [
                J(I(d), 1)
              ])
            ]),
            e.readonly ? L("", !0) : (u(), z(r, {
              key: 0,
              text: "",
              onClick: (c) => e.remove(s)
            }, {
              default: P(() => [
                ps
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
      }) : L("", !0)
    ]),
    _: 3
  });
}
const hs = /* @__PURE__ */ M(cs, [["render", ms]]), gs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: hs
}, Symbol.toStringTag, { value: "Module" })), bs = /* @__PURE__ */ S({
  __name: "KMultiUserPicker",
  props: /* @__PURE__ */ Yt({
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
    },
    legacy: {
      type: Boolean,
      default: !1
    }
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = Jt(e, "modelValue");
    return (n, o) => {
      const a = C("KUserLink"), i = C("KUserPicker"), r = C("KMulti2");
      return u(), z(r, {
        modelValue: t.value,
        "onUpdate:modelValue": o[0] || (o[0] = (l) => t.value = l),
        readonly: e.readonly
      }, {
        readonly: P(({ value: l }) => [
          B(a, {
            user: l,
            gif: "",
            legacy: e.legacy
          }, null, 8, ["user", "legacy"])
        ]),
        add: P(({ add: l }) => [
          B(i, {
            "onUpdate:modelValue": (d) => l(d),
            users: e.users,
            groups: e.groups,
            legacy: e.legacy
          }, null, 8, ["onUpdate:modelValue", "users", "groups", "legacy"])
        ]),
        _: 1
      }, 8, ["modelValue", "readonly"]);
    };
  }
}), _s = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bs
}, Symbol.toStringTag, { value: "Module" })), st = new Ce();
class vs {
  constructor() {
    te(this, "nodes");
    this.nodes = {};
  }
  // registerNodes(items: Array<Record<string, any>>) {
  //   items.forEach((user) => {
  //     this.nodes[user.value] = user
  //   })
  // }
  async lookup(t, n) {
    try {
      if (await st.acquire(n), !this.nodes[n]) {
        const o = await t.nodes.ancestors(n);
        this.nodes[n] = V(o, "data.ancestors", []);
      }
      return this.nodes[n];
    } finally {
      st.release(n);
    }
  }
}
const Ut = new vs(), ys = S({
  setup() {
    return { session: Z(me) };
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
        e && (this.breadcrumb = await Ut.lookup(this.session, e));
      },
      immediate: !0
    }
  }
}), $s = { class: "k-node-breadcrumb" };
function ks(e, t, n, o, a, i) {
  return u(), p("div", $s, [
    (u(!0), p(U, null, Q(e.breadcrumb, (r, l) => (u(), p(U, {
      key: r.dataid
    }, [
      J(I(r.name) + " ", 1),
      l < e.breadcrumb.length - 1 ? (u(), p(U, { key: 0 }, [
        J(" ▶ ")
      ], 64)) : L("", !0)
    ], 64))), 128))
  ]);
}
const Nt = /* @__PURE__ */ M(ys, [["render", ks]]), ws = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Nt
}, Symbol.toStringTag, { value: "Module" })), Ss = S({
  mixins: [de],
  components: { KNodeAncestor: Nt },
  setup() {
    return {
      session: Z(me),
      config: Z(he)
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
      return nn(this.config.baseUrl, {
        queryParams: this.urlParams
      });
    },
    name() {
      var e;
      return (e = this.breadcrumb[this.breadcrumb.length - 1]) == null ? void 0 : e.name;
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
        this.dataid ? this.breadcrumb = await Ut.lookup(
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
      return this.objid ?? parseInt(rn.get("TargetBrowseObjID") ?? "0");
    },
    didCloseWindow() {
      console.log("didClose");
    },
    callback(e) {
      this.dataid = typeof e == "string" ? parseInt(e) : e;
    },
    clear() {
      this.breadcrumb = [], this.dataid = null;
    }
  }
}), Os = { class: "k-node-picker-field" }, xs = ["value"];
function Ts(e, t, n, o, a, i) {
  const r = C("KButton"), l = C("KNodeAncestor"), d = C("KFormFieldWrapper");
  return u(), z(d, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: P(() => [
      k("div", Os, [
        k("input", {
          ref: "input",
          type: "text",
          class: "k-input",
          value: e.name,
          onFocus: t[0] || (t[0] = (...s) => e.openWindow && e.openWindow(...s))
        }, null, 40, xs),
        B(r, {
          small: "",
          onClick: e.openWindow
        }, {
          default: P(() => [
            J(I(e.browseButtonLabel), 1)
          ]),
          _: 1
        }, 8, ["onClick"]),
        e.clearable ? (u(), z(r, {
          key: 0,
          small: "",
          onClick: e.clear
        }, {
          default: P(() => [
            J(I(e.clearButtonLabel), 1)
          ]),
          _: 1
        }, 8, ["onClick"])) : L("", !0),
        e.dataid ? (u(), z(l, {
          key: 1,
          dataid: e.dataid
        }, null, 8, ["dataid"])) : L("", !0)
      ])
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const Cs = /* @__PURE__ */ M(Ss, [["render", Ts]]), Ms = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Cs
}, Symbol.toStringTag, { value: "Module" })), js = S({
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
}), Ps = { class: "k-one-moment" }, Ks = { class: "k-one-moment-label" };
function As(e, t, n, o, a, i) {
  const r = C("KSpinner"), l = C("KDialog");
  return u(), z(l, { "model-value": e.loading }, {
    default: P(() => [
      k("div", Ps, [
        B(r, {
          height: 36,
          width: 36
        }),
        k("div", Ks, I(e.label), 1)
      ])
    ]),
    _: 1
  }, 8, ["model-value"]);
}
const Ls = /* @__PURE__ */ M(js, [["render", As]]), zs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ls
}, Symbol.toStringTag, { value: "Module" })), Vs = S({
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
      var t;
      return ((t = e.dataTransfer) == null ? void 0 : t.types.some((n) => n === "Files")) ?? !1;
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
function Bs(e, t, n, o, a, i) {
  return u(), p("div", null, [
    F(e.$slots, "default", { active: e.active })
  ]);
}
const Is = /* @__PURE__ */ M(Vs, [["render", Bs]]), Ds = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Is
}, Symbol.toStringTag, { value: "Module" })), Fs = S({
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
}), Us = { class: "text-xl" }, Ns = { key: 0 }, Es = { class: "rhmuted" };
function Rs(e, t, n, o, a, i) {
  return u(), p("div", Us, [
    J(I(e.title), 1),
    e.subtitle ? (u(), p("span", Ns, [
      J(": "),
      k("span", Es, I(e.subtitle), 1)
    ])) : L("", !0)
  ]);
}
const qs = /* @__PURE__ */ M(Fs, [["render", Rs], ["__scopeId", "data-v-c72c9204"]]), Ws = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qs
}, Symbol.toStringTag, { value: "Module" })), Hs = S({
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
      return V(this.pagination, "pageRange", []);
    },
    pageSizes() {
      return V(this.pagination, "pageSizes", []);
    },
    pageNumber() {
      return V(this.pagination, "pageNumber", 0);
    },
    pageSize: {
      get() {
        return V(this.pagination, "pageSize", 0);
      },
      set(e) {
        this.$emit("update:pageSize", e);
      }
    },
    hasPrevious() {
      return V(this.pagination, "hasPrevious", !1);
    },
    hasNext() {
      return V(this.pagination, "hasNext", !1);
    }
  },
  methods: {
    classObj(e) {
      return {
        "k-pagination-button-selected": e == this.pageNumber
      };
    }
  }
}), Gs = { class: "k-pagination" }, Qs = {
  key: 1,
  class: "k-pagination-buttons"
}, Ys = {
  key: 0,
  class: "k-pagination-button"
}, Js = /* @__PURE__ */ k("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ k("path", { d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" })
], -1), Xs = [
  Js
], Zs = { key: 0 }, ei = ["onClick"], ti = {
  key: 1,
  class: "k-pagination-button"
}, ni = /* @__PURE__ */ k("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ k("path", { d: "M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" })
], -1), ri = [
  ni
], oi = { key: 2 };
function si(e, t, n, o, a, i) {
  const r = C("KSelect");
  return u(), p("div", Gs, [
    e.potentiallyMultiplePages ? (u(), z(r, {
      key: 0,
      modelValue: e.pageSize,
      "onUpdate:modelValue": t[0] || (t[0] = (l) => e.pageSize = l),
      items: e.pageSizes,
      label: "Page Size"
    }, null, 8, ["modelValue", "items"])) : L("", !0),
    e.hasPrevious || e.hasNext ? (u(), p("div", Qs, [
      e.hasPrevious ? (u(), p("a", Ys, Xs)) : L("", !0),
      (u(!0), p(U, null, Q(e.pageRange, (l) => (u(), p(U, { key: l }, [
        l === "|" ? (u(), p("div", Zs, "...")) : (u(), p("a", {
          key: 1,
          class: ee(["k-pagination-button k-pagination-button-border", e.classObj(l)]),
          onClick: (d) => e.$emit("update:modelValue", l)
        }, I(l), 11, ei))
      ], 64))), 128)),
      e.hasNext ? (u(), p("a", ti, ri)) : L("", !0)
    ])) : L("", !0),
    e.potentiallyMultiplePages ? (u(), p("div", oi, " Displaying " + I(e.pagination.startIndex) + "-" + I(e.pagination.endIndex) + " of " + I(e.pagination.count) + " items. ", 1)) : L("", !0)
  ]);
}
const ii = /* @__PURE__ */ M(Hs, [["render", si]]), ai = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ii
}, Symbol.toStringTag, { value: "Module" })), li = S({
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
      const e = [], o = Math.max(0, this.pageNumber0 - 5), a = Math.min(this.lastPageNumber0, o + 10), i = Math.max(0, a - 10);
      for (let r = i; r <= a; r++)
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
}), ui = { class: "k-pagination2" }, di = { class: "k-pagination2-buttons" }, ci = /* @__PURE__ */ k("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ k("path", { d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" })
], -1), fi = [
  ci
], pi = ["onClick"], mi = /* @__PURE__ */ k("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ k("path", { d: "M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" })
], -1), hi = [
  mi
];
function gi(e, t, n, o, a, i) {
  const r = C("KSelect");
  return u(), p("div", ui, [
    k("div", null, [
      B(r, {
        modelValue: e.pageSize,
        "onUpdate:modelValue": t[0] || (t[0] = (l) => e.pageSize = l),
        items: e.pageSizes,
        label: "Page Size"
      }, null, 8, ["modelValue", "items"])
    ]),
    e.pageCount > 1 ? (u(), p(U, { key: 0 }, [
      k("div", di, [
        e.hasPrevious ? (u(), p("a", {
          key: 0,
          class: "k-pagination2-arrow-button",
          onClick: t[1] || (t[1] = (l) => e.clickedPageNumber(e.pageNumber0 - 1))
        }, fi)) : L("", !0),
        (u(!0), p(U, null, Q(e.pageRange0, (l) => (u(), p("div", {
          key: l,
          class: ee(["k-pagination2-button", e.classObj(l)]),
          onClick: (d) => e.clickedPageNumber(l)
        }, I(l + 1), 11, pi))), 128)),
        e.hasNext ? (u(), p("a", {
          key: 1,
          class: "k-pagination2-arrow-button",
          onClick: t[2] || (t[2] = (l) => e.clickedPageNumber(e.pageNumber0 + 1))
        }, hi)) : L("", !0)
      ]),
      k("div", null, I(e.pageNumber) + " of " + I(e.pageCount) + " pages", 1)
    ], 64)) : L("", !0)
  ]);
}
const bi = /* @__PURE__ */ M(li, [["render", gi]]), _i = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bi
}, Symbol.toStringTag, { value: "Module" })), Xe = S({
  mixins: [Me],
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
}), it = () => {
  pt((e) => ({
    fe06e366: e.color
  }));
}, at = Xe.setup;
Xe.setup = at ? (e, t) => (it(), at(e, t)) : it;
const vi = /* @__PURE__ */ k("circle", {
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), yi = /* @__PURE__ */ k("path", {
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), $i = [
  vi,
  yi
];
function ki(e, t, n, o, a, i) {
  return u(), p("svg", {
    style: ie(e.measurableStyles),
    class: "k-spinner",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, $i, 4);
}
const Et = /* @__PURE__ */ M(Xe, [["render", ki]]), wi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Et
}, Symbol.toStringTag, { value: "Module" })), Si = S({
  components: { KSpinner: Et },
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
}), Oi = {
  key: 0,
  class: "centerOverlay"
};
function xi(e, t, n, o, a, i) {
  const r = C("KSpinner");
  return e.loading ? (u(), p("div", Oi, [
    B(r, {
      "max-width": e.size,
      "max-height": e.size
    }, null, 8, ["max-width", "max-height"])
  ])) : L("", !0);
}
const Ti = /* @__PURE__ */ M(Si, [["render", xi]]), Ci = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ti
}, Symbol.toStringTag, { value: "Module" })), Mi = S({
  mixins: [de],
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
      return this.isObject(e) ? V(e, this.itemText) : e;
    },
    getItemValue(e) {
      return this.isObject(e) ? V(e, this.itemValue) : e;
    },
    getItemDisabled(e) {
      return this.isObject(e) ? V(e, "disabled", !1) : !1;
    }
  }
}), ji = ["id", "value", "disabled"], Pi = ["for"];
function Ki(e, t, n, o, a, i) {
  const r = C("KSpinner"), l = C("KFormFieldWrapper");
  return u(), p("div", null, [
    B(l, {
      label: e.label,
      "success-messages": e.successMessages,
      "error-messages": e.errorMessages
    }, {
      default: P(() => [
        B(Te, {
          name: "fade",
          mode: "out-in"
        }, {
          default: P(() => [
            e.loading ? (u(), z(r, { key: 0 })) : (u(), p("div", {
              key: 1,
              class: ee(["k-radiogroup", e.classObj])
            }, [
              (u(!0), p(U, null, Q(e.items, (d) => (u(), p("div", {
                key: e.getItemValue(d),
                class: "k-radiogroup-item"
              }, [
                ae(k("input", {
                  id: e.getItemValue(d),
                  "onUpdate:modelValue": t[0] || (t[0] = (s) => e.localValue = s),
                  type: "radio",
                  value: e.getItemValue(d),
                  disabled: e.getItemDisabled(d)
                }, null, 8, ji), [
                  [Xt, e.localValue]
                ]),
                k("label", {
                  for: e.getItemValue(d)
                }, I(e.getItemText(d)), 9, Pi)
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
const Ai = /* @__PURE__ */ M(Mi, [["render", Ki]]), Li = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ai
}, Symbol.toStringTag, { value: "Module" })), zi = S({
  inject: ["ksnackbar"],
  methods: {
    click() {
    }
  }
});
function Vi(e, t, n, o, a, i) {
  return u(), p("div", null, [
    k("button", {
      onClick: t[0] || (t[0] = (...r) => e.click && e.click(...r))
    }, "click")
  ]);
}
const Bi = /* @__PURE__ */ M(zi, [["render", Vi]]), Ii = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Bi
}, Symbol.toStringTag, { value: "Module" })), Di = S({
  mixins: [de],
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
    itemGroup: {
      type: String,
      default: "group"
    },
    sortedGroupNames: {
      type: Array,
      default: () => []
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
    },
    // Only true if each item has a grouped property
    hasGroups() {
      const e = this.itemGroup;
      return typeof e == "string" && this.items.length > 0 ? this.items.every((t) => !!V(t, e)) : !1;
    },
    itemsGrouped() {
      if (this.hasGroups) {
        const e = this.items.reduce(
          (t, n) => {
            const o = V(n, this.itemGroup);
            return t[o] || (t[o] = []), t[o].push(n), t;
          },
          {}
        );
        return Object.entries(e).sort((t, n) => {
          const o = t[0], a = n[0], i = this.sortedGroupNames.indexOf(o), r = this.sortedGroupNames.indexOf(a);
          return i - r;
        });
      } else
        return null;
    }
  },
  methods: {
    isObject(e) {
      return typeof e == "object" && e instanceof Object && !(e instanceof Array);
    },
    getItemText(e) {
      return this.isObject(e) ? V(e, this.itemText) : e;
    },
    getItemValue(e) {
      return this.isObject(e) ? V(e, this.itemValue) : e;
    },
    getItemDisabled(e) {
      return this.isObject(e) ? V(e, this.itemDisabled, !1) : !1;
    },
    arrify(e) {
      return Array.isArray(e) ? e : [e];
    }
  }
}), Fi = { class: "k-select" }, Ui = ["disabled"], Ni = ["label"], Ei = ["value", "disabled"], Ri = ["value", "disabled"];
function qi(e, t, n, o, a, i) {
  const r = C("KButton"), l = C("KSpinner"), d = C("KFormFieldWrapper");
  return u(), z(d, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: P(() => [
      k("div", Fi, [
        ae(k("select", {
          "onUpdate:modelValue": t[0] || (t[0] = (s) => e.valueLocal = s),
          class: ee(e.classObj),
          disabled: e.disabledResolved
        }, [
          e.hasGroups ? (u(!0), p(U, { key: 0 }, Q(e.itemsGrouped, (s) => (u(), p("optgroup", {
            key: s[0],
            label: s[0]
          }, [
            (u(!0), p(U, null, Q(s[1], (c) => (u(), p("option", {
              key: e.getItemValue(c),
              value: e.getItemValue(c),
              disabled: e.getItemDisabled(c)
            }, I(e.getItemText(c)), 9, Ei))), 128))
          ], 8, Ni))), 128)) : (u(!0), p(U, { key: 1 }, Q(e.items, (s) => (u(), p("option", {
            key: e.getItemValue(s),
            value: e.getItemValue(s),
            disabled: e.getItemDisabled(s)
          }, I(e.getItemText(s)), 9, Ri))), 128))
        ], 10, Ui), [
          [Zt, e.valueLocal]
        ]),
        e.clearable ? (u(), z(r, {
          key: 0,
          onClick: t[1] || (t[1] = (s) => e.valueLocal = null),
          small: ""
        }, {
          default: P(() => [
            J("clear")
          ]),
          _: 1
        })) : L("", !0),
        B(Te, { name: "fade" }, {
          default: P(() => [
            e.loading ? (u(), z(l, {
              key: 0,
              class: "k-select--spinner"
            })) : L("", !0)
          ]),
          _: 1
        })
      ])
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const Wi = /* @__PURE__ */ M(Di, [["render", qi]]), Hi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wi
}, Symbol.toStringTag, { value: "Module" })), Gi = S({
  props: {
    fontSize: {
      type: Number,
      default: 12
    }
  },
  computed: {
    style() {
      return {
        fontSize: Y(this.fontSize)
      };
    }
  }
}), Qi = {
  key: 0,
  class: "k-smart-ui-panel-header"
}, Yi = { class: "k-smart-ui-panel-body" }, Ji = {
  key: 1,
  class: "k-smart-ui-panel-footer"
};
function Xi(e, t, n, o, a, i) {
  return u(), p("div", {
    class: "k-smart-ui-panel",
    style: ie(e.style)
  }, [
    e.$slots.header ? (u(), p("div", Qi, [
      F(e.$slots, "header")
    ])) : L("", !0),
    k("div", Yi, [
      F(e.$slots, "default")
    ]),
    e.$slots.footer ? (u(), p("div", Ji, [
      F(e.$slots, "footer")
    ])) : L("", !0)
  ], 4);
}
const Zi = /* @__PURE__ */ M(Gi, [["render", Xi]]), ea = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zi
}, Symbol.toStringTag, { value: "Module" })), ta = S({
  provide() {
    return {
      // @ts-ignore - not sure why this complains
      [zt]: this
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
      timeout: o = 6e3,
      actionLabel: a = "close",
      action: i
    }) {
      const r = this.nextIndex();
      i == null && (i = () => this.dismiss(r));
      const l = {
        title: t,
        message: n,
        timeout: o,
        actionLabel: a,
        action: i,
        type: e,
        index: r
      };
      this.nitems[r] = l, console.log(o), setInterval(() => this.dismiss(r), o);
    }
  }
}), na = { class: "k-snackbar" }, ra = { class: "k-snackbar-item-message" }, oa = {
  key: 0,
  class: "k-snackbar-title"
}, sa = {
  key: 1,
  class: "k-snackbar-text"
}, ia = {
  key: 0,
  class: "k-snackbar-action"
}, aa = ["onClick"];
function la(e, t, n, o, a, i) {
  return u(), p(U, null, [
    F(e.$slots, "default"),
    k("div", na, [
      B(Ne, {
        name: "slide",
        tag: "div",
        mode: "out-in"
      }, {
        default: P(() => [
          (u(!0), p(U, null, Q(e.items, (r) => (u(), p("div", {
            key: r.index,
            class: ee(["k-snackbar-item", e.classObj(r)])
          }, [
            k("div", ra, [
              r.title ? (u(), p("div", oa, I(r.title), 1)) : L("", !0),
              r.message ? (u(), p("div", sa, I(r.message), 1)) : L("", !0)
            ]),
            r.action ? (u(), p("div", ia, [
              k("a", {
                href: "#",
                onClick: ue((l) => e.action(r), ["prevent"])
              }, I(r.actionLabel), 9, aa)
            ])) : L("", !0)
          ], 2))), 128))
        ]),
        _: 1
      })
    ])
  ], 64);
}
const ua = /* @__PURE__ */ M(ta, [["render", la]]), da = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ua
}, Symbol.toStringTag, { value: "Module" })), ca = S({
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
      const e = this.keypath, t = this.isActive ? !this.sortAsc : !0, n = t ? e : `-${e}`;
      return this.$emit("update:modelValue", {
        sortKey: e,
        sortAsc: t,
        sortResolved: n
      });
    }
  }
}), fa = {
  key: 0,
  class: "j-sort-header-arrow"
}, pa = {
  key: 1,
  class: "j-sort-header-arrow"
};
function ma(e, t, n, o, a, i) {
  return u(), p("a", {
    href: "#",
    onClick: t[0] || (t[0] = ue((...r) => e.emitClick && e.emitClick(...r), ["prevent"]))
  }, [
    F(e.$slots, "default"),
    B(Te, {
      name: "fade",
      mode: "out-in"
    }, {
      default: P(() => [
        e.isActive && e.sortAsc ? (u(), p("span", fa, "↑")) : e.isActive ? (u(), p("span", pa, "↓")) : L("", !0)
      ]),
      _: 1
    })
  ]);
}
const ha = /* @__PURE__ */ M(ca, [["render", ma]]), ga = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ha
}, Symbol.toStringTag, { value: "Module" })), ba = {}, _a = { class: "k-spacer" };
function va(e, t) {
  return u(), p("div", _a);
}
const ya = /* @__PURE__ */ M(ba, [["render", va]]), $a = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ya
}, Symbol.toStringTag, { value: "Module" })), Ze = S({
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
      return Y(this.height);
    },
    innerSizePx() {
      return Y(this.innerSize);
    },
    paddingPx() {
      return Y(this.padding);
    },
    switchWidthPx() {
      return Y(this.trans + this.height);
    },
    transPx() {
      return `translateX(${Y(this.trans)})`;
    }
  }
}), lt = () => {
  pt((e) => ({
    "2f4ab6bd": e.switchWidthPx,
    "3acd298c": e.heightPx,
    "37d7127c": e.innerSizePx,
    "13e4c99c": e.paddingPx,
    "79abc333": e.transPx
  }));
}, ut = Ze.setup;
Ze.setup = ut ? (e, t) => (lt(), ut(e, t)) : lt;
const ka = /* @__PURE__ */ k("span", { class: "k-switch-slider" }, null, -1), wa = [
  ka
];
function Sa(e, t, n, o, a, i) {
  return u(), p("div", {
    class: ee(["k-switch", e.classObj]),
    onClick: t[0] || (t[0] = (...r) => e.toggle && e.toggle(...r))
  }, wa, 2);
}
const Oa = /* @__PURE__ */ M(Ze, [["render", Sa]]), xa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Oa
}, Symbol.toStringTag, { value: "Module" })), Ta = S({
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
function Ca(e, t, n, o, a, i) {
  const r = C("KLinearProgressIndicator");
  return u(), p("div", null, [
    e.loading ? (u(), z(r, { key: 0 })) : L("", !0),
    k("table", {
      class: ee(["k-table", e.classObj])
    }, [
      F(e.$slots, "default")
    ], 2)
  ]);
}
const Ma = /* @__PURE__ */ M(Ta, [["render", Ca]]), ja = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ma
}, Symbol.toStringTag, { value: "Module" })), Pa = S({
  mixins: [de],
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
      const t = e.target, n = this.valueLocal, o = t.selectionStart;
      if (n && o) {
        const a = n.slice(0, o), i = n.slice(o), r = `${a}	${i}`;
        this.valueLocal = r, t.value = r, t.selectionStart = o + 1, t.selectionEnd = o + 1;
      }
    }
  }
}), Ka = ["rows"];
function Aa(e, t, n, o, a, i) {
  const r = C("KFormFieldWrapper");
  return u(), z(r, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: P(() => [
      ae(k("textarea", pe({
        "onUpdate:modelValue": t[0] || (t[0] = (l) => e.valueLocal = l)
      }, e.$attrs, {
        spellcheck: "false",
        class: [e.classObj, "k-textarea"],
        rows: e.rows,
        onKeydown: t[1] || (t[1] = $e(ue((...l) => e.tabber && e.tabber(...l), ["prevent"]), ["tab"]))
      }), null, 16, Ka), [
        [Fe, e.valueLocal]
      ])
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const La = /* @__PURE__ */ M(Pa, [["render", Aa]]), za = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: La
}, Symbol.toStringTag, { value: "Module" })), Va = S({
  mixins: [de],
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
}), Ba = ["placeholder"];
function Ia(e, t, n, o, a, i) {
  const r = C("KFormFieldWrapper");
  return u(), z(r, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: P(() => [
      ae(k("input", {
        "onUpdate:modelValue": t[0] || (t[0] = (l) => e.value = l),
        class: ee(["k-input-text-field", e.classObj]),
        placeholder: e.placeholder
      }, null, 10, Ba), [
        [Fe, e.value]
      ])
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const Da = /* @__PURE__ */ M(Va, [["render", Ia]]), Fa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Da
}, Symbol.toStringTag, { value: "Module" })), Ua = S({
  setup() {
    return {
      config: Z(he),
      session: Z(me)
    };
  },
  mixins: [Me],
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
      return V(this.userRec, "type", this.type);
    },
    url() {
      return this.userType === this.session.members.USER ? `${this.config.img}guy.gif` : this.userType === this.session.members.GROUP ? `${this.config.img}2-guys.gif` : this.userType > 0 ? `${this.config.img}projectgroup.gif` : null;
    }
  }
}), Na = ["src"];
function Ea(e, t, n, o, a, i) {
  return e.url ? (u(), p("img", {
    key: 0,
    src: e.url,
    style: ie([e.measurableStyles])
  }, null, 12, Na)) : L("", !0);
}
const Ra = /* @__PURE__ */ M(Ua, [["render", Ea]]), qa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ra
}, Symbol.toStringTag, { value: "Module" })), ve = new Ce(), Wa = (e) => {
  const t = e.results.data.properties;
  return {
    name: t.name,
    userId: t.id,
    displayName: t.name_formatted,
    gif: null,
    type: t.type,
    isDeleted: t.deleted,
    firstName: t.first_name,
    lastName: t.last_name,
    email: t.business_email,
    groupId: t.group_id,
    title: t.title,
    isUser: t.type === 0,
    isGroup: t.type === 1,
    isRole: t.type >= 2e3,
    isRecordsManager: !1,
    canLogin: t.privilege_login,
    isAdmin: t.privilege_system_admin_rights,
    locale: t.display_language,
    // userdata: null,
    photoId: null,
    photoUrl: ""
  };
};
class Ha {
  constructor() {
    te(this, "session");
    te(this, "queueItems");
    te(this, "intervalId");
    this.session = null, this.queueItems = [], this.intervalId = 0;
  }
  resetQueue() {
    this.queueItems = [];
  }
  queue(t, n, o) {
    this.session = t, this.queueItems.push({
      resolveFunc: n,
      userId: o
    }), clearInterval(this.intervalId), this.queueItems.length < 20 ? this.intervalId = setTimeout(this.processQueue.bind(this), 50) : this.processQueue();
  }
  async processQueue() {
    const t = this.session.rpcClient("/api/v1/rh/rpc/user/"), n = this.queueItems;
    this.resetQueue(), n.forEach((o) => {
      const a = o.userId;
      t.queue("UserLookup", { userId: a });
    });
    try {
      (await t.batch()).forEach((a, i) => {
        const r = n[i].resolveFunc;
        r(a);
      });
    } catch {
      n.forEach((o) => o.resolveFunc(null));
    }
  }
}
class Ga {
  constructor() {
    te(this, "users");
    te(this, "userLookupQueue");
    this.users = {}, this.userLookupQueue = new Ha();
  }
  async lookupLegacy(t, n) {
    if (n)
      try {
        if (await ve.acquire(n), this.users.hasOwnProperty(n))
          return this.users[n];
        {
          const o = await t.members.member(n), a = Wa(o.data);
          return this.users[n] = a, a;
        }
      } catch {
        return this.users[n] = null, null;
      } finally {
        ve.release(n);
      }
    else
      return null;
  }
  async lookupRPC(t, n) {
    return n ? (await ve.acquire(n), this.users.hasOwnProperty(n) ? (ve.release(n), this.users[n]) : new Promise((o, a) => {
      const i = (r) => {
        r instanceof Error ? a(r) : (this.users[n] = r, o(r), ve.release(n));
      };
      this.userLookupQueue.queue(t, i, n);
    })) : null;
  }
  async lookup(t, n, o = !1) {
    return o ? this.lookupLegacy(t, n) : this.lookupRPC(t, n);
  }
}
const xe = new Ga(), Qa = {
  key: 1,
  class: "k-user-link"
}, Ya = /* @__PURE__ */ S({
  __name: "KUserLink",
  props: {
    user: {
      type: [Number, Object],
      default: null
    },
    gif: {
      type: Boolean,
      default: !1
    },
    legacy: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = Ae(), n = e, { user: o, gif: a, legacy: i } = ct(n), r = se(null), l = se(!1), d = Se(() => V(r.value, "id") ?? V(r.value, "userid")), s = Se(() => V(r.value, "display_name") ?? V(r.value, "displayName") ?? V(r.value, "name")), c = (f) => typeof f == "number" && !isNaN(f);
    Ue(
      o,
      async (f) => {
        if (c(f))
          try {
            l.value = !0, r.value = await xe.lookup(
              t,
              f,
              i.value
            );
          } finally {
            l.value = !1;
          }
        else
          r.value = f;
      },
      { immediate: !0 }
    );
    const h = () => {
      window.baseURL && window.doUserDialog && (window.baseUrl = window.baseURL, window.doUserDialog(d.value));
    };
    return (f, $) => {
      const b = C("KSkeletonLoader"), O = C("KUserGIF");
      return l.value ? (u(), z(b, { key: 0 })) : r.value ? (u(), p("span", Qa, [
        we(a) ? (u(), z(O, {
          key: 0,
          "user-rec": r.value
        }, null, 8, ["user-rec"])) : L("", !0),
        J("   "),
        k("a", {
          href: "#",
          onClick: ue(h, ["prevent"])
        }, I(s.value), 1)
      ])) : L("", !0);
    };
  }
}), Ja = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ya
}, Symbol.toStringTag, { value: "Module" })), Xa = S({
  mixins: [de],
  setup() {
    return { session: Z(me) };
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
    },
    legacy: {
      type: Boolean,
      default: !1
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
          text: V(n, "name_formatted"),
          value: V(n, "id"),
          type: V(n, "type")
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
          const t = this.legacy ? await xe.lookupLegacy(this.session, e).catch((n) => null) : await xe.lookup(this.session, e).catch((n) => null);
          t && (this.items = [
            {
              text: t.displayName,
              type: t.type,
              value: t.userId
            }
          ], this.select = t.displayName);
        } finally {
          this.pleaseWait = !1, this.readonly = !1, this.loading = !1;
        }
    }
  }
}), Za = { class: "flex items-center gap-1" };
function el(e, t, n, o, a, i) {
  const r = C("KUserGIF"), l = C("KAutocomplete"), d = C("KUserLink"), s = C("KFormFieldWrapper");
  return u(), z(s, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: P(() => [
      e.editable ? (u(), z(l, {
        key: 0,
        modelValue: e.valueLocal,
        "onUpdate:modelValue": t[0] || (t[0] = (c) => e.valueLocal = c),
        "search-input": e.searchText,
        "onUpdate:searchInput": t[1] || (t[1] = (c) => e.searchText = c),
        class: "k-user-picker",
        placeholder: e.placeholder,
        width: e.width,
        loading: e.loading,
        items: e.items,
        "return-object": e.returnObject,
        combobox: !1
      }, {
        prepend: P(({ item: c }) => [
          c ? (u(), z(r, {
            key: 0,
            type: c.type
          }, null, 8, ["type"])) : (u(), z(r, {
            key: 1,
            type: e.USER
          }, null, 8, ["type"]))
        ]),
        item: P(({ item: c }) => [
          k("div", Za, [
            B(r, {
              type: c.type
            }, null, 8, ["type"]),
            J(" " + I(c.text), 1)
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "search-input", "placeholder", "width", "loading", "items", "return-object"])) : (u(), z(d, {
        key: 1,
        user: e.modelValue,
        gif: ""
      }, null, 8, ["user"]))
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const Rt = /* @__PURE__ */ M(Xa, [["render", el]]), tl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Rt
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
      const e = (i) => i.type.name === "KTabItem", t = (i) => typeof i.type == "symbol", n = (i) => i.children && Array.isArray(i.children) && i.children.length && i.children.some(e), o = (i) => t(i) && n(i);
      return (this.$slots.default ? this.$slots.default() : []).filter((i) => e(i) || o(i)).flatMap((i) => o(i) ? i.children : i).map((i) => ({
        name: i.props.name,
        title: i.props.title
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
}), rl = { class: "k-tabs" }, ol = { class: "k-tabs-nav" }, sl = ["href", "onClick"], il = { class: "k-tabs-content" };
function al(e, t, n, o, a, i) {
  return u(), p("div", rl, [
    k("div", ol, [
      (u(!0), p(U, null, Q(e.tabs, (r) => (u(), p("div", {
        key: r.name,
        class: ee(e.classObj(r))
      }, [
        k("a", {
          href: `#${r.name}`,
          onClick: (l) => e.selectTab(r.name)
        }, I(r.title), 9, sl)
      ], 2))), 128))
    ]),
    k("div", il, [
      F(e.$slots, "default")
    ])
  ]);
}
const ll = /* @__PURE__ */ M(nl, [["render", al]]), ul = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ll
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
      return this.name == V(this.tabs, "selectedTab");
    }
  }
}), cl = { key: 0 };
function fl(e, t, n, o, a, i) {
  return e.isSelected ? (u(), p("div", cl, [
    F(e.$slots, "default")
  ])) : L("", !0);
}
const pl = /* @__PURE__ */ M(dl, [["render", fl]]), ml = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pl
}, Symbol.toStringTag, { value: "Module" })), hl = S({
  extends: Rt,
  setup() {
    return { session: Z(me) };
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
          ), n = V(t, "data.data.first_name"), o = V(t, "data.data.last_name"), a = V(t, "data.data.name"), i = `${n} ${o} (${a})`;
          this.items = [
            {
              text: i,
              value: V(t, "data.data.id"),
              type: V(t, "data.data.type")
            }
          ], this.select = i;
        } finally {
          this.pleaseWait = !1, this.readonly = !1, this.loading = !1;
        }
    }
  }
}), gl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: hl
}, Symbol.toStringTag, { value: "Module" }));
class bl {
  constructor(t, n) {
    this.jsLongDateFormat = t, this.jsShortDateFormat = n;
  }
  /**
   * This gets interpretted as epoch:
   *
   * new Date('1970-01-01') new Date('1970-01-01T00:00:00Z') // notice the Z
   *
   * However, this is parsed into the local time zone, and will be off by an
   * hour in Switzerland.
   *
   * new Date('1970-01-01T00:00:00')
   */
  /**
   * This might seem weird, because it is.  The new Date(<string>) method may or
   * may not parse in the local time zone depending on the construct of the
   * string.  Here we normalize the most common cases to parse as UTC such that
   * we can format in UTC.
   *
   * @param input
   * @returns {Date}
   */
  stringToDate(t) {
    switch (t.length) {
      case 10:
        return new Date(t);
      case 19:
        return this.stringToDate(`${t}Z`);
      case 20:
        return new Date(t);
      default:
        return new Date(t);
    }
  }
  /**
   * @param input A string, number, or Date.
   * @returns
   */
  convertToDate(t) {
    return typeof t == "string" ? [this.stringToDate(t), "GMT"] : typeof t == "number" ? [new Date(t), "GMT"] : t != null && t.getMonth ? [t, void 0] : [null, void 0];
  }
  formatDate(t) {
    try {
      const [n, o] = this.convertToDate(t);
      return n ? rt(n, this.jsShortDateFormat, {
        timezone: o
      }) : null;
    } catch {
      return null;
    }
  }
  formatDateTime(t) {
    try {
      const [n, o] = this.convertToDate(t);
      return n ? rt(n, this.jsLongDateFormat, {
        timezone: o
      }) : null;
    } catch {
      return null;
    }
  }
}
var _l = /* @__PURE__ */ ((e) => (e[e.SUSPENDED = 6] = "SUSPENDED", e[e.SUBWORKLATE = 10] = "SUBWORKLATE", e[e.STOPPED = 8] = "STOPPED", e[e.STEPLATE = 3] = "STEPLATE", e[e.OK = 1] = "OK", e[e.MILESTONELATE = 4] = "MILESTONELATE", e[e.LATE = 5] = "LATE", e[e.HALTED = 2] = "HALTED", e[e.COMPLETED = 7] = "COMPLETED", e[e.ARCHIVED = 9] = "ARCHIVED", e))(_l || {});
const zl = (e, t) => {
  const n = t.sortKey, a = t.sortAsc ? 1 : -1;
  return [...e].sort((i, r) => {
    if (n) {
      const l = String(V(i, n, "") ?? ""), d = String(V(r, n, "") ?? "");
      return a * l.toLowerCase().localeCompare(d.toLowerCase());
    } else
      return 0;
  });
}, qt = () => Z(he);
function ye(e) {
  return (t, n = {}) => new Promise((o) => {
    window.csui.require(
      ["csui/dialogs/modal.alert/modal.alert"],
      function(a) {
        a[e](o, t, null, n);
      }
    );
  });
}
function ge(e) {
  return (t, n = {}) => new Promise((o) => {
    window.csui.require(
      ["csui/dialogs/modal.alert/modal.alert"],
      function(a) {
        a[e](o, t, null, n);
      }
    );
  });
}
function vl() {
  return !!window.csui;
}
function yl() {
  window.csui.require(
    ["csui/utils/contexts/factories/application.scope.factory"],
    function(e) {
      window._rhcore_smartui_view_context.getModel(e).set("id", "myassignments");
    }
  );
}
function $l({
  dataId: e,
  selectedTab: t = void 0,
  selectedProperty: n = void 0
}) {
  window.csui.require(
    [
      "csui/utils/contexts/factories/next.node",
      "csui/utils/contexts/factories/metadata.factory"
    ],
    function(o, a) {
      const i = window._rhcore_smartui_view_context;
      t ? i.getModel(a).set("metadata_info", {
        id: e,
        navigator: !0,
        selectedTab: t,
        // this works
        selectedProperty: n
      }) : i.getModel(o).set("id", e);
    }
  );
}
const kl = () => (qt(), {
  showSuccess: ye("showSuccess"),
  showInformation: ye("showInformation"),
  showWarning: ye("showWarning"),
  showError: ye("showError"),
  showMessage: ye("showMessage"),
  confirmSuccess: ge("confirmSuccess"),
  confirmInformation: ge("confirmInformation"),
  confirmWarning: ge("confirmWarning"),
  confirmError: ge("confirmError"),
  confirmQuestion: ge("confirmQuestion"),
  confirmMessage: ge("confirmMessage"),
  isSmartUI: vl,
  openDataIdSmartUI: $l,
  openAssignmentsSmartUI: yl
  // openDataId: ({
  //   dataId,
  //   selectedTab,
  //   selectedProperty,
  // }: {
  //   dataId: number;
  //   selectedTab?: string;
  //   selectedProperty?: string;
  // }) => _openDataId({ baseUrl, dataId, selectedTab, selectedProperty }),
}), Vl = (e, t) => {
  const n = (t == null ? void 0 : t.default) ?? (() => null), o = (t == null ? void 0 : t.watch) ?? [], a = (t == null ? void 0 : t.immediate) ?? !0, i = (t == null ? void 0 : t.transform) ?? ((f) => f), r = (t == null ? void 0 : t.deep) ?? !0, l = se(n()), d = se(0), s = Se(() => d.value > 0), c = se(null), h = async () => {
    try {
      d.value += 1, l.value = i(await e()), c.value = null;
    } catch (f) {
      l.value = n(), c.value = f;
    } finally {
      d.value -= 1;
    }
  };
  return o.map((f) => Ue(f, h, { deep: r })), a && h(), { data: l, pending: s, error: c, refresh: h };
}, Bl = () => Z(zt), Il = () => Z(Bt), Dl = () => Z(Vt), Fl = () => {
  const e = kl(), t = qt(), n = Ae(), o = ({
    baseUrl: c,
    dataId: h
  }) => {
    window.location.href = `${c}/open/${h}`;
  }, a = ({
    dataId: c,
    selectedTab: h = void 0,
    selectedProperty: f = void 0
  }) => {
    e.isSmartUI() ? e.openDataIdSmartUI({ dataId: c, selectedTab: h, selectedProperty: f }) : o({ baseUrl: t.baseUrl, dataId: c });
  }, i = ({
    dataId: c,
    selectedTab: h,
    selectedProperty: f
  }) => {
    a({ dataId: c, selectedTab: h, selectedProperty: f });
  }, r = () => e.isSmartUI() ? {
    href: `${t.baseUrl}/app/myassignments`,
    onClick: (c) => {
      e.openAssignmentsSmartUI(), c.preventDefault();
    }
  } : {
    href: `${t.baseUrl}?func=Personal.Assignments`
  }, l = (c, h = "_self") => e.isSmartUI() ? {
    href: `${t.baseUrl}/app/nodes/${c}`,
    target: h,
    onClick: (f) => {
      h === "_self" && (e.openDataIdSmartUI({ dataId: c }), f.preventDefault());
    }
  } : {
    href: `${t.baseUrl}/open/${c}`,
    target: h
  }, d = (c, h) => Lt.lookup(n, c ?? null, h), s = (c, h) => xe.lookup(n, c ?? null, h);
  return {
    isSmartUI: e.isSmartUI,
    openDataId: i,
    openDataIdBind: l,
    openAssignmentsBind: r,
    nodeLookup: d,
    userLookup: s
  };
}, Ul = (e) => {
  const t = new on(e);
  return {
    install(o) {
      const a = {
        userId: e.userId,
        img: e.img,
        baseUrl: e.baseUrl,
        jsLongDateFormat: e.datelong,
        jsShortDateFormat: e.dateshort
      };
      o.provide(me, t), o.provide(he, a), o.provide(
        Vt,
        new bl(e.datelong, e.dateshort)
      );
    }
  };
}, Nl = () => {
  const e = (n) => {
    Object.entries(/* @__PURE__ */ Object.assign({
      "./components/Card/KCard.vue": an,
      "./components/Card/KCardActions.vue": fn,
      "./components/Card/KCardText.vue": bn,
      "./components/Card/KCardTitle.vue": kn,
      "./components/Icons/KMenuDownIcon.vue": Mn,
      "./components/Icons/KSubtractIcon.vue": Vn,
      "./components/KAdminLink.vue": En,
      "./components/KAlert.vue": nr,
      "./components/KApp.vue": ar,
      "./components/KAutocomplete.vue": hr,
      "./components/KBrowseLink.vue": Mr,
      "./components/KButton.vue": Lr,
      "./components/KConfirm.vue": Ir,
      "./components/KDateTimePicker.vue": Rr,
      "./components/KDialog.vue": Gr,
      "./components/KDivider.vue": Xr,
      "./components/KDot.vue": no,
      "./components/KFormFieldWrapper.vue": ao,
      "./components/KFunctionMenu.vue": go,
      "./components/KFunctionMenuModern.vue": jo,
      "./components/KFunctionMenuSmartUI.vue": Lo,
      "./components/KLinearProgressIndicator.vue": Do,
      "./components/KList/KList.vue": Ro,
      "./components/KList/KListItem.vue": xo,
      "./components/KList/KListItemSubtitle.vue": So,
      "./components/KList/KListItemTitle.vue": yo,
      "./components/KMenu/KMenu.vue": Qo,
      "./components/KMenu/KRightCaret.vue": ns,
      "./components/KMulti.vue": ds,
      "./components/KMulti2.vue": gs,
      "./components/KMultiUserPicker.vue": _s,
      "./components/KNodeAncestor.vue": ws,
      "./components/KNodePickerField.vue": Ms,
      "./components/KOneMoment.vue": zs,
      "./components/KPageDropZone.vue": Ds,
      "./components/KPageTitle.vue": Ws,
      "./components/KPagination.vue": ai,
      "./components/KPagination2.vue": _i,
      "./components/KPleaseWait.vue": Ci,
      "./components/KRadioGroup.vue": Li,
      "./components/KScratch.vue": Ii,
      "./components/KSelect.vue": Hi,
      "./components/KSkeletonLoader.vue": kr,
      "./components/KSmartUIPanel.vue": ea,
      "./components/KSnackbar.vue": da,
      "./components/KSortHeader.vue": ga,
      "./components/KSpacer.vue": $a,
      "./components/KSpinner.vue": wi,
      "./components/KSwitch.vue": xa,
      "./components/KTable.vue": ja,
      "./components/KTextArea.vue": za,
      "./components/KTextField.vue": Fa,
      "./components/KUserGIF.vue": qa,
      "./components/KUserLink.vue": Ja,
      "./components/KUserPicker.vue": tl,
      "./components/KUserPickerLegacy.vue": gl,
      "./components/Tabs/KTabItem.vue": ml,
      "./components/Tabs/KTabs.vue": ul
    })).forEach(
      ([a, i]) => {
        var l, d;
        const r = (d = (l = a == null ? void 0 : a.split("/")) == null ? void 0 : l.pop()) == null ? void 0 : d.replace(/\.\w+$/, "");
        n.component(r, i.default);
      }
    );
  };
  return {
    install(n) {
      e(n);
    }
  };
};
export {
  Nn as KAdminLink,
  tr as KAlert,
  ir as KApp,
  mr as KAutocomplete,
  Cr as KBrowseLink,
  Ar as KButton,
  sn as KCard,
  cn as KCardActions,
  gn as KCardText,
  $n as KCardTitle,
  Br as KConfirm,
  Er as KDateTimePicker,
  Hr as KDialog,
  Ye as KDivider,
  to as KDot,
  io as KFormFieldWrapper,
  ho as KFunctionMenu,
  Mo as KFunctionMenuModern,
  Ao as KFunctionMenuSmartUI,
  Io as KLinearProgressIndicator,
  Eo as KList,
  Je as KListItem,
  Ft as KListItemSubtitle,
  Dt as KListItemTitle,
  Go as KMenu,
  Re as KMenuDownIcon,
  us as KMulti,
  hs as KMulti2,
  bs as KMultiUserPicker,
  Nt as KNodeAncestor,
  Cs as KNodePickerField,
  Ls as KOneMoment,
  Is as KPageDropZone,
  qs as KPageTitle,
  ii as KPagination,
  bi as KPagination2,
  Ti as KPleaseWait,
  Ai as KRadioGroup,
  ts as KRightCaret,
  Bi as KScratch,
  Wi as KSelect,
  It as KSkeletonLoader,
  Zi as KSmartUIPanel,
  ua as KSnackbar,
  ha as KSortHeader,
  ya as KSpacer,
  Et as KSpinner,
  zn as KSubtractIcon,
  Oa as KSwitch,
  pl as KTabItem,
  Ma as KTable,
  ll as KTabs,
  La as KTextArea,
  Da as KTextField,
  Ra as KUserGIF,
  Ya as KUserLink,
  Rt as KUserPicker,
  hl as KUserPickerLegacy,
  _l as WorkflowStatusEnum,
  he as configKey,
  Bt as confirmDialogKey,
  Ul as createVueVitePlugin,
  Nl as createVueViteRegisterComponentsPlugin,
  Vt as dateTimeFormatterKey,
  zl as generalSort,
  Z as injectStrict,
  Lt as nodeLookup,
  me as sessionKey,
  zt as snackbarKey,
  Vl as useAsyncData,
  Fl as useCSUtils,
  qt as useConfig,
  Il as useConfirmDialog,
  Dl as useDateTimeFormatter,
  Ae as useSession,
  kl as useSmartUI,
  Bl as useSnackbar,
  xe as userLookup
};
//# sourceMappingURL=index.js.map
