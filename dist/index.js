import { defineComponent as S, h as le, openBlock as a, createElementBlock as c, renderSlot as N, mergeProps as ae, createElementVNode as k, toDisplayString as D, createCommentVNode as A, normalizeStyle as ne, resolveComponent as K, createVNode as B, withCtx as C, resolveDirective as Oe, withDirectives as re, normalizeClass as J, withKeys as ge, withModifiers as se, vModelText as xe, Fragment as I, renderList as Y, createTextVNode as G, inject as Ot, createBlock as z, vModelDynamic as xt, Teleport as Ye, Transition as _e, setBlockTracking as Ne, toHandlers as he, ref as Ie, TransitionGroup as Ke, useCssVars as Xe, vModelRadio as Kt, vModelSelect as jt } from "vue";
import V from "lodash.get";
import { directive as je } from "vue3-click-away";
import be from "@chriscdn/promise-semaphore";
import { format as Ue } from "date-fns";
import { disableBodyScroll as Ct, enableBodyScroll as Tt } from "body-scroll-lock";
import Mt from "@googlicius/build-url";
import Pt from "js-cookie";
import { Session as Lt } from "@kweli/cs-rest";
import Ee from "intl-dateformat";
const Je = S({
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
}), Q = (e, t = "px") => {
  if (!(e == null || e === ""))
    return isNaN(+e) ? String(e) : `${Number(e)}${t}`;
}, ye = S({
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
      const e = {}, t = Q(this.height), n = Q(this.minHeight), s = Q(this.minWidth), l = Q(this.maxHeight), i = Q(this.maxWidth), r = Q(this.width);
      return t && (e.height = t), n && (e.minHeight = n), s && (e.minWidth = s), l && (e.maxHeight = l), i && (e.maxWidth = i), r && (e.width = r), e;
    }
  }
}), At = S({
  mixins: [ye, Je],
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
const zt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: At
}, Symbol.toStringTag, { value: "Module" })), Vt = S({});
const O = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, l] of t)
    n[s] = l;
  return n;
}, Bt = { class: "k-card-actions" };
function Ft(e, t, n, s, l, i) {
  return a(), c("div", Bt, [
    N(e.$slots, "default")
  ]);
}
const Dt = /* @__PURE__ */ O(Vt, [["render", Ft]]), Nt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dt
}, Symbol.toStringTag, { value: "Module" })), It = S({});
const Ut = { class: "k-card-text" };
function Et(e, t, n, s, l, i) {
  return a(), c("div", Ut, [
    N(e.$slots, "default")
  ]);
}
const Rt = /* @__PURE__ */ O(It, [["render", Et]]), Wt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Rt
}, Symbol.toStringTag, { value: "Module" })), qt = S({});
const Ht = { class: "k-card-title" };
function Gt(e, t, n, s, l, i) {
  return a(), c("div", Ht, [
    N(e.$slots, "default")
  ]);
}
const Qt = /* @__PURE__ */ O(qt, [["render", Gt]]), Yt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qt
}, Symbol.toStringTag, { value: "Module" })), Xt = S({
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
      default: 16
    }
  }
}), Jt = ["aria-hidden", "aria-label"], Zt = ["fill", "width", "height"], en = { d: "M7,10L12,15L17,10H7Z" }, tn = { key: 0 };
function nn(e, t, n, s, l, i) {
  return a(), c("span", ae(e.$attrs, {
    "aria-hidden": !e.title,
    "aria-label": e.title,
    class: "material-design-icon menu-down-icon",
    role: "img",
    onClick: t[0] || (t[0] = (r) => e.$emit("click", r))
  }), [
    (a(), c("svg", {
      fill: e.fillColor,
      class: "material-design-icon__svg",
      width: e.size,
      height: e.size,
      viewBox: "7 10 10 5"
    }, [
      k("path", en, [
        e.title ? (a(), c("title", tn, D(e.title), 1)) : A("", !0)
      ])
    ], 8, Zt))
  ], 16, Jt);
}
const Ce = /* @__PURE__ */ O(Xt, [["render", nn]]), rn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ce
}, Symbol.toStringTag, { value: "Module" })), on = S({
  setup() {
    return { config: ee(ce) };
  }
}), sn = { clsas: "space-y-2" }, ln = /* @__PURE__ */ k("hr", null, null, -1), an = ["href"];
function un(e, t, n, s, l, i) {
  return a(), c("div", sn, [
    ln,
    k("a", {
      href: `${e.config.baseUrl}?func=admin.index`
    }, "Admin Home", 8, an)
  ]);
}
const dn = /* @__PURE__ */ O(on, [["render", un]]), cn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dn
}, Symbol.toStringTag, { value: "Module" }));
function pn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ze = {}, et = {}, Te = {};
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
})(Te);
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
})(tt);
var nt = {};
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
})(nt);
var rt = {}, ve = {}, Me = { exports: {} }, E = String, ot = function() {
  return { isColorSupported: !1, reset: E, bold: E, dim: E, italic: E, underline: E, inverse: E, hidden: E, strikethrough: E, black: E, red: E, green: E, yellow: E, blue: E, magenta: E, cyan: E, white: E, gray: E, bgBlack: E, bgRed: E, bgGreen: E, bgYellow: E, bgBlue: E, bgMagenta: E, bgCyan: E, bgWhite: E };
};
Me.exports = ot();
Me.exports.createColors = ot;
var st = Me.exports;
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
      return u;
    }
  });
  const n = /* @__PURE__ */ s(st);
  function s(d) {
    return d && d.__esModule ? d : {
      default: d
    };
  }
  let l = /* @__PURE__ */ new Set();
  function i(d, o, f) {
    typeof process < "u" && process.env.JEST_WORKER_ID || f && l.has(f) || (f && l.add(f), console.warn(""), o.forEach((b) => console.warn(d, "-", b)));
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
})(ve);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return l;
    }
  });
  const t = /* @__PURE__ */ n(ve);
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
})(rt);
var it = {};
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
})(it);
var lt = {};
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
})(lt);
var at = {}, $e = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(b, m) {
    for (var $ in m)
      Object.defineProperty(b, $, {
        enumerable: !0,
        get: m[$]
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
      return f;
    }
  });
  const n = /* @__PURE__ */ l(st), s = /* @__PURE__ */ l(ve);
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
  function u(b, m) {
    if (r.future.includes(m)) {
      var $, _, j;
      return b.future === "all" || ((j = (_ = b == null || ($ = b.future) === null || $ === void 0 ? void 0 : $[m]) !== null && _ !== void 0 ? _ : i[m]) !== null && j !== void 0 ? j : !1);
    }
    if (r.experimental.includes(m)) {
      var F, R, W;
      return b.experimental === "all" || ((W = (R = b == null || (F = b.experimental) === null || F === void 0 ? void 0 : F[m]) !== null && R !== void 0 ? R : i[m]) !== null && W !== void 0 ? W : !1);
    }
    return !1;
  }
  function d(b) {
    if (b.experimental === "all")
      return r.experimental;
    var m;
    return Object.keys((m = b?.experimental) !== null && m !== void 0 ? m : {}).filter(($) => r.experimental.includes($) && b.experimental[$]);
  }
  function o(b) {
    if (process.env.JEST_WORKER_ID === void 0 && d(b).length > 0) {
      let m = d(b).map(($) => n.default.yellow($)).join(", ");
      s.default.warn("experimental-flags-enabled", [
        `You have enabled experimental features: ${m}`,
        "Experimental features in Tailwind CSS are not covered by semver, may introduce breaking changes, and can change at any time."
      ]);
    }
  }
  const f = r;
})($e);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "normalizeConfig", {
    enumerable: !0,
    get: function() {
      return i;
    }
  });
  const t = $e, n = /* @__PURE__ */ l(ve);
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
    var o = {}, f = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var b in r)
      if (b !== "default" && Object.prototype.hasOwnProperty.call(r, b)) {
        var m = f ? Object.getOwnPropertyDescriptor(r, b) : null;
        m && (m.get || m.set) ? Object.defineProperty(o, b, m) : o[b] = r[b];
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
      let { content: f, purge: b, safelist: m } = r;
      return Array.isArray(m) ? m : Array.isArray(f?.safelist) ? f.safelist : Array.isArray(b?.safelist) ? b.safelist : Array.isArray(b == null || (o = b.options) === null || o === void 0 ? void 0 : o.safelist) ? b.options.safelist : [];
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
          var m, $, _, j, F, R, W, U, q, H;
          return !((m = r.purge) === null || m === void 0) && m.extract ? r.purge.extract : !(($ = r.content) === null || $ === void 0) && $.extract ? r.content.extract : !((_ = r.purge) === null || _ === void 0 || (j = _.extract) === null || j === void 0) && j.DEFAULT ? r.purge.extract.DEFAULT : !((F = r.content) === null || F === void 0 || (R = F.extract) === null || R === void 0) && R.DEFAULT ? r.content.extract.DEFAULT : !((W = r.purge) === null || W === void 0 || (U = W.options) === null || U === void 0) && U.extractors ? r.purge.options.extractors : !((q = r.content) === null || q === void 0 || (H = q.options) === null || H === void 0) && H.extractors ? r.content.options.extractors : {};
        })(), f = {}, b = (() => {
          var m, $, _, j;
          if (!((m = r.purge) === null || m === void 0 || ($ = m.options) === null || $ === void 0) && $.defaultExtractor)
            return r.purge.options.defaultExtractor;
          if (!((_ = r.content) === null || _ === void 0 || (j = _.options) === null || j === void 0) && j.defaultExtractor)
            return r.content.options.defaultExtractor;
        })();
        if (b !== void 0 && (f.DEFAULT = b), typeof o == "function")
          f.DEFAULT = o;
        else if (Array.isArray(o))
          for (let { extensions: m, extractor: $ } of o ?? [])
            for (let _ of m)
              f[_] = $;
        else
          typeof o == "object" && o !== null && Object.assign(f, o);
        return f;
      })(),
      transform: (() => {
        let o = (() => {
          var b, m, $, _, j, F;
          return !((b = r.purge) === null || b === void 0) && b.transform ? r.purge.transform : !((m = r.content) === null || m === void 0) && m.transform ? r.content.transform : !(($ = r.purge) === null || $ === void 0 || (_ = $.transform) === null || _ === void 0) && _.DEFAULT ? r.purge.transform.DEFAULT : !((j = r.content) === null || j === void 0 || (F = j.transform) === null || F === void 0) && F.DEFAULT ? r.content.transform.DEFAULT : {};
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
})(at);
var ut = {};
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
})(ut);
var dt = {};
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
})(dt);
var ct = {}, pt = {};
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
})(pt);
var Pe = {}, Le = {}, ft = {};
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
})(ft);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(_, j) {
    for (var F in j)
      Object.defineProperty(_, F, {
        enumerable: !0,
        get: j[F]
      });
  }
  t(e, {
    parseColor: function() {
      return m;
    },
    formatColor: function() {
      return $;
    }
  });
  const n = /* @__PURE__ */ s(ft);
  function s(_) {
    return _ && _.__esModule ? _ : {
      default: _
    };
  }
  let l = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i, i = /^#([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i, r = /(?:\d+|\d*\.\d+)%?/, u = /(?:\s*,\s*|\s+)/, d = /\s*[,/]\s*/, o = /var\(--(?:[^ )]*?)\)/, f = new RegExp(`^(rgba?)\\(\\s*(${r.source}|${o.source})(?:${u.source}(${r.source}|${o.source}))?(?:${u.source}(${r.source}|${o.source}))?(?:${d.source}(${r.source}|${o.source}))?\\s*\\)$`), b = new RegExp(`^(hsla?)\\(\\s*((?:${r.source})(?:deg|rad|grad|turn)?|${o.source})(?:${u.source}(${r.source}|${o.source}))?(?:${u.source}(${r.source}|${o.source}))?(?:${d.source}(${r.source}|${o.source}))?\\s*\\)$`);
  function m(_, { loose: j = !1 } = {}) {
    var F, R;
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
        color: n.default[_].map((X) => X.toString())
      };
    let W = _.replace(i, (X, oe, te, y, M) => [
      "#",
      oe,
      oe,
      te,
      te,
      y,
      y,
      M ? M + M : ""
    ].join("")).match(l);
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
    var U;
    let q = (U = _.match(f)) !== null && U !== void 0 ? U : _.match(b);
    if (q === null)
      return null;
    let H = [
      q[2],
      q[3],
      q[4]
    ].filter(Boolean).map((X) => X.toString());
    return H.length === 2 && H[0].startsWith("var(") ? {
      mode: q[1],
      color: [
        H[0]
      ],
      alpha: H[1]
    } : !j && H.length !== 3 || H.length < 3 && !H.some((X) => /^var\(.*?\)$/.test(X)) ? null : {
      mode: q[1],
      color: H,
      alpha: (F = q[5]) === null || F === void 0 || (R = F.toString) === null || R === void 0 ? void 0 : R.call(F)
    };
  }
  function $({ mode: _, color: j, alpha: F }) {
    let R = F !== void 0;
    return _ === "rgba" || _ === "hsla" ? `${_}(${j.join(", ")}${R ? `, ${F}` : ""})` : `${_}(${j.join(" ")}${R ? ` / ${F}` : ""})`;
  }
})(Le);
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
  const n = Le;
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
        ...Object.fromEntries(d.map((f) => [
          f,
          i({
            opacityVariable: u,
            opacityValue: `var(${u})`
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
      [u]: "1",
      ...Object.fromEntries(d.map((f) => [
        f,
        (0, n.formatColor)({
          ...o,
          alpha: `var(${u})`
        })
      ]))
    };
  }
})(Pe);
var Ae = {}, mt = {}, ke = {};
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
})(ke);
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
      return u;
    }
  });
  const n = ke;
  let s = /* @__PURE__ */ new Set([
    "inset",
    "inherit",
    "initial",
    "revert",
    "unset"
  ]), l = /\ +(?![^(]*\))/g, i = /^-?(\d+|\.\d+)(.*?)$/g;
  function r(d) {
    return (0, n.splitAtTopLevelOnly)(d, ",").map((f) => {
      let b = f.trim(), m = {
        raw: b
      }, $ = b.split(l), _ = /* @__PURE__ */ new Set();
      for (let j of $)
        i.lastIndex = 0, !_.has("KEYWORD") && s.has(j) ? (m.keyword = j, _.add("KEYWORD")) : i.test(j) ? _.has("X") ? _.has("Y") ? _.has("BLUR") ? _.has("SPREAD") || (m.spread = j, _.add("SPREAD")) : (m.blur = j, _.add("BLUR")) : (m.y = j, _.add("Y")) : (m.x = j, _.add("X")) : m.color ? (m.unknown || (m.unknown = []), m.unknown.push(j)) : m.color = j;
      return m.valid = m.x !== void 0 && m.y !== void 0, m;
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
})(mt);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(p, T) {
    for (var P in T)
      Object.defineProperty(p, P, {
        enumerable: !0,
        get: T[P]
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
      return m;
    },
    length: function() {
      return j;
    },
    lineWidth: function() {
      return R;
    },
    shadow: function() {
      return W;
    },
    color: function() {
      return U;
    },
    image: function() {
      return q;
    },
    gradient: function() {
      return X;
    },
    position: function() {
      return te;
    },
    familyName: function() {
      return y;
    },
    genericName: function() {
      return x;
    },
    absoluteSize: function() {
      return v;
    },
    relativeSize: function() {
      return h;
    }
  });
  const n = Le, s = mt, l = ke;
  let i = [
    "min",
    "max",
    "clamp",
    "calc"
  ];
  function r(p) {
    return i.some((T) => new RegExp(`^${T}\\(.*\\)`).test(p));
  }
  const u = "--tw-placeholder", d = new RegExp(u, "g");
  function o(p, T = !0) {
    return p.startsWith("--") ? `var(${p})` : p.includes("url(") ? p.split(/(url\(.*?\))/g).filter(Boolean).map((P) => /^url\(.*?\)$/.test(P) ? P : o(P, !1)).join("") : (p = p.replace(/([^\\])_+/g, (P, L) => L + " ".repeat(P.length - 1)).replace(/^_/g, " ").replace(/\\_/g, "_"), T && (p = p.trim()), p = p.replace(/(calc|min|max|clamp)\(.+\)/g, (P) => {
      let L = [];
      return P.replace(/var\((--.+?)[,)]/g, (Z, De) => (L.push(De), Z.replace(De, u))).replace(/(-?\d*\.?\d(?!\b-\d.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g, "$1 $2 ").replace(d, () => L.shift());
    }), p);
  }
  function f(p) {
    return p.startsWith("url(");
  }
  function b(p) {
    return !isNaN(Number(p)) || r(p);
  }
  function m(p) {
    return p.endsWith("%") && b(p.slice(0, -1)) || r(p);
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
  function j(p) {
    return p === "0" || new RegExp(`^[+-]?[0-9]*.?[0-9]+(?:[eE][+-]?[0-9]+)?${_}$`).test(p) || r(p);
  }
  let F = /* @__PURE__ */ new Set([
    "thin",
    "medium",
    "thick"
  ]);
  function R(p) {
    return F.has(p);
  }
  function W(p) {
    let T = (0, s.parseBoxShadowValue)(o(p));
    for (let P of T)
      if (!P.valid)
        return !1;
    return !0;
  }
  function U(p) {
    let T = 0;
    return (0, l.splitAtTopLevelOnly)(p, "_").every((L) => (L = o(L), L.startsWith("var(") ? !0 : (0, n.parseColor)(L, {
      loose: !0
    }) !== null ? (T++, !0) : !1)) ? T > 0 : !1;
  }
  function q(p) {
    let T = 0;
    return (0, l.splitAtTopLevelOnly)(p, ",").every((L) => (L = o(L), L.startsWith("var(") ? !0 : f(L) || X(L) || [
      "element(",
      "image(",
      "cross-fade(",
      "image-set("
    ].some((Z) => L.startsWith(Z)) ? (T++, !0) : !1)) ? T > 0 : !1;
  }
  let H = /* @__PURE__ */ new Set([
    "linear-gradient",
    "radial-gradient",
    "repeating-linear-gradient",
    "repeating-radial-gradient",
    "conic-gradient"
  ]);
  function X(p) {
    p = o(p);
    for (let T of H)
      if (p.startsWith(`${T}(`))
        return !0;
    return !1;
  }
  let oe = /* @__PURE__ */ new Set([
    "center",
    "top",
    "right",
    "bottom",
    "left"
  ]);
  function te(p) {
    let T = 0;
    return (0, l.splitAtTopLevelOnly)(p, "_").every((L) => (L = o(L), L.startsWith("var(") ? !0 : oe.has(L) || j(L) || m(L) ? (T++, !0) : !1)) ? T > 0 : !1;
  }
  function y(p) {
    let T = 0;
    return (0, l.splitAtTopLevelOnly)(p, ",").every((L) => (L = o(L), L.startsWith("var(") ? !0 : L.includes(" ") && !/(['"])([^"']+)\1/g.test(L) || /^\d/g.test(L) ? !1 : (T++, !0))) ? T > 0 : !1;
  }
  let M = /* @__PURE__ */ new Set([
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
    return M.has(p);
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
  function h(p) {
    return w.has(p);
  }
})(Ae);
var gt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "backgroundSize", {
    enumerable: !0,
    get: function() {
      return s;
    }
  });
  const t = Ae, n = ke;
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
})(gt);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(y, M) {
    for (var x in M)
      Object.defineProperty(y, x, {
        enumerable: !0,
        get: M[x]
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
      return j;
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
      return oe;
    },
    getMatchingTypes: function() {
      return te;
    }
  });
  const n = /* @__PURE__ */ d(pt), s = Pe, l = Ae, i = /* @__PURE__ */ d(Te), r = gt, u = $e;
  function d(y) {
    return y && y.__esModule ? y : {
      default: y
    };
  }
  function o(y, M) {
    y.walkClasses((x) => {
      x.value = M(x.value), x.raws && x.raws.value && (x.raws.value = (0, n.default)(x.raws.value));
    });
  }
  function f(y, M) {
    if (!$(y))
      return;
    let x = y.slice(1, -1);
    if (M(x))
      return (0, l.normalize)(x);
  }
  function b(y, M = {}, x) {
    let g = M[y];
    if (g !== void 0)
      return (0, i.default)(g);
    if ($(y)) {
      let v = f(y, x);
      return v === void 0 ? void 0 : (0, i.default)(v);
    }
  }
  function m(y, M = {}, { validate: x = () => !0 } = {}) {
    var g;
    let v = (g = M.values) === null || g === void 0 ? void 0 : g[y];
    return v !== void 0 ? v : M.supportsNegativeValues && y.startsWith("-") ? b(y.slice(1), M.values, x) : f(y, x);
  }
  function $(y) {
    return y.startsWith("[") && y.endsWith("]");
  }
  function _(y) {
    let M = y.lastIndexOf("/");
    return M === -1 || M === y.length - 1 ? [
      y,
      void 0
    ] : $(y) && !y.includes("]/[") ? [
      y,
      void 0
    ] : [
      y.slice(0, M),
      y.slice(M + 1)
    ];
  }
  function j(y) {
    if (typeof y == "string" && y.includes("<alpha-value>")) {
      let M = y;
      return ({ opacityValue: x = 1 }) => M.replace("<alpha-value>", x);
    }
    return y;
  }
  function F(y) {
    return (0, l.normalize)(y.slice(1, -1));
  }
  function R(y, M = {}, { tailwindConfig: x = {} } = {}) {
    var g;
    if (((g = M.values) === null || g === void 0 ? void 0 : g[y]) !== void 0) {
      var v;
      return j((v = M.values) === null || v === void 0 ? void 0 : v[y]);
    }
    let [w, h] = _(y);
    if (h !== void 0) {
      var p, T, P, L;
      let Z = (L = (p = M.values) === null || p === void 0 ? void 0 : p[w]) !== null && L !== void 0 ? L : $(w) ? w.slice(1, -1) : void 0;
      return Z === void 0 ? void 0 : (Z = j(Z), $(h) ? (0, s.withAlphaValue)(Z, F(h)) : ((T = x.theme) === null || T === void 0 || (P = T.opacity) === null || P === void 0 ? void 0 : P[h]) === void 0 ? void 0 : (0, s.withAlphaValue)(Z, x.theme.opacity[h]));
    }
    return m(y, M, {
      validate: l.color
    });
  }
  function W(y, M = {}) {
    var x;
    return (x = M.values) === null || x === void 0 ? void 0 : x[y];
  }
  function U(y) {
    return (M, x) => m(M, x, {
      validate: y
    });
  }
  let q = {
    any: m,
    color: R,
    url: U(l.url),
    image: U(l.image),
    length: U(l.length),
    percentage: U(l.percentage),
    position: U(l.position),
    lookup: W,
    "generic-name": U(l.genericName),
    "family-name": U(l.familyName),
    number: U(l.number),
    "line-width": U(l.lineWidth),
    "absolute-size": U(l.absoluteSize),
    "relative-size": U(l.relativeSize),
    shadow: U(l.shadow),
    size: U(r.backgroundSize)
  }, H = Object.keys(q);
  function X(y, M) {
    let x = y.indexOf(M);
    return x === -1 ? [
      void 0,
      y
    ] : [
      y.slice(0, x),
      y.slice(x + 1)
    ];
  }
  function oe(y, M, x, g) {
    if (x.values && M in x.values)
      for (let { type: w } of y ?? []) {
        let h = q[w](M, x, {
          tailwindConfig: g
        });
        if (h !== void 0)
          return [
            h,
            w,
            null
          ];
      }
    if ($(M)) {
      let w = M.slice(1, -1), [h, p] = X(w, ":");
      if (!/^[\w-_]+$/g.test(h))
        p = w;
      else if (h !== void 0 && !H.includes(h))
        return [];
      if (p.length > 0 && H.includes(h))
        return [
          m(`[${p}]`, x),
          h,
          null
        ];
    }
    let v = te(y, M, x, g);
    for (let w of v)
      return w;
    return [];
  }
  function* te(y, M, x, g) {
    let v = (0, u.flagEnabled)(g, "generalizedModifiers"), [w, h] = _(M);
    if (v && x.modifiers != null && (x.modifiers === "any" || typeof x.modifiers == "object" && (h && $(h) || h in x.modifiers)) || (w = M, h = void 0), h !== void 0 && w === "" && (w = "DEFAULT"), h !== void 0 && typeof x.modifiers == "object") {
      var T, P;
      let L = (P = (T = x.modifiers) === null || T === void 0 ? void 0 : T[h]) !== null && P !== void 0 ? P : null;
      L !== null ? h = L : $(h) && (h = F(h));
    }
    for (let { type: L } of y ?? []) {
      let Z = q[L](w, x, {
        tailwindConfig: g
      });
      Z !== void 0 && (yield [
        Z,
        L,
        h ?? null
      ]);
    }
  }
})(ct);
var ht = {};
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
})(ht);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return x;
    }
  });
  const t = /* @__PURE__ */ $(Te), n = /* @__PURE__ */ $(tt), s = /* @__PURE__ */ $(nt), l = /* @__PURE__ */ $(rt), i = it, r = lt, u = at, d = /* @__PURE__ */ $(ut), o = dt, f = ct, b = Pe, m = /* @__PURE__ */ $(ht);
  function $(g) {
    return g && g.__esModule ? g : {
      default: g
    };
  }
  function _(g) {
    return typeof g == "function";
  }
  function j(g, ...v) {
    let w = v.pop();
    for (let h of v)
      for (let p in h) {
        let T = w(g[p], h[p]);
        T === void 0 ? (0, d.default)(g[p]) && (0, d.default)(h[p]) ? g[p] = j({}, g[p], h[p], w) : g[p] = h[p] : g[p] = T;
      }
    return g;
  }
  const F = {
    colors: l.default,
    negative(g) {
      return Object.keys(g).filter((v) => g[v] !== "0").reduce((v, w) => {
        let h = (0, t.default)(g[w]);
        return h !== void 0 && (v[`-${w}`] = h), v;
      }, {});
    },
    breakpoints(g) {
      return Object.keys(g).filter((v) => typeof g[v] == "string").reduce((v, w) => ({
        ...v,
        [`screen-${w}`]: g[w]
      }), {});
    }
  };
  function R(g, ...v) {
    return _(g) ? g(...v) : g;
  }
  function W(g) {
    return g.reduce((v, { extend: w }) => j(v, w, (h, p) => h === void 0 ? [
      p
    ] : Array.isArray(h) ? [
      p,
      ...h
    ] : [
      p,
      h
    ]), {});
  }
  function U(g) {
    return {
      ...g.reduce((v, w) => (0, i.defaults)(v, w), {}),
      // In order to resolve n config objects, we combine all of their `extend` properties
      // into arrays instead of objects so they aren't overridden.
      extend: W(g)
    };
  }
  function q(g, v) {
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
  function H({ extend: g, ...v }) {
    return j(v, g, (w, h) => !_(w) && !h.some(_) ? j({}, w, ...h, q) : (p, T) => j({}, ...[
      w,
      ...h
    ].map((P) => R(P, p, T)), q));
  }
  function* X(g) {
    let v = (0, r.toPath)(g);
    if (v.length === 0 || (yield v, Array.isArray(g)))
      return;
    let w = /^(.*?)\s*\/\s*([^/]+)$/, h = g.match(w);
    if (h !== null) {
      let [, p, T] = h, P = (0, r.toPath)(p);
      P.alpha = T, yield P;
    }
  }
  function oe(g) {
    const v = (w, h) => {
      for (const p of X(w)) {
        let T = 0, P = g;
        for (; P != null && T < p.length; )
          P = P[p[T++]], P = _(P) && (p.alpha === void 0 || T <= p.length - 1) ? P(v, F) : P;
        if (P !== void 0) {
          if (p.alpha !== void 0) {
            let L = (0, f.parseColorFormat)(P);
            return (0, b.withAlphaValue)(L, p.alpha, (0, m.default)(L));
          }
          return (0, d.default)(P) ? (0, o.cloneDeep)(P) : P;
        }
      }
      return h;
    };
    return Object.assign(v, {
      theme: v,
      ...F
    }), Object.keys(g).reduce((w, h) => (w[h] = _(g[h]) ? g[h](v, F) : g[h], w), {});
  }
  function te(g) {
    let v = [];
    return g.forEach((w) => {
      v = [
        ...v,
        w
      ];
      var h;
      const p = (h = w?.plugins) !== null && h !== void 0 ? h : [];
      p.length !== 0 && p.forEach((T) => {
        T.__isOptionsFunction && (T = T());
        var P;
        v = [
          ...v,
          ...te([
            (P = T?.config) !== null && P !== void 0 ? P : {}
          ])
        ];
      });
    }), v;
  }
  function y(g) {
    return [
      ...g
    ].reduceRight((w, h) => _(h) ? h({
      corePlugins: w
    }) : (0, s.default)(h, w), n.default);
  }
  function M(g) {
    return [
      ...g
    ].reduceRight((w, h) => [
      ...w,
      ...h
    ], []);
  }
  function x(g) {
    let v = [
      ...te(g),
      {
        prefix: "",
        important: !1,
        separator: ":"
      }
    ];
    var w, h;
    return (0, u.normalizeConfig)((0, i.defaults)({
      theme: oe(H(U(v.map((p) => (w = p?.theme) !== null && w !== void 0 ? w : {})))),
      corePlugins: y(v.map((p) => p.corePlugins)),
      plugins: M(g.map((p) => (h = p?.plugins) !== null && h !== void 0 ? h : []))
    }, ...v));
  }
})(et);
var _t = {}, fn = {
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
  const t = /* @__PURE__ */ s(fn), n = $e;
  function s(i) {
    return i && i.__esModule ? i : {
      default: i
    };
  }
  function l(i) {
    var r;
    const u = ((r = i?.presets) !== null && r !== void 0 ? r : [
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
      ...u
    ];
  }
})(_t);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return l;
    }
  });
  const t = /* @__PURE__ */ s(et), n = /* @__PURE__ */ s(_t);
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
})(Ze);
let we = Ze;
var mn = (we.__esModule ? we : { default: we }).default;
const gn = /* @__PURE__ */ pn(mn), hn = {
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
}, _n = gn(hn);
function bn(e) {
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
const yn = S({
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
      const t = V(_n, ["theme", "colors"]), n = V(t, e);
      return typeof n == "string" ? n : e;
    },
    fontColorForBackgroundColor(e) {
      const t = bn(e);
      return t.alpha * 255 < 150 || Math.round(
        (t.red * 299 + t.green * 587 + t.blue * 114) / 1e3
      ) > 125 ? "#000" : "#fff";
    }
  }
}), vn = S({
  mixins: [yn]
});
const $n = { class: "flex-grow" };
function kn(e, t, n, s, l, i) {
  return a(), c("div", {
    class: "k-alert",
    style: ne([e.colorableBackgroundStyle, e.colorableTextStyleForBackground])
  }, [
    k("div", $n, [
      N(e.$slots, "default")
    ])
  ], 4);
}
const wn = /* @__PURE__ */ O(vn, [["render", kn]]), Sn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: wn
}, Symbol.toStringTag, { value: "Module" }));
const On = {}, xn = { class: "k-app" };
function Kn(e, t) {
  const n = K("KSnackbar"), s = K("KConfirm");
  return a(), c("div", xn, [
    B(s, null, {
      default: C(() => [
        B(n, null, {
          default: C(() => [
            N(e.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    })
  ]);
}
const jn = /* @__PURE__ */ O(On, [["render", Kn]]), Cn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: jn
}, Symbol.toStringTag, { value: "Module" })), Tn = S({
  directives: {
    ClickAway: je
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
        width: Q(this.width)
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
});
const Mn = { class: "k-autocomplete-input" }, Pn = ["placeholder", "readonly"], Ln = {
  key: 0,
  class: "k-autocomplete-items"
}, An = ["onClick"];
function zn(e, t, n, s, l, i) {
  const r = Oe("click-away");
  return re((a(), c("div", {
    class: "k-autocomplete",
    style: ne([e.style])
  }, [
    N(e.$slots, "prepend", { item: e.valueLocal }),
    k("div", Mn, [
      re(k("input", {
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = (u) => e.inputText = u),
        class: J(["k-input", { invalidSelection: !e.isValidSelection }]),
        type: "search",
        autocomplete: "off",
        placeholder: e.placeholderText,
        readonly: !e.editable,
        onSearch: t[1] || (t[1] = (...u) => e.clearInput && e.clearInput(...u)),
        onKeydown: [
          t[2] || (t[2] = ge(se((u) => e.currentFocus = Math.max(-1, e.currentFocus - 1), ["prevent"]), ["arrow-up"])),
          t[3] || (t[3] = ge(se((u) => e.currentFocus = Math.min(e.items.length - 1, e.currentFocus + 1), ["prevent"]), ["arrow-down"])),
          t[4] || (t[4] = ge(se((u) => e.select(e.currentFocus), ["prevent"]), ["enter"])),
          t[6] || (t[6] = ge((...u) => e.setBlur && e.setBlur(...u), ["tab"]))
        ],
        onFocus: t[5] || (t[5] = (...u) => e.setFocus && e.setFocus(...u)),
        onKeyup: t[7] || (t[7] = (...u) => e.keyup && e.keyup(...u))
      }, null, 42, Pn), [
        [xe, e.inputText]
      ]),
      e.focus && e.items.length && e.inputText ? (a(), c("div", Ln, [
        (a(!0), c(I, null, Y(e.itemsFiltered, (u, d) => (a(), c("div", {
          key: d,
          class: J(["k-autocomplete-item", { "k-autocomplete-active": e.currentFocus == d }]),
          onClick: (o) => e.select(d)
        }, [
          N(e.$slots, "item", { item: u }, () => [
            G(D(u), 1)
          ])
        ], 10, An))), 128))
      ])) : A("", !0)
    ])
  ], 4)), [
    [r, e.setBlur]
  ]);
}
const Vn = /* @__PURE__ */ O(Tn, [["render", zn]]), Bn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Vn
}, Symbol.toStringTag, { value: "Module" }));
function ee(e, t) {
  const n = Ot(e, t);
  if (!n)
    throw new Error(`Could not resolve ${e.description}`);
  return n;
}
const ie = Symbol("session"), ce = Symbol("config"), Fn = Symbol("snackbar"), Dn = Symbol(
  "dateTimeFormatterKey"
), Nn = Symbol(
  "confirmDialogKey"
), pe = new be();
function In(e) {
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
class En {
  nodes;
  nodeLookupQueue;
  constructor() {
    this.nodes = {}, this.nodeLookupQueue = new Un();
  }
  registerUsers(t) {
    t.forEach((n) => this.nodes[n.dataid] = n);
  }
  async lookupLegacy(t, n) {
    if (n)
      try {
        if (await pe.acquire(n), this.nodes[n])
          return this.nodes[n];
        {
          const s = await t.nodes.node({ dataid: n }), l = In(s.data);
          return this.nodes[n] = l, l;
        }
      } finally {
        pe.release(n);
      }
  }
  async lookupRPC(t, n) {
    return n ? (await pe.acquire(n), this.nodes[n] ? (pe.release(n), this.nodes[n]) : new Promise((s) => {
      const l = (i) => {
        this.nodes[n] = i, s(i), pe.release(n);
      };
      this.nodeLookupQueue.queue(t, l, n);
    })) : null;
  }
  async lookup(t, n, s = !1) {
    return s ? this.lookupLegacy(t, n) : this.lookupRPC(t, n);
  }
}
const Rn = new En(), Wn = S({
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
        e && (this.nodeRecLocal = await Rn.lookup(
          this.session,
          e,
          this.legacy
        ));
      },
      immediate: !0
    }
  }
}), qn = {
  key: 0,
  class: "flex items-center gap-2"
}, Hn = { class: "flex items-center gap-1" }, Gn = ["src"], Qn = ["href"], Yn = ["innerHTML"];
function Xn(e, t, n, s, l, i) {
  const r = K("KFunctionMenuModern");
  return e.nodeRecResolved ? (a(), c("div", qn, [
    k("div", Hn, [
      e.image ? (a(), c("img", {
        key: 0,
        src: e.nodeRecResolved.gif,
        width: "16",
        height: "16"
      }, null, 8, Gn)) : A("", !0),
      G(" "),
      k("a", {
        href: e.nodeRecResolved.url
      }, D(e.nodeRecResolved.name), 9, Qn)
    ]),
    e.clickable ? (a(), z(r, {
      key: 0,
      dataid: e.nodeRecResolved.dataid
    }, null, 8, ["dataid"])) : A("", !0),
    k("div", {
      class: "flex items-center",
      innerHTML: e.nodeRecResolved.modifiedImageCallback
    }, null, 8, Yn)
  ])) : A("", !0);
}
const Jn = /* @__PURE__ */ O(Wn, [["render", Xn]]), Zn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Jn
}, Symbol.toStringTag, { value: "Module" })), er = S({
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
const tr = ["disabled"];
function nr(e, t, n, s, l, i) {
  return a(), c("button", ae({
    class: ["k-button", e.classObj],
    disabled: e.disabled,
    type: "button"
  }, e.$attrs, {
    onClick: t[0] || (t[0] = (r) => e.$emit("click"))
  }), [
    N(e.$slots, "default")
  ], 16, tr);
}
const rr = /* @__PURE__ */ O(er, [["render", nr]]), or = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: rr
}, Symbol.toStringTag, { value: "Module" })), sr = S({
  provide() {
    return {
      // @ts-ignore - not sure why this complains
      [Nn]: this
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
function ir(e, t, n, s, l, i) {
  const r = K("KCardTitle"), u = K("KCardText"), d = K("KSpacer"), o = K("KButton"), f = K("KCardActions"), b = K("KCard"), m = K("KDialog");
  return a(), c(I, null, [
    N(e.$slots, "default"),
    B(m, {
      modelValue: e.dialog,
      "onUpdate:modelValue": t[2] || (t[2] = ($) => e.dialog = $),
      "max-width": "30vw",
      "min-width": "20vw",
      "z-index": 50
    }, {
      default: C(() => [
        B(b, null, {
          default: C(() => [
            e.title ? (a(), z(r, { key: 0 }, {
              default: C(() => [
                G(D(e.title), 1)
              ]),
              _: 1
            })) : A("", !0),
            e.message ? (a(), z(u, { key: 1 }, {
              default: C(() => [
                G(D(e.message), 1)
              ]),
              _: 1
            })) : A("", !0),
            B(f, null, {
              default: C(() => [
                B(d),
                e.noLabel ? (a(), z(o, {
                  key: 0,
                  small: "",
                  onClick: t[0] || (t[0] = ($) => e.dismiss(!1))
                }, {
                  default: C(() => [
                    G(D(e.noLabel), 1)
                  ]),
                  _: 1
                })) : A("", !0),
                e.yesLabel ? (a(), z(o, {
                  key: 1,
                  small: "",
                  onClick: t[1] || (t[1] = ($) => e.dismiss(!0))
                }, {
                  default: C(() => [
                    G(D(e.yesLabel), 1)
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
const lr = /* @__PURE__ */ O(sr, [["render", ir]]), ar = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: lr
}, Symbol.toStringTag, { value: "Module" })), ur = S({
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
const dr = { class: "k-date-time-picker" }, cr = ["type", "readonly"];
function pr(e, t, n, s, l, i) {
  const r = K("KButton");
  return a(), c("div", dr, [
    re(k("input", {
      "onUpdate:modelValue": t[0] || (t[0] = (u) => e.localModelValue = u),
      class: "k-input",
      type: e.type,
      readonly: !e.editable
    }, null, 8, cr), [
      [xt, e.localModelValue]
    ]),
    e.editable ? (a(), c(I, { key: 0 }, [
      B(r, {
        small: "",
        onClick: e.setToNow
      }, {
        default: C(() => [
          G(" Now ")
        ]),
        _: 1
      }, 8, ["onClick"]),
      B(r, {
        small: "",
        onClick: t[1] || (t[1] = (u) => e.$emit("update:modelValue", null))
      }, {
        default: C(() => [
          G(" Clear ")
        ]),
        _: 1
      })
    ], 64)) : A("", !0)
  ]);
}
const fr = /* @__PURE__ */ O(ur, [["render", pr]]), mr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fr
}, Symbol.toStringTag, { value: "Module" })), gr = S({
  directives: {
    ClickAway: je
  },
  mixins: [ye],
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
      this.$emit("update:modelValue", e), e ? (await this.$nextTick(), Ct(this.$refs.content)) : Tt(this.$refs.content);
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
function hr(e, t, n, s, l, i) {
  const r = Oe("click-away");
  return a(), c(I, null, [
    N(e.$slots, "activator", { on: e.on }),
    e.mounted ? (a(), z(Ye, {
      key: 0,
      to: ".k-app"
    }, [
      B(_e, { name: "fade" }, {
        default: C(() => [
          e.dialog ? (a(), c("div", {
            key: 0,
            class: "k-dialog",
            style: ne([e.style])
          }, [
            re((a(), c("div", {
              ref: "content",
              class: J(["k-dialog-content", e.classObj]),
              style: ne([e.measurableStyles])
            }, [
              N(e.$slots, "default", { on: e.on })
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
const _r = /* @__PURE__ */ O(gr, [["render", hr]]), br = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _r
}, Symbol.toStringTag, { value: "Module" }));
const yr = {}, vr = { class: "k-divider" };
function $r(e, t) {
  return a(), c("div", vr);
}
const ze = /* @__PURE__ */ O(yr, [["render", $r]]), kr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ze
}, Symbol.toStringTag, { value: "Module" })), wr = S({
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
      const e = Q(this.size);
      return this.outline ? {
        borderStyle: "solid",
        borderWidth: Q(this.outlineWidth),
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
function Sr(e, t, n, s, l, i) {
  return a(), c("div", {
    class: "k-dot",
    style: ne([e.style])
  }, [
    N(e.$slots, "default")
  ], 4);
}
const Or = /* @__PURE__ */ O(wr, [["render", Sr]]), xr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Or
}, Symbol.toStringTag, { value: "Module" })), ue = S({
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
}), Kr = {
  mixins: [ue]
};
const jr = {
  key: 0,
  class: "k-form-field-label"
};
function Cr(e, t, n, s, l, i) {
  return a(), c("div", null, [
    e.label ? (a(), c("div", jr, D(e.label), 1)) : A("", !0),
    N(e.$slots, "default"),
    (a(!0), c(I, null, Y(e.successMessages, (r, u) => (a(), c("div", {
      key: u,
      class: "k-formfield--success"
    }, D(r), 1))), 128)),
    (a(!0), c(I, null, Y(e.errorMessages, (r, u) => (a(), c("div", {
      key: u,
      class: "k-formfield--error"
    }, D(r), 1))), 128))
  ]);
}
const Tr = /* @__PURE__ */ O(Kr, [["render", Cr]]), Mr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Tr,
  mixin: ue
}, Symbol.toStringTag, { value: "Module" })), Pr = S({
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
}), Lr = { key: 0 }, Ar = ["id"], zr = ["src"], Vr = ["id", "src"];
function Br(e, t, n, s, l, i) {
  return e.dataid ? (a(), c("span", Lr, [
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
      }, null, 8, zr)) : (a(), c("img", {
        key: 1,
        id: e.xid,
        src: e.image,
        border: "0",
        alt: "Functions",
        title: "Functions",
        onMouseover: t[0] || (t[0] = (...r) => e.onmouseover && e.onmouseover(...r)),
        onMouseout: t[1] || (t[1] = (...r) => e.onmouseout && e.onmouseout(...r))
      }, null, 40, Vr))
    ], 8, Ar),
    t[3] || (Ne(-1), t[3] = k("div", {
      id: e.zid,
      ref: "functionMenuDiv",
      class: "functionMenuDiv"
    }, null, 8, ["id"]), Ne(1), t[3])
  ])) : A("", !0);
}
const Fr = /* @__PURE__ */ O(Pr, [["render", Br]]), Dr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fr
}, Symbol.toStringTag, { value: "Module" })), Nr = S({});
const Ir = { class: "k-list-item-title" };
function Ur(e, t, n, s, l, i) {
  return a(), c("div", Ir, [
    N(e.$slots, "default")
  ]);
}
const bt = /* @__PURE__ */ O(Nr, [["render", Ur]]), Er = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bt
}, Symbol.toStringTag, { value: "Module" })), Rr = S({});
const Wr = { class: "k-list-item-subtitle" };
function qr(e, t, n, s, l, i) {
  return a(), c("div", Wr, [
    N(e.$slots, "default")
  ]);
}
const yt = /* @__PURE__ */ O(Rr, [["render", qr]]), Hr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: yt
}, Symbol.toStringTag, { value: "Module" })), Gr = S({
  mixins: [Je],
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
    const { tag: e, data: t } = this.generateRouteLink(), n = this.title ? le(bt, {}, { default: () => [this.title] }) : null, s = this.subtitle ? le(yt, {}, { default: () => [this.subtitle] }) : null, l = n || s ? [n, s].filter((o) => !!o) : this.$slots.default ? this.$slots.default() : null, i = le(
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
    ) : null, u = this.$slots.append ? le(
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
      [r, i, u].filter((o) => !!o)
    );
  }
});
const Ve = /* @__PURE__ */ O(Gr, [["__scopeId", "data-v-f06ea25f"]]), Qr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ve
}, Symbol.toStringTag, { value: "Module" })), Re = new be(), Yr = S({
  components: { KMenuDownIcon: Ce, KListItem: Ve, KDivider: ze },
  setup() {
    return { session: Gl() };
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
        if (await Re.acquire(this.dataid), this.actions.length === 0) {
          this.loading = !0;
          const { data: e } = await this.session.get(
            `/api/v1/nodes/${this.dataid}/actions`
          );
          this.actions = e.actions;
        }
      } finally {
        this.loading = !1, Re.release(this.dataid);
      }
    }
  }
});
function Xr(e, t, n, s, l, i) {
  const r = K("KMenuDownIcon"), u = K("KDivider"), d = K("KRightCaret"), o = K("KListItem"), f = K("KList"), b = K("KMenu");
  return a(), z(b, {
    modelValue: e.visible,
    "onUpdate:modelValue": t[0] || (t[0] = (m) => e.visible = m),
    loading: e.loading
  }, {
    activator: C(({ on: m }) => [
      B(r, ae({ size: e.size }, he(m), { class: "cursor-pointer" }), null, 16, ["size"])
    ]),
    default: C(() => [
      B(f, null, {
        default: C(() => [
          (a(!0), c(I, null, Y(e.actions, (m, $) => (a(), c(I, null, [
            m.signature === "-" ? (a(), z(u, {
              key: `${$}`
            })) : m.children.length ? (a(), z(b, {
              submenu: "",
              key: `a${$}`
            }, {
              activator: C(({ on: _ }) => [
                B(o, ae({
                  title: m.name
                }, he(_)), {
                  append: C(() => [
                    B(d)
                  ]),
                  _: 2
                }, 1040, ["title"])
              ]),
              default: C(() => [
                B(f, null, {
                  default: C(() => [
                    (a(!0), c(I, null, Y(m.children, (_, j) => (a(), z(o, {
                      key: `b${j}`,
                      title: _.name,
                      href: _.url
                    }, null, 8, ["title", "href"]))), 128))
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1024)) : (a(), z(o, {
              title: m.name,
              href: m.url,
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
const Jr = /* @__PURE__ */ O(Yr, [["render", Xr]]), Zr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Jr
}, Symbol.toStringTag, { value: "Module" })), eo = S({
  components: { KMenuDownIcon: Ce, KListItem: Ve, KDivider: ze },
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
function to(e, t, n, s, l, i) {
  const r = K("KMenuDownIcon"), u = K("KDivider"), d = K("KRightCaret"), o = K("KListItem"), f = K("KList"), b = K("KMenu");
  return a(), z(b, {
    modelValue: e.visible,
    "onUpdate:modelValue": t[0] || (t[0] = (m) => e.visible = m),
    loading: e.loading
  }, {
    activator: C(({ on: m }) => [
      B(r, ae({ size: e.size }, he(m), { class: "cursor-pointer" }), null, 16, ["size"])
    ]),
    default: C(() => [
      B(f, null, {
        default: C(() => [
          (a(!0), c(I, null, Y(e.actions, (m, $) => (a(), c(I, null, [
            m.signature === "-" ? (a(), z(u, {
              key: `${$}`
            })) : m.children.length ? (a(), z(b, {
              submenu: "",
              key: `a${$}`
            }, {
              activator: C(({ on: _ }) => [
                B(o, ae({
                  title: m.name
                }, he(_)), {
                  append: C(() => [
                    B(d)
                  ]),
                  _: 2
                }, 1040, ["title"])
              ]),
              default: C(() => [
                B(f, null, {
                  default: C(() => [
                    (a(!0), c(I, null, Y(m.children, (_, j) => (a(), z(o, {
                      key: `b${j}`,
                      title: _.name,
                      href: _.url
                    }, null, 8, ["title", "href"]))), 128))
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1024)) : (a(), z(o, {
              title: m.name,
              href: m.url,
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
const no = /* @__PURE__ */ O(eo, [["render", to]]), ro = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: no
}, Symbol.toStringTag, { value: "Module" })), oo = S({});
const so = { class: "k-progress-line" };
function io(e, t, n, s, l, i) {
  return a(), c("div", so);
}
const lo = /* @__PURE__ */ O(oo, [["render", io]]), ao = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: lo
}, Symbol.toStringTag, { value: "Module" })), uo = S({});
const co = { class: "k-list" };
function po(e, t, n, s, l, i) {
  return a(), c("div", co, [
    N(e.$slots, "default")
  ]);
}
const fo = /* @__PURE__ */ O(uo, [["render", po]]), mo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fo
}, Symbol.toStringTag, { value: "Module" })), go = S({
  directives: {
    ClickAway: je
  },
  setup() {
    const e = Ie(null);
    return { menuItems: Ie(null), menuActivator: e };
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
          top: Q(
            this.menuActivatorBox.top - this.appBox.top - i
          ),
          left: Q(this.menuActivatorBox.right - this.appBox.left)
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
const ho = { ref: "menuActivator" }, _o = {
  key: 0,
  class: "flex items-center justify-center p-2"
};
function bo(e, t, n, s, l, i) {
  const r = K("KSpinner"), u = Oe("click-away");
  return a(), c("div", {
    class: "k-menu",
    onMouseenter: t[1] || (t[1] = (...d) => e.mouseEnter && e.mouseEnter(...d))
  }, [
    re((a(), c("div", ho, [
      N(e.$slots, "activator", {
        on: { click: e.toggleMenu }
      })
    ])), [
      [u, e.clickAway]
    ]),
    (a(), z(Ye, { to: ".k-app" }, [
      k("div", {
        onMouseleave: t[0] || (t[0] = (...d) => e.mouseLeave && e.mouseLeave(...d)),
        ref: "menuItems",
        class: J(["k-menu-items", e.dropDownMenuItemsClassObj]),
        style: ne(e.styleDropDownItems)
      }, [
        e.loading ? (a(), c("div", _o, [
          B(r)
        ])) : N(e.$slots, "default", { key: 1 })
      ], 38)
    ]))
  ], 32);
}
const yo = /* @__PURE__ */ O(go, [["render", bo]]), vo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: yo
}, Symbol.toStringTag, { value: "Module" })), $o = {}, ko = {
  class: "w-5 h-5",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, wo = /* @__PURE__ */ k("path", {
  "fill-rule": "evenodd",
  d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
  "clip-rule": "evenodd"
}, null, -1), So = [
  wo
];
function Oo(e, t) {
  return a(), c("svg", ko, So);
}
const xo = /* @__PURE__ */ O($o, [["render", Oo]]), Ko = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xo
}, Symbol.toStringTag, { value: "Module" })), jo = S({
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
const Co = { class: "k-multi-widget" }, To = { class: "k-multi-buttons" }, Mo = /* @__PURE__ */ k("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ k("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z" })
], -1), Po = /* @__PURE__ */ k("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ k("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" })
], -1);
function Lo(e, t, n, s, l, i) {
  const r = K("KButton"), u = K("KCard");
  return a(), z(u, { class: "k-multi" }, {
    default: C(() => [
      B(Ke, {
        name: "fade",
        tag: "div"
      }, {
        default: C(() => [
          (a(!0), c(I, null, Y(e.valueLocal, (d, o) => (a(), c("div", {
            key: `k-multi-${d}`,
            class: "k-multi-item"
          }, [
            k("div", Co, [
              N(e.$slots, "default", {
                index: o,
                value: d,
                update: (f) => e.update(o, f)
              })
            ]),
            k("div", To, [
              e.canRemove ? (a(), z(r, {
                key: 0,
                text: "",
                onClick: (f) => e.remove(o)
              }, {
                default: C(() => [
                  Mo
                ]),
                _: 2
              }, 1032, ["onClick"])) : A("", !0),
              e.canAdd ? (a(), z(r, {
                key: 1,
                text: "",
                onClick: (f) => e.add(o)
              }, {
                default: C(() => [
                  Po
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
const Ao = /* @__PURE__ */ O(jo, [["render", Lo]]), zo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ao
}, Symbol.toStringTag, { value: "Module" })), Vo = S({
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
const Bo = { class: "k-multi-widget" }, Fo = /* @__PURE__ */ k("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ k("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z" })
], -1);
function Do(e, t, n, s, l, i) {
  const r = K("KButton"), u = K("KCard");
  return a(), z(u, { class: "k-multi" }, {
    default: C(() => [
      B(Ke, {
        name: "fade",
        tag: "div"
      }, {
        default: C(() => [
          (a(!0), c(I, null, Y(e.valueLocal, (d, o) => (a(), c("div", {
            key: `k-multi-${d}`,
            class: "k-multi-item"
          }, [
            k("div", Bo, [
              N(e.$slots, "readonly", {
                index: o,
                value: d
              }, () => [
                G(D(d), 1)
              ])
            ]),
            e.readonly ? A("", !0) : (a(), z(r, {
              key: 0,
              text: "",
              onClick: (f) => e.remove(o)
            }, {
              default: C(() => [
                Fo
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
      }) : A("", !0)
    ]),
    _: 3
  });
}
const No = /* @__PURE__ */ O(Vo, [["render", Do]]), Io = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: No
}, Symbol.toStringTag, { value: "Module" })), Uo = S({
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
function Eo(e, t, n, s, l, i) {
  const r = K("KUserLink"), u = K("KUserPicker"), d = K("KMulti2");
  return a(), z(d, {
    modelValue: e.userIdsLocal,
    "onUpdate:modelValue": t[0] || (t[0] = (o) => e.userIdsLocal = o),
    readonly: e.readonly
  }, {
    readonly: C(({ value: o }) => [
      B(r, {
        user: o,
        gif: ""
      }, null, 8, ["user"])
    ]),
    add: C(({ add: o }) => [
      B(u, {
        "onUpdate:modelValue": (f) => o(f),
        users: e.users,
        groups: e.groups
      }, null, 8, ["onUpdate:modelValue", "users", "groups"])
    ]),
    _: 1
  }, 8, ["modelValue", "readonly"]);
}
const Ro = /* @__PURE__ */ O(Uo, [["render", Eo]]), Wo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ro
}, Symbol.toStringTag, { value: "Module" })), We = new be();
class qo {
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
      if (await We.acquire(n), !this.nodes[n]) {
        const s = await t.nodes.ancestors(n);
        this.nodes[n] = V(s, "data.ancestors", []);
      }
      return this.nodes[n];
    } finally {
      We.release(n);
    }
  }
}
const vt = new qo(), Ho = S({
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
        e && (this.breadcrumb = await vt.lookup(this.session, e));
      },
      immediate: !0
    }
  }
});
const Go = { class: "k-node-breadcrumb" };
function Qo(e, t, n, s, l, i) {
  return a(), c("div", Go, [
    (a(!0), c(I, null, Y(e.breadcrumb, (r, u) => (a(), c(I, {
      key: r.dataid
    }, [
      G(D(r.name) + " ", 1),
      u < e.breadcrumb.length - 1 ? (a(), c(I, { key: 0 }, [
        G(" ▶ ")
      ], 64)) : A("", !0)
    ], 64))), 128))
  ]);
}
const $t = /* @__PURE__ */ O(Ho, [["render", Qo]]), Yo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $t
}, Symbol.toStringTag, { value: "Module" })), Xo = S({
  components: { KNodeAncestor: $t },
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
      return Mt(this.config.baseUrl, {
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
        this.dataid ? this.breadcrumb = await vt.lookup(
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
const Jo = { class: "k-node-picker-field" }, Zo = ["value"];
function es(e, t, n, s, l, i) {
  const r = K("KButton"), u = K("KNodeAncestor");
  return a(), c("div", Jo, [
    k("input", {
      ref: "input",
      type: "text",
      class: "k-input",
      value: e.name,
      onFocus: t[0] || (t[0] = (...d) => e.openWindow && e.openWindow(...d))
    }, null, 40, Zo),
    B(r, {
      small: "",
      onClick: e.openWindow
    }, {
      default: C(() => [
        G(D(e.browseButtonLabel), 1)
      ]),
      _: 1
    }, 8, ["onClick"]),
    e.clearable ? (a(), z(r, {
      key: 0,
      small: "",
      onClick: e.clear
    }, {
      default: C(() => [
        G(D(e.clearButtonLabel), 1)
      ]),
      _: 1
    }, 8, ["onClick"])) : A("", !0),
    e.dataid ? (a(), z(u, {
      key: 1,
      dataid: e.dataid
    }, null, 8, ["dataid"])) : A("", !0)
  ]);
}
const ts = /* @__PURE__ */ O(Xo, [["render", es]]), ns = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ts
}, Symbol.toStringTag, { value: "Module" })), rs = S({
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
const os = { class: "k-one-moment" }, ss = { class: "k-one-moment-label" };
function is(e, t, n, s, l, i) {
  const r = K("KSpinner"), u = K("KDialog");
  return a(), z(u, { "model-value": e.loading }, {
    default: C(() => [
      k("div", os, [
        B(r, {
          height: 36,
          width: 36
        }),
        k("div", ss, D(e.label), 1)
      ])
    ]),
    _: 1
  }, 8, ["model-value"]);
}
const ls = /* @__PURE__ */ O(rs, [["render", is]]), as = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ls
}, Symbol.toStringTag, { value: "Module" })), us = S({
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
function ds(e, t, n, s, l, i) {
  return a(), c("div", null, [
    N(e.$slots, "default", { active: e.active })
  ]);
}
const cs = /* @__PURE__ */ O(us, [["render", ds]]), ps = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cs
}, Symbol.toStringTag, { value: "Module" })), fs = S({
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
const ms = { class: "text-xl" }, gs = { key: 0 }, hs = { class: "rhmuted" };
function _s(e, t, n, s, l, i) {
  return a(), c("div", ms, [
    G(D(e.title), 1),
    e.subtitle ? (a(), c("span", gs, [
      G(": "),
      k("span", hs, D(e.subtitle), 1)
    ])) : A("", !0)
  ]);
}
const bs = /* @__PURE__ */ O(fs, [["render", _s], ["__scopeId", "data-v-c72c9204"]]), ys = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bs
}, Symbol.toStringTag, { value: "Module" })), vs = S({
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
});
const $s = { class: "k-pagination" }, ks = {
  key: 1,
  class: "k-pagination-buttons"
}, ws = {
  key: 0,
  class: "k-pagination-button"
}, Ss = /* @__PURE__ */ k("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ k("path", { d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" })
], -1), Os = [
  Ss
], xs = { key: 0 }, Ks = ["onClick"], js = {
  key: 1,
  class: "k-pagination-button"
}, Cs = /* @__PURE__ */ k("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ k("path", { d: "M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" })
], -1), Ts = [
  Cs
], Ms = { key: 2 };
function Ps(e, t, n, s, l, i) {
  const r = K("KSelect");
  return a(), c("div", $s, [
    e.potentiallyMultiplePages ? (a(), z(r, {
      key: 0,
      modelValue: e.pageSize,
      "onUpdate:modelValue": t[0] || (t[0] = (u) => e.pageSize = u),
      items: e.pageSizes,
      label: "Page Size"
    }, null, 8, ["modelValue", "items"])) : A("", !0),
    e.hasPrevious || e.hasNext ? (a(), c("div", ks, [
      e.hasPrevious ? (a(), c("a", ws, Os)) : A("", !0),
      (a(!0), c(I, null, Y(e.pageRange, (u) => (a(), c(I, { key: u }, [
        u === "|" ? (a(), c("div", xs, "...")) : (a(), c("a", {
          key: 1,
          class: J(["k-pagination-button k-pagination-button-border", e.classObj(u)]),
          onClick: (d) => e.$emit("update:modelValue", u)
        }, D(u), 11, Ks))
      ], 64))), 128)),
      e.hasNext ? (a(), c("a", js, Ts)) : A("", !0)
    ])) : A("", !0),
    e.potentiallyMultiplePages ? (a(), c("div", Ms, " Displaying " + D(e.pagination.startIndex) + "-" + D(e.pagination.endIndex) + " of " + D(e.pagination.count) + " items. ", 1)) : A("", !0)
  ]);
}
const Ls = /* @__PURE__ */ O(vs, [["render", Ps]]), As = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ls
}, Symbol.toStringTag, { value: "Module" })), zs = S({
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
const Vs = { class: "k-pagination2" }, Bs = { class: "k-pagination2-buttons" }, Fs = /* @__PURE__ */ k("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ k("path", { d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" })
], -1), Ds = [
  Fs
], Ns = ["onClick"], Is = /* @__PURE__ */ k("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ k("path", { d: "M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" })
], -1), Us = [
  Is
];
function Es(e, t, n, s, l, i) {
  const r = K("KSelect");
  return a(), c("div", Vs, [
    k("div", null, [
      B(r, {
        modelValue: e.pageSize,
        "onUpdate:modelValue": t[0] || (t[0] = (u) => e.pageSize = u),
        items: e.pageSizes,
        label: "Page Size"
      }, null, 8, ["modelValue", "items"])
    ]),
    e.pageCount > 1 ? (a(), c(I, { key: 0 }, [
      k("div", Bs, [
        e.hasPrevious ? (a(), c("a", {
          key: 0,
          class: "k-pagination2-arrow-button",
          onClick: t[1] || (t[1] = (u) => e.clickedPageNumber(e.pageNumber0 - 1))
        }, Ds)) : A("", !0),
        (a(!0), c(I, null, Y(e.pageRange0, (u) => (a(), c("div", {
          key: u,
          class: J(["k-pagination2-button", e.classObj(u)]),
          onClick: (d) => e.clickedPageNumber(u)
        }, D(u + 1), 11, Ns))), 128)),
        e.hasNext ? (a(), c("a", {
          key: 1,
          class: "k-pagination2-arrow-button",
          onClick: t[2] || (t[2] = (u) => e.clickedPageNumber(e.pageNumber0 + 1))
        }, Us)) : A("", !0)
      ]),
      k("div", null, D(e.pageNumber) + " of " + D(e.pageCount) + " pages", 1)
    ], 64)) : A("", !0)
  ]);
}
const Rs = /* @__PURE__ */ O(zs, [["render", Es]]), Ws = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Rs
}, Symbol.toStringTag, { value: "Module" })), Be = S({
  mixins: [ye],
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
}), qe = () => {
  Xe((e) => ({
    fe06e366: e.color
  }));
}, He = Be.setup;
Be.setup = He ? (e, t) => (qe(), He(e, t)) : qe;
const qs = /* @__PURE__ */ k("circle", {
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), Hs = /* @__PURE__ */ k("path", {
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), Gs = [
  qs,
  Hs
];
function Qs(e, t, n, s, l, i) {
  return a(), c("svg", {
    style: ne(e.measurableStyles),
    class: "k-spinner",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, Gs, 4);
}
const kt = /* @__PURE__ */ O(Be, [["render", Qs]]), Ys = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: kt
}, Symbol.toStringTag, { value: "Module" })), Xs = S({
  components: { KSpinner: kt },
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
const Js = {
  key: 0,
  class: "centerOverlay"
};
function Zs(e, t, n, s, l, i) {
  const r = K("KSpinner");
  return e.loading ? (a(), c("div", Js, [
    B(r, {
      "max-width": e.size,
      "max-height": e.size
    }, null, 8, ["max-width", "max-height"])
  ])) : A("", !0);
}
const ei = /* @__PURE__ */ O(Xs, [["render", Zs]]), ti = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ei
}, Symbol.toStringTag, { value: "Module" })), ni = S({
  mixins: [ue],
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
});
const ri = ["id", "value", "disabled"], oi = ["for"];
function si(e, t, n, s, l, i) {
  const r = K("KSpinner"), u = K("KFormFieldWrapper");
  return a(), c("div", null, [
    B(u, {
      label: e.label,
      "success-messages": e.successMessages,
      "error-messages": e.errorMessages
    }, {
      default: C(() => [
        B(_e, {
          name: "fade",
          mode: "out-in"
        }, {
          default: C(() => [
            e.loading ? (a(), z(r, { key: 0 })) : (a(), c("div", {
              key: 1,
              class: J(["k-radiogroup", e.classObj])
            }, [
              (a(!0), c(I, null, Y(e.items, (d) => (a(), c("div", {
                key: e.getItemValue(d),
                class: "k-radiogroup-item"
              }, [
                re(k("input", {
                  id: e.getItemValue(d),
                  "onUpdate:modelValue": t[0] || (t[0] = (o) => e.localValue = o),
                  type: "radio",
                  value: e.getItemValue(d),
                  disabled: e.getItemDisabled(d)
                }, null, 8, ri), [
                  [Kt, e.localValue]
                ]),
                k("label", {
                  for: e.getItemValue(d)
                }, D(e.getItemText(d)), 9, oi)
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
const ii = /* @__PURE__ */ O(ni, [["render", si]]), li = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ii
}, Symbol.toStringTag, { value: "Module" })), ai = S({
  inject: ["ksnackbar"],
  methods: {
    click() {
    }
  }
});
function ui(e, t, n, s, l, i) {
  return a(), c("div", null, [
    k("button", {
      onClick: t[0] || (t[0] = (...r) => e.click && e.click(...r))
    }, "click")
  ]);
}
const di = /* @__PURE__ */ O(ai, [["render", ui]]), ci = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: di
}, Symbol.toStringTag, { value: "Module" })), pi = S({
  mixins: [ue],
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
});
const fi = { class: "k-select" }, mi = ["disabled"], gi = ["value", "disabled"];
function hi(e, t, n, s, l, i) {
  const r = K("KButton"), u = K("KSpinner"), d = K("KFormFieldWrapper");
  return a(), z(d, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: C(() => [
      k("div", fi, [
        re(k("select", {
          "onUpdate:modelValue": t[0] || (t[0] = (o) => e.valueLocal = o),
          class: J(e.classObj),
          disabled: e.disabledResolved
        }, [
          (a(!0), c(I, null, Y(e.items, (o) => (a(), c("option", {
            key: e.getItemValue(o),
            value: e.getItemValue(o),
            disabled: e.getItemDisabled(o)
          }, D(e.getItemText(o)), 9, gi))), 128))
        ], 10, mi), [
          [jt, e.valueLocal]
        ]),
        e.clearable ? (a(), z(r, {
          key: 0,
          onClick: t[1] || (t[1] = (o) => e.valueLocal = null),
          small: ""
        }, {
          default: C(() => [
            G("clear")
          ]),
          _: 1
        })) : A("", !0),
        B(_e, { name: "fade" }, {
          default: C(() => [
            e.loading ? (a(), z(u, {
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
const _i = /* @__PURE__ */ O(pi, [["render", hi]]), bi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _i
}, Symbol.toStringTag, { value: "Module" })), yi = S({
  props: {
    fontSize: {
      type: Number,
      default: 12
    }
  },
  computed: {
    style() {
      return {
        fontSize: Q(this.fontSize)
      };
    }
  }
});
const vi = {
  key: 0,
  class: "k-smart-ui-panel-header"
}, $i = { class: "k-smart-ui-panel-body" }, ki = {
  key: 1,
  class: "k-smart-ui-panel-footer"
};
function wi(e, t, n, s, l, i) {
  return a(), c("div", {
    class: "k-smart-ui-panel",
    style: ne(e.style)
  }, [
    e.$slots.header ? (a(), c("div", vi, [
      N(e.$slots, "header")
    ])) : A("", !0),
    k("div", $i, [
      N(e.$slots, "default")
    ]),
    e.$slots.footer ? (a(), c("div", ki, [
      N(e.$slots, "footer")
    ])) : A("", !0)
  ], 4);
}
const Si = /* @__PURE__ */ O(yi, [["render", wi]]), Oi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Si
}, Symbol.toStringTag, { value: "Module" })), xi = S({
  provide() {
    return {
      // @ts-ignore - not sure why this complains
      [Fn]: this
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
const Ki = { class: "k-snackbar" }, ji = { class: "k-snackbar-item-message" }, Ci = {
  key: 0,
  class: "k-snackbar-title"
}, Ti = {
  key: 1,
  class: "k-snackbar-text"
}, Mi = {
  key: 0,
  class: "k-snackbar-action"
}, Pi = ["onClick"];
function Li(e, t, n, s, l, i) {
  return a(), c(I, null, [
    N(e.$slots, "default"),
    k("div", Ki, [
      B(Ke, {
        name: "slide",
        tag: "div",
        mode: "out-in"
      }, {
        default: C(() => [
          (a(!0), c(I, null, Y(e.items, (r) => (a(), c("div", {
            key: r.index,
            class: J(["k-snackbar-item", e.classObj(r)])
          }, [
            k("div", ji, [
              r.title ? (a(), c("div", Ci, D(r.title), 1)) : A("", !0),
              r.message ? (a(), c("div", Ti, D(r.message), 1)) : A("", !0)
            ]),
            r.action ? (a(), c("div", Mi, [
              k("a", {
                href: "#",
                onClick: se((u) => e.action(r), ["prevent"])
              }, D(r.actionLabel), 9, Pi)
            ])) : A("", !0)
          ], 2))), 128))
        ]),
        _: 1
      })
    ])
  ], 64);
}
const Ai = /* @__PURE__ */ O(xi, [["render", Li]]), zi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ai
}, Symbol.toStringTag, { value: "Module" })), Vi = S({
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
const Bi = {
  key: 0,
  class: "j-sort-header-arrow"
}, Fi = {
  key: 1,
  class: "j-sort-header-arrow"
};
function Di(e, t, n, s, l, i) {
  return a(), c("a", {
    href: "#",
    onClick: t[0] || (t[0] = se((...r) => e.emitClick && e.emitClick(...r), ["prevent"]))
  }, [
    N(e.$slots, "default"),
    B(_e, {
      name: "fade",
      mode: "out-in"
    }, {
      default: C(() => [
        e.isActive && e.sortAsc ? (a(), c("span", Bi, "↑")) : e.isActive ? (a(), c("span", Fi, "↓")) : A("", !0)
      ]),
      _: 1
    })
  ]);
}
const Ni = /* @__PURE__ */ O(Vi, [["render", Di]]), Ii = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ni
}, Symbol.toStringTag, { value: "Module" }));
const Ui = {}, Ei = { class: "k-spacer" };
function Ri(e, t) {
  return a(), c("div", Ei);
}
const Wi = /* @__PURE__ */ O(Ui, [["render", Ri]]), qi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wi
}, Symbol.toStringTag, { value: "Module" })), Fe = S({
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
      return Q(this.height);
    },
    innerSizePx() {
      return Q(this.innerSize);
    },
    paddingPx() {
      return Q(this.padding);
    },
    switchWidthPx() {
      return Q(this.trans + this.height);
    },
    transPx() {
      return `translateX(${Q(this.trans)})`;
    }
  }
}), Ge = () => {
  Xe((e) => ({
    "2f4ab6bd": e.switchWidthPx,
    "3acd298c": e.heightPx,
    "37d7127c": e.innerSizePx,
    "13e4c99c": e.paddingPx,
    "79abc333": e.transPx
  }));
}, Qe = Fe.setup;
Fe.setup = Qe ? (e, t) => (Ge(), Qe(e, t)) : Ge;
const Hi = /* @__PURE__ */ k("span", { class: "k-switch-slider" }, null, -1), Gi = [
  Hi
];
function Qi(e, t, n, s, l, i) {
  return a(), c("div", {
    class: J(["k-switch", e.classObj]),
    onClick: t[0] || (t[0] = (...r) => e.toggle && e.toggle(...r))
  }, Gi, 2);
}
const Yi = /* @__PURE__ */ O(Fe, [["render", Qi]]), Xi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Yi
}, Symbol.toStringTag, { value: "Module" })), Ji = S({
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
function Zi(e, t, n, s, l, i) {
  const r = K("KLinearProgressIndicator");
  return a(), c("div", null, [
    e.loading ? (a(), z(r, { key: 0 })) : A("", !0),
    k("table", {
      class: J(["k-table", e.classObj])
    }, [
      N(e.$slots, "default")
    ], 2)
  ]);
}
const el = /* @__PURE__ */ O(Ji, [["render", Zi]]), tl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: el
}, Symbol.toStringTag, { value: "Module" })), nl = S({
  mixins: [ue],
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
const rl = ["rows"];
function ol(e, t, n, s, l, i) {
  const r = K("KFormFieldWrapper");
  return a(), z(r, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: C(() => [
      re(k("textarea", ae({
        "onUpdate:modelValue": t[0] || (t[0] = (u) => e.valueLocal = u)
      }, e.$attrs, {
        spellcheck: "false",
        class: [e.classObj, "k-textarea"],
        rows: e.rows,
        onKeydown: t[1] || (t[1] = ge(se((...u) => e.tabber && e.tabber(...u), ["prevent"]), ["tab"]))
      }), null, 16, rl), [
        [xe, e.valueLocal]
      ])
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const sl = /* @__PURE__ */ O(nl, [["render", ol]]), il = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: sl
}, Symbol.toStringTag, { value: "Module" })), ll = S({
  mixins: [ue],
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
const al = ["placeholder"];
function ul(e, t, n, s, l, i) {
  const r = K("KFormFieldWrapper");
  return a(), z(r, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: C(() => [
      re(k("input", {
        "onUpdate:modelValue": t[0] || (t[0] = (u) => e.value = u),
        class: J(["k-input-text-field", e.classObj]),
        placeholder: e.placeholder
      }, null, 10, al), [
        [xe, e.value]
      ])
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const dl = /* @__PURE__ */ O(ll, [["render", ul]]), cl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dl
}, Symbol.toStringTag, { value: "Module" })), pl = S({
  setup() {
    return {
      config: ee(ce),
      session: ee(ie)
    };
  },
  mixins: [ye],
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
}), fl = ["src"];
function ml(e, t, n, s, l, i) {
  return e.url ? (a(), c("img", {
    key: 0,
    src: e.url,
    style: ne([e.measurableStyles])
  }, null, 12, fl)) : A("", !0);
}
const gl = /* @__PURE__ */ O(pl, [["render", ml]]), hl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: gl
}, Symbol.toStringTag, { value: "Module" })), fe = new be();
function _l(e) {
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
class bl {
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
class yl {
  users;
  userLookupQueue;
  constructor() {
    this.users = {}, this.userLookupQueue = new bl();
  }
  registerUsers(t) {
    t.forEach((n) => this.users[n.userid] = n);
  }
  async lookupLegacy(t, n) {
    if (n)
      try {
        if (await fe.acquire(n), this.users[n])
          return this.users[n];
        {
          const s = await t.members.member(n), l = _l(s.data);
          return this.users[n] = l, l;
        }
      } finally {
        fe.release(n);
      }
    else
      return null;
  }
  async lookupRPC(t, n) {
    return n ? (await fe.acquire(n), this.users[n] ? (fe.release(n), this.users[n]) : new Promise((s) => {
      const l = (i) => {
        this.users[n] = i, s(i), fe.release(n);
      };
      this.userLookupQueue.queue(t, l, n);
    })) : null;
  }
  async lookup(t, n, s = !1) {
    return s ? this.lookupLegacy(t, n) : this.lookupRPC(t, n);
  }
}
const wt = new yl(), vl = S({
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
        this.isInteger(e) ? this.userRecLocal = await wt.lookup(
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
const $l = {
  key: 0,
  class: "k-user-link"
};
function kl(e, t, n, s, l, i) {
  const r = K("KUserGIF");
  return e.userRecLocal ? (a(), c("span", $l, [
    e.gif ? (a(), z(r, {
      key: 0,
      "user-rec": e.userRecLocal
    }, null, 8, ["user-rec"])) : A("", !0),
    G("   "),
    k("a", {
      href: "#",
      onClick: t[0] || (t[0] = se((...u) => e.click && e.click(...u), ["prevent"]))
    }, D(e.displayName), 1)
  ])) : A("", !0);
}
const wl = /* @__PURE__ */ O(vl, [["render", kl]]), Sl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: wl
}, Symbol.toStringTag, { value: "Module" })), Ol = S({
  mixins: [ue],
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
          const t = await wt.lookup(
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
const xl = { class: "flex items-center gap-1" };
function Kl(e, t, n, s, l, i) {
  const r = K("KUserGIF"), u = K("KAutocomplete"), d = K("KUserLink"), o = K("KFormFieldWrapper");
  return a(), z(o, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: C(() => [
      e.editable ? (a(), z(u, {
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
        prepend: C(({ item: f }) => [
          f ? (a(), z(r, {
            key: 0,
            type: f.type
          }, null, 8, ["type"])) : (a(), z(r, {
            key: 1,
            type: e.USER
          }, null, 8, ["type"]))
        ]),
        item: C(({ item: f }) => [
          k("div", xl, [
            B(r, {
              type: f.type
            }, null, 8, ["type"]),
            G(" " + D(f.text), 1)
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "search-input", "placeholder", "width", "loading", "items", "return-object"])) : (a(), z(d, {
        key: 1,
        user: e.modelValue,
        gif: ""
      }, null, 8, ["user"]))
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const St = /* @__PURE__ */ O(Ol, [["render", Kl]]), jl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: St
}, Symbol.toStringTag, { value: "Module" })), Cl = S({
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
const Tl = { class: "k-tabs" }, Ml = { class: "k-tabs-nav" }, Pl = ["href", "onClick"], Ll = { class: "k-tabs-content" };
function Al(e, t, n, s, l, i) {
  return a(), c("div", Tl, [
    k("div", Ml, [
      (a(!0), c(I, null, Y(e.tabs, (r) => (a(), c("div", {
        key: r.name,
        class: J(e.classObj(r))
      }, [
        k("a", {
          href: `#${r.name}`,
          onClick: (u) => e.selectTab(r.name)
        }, D(r.title), 9, Pl)
      ], 2))), 128))
    ]),
    k("div", Ll, [
      N(e.$slots, "default")
    ])
  ]);
}
const zl = /* @__PURE__ */ O(Cl, [["render", Al]]), Vl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zl
}, Symbol.toStringTag, { value: "Module" })), Bl = S({
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
}), Fl = { key: 0 };
function Dl(e, t, n, s, l, i) {
  return e.isSelected ? (a(), c("div", Fl, [
    N(e.$slots, "default")
  ])) : A("", !0);
}
const Nl = /* @__PURE__ */ O(Bl, [["render", Dl]]), Il = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Nl
}, Symbol.toStringTag, { value: "Module" })), Ul = S({
  extends: St,
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
          ), n = V(t, "data.data.first_name"), s = V(t, "data.data.last_name"), l = V(t, "data.data.name"), i = `${n} ${s} (${l})`;
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
}), El = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ul
}, Symbol.toStringTag, { value: "Module" }));
class Rl {
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
      return n ? Ee(n, this.jsShortDateFormat, {
        timezone: s
      }) : null;
    } catch {
      return null;
    }
  }
  formatDateTime(t) {
    try {
      const [n, s] = this.convertToDate(t);
      return n ? Ee(n, this.jsLongDateFormat, {
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
function Wl() {
  window.csui.require(
    [
      "rhcore/router/generic.model.factory"
    ],
    function(e) {
      window._rhcore_smartui_view_context.getModel(e).set({
        id: "greetingsId",
        params: { id: "abcdddd" },
        query: { a: "1 2 3" }
      });
    }
  );
}
function ql({ dataId: e, selectedTab: t = void 0, selectedProperty: n = void 0 }) {
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
const sa = () => ({
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
  openDataId: ql,
  test: Wl
}), ia = (e, t) => {
  const n = t.sortKey, l = t.sortAsc ? 1 : -1;
  return [...e].sort((i, r) => {
    if (n) {
      const u = String(V(i, n, "") ?? ""), d = String(V(r, n, "") ?? "");
      return l * u.toLowerCase().localeCompare(d.toLowerCase());
    } else
      return 0;
  });
}, Hl = /* @__PURE__ */ Object.assign({
  "./components/Card/KCard.vue": zt,
  "./components/Card/KCardActions.vue": Nt,
  "./components/Card/KCardText.vue": Wt,
  "./components/Card/KCardTitle.vue": Yt,
  "./components/Icons/KMenuDownIcon.vue": rn,
  "./components/KAdminLink.vue": cn,
  "./components/KAlert.vue": Sn,
  "./components/KApp.vue": Cn,
  "./components/KAutocomplete.vue": Bn,
  "./components/KBrowseLink.vue": Zn,
  "./components/KButton.vue": or,
  "./components/KConfirm.vue": ar,
  "./components/KDateTimePicker.vue": mr,
  "./components/KDialog.vue": br,
  "./components/KDivider.vue": kr,
  "./components/KDot.vue": xr,
  "./components/KFormFieldWrapper.vue": Mr,
  "./components/KFunctionMenu.vue": Dr,
  "./components/KFunctionMenuModern.vue": Zr,
  "./components/KFunctionMenuSmartUI.vue": ro,
  "./components/KLinearProgressIndicator.vue": ao,
  "./components/KList/KList.vue": mo,
  "./components/KList/KListItem.vue": Qr,
  "./components/KList/KListItemSubtitle.vue": Hr,
  "./components/KList/KListItemTitle.vue": Er,
  "./components/KMenu/KMenu.vue": vo,
  "./components/KMenu/KRightCaret.vue": Ko,
  "./components/KMulti.vue": zo,
  "./components/KMulti2.vue": Io,
  "./components/KMultiUserPicker.vue": Wo,
  "./components/KNodeAncestor.vue": Yo,
  "./components/KNodePickerField.vue": ns,
  "./components/KOneMoment.vue": as,
  "./components/KPageDropZone.vue": ps,
  "./components/KPageTitle.vue": ys,
  "./components/KPagination.vue": As,
  "./components/KPagination2.vue": Ws,
  "./components/KPleaseWait.vue": ti,
  "./components/KRadioGroup.vue": li,
  "./components/KScratch.vue": ci,
  "./components/KSelect.vue": bi,
  "./components/KSmartUIPanel.vue": Oi,
  "./components/KSnackbar.vue": zi,
  "./components/KSortHeader.vue": Ii,
  "./components/KSpacer.vue": qi,
  "./components/KSpinner.vue": Ys,
  "./components/KSwitch.vue": Xi,
  "./components/KTable.vue": tl,
  "./components/KTextArea.vue": il,
  "./components/KTextField.vue": cl,
  "./components/KUserGIF.vue": hl,
  "./components/KUserLink.vue": Sl,
  "./components/KUserPicker.vue": jl,
  "./components/KUserPickerLegacy.vue": El,
  "./components/Tabs/KTabItem.vue": Il,
  "./components/Tabs/KTabs.vue": Vl
});
let Se;
const la = {
  install(e, t) {
    Object.entries(Hl).forEach(
      ([s, l]) => {
        const i = s?.split("/")?.pop()?.replace(/\.\w+$/, "");
        e.component(i, l.default);
      }
    ), Se = new Lt(t);
    const n = {
      userId: t.userId,
      img: t.img,
      baseUrl: t.baseUrl,
      jsLongDateFormat: t.datelong,
      jsShortDateFormat: t.dateshort
    };
    e.provide(ie, Se), e.provide(ce, n), e.provide(
      Dn,
      new Rl(t.datelong, t.dateshort)
    );
  }
}, Gl = () => Se;
export {
  dn as KAdminLink,
  wn as KAlert,
  jn as KApp,
  Vn as KAutocomplete,
  Jn as KBrowseLink,
  rr as KButton,
  At as KCard,
  Dt as KCardActions,
  Rt as KCardText,
  Qt as KCardTitle,
  lr as KConfirm,
  fr as KDateTimePicker,
  _r as KDialog,
  ze as KDivider,
  Or as KDot,
  Tr as KFormFieldWrapper,
  Fr as KFunctionMenu,
  Jr as KFunctionMenuModern,
  no as KFunctionMenuSmartUI,
  lo as KLinearProgressIndicator,
  fo as KList,
  Ve as KListItem,
  yt as KListItemSubtitle,
  bt as KListItemTitle,
  yo as KMenu,
  Ce as KMenuDownIcon,
  Ao as KMulti,
  No as KMulti2,
  Ro as KMultiUserPicker,
  $t as KNodeAncestor,
  ts as KNodePickerField,
  ls as KOneMoment,
  cs as KPageDropZone,
  bs as KPageTitle,
  Ls as KPagination,
  Rs as KPagination2,
  ei as KPleaseWait,
  ii as KRadioGroup,
  xo as KRightCaret,
  di as KScratch,
  _i as KSelect,
  Si as KSmartUIPanel,
  Ai as KSnackbar,
  Ni as KSortHeader,
  Wi as KSpacer,
  kt as KSpinner,
  Yi as KSwitch,
  Nl as KTabItem,
  el as KTable,
  zl as KTabs,
  sl as KTextArea,
  dl as KTextField,
  gl as KUserGIF,
  wl as KUserLink,
  St as KUserPicker,
  Ul as KUserPickerLegacy,
  ce as configKey,
  Nn as confirmDialogKey,
  Dn as dateTimeFormatterKey,
  la as default,
  ia as generalSort,
  ee as injectStrict,
  Rn as nodeLookup,
  ie as sessionKey,
  Fn as snackbarKey,
  Gl as useSession,
  sa as useSmartUI,
  wt as userLookup
};
