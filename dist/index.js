var Nt = Object.defineProperty;
var Et = (e, t, n) => t in e ? Nt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var te = (e, t, n) => (Et(e, typeof t != "symbol" ? t + "" : t, n), n);
import { defineComponent as S, h as fe, openBlock as u, createElementBlock as f, renderSlot as U, mergeProps as pe, createElementVNode as $, toDisplayString as B, createCommentVNode as L, normalizeStyle as se, resolveComponent as C, createVNode as I, withCtx as j, resolveDirective as ze, withDirectives as ie, normalizeClass as ee, withKeys as ye, withModifiers as ue, vModelText as Ve, Fragment as F, renderList as Q, createTextVNode as X, inject as it, createBlock as z, vModelDynamic as Rt, Teleport as at, Transition as Oe, setBlockTracking as Ye, toHandlers as we, ref as ve, TransitionGroup as Ie, mergeModels as qt, useModel as Wt, useCssVars as lt, vModelRadio as Ht, vModelSelect as Gt, watch as Qt } from "vue";
import V from "lodash.get";
import { directive as Be } from "vue3-click-away";
import Te from "@chriscdn/promise-semaphore";
import { format as Xe } from "date-fns";
import { disableBodyScroll as Yt, enableBodyScroll as Xt } from "body-scroll-lock";
import Je from "hotkeys-js";
import Jt from "@chriscdn/build-url";
import Zt from "js-cookie";
import { Session as en } from "@kweli/cs-rest";
import Ze from "intl-dateformat";
const ut = S({
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
}, xe = S({
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
      const e = {}, t = Y(this.height), n = Y(this.minHeight), o = Y(this.minWidth), a = Y(this.maxHeight), s = Y(this.maxWidth), r = Y(this.width);
      return t && (e.height = t), n && (e.minHeight = n), o && (e.minWidth = o), a && (e.maxHeight = a), s && (e.maxWidth = s), r && (e.width = r), e;
    }
  }
}), tn = S({
  mixins: [xe, ut],
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
}), nn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: tn
}, Symbol.toStringTag, { value: "Module" })), rn = S({}), x = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, a] of t)
    n[o] = a;
  return n;
}, on = { class: "k-card-actions" };
function sn(e, t, n, o, a, s) {
  return u(), f("div", on, [
    U(e.$slots, "default")
  ]);
}
const an = /* @__PURE__ */ x(rn, [["render", sn]]), ln = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: an
}, Symbol.toStringTag, { value: "Module" })), un = S({}), dn = { class: "k-card-text" };
function cn(e, t, n, o, a, s) {
  return u(), f("div", dn, [
    U(e.$slots, "default")
  ]);
}
const fn = /* @__PURE__ */ x(un, [["render", cn]]), pn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fn
}, Symbol.toStringTag, { value: "Module" })), mn = S({}), hn = { class: "k-card-title" };
function gn(e, t, n, o, a, s) {
  return u(), f("div", hn, [
    U(e.$slots, "default")
  ]);
}
const bn = /* @__PURE__ */ x(mn, [["render", gn]]), _n = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bn
}, Symbol.toStringTag, { value: "Module" })), yn = S({
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
}), vn = ["aria-hidden", "aria-label"], $n = ["width", "height"], kn = { d: "M7,10L12,15L17,10H7Z" }, wn = { key: 0 };
function Sn(e, t, n, o, a, s) {
  return u(), f("span", pe(e.$attrs, {
    "aria-hidden": !e.title,
    "aria-label": e.title,
    class: "material-design-icon menu-down-icon animate-spin",
    role: "img",
    onClick: t[0] || (t[0] = (r) => e.$emit("click", r))
  }), [
    (u(), f("svg", {
      class: "fill-black hover:fill-green-500 transition-colors",
      width: e.size,
      height: e.size,
      viewBox: "7 10 10 5"
    }, [
      $("path", kn, [
        e.title ? (u(), f("title", wn, B(e.title), 1)) : L("", !0)
      ])
    ], 8, $n))
  ], 16, vn);
}
const De = /* @__PURE__ */ x(yn, [["render", Sn]]), On = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: De
}, Symbol.toStringTag, { value: "Module" })), Tn = {}, xn = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, Cn = /* @__PURE__ */ $("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z" }, null, -1), Mn = [
  Cn
];
function jn(e, t) {
  return u(), f("svg", xn, Mn);
}
const Pn = /* @__PURE__ */ x(Tn, [["render", jn]]), Kn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pn
}, Symbol.toStringTag, { value: "Module" })), An = S({
  setup() {
    return { config: J(me) };
  }
}), Ln = { clsas: "space-y-2" }, zn = /* @__PURE__ */ $("hr", null, null, -1), Vn = ["href"];
function In(e, t, n, o, a, s) {
  return u(), f("div", Ln, [
    zn,
    $("a", {
      href: `${e.config.baseUrl}?func=admin.index`
    }, "Admin Home", 8, Vn)
  ]);
}
const Bn = /* @__PURE__ */ x(An, [["render", In]]), Dn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Bn
}, Symbol.toStringTag, { value: "Module" }));
function Fn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var dt = {}, ct = {}, Fe = {};
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
})(Fe);
var ft = {};
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
    "content",
    "forcedColorAdjust"
  ];
})(ft);
var pt = {};
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
      ...new Set(o.filter((s) => n !== !1 && n[s] !== !1).concat(Object.keys(n).filter((s) => n[s] !== !1)))
    ];
  }
})(pt);
var mt = {}, Ce = {}, Ue = { exports: {} }, E = String, ht = function() {
  return { isColorSupported: !1, reset: E, bold: E, dim: E, italic: E, underline: E, inverse: E, hidden: E, strikethrough: E, black: E, red: E, green: E, yellow: E, blue: E, magenta: E, cyan: E, white: E, gray: E, bgBlack: E, bgRed: E, bgGreen: E, bgYellow: E, bgBlue: E, bgMagenta: E, bgCyan: E, bgWhite: E };
};
Ue.exports = ht();
Ue.exports.createColors = ht;
var gt = Ue.exports;
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(d, i) {
    for (var c in i)
      Object.defineProperty(d, c, {
        enumerable: !0,
        get: i[c]
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
  const n = /* @__PURE__ */ o(gt);
  function o(d) {
    return d && d.__esModule ? d : {
      default: d
    };
  }
  let a = /* @__PURE__ */ new Set();
  function s(d, i, c) {
    typeof process < "u" && process.env.JEST_WORKER_ID || c && a.has(c) || (c && a.add(c), console.warn(""), i.forEach((h) => console.warn(d, "-", h)));
  }
  function r(d) {
    return n.default.dim(d);
  }
  const l = {
    info(d, i) {
      s(n.default.bold(n.default.cyan("info")), ...Array.isArray(d) ? [
        d
      ] : [
        i,
        d
      ]);
    },
    warn(d, i) {
      s(n.default.bold(n.default.yellow("warn")), ...Array.isArray(d) ? [
        d
      ] : [
        i,
        d
      ]);
    },
    risk(d, i) {
      s(n.default.bold(n.default.magenta("risk")), ...Array.isArray(d) ? [
        d
      ] : [
        i,
        d
      ]);
    }
  };
})(Ce);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return a;
    }
  });
  const t = /* @__PURE__ */ n(Ce);
  function n(s) {
    return s && s.__esModule ? s : {
      default: s
    };
  }
  function o({ version: s, from: r, to: l }) {
    t.default.warn(`${r}-color-renamed`, [
      `As of Tailwind CSS ${s}, \`${r}\` has been renamed to \`${l}\`.`,
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
})(mt);
var bt = {};
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
        var s;
        !(n == null || (s = n.hasOwnProperty) === null || s === void 0) && s.call(n, l) || (n[l] = r[l]);
      }
    }
    return n;
  }
})(bt);
var _t = {};
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
})(_t);
var yt = {}, Me = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(h, m) {
    for (var k in m)
      Object.defineProperty(h, k, {
        enumerable: !0,
        get: m[k]
      });
  }
  t(e, {
    flagEnabled: function() {
      return l;
    },
    issueFlagNotices: function() {
      return i;
    },
    default: function() {
      return c;
    }
  });
  const n = /* @__PURE__ */ a(gt), o = /* @__PURE__ */ a(Ce);
  function a(h) {
    return h && h.__esModule ? h : {
      default: h
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
  function l(h, m) {
    if (r.future.includes(m)) {
      var k, y, P;
      return h.future === "all" || ((P = (y = h == null || (k = h.future) === null || k === void 0 ? void 0 : k[m]) !== null && y !== void 0 ? y : s[m]) !== null && P !== void 0 ? P : !1);
    }
    if (r.experimental.includes(m)) {
      var D, q, W;
      return h.experimental === "all" || ((W = (q = h == null || (D = h.experimental) === null || D === void 0 ? void 0 : D[m]) !== null && q !== void 0 ? q : s[m]) !== null && W !== void 0 ? W : !1);
    }
    return !1;
  }
  function d(h) {
    if (h.experimental === "all")
      return r.experimental;
    var m;
    return Object.keys((m = h == null ? void 0 : h.experimental) !== null && m !== void 0 ? m : {}).filter((k) => r.experimental.includes(k) && h.experimental[k]);
  }
  function i(h) {
    if (process.env.JEST_WORKER_ID === void 0 && d(h).length > 0) {
      let m = d(h).map((k) => n.default.yellow(k)).join(", ");
      o.default.warn("experimental-flags-enabled", [
        `You have enabled experimental features: ${m}`,
        "Experimental features in Tailwind CSS are not covered by semver, may introduce breaking changes, and can change at any time."
      ]);
    }
  }
  const c = r;
})(Me);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "normalizeConfig", {
    enumerable: !0,
    get: function() {
      return s;
    }
  });
  const t = Me, n = /* @__PURE__ */ a(Ce);
  function o(r) {
    if (typeof WeakMap != "function")
      return null;
    var l = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new WeakMap();
    return (o = function(i) {
      return i ? d : l;
    })(r);
  }
  function a(r, l) {
    if (!l && r && r.__esModule)
      return r;
    if (r === null || typeof r != "object" && typeof r != "function")
      return {
        default: r
      };
    var d = o(l);
    if (d && d.has(r))
      return d.get(r);
    var i = {}, c = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var h in r)
      if (h !== "default" && Object.prototype.hasOwnProperty.call(r, h)) {
        var m = c ? Object.getOwnPropertyDescriptor(r, h) : null;
        m && (m.get || m.set) ? Object.defineProperty(i, h, m) : i[h] = r[h];
      }
    return i.default = r, d && d.set(r, i), i;
  }
  function s(r) {
    if ((() => {
      if (r.purge || !r.content || !Array.isArray(r.content) && !(typeof r.content == "object" && r.content !== null))
        return !1;
      if (Array.isArray(r.content))
        return r.content.every((i) => typeof i == "string" ? !0 : !(typeof (i == null ? void 0 : i.raw) != "string" || i != null && i.extension && typeof (i == null ? void 0 : i.extension) != "string"));
      if (typeof r.content == "object" && r.content !== null) {
        if (Object.keys(r.content).some((i) => ![
          "files",
          "relative",
          "extract",
          "transform"
        ].includes(i)))
          return !1;
        if (Array.isArray(r.content.files)) {
          if (!r.content.files.every((i) => typeof i == "string" ? !0 : !(typeof (i == null ? void 0 : i.raw) != "string" || i != null && i.extension && typeof (i == null ? void 0 : i.extension) != "string")))
            return !1;
          if (typeof r.content.extract == "object") {
            for (let i of Object.values(r.content.extract))
              if (typeof i != "function")
                return !1;
          } else if (!(r.content.extract === void 0 || typeof r.content.extract == "function"))
            return !1;
          if (typeof r.content.transform == "object") {
            for (let i of Object.values(r.content.transform))
              if (typeof i != "function")
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
      var i;
      let { content: c, purge: h, safelist: m } = r;
      return Array.isArray(m) ? m : Array.isArray(c == null ? void 0 : c.safelist) ? c.safelist : Array.isArray(h == null ? void 0 : h.safelist) ? h.safelist : Array.isArray(h == null || (i = h.options) === null || i === void 0 ? void 0 : i.safelist) ? h.options.safelist : [];
    })(), r.blocklist = (() => {
      let { blocklist: i } = r;
      if (Array.isArray(i)) {
        if (i.every((c) => typeof c == "string"))
          return i;
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
        let { content: i } = r;
        return i != null && i.relative ? i.relative : (0, t.flagEnabled)(r, "relativeContentPathsByDefault");
      })(),
      files: (() => {
        let { content: i, purge: c } = r;
        return Array.isArray(c) ? c : Array.isArray(c == null ? void 0 : c.content) ? c.content : Array.isArray(i) ? i : Array.isArray(i == null ? void 0 : i.content) ? i.content : Array.isArray(i == null ? void 0 : i.files) ? i.files : [];
      })(),
      extract: (() => {
        let i = (() => {
          var m, k, y, P, D, q, W, N, H, G;
          return !((m = r.purge) === null || m === void 0) && m.extract ? r.purge.extract : !((k = r.content) === null || k === void 0) && k.extract ? r.content.extract : !((y = r.purge) === null || y === void 0 || (P = y.extract) === null || P === void 0) && P.DEFAULT ? r.purge.extract.DEFAULT : !((D = r.content) === null || D === void 0 || (q = D.extract) === null || q === void 0) && q.DEFAULT ? r.content.extract.DEFAULT : !((W = r.purge) === null || W === void 0 || (N = W.options) === null || N === void 0) && N.extractors ? r.purge.options.extractors : !((H = r.content) === null || H === void 0 || (G = H.options) === null || G === void 0) && G.extractors ? r.content.options.extractors : {};
        })(), c = {}, h = (() => {
          var m, k, y, P;
          if (!((m = r.purge) === null || m === void 0 || (k = m.options) === null || k === void 0) && k.defaultExtractor)
            return r.purge.options.defaultExtractor;
          if (!((y = r.content) === null || y === void 0 || (P = y.options) === null || P === void 0) && P.defaultExtractor)
            return r.content.options.defaultExtractor;
        })();
        if (h !== void 0 && (c.DEFAULT = h), typeof i == "function")
          c.DEFAULT = i;
        else if (Array.isArray(i))
          for (let { extensions: m, extractor: k } of i ?? [])
            for (let y of m)
              c[y] = k;
        else
          typeof i == "object" && i !== null && Object.assign(c, i);
        return c;
      })(),
      transform: (() => {
        let i = (() => {
          var h, m, k, y, P, D;
          return !((h = r.purge) === null || h === void 0) && h.transform ? r.purge.transform : !((m = r.content) === null || m === void 0) && m.transform ? r.content.transform : !((k = r.purge) === null || k === void 0 || (y = k.transform) === null || y === void 0) && y.DEFAULT ? r.purge.transform.DEFAULT : !((P = r.content) === null || P === void 0 || (D = P.transform) === null || D === void 0) && D.DEFAULT ? r.content.transform.DEFAULT : {};
        })(), c = {};
        return typeof i == "function" && (c.DEFAULT = i), typeof i == "object" && i !== null && Object.assign(c, i), c;
      })()
    };
    for (let i of r.content.files)
      if (typeof i == "string" && /{([^,]*?)}/g.test(i)) {
        n.default.warn("invalid-glob-braces", [
          `The glob pattern ${(0, n.dim)(i)} in your Tailwind CSS configuration is invalid.`,
          `Update it to ${(0, n.dim)(i.replace(/{([^,]*?)}/g, "$1"))} to silence this warning.`
        ]);
        break;
      }
    return r;
  }
})(yt);
var vt = {};
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
})(vt);
var $t = {};
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
})($t);
var kt = {}, wt = {};
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
})(wt);
var Ne = {}, Ee = {}, St = {};
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
})(St);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(y, P) {
    for (var D in P)
      Object.defineProperty(y, D, {
        enumerable: !0,
        get: P[D]
      });
  }
  t(e, {
    parseColor: function() {
      return m;
    },
    formatColor: function() {
      return k;
    }
  });
  const n = /* @__PURE__ */ o(St);
  function o(y) {
    return y && y.__esModule ? y : {
      default: y
    };
  }
  let a = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i, s = /^#([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i, r = /(?:\d+|\d*\.\d+)%?/, l = /(?:\s*,\s*|\s+)/, d = /\s*[,/]\s*/, i = /var\(--(?:[^ )]*?)(?:,(?:[^ )]*?|var\(--[^ )]*?\)))?\)/, c = new RegExp(`^(rgba?)\\(\\s*(${r.source}|${i.source})(?:${l.source}(${r.source}|${i.source}))?(?:${l.source}(${r.source}|${i.source}))?(?:${d.source}(${r.source}|${i.source}))?\\s*\\)$`), h = new RegExp(`^(hsla?)\\(\\s*((?:${r.source})(?:deg|rad|grad|turn)?|${i.source})(?:${l.source}(${r.source}|${i.source}))?(?:${l.source}(${r.source}|${i.source}))?(?:${d.source}(${r.source}|${i.source}))?\\s*\\)$`);
  function m(y, { loose: P = !1 } = {}) {
    var D, q;
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
        color: n.default[y].map((Z) => Z.toString())
      };
    let W = y.replace(s, (Z, le, re, b, O) => [
      "#",
      le,
      le,
      re,
      re,
      b,
      b,
      O ? O + O : ""
    ].join("")).match(a);
    if (W !== null)
      return {
        mode: "rgb",
        color: [
          parseInt(W[1], 16),
          parseInt(W[2], 16),
          parseInt(W[3], 16)
        ].map((Z) => Z.toString()),
        alpha: W[4] ? (parseInt(W[4], 16) / 255).toString() : void 0
      };
    var N;
    let H = (N = y.match(c)) !== null && N !== void 0 ? N : y.match(h);
    if (H === null)
      return null;
    let G = [
      H[2],
      H[3],
      H[4]
    ].filter(Boolean).map((Z) => Z.toString());
    return G.length === 2 && G[0].startsWith("var(") ? {
      mode: H[1],
      color: [
        G[0]
      ],
      alpha: G[1]
    } : !P && G.length !== 3 || G.length < 3 && !G.some((Z) => /^var\(.*?\)$/.test(Z)) ? null : {
      mode: H[1],
      color: G,
      alpha: (D = H[5]) === null || D === void 0 || (q = D.toString) === null || q === void 0 ? void 0 : q.call(D)
    };
  }
  function k({ mode: y, color: P, alpha: D }) {
    let q = D !== void 0;
    return y === "rgba" || y === "hsla" ? `${y}(${P.join(", ")}${q ? `, ${D}` : ""})` : `${y}(${P.join(" ")}${q ? ` / ${D}` : ""})`;
  }
})(Ee);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(s, r) {
    for (var l in r)
      Object.defineProperty(s, l, {
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
  const n = Ee;
  function o(s, r, l) {
    if (typeof s == "function")
      return s({
        opacityValue: r
      });
    let d = (0, n.parseColor)(s, {
      loose: !0
    });
    return d === null ? l : (0, n.formatColor)({
      ...d,
      alpha: r
    });
  }
  function a({ color: s, property: r, variable: l }) {
    let d = [].concat(r);
    if (typeof s == "function")
      return {
        [l]: "1",
        ...Object.fromEntries(d.map((c) => [
          c,
          s({
            opacityVariable: l,
            opacityValue: `var(${l})`
          })
        ]))
      };
    const i = (0, n.parseColor)(s);
    return i === null ? Object.fromEntries(d.map((c) => [
      c,
      s
    ])) : i.alpha !== void 0 ? Object.fromEntries(d.map((c) => [
      c,
      s
    ])) : {
      [l]: "1",
      ...Object.fromEntries(d.map((c) => [
        c,
        (0, n.formatColor)({
          ...i,
          alpha: `var(${l})`
        })
      ]))
    };
  }
})(Ne);
var Re = {}, Ot = {}, je = {};
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
    let a = [], s = [], r = 0, l = !1;
    for (let d = 0; d < n.length; d++) {
      let i = n[d];
      a.length === 0 && i === o[0] && !l && (o.length === 1 || n.slice(d, d + o.length) === o) && (s.push(n.slice(r, d)), r = d + o.length), l ? l = !1 : i === "\\" && (l = !0), i === "(" || i === "[" || i === "{" ? a.push(i) : (i === ")" && a[a.length - 1] === "(" || i === "]" && a[a.length - 1] === "[" || i === "}" && a[a.length - 1] === "{") && a.pop();
    }
    return s.push(n.slice(r)), s;
  }
})(je);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(d, i) {
    for (var c in i)
      Object.defineProperty(d, c, {
        enumerable: !0,
        get: i[c]
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
  const n = je;
  let o = /* @__PURE__ */ new Set([
    "inset",
    "inherit",
    "initial",
    "revert",
    "unset"
  ]), a = /\ +(?![^(]*\))/g, s = /^-?(\d+|\.\d+)(.*?)$/g;
  function r(d) {
    return (0, n.splitAtTopLevelOnly)(d, ",").map((c) => {
      let h = c.trim(), m = {
        raw: h
      }, k = h.split(a), y = /* @__PURE__ */ new Set();
      for (let P of k)
        s.lastIndex = 0, !y.has("KEYWORD") && o.has(P) ? (m.keyword = P, y.add("KEYWORD")) : s.test(P) ? y.has("X") ? y.has("Y") ? y.has("BLUR") ? y.has("SPREAD") || (m.spread = P, y.add("SPREAD")) : (m.blur = P, y.add("BLUR")) : (m.y = P, y.add("Y")) : (m.x = P, y.add("X")) : m.color ? (m.unknown || (m.unknown = []), m.unknown.push(P)) : m.color = P;
      return m.valid = m.x !== void 0 && m.y !== void 0, m;
    });
  }
  function l(d) {
    return d.map((i) => i.valid ? [
      i.keyword,
      i.x,
      i.y,
      i.blur,
      i.spread,
      i.color
    ].filter(Boolean).join(" ") : i.raw).join(", ");
  }
})(Ot);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(p, M) {
    for (var A in M)
      Object.defineProperty(p, A, {
        enumerable: !0,
        get: M[A]
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
      return m;
    },
    length: function() {
      return P;
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
      return Z;
    },
    position: function() {
      return re;
    },
    familyName: function() {
      return b;
    },
    genericName: function() {
      return T;
    },
    absoluteSize: function() {
      return v;
    },
    relativeSize: function() {
      return _;
    }
  });
  const n = Ee, o = Ot, a = je;
  let s = [
    "min",
    "max",
    "clamp",
    "calc"
  ];
  function r(p) {
    return s.some((M) => new RegExp(`^${M}\\(.*\\)`).test(p));
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
  function d(p, M = null, A = !0) {
    let K = M && l.has(M.property);
    return p.startsWith("--") && !K ? `var(${p})` : p.includes("url(") ? p.split(/(url\(.*?\))/g).filter(Boolean).map((R) => /^url\(.*?\)$/.test(R) ? R : d(R, M, !1)).join("") : (p = p.replace(/([^\\])_+/g, (R, Pe) => Pe + " ".repeat(R.length - 1)).replace(/^_/g, " ").replace(/\\_/g, "_"), A && (p = p.trim()), p = i(p), p);
  }
  function i(p) {
    let M = [
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
      "keyboard-inset-height"
    ];
    return p.replace(/(calc|min|max|clamp)\(.+\)/g, (K) => {
      let R = "";
      function Pe() {
        let ne = R.trimEnd();
        return ne[ne.length - 1];
      }
      for (let ne = 0; ne < K.length; ne++) {
        let $e = function(oe) {
          return oe.split("").every((ce, ke) => K[ne + ke] === ce);
        }, Qe = function(oe) {
          let ce = 1 / 0;
          for (let Ut of oe) {
            let Ae = K.indexOf(Ut, ne);
            Ae !== -1 && Ae < ce && (ce = Ae);
          }
          let ke = K.slice(ne, ce);
          return ne += ke.length - 1, ke;
        }, Ke = K[ne];
        if ($e("var"))
          R += Qe([
            ")",
            ","
          ]);
        else if (A.some((oe) => $e(oe))) {
          let oe = A.find((ce) => $e(ce));
          R += oe, ne += oe.length - 1;
        } else
          M.some((oe) => $e(oe)) ? R += Qe([
            ")"
          ]) : [
            "+",
            "-",
            "*",
            "/"
          ].includes(Ke) && ![
            "(",
            "+",
            "-",
            "*",
            "/",
            ","
          ].includes(Pe()) ? R += ` ${Ke} ` : R += Ke;
      }
      return R.replace(/\s+/g, " ");
    });
  }
  function c(p) {
    return p.startsWith("url(");
  }
  function h(p) {
    return !isNaN(Number(p)) || r(p);
  }
  function m(p) {
    return p.endsWith("%") && h(p.slice(0, -1)) || r(p);
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
  function P(p) {
    return p === "0" || new RegExp(`^[+-]?[0-9]*.?[0-9]+(?:[eE][+-]?[0-9]+)?${y}$`).test(p) || r(p);
  }
  let D = /* @__PURE__ */ new Set([
    "thin",
    "medium",
    "thick"
  ]);
  function q(p) {
    return D.has(p);
  }
  function W(p) {
    let M = (0, o.parseBoxShadowValue)(d(p));
    for (let A of M)
      if (!A.valid)
        return !1;
    return !0;
  }
  function N(p) {
    let M = 0;
    return (0, a.splitAtTopLevelOnly)(p, "_").every((K) => (K = d(K), K.startsWith("var(") ? !0 : (0, n.parseColor)(K, {
      loose: !0
    }) !== null ? (M++, !0) : !1)) ? M > 0 : !1;
  }
  function H(p) {
    let M = 0;
    return (0, a.splitAtTopLevelOnly)(p, ",").every((K) => (K = d(K), K.startsWith("var(") ? !0 : c(K) || Z(K) || [
      "element(",
      "image(",
      "cross-fade(",
      "image-set("
    ].some((R) => K.startsWith(R)) ? (M++, !0) : !1)) ? M > 0 : !1;
  }
  let G = /* @__PURE__ */ new Set([
    "conic-gradient",
    "linear-gradient",
    "radial-gradient",
    "repeating-conic-gradient",
    "repeating-linear-gradient",
    "repeating-radial-gradient"
  ]);
  function Z(p) {
    p = d(p);
    for (let M of G)
      if (p.startsWith(`${M}(`))
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
  function re(p) {
    let M = 0;
    return (0, a.splitAtTopLevelOnly)(p, "_").every((K) => (K = d(K), K.startsWith("var(") ? !0 : le.has(K) || P(K) || m(K) ? (M++, !0) : !1)) ? M > 0 : !1;
  }
  function b(p) {
    let M = 0;
    return (0, a.splitAtTopLevelOnly)(p, ",").every((K) => (K = d(K), K.startsWith("var(") ? !0 : K.includes(" ") && !/(['"])([^"']+)\1/g.test(K) || /^\d/g.test(K) ? !1 : (M++, !0))) ? M > 0 : !1;
  }
  let O = /* @__PURE__ */ new Set([
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
  function T(p) {
    return O.has(p);
  }
  let g = /* @__PURE__ */ new Set([
    "xx-small",
    "x-small",
    "small",
    "medium",
    "large",
    "x-large",
    "x-large",
    "xxx-large"
  ]);
  function v(p) {
    return g.has(p);
  }
  let w = /* @__PURE__ */ new Set([
    "larger",
    "smaller"
  ]);
  function _(p) {
    return w.has(p);
  }
})(Re);
var Tt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "backgroundSize", {
    enumerable: !0,
    get: function() {
      return o;
    }
  });
  const t = Re, n = je;
  function o(a) {
    let s = [
      "cover",
      "contain"
    ];
    return (0, n.splitAtTopLevelOnly)(a, ",").every((r) => {
      let l = (0, n.splitAtTopLevelOnly)(r, "_").filter(Boolean);
      return l.length === 1 && s.includes(l[0]) ? !0 : l.length !== 1 && l.length !== 2 ? !1 : l.every((d) => (0, t.length)(d) || (0, t.percentage)(d) || d === "auto");
    });
  }
})(Tt);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(b, O) {
    for (var T in O)
      Object.defineProperty(b, T, {
        enumerable: !0,
        get: O[T]
      });
  }
  t(e, {
    updateAllClasses: function() {
      return i;
    },
    asValue: function() {
      return m;
    },
    parseColorFormat: function() {
      return P;
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
  const n = /* @__PURE__ */ d(wt), o = Ne, a = Re, s = /* @__PURE__ */ d(Fe), r = Tt, l = Me;
  function d(b) {
    return b && b.__esModule ? b : {
      default: b
    };
  }
  function i(b, O) {
    b.walkClasses((T) => {
      T.value = O(T.value), T.raws && T.raws.value && (T.raws.value = (0, n.default)(T.raws.value));
    });
  }
  function c(b, O) {
    if (!k(b))
      return;
    let T = b.slice(1, -1);
    if (O(T))
      return (0, a.normalize)(T);
  }
  function h(b, O = {}, T) {
    let g = O[b];
    if (g !== void 0)
      return (0, s.default)(g);
    if (k(b)) {
      let v = c(b, T);
      return v === void 0 ? void 0 : (0, s.default)(v);
    }
  }
  function m(b, O = {}, { validate: T = () => !0 } = {}) {
    var g;
    let v = (g = O.values) === null || g === void 0 ? void 0 : g[b];
    return v !== void 0 ? v : O.supportsNegativeValues && b.startsWith("-") ? h(b.slice(1), O.values, T) : c(b, T);
  }
  function k(b) {
    return b.startsWith("[") && b.endsWith("]");
  }
  function y(b) {
    let O = b.lastIndexOf("/"), T = b.lastIndexOf("[", O), g = b.indexOf("]", O);
    return b[O - 1] === "]" || b[O + 1] === "[" || T !== -1 && g !== -1 && T < O && O < g && (O = b.lastIndexOf("/", T)), O === -1 || O === b.length - 1 ? [
      b,
      void 0
    ] : k(b) && !b.includes("]/[") ? [
      b,
      void 0
    ] : [
      b.slice(0, O),
      b.slice(O + 1)
    ];
  }
  function P(b) {
    if (typeof b == "string" && b.includes("<alpha-value>")) {
      let O = b;
      return ({ opacityValue: T = 1 }) => O.replace("<alpha-value>", T);
    }
    return b;
  }
  function D(b) {
    return (0, a.normalize)(b.slice(1, -1));
  }
  function q(b, O = {}, { tailwindConfig: T = {} } = {}) {
    var g;
    if (((g = O.values) === null || g === void 0 ? void 0 : g[b]) !== void 0) {
      var v;
      return P((v = O.values) === null || v === void 0 ? void 0 : v[b]);
    }
    let [w, _] = y(b);
    if (_ !== void 0) {
      var p, M, A, K;
      let R = (K = (p = O.values) === null || p === void 0 ? void 0 : p[w]) !== null && K !== void 0 ? K : k(w) ? w.slice(1, -1) : void 0;
      return R === void 0 ? void 0 : (R = P(R), k(_) ? (0, o.withAlphaValue)(R, D(_)) : ((M = T.theme) === null || M === void 0 || (A = M.opacity) === null || A === void 0 ? void 0 : A[_]) === void 0 ? void 0 : (0, o.withAlphaValue)(R, T.theme.opacity[_]));
    }
    return m(b, O, {
      validate: a.color
    });
  }
  function W(b, O = {}) {
    var T;
    return (T = O.values) === null || T === void 0 ? void 0 : T[b];
  }
  function N(b) {
    return (O, T) => m(O, T, {
      validate: b
    });
  }
  let H = {
    any: m,
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
  function Z(b, O) {
    let T = b.indexOf(O);
    return T === -1 ? [
      void 0,
      b
    ] : [
      b.slice(0, T),
      b.slice(T + 1)
    ];
  }
  function le(b, O, T, g) {
    if (T.values && O in T.values)
      for (let { type: w } of b ?? []) {
        let _ = H[w](O, T, {
          tailwindConfig: g
        });
        if (_ !== void 0)
          return [
            _,
            w,
            null
          ];
      }
    if (k(O)) {
      let w = O.slice(1, -1), [_, p] = Z(w, ":");
      if (!/^[\w-_]+$/g.test(_))
        p = w;
      else if (_ !== void 0 && !G.includes(_))
        return [];
      if (p.length > 0 && G.includes(_))
        return [
          m(`[${p}]`, T),
          _,
          null
        ];
    }
    let v = re(b, O, T, g);
    for (let w of v)
      return w;
    return [];
  }
  function* re(b, O, T, g) {
    let v = (0, l.flagEnabled)(g, "generalizedModifiers"), [w, _] = y(O);
    if (v && T.modifiers != null && (T.modifiers === "any" || typeof T.modifiers == "object" && (_ && k(_) || _ in T.modifiers)) || (w = O, _ = void 0), _ !== void 0 && w === "" && (w = "DEFAULT"), _ !== void 0 && typeof T.modifiers == "object") {
      var M, A;
      let K = (A = (M = T.modifiers) === null || M === void 0 ? void 0 : M[_]) !== null && A !== void 0 ? A : null;
      K !== null ? _ = K : k(_) && (_ = D(_));
    }
    for (let { type: K } of b ?? []) {
      let R = H[K](w, T, {
        tailwindConfig: g
      });
      R !== void 0 && (yield [
        R,
        K,
        _ ?? null
      ]);
    }
  }
})(kt);
var xt = {};
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
})(xt);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return T;
    }
  });
  const t = /* @__PURE__ */ k(Fe), n = /* @__PURE__ */ k(ft), o = /* @__PURE__ */ k(pt), a = /* @__PURE__ */ k(mt), s = bt, r = _t, l = yt, d = /* @__PURE__ */ k(vt), i = $t, c = kt, h = Ne, m = /* @__PURE__ */ k(xt);
  function k(g) {
    return g && g.__esModule ? g : {
      default: g
    };
  }
  function y(g) {
    return typeof g == "function";
  }
  function P(g, ...v) {
    let w = v.pop();
    for (let _ of v)
      for (let p in _) {
        let M = w(g[p], _[p]);
        M === void 0 ? (0, d.default)(g[p]) && (0, d.default)(_[p]) ? g[p] = P({}, g[p], _[p], w) : g[p] = _[p] : g[p] = M;
      }
    return g;
  }
  const D = {
    colors: a.default,
    negative(g) {
      return Object.keys(g).filter((v) => g[v] !== "0").reduce((v, w) => {
        let _ = (0, t.default)(g[w]);
        return _ !== void 0 && (v[`-${w}`] = _), v;
      }, {});
    },
    breakpoints(g) {
      return Object.keys(g).filter((v) => typeof g[v] == "string").reduce((v, w) => ({
        ...v,
        [`screen-${w}`]: g[w]
      }), {});
    }
  };
  function q(g, ...v) {
    return y(g) ? g(...v) : g;
  }
  function W(g) {
    return g.reduce((v, { extend: w }) => P(v, w, (_, p) => _ === void 0 ? [
      p
    ] : Array.isArray(_) ? [
      p,
      ..._
    ] : [
      p,
      _
    ]), {});
  }
  function N(g) {
    return {
      ...g.reduce((v, w) => (0, s.defaults)(v, w), {}),
      // In order to resolve n config objects, we combine all of their `extend` properties
      // into arrays instead of objects so they aren't overridden.
      extend: W(g)
    };
  }
  function H(g, v) {
    if (Array.isArray(g) && (0, d.default)(g[0]))
      return g.concat(v);
    if (Array.isArray(v) && (0, d.default)(v[0]) && (0, d.default)(g))
      return [
        g,
        ...v
      ];
    if (Array.isArray(v))
      return v;
  }
  function G({ extend: g, ...v }) {
    return P(v, g, (w, _) => !y(w) && !_.some(y) ? P({}, w, ..._, H) : (p, M) => P({}, ...[
      w,
      ..._
    ].map((A) => q(A, p, M)), H));
  }
  function* Z(g) {
    let v = (0, r.toPath)(g);
    if (v.length === 0 || (yield v, Array.isArray(g)))
      return;
    let w = /^(.*?)\s*\/\s*([^/]+)$/, _ = g.match(w);
    if (_ !== null) {
      let [, p, M] = _, A = (0, r.toPath)(p);
      A.alpha = M, yield A;
    }
  }
  function le(g) {
    const v = (w, _) => {
      for (const p of Z(w)) {
        let M = 0, A = g;
        for (; A != null && M < p.length; )
          A = A[p[M++]], A = y(A) && (p.alpha === void 0 || M <= p.length - 1) ? A(v, D) : A;
        if (A !== void 0) {
          if (p.alpha !== void 0) {
            let K = (0, c.parseColorFormat)(A);
            return (0, h.withAlphaValue)(K, p.alpha, (0, m.default)(K));
          }
          return (0, d.default)(A) ? (0, i.cloneDeep)(A) : A;
        }
      }
      return _;
    };
    return Object.assign(v, {
      theme: v,
      ...D
    }), Object.keys(g).reduce((w, _) => (w[_] = y(g[_]) ? g[_](v, D) : g[_], w), {});
  }
  function re(g) {
    let v = [];
    return g.forEach((w) => {
      v = [
        ...v,
        w
      ];
      var _;
      const p = (_ = w == null ? void 0 : w.plugins) !== null && _ !== void 0 ? _ : [];
      p.length !== 0 && p.forEach((M) => {
        M.__isOptionsFunction && (M = M());
        var A;
        v = [
          ...v,
          ...re([
            (A = M == null ? void 0 : M.config) !== null && A !== void 0 ? A : {}
          ])
        ];
      });
    }), v;
  }
  function b(g) {
    return [
      ...g
    ].reduceRight((w, _) => y(_) ? _({
      corePlugins: w
    }) : (0, o.default)(_, w), n.default);
  }
  function O(g) {
    return [
      ...g
    ].reduceRight((w, _) => [
      ...w,
      ..._
    ], []);
  }
  function T(g) {
    let v = [
      ...re(g),
      {
        prefix: "",
        important: !1,
        separator: ":"
      }
    ];
    var w, _;
    return (0, l.normalizeConfig)((0, s.defaults)({
      theme: le(G(N(v.map((p) => (w = p == null ? void 0 : p.theme) !== null && w !== void 0 ? w : {})))),
      corePlugins: b(v.map((p) => p.corePlugins)),
      plugins: O(g.map((p) => (_ = p == null ? void 0 : p.plugins) !== null && _ !== void 0 ? _ : []))
    }, ...v));
  }
})(ct);
var Ct = {}, Un = {
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
  const t = /* @__PURE__ */ o(Un), n = Me;
  function o(s) {
    return s && s.__esModule ? s : {
      default: s
    };
  }
  function a(s) {
    var r;
    const l = ((r = s == null ? void 0 : s.presets) !== null && r !== void 0 ? r : [
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
    }, i = Object.keys(d).filter((c) => (0, n.flagEnabled)(s, c)).map((c) => d[c]);
    return [
      s,
      ...i,
      ...l
    ];
  }
})(Ct);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return a;
    }
  });
  const t = /* @__PURE__ */ o(ct), n = /* @__PURE__ */ o(Ct);
  function o(s) {
    return s && s.__esModule ? s : {
      default: s
    };
  }
  function a(...s) {
    let [, ...r] = (0, n.default)(s[0]);
    return (0, t.default)([
      ...s,
      ...r
    ]);
  }
})(dt);
let Le = dt;
var Nn = (Le.__esModule ? Le : { default: Le }).default;
const En = /* @__PURE__ */ Fn(Nn), Rn = {
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
}, qn = En(Rn);
function Wn(e) {
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
const Hn = S({
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
      const t = V(qn, ["theme", "colors"]), n = V(t, e);
      return typeof n == "string" ? n : e;
    },
    fontColorForBackgroundColor(e) {
      const t = Wn(e);
      return t.alpha * 255 < 150 || Math.round(
        (t.red * 299 + t.green * 587 + t.blue * 114) / 1e3
      ) > 125 ? "#000" : "#fff";
    }
  }
}), Gn = S({
  mixins: [Hn]
}), Qn = { class: "flex-grow" };
function Yn(e, t, n, o, a, s) {
  return u(), f("div", {
    class: "k-alert",
    style: se([e.colorableBackgroundStyle, e.colorableTextStyleForBackground])
  }, [
    $("div", Qn, [
      U(e.$slots, "default")
    ])
  ], 4);
}
const Xn = /* @__PURE__ */ x(Gn, [["render", Yn]]), Jn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xn
}, Symbol.toStringTag, { value: "Module" })), Zn = {}, er = { class: "k-app" };
function tr(e, t) {
  const n = C("KSnackbar"), o = C("KConfirm");
  return u(), f("div", er, [
    I(o, null, {
      default: j(() => [
        I(n, null, {
          default: j(() => [
            U(e.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    })
  ]);
}
const nr = /* @__PURE__ */ x(Zn, [["render", tr]]), rr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nr
}, Symbol.toStringTag, { value: "Module" })), or = S({
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
}), sr = { class: "k-autocomplete-input" }, ir = ["placeholder", "readonly"], ar = {
  key: 0,
  class: "k-autocomplete-items"
}, lr = ["onClick"];
function ur(e, t, n, o, a, s) {
  const r = ze("click-away");
  return ie((u(), f("div", {
    class: "k-autocomplete",
    style: se([e.style])
  }, [
    U(e.$slots, "prepend", { item: e.valueLocal }),
    $("div", sr, [
      ie($("input", {
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = (l) => e.inputText = l),
        class: ee(["k-input", { invalidSelection: !e.isValidSelection }]),
        type: "search",
        autocomplete: "off",
        placeholder: e.placeholderText,
        readonly: !e.editable,
        onSearch: t[1] || (t[1] = (...l) => e.clearInput && e.clearInput(...l)),
        onKeydown: [
          t[2] || (t[2] = ye(ue((l) => e.currentFocus = Math.max(-1, e.currentFocus - 1), ["prevent"]), ["arrow-up"])),
          t[3] || (t[3] = ye(ue((l) => e.currentFocus = Math.min(e.items.length - 1, e.currentFocus + 1), ["prevent"]), ["arrow-down"])),
          t[4] || (t[4] = ye(ue((l) => e.select(e.currentFocus), ["prevent"]), ["enter"])),
          t[6] || (t[6] = ye((...l) => e.setBlur && e.setBlur(...l), ["tab"]))
        ],
        onFocus: t[5] || (t[5] = (...l) => e.setFocus && e.setFocus(...l)),
        onKeyup: t[7] || (t[7] = (...l) => e.keyup && e.keyup(...l))
      }, null, 42, ir), [
        [Ve, e.inputText]
      ]),
      e.focus && e.items.length && e.inputText ? (u(), f("div", ar, [
        (u(!0), f(F, null, Q(e.itemsFiltered, (l, d) => (u(), f("div", {
          key: d,
          class: ee(["k-autocomplete-item", { "k-autocomplete-active": e.currentFocus == d }]),
          onClick: (i) => e.select(d)
        }, [
          U(e.$slots, "item", { item: l }, () => [
            X(B(l), 1)
          ])
        ], 10, lr))), 128))
      ])) : L("", !0)
    ])
  ], 4)), [
    [r, e.setBlur]
  ]);
}
const dr = /* @__PURE__ */ x(or, [["render", ur]]), cr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dr
}, Symbol.toStringTag, { value: "Module" }));
function J(e, t) {
  const n = it(e, t);
  if (!n)
    throw new Error(`Could not resolve ${e.description}`);
  return n;
}
const ae = Symbol("session"), me = Symbol("config"), Mt = Symbol("snackbar"), jt = Symbol(
  "dateTimeFormatterKey"
), Pt = Symbol("confirmDialogKey"), ge = new Te();
function fr(e) {
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
}
class pr {
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
    }), clearInterval(this.intervalId), this.queueItems.length < 30 ? this.intervalId = setTimeout(this.processQueue.bind(this), 50) : this.processQueue();
  }
  async processQueue() {
    const t = this.session.rpcClient("/api/v1/rh/rpc/node/"), n = this.queueItems;
    this.resetQueue();
    const o = n.map((s) => s.dataId), a = await t.request("NodesLookup", {
      dataids: o
    });
    n.forEach((s) => {
      const r = s.dataId, l = s.resolveFunc, d = a.find((i) => i.dataId === r);
      l(d ?? null);
    });
  }
}
class mr {
  constructor() {
    te(this, "nodes");
    te(this, "nodeLookupQueue");
    this.nodes = {}, this.nodeLookupQueue = new pr();
  }
  async lookupLegacy(t, n) {
    if (n)
      try {
        if (await ge.acquire(n), this.nodes.hasOwnProperty(n))
          return this.nodes[n];
        {
          const o = await t.nodes.node({ dataid: n }), a = fr(o.data);
          return this.nodes[n] = a, a;
        }
      } catch {
        return this.nodes[n] = null, null;
      } finally {
        ge.release(n);
      }
  }
  async lookupRPC(t, n) {
    return n ? (await ge.acquire(n), this.nodes.hasOwnProperty(n) ? (ge.release(n), this.nodes[n]) : new Promise((o, a) => {
      const s = (r) => {
        r instanceof Error ? a(r) : (this.nodes[n] = r, o(r)), ge.release(n);
      };
      this.nodeLookupQueue.queue(t, s, n);
    })) : null;
  }
  async lookup(t, n, o = !1) {
    return o ? this.lookupLegacy(t, n) : this.lookupRPC(t, n);
  }
}
const Kt = new mr(), hr = S({
  setup() {
    return {
      session: J(ae)
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
      loading: !1
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
        if (e)
          try {
            this.loading = !0, this.nodeRecLocal = await Kt.lookup(
              this.session,
              e,
              this.legacy
            );
          } finally {
            this.loading = !1;
          }
      },
      immediate: !0
    }
  }
}), gr = { class: "flex items-center gap-2" }, br = {
  key: 0,
  class: "h-3 w-36 bg-slate-200 rounded animate-pulse"
}, _r = { class: "flex items-center gap-2" }, yr = ["src"], vr = ["href"], $r = ["innerHTML"];
function kr(e, t, n, o, a, s) {
  const r = C("KFunctionMenuModern"), l = C("KFunctionMenu");
  return u(), f("div", gr, [
    e.loading ? (u(), f("div", br)) : e.nodeRecResolved ? (u(), f(F, { key: 1 }, [
      $("div", _r, [
        e.image ? (u(), f("img", {
          key: 0,
          src: e.nodeRecResolved.gif,
          width: "16",
          height: "16"
        }, null, 8, yr)) : L("", !0),
        $("a", {
          href: e.nodeRecResolved.url
        }, B(e.nodeRecResolved.name), 9, vr)
      ]),
      e.clickable ? (u(), f(F, { key: 0 }, [
        e.modernMenu ? (u(), z(r, {
          key: 0,
          dataid: e.nodeRecResolved.dataId
        }, null, 8, ["dataid"])) : (u(), z(l, {
          key: 1,
          dataid: e.nodeRecResolved.dataId
        }, null, 8, ["dataid"]))
      ], 64)) : L("", !0),
      $("div", {
        class: "flex items-center",
        innerHTML: e.nodeRecResolved.modifiedImageCallback
      }, null, 8, $r)
    ], 64)) : L("", !0)
  ]);
}
const wr = /* @__PURE__ */ x(hr, [["render", kr]]), Sr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: wr
}, Symbol.toStringTag, { value: "Module" })), Or = S({
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
}), Tr = ["disabled"];
function xr(e, t, n, o, a, s) {
  return u(), f("button", pe({
    class: ["k-button", e.classObj],
    disabled: e.disabled,
    type: "button"
  }, e.$attrs, {
    onClick: t[0] || (t[0] = (r) => e.$emit("click"))
  }), [
    U(e.$slots, "default")
  ], 16, Tr);
}
const Cr = /* @__PURE__ */ x(Or, [["render", xr]]), Mr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Cr
}, Symbol.toStringTag, { value: "Module" })), jr = S({
  provide() {
    return {
      // @ts-ignore - not sure why this complains
      [Pt]: this
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
function Pr(e, t, n, o, a, s) {
  const r = C("KCardTitle"), l = C("KCardText"), d = C("KSpacer"), i = C("KButton"), c = C("KCardActions"), h = C("KCard"), m = C("KDialog");
  return u(), f(F, null, [
    U(e.$slots, "default"),
    I(m, {
      modelValue: e.dialog,
      "onUpdate:modelValue": t[2] || (t[2] = (k) => e.dialog = k),
      "max-width": "30vw",
      "min-width": "20vw",
      "z-index": 50
    }, {
      default: j(() => [
        I(h, null, {
          default: j(() => [
            e.title ? (u(), z(r, { key: 0 }, {
              default: j(() => [
                X(B(e.title), 1)
              ]),
              _: 1
            })) : L("", !0),
            e.message ? (u(), z(l, { key: 1 }, {
              default: j(() => [
                X(B(e.message), 1)
              ]),
              _: 1
            })) : L("", !0),
            I(c, null, {
              default: j(() => [
                I(d),
                e.noLabel ? (u(), z(i, {
                  key: 0,
                  small: "",
                  onClick: t[0] || (t[0] = (k) => e.dismiss(!1))
                }, {
                  default: j(() => [
                    X(B(e.noLabel), 1)
                  ]),
                  _: 1
                })) : L("", !0),
                e.yesLabel ? (u(), z(i, {
                  key: 1,
                  small: "",
                  onClick: t[1] || (t[1] = (k) => e.dismiss(!0))
                }, {
                  default: j(() => [
                    X(B(e.yesLabel), 1)
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
const Kr = /* @__PURE__ */ x(jr, [["render", Pr]]), Ar = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Kr
}, Symbol.toStringTag, { value: "Module" })), Lr = S({
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
      return t ? this.time ? Xe(t, "yyyy-MM-dd'T'HH:mm:ss") : Xe(t, "yyyy-MM-dd") : null;
    }
  }
}), zr = { class: "k-date-time-picker" }, Vr = ["type", "readonly"];
function Ir(e, t, n, o, a, s) {
  const r = C("KButton");
  return u(), f("div", zr, [
    ie($("input", {
      "onUpdate:modelValue": t[0] || (t[0] = (l) => e.localModelValue = l),
      class: "k-input",
      type: e.type,
      readonly: !e.editable
    }, null, 8, Vr), [
      [Rt, e.localModelValue]
    ]),
    e.editable ? (u(), f(F, { key: 0 }, [
      I(r, {
        small: "",
        onClick: e.setToNow
      }, {
        default: j(() => [
          X(" Now ")
        ]),
        _: 1
      }, 8, ["onClick"]),
      I(r, {
        small: "",
        onClick: t[1] || (t[1] = (l) => e.$emit("update:modelValue", null))
      }, {
        default: j(() => [
          X(" Clear ")
        ]),
        _: 1
      })
    ], 64)) : L("", !0)
  ]);
}
const Br = /* @__PURE__ */ x(Lr, [["render", Ir]]), Dr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Br
}, Symbol.toStringTag, { value: "Module" })), Fr = S({
  directives: {
    ClickAway: Be
  },
  mixins: [xe],
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
      this.$emit("update:modelValue", e), e ? (await this.$nextTick(), Yt(this.$refs.content)) : Xt(this.$refs.content);
    }
  },
  mounted() {
    this.mounted = !0, Je("esc", () => {
      this.persistent || (this.dialog = !1);
    });
  },
  beforeUnmount() {
    Je.unbind("esc");
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
function Ur(e, t, n, o, a, s) {
  const r = ze("click-away");
  return u(), f(F, null, [
    U(e.$slots, "activator", { on: e.on }),
    e.mounted ? (u(), z(at, {
      key: 0,
      to: ".k-app"
    }, [
      I(Oe, { name: "fade" }, {
        default: j(() => [
          e.dialog ? (u(), f("div", {
            key: 0,
            class: "k-dialog",
            style: se([e.style])
          }, [
            ie((u(), f("div", {
              ref: "content",
              class: ee(["k-dialog-content", e.classObj]),
              style: se([e.measurableStyles])
            }, [
              U(e.$slots, "default", { on: e.on })
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
const Nr = /* @__PURE__ */ x(Fr, [["render", Ur]]), Er = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Nr
}, Symbol.toStringTag, { value: "Module" })), Rr = {}, qr = { class: "k-divider" };
function Wr(e, t) {
  return u(), f("div", qr);
}
const qe = /* @__PURE__ */ x(Rr, [["render", Wr]]), Hr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qe
}, Symbol.toStringTag, { value: "Module" })), Gr = S({
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
function Qr(e, t, n, o, a, s) {
  return u(), f("div", {
    class: "k-dot",
    style: se([e.style])
  }, [
    U(e.$slots, "default")
  ], 4);
}
const Yr = /* @__PURE__ */ x(Gr, [["render", Qr]]), Xr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Yr
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
}), Jr = {
  mixins: [de]
}, Zr = {
  key: 0,
  class: "k-form-field-label"
};
function eo(e, t, n, o, a, s) {
  return u(), f("div", null, [
    e.label ? (u(), f("div", Zr, B(e.label), 1)) : L("", !0),
    U(e.$slots, "default"),
    (u(!0), f(F, null, Q(e.successMessages, (r, l) => (u(), f("div", {
      key: l,
      class: "k-formfield--success"
    }, B(r), 1))), 128)),
    (u(!0), f(F, null, Q(e.errorMessages, (r, l) => (u(), f("div", {
      key: l,
      class: "k-formfield--error"
    }, B(r), 1))), 128))
  ]);
}
const to = /* @__PURE__ */ x(Jr, [["render", eo]]), no = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: to,
  mixin: de
}, Symbol.toStringTag, { value: "Module" })), ro = S({
  setup() {
    return { config: J(me) };
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
}), oo = { key: 0 }, so = ["id"], io = ["src"], ao = ["id", "src"];
function lo(e, t, n, o, a, s) {
  return e.dataid ? (u(), f("span", oo, [
    $("a", {
      id: e.aid,
      href: "#",
      class: "functionMenuHotspot",
      onClick: t[2] || (t[2] = ue((...r) => e.onclick && e.onclick(...r), ["prevent"]))
    }, [
      e.isModernFunctionMenu ? (u(), f("img", {
        key: 0,
        src: `${e.config.img}spacer.gif`,
        alt: "Functions"
      }, null, 8, io)) : (u(), f("img", {
        key: 1,
        id: e.xid,
        src: e.image,
        border: "0",
        alt: "Functions",
        title: "Functions",
        onMouseover: t[0] || (t[0] = (...r) => e.onmouseover && e.onmouseover(...r)),
        onMouseout: t[1] || (t[1] = (...r) => e.onmouseout && e.onmouseout(...r))
      }, null, 40, ao))
    ], 8, so),
    t[3] || (Ye(-1), t[3] = $("div", {
      id: e.zid,
      ref: "functionMenuDiv",
      class: "functionMenuDiv"
    }, null, 8, ["id"]), Ye(1), t[3])
  ])) : L("", !0);
}
const uo = /* @__PURE__ */ x(ro, [["render", lo]]), co = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: uo
}, Symbol.toStringTag, { value: "Module" })), fo = S({}), po = { class: "k-list-item-title" };
function mo(e, t, n, o, a, s) {
  return u(), f("div", po, [
    U(e.$slots, "default")
  ]);
}
const At = /* @__PURE__ */ x(fo, [["render", mo]]), ho = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: At
}, Symbol.toStringTag, { value: "Module" })), go = S({}), bo = { class: "k-list-item-subtitle" };
function _o(e, t, n, o, a, s) {
  return u(), f("div", bo, [
    U(e.$slots, "default")
  ]);
}
const Lt = /* @__PURE__ */ x(go, [["render", _o]]), yo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Lt
}, Symbol.toStringTag, { value: "Module" })), vo = S({
  mixins: [ut],
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
    const { tag: e, data: t } = this.generateRouteLink(), n = this.title ? fe(At, {}, { default: () => [this.title] }) : null, o = this.subtitle ? fe(Lt, {}, { default: () => [this.subtitle] }) : null, a = n || o ? [n, o].filter((i) => !!i) : this.$slots.default ? this.$slots.default() : null, s = fe(
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
      [r, s, l].filter((i) => !!i)
    );
  }
}), We = /* @__PURE__ */ x(vo, [["__scopeId", "data-v-f06ea25f"]]), $o = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: We
}, Symbol.toStringTag, { value: "Module" })), et = new Te(), ko = S({
  components: { KMenuDownIcon: De, KListItem: We, KDivider: qe },
  setup() {
    return { session: Ft() };
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
        if (await et.acquire(this.dataid), this.actions.length === 0) {
          this.loading = !0;
          const { data: e } = await this.session.get(
            `/api/v1/nodes/${this.dataid}/actions`
          );
          this.actions = e.actions;
        }
      } finally {
        this.loading = !1, et.release(this.dataid);
      }
    }
  }
});
function wo(e, t, n, o, a, s) {
  const r = C("KMenuDownIcon"), l = C("KDivider"), d = C("KRightCaret"), i = C("KListItem"), c = C("KList"), h = C("KMenu");
  return u(), z(h, {
    modelValue: e.visible,
    "onUpdate:modelValue": t[0] || (t[0] = (m) => e.visible = m),
    loading: e.loading
  }, {
    activator: j(({ on: m }) => [
      I(r, pe({ size: e.size }, we(m), { class: "cursor-pointer" }), null, 16, ["size"])
    ]),
    default: j(() => [
      I(c, null, {
        default: j(() => [
          (u(!0), f(F, null, Q(e.actions, (m, k) => (u(), f(F, null, [
            m.signature === "-" ? (u(), z(l, {
              key: `${k}`
            })) : m.children.length ? (u(), z(h, {
              submenu: "",
              key: `a${k}`
            }, {
              activator: j(({ on: y }) => [
                I(i, pe({
                  title: m.name
                }, we(y)), {
                  append: j(() => [
                    I(d)
                  ]),
                  _: 2
                }, 1040, ["title"])
              ]),
              default: j(() => [
                I(c, null, {
                  default: j(() => [
                    (u(!0), f(F, null, Q(m.children, (y, P) => (u(), z(i, {
                      key: `b${P}`,
                      title: y.name,
                      href: y.url
                    }, null, 8, ["title", "href"]))), 128))
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1024)) : (u(), z(i, {
              title: m.name,
              href: m.url,
              key: `c${k}`
            }, null, 8, ["title", "href"]))
          ], 64))), 256))
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["modelValue", "loading"]);
}
const So = /* @__PURE__ */ x(ko, [["render", wo]]), Oo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: So
}, Symbol.toStringTag, { value: "Module" })), To = S({
  components: { KMenuDownIcon: De, KListItem: We, KDivider: qe },
  setup() {
    return { configuration: J(me) };
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
function xo(e, t, n, o, a, s) {
  const r = C("KMenuDownIcon"), l = C("KDivider"), d = C("KRightCaret"), i = C("KListItem"), c = C("KList"), h = C("KMenu");
  return u(), z(h, {
    modelValue: e.visible,
    "onUpdate:modelValue": t[0] || (t[0] = (m) => e.visible = m),
    loading: e.loading
  }, {
    activator: j(({ on: m }) => [
      I(r, pe({ size: e.size }, we(m), { class: "cursor-pointer" }), null, 16, ["size"])
    ]),
    default: j(() => [
      I(c, null, {
        default: j(() => [
          (u(!0), f(F, null, Q(e.actions, (m, k) => (u(), f(F, null, [
            m.signature === "-" ? (u(), z(l, {
              key: `${k}`
            })) : m.children.length ? (u(), z(h, {
              submenu: "",
              key: `a${k}`
            }, {
              activator: j(({ on: y }) => [
                I(i, pe({
                  title: m.name
                }, we(y)), {
                  append: j(() => [
                    I(d)
                  ]),
                  _: 2
                }, 1040, ["title"])
              ]),
              default: j(() => [
                I(c, null, {
                  default: j(() => [
                    (u(!0), f(F, null, Q(m.children, (y, P) => (u(), z(i, {
                      key: `b${P}`,
                      title: y.name,
                      href: y.url
                    }, null, 8, ["title", "href"]))), 128))
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1024)) : (u(), z(i, {
              title: m.name,
              href: m.url,
              key: `c${k}`
            }, null, 8, ["title", "href"]))
          ], 64))), 256))
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["modelValue", "loading"]);
}
const Co = /* @__PURE__ */ x(To, [["render", xo]]), Mo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Co
}, Symbol.toStringTag, { value: "Module" })), jo = S({}), Po = { class: "k-progress-line" };
function Ko(e, t, n, o, a, s) {
  return u(), f("div", Po);
}
const Ao = /* @__PURE__ */ x(jo, [["render", Ko]]), Lo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ao
}, Symbol.toStringTag, { value: "Module" })), zo = S({}), Vo = { class: "k-list" };
function Io(e, t, n, o, a, s) {
  return u(), f("div", Vo, [
    U(e.$slots, "default")
  ]);
}
const Bo = /* @__PURE__ */ x(zo, [["render", Io]]), Do = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Bo
}, Symbol.toStringTag, { value: "Module" })), Fo = S({
  directives: {
    ClickAway: Be
  },
  setup() {
    const e = ve(null);
    return { menuItems: ve(null), menuActivator: e };
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
        ), s = Math.min(a, o);
        return {
          top: Y(
            this.menuActivatorBox.top - this.appBox.top - s
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
}), Uo = {
  key: 0,
  class: "flex items-center justify-center p-2"
};
function No(e, t, n, o, a, s) {
  const r = C("KSpinner"), l = ze("click-away");
  return u(), f("div", {
    class: "k-menu",
    onMouseenter: t[3] || (t[3] = (...d) => e.mouseEnter && e.mouseEnter(...d))
  }, [
    ie((u(), f("div", {
      ref: "menuActivator",
      onMouseleave: t[0] || (t[0] = (...d) => e.mouseLeave && e.mouseLeave(...d))
    }, [
      U(e.$slots, "activator", {
        on: { click: e.toggleMenu }
      })
    ], 32)), [
      [l, e.clickAway]
    ]),
    (u(), z(at, { to: ".k-app" }, [
      $("div", {
        onMouseenter: t[1] || (t[1] = (...d) => e.mouseEnter && e.mouseEnter(...d)),
        onMouseleave: t[2] || (t[2] = (...d) => e.mouseLeave && e.mouseLeave(...d)),
        ref: "menuItems",
        class: ee(["k-menu-items", e.dropDownMenuItemsClassObj]),
        style: se(e.styleDropDownItems)
      }, [
        e.loading ? (u(), f("div", Uo, [
          I(r)
        ])) : U(e.$slots, "default", { key: 1 })
      ], 38)
    ]))
  ], 32);
}
const Eo = /* @__PURE__ */ x(Fo, [["render", No]]), Ro = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Eo
}, Symbol.toStringTag, { value: "Module" })), qo = {}, Wo = {
  class: "w-5 h-5",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, Ho = /* @__PURE__ */ $("path", {
  "fill-rule": "evenodd",
  d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
  "clip-rule": "evenodd"
}, null, -1), Go = [
  Ho
];
function Qo(e, t) {
  return u(), f("svg", Wo, Go);
}
const Yo = /* @__PURE__ */ x(qo, [["render", Qo]]), Xo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Yo
}, Symbol.toStringTag, { value: "Module" })), Jo = S({
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
}), Zo = { class: "k-multi-widget" }, es = { class: "k-multi-buttons" }, ts = /* @__PURE__ */ $("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ $("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z" })
], -1), ns = /* @__PURE__ */ $("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ $("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" })
], -1);
function rs(e, t, n, o, a, s) {
  const r = C("KButton"), l = C("KCard");
  return u(), z(l, { class: "k-multi" }, {
    default: j(() => [
      I(Ie, {
        name: "fade",
        tag: "div"
      }, {
        default: j(() => [
          (u(!0), f(F, null, Q(e.valueLocal, (d, i) => (u(), f("div", {
            key: `k-multi-${d}`,
            class: "k-multi-item"
          }, [
            $("div", Zo, [
              U(e.$slots, "default", {
                index: i,
                value: d,
                update: (c) => e.update(i, c)
              })
            ]),
            $("div", es, [
              e.canRemove ? (u(), z(r, {
                key: 0,
                text: "",
                onClick: (c) => e.remove(i)
              }, {
                default: j(() => [
                  ts
                ]),
                _: 2
              }, 1032, ["onClick"])) : L("", !0),
              e.canAdd ? (u(), z(r, {
                key: 1,
                text: "",
                onClick: (c) => e.add(i)
              }, {
                default: j(() => [
                  ns
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
const os = /* @__PURE__ */ x(Jo, [["render", rs]]), ss = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: os
}, Symbol.toStringTag, { value: "Module" })), is = S({
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
}), as = { class: "k-multi-widget" }, ls = /* @__PURE__ */ $("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ $("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z" })
], -1);
function us(e, t, n, o, a, s) {
  const r = C("KButton"), l = C("KCard");
  return u(), z(l, { class: "k-multi" }, {
    default: j(() => [
      I(Ie, {
        name: "fade",
        tag: "div"
      }, {
        default: j(() => [
          (u(!0), f(F, null, Q(e.valueLocal, (d, i) => (u(), f("div", {
            key: `k-multi-${d}`,
            class: "k-multi-item"
          }, [
            $("div", as, [
              U(e.$slots, "readonly", {
                index: i,
                value: d
              }, () => [
                X(B(d), 1)
              ])
            ]),
            e.readonly ? L("", !0) : (u(), z(r, {
              key: 0,
              text: "",
              onClick: (c) => e.remove(i)
            }, {
              default: j(() => [
                ls
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
      }) : L("", !0)
    ]),
    _: 3
  });
}
const ds = /* @__PURE__ */ x(is, [["render", us]]), cs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ds
}, Symbol.toStringTag, { value: "Module" })), fs = /* @__PURE__ */ S({
  __name: "KMultiUserPicker",
  props: /* @__PURE__ */ qt({
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
    const t = Wt(e, "modelValue");
    return (n, o) => {
      const a = C("KUserLink"), s = C("KUserPicker"), r = C("KMulti2");
      return u(), z(r, {
        modelValue: t.value,
        "onUpdate:modelValue": o[0] || (o[0] = (l) => t.value = l),
        readonly: e.readonly
      }, {
        readonly: j(({ value: l }) => [
          I(a, {
            user: l,
            gif: "",
            legacy: e.legacy
          }, null, 8, ["user", "legacy"])
        ]),
        add: j(({ add: l }) => [
          I(s, {
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
}), ps = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fs
}, Symbol.toStringTag, { value: "Module" })), tt = new Te();
class ms {
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
      if (await tt.acquire(n), !this.nodes[n]) {
        const o = await t.nodes.ancestors(n);
        this.nodes[n] = V(o, "data.ancestors", []);
      }
      return this.nodes[n];
    } finally {
      tt.release(n);
    }
  }
}
const zt = new ms(), hs = S({
  setup() {
    return { session: J(ae) };
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
        e && (this.breadcrumb = await zt.lookup(this.session, e));
      },
      immediate: !0
    }
  }
}), gs = { class: "k-node-breadcrumb" };
function bs(e, t, n, o, a, s) {
  return u(), f("div", gs, [
    (u(!0), f(F, null, Q(e.breadcrumb, (r, l) => (u(), f(F, {
      key: r.dataid
    }, [
      X(B(r.name) + " ", 1),
      l < e.breadcrumb.length - 1 ? (u(), f(F, { key: 0 }, [
        X(" ▶ ")
      ], 64)) : L("", !0)
    ], 64))), 128))
  ]);
}
const Vt = /* @__PURE__ */ x(hs, [["render", bs]]), _s = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Vt
}, Symbol.toStringTag, { value: "Module" })), ys = S({
  mixins: [de],
  components: { KNodeAncestor: Vt },
  setup() {
    return {
      session: J(ae),
      config: J(me)
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
      return Jt(this.config.baseUrl, {
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
        this.dataid ? this.breadcrumb = await zt.lookup(
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
      return this.objid ?? parseInt(Zt.get("TargetBrowseObjID") ?? "0");
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
}), vs = { class: "k-node-picker-field" }, $s = ["value"];
function ks(e, t, n, o, a, s) {
  const r = C("KButton"), l = C("KNodeAncestor"), d = C("KFormFieldWrapper");
  return u(), z(d, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: j(() => [
      $("div", vs, [
        $("input", {
          ref: "input",
          type: "text",
          class: "k-input",
          value: e.name,
          onFocus: t[0] || (t[0] = (...i) => e.openWindow && e.openWindow(...i))
        }, null, 40, $s),
        I(r, {
          small: "",
          onClick: e.openWindow
        }, {
          default: j(() => [
            X(B(e.browseButtonLabel), 1)
          ]),
          _: 1
        }, 8, ["onClick"]),
        e.clearable ? (u(), z(r, {
          key: 0,
          small: "",
          onClick: e.clear
        }, {
          default: j(() => [
            X(B(e.clearButtonLabel), 1)
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
const ws = /* @__PURE__ */ x(ys, [["render", ks]]), Ss = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ws
}, Symbol.toStringTag, { value: "Module" })), Os = S({
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
}), Ts = { class: "k-one-moment" }, xs = { class: "k-one-moment-label" };
function Cs(e, t, n, o, a, s) {
  const r = C("KSpinner"), l = C("KDialog");
  return u(), z(l, { "model-value": e.loading }, {
    default: j(() => [
      $("div", Ts, [
        I(r, {
          height: 36,
          width: 36
        }),
        $("div", xs, B(e.label), 1)
      ])
    ]),
    _: 1
  }, 8, ["model-value"]);
}
const Ms = /* @__PURE__ */ x(Os, [["render", Cs]]), js = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ms
}, Symbol.toStringTag, { value: "Module" })), Ps = S({
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
function Ks(e, t, n, o, a, s) {
  return u(), f("div", null, [
    U(e.$slots, "default", { active: e.active })
  ]);
}
const As = /* @__PURE__ */ x(Ps, [["render", Ks]]), Ls = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: As
}, Symbol.toStringTag, { value: "Module" })), zs = S({
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
}), Vs = { class: "text-xl" }, Is = { key: 0 }, Bs = { class: "rhmuted" };
function Ds(e, t, n, o, a, s) {
  return u(), f("div", Vs, [
    X(B(e.title), 1),
    e.subtitle ? (u(), f("span", Is, [
      X(": "),
      $("span", Bs, B(e.subtitle), 1)
    ])) : L("", !0)
  ]);
}
const Fs = /* @__PURE__ */ x(zs, [["render", Ds], ["__scopeId", "data-v-c72c9204"]]), Us = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fs
}, Symbol.toStringTag, { value: "Module" })), Ns = S({
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
}), Es = { class: "k-pagination" }, Rs = {
  key: 1,
  class: "k-pagination-buttons"
}, qs = {
  key: 0,
  class: "k-pagination-button"
}, Ws = /* @__PURE__ */ $("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ $("path", { d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" })
], -1), Hs = [
  Ws
], Gs = { key: 0 }, Qs = ["onClick"], Ys = {
  key: 1,
  class: "k-pagination-button"
}, Xs = /* @__PURE__ */ $("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ $("path", { d: "M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" })
], -1), Js = [
  Xs
], Zs = { key: 2 };
function ei(e, t, n, o, a, s) {
  const r = C("KSelect");
  return u(), f("div", Es, [
    e.potentiallyMultiplePages ? (u(), z(r, {
      key: 0,
      modelValue: e.pageSize,
      "onUpdate:modelValue": t[0] || (t[0] = (l) => e.pageSize = l),
      items: e.pageSizes,
      label: "Page Size"
    }, null, 8, ["modelValue", "items"])) : L("", !0),
    e.hasPrevious || e.hasNext ? (u(), f("div", Rs, [
      e.hasPrevious ? (u(), f("a", qs, Hs)) : L("", !0),
      (u(!0), f(F, null, Q(e.pageRange, (l) => (u(), f(F, { key: l }, [
        l === "|" ? (u(), f("div", Gs, "...")) : (u(), f("a", {
          key: 1,
          class: ee(["k-pagination-button k-pagination-button-border", e.classObj(l)]),
          onClick: (d) => e.$emit("update:modelValue", l)
        }, B(l), 11, Qs))
      ], 64))), 128)),
      e.hasNext ? (u(), f("a", Ys, Js)) : L("", !0)
    ])) : L("", !0),
    e.potentiallyMultiplePages ? (u(), f("div", Zs, " Displaying " + B(e.pagination.startIndex) + "-" + B(e.pagination.endIndex) + " of " + B(e.pagination.count) + " items. ", 1)) : L("", !0)
  ]);
}
const ti = /* @__PURE__ */ x(Ns, [["render", ei]]), ni = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ti
}, Symbol.toStringTag, { value: "Module" })), ri = S({
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
      const e = [], o = Math.max(0, this.pageNumber0 - 5), a = Math.min(this.lastPageNumber0, o + 10), s = Math.max(0, a - 10);
      for (let r = s; r <= a; r++)
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
}), oi = { class: "k-pagination2" }, si = { class: "k-pagination2-buttons" }, ii = /* @__PURE__ */ $("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ $("path", { d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" })
], -1), ai = [
  ii
], li = ["onClick"], ui = /* @__PURE__ */ $("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ $("path", { d: "M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" })
], -1), di = [
  ui
];
function ci(e, t, n, o, a, s) {
  const r = C("KSelect");
  return u(), f("div", oi, [
    $("div", null, [
      I(r, {
        modelValue: e.pageSize,
        "onUpdate:modelValue": t[0] || (t[0] = (l) => e.pageSize = l),
        items: e.pageSizes,
        label: "Page Size"
      }, null, 8, ["modelValue", "items"])
    ]),
    e.pageCount > 1 ? (u(), f(F, { key: 0 }, [
      $("div", si, [
        e.hasPrevious ? (u(), f("a", {
          key: 0,
          class: "k-pagination2-arrow-button",
          onClick: t[1] || (t[1] = (l) => e.clickedPageNumber(e.pageNumber0 - 1))
        }, ai)) : L("", !0),
        (u(!0), f(F, null, Q(e.pageRange0, (l) => (u(), f("div", {
          key: l,
          class: ee(["k-pagination2-button", e.classObj(l)]),
          onClick: (d) => e.clickedPageNumber(l)
        }, B(l + 1), 11, li))), 128)),
        e.hasNext ? (u(), f("a", {
          key: 1,
          class: "k-pagination2-arrow-button",
          onClick: t[2] || (t[2] = (l) => e.clickedPageNumber(e.pageNumber0 + 1))
        }, di)) : L("", !0)
      ]),
      $("div", null, B(e.pageNumber) + " of " + B(e.pageCount) + " pages", 1)
    ], 64)) : L("", !0)
  ]);
}
const fi = /* @__PURE__ */ x(ri, [["render", ci]]), pi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fi
}, Symbol.toStringTag, { value: "Module" })), He = S({
  mixins: [xe],
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
}), nt = () => {
  lt((e) => ({
    fe06e366: e.color
  }));
}, rt = He.setup;
He.setup = rt ? (e, t) => (nt(), rt(e, t)) : nt;
const mi = /* @__PURE__ */ $("circle", {
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), hi = /* @__PURE__ */ $("path", {
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), gi = [
  mi,
  hi
];
function bi(e, t, n, o, a, s) {
  return u(), f("svg", {
    style: se(e.measurableStyles),
    class: "k-spinner",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, gi, 4);
}
const It = /* @__PURE__ */ x(He, [["render", bi]]), _i = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: It
}, Symbol.toStringTag, { value: "Module" })), yi = S({
  components: { KSpinner: It },
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
}), vi = {
  key: 0,
  class: "centerOverlay"
};
function $i(e, t, n, o, a, s) {
  const r = C("KSpinner");
  return e.loading ? (u(), f("div", vi, [
    I(r, {
      "max-width": e.size,
      "max-height": e.size
    }, null, 8, ["max-width", "max-height"])
  ])) : L("", !0);
}
const ki = /* @__PURE__ */ x(yi, [["render", $i]]), wi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ki
}, Symbol.toStringTag, { value: "Module" })), Si = S({
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
}), Oi = ["id", "value", "disabled"], Ti = ["for"];
function xi(e, t, n, o, a, s) {
  const r = C("KSpinner"), l = C("KFormFieldWrapper");
  return u(), f("div", null, [
    I(l, {
      label: e.label,
      "success-messages": e.successMessages,
      "error-messages": e.errorMessages
    }, {
      default: j(() => [
        I(Oe, {
          name: "fade",
          mode: "out-in"
        }, {
          default: j(() => [
            e.loading ? (u(), z(r, { key: 0 })) : (u(), f("div", {
              key: 1,
              class: ee(["k-radiogroup", e.classObj])
            }, [
              (u(!0), f(F, null, Q(e.items, (d) => (u(), f("div", {
                key: e.getItemValue(d),
                class: "k-radiogroup-item"
              }, [
                ie($("input", {
                  id: e.getItemValue(d),
                  "onUpdate:modelValue": t[0] || (t[0] = (i) => e.localValue = i),
                  type: "radio",
                  value: e.getItemValue(d),
                  disabled: e.getItemDisabled(d)
                }, null, 8, Oi), [
                  [Ht, e.localValue]
                ]),
                $("label", {
                  for: e.getItemValue(d)
                }, B(e.getItemText(d)), 9, Ti)
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
const Ci = /* @__PURE__ */ x(Si, [["render", xi]]), Mi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ci
}, Symbol.toStringTag, { value: "Module" })), ji = S({
  inject: ["ksnackbar"],
  methods: {
    click() {
    }
  }
});
function Pi(e, t, n, o, a, s) {
  return u(), f("div", null, [
    $("button", {
      onClick: t[0] || (t[0] = (...r) => e.click && e.click(...r))
    }, "click")
  ]);
}
const Ki = /* @__PURE__ */ x(ji, [["render", Pi]]), Ai = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ki
}, Symbol.toStringTag, { value: "Module" })), Li = S({
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
          const o = t[0], a = n[0], s = this.sortedGroupNames.indexOf(o), r = this.sortedGroupNames.indexOf(a);
          return s - r;
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
}), zi = { class: "k-select" }, Vi = ["disabled"], Ii = ["label"], Bi = ["value", "disabled"], Di = ["value", "disabled"];
function Fi(e, t, n, o, a, s) {
  const r = C("KButton"), l = C("KSpinner"), d = C("KFormFieldWrapper");
  return u(), z(d, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: j(() => [
      $("div", zi, [
        ie($("select", {
          "onUpdate:modelValue": t[0] || (t[0] = (i) => e.valueLocal = i),
          class: ee(e.classObj),
          disabled: e.disabledResolved
        }, [
          e.hasGroups ? (u(!0), f(F, { key: 0 }, Q(e.itemsGrouped, (i) => (u(), f("optgroup", {
            key: i[0],
            label: i[0]
          }, [
            (u(!0), f(F, null, Q(i[1], (c) => (u(), f("option", {
              key: e.getItemValue(c),
              value: e.getItemValue(c),
              disabled: e.getItemDisabled(c)
            }, B(e.getItemText(c)), 9, Bi))), 128))
          ], 8, Ii))), 128)) : (u(!0), f(F, { key: 1 }, Q(e.items, (i) => (u(), f("option", {
            key: e.getItemValue(i),
            value: e.getItemValue(i),
            disabled: e.getItemDisabled(i)
          }, B(e.getItemText(i)), 9, Di))), 128))
        ], 10, Vi), [
          [Gt, e.valueLocal]
        ]),
        e.clearable ? (u(), z(r, {
          key: 0,
          onClick: t[1] || (t[1] = (i) => e.valueLocal = null),
          small: ""
        }, {
          default: j(() => [
            X("clear")
          ]),
          _: 1
        })) : L("", !0),
        I(Oe, { name: "fade" }, {
          default: j(() => [
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
const Ui = /* @__PURE__ */ x(Li, [["render", Fi]]), Ni = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ui
}, Symbol.toStringTag, { value: "Module" })), Ei = S({
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
}), Ri = {
  key: 0,
  class: "k-smart-ui-panel-header"
}, qi = { class: "k-smart-ui-panel-body" }, Wi = {
  key: 1,
  class: "k-smart-ui-panel-footer"
};
function Hi(e, t, n, o, a, s) {
  return u(), f("div", {
    class: "k-smart-ui-panel",
    style: se(e.style)
  }, [
    e.$slots.header ? (u(), f("div", Ri, [
      U(e.$slots, "header")
    ])) : L("", !0),
    $("div", qi, [
      U(e.$slots, "default")
    ]),
    e.$slots.footer ? (u(), f("div", Wi, [
      U(e.$slots, "footer")
    ])) : L("", !0)
  ], 4);
}
const Gi = /* @__PURE__ */ x(Ei, [["render", Hi]]), Qi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Gi
}, Symbol.toStringTag, { value: "Module" })), Yi = S({
  provide() {
    return {
      // @ts-ignore - not sure why this complains
      [Mt]: this
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
      action: s
    }) {
      const r = this.nextIndex();
      s == null && (s = () => this.dismiss(r));
      const l = {
        title: t,
        message: n,
        timeout: o,
        actionLabel: a,
        action: s,
        type: e,
        index: r
      };
      this.nitems[r] = l, console.log(o), setInterval(() => this.dismiss(r), o);
    }
  }
}), Xi = { class: "k-snackbar" }, Ji = { class: "k-snackbar-item-message" }, Zi = {
  key: 0,
  class: "k-snackbar-title"
}, ea = {
  key: 1,
  class: "k-snackbar-text"
}, ta = {
  key: 0,
  class: "k-snackbar-action"
}, na = ["onClick"];
function ra(e, t, n, o, a, s) {
  return u(), f(F, null, [
    U(e.$slots, "default"),
    $("div", Xi, [
      I(Ie, {
        name: "slide",
        tag: "div",
        mode: "out-in"
      }, {
        default: j(() => [
          (u(!0), f(F, null, Q(e.items, (r) => (u(), f("div", {
            key: r.index,
            class: ee(["k-snackbar-item", e.classObj(r)])
          }, [
            $("div", Ji, [
              r.title ? (u(), f("div", Zi, B(r.title), 1)) : L("", !0),
              r.message ? (u(), f("div", ea, B(r.message), 1)) : L("", !0)
            ]),
            r.action ? (u(), f("div", ta, [
              $("a", {
                href: "#",
                onClick: ue((l) => e.action(r), ["prevent"])
              }, B(r.actionLabel), 9, na)
            ])) : L("", !0)
          ], 2))), 128))
        ]),
        _: 1
      })
    ])
  ], 64);
}
const oa = /* @__PURE__ */ x(Yi, [["render", ra]]), sa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: oa
}, Symbol.toStringTag, { value: "Module" })), ia = S({
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
}), aa = {
  key: 0,
  class: "j-sort-header-arrow"
}, la = {
  key: 1,
  class: "j-sort-header-arrow"
};
function ua(e, t, n, o, a, s) {
  return u(), f("a", {
    href: "#",
    onClick: t[0] || (t[0] = ue((...r) => e.emitClick && e.emitClick(...r), ["prevent"]))
  }, [
    U(e.$slots, "default"),
    I(Oe, {
      name: "fade",
      mode: "out-in"
    }, {
      default: j(() => [
        e.isActive && e.sortAsc ? (u(), f("span", aa, "↑")) : e.isActive ? (u(), f("span", la, "↓")) : L("", !0)
      ]),
      _: 1
    })
  ]);
}
const da = /* @__PURE__ */ x(ia, [["render", ua]]), ca = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: da
}, Symbol.toStringTag, { value: "Module" })), fa = {}, pa = { class: "k-spacer" };
function ma(e, t) {
  return u(), f("div", pa);
}
const ha = /* @__PURE__ */ x(fa, [["render", ma]]), ga = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ha
}, Symbol.toStringTag, { value: "Module" })), Ge = S({
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
}), ot = () => {
  lt((e) => ({
    "2f4ab6bd": e.switchWidthPx,
    "3acd298c": e.heightPx,
    "37d7127c": e.innerSizePx,
    "13e4c99c": e.paddingPx,
    "79abc333": e.transPx
  }));
}, st = Ge.setup;
Ge.setup = st ? (e, t) => (ot(), st(e, t)) : ot;
const ba = /* @__PURE__ */ $("span", { class: "k-switch-slider" }, null, -1), _a = [
  ba
];
function ya(e, t, n, o, a, s) {
  return u(), f("div", {
    class: ee(["k-switch", e.classObj]),
    onClick: t[0] || (t[0] = (...r) => e.toggle && e.toggle(...r))
  }, _a, 2);
}
const va = /* @__PURE__ */ x(Ge, [["render", ya]]), $a = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: va
}, Symbol.toStringTag, { value: "Module" })), ka = S({
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
function wa(e, t, n, o, a, s) {
  const r = C("KLinearProgressIndicator");
  return u(), f("div", null, [
    e.loading ? (u(), z(r, { key: 0 })) : L("", !0),
    $("table", {
      class: ee(["k-table", e.classObj])
    }, [
      U(e.$slots, "default")
    ], 2)
  ]);
}
const Sa = /* @__PURE__ */ x(ka, [["render", wa]]), Oa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sa
}, Symbol.toStringTag, { value: "Module" })), Ta = S({
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
        const a = n.slice(0, o), s = n.slice(o), r = `${a}	${s}`;
        this.valueLocal = r, t.value = r, t.selectionStart = o + 1, t.selectionEnd = o + 1;
      }
    }
  }
}), xa = ["rows"];
function Ca(e, t, n, o, a, s) {
  const r = C("KFormFieldWrapper");
  return u(), z(r, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: j(() => [
      ie($("textarea", pe({
        "onUpdate:modelValue": t[0] || (t[0] = (l) => e.valueLocal = l)
      }, e.$attrs, {
        spellcheck: "false",
        class: [e.classObj, "k-textarea"],
        rows: e.rows,
        onKeydown: t[1] || (t[1] = ye(ue((...l) => e.tabber && e.tabber(...l), ["prevent"]), ["tab"]))
      }), null, 16, xa), [
        [Ve, e.valueLocal]
      ])
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const Ma = /* @__PURE__ */ x(Ta, [["render", Ca]]), ja = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ma
}, Symbol.toStringTag, { value: "Module" })), Pa = S({
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
}), Ka = ["placeholder"];
function Aa(e, t, n, o, a, s) {
  const r = C("KFormFieldWrapper");
  return u(), z(r, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: j(() => [
      ie($("input", {
        "onUpdate:modelValue": t[0] || (t[0] = (l) => e.value = l),
        class: ee(["k-input-text-field", e.classObj]),
        placeholder: e.placeholder
      }, null, 10, Ka), [
        [Ve, e.value]
      ])
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const La = /* @__PURE__ */ x(Pa, [["render", Aa]]), za = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: La
}, Symbol.toStringTag, { value: "Module" })), Va = S({
  setup() {
    return {
      config: J(me),
      session: J(ae)
    };
  },
  mixins: [xe],
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
}), Ia = ["src"];
function Ba(e, t, n, o, a, s) {
  return e.url ? (u(), f("img", {
    key: 0,
    src: e.url,
    style: se([e.measurableStyles])
  }, null, 12, Ia)) : L("", !0);
}
const Da = /* @__PURE__ */ x(Va, [["render", Ba]]), Fa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Da
}, Symbol.toStringTag, { value: "Module" })), be = new Te();
function Ua(e) {
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
    userdata: null,
    photoId: null,
    photoUrl: ""
  };
}
class Na {
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
    }), clearInterval(this.intervalId), this.queueItems.length < 30 ? this.intervalId = setTimeout(this.processQueue.bind(this), 50) : this.processQueue();
  }
  async processQueue() {
    const t = this.session.rpcClient("/api/v1/rh/rpc/user/"), n = this.queueItems;
    this.resetQueue(), n.forEach((o) => {
      const a = o.userId;
      t.queue("UserLookup", { userId: a });
    });
    try {
      (await t.batch()).forEach((a, s) => {
        const r = n[s].resolveFunc;
        r(a);
      });
    } catch {
      n.forEach((o) => o.resolveFunc(null));
    }
  }
}
class Ea {
  constructor() {
    te(this, "users");
    te(this, "userLookupQueue");
    this.users = {}, this.userLookupQueue = new Na();
  }
  // registerUsers(items: Array<RHUserSerializer>) {
  //   items.forEach((user) => (this.users[user.userid] = user));
  // }
  async lookupLegacy(t, n) {
    if (n)
      try {
        if (await be.acquire(n), this.users.hasOwnProperty(n))
          return this.users[n];
        {
          const o = await t.members.member(n), a = Ua(o.data);
          return this.users[n] = a, a;
        }
      } catch {
        return this.users[n] = null, null;
      } finally {
        be.release(n);
      }
    else
      return null;
  }
  async lookupRPC(t, n) {
    return n ? (await be.acquire(n), this.users.hasOwnProperty(n) ? (be.release(n), this.users[n]) : new Promise((o, a) => {
      const s = (r) => {
        r instanceof Error ? a(r) : (this.users[n] = r, o(r), be.release(n));
      };
      this.userLookupQueue.queue(t, s, n);
    })) : null;
  }
  async lookup(t, n, o = !1) {
    return o ? this.lookupLegacy(t, n) : this.lookupRPC(t, n);
  }
}
const Se = new Ea(), Ra = S({
  setup() {
    return { session: J(ae) };
  },
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
  data() {
    return {
      userRecLocal: null
    };
  },
  computed: {
    userIdLocal() {
      return V(this.userRecLocal, "id") ?? V(this.userRecLocal, "userid");
    },
    displayName() {
      return V(this.userRecLocal, "display_name") ?? V(this.userRecLocal, "displayname") ?? V(this.userRecLocal, "name");
    },
    type() {
      return V(this.userRecLocal, "type");
    }
  },
  watch: {
    user: {
      async handler(e) {
        this.isInteger(e) ? this.userRecLocal = await Se.lookup(this.session, e, this.legacy).catch((t) => null) : this.userRecLocal = e;
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
}), qa = {
  key: 0,
  class: "k-user-link"
};
function Wa(e, t, n, o, a, s) {
  const r = C("KUserGIF");
  return u(), f(F, null, [
    $("div", null, B(e.userRecLocal), 1),
    e.userRecLocal ? (u(), f("span", qa, [
      e.gif ? (u(), z(r, {
        key: 0,
        "user-rec": e.userRecLocal
      }, null, 8, ["user-rec"])) : L("", !0),
      X("   "),
      $("a", {
        href: "#",
        onClick: t[0] || (t[0] = ue((...l) => e.click && e.click(...l), ["prevent"]))
      }, B(e.displayName), 1)
    ])) : L("", !0)
  ], 64);
}
const Ha = /* @__PURE__ */ x(Ra, [["render", Wa]]), Ga = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ha
}, Symbol.toStringTag, { value: "Module" })), Qa = S({
  mixins: [de],
  setup() {
    return { session: J(ae) };
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
          const t = this.legacy ? await Se.lookupLegacy(this.session, e).catch((n) => null) : await Se.lookup(this.session, e).catch((n) => null);
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
}), Ya = { class: "flex items-center gap-1" };
function Xa(e, t, n, o, a, s) {
  const r = C("KUserGIF"), l = C("KAutocomplete"), d = C("KUserLink"), i = C("KFormFieldWrapper");
  return u(), z(i, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: j(() => [
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
        prepend: j(({ item: c }) => [
          c ? (u(), z(r, {
            key: 0,
            type: c.type
          }, null, 8, ["type"])) : (u(), z(r, {
            key: 1,
            type: e.USER
          }, null, 8, ["type"]))
        ]),
        item: j(({ item: c }) => [
          $("div", Ya, [
            I(r, {
              type: c.type
            }, null, 8, ["type"]),
            X(" " + B(c.text), 1)
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
const Bt = /* @__PURE__ */ x(Qa, [["render", Xa]]), Ja = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Bt
}, Symbol.toStringTag, { value: "Module" })), Za = S({
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
      const e = (s) => s.type.name === "KTabItem", t = (s) => typeof s.type == "symbol", n = (s) => s.children && Array.isArray(s.children) && s.children.length && s.children.some(e), o = (s) => t(s) && n(s);
      return (this.$slots.default ? this.$slots.default() : []).filter((s) => e(s) || o(s)).flatMap((s) => o(s) ? s.children : s).map((s) => ({
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
}), el = { class: "k-tabs" }, tl = { class: "k-tabs-nav" }, nl = ["href", "onClick"], rl = { class: "k-tabs-content" };
function ol(e, t, n, o, a, s) {
  return u(), f("div", el, [
    $("div", tl, [
      (u(!0), f(F, null, Q(e.tabs, (r) => (u(), f("div", {
        key: r.name,
        class: ee(e.classObj(r))
      }, [
        $("a", {
          href: `#${r.name}`,
          onClick: (l) => e.selectTab(r.name)
        }, B(r.title), 9, nl)
      ], 2))), 128))
    ]),
    $("div", rl, [
      U(e.$slots, "default")
    ])
  ]);
}
const sl = /* @__PURE__ */ x(Za, [["render", ol]]), il = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: sl
}, Symbol.toStringTag, { value: "Module" })), al = S({
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
}), ll = { key: 0 };
function ul(e, t, n, o, a, s) {
  return e.isSelected ? (u(), f("div", ll, [
    U(e.$slots, "default")
  ])) : L("", !0);
}
const dl = /* @__PURE__ */ x(al, [["render", ul]]), cl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dl
}, Symbol.toStringTag, { value: "Module" })), fl = S({
  extends: Bt,
  setup() {
    return { session: J(ae) };
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
          ), n = V(t, "data.data.first_name"), o = V(t, "data.data.last_name"), a = V(t, "data.data.name"), s = `${n} ${o} (${a})`;
          this.items = [
            {
              text: s,
              value: V(t, "data.data.id"),
              type: V(t, "data.data.type")
            }
          ], this.select = s;
        } finally {
          this.pleaseWait = !1, this.readonly = !1, this.loading = !1;
        }
    }
  }
}), pl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fl
}, Symbol.toStringTag, { value: "Module" }));
class ml {
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
      return n ? Ze(n, this.jsShortDateFormat, {
        timezone: o
      }) : null;
    } catch {
      return null;
    }
  }
  formatDateTime(t) {
    try {
      const [n, o] = this.convertToDate(t);
      return n ? Ze(n, this.jsLongDateFormat, {
        timezone: o
      }) : null;
    } catch {
      return null;
    }
  }
}
var hl = /* @__PURE__ */ ((e) => (e[e.SUSPENDED = 6] = "SUSPENDED", e[e.SUBWORKLATE = 10] = "SUBWORKLATE", e[e.STOPPED = 8] = "STOPPED", e[e.STEPLATE = 3] = "STEPLATE", e[e.OK = 1] = "OK", e[e.MILESTONELATE = 4] = "MILESTONELATE", e[e.LATE = 5] = "LATE", e[e.HALTED = 2] = "HALTED", e[e.COMPLETED = 7] = "COMPLETED", e[e.ARCHIVED = 9] = "ARCHIVED", e))(hl || {});
const Kl = (e, t) => {
  const n = t.sortKey, a = t.sortAsc ? 1 : -1;
  return [...e].sort((s, r) => {
    if (n) {
      const l = String(V(s, n, "") ?? ""), d = String(V(r, n, "") ?? "");
      return a * l.toLowerCase().localeCompare(d.toLowerCase());
    } else
      return 0;
  });
}, Dt = () => J(me);
function _e(e) {
  return (t, n = {}) => new Promise((o) => {
    window.csui.require(
      ["csui/dialogs/modal.alert/modal.alert"],
      function(a) {
        a[e](o, t, null, n);
      }
    );
  });
}
function he(e) {
  return (t, n = {}) => new Promise((o) => {
    window.csui.require(
      ["csui/dialogs/modal.alert/modal.alert"],
      function(a) {
        a[e](o, t, null, n);
      }
    );
  });
}
function gl() {
  return !!window.csui;
}
function bl() {
  window.csui.require(
    ["csui/utils/contexts/factories/application.scope.factory"],
    function(e) {
      window._rhcore_smartui_view_context.getModel(e).set("id", "myassignments");
    }
  );
}
function _l({
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
      const s = window._rhcore_smartui_view_context;
      t ? s.getModel(a).set("metadata_info", {
        id: e,
        navigator: !0,
        selectedTab: t,
        // this works
        selectedProperty: n
      }) : s.getModel(o).set("id", e);
    }
  );
}
const yl = () => (Dt(), {
  showSuccess: _e("showSuccess"),
  showInformation: _e("showInformation"),
  showWarning: _e("showWarning"),
  showError: _e("showError"),
  showMessage: _e("showMessage"),
  confirmSuccess: he("confirmSuccess"),
  confirmInformation: he("confirmInformation"),
  confirmWarning: he("confirmWarning"),
  confirmError: he("confirmError"),
  confirmQuestion: he("confirmQuestion"),
  confirmMessage: he("confirmMessage"),
  isSmartUI: gl,
  openDataIdSmartUI: _l,
  openAssignmentsSmartUI: bl
  // openDataId: ({
  //   dataId,
  //   selectedTab,
  //   selectedProperty,
  // }: {
  //   dataId: number;
  //   selectedTab?: string;
  //   selectedProperty?: string;
  // }) => _openDataId({ baseUrl, dataId, selectedTab, selectedProperty }),
});
function Al(e, t) {
  const n = (t == null ? void 0 : t.default) ?? (() => null), o = (t == null ? void 0 : t.watch) ?? [], a = (t == null ? void 0 : t.immediate) ?? !0, s = (t == null ? void 0 : t.transform) ?? ((c) => c), r = ve(n()), l = ve(!1), d = ve(null), i = async () => {
    try {
      l.value = !0, r.value = s(await e()), d.value = null;
    } catch (c) {
      r.value = n(), d.value = c;
    } finally {
      l.value = !1;
    }
  };
  return o.map((c) => Qt(c, i)), a && i(), { data: r, pending: l, error: d, refresh: i };
}
const Ll = () => J(Mt), zl = () => J(Pt), Ft = () => {
  const e = it(ae, null);
  if (!e)
    throw new Error(
      "Failed to inject session. Make sure @kweli/cs-vue-vite-plugin is set up properly."
    );
  return e;
}, Vl = () => J(jt), Il = () => {
  const e = yl(), t = Dt(), n = Ft(), o = ({
    baseUrl: c,
    dataId: h
  }) => {
    window.location.href = `${c}/open/${h}`;
  }, a = ({
    dataId: c,
    selectedTab: h = void 0,
    selectedProperty: m = void 0
  }) => {
    e.isSmartUI() ? e.openDataIdSmartUI({ dataId: c, selectedTab: h, selectedProperty: m }) : o({ baseUrl: t.baseUrl, dataId: c });
  }, s = ({
    dataId: c,
    selectedTab: h,
    selectedProperty: m
  }) => {
    a({ dataId: c, selectedTab: h, selectedProperty: m });
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
    onClick: (m) => {
      h === "_self" && (e.openDataIdSmartUI({ dataId: c }), m.preventDefault());
    }
  } : {
    href: `${t.baseUrl}/open/${c}`,
    target: h
  }, d = (c, h) => Kt.lookup(n, c ?? null, h), i = (c, h) => Se.lookup(n, c ?? null, h);
  return {
    isSmartUI: e.isSmartUI,
    openDataId: s,
    openDataIdBind: l,
    openAssignmentsBind: r,
    nodeLookup: d,
    userLookup: i
  };
}, Bl = (e) => {
  const t = new en(e);
  return {
    install(o) {
      const a = {
        userId: e.userId,
        img: e.img,
        baseUrl: e.baseUrl,
        jsLongDateFormat: e.datelong,
        jsShortDateFormat: e.dateshort
      };
      o.provide(ae, t), o.provide(me, a), o.provide(
        jt,
        new ml(e.datelong, e.dateshort)
      );
    }
  };
}, Dl = () => {
  const e = (n) => {
    Object.entries(/* @__PURE__ */ Object.assign({
      "./components/Card/KCard.vue": nn,
      "./components/Card/KCardActions.vue": ln,
      "./components/Card/KCardText.vue": pn,
      "./components/Card/KCardTitle.vue": _n,
      "./components/Icons/KMenuDownIcon.vue": On,
      "./components/Icons/KSubtractIcon.vue": Kn,
      "./components/KAdminLink.vue": Dn,
      "./components/KAlert.vue": Jn,
      "./components/KApp.vue": rr,
      "./components/KAutocomplete.vue": cr,
      "./components/KBrowseLink.vue": Sr,
      "./components/KButton.vue": Mr,
      "./components/KConfirm.vue": Ar,
      "./components/KDateTimePicker.vue": Dr,
      "./components/KDialog.vue": Er,
      "./components/KDivider.vue": Hr,
      "./components/KDot.vue": Xr,
      "./components/KFormFieldWrapper.vue": no,
      "./components/KFunctionMenu.vue": co,
      "./components/KFunctionMenuModern.vue": Oo,
      "./components/KFunctionMenuSmartUI.vue": Mo,
      "./components/KLinearProgressIndicator.vue": Lo,
      "./components/KList/KList.vue": Do,
      "./components/KList/KListItem.vue": $o,
      "./components/KList/KListItemSubtitle.vue": yo,
      "./components/KList/KListItemTitle.vue": ho,
      "./components/KMenu/KMenu.vue": Ro,
      "./components/KMenu/KRightCaret.vue": Xo,
      "./components/KMulti.vue": ss,
      "./components/KMulti2.vue": cs,
      "./components/KMultiUserPicker.vue": ps,
      "./components/KNodeAncestor.vue": _s,
      "./components/KNodePickerField.vue": Ss,
      "./components/KOneMoment.vue": js,
      "./components/KPageDropZone.vue": Ls,
      "./components/KPageTitle.vue": Us,
      "./components/KPagination.vue": ni,
      "./components/KPagination2.vue": pi,
      "./components/KPleaseWait.vue": wi,
      "./components/KRadioGroup.vue": Mi,
      "./components/KScratch.vue": Ai,
      "./components/KSelect.vue": Ni,
      "./components/KSmartUIPanel.vue": Qi,
      "./components/KSnackbar.vue": sa,
      "./components/KSortHeader.vue": ca,
      "./components/KSpacer.vue": ga,
      "./components/KSpinner.vue": _i,
      "./components/KSwitch.vue": $a,
      "./components/KTable.vue": Oa,
      "./components/KTextArea.vue": ja,
      "./components/KTextField.vue": za,
      "./components/KUserGIF.vue": Fa,
      "./components/KUserLink.vue": Ga,
      "./components/KUserPicker.vue": Ja,
      "./components/KUserPickerLegacy.vue": pl,
      "./components/Tabs/KTabItem.vue": cl,
      "./components/Tabs/KTabs.vue": il
    })).forEach(
      ([a, s]) => {
        var l, d;
        const r = (d = (l = a == null ? void 0 : a.split("/")) == null ? void 0 : l.pop()) == null ? void 0 : d.replace(/\.\w+$/, "");
        n.component(r, s.default);
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
  Bn as KAdminLink,
  Xn as KAlert,
  nr as KApp,
  dr as KAutocomplete,
  wr as KBrowseLink,
  Cr as KButton,
  tn as KCard,
  an as KCardActions,
  fn as KCardText,
  bn as KCardTitle,
  Kr as KConfirm,
  Br as KDateTimePicker,
  Nr as KDialog,
  qe as KDivider,
  Yr as KDot,
  to as KFormFieldWrapper,
  uo as KFunctionMenu,
  So as KFunctionMenuModern,
  Co as KFunctionMenuSmartUI,
  Ao as KLinearProgressIndicator,
  Bo as KList,
  We as KListItem,
  Lt as KListItemSubtitle,
  At as KListItemTitle,
  Eo as KMenu,
  De as KMenuDownIcon,
  os as KMulti,
  ds as KMulti2,
  fs as KMultiUserPicker,
  Vt as KNodeAncestor,
  ws as KNodePickerField,
  Ms as KOneMoment,
  As as KPageDropZone,
  Fs as KPageTitle,
  ti as KPagination,
  fi as KPagination2,
  ki as KPleaseWait,
  Ci as KRadioGroup,
  Yo as KRightCaret,
  Ki as KScratch,
  Ui as KSelect,
  Gi as KSmartUIPanel,
  oa as KSnackbar,
  da as KSortHeader,
  ha as KSpacer,
  It as KSpinner,
  Pn as KSubtractIcon,
  va as KSwitch,
  dl as KTabItem,
  Sa as KTable,
  sl as KTabs,
  Ma as KTextArea,
  La as KTextField,
  Da as KUserGIF,
  Ha as KUserLink,
  Bt as KUserPicker,
  fl as KUserPickerLegacy,
  hl as WorkflowStatusEnum,
  me as configKey,
  Pt as confirmDialogKey,
  Bl as createVueVitePlugin,
  Dl as createVueViteRegisterComponentsPlugin,
  jt as dateTimeFormatterKey,
  Kl as generalSort,
  J as injectStrict,
  Kt as nodeLookup,
  ae as sessionKey,
  Mt as snackbarKey,
  Al as useAsyncData,
  Il as useCSUtils,
  Dt as useConfig,
  zl as useConfirmDialog,
  Vl as useDateTimeFormatter,
  Ft as useSession,
  yl as useSmartUI,
  Ll as useSnackbar,
  Se as userLookup
};
//# sourceMappingURL=index.js.map
