import { defineComponent as S, h as le, openBlock as u, createElementBlock as c, renderSlot as N, mergeProps as me, createElementVNode as $, toDisplayString as F, createCommentVNode as L, normalizeStyle as se, resolveComponent as M, createVNode as D, withCtx as A, resolveDirective as Se, withDirectives as ne, normalizeClass as J, withKeys as fe, withModifiers as oe, vModelText as Oe, Fragment as U, renderList as X, createTextVNode as Q, inject as wt, createBlock as V, vModelDynamic as St, Teleport as Ot, Transition as ge, setBlockTracking as Ve, toHandlers as Be, ref as Fe, TransitionGroup as xe, useCssVars as qe, vModelRadio as xt, vModelSelect as Kt } from "vue";
import z from "lodash.get";
import { directive as Ke } from "vue3-click-away";
import _e from "@chriscdn/promise-semaphore";
import { format as Ne } from "date-fns";
import { disableBodyScroll as jt, enableBodyScroll as Ct } from "body-scroll-lock";
import Tt from "@googlicius/build-url";
import Pt from "js-cookie";
import { Session as Mt } from "@kweli/cs-rest";
const He = S({
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
}), G = (e, t = "px") => {
  if (!(e == null || e === ""))
    return isNaN(+e) ? String(e) : `${Number(e)}${t}`;
}, be = S({
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
      const e = {}, t = G(this.height), n = G(this.minHeight), s = G(this.minWidth), l = G(this.maxHeight), i = G(this.maxWidth), r = G(this.width);
      return t && (e.height = t), n && (e.minHeight = n), s && (e.minWidth = s), l && (e.maxHeight = l), i && (e.maxWidth = i), r && (e.width = r), e;
    }
  }
}), Lt = S({
  mixins: [be, He],
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
const At = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Lt
}, Symbol.toStringTag, { value: "Module" })), zt = S({});
const O = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, l] of t)
    n[s] = l;
  return n;
}, Vt = { class: "k-card-actions" };
function Bt(e, t, n, s, l, i) {
  return u(), c("div", Vt, [
    N(e.$slots, "default")
  ]);
}
const Ft = /* @__PURE__ */ O(zt, [["render", Bt]]), Nt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ft
}, Symbol.toStringTag, { value: "Module" })), Dt = S({});
const It = { class: "k-card-text" };
function Et(e, t, n, s, l, i) {
  return u(), c("div", It, [
    N(e.$slots, "default")
  ]);
}
const Ut = /* @__PURE__ */ O(Dt, [["render", Et]]), Rt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ut
}, Symbol.toStringTag, { value: "Module" })), Wt = S({});
const qt = { class: "k-card-title" };
function Ht(e, t, n, s, l, i) {
  return u(), c("div", qt, [
    N(e.$slots, "default")
  ]);
}
const Gt = /* @__PURE__ */ O(Wt, [["render", Ht]]), Qt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Gt
}, Symbol.toStringTag, { value: "Module" })), Yt = S({
  name: "MenuDownIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
}), Xt = ["aria-hidden", "aria-label"], Jt = ["fill", "width", "height"], Zt = { d: "M7,10L12,15L17,10H7Z" }, en = { key: 0 };
function tn(e, t, n, s, l, i) {
  return u(), c("span", me(e.$attrs, {
    "aria-hidden": !e.title,
    "aria-label": e.title,
    class: "material-design-icon menu-down-icon",
    role: "img",
    onClick: t[0] || (t[0] = (r) => e.$emit("click", r))
  }), [
    (u(), c("svg", {
      fill: e.fillColor,
      class: "material-design-icon__svg",
      width: e.size,
      height: e.size,
      viewBox: "0 0 24 24"
    }, [
      $("path", Zt, [
        e.title ? (u(), c("title", en, F(e.title), 1)) : L("", !0)
      ])
    ], 8, Jt))
  ], 16, Xt);
}
const Ge = /* @__PURE__ */ O(Yt, [["render", tn]]), nn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ge
}, Symbol.toStringTag, { value: "Module" })), rn = S({
  setup() {
    return { config: ee(he) };
  }
}), on = { clsas: "space-y-2" }, sn = /* @__PURE__ */ $("hr", null, null, -1), ln = ["href"];
function an(e, t, n, s, l, i) {
  return u(), c("div", on, [
    sn,
    $("a", {
      href: `${e.config.baseUrl}?func=admin.index`
    }, "Admin Home", 8, ln)
  ]);
}
const un = /* @__PURE__ */ O(rn, [["render", an]]), dn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: un
}, Symbol.toStringTag, { value: "Module" }));
function cn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Qe = {}, Ye = {}, je = {};
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
})(je);
var Xe = {};
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
})(Xe);
var Je = {};
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
})(Je);
var Ze = {}, ye = {}, Ce = { exports: {} }, E = String, et = function() {
  return { isColorSupported: !1, reset: E, bold: E, dim: E, italic: E, underline: E, inverse: E, hidden: E, strikethrough: E, black: E, red: E, green: E, yellow: E, blue: E, magenta: E, cyan: E, white: E, gray: E, bgBlack: E, bgRed: E, bgGreen: E, bgYellow: E, bgBlue: E, bgMagenta: E, bgCyan: E, bgWhite: E };
};
Ce.exports = et();
Ce.exports.createColors = et;
var tt = Ce.exports;
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
  const n = /* @__PURE__ */ s(tt);
  function s(d) {
    return d && d.__esModule ? d : {
      default: d
    };
  }
  let l = /* @__PURE__ */ new Set();
  function i(d, o, f) {
    typeof process < "u" && process.env.JEST_WORKER_ID || f && l.has(f) || (f && l.add(f), console.warn(""), o.forEach((y) => console.warn(d, "-", y)));
  }
  function r(d) {
    return n.default.dim(d);
  }
  const a = {
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
})(ye);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return l;
    }
  });
  const t = /* @__PURE__ */ n(ye);
  function n(i) {
    return i && i.__esModule ? i : {
      default: i
    };
  }
  function s({ version: i, from: r, to: a }) {
    t.default.warn(`${r}-color-renamed`, [
      `As of Tailwind CSS ${i}, \`${r}\` has been renamed to \`${a}\`.`,
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
})(Ze);
var nt = {};
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
      for (let a in r) {
        var l;
        !(n == null || (l = n.hasOwnProperty) === null || l === void 0) && l.call(n, a) || (n[a] = r[a]);
      }
      for (let a of Object.getOwnPropertySymbols(r)) {
        var i;
        !(n == null || (i = n.hasOwnProperty) === null || i === void 0) && i.call(n, a) || (n[a] = r[a]);
      }
    }
    return n;
  }
})(nt);
var rt = {};
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
})(rt);
var ot = {}, ve = {};
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
      return a;
    },
    issueFlagNotices: function() {
      return o;
    },
    default: function() {
      return f;
    }
  });
  const n = /* @__PURE__ */ l(tt), s = /* @__PURE__ */ l(ye);
  function l(y) {
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
  function a(y, m) {
    if (r.future.includes(m)) {
      var w, b, K;
      return y.future === "all" || ((K = (b = y == null || (w = y.future) === null || w === void 0 ? void 0 : w[m]) !== null && b !== void 0 ? b : i[m]) !== null && K !== void 0 ? K : !1);
    }
    if (r.experimental.includes(m)) {
      var B, R, W;
      return y.experimental === "all" || ((W = (R = y == null || (B = y.experimental) === null || B === void 0 ? void 0 : B[m]) !== null && R !== void 0 ? R : i[m]) !== null && W !== void 0 ? W : !1);
    }
    return !1;
  }
  function d(y) {
    if (y.experimental === "all")
      return r.experimental;
    var m;
    return Object.keys((m = y?.experimental) !== null && m !== void 0 ? m : {}).filter((w) => r.experimental.includes(w) && y.experimental[w]);
  }
  function o(y) {
    if (process.env.JEST_WORKER_ID === void 0 && d(y).length > 0) {
      let m = d(y).map((w) => n.default.yellow(w)).join(", ");
      s.default.warn("experimental-flags-enabled", [
        `You have enabled experimental features: ${m}`,
        "Experimental features in Tailwind CSS are not covered by semver, may introduce breaking changes, and can change at any time."
      ]);
    }
  }
  const f = r;
})(ve);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "normalizeConfig", {
    enumerable: !0,
    get: function() {
      return i;
    }
  });
  const t = ve, n = /* @__PURE__ */ l(ye);
  function s(r) {
    if (typeof WeakMap != "function")
      return null;
    var a = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new WeakMap();
    return (s = function(o) {
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
    var d = s(a);
    if (d && d.has(r))
      return d.get(r);
    var o = {}, f = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var y in r)
      if (y !== "default" && Object.prototype.hasOwnProperty.call(r, y)) {
        var m = f ? Object.getOwnPropertyDescriptor(r, y) : null;
        m && (m.get || m.set) ? Object.defineProperty(o, y, m) : o[y] = r[y];
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
      let { content: f, purge: y, safelist: m } = r;
      return Array.isArray(m) ? m : Array.isArray(f?.safelist) ? f.safelist : Array.isArray(y?.safelist) ? y.safelist : Array.isArray(y == null || (o = y.options) === null || o === void 0 ? void 0 : o.safelist) ? y.options.safelist : [];
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
          var m, w, b, K, B, R, W, I, q, H;
          return !((m = r.purge) === null || m === void 0) && m.extract ? r.purge.extract : !((w = r.content) === null || w === void 0) && w.extract ? r.content.extract : !((b = r.purge) === null || b === void 0 || (K = b.extract) === null || K === void 0) && K.DEFAULT ? r.purge.extract.DEFAULT : !((B = r.content) === null || B === void 0 || (R = B.extract) === null || R === void 0) && R.DEFAULT ? r.content.extract.DEFAULT : !((W = r.purge) === null || W === void 0 || (I = W.options) === null || I === void 0) && I.extractors ? r.purge.options.extractors : !((q = r.content) === null || q === void 0 || (H = q.options) === null || H === void 0) && H.extractors ? r.content.options.extractors : {};
        })(), f = {}, y = (() => {
          var m, w, b, K;
          if (!((m = r.purge) === null || m === void 0 || (w = m.options) === null || w === void 0) && w.defaultExtractor)
            return r.purge.options.defaultExtractor;
          if (!((b = r.content) === null || b === void 0 || (K = b.options) === null || K === void 0) && K.defaultExtractor)
            return r.content.options.defaultExtractor;
        })();
        if (y !== void 0 && (f.DEFAULT = y), typeof o == "function")
          f.DEFAULT = o;
        else if (Array.isArray(o))
          for (let { extensions: m, extractor: w } of o ?? [])
            for (let b of m)
              f[b] = w;
        else
          typeof o == "object" && o !== null && Object.assign(f, o);
        return f;
      })(),
      transform: (() => {
        let o = (() => {
          var y, m, w, b, K, B;
          return !((y = r.purge) === null || y === void 0) && y.transform ? r.purge.transform : !((m = r.content) === null || m === void 0) && m.transform ? r.content.transform : !((w = r.purge) === null || w === void 0 || (b = w.transform) === null || b === void 0) && b.DEFAULT ? r.purge.transform.DEFAULT : !((K = r.content) === null || K === void 0 || (B = K.transform) === null || B === void 0) && B.DEFAULT ? r.content.transform.DEFAULT : {};
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
})(ot);
var st = {};
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
})(st);
var it = {};
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
})(it);
var lt = {}, at = {};
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
})(at);
var Te = {}, Pe = {}, ut = {};
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
})(ut);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(b, K) {
    for (var B in K)
      Object.defineProperty(b, B, {
        enumerable: !0,
        get: K[B]
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
  const n = /* @__PURE__ */ s(ut);
  function s(b) {
    return b && b.__esModule ? b : {
      default: b
    };
  }
  let l = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i, i = /^#([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i, r = /(?:\d+|\d*\.\d+)%?/, a = /(?:\s*,\s*|\s+)/, d = /\s*[,/]\s*/, o = /var\(--(?:[^ )]*?)\)/, f = new RegExp(`^(rgba?)\\(\\s*(${r.source}|${o.source})(?:${a.source}(${r.source}|${o.source}))?(?:${a.source}(${r.source}|${o.source}))?(?:${d.source}(${r.source}|${o.source}))?\\s*\\)$`), y = new RegExp(`^(hsla?)\\(\\s*((?:${r.source})(?:deg|rad|grad|turn)?|${o.source})(?:${a.source}(${r.source}|${o.source}))?(?:${a.source}(${r.source}|${o.source}))?(?:${d.source}(${r.source}|${o.source}))?\\s*\\)$`);
  function m(b, { loose: K = !1 } = {}) {
    var B, R;
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
        color: n.default[b].map((Y) => Y.toString())
      };
    let W = b.replace(i, (Y, re, te, _, C) => [
      "#",
      re,
      re,
      te,
      te,
      _,
      _,
      C ? C + C : ""
    ].join("")).match(l);
    if (W !== null)
      return {
        mode: "rgb",
        color: [
          parseInt(W[1], 16),
          parseInt(W[2], 16),
          parseInt(W[3], 16)
        ].map((Y) => Y.toString()),
        alpha: W[4] ? (parseInt(W[4], 16) / 255).toString() : void 0
      };
    var I;
    let q = (I = b.match(f)) !== null && I !== void 0 ? I : b.match(y);
    if (q === null)
      return null;
    let H = [
      q[2],
      q[3],
      q[4]
    ].filter(Boolean).map((Y) => Y.toString());
    return H.length === 2 && H[0].startsWith("var(") ? {
      mode: q[1],
      color: [
        H[0]
      ],
      alpha: H[1]
    } : !K && H.length !== 3 || H.length < 3 && !H.some((Y) => /^var\(.*?\)$/.test(Y)) ? null : {
      mode: q[1],
      color: H,
      alpha: (B = q[5]) === null || B === void 0 || (R = B.toString) === null || R === void 0 ? void 0 : R.call(B)
    };
  }
  function w({ mode: b, color: K, alpha: B }) {
    let R = B !== void 0;
    return b === "rgba" || b === "hsla" ? `${b}(${K.join(", ")}${R ? `, ${B}` : ""})` : `${b}(${K.join(" ")}${R ? ` / ${B}` : ""})`;
  }
})(Pe);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(i, r) {
    for (var a in r)
      Object.defineProperty(i, a, {
        enumerable: !0,
        get: r[a]
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
  const n = Pe;
  function s(i, r, a) {
    if (typeof i == "function")
      return i({
        opacityValue: r
      });
    let d = (0, n.parseColor)(i, {
      loose: !0
    });
    return d === null ? a : (0, n.formatColor)({
      ...d,
      alpha: r
    });
  }
  function l({ color: i, property: r, variable: a }) {
    let d = [].concat(r);
    if (typeof i == "function")
      return {
        [a]: "1",
        ...Object.fromEntries(d.map((f) => [
          f,
          i({
            opacityVariable: a,
            opacityValue: `var(${a})`
          })
        ]))
      };
    const o = (0, n.parseColor)(i);
    return o === null ? Object.fromEntries(d.map((f) => [
      f,
      i
    ])) : o.alpha !== void 0 ? Object.fromEntries(d.map((f) => [
      f,
      i
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
})(Te);
var Me = {}, dt = {}, $e = {};
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
    let l = [], i = [], r = 0, a = !1;
    for (let d = 0; d < n.length; d++) {
      let o = n[d];
      l.length === 0 && o === s[0] && !a && (s.length === 1 || n.slice(d, d + s.length) === s) && (i.push(n.slice(r, d)), r = d + s.length), a ? a = !1 : o === "\\" && (a = !0), o === "(" || o === "[" || o === "{" ? l.push(o) : (o === ")" && l[l.length - 1] === "(" || o === "]" && l[l.length - 1] === "[" || o === "}" && l[l.length - 1] === "{") && l.pop();
    }
    return i.push(n.slice(r)), i;
  }
})($e);
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
  const n = $e;
  let s = /* @__PURE__ */ new Set([
    "inset",
    "inherit",
    "initial",
    "revert",
    "unset"
  ]), l = /\ +(?![^(]*\))/g, i = /^-?(\d+|\.\d+)(.*?)$/g;
  function r(d) {
    return (0, n.splitAtTopLevelOnly)(d, ",").map((f) => {
      let y = f.trim(), m = {
        raw: y
      }, w = y.split(l), b = /* @__PURE__ */ new Set();
      for (let K of w)
        i.lastIndex = 0, !b.has("KEYWORD") && s.has(K) ? (m.keyword = K, b.add("KEYWORD")) : i.test(K) ? b.has("X") ? b.has("Y") ? b.has("BLUR") ? b.has("SPREAD") || (m.spread = K, b.add("SPREAD")) : (m.blur = K, b.add("BLUR")) : (m.y = K, b.add("Y")) : (m.x = K, b.add("X")) : m.color ? (m.unknown || (m.unknown = []), m.unknown.push(K)) : m.color = K;
      return m.valid = m.x !== void 0 && m.y !== void 0, m;
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
})(dt);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(p, j) {
    for (var T in j)
      Object.defineProperty(p, T, {
        enumerable: !0,
        get: j[T]
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
      return y;
    },
    percentage: function() {
      return m;
    },
    length: function() {
      return K;
    },
    lineWidth: function() {
      return R;
    },
    shadow: function() {
      return W;
    },
    color: function() {
      return I;
    },
    image: function() {
      return q;
    },
    gradient: function() {
      return Y;
    },
    position: function() {
      return te;
    },
    familyName: function() {
      return _;
    },
    genericName: function() {
      return x;
    },
    absoluteSize: function() {
      return v;
    },
    relativeSize: function() {
      return g;
    }
  });
  const n = Pe, s = dt, l = $e;
  let i = [
    "min",
    "max",
    "clamp",
    "calc"
  ];
  function r(p) {
    return i.some((j) => new RegExp(`^${j}\\(.*\\)`).test(p));
  }
  const a = "--tw-placeholder", d = new RegExp(a, "g");
  function o(p, j = !0) {
    return p.startsWith("--") ? `var(${p})` : p.includes("url(") ? p.split(/(url\(.*?\))/g).filter(Boolean).map((T) => /^url\(.*?\)$/.test(T) ? T : o(T, !1)).join("") : (p = p.replace(/([^\\])_+/g, (T, P) => P + " ".repeat(T.length - 1)).replace(/^_/g, " ").replace(/\\_/g, "_"), j && (p = p.trim()), p = p.replace(/(calc|min|max|clamp)\(.+\)/g, (T) => {
      let P = [];
      return T.replace(/var\((--.+?)[,)]/g, (Z, ze) => (P.push(ze), Z.replace(ze, a))).replace(/(-?\d*\.?\d(?!\b-\d.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g, "$1 $2 ").replace(d, () => P.shift());
    }), p);
  }
  function f(p) {
    return p.startsWith("url(");
  }
  function y(p) {
    return !isNaN(Number(p)) || r(p);
  }
  function m(p) {
    return p.endsWith("%") && y(p.slice(0, -1)) || r(p);
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
  function K(p) {
    return p === "0" || new RegExp(`^[+-]?[0-9]*.?[0-9]+(?:[eE][+-]?[0-9]+)?${b}$`).test(p) || r(p);
  }
  let B = /* @__PURE__ */ new Set([
    "thin",
    "medium",
    "thick"
  ]);
  function R(p) {
    return B.has(p);
  }
  function W(p) {
    let j = (0, s.parseBoxShadowValue)(o(p));
    for (let T of j)
      if (!T.valid)
        return !1;
    return !0;
  }
  function I(p) {
    let j = 0;
    return (0, l.splitAtTopLevelOnly)(p, "_").every((P) => (P = o(P), P.startsWith("var(") ? !0 : (0, n.parseColor)(P, {
      loose: !0
    }) !== null ? (j++, !0) : !1)) ? j > 0 : !1;
  }
  function q(p) {
    let j = 0;
    return (0, l.splitAtTopLevelOnly)(p, ",").every((P) => (P = o(P), P.startsWith("var(") ? !0 : f(P) || Y(P) || [
      "element(",
      "image(",
      "cross-fade(",
      "image-set("
    ].some((Z) => P.startsWith(Z)) ? (j++, !0) : !1)) ? j > 0 : !1;
  }
  let H = /* @__PURE__ */ new Set([
    "linear-gradient",
    "radial-gradient",
    "repeating-linear-gradient",
    "repeating-radial-gradient",
    "conic-gradient"
  ]);
  function Y(p) {
    p = o(p);
    for (let j of H)
      if (p.startsWith(`${j}(`))
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
  function te(p) {
    let j = 0;
    return (0, l.splitAtTopLevelOnly)(p, "_").every((P) => (P = o(P), P.startsWith("var(") ? !0 : re.has(P) || K(P) || m(P) ? (j++, !0) : !1)) ? j > 0 : !1;
  }
  function _(p) {
    let j = 0;
    return (0, l.splitAtTopLevelOnly)(p, ",").every((P) => (P = o(P), P.startsWith("var(") ? !0 : P.includes(" ") && !/(['"])([^"']+)\1/g.test(P) || /^\d/g.test(P) ? !1 : (j++, !0))) ? j > 0 : !1;
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
  function x(p) {
    return C.has(p);
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
  function v(p) {
    return h.has(p);
  }
  let k = /* @__PURE__ */ new Set([
    "larger",
    "smaller"
  ]);
  function g(p) {
    return k.has(p);
  }
})(Me);
var ct = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "backgroundSize", {
    enumerable: !0,
    get: function() {
      return s;
    }
  });
  const t = Me, n = $e;
  function s(l) {
    let i = [
      "cover",
      "contain"
    ];
    return (0, n.splitAtTopLevelOnly)(l, ",").every((r) => {
      let a = (0, n.splitAtTopLevelOnly)(r, "_").filter(Boolean);
      return a.length === 1 && i.includes(a[0]) ? !0 : a.length !== 1 && a.length !== 2 ? !1 : a.every((d) => (0, t.length)(d) || (0, t.percentage)(d) || d === "auto");
    });
  }
})(ct);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(_, C) {
    for (var x in C)
      Object.defineProperty(_, x, {
        enumerable: !0,
        get: C[x]
      });
  }
  t(e, {
    updateAllClasses: function() {
      return o;
    },
    asValue: function() {
      return m;
    },
    parseColorFormat: function() {
      return K;
    },
    asColor: function() {
      return R;
    },
    asLookupValue: function() {
      return W;
    },
    typeMap: function() {
      return q;
    },
    coerceValue: function() {
      return re;
    },
    getMatchingTypes: function() {
      return te;
    }
  });
  const n = /* @__PURE__ */ d(at), s = Te, l = Me, i = /* @__PURE__ */ d(je), r = ct, a = ve;
  function d(_) {
    return _ && _.__esModule ? _ : {
      default: _
    };
  }
  function o(_, C) {
    _.walkClasses((x) => {
      x.value = C(x.value), x.raws && x.raws.value && (x.raws.value = (0, n.default)(x.raws.value));
    });
  }
  function f(_, C) {
    if (!w(_))
      return;
    let x = _.slice(1, -1);
    if (C(x))
      return (0, l.normalize)(x);
  }
  function y(_, C = {}, x) {
    let h = C[_];
    if (h !== void 0)
      return (0, i.default)(h);
    if (w(_)) {
      let v = f(_, x);
      return v === void 0 ? void 0 : (0, i.default)(v);
    }
  }
  function m(_, C = {}, { validate: x = () => !0 } = {}) {
    var h;
    let v = (h = C.values) === null || h === void 0 ? void 0 : h[_];
    return v !== void 0 ? v : C.supportsNegativeValues && _.startsWith("-") ? y(_.slice(1), C.values, x) : f(_, x);
  }
  function w(_) {
    return _.startsWith("[") && _.endsWith("]");
  }
  function b(_) {
    let C = _.lastIndexOf("/");
    return C === -1 || C === _.length - 1 ? [
      _,
      void 0
    ] : w(_) && !_.includes("]/[") ? [
      _,
      void 0
    ] : [
      _.slice(0, C),
      _.slice(C + 1)
    ];
  }
  function K(_) {
    if (typeof _ == "string" && _.includes("<alpha-value>")) {
      let C = _;
      return ({ opacityValue: x = 1 }) => C.replace("<alpha-value>", x);
    }
    return _;
  }
  function B(_) {
    return (0, l.normalize)(_.slice(1, -1));
  }
  function R(_, C = {}, { tailwindConfig: x = {} } = {}) {
    var h;
    if (((h = C.values) === null || h === void 0 ? void 0 : h[_]) !== void 0) {
      var v;
      return K((v = C.values) === null || v === void 0 ? void 0 : v[_]);
    }
    let [k, g] = b(_);
    if (g !== void 0) {
      var p, j, T, P;
      let Z = (P = (p = C.values) === null || p === void 0 ? void 0 : p[k]) !== null && P !== void 0 ? P : w(k) ? k.slice(1, -1) : void 0;
      return Z === void 0 ? void 0 : (Z = K(Z), w(g) ? (0, s.withAlphaValue)(Z, B(g)) : ((j = x.theme) === null || j === void 0 || (T = j.opacity) === null || T === void 0 ? void 0 : T[g]) === void 0 ? void 0 : (0, s.withAlphaValue)(Z, x.theme.opacity[g]));
    }
    return m(_, C, {
      validate: l.color
    });
  }
  function W(_, C = {}) {
    var x;
    return (x = C.values) === null || x === void 0 ? void 0 : x[_];
  }
  function I(_) {
    return (C, x) => m(C, x, {
      validate: _
    });
  }
  let q = {
    any: m,
    color: R,
    url: I(l.url),
    image: I(l.image),
    length: I(l.length),
    percentage: I(l.percentage),
    position: I(l.position),
    lookup: W,
    "generic-name": I(l.genericName),
    "family-name": I(l.familyName),
    number: I(l.number),
    "line-width": I(l.lineWidth),
    "absolute-size": I(l.absoluteSize),
    "relative-size": I(l.relativeSize),
    shadow: I(l.shadow),
    size: I(r.backgroundSize)
  }, H = Object.keys(q);
  function Y(_, C) {
    let x = _.indexOf(C);
    return x === -1 ? [
      void 0,
      _
    ] : [
      _.slice(0, x),
      _.slice(x + 1)
    ];
  }
  function re(_, C, x, h) {
    if (x.values && C in x.values)
      for (let { type: k } of _ ?? []) {
        let g = q[k](C, x, {
          tailwindConfig: h
        });
        if (g !== void 0)
          return [
            g,
            k,
            null
          ];
      }
    if (w(C)) {
      let k = C.slice(1, -1), [g, p] = Y(k, ":");
      if (!/^[\w-_]+$/g.test(g))
        p = k;
      else if (g !== void 0 && !H.includes(g))
        return [];
      if (p.length > 0 && H.includes(g))
        return [
          m(`[${p}]`, x),
          g,
          null
        ];
    }
    let v = te(_, C, x, h);
    for (let k of v)
      return k;
    return [];
  }
  function* te(_, C, x, h) {
    let v = (0, a.flagEnabled)(h, "generalizedModifiers"), [k, g] = b(C);
    if (v && x.modifiers != null && (x.modifiers === "any" || typeof x.modifiers == "object" && (g && w(g) || g in x.modifiers)) || (k = C, g = void 0), g !== void 0 && k === "" && (k = "DEFAULT"), g !== void 0 && typeof x.modifiers == "object") {
      var j, T;
      let P = (T = (j = x.modifiers) === null || j === void 0 ? void 0 : j[g]) !== null && T !== void 0 ? T : null;
      P !== null ? g = P : w(g) && (g = B(g));
    }
    for (let { type: P } of _ ?? []) {
      let Z = q[P](k, x, {
        tailwindConfig: h
      });
      Z !== void 0 && (yield [
        Z,
        P,
        g ?? null
      ]);
    }
  }
})(lt);
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
  function t(n) {
    return typeof n == "function" ? n({}) : n;
  }
})(pt);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return x;
    }
  });
  const t = /* @__PURE__ */ w(je), n = /* @__PURE__ */ w(Xe), s = /* @__PURE__ */ w(Je), l = /* @__PURE__ */ w(Ze), i = nt, r = rt, a = ot, d = /* @__PURE__ */ w(st), o = it, f = lt, y = Te, m = /* @__PURE__ */ w(pt);
  function w(h) {
    return h && h.__esModule ? h : {
      default: h
    };
  }
  function b(h) {
    return typeof h == "function";
  }
  function K(h, ...v) {
    let k = v.pop();
    for (let g of v)
      for (let p in g) {
        let j = k(h[p], g[p]);
        j === void 0 ? (0, d.default)(h[p]) && (0, d.default)(g[p]) ? h[p] = K({}, h[p], g[p], k) : h[p] = g[p] : h[p] = j;
      }
    return h;
  }
  const B = {
    colors: l.default,
    negative(h) {
      return Object.keys(h).filter((v) => h[v] !== "0").reduce((v, k) => {
        let g = (0, t.default)(h[k]);
        return g !== void 0 && (v[`-${k}`] = g), v;
      }, {});
    },
    breakpoints(h) {
      return Object.keys(h).filter((v) => typeof h[v] == "string").reduce((v, k) => ({
        ...v,
        [`screen-${k}`]: h[k]
      }), {});
    }
  };
  function R(h, ...v) {
    return b(h) ? h(...v) : h;
  }
  function W(h) {
    return h.reduce((v, { extend: k }) => K(v, k, (g, p) => g === void 0 ? [
      p
    ] : Array.isArray(g) ? [
      p,
      ...g
    ] : [
      p,
      g
    ]), {});
  }
  function I(h) {
    return {
      ...h.reduce((v, k) => (0, i.defaults)(v, k), {}),
      // In order to resolve n config objects, we combine all of their `extend` properties
      // into arrays instead of objects so they aren't overridden.
      extend: W(h)
    };
  }
  function q(h, v) {
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
  function H({ extend: h, ...v }) {
    return K(v, h, (k, g) => !b(k) && !g.some(b) ? K({}, k, ...g, q) : (p, j) => K({}, ...[
      k,
      ...g
    ].map((T) => R(T, p, j)), q));
  }
  function* Y(h) {
    let v = (0, r.toPath)(h);
    if (v.length === 0 || (yield v, Array.isArray(h)))
      return;
    let k = /^(.*?)\s*\/\s*([^/]+)$/, g = h.match(k);
    if (g !== null) {
      let [, p, j] = g, T = (0, r.toPath)(p);
      T.alpha = j, yield T;
    }
  }
  function re(h) {
    const v = (k, g) => {
      for (const p of Y(k)) {
        let j = 0, T = h;
        for (; T != null && j < p.length; )
          T = T[p[j++]], T = b(T) && (p.alpha === void 0 || j <= p.length - 1) ? T(v, B) : T;
        if (T !== void 0) {
          if (p.alpha !== void 0) {
            let P = (0, f.parseColorFormat)(T);
            return (0, y.withAlphaValue)(P, p.alpha, (0, m.default)(P));
          }
          return (0, d.default)(T) ? (0, o.cloneDeep)(T) : T;
        }
      }
      return g;
    };
    return Object.assign(v, {
      theme: v,
      ...B
    }), Object.keys(h).reduce((k, g) => (k[g] = b(h[g]) ? h[g](v, B) : h[g], k), {});
  }
  function te(h) {
    let v = [];
    return h.forEach((k) => {
      v = [
        ...v,
        k
      ];
      var g;
      const p = (g = k?.plugins) !== null && g !== void 0 ? g : [];
      p.length !== 0 && p.forEach((j) => {
        j.__isOptionsFunction && (j = j());
        var T;
        v = [
          ...v,
          ...te([
            (T = j?.config) !== null && T !== void 0 ? T : {}
          ])
        ];
      });
    }), v;
  }
  function _(h) {
    return [
      ...h
    ].reduceRight((k, g) => b(g) ? g({
      corePlugins: k
    }) : (0, s.default)(g, k), n.default);
  }
  function C(h) {
    return [
      ...h
    ].reduceRight((k, g) => [
      ...k,
      ...g
    ], []);
  }
  function x(h) {
    let v = [
      ...te(h),
      {
        prefix: "",
        important: !1,
        separator: ":"
      }
    ];
    var k, g;
    return (0, a.normalizeConfig)((0, i.defaults)({
      theme: re(H(I(v.map((p) => (k = p?.theme) !== null && k !== void 0 ? k : {})))),
      corePlugins: _(v.map((p) => p.corePlugins)),
      plugins: C(h.map((p) => (g = p?.plugins) !== null && g !== void 0 ? g : []))
    }, ...v));
  }
})(Ye);
var ft = {}, pn = {
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
  const t = /* @__PURE__ */ s(pn), n = ve;
  function s(i) {
    return i && i.__esModule ? i : {
      default: i
    };
  }
  function l(i) {
    var r;
    const a = ((r = i?.presets) !== null && r !== void 0 ? r : [
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
    }, o = Object.keys(d).filter((f) => (0, n.flagEnabled)(i, f)).map((f) => d[f]);
    return [
      i,
      ...o,
      ...a
    ];
  }
})(ft);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return l;
    }
  });
  const t = /* @__PURE__ */ s(Ye), n = /* @__PURE__ */ s(ft);
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
})(Qe);
let ke = Qe;
var fn = (ke.__esModule ? ke : { default: ke }).default;
const mn = /* @__PURE__ */ cn(fn), hn = {
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
}, gn = mn(hn);
function _n(e) {
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
const bn = S({
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
      const t = z(gn, ["theme", "colors"]), n = z(t, e);
      return typeof n == "string" ? n : e;
    },
    fontColorForBackgroundColor(e) {
      const t = _n(e);
      return t.alpha * 255 < 150 || Math.round(
        (t.red * 299 + t.green * 587 + t.blue * 114) / 1e3
      ) > 125 ? "#000" : "#fff";
    }
  }
}), yn = S({
  mixins: [bn]
});
const vn = { class: "flex-grow" };
function $n(e, t, n, s, l, i) {
  return u(), c("div", {
    class: "k-alert",
    style: se([e.colorableBackgroundStyle, e.colorableTextStyleForBackground])
  }, [
    $("div", vn, [
      N(e.$slots, "default")
    ])
  ], 4);
}
const kn = /* @__PURE__ */ O(yn, [["render", $n]]), wn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: kn
}, Symbol.toStringTag, { value: "Module" }));
const Sn = {}, On = { class: "k-app" };
function xn(e, t) {
  const n = M("KSnackbar"), s = M("KConfirm");
  return u(), c("div", On, [
    D(s, null, {
      default: A(() => [
        D(n, null, {
          default: A(() => [
            N(e.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    })
  ]);
}
const Kn = /* @__PURE__ */ O(Sn, [["render", xn]]), jn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Kn
}, Symbol.toStringTag, { value: "Module" })), Cn = S({
  directives: {
    ClickAway: Ke
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
const Tn = { class: "k-autocomplete-input" }, Pn = ["placeholder", "readonly"], Mn = {
  key: 0,
  class: "k-autocomplete-items"
}, Ln = ["onClick"];
function An(e, t, n, s, l, i) {
  const r = Se("click-away");
  return ne((u(), c("div", {
    class: "k-autocomplete",
    style: se([e.style])
  }, [
    N(e.$slots, "prepend", { item: e.valueLocal }),
    $("div", Tn, [
      ne($("input", {
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = (a) => e.inputText = a),
        class: J(["k-input", { invalidSelection: !e.isValidSelection }]),
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
      }, null, 42, Pn), [
        [Oe, e.inputText]
      ]),
      e.focus && e.items.length && e.inputText ? (u(), c("div", Mn, [
        (u(!0), c(U, null, X(e.itemsFiltered, (a, d) => (u(), c("div", {
          key: d,
          class: J(["k-autocomplete-item", { "k-autocomplete-active": e.currentFocus == d }]),
          onClick: (o) => e.select(d)
        }, [
          N(e.$slots, "item", { item: a }, () => [
            Q(F(a), 1)
          ])
        ], 10, Ln))), 128))
      ])) : L("", !0)
    ])
  ], 4)), [
    [r, e.setBlur]
  ]);
}
const zn = /* @__PURE__ */ O(Cn, [["render", An]]), Vn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zn
}, Symbol.toStringTag, { value: "Module" }));
function ee(e, t) {
  const n = wt(e, t);
  if (!n)
    throw new Error(`Could not resolve ${e.description}`);
  return n;
}
const ie = Symbol("session"), he = Symbol("config"), Bn = Symbol("snackbar"), Fn = Symbol(
  "confirmDialogKey"
), de = new _e();
function Nn(e) {
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
class Dn {
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
    }), clearInterval(this.intervalId), this.intervalId = setTimeout(this.processQueue.bind(this), 50);
  }
  async processQueue() {
    const t = this.session.rpcClient("/api/v1/rh/rpc/node/"), n = this.queueItems;
    this.resetQueue(), n.forEach((s) => {
      const l = s.dataId;
      t.queue("NodeLookup", { dataId: l });
    });
    try {
      (await t.batch(!0)).forEach((l, i) => {
        const r = n[i].resolveFunc;
        r(l);
      });
    } catch {
      n.forEach((s) => s.resolveFunc(null));
    }
  }
}
class In {
  nodes;
  nodeLookupQueue;
  constructor() {
    this.nodes = {}, this.nodeLookupQueue = new Dn();
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
          const s = await t.nodes.node({ dataid: n }), l = Nn(s.data);
          return this.nodes[n] = l, l;
        }
      } finally {
        de.release(n);
      }
  }
  async lookupRPC(t, n) {
    return n ? (await de.acquire(n), this.nodes[n] ? (de.release(n), this.nodes[n]) : new Promise((s) => {
      const l = (i) => {
        this.nodes[n] = i, s(i), de.release(n);
      };
      this.nodeLookupQueue.queue(t, l, n);
    })) : null;
  }
  async lookup(t, n, s = !1) {
    return s ? this.lookupLegacy(t, n) : this.lookupRPC(t, n);
  }
}
const En = new In(), Un = S({
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
        e && (this.nodeRecLocal = await En.lookup(
          this.session,
          e,
          this.legacy
        ));
      },
      immediate: !0
    }
  }
}), Rn = {
  key: 0,
  class: "flex"
}, Wn = ["src"], qn = ["href"], Hn = ["innerHTML"];
function Gn(e, t, n, s, l, i) {
  const r = M("KFunctionMenu");
  return e.nodeRecResolved ? (u(), c("div", Rn, [
    e.image ? (u(), c("img", {
      key: 0,
      src: e.nodeRecResolved.gif
    }, null, 8, Wn)) : L("", !0),
    Q(" "),
    $("a", {
      href: e.nodeRecResolved.url
    }, F(e.nodeRecResolved.name), 9, qn),
    e.clickable ? (u(), V(r, {
      key: 1,
      dataid: e.nodeRecResolved.dataid
    }, null, 8, ["dataid"])) : L("", !0),
    $("span", {
      innerHTML: e.nodeRecResolved.modifiedImageCallback
    }, null, 8, Hn)
  ])) : L("", !0);
}
const Qn = /* @__PURE__ */ O(Un, [["render", Gn]]), Yn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qn
}, Symbol.toStringTag, { value: "Module" })), Xn = S({
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
function Zn(e, t, n, s, l, i) {
  return u(), c("button", me({
    class: ["k-button", e.classObj],
    disabled: e.disabled,
    type: "button"
  }, e.$attrs, {
    onClick: t[0] || (t[0] = (r) => e.$emit("click"))
  }), [
    N(e.$slots, "default")
  ], 16, Jn);
}
const er = /* @__PURE__ */ O(Xn, [["render", Zn]]), tr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: er
}, Symbol.toStringTag, { value: "Module" })), nr = S({
  provide() {
    return {
      // @ts-ignore - not sure why this complains
      [Fn]: this
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
function rr(e, t, n, s, l, i) {
  const r = M("KCardTitle"), a = M("KCardText"), d = M("KSpacer"), o = M("KButton"), f = M("KCardActions"), y = M("KCard"), m = M("KDialog");
  return u(), c(U, null, [
    N(e.$slots, "default"),
    D(m, {
      modelValue: e.dialog,
      "onUpdate:modelValue": t[2] || (t[2] = (w) => e.dialog = w),
      "max-width": "30vw",
      "min-width": "20vw",
      "z-index": 50
    }, {
      default: A(() => [
        D(y, null, {
          default: A(() => [
            e.title ? (u(), V(r, { key: 0 }, {
              default: A(() => [
                Q(F(e.title), 1)
              ]),
              _: 1
            })) : L("", !0),
            e.message ? (u(), V(a, { key: 1 }, {
              default: A(() => [
                Q(F(e.message), 1)
              ]),
              _: 1
            })) : L("", !0),
            D(f, null, {
              default: A(() => [
                D(d),
                e.noLabel ? (u(), V(o, {
                  key: 0,
                  small: "",
                  onClick: t[0] || (t[0] = (w) => e.dismiss(!1))
                }, {
                  default: A(() => [
                    Q(F(e.noLabel), 1)
                  ]),
                  _: 1
                })) : L("", !0),
                e.yesLabel ? (u(), V(o, {
                  key: 1,
                  small: "",
                  onClick: t[1] || (t[1] = (w) => e.dismiss(!0))
                }, {
                  default: A(() => [
                    Q(F(e.yesLabel), 1)
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
const or = /* @__PURE__ */ O(nr, [["render", rr]]), sr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: or
}, Symbol.toStringTag, { value: "Module" })), ir = S({
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
      return t ? this.time ? Ne(t, "yyyy-MM-dd'T'HH:mm:ss") : Ne(t, "yyyy-MM-dd") : null;
    }
  }
});
const lr = { class: "k-date-time-picker" }, ar = ["type", "readonly"];
function ur(e, t, n, s, l, i) {
  const r = M("KButton");
  return u(), c("div", lr, [
    ne($("input", {
      "onUpdate:modelValue": t[0] || (t[0] = (a) => e.localModelValue = a),
      class: "k-input",
      type: e.type,
      readonly: !e.editable
    }, null, 8, ar), [
      [St, e.localModelValue]
    ]),
    e.editable ? (u(), c(U, { key: 0 }, [
      D(r, {
        small: "",
        onClick: e.setToNow
      }, {
        default: A(() => [
          Q(" Now ")
        ]),
        _: 1
      }, 8, ["onClick"]),
      D(r, {
        small: "",
        onClick: t[1] || (t[1] = (a) => e.$emit("update:modelValue", null))
      }, {
        default: A(() => [
          Q(" Clear ")
        ]),
        _: 1
      })
    ], 64)) : L("", !0)
  ]);
}
const dr = /* @__PURE__ */ O(ir, [["render", ur]]), cr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dr
}, Symbol.toStringTag, { value: "Module" })), pr = S({
  directives: {
    ClickAway: Ke
  },
  mixins: [be],
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
      this.$emit("update:modelValue", e), e ? (await this.$nextTick(), jt(this.$refs.content)) : Ct(this.$refs.content);
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
function fr(e, t, n, s, l, i) {
  const r = Se("click-away");
  return u(), c(U, null, [
    N(e.$slots, "activator", { on: e.on }),
    e.mounted ? (u(), V(Ot, {
      key: 0,
      to: ".k-app"
    }, [
      D(ge, { name: "fade" }, {
        default: A(() => [
          e.dialog ? (u(), c("div", {
            key: 0,
            class: "k-dialog",
            style: se([e.style])
          }, [
            ne((u(), c("div", {
              ref: "content",
              class: J(["k-dialog-content", e.classObj]),
              style: se([e.measurableStyles])
            }, [
              N(e.$slots, "default", { on: e.on })
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
const mr = /* @__PURE__ */ O(pr, [["render", fr]]), hr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mr
}, Symbol.toStringTag, { value: "Module" }));
const gr = {}, _r = { class: "k-divider" };
function br(e, t) {
  return u(), c("div", _r);
}
const mt = /* @__PURE__ */ O(gr, [["render", br]]), yr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mt
}, Symbol.toStringTag, { value: "Module" })), vr = S({
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
function $r(e, t, n, s, l, i) {
  return u(), c("div", {
    class: "k-dot",
    style: se([e.style])
  }, [
    N(e.$slots, "default")
  ], 4);
}
const kr = /* @__PURE__ */ O(vr, [["render", $r]]), wr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: kr
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
}), Sr = {
  mixins: [ae]
};
const Or = {
  key: 0,
  class: "k-form-field-label"
};
function xr(e, t, n, s, l, i) {
  return u(), c("div", null, [
    e.label ? (u(), c("div", Or, F(e.label), 1)) : L("", !0),
    N(e.$slots, "default"),
    (u(!0), c(U, null, X(e.successMessages, (r, a) => (u(), c("div", {
      key: a,
      class: "k-formfield--success"
    }, F(r), 1))), 128)),
    (u(!0), c(U, null, X(e.errorMessages, (r, a) => (u(), c("div", {
      key: a,
      class: "k-formfield--error"
    }, F(r), 1))), 128))
  ]);
}
const Kr = /* @__PURE__ */ O(Sr, [["render", xr]]), jr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Kr,
  mixin: ae
}, Symbol.toStringTag, { value: "Module" })), Cr = S({
  setup() {
    return { config: ee(he) };
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
}), Tr = { key: 0 }, Pr = ["id"], Mr = ["src"], Lr = ["id", "src"];
function Ar(e, t, n, s, l, i) {
  return e.dataid ? (u(), c("span", Tr, [
    $("a", {
      id: e.aid,
      href: "#",
      class: "functionMenuHotspot",
      onClick: t[2] || (t[2] = oe((...r) => e.onclick && e.onclick(...r), ["prevent"]))
    }, [
      e.isModernFunctionMenu ? (u(), c("img", {
        key: 0,
        src: `${e.config.img}spacer.gif`,
        alt: "Functions"
      }, null, 8, Mr)) : (u(), c("img", {
        key: 1,
        id: e.xid,
        src: e.image,
        border: "0",
        alt: "Functions",
        title: "Functions",
        onMouseover: t[0] || (t[0] = (...r) => e.onmouseover && e.onmouseover(...r)),
        onMouseout: t[1] || (t[1] = (...r) => e.onmouseout && e.onmouseout(...r))
      }, null, 40, Lr))
    ], 8, Pr),
    t[3] || (Ve(-1), t[3] = $("div", {
      id: e.zid,
      ref: "functionMenuDiv",
      class: "functionMenuDiv"
    }, null, 8, ["id"]), Ve(1), t[3])
  ])) : L("", !0);
}
const zr = /* @__PURE__ */ O(Cr, [["render", Ar]]), Vr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zr
}, Symbol.toStringTag, { value: "Module" })), Br = S({});
const Fr = { class: "k-list-item-title" };
function Nr(e, t, n, s, l, i) {
  return u(), c("div", Fr, [
    N(e.$slots, "default")
  ]);
}
const ht = /* @__PURE__ */ O(Br, [["render", Nr]]), Dr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ht
}, Symbol.toStringTag, { value: "Module" })), Ir = S({});
const Er = { class: "k-list-item-subtitle" };
function Ur(e, t, n, s, l, i) {
  return u(), c("div", Er, [
    N(e.$slots, "default")
  ]);
}
const gt = /* @__PURE__ */ O(Ir, [["render", Ur]]), Rr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: gt
}, Symbol.toStringTag, { value: "Module" })), Wr = S({
  mixins: [He],
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
    const { tag: e, data: t } = this.generateRouteLink(), n = this.title ? le(ht, {}, { default: () => [this.title] }) : null, s = this.subtitle ? le(gt, {}, { default: () => [this.subtitle] }) : null, l = n || s ? [n, s].filter((o) => !!o) : this.$slots.default ? this.$slots.default() : null, i = le(
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
      [r, i, a].filter((o) => !!o)
    );
  }
});
const _t = /* @__PURE__ */ O(Wr, [["__scopeId", "data-v-43b36273"]]), qr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _t
}, Symbol.toStringTag, { value: "Module" })), De = new _e(), Hr = S({
  components: { KMenuDownIcon: Ge, KListItem: _t, KDivider: mt },
  setup() {
    return { session: Fl() };
  },
  props: {
    dataid: {
      type: Number,
      required: !0
    },
    size: {
      type: Number,
      default: 32
    }
  },
  data() {
    return {
      visible: !1,
      actions: []
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
        if (await De.acquire(this.dataid), this.actions.length === 0) {
          const { data: e } = await this.session.get(
            `/api/v1/nodes/${this.dataid}/actions`
          );
          this.actions = e.actions;
        }
      } finally {
        De.release(this.dataid);
      }
    }
  },
  mounted() {
    this.refreshActions();
  }
});
function Gr(e, t, n, s, l, i) {
  const r = M("KMenuDownIcon"), a = M("KDivider"), d = M("KRightCaret"), o = M("KListItem"), f = M("KList"), y = M("KMenu");
  return u(), V(y, {
    modelValue: e.visible,
    "onUpdate:modelValue": t[0] || (t[0] = (m) => e.visible = m)
  }, {
    activator: A(({ on: m }) => [
      D(r, me({ size: e.size }, Be(m)), null, 16, ["size"])
    ]),
    default: A(() => [
      D(f, null, {
        default: A(() => [
          (u(!0), c(U, null, X(e.actions, (m, w) => (u(), c(U, null, [
            m.signature === "-" ? (u(), V(a, {
              key: `${w}`
            })) : m.children.length ? (u(), V(y, {
              submenu: "",
              key: `a${w}`
            }, {
              activator: A(({ on: b }) => [
                D(o, me({
                  title: m.name
                }, Be(b)), {
                  append: A(() => [
                    D(d)
                  ]),
                  _: 2
                }, 1040, ["title"])
              ]),
              default: A(() => [
                D(f, null, {
                  default: A(() => [
                    (u(!0), c(U, null, X(m.children, (b, K) => (u(), V(o, {
                      key: `b${K}`,
                      title: b.name,
                      href: b.url
                    }, null, 8, ["title", "href"]))), 128))
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1024)) : (u(), V(o, {
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
  }, 8, ["modelValue"]);
}
const Qr = /* @__PURE__ */ O(Hr, [["render", Gr]]), Yr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qr
}, Symbol.toStringTag, { value: "Module" })), Xr = S({});
const Jr = { class: "k-progress-line" };
function Zr(e, t, n, s, l, i) {
  return u(), c("div", Jr);
}
const eo = /* @__PURE__ */ O(Xr, [["render", Zr]]), to = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: eo
}, Symbol.toStringTag, { value: "Module" })), no = S({});
const ro = { class: "k-list" };
function oo(e, t, n, s, l, i) {
  return u(), c("div", ro, [
    N(e.$slots, "default")
  ]);
}
const so = /* @__PURE__ */ O(no, [["render", oo]]), io = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: so
}, Symbol.toStringTag, { value: "Module" })), lo = S({
  directives: {
    ClickAway: Ke
  },
  setup() {
    const e = Fe(null);
    return { menuItems: Fe(null), menuActivator: e };
  },
  props: {
    modelValue: {
      type: Boolean,
      default: null
    },
    submenu: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      visibleLocal: this.modelValue ?? !1,
      activatorBox: {
        top: 0,
        left: 0,
        width: 0,
        height: 0,
        topRelativeToViewport: 0,
        leftRelativeToViewport: 0
      },
      menuItemsSize: {
        width: 0,
        height: 0
      },
      viewportSize: {
        width: 0,
        height: 0
      }
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
      const e = this.activatorBox.topRelativeToViewport + this.menuItemsSize.height, t = window.innerHeight, n = Math.max(e - t, 0) + 24;
      return this.submenu ? {
        top: G(-n),
        left: G(
          this.activatorBox.left + this.activatorBox.width
        )
      } : {
        top: G(-n),
        left: G(this.activatorBox.left)
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
    updateViewportSize() {
      this.viewportSize = {
        height: window.innerHeight,
        width: window.innerWidth
      };
    },
    async updatePosition() {
      if (this.menuActivator && this.menuItems) {
        await this.$nextTick();
        const e = this.menuActivator.getBoundingClientRect();
        this.activatorBox = {
          left: this.menuActivator.offsetLeft,
          top: this.menuActivator.offsetTop,
          width: this.menuActivator.offsetWidth,
          height: this.menuActivator.offsetHeight,
          topRelativeToViewport: e.top,
          leftRelativeToViewport: e.left
        }, this.menuItemsSize = {
          width: this.menuItems.offsetWidth,
          height: this.menuItems.offsetHeight
        };
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
const ao = { ref: "menuActivator" };
function uo(e, t, n, s, l, i) {
  const r = Se("click-away");
  return u(), c("div", {
    class: "k-menu",
    onMouseenter: t[0] || (t[0] = (...a) => e.mouseEnter && e.mouseEnter(...a)),
    onMouseleave: t[1] || (t[1] = (...a) => e.mouseLeave && e.mouseLeave(...a))
  }, [
    ne((u(), c("div", ao, [
      N(e.$slots, "activator", {
        on: { click: e.toggleMenu }
      }, void 0, !0)
    ])), [
      [r, e.clickAway]
    ]),
    $("div", {
      ref: "menuItems",
      class: J(["k-menu-items", e.dropDownMenuItemsClassObj]),
      style: se(e.styleDropDownItems)
    }, [
      N(e.$slots, "default", {}, void 0, !0)
    ], 6)
  ], 32);
}
const co = /* @__PURE__ */ O(lo, [["render", uo], ["__scopeId", "data-v-b5fe8a12"]]), po = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: co
}, Symbol.toStringTag, { value: "Module" })), fo = {}, mo = {
  class: "w-5 h-5",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, ho = /* @__PURE__ */ $("path", {
  "fill-rule": "evenodd",
  d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
  "clip-rule": "evenodd"
}, null, -1), go = [
  ho
];
function _o(e, t) {
  return u(), c("svg", mo, go);
}
const bo = /* @__PURE__ */ O(fo, [["render", _o]]), yo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bo
}, Symbol.toStringTag, { value: "Module" })), vo = S({
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
const $o = { class: "k-multi-widget" }, ko = { class: "k-multi-buttons" }, wo = /* @__PURE__ */ $("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ $("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z" })
], -1), So = /* @__PURE__ */ $("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ $("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" })
], -1);
function Oo(e, t, n, s, l, i) {
  const r = M("KButton"), a = M("KCard");
  return u(), V(a, { class: "k-multi" }, {
    default: A(() => [
      D(xe, {
        name: "fade",
        tag: "div"
      }, {
        default: A(() => [
          (u(!0), c(U, null, X(e.valueLocal, (d, o) => (u(), c("div", {
            key: `k-multi-${d}`,
            class: "k-multi-item"
          }, [
            $("div", $o, [
              N(e.$slots, "default", {
                index: o,
                value: d,
                update: (f) => e.update(o, f)
              })
            ]),
            $("div", ko, [
              e.canRemove ? (u(), V(r, {
                key: 0,
                text: "",
                onClick: (f) => e.remove(o)
              }, {
                default: A(() => [
                  wo
                ]),
                _: 2
              }, 1032, ["onClick"])) : L("", !0),
              e.canAdd ? (u(), V(r, {
                key: 1,
                text: "",
                onClick: (f) => e.add(o)
              }, {
                default: A(() => [
                  So
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
const xo = /* @__PURE__ */ O(vo, [["render", Oo]]), Ko = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xo
}, Symbol.toStringTag, { value: "Module" })), jo = S({
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
const Co = { class: "k-multi-widget" }, To = /* @__PURE__ */ $("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ $("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z" })
], -1);
function Po(e, t, n, s, l, i) {
  const r = M("KButton"), a = M("KCard");
  return u(), V(a, { class: "k-multi" }, {
    default: A(() => [
      D(xe, {
        name: "fade",
        tag: "div"
      }, {
        default: A(() => [
          (u(!0), c(U, null, X(e.valueLocal, (d, o) => (u(), c("div", {
            key: `k-multi-${d}`,
            class: "k-multi-item"
          }, [
            $("div", Co, [
              N(e.$slots, "readonly", {
                index: o,
                value: d
              }, () => [
                Q(F(d), 1)
              ])
            ]),
            e.readonly ? L("", !0) : (u(), V(r, {
              key: 0,
              text: "",
              onClick: (f) => e.remove(o)
            }, {
              default: A(() => [
                To
              ]),
              _: 2
            }, 1032, ["onClick"]))
          ]))), 128))
        ]),
        _: 3
      }),
      e.canAdd ? N(e.$slots, "add", {
        key: 0,
        add: e.add
      }) : L("", !0)
    ]),
    _: 3
  });
}
const Mo = /* @__PURE__ */ O(jo, [["render", Po]]), Lo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Mo
}, Symbol.toStringTag, { value: "Module" })), Ao = S({
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
function zo(e, t, n, s, l, i) {
  const r = M("KUserLink"), a = M("KUserPicker"), d = M("KMulti2");
  return u(), V(d, {
    modelValue: e.userIdsLocal,
    "onUpdate:modelValue": t[0] || (t[0] = (o) => e.userIdsLocal = o),
    readonly: e.readonly
  }, {
    readonly: A(({ value: o }) => [
      D(r, {
        user: o,
        gif: ""
      }, null, 8, ["user"])
    ]),
    add: A(({ add: o }) => [
      D(a, {
        "onUpdate:modelValue": (f) => o(f),
        users: e.users,
        groups: e.groups
      }, null, 8, ["onUpdate:modelValue", "users", "groups"])
    ]),
    _: 1
  }, 8, ["modelValue", "readonly"]);
}
const Vo = /* @__PURE__ */ O(Ao, [["render", zo]]), Bo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Vo
}, Symbol.toStringTag, { value: "Module" })), Ie = new _e();
class Fo {
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
      if (await Ie.acquire(n), !this.nodes[n]) {
        const s = await t.nodes.ancestors(n);
        this.nodes[n] = z(s, "data.ancestors", []);
      }
      return this.nodes[n];
    } finally {
      Ie.release(n);
    }
  }
}
const bt = new Fo(), No = S({
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
        e && (this.breadcrumb = await bt.lookup(this.session, e));
      },
      immediate: !0
    }
  }
});
const Do = { class: "k-node-breadcrumb" };
function Io(e, t, n, s, l, i) {
  return u(), c("div", Do, [
    (u(!0), c(U, null, X(e.breadcrumb, (r, a) => (u(), c(U, {
      key: r.dataid
    }, [
      Q(F(r.name) + " ", 1),
      a < e.breadcrumb.length - 1 ? (u(), c(U, { key: 0 }, [
        Q(" ▶ ")
      ], 64)) : L("", !0)
    ], 64))), 128))
  ]);
}
const yt = /* @__PURE__ */ O(No, [["render", Io]]), Eo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: yt
}, Symbol.toStringTag, { value: "Module" })), Uo = S({
  components: { KNodeAncestor: yt },
  setup() {
    return {
      session: ee(ie),
      config: ee(he)
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
      return Tt(this.config.baseUrl, {
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
        this.dataid ? this.breadcrumb = await bt.lookup(
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
      return this.objid ?? parseInt(Pt.get("TargetBrowseObjID") ?? "0");
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
const Ro = { class: "k-node-picker-field" }, Wo = ["value"];
function qo(e, t, n, s, l, i) {
  const r = M("KButton"), a = M("KNodeAncestor");
  return u(), c("div", Ro, [
    $("input", {
      ref: "input",
      type: "text",
      class: "k-input",
      value: e.name,
      onFocus: t[0] || (t[0] = (...d) => e.openWindow && e.openWindow(...d))
    }, null, 40, Wo),
    D(r, {
      small: "",
      onClick: e.openWindow
    }, {
      default: A(() => [
        Q(F(e.browseButtonLabel), 1)
      ]),
      _: 1
    }, 8, ["onClick"]),
    e.clearable ? (u(), V(r, {
      key: 0,
      small: "",
      onClick: e.clear
    }, {
      default: A(() => [
        Q(F(e.clearButtonLabel), 1)
      ]),
      _: 1
    }, 8, ["onClick"])) : L("", !0),
    e.dataid ? (u(), V(a, {
      key: 1,
      dataid: e.dataid
    }, null, 8, ["dataid"])) : L("", !0)
  ]);
}
const Ho = /* @__PURE__ */ O(Uo, [["render", qo]]), Go = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ho
}, Symbol.toStringTag, { value: "Module" })), Qo = S({
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
const Yo = { class: "k-one-moment" }, Xo = { class: "k-one-moment-label" };
function Jo(e, t, n, s, l, i) {
  const r = M("KSpinner"), a = M("KDialog");
  return u(), V(a, { "model-value": e.loading }, {
    default: A(() => [
      $("div", Yo, [
        D(r, {
          height: 36,
          width: 36
        }),
        $("div", Xo, F(e.label), 1)
      ])
    ]),
    _: 1
  }, 8, ["model-value"]);
}
const Zo = /* @__PURE__ */ O(Qo, [["render", Jo]]), es = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zo
}, Symbol.toStringTag, { value: "Module" })), ts = S({
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
function ns(e, t, n, s, l, i) {
  return u(), c("div", null, [
    N(e.$slots, "default", { active: e.active })
  ]);
}
const rs = /* @__PURE__ */ O(ts, [["render", ns]]), os = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: rs
}, Symbol.toStringTag, { value: "Module" })), ss = S({
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
const is = { class: "text-xl" }, ls = { key: 0 }, as = { class: "rhmuted" };
function us(e, t, n, s, l, i) {
  return u(), c("div", is, [
    Q(F(e.title), 1),
    e.subtitle ? (u(), c("span", ls, [
      Q(": "),
      $("span", as, F(e.subtitle), 1)
    ])) : L("", !0)
  ]);
}
const ds = /* @__PURE__ */ O(ss, [["render", us], ["__scopeId", "data-v-c72c9204"]]), cs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ds
}, Symbol.toStringTag, { value: "Module" })), ps = S({
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
const fs = { class: "k-pagination" }, ms = {
  key: 1,
  class: "k-pagination-buttons"
}, hs = {
  key: 0,
  class: "k-pagination-button"
}, gs = /* @__PURE__ */ $("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ $("path", { d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" })
], -1), _s = [
  gs
], bs = { key: 0 }, ys = ["onClick"], vs = {
  key: 1,
  class: "k-pagination-button"
}, $s = /* @__PURE__ */ $("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ $("path", { d: "M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" })
], -1), ks = [
  $s
], ws = { key: 2 };
function Ss(e, t, n, s, l, i) {
  const r = M("KSelect");
  return u(), c("div", fs, [
    e.potentiallyMultiplePages ? (u(), V(r, {
      key: 0,
      modelValue: e.pageSize,
      "onUpdate:modelValue": t[0] || (t[0] = (a) => e.pageSize = a),
      items: e.pageSizes,
      label: "Page Size"
    }, null, 8, ["modelValue", "items"])) : L("", !0),
    e.hasPrevious || e.hasNext ? (u(), c("div", ms, [
      e.hasPrevious ? (u(), c("a", hs, _s)) : L("", !0),
      (u(!0), c(U, null, X(e.pageRange, (a) => (u(), c(U, { key: a }, [
        a === "|" ? (u(), c("div", bs, "...")) : (u(), c("a", {
          key: 1,
          class: J(["k-pagination-button k-pagination-button-border", e.classObj(a)]),
          onClick: (d) => e.$emit("update:modelValue", a)
        }, F(a), 11, ys))
      ], 64))), 128)),
      e.hasNext ? (u(), c("a", vs, ks)) : L("", !0)
    ])) : L("", !0),
    e.potentiallyMultiplePages ? (u(), c("div", ws, " Displaying " + F(e.pagination.startIndex) + "-" + F(e.pagination.endIndex) + " of " + F(e.pagination.count) + " items. ", 1)) : L("", !0)
  ]);
}
const Os = /* @__PURE__ */ O(ps, [["render", Ss]]), xs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Os
}, Symbol.toStringTag, { value: "Module" })), Ks = S({
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
const js = { class: "k-pagination2" }, Cs = { class: "k-pagination2-buttons" }, Ts = /* @__PURE__ */ $("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ $("path", { d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" })
], -1), Ps = [
  Ts
], Ms = ["onClick"], Ls = /* @__PURE__ */ $("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ $("path", { d: "M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" })
], -1), As = [
  Ls
];
function zs(e, t, n, s, l, i) {
  const r = M("KSelect");
  return u(), c("div", js, [
    $("div", null, [
      D(r, {
        modelValue: e.pageSize,
        "onUpdate:modelValue": t[0] || (t[0] = (a) => e.pageSize = a),
        items: e.pageSizes,
        label: "Page Size"
      }, null, 8, ["modelValue", "items"])
    ]),
    e.pageCount > 1 ? (u(), c(U, { key: 0 }, [
      $("div", Cs, [
        e.hasPrevious ? (u(), c("a", {
          key: 0,
          class: "k-pagination2-arrow-button",
          onClick: t[1] || (t[1] = (a) => e.clickedPageNumber(e.pageNumber0 - 1))
        }, Ps)) : L("", !0),
        (u(!0), c(U, null, X(e.pageRange0, (a) => (u(), c("div", {
          key: a,
          class: J(["k-pagination2-button", e.classObj(a)]),
          onClick: (d) => e.clickedPageNumber(a)
        }, F(a + 1), 11, Ms))), 128)),
        e.hasNext ? (u(), c("a", {
          key: 1,
          class: "k-pagination2-arrow-button",
          onClick: t[2] || (t[2] = (a) => e.clickedPageNumber(e.pageNumber0 + 1))
        }, As)) : L("", !0)
      ]),
      $("div", null, F(e.pageNumber) + " of " + F(e.pageCount) + " pages", 1)
    ], 64)) : L("", !0)
  ]);
}
const Vs = /* @__PURE__ */ O(Ks, [["render", zs]]), Bs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Vs
}, Symbol.toStringTag, { value: "Module" })), Le = S({
  mixins: [be],
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
}), Ee = () => {
  qe((e) => ({
    fe06e366: e.color
  }));
}, Ue = Le.setup;
Le.setup = Ue ? (e, t) => (Ee(), Ue(e, t)) : Ee;
const Fs = /* @__PURE__ */ $("circle", {
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), Ns = /* @__PURE__ */ $("path", {
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), Ds = [
  Fs,
  Ns
];
function Is(e, t, n, s, l, i) {
  return u(), c("svg", {
    style: se(e.measurableStyles),
    class: "k-spinner",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, Ds, 4);
}
const vt = /* @__PURE__ */ O(Le, [["render", Is]]), Es = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vt
}, Symbol.toStringTag, { value: "Module" })), Us = S({
  components: { KSpinner: vt },
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
const Rs = {
  key: 0,
  class: "centerOverlay"
};
function Ws(e, t, n, s, l, i) {
  const r = M("KSpinner");
  return e.loading ? (u(), c("div", Rs, [
    D(r, {
      "max-width": e.size,
      "max-height": e.size
    }, null, 8, ["max-width", "max-height"])
  ])) : L("", !0);
}
const qs = /* @__PURE__ */ O(Us, [["render", Ws]]), Hs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qs
}, Symbol.toStringTag, { value: "Module" })), Gs = S({
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
const Qs = ["id", "value", "disabled"], Ys = ["for"];
function Xs(e, t, n, s, l, i) {
  const r = M("KSpinner"), a = M("KFormFieldWrapper");
  return u(), c("div", null, [
    D(a, {
      label: e.label,
      "success-messages": e.successMessages,
      "error-messages": e.errorMessages
    }, {
      default: A(() => [
        D(ge, {
          name: "fade",
          mode: "out-in"
        }, {
          default: A(() => [
            e.loading ? (u(), V(r, { key: 0 })) : (u(), c("div", {
              key: 1,
              class: J(["k-radiogroup", e.classObj])
            }, [
              (u(!0), c(U, null, X(e.items, (d) => (u(), c("div", {
                key: e.getItemValue(d),
                class: "k-radiogroup-item"
              }, [
                ne($("input", {
                  id: e.getItemValue(d),
                  "onUpdate:modelValue": t[0] || (t[0] = (o) => e.localValue = o),
                  type: "radio",
                  value: e.getItemValue(d),
                  disabled: e.getItemDisabled(d)
                }, null, 8, Qs), [
                  [xt, e.localValue]
                ]),
                $("label", {
                  for: e.getItemValue(d)
                }, F(e.getItemText(d)), 9, Ys)
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
const Js = /* @__PURE__ */ O(Gs, [["render", Xs]]), Zs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Js
}, Symbol.toStringTag, { value: "Module" })), ei = S({
  inject: ["ksnackbar"],
  methods: {
    click() {
    }
  }
});
function ti(e, t, n, s, l, i) {
  return u(), c("div", null, [
    $("button", {
      onClick: t[0] || (t[0] = (...r) => e.click && e.click(...r))
    }, "click")
  ]);
}
const ni = /* @__PURE__ */ O(ei, [["render", ti]]), ri = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ni
}, Symbol.toStringTag, { value: "Module" })), oi = S({
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
const si = { class: "k-select" }, ii = ["disabled"], li = ["value", "disabled"];
function ai(e, t, n, s, l, i) {
  const r = M("KButton"), a = M("KSpinner"), d = M("KFormFieldWrapper");
  return u(), V(d, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: A(() => [
      $("div", si, [
        ne($("select", {
          "onUpdate:modelValue": t[0] || (t[0] = (o) => e.valueLocal = o),
          class: J(e.classObj),
          disabled: e.disabledResolved
        }, [
          (u(!0), c(U, null, X(e.items, (o) => (u(), c("option", {
            key: e.getItemValue(o),
            value: e.getItemValue(o),
            disabled: e.getItemDisabled(o)
          }, F(e.getItemText(o)), 9, li))), 128))
        ], 10, ii), [
          [Kt, e.valueLocal]
        ]),
        e.clearable ? (u(), V(r, {
          key: 0,
          onClick: t[1] || (t[1] = (o) => e.valueLocal = null),
          small: ""
        }, {
          default: A(() => [
            Q("clear")
          ]),
          _: 1
        })) : L("", !0),
        D(ge, { name: "fade" }, {
          default: A(() => [
            e.loading ? (u(), V(a, {
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
const ui = /* @__PURE__ */ O(oi, [["render", ai]]), di = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ui
}, Symbol.toStringTag, { value: "Module" })), ci = S({});
const pi = { class: "k-smart-ui-panel" }, fi = {
  key: 0,
  class: "k-smart-ui-panel-header"
}, mi = { class: "k-smart-ui-panel-body" }, hi = {
  key: 1,
  class: "k-smart-ui-panel-footer"
};
function gi(e, t, n, s, l, i) {
  return u(), c("div", pi, [
    e.$slots.header ? (u(), c("div", fi, [
      N(e.$slots, "header")
    ])) : L("", !0),
    $("div", mi, [
      N(e.$slots, "default")
    ]),
    e.$slots.footer ? (u(), c("div", hi, [
      N(e.$slots, "footer")
    ])) : L("", !0)
  ]);
}
const _i = /* @__PURE__ */ O(ci, [["render", gi]]), bi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _i
}, Symbol.toStringTag, { value: "Module" })), yi = S({
  provide() {
    return {
      // @ts-ignore - not sure why this complains
      [Bn]: this
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
      timeout: s = 6e3,
      actionLabel: l = "close",
      action: i
    }) {
      const r = this.nextIndex();
      i == null && (i = () => this.dismiss(r));
      const a = {
        title: t,
        message: n,
        timeout: s,
        actionLabel: l,
        action: i,
        type: e,
        index: r
      };
      this.nitems[r] = a, console.log(s), setInterval(() => this.dismiss(r), s);
    }
  }
});
const vi = { class: "k-snackbar" }, $i = { class: "k-snackbar-item-message" }, ki = {
  key: 0,
  class: "k-snackbar-title"
}, wi = {
  key: 1,
  class: "k-snackbar-text"
}, Si = {
  key: 0,
  class: "k-snackbar-action"
}, Oi = ["onClick"];
function xi(e, t, n, s, l, i) {
  return u(), c(U, null, [
    N(e.$slots, "default"),
    $("div", vi, [
      D(xe, {
        name: "slide",
        tag: "div",
        mode: "out-in"
      }, {
        default: A(() => [
          (u(!0), c(U, null, X(e.items, (r) => (u(), c("div", {
            key: r.index,
            class: J(["k-snackbar-item", e.classObj(r)])
          }, [
            $("div", $i, [
              r.title ? (u(), c("div", ki, F(r.title), 1)) : L("", !0),
              r.message ? (u(), c("div", wi, F(r.message), 1)) : L("", !0)
            ]),
            r.action ? (u(), c("div", Si, [
              $("a", {
                href: "#",
                onClick: oe((a) => e.action(r), ["prevent"])
              }, F(r.actionLabel), 9, Oi)
            ])) : L("", !0)
          ], 2))), 128))
        ]),
        _: 1
      })
    ])
  ], 64);
}
const Ki = /* @__PURE__ */ O(yi, [["render", xi]]), ji = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ki
}, Symbol.toStringTag, { value: "Module" })), Ci = S({
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
const Ti = {
  key: 0,
  class: "j-sort-header-arrow"
}, Pi = {
  key: 1,
  class: "j-sort-header-arrow"
};
function Mi(e, t, n, s, l, i) {
  return u(), c("a", {
    href: "#",
    onClick: t[0] || (t[0] = oe((...r) => e.emitClick && e.emitClick(...r), ["prevent"]))
  }, [
    N(e.$slots, "default"),
    D(ge, {
      name: "fade",
      mode: "out-in"
    }, {
      default: A(() => [
        e.isActive && e.sortAsc ? (u(), c("span", Ti, "↑")) : e.isActive ? (u(), c("span", Pi, "↓")) : L("", !0)
      ]),
      _: 1
    })
  ]);
}
const Li = /* @__PURE__ */ O(Ci, [["render", Mi]]), Ai = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Li
}, Symbol.toStringTag, { value: "Module" }));
const zi = {}, Vi = { class: "k-spacer" };
function Bi(e, t) {
  return u(), c("div", Vi);
}
const Fi = /* @__PURE__ */ O(zi, [["render", Bi]]), Ni = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fi
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
}), Re = () => {
  qe((e) => ({
    "2f4ab6bd": e.switchWidthPx,
    "3acd298c": e.heightPx,
    "37d7127c": e.innerSizePx,
    "13e4c99c": e.paddingPx,
    "79abc333": e.transPx
  }));
}, We = Ae.setup;
Ae.setup = We ? (e, t) => (Re(), We(e, t)) : Re;
const Di = /* @__PURE__ */ $("span", { class: "k-switch-slider" }, null, -1), Ii = [
  Di
];
function Ei(e, t, n, s, l, i) {
  return u(), c("div", {
    class: J(["k-switch", e.classObj]),
    onClick: t[0] || (t[0] = (...r) => e.toggle && e.toggle(...r))
  }, Ii, 2);
}
const Ui = /* @__PURE__ */ O(Ae, [["render", Ei]]), Ri = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ui
}, Symbol.toStringTag, { value: "Module" })), Wi = S({
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
function qi(e, t, n, s, l, i) {
  const r = M("KLinearProgressIndicator");
  return u(), c("div", null, [
    e.loading ? (u(), V(r, { key: 0 })) : L("", !0),
    $("table", {
      class: J(["k-table", e.classObj])
    }, [
      N(e.$slots, "default")
    ], 2)
  ]);
}
const Hi = /* @__PURE__ */ O(Wi, [["render", qi]]), Gi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Hi
}, Symbol.toStringTag, { value: "Module" })), Qi = S({
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
      const t = e.target, n = this.valueLocal, s = t.selectionStart;
      if (n && s) {
        const l = n.slice(0, s), i = n.slice(s), r = `${l}	${i}`;
        this.valueLocal = r, t.value = r, t.selectionStart = s + 1, t.selectionEnd = s + 1;
      }
    }
  }
});
const Yi = ["rows"];
function Xi(e, t, n, s, l, i) {
  const r = M("KFormFieldWrapper");
  return u(), V(r, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: A(() => [
      ne($("textarea", me({
        "onUpdate:modelValue": t[0] || (t[0] = (a) => e.valueLocal = a)
      }, e.$attrs, {
        spellcheck: "false",
        class: [e.classObj, "k-textarea"],
        rows: e.rows,
        onKeydown: t[1] || (t[1] = fe(oe((...a) => e.tabber && e.tabber(...a), ["prevent"]), ["tab"]))
      }), null, 16, Yi), [
        [Oe, e.valueLocal]
      ])
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const Ji = /* @__PURE__ */ O(Qi, [["render", Xi]]), Zi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ji
}, Symbol.toStringTag, { value: "Module" })), el = S({
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
const tl = ["placeholder"];
function nl(e, t, n, s, l, i) {
  const r = M("KFormFieldWrapper");
  return u(), V(r, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: A(() => [
      ne($("input", {
        "onUpdate:modelValue": t[0] || (t[0] = (a) => e.value = a),
        class: J(["k-input-text-field", e.classObj]),
        placeholder: e.placeholder
      }, null, 10, tl), [
        [Oe, e.value]
      ])
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const rl = /* @__PURE__ */ O(el, [["render", nl]]), ol = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: rl
}, Symbol.toStringTag, { value: "Module" })), sl = S({
  setup() {
    return {
      config: ee(he),
      session: ee(ie)
    };
  },
  mixins: [be],
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
}), il = ["src"];
function ll(e, t, n, s, l, i) {
  return e.url ? (u(), c("img", {
    key: 0,
    src: e.url,
    style: se([e.measurableStyles])
  }, null, 12, il)) : L("", !0);
}
const al = /* @__PURE__ */ O(sl, [["render", ll]]), ul = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: al
}, Symbol.toStringTag, { value: "Module" })), ce = new _e();
function dl(e) {
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
class cl {
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
    }), clearInterval(this.intervalId), this.intervalId = setTimeout(this.processQueue.bind(this), 50);
  }
  async processQueue() {
    const t = this.session.rpcClient("/api/v1/rh/rpc/user/"), n = this.queueItems;
    this.resetQueue(), n.forEach((s) => {
      const l = s.userId;
      t.queue("UserLookup", { userId: l });
    });
    try {
      (await t.batch(!0)).forEach((l, i) => {
        const r = n[i].resolveFunc;
        r(l);
      });
    } catch {
      n.forEach((s) => s.resolveFunc(null));
    }
  }
}
class pl {
  users;
  userLookupQueue;
  constructor() {
    this.users = {}, this.userLookupQueue = new cl();
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
          const s = await t.members.member(n), l = dl(s.data);
          return this.users[n] = l, l;
        }
      } finally {
        ce.release(n);
      }
    else
      return null;
  }
  async lookupRPC(t, n) {
    return n ? (await ce.acquire(n), this.users[n] ? (ce.release(n), this.users[n]) : new Promise((s) => {
      const l = (i) => {
        this.users[n] = i, s(i), ce.release(n);
      };
      this.userLookupQueue.queue(t, l, n);
    })) : null;
  }
  async lookup(t, n, s = !1) {
    return s ? this.lookupLegacy(t, n) : this.lookupRPC(t, n);
  }
}
const $t = new pl(), fl = S({
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
        this.isInteger(e) ? this.userRecLocal = await $t.lookup(
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
const ml = {
  key: 0,
  class: "k-user-link"
};
function hl(e, t, n, s, l, i) {
  const r = M("KUserGIF");
  return e.userRecLocal ? (u(), c("span", ml, [
    e.gif ? (u(), V(r, {
      key: 0,
      "user-rec": e.userRecLocal
    }, null, 8, ["user-rec"])) : L("", !0),
    Q("   "),
    $("a", {
      href: "#",
      onClick: t[0] || (t[0] = oe((...a) => e.click && e.click(...a), ["prevent"]))
    }, F(e.displayName), 1)
  ])) : L("", !0);
}
const gl = /* @__PURE__ */ O(fl, [["render", hl]]), _l = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: gl
}, Symbol.toStringTag, { value: "Module" })), bl = S({
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
          const t = await $t.lookup(
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
const yl = { class: "flex items-center gap-1" };
function vl(e, t, n, s, l, i) {
  const r = M("KUserGIF"), a = M("KAutocomplete"), d = M("KUserLink"), o = M("KFormFieldWrapper");
  return u(), V(o, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: A(() => [
      e.editable ? (u(), V(a, {
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
        prepend: A(({ item: f }) => [
          f ? (u(), V(r, {
            key: 0,
            type: f.type
          }, null, 8, ["type"])) : (u(), V(r, {
            key: 1,
            type: e.USER
          }, null, 8, ["type"]))
        ]),
        item: A(({ item: f }) => [
          $("div", yl, [
            D(r, {
              type: f.type
            }, null, 8, ["type"]),
            Q(" " + F(f.text), 1)
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "search-input", "placeholder", "width", "loading", "items", "return-object"])) : (u(), V(d, {
        key: 1,
        user: e.modelValue,
        gif: ""
      }, null, 8, ["user"]))
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const kt = /* @__PURE__ */ O(bl, [["render", vl]]), $l = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: kt
}, Symbol.toStringTag, { value: "Module" })), kl = S({
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
const wl = { class: "k-tabs" }, Sl = { class: "k-tabs-nav" }, Ol = ["href", "onClick"], xl = { class: "k-tabs-content" };
function Kl(e, t, n, s, l, i) {
  return u(), c("div", wl, [
    $("div", Sl, [
      (u(!0), c(U, null, X(e.tabs, (r) => (u(), c("div", {
        key: r.name,
        class: J(e.classObj(r))
      }, [
        $("a", {
          href: `#${r.name}`,
          onClick: (a) => e.selectTab(r.name)
        }, F(r.title), 9, Ol)
      ], 2))), 128))
    ]),
    $("div", xl, [
      N(e.$slots, "default")
    ])
  ]);
}
const jl = /* @__PURE__ */ O(kl, [["render", Kl]]), Cl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: jl
}, Symbol.toStringTag, { value: "Module" })), Tl = S({
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
}), Pl = { key: 0 };
function Ml(e, t, n, s, l, i) {
  return e.isSelected ? (u(), c("div", Pl, [
    N(e.$slots, "default")
  ])) : L("", !0);
}
const Ll = /* @__PURE__ */ O(Tl, [["render", Ml]]), Al = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ll
}, Symbol.toStringTag, { value: "Module" })), zl = S({
  extends: kt,
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
}), Vl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zl
}, Symbol.toStringTag, { value: "Module" }));
function pe(e) {
  return (t, n = {}) => new Promise((s) => {
    window.csui.require(
      ["csui/dialogs/modal.alert/modal.alert"],
      function(l) {
        l[e](s, t, null, n);
      }
    );
  });
}
function ue(e) {
  return (t, n = {}) => new Promise((s) => {
    window.csui.require(
      ["csui/dialogs/modal.alert/modal.alert"],
      function(l) {
        l[e](s, t, null, n);
      }
    );
  });
}
const Gl = () => ({
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
}), Ql = (e, t) => {
  const n = t.sortKey, l = t.sortAsc ? 1 : -1;
  return [...e].sort((i, r) => {
    if (n) {
      const a = String(z(i, n, "") ?? ""), d = String(z(r, n, "") ?? "");
      return l * a.toLowerCase().localeCompare(d.toLowerCase());
    } else
      return 0;
  });
}, Bl = /* @__PURE__ */ Object.assign({
  "./components/Card/KCard.vue": At,
  "./components/Card/KCardActions.vue": Nt,
  "./components/Card/KCardText.vue": Rt,
  "./components/Card/KCardTitle.vue": Qt,
  "./components/Icons/KMenuDownIcon.vue": nn,
  "./components/KAdminLink.vue": dn,
  "./components/KAlert.vue": wn,
  "./components/KApp.vue": jn,
  "./components/KAutocomplete.vue": Vn,
  "./components/KBrowseLink.vue": Yn,
  "./components/KButton.vue": tr,
  "./components/KConfirm.vue": sr,
  "./components/KDateTimePicker.vue": cr,
  "./components/KDialog.vue": hr,
  "./components/KDivider.vue": yr,
  "./components/KDot.vue": wr,
  "./components/KFormFieldWrapper.vue": jr,
  "./components/KFunctionMenu.vue": Vr,
  "./components/KFunctionMenuModern.vue": Yr,
  "./components/KLinearProgressIndicator.vue": to,
  "./components/KList/KList.vue": io,
  "./components/KList/KListItem.vue": qr,
  "./components/KList/KListItemSubtitle.vue": Rr,
  "./components/KList/KListItemTitle.vue": Dr,
  "./components/KMenu/KMenu.vue": po,
  "./components/KMenu/KRightCaret.vue": yo,
  "./components/KMulti.vue": Ko,
  "./components/KMulti2.vue": Lo,
  "./components/KMultiUserPicker.vue": Bo,
  "./components/KNodeAncestor.vue": Eo,
  "./components/KNodePickerField.vue": Go,
  "./components/KOneMoment.vue": es,
  "./components/KPageDropZone.vue": os,
  "./components/KPageTitle.vue": cs,
  "./components/KPagination.vue": xs,
  "./components/KPagination2.vue": Bs,
  "./components/KPleaseWait.vue": Hs,
  "./components/KRadioGroup.vue": Zs,
  "./components/KScratch.vue": ri,
  "./components/KSelect.vue": di,
  "./components/KSmartUIPanel.vue": bi,
  "./components/KSnackbar.vue": ji,
  "./components/KSortHeader.vue": Ai,
  "./components/KSpacer.vue": Ni,
  "./components/KSpinner.vue": Es,
  "./components/KSwitch.vue": Ri,
  "./components/KTable.vue": Gi,
  "./components/KTextArea.vue": Zi,
  "./components/KTextField.vue": ol,
  "./components/KUserGIF.vue": ul,
  "./components/KUserLink.vue": _l,
  "./components/KUserPicker.vue": $l,
  "./components/KUserPickerLegacy.vue": Vl,
  "./components/Tabs/KTabItem.vue": Al,
  "./components/Tabs/KTabs.vue": Cl
});
let we;
const Yl = {
  install(e, t) {
    Object.entries(Bl).forEach(
      ([s, l]) => {
        const i = s?.split("/")?.pop()?.replace(/\.\w+$/, "");
        e.component(i, l.default);
      }
    ), we = new Mt(t);
    const n = {
      userId: t.userId,
      img: t.img,
      baseUrl: t.baseUrl,
      jsLongDateFormat: t.datelong,
      jsShortDateFormat: t.dateshort
    };
    e.provide(ie, we), e.provide(he, n);
  }
}, Fl = () => we;
export {
  un as KAdminLink,
  kn as KAlert,
  Kn as KApp,
  zn as KAutocomplete,
  Qn as KBrowseLink,
  er as KButton,
  Lt as KCard,
  Ft as KCardActions,
  Ut as KCardText,
  Gt as KCardTitle,
  or as KConfirm,
  dr as KDateTimePicker,
  mr as KDialog,
  mt as KDivider,
  kr as KDot,
  Kr as KFormFieldWrapper,
  zr as KFunctionMenu,
  Qr as KFunctionMenuModern,
  eo as KLinearProgressIndicator,
  so as KList,
  _t as KListItem,
  gt as KListItemSubtitle,
  ht as KListItemTitle,
  co as KMenu,
  Ge as KMenuDownIcon,
  xo as KMulti,
  Mo as KMulti2,
  Vo as KMultiUserPicker,
  yt as KNodeAncestor,
  Ho as KNodePickerField,
  Zo as KOneMoment,
  rs as KPageDropZone,
  ds as KPageTitle,
  Os as KPagination,
  Vs as KPagination2,
  qs as KPleaseWait,
  Js as KRadioGroup,
  bo as KRightCaret,
  ni as KScratch,
  ui as KSelect,
  _i as KSmartUIPanel,
  Ki as KSnackbar,
  Li as KSortHeader,
  Fi as KSpacer,
  vt as KSpinner,
  Ui as KSwitch,
  Ll as KTabItem,
  Hi as KTable,
  jl as KTabs,
  Ji as KTextArea,
  rl as KTextField,
  al as KUserGIF,
  gl as KUserLink,
  kt as KUserPicker,
  zl as KUserPickerLegacy,
  he as configKey,
  Fn as confirmDialogKey,
  Yl as default,
  Ql as generalSort,
  ee as injectStrict,
  En as nodeLookup,
  ie as sessionKey,
  Bn as snackbarKey,
  Fl as useSession,
  Gl as useSmartUI,
  $t as userLookup
};
