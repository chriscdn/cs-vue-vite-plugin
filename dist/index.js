import { defineComponent as O, h as ae, openBlock as a, createElementBlock as c, renderSlot as E, mergeProps as ue, createElementVNode as k, toDisplayString as D, createCommentVNode as L, normalizeStyle as re, resolveComponent as K, createVNode as B, withCtx as M, resolveDirective as Ke, withDirectives as oe, normalizeClass as Z, withKeys as he, withModifiers as se, vModelText as je, Fragment as N, renderList as Q, createTextVNode as X, inject as xt, createBlock as A, vModelDynamic as Kt, Teleport as Je, Transition as be, setBlockTracking as Ne, toHandlers as _e, ref as Ee, TransitionGroup as Me, useCssVars as Ze, vModelRadio as jt, vModelSelect as Mt } from "vue";
import z from "lodash.get";
import { directive as Te } from "vue3-click-away";
import ye from "@chriscdn/promise-semaphore";
import { format as Ue } from "date-fns";
import { disableBodyScroll as Tt, enableBodyScroll as Pt } from "body-scroll-lock";
import Re from "hotkeys-js";
import Ct from "@googlicius/build-url";
import Lt from "js-cookie";
import { Session as At } from "@kweli/cs-rest";
import We from "intl-dateformat";
const et = O({
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
}, ve = O({
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
      const e = {}, t = Y(this.height), n = Y(this.minHeight), s = Y(this.minWidth), l = Y(this.maxHeight), i = Y(this.maxWidth), r = Y(this.width);
      return t && (e.height = t), n && (e.minHeight = n), s && (e.minWidth = s), l && (e.maxHeight = l), i && (e.maxWidth = i), r && (e.width = r), e;
    }
  }
}), zt = O({
  mixins: [ve, et],
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
      return ae(
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
const Vt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zt
}, Symbol.toStringTag, { value: "Module" })), Bt = O({});
const x = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, l] of t)
    n[s] = l;
  return n;
}, Ft = { class: "k-card-actions" };
function Dt(e, t, n, s, l, i) {
  return a(), c("div", Ft, [
    E(e.$slots, "default")
  ]);
}
const It = /* @__PURE__ */ x(Bt, [["render", Dt]]), Nt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: It
}, Symbol.toStringTag, { value: "Module" })), Et = O({});
const Ut = { class: "k-card-text" };
function Rt(e, t, n, s, l, i) {
  return a(), c("div", Ut, [
    E(e.$slots, "default")
  ]);
}
const Wt = /* @__PURE__ */ x(Et, [["render", Rt]]), qt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wt
}, Symbol.toStringTag, { value: "Module" })), Ht = O({});
const Gt = { class: "k-card-title" };
function Qt(e, t, n, s, l, i) {
  return a(), c("div", Gt, [
    E(e.$slots, "default")
  ]);
}
const Yt = /* @__PURE__ */ x(Ht, [["render", Qt]]), Xt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Yt
}, Symbol.toStringTag, { value: "Module" })), Jt = O({
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
}), Zt = ["aria-hidden", "aria-label"], en = ["width", "height"], tn = { d: "M7,10L12,15L17,10H7Z" }, nn = { key: 0 };
function rn(e, t, n, s, l, i) {
  return a(), c("span", ue(e.$attrs, {
    "aria-hidden": !e.title,
    "aria-label": e.title,
    class: "material-design-icon menu-down-icon animate-spin",
    role: "img",
    onClick: t[0] || (t[0] = (r) => e.$emit("click", r))
  }), [
    (a(), c("svg", {
      class: "fill-black hover:fill-green-500 transition-colors",
      width: e.size,
      height: e.size,
      viewBox: "7 10 10 5"
    }, [
      k("path", tn, [
        e.title ? (a(), c("title", nn, D(e.title), 1)) : L("", !0)
      ])
    ], 8, en))
  ], 16, Zt);
}
const Pe = /* @__PURE__ */ x(Jt, [["render", rn]]), on = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pe
}, Symbol.toStringTag, { value: "Module" })), sn = {}, ln = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, an = /* @__PURE__ */ k("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z" }, null, -1), un = [
  an
];
function dn(e, t) {
  return a(), c("svg", ln, un);
}
const cn = /* @__PURE__ */ x(sn, [["render", dn]]), pn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cn
}, Symbol.toStringTag, { value: "Module" })), fn = O({
  setup() {
    return { config: ee(ce) };
  }
}), mn = { clsas: "space-y-2" }, hn = /* @__PURE__ */ k("hr", null, null, -1), gn = ["href"];
function _n(e, t, n, s, l, i) {
  return a(), c("div", mn, [
    hn,
    k("a", {
      href: `${e.config.baseUrl}?func=admin.index`
    }, "Admin Home", 8, gn)
  ]);
}
const bn = /* @__PURE__ */ x(fn, [["render", _n]]), yn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bn
}, Symbol.toStringTag, { value: "Module" }));
function vn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var tt = {}, nt = {}, Ce = {};
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
    let s = [
      "var",
      "calc",
      "min",
      "max",
      "clamp"
    ];
    for (const l of s)
      if (n.includes(`${l}(`))
        return `calc(${n} * -1)`;
  }
})(Ce);
var rt = {};
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
})(rt);
var ot = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return t;
    }
  });
  function t(n, s) {
    return n === void 0 ? s : Array.isArray(n) ? n : [
      ...new Set(s.filter((i) => n !== !1 && n[i] !== !1).concat(Object.keys(n).filter((i) => n[i] !== !1)))
    ];
  }
})(ot);
var st = {}, $e = {}, Le = { exports: {} }, R = String, it = function() {
  return { isColorSupported: !1, reset: R, bold: R, dim: R, italic: R, underline: R, inverse: R, hidden: R, strikethrough: R, black: R, red: R, green: R, yellow: R, blue: R, magenta: R, cyan: R, white: R, gray: R, bgBlack: R, bgRed: R, bgGreen: R, bgYellow: R, bgBlue: R, bgMagenta: R, bgCyan: R, bgWhite: R };
};
Le.exports = it();
Le.exports.createColors = it;
var lt = Le.exports;
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(d, o) {
    for (var p in o)
      Object.defineProperty(d, p, {
        enumerable: !0,
        get: o[p]
      });
  }
  t(e, {
    dim: function() {
      return r;
    },
    default: function() {
      return u;
    }
  });
  const n = /* @__PURE__ */ s(lt);
  function s(d) {
    return d && d.__esModule ? d : {
      default: d
    };
  }
  let l = /* @__PURE__ */ new Set();
  function i(d, o, p) {
    typeof process < "u" && process.env.JEST_WORKER_ID || p && l.has(p) || (p && l.add(p), console.warn(""), o.forEach((b) => console.warn(d, "-", b)));
  }
  function r(d) {
    return n.default.dim(d);
  }
  const u = {
    info(d, o) {
      i(n.default.bold(n.default.cyan("info")), ...Array.isArray(d) ? [
        d
      ] : [
        o,
        d
      ]);
    },
    warn(d, o) {
      i(n.default.bold(n.default.yellow("warn")), ...Array.isArray(d) ? [
        d
      ] : [
        o,
        d
      ]);
    },
    risk(d, o) {
      i(n.default.bold(n.default.magenta("risk")), ...Array.isArray(d) ? [
        d
      ] : [
        o,
        d
      ]);
    }
  };
})($e);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return l;
    }
  });
  const t = /* @__PURE__ */ n($e);
  function n(i) {
    return i && i.__esModule ? i : {
      default: i
    };
  }
  function s({ version: i, from: r, to: u }) {
    t.default.warn(`${r}-color-renamed`, [
      `As of Tailwind CSS ${i}, \`${r}\` has been renamed to \`${u}\`.`,
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
      return s({
        version: "v2.2",
        from: "lightBlue",
        to: "sky"
      }), this.sky;
    },
    get warmGray() {
      return s({
        version: "v3.0",
        from: "warmGray",
        to: "stone"
      }), this.stone;
    },
    get trueGray() {
      return s({
        version: "v3.0",
        from: "trueGray",
        to: "neutral"
      }), this.neutral;
    },
    get coolGray() {
      return s({
        version: "v3.0",
        from: "coolGray",
        to: "gray"
      }), this.gray;
    },
    get blueGray() {
      return s({
        version: "v3.0",
        from: "blueGray",
        to: "slate"
      }), this.slate;
    }
  };
})(st);
var at = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "defaults", {
    enumerable: !0,
    get: function() {
      return t;
    }
  });
  function t(n, ...s) {
    for (let r of s) {
      for (let u in r) {
        var l;
        !(n == null || (l = n.hasOwnProperty) === null || l === void 0) && l.call(n, u) || (n[u] = r[u]);
      }
      for (let u of Object.getOwnPropertySymbols(r)) {
        var i;
        !(n == null || (i = n.hasOwnProperty) === null || i === void 0) && i.call(n, u) || (n[u] = r[u]);
      }
    }
    return n;
  }
})(at);
var ut = {};
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
    let s = n.split("[").length - 1, l = n.split("]").length - 1;
    if (s !== l)
      throw new Error(`Path is invalid. Has unbalanced brackets: ${n}`);
    return n.split(/\.(?![^\[]*\])|[\[\]]/g).filter(Boolean);
  }
})(ut);
var dt = {}, ke = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(b, f) {
    for (var $ in f)
      Object.defineProperty(b, $, {
        enumerable: !0,
        get: f[$]
      });
  }
  t(e, {
    flagEnabled: function() {
      return u;
    },
    issueFlagNotices: function() {
      return o;
    },
    default: function() {
      return p;
    }
  });
  const n = /* @__PURE__ */ l(lt), s = /* @__PURE__ */ l($e);
  function l(b) {
    return b && b.__esModule ? b : {
      default: b
    };
  }
  let i = {
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
  function u(b, f) {
    if (r.future.includes(f)) {
      var $, _, T;
      return b.future === "all" || ((T = (_ = b == null || ($ = b.future) === null || $ === void 0 ? void 0 : $[f]) !== null && _ !== void 0 ? _ : i[f]) !== null && T !== void 0 ? T : !1);
    }
    if (r.experimental.includes(f)) {
      var F, W, q;
      return b.experimental === "all" || ((q = (W = b == null || (F = b.experimental) === null || F === void 0 ? void 0 : F[f]) !== null && W !== void 0 ? W : i[f]) !== null && q !== void 0 ? q : !1);
    }
    return !1;
  }
  function d(b) {
    if (b.experimental === "all")
      return r.experimental;
    var f;
    return Object.keys((f = b?.experimental) !== null && f !== void 0 ? f : {}).filter(($) => r.experimental.includes($) && b.experimental[$]);
  }
  function o(b) {
    if (process.env.JEST_WORKER_ID === void 0 && d(b).length > 0) {
      let f = d(b).map(($) => n.default.yellow($)).join(", ");
      s.default.warn("experimental-flags-enabled", [
        `You have enabled experimental features: ${f}`,
        "Experimental features in Tailwind CSS are not covered by semver, may introduce breaking changes, and can change at any time."
      ]);
    }
  }
  const p = r;
})(ke);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "normalizeConfig", {
    enumerable: !0,
    get: function() {
      return i;
    }
  });
  const t = ke, n = /* @__PURE__ */ l($e);
  function s(r) {
    if (typeof WeakMap != "function")
      return null;
    var u = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new WeakMap();
    return (s = function(o) {
      return o ? d : u;
    })(r);
  }
  function l(r, u) {
    if (!u && r && r.__esModule)
      return r;
    if (r === null || typeof r != "object" && typeof r != "function")
      return {
        default: r
      };
    var d = s(u);
    if (d && d.has(r))
      return d.get(r);
    var o = {}, p = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var b in r)
      if (b !== "default" && Object.prototype.hasOwnProperty.call(r, b)) {
        var f = p ? Object.getOwnPropertyDescriptor(r, b) : null;
        f && (f.get || f.set) ? Object.defineProperty(o, b, f) : o[b] = r[b];
      }
    return o.default = r, d && d.set(r, o), o;
  }
  function i(r) {
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
      let { content: p, purge: b, safelist: f } = r;
      return Array.isArray(f) ? f : Array.isArray(p?.safelist) ? p.safelist : Array.isArray(b?.safelist) ? b.safelist : Array.isArray(b == null || (o = b.options) === null || o === void 0 ? void 0 : o.safelist) ? b.options.safelist : [];
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
      var d;
      r.prefix = (d = r.prefix) !== null && d !== void 0 ? d : "";
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
          var f, $, _, T, F, W, q, U, H, G;
          return !((f = r.purge) === null || f === void 0) && f.extract ? r.purge.extract : !(($ = r.content) === null || $ === void 0) && $.extract ? r.content.extract : !((_ = r.purge) === null || _ === void 0 || (T = _.extract) === null || T === void 0) && T.DEFAULT ? r.purge.extract.DEFAULT : !((F = r.content) === null || F === void 0 || (W = F.extract) === null || W === void 0) && W.DEFAULT ? r.content.extract.DEFAULT : !((q = r.purge) === null || q === void 0 || (U = q.options) === null || U === void 0) && U.extractors ? r.purge.options.extractors : !((H = r.content) === null || H === void 0 || (G = H.options) === null || G === void 0) && G.extractors ? r.content.options.extractors : {};
        })(), p = {}, b = (() => {
          var f, $, _, T;
          if (!((f = r.purge) === null || f === void 0 || ($ = f.options) === null || $ === void 0) && $.defaultExtractor)
            return r.purge.options.defaultExtractor;
          if (!((_ = r.content) === null || _ === void 0 || (T = _.options) === null || T === void 0) && T.defaultExtractor)
            return r.content.options.defaultExtractor;
        })();
        if (b !== void 0 && (p.DEFAULT = b), typeof o == "function")
          p.DEFAULT = o;
        else if (Array.isArray(o))
          for (let { extensions: f, extractor: $ } of o ?? [])
            for (let _ of f)
              p[_] = $;
        else
          typeof o == "object" && o !== null && Object.assign(p, o);
        return p;
      })(),
      transform: (() => {
        let o = (() => {
          var b, f, $, _, T, F;
          return !((b = r.purge) === null || b === void 0) && b.transform ? r.purge.transform : !((f = r.content) === null || f === void 0) && f.transform ? r.content.transform : !(($ = r.purge) === null || $ === void 0 || (_ = $.transform) === null || _ === void 0) && _.DEFAULT ? r.purge.transform.DEFAULT : !((T = r.content) === null || T === void 0 || (F = T.transform) === null || F === void 0) && F.DEFAULT ? r.content.transform.DEFAULT : {};
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
})(dt);
var ct = {};
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
    const s = Object.getPrototypeOf(n);
    return s === null || s === Object.prototype;
  }
})(ct);
var pt = {};
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
    return Array.isArray(n) ? n.map((s) => t(s)) : typeof n == "object" && n !== null ? Object.fromEntries(Object.entries(n).map(([s, l]) => [
      s,
      t(l)
    ])) : n;
  }
})(pt);
var ft = {}, mt = {};
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
})(mt);
var Ae = {}, ze = {}, ht = {};
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
})(ht);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(_, T) {
    for (var F in T)
      Object.defineProperty(_, F, {
        enumerable: !0,
        get: T[F]
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
  const n = /* @__PURE__ */ s(ht);
  function s(_) {
    return _ && _.__esModule ? _ : {
      default: _
    };
  }
  let l = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i, i = /^#([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i, r = /(?:\d+|\d*\.\d+)%?/, u = /(?:\s*,\s*|\s+)/, d = /\s*[,/]\s*/, o = /var\(--(?:[^ )]*?)\)/, p = new RegExp(`^(rgba?)\\(\\s*(${r.source}|${o.source})(?:${u.source}(${r.source}|${o.source}))?(?:${u.source}(${r.source}|${o.source}))?(?:${d.source}(${r.source}|${o.source}))?\\s*\\)$`), b = new RegExp(`^(hsla?)\\(\\s*((?:${r.source})(?:deg|rad|grad|turn)?|${o.source})(?:${u.source}(${r.source}|${o.source}))?(?:${u.source}(${r.source}|${o.source}))?(?:${d.source}(${r.source}|${o.source}))?\\s*\\)$`);
  function f(_, { loose: T = !1 } = {}) {
    var F, W;
    if (typeof _ != "string")
      return null;
    if (_ = _.trim(), _ === "transparent")
      return {
        mode: "rgb",
        color: [
          "0",
          "0",
          "0"
        ],
        alpha: "0"
      };
    if (_ in n.default)
      return {
        mode: "rgb",
        color: n.default[_].map((J) => J.toString())
      };
    let q = _.replace(i, (J, ne, te, y, C) => [
      "#",
      ne,
      ne,
      te,
      te,
      y,
      y,
      C ? C + C : ""
    ].join("")).match(l);
    if (q !== null)
      return {
        mode: "rgb",
        color: [
          parseInt(q[1], 16),
          parseInt(q[2], 16),
          parseInt(q[3], 16)
        ].map((J) => J.toString()),
        alpha: q[4] ? (parseInt(q[4], 16) / 255).toString() : void 0
      };
    var U;
    let H = (U = _.match(p)) !== null && U !== void 0 ? U : _.match(b);
    if (H === null)
      return null;
    let G = [
      H[2],
      H[3],
      H[4]
    ].filter(Boolean).map((J) => J.toString());
    return G.length === 2 && G[0].startsWith("var(") ? {
      mode: H[1],
      color: [
        G[0]
      ],
      alpha: G[1]
    } : !T && G.length !== 3 || G.length < 3 && !G.some((J) => /^var\(.*?\)$/.test(J)) ? null : {
      mode: H[1],
      color: G,
      alpha: (F = H[5]) === null || F === void 0 || (W = F.toString) === null || W === void 0 ? void 0 : W.call(F)
    };
  }
  function $({ mode: _, color: T, alpha: F }) {
    let W = F !== void 0;
    return _ === "rgba" || _ === "hsla" ? `${_}(${T.join(", ")}${W ? `, ${F}` : ""})` : `${_}(${T.join(" ")}${W ? ` / ${F}` : ""})`;
  }
})(ze);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(i, r) {
    for (var u in r)
      Object.defineProperty(i, u, {
        enumerable: !0,
        get: r[u]
      });
  }
  t(e, {
    withAlphaValue: function() {
      return s;
    },
    default: function() {
      return l;
    }
  });
  const n = ze;
  function s(i, r, u) {
    if (typeof i == "function")
      return i({
        opacityValue: r
      });
    let d = (0, n.parseColor)(i, {
      loose: !0
    });
    return d === null ? u : (0, n.formatColor)({
      ...d,
      alpha: r
    });
  }
  function l({ color: i, property: r, variable: u }) {
    let d = [].concat(r);
    if (typeof i == "function")
      return {
        [u]: "1",
        ...Object.fromEntries(d.map((p) => [
          p,
          i({
            opacityVariable: u,
            opacityValue: `var(${u})`
          })
        ]))
      };
    const o = (0, n.parseColor)(i);
    return o === null ? Object.fromEntries(d.map((p) => [
      p,
      i
    ])) : o.alpha !== void 0 ? Object.fromEntries(d.map((p) => [
      p,
      i
    ])) : {
      [u]: "1",
      ...Object.fromEntries(d.map((p) => [
        p,
        (0, n.formatColor)({
          ...o,
          alpha: `var(${u})`
        })
      ]))
    };
  }
})(Ae);
var Ve = {}, gt = {}, we = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "splitAtTopLevelOnly", {
    enumerable: !0,
    get: function() {
      return t;
    }
  });
  function t(n, s) {
    let l = [], i = [], r = 0, u = !1;
    for (let d = 0; d < n.length; d++) {
      let o = n[d];
      l.length === 0 && o === s[0] && !u && (s.length === 1 || n.slice(d, d + s.length) === s) && (i.push(n.slice(r, d)), r = d + s.length), u ? u = !1 : o === "\\" && (u = !0), o === "(" || o === "[" || o === "{" ? l.push(o) : (o === ")" && l[l.length - 1] === "(" || o === "]" && l[l.length - 1] === "[" || o === "}" && l[l.length - 1] === "{") && l.pop();
    }
    return i.push(n.slice(r)), i;
  }
})(we);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(d, o) {
    for (var p in o)
      Object.defineProperty(d, p, {
        enumerable: !0,
        get: o[p]
      });
  }
  t(e, {
    parseBoxShadowValue: function() {
      return r;
    },
    formatBoxShadowValue: function() {
      return u;
    }
  });
  const n = we;
  let s = /* @__PURE__ */ new Set([
    "inset",
    "inherit",
    "initial",
    "revert",
    "unset"
  ]), l = /\ +(?![^(]*\))/g, i = /^-?(\d+|\.\d+)(.*?)$/g;
  function r(d) {
    return (0, n.splitAtTopLevelOnly)(d, ",").map((p) => {
      let b = p.trim(), f = {
        raw: b
      }, $ = b.split(l), _ = /* @__PURE__ */ new Set();
      for (let T of $)
        i.lastIndex = 0, !_.has("KEYWORD") && s.has(T) ? (f.keyword = T, _.add("KEYWORD")) : i.test(T) ? _.has("X") ? _.has("Y") ? _.has("BLUR") ? _.has("SPREAD") || (f.spread = T, _.add("SPREAD")) : (f.blur = T, _.add("BLUR")) : (f.y = T, _.add("Y")) : (f.x = T, _.add("X")) : f.color ? (f.unknown || (f.unknown = []), f.unknown.push(T)) : f.color = T;
      return f.valid = f.x !== void 0 && f.y !== void 0, f;
    });
  }
  function u(d) {
    return d.map((o) => o.valid ? [
      o.keyword,
      o.x,
      o.y,
      o.blur,
      o.spread,
      o.color
    ].filter(Boolean).join(" ") : o.raw).join(", ");
  }
})(gt);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(m, S) {
    for (var I in S)
      Object.defineProperty(m, I, {
        enumerable: !0,
        get: S[I]
      });
  }
  t(e, {
    normalize: function() {
      return o;
    },
    url: function() {
      return b;
    },
    number: function() {
      return f;
    },
    percentage: function() {
      return $;
    },
    length: function() {
      return F;
    },
    lineWidth: function() {
      return q;
    },
    shadow: function() {
      return U;
    },
    color: function() {
      return H;
    },
    image: function() {
      return G;
    },
    gradient: function() {
      return ne;
    },
    position: function() {
      return y;
    },
    familyName: function() {
      return C;
    },
    genericName: function() {
      return h;
    },
    absoluteSize: function() {
      return w;
    },
    relativeSize: function() {
      return P;
    }
  });
  const n = ze, s = gt, l = we;
  let i = [
    "min",
    "max",
    "clamp",
    "calc"
  ];
  function r(m) {
    return i.some((S) => new RegExp(`^${S}\\(.*\\)`).test(m));
  }
  const u = "--tw-placeholder", d = new RegExp(u, "g");
  function o(m, S = !0) {
    return m.startsWith("--") ? `var(${m})` : m.includes("url(") ? m.split(/(url\(.*?\))/g).filter(Boolean).map((I) => /^url\(.*?\)$/.test(I) ? I : o(I, !1)).join("") : (m = m.replace(/([^\\])_+/g, (I, V) => V + " ".repeat(I.length - 1)).replace(/^_/g, " ").replace(/\\_/g, "_"), S && (m = m.trim()), m = p(m), m);
  }
  function p(m) {
    return m.replace(/(calc|min|max|clamp)\(.+\)/g, (S) => {
      let I = [];
      return S.replace(/var\((--.+?)[,)]/g, (V, ge) => (I.push(ge), V.replace(ge, u))).replace(/(-?\d*\.?\d(?!\b-\d.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g, "$1 $2 ").replace(d, () => I.shift());
    });
  }
  function b(m) {
    return m.startsWith("url(");
  }
  function f(m) {
    return !isNaN(Number(m)) || r(m);
  }
  function $(m) {
    return m.endsWith("%") && f(m.slice(0, -1)) || r(m);
  }
  let T = `(?:${[
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
  function F(m) {
    return m === "0" || new RegExp(`^[+-]?[0-9]*.?[0-9]+(?:[eE][+-]?[0-9]+)?${T}$`).test(m) || r(m);
  }
  let W = /* @__PURE__ */ new Set([
    "thin",
    "medium",
    "thick"
  ]);
  function q(m) {
    return W.has(m);
  }
  function U(m) {
    let S = (0, s.parseBoxShadowValue)(o(m));
    for (let I of S)
      if (!I.valid)
        return !1;
    return !0;
  }
  function H(m) {
    let S = 0;
    return (0, l.splitAtTopLevelOnly)(m, "_").every((V) => (V = o(V), V.startsWith("var(") ? !0 : (0, n.parseColor)(V, {
      loose: !0
    }) !== null ? (S++, !0) : !1)) ? S > 0 : !1;
  }
  function G(m) {
    let S = 0;
    return (0, l.splitAtTopLevelOnly)(m, ",").every((V) => (V = o(V), V.startsWith("var(") ? !0 : b(V) || ne(V) || [
      "element(",
      "image(",
      "cross-fade(",
      "image-set("
    ].some((ge) => V.startsWith(ge)) ? (S++, !0) : !1)) ? S > 0 : !1;
  }
  let J = /* @__PURE__ */ new Set([
    "conic-gradient",
    "linear-gradient",
    "radial-gradient",
    "repeating-conic-gradient",
    "repeating-linear-gradient",
    "repeating-radial-gradient"
  ]);
  function ne(m) {
    m = o(m);
    for (let S of J)
      if (m.startsWith(`${S}(`))
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
  function y(m) {
    let S = 0;
    return (0, l.splitAtTopLevelOnly)(m, "_").every((V) => (V = o(V), V.startsWith("var(") ? !0 : te.has(V) || F(V) || $(V) ? (S++, !0) : !1)) ? S > 0 : !1;
  }
  function C(m) {
    let S = 0;
    return (0, l.splitAtTopLevelOnly)(m, ",").every((V) => (V = o(V), V.startsWith("var(") ? !0 : V.includes(" ") && !/(['"])([^"']+)\1/g.test(V) || /^\d/g.test(V) ? !1 : (S++, !0))) ? S > 0 : !1;
  }
  let j = /* @__PURE__ */ new Set([
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
  function h(m) {
    return j.has(m);
  }
  let v = /* @__PURE__ */ new Set([
    "xx-small",
    "x-small",
    "small",
    "medium",
    "large",
    "x-large",
    "x-large",
    "xxx-large"
  ]);
  function w(m) {
    return v.has(m);
  }
  let g = /* @__PURE__ */ new Set([
    "larger",
    "smaller"
  ]);
  function P(m) {
    return g.has(m);
  }
})(Ve);
var _t = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "backgroundSize", {
    enumerable: !0,
    get: function() {
      return s;
    }
  });
  const t = Ve, n = we;
  function s(l) {
    let i = [
      "cover",
      "contain"
    ];
    return (0, n.splitAtTopLevelOnly)(l, ",").every((r) => {
      let u = (0, n.splitAtTopLevelOnly)(r, "_").filter(Boolean);
      return u.length === 1 && i.includes(u[0]) ? !0 : u.length !== 1 && u.length !== 2 ? !1 : u.every((d) => (0, t.length)(d) || (0, t.percentage)(d) || d === "auto");
    });
  }
})(_t);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(y, C) {
    for (var j in C)
      Object.defineProperty(y, j, {
        enumerable: !0,
        get: C[j]
      });
  }
  t(e, {
    updateAllClasses: function() {
      return o;
    },
    asValue: function() {
      return f;
    },
    parseColorFormat: function() {
      return T;
    },
    asColor: function() {
      return W;
    },
    asLookupValue: function() {
      return q;
    },
    typeMap: function() {
      return H;
    },
    coerceValue: function() {
      return ne;
    },
    getMatchingTypes: function() {
      return te;
    }
  });
  const n = /* @__PURE__ */ d(mt), s = Ae, l = Ve, i = /* @__PURE__ */ d(Ce), r = _t, u = ke;
  function d(y) {
    return y && y.__esModule ? y : {
      default: y
    };
  }
  function o(y, C) {
    y.walkClasses((j) => {
      j.value = C(j.value), j.raws && j.raws.value && (j.raws.value = (0, n.default)(j.raws.value));
    });
  }
  function p(y, C) {
    if (!$(y))
      return;
    let j = y.slice(1, -1);
    if (C(j))
      return (0, l.normalize)(j);
  }
  function b(y, C = {}, j) {
    let h = C[y];
    if (h !== void 0)
      return (0, i.default)(h);
    if ($(y)) {
      let v = p(y, j);
      return v === void 0 ? void 0 : (0, i.default)(v);
    }
  }
  function f(y, C = {}, { validate: j = () => !0 } = {}) {
    var h;
    let v = (h = C.values) === null || h === void 0 ? void 0 : h[y];
    return v !== void 0 ? v : C.supportsNegativeValues && y.startsWith("-") ? b(y.slice(1), C.values, j) : p(y, j);
  }
  function $(y) {
    return y.startsWith("[") && y.endsWith("]");
  }
  function _(y) {
    let C = y.lastIndexOf("/");
    return C === -1 || C === y.length - 1 ? [
      y,
      void 0
    ] : $(y) && !y.includes("]/[") ? [
      y,
      void 0
    ] : [
      y.slice(0, C),
      y.slice(C + 1)
    ];
  }
  function T(y) {
    if (typeof y == "string" && y.includes("<alpha-value>")) {
      let C = y;
      return ({ opacityValue: j = 1 }) => C.replace("<alpha-value>", j);
    }
    return y;
  }
  function F(y) {
    return (0, l.normalize)(y.slice(1, -1));
  }
  function W(y, C = {}, { tailwindConfig: j = {} } = {}) {
    var h;
    if (((h = C.values) === null || h === void 0 ? void 0 : h[y]) !== void 0) {
      var v;
      return T((v = C.values) === null || v === void 0 ? void 0 : v[y]);
    }
    let [w, g] = _(y);
    if (g !== void 0) {
      var P, m, S, I;
      let V = (I = (P = C.values) === null || P === void 0 ? void 0 : P[w]) !== null && I !== void 0 ? I : $(w) ? w.slice(1, -1) : void 0;
      return V === void 0 ? void 0 : (V = T(V), $(g) ? (0, s.withAlphaValue)(V, F(g)) : ((m = j.theme) === null || m === void 0 || (S = m.opacity) === null || S === void 0 ? void 0 : S[g]) === void 0 ? void 0 : (0, s.withAlphaValue)(V, j.theme.opacity[g]));
    }
    return f(y, C, {
      validate: l.color
    });
  }
  function q(y, C = {}) {
    var j;
    return (j = C.values) === null || j === void 0 ? void 0 : j[y];
  }
  function U(y) {
    return (C, j) => f(C, j, {
      validate: y
    });
  }
  let H = {
    any: f,
    color: W,
    url: U(l.url),
    image: U(l.image),
    length: U(l.length),
    percentage: U(l.percentage),
    position: U(l.position),
    lookup: q,
    "generic-name": U(l.genericName),
    "family-name": U(l.familyName),
    number: U(l.number),
    "line-width": U(l.lineWidth),
    "absolute-size": U(l.absoluteSize),
    "relative-size": U(l.relativeSize),
    shadow: U(l.shadow),
    size: U(r.backgroundSize)
  }, G = Object.keys(H);
  function J(y, C) {
    let j = y.indexOf(C);
    return j === -1 ? [
      void 0,
      y
    ] : [
      y.slice(0, j),
      y.slice(j + 1)
    ];
  }
  function ne(y, C, j, h) {
    if (j.values && C in j.values)
      for (let { type: w } of y ?? []) {
        let g = H[w](C, j, {
          tailwindConfig: h
        });
        if (g !== void 0)
          return [
            g,
            w,
            null
          ];
      }
    if ($(C)) {
      let w = C.slice(1, -1), [g, P] = J(w, ":");
      if (!/^[\w-_]+$/g.test(g))
        P = w;
      else if (g !== void 0 && !G.includes(g))
        return [];
      if (P.length > 0 && G.includes(g))
        return [
          f(`[${P}]`, j),
          g,
          null
        ];
    }
    let v = te(y, C, j, h);
    for (let w of v)
      return w;
    return [];
  }
  function* te(y, C, j, h) {
    let v = (0, u.flagEnabled)(h, "generalizedModifiers"), [w, g] = _(C);
    if (v && j.modifiers != null && (j.modifiers === "any" || typeof j.modifiers == "object" && (g && $(g) || g in j.modifiers)) || (w = C, g = void 0), g !== void 0 && w === "" && (w = "DEFAULT"), g !== void 0 && typeof j.modifiers == "object") {
      var m, S;
      let I = (S = (m = j.modifiers) === null || m === void 0 ? void 0 : m[g]) !== null && S !== void 0 ? S : null;
      I !== null ? g = I : $(g) && (g = F(g));
    }
    for (let { type: I } of y ?? []) {
      let V = H[I](w, j, {
        tailwindConfig: h
      });
      V !== void 0 && (yield [
        V,
        I,
        g ?? null
      ]);
    }
  }
})(ft);
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
  function t(n) {
    return typeof n == "function" ? n({}) : n;
  }
})(bt);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return j;
    }
  });
  const t = /* @__PURE__ */ $(Ce), n = /* @__PURE__ */ $(rt), s = /* @__PURE__ */ $(ot), l = /* @__PURE__ */ $(st), i = at, r = ut, u = dt, d = /* @__PURE__ */ $(ct), o = pt, p = ft, b = Ae, f = /* @__PURE__ */ $(bt);
  function $(h) {
    return h && h.__esModule ? h : {
      default: h
    };
  }
  function _(h) {
    return typeof h == "function";
  }
  function T(h, ...v) {
    let w = v.pop();
    for (let g of v)
      for (let P in g) {
        let m = w(h[P], g[P]);
        m === void 0 ? (0, d.default)(h[P]) && (0, d.default)(g[P]) ? h[P] = T({}, h[P], g[P], w) : h[P] = g[P] : h[P] = m;
      }
    return h;
  }
  const F = {
    colors: l.default,
    negative(h) {
      return Object.keys(h).filter((v) => h[v] !== "0").reduce((v, w) => {
        let g = (0, t.default)(h[w]);
        return g !== void 0 && (v[`-${w}`] = g), v;
      }, {});
    },
    breakpoints(h) {
      return Object.keys(h).filter((v) => typeof h[v] == "string").reduce((v, w) => ({
        ...v,
        [`screen-${w}`]: h[w]
      }), {});
    }
  };
  function W(h, ...v) {
    return _(h) ? h(...v) : h;
  }
  function q(h) {
    return h.reduce((v, { extend: w }) => T(v, w, (g, P) => g === void 0 ? [
      P
    ] : Array.isArray(g) ? [
      P,
      ...g
    ] : [
      P,
      g
    ]), {});
  }
  function U(h) {
    return {
      ...h.reduce((v, w) => (0, i.defaults)(v, w), {}),
      // In order to resolve n config objects, we combine all of their `extend` properties
      // into arrays instead of objects so they aren't overridden.
      extend: q(h)
    };
  }
  function H(h, v) {
    if (Array.isArray(h) && (0, d.default)(h[0]))
      return h.concat(v);
    if (Array.isArray(v) && (0, d.default)(v[0]) && (0, d.default)(h))
      return [
        h,
        ...v
      ];
    if (Array.isArray(v))
      return v;
  }
  function G({ extend: h, ...v }) {
    return T(v, h, (w, g) => !_(w) && !g.some(_) ? T({}, w, ...g, H) : (P, m) => T({}, ...[
      w,
      ...g
    ].map((S) => W(S, P, m)), H));
  }
  function* J(h) {
    let v = (0, r.toPath)(h);
    if (v.length === 0 || (yield v, Array.isArray(h)))
      return;
    let w = /^(.*?)\s*\/\s*([^/]+)$/, g = h.match(w);
    if (g !== null) {
      let [, P, m] = g, S = (0, r.toPath)(P);
      S.alpha = m, yield S;
    }
  }
  function ne(h) {
    const v = (w, g) => {
      for (const P of J(w)) {
        let m = 0, S = h;
        for (; S != null && m < P.length; )
          S = S[P[m++]], S = _(S) && (P.alpha === void 0 || m <= P.length - 1) ? S(v, F) : S;
        if (S !== void 0) {
          if (P.alpha !== void 0) {
            let I = (0, p.parseColorFormat)(S);
            return (0, b.withAlphaValue)(I, P.alpha, (0, f.default)(I));
          }
          return (0, d.default)(S) ? (0, o.cloneDeep)(S) : S;
        }
      }
      return g;
    };
    return Object.assign(v, {
      theme: v,
      ...F
    }), Object.keys(h).reduce((w, g) => (w[g] = _(h[g]) ? h[g](v, F) : h[g], w), {});
  }
  function te(h) {
    let v = [];
    return h.forEach((w) => {
      v = [
        ...v,
        w
      ];
      var g;
      const P = (g = w?.plugins) !== null && g !== void 0 ? g : [];
      P.length !== 0 && P.forEach((m) => {
        m.__isOptionsFunction && (m = m());
        var S;
        v = [
          ...v,
          ...te([
            (S = m?.config) !== null && S !== void 0 ? S : {}
          ])
        ];
      });
    }), v;
  }
  function y(h) {
    return [
      ...h
    ].reduceRight((w, g) => _(g) ? g({
      corePlugins: w
    }) : (0, s.default)(g, w), n.default);
  }
  function C(h) {
    return [
      ...h
    ].reduceRight((w, g) => [
      ...w,
      ...g
    ], []);
  }
  function j(h) {
    let v = [
      ...te(h),
      {
        prefix: "",
        important: !1,
        separator: ":"
      }
    ];
    var w, g;
    return (0, u.normalizeConfig)((0, i.defaults)({
      theme: ne(G(U(v.map((P) => (w = P?.theme) !== null && w !== void 0 ? w : {})))),
      corePlugins: y(v.map((P) => P.corePlugins)),
      plugins: C(h.map((P) => (g = P?.plugins) !== null && g !== void 0 ? g : []))
    }, ...v));
  }
})(nt);
var yt = {}, $n = {
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
  const t = /* @__PURE__ */ s($n), n = ke;
  function s(i) {
    return i && i.__esModule ? i : {
      default: i
    };
  }
  function l(i) {
    var r;
    const u = ((r = i?.presets) !== null && r !== void 0 ? r : [
      t.default
    ]).slice().reverse().flatMap((p) => l(p instanceof Function ? p() : p)), d = {
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
    }, o = Object.keys(d).filter((p) => (0, n.flagEnabled)(i, p)).map((p) => d[p]);
    return [
      i,
      ...o,
      ...u
    ];
  }
})(yt);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return l;
    }
  });
  const t = /* @__PURE__ */ s(nt), n = /* @__PURE__ */ s(yt);
  function s(i) {
    return i && i.__esModule ? i : {
      default: i
    };
  }
  function l(...i) {
    let [, ...r] = (0, n.default)(i[0]);
    return (0, t.default)([
      ...i,
      ...r
    ]);
  }
})(tt);
let Se = tt;
var kn = (Se.__esModule ? Se : { default: Se }).default;
const wn = /* @__PURE__ */ vn(kn), Sn = {
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
}, On = wn(Sn);
function xn(e) {
  e = e.replace("#", "");
  const t = parseInt(
    e.length === 3 ? e.slice(0, 1).repeat(2) : e.slice(0, 2),
    16
  ), n = parseInt(
    e.length === 3 ? e.slice(1, 2).repeat(2) : e.slice(2, 4),
    16
  ), s = parseInt(
    e.length === 3 ? e.slice(2, 3).repeat(2) : e.slice(4, 6),
    16
  ), l = parseInt(e.length === 3 ? "ff" : e.slice(6, 8), 16);
  return {
    red: t,
    green: n,
    blue: s,
    alpha: l
  };
}
const Kn = O({
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
      const t = z(On, ["theme", "colors"]), n = z(t, e);
      return typeof n == "string" ? n : e;
    },
    fontColorForBackgroundColor(e) {
      const t = xn(e);
      return t.alpha * 255 < 150 || Math.round(
        (t.red * 299 + t.green * 587 + t.blue * 114) / 1e3
      ) > 125 ? "#000" : "#fff";
    }
  }
}), jn = O({
  mixins: [Kn]
});
const Mn = { class: "flex-grow" };
function Tn(e, t, n, s, l, i) {
  return a(), c("div", {
    class: "k-alert",
    style: re([e.colorableBackgroundStyle, e.colorableTextStyleForBackground])
  }, [
    k("div", Mn, [
      E(e.$slots, "default")
    ])
  ], 4);
}
const Pn = /* @__PURE__ */ x(jn, [["render", Tn]]), Cn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pn
}, Symbol.toStringTag, { value: "Module" }));
const Ln = {}, An = { class: "k-app" };
function zn(e, t) {
  const n = K("KSnackbar"), s = K("KConfirm");
  return a(), c("div", An, [
    B(s, null, {
      default: M(() => [
        B(n, null, {
          default: M(() => [
            E(e.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    })
  ]);
}
const Vn = /* @__PURE__ */ x(Ln, [["render", zn]]), Bn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Vn
}, Symbol.toStringTag, { value: "Module" })), Fn = O({
  directives: {
    ClickAway: Te
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
        e ? this.returnObject ? this.$emit("update:modelValue", e) : this.$emit("update:modelValue", z(e, this.itemValue, e)) : this.$emit("update:modelValue", null);
      },
      get() {
        return this.isObject(this.modelValue) ? this.modelValue : this.items.find(
          (e) => z(e, this.itemValue, e) == this.modelValue
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
        this.isObject(this.valueLocal) ? z(this.valueLocal, this.itemText, "") : this.valueLocal
      )));
    },
    valueLocal: {
      handler(e) {
        this.inputText = z(this.valueLocal, this.itemText, e);
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
      this.combobox ? t && (this.valueLocal = t) : (this.valueLocal = t, this.inputText = z(
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
const Dn = { class: "k-autocomplete-input" }, In = ["placeholder", "readonly"], Nn = {
  key: 0,
  class: "k-autocomplete-items"
}, En = ["onClick"];
function Un(e, t, n, s, l, i) {
  const r = Ke("click-away");
  return oe((a(), c("div", {
    class: "k-autocomplete",
    style: re([e.style])
  }, [
    E(e.$slots, "prepend", { item: e.valueLocal }),
    k("div", Dn, [
      oe(k("input", {
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = (u) => e.inputText = u),
        class: Z(["k-input", { invalidSelection: !e.isValidSelection }]),
        type: "search",
        autocomplete: "off",
        placeholder: e.placeholderText,
        readonly: !e.editable,
        onSearch: t[1] || (t[1] = (...u) => e.clearInput && e.clearInput(...u)),
        onKeydown: [
          t[2] || (t[2] = he(se((u) => e.currentFocus = Math.max(-1, e.currentFocus - 1), ["prevent"]), ["arrow-up"])),
          t[3] || (t[3] = he(se((u) => e.currentFocus = Math.min(e.items.length - 1, e.currentFocus + 1), ["prevent"]), ["arrow-down"])),
          t[4] || (t[4] = he(se((u) => e.select(e.currentFocus), ["prevent"]), ["enter"])),
          t[6] || (t[6] = he((...u) => e.setBlur && e.setBlur(...u), ["tab"]))
        ],
        onFocus: t[5] || (t[5] = (...u) => e.setFocus && e.setFocus(...u)),
        onKeyup: t[7] || (t[7] = (...u) => e.keyup && e.keyup(...u))
      }, null, 42, In), [
        [je, e.inputText]
      ]),
      e.focus && e.items.length && e.inputText ? (a(), c("div", Nn, [
        (a(!0), c(N, null, Q(e.itemsFiltered, (u, d) => (a(), c("div", {
          key: d,
          class: Z(["k-autocomplete-item", { "k-autocomplete-active": e.currentFocus == d }]),
          onClick: (o) => e.select(d)
        }, [
          E(e.$slots, "item", { item: u }, () => [
            X(D(u), 1)
          ])
        ], 10, En))), 128))
      ])) : L("", !0)
    ])
  ], 4)), [
    [r, e.setBlur]
  ]);
}
const Rn = /* @__PURE__ */ x(Fn, [["render", Un]]), Wn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Rn
}, Symbol.toStringTag, { value: "Module" }));
function ee(e, t) {
  const n = xt(e, t);
  if (!n)
    throw new Error(`Could not resolve ${e.description}`);
  return n;
}
const ie = Symbol("session"), ce = Symbol("config"), qn = Symbol("snackbar"), Hn = Symbol(
  "dateTimeFormatterKey"
), Gn = Symbol(
  "confirmDialogKey"
), pe = new ye();
function Qn(e) {
  const t = e.results.data.properties, n = e.results.data.versions, s = n[n.length - 1];
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
    version: s?.version_number,
    versionnum: s?.version_number_name,
    modifiedImageCallback: "",
    categories: {},
    url: ""
  };
}
class Yn {
  session;
  queueItems;
  intervalId;
  constructor() {
    this.session = null, this.queueItems = [], this.intervalId = 0;
  }
  resetQueue() {
    this.queueItems = [];
  }
  queue(t, n, s) {
    this.session = t, this.queueItems.push({
      resolveFunc: n,
      dataId: s
    }), clearInterval(this.intervalId), this.queueItems.length < 20 ? this.intervalId = setTimeout(this.processQueue.bind(this), 50) : this.processQueue();
  }
  async processQueue() {
    const t = this.session.rpcClient("/api/v1/rh/rpc/node/"), n = this.queueItems;
    this.resetQueue(), n.forEach((s) => {
      const l = s.dataId;
      t.queue("NodeLookup", { dataId: l });
    });
    try {
      (await t.batch()).forEach((l, i) => {
        const r = n[i].resolveFunc;
        r(l);
      });
    } catch {
      n.forEach((s) => s.resolveFunc(null));
    }
  }
}
class Xn {
  nodes;
  nodeLookupQueue;
  constructor() {
    this.nodes = {}, this.nodeLookupQueue = new Yn();
  }
  // registerUsers(items: Array<RHNodeSerializer>) {
  //   items.forEach((user) => (this.nodes[user.dataid] = user));
  // }
  async lookupLegacy(t, n) {
    if (n)
      try {
        if (await pe.acquire(n), this.nodes.hasOwnProperty(n))
          return this.nodes[n];
        {
          const s = await t.nodes.node({ dataid: n }), l = Qn(s.data);
          return this.nodes[n] = l, l;
        }
      } catch {
        return this.nodes[n] = null, null;
      } finally {
        pe.release(n);
      }
  }
  async lookupRPC(t, n) {
    return n ? (await pe.acquire(n), this.nodes.hasOwnProperty(n) ? (pe.release(n), this.nodes[n]) : new Promise((s, l) => {
      const i = (r) => {
        r instanceof Error ? l(r) : (this.nodes[n] = r, s(r)), pe.release(n);
      };
      this.nodeLookupQueue.queue(t, i, n);
    })) : null;
  }
  async lookup(t, n, s = !1) {
    return s ? this.lookupLegacy(t, n) : this.lookupRPC(t, n);
  }
}
const Jn = new Xn(), Zn = O({
  setup() {
    return {
      session: ee(ie)
    };
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
    },
    modernMenu: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      nodeRecLocal: null,
      lookupError: !1
    };
  },
  computed: {
    nodeRecResolved() {
      return this.nodeRec ?? this.nodeRecLocal;
    },
    isError() {
      return this.nodeRecLocal instanceof Error;
    }
  },
  watch: {
    dataid: {
      async handler(e) {
        e && (this.nodeRecLocal = await Jn.lookup(this.session, e, this.legacy).catch((t) => (this.lookupError = !0, null)));
      },
      immediate: !0
    }
  }
}), er = { class: "flex items-center gap-2" }, tr = { class: "flex items-center gap-2" }, nr = ["src"], rr = ["href"], or = ["innerHTML"];
function sr(e, t, n, s, l, i) {
  const r = K("KFunctionMenuModern"), u = K("KFunctionMenu");
  return a(), c("div", er, [
    e.lookupError ? (a(), c(N, { key: 0 }, [], 64)) : e.nodeRecResolved ? (a(), c(N, { key: 1 }, [
      k("div", tr, [
        e.image ? (a(), c("img", {
          key: 0,
          src: e.nodeRecResolved.gif,
          width: "16",
          height: "16"
        }, null, 8, nr)) : L("", !0),
        k("a", {
          href: e.nodeRecResolved.url
        }, D(e.nodeRecResolved.name), 9, rr)
      ]),
      e.clickable ? (a(), c(N, { key: 0 }, [
        e.modernMenu ? (a(), A(r, {
          key: 0,
          dataid: e.nodeRecResolved.dataid
        }, null, 8, ["dataid"])) : (a(), A(u, {
          key: 1,
          dataid: e.nodeRecResolved.dataid
        }, null, 8, ["dataid"]))
      ], 64)) : L("", !0),
      k("div", {
        class: "flex items-center",
        innerHTML: e.nodeRecResolved.modifiedImageCallback
      }, null, 8, or)
    ], 64)) : L("", !0)
  ]);
}
const ir = /* @__PURE__ */ x(Zn, [["render", sr]]), lr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ir
}, Symbol.toStringTag, { value: "Module" })), ar = O({
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
const ur = ["disabled"];
function dr(e, t, n, s, l, i) {
  return a(), c("button", ue({
    class: ["k-button", e.classObj],
    disabled: e.disabled,
    type: "button"
  }, e.$attrs, {
    onClick: t[0] || (t[0] = (r) => e.$emit("click"))
  }), [
    E(e.$slots, "default")
  ], 16, ur);
}
const cr = /* @__PURE__ */ x(ar, [["render", dr]]), pr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cr
}, Symbol.toStringTag, { value: "Module" })), fr = O({
  provide() {
    return {
      // @ts-ignore - not sure why this complains
      [Gn]: this
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
      message: s
    }) {
      return this.noLabel = e, this.yesLabel = t, this.title = n, this.message = s, new Promise((l) => {
        this.resolve = l, this.dialog = !0;
      });
    }
  }
});
function mr(e, t, n, s, l, i) {
  const r = K("KCardTitle"), u = K("KCardText"), d = K("KSpacer"), o = K("KButton"), p = K("KCardActions"), b = K("KCard"), f = K("KDialog");
  return a(), c(N, null, [
    E(e.$slots, "default"),
    B(f, {
      modelValue: e.dialog,
      "onUpdate:modelValue": t[2] || (t[2] = ($) => e.dialog = $),
      "max-width": "30vw",
      "min-width": "20vw",
      "z-index": 50
    }, {
      default: M(() => [
        B(b, null, {
          default: M(() => [
            e.title ? (a(), A(r, { key: 0 }, {
              default: M(() => [
                X(D(e.title), 1)
              ]),
              _: 1
            })) : L("", !0),
            e.message ? (a(), A(u, { key: 1 }, {
              default: M(() => [
                X(D(e.message), 1)
              ]),
              _: 1
            })) : L("", !0),
            B(p, null, {
              default: M(() => [
                B(d),
                e.noLabel ? (a(), A(o, {
                  key: 0,
                  small: "",
                  onClick: t[0] || (t[0] = ($) => e.dismiss(!1))
                }, {
                  default: M(() => [
                    X(D(e.noLabel), 1)
                  ]),
                  _: 1
                })) : L("", !0),
                e.yesLabel ? (a(), A(o, {
                  key: 1,
                  small: "",
                  onClick: t[1] || (t[1] = ($) => e.dismiss(!0))
                }, {
                  default: M(() => [
                    X(D(e.yesLabel), 1)
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
const hr = /* @__PURE__ */ x(fr, [["render", mr]]), gr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: hr
}, Symbol.toStringTag, { value: "Module" })), _r = O({
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
      return t ? this.time ? Ue(t, "yyyy-MM-dd'T'HH:mm:ss") : Ue(t, "yyyy-MM-dd") : null;
    }
  }
});
const br = { class: "k-date-time-picker" }, yr = ["type", "readonly"];
function vr(e, t, n, s, l, i) {
  const r = K("KButton");
  return a(), c("div", br, [
    oe(k("input", {
      "onUpdate:modelValue": t[0] || (t[0] = (u) => e.localModelValue = u),
      class: "k-input",
      type: e.type,
      readonly: !e.editable
    }, null, 8, yr), [
      [Kt, e.localModelValue]
    ]),
    e.editable ? (a(), c(N, { key: 0 }, [
      B(r, {
        small: "",
        onClick: e.setToNow
      }, {
        default: M(() => [
          X(" Now ")
        ]),
        _: 1
      }, 8, ["onClick"]),
      B(r, {
        small: "",
        onClick: t[1] || (t[1] = (u) => e.$emit("update:modelValue", null))
      }, {
        default: M(() => [
          X(" Clear ")
        ]),
        _: 1
      })
    ], 64)) : L("", !0)
  ]);
}
const $r = /* @__PURE__ */ x(_r, [["render", vr]]), kr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $r
}, Symbol.toStringTag, { value: "Module" })), wr = O({
  directives: {
    ClickAway: Te
  },
  mixins: [ve],
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
      this.$emit("update:modelValue", e), e ? (await this.$nextTick(), Tt(this.$refs.content)) : Pt(this.$refs.content);
    }
  },
  mounted() {
    this.mounted = !0, Re("esc", () => {
      this.persistent || (this.dialog = !1);
    });
  },
  beforeUnmount() {
    Re.unbind("esc");
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
function Sr(e, t, n, s, l, i) {
  const r = Ke("click-away");
  return a(), c(N, null, [
    E(e.$slots, "activator", { on: e.on }),
    e.mounted ? (a(), A(Je, {
      key: 0,
      to: ".k-app"
    }, [
      B(be, { name: "fade" }, {
        default: M(() => [
          e.dialog ? (a(), c("div", {
            key: 0,
            class: "k-dialog",
            style: re([e.style])
          }, [
            oe((a(), c("div", {
              ref: "content",
              class: Z(["k-dialog-content", e.classObj]),
              style: re([e.measurableStyles])
            }, [
              E(e.$slots, "default", { on: e.on })
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
const Or = /* @__PURE__ */ x(wr, [["render", Sr]]), xr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Or
}, Symbol.toStringTag, { value: "Module" }));
const Kr = {}, jr = { class: "k-divider" };
function Mr(e, t) {
  return a(), c("div", jr);
}
const Be = /* @__PURE__ */ x(Kr, [["render", Mr]]), Tr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Be
}, Symbol.toStringTag, { value: "Module" })), Pr = O({
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
function Cr(e, t, n, s, l, i) {
  return a(), c("div", {
    class: "k-dot",
    style: re([e.style])
  }, [
    E(e.$slots, "default")
  ], 4);
}
const Lr = /* @__PURE__ */ x(Pr, [["render", Cr]]), Ar = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Lr
}, Symbol.toStringTag, { value: "Module" })), le = O({
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
}), zr = {
  mixins: [le]
};
const Vr = {
  key: 0,
  class: "k-form-field-label"
};
function Br(e, t, n, s, l, i) {
  return a(), c("div", null, [
    e.label ? (a(), c("div", Vr, D(e.label), 1)) : L("", !0),
    E(e.$slots, "default"),
    (a(!0), c(N, null, Q(e.successMessages, (r, u) => (a(), c("div", {
      key: u,
      class: "k-formfield--success"
    }, D(r), 1))), 128)),
    (a(!0), c(N, null, Q(e.errorMessages, (r, u) => (a(), c("div", {
      key: u,
      class: "k-formfield--error"
    }, D(r), 1))), 128))
  ]);
}
const Fr = /* @__PURE__ */ x(zr, [["render", Br]]), Dr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fr,
  mixin: le
}, Symbol.toStringTag, { value: "Module" })), Ir = O({
  setup() {
    return { config: ee(ce) };
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
}), Nr = { key: 0 }, Er = ["id"], Ur = ["src"], Rr = ["id", "src"];
function Wr(e, t, n, s, l, i) {
  return e.dataid ? (a(), c("span", Nr, [
    k("a", {
      id: e.aid,
      href: "#",
      class: "functionMenuHotspot",
      onClick: t[2] || (t[2] = se((...r) => e.onclick && e.onclick(...r), ["prevent"]))
    }, [
      e.isModernFunctionMenu ? (a(), c("img", {
        key: 0,
        src: `${e.config.img}spacer.gif`,
        alt: "Functions"
      }, null, 8, Ur)) : (a(), c("img", {
        key: 1,
        id: e.xid,
        src: e.image,
        border: "0",
        alt: "Functions",
        title: "Functions",
        onMouseover: t[0] || (t[0] = (...r) => e.onmouseover && e.onmouseover(...r)),
        onMouseout: t[1] || (t[1] = (...r) => e.onmouseout && e.onmouseout(...r))
      }, null, 40, Rr))
    ], 8, Er),
    t[3] || (Ne(-1), t[3] = k("div", {
      id: e.zid,
      ref: "functionMenuDiv",
      class: "functionMenuDiv"
    }, null, 8, ["id"]), Ne(1), t[3])
  ])) : L("", !0);
}
const qr = /* @__PURE__ */ x(Ir, [["render", Wr]]), Hr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qr
}, Symbol.toStringTag, { value: "Module" })), Gr = O({});
const Qr = { class: "k-list-item-title" };
function Yr(e, t, n, s, l, i) {
  return a(), c("div", Qr, [
    E(e.$slots, "default")
  ]);
}
const vt = /* @__PURE__ */ x(Gr, [["render", Yr]]), Xr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vt
}, Symbol.toStringTag, { value: "Module" })), Jr = O({});
const Zr = { class: "k-list-item-subtitle" };
function eo(e, t, n, s, l, i) {
  return a(), c("div", Zr, [
    E(e.$slots, "default")
  ]);
}
const $t = /* @__PURE__ */ x(Jr, [["render", eo]]), to = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $t
}, Symbol.toStringTag, { value: "Module" })), no = O({
  mixins: [et],
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
    const { tag: e, data: t } = this.generateRouteLink(), n = this.title ? ae(vt, {}, { default: () => [this.title] }) : null, s = this.subtitle ? ae($t, {}, { default: () => [this.subtitle] }) : null, l = n || s ? [n, s].filter((o) => !!o) : this.$slots.default ? this.$slots.default() : null, i = ae(
      "div",
      { class: "k-list-item-body" },
      {
        default: () => l
      }
    ), r = this.$slots.prepend ? ae(
      "div",
      { class: "k-list-item-prepend" },
      {
        default: () => this.$slots.prepend()
      }
    ) : null, u = this.$slots.append ? ae(
      "div",
      { class: "k-list-item-append" },
      {
        default: () => this.$slots.append()
      }
    ) : null;
    return ae(
      e,
      {
        ...t,
        class: this.classObj
      },
      [r, i, u].filter((o) => !!o)
    );
  }
});
const Fe = /* @__PURE__ */ x(no, [["__scopeId", "data-v-f06ea25f"]]), ro = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fe
}, Symbol.toStringTag, { value: "Module" })), qe = new ye(), oo = O({
  components: { KMenuDownIcon: Pe, KListItem: Fe, KDivider: Be },
  setup() {
    return { session: na() };
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
        if (await qe.acquire(this.dataid), this.actions.length === 0) {
          this.loading = !0;
          const { data: e } = await this.session.get(
            `/api/v1/nodes/${this.dataid}/actions`
          );
          this.actions = e.actions;
        }
      } finally {
        this.loading = !1, qe.release(this.dataid);
      }
    }
  }
});
function so(e, t, n, s, l, i) {
  const r = K("KMenuDownIcon"), u = K("KDivider"), d = K("KRightCaret"), o = K("KListItem"), p = K("KList"), b = K("KMenu");
  return a(), A(b, {
    modelValue: e.visible,
    "onUpdate:modelValue": t[0] || (t[0] = (f) => e.visible = f),
    loading: e.loading
  }, {
    activator: M(({ on: f }) => [
      B(r, ue({ size: e.size }, _e(f), { class: "cursor-pointer" }), null, 16, ["size"])
    ]),
    default: M(() => [
      B(p, null, {
        default: M(() => [
          (a(!0), c(N, null, Q(e.actions, (f, $) => (a(), c(N, null, [
            f.signature === "-" ? (a(), A(u, {
              key: `${$}`
            })) : f.children.length ? (a(), A(b, {
              submenu: "",
              key: `a${$}`
            }, {
              activator: M(({ on: _ }) => [
                B(o, ue({
                  title: f.name
                }, _e(_)), {
                  append: M(() => [
                    B(d)
                  ]),
                  _: 2
                }, 1040, ["title"])
              ]),
              default: M(() => [
                B(p, null, {
                  default: M(() => [
                    (a(!0), c(N, null, Q(f.children, (_, T) => (a(), A(o, {
                      key: `b${T}`,
                      title: _.name,
                      href: _.url
                    }, null, 8, ["title", "href"]))), 128))
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1024)) : (a(), A(o, {
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
const io = /* @__PURE__ */ x(oo, [["render", so]]), lo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: io
}, Symbol.toStringTag, { value: "Module" })), ao = O({
  components: { KMenuDownIcon: Pe, KListItem: Fe, KDivider: Be },
  setup() {
    return { configuration: ee(ce) };
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
function uo(e, t, n, s, l, i) {
  const r = K("KMenuDownIcon"), u = K("KDivider"), d = K("KRightCaret"), o = K("KListItem"), p = K("KList"), b = K("KMenu");
  return a(), A(b, {
    modelValue: e.visible,
    "onUpdate:modelValue": t[0] || (t[0] = (f) => e.visible = f),
    loading: e.loading
  }, {
    activator: M(({ on: f }) => [
      B(r, ue({ size: e.size }, _e(f), { class: "cursor-pointer" }), null, 16, ["size"])
    ]),
    default: M(() => [
      B(p, null, {
        default: M(() => [
          (a(!0), c(N, null, Q(e.actions, (f, $) => (a(), c(N, null, [
            f.signature === "-" ? (a(), A(u, {
              key: `${$}`
            })) : f.children.length ? (a(), A(b, {
              submenu: "",
              key: `a${$}`
            }, {
              activator: M(({ on: _ }) => [
                B(o, ue({
                  title: f.name
                }, _e(_)), {
                  append: M(() => [
                    B(d)
                  ]),
                  _: 2
                }, 1040, ["title"])
              ]),
              default: M(() => [
                B(p, null, {
                  default: M(() => [
                    (a(!0), c(N, null, Q(f.children, (_, T) => (a(), A(o, {
                      key: `b${T}`,
                      title: _.name,
                      href: _.url
                    }, null, 8, ["title", "href"]))), 128))
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1024)) : (a(), A(o, {
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
const co = /* @__PURE__ */ x(ao, [["render", uo]]), po = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: co
}, Symbol.toStringTag, { value: "Module" })), fo = O({});
const mo = { class: "k-progress-line" };
function ho(e, t, n, s, l, i) {
  return a(), c("div", mo);
}
const go = /* @__PURE__ */ x(fo, [["render", ho]]), _o = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: go
}, Symbol.toStringTag, { value: "Module" })), bo = O({});
const yo = { class: "k-list" };
function vo(e, t, n, s, l, i) {
  return a(), c("div", yo, [
    E(e.$slots, "default")
  ]);
}
const $o = /* @__PURE__ */ x(bo, [["render", vo]]), ko = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $o
}, Symbol.toStringTag, { value: "Module" })), wo = O({
  directives: {
    ClickAway: Te
  },
  setup() {
    const e = Ee(null);
    return { menuItems: Ee(null), menuActivator: e };
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
        const e = window.innerHeight, t = this.menuItemsBox.height, n = 8, s = this.menuActivatorBox.top - n, l = Math.max(
          0,
          n + this.menuActivatorBox.top + t - e
        ), i = Math.min(l, s);
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
});
const So = {
  key: 0,
  class: "flex items-center justify-center p-2"
};
function Oo(e, t, n, s, l, i) {
  const r = K("KSpinner"), u = Ke("click-away");
  return a(), c("div", {
    class: "k-menu",
    onMouseenter: t[3] || (t[3] = (...d) => e.mouseEnter && e.mouseEnter(...d))
  }, [
    oe((a(), c("div", {
      ref: "menuActivator",
      onMouseleave: t[0] || (t[0] = (...d) => e.mouseLeave && e.mouseLeave(...d))
    }, [
      E(e.$slots, "activator", {
        on: { click: e.toggleMenu }
      })
    ], 32)), [
      [u, e.clickAway]
    ]),
    (a(), A(Je, { to: ".k-app" }, [
      k("div", {
        onMouseenter: t[1] || (t[1] = (...d) => e.mouseEnter && e.mouseEnter(...d)),
        onMouseleave: t[2] || (t[2] = (...d) => e.mouseLeave && e.mouseLeave(...d)),
        ref: "menuItems",
        class: Z(["k-menu-items", e.dropDownMenuItemsClassObj]),
        style: re(e.styleDropDownItems)
      }, [
        e.loading ? (a(), c("div", So, [
          B(r)
        ])) : E(e.$slots, "default", { key: 1 })
      ], 38)
    ]))
  ], 32);
}
const xo = /* @__PURE__ */ x(wo, [["render", Oo]]), Ko = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xo
}, Symbol.toStringTag, { value: "Module" })), jo = {}, Mo = {
  class: "w-5 h-5",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, To = /* @__PURE__ */ k("path", {
  "fill-rule": "evenodd",
  d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
  "clip-rule": "evenodd"
}, null, -1), Po = [
  To
];
function Co(e, t) {
  return a(), c("svg", Mo, Po);
}
const Lo = /* @__PURE__ */ x(jo, [["render", Co]]), Ao = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Lo
}, Symbol.toStringTag, { value: "Module" })), zo = O({
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
const Vo = { class: "k-multi-widget" }, Bo = { class: "k-multi-buttons" }, Fo = /* @__PURE__ */ k("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ k("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z" })
], -1), Do = /* @__PURE__ */ k("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ k("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" })
], -1);
function Io(e, t, n, s, l, i) {
  const r = K("KButton"), u = K("KCard");
  return a(), A(u, { class: "k-multi" }, {
    default: M(() => [
      B(Me, {
        name: "fade",
        tag: "div"
      }, {
        default: M(() => [
          (a(!0), c(N, null, Q(e.valueLocal, (d, o) => (a(), c("div", {
            key: `k-multi-${d}`,
            class: "k-multi-item"
          }, [
            k("div", Vo, [
              E(e.$slots, "default", {
                index: o,
                value: d,
                update: (p) => e.update(o, p)
              })
            ]),
            k("div", Bo, [
              e.canRemove ? (a(), A(r, {
                key: 0,
                text: "",
                onClick: (p) => e.remove(o)
              }, {
                default: M(() => [
                  Fo
                ]),
                _: 2
              }, 1032, ["onClick"])) : L("", !0),
              e.canAdd ? (a(), A(r, {
                key: 1,
                text: "",
                onClick: (p) => e.add(o)
              }, {
                default: M(() => [
                  Do
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
const No = /* @__PURE__ */ x(zo, [["render", Io]]), Eo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: No
}, Symbol.toStringTag, { value: "Module" })), Uo = O({
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
        (t, n, s) => s.indexOf(t) === n
      ));
    },
    remove(e) {
      const t = [...this.valueLocal];
      t.splice(e, 1), this.valueLocal = t;
    }
  }
});
const Ro = { class: "k-multi-widget" }, Wo = /* @__PURE__ */ k("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ k("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z" })
], -1);
function qo(e, t, n, s, l, i) {
  const r = K("KButton"), u = K("KCard");
  return a(), A(u, { class: "k-multi" }, {
    default: M(() => [
      B(Me, {
        name: "fade",
        tag: "div"
      }, {
        default: M(() => [
          (a(!0), c(N, null, Q(e.valueLocal, (d, o) => (a(), c("div", {
            key: `k-multi-${d}`,
            class: "k-multi-item"
          }, [
            k("div", Ro, [
              E(e.$slots, "readonly", {
                index: o,
                value: d
              }, () => [
                X(D(d), 1)
              ])
            ]),
            e.readonly ? L("", !0) : (a(), A(r, {
              key: 0,
              text: "",
              onClick: (p) => e.remove(o)
            }, {
              default: M(() => [
                Wo
              ]),
              _: 2
            }, 1032, ["onClick"]))
          ]))), 128))
        ]),
        _: 3
      }),
      e.canAdd ? E(e.$slots, "add", {
        key: 0,
        add: e.add
      }) : L("", !0)
    ]),
    _: 3
  });
}
const Ho = /* @__PURE__ */ x(Uo, [["render", qo]]), Go = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ho
}, Symbol.toStringTag, { value: "Module" })), Qo = O({
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
    },
    legacy: {
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
function Yo(e, t, n, s, l, i) {
  const r = K("KUserLink"), u = K("KUserPicker"), d = K("KMulti2");
  return a(), A(d, {
    modelValue: e.userIdsLocal,
    "onUpdate:modelValue": t[0] || (t[0] = (o) => e.userIdsLocal = o),
    readonly: e.readonly
  }, {
    readonly: M(({ value: o }) => [
      B(r, {
        user: o,
        gif: "",
        legacy: e.legacy
      }, null, 8, ["user", "legacy"])
    ]),
    add: M(({ add: o }) => [
      B(u, {
        "onUpdate:modelValue": (p) => o(p),
        users: e.users,
        groups: e.groups,
        legacy: e.legacy
      }, null, 8, ["onUpdate:modelValue", "users", "groups", "legacy"])
    ]),
    _: 1
  }, 8, ["modelValue", "readonly"]);
}
const Xo = /* @__PURE__ */ x(Qo, [["render", Yo]]), Jo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xo
}, Symbol.toStringTag, { value: "Module" })), He = new ye();
class Zo {
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
      if (await He.acquire(n), !this.nodes[n]) {
        const s = await t.nodes.ancestors(n);
        this.nodes[n] = z(s, "data.ancestors", []);
      }
      return this.nodes[n];
    } finally {
      He.release(n);
    }
  }
}
const kt = new Zo(), es = O({
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
        e && (this.breadcrumb = await kt.lookup(this.session, e));
      },
      immediate: !0
    }
  }
});
const ts = { class: "k-node-breadcrumb" };
function ns(e, t, n, s, l, i) {
  return a(), c("div", ts, [
    (a(!0), c(N, null, Q(e.breadcrumb, (r, u) => (a(), c(N, {
      key: r.dataid
    }, [
      X(D(r.name) + " ", 1),
      u < e.breadcrumb.length - 1 ? (a(), c(N, { key: 0 }, [
        X(" ▶ ")
      ], 64)) : L("", !0)
    ], 64))), 128))
  ]);
}
const wt = /* @__PURE__ */ x(es, [["render", ns]]), rs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: wt
}, Symbol.toStringTag, { value: "Module" })), os = O({
  mixins: [le],
  components: { KNodeAncestor: wt },
  setup() {
    return {
      session: ee(ie),
      config: ee(ce)
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
      return Ct(this.config.baseUrl, {
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
        this.dataid ? this.breadcrumb = await kt.lookup(
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
      return this.objid ?? parseInt(Lt.get("TargetBrowseObjID") ?? "0");
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
});
const ss = { class: "k-node-picker-field" }, is = ["value"];
function ls(e, t, n, s, l, i) {
  const r = K("KButton"), u = K("KNodeAncestor"), d = K("KFormFieldWrapper");
  return a(), A(d, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: M(() => [
      k("div", ss, [
        k("input", {
          ref: "input",
          type: "text",
          class: "k-input",
          value: e.name,
          onFocus: t[0] || (t[0] = (...o) => e.openWindow && e.openWindow(...o))
        }, null, 40, is),
        B(r, {
          small: "",
          onClick: e.openWindow
        }, {
          default: M(() => [
            X(D(e.browseButtonLabel), 1)
          ]),
          _: 1
        }, 8, ["onClick"]),
        e.clearable ? (a(), A(r, {
          key: 0,
          small: "",
          onClick: e.clear
        }, {
          default: M(() => [
            X(D(e.clearButtonLabel), 1)
          ]),
          _: 1
        }, 8, ["onClick"])) : L("", !0),
        e.dataid ? (a(), A(u, {
          key: 1,
          dataid: e.dataid
        }, null, 8, ["dataid"])) : L("", !0)
      ])
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const as = /* @__PURE__ */ x(os, [["render", ls]]), us = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: as
}, Symbol.toStringTag, { value: "Module" })), ds = O({
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
const cs = { class: "k-one-moment" }, ps = { class: "k-one-moment-label" };
function fs(e, t, n, s, l, i) {
  const r = K("KSpinner"), u = K("KDialog");
  return a(), A(u, { "model-value": e.loading }, {
    default: M(() => [
      k("div", cs, [
        B(r, {
          height: 36,
          width: 36
        }),
        k("div", ps, D(e.label), 1)
      ])
    ]),
    _: 1
  }, 8, ["model-value"]);
}
const ms = /* @__PURE__ */ x(ds, [["render", fs]]), hs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ms
}, Symbol.toStringTag, { value: "Module" })), gs = O({
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
function _s(e, t, n, s, l, i) {
  return a(), c("div", null, [
    E(e.$slots, "default", { active: e.active })
  ]);
}
const bs = /* @__PURE__ */ x(gs, [["render", _s]]), ys = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bs
}, Symbol.toStringTag, { value: "Module" })), vs = O({
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
const $s = { class: "text-xl" }, ks = { key: 0 }, ws = { class: "rhmuted" };
function Ss(e, t, n, s, l, i) {
  return a(), c("div", $s, [
    X(D(e.title), 1),
    e.subtitle ? (a(), c("span", ks, [
      X(": "),
      k("span", ws, D(e.subtitle), 1)
    ])) : L("", !0)
  ]);
}
const Os = /* @__PURE__ */ x(vs, [["render", Ss], ["__scopeId", "data-v-c72c9204"]]), xs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Os
}, Symbol.toStringTag, { value: "Module" })), Ks = O({
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
      return z(this.pagination, "pageRange", []);
    },
    pageSizes() {
      return z(this.pagination, "pageSizes", []);
    },
    pageNumber() {
      return z(this.pagination, "pageNumber", 0);
    },
    pageSize: {
      get() {
        return z(this.pagination, "pageSize", 0);
      },
      set(e) {
        this.$emit("update:pageSize", e);
      }
    },
    hasPrevious() {
      return z(this.pagination, "hasPrevious", !1);
    },
    hasNext() {
      return z(this.pagination, "hasNext", !1);
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
const js = { class: "k-pagination" }, Ms = {
  key: 1,
  class: "k-pagination-buttons"
}, Ts = {
  key: 0,
  class: "k-pagination-button"
}, Ps = /* @__PURE__ */ k("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ k("path", { d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" })
], -1), Cs = [
  Ps
], Ls = { key: 0 }, As = ["onClick"], zs = {
  key: 1,
  class: "k-pagination-button"
}, Vs = /* @__PURE__ */ k("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ k("path", { d: "M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" })
], -1), Bs = [
  Vs
], Fs = { key: 2 };
function Ds(e, t, n, s, l, i) {
  const r = K("KSelect");
  return a(), c("div", js, [
    e.potentiallyMultiplePages ? (a(), A(r, {
      key: 0,
      modelValue: e.pageSize,
      "onUpdate:modelValue": t[0] || (t[0] = (u) => e.pageSize = u),
      items: e.pageSizes,
      label: "Page Size"
    }, null, 8, ["modelValue", "items"])) : L("", !0),
    e.hasPrevious || e.hasNext ? (a(), c("div", Ms, [
      e.hasPrevious ? (a(), c("a", Ts, Cs)) : L("", !0),
      (a(!0), c(N, null, Q(e.pageRange, (u) => (a(), c(N, { key: u }, [
        u === "|" ? (a(), c("div", Ls, "...")) : (a(), c("a", {
          key: 1,
          class: Z(["k-pagination-button k-pagination-button-border", e.classObj(u)]),
          onClick: (d) => e.$emit("update:modelValue", u)
        }, D(u), 11, As))
      ], 64))), 128)),
      e.hasNext ? (a(), c("a", zs, Bs)) : L("", !0)
    ])) : L("", !0),
    e.potentiallyMultiplePages ? (a(), c("div", Fs, " Displaying " + D(e.pagination.startIndex) + "-" + D(e.pagination.endIndex) + " of " + D(e.pagination.count) + " items. ", 1)) : L("", !0)
  ]);
}
const Is = /* @__PURE__ */ x(Ks, [["render", Ds]]), Ns = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Is
}, Symbol.toStringTag, { value: "Module" })), Es = O({
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
      const e = [], s = Math.max(0, this.pageNumber0 - 5), l = Math.min(this.lastPageNumber0, s + 10), i = Math.max(0, l - 10);
      for (let r = i; r <= l; r++)
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
const Us = { class: "k-pagination2" }, Rs = { class: "k-pagination2-buttons" }, Ws = /* @__PURE__ */ k("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ k("path", { d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" })
], -1), qs = [
  Ws
], Hs = ["onClick"], Gs = /* @__PURE__ */ k("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ k("path", { d: "M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" })
], -1), Qs = [
  Gs
];
function Ys(e, t, n, s, l, i) {
  const r = K("KSelect");
  return a(), c("div", Us, [
    k("div", null, [
      B(r, {
        modelValue: e.pageSize,
        "onUpdate:modelValue": t[0] || (t[0] = (u) => e.pageSize = u),
        items: e.pageSizes,
        label: "Page Size"
      }, null, 8, ["modelValue", "items"])
    ]),
    e.pageCount > 1 ? (a(), c(N, { key: 0 }, [
      k("div", Rs, [
        e.hasPrevious ? (a(), c("a", {
          key: 0,
          class: "k-pagination2-arrow-button",
          onClick: t[1] || (t[1] = (u) => e.clickedPageNumber(e.pageNumber0 - 1))
        }, qs)) : L("", !0),
        (a(!0), c(N, null, Q(e.pageRange0, (u) => (a(), c("div", {
          key: u,
          class: Z(["k-pagination2-button", e.classObj(u)]),
          onClick: (d) => e.clickedPageNumber(u)
        }, D(u + 1), 11, Hs))), 128)),
        e.hasNext ? (a(), c("a", {
          key: 1,
          class: "k-pagination2-arrow-button",
          onClick: t[2] || (t[2] = (u) => e.clickedPageNumber(e.pageNumber0 + 1))
        }, Qs)) : L("", !0)
      ]),
      k("div", null, D(e.pageNumber) + " of " + D(e.pageCount) + " pages", 1)
    ], 64)) : L("", !0)
  ]);
}
const Xs = /* @__PURE__ */ x(Es, [["render", Ys]]), Js = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xs
}, Symbol.toStringTag, { value: "Module" })), De = O({
  mixins: [ve],
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
}), Ge = () => {
  Ze((e) => ({
    fe06e366: e.color
  }));
}, Qe = De.setup;
De.setup = Qe ? (e, t) => (Ge(), Qe(e, t)) : Ge;
const Zs = /* @__PURE__ */ k("circle", {
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), ei = /* @__PURE__ */ k("path", {
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), ti = [
  Zs,
  ei
];
function ni(e, t, n, s, l, i) {
  return a(), c("svg", {
    style: re(e.measurableStyles),
    class: "k-spinner",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, ti, 4);
}
const St = /* @__PURE__ */ x(De, [["render", ni]]), ri = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: St
}, Symbol.toStringTag, { value: "Module" })), oi = O({
  components: { KSpinner: St },
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
const si = {
  key: 0,
  class: "centerOverlay"
};
function ii(e, t, n, s, l, i) {
  const r = K("KSpinner");
  return e.loading ? (a(), c("div", si, [
    B(r, {
      "max-width": e.size,
      "max-height": e.size
    }, null, 8, ["max-width", "max-height"])
  ])) : L("", !0);
}
const li = /* @__PURE__ */ x(oi, [["render", ii]]), ai = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: li
}, Symbol.toStringTag, { value: "Module" })), ui = O({
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
      return this.isObject(e) ? z(e, this.itemText) : e;
    },
    getItemValue(e) {
      return this.isObject(e) ? z(e, this.itemValue) : e;
    },
    getItemDisabled(e) {
      return this.isObject(e) ? z(e, "disabled", !1) : !1;
    }
  }
});
const di = ["id", "value", "disabled"], ci = ["for"];
function pi(e, t, n, s, l, i) {
  const r = K("KSpinner"), u = K("KFormFieldWrapper");
  return a(), c("div", null, [
    B(u, {
      label: e.label,
      "success-messages": e.successMessages,
      "error-messages": e.errorMessages
    }, {
      default: M(() => [
        B(be, {
          name: "fade",
          mode: "out-in"
        }, {
          default: M(() => [
            e.loading ? (a(), A(r, { key: 0 })) : (a(), c("div", {
              key: 1,
              class: Z(["k-radiogroup", e.classObj])
            }, [
              (a(!0), c(N, null, Q(e.items, (d) => (a(), c("div", {
                key: e.getItemValue(d),
                class: "k-radiogroup-item"
              }, [
                oe(k("input", {
                  id: e.getItemValue(d),
                  "onUpdate:modelValue": t[0] || (t[0] = (o) => e.localValue = o),
                  type: "radio",
                  value: e.getItemValue(d),
                  disabled: e.getItemDisabled(d)
                }, null, 8, di), [
                  [jt, e.localValue]
                ]),
                k("label", {
                  for: e.getItemValue(d)
                }, D(e.getItemText(d)), 9, ci)
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
const fi = /* @__PURE__ */ x(ui, [["render", pi]]), mi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fi
}, Symbol.toStringTag, { value: "Module" })), hi = O({
  inject: ["ksnackbar"],
  methods: {
    click() {
    }
  }
});
function gi(e, t, n, s, l, i) {
  return a(), c("div", null, [
    k("button", {
      onClick: t[0] || (t[0] = (...r) => e.click && e.click(...r))
    }, "click")
  ]);
}
const _i = /* @__PURE__ */ x(hi, [["render", gi]]), bi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _i
}, Symbol.toStringTag, { value: "Module" })), yi = O({
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
      return typeof e == "string" && this.items.length > 0 ? this.items.every((t) => !!z(t, e)) : !1;
    },
    itemsGrouped() {
      if (this.hasGroups) {
        const e = this.items.reduce(
          (t, n) => {
            const s = z(n, this.itemGroup);
            return t[s] || (t[s] = []), t[s].push(n), t;
          },
          {}
        );
        return Object.entries(e).sort((t, n) => {
          const s = t[0], l = n[0], i = this.sortedGroupNames.indexOf(s), r = this.sortedGroupNames.indexOf(l);
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
      return this.isObject(e) ? z(e, this.itemText) : e;
    },
    getItemValue(e) {
      return this.isObject(e) ? z(e, this.itemValue) : e;
    },
    getItemDisabled(e) {
      return this.isObject(e) ? z(e, this.itemDisabled, !1) : !1;
    },
    arrify(e) {
      return Array.isArray(e) ? e : [e];
    }
  }
});
const vi = { class: "k-select" }, $i = ["disabled"], ki = ["label"], wi = ["value", "disabled"], Si = ["value", "disabled"];
function Oi(e, t, n, s, l, i) {
  const r = K("KButton"), u = K("KSpinner"), d = K("KFormFieldWrapper");
  return a(), A(d, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: M(() => [
      k("div", vi, [
        oe(k("select", {
          "onUpdate:modelValue": t[0] || (t[0] = (o) => e.valueLocal = o),
          class: Z(e.classObj),
          disabled: e.disabledResolved
        }, [
          e.hasGroups ? (a(!0), c(N, { key: 0 }, Q(e.itemsGrouped, (o) => (a(), c("optgroup", {
            key: o[0],
            label: o[0]
          }, [
            (a(!0), c(N, null, Q(o[1], (p) => (a(), c("option", {
              key: e.getItemValue(p),
              value: e.getItemValue(p),
              disabled: e.getItemDisabled(p)
            }, D(e.getItemText(p)), 9, wi))), 128))
          ], 8, ki))), 128)) : (a(!0), c(N, { key: 1 }, Q(e.items, (o) => (a(), c("option", {
            key: e.getItemValue(o),
            value: e.getItemValue(o),
            disabled: e.getItemDisabled(o)
          }, D(e.getItemText(o)), 9, Si))), 128))
        ], 10, $i), [
          [Mt, e.valueLocal]
        ]),
        e.clearable ? (a(), A(r, {
          key: 0,
          onClick: t[1] || (t[1] = (o) => e.valueLocal = null),
          small: ""
        }, {
          default: M(() => [
            X("clear")
          ]),
          _: 1
        })) : L("", !0),
        B(be, { name: "fade" }, {
          default: M(() => [
            e.loading ? (a(), A(u, {
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
const xi = /* @__PURE__ */ x(yi, [["render", Oi]]), Ki = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xi
}, Symbol.toStringTag, { value: "Module" })), ji = O({
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
});
const Mi = {
  key: 0,
  class: "k-smart-ui-panel-header"
}, Ti = { class: "k-smart-ui-panel-body" }, Pi = {
  key: 1,
  class: "k-smart-ui-panel-footer"
};
function Ci(e, t, n, s, l, i) {
  return a(), c("div", {
    class: "k-smart-ui-panel",
    style: re(e.style)
  }, [
    e.$slots.header ? (a(), c("div", Mi, [
      E(e.$slots, "header")
    ])) : L("", !0),
    k("div", Ti, [
      E(e.$slots, "default")
    ]),
    e.$slots.footer ? (a(), c("div", Pi, [
      E(e.$slots, "footer")
    ])) : L("", !0)
  ], 4);
}
const Li = /* @__PURE__ */ x(ji, [["render", Ci]]), Ai = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Li
}, Symbol.toStringTag, { value: "Module" })), zi = O({
  provide() {
    return {
      // @ts-ignore - not sure why this complains
      [qn]: this
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
      timeout: s = 6e3,
      actionLabel: l = "close",
      action: i
    }) {
      const r = this.nextIndex();
      i == null && (i = () => this.dismiss(r));
      const u = {
        title: t,
        message: n,
        timeout: s,
        actionLabel: l,
        action: i,
        type: e,
        index: r
      };
      this.nitems[r] = u, console.log(s), setInterval(() => this.dismiss(r), s);
    }
  }
});
const Vi = { class: "k-snackbar" }, Bi = { class: "k-snackbar-item-message" }, Fi = {
  key: 0,
  class: "k-snackbar-title"
}, Di = {
  key: 1,
  class: "k-snackbar-text"
}, Ii = {
  key: 0,
  class: "k-snackbar-action"
}, Ni = ["onClick"];
function Ei(e, t, n, s, l, i) {
  return a(), c(N, null, [
    E(e.$slots, "default"),
    k("div", Vi, [
      B(Me, {
        name: "slide",
        tag: "div",
        mode: "out-in"
      }, {
        default: M(() => [
          (a(!0), c(N, null, Q(e.items, (r) => (a(), c("div", {
            key: r.index,
            class: Z(["k-snackbar-item", e.classObj(r)])
          }, [
            k("div", Bi, [
              r.title ? (a(), c("div", Fi, D(r.title), 1)) : L("", !0),
              r.message ? (a(), c("div", Di, D(r.message), 1)) : L("", !0)
            ]),
            r.action ? (a(), c("div", Ii, [
              k("a", {
                href: "#",
                onClick: se((u) => e.action(r), ["prevent"])
              }, D(r.actionLabel), 9, Ni)
            ])) : L("", !0)
          ], 2))), 128))
        ]),
        _: 1
      })
    ])
  ], 64);
}
const Ui = /* @__PURE__ */ x(zi, [["render", Ei]]), Ri = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ui
}, Symbol.toStringTag, { value: "Module" })), Wi = O({
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
});
const qi = {
  key: 0,
  class: "j-sort-header-arrow"
}, Hi = {
  key: 1,
  class: "j-sort-header-arrow"
};
function Gi(e, t, n, s, l, i) {
  return a(), c("a", {
    href: "#",
    onClick: t[0] || (t[0] = se((...r) => e.emitClick && e.emitClick(...r), ["prevent"]))
  }, [
    E(e.$slots, "default"),
    B(be, {
      name: "fade",
      mode: "out-in"
    }, {
      default: M(() => [
        e.isActive && e.sortAsc ? (a(), c("span", qi, "↑")) : e.isActive ? (a(), c("span", Hi, "↓")) : L("", !0)
      ]),
      _: 1
    })
  ]);
}
const Qi = /* @__PURE__ */ x(Wi, [["render", Gi]]), Yi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qi
}, Symbol.toStringTag, { value: "Module" }));
const Xi = {}, Ji = { class: "k-spacer" };
function Zi(e, t) {
  return a(), c("div", Ji);
}
const el = /* @__PURE__ */ x(Xi, [["render", Zi]]), tl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: el
}, Symbol.toStringTag, { value: "Module" })), Ie = O({
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
}), Ye = () => {
  Ze((e) => ({
    "2f4ab6bd": e.switchWidthPx,
    "3acd298c": e.heightPx,
    "37d7127c": e.innerSizePx,
    "13e4c99c": e.paddingPx,
    "79abc333": e.transPx
  }));
}, Xe = Ie.setup;
Ie.setup = Xe ? (e, t) => (Ye(), Xe(e, t)) : Ye;
const nl = /* @__PURE__ */ k("span", { class: "k-switch-slider" }, null, -1), rl = [
  nl
];
function ol(e, t, n, s, l, i) {
  return a(), c("div", {
    class: Z(["k-switch", e.classObj]),
    onClick: t[0] || (t[0] = (...r) => e.toggle && e.toggle(...r))
  }, rl, 2);
}
const sl = /* @__PURE__ */ x(Ie, [["render", ol]]), il = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: sl
}, Symbol.toStringTag, { value: "Module" })), ll = O({
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
function al(e, t, n, s, l, i) {
  const r = K("KLinearProgressIndicator");
  return a(), c("div", null, [
    e.loading ? (a(), A(r, { key: 0 })) : L("", !0),
    k("table", {
      class: Z(["k-table", e.classObj])
    }, [
      E(e.$slots, "default")
    ], 2)
  ]);
}
const ul = /* @__PURE__ */ x(ll, [["render", al]]), dl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ul
}, Symbol.toStringTag, { value: "Module" })), cl = O({
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
      const t = e.target, n = this.valueLocal, s = t.selectionStart;
      if (n && s) {
        const l = n.slice(0, s), i = n.slice(s), r = `${l}	${i}`;
        this.valueLocal = r, t.value = r, t.selectionStart = s + 1, t.selectionEnd = s + 1;
      }
    }
  }
});
const pl = ["rows"];
function fl(e, t, n, s, l, i) {
  const r = K("KFormFieldWrapper");
  return a(), A(r, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: M(() => [
      oe(k("textarea", ue({
        "onUpdate:modelValue": t[0] || (t[0] = (u) => e.valueLocal = u)
      }, e.$attrs, {
        spellcheck: "false",
        class: [e.classObj, "k-textarea"],
        rows: e.rows,
        onKeydown: t[1] || (t[1] = he(se((...u) => e.tabber && e.tabber(...u), ["prevent"]), ["tab"]))
      }), null, 16, pl), [
        [je, e.valueLocal]
      ])
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const ml = /* @__PURE__ */ x(cl, [["render", fl]]), hl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ml
}, Symbol.toStringTag, { value: "Module" })), gl = O({
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
const _l = ["placeholder"];
function bl(e, t, n, s, l, i) {
  const r = K("KFormFieldWrapper");
  return a(), A(r, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: M(() => [
      oe(k("input", {
        "onUpdate:modelValue": t[0] || (t[0] = (u) => e.value = u),
        class: Z(["k-input-text-field", e.classObj]),
        placeholder: e.placeholder
      }, null, 10, _l), [
        [je, e.value]
      ])
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const yl = /* @__PURE__ */ x(gl, [["render", bl]]), vl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: yl
}, Symbol.toStringTag, { value: "Module" })), $l = O({
  setup() {
    return {
      config: ee(ce),
      session: ee(ie)
    };
  },
  mixins: [ve],
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
      return z(this.userRec, "type", this.type);
    },
    url() {
      return this.userType === this.session.members.USER ? `${this.config.img}guy.gif` : this.userType === this.session.members.GROUP ? `${this.config.img}2-guys.gif` : this.userType > 0 ? `${this.config.img}projectgroup.gif` : null;
    }
  }
}), kl = ["src"];
function wl(e, t, n, s, l, i) {
  return e.url ? (a(), c("img", {
    key: 0,
    src: e.url,
    style: re([e.measurableStyles])
  }, null, 12, kl)) : L("", !0);
}
const Sl = /* @__PURE__ */ x($l, [["render", wl]]), Ol = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sl
}, Symbol.toStringTag, { value: "Module" })), fe = new ye();
function xl(e) {
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
class Kl {
  session;
  queueItems;
  intervalId;
  constructor() {
    this.session = null, this.queueItems = [], this.intervalId = 0;
  }
  resetQueue() {
    this.queueItems = [];
  }
  queue(t, n, s) {
    this.session = t, this.queueItems.push({
      resolveFunc: n,
      userId: s
    }), clearInterval(this.intervalId), this.queueItems.length < 20 ? this.intervalId = setTimeout(this.processQueue.bind(this), 50) : this.processQueue();
  }
  async processQueue() {
    const t = this.session.rpcClient("/api/v1/rh/rpc/user/"), n = this.queueItems;
    this.resetQueue(), n.forEach((s) => {
      const l = s.userId;
      t.queue("UserLookup", { userId: l });
    });
    try {
      (await t.batch()).forEach((l, i) => {
        const r = n[i].resolveFunc;
        r(l);
      });
    } catch {
      n.forEach((s) => s.resolveFunc(null));
    }
  }
}
class jl {
  users;
  userLookupQueue;
  constructor() {
    this.users = {}, this.userLookupQueue = new Kl();
  }
  // registerUsers(items: Array<RHUserSerializer>) {
  //   items.forEach((user) => (this.users[user.userid] = user));
  // }
  async lookupLegacy(t, n) {
    if (n)
      try {
        if (await fe.acquire(n), this.users.hasOwnProperty(n))
          return this.users[n];
        {
          const s = await t.members.member(n), l = xl(s.data);
          return this.users[n] = l, l;
        }
      } catch {
        return this.users[n] = null, null;
      } finally {
        fe.release(n);
      }
    else
      return null;
  }
  async lookupRPC(t, n) {
    return n ? (await fe.acquire(n), this.users.hasOwnProperty(n) ? (fe.release(n), this.users[n]) : new Promise((s, l) => {
      const i = (r) => {
        r instanceof Error ? l(r) : (this.users[n] = r, s(r), fe.release(n));
      };
      this.userLookupQueue.queue(t, i, n);
    })) : null;
  }
  async lookup(t, n, s = !1) {
    return s ? this.lookupLegacy(t, n) : this.lookupRPC(t, n);
  }
}
const Oe = new jl(), Ml = O({
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
      return z(this.userRecLocal, "id") ?? z(this.userRecLocal, "userid");
    },
    // userLocal() {
    //   return this.user ?? this.userid ?? this.userRec
    // },
    displayName() {
      return z(this.userRecLocal, "display_name") ?? z(this.userRecLocal, "displayname") ?? z(this.userRecLocal, "name");
    },
    type() {
      return z(this.userRecLocal, "type");
    }
  },
  watch: {
    user: {
      async handler(e) {
        this.isInteger(e) ? this.userRecLocal = await Oe.lookup(this.session, e, this.legacy).catch((t) => null) : this.userRecLocal = e;
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
const Tl = {
  key: 0,
  class: "k-user-link"
};
function Pl(e, t, n, s, l, i) {
  const r = K("KUserGIF");
  return e.userRecLocal ? (a(), c("span", Tl, [
    e.gif ? (a(), A(r, {
      key: 0,
      "user-rec": e.userRecLocal
    }, null, 8, ["user-rec"])) : L("", !0),
    X("   "),
    k("a", {
      href: "#",
      onClick: t[0] || (t[0] = se((...u) => e.click && e.click(...u), ["prevent"]))
    }, D(e.displayName), 1)
  ])) : L("", !0);
}
const Cl = /* @__PURE__ */ x(Ml, [["render", Pl]]), Ll = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Cl
}, Symbol.toStringTag, { value: "Module" })), Al = O({
  mixins: [le],
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
          text: z(n, "name_formatted"),
          value: z(n, "id"),
          type: z(n, "type")
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
          const t = this.legacy ? await Oe.lookupLegacy(this.session, e).catch((n) => null) : await Oe.lookup(this.session, e).catch((n) => null);
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
const zl = { class: "flex items-center gap-1" };
function Vl(e, t, n, s, l, i) {
  const r = K("KUserGIF"), u = K("KAutocomplete"), d = K("KUserLink"), o = K("KFormFieldWrapper");
  return a(), A(o, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: M(() => [
      e.editable ? (a(), A(u, {
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
        prepend: M(({ item: p }) => [
          p ? (a(), A(r, {
            key: 0,
            type: p.type
          }, null, 8, ["type"])) : (a(), A(r, {
            key: 1,
            type: e.USER
          }, null, 8, ["type"]))
        ]),
        item: M(({ item: p }) => [
          k("div", zl, [
            B(r, {
              type: p.type
            }, null, 8, ["type"]),
            X(" " + D(p.text), 1)
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "search-input", "placeholder", "width", "loading", "items", "return-object"])) : (a(), A(d, {
        key: 1,
        user: e.modelValue,
        gif: ""
      }, null, 8, ["user"]))
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const Ot = /* @__PURE__ */ x(Al, [["render", Vl]]), Bl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ot
}, Symbol.toStringTag, { value: "Module" })), Fl = O({
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
      const e = (i) => i.type.name === "KTabItem", t = (i) => typeof i.type == "symbol", n = (i) => i.children && Array.isArray(i.children) && i.children.length && i.children.some(e), s = (i) => t(i) && n(i);
      return (this.$slots.default ? this.$slots.default() : []).filter((i) => e(i) || s(i)).flatMap((i) => s(i) ? i.children : i).map((i) => ({
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
});
const Dl = { class: "k-tabs" }, Il = { class: "k-tabs-nav" }, Nl = ["href", "onClick"], El = { class: "k-tabs-content" };
function Ul(e, t, n, s, l, i) {
  return a(), c("div", Dl, [
    k("div", Il, [
      (a(!0), c(N, null, Q(e.tabs, (r) => (a(), c("div", {
        key: r.name,
        class: Z(e.classObj(r))
      }, [
        k("a", {
          href: `#${r.name}`,
          onClick: (u) => e.selectTab(r.name)
        }, D(r.title), 9, Nl)
      ], 2))), 128))
    ]),
    k("div", El, [
      E(e.$slots, "default")
    ])
  ]);
}
const Rl = /* @__PURE__ */ x(Fl, [["render", Ul]]), Wl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Rl
}, Symbol.toStringTag, { value: "Module" })), ql = O({
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
      return this.name == z(this.tabs, "selectedTab");
    }
  }
}), Hl = { key: 0 };
function Gl(e, t, n, s, l, i) {
  return e.isSelected ? (a(), c("div", Hl, [
    E(e.$slots, "default")
  ])) : L("", !0);
}
const Ql = /* @__PURE__ */ x(ql, [["render", Gl]]), Yl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ql
}, Symbol.toStringTag, { value: "Module" })), Xl = O({
  extends: Ot,
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
          ), n = z(t, "data.data.first_name"), s = z(t, "data.data.last_name"), l = z(t, "data.data.name"), i = `${n} ${s} (${l})`;
          this.items = [
            {
              text: i,
              value: z(t, "data.data.id"),
              type: z(t, "data.data.type")
            }
          ], this.select = i;
        } finally {
          this.pleaseWait = !1, this.readonly = !1, this.loading = !1;
        }
    }
  }
}), Jl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xl
}, Symbol.toStringTag, { value: "Module" }));
class Zl {
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
    return typeof t == "string" ? [this.stringToDate(t), "GMT"] : typeof t == "number" ? [new Date(t), "GMT"] : t?.getMonth ? [t, void 0] : [null, void 0];
  }
  formatDate(t) {
    try {
      const [n, s] = this.convertToDate(t);
      return n ? We(n, this.jsShortDateFormat, {
        timezone: s
      }) : null;
    } catch {
      return null;
    }
  }
  formatDateTime(t) {
    try {
      const [n, s] = this.convertToDate(t);
      return n ? We(n, this.jsLongDateFormat, {
        timezone: s
      }) : null;
    } catch {
      return null;
    }
  }
}
function me(e) {
  return (t, n = {}) => new Promise((s) => {
    window.csui.require(
      ["csui/dialogs/modal.alert/modal.alert"],
      function(l) {
        l[e](s, t, null, n);
      }
    );
  });
}
function de(e) {
  return (t, n = {}) => new Promise((s) => {
    window.csui.require(
      ["csui/dialogs/modal.alert/modal.alert"],
      function(l) {
        l[e](s, t, null, n);
      }
    );
  });
}
function ea({ dataId: e, selectedTab: t = void 0, selectedProperty: n = void 0 }) {
  window.csui.require(
    [
      "csui/utils/contexts/factories/next.node",
      "csui/utils/contexts/factories/metadata.factory"
    ],
    function(s, l) {
      const i = window._rhcore_smartui_view_context;
      t ? i.getModel(l).set("metadata_info", {
        id: e,
        navigator: !0,
        selectedTab: t,
        // this works
        selectedProperty: n
      }) : i.getModel(s).set("id", e);
    }
  );
}
const ma = () => ({
  showSuccess: me("showSuccess"),
  showInformation: me("showInformation"),
  showWarning: me("showWarning"),
  showError: me("showError"),
  showMessage: me("showMessage"),
  confirmSuccess: de("confirmSuccess"),
  confirmInformation: de("confirmInformation"),
  confirmWarning: de("confirmWarning"),
  confirmError: de("confirmError"),
  confirmQuestion: de("confirmQuestion"),
  confirmMessage: de("confirmMessage"),
  openDataId: ea
}), ha = (e, t) => {
  const n = t.sortKey, l = t.sortAsc ? 1 : -1;
  return [...e].sort((i, r) => {
    if (n) {
      const u = String(z(i, n, "") ?? ""), d = String(z(r, n, "") ?? "");
      return l * u.toLowerCase().localeCompare(d.toLowerCase());
    } else
      return 0;
  });
}, ta = /* @__PURE__ */ Object.assign({
  "./components/Card/KCard.vue": Vt,
  "./components/Card/KCardActions.vue": Nt,
  "./components/Card/KCardText.vue": qt,
  "./components/Card/KCardTitle.vue": Xt,
  "./components/Icons/KMenuDownIcon.vue": on,
  "./components/Icons/KSubtractIcon.vue": pn,
  "./components/KAdminLink.vue": yn,
  "./components/KAlert.vue": Cn,
  "./components/KApp.vue": Bn,
  "./components/KAutocomplete.vue": Wn,
  "./components/KBrowseLink.vue": lr,
  "./components/KButton.vue": pr,
  "./components/KConfirm.vue": gr,
  "./components/KDateTimePicker.vue": kr,
  "./components/KDialog.vue": xr,
  "./components/KDivider.vue": Tr,
  "./components/KDot.vue": Ar,
  "./components/KFormFieldWrapper.vue": Dr,
  "./components/KFunctionMenu.vue": Hr,
  "./components/KFunctionMenuModern.vue": lo,
  "./components/KFunctionMenuSmartUI.vue": po,
  "./components/KLinearProgressIndicator.vue": _o,
  "./components/KList/KList.vue": ko,
  "./components/KList/KListItem.vue": ro,
  "./components/KList/KListItemSubtitle.vue": to,
  "./components/KList/KListItemTitle.vue": Xr,
  "./components/KMenu/KMenu.vue": Ko,
  "./components/KMenu/KRightCaret.vue": Ao,
  "./components/KMulti.vue": Eo,
  "./components/KMulti2.vue": Go,
  "./components/KMultiUserPicker.vue": Jo,
  "./components/KNodeAncestor.vue": rs,
  "./components/KNodePickerField.vue": us,
  "./components/KOneMoment.vue": hs,
  "./components/KPageDropZone.vue": ys,
  "./components/KPageTitle.vue": xs,
  "./components/KPagination.vue": Ns,
  "./components/KPagination2.vue": Js,
  "./components/KPleaseWait.vue": ai,
  "./components/KRadioGroup.vue": mi,
  "./components/KScratch.vue": bi,
  "./components/KSelect.vue": Ki,
  "./components/KSmartUIPanel.vue": Ai,
  "./components/KSnackbar.vue": Ri,
  "./components/KSortHeader.vue": Yi,
  "./components/KSpacer.vue": tl,
  "./components/KSpinner.vue": ri,
  "./components/KSwitch.vue": il,
  "./components/KTable.vue": dl,
  "./components/KTextArea.vue": hl,
  "./components/KTextField.vue": vl,
  "./components/KUserGIF.vue": Ol,
  "./components/KUserLink.vue": Ll,
  "./components/KUserPicker.vue": Bl,
  "./components/KUserPickerLegacy.vue": Jl,
  "./components/Tabs/KTabItem.vue": Yl,
  "./components/Tabs/KTabs.vue": Wl
});
let xe;
const ga = {
  install(e, t) {
    Object.entries(ta).forEach(
      ([s, l]) => {
        const i = s?.split("/")?.pop()?.replace(/\.\w+$/, "");
        e.component(i, l.default);
      }
    ), xe = new At(t);
    const n = {
      userId: t.userId,
      img: t.img,
      baseUrl: t.baseUrl,
      jsLongDateFormat: t.datelong,
      jsShortDateFormat: t.dateshort
    };
    e.provide(ie, xe), e.provide(ce, n), e.provide(
      Hn,
      new Zl(t.datelong, t.dateshort)
    );
  }
}, na = () => xe;
export {
  bn as KAdminLink,
  Pn as KAlert,
  Vn as KApp,
  Rn as KAutocomplete,
  ir as KBrowseLink,
  cr as KButton,
  zt as KCard,
  It as KCardActions,
  Wt as KCardText,
  Yt as KCardTitle,
  hr as KConfirm,
  $r as KDateTimePicker,
  Or as KDialog,
  Be as KDivider,
  Lr as KDot,
  Fr as KFormFieldWrapper,
  qr as KFunctionMenu,
  io as KFunctionMenuModern,
  co as KFunctionMenuSmartUI,
  go as KLinearProgressIndicator,
  $o as KList,
  Fe as KListItem,
  $t as KListItemSubtitle,
  vt as KListItemTitle,
  xo as KMenu,
  Pe as KMenuDownIcon,
  No as KMulti,
  Ho as KMulti2,
  Xo as KMultiUserPicker,
  wt as KNodeAncestor,
  as as KNodePickerField,
  ms as KOneMoment,
  bs as KPageDropZone,
  Os as KPageTitle,
  Is as KPagination,
  Xs as KPagination2,
  li as KPleaseWait,
  fi as KRadioGroup,
  Lo as KRightCaret,
  _i as KScratch,
  xi as KSelect,
  Li as KSmartUIPanel,
  Ui as KSnackbar,
  Qi as KSortHeader,
  el as KSpacer,
  St as KSpinner,
  cn as KSubtractIcon,
  sl as KSwitch,
  Ql as KTabItem,
  ul as KTable,
  Rl as KTabs,
  ml as KTextArea,
  yl as KTextField,
  Sl as KUserGIF,
  Cl as KUserLink,
  Ot as KUserPicker,
  Xl as KUserPickerLegacy,
  ce as configKey,
  Gn as confirmDialogKey,
  Hn as dateTimeFormatterKey,
  ga as default,
  ha as generalSort,
  ee as injectStrict,
  Jn as nodeLookup,
  ie as sessionKey,
  qn as snackbarKey,
  na as useSession,
  ma as useSmartUI,
  Oe as userLookup
};
