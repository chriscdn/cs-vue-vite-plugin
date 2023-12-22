var Bt = Object.defineProperty;
var Ft = (e, t, n) => t in e ? Bt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ee = (e, t, n) => (Ft(e, typeof t != "symbol" ? t + "" : t, n), n);
import { defineComponent as S, h as fe, openBlock as l, createElementBlock as c, renderSlot as I, mergeProps as pe, createElementVNode as $, toDisplayString as F, createCommentVNode as L, normalizeStyle as se, resolveComponent as C, createVNode as B, withCtx as T, resolveDirective as ze, withDirectives as ie, normalizeClass as Z, withKeys as ye, withModifiers as ue, vModelText as Ve, Fragment as N, renderList as Q, createTextVNode as X, inject as it, createBlock as z, vModelDynamic as Dt, Teleport as at, Transition as Se, setBlockTracking as Ye, toHandlers as ke, ref as ve, TransitionGroup as Be, useCssVars as lt, vModelRadio as It, vModelSelect as Nt, watch as Et } from "vue";
import V from "lodash.get";
import { directive as Fe } from "vue3-click-away";
import Oe from "@chriscdn/promise-semaphore";
import { format as Xe } from "date-fns";
import { disableBodyScroll as Ut, enableBodyScroll as Rt } from "body-scroll-lock";
import Je from "hotkeys-js";
import Wt from "@chriscdn/build-url";
import qt from "js-cookie";
import { Session as Ht } from "@kweli/cs-rest";
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
}, je = S({
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
}), Gt = S({
  mixins: [je, ut],
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
}), Qt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Gt
}, Symbol.toStringTag, { value: "Module" })), Yt = S({}), O = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, a] of t)
    n[o] = a;
  return n;
}, Xt = { class: "k-card-actions" };
function Jt(e, t, n, o, a, i) {
  return l(), c("div", Xt, [
    I(e.$slots, "default")
  ]);
}
const Zt = /* @__PURE__ */ O(Yt, [["render", Jt]]), en = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zt
}, Symbol.toStringTag, { value: "Module" })), tn = S({}), nn = { class: "k-card-text" };
function rn(e, t, n, o, a, i) {
  return l(), c("div", nn, [
    I(e.$slots, "default")
  ]);
}
const on = /* @__PURE__ */ O(tn, [["render", rn]]), sn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: on
}, Symbol.toStringTag, { value: "Module" })), an = S({}), ln = { class: "k-card-title" };
function un(e, t, n, o, a, i) {
  return l(), c("div", ln, [
    I(e.$slots, "default")
  ]);
}
const dn = /* @__PURE__ */ O(an, [["render", un]]), cn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dn
}, Symbol.toStringTag, { value: "Module" })), fn = S({
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
}), pn = ["aria-hidden", "aria-label"], mn = ["width", "height"], hn = { d: "M7,10L12,15L17,10H7Z" }, gn = { key: 0 };
function bn(e, t, n, o, a, i) {
  return l(), c("span", pe(e.$attrs, {
    "aria-hidden": !e.title,
    "aria-label": e.title,
    class: "material-design-icon menu-down-icon animate-spin",
    role: "img",
    onClick: t[0] || (t[0] = (r) => e.$emit("click", r))
  }), [
    (l(), c("svg", {
      class: "fill-black hover:fill-green-500 transition-colors",
      width: e.size,
      height: e.size,
      viewBox: "7 10 10 5"
    }, [
      $("path", hn, [
        e.title ? (l(), c("title", gn, F(e.title), 1)) : L("", !0)
      ])
    ], 8, mn))
  ], 16, pn);
}
const De = /* @__PURE__ */ O(fn, [["render", bn]]), _n = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: De
}, Symbol.toStringTag, { value: "Module" })), yn = {}, vn = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, $n = /* @__PURE__ */ $("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z" }, null, -1), wn = [
  $n
];
function kn(e, t) {
  return l(), c("svg", vn, wn);
}
const Sn = /* @__PURE__ */ O(yn, [["render", kn]]), On = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sn
}, Symbol.toStringTag, { value: "Module" })), jn = S({
  setup() {
    return { config: te(he) };
  }
}), xn = { clsas: "space-y-2" }, Cn = /* @__PURE__ */ $("hr", null, null, -1), Mn = ["href"];
function Tn(e, t, n, o, a, i) {
  return l(), c("div", xn, [
    Cn,
    $("a", {
      href: `${e.config.baseUrl}?func=admin.index`
    }, "Admin Home", 8, Mn)
  ]);
}
const Pn = /* @__PURE__ */ O(jn, [["render", Tn]]), Kn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pn
}, Symbol.toStringTag, { value: "Module" }));
function An(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var dt = {}, ct = {}, Ie = {};
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
})(Ie);
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
      ...new Set(o.filter((i) => n !== !1 && n[i] !== !1).concat(Object.keys(n).filter((i) => n[i] !== !1)))
    ];
  }
})(pt);
var mt = {}, xe = {}, Ne = { exports: {} }, U = String, ht = function() {
  return { isColorSupported: !1, reset: U, bold: U, dim: U, italic: U, underline: U, inverse: U, hidden: U, strikethrough: U, black: U, red: U, green: U, yellow: U, blue: U, magenta: U, cyan: U, white: U, gray: U, bgBlack: U, bgRed: U, bgGreen: U, bgYellow: U, bgBlue: U, bgMagenta: U, bgCyan: U, bgWhite: U };
};
Ne.exports = ht();
Ne.exports.createColors = ht;
var gt = Ne.exports;
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(d, s) {
    for (var p in s)
      Object.defineProperty(d, p, {
        enumerable: !0,
        get: s[p]
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
  const n = /* @__PURE__ */ o(gt);
  function o(d) {
    return d && d.__esModule ? d : {
      default: d
    };
  }
  let a = /* @__PURE__ */ new Set();
  function i(d, s, p) {
    typeof process < "u" && process.env.JEST_WORKER_ID || p && a.has(p) || (p && a.add(p), console.warn(""), s.forEach((y) => console.warn(d, "-", y)));
  }
  function r(d) {
    return n.default.dim(d);
  }
  const u = {
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
})(xe);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return a;
    }
  });
  const t = /* @__PURE__ */ n(xe);
  function n(i) {
    return i && i.__esModule ? i : {
      default: i
    };
  }
  function o({ version: i, from: r, to: u }) {
    t.default.warn(`${r}-color-renamed`, [
      `As of Tailwind CSS ${i}, \`${r}\` has been renamed to \`${u}\`.`,
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
      for (let u in r) {
        var a;
        !(n == null || (a = n.hasOwnProperty) === null || a === void 0) && a.call(n, u) || (n[u] = r[u]);
      }
      for (let u of Object.getOwnPropertySymbols(r)) {
        var i;
        !(n == null || (i = n.hasOwnProperty) === null || i === void 0) && i.call(n, u) || (n[u] = r[u]);
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
var yt = {}, Ce = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(y, m) {
    for (var w in m)
      Object.defineProperty(y, w, {
        enumerable: !0,
        get: m[w]
      });
  }
  t(e, {
    flagEnabled: function() {
      return u;
    },
    issueFlagNotices: function() {
      return s;
    },
    default: function() {
      return p;
    }
  });
  const n = /* @__PURE__ */ a(gt), o = /* @__PURE__ */ a(xe);
  function a(y) {
    return y && y.__esModule ? y : {
      default: y
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
  function u(y, m) {
    if (r.future.includes(m)) {
      var w, _, P;
      return y.future === "all" || ((P = (_ = y == null || (w = y.future) === null || w === void 0 ? void 0 : w[m]) !== null && _ !== void 0 ? _ : i[m]) !== null && P !== void 0 ? P : !1);
    }
    if (r.experimental.includes(m)) {
      var D, W, q;
      return y.experimental === "all" || ((q = (W = y == null || (D = y.experimental) === null || D === void 0 ? void 0 : D[m]) !== null && W !== void 0 ? W : i[m]) !== null && q !== void 0 ? q : !1);
    }
    return !1;
  }
  function d(y) {
    if (y.experimental === "all")
      return r.experimental;
    var m;
    return Object.keys((m = y == null ? void 0 : y.experimental) !== null && m !== void 0 ? m : {}).filter((w) => r.experimental.includes(w) && y.experimental[w]);
  }
  function s(y) {
    if (process.env.JEST_WORKER_ID === void 0 && d(y).length > 0) {
      let m = d(y).map((w) => n.default.yellow(w)).join(", ");
      o.default.warn("experimental-flags-enabled", [
        `You have enabled experimental features: ${m}`,
        "Experimental features in Tailwind CSS are not covered by semver, may introduce breaking changes, and can change at any time."
      ]);
    }
  }
  const p = r;
})(Ce);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "normalizeConfig", {
    enumerable: !0,
    get: function() {
      return i;
    }
  });
  const t = Ce, n = /* @__PURE__ */ a(xe);
  function o(r) {
    if (typeof WeakMap != "function")
      return null;
    var u = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new WeakMap();
    return (o = function(s) {
      return s ? d : u;
    })(r);
  }
  function a(r, u) {
    if (!u && r && r.__esModule)
      return r;
    if (r === null || typeof r != "object" && typeof r != "function")
      return {
        default: r
      };
    var d = o(u);
    if (d && d.has(r))
      return d.get(r);
    var s = {}, p = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var y in r)
      if (y !== "default" && Object.prototype.hasOwnProperty.call(r, y)) {
        var m = p ? Object.getOwnPropertyDescriptor(r, y) : null;
        m && (m.get || m.set) ? Object.defineProperty(s, y, m) : s[y] = r[y];
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
      let { content: p, purge: y, safelist: m } = r;
      return Array.isArray(m) ? m : Array.isArray(p == null ? void 0 : p.safelist) ? p.safelist : Array.isArray(y == null ? void 0 : y.safelist) ? y.safelist : Array.isArray(y == null || (s = y.options) === null || s === void 0 ? void 0 : s.safelist) ? y.options.safelist : [];
    })(), r.blocklist = (() => {
      let { blocklist: s } = r;
      if (Array.isArray(s)) {
        if (s.every((p) => typeof p == "string"))
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
        let { content: s, purge: p } = r;
        return Array.isArray(p) ? p : Array.isArray(p == null ? void 0 : p.content) ? p.content : Array.isArray(s) ? s : Array.isArray(s == null ? void 0 : s.content) ? s.content : Array.isArray(s == null ? void 0 : s.files) ? s.files : [];
      })(),
      extract: (() => {
        let s = (() => {
          var m, w, _, P, D, W, q, E, H, G;
          return !((m = r.purge) === null || m === void 0) && m.extract ? r.purge.extract : !((w = r.content) === null || w === void 0) && w.extract ? r.content.extract : !((_ = r.purge) === null || _ === void 0 || (P = _.extract) === null || P === void 0) && P.DEFAULT ? r.purge.extract.DEFAULT : !((D = r.content) === null || D === void 0 || (W = D.extract) === null || W === void 0) && W.DEFAULT ? r.content.extract.DEFAULT : !((q = r.purge) === null || q === void 0 || (E = q.options) === null || E === void 0) && E.extractors ? r.purge.options.extractors : !((H = r.content) === null || H === void 0 || (G = H.options) === null || G === void 0) && G.extractors ? r.content.options.extractors : {};
        })(), p = {}, y = (() => {
          var m, w, _, P;
          if (!((m = r.purge) === null || m === void 0 || (w = m.options) === null || w === void 0) && w.defaultExtractor)
            return r.purge.options.defaultExtractor;
          if (!((_ = r.content) === null || _ === void 0 || (P = _.options) === null || P === void 0) && P.defaultExtractor)
            return r.content.options.defaultExtractor;
        })();
        if (y !== void 0 && (p.DEFAULT = y), typeof s == "function")
          p.DEFAULT = s;
        else if (Array.isArray(s))
          for (let { extensions: m, extractor: w } of s ?? [])
            for (let _ of m)
              p[_] = w;
        else
          typeof s == "object" && s !== null && Object.assign(p, s);
        return p;
      })(),
      transform: (() => {
        let s = (() => {
          var y, m, w, _, P, D;
          return !((y = r.purge) === null || y === void 0) && y.transform ? r.purge.transform : !((m = r.content) === null || m === void 0) && m.transform ? r.content.transform : !((w = r.purge) === null || w === void 0 || (_ = w.transform) === null || _ === void 0) && _.DEFAULT ? r.purge.transform.DEFAULT : !((P = r.content) === null || P === void 0 || (D = P.transform) === null || D === void 0) && D.DEFAULT ? r.content.transform.DEFAULT : {};
        })(), p = {};
        return typeof s == "function" && (p.DEFAULT = s), typeof s == "object" && s !== null && Object.assign(p, s), p;
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
var wt = {}, kt = {};
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
})(kt);
var Ee = {}, Ue = {}, St = {};
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
  function t(_, P) {
    for (var D in P)
      Object.defineProperty(_, D, {
        enumerable: !0,
        get: P[D]
      });
  }
  t(e, {
    parseColor: function() {
      return m;
    },
    formatColor: function() {
      return w;
    }
  });
  const n = /* @__PURE__ */ o(St);
  function o(_) {
    return _ && _.__esModule ? _ : {
      default: _
    };
  }
  let a = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i, i = /^#([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i, r = /(?:\d+|\d*\.\d+)%?/, u = /(?:\s*,\s*|\s+)/, d = /\s*[,/]\s*/, s = /var\(--(?:[^ )]*?)(?:,(?:[^ )]*?|var\(--[^ )]*?\)))?\)/, p = new RegExp(`^(rgba?)\\(\\s*(${r.source}|${s.source})(?:${u.source}(${r.source}|${s.source}))?(?:${u.source}(${r.source}|${s.source}))?(?:${d.source}(${r.source}|${s.source}))?\\s*\\)$`), y = new RegExp(`^(hsla?)\\(\\s*((?:${r.source})(?:deg|rad|grad|turn)?|${s.source})(?:${u.source}(${r.source}|${s.source}))?(?:${u.source}(${r.source}|${s.source}))?(?:${d.source}(${r.source}|${s.source}))?\\s*\\)$`);
  function m(_, { loose: P = !1 } = {}) {
    var D, W;
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
    let q = _.replace(i, (J, le, re, g, j) => [
      "#",
      le,
      le,
      re,
      re,
      g,
      g,
      j ? j + j : ""
    ].join("")).match(a);
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
    var E;
    let H = (E = _.match(p)) !== null && E !== void 0 ? E : _.match(y);
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
    } : !P && G.length !== 3 || G.length < 3 && !G.some((J) => /^var\(.*?\)$/.test(J)) ? null : {
      mode: H[1],
      color: G,
      alpha: (D = H[5]) === null || D === void 0 || (W = D.toString) === null || W === void 0 ? void 0 : W.call(D)
    };
  }
  function w({ mode: _, color: P, alpha: D }) {
    let W = D !== void 0;
    return _ === "rgba" || _ === "hsla" ? `${_}(${P.join(", ")}${W ? `, ${D}` : ""})` : `${_}(${P.join(" ")}${W ? ` / ${D}` : ""})`;
  }
})(Ue);
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
      return o;
    },
    default: function() {
      return a;
    }
  });
  const n = Ue;
  function o(i, r, u) {
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
  function a({ color: i, property: r, variable: u }) {
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
    const s = (0, n.parseColor)(i);
    return s === null ? Object.fromEntries(d.map((p) => [
      p,
      i
    ])) : s.alpha !== void 0 ? Object.fromEntries(d.map((p) => [
      p,
      i
    ])) : {
      [u]: "1",
      ...Object.fromEntries(d.map((p) => [
        p,
        (0, n.formatColor)({
          ...s,
          alpha: `var(${u})`
        })
      ]))
    };
  }
})(Ee);
var Re = {}, Ot = {}, Me = {};
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
    let a = [], i = [], r = 0, u = !1;
    for (let d = 0; d < n.length; d++) {
      let s = n[d];
      a.length === 0 && s === o[0] && !u && (o.length === 1 || n.slice(d, d + o.length) === o) && (i.push(n.slice(r, d)), r = d + o.length), u ? u = !1 : s === "\\" && (u = !0), s === "(" || s === "[" || s === "{" ? a.push(s) : (s === ")" && a[a.length - 1] === "(" || s === "]" && a[a.length - 1] === "[" || s === "}" && a[a.length - 1] === "{") && a.pop();
    }
    return i.push(n.slice(r)), i;
  }
})(Me);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(d, s) {
    for (var p in s)
      Object.defineProperty(d, p, {
        enumerable: !0,
        get: s[p]
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
  const n = Me;
  let o = /* @__PURE__ */ new Set([
    "inset",
    "inherit",
    "initial",
    "revert",
    "unset"
  ]), a = /\ +(?![^(]*\))/g, i = /^-?(\d+|\.\d+)(.*?)$/g;
  function r(d) {
    return (0, n.splitAtTopLevelOnly)(d, ",").map((p) => {
      let y = p.trim(), m = {
        raw: y
      }, w = y.split(a), _ = /* @__PURE__ */ new Set();
      for (let P of w)
        i.lastIndex = 0, !_.has("KEYWORD") && o.has(P) ? (m.keyword = P, _.add("KEYWORD")) : i.test(P) ? _.has("X") ? _.has("Y") ? _.has("BLUR") ? _.has("SPREAD") || (m.spread = P, _.add("SPREAD")) : (m.blur = P, _.add("BLUR")) : (m.y = P, _.add("Y")) : (m.x = P, _.add("X")) : m.color ? (m.unknown || (m.unknown = []), m.unknown.push(P)) : m.color = P;
      return m.valid = m.x !== void 0 && m.y !== void 0, m;
    });
  }
  function u(d) {
    return d.map((s) => s.valid ? [
      s.keyword,
      s.x,
      s.y,
      s.blur,
      s.spread,
      s.color
    ].filter(Boolean).join(" ") : s.raw).join(", ");
  }
})(Ot);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(f, M) {
    for (var A in M)
      Object.defineProperty(f, A, {
        enumerable: !0,
        get: M[A]
      });
  }
  t(e, {
    normalize: function() {
      return d;
    },
    url: function() {
      return p;
    },
    number: function() {
      return y;
    },
    percentage: function() {
      return m;
    },
    length: function() {
      return P;
    },
    lineWidth: function() {
      return W;
    },
    shadow: function() {
      return q;
    },
    color: function() {
      return E;
    },
    image: function() {
      return H;
    },
    gradient: function() {
      return J;
    },
    position: function() {
      return re;
    },
    familyName: function() {
      return g;
    },
    genericName: function() {
      return x;
    },
    absoluteSize: function() {
      return v;
    },
    relativeSize: function() {
      return b;
    }
  });
  const n = Ue, o = Ot, a = Me;
  let i = [
    "min",
    "max",
    "clamp",
    "calc"
  ];
  function r(f) {
    return i.some((M) => new RegExp(`^${M}\\(.*\\)`).test(f));
  }
  const u = /* @__PURE__ */ new Set([
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
  function d(f, M = null, A = !0) {
    let K = M && u.has(M.property);
    return f.startsWith("--") && !K ? `var(${f})` : f.includes("url(") ? f.split(/(url\(.*?\))/g).filter(Boolean).map((R) => /^url\(.*?\)$/.test(R) ? R : d(R, M, !1)).join("") : (f = f.replace(/([^\\])_+/g, (R, Te) => Te + " ".repeat(R.length - 1)).replace(/^_/g, " ").replace(/\\_/g, "_"), A && (f = f.trim()), f = s(f), f);
  }
  function s(f) {
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
    return f.replace(/(calc|min|max|clamp)\(.+\)/g, (K) => {
      let R = "";
      function Te() {
        let ne = R.trimEnd();
        return ne[ne.length - 1];
      }
      for (let ne = 0; ne < K.length; ne++) {
        let $e = function(oe) {
          return oe.split("").every((ce, we) => K[ne + we] === ce);
        }, Qe = function(oe) {
          let ce = 1 / 0;
          for (let Vt of oe) {
            let Ke = K.indexOf(Vt, ne);
            Ke !== -1 && Ke < ce && (ce = Ke);
          }
          let we = K.slice(ne, ce);
          return ne += we.length - 1, we;
        }, Pe = K[ne];
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
          ].includes(Pe) && ![
            "(",
            "+",
            "-",
            "*",
            "/",
            ","
          ].includes(Te()) ? R += ` ${Pe} ` : R += Pe;
      }
      return R.replace(/\s+/g, " ");
    });
  }
  function p(f) {
    return f.startsWith("url(");
  }
  function y(f) {
    return !isNaN(Number(f)) || r(f);
  }
  function m(f) {
    return f.endsWith("%") && y(f.slice(0, -1)) || r(f);
  }
  let _ = `(?:${[
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
  function P(f) {
    return f === "0" || new RegExp(`^[+-]?[0-9]*.?[0-9]+(?:[eE][+-]?[0-9]+)?${_}$`).test(f) || r(f);
  }
  let D = /* @__PURE__ */ new Set([
    "thin",
    "medium",
    "thick"
  ]);
  function W(f) {
    return D.has(f);
  }
  function q(f) {
    let M = (0, o.parseBoxShadowValue)(d(f));
    for (let A of M)
      if (!A.valid)
        return !1;
    return !0;
  }
  function E(f) {
    let M = 0;
    return (0, a.splitAtTopLevelOnly)(f, "_").every((K) => (K = d(K), K.startsWith("var(") ? !0 : (0, n.parseColor)(K, {
      loose: !0
    }) !== null ? (M++, !0) : !1)) ? M > 0 : !1;
  }
  function H(f) {
    let M = 0;
    return (0, a.splitAtTopLevelOnly)(f, ",").every((K) => (K = d(K), K.startsWith("var(") ? !0 : p(K) || J(K) || [
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
  function J(f) {
    f = d(f);
    for (let M of G)
      if (f.startsWith(`${M}(`))
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
  function re(f) {
    let M = 0;
    return (0, a.splitAtTopLevelOnly)(f, "_").every((K) => (K = d(K), K.startsWith("var(") ? !0 : le.has(K) || P(K) || m(K) ? (M++, !0) : !1)) ? M > 0 : !1;
  }
  function g(f) {
    let M = 0;
    return (0, a.splitAtTopLevelOnly)(f, ",").every((K) => (K = d(K), K.startsWith("var(") ? !0 : K.includes(" ") && !/(['"])([^"']+)\1/g.test(K) || /^\d/g.test(K) ? !1 : (M++, !0))) ? M > 0 : !1;
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
  function x(f) {
    return j.has(f);
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
  function v(f) {
    return h.has(f);
  }
  let k = /* @__PURE__ */ new Set([
    "larger",
    "smaller"
  ]);
  function b(f) {
    return k.has(f);
  }
})(Re);
var jt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "backgroundSize", {
    enumerable: !0,
    get: function() {
      return o;
    }
  });
  const t = Re, n = Me;
  function o(a) {
    let i = [
      "cover",
      "contain"
    ];
    return (0, n.splitAtTopLevelOnly)(a, ",").every((r) => {
      let u = (0, n.splitAtTopLevelOnly)(r, "_").filter(Boolean);
      return u.length === 1 && i.includes(u[0]) ? !0 : u.length !== 1 && u.length !== 2 ? !1 : u.every((d) => (0, t.length)(d) || (0, t.percentage)(d) || d === "auto");
    });
  }
})(jt);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(g, j) {
    for (var x in j)
      Object.defineProperty(g, x, {
        enumerable: !0,
        get: j[x]
      });
  }
  t(e, {
    updateAllClasses: function() {
      return s;
    },
    asValue: function() {
      return m;
    },
    parseColorFormat: function() {
      return P;
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
      return le;
    },
    getMatchingTypes: function() {
      return re;
    }
  });
  const n = /* @__PURE__ */ d(kt), o = Ee, a = Re, i = /* @__PURE__ */ d(Ie), r = jt, u = Ce;
  function d(g) {
    return g && g.__esModule ? g : {
      default: g
    };
  }
  function s(g, j) {
    g.walkClasses((x) => {
      x.value = j(x.value), x.raws && x.raws.value && (x.raws.value = (0, n.default)(x.raws.value));
    });
  }
  function p(g, j) {
    if (!w(g))
      return;
    let x = g.slice(1, -1);
    if (j(x))
      return (0, a.normalize)(x);
  }
  function y(g, j = {}, x) {
    let h = j[g];
    if (h !== void 0)
      return (0, i.default)(h);
    if (w(g)) {
      let v = p(g, x);
      return v === void 0 ? void 0 : (0, i.default)(v);
    }
  }
  function m(g, j = {}, { validate: x = () => !0 } = {}) {
    var h;
    let v = (h = j.values) === null || h === void 0 ? void 0 : h[g];
    return v !== void 0 ? v : j.supportsNegativeValues && g.startsWith("-") ? y(g.slice(1), j.values, x) : p(g, x);
  }
  function w(g) {
    return g.startsWith("[") && g.endsWith("]");
  }
  function _(g) {
    let j = g.lastIndexOf("/"), x = g.lastIndexOf("[", j), h = g.indexOf("]", j);
    return g[j - 1] === "]" || g[j + 1] === "[" || x !== -1 && h !== -1 && x < j && j < h && (j = g.lastIndexOf("/", x)), j === -1 || j === g.length - 1 ? [
      g,
      void 0
    ] : w(g) && !g.includes("]/[") ? [
      g,
      void 0
    ] : [
      g.slice(0, j),
      g.slice(j + 1)
    ];
  }
  function P(g) {
    if (typeof g == "string" && g.includes("<alpha-value>")) {
      let j = g;
      return ({ opacityValue: x = 1 }) => j.replace("<alpha-value>", x);
    }
    return g;
  }
  function D(g) {
    return (0, a.normalize)(g.slice(1, -1));
  }
  function W(g, j = {}, { tailwindConfig: x = {} } = {}) {
    var h;
    if (((h = j.values) === null || h === void 0 ? void 0 : h[g]) !== void 0) {
      var v;
      return P((v = j.values) === null || v === void 0 ? void 0 : v[g]);
    }
    let [k, b] = _(g);
    if (b !== void 0) {
      var f, M, A, K;
      let R = (K = (f = j.values) === null || f === void 0 ? void 0 : f[k]) !== null && K !== void 0 ? K : w(k) ? k.slice(1, -1) : void 0;
      return R === void 0 ? void 0 : (R = P(R), w(b) ? (0, o.withAlphaValue)(R, D(b)) : ((M = x.theme) === null || M === void 0 || (A = M.opacity) === null || A === void 0 ? void 0 : A[b]) === void 0 ? void 0 : (0, o.withAlphaValue)(R, x.theme.opacity[b]));
    }
    return m(g, j, {
      validate: a.color
    });
  }
  function q(g, j = {}) {
    var x;
    return (x = j.values) === null || x === void 0 ? void 0 : x[g];
  }
  function E(g) {
    return (j, x) => m(j, x, {
      validate: g
    });
  }
  let H = {
    any: m,
    color: W,
    url: E(a.url),
    image: E(a.image),
    length: E(a.length),
    percentage: E(a.percentage),
    position: E(a.position),
    lookup: q,
    "generic-name": E(a.genericName),
    "family-name": E(a.familyName),
    number: E(a.number),
    "line-width": E(a.lineWidth),
    "absolute-size": E(a.absoluteSize),
    "relative-size": E(a.relativeSize),
    shadow: E(a.shadow),
    size: E(r.backgroundSize)
  }, G = Object.keys(H);
  function J(g, j) {
    let x = g.indexOf(j);
    return x === -1 ? [
      void 0,
      g
    ] : [
      g.slice(0, x),
      g.slice(x + 1)
    ];
  }
  function le(g, j, x, h) {
    if (x.values && j in x.values)
      for (let { type: k } of g ?? []) {
        let b = H[k](j, x, {
          tailwindConfig: h
        });
        if (b !== void 0)
          return [
            b,
            k,
            null
          ];
      }
    if (w(j)) {
      let k = j.slice(1, -1), [b, f] = J(k, ":");
      if (!/^[\w-_]+$/g.test(b))
        f = k;
      else if (b !== void 0 && !G.includes(b))
        return [];
      if (f.length > 0 && G.includes(b))
        return [
          m(`[${f}]`, x),
          b,
          null
        ];
    }
    let v = re(g, j, x, h);
    for (let k of v)
      return k;
    return [];
  }
  function* re(g, j, x, h) {
    let v = (0, u.flagEnabled)(h, "generalizedModifiers"), [k, b] = _(j);
    if (v && x.modifiers != null && (x.modifiers === "any" || typeof x.modifiers == "object" && (b && w(b) || b in x.modifiers)) || (k = j, b = void 0), b !== void 0 && k === "" && (k = "DEFAULT"), b !== void 0 && typeof x.modifiers == "object") {
      var M, A;
      let K = (A = (M = x.modifiers) === null || M === void 0 ? void 0 : M[b]) !== null && A !== void 0 ? A : null;
      K !== null ? b = K : w(b) && (b = D(b));
    }
    for (let { type: K } of g ?? []) {
      let R = H[K](k, x, {
        tailwindConfig: h
      });
      R !== void 0 && (yield [
        R,
        K,
        b ?? null
      ]);
    }
  }
})(wt);
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
      return x;
    }
  });
  const t = /* @__PURE__ */ w(Ie), n = /* @__PURE__ */ w(ft), o = /* @__PURE__ */ w(pt), a = /* @__PURE__ */ w(mt), i = bt, r = _t, u = yt, d = /* @__PURE__ */ w(vt), s = $t, p = wt, y = Ee, m = /* @__PURE__ */ w(xt);
  function w(h) {
    return h && h.__esModule ? h : {
      default: h
    };
  }
  function _(h) {
    return typeof h == "function";
  }
  function P(h, ...v) {
    let k = v.pop();
    for (let b of v)
      for (let f in b) {
        let M = k(h[f], b[f]);
        M === void 0 ? (0, d.default)(h[f]) && (0, d.default)(b[f]) ? h[f] = P({}, h[f], b[f], k) : h[f] = b[f] : h[f] = M;
      }
    return h;
  }
  const D = {
    colors: a.default,
    negative(h) {
      return Object.keys(h).filter((v) => h[v] !== "0").reduce((v, k) => {
        let b = (0, t.default)(h[k]);
        return b !== void 0 && (v[`-${k}`] = b), v;
      }, {});
    },
    breakpoints(h) {
      return Object.keys(h).filter((v) => typeof h[v] == "string").reduce((v, k) => ({
        ...v,
        [`screen-${k}`]: h[k]
      }), {});
    }
  };
  function W(h, ...v) {
    return _(h) ? h(...v) : h;
  }
  function q(h) {
    return h.reduce((v, { extend: k }) => P(v, k, (b, f) => b === void 0 ? [
      f
    ] : Array.isArray(b) ? [
      f,
      ...b
    ] : [
      f,
      b
    ]), {});
  }
  function E(h) {
    return {
      ...h.reduce((v, k) => (0, i.defaults)(v, k), {}),
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
    return P(v, h, (k, b) => !_(k) && !b.some(_) ? P({}, k, ...b, H) : (f, M) => P({}, ...[
      k,
      ...b
    ].map((A) => W(A, f, M)), H));
  }
  function* J(h) {
    let v = (0, r.toPath)(h);
    if (v.length === 0 || (yield v, Array.isArray(h)))
      return;
    let k = /^(.*?)\s*\/\s*([^/]+)$/, b = h.match(k);
    if (b !== null) {
      let [, f, M] = b, A = (0, r.toPath)(f);
      A.alpha = M, yield A;
    }
  }
  function le(h) {
    const v = (k, b) => {
      for (const f of J(k)) {
        let M = 0, A = h;
        for (; A != null && M < f.length; )
          A = A[f[M++]], A = _(A) && (f.alpha === void 0 || M <= f.length - 1) ? A(v, D) : A;
        if (A !== void 0) {
          if (f.alpha !== void 0) {
            let K = (0, p.parseColorFormat)(A);
            return (0, y.withAlphaValue)(K, f.alpha, (0, m.default)(K));
          }
          return (0, d.default)(A) ? (0, s.cloneDeep)(A) : A;
        }
      }
      return b;
    };
    return Object.assign(v, {
      theme: v,
      ...D
    }), Object.keys(h).reduce((k, b) => (k[b] = _(h[b]) ? h[b](v, D) : h[b], k), {});
  }
  function re(h) {
    let v = [];
    return h.forEach((k) => {
      v = [
        ...v,
        k
      ];
      var b;
      const f = (b = k == null ? void 0 : k.plugins) !== null && b !== void 0 ? b : [];
      f.length !== 0 && f.forEach((M) => {
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
  function g(h) {
    return [
      ...h
    ].reduceRight((k, b) => _(b) ? b({
      corePlugins: k
    }) : (0, o.default)(b, k), n.default);
  }
  function j(h) {
    return [
      ...h
    ].reduceRight((k, b) => [
      ...k,
      ...b
    ], []);
  }
  function x(h) {
    let v = [
      ...re(h),
      {
        prefix: "",
        important: !1,
        separator: ":"
      }
    ];
    var k, b;
    return (0, u.normalizeConfig)((0, i.defaults)({
      theme: le(G(E(v.map((f) => (k = f == null ? void 0 : f.theme) !== null && k !== void 0 ? k : {})))),
      corePlugins: g(v.map((f) => f.corePlugins)),
      plugins: j(h.map((f) => (b = f == null ? void 0 : f.plugins) !== null && b !== void 0 ? b : []))
    }, ...v));
  }
})(ct);
var Ct = {}, Ln = {
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
  const t = /* @__PURE__ */ o(Ln), n = Ce;
  function o(i) {
    return i && i.__esModule ? i : {
      default: i
    };
  }
  function a(i) {
    var r;
    const u = ((r = i == null ? void 0 : i.presets) !== null && r !== void 0 ? r : [
      t.default
    ]).slice().reverse().flatMap((p) => a(p instanceof Function ? p() : p)), d = {
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
    }, s = Object.keys(d).filter((p) => (0, n.flagEnabled)(i, p)).map((p) => d[p]);
    return [
      i,
      ...s,
      ...u
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
})(dt);
let Ae = dt;
var zn = (Ae.__esModule ? Ae : { default: Ae }).default;
const Vn = /* @__PURE__ */ An(zn), Bn = {
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
}, Fn = Vn(Bn);
function Dn(e) {
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
const In = S({
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
      const t = V(Fn, ["theme", "colors"]), n = V(t, e);
      return typeof n == "string" ? n : e;
    },
    fontColorForBackgroundColor(e) {
      const t = Dn(e);
      return t.alpha * 255 < 150 || Math.round(
        (t.red * 299 + t.green * 587 + t.blue * 114) / 1e3
      ) > 125 ? "#000" : "#fff";
    }
  }
}), Nn = S({
  mixins: [In]
}), En = { class: "flex-grow" };
function Un(e, t, n, o, a, i) {
  return l(), c("div", {
    class: "k-alert",
    style: se([e.colorableBackgroundStyle, e.colorableTextStyleForBackground])
  }, [
    $("div", En, [
      I(e.$slots, "default")
    ])
  ], 4);
}
const Rn = /* @__PURE__ */ O(Nn, [["render", Un]]), Wn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Rn
}, Symbol.toStringTag, { value: "Module" })), qn = {}, Hn = { class: "k-app" };
function Gn(e, t) {
  const n = C("KSnackbar"), o = C("KConfirm");
  return l(), c("div", Hn, [
    B(o, null, {
      default: T(() => [
        B(n, null, {
          default: T(() => [
            I(e.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    })
  ]);
}
const Qn = /* @__PURE__ */ O(qn, [["render", Gn]]), Yn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qn
}, Symbol.toStringTag, { value: "Module" })), Xn = S({
  directives: {
    ClickAway: Fe
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
}), Jn = { class: "k-autocomplete-input" }, Zn = ["placeholder", "readonly"], er = {
  key: 0,
  class: "k-autocomplete-items"
}, tr = ["onClick"];
function nr(e, t, n, o, a, i) {
  const r = ze("click-away");
  return ie((l(), c("div", {
    class: "k-autocomplete",
    style: se([e.style])
  }, [
    I(e.$slots, "prepend", { item: e.valueLocal }),
    $("div", Jn, [
      ie($("input", {
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = (u) => e.inputText = u),
        class: Z(["k-input", { invalidSelection: !e.isValidSelection }]),
        type: "search",
        autocomplete: "off",
        placeholder: e.placeholderText,
        readonly: !e.editable,
        onSearch: t[1] || (t[1] = (...u) => e.clearInput && e.clearInput(...u)),
        onKeydown: [
          t[2] || (t[2] = ye(ue((u) => e.currentFocus = Math.max(-1, e.currentFocus - 1), ["prevent"]), ["arrow-up"])),
          t[3] || (t[3] = ye(ue((u) => e.currentFocus = Math.min(e.items.length - 1, e.currentFocus + 1), ["prevent"]), ["arrow-down"])),
          t[4] || (t[4] = ye(ue((u) => e.select(e.currentFocus), ["prevent"]), ["enter"])),
          t[6] || (t[6] = ye((...u) => e.setBlur && e.setBlur(...u), ["tab"]))
        ],
        onFocus: t[5] || (t[5] = (...u) => e.setFocus && e.setFocus(...u)),
        onKeyup: t[7] || (t[7] = (...u) => e.keyup && e.keyup(...u))
      }, null, 42, Zn), [
        [Ve, e.inputText]
      ]),
      e.focus && e.items.length && e.inputText ? (l(), c("div", er, [
        (l(!0), c(N, null, Q(e.itemsFiltered, (u, d) => (l(), c("div", {
          key: d,
          class: Z(["k-autocomplete-item", { "k-autocomplete-active": e.currentFocus == d }]),
          onClick: (s) => e.select(d)
        }, [
          I(e.$slots, "item", { item: u }, () => [
            X(F(u), 1)
          ])
        ], 10, tr))), 128))
      ])) : L("", !0)
    ])
  ], 4)), [
    [r, e.setBlur]
  ]);
}
const rr = /* @__PURE__ */ O(Xn, [["render", nr]]), or = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: rr
}, Symbol.toStringTag, { value: "Module" }));
function te(e, t) {
  const n = it(e, t);
  if (!n)
    throw new Error(`Could not resolve ${e.description}`);
  return n;
}
const ae = Symbol("session"), he = Symbol("config"), sr = Symbol("snackbar"), ir = Symbol(
  "dateTimeFormatterKey"
), ar = Symbol("confirmDialogKey"), ge = new Oe();
function lr(e) {
  const t = e.results.data.properties, n = e.results.data.versions, o = n[n.length - 1];
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
    version: o == null ? void 0 : o.version_number,
    versionnum: o == null ? void 0 : o.version_number_name,
    modifiedImageCallback: "",
    categories: {},
    url: ""
  };
}
class ur {
  constructor() {
    ee(this, "session");
    ee(this, "queueItems");
    ee(this, "intervalId");
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
    const o = n.map((i) => i.dataId), a = await t.request("NodesLookup", {
      dataids: o
    });
    n.forEach((i) => {
      const r = i.dataId, u = i.resolveFunc, d = a.find((s) => s.dataid === r);
      u(d ?? null);
    });
  }
}
class dr {
  constructor() {
    ee(this, "nodes");
    ee(this, "nodeLookupQueue");
    this.nodes = {}, this.nodeLookupQueue = new ur();
  }
  // registerUsers(items: Array<RHNodeSerializer>) {
  //   items.forEach((user) => (this.nodes[user.dataid] = user));
  // }
  async lookupLegacy(t, n) {
    if (n)
      try {
        if (await ge.acquire(n), this.nodes.hasOwnProperty(n))
          return this.nodes[n];
        {
          const o = await t.nodes.node({ dataid: n }), a = lr(o.data);
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
      const i = (r) => {
        r instanceof Error ? a(r) : (this.nodes[n] = r, o(r)), ge.release(n);
      };
      this.nodeLookupQueue.queue(t, i, n);
    })) : null;
  }
  async lookup(t, n, o = !1) {
    return o ? this.lookupLegacy(t, n) : this.lookupRPC(t, n);
  }
}
const cr = new dr(), fr = S({
  setup() {
    return {
      session: te(ae)
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
            this.loading = !0, this.nodeRecLocal = await cr.lookup(
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
}), pr = { class: "flex items-center gap-2" }, mr = {
  key: 0,
  class: "h-3 w-36 bg-slate-200 rounded animate-pulse"
}, hr = { class: "flex items-center gap-2" }, gr = ["src"], br = ["href"], _r = ["innerHTML"];
function yr(e, t, n, o, a, i) {
  const r = C("KFunctionMenuModern"), u = C("KFunctionMenu");
  return l(), c("div", pr, [
    e.loading ? (l(), c("div", mr)) : e.nodeRecResolved ? (l(), c(N, { key: 1 }, [
      $("div", hr, [
        e.image ? (l(), c("img", {
          key: 0,
          src: e.nodeRecResolved.gif,
          width: "16",
          height: "16"
        }, null, 8, gr)) : L("", !0),
        $("a", {
          href: e.nodeRecResolved.url
        }, F(e.nodeRecResolved.name), 9, br)
      ]),
      e.clickable ? (l(), c(N, { key: 0 }, [
        e.modernMenu ? (l(), z(r, {
          key: 0,
          dataid: e.nodeRecResolved.dataid
        }, null, 8, ["dataid"])) : (l(), z(u, {
          key: 1,
          dataid: e.nodeRecResolved.dataid
        }, null, 8, ["dataid"]))
      ], 64)) : L("", !0),
      $("div", {
        class: "flex items-center",
        innerHTML: e.nodeRecResolved.modifiedImageCallback
      }, null, 8, _r)
    ], 64)) : L("", !0)
  ]);
}
const vr = /* @__PURE__ */ O(fr, [["render", yr]]), $r = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vr
}, Symbol.toStringTag, { value: "Module" })), wr = S({
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
}), kr = ["disabled"];
function Sr(e, t, n, o, a, i) {
  return l(), c("button", pe({
    class: ["k-button", e.classObj],
    disabled: e.disabled,
    type: "button"
  }, e.$attrs, {
    onClick: t[0] || (t[0] = (r) => e.$emit("click"))
  }), [
    I(e.$slots, "default")
  ], 16, kr);
}
const Or = /* @__PURE__ */ O(wr, [["render", Sr]]), jr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Or
}, Symbol.toStringTag, { value: "Module" })), xr = S({
  provide() {
    return {
      // @ts-ignore - not sure why this complains
      [ar]: this
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
function Cr(e, t, n, o, a, i) {
  const r = C("KCardTitle"), u = C("KCardText"), d = C("KSpacer"), s = C("KButton"), p = C("KCardActions"), y = C("KCard"), m = C("KDialog");
  return l(), c(N, null, [
    I(e.$slots, "default"),
    B(m, {
      modelValue: e.dialog,
      "onUpdate:modelValue": t[2] || (t[2] = (w) => e.dialog = w),
      "max-width": "30vw",
      "min-width": "20vw",
      "z-index": 50
    }, {
      default: T(() => [
        B(y, null, {
          default: T(() => [
            e.title ? (l(), z(r, { key: 0 }, {
              default: T(() => [
                X(F(e.title), 1)
              ]),
              _: 1
            })) : L("", !0),
            e.message ? (l(), z(u, { key: 1 }, {
              default: T(() => [
                X(F(e.message), 1)
              ]),
              _: 1
            })) : L("", !0),
            B(p, null, {
              default: T(() => [
                B(d),
                e.noLabel ? (l(), z(s, {
                  key: 0,
                  small: "",
                  onClick: t[0] || (t[0] = (w) => e.dismiss(!1))
                }, {
                  default: T(() => [
                    X(F(e.noLabel), 1)
                  ]),
                  _: 1
                })) : L("", !0),
                e.yesLabel ? (l(), z(s, {
                  key: 1,
                  small: "",
                  onClick: t[1] || (t[1] = (w) => e.dismiss(!0))
                }, {
                  default: T(() => [
                    X(F(e.yesLabel), 1)
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
const Mr = /* @__PURE__ */ O(xr, [["render", Cr]]), Tr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Mr
}, Symbol.toStringTag, { value: "Module" })), Pr = S({
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
}), Kr = { class: "k-date-time-picker" }, Ar = ["type", "readonly"];
function Lr(e, t, n, o, a, i) {
  const r = C("KButton");
  return l(), c("div", Kr, [
    ie($("input", {
      "onUpdate:modelValue": t[0] || (t[0] = (u) => e.localModelValue = u),
      class: "k-input",
      type: e.type,
      readonly: !e.editable
    }, null, 8, Ar), [
      [Dt, e.localModelValue]
    ]),
    e.editable ? (l(), c(N, { key: 0 }, [
      B(r, {
        small: "",
        onClick: e.setToNow
      }, {
        default: T(() => [
          X(" Now ")
        ]),
        _: 1
      }, 8, ["onClick"]),
      B(r, {
        small: "",
        onClick: t[1] || (t[1] = (u) => e.$emit("update:modelValue", null))
      }, {
        default: T(() => [
          X(" Clear ")
        ]),
        _: 1
      })
    ], 64)) : L("", !0)
  ]);
}
const zr = /* @__PURE__ */ O(Pr, [["render", Lr]]), Vr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zr
}, Symbol.toStringTag, { value: "Module" })), Br = S({
  directives: {
    ClickAway: Fe
  },
  mixins: [je],
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
      this.$emit("update:modelValue", e), e ? (await this.$nextTick(), Ut(this.$refs.content)) : Rt(this.$refs.content);
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
function Fr(e, t, n, o, a, i) {
  const r = ze("click-away");
  return l(), c(N, null, [
    I(e.$slots, "activator", { on: e.on }),
    e.mounted ? (l(), z(at, {
      key: 0,
      to: ".k-app"
    }, [
      B(Se, { name: "fade" }, {
        default: T(() => [
          e.dialog ? (l(), c("div", {
            key: 0,
            class: "k-dialog",
            style: se([e.style])
          }, [
            ie((l(), c("div", {
              ref: "content",
              class: Z(["k-dialog-content", e.classObj]),
              style: se([e.measurableStyles])
            }, [
              I(e.$slots, "default", { on: e.on })
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
const Dr = /* @__PURE__ */ O(Br, [["render", Fr]]), Ir = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dr
}, Symbol.toStringTag, { value: "Module" })), Nr = {}, Er = { class: "k-divider" };
function Ur(e, t) {
  return l(), c("div", Er);
}
const We = /* @__PURE__ */ O(Nr, [["render", Ur]]), Rr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: We
}, Symbol.toStringTag, { value: "Module" })), Wr = S({
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
function qr(e, t, n, o, a, i) {
  return l(), c("div", {
    class: "k-dot",
    style: se([e.style])
  }, [
    I(e.$slots, "default")
  ], 4);
}
const Hr = /* @__PURE__ */ O(Wr, [["render", qr]]), Gr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Hr
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
}), Qr = {
  mixins: [de]
}, Yr = {
  key: 0,
  class: "k-form-field-label"
};
function Xr(e, t, n, o, a, i) {
  return l(), c("div", null, [
    e.label ? (l(), c("div", Yr, F(e.label), 1)) : L("", !0),
    I(e.$slots, "default"),
    (l(!0), c(N, null, Q(e.successMessages, (r, u) => (l(), c("div", {
      key: u,
      class: "k-formfield--success"
    }, F(r), 1))), 128)),
    (l(!0), c(N, null, Q(e.errorMessages, (r, u) => (l(), c("div", {
      key: u,
      class: "k-formfield--error"
    }, F(r), 1))), 128))
  ]);
}
const Jr = /* @__PURE__ */ O(Qr, [["render", Xr]]), Zr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Jr,
  mixin: de
}, Symbol.toStringTag, { value: "Module" })), eo = S({
  setup() {
    return { config: te(he) };
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
}), to = { key: 0 }, no = ["id"], ro = ["src"], oo = ["id", "src"];
function so(e, t, n, o, a, i) {
  return e.dataid ? (l(), c("span", to, [
    $("a", {
      id: e.aid,
      href: "#",
      class: "functionMenuHotspot",
      onClick: t[2] || (t[2] = ue((...r) => e.onclick && e.onclick(...r), ["prevent"]))
    }, [
      e.isModernFunctionMenu ? (l(), c("img", {
        key: 0,
        src: `${e.config.img}spacer.gif`,
        alt: "Functions"
      }, null, 8, ro)) : (l(), c("img", {
        key: 1,
        id: e.xid,
        src: e.image,
        border: "0",
        alt: "Functions",
        title: "Functions",
        onMouseover: t[0] || (t[0] = (...r) => e.onmouseover && e.onmouseover(...r)),
        onMouseout: t[1] || (t[1] = (...r) => e.onmouseout && e.onmouseout(...r))
      }, null, 40, oo))
    ], 8, no),
    t[3] || (Ye(-1), t[3] = $("div", {
      id: e.zid,
      ref: "functionMenuDiv",
      class: "functionMenuDiv"
    }, null, 8, ["id"]), Ye(1), t[3])
  ])) : L("", !0);
}
const io = /* @__PURE__ */ O(eo, [["render", so]]), ao = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: io
}, Symbol.toStringTag, { value: "Module" })), lo = S({}), uo = { class: "k-list-item-title" };
function co(e, t, n, o, a, i) {
  return l(), c("div", uo, [
    I(e.$slots, "default")
  ]);
}
const Mt = /* @__PURE__ */ O(lo, [["render", co]]), fo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Mt
}, Symbol.toStringTag, { value: "Module" })), po = S({}), mo = { class: "k-list-item-subtitle" };
function ho(e, t, n, o, a, i) {
  return l(), c("div", mo, [
    I(e.$slots, "default")
  ]);
}
const Tt = /* @__PURE__ */ O(po, [["render", ho]]), go = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Tt
}, Symbol.toStringTag, { value: "Module" })), bo = S({
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
    const { tag: e, data: t } = this.generateRouteLink(), n = this.title ? fe(Mt, {}, { default: () => [this.title] }) : null, o = this.subtitle ? fe(Tt, {}, { default: () => [this.subtitle] }) : null, a = n || o ? [n, o].filter((s) => !!s) : this.$slots.default ? this.$slots.default() : null, i = fe(
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
    ) : null, u = this.$slots.append ? fe(
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
      [r, i, u].filter((s) => !!s)
    );
  }
}), qe = /* @__PURE__ */ O(bo, [["__scopeId", "data-v-f06ea25f"]]), _o = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qe
}, Symbol.toStringTag, { value: "Module" })), et = new Oe(), yo = S({
  components: { KMenuDownIcon: De, KListItem: qe, KDivider: We },
  setup() {
    return { session: zt() };
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
function vo(e, t, n, o, a, i) {
  const r = C("KMenuDownIcon"), u = C("KDivider"), d = C("KRightCaret"), s = C("KListItem"), p = C("KList"), y = C("KMenu");
  return l(), z(y, {
    modelValue: e.visible,
    "onUpdate:modelValue": t[0] || (t[0] = (m) => e.visible = m),
    loading: e.loading
  }, {
    activator: T(({ on: m }) => [
      B(r, pe({ size: e.size }, ke(m), { class: "cursor-pointer" }), null, 16, ["size"])
    ]),
    default: T(() => [
      B(p, null, {
        default: T(() => [
          (l(!0), c(N, null, Q(e.actions, (m, w) => (l(), c(N, null, [
            m.signature === "-" ? (l(), z(u, {
              key: `${w}`
            })) : m.children.length ? (l(), z(y, {
              submenu: "",
              key: `a${w}`
            }, {
              activator: T(({ on: _ }) => [
                B(s, pe({
                  title: m.name
                }, ke(_)), {
                  append: T(() => [
                    B(d)
                  ]),
                  _: 2
                }, 1040, ["title"])
              ]),
              default: T(() => [
                B(p, null, {
                  default: T(() => [
                    (l(!0), c(N, null, Q(m.children, (_, P) => (l(), z(s, {
                      key: `b${P}`,
                      title: _.name,
                      href: _.url
                    }, null, 8, ["title", "href"]))), 128))
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1024)) : (l(), z(s, {
              title: m.name,
              href: m.url,
              key: `c${w}`
            }, null, 8, ["title", "href"]))
          ], 64))), 256))
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["modelValue", "loading"]);
}
const $o = /* @__PURE__ */ O(yo, [["render", vo]]), wo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $o
}, Symbol.toStringTag, { value: "Module" })), ko = S({
  components: { KMenuDownIcon: De, KListItem: qe, KDivider: We },
  setup() {
    return { configuration: te(he) };
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
function So(e, t, n, o, a, i) {
  const r = C("KMenuDownIcon"), u = C("KDivider"), d = C("KRightCaret"), s = C("KListItem"), p = C("KList"), y = C("KMenu");
  return l(), z(y, {
    modelValue: e.visible,
    "onUpdate:modelValue": t[0] || (t[0] = (m) => e.visible = m),
    loading: e.loading
  }, {
    activator: T(({ on: m }) => [
      B(r, pe({ size: e.size }, ke(m), { class: "cursor-pointer" }), null, 16, ["size"])
    ]),
    default: T(() => [
      B(p, null, {
        default: T(() => [
          (l(!0), c(N, null, Q(e.actions, (m, w) => (l(), c(N, null, [
            m.signature === "-" ? (l(), z(u, {
              key: `${w}`
            })) : m.children.length ? (l(), z(y, {
              submenu: "",
              key: `a${w}`
            }, {
              activator: T(({ on: _ }) => [
                B(s, pe({
                  title: m.name
                }, ke(_)), {
                  append: T(() => [
                    B(d)
                  ]),
                  _: 2
                }, 1040, ["title"])
              ]),
              default: T(() => [
                B(p, null, {
                  default: T(() => [
                    (l(!0), c(N, null, Q(m.children, (_, P) => (l(), z(s, {
                      key: `b${P}`,
                      title: _.name,
                      href: _.url
                    }, null, 8, ["title", "href"]))), 128))
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1024)) : (l(), z(s, {
              title: m.name,
              href: m.url,
              key: `c${w}`
            }, null, 8, ["title", "href"]))
          ], 64))), 256))
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["modelValue", "loading"]);
}
const Oo = /* @__PURE__ */ O(ko, [["render", So]]), jo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Oo
}, Symbol.toStringTag, { value: "Module" })), xo = S({}), Co = { class: "k-progress-line" };
function Mo(e, t, n, o, a, i) {
  return l(), c("div", Co);
}
const To = /* @__PURE__ */ O(xo, [["render", Mo]]), Po = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: To
}, Symbol.toStringTag, { value: "Module" })), Ko = S({}), Ao = { class: "k-list" };
function Lo(e, t, n, o, a, i) {
  return l(), c("div", Ao, [
    I(e.$slots, "default")
  ]);
}
const zo = /* @__PURE__ */ O(Ko, [["render", Lo]]), Vo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zo
}, Symbol.toStringTag, { value: "Module" })), Bo = S({
  directives: {
    ClickAway: Fe
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
}), Fo = {
  key: 0,
  class: "flex items-center justify-center p-2"
};
function Do(e, t, n, o, a, i) {
  const r = C("KSpinner"), u = ze("click-away");
  return l(), c("div", {
    class: "k-menu",
    onMouseenter: t[3] || (t[3] = (...d) => e.mouseEnter && e.mouseEnter(...d))
  }, [
    ie((l(), c("div", {
      ref: "menuActivator",
      onMouseleave: t[0] || (t[0] = (...d) => e.mouseLeave && e.mouseLeave(...d))
    }, [
      I(e.$slots, "activator", {
        on: { click: e.toggleMenu }
      })
    ], 32)), [
      [u, e.clickAway]
    ]),
    (l(), z(at, { to: ".k-app" }, [
      $("div", {
        onMouseenter: t[1] || (t[1] = (...d) => e.mouseEnter && e.mouseEnter(...d)),
        onMouseleave: t[2] || (t[2] = (...d) => e.mouseLeave && e.mouseLeave(...d)),
        ref: "menuItems",
        class: Z(["k-menu-items", e.dropDownMenuItemsClassObj]),
        style: se(e.styleDropDownItems)
      }, [
        e.loading ? (l(), c("div", Fo, [
          B(r)
        ])) : I(e.$slots, "default", { key: 1 })
      ], 38)
    ]))
  ], 32);
}
const Io = /* @__PURE__ */ O(Bo, [["render", Do]]), No = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Io
}, Symbol.toStringTag, { value: "Module" })), Eo = {}, Uo = {
  class: "w-5 h-5",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, Ro = /* @__PURE__ */ $("path", {
  "fill-rule": "evenodd",
  d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
  "clip-rule": "evenodd"
}, null, -1), Wo = [
  Ro
];
function qo(e, t) {
  return l(), c("svg", Uo, Wo);
}
const Ho = /* @__PURE__ */ O(Eo, [["render", qo]]), Go = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ho
}, Symbol.toStringTag, { value: "Module" })), Qo = S({
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
}), Yo = { class: "k-multi-widget" }, Xo = { class: "k-multi-buttons" }, Jo = /* @__PURE__ */ $("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ $("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z" })
], -1), Zo = /* @__PURE__ */ $("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ $("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" })
], -1);
function es(e, t, n, o, a, i) {
  const r = C("KButton"), u = C("KCard");
  return l(), z(u, { class: "k-multi" }, {
    default: T(() => [
      B(Be, {
        name: "fade",
        tag: "div"
      }, {
        default: T(() => [
          (l(!0), c(N, null, Q(e.valueLocal, (d, s) => (l(), c("div", {
            key: `k-multi-${d}`,
            class: "k-multi-item"
          }, [
            $("div", Yo, [
              I(e.$slots, "default", {
                index: s,
                value: d,
                update: (p) => e.update(s, p)
              })
            ]),
            $("div", Xo, [
              e.canRemove ? (l(), z(r, {
                key: 0,
                text: "",
                onClick: (p) => e.remove(s)
              }, {
                default: T(() => [
                  Jo
                ]),
                _: 2
              }, 1032, ["onClick"])) : L("", !0),
              e.canAdd ? (l(), z(r, {
                key: 1,
                text: "",
                onClick: (p) => e.add(s)
              }, {
                default: T(() => [
                  Zo
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
const ts = /* @__PURE__ */ O(Qo, [["render", es]]), ns = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ts
}, Symbol.toStringTag, { value: "Module" })), rs = S({
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
}), os = { class: "k-multi-widget" }, ss = /* @__PURE__ */ $("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ $("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z" })
], -1);
function is(e, t, n, o, a, i) {
  const r = C("KButton"), u = C("KCard");
  return l(), z(u, { class: "k-multi" }, {
    default: T(() => [
      B(Be, {
        name: "fade",
        tag: "div"
      }, {
        default: T(() => [
          (l(!0), c(N, null, Q(e.valueLocal, (d, s) => (l(), c("div", {
            key: `k-multi-${d}`,
            class: "k-multi-item"
          }, [
            $("div", os, [
              I(e.$slots, "readonly", {
                index: s,
                value: d
              }, () => [
                X(F(d), 1)
              ])
            ]),
            e.readonly ? L("", !0) : (l(), z(r, {
              key: 0,
              text: "",
              onClick: (p) => e.remove(s)
            }, {
              default: T(() => [
                ss
              ]),
              _: 2
            }, 1032, ["onClick"]))
          ]))), 128))
        ]),
        _: 3
      }),
      e.canAdd ? I(e.$slots, "add", {
        key: 0,
        add: e.add
      }) : L("", !0)
    ]),
    _: 3
  });
}
const as = /* @__PURE__ */ O(rs, [["render", is]]), ls = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: as
}, Symbol.toStringTag, { value: "Module" })), us = S({
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
function ds(e, t, n, o, a, i) {
  const r = C("KUserLink"), u = C("KUserPicker"), d = C("KMulti2");
  return l(), z(d, {
    modelValue: e.userIdsLocal,
    "onUpdate:modelValue": t[0] || (t[0] = (s) => e.userIdsLocal = s),
    readonly: e.readonly
  }, {
    readonly: T(({ value: s }) => [
      B(r, {
        user: s,
        gif: "",
        legacy: e.legacy
      }, null, 8, ["user", "legacy"])
    ]),
    add: T(({ add: s }) => [
      B(u, {
        "onUpdate:modelValue": (p) => s(p),
        users: e.users,
        groups: e.groups,
        legacy: e.legacy
      }, null, 8, ["onUpdate:modelValue", "users", "groups", "legacy"])
    ]),
    _: 1
  }, 8, ["modelValue", "readonly"]);
}
const cs = /* @__PURE__ */ O(us, [["render", ds]]), fs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cs
}, Symbol.toStringTag, { value: "Module" })), tt = new Oe();
class ps {
  constructor() {
    ee(this, "nodes");
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
const Pt = new ps(), ms = S({
  setup() {
    return { session: te(ae) };
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
        e && (this.breadcrumb = await Pt.lookup(this.session, e));
      },
      immediate: !0
    }
  }
}), hs = { class: "k-node-breadcrumb" };
function gs(e, t, n, o, a, i) {
  return l(), c("div", hs, [
    (l(!0), c(N, null, Q(e.breadcrumb, (r, u) => (l(), c(N, {
      key: r.dataid
    }, [
      X(F(r.name) + " ", 1),
      u < e.breadcrumb.length - 1 ? (l(), c(N, { key: 0 }, [
        X(" ▶ ")
      ], 64)) : L("", !0)
    ], 64))), 128))
  ]);
}
const Kt = /* @__PURE__ */ O(ms, [["render", gs]]), bs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Kt
}, Symbol.toStringTag, { value: "Module" })), _s = S({
  mixins: [de],
  components: { KNodeAncestor: Kt },
  setup() {
    return {
      session: te(ae),
      config: te(he)
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
      return Wt(this.config.baseUrl, {
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
        this.dataid ? this.breadcrumb = await Pt.lookup(
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
      return this.objid ?? parseInt(qt.get("TargetBrowseObjID") ?? "0");
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
}), ys = { class: "k-node-picker-field" }, vs = ["value"];
function $s(e, t, n, o, a, i) {
  const r = C("KButton"), u = C("KNodeAncestor"), d = C("KFormFieldWrapper");
  return l(), z(d, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: T(() => [
      $("div", ys, [
        $("input", {
          ref: "input",
          type: "text",
          class: "k-input",
          value: e.name,
          onFocus: t[0] || (t[0] = (...s) => e.openWindow && e.openWindow(...s))
        }, null, 40, vs),
        B(r, {
          small: "",
          onClick: e.openWindow
        }, {
          default: T(() => [
            X(F(e.browseButtonLabel), 1)
          ]),
          _: 1
        }, 8, ["onClick"]),
        e.clearable ? (l(), z(r, {
          key: 0,
          small: "",
          onClick: e.clear
        }, {
          default: T(() => [
            X(F(e.clearButtonLabel), 1)
          ]),
          _: 1
        }, 8, ["onClick"])) : L("", !0),
        e.dataid ? (l(), z(u, {
          key: 1,
          dataid: e.dataid
        }, null, 8, ["dataid"])) : L("", !0)
      ])
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const ws = /* @__PURE__ */ O(_s, [["render", $s]]), ks = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ws
}, Symbol.toStringTag, { value: "Module" })), Ss = S({
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
}), Os = { class: "k-one-moment" }, js = { class: "k-one-moment-label" };
function xs(e, t, n, o, a, i) {
  const r = C("KSpinner"), u = C("KDialog");
  return l(), z(u, { "model-value": e.loading }, {
    default: T(() => [
      $("div", Os, [
        B(r, {
          height: 36,
          width: 36
        }),
        $("div", js, F(e.label), 1)
      ])
    ]),
    _: 1
  }, 8, ["model-value"]);
}
const Cs = /* @__PURE__ */ O(Ss, [["render", xs]]), Ms = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Cs
}, Symbol.toStringTag, { value: "Module" })), Ts = S({
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
function Ps(e, t, n, o, a, i) {
  return l(), c("div", null, [
    I(e.$slots, "default", { active: e.active })
  ]);
}
const Ks = /* @__PURE__ */ O(Ts, [["render", Ps]]), As = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ks
}, Symbol.toStringTag, { value: "Module" })), Ls = S({
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
}), zs = { class: "text-xl" }, Vs = { key: 0 }, Bs = { class: "rhmuted" };
function Fs(e, t, n, o, a, i) {
  return l(), c("div", zs, [
    X(F(e.title), 1),
    e.subtitle ? (l(), c("span", Vs, [
      X(": "),
      $("span", Bs, F(e.subtitle), 1)
    ])) : L("", !0)
  ]);
}
const Ds = /* @__PURE__ */ O(Ls, [["render", Fs], ["__scopeId", "data-v-c72c9204"]]), Is = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ds
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
}), Es = { class: "k-pagination" }, Us = {
  key: 1,
  class: "k-pagination-buttons"
}, Rs = {
  key: 0,
  class: "k-pagination-button"
}, Ws = /* @__PURE__ */ $("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ $("path", { d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" })
], -1), qs = [
  Ws
], Hs = { key: 0 }, Gs = ["onClick"], Qs = {
  key: 1,
  class: "k-pagination-button"
}, Ys = /* @__PURE__ */ $("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ $("path", { d: "M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" })
], -1), Xs = [
  Ys
], Js = { key: 2 };
function Zs(e, t, n, o, a, i) {
  const r = C("KSelect");
  return l(), c("div", Es, [
    e.potentiallyMultiplePages ? (l(), z(r, {
      key: 0,
      modelValue: e.pageSize,
      "onUpdate:modelValue": t[0] || (t[0] = (u) => e.pageSize = u),
      items: e.pageSizes,
      label: "Page Size"
    }, null, 8, ["modelValue", "items"])) : L("", !0),
    e.hasPrevious || e.hasNext ? (l(), c("div", Us, [
      e.hasPrevious ? (l(), c("a", Rs, qs)) : L("", !0),
      (l(!0), c(N, null, Q(e.pageRange, (u) => (l(), c(N, { key: u }, [
        u === "|" ? (l(), c("div", Hs, "...")) : (l(), c("a", {
          key: 1,
          class: Z(["k-pagination-button k-pagination-button-border", e.classObj(u)]),
          onClick: (d) => e.$emit("update:modelValue", u)
        }, F(u), 11, Gs))
      ], 64))), 128)),
      e.hasNext ? (l(), c("a", Qs, Xs)) : L("", !0)
    ])) : L("", !0),
    e.potentiallyMultiplePages ? (l(), c("div", Js, " Displaying " + F(e.pagination.startIndex) + "-" + F(e.pagination.endIndex) + " of " + F(e.pagination.count) + " items. ", 1)) : L("", !0)
  ]);
}
const ei = /* @__PURE__ */ O(Ns, [["render", Zs]]), ti = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ei
}, Symbol.toStringTag, { value: "Module" })), ni = S({
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
}), ri = { class: "k-pagination2" }, oi = { class: "k-pagination2-buttons" }, si = /* @__PURE__ */ $("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ $("path", { d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" })
], -1), ii = [
  si
], ai = ["onClick"], li = /* @__PURE__ */ $("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ $("path", { d: "M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" })
], -1), ui = [
  li
];
function di(e, t, n, o, a, i) {
  const r = C("KSelect");
  return l(), c("div", ri, [
    $("div", null, [
      B(r, {
        modelValue: e.pageSize,
        "onUpdate:modelValue": t[0] || (t[0] = (u) => e.pageSize = u),
        items: e.pageSizes,
        label: "Page Size"
      }, null, 8, ["modelValue", "items"])
    ]),
    e.pageCount > 1 ? (l(), c(N, { key: 0 }, [
      $("div", oi, [
        e.hasPrevious ? (l(), c("a", {
          key: 0,
          class: "k-pagination2-arrow-button",
          onClick: t[1] || (t[1] = (u) => e.clickedPageNumber(e.pageNumber0 - 1))
        }, ii)) : L("", !0),
        (l(!0), c(N, null, Q(e.pageRange0, (u) => (l(), c("div", {
          key: u,
          class: Z(["k-pagination2-button", e.classObj(u)]),
          onClick: (d) => e.clickedPageNumber(u)
        }, F(u + 1), 11, ai))), 128)),
        e.hasNext ? (l(), c("a", {
          key: 1,
          class: "k-pagination2-arrow-button",
          onClick: t[2] || (t[2] = (u) => e.clickedPageNumber(e.pageNumber0 + 1))
        }, ui)) : L("", !0)
      ]),
      $("div", null, F(e.pageNumber) + " of " + F(e.pageCount) + " pages", 1)
    ], 64)) : L("", !0)
  ]);
}
const ci = /* @__PURE__ */ O(ni, [["render", di]]), fi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ci
}, Symbol.toStringTag, { value: "Module" })), He = S({
  mixins: [je],
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
const pi = /* @__PURE__ */ $("circle", {
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), mi = /* @__PURE__ */ $("path", {
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), hi = [
  pi,
  mi
];
function gi(e, t, n, o, a, i) {
  return l(), c("svg", {
    style: se(e.measurableStyles),
    class: "k-spinner",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, hi, 4);
}
const At = /* @__PURE__ */ O(He, [["render", gi]]), bi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: At
}, Symbol.toStringTag, { value: "Module" })), _i = S({
  components: { KSpinner: At },
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
}), yi = {
  key: 0,
  class: "centerOverlay"
};
function vi(e, t, n, o, a, i) {
  const r = C("KSpinner");
  return e.loading ? (l(), c("div", yi, [
    B(r, {
      "max-width": e.size,
      "max-height": e.size
    }, null, 8, ["max-width", "max-height"])
  ])) : L("", !0);
}
const $i = /* @__PURE__ */ O(_i, [["render", vi]]), wi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $i
}, Symbol.toStringTag, { value: "Module" })), ki = S({
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
}), Si = ["id", "value", "disabled"], Oi = ["for"];
function ji(e, t, n, o, a, i) {
  const r = C("KSpinner"), u = C("KFormFieldWrapper");
  return l(), c("div", null, [
    B(u, {
      label: e.label,
      "success-messages": e.successMessages,
      "error-messages": e.errorMessages
    }, {
      default: T(() => [
        B(Se, {
          name: "fade",
          mode: "out-in"
        }, {
          default: T(() => [
            e.loading ? (l(), z(r, { key: 0 })) : (l(), c("div", {
              key: 1,
              class: Z(["k-radiogroup", e.classObj])
            }, [
              (l(!0), c(N, null, Q(e.items, (d) => (l(), c("div", {
                key: e.getItemValue(d),
                class: "k-radiogroup-item"
              }, [
                ie($("input", {
                  id: e.getItemValue(d),
                  "onUpdate:modelValue": t[0] || (t[0] = (s) => e.localValue = s),
                  type: "radio",
                  value: e.getItemValue(d),
                  disabled: e.getItemDisabled(d)
                }, null, 8, Si), [
                  [It, e.localValue]
                ]),
                $("label", {
                  for: e.getItemValue(d)
                }, F(e.getItemText(d)), 9, Oi)
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
const xi = /* @__PURE__ */ O(ki, [["render", ji]]), Ci = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xi
}, Symbol.toStringTag, { value: "Module" })), Mi = S({
  inject: ["ksnackbar"],
  methods: {
    click() {
    }
  }
});
function Ti(e, t, n, o, a, i) {
  return l(), c("div", null, [
    $("button", {
      onClick: t[0] || (t[0] = (...r) => e.click && e.click(...r))
    }, "click")
  ]);
}
const Pi = /* @__PURE__ */ O(Mi, [["render", Ti]]), Ki = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pi
}, Symbol.toStringTag, { value: "Module" })), Ai = S({
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
}), Li = { class: "k-select" }, zi = ["disabled"], Vi = ["label"], Bi = ["value", "disabled"], Fi = ["value", "disabled"];
function Di(e, t, n, o, a, i) {
  const r = C("KButton"), u = C("KSpinner"), d = C("KFormFieldWrapper");
  return l(), z(d, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: T(() => [
      $("div", Li, [
        ie($("select", {
          "onUpdate:modelValue": t[0] || (t[0] = (s) => e.valueLocal = s),
          class: Z(e.classObj),
          disabled: e.disabledResolved
        }, [
          e.hasGroups ? (l(!0), c(N, { key: 0 }, Q(e.itemsGrouped, (s) => (l(), c("optgroup", {
            key: s[0],
            label: s[0]
          }, [
            (l(!0), c(N, null, Q(s[1], (p) => (l(), c("option", {
              key: e.getItemValue(p),
              value: e.getItemValue(p),
              disabled: e.getItemDisabled(p)
            }, F(e.getItemText(p)), 9, Bi))), 128))
          ], 8, Vi))), 128)) : (l(!0), c(N, { key: 1 }, Q(e.items, (s) => (l(), c("option", {
            key: e.getItemValue(s),
            value: e.getItemValue(s),
            disabled: e.getItemDisabled(s)
          }, F(e.getItemText(s)), 9, Fi))), 128))
        ], 10, zi), [
          [Nt, e.valueLocal]
        ]),
        e.clearable ? (l(), z(r, {
          key: 0,
          onClick: t[1] || (t[1] = (s) => e.valueLocal = null),
          small: ""
        }, {
          default: T(() => [
            X("clear")
          ]),
          _: 1
        })) : L("", !0),
        B(Se, { name: "fade" }, {
          default: T(() => [
            e.loading ? (l(), z(u, {
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
const Ii = /* @__PURE__ */ O(Ai, [["render", Di]]), Ni = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ii
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
}), Ui = {
  key: 0,
  class: "k-smart-ui-panel-header"
}, Ri = { class: "k-smart-ui-panel-body" }, Wi = {
  key: 1,
  class: "k-smart-ui-panel-footer"
};
function qi(e, t, n, o, a, i) {
  return l(), c("div", {
    class: "k-smart-ui-panel",
    style: se(e.style)
  }, [
    e.$slots.header ? (l(), c("div", Ui, [
      I(e.$slots, "header")
    ])) : L("", !0),
    $("div", Ri, [
      I(e.$slots, "default")
    ]),
    e.$slots.footer ? (l(), c("div", Wi, [
      I(e.$slots, "footer")
    ])) : L("", !0)
  ], 4);
}
const Hi = /* @__PURE__ */ O(Ei, [["render", qi]]), Gi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Hi
}, Symbol.toStringTag, { value: "Module" })), Qi = S({
  provide() {
    return {
      // @ts-ignore - not sure why this complains
      [sr]: this
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
      const u = {
        title: t,
        message: n,
        timeout: o,
        actionLabel: a,
        action: i,
        type: e,
        index: r
      };
      this.nitems[r] = u, console.log(o), setInterval(() => this.dismiss(r), o);
    }
  }
}), Yi = { class: "k-snackbar" }, Xi = { class: "k-snackbar-item-message" }, Ji = {
  key: 0,
  class: "k-snackbar-title"
}, Zi = {
  key: 1,
  class: "k-snackbar-text"
}, ea = {
  key: 0,
  class: "k-snackbar-action"
}, ta = ["onClick"];
function na(e, t, n, o, a, i) {
  return l(), c(N, null, [
    I(e.$slots, "default"),
    $("div", Yi, [
      B(Be, {
        name: "slide",
        tag: "div",
        mode: "out-in"
      }, {
        default: T(() => [
          (l(!0), c(N, null, Q(e.items, (r) => (l(), c("div", {
            key: r.index,
            class: Z(["k-snackbar-item", e.classObj(r)])
          }, [
            $("div", Xi, [
              r.title ? (l(), c("div", Ji, F(r.title), 1)) : L("", !0),
              r.message ? (l(), c("div", Zi, F(r.message), 1)) : L("", !0)
            ]),
            r.action ? (l(), c("div", ea, [
              $("a", {
                href: "#",
                onClick: ue((u) => e.action(r), ["prevent"])
              }, F(r.actionLabel), 9, ta)
            ])) : L("", !0)
          ], 2))), 128))
        ]),
        _: 1
      })
    ])
  ], 64);
}
const ra = /* @__PURE__ */ O(Qi, [["render", na]]), oa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ra
}, Symbol.toStringTag, { value: "Module" })), sa = S({
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
}), ia = {
  key: 0,
  class: "j-sort-header-arrow"
}, aa = {
  key: 1,
  class: "j-sort-header-arrow"
};
function la(e, t, n, o, a, i) {
  return l(), c("a", {
    href: "#",
    onClick: t[0] || (t[0] = ue((...r) => e.emitClick && e.emitClick(...r), ["prevent"]))
  }, [
    I(e.$slots, "default"),
    B(Se, {
      name: "fade",
      mode: "out-in"
    }, {
      default: T(() => [
        e.isActive && e.sortAsc ? (l(), c("span", ia, "↑")) : e.isActive ? (l(), c("span", aa, "↓")) : L("", !0)
      ]),
      _: 1
    })
  ]);
}
const ua = /* @__PURE__ */ O(sa, [["render", la]]), da = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ua
}, Symbol.toStringTag, { value: "Module" })), ca = {}, fa = { class: "k-spacer" };
function pa(e, t) {
  return l(), c("div", fa);
}
const ma = /* @__PURE__ */ O(ca, [["render", pa]]), ha = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ma
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
const ga = /* @__PURE__ */ $("span", { class: "k-switch-slider" }, null, -1), ba = [
  ga
];
function _a(e, t, n, o, a, i) {
  return l(), c("div", {
    class: Z(["k-switch", e.classObj]),
    onClick: t[0] || (t[0] = (...r) => e.toggle && e.toggle(...r))
  }, ba, 2);
}
const ya = /* @__PURE__ */ O(Ge, [["render", _a]]), va = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ya
}, Symbol.toStringTag, { value: "Module" })), $a = S({
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
function wa(e, t, n, o, a, i) {
  const r = C("KLinearProgressIndicator");
  return l(), c("div", null, [
    e.loading ? (l(), z(r, { key: 0 })) : L("", !0),
    $("table", {
      class: Z(["k-table", e.classObj])
    }, [
      I(e.$slots, "default")
    ], 2)
  ]);
}
const ka = /* @__PURE__ */ O($a, [["render", wa]]), Sa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ka
}, Symbol.toStringTag, { value: "Module" })), Oa = S({
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
}), ja = ["rows"];
function xa(e, t, n, o, a, i) {
  const r = C("KFormFieldWrapper");
  return l(), z(r, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: T(() => [
      ie($("textarea", pe({
        "onUpdate:modelValue": t[0] || (t[0] = (u) => e.valueLocal = u)
      }, e.$attrs, {
        spellcheck: "false",
        class: [e.classObj, "k-textarea"],
        rows: e.rows,
        onKeydown: t[1] || (t[1] = ye(ue((...u) => e.tabber && e.tabber(...u), ["prevent"]), ["tab"]))
      }), null, 16, ja), [
        [Ve, e.valueLocal]
      ])
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const Ca = /* @__PURE__ */ O(Oa, [["render", xa]]), Ma = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ca
}, Symbol.toStringTag, { value: "Module" })), Ta = S({
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
}), Pa = ["placeholder"];
function Ka(e, t, n, o, a, i) {
  const r = C("KFormFieldWrapper");
  return l(), z(r, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: T(() => [
      ie($("input", {
        "onUpdate:modelValue": t[0] || (t[0] = (u) => e.value = u),
        class: Z(["k-input-text-field", e.classObj]),
        placeholder: e.placeholder
      }, null, 10, Pa), [
        [Ve, e.value]
      ])
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const Aa = /* @__PURE__ */ O(Ta, [["render", Ka]]), La = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Aa
}, Symbol.toStringTag, { value: "Module" })), za = S({
  setup() {
    return {
      config: te(he),
      session: te(ae)
    };
  },
  mixins: [je],
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
}), Va = ["src"];
function Ba(e, t, n, o, a, i) {
  return e.url ? (l(), c("img", {
    key: 0,
    src: e.url,
    style: se([e.measurableStyles])
  }, null, 12, Va)) : L("", !0);
}
const Fa = /* @__PURE__ */ O(za, [["render", Ba]]), Da = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fa
}, Symbol.toStringTag, { value: "Module" })), be = new Oe();
function Ia(e) {
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
class Na {
  constructor() {
    ee(this, "session");
    ee(this, "queueItems");
    ee(this, "intervalId");
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
      (await t.batch()).forEach((a, i) => {
        const r = n[i].resolveFunc;
        r(a);
      });
    } catch {
      n.forEach((o) => o.resolveFunc(null));
    }
  }
}
class Ea {
  constructor() {
    ee(this, "users");
    ee(this, "userLookupQueue");
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
          const o = await t.members.member(n), a = Ia(o.data);
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
      const i = (r) => {
        r instanceof Error ? a(r) : (this.users[n] = r, o(r), be.release(n));
      };
      this.userLookupQueue.queue(t, i, n);
    })) : null;
  }
  async lookup(t, n, o = !1) {
    return o ? this.lookupLegacy(t, n) : this.lookupRPC(t, n);
  }
}
const Le = new Ea(), Ua = S({
  setup() {
    return { session: te(ae) };
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
      return V(this.userRecLocal, "id") ?? V(this.userRecLocal, "userid");
    },
    // userLocal() {
    //   return this.user ?? this.userid ?? this.userRec
    // },
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
        this.isInteger(e) ? this.userRecLocal = await Le.lookup(this.session, e, this.legacy).catch((t) => null) : this.userRecLocal = e;
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
}), Ra = {
  key: 0,
  class: "k-user-link"
};
function Wa(e, t, n, o, a, i) {
  const r = C("KUserGIF");
  return e.userRecLocal ? (l(), c("span", Ra, [
    e.gif ? (l(), z(r, {
      key: 0,
      "user-rec": e.userRecLocal
    }, null, 8, ["user-rec"])) : L("", !0),
    X("   "),
    $("a", {
      href: "#",
      onClick: t[0] || (t[0] = ue((...u) => e.click && e.click(...u), ["prevent"]))
    }, F(e.displayName), 1)
  ])) : L("", !0);
}
const qa = /* @__PURE__ */ O(Ua, [["render", Wa]]), Ha = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qa
}, Symbol.toStringTag, { value: "Module" })), Ga = S({
  mixins: [de],
  setup() {
    return { session: te(ae) };
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
          const t = this.legacy ? await Le.lookupLegacy(this.session, e).catch((n) => null) : await Le.lookup(this.session, e).catch((n) => null);
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
}), Qa = { class: "flex items-center gap-1" };
function Ya(e, t, n, o, a, i) {
  const r = C("KUserGIF"), u = C("KAutocomplete"), d = C("KUserLink"), s = C("KFormFieldWrapper");
  return l(), z(s, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: T(() => [
      e.editable ? (l(), z(u, {
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
        prepend: T(({ item: p }) => [
          p ? (l(), z(r, {
            key: 0,
            type: p.type
          }, null, 8, ["type"])) : (l(), z(r, {
            key: 1,
            type: e.USER
          }, null, 8, ["type"]))
        ]),
        item: T(({ item: p }) => [
          $("div", Qa, [
            B(r, {
              type: p.type
            }, null, 8, ["type"]),
            X(" " + F(p.text), 1)
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "search-input", "placeholder", "width", "loading", "items", "return-object"])) : (l(), z(d, {
        key: 1,
        user: e.modelValue,
        gif: ""
      }, null, 8, ["user"]))
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const Lt = /* @__PURE__ */ O(Ga, [["render", Ya]]), Xa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Lt
}, Symbol.toStringTag, { value: "Module" })), Ja = S({
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
}), Za = { class: "k-tabs" }, el = { class: "k-tabs-nav" }, tl = ["href", "onClick"], nl = { class: "k-tabs-content" };
function rl(e, t, n, o, a, i) {
  return l(), c("div", Za, [
    $("div", el, [
      (l(!0), c(N, null, Q(e.tabs, (r) => (l(), c("div", {
        key: r.name,
        class: Z(e.classObj(r))
      }, [
        $("a", {
          href: `#${r.name}`,
          onClick: (u) => e.selectTab(r.name)
        }, F(r.title), 9, tl)
      ], 2))), 128))
    ]),
    $("div", nl, [
      I(e.$slots, "default")
    ])
  ]);
}
const ol = /* @__PURE__ */ O(Ja, [["render", rl]]), sl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ol
}, Symbol.toStringTag, { value: "Module" })), il = S({
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
}), al = { key: 0 };
function ll(e, t, n, o, a, i) {
  return e.isSelected ? (l(), c("div", al, [
    I(e.$slots, "default")
  ])) : L("", !0);
}
const ul = /* @__PURE__ */ O(il, [["render", ll]]), dl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ul
}, Symbol.toStringTag, { value: "Module" })), cl = S({
  extends: Lt,
  setup() {
    return { session: te(ae) };
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
}), fl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cl
}, Symbol.toStringTag, { value: "Module" }));
class pl {
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
const Ml = (e, t) => {
  const n = t.sortKey, a = t.sortAsc ? 1 : -1;
  return [...e].sort((i, r) => {
    if (n) {
      const u = String(V(i, n, "") ?? ""), d = String(V(r, n, "") ?? "");
      return a * u.toLowerCase().localeCompare(d.toLowerCase());
    } else
      return 0;
  });
};
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
function me(e) {
  return (t, n = {}) => new Promise((o) => {
    window.csui.require(
      ["csui/dialogs/modal.alert/modal.alert"],
      function(a) {
        a[e](o, t, null, n);
      }
    );
  });
}
function ml({
  dataId: e,
  selectedTab: t = void 0,
  selectedProperty: n = void 0
}) {
  window.csui ? gl({ dataId: e, selectedTab: t, selectedProperty: n }) : hl({ dataId: e });
}
function hl({ dataId: e }) {
  const t = zt();
  window.location.href = `${t.baseUrl}/open/${e}`;
}
function gl({
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
const Tl = () => ({
  showSuccess: _e("showSuccess"),
  showInformation: _e("showInformation"),
  showWarning: _e("showWarning"),
  showError: _e("showError"),
  showMessage: _e("showMessage"),
  confirmSuccess: me("confirmSuccess"),
  confirmInformation: me("confirmInformation"),
  confirmWarning: me("confirmWarning"),
  confirmError: me("confirmError"),
  confirmQuestion: me("confirmQuestion"),
  confirmMessage: me("confirmMessage"),
  openDataId: ml
});
function Pl(e, t) {
  const n = (t == null ? void 0 : t.default) ?? (() => null), o = (t == null ? void 0 : t.watch) ?? [], a = ve(n()), i = ve(!1), r = ve(null), u = async () => {
    try {
      i.value = !0, a.value = await e(), r.value = null;
    } catch (d) {
      r.value = d;
    } finally {
      i.value = !1;
    }
  };
  return o.map((d) => Et(d, u)), u(), { data: a, pending: i, error: r, refresh: u };
}
const Kl = (e) => {
  const t = new Ht(e);
  return {
    install(o) {
      const a = {
        userId: e.userId,
        img: e.img,
        baseUrl: e.baseUrl,
        jsLongDateFormat: e.datelong,
        jsShortDateFormat: e.dateshort
      };
      o.provide(ae, t), o.provide(he, a), o.provide(
        ir,
        new pl(e.datelong, e.dateshort)
      );
    }
  };
}, Al = () => {
  const e = (n) => {
    Object.entries(/* @__PURE__ */ Object.assign({
      "./components/Card/KCard.vue": Qt,
      "./components/Card/KCardActions.vue": en,
      "./components/Card/KCardText.vue": sn,
      "./components/Card/KCardTitle.vue": cn,
      "./components/Icons/KMenuDownIcon.vue": _n,
      "./components/Icons/KSubtractIcon.vue": On,
      "./components/KAdminLink.vue": Kn,
      "./components/KAlert.vue": Wn,
      "./components/KApp.vue": Yn,
      "./components/KAutocomplete.vue": or,
      "./components/KBrowseLink.vue": $r,
      "./components/KButton.vue": jr,
      "./components/KConfirm.vue": Tr,
      "./components/KDateTimePicker.vue": Vr,
      "./components/KDialog.vue": Ir,
      "./components/KDivider.vue": Rr,
      "./components/KDot.vue": Gr,
      "./components/KFormFieldWrapper.vue": Zr,
      "./components/KFunctionMenu.vue": ao,
      "./components/KFunctionMenuModern.vue": wo,
      "./components/KFunctionMenuSmartUI.vue": jo,
      "./components/KLinearProgressIndicator.vue": Po,
      "./components/KList/KList.vue": Vo,
      "./components/KList/KListItem.vue": _o,
      "./components/KList/KListItemSubtitle.vue": go,
      "./components/KList/KListItemTitle.vue": fo,
      "./components/KMenu/KMenu.vue": No,
      "./components/KMenu/KRightCaret.vue": Go,
      "./components/KMulti.vue": ns,
      "./components/KMulti2.vue": ls,
      "./components/KMultiUserPicker.vue": fs,
      "./components/KNodeAncestor.vue": bs,
      "./components/KNodePickerField.vue": ks,
      "./components/KOneMoment.vue": Ms,
      "./components/KPageDropZone.vue": As,
      "./components/KPageTitle.vue": Is,
      "./components/KPagination.vue": ti,
      "./components/KPagination2.vue": fi,
      "./components/KPleaseWait.vue": wi,
      "./components/KRadioGroup.vue": Ci,
      "./components/KScratch.vue": Ki,
      "./components/KSelect.vue": Ni,
      "./components/KSmartUIPanel.vue": Gi,
      "./components/KSnackbar.vue": oa,
      "./components/KSortHeader.vue": da,
      "./components/KSpacer.vue": ha,
      "./components/KSpinner.vue": bi,
      "./components/KSwitch.vue": va,
      "./components/KTable.vue": Sa,
      "./components/KTextArea.vue": Ma,
      "./components/KTextField.vue": La,
      "./components/KUserGIF.vue": Da,
      "./components/KUserLink.vue": Ha,
      "./components/KUserPicker.vue": Xa,
      "./components/KUserPickerLegacy.vue": fl,
      "./components/Tabs/KTabItem.vue": dl,
      "./components/Tabs/KTabs.vue": sl
    })).forEach(
      ([a, i]) => {
        var u, d;
        const r = (d = (u = a == null ? void 0 : a.split("/")) == null ? void 0 : u.pop()) == null ? void 0 : d.replace(/\.\w+$/, "");
        n.component(r, i.default);
      }
    );
  };
  return {
    install(n) {
      e(n);
    }
  };
}, zt = () => {
  const e = it(ae, null);
  if (!e)
    throw new Error(
      "Failed to inject session. Make sure @kweli/cs-vue-vite-plugin is set up properly."
    );
  return e;
};
export {
  Pn as KAdminLink,
  Rn as KAlert,
  Qn as KApp,
  rr as KAutocomplete,
  vr as KBrowseLink,
  Or as KButton,
  Gt as KCard,
  Zt as KCardActions,
  on as KCardText,
  dn as KCardTitle,
  Mr as KConfirm,
  zr as KDateTimePicker,
  Dr as KDialog,
  We as KDivider,
  Hr as KDot,
  Jr as KFormFieldWrapper,
  io as KFunctionMenu,
  $o as KFunctionMenuModern,
  Oo as KFunctionMenuSmartUI,
  To as KLinearProgressIndicator,
  zo as KList,
  qe as KListItem,
  Tt as KListItemSubtitle,
  Mt as KListItemTitle,
  Io as KMenu,
  De as KMenuDownIcon,
  ts as KMulti,
  as as KMulti2,
  cs as KMultiUserPicker,
  Kt as KNodeAncestor,
  ws as KNodePickerField,
  Cs as KOneMoment,
  Ks as KPageDropZone,
  Ds as KPageTitle,
  ei as KPagination,
  ci as KPagination2,
  $i as KPleaseWait,
  xi as KRadioGroup,
  Ho as KRightCaret,
  Pi as KScratch,
  Ii as KSelect,
  Hi as KSmartUIPanel,
  ra as KSnackbar,
  ua as KSortHeader,
  ma as KSpacer,
  At as KSpinner,
  Sn as KSubtractIcon,
  ya as KSwitch,
  ul as KTabItem,
  ka as KTable,
  ol as KTabs,
  Ca as KTextArea,
  Aa as KTextField,
  Fa as KUserGIF,
  qa as KUserLink,
  Lt as KUserPicker,
  cl as KUserPickerLegacy,
  he as configKey,
  ar as confirmDialogKey,
  Kl as createVueVitePlugin,
  Al as createVueViteRegisterComponentsPlugin,
  ir as dateTimeFormatterKey,
  Ml as generalSort,
  te as injectStrict,
  cr as nodeLookup,
  ae as sessionKey,
  sr as snackbarKey,
  Pl as useAsyncData,
  zt as useSession,
  Tl as useSmartUI,
  Le as userLookup
};
