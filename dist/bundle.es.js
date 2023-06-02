import { defineComponent as j, h as ft, openBlock as u, createElementBlock as f, renderSlot as U, createElementVNode as k, normalizeStyle as ie, resolveComponent as z, createVNode as D, withCtx as L, resolveDirective as Ne, withDirectives as oe, normalizeClass as J, withKeys as pe, withModifiers as re, vModelText as $e, Fragment as q, renderList as Z, createTextVNode as G, toDisplayString as F, createCommentVNode as A, inject as mt, createBlock as B, mergeProps as Ee, vModelDynamic as gt, Teleport as ht, Transition as me, setBlockTracking as Ae, TransitionGroup as ke, useCssVars as Ue, vModelRadio as _t, vModelSelect as bt } from "vue";
import M from "lodash.get";
import { directive as De } from "vue3-click-away";
import we from "@chriscdn/promise-semaphore";
import { format as Me } from "date-fns";
import { disableBodyScroll as yt, enableBodyScroll as vt } from "body-scroll-lock";
import $t from "@googlicius/build-url";
import kt from "js-cookie";
import { Session as wt } from "@kweli/cs-rest";
const St = {
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
}, Y = (e, t = "px") => {
  if (!(e == null || e === ""))
    return isNaN(+e) ? String(e) : `${Number(e)}${t}`;
}, ge = j({
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
      const e = {}, t = Y(this.height), n = Y(this.minHeight), i = Y(this.minWidth), a = Y(this.maxHeight), s = Y(this.maxWidth), r = Y(this.width);
      return t && (e.height = t), n && (e.minHeight = n), i && (e.minWidth = i), a && (e.maxHeight = a), s && (e.maxWidth = s), r && (e.width = r), e;
    }
  }
}), Ot = j({
  mixins: [ge, St],
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
const xt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ot
}, Symbol.toStringTag, { value: "Module" })), Ct = j({});
const K = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, a] of t)
    n[i] = a;
  return n;
}, Pt = { class: "k-card-actions" };
function jt(e, t, n, i, a, s) {
  return u(), f("div", Pt, [
    U(e.$slots, "default")
  ]);
}
const Tt = /* @__PURE__ */ K(Ct, [["render", jt]]), Kt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Tt
}, Symbol.toStringTag, { value: "Module" })), At = j({});
const Mt = { class: "k-card-text" };
function zt(e, t, n, i, a, s) {
  return u(), f("div", Mt, [
    U(e.$slots, "default")
  ]);
}
const Lt = /* @__PURE__ */ K(At, [["render", zt]]), Vt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Lt
}, Symbol.toStringTag, { value: "Module" })), Ft = j({});
const Bt = { class: "k-card-title" };
function Nt(e, t, n, i, a, s) {
  return u(), f("div", Bt, [
    U(e.$slots, "default")
  ]);
}
const Et = /* @__PURE__ */ K(Ft, [["render", Nt]]), Ut = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Et
}, Symbol.toStringTag, { value: "Module" })), Dt = j({
  setup() {
    return { config: ee(fe) };
  }
}), Rt = { clsas: "space-y-2" }, It = /* @__PURE__ */ k("hr", null, null, -1), Wt = ["href"];
function qt(e, t, n, i, a, s) {
  return u(), f("div", Rt, [
    It,
    k("a", {
      href: `${e.config.baseUrl}?func=admin.index`
    }, "Admin Home", 8, Wt)
  ]);
}
const Ht = /* @__PURE__ */ K(Dt, [["render", qt]]), Gt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ht
}, Symbol.toStringTag, { value: "Module" }));
function Qt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Re = {}, Ie = {}, Se = {};
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
    let i = [
      "var",
      "calc",
      "min",
      "max",
      "clamp"
    ];
    for (const a of i)
      if (n.includes(`${a}(`))
        return `calc(${n} * -1)`;
  }
})(Se);
var We = {};
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
})(We);
var qe = {};
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
})(qe);
var He = {}, he = {}, Oe = { exports: {} }, E = String, Ge = function() {
  return { isColorSupported: !1, reset: E, bold: E, dim: E, italic: E, underline: E, inverse: E, hidden: E, strikethrough: E, black: E, red: E, green: E, yellow: E, blue: E, magenta: E, cyan: E, white: E, gray: E, bgBlack: E, bgRed: E, bgGreen: E, bgYellow: E, bgBlue: E, bgMagenta: E, bgCyan: E, bgWhite: E };
};
Oe.exports = Ge();
Oe.exports.createColors = Ge;
var Qe = Oe.exports;
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
      return l;
    }
  });
  const n = /* @__PURE__ */ i(Qe);
  function i(d) {
    return d && d.__esModule ? d : {
      default: d
    };
  }
  let a = /* @__PURE__ */ new Set();
  function s(d, o, p) {
    typeof process < "u" && process.env.JEST_WORKER_ID || p && a.has(p) || (p && a.add(p), console.warn(""), o.forEach((b) => console.warn(d, "-", b)));
  }
  function r(d) {
    return n.default.dim(d);
  }
  const l = {
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
})(he);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return a;
    }
  });
  const t = /* @__PURE__ */ n(he);
  function n(s) {
    return s && s.__esModule ? s : {
      default: s
    };
  }
  function i({ version: s, from: r, to: l }) {
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
})(He);
var Ye = {};
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
})(Ye);
var Xe = {};
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
    let i = n.split("[").length - 1, a = n.split("]").length - 1;
    if (i !== a)
      throw new Error(`Path is invalid. Has unbalanced brackets: ${n}`);
    return n.split(/\.(?![^\[]*\])|[\[\]]/g).filter(Boolean);
  }
})(Xe);
var Je = {}, _e = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(b, _) {
    for (var S in _)
      Object.defineProperty(b, S, {
        enumerable: !0,
        get: _[S]
      });
  }
  t(e, {
    flagEnabled: function() {
      return l;
    },
    issueFlagNotices: function() {
      return o;
    },
    default: function() {
      return p;
    }
  });
  const n = /* @__PURE__ */ a(Qe), i = /* @__PURE__ */ a(he);
  function a(b) {
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
  function l(b, _) {
    if (r.future.includes(_)) {
      var S, y, P;
      return b.future === "all" || ((P = (y = b == null || (S = b.future) === null || S === void 0 ? void 0 : S[_]) !== null && y !== void 0 ? y : s[_]) !== null && P !== void 0 ? P : !1);
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
    return Object.keys((_ = b?.experimental) !== null && _ !== void 0 ? _ : {}).filter((S) => r.experimental.includes(S) && b.experimental[S]);
  }
  function o(b) {
    if (process.env.JEST_WORKER_ID === void 0 && d(b).length > 0) {
      let _ = d(b).map((S) => n.default.yellow(S)).join(", ");
      i.default.warn("experimental-flags-enabled", [
        `You have enabled experimental features: ${_}`,
        "Experimental features in Tailwind CSS are not covered by semver, may introduce breaking changes, and can change at any time."
      ]);
    }
  }
  const p = r;
})(_e);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "normalizeConfig", {
    enumerable: !0,
    get: function() {
      return s;
    }
  });
  const t = _e, n = /* @__PURE__ */ a(he);
  function i(r) {
    if (typeof WeakMap != "function")
      return null;
    var l = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new WeakMap();
    return (i = function(o) {
      return o ? d : l;
    })(r);
  }
  function a(r, l) {
    if (!l && r && r.__esModule)
      return r;
    if (r === null || typeof r != "object" && typeof r != "function")
      return {
        default: r
      };
    var d = i(l);
    if (d && d.has(r))
      return d.get(r);
    var o = {}, p = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var b in r)
      if (b !== "default" && Object.prototype.hasOwnProperty.call(r, b)) {
        var _ = p ? Object.getOwnPropertyDescriptor(r, b) : null;
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
      let { content: p, purge: b, safelist: _ } = r;
      return Array.isArray(_) ? _ : Array.isArray(p?.safelist) ? p.safelist : Array.isArray(b?.safelist) ? b.safelist : Array.isArray(b == null || (o = b.options) === null || o === void 0 ? void 0 : o.safelist) ? b.options.safelist : [];
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
          var _, S, y, P, V, R, I, N, W, H;
          return !((_ = r.purge) === null || _ === void 0) && _.extract ? r.purge.extract : !((S = r.content) === null || S === void 0) && S.extract ? r.content.extract : !((y = r.purge) === null || y === void 0 || (P = y.extract) === null || P === void 0) && P.DEFAULT ? r.purge.extract.DEFAULT : !((V = r.content) === null || V === void 0 || (R = V.extract) === null || R === void 0) && R.DEFAULT ? r.content.extract.DEFAULT : !((I = r.purge) === null || I === void 0 || (N = I.options) === null || N === void 0) && N.extractors ? r.purge.options.extractors : !((W = r.content) === null || W === void 0 || (H = W.options) === null || H === void 0) && H.extractors ? r.content.options.extractors : {};
        })(), p = {}, b = (() => {
          var _, S, y, P;
          if (!((_ = r.purge) === null || _ === void 0 || (S = _.options) === null || S === void 0) && S.defaultExtractor)
            return r.purge.options.defaultExtractor;
          if (!((y = r.content) === null || y === void 0 || (P = y.options) === null || P === void 0) && P.defaultExtractor)
            return r.content.options.defaultExtractor;
        })();
        if (b !== void 0 && (p.DEFAULT = b), typeof o == "function")
          p.DEFAULT = o;
        else if (Array.isArray(o))
          for (let { extensions: _, extractor: S } of o ?? [])
            for (let y of _)
              p[y] = S;
        else
          typeof o == "object" && o !== null && Object.assign(p, o);
        return p;
      })(),
      transform: (() => {
        let o = (() => {
          var b, _, S, y, P, V;
          return !((b = r.purge) === null || b === void 0) && b.transform ? r.purge.transform : !((_ = r.content) === null || _ === void 0) && _.transform ? r.content.transform : !((S = r.purge) === null || S === void 0 || (y = S.transform) === null || y === void 0) && y.DEFAULT ? r.purge.transform.DEFAULT : !((P = r.content) === null || P === void 0 || (V = P.transform) === null || V === void 0) && V.DEFAULT ? r.content.transform.DEFAULT : {};
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
var Ze = {};
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
})(Ze);
var et = {};
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
    return Array.isArray(n) ? n.map((i) => t(i)) : typeof n == "object" && n !== null ? Object.fromEntries(Object.entries(n).map(([i, a]) => [
      i,
      t(a)
    ])) : n;
  }
})(et);
var tt = {}, nt = {};
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
})(nt);
var xe = {}, Ce = {}, rt = {};
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
})(rt);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(y, P) {
    for (var V in P)
      Object.defineProperty(y, V, {
        enumerable: !0,
        get: P[V]
      });
  }
  t(e, {
    parseColor: function() {
      return _;
    },
    formatColor: function() {
      return S;
    }
  });
  const n = /* @__PURE__ */ i(rt);
  function i(y) {
    return y && y.__esModule ? y : {
      default: y
    };
  }
  let a = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i, s = /^#([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i, r = /(?:\d+|\d*\.\d+)%?/, l = /(?:\s*,\s*|\s+)/, d = /\s*[,/]\s*/, o = /var\(--(?:[^ )]*?)\)/, p = new RegExp(`^(rgba?)\\(\\s*(${r.source}|${o.source})(?:${l.source}(${r.source}|${o.source}))?(?:${l.source}(${r.source}|${o.source}))?(?:${d.source}(${r.source}|${o.source}))?\\s*\\)$`), b = new RegExp(`^(hsla?)\\(\\s*((?:${r.source})(?:deg|rad|grad|turn)?|${o.source})(?:${l.source}(${r.source}|${o.source}))?(?:${l.source}(${r.source}|${o.source}))?(?:${d.source}(${r.source}|${o.source}))?\\s*\\)$`);
  function _(y, { loose: P = !1 } = {}) {
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
        color: n.default[y].map((Q) => Q.toString())
      };
    let I = y.replace(s, (Q, ne, te, h, x) => [
      "#",
      ne,
      ne,
      te,
      te,
      h,
      h,
      x ? x + x : ""
    ].join("")).match(a);
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
    let W = (N = y.match(p)) !== null && N !== void 0 ? N : y.match(b);
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
    } : !P && H.length !== 3 || H.length < 3 && !H.some((Q) => /^var\(.*?\)$/.test(Q)) ? null : {
      mode: W[1],
      color: H,
      alpha: (V = W[5]) === null || V === void 0 || (R = V.toString) === null || R === void 0 ? void 0 : R.call(V)
    };
  }
  function S({ mode: y, color: P, alpha: V }) {
    let R = V !== void 0;
    return y === "rgba" || y === "hsla" ? `${y}(${P.join(", ")}${R ? `, ${V}` : ""})` : `${y}(${P.join(" ")}${R ? ` / ${V}` : ""})`;
  }
})(Ce);
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
      return i;
    },
    default: function() {
      return a;
    }
  });
  const n = Ce;
  function i(s, r, l) {
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
        ...Object.fromEntries(d.map((p) => [
          p,
          s({
            opacityVariable: l,
            opacityValue: `var(${l})`
          })
        ]))
      };
    const o = (0, n.parseColor)(s);
    return o === null ? Object.fromEntries(d.map((p) => [
      p,
      s
    ])) : o.alpha !== void 0 ? Object.fromEntries(d.map((p) => [
      p,
      s
    ])) : {
      [l]: "1",
      ...Object.fromEntries(d.map((p) => [
        p,
        (0, n.formatColor)({
          ...o,
          alpha: `var(${l})`
        })
      ]))
    };
  }
})(xe);
var Pe = {}, ot = {}, be = {};
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
    let a = [], s = [], r = 0, l = !1;
    for (let d = 0; d < n.length; d++) {
      let o = n[d];
      a.length === 0 && o === i[0] && !l && (i.length === 1 || n.slice(d, d + i.length) === i) && (s.push(n.slice(r, d)), r = d + i.length), l ? l = !1 : o === "\\" && (l = !0), o === "(" || o === "[" || o === "{" ? a.push(o) : (o === ")" && a[a.length - 1] === "(" || o === "]" && a[a.length - 1] === "[" || o === "}" && a[a.length - 1] === "{") && a.pop();
    }
    return s.push(n.slice(r)), s;
  }
})(be);
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
      return l;
    }
  });
  const n = be;
  let i = /* @__PURE__ */ new Set([
    "inset",
    "inherit",
    "initial",
    "revert",
    "unset"
  ]), a = /\ +(?![^(]*\))/g, s = /^-?(\d+|\.\d+)(.*?)$/g;
  function r(d) {
    return (0, n.splitAtTopLevelOnly)(d, ",").map((p) => {
      let b = p.trim(), _ = {
        raw: b
      }, S = b.split(a), y = /* @__PURE__ */ new Set();
      for (let P of S)
        s.lastIndex = 0, !y.has("KEYWORD") && i.has(P) ? (_.keyword = P, y.add("KEYWORD")) : s.test(P) ? y.has("X") ? y.has("Y") ? y.has("BLUR") ? y.has("SPREAD") || (_.spread = P, y.add("SPREAD")) : (_.blur = P, y.add("BLUR")) : (_.y = P, y.add("Y")) : (_.x = P, y.add("X")) : _.color ? (_.unknown || (_.unknown = []), _.unknown.push(P)) : _.color = P;
      return _.valid = _.x !== void 0 && _.y !== void 0, _;
    });
  }
  function l(d) {
    return d.map((o) => o.valid ? [
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
    for (var C in O)
      Object.defineProperty(c, C, {
        enumerable: !0,
        get: O[C]
      });
  }
  t(e, {
    normalize: function() {
      return o;
    },
    url: function() {
      return p;
    },
    number: function() {
      return b;
    },
    percentage: function() {
      return _;
    },
    length: function() {
      return P;
    },
    lineWidth: function() {
      return R;
    },
    shadow: function() {
      return I;
    },
    color: function() {
      return N;
    },
    image: function() {
      return W;
    },
    gradient: function() {
      return Q;
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
  const n = Ce, i = ot, a = be;
  let s = [
    "min",
    "max",
    "clamp",
    "calc"
  ];
  function r(c) {
    return s.some((O) => new RegExp(`^${O}\\(.*\\)`).test(c));
  }
  const l = "--tw-placeholder", d = new RegExp(l, "g");
  function o(c, O = !0) {
    return c.startsWith("--") ? `var(${c})` : c.includes("url(") ? c.split(/(url\(.*?\))/g).filter(Boolean).map((C) => /^url\(.*?\)$/.test(C) ? C : o(C, !1)).join("") : (c = c.replace(/([^\\])_+/g, (C, T) => T + " ".repeat(C.length - 1)).replace(/^_/g, " ").replace(/\\_/g, "_"), O && (c = c.trim()), c = c.replace(/(calc|min|max|clamp)\(.+\)/g, (C) => {
      let T = [];
      return C.replace(/var\((--.+?)[,)]/g, (X, Ke) => (T.push(Ke), X.replace(Ke, l))).replace(/(-?\d*\.?\d(?!\b-\d.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g, "$1 $2 ").replace(d, () => T.shift());
    }), c);
  }
  function p(c) {
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
  function P(c) {
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
    let O = (0, i.parseBoxShadowValue)(o(c));
    for (let C of O)
      if (!C.valid)
        return !1;
    return !0;
  }
  function N(c) {
    let O = 0;
    return (0, a.splitAtTopLevelOnly)(c, "_").every((T) => (T = o(T), T.startsWith("var(") ? !0 : (0, n.parseColor)(T, {
      loose: !0
    }) !== null ? (O++, !0) : !1)) ? O > 0 : !1;
  }
  function W(c) {
    let O = 0;
    return (0, a.splitAtTopLevelOnly)(c, ",").every((T) => (T = o(T), T.startsWith("var(") ? !0 : p(T) || Q(T) || [
      "element(",
      "image(",
      "cross-fade(",
      "image-set("
    ].some((X) => T.startsWith(X)) ? (O++, !0) : !1)) ? O > 0 : !1;
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
  function te(c) {
    let O = 0;
    return (0, a.splitAtTopLevelOnly)(c, "_").every((T) => (T = o(T), T.startsWith("var(") ? !0 : ne.has(T) || P(T) || _(T) ? (O++, !0) : !1)) ? O > 0 : !1;
  }
  function h(c) {
    let O = 0;
    return (0, a.splitAtTopLevelOnly)(c, ",").every((T) => (T = o(T), T.startsWith("var(") ? !0 : T.includes(" ") && !/(['"])([^"']+)\1/g.test(T) || /^\d/g.test(T) ? !1 : (O++, !0))) ? O > 0 : !1;
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
  function w(c) {
    return x.has(c);
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
})(Pe);
var st = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "backgroundSize", {
    enumerable: !0,
    get: function() {
      return i;
    }
  });
  const t = Pe, n = be;
  function i(a) {
    let s = [
      "cover",
      "contain"
    ];
    return (0, n.splitAtTopLevelOnly)(a, ",").every((r) => {
      let l = (0, n.splitAtTopLevelOnly)(r, "_").filter(Boolean);
      return l.length === 1 && s.includes(l[0]) ? !0 : l.length !== 1 && l.length !== 2 ? !1 : l.every((d) => (0, t.length)(d) || (0, t.percentage)(d) || d === "auto");
    });
  }
})(st);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(h, x) {
    for (var w in x)
      Object.defineProperty(h, w, {
        enumerable: !0,
        get: x[w]
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
      return P;
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
      return ne;
    },
    getMatchingTypes: function() {
      return te;
    }
  });
  const n = /* @__PURE__ */ d(nt), i = xe, a = Pe, s = /* @__PURE__ */ d(Se), r = st, l = _e;
  function d(h) {
    return h && h.__esModule ? h : {
      default: h
    };
  }
  function o(h, x) {
    h.walkClasses((w) => {
      w.value = x(w.value), w.raws && w.raws.value && (w.raws.value = (0, n.default)(w.raws.value));
    });
  }
  function p(h, x) {
    if (!S(h))
      return;
    let w = h.slice(1, -1);
    if (x(w))
      return (0, a.normalize)(w);
  }
  function b(h, x = {}, w) {
    let m = x[h];
    if (m !== void 0)
      return (0, s.default)(m);
    if (S(h)) {
      let v = p(h, w);
      return v === void 0 ? void 0 : (0, s.default)(v);
    }
  }
  function _(h, x = {}, { validate: w = () => !0 } = {}) {
    var m;
    let v = (m = x.values) === null || m === void 0 ? void 0 : m[h];
    return v !== void 0 ? v : x.supportsNegativeValues && h.startsWith("-") ? b(h.slice(1), x.values, w) : p(h, w);
  }
  function S(h) {
    return h.startsWith("[") && h.endsWith("]");
  }
  function y(h) {
    let x = h.lastIndexOf("/");
    return x === -1 || x === h.length - 1 ? [
      h,
      void 0
    ] : S(h) && !h.includes("]/[") ? [
      h,
      void 0
    ] : [
      h.slice(0, x),
      h.slice(x + 1)
    ];
  }
  function P(h) {
    if (typeof h == "string" && h.includes("<alpha-value>")) {
      let x = h;
      return ({ opacityValue: w = 1 }) => x.replace("<alpha-value>", w);
    }
    return h;
  }
  function V(h) {
    return (0, a.normalize)(h.slice(1, -1));
  }
  function R(h, x = {}, { tailwindConfig: w = {} } = {}) {
    var m;
    if (((m = x.values) === null || m === void 0 ? void 0 : m[h]) !== void 0) {
      var v;
      return P((v = x.values) === null || v === void 0 ? void 0 : v[h]);
    }
    let [$, g] = y(h);
    if (g !== void 0) {
      var c, O, C, T;
      let X = (T = (c = x.values) === null || c === void 0 ? void 0 : c[$]) !== null && T !== void 0 ? T : S($) ? $.slice(1, -1) : void 0;
      return X === void 0 ? void 0 : (X = P(X), S(g) ? (0, i.withAlphaValue)(X, V(g)) : ((O = w.theme) === null || O === void 0 || (C = O.opacity) === null || C === void 0 ? void 0 : C[g]) === void 0 ? void 0 : (0, i.withAlphaValue)(X, w.theme.opacity[g]));
    }
    return _(h, x, {
      validate: a.color
    });
  }
  function I(h, x = {}) {
    var w;
    return (w = x.values) === null || w === void 0 ? void 0 : w[h];
  }
  function N(h) {
    return (x, w) => _(x, w, {
      validate: h
    });
  }
  let W = {
    any: _,
    color: R,
    url: N(a.url),
    image: N(a.image),
    length: N(a.length),
    percentage: N(a.percentage),
    position: N(a.position),
    lookup: I,
    "generic-name": N(a.genericName),
    "family-name": N(a.familyName),
    number: N(a.number),
    "line-width": N(a.lineWidth),
    "absolute-size": N(a.absoluteSize),
    "relative-size": N(a.relativeSize),
    shadow: N(a.shadow),
    size: N(r.backgroundSize)
  }, H = Object.keys(W);
  function Q(h, x) {
    let w = h.indexOf(x);
    return w === -1 ? [
      void 0,
      h
    ] : [
      h.slice(0, w),
      h.slice(w + 1)
    ];
  }
  function ne(h, x, w, m) {
    if (w.values && x in w.values)
      for (let { type: $ } of h ?? []) {
        let g = W[$](x, w, {
          tailwindConfig: m
        });
        if (g !== void 0)
          return [
            g,
            $,
            null
          ];
      }
    if (S(x)) {
      let $ = x.slice(1, -1), [g, c] = Q($, ":");
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
    let v = te(h, x, w, m);
    for (let $ of v)
      return $;
    return [];
  }
  function* te(h, x, w, m) {
    let v = (0, l.flagEnabled)(m, "generalizedModifiers"), [$, g] = y(x);
    if (v && w.modifiers != null && (w.modifiers === "any" || typeof w.modifiers == "object" && (g && S(g) || g in w.modifiers)) || ($ = x, g = void 0), g !== void 0 && $ === "" && ($ = "DEFAULT"), g !== void 0 && typeof w.modifiers == "object") {
      var O, C;
      let T = (C = (O = w.modifiers) === null || O === void 0 ? void 0 : O[g]) !== null && C !== void 0 ? C : null;
      T !== null ? g = T : S(g) && (g = V(g));
    }
    for (let { type: T } of h ?? []) {
      let X = W[T]($, w, {
        tailwindConfig: m
      });
      X !== void 0 && (yield [
        X,
        T,
        g ?? null
      ]);
    }
  }
})(tt);
var it = {};
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
})(it);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return w;
    }
  });
  const t = /* @__PURE__ */ S(Se), n = /* @__PURE__ */ S(We), i = /* @__PURE__ */ S(qe), a = /* @__PURE__ */ S(He), s = Ye, r = Xe, l = Je, d = /* @__PURE__ */ S(Ze), o = et, p = tt, b = xe, _ = /* @__PURE__ */ S(it);
  function S(m) {
    return m && m.__esModule ? m : {
      default: m
    };
  }
  function y(m) {
    return typeof m == "function";
  }
  function P(m, ...v) {
    let $ = v.pop();
    for (let g of v)
      for (let c in g) {
        let O = $(m[c], g[c]);
        O === void 0 ? (0, d.default)(m[c]) && (0, d.default)(g[c]) ? m[c] = P({}, m[c], g[c], $) : m[c] = g[c] : m[c] = O;
      }
    return m;
  }
  const V = {
    colors: a.default,
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
    return m.reduce((v, { extend: $ }) => P(v, $, (g, c) => g === void 0 ? [
      c
    ] : Array.isArray(g) ? [
      c,
      ...g
    ] : [
      c,
      g
    ]), {});
  }
  function N(m) {
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
    return P(v, m, ($, g) => !y($) && !g.some(y) ? P({}, $, ...g, W) : (c, O) => P({}, ...[
      $,
      ...g
    ].map((C) => R(C, c, O)), W));
  }
  function* Q(m) {
    let v = (0, r.toPath)(m);
    if (v.length === 0 || (yield v, Array.isArray(m)))
      return;
    let $ = /^(.*?)\s*\/\s*([^/]+)$/, g = m.match($);
    if (g !== null) {
      let [, c, O] = g, C = (0, r.toPath)(c);
      C.alpha = O, yield C;
    }
  }
  function ne(m) {
    const v = ($, g) => {
      for (const c of Q($)) {
        let O = 0, C = m;
        for (; C != null && O < c.length; )
          C = C[c[O++]], C = y(C) && (c.alpha === void 0 || O <= c.length - 1) ? C(v, V) : C;
        if (C !== void 0) {
          if (c.alpha !== void 0) {
            let T = (0, p.parseColorFormat)(C);
            return (0, b.withAlphaValue)(T, c.alpha, (0, _.default)(T));
          }
          return (0, d.default)(C) ? (0, o.cloneDeep)(C) : C;
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
      c.length !== 0 && c.forEach((O) => {
        O.__isOptionsFunction && (O = O());
        var C;
        v = [
          ...v,
          ...te([
            (C = O?.config) !== null && C !== void 0 ? C : {}
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
  function x(m) {
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
    return (0, l.normalizeConfig)((0, s.defaults)({
      theme: ne(H(N(v.map((c) => ($ = c?.theme) !== null && $ !== void 0 ? $ : {})))),
      corePlugins: h(v.map((c) => c.corePlugins)),
      plugins: x(m.map((c) => (g = c?.plugins) !== null && g !== void 0 ? g : []))
    }, ...v));
  }
})(Ie);
var at = {}, Yt = {
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
      return a;
    }
  });
  const t = /* @__PURE__ */ i(Yt), n = _e;
  function i(s) {
    return s && s.__esModule ? s : {
      default: s
    };
  }
  function a(s) {
    var r;
    const l = ((r = s?.presets) !== null && r !== void 0 ? r : [
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
    }, o = Object.keys(d).filter((p) => (0, n.flagEnabled)(s, p)).map((p) => d[p]);
    return [
      s,
      ...o,
      ...l
    ];
  }
})(at);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return a;
    }
  });
  const t = /* @__PURE__ */ i(Ie), n = /* @__PURE__ */ i(at);
  function i(s) {
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
})(Re);
let ye = Re;
var Xt = (ye.__esModule ? ye : { default: ye }).default;
const Jt = /* @__PURE__ */ Qt(Xt), Zt = {
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
}, en = Jt(Zt);
function tn(e) {
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
  ), a = parseInt(e.length === 3 ? "ff" : e.slice(6, 8), 16);
  return {
    red: t,
    green: n,
    blue: i,
    alpha: a
  };
}
const nn = j({
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
      const t = M(en, ["theme", "colors"]), n = M(t, e);
      return typeof n == "string" ? n : e;
    },
    fontColorForBackgroundColor(e) {
      const t = tn(e);
      return t.alpha * 255 < 150 || Math.round(
        (t.red * 299 + t.green * 587 + t.blue * 114) / 1e3
      ) > 125 ? "#000" : "#fff";
    }
  }
}), rn = j({
  mixins: [nn]
});
const on = { class: "flex-grow" };
function sn(e, t, n, i, a, s) {
  return u(), f("div", {
    class: "k-alert",
    style: ie([e.colorableBackgroundStyle, e.colorableTextStyleForBackground])
  }, [
    k("div", on, [
      U(e.$slots, "default")
    ])
  ], 4);
}
const an = /* @__PURE__ */ K(rn, [["render", sn]]), ln = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: an
}, Symbol.toStringTag, { value: "Module" }));
const un = {}, dn = { class: "k-app" };
function cn(e, t) {
  const n = z("KSnackbar"), i = z("KConfirm");
  return u(), f("div", dn, [
    D(i, null, {
      default: L(() => [
        D(n, null, {
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
const pn = /* @__PURE__ */ K(un, [["render", cn]]), fn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pn
}, Symbol.toStringTag, { value: "Module" })), mn = j({
  directives: {
    ClickAway: De
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
        e ? this.returnObject ? this.$emit("update:modelValue", e) : this.$emit("update:modelValue", M(e, this.itemValue, e)) : this.$emit("update:modelValue", null);
      },
      get() {
        return this.isObject(this.modelValue) ? this.modelValue : this.items.find(
          (e) => M(e, this.itemValue, e) == this.modelValue
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
        this.isObject(this.valueLocal) ? M(this.valueLocal, this.itemText, "") : this.valueLocal
      )));
    },
    valueLocal: {
      handler(e) {
        this.inputText = M(this.valueLocal, this.itemText, e);
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
      this.combobox ? t && (this.valueLocal = t) : (this.valueLocal = t, this.inputText = M(
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
const gn = { class: "k-autocomplete-input" }, hn = ["placeholder", "readonly"], _n = {
  key: 0,
  class: "k-autocomplete-items"
}, bn = ["onClick"];
function yn(e, t, n, i, a, s) {
  const r = Ne("click-away");
  return oe((u(), f("div", {
    class: "k-autocomplete",
    style: ie([e.style])
  }, [
    U(e.$slots, "prepend", { item: e.valueLocal }),
    k("div", gn, [
      oe(k("input", {
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = (l) => e.inputText = l),
        class: J(["k-input", { invalidSelection: !e.isValidSelection }]),
        type: "search",
        autocomplete: "off",
        placeholder: e.placeholderText,
        readonly: !e.editable,
        onSearch: t[1] || (t[1] = (...l) => e.clearInput && e.clearInput(...l)),
        onKeydown: [
          t[2] || (t[2] = pe(re((l) => e.currentFocus = Math.max(-1, e.currentFocus - 1), ["prevent"]), ["arrow-up"])),
          t[3] || (t[3] = pe(re((l) => e.currentFocus = Math.min(e.items.length - 1, e.currentFocus + 1), ["prevent"]), ["arrow-down"])),
          t[4] || (t[4] = pe(re((l) => e.select(e.currentFocus), ["prevent"]), ["enter"])),
          t[6] || (t[6] = pe((...l) => e.setBlur && e.setBlur(...l), ["tab"]))
        ],
        onFocus: t[5] || (t[5] = (...l) => e.setFocus && e.setFocus(...l)),
        onKeyup: t[7] || (t[7] = (...l) => e.keyup && e.keyup(...l))
      }, null, 42, hn), [
        [$e, e.inputText]
      ]),
      e.focus && e.items.length && e.inputText ? (u(), f("div", _n, [
        (u(!0), f(q, null, Z(e.itemsFiltered, (l, d) => (u(), f("div", {
          key: d,
          class: J(["k-autocomplete-item", { "k-autocomplete-active": e.currentFocus == d }]),
          onClick: (o) => e.select(d)
        }, [
          U(e.$slots, "item", { item: l }, () => [
            G(F(l), 1)
          ])
        ], 10, bn))), 128))
      ])) : A("", !0)
    ])
  ], 4)), [
    [r, e.setBlur]
  ]);
}
const vn = /* @__PURE__ */ K(mn, [["render", yn]]), $n = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vn
}, Symbol.toStringTag, { value: "Module" }));
function ee(e, t) {
  const n = mt(e, t);
  if (!n)
    throw new Error(`Could not resolve ${e.description}`);
  return n;
}
const se = Symbol("session"), fe = Symbol("config"), kn = Symbol("snackbar"), wn = Symbol(
  "confirmDialogKey"
), ue = new we();
function Sn(e) {
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
class On {
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
      const a = i.dataId;
      t.queue("NodeLookup", { dataId: a });
    });
    try {
      (await t.batch(!0)).forEach((a, s) => {
        const r = n[s].resolveFunc;
        r(a);
      });
    } catch {
      n.forEach((i) => i.resolveFunc(null));
    }
  }
}
class xn {
  nodes;
  nodeLookupQueue;
  constructor() {
    this.nodes = {}, this.nodeLookupQueue = new On();
  }
  registerUsers(t) {
    t.forEach((n) => this.nodes[n.dataid] = n);
  }
  async lookupLegacy(t, n) {
    if (n)
      try {
        if (await ue.acquire(n), this.nodes[n])
          return this.nodes[n];
        {
          const i = await t.nodes.node({ dataid: n }), a = Sn(i.data);
          return this.nodes[n] = a, a;
        }
      } finally {
        ue.release(n);
      }
  }
  async lookupRPC(t, n) {
    return n ? (await ue.acquire(n), this.nodes[n] ? (ue.release(n), this.nodes[n]) : new Promise((i) => {
      const a = (s) => {
        this.nodes[n] = s, i(s), ue.release(n);
      };
      this.nodeLookupQueue.queue(t, a, n);
    })) : null;
  }
  async lookup(t, n, i = !1) {
    return i ? this.lookupLegacy(t, n) : this.lookupRPC(t, n);
  }
}
const Cn = new xn(), Pn = j({
  setup() {
    return { session: ee(se) };
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
        e && (this.nodeRecLocal = await Cn.lookup(
          this.session,
          e,
          this.legacy
        ));
      },
      immediate: !0
    }
  }
}), jn = { key: 0 }, Tn = ["src"], Kn = ["href"], An = ["innerHTML"];
function Mn(e, t, n, i, a, s) {
  const r = z("KFunctionMenu");
  return e.nodeRecResolved ? (u(), f("span", jn, [
    e.image ? (u(), f("img", {
      key: 0,
      src: e.nodeRecResolved.gif
    }, null, 8, Tn)) : A("", !0),
    G(" "),
    k("a", {
      href: e.nodeRecResolved.url
    }, F(e.nodeRecResolved.name), 9, Kn),
    e.clickable ? (u(), B(r, {
      key: 1,
      dataid: e.nodeRecResolved.dataid
    }, null, 8, ["dataid"])) : A("", !0),
    k("span", {
      innerHTML: e.nodeRecResolved.modifiedImageCallback
    }, null, 8, An)
  ])) : A("", !0);
}
const zn = /* @__PURE__ */ K(Pn, [["render", Mn]]), Ln = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zn
}, Symbol.toStringTag, { value: "Module" })), Vn = j({
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
const Fn = ["disabled"];
function Bn(e, t, n, i, a, s) {
  return u(), f("button", Ee({
    class: ["k-button", e.classObj],
    disabled: e.disabled,
    type: "button"
  }, e.$attrs, {
    onClick: t[0] || (t[0] = (r) => e.$emit("click"))
  }), [
    U(e.$slots, "default")
  ], 16, Fn);
}
const Nn = /* @__PURE__ */ K(Vn, [["render", Bn]]), En = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Nn
}, Symbol.toStringTag, { value: "Module" })), Un = j({
  provide() {
    return {
      // @ts-ignore - not sure why this complains
      [wn]: this
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
      return this.noLabel = e, this.yesLabel = t, this.title = n, this.message = i, new Promise((a) => {
        this.resolve = a, this.dialog = !0;
      });
    }
  }
});
function Dn(e, t, n, i, a, s) {
  const r = z("KCardTitle"), l = z("KCardText"), d = z("KSpacer"), o = z("KButton"), p = z("KCardActions"), b = z("KCard"), _ = z("KDialog");
  return u(), f(q, null, [
    U(e.$slots, "default"),
    D(_, {
      modelValue: e.dialog,
      "onUpdate:modelValue": t[2] || (t[2] = (S) => e.dialog = S),
      "max-width": "30vw",
      "min-width": "20vw",
      "z-index": 50
    }, {
      default: L(() => [
        D(b, null, {
          default: L(() => [
            e.title ? (u(), B(r, { key: 0 }, {
              default: L(() => [
                G(F(e.title), 1)
              ]),
              _: 1
            })) : A("", !0),
            e.message ? (u(), B(l, { key: 1 }, {
              default: L(() => [
                G(F(e.message), 1)
              ]),
              _: 1
            })) : A("", !0),
            D(p, null, {
              default: L(() => [
                D(d),
                e.noLabel ? (u(), B(o, {
                  key: 0,
                  small: "",
                  onClick: t[0] || (t[0] = (S) => e.dismiss(!1))
                }, {
                  default: L(() => [
                    G(F(e.noLabel), 1)
                  ]),
                  _: 1
                })) : A("", !0),
                e.yesLabel ? (u(), B(o, {
                  key: 1,
                  small: "",
                  onClick: t[1] || (t[1] = (S) => e.dismiss(!0))
                }, {
                  default: L(() => [
                    G(F(e.yesLabel), 1)
                  ]),
                  _: 1
                })) : A("", !0)
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
const Rn = /* @__PURE__ */ K(Un, [["render", Dn]]), In = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Rn
}, Symbol.toStringTag, { value: "Module" })), Wn = j({
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
      return t ? this.time ? Me(t, "yyyy-MM-dd'T'HH:mm:ss") : Me(t, "yyyy-MM-dd") : null;
    }
  }
});
const qn = { class: "k-date-time-picker" }, Hn = ["type", "readonly"];
function Gn(e, t, n, i, a, s) {
  const r = z("KButton");
  return u(), f("div", qn, [
    oe(k("input", {
      "onUpdate:modelValue": t[0] || (t[0] = (l) => e.localModelValue = l),
      class: "k-input",
      type: e.type,
      readonly: !e.editable
    }, null, 8, Hn), [
      [gt, e.localModelValue]
    ]),
    e.editable ? (u(), f(q, { key: 0 }, [
      D(r, {
        small: "",
        onClick: e.setToNow
      }, {
        default: L(() => [
          G(" Now ")
        ]),
        _: 1
      }, 8, ["onClick"]),
      D(r, {
        small: "",
        onClick: t[1] || (t[1] = (l) => e.$emit("update:modelValue", null))
      }, {
        default: L(() => [
          G(" Clear ")
        ]),
        _: 1
      })
    ], 64)) : A("", !0)
  ]);
}
const Qn = /* @__PURE__ */ K(Wn, [["render", Gn]]), Yn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qn
}, Symbol.toStringTag, { value: "Module" })), Xn = j({
  directives: {
    ClickAway: De
  },
  mixins: [ge],
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
      this.$emit("update:modelValue", e), e ? (await this.$nextTick(), yt(this.$refs.content)) : vt(this.$refs.content);
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
function Jn(e, t, n, i, a, s) {
  const r = Ne("click-away");
  return u(), f(q, null, [
    U(e.$slots, "activator", { on: e.on }),
    e.mounted ? (u(), B(ht, {
      key: 0,
      to: ".k-app"
    }, [
      D(me, { name: "fade" }, {
        default: L(() => [
          e.dialog ? (u(), f("div", {
            key: 0,
            class: "k-dialog",
            style: ie([e.style])
          }, [
            oe((u(), f("div", {
              ref: "content",
              class: J(["k-dialog-content", e.classObj]),
              style: ie([e.measurableStyles])
            }, [
              U(e.$slots, "default", { on: e.on })
            ], 6)), [
              [r, e.clickAway]
            ])
          ], 4)) : A("", !0)
        ]),
        _: 3
      })
    ])) : A("", !0)
  ], 64);
}
const Zn = /* @__PURE__ */ K(Xn, [["render", Jn]]), er = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zn
}, Symbol.toStringTag, { value: "Module" })), tr = j({
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
function nr(e, t, n, i, a, s) {
  return u(), f("div", {
    class: "k-dot",
    style: ie([e.style])
  }, [
    U(e.$slots, "default")
  ], 4);
}
const rr = /* @__PURE__ */ K(tr, [["render", nr]]), or = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: rr
}, Symbol.toStringTag, { value: "Module" })), ae = j({
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
}), sr = {
  mixins: [ae]
};
const ir = {
  key: 0,
  class: "k-form-field-label"
};
function ar(e, t, n, i, a, s) {
  return u(), f("div", null, [
    e.label ? (u(), f("div", ir, F(e.label), 1)) : A("", !0),
    U(e.$slots, "default"),
    (u(!0), f(q, null, Z(e.successMessages, (r, l) => (u(), f("div", {
      key: l,
      class: "k-formfield--success"
    }, F(r), 1))), 128)),
    (u(!0), f(q, null, Z(e.errorMessages, (r, l) => (u(), f("div", {
      key: l,
      class: "k-formfield--error"
    }, F(r), 1))), 128))
  ]);
}
const lr = /* @__PURE__ */ K(sr, [["render", ar]]), ur = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: lr,
  mixin: ae
}, Symbol.toStringTag, { value: "Module" })), dr = j({
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
}), cr = { key: 0 }, pr = ["id"], fr = ["src"], mr = ["id", "src"];
function gr(e, t, n, i, a, s) {
  return e.dataid ? (u(), f("span", cr, [
    k("a", {
      id: e.aid,
      href: "#",
      class: "functionMenuHotspot",
      onClick: t[2] || (t[2] = re((...r) => e.onclick && e.onclick(...r), ["prevent"]))
    }, [
      e.isModernFunctionMenu ? (u(), f("img", {
        key: 0,
        src: `${e.config.img}spacer.gif`,
        alt: "Functions"
      }, null, 8, fr)) : (u(), f("img", {
        key: 1,
        id: e.xid,
        src: e.image,
        border: "0",
        alt: "Functions",
        title: "Functions",
        onMouseover: t[0] || (t[0] = (...r) => e.onmouseover && e.onmouseover(...r)),
        onMouseout: t[1] || (t[1] = (...r) => e.onmouseout && e.onmouseout(...r))
      }, null, 40, mr))
    ], 8, pr),
    t[3] || (Ae(-1), t[3] = k("div", {
      id: e.zid,
      ref: "functionMenuDiv",
      class: "functionMenuDiv"
    }, null, 8, ["id"]), Ae(1), t[3])
  ])) : A("", !0);
}
const hr = /* @__PURE__ */ K(dr, [["render", gr]]), _r = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: hr
}, Symbol.toStringTag, { value: "Module" })), br = j({});
const yr = { class: "k-progress-line" };
function vr(e, t, n, i, a, s) {
  return u(), f("div", yr);
}
const $r = /* @__PURE__ */ K(br, [["render", vr]]), kr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $r
}, Symbol.toStringTag, { value: "Module" })), wr = j({
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
const Sr = { class: "k-multi-widget" }, Or = { class: "k-multi-buttons" }, xr = /* @__PURE__ */ k("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ k("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z" })
], -1), Cr = /* @__PURE__ */ k("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ k("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" })
], -1);
function Pr(e, t, n, i, a, s) {
  const r = z("KButton"), l = z("KCard");
  return u(), B(l, { class: "k-multi" }, {
    default: L(() => [
      D(ke, {
        name: "fade",
        tag: "div"
      }, {
        default: L(() => [
          (u(!0), f(q, null, Z(e.valueLocal, (d, o) => (u(), f("div", {
            key: `k-multi-${d}`,
            class: "k-multi-item"
          }, [
            k("div", Sr, [
              U(e.$slots, "default", {
                index: o,
                value: d,
                update: (p) => e.update(o, p)
              })
            ]),
            k("div", Or, [
              e.canRemove ? (u(), B(r, {
                key: 0,
                text: "",
                onClick: (p) => e.remove(o)
              }, {
                default: L(() => [
                  xr
                ]),
                _: 2
              }, 1032, ["onClick"])) : A("", !0),
              e.canAdd ? (u(), B(r, {
                key: 1,
                text: "",
                onClick: (p) => e.add(o)
              }, {
                default: L(() => [
                  Cr
                ]),
                _: 2
              }, 1032, ["onClick"])) : A("", !0)
            ])
          ]))), 128))
        ]),
        _: 3
      })
    ]),
    _: 3
  });
}
const jr = /* @__PURE__ */ K(wr, [["render", Pr]]), Tr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: jr
}, Symbol.toStringTag, { value: "Module" })), Kr = j({
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
const Ar = { class: "k-multi-widget" }, Mr = /* @__PURE__ */ k("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ k("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z" })
], -1);
function zr(e, t, n, i, a, s) {
  const r = z("KButton"), l = z("KCard");
  return u(), B(l, { class: "k-multi" }, {
    default: L(() => [
      D(ke, {
        name: "fade",
        tag: "div"
      }, {
        default: L(() => [
          (u(!0), f(q, null, Z(e.valueLocal, (d, o) => (u(), f("div", {
            key: `k-multi-${d}`,
            class: "k-multi-item"
          }, [
            k("div", Ar, [
              U(e.$slots, "readonly", {
                index: o,
                value: d
              }, () => [
                G(F(d), 1)
              ])
            ]),
            e.readonly ? A("", !0) : (u(), B(r, {
              key: 0,
              text: "",
              onClick: (p) => e.remove(o)
            }, {
              default: L(() => [
                Mr
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
      }) : A("", !0)
    ]),
    _: 3
  });
}
const Lr = /* @__PURE__ */ K(Kr, [["render", zr]]), Vr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Lr
}, Symbol.toStringTag, { value: "Module" })), Fr = j({
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
function Br(e, t, n, i, a, s) {
  const r = z("KUserLink"), l = z("KUserPicker"), d = z("KMulti2");
  return u(), B(d, {
    modelValue: e.userIdsLocal,
    "onUpdate:modelValue": t[0] || (t[0] = (o) => e.userIdsLocal = o),
    readonly: e.readonly
  }, {
    readonly: L(({ value: o }) => [
      D(r, {
        user: o,
        gif: ""
      }, null, 8, ["user"])
    ]),
    add: L(({ add: o }) => [
      D(l, {
        "onUpdate:modelValue": (p) => o(p),
        users: e.users,
        groups: e.groups
      }, null, 8, ["onUpdate:modelValue", "users", "groups"])
    ]),
    _: 1
  }, 8, ["modelValue", "readonly"]);
}
const Nr = /* @__PURE__ */ K(Fr, [["render", Br]]), Er = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Nr
}, Symbol.toStringTag, { value: "Module" })), ze = new we();
class Ur {
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
      if (await ze.acquire(n), !this.nodes[n]) {
        const i = await t.nodes.ancestors(n);
        this.nodes[n] = M(i, "data.ancestors", []);
      }
      return this.nodes[n];
    } finally {
      ze.release(n);
    }
  }
}
const lt = new Ur(), Dr = j({
  setup() {
    return { session: ee(se) };
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
        e && (this.breadcrumb = await lt.lookup(this.session, e));
      },
      immediate: !0
    }
  }
});
const Rr = { class: "k-node-breadcrumb" };
function Ir(e, t, n, i, a, s) {
  return u(), f("div", Rr, [
    (u(!0), f(q, null, Z(e.breadcrumb, (r, l) => (u(), f(q, {
      key: r.dataid
    }, [
      G(F(r.name) + " ", 1),
      l < e.breadcrumb.length - 1 ? (u(), f(q, { key: 0 }, [
        G(" ▶ ")
      ], 64)) : A("", !0)
    ], 64))), 128))
  ]);
}
const ut = /* @__PURE__ */ K(Dr, [["render", Ir]]), Wr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ut
}, Symbol.toStringTag, { value: "Module" })), qr = j({
  components: { KNodeAncestor: ut },
  setup() {
    return {
      session: ee(se),
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
      return $t(this.config.baseUrl, {
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
        this.dataid ? this.breadcrumb = await lt.lookup(
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
      return this.objid ?? parseInt(kt.get("TargetBrowseObjID") ?? "0");
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
const Hr = { class: "k-node-picker-field" }, Gr = ["value"];
function Qr(e, t, n, i, a, s) {
  const r = z("KButton"), l = z("KNodeAncestor");
  return u(), f("div", Hr, [
    k("input", {
      ref: "input",
      type: "text",
      class: "k-input",
      value: e.name,
      onFocus: t[0] || (t[0] = (...d) => e.openWindow && e.openWindow(...d))
    }, null, 40, Gr),
    D(r, {
      small: "",
      onClick: e.openWindow
    }, {
      default: L(() => [
        G(F(e.browseButtonLabel), 1)
      ]),
      _: 1
    }, 8, ["onClick"]),
    e.clearable ? (u(), B(r, {
      key: 0,
      small: "",
      onClick: e.clear
    }, {
      default: L(() => [
        G(F(e.clearButtonLabel), 1)
      ]),
      _: 1
    }, 8, ["onClick"])) : A("", !0),
    e.dataid ? (u(), B(l, {
      key: 1,
      dataid: e.dataid
    }, null, 8, ["dataid"])) : A("", !0)
  ]);
}
const Yr = /* @__PURE__ */ K(qr, [["render", Qr]]), Xr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Yr
}, Symbol.toStringTag, { value: "Module" })), Jr = j({
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
const Zr = { class: "k-one-moment" }, eo = { class: "k-one-moment-label" };
function to(e, t, n, i, a, s) {
  const r = z("KSpinner"), l = z("KDialog");
  return u(), B(l, { "model-value": e.loading }, {
    default: L(() => [
      k("div", Zr, [
        D(r, {
          height: 36,
          width: 36
        }),
        k("div", eo, F(e.label), 1)
      ])
    ]),
    _: 1
  }, 8, ["model-value"]);
}
const no = /* @__PURE__ */ K(Jr, [["render", to]]), ro = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: no
}, Symbol.toStringTag, { value: "Module" })), oo = j({
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
function so(e, t, n, i, a, s) {
  return u(), f("div", null, [
    U(e.$slots, "default", { active: e.active })
  ]);
}
const io = /* @__PURE__ */ K(oo, [["render", so]]), ao = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: io
}, Symbol.toStringTag, { value: "Module" })), lo = j({
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
const uo = { class: "text-xl" }, co = { key: 0 }, po = { class: "rhmuted" };
function fo(e, t, n, i, a, s) {
  return u(), f("div", uo, [
    G(F(e.title), 1),
    e.subtitle ? (u(), f("span", co, [
      G(": "),
      k("span", po, F(e.subtitle), 1)
    ])) : A("", !0)
  ]);
}
const mo = /* @__PURE__ */ K(lo, [["render", fo], ["__scopeId", "data-v-c72c9204"]]), go = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mo
}, Symbol.toStringTag, { value: "Module" })), ho = j({
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
      return M(this.pagination, "pageRange", []);
    },
    pageSizes() {
      return M(this.pagination, "pageSizes", []);
    },
    pageNumber() {
      return M(this.pagination, "pageNumber", 0);
    },
    pageSize: {
      get() {
        return M(this.pagination, "pageSize", 0);
      },
      set(e) {
        this.$emit("update:pageSize", e);
      }
    },
    hasPrevious() {
      return M(this.pagination, "hasPrevious", !1);
    },
    hasNext() {
      return M(this.pagination, "hasNext", !1);
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
const _o = { class: "k-pagination" }, bo = {
  key: 1,
  class: "k-pagination-buttons"
}, yo = {
  key: 0,
  class: "k-pagination-button"
}, vo = /* @__PURE__ */ k("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ k("path", { d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" })
], -1), $o = [
  vo
], ko = { key: 0 }, wo = ["onClick"], So = {
  key: 1,
  class: "k-pagination-button"
}, Oo = /* @__PURE__ */ k("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ k("path", { d: "M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" })
], -1), xo = [
  Oo
], Co = { key: 2 };
function Po(e, t, n, i, a, s) {
  const r = z("KSelect");
  return u(), f("div", _o, [
    e.potentiallyMultiplePages ? (u(), B(r, {
      key: 0,
      modelValue: e.pageSize,
      "onUpdate:modelValue": t[0] || (t[0] = (l) => e.pageSize = l),
      items: e.pageSizes,
      label: "Page Size"
    }, null, 8, ["modelValue", "items"])) : A("", !0),
    e.hasPrevious || e.hasNext ? (u(), f("div", bo, [
      e.hasPrevious ? (u(), f("a", yo, $o)) : A("", !0),
      (u(!0), f(q, null, Z(e.pageRange, (l) => (u(), f(q, { key: l }, [
        l === "|" ? (u(), f("div", ko, "...")) : (u(), f("a", {
          key: 1,
          class: J(["k-pagination-button k-pagination-button-border", e.classObj(l)]),
          onClick: (d) => e.$emit("update:modelValue", l)
        }, F(l), 11, wo))
      ], 64))), 128)),
      e.hasNext ? (u(), f("a", So, xo)) : A("", !0)
    ])) : A("", !0),
    e.potentiallyMultiplePages ? (u(), f("div", Co, " Displaying " + F(e.pagination.startIndex) + "-" + F(e.pagination.endIndex) + " of " + F(e.pagination.count) + " items. ", 1)) : A("", !0)
  ]);
}
const jo = /* @__PURE__ */ K(ho, [["render", Po]]), To = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: jo
}, Symbol.toStringTag, { value: "Module" })), Ko = j({
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
      return M(this.pagination, "offset", 0);
    },
    limit() {
      return M(this.pagination, "limit", 0);
    },
    count() {
      return M(this.pagination, "count", 0);
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
      const e = [], i = Math.max(0, this.pageNumber0 - 5), a = Math.min(this.lastPageNumber0, i + 10), s = Math.max(0, a - 10);
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
});
const Ao = { class: "k-pagination2" }, Mo = { class: "k-pagination2-buttons" }, zo = /* @__PURE__ */ k("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ k("path", { d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" })
], -1), Lo = [
  zo
], Vo = ["onClick"], Fo = /* @__PURE__ */ k("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ k("path", { d: "M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" })
], -1), Bo = [
  Fo
];
function No(e, t, n, i, a, s) {
  const r = z("KSelect");
  return u(), f("div", Ao, [
    k("div", null, [
      D(r, {
        modelValue: e.pageSize,
        "onUpdate:modelValue": t[0] || (t[0] = (l) => e.pageSize = l),
        items: e.pageSizes,
        label: "Page Size"
      }, null, 8, ["modelValue", "items"])
    ]),
    e.pageCount > 1 ? (u(), f(q, { key: 0 }, [
      k("div", Mo, [
        e.hasPrevious ? (u(), f("a", {
          key: 0,
          class: "k-pagination2-arrow-button",
          onClick: t[1] || (t[1] = (l) => e.clickedPageNumber(e.pageNumber0 - 1))
        }, Lo)) : A("", !0),
        (u(!0), f(q, null, Z(e.pageRange0, (l) => (u(), f("div", {
          key: l,
          class: J(["k-pagination2-button", e.classObj(l)]),
          onClick: (d) => e.clickedPageNumber(l)
        }, F(l + 1), 11, Vo))), 128)),
        e.hasNext ? (u(), f("a", {
          key: 1,
          class: "k-pagination2-arrow-button",
          onClick: t[2] || (t[2] = (l) => e.clickedPageNumber(e.pageNumber0 + 1))
        }, Bo)) : A("", !0)
      ]),
      k("div", null, F(e.pageNumber) + " of " + F(e.pageCount) + " pages", 1)
    ], 64)) : A("", !0)
  ]);
}
const Eo = /* @__PURE__ */ K(Ko, [["render", No]]), Uo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Eo
}, Symbol.toStringTag, { value: "Module" })), je = j({
  mixins: [ge],
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
}), Le = () => {
  Ue((e) => ({
    fe06e366: e.color
  }));
}, Ve = je.setup;
je.setup = Ve ? (e, t) => (Le(), Ve(e, t)) : Le;
const Do = /* @__PURE__ */ k("circle", {
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), Ro = /* @__PURE__ */ k("path", {
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), Io = [
  Do,
  Ro
];
function Wo(e, t, n, i, a, s) {
  return u(), f("svg", {
    style: ie(e.measurableStyles),
    class: "k-spinner",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, Io, 4);
}
const dt = /* @__PURE__ */ K(je, [["render", Wo]]), qo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dt
}, Symbol.toStringTag, { value: "Module" })), Ho = j({
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
const Go = {
  key: 0,
  class: "centerOverlay"
};
function Qo(e, t, n, i, a, s) {
  const r = z("KSpinner");
  return e.loading ? (u(), f("div", Go, [
    D(r, {
      "max-width": e.size,
      "max-height": e.size
    }, null, 8, ["max-width", "max-height"])
  ])) : A("", !0);
}
const Yo = /* @__PURE__ */ K(Ho, [["render", Qo]]), Xo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Yo
}, Symbol.toStringTag, { value: "Module" })), Jo = j({
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
      return this.isObject(e) ? M(e, this.itemText) : e;
    },
    getItemValue(e) {
      return this.isObject(e) ? M(e, this.itemValue) : e;
    },
    getItemDisabled(e) {
      return this.isObject(e) ? M(e, "disabled", !1) : !1;
    }
  }
});
const Zo = ["id", "value", "disabled"], es = ["for"];
function ts(e, t, n, i, a, s) {
  const r = z("KSpinner"), l = z("KFormFieldWrapper");
  return u(), f("div", null, [
    D(l, {
      label: e.label,
      "success-messages": e.successMessages,
      "error-messages": e.errorMessages
    }, {
      default: L(() => [
        D(me, {
          name: "fade",
          mode: "out-in"
        }, {
          default: L(() => [
            e.loading ? (u(), B(r, { key: 0 })) : (u(), f("div", {
              key: 1,
              class: J(["k-radiogroup", e.classObj])
            }, [
              (u(!0), f(q, null, Z(e.items, (d) => (u(), f("div", {
                key: e.getItemValue(d),
                class: "k-radiogroup-item"
              }, [
                oe(k("input", {
                  id: e.getItemValue(d),
                  "onUpdate:modelValue": t[0] || (t[0] = (o) => e.localValue = o),
                  type: "radio",
                  value: e.getItemValue(d),
                  disabled: e.getItemDisabled(d)
                }, null, 8, Zo), [
                  [_t, e.localValue]
                ]),
                k("label", {
                  for: e.getItemValue(d)
                }, F(e.getItemText(d)), 9, es)
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
const ns = /* @__PURE__ */ K(Jo, [["render", ts]]), rs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ns
}, Symbol.toStringTag, { value: "Module" })), os = j({
  inject: ["ksnackbar"],
  methods: {
    click() {
    }
  }
});
function ss(e, t, n, i, a, s) {
  return u(), f("div", null, [
    k("button", {
      onClick: t[0] || (t[0] = (...r) => e.click && e.click(...r))
    }, "click")
  ]);
}
const is = /* @__PURE__ */ K(os, [["render", ss]]), as = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: is
}, Symbol.toStringTag, { value: "Module" })), ls = j({
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
      return this.isObject(e) ? M(e, this.itemText) : e;
    },
    getItemValue(e) {
      return this.isObject(e) ? M(e, this.itemValue) : e;
    },
    getItemDisabled(e) {
      return this.isObject(e) ? M(e, this.itemDisabled, !1) : !1;
    },
    arrify(e) {
      return Array.isArray(e) ? e : [e];
    }
  }
});
const us = { class: "k-select" }, ds = ["disabled"], cs = ["value", "disabled"];
function ps(e, t, n, i, a, s) {
  const r = z("KButton"), l = z("KSpinner"), d = z("KFormFieldWrapper");
  return u(), B(d, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: L(() => [
      k("div", us, [
        oe(k("select", {
          "onUpdate:modelValue": t[0] || (t[0] = (o) => e.valueLocal = o),
          class: J(e.classObj),
          disabled: e.disabledResolved
        }, [
          (u(!0), f(q, null, Z(e.items, (o) => (u(), f("option", {
            key: e.getItemValue(o),
            value: e.getItemValue(o),
            disabled: e.getItemDisabled(o)
          }, F(e.getItemText(o)), 9, cs))), 128))
        ], 10, ds), [
          [bt, e.valueLocal]
        ]),
        e.clearable ? (u(), B(r, {
          key: 0,
          onClick: t[1] || (t[1] = (o) => e.valueLocal = null),
          small: ""
        }, {
          default: L(() => [
            G("clear")
          ]),
          _: 1
        })) : A("", !0),
        D(me, { name: "fade" }, {
          default: L(() => [
            e.loading ? (u(), B(l, {
              key: 0,
              class: "k-select--spinner"
            })) : A("", !0)
          ]),
          _: 1
        })
      ])
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const fs = /* @__PURE__ */ K(ls, [["render", ps]]), ms = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fs
}, Symbol.toStringTag, { value: "Module" })), gs = j({});
const hs = { class: "k-smart-ui-panel" }, _s = {
  key: 0,
  class: "k-smart-ui-panel-header"
}, bs = { class: "k-smart-ui-panel-body" }, ys = {
  key: 1,
  class: "k-smart-ui-panel-footer"
};
function vs(e, t, n, i, a, s) {
  return u(), f("div", hs, [
    e.$slots.header ? (u(), f("div", _s, [
      U(e.$slots, "header")
    ])) : A("", !0),
    k("div", bs, [
      U(e.$slots, "default")
    ]),
    e.$slots.footer ? (u(), f("div", ys, [
      U(e.$slots, "footer")
    ])) : A("", !0)
  ]);
}
const $s = /* @__PURE__ */ K(gs, [["render", vs]]), ks = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $s
}, Symbol.toStringTag, { value: "Module" })), ws = j({
  provide() {
    return {
      // @ts-ignore - not sure why this complains
      [kn]: this
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
      actionLabel: a = "close",
      action: s
    }) {
      const r = this.nextIndex();
      s == null && (s = () => this.dismiss(r));
      const l = {
        title: t,
        message: n,
        timeout: i,
        actionLabel: a,
        action: s,
        type: e,
        index: r
      };
      this.nitems[r] = l, console.log(i), setInterval(() => this.dismiss(r), i);
    }
  }
});
const Ss = { class: "k-snackbar" }, Os = { class: "k-snackbar-item-message" }, xs = {
  key: 0,
  class: "k-snackbar-title"
}, Cs = {
  key: 1,
  class: "k-snackbar-text"
}, Ps = {
  key: 0,
  class: "k-snackbar-action"
}, js = ["onClick"];
function Ts(e, t, n, i, a, s) {
  return u(), f(q, null, [
    U(e.$slots, "default"),
    k("div", Ss, [
      D(ke, {
        name: "slide",
        tag: "div",
        mode: "out-in"
      }, {
        default: L(() => [
          (u(!0), f(q, null, Z(e.items, (r) => (u(), f("div", {
            key: r.index,
            class: J(["k-snackbar-item", e.classObj(r)])
          }, [
            k("div", Os, [
              r.title ? (u(), f("div", xs, F(r.title), 1)) : A("", !0),
              r.message ? (u(), f("div", Cs, F(r.message), 1)) : A("", !0)
            ]),
            r.action ? (u(), f("div", Ps, [
              k("a", {
                href: "#",
                onClick: re((l) => e.action(r), ["prevent"])
              }, F(r.actionLabel), 9, js)
            ])) : A("", !0)
          ], 2))), 128))
        ]),
        _: 1
      })
    ])
  ], 64);
}
const Ks = /* @__PURE__ */ K(ws, [["render", Ts]]), As = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ks
}, Symbol.toStringTag, { value: "Module" })), Ms = j({
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
const zs = {
  key: 0,
  class: "j-sort-header-arrow"
}, Ls = {
  key: 1,
  class: "j-sort-header-arrow"
};
function Vs(e, t, n, i, a, s) {
  return u(), f("a", {
    href: "#",
    onClick: t[0] || (t[0] = re((...r) => e.emitClick && e.emitClick(...r), ["prevent"]))
  }, [
    U(e.$slots, "default"),
    D(me, {
      name: "fade",
      mode: "out-in"
    }, {
      default: L(() => [
        e.isActive && e.sortAsc ? (u(), f("span", zs, "↓")) : e.isActive ? (u(), f("span", Ls, "↑")) : A("", !0)
      ]),
      _: 1
    })
  ]);
}
const Fs = /* @__PURE__ */ K(Ms, [["render", Vs]]), Bs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fs
}, Symbol.toStringTag, { value: "Module" }));
const Ns = {}, Es = { class: "k-spacer" };
function Us(e, t) {
  return u(), f("div", Es);
}
const Ds = /* @__PURE__ */ K(Ns, [["render", Us]]), Rs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ds
}, Symbol.toStringTag, { value: "Module" })), Te = j({
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
}), Fe = () => {
  Ue((e) => ({
    "2f4ab6bd": e.switchWidthPx,
    "3acd298c": e.heightPx,
    "37d7127c": e.innerSizePx,
    "13e4c99c": e.paddingPx,
    "79abc333": e.transPx
  }));
}, Be = Te.setup;
Te.setup = Be ? (e, t) => (Fe(), Be(e, t)) : Fe;
const Is = /* @__PURE__ */ k("span", { class: "k-switch-slider" }, null, -1), Ws = [
  Is
];
function qs(e, t, n, i, a, s) {
  return u(), f("div", {
    class: J(["k-switch", e.classObj]),
    onClick: t[0] || (t[0] = (...r) => e.toggle && e.toggle(...r))
  }, Ws, 2);
}
const Hs = /* @__PURE__ */ K(Te, [["render", qs]]), Gs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Hs
}, Symbol.toStringTag, { value: "Module" })), Qs = j({
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
function Ys(e, t, n, i, a, s) {
  const r = z("KLinearProgressIndicator");
  return u(), f("div", null, [
    e.loading ? (u(), B(r, { key: 0 })) : A("", !0),
    k("table", {
      class: J(["k-table", e.classObj])
    }, [
      U(e.$slots, "default")
    ], 2)
  ]);
}
const Xs = /* @__PURE__ */ K(Qs, [["render", Ys]]), Js = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xs
}, Symbol.toStringTag, { value: "Module" })), Zs = j({
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
        const a = n.slice(0, i), s = n.slice(i), r = `${a}	${s}`;
        this.valueLocal = r, t.value = r, t.selectionStart = i + 1, t.selectionEnd = i + 1;
      }
    }
  }
});
const ei = ["rows"];
function ti(e, t, n, i, a, s) {
  const r = z("KFormFieldWrapper");
  return u(), B(r, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: L(() => [
      oe(k("textarea", Ee({
        "onUpdate:modelValue": t[0] || (t[0] = (l) => e.valueLocal = l)
      }, e.$attrs, {
        spellcheck: "false",
        class: [e.classObj, "k-textarea"],
        rows: e.rows,
        onKeydown: t[1] || (t[1] = pe(re((...l) => e.tabber && e.tabber(...l), ["prevent"]), ["tab"]))
      }), null, 16, ei), [
        [$e, e.valueLocal]
      ])
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const ni = /* @__PURE__ */ K(Zs, [["render", ti]]), ri = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ni
}, Symbol.toStringTag, { value: "Module" })), oi = j({
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
const si = ["placeholder"];
function ii(e, t, n, i, a, s) {
  const r = z("KFormFieldWrapper");
  return u(), B(r, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: L(() => [
      oe(k("input", {
        "onUpdate:modelValue": t[0] || (t[0] = (l) => e.value = l),
        class: J(["k-input-text-field", e.classObj]),
        placeholder: e.placeholder
      }, null, 10, si), [
        [$e, e.value]
      ])
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const ai = /* @__PURE__ */ K(oi, [["render", ii]]), li = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ai
}, Symbol.toStringTag, { value: "Module" })), ui = j({
  setup() {
    return {
      config: ee(fe),
      session: ee(se)
    };
  },
  mixins: [ge],
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
      return M(this.userRec, "type", this.type);
    },
    url() {
      return this.userType === this.session.members.USER ? `${this.config.img}guy.gif` : this.userType === this.session.members.GROUP ? `${this.config.img}2-guys.gif` : this.userType > 0 ? `${this.config.img}projectgroup.gif` : null;
    }
  }
}), di = ["src"];
function ci(e, t, n, i, a, s) {
  return e.url ? (u(), f("img", {
    key: 0,
    src: e.url,
    style: ie([e.measurableStyles])
  }, null, 12, di)) : A("", !0);
}
const pi = /* @__PURE__ */ K(ui, [["render", ci]]), fi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pi
}, Symbol.toStringTag, { value: "Module" })), de = new we();
function mi(e) {
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
class gi {
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
      const a = i.userId;
      t.queue("UserLookup", { userId: a });
    });
    try {
      (await t.batch(!0)).forEach((a, s) => {
        const r = n[s].resolveFunc;
        r(a);
      });
    } catch {
      n.forEach((i) => i.resolveFunc(null));
    }
  }
}
class hi {
  users;
  userLookupQueue;
  constructor() {
    this.users = {}, this.userLookupQueue = new gi();
  }
  registerUsers(t) {
    t.forEach((n) => this.users[n.userid] = n);
  }
  async lookupLegacy(t, n) {
    if (n)
      try {
        if (await de.acquire(n), this.users[n])
          return this.users[n];
        {
          const i = await t.members.member(n), a = mi(i.data);
          return this.users[n] = a, a;
        }
      } finally {
        de.release(n);
      }
    else
      return null;
  }
  async lookupRPC(t, n) {
    return n ? (await de.acquire(n), this.users[n] ? (de.release(n), this.users[n]) : new Promise((i) => {
      const a = (s) => {
        this.users[n] = s, i(s), de.release(n);
      };
      this.userLookupQueue.queue(t, a, n);
    })) : null;
  }
  async lookup(t, n, i = !1) {
    return i ? this.lookupLegacy(t, n) : this.lookupRPC(t, n);
  }
}
const ct = new hi(), _i = j({
  setup() {
    return { session: ee(se) };
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
      return M(this.userRecLocal, "id") ?? M(this.userRecLocal, "userid");
    },
    // userLocal() {
    //   return this.user ?? this.userid ?? this.userRec
    // },
    displayName() {
      return M(this.userRecLocal, "display_name") ?? M(this.userRecLocal, "displayname") ?? M(this.userRecLocal, "name");
    },
    type() {
      return M(this.userRecLocal, "type");
    }
  },
  watch: {
    user: {
      async handler(e) {
        this.isInteger(e) ? this.userRecLocal = await ct.lookup(
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
const bi = {
  key: 0,
  class: "k-user-link"
};
function yi(e, t, n, i, a, s) {
  const r = z("KUserGIF");
  return e.userRecLocal ? (u(), f("span", bi, [
    e.gif ? (u(), B(r, {
      key: 0,
      "user-rec": e.userRecLocal
    }, null, 8, ["user-rec"])) : A("", !0),
    G("   "),
    k("a", {
      href: "#",
      onClick: t[0] || (t[0] = re((...l) => e.click && e.click(...l), ["prevent"]))
    }, F(e.displayName), 1)
  ])) : A("", !0);
}
const vi = /* @__PURE__ */ K(_i, [["render", yi]]), $i = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vi
}, Symbol.toStringTag, { value: "Module" })), ki = j({
  mixins: [ae],
  setup() {
    return { session: ee(se) };
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
          text: M(n, "name_formatted"),
          value: M(n, "id"),
          type: M(n, "type")
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
const wi = { class: "flex items-center gap-1" };
function Si(e, t, n, i, a, s) {
  const r = z("KUserGIF"), l = z("KAutocomplete"), d = z("KUserLink"), o = z("KFormFieldWrapper");
  return u(), B(o, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: L(() => [
      e.editable ? (u(), B(l, {
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
          p ? (u(), B(r, {
            key: 0,
            type: p.type
          }, null, 8, ["type"])) : (u(), B(r, {
            key: 1,
            type: e.USER
          }, null, 8, ["type"]))
        ]),
        item: L(({ item: p }) => [
          k("div", wi, [
            D(r, {
              type: p.type
            }, null, 8, ["type"]),
            G(" " + F(p.text), 1)
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "search-input", "placeholder", "width", "loading", "items", "return-object"])) : (u(), B(d, {
        key: 1,
        user: e.modelValue,
        gif: ""
      }, null, 8, ["user"]))
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const pt = /* @__PURE__ */ K(ki, [["render", Si]]), Oi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pt
}, Symbol.toStringTag, { value: "Module" })), xi = j({
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
      return this.name == M(this.tabs, "selectedTab");
    }
  }
}), Ci = { key: 0 };
function Pi(e, t, n, i, a, s) {
  return e.isSelected ? (u(), f("div", Ci, [
    U(e.$slots, "default")
  ])) : A("", !0);
}
const ji = /* @__PURE__ */ K(xi, [["render", Pi]]), Ti = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ji
}, Symbol.toStringTag, { value: "Module" })), Ki = j({
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
const Ai = { class: "k-tabs" }, Mi = { class: "k-tabs-nav" }, zi = ["href", "onClick"], Li = { class: "k-tabs-content" };
function Vi(e, t, n, i, a, s) {
  return u(), f("div", Ai, [
    k("div", Mi, [
      (u(!0), f(q, null, Z(e.tabs, (r) => (u(), f("div", {
        key: r.name,
        class: J(e.classObj(r))
      }, [
        k("a", {
          href: `#${r.name}`,
          onClick: (l) => e.selectTab(r.name)
        }, F(r.title), 9, zi)
      ], 2))), 128))
    ]),
    k("div", Li, [
      U(e.$slots, "default")
    ])
  ]);
}
const Fi = /* @__PURE__ */ K(Ki, [["render", Vi]]), Bi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fi
}, Symbol.toStringTag, { value: "Module" })), Ni = j({
  extends: pt,
  setup() {
    return { session: ee(se) };
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
          ), n = M(t, "data.data.first_name"), i = M(t, "data.data.last_name"), a = M(t, "data.data.name"), s = `${n} ${i} (${a})`;
          this.items = [
            {
              text: s,
              value: M(t, "data.data.id"),
              type: M(t, "data.data.type")
            }
          ], this.select = s;
        } finally {
          this.pleaseWait = !1, this.readonly = !1, this.loading = !1;
        }
    }
  }
}), Ei = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ni
}, Symbol.toStringTag, { value: "Module" }));
function ce(e) {
  return (t, n = {}) => new Promise((i) => {
    window.csui.require(
      ["csui/dialogs/modal.alert/modal.alert"],
      function(a) {
        a[e](i, t, null, n);
      }
    );
  });
}
function le(e) {
  return (t, n = {}) => new Promise((i) => {
    window.csui.require(
      ["csui/dialogs/modal.alert/modal.alert"],
      function(a) {
        a[e](i, t, null, n);
      }
    );
  });
}
const Xi = () => ({
  showSuccess: ce("showSuccess"),
  showInformation: ce("showInformation"),
  showWarning: ce("showWarning"),
  showError: ce("showError"),
  showMessage: ce("showMessage"),
  confirmSuccess: le("confirmSuccess"),
  confirmInformation: le("confirmInformation"),
  confirmWarning: le("confirmWarning"),
  confirmError: le("confirmError"),
  confirmQuestion: le("confirmQuestion"),
  confirmMessage: le("confirmMessage")
}), Ji = (e, t) => {
  const n = t.sortKey, a = t.sortAsc ? 1 : -1;
  return [...e].sort((s, r) => {
    if (n) {
      const l = String(M(s, n, "") ?? ""), d = String(M(r, n, "") ?? "");
      return a * l.toLowerCase().localeCompare(d.toLowerCase());
    } else
      return 0;
  });
}, Ui = /* @__PURE__ */ Object.assign({
  "./components/Card/KCard.vue": xt,
  "./components/Card/KCardActions.vue": Kt,
  "./components/Card/KCardText.vue": Vt,
  "./components/Card/KCardTitle.vue": Ut,
  "./components/KAdminLink.vue": Gt,
  "./components/KAlert.vue": ln,
  "./components/KApp.vue": fn,
  "./components/KAutocomplete.vue": $n,
  "./components/KBrowseLink.vue": Ln,
  "./components/KButton.vue": En,
  "./components/KConfirm.vue": In,
  "./components/KDateTimePicker.vue": Yn,
  "./components/KDialog.vue": er,
  "./components/KDot.vue": or,
  "./components/KFormFieldWrapper.vue": ur,
  "./components/KFunctionMenu.vue": _r,
  "./components/KLinearProgressIndicator.vue": kr,
  "./components/KMulti.vue": Tr,
  "./components/KMulti2.vue": Vr,
  "./components/KMultiUserPicker.vue": Er,
  "./components/KNodeAncestor.vue": Wr,
  "./components/KNodePickerField.vue": Xr,
  "./components/KOneMoment.vue": ro,
  "./components/KPageDropZone.vue": ao,
  "./components/KPageTitle.vue": go,
  "./components/KPagination.vue": To,
  "./components/KPagination2.vue": Uo,
  "./components/KPleaseWait.vue": Xo,
  "./components/KRadioGroup.vue": rs,
  "./components/KScratch.vue": as,
  "./components/KSelect.vue": ms,
  "./components/KSmartUIPanel.vue": ks,
  "./components/KSnackbar.vue": As,
  "./components/KSortHeader.vue": Bs,
  "./components/KSpacer.vue": Rs,
  "./components/KSpinner.vue": qo,
  "./components/KSwitch.vue": Gs,
  "./components/KTable.vue": Js,
  "./components/KTextArea.vue": ri,
  "./components/KTextField.vue": li,
  "./components/KUserGIF.vue": fi,
  "./components/KUserLink.vue": $i,
  "./components/KUserPicker.vue": Oi,
  "./components/KUserPickerLegacy.vue": Ei,
  "./components/Tabs/KTabItem.vue": Ti,
  "./components/Tabs/KTabs.vue": Bi
});
let ve;
const Zi = {
  install(e, t) {
    Object.entries(Ui).forEach(
      ([i, a]) => {
        const s = i?.split("/")?.pop()?.replace(/\.\w+$/, "");
        e.component(s, a.default);
      }
    ), ve = new wt(t);
    const n = {
      userId: t.userId,
      img: t.img,
      baseUrl: t.baseUrl,
      jsLongDateFormat: t.datelong,
      jsShortDateFormat: t.dateshort
    };
    e.provide(se, ve), e.provide(fe, n);
  }
}, ea = () => ve;
export {
  fe as configKey,
  wn as confirmDialogKey,
  Zi as default,
  Ji as generalSort,
  ee as injectStrict,
  Cn as nodeLookup,
  se as sessionKey,
  kn as snackbarKey,
  ea as useSession,
  Xi as useSmartUI,
  ct as userLookup
};
