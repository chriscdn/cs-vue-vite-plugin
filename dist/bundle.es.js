import { defineComponent as _, h as Nt, openBlock as u, createElementBlock as p, renderSlot as R, inject as Ve, Fragment as V, createElementVNode as h, resolveComponent as g, createBlock as P, Transition as oe, withCtx as v, normalizeStyle as G, createVNode as C, createTextVNode as L, createCommentVNode as S, resolveDirective as lt, withDirectives as z, normalizeClass as M, withKeys as se, withModifiers as x, vModelText as Fe, renderList as A, toDisplayString as T, mergeProps as ut, vModelDynamic as Kt, Teleport as Dt, setBlockTracking as xe, TransitionGroup as Ee, vModelRadio as Bt, vModelSelect as It, useCssVars as ct } from "vue";
import { directive as dt } from "vue3-click-away";
import $ from "lodash.get";
import Le from "@chriscdn/promise-semaphore";
import { format as ze } from "date-fns";
import { disableBodyScroll as Ut, enableBodyScroll as xt } from "body-scroll-lock";
import zt from "build-url";
import Wt from "js-cookie";
const qt = {
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
      return !this.disabled && Boolean(this.$attrs.click || this.link || this.to || this.href);
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
}, j = (e, t = "px") => {
  if (!(e == null || e === ""))
    return isNaN(+e) ? String(e) : `${Number(e)}${t}`;
}, he = _({
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
      const e = {}, t = j(this.height), s = j(this.minHeight), r = j(this.minWidth), o = j(this.maxHeight), i = j(this.maxWidth), n = j(this.width);
      return t && (e.height = t), s && (e.minHeight = s), r && (e.minWidth = r), o && (e.maxHeight = o), i && (e.maxWidth = i), n && (e.width = n), e;
    }
  }
}), Ht = _({
  mixins: [he, qt],
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
      return Nt(
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
const Gt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ht
}, Symbol.toStringTag, { value: "Module" })), Jt = _({});
const y = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [r, o] of t)
    s[r] = o;
  return s;
}, Qt = { class: "k-card-actions" };
function Xt(e, t, s, r, o, i) {
  return u(), p("div", Qt, [
    R(e.$slots, "default")
  ]);
}
const Zt = /* @__PURE__ */ y(Jt, [["render", Xt]]), Yt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zt
}, Symbol.toStringTag, { value: "Module" })), es = _({});
const ts = { class: "k-card-text" };
function ss(e, t, s, r, o, i) {
  return u(), p("div", ts, [
    R(e.$slots, "default")
  ]);
}
const rs = /* @__PURE__ */ y(es, [["render", ss]]), os = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: rs
}, Symbol.toStringTag, { value: "Module" })), ns = _({});
const is = { class: "k-card-title" };
function as(e, t, s, r, o, i) {
  return u(), p("div", is, [
    R(e.$slots, "default")
  ]);
}
const ls = /* @__PURE__ */ y(ns, [["render", as]]), us = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ls
}, Symbol.toStringTag, { value: "Module" })), cs = _({
  setup() {
    return { config: Ve("config", {}) };
  }
}), ds = /* @__PURE__ */ h("hr", null, null, -1), ps = ["href"];
function ms(e, t, s, r, o, i) {
  return u(), p(V, null, [
    ds,
    h("a", {
      href: `${e.config.baseURL}?func=admin.index`
    }, "Admin Home", 8, ps)
  ], 64);
}
const hs = /* @__PURE__ */ y(cs, [["render", ms]]), fs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: hs
}, Symbol.toStringTag, { value: "Module" })), _s = _({
  props: {
    color: {
      type: String,
      default: null
    }
  },
  computed: {
    resolvedColor() {
      return this.color;
    },
    colorableTextStyle() {
      return {
        color: this.resolvedColor
      };
    },
    colorableBackgroundStyle() {
      return {
        backgroundColor: this.resolvedColor
      };
    }
  }
}), ys = _({
  mixins: [_s],
  props: {
    visible: {
      type: Boolean,
      default: !0
    }
  },
  data() {
    return {
      visibleLocal: !0
    };
  },
  watch: {
    visible: {
      handler(e) {
        this.visibleLocal = e;
      },
      immediate: !0
    }
  },
  methods: {
    dismiss() {
      this.visibleLocal = !1;
    }
  }
}), bs = { class: "flex-grow" };
function gs(e, t, s, r, o, i) {
  const n = g("KIcon");
  return u(), P(oe, { name: "fade" }, {
    default: v(() => [
      e.visibleLocal ? (u(), p("div", {
        key: 0,
        class: "flex items-center rounded text-main-bright p-2",
        style: G([e.colorableBackgroundStyle])
      }, [
        h("div", bs, [
          R(e.$slots, "default")
        ]),
        h("button", {
          class: "flex-grow-0",
          onClick: t[0] || (t[0] = (...a) => e.dismiss && e.dismiss(...a))
        }, [
          C(n, { class: "text-main-bright" }, {
            default: v(() => [
              L(" icon-x ")
            ]),
            _: 1
          })
        ])
      ], 4)) : S("", !0)
    ]),
    _: 3
  });
}
const vs = /* @__PURE__ */ y(ys, [["render", gs]]), Ss = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vs
}, Symbol.toStringTag, { value: "Module" }));
const ws = {}, $s = { class: "k-app" };
function ks(e, t) {
  const s = g("KSnackbar"), r = g("KConfirm");
  return u(), p("div", $s, [
    C(r, null, {
      default: v(() => [
        C(s, null, {
          default: v(() => [
            R(e.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    })
  ]);
}
const Ts = /* @__PURE__ */ y(ws, [["render", ks]]), Os = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ts
}, Symbol.toStringTag, { value: "Module" })), Cs = _({
  directives: {
    ClickAway: dt
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
        width: j(this.width)
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
        e ? this.returnObject ? this.$emit("update:modelValue", e) : this.$emit("update:modelValue", $(e, this.itemValue, e)) : this.$emit("update:modelValue", null);
      },
      get() {
        return this.isObject(this.modelValue) ? this.modelValue : this.items.find(
          (e) => $(e, this.itemValue, e) == this.modelValue
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
        this.isObject(this.localValue) ? $(this.localValue, this.itemText, "") : this.localValue
      )));
    },
    value: {
      handler(e) {
        this.inputText = $(this.localValue, this.itemText, e);
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
      this.combobox ? t && (this.localValue = t) : (this.localValue = t, this.inputText = $(
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
const Ps = { class: "k-autocomplete-input" }, Rs = ["placeholder", "readonly"], Vs = {
  key: 0,
  class: "k-autocomplete-items"
}, Fs = ["onClick"];
function Es(e, t, s, r, o, i) {
  const n = lt("click-away");
  return z((u(), p("div", {
    class: "k-autocomplete",
    style: G([e.style])
  }, [
    R(e.$slots, "prepend", { item: e.localValue }),
    h("div", Ps, [
      z(h("input", {
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = (a) => e.inputText = a),
        class: M(["k-input", { invalidSelection: !e.isValidSelection }]),
        type: "search",
        autocomplete: "off",
        placeholder: e.placeholderText,
        readonly: !e.editable,
        onSearch: t[1] || (t[1] = (...a) => e.clearInput && e.clearInput(...a)),
        onKeydown: [
          t[2] || (t[2] = se(x((a) => e.currentFocus = Math.max(-1, e.currentFocus - 1), ["prevent"]), ["arrow-up"])),
          t[3] || (t[3] = se(x((a) => e.currentFocus = Math.min(e.items.length - 1, e.currentFocus + 1), ["prevent"]), ["arrow-down"])),
          t[4] || (t[4] = se(x((a) => e.select(e.currentFocus), ["prevent"]), ["enter"])),
          t[6] || (t[6] = se((...a) => e.setBlur && e.setBlur(...a), ["tab"]))
        ],
        onFocus: t[5] || (t[5] = (...a) => e.setFocus && e.setFocus(...a)),
        onKeyup: t[7] || (t[7] = (...a) => e.keyup && e.keyup(...a))
      }, null, 42, Rs), [
        [Fe, e.inputText]
      ]),
      e.focus && e.items.length && e.inputText ? (u(), p("div", Vs, [
        (u(!0), p(V, null, A(e.itemsFiltered, (a, d) => (u(), p("div", {
          key: d,
          class: M(["k-autocomplete-item", { "k-autocomplete-active": e.currentFocus == d }]),
          onClick: (c) => e.select(d)
        }, [
          R(e.$slots, "item", { item: a }, () => [
            L(T(a), 1)
          ])
        ], 10, Fs))), 128))
      ])) : S("", !0)
    ])
  ], 4)), [
    [n, e.setBlur]
  ]);
}
const Ls = /* @__PURE__ */ y(Cs, [["render", Es]]), js = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ls
}, Symbol.toStringTag, { value: "Module" })), We = new Le();
class Ms {
  constructor() {
    this.nodes = {};
  }
  // registerUsers(items) {
  //   items.forEach((user) => (this.users[user.value] = user))
  // }
  async lookup(t, s) {
    try {
      if (await We.acquire(s), this.nodes[s] == null) {
        const r = await t.get(`/api/v1/rh/nodes/${s}/lite/`);
        this.nodes[s] = r.data;
      }
      return this.nodes[s];
    } finally {
      We.release(s);
    }
  }
}
const As = new Ms(), Ns = _({
  setup() {
    return { session: Ve("session", {}) };
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
        e && (this.nodeRecLocal = await As.lookup(this.session, e));
      },
      immediate: !0
    }
  }
}), Ks = { key: 0 }, Ds = ["src"], Bs = ["href"], Is = ["innerHTML"];
function Us(e, t, s, r, o, i) {
  const n = g("KFunctionMenu");
  return e.nodeRecResolved ? (u(), p("span", Ks, [
    e.image ? (u(), p("img", {
      key: 0,
      src: e.nodeRecResolved.gif
    }, null, 8, Ds)) : S("", !0),
    L(" "),
    h("a", {
      href: e.nodeRecResolved.url
    }, T(e.nodeRecResolved.name), 9, Bs),
    e.clickable ? (u(), P(n, {
      key: 1,
      dataid: e.nodeRecResolved.dataid
    }, null, 8, ["dataid"])) : S("", !0),
    h("span", {
      innerHTML: e.nodeRecResolved.modifiedImageCallback
    }, null, 8, Is)
  ])) : S("", !0);
}
const xs = /* @__PURE__ */ y(Ns, [["render", Us]]), zs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xs
}, Symbol.toStringTag, { value: "Module" })), Ws = _({
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
    // icon: {
    //     type: Boolean,
    //     default: false,
    // },
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
const qs = ["disabled"];
function Hs(e, t, s, r, o, i) {
  return u(), p("button", ut({
    class: ["k-button", e.classObj],
    disabled: e.disabled,
    type: "button"
  }, e.$attrs, {
    onClick: t[0] || (t[0] = (n) => e.$emit("click"))
  }), [
    R(e.$slots, "default")
  ], 16, qs);
}
const Gs = /* @__PURE__ */ y(Ws, [["render", Hs]]), Js = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Gs
}, Symbol.toStringTag, { value: "Module" }));
function W(e, t) {
  const s = Ve(e, t);
  if (!s)
    throw new Error(`Could not resolve ${e.description}`);
  return s;
}
const Z = Symbol("session"), fe = Symbol("config"), Qs = Symbol("snackbar"), Xs = Symbol("confirmDialogKey"), Zs = _({
  provide() {
    return {
      // @ts-ignore - not sure why this complains
      [Xs]: this
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
      message: s
    }) {
      return this.confirm({ yesLabel: e, title: t, message: s });
    },
    confirm({
      noLabel: e = "Cancel",
      yesLabel: t = "OK",
      title: s,
      message: r
    }) {
      return this.noLabel = e, this.yesLabel = t, this.title = s, this.message = r, new Promise((o) => {
        this.resolve = o, this.dialog = !0;
      });
    }
  }
});
function Ys(e, t, s, r, o, i) {
  const n = g("KCardTitle"), a = g("KCardText"), d = g("KSpacer"), c = g("KButton"), m = g("KCardActions"), b = g("KCard"), F = g("KDialog");
  return u(), p(V, null, [
    R(e.$slots, "default"),
    C(F, {
      modelValue: e.dialog,
      "onUpdate:modelValue": t[2] || (t[2] = (O) => e.dialog = O),
      "max-width": "30vw",
      "min-width": "20vw"
    }, {
      default: v(() => [
        C(b, null, {
          default: v(() => [
            e.title ? (u(), P(n, { key: 0 }, {
              default: v(() => [
                L(T(e.title), 1)
              ]),
              _: 1
            })) : S("", !0),
            e.message ? (u(), P(a, { key: 1 }, {
              default: v(() => [
                L(T(e.message), 1)
              ]),
              _: 1
            })) : S("", !0),
            C(m, null, {
              default: v(() => [
                C(d),
                e.noLabel ? (u(), P(c, {
                  key: 0,
                  small: "",
                  onClick: t[0] || (t[0] = (O) => e.dismiss(!1))
                }, {
                  default: v(() => [
                    L(T(e.noLabel), 1)
                  ]),
                  _: 1
                })) : S("", !0),
                e.yesLabel ? (u(), P(c, {
                  key: 1,
                  small: "",
                  onClick: t[1] || (t[1] = (O) => e.dismiss(!0))
                }, {
                  default: v(() => [
                    L(T(e.yesLabel), 1)
                  ]),
                  _: 1
                })) : S("", !0)
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
const er = /* @__PURE__ */ y(Zs, [["render", Ys]]), tr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: er
}, Symbol.toStringTag, { value: "Module" })), sr = _({
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
      this.localModelValue = new Date();
    },
    formatForDatePicker(e) {
      const t = this.parse(e);
      return t ? this.time ? ze(t, "yyyy-MM-dd'T'HH:mm:ss") : ze(t, "yyyy-MM-dd") : null;
    }
  }
});
const rr = { class: "k-date-time-picker" }, or = ["type", "readonly"];
function nr(e, t, s, r, o, i) {
  const n = g("KButton");
  return u(), p("div", rr, [
    z(h("input", {
      "onUpdate:modelValue": t[0] || (t[0] = (a) => e.localModelValue = a),
      class: "k-input",
      type: e.type,
      readonly: !e.editable
    }, null, 8, or), [
      [Kt, e.localModelValue]
    ]),
    e.editable ? (u(), p(V, { key: 0 }, [
      C(n, {
        small: "",
        onClick: e.setToNow
      }, {
        default: v(() => [
          L(" Now ")
        ]),
        _: 1
      }, 8, ["onClick"]),
      C(n, {
        small: "",
        onClick: t[1] || (t[1] = (a) => e.$emit("update:modelValue", null))
      }, {
        default: v(() => [
          L(" Clear ")
        ]),
        _: 1
      })
    ], 64)) : S("", !0)
  ]);
}
const ir = /* @__PURE__ */ y(sr, [["render", nr]]), ar = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ir
}, Symbol.toStringTag, { value: "Module" })), lr = _({
  directives: {
    ClickAway: dt
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
      this.$emit("update:modelValue", e), e ? (await this.$nextTick(), Ut(this.$refs.content)) : xt(this.$refs.content);
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
function ur(e, t, s, r, o, i) {
  const n = lt("click-away");
  return u(), p(V, null, [
    R(e.$slots, "activator", { on: e.on }),
    e.mounted ? (u(), P(Dt, {
      key: 0,
      to: ".k-app"
    }, [
      C(oe, { name: "fade" }, {
        default: v(() => [
          e.dialog ? (u(), p("div", {
            key: 0,
            class: "k-dialog",
            style: G([e.style])
          }, [
            z((u(), p("div", {
              ref: "content",
              class: M(["k-dialog-content", e.classObj]),
              style: G([e.measurableStyles])
            }, [
              R(e.$slots, "default", { on: e.on })
            ], 6)), [
              [n, e.clickAway]
            ])
          ], 4)) : S("", !0)
        ]),
        _: 3
      })
    ])) : S("", !0)
  ], 64);
}
const cr = /* @__PURE__ */ y(lr, [["render", ur]]), dr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cr
}, Symbol.toStringTag, { value: "Module" })), pr = _({
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
      const e = j(this.size);
      return this.outline ? {
        borderStyle: "solid",
        borderWidth: j(this.outlineWidth),
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
function mr(e, t, s, r, o, i) {
  return u(), p("div", {
    class: "k-dot",
    style: G([e.style])
  }, [
    R(e.$slots, "default")
  ], 4);
}
const hr = /* @__PURE__ */ y(pr, [["render", mr]]), fr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: hr
}, Symbol.toStringTag, { value: "Module" })), J = _({
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
      return Boolean(this.successMessages.length);
    },
    hasError() {
      return Boolean(this.errorMessages.length);
    },
    classObj() {
      return {
        "k-input": !0,
        "k-input--success": this.hasSuccess && !this.hasError,
        "k-input--error": this.hasError
      };
    }
  }
}), _r = {
  mixins: [J]
};
const yr = {
  key: 0,
  class: "k-form-field-label"
};
function br(e, t, s, r, o, i) {
  return u(), p("div", null, [
    e.label ? (u(), p("div", yr, T(e.label), 1)) : S("", !0),
    R(e.$slots, "default"),
    (u(!0), p(V, null, A(e.successMessages, (n, a) => (u(), p("div", {
      key: a,
      class: "k-formfield--success"
    }, T(n), 1))), 128)),
    (u(!0), p(V, null, A(e.errorMessages, (n, a) => (u(), p("div", {
      key: a,
      class: "k-formfield--error"
    }, T(n), 1))), 128))
  ]);
}
const gr = /* @__PURE__ */ y(_r, [["render", br]]), vr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: gr,
  mixin: J
}, Symbol.toStringTag, { value: "Module" })), Sr = _({
  setup() {
    return { config: W(fe) };
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
      return Boolean(window.functionMenuExpansionStatus);
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
}), wr = { key: 0 }, $r = ["id"], kr = ["src"], Tr = ["id", "src"];
function Or(e, t, s, r, o, i) {
  return e.dataid ? (u(), p("span", wr, [
    h("a", {
      id: e.aid,
      href: "#",
      class: "functionMenuHotspot",
      onClick: t[2] || (t[2] = x((...n) => e.onclick && e.onclick(...n), ["prevent"]))
    }, [
      e.isModernFunctionMenu ? (u(), p("img", {
        key: 0,
        src: `${e.config.img}spacer.gif`,
        alt: "Functions"
      }, null, 8, kr)) : (u(), p("img", {
        key: 1,
        id: e.xid,
        src: e.image,
        border: "0",
        alt: "Functions",
        title: "Functions",
        onMouseover: t[0] || (t[0] = (...n) => e.onmouseover && e.onmouseover(...n)),
        onMouseout: t[1] || (t[1] = (...n) => e.onmouseout && e.onmouseout(...n))
      }, null, 40, Tr))
    ], 8, $r),
    t[3] || (xe(-1), t[3] = h("div", {
      id: e.zid,
      ref: "functionMenuDiv",
      class: "functionMenuDiv"
    }, null, 8, ["id"]), xe(1), t[3])
  ])) : S("", !0);
}
const Cr = /* @__PURE__ */ y(Sr, [["render", Or]]), Pr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Cr
}, Symbol.toStringTag, { value: "Module" })), Rr = _({});
const Vr = { class: "k-progress-line" };
function Fr(e, t, s, r, o, i) {
  return u(), p("div", Vr);
}
const Er = /* @__PURE__ */ y(Rr, [["render", Fr]]), Lr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Er
}, Symbol.toStringTag, { value: "Module" })), jr = _({
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
      const s = [...this.valueLocal];
      s[e] = t, this.valueLocal = s;
    }
  }
});
const Mr = { class: "k-multi-widget" }, Ar = { class: "k-multi-buttons" }, Nr = /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ h("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z" })
], -1), Kr = /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ h("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" })
], -1);
function Dr(e, t, s, r, o, i) {
  const n = g("KButton"), a = g("KCard");
  return u(), P(a, { class: "k-multi" }, {
    default: v(() => [
      C(Ee, {
        name: "fade",
        tag: "div"
      }, {
        default: v(() => [
          (u(!0), p(V, null, A(e.valueLocal, (d, c) => (u(), p("div", {
            key: `k-multi-${d}`,
            class: "k-multi-item"
          }, [
            h("div", Mr, [
              R(e.$slots, "default", {
                index: c,
                value: d,
                update: (m) => e.update(c, m)
              })
            ]),
            h("div", Ar, [
              e.canRemove ? (u(), P(n, {
                key: 0,
                text: "",
                onClick: (m) => e.remove(c)
              }, {
                default: v(() => [
                  Nr
                ]),
                _: 2
              }, 1032, ["onClick"])) : S("", !0),
              e.canAdd ? (u(), P(n, {
                key: 1,
                text: "",
                onClick: (m) => e.add(c)
              }, {
                default: v(() => [
                  Kr
                ]),
                _: 2
              }, 1032, ["onClick"])) : S("", !0)
            ])
          ]))), 128))
        ]),
        _: 3
      })
    ]),
    _: 3
  });
}
const Br = /* @__PURE__ */ y(jr, [["render", Dr]]), Ir = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Br
}, Symbol.toStringTag, { value: "Module" })), Ur = _({
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
        (t, s, r) => r.indexOf(t) === s
      ));
    },
    remove(e) {
      const t = [...this.valueLocal];
      t.splice(e, 1), this.valueLocal = t;
    }
  }
});
const xr = { class: "k-multi-widget" }, zr = { class: "k-multi-buttons" }, Wr = /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ h("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z" })
], -1);
function qr(e, t, s, r, o, i) {
  const n = g("KButton"), a = g("KCard");
  return u(), P(a, { class: "k-multi" }, {
    default: v(() => [
      C(Ee, {
        name: "fade",
        tag: "div"
      }, {
        default: v(() => [
          (u(!0), p(V, null, A(e.valueLocal, (d, c) => (u(), p("div", {
            key: `k-multi-${d}`,
            class: "k-multi-item"
          }, [
            h("div", xr, [
              R(e.$slots, "readonly", {
                index: c,
                value: d
              }, () => [
                L(T(d), 1)
              ])
            ]),
            h("div", zr, [
              C(n, {
                text: "",
                onClick: (m) => e.remove(c)
              }, {
                default: v(() => [
                  Wr
                ]),
                _: 2
              }, 1032, ["onClick"])
            ])
          ]))), 128))
        ]),
        _: 3
      }),
      e.canAdd ? R(e.$slots, "add", {
        key: 0,
        add: e.add
      }) : S("", !0)
    ]),
    _: 3
  });
}
const Hr = /* @__PURE__ */ y(Ur, [["render", qr]]), Gr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Hr
}, Symbol.toStringTag, { value: "Module" })), Jr = _({
  setup() {
  },
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
function Qr(e, t, s, r, o, i) {
  const n = g("KUserLink"), a = g("KUserPicker"), d = g("KMulti2");
  return u(), P(d, {
    modelValue: e.userIdsLocal,
    "onUpdate:modelValue": t[0] || (t[0] = (c) => e.userIdsLocal = c)
  }, {
    readonly: v(({ value: c }) => [
      C(n, {
        user: c,
        gif: ""
      }, null, 8, ["user"])
    ]),
    add: v(({ add: c }) => [
      C(a, {
        "onUpdate:modelValue": (m) => c(m),
        users: e.users,
        groups: e.groups
      }, null, 8, ["onUpdate:modelValue", "users", "groups"])
    ]),
    _: 1
  }, 8, ["modelValue"]);
}
const Xr = /* @__PURE__ */ y(Jr, [["render", Qr]]), Zr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xr
}, Symbol.toStringTag, { value: "Module" })), qe = new Le();
class Yr {
  nodes;
  constructor() {
    this.nodes = {};
  }
  // registerNodes(items: Array<Record<string, any>>) {
  //   items.forEach((user) => {
  //     this.nodes[user.value] = user
  //   })
  // }
  async lookup(t, s) {
    try {
      if (await qe.acquire(s), !this.nodes[s]) {
        const r = await t.nodes.ancestors(s);
        this.nodes[s] = $(r, "data.ancestors", []);
      }
      return this.nodes[s];
    } finally {
      qe.release(s);
    }
  }
}
const pt = new Yr(), eo = _({
  setup() {
    return { session: W(Z) };
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
const to = { class: "k-node-breadcrumb" };
function so(e, t, s, r, o, i) {
  return u(), p("div", to, [
    (u(!0), p(V, null, A(e.breadcrumb, (n, a) => (u(), p(V, {
      key: n.dataid
    }, [
      L(T(n.name) + " ", 1),
      a < e.breadcrumb.length - 1 ? (u(), p(V, { key: 0 }, [
        L(" ▶ ")
      ], 64)) : S("", !0)
    ], 64))), 128))
  ]);
}
const mt = /* @__PURE__ */ y(eo, [["render", so]]), ro = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mt
}, Symbol.toStringTag, { value: "Module" })), oo = _({
  components: { KNodeAncestor: mt },
  setup() {
    return {
      session: W(Z),
      config: W(fe)
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
      return zt(this.config.baseUrl, {
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
      return Object.entries(e).map(([t, s]) => `${t}=${s}`).join(",");
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
      return this.objid ?? parseInt(Wt.get("TargetBrowseObjID") ?? "0");
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
const no = { class: "k-node-picker-field" }, io = ["value"];
function ao(e, t, s, r, o, i) {
  const n = g("KButton"), a = g("KNodeAncestor");
  return u(), p("div", no, [
    h("input", {
      ref: "input",
      type: "text",
      class: "k-input",
      value: e.name,
      onFocus: t[0] || (t[0] = (...d) => e.openWindow && e.openWindow(...d))
    }, null, 40, io),
    C(n, {
      small: "",
      onClick: e.openWindow
    }, {
      default: v(() => [
        L(T(e.browseButtonLabel), 1)
      ]),
      _: 1
    }, 8, ["onClick"]),
    e.clearable ? (u(), P(n, {
      key: 0,
      small: "",
      onClick: e.clear
    }, {
      default: v(() => [
        L(T(e.clearButtonLabel), 1)
      ]),
      _: 1
    }, 8, ["onClick"])) : S("", !0),
    e.dataid ? (u(), P(a, {
      key: 1,
      dataid: e.dataid
    }, null, 8, ["dataid"])) : S("", !0)
  ]);
}
const lo = /* @__PURE__ */ y(oo, [["render", ao]]), uo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: lo
}, Symbol.toStringTag, { value: "Module" })), co = _({
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
const po = { class: "k-one-moment" }, mo = { class: "k-one-moment-label" };
function ho(e, t, s, r, o, i) {
  const n = g("KSpinner"), a = g("KDialog");
  return u(), P(a, { "model-value": e.loading }, {
    default: v(() => [
      h("div", po, [
        C(n, {
          height: 36,
          width: 36
        }),
        h("div", mo, T(e.label), 1)
      ])
    ]),
    _: 1
  }, 8, ["model-value"]);
}
const fo = /* @__PURE__ */ y(co, [["render", ho]]), _o = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fo
}, Symbol.toStringTag, { value: "Module" })), yo = _({
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
        this.mimetypes && (t = t.filter((s) => this.mimetypes.includes(s.type))), this.$emit("drop", t);
      }
      this.active = !1;
    }
  }
});
function bo(e, t, s, r, o, i) {
  return u(), p("div", null, [
    R(e.$slots, "default", { active: e.active })
  ]);
}
const go = /* @__PURE__ */ y(yo, [["render", bo]]), vo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: go
}, Symbol.toStringTag, { value: "Module" })), So = _({
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
const wo = { key: 0 }, $o = { class: "rhmuted" };
function ko(e, t, s, r, o, i) {
  return u(), p("h1", null, [
    L(T(e.title), 1),
    e.subtitle ? (u(), p("span", wo, [
      L(": "),
      h("span", $o, T(e.subtitle) + " - 2", 1)
    ])) : S("", !0)
  ]);
}
const To = /* @__PURE__ */ y(So, [["render", ko], ["__scopeId", "data-v-8d8d8837"]]), Oo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: To
}, Symbol.toStringTag, { value: "Module" })), Co = _({
  props: {
    modelValue: {
      type: Number,
      required: !0
    },
    pagination: {
      type: Object,
      required: !0
    },
    length: {
      type: Number,
      required: !0
    }
  },
  emits: ["update:modelValue", "update:pageSize"],
  computed: {
    pageRange() {
      return $(this.pagination, "pageRange", []);
    },
    pageSizes() {
      return $(this.pagination, "pageSizes", []);
    },
    pageNumber() {
      return $(this.pagination, "pageNumber", 0);
    },
    pageSize: {
      get() {
        return $(this.pagination, "pageSize", 0);
      },
      set(e) {
        this.$emit("update:pageSize", e);
      }
    },
    hasPrevious() {
      return $(this.pagination, "hasPrevious", !1);
    },
    hasNext() {
      return $(this.pagination, "hasNext", !1);
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
const Po = {
  key: 0,
  class: "k-pagination"
}, Ro = { class: "k-pagination-buttons" }, Vo = {
  key: 0,
  class: "k-pagination-button"
}, Fo = /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ h("path", { d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" })
], -1), Eo = [
  Fo
], Lo = { key: 0 }, jo = ["onClick"], Mo = {
  key: 1,
  class: "k-pagination-button"
}, Ao = /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ h("path", { d: "M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" })
], -1), No = [
  Ao
];
function Ko(e, t, s, r, o, i) {
  const n = g("KSelect");
  return e.pagination.hasOtherPages ? (u(), p("div", Po, [
    C(n, {
      modelValue: e.pageSize,
      "onUpdate:modelValue": t[0] || (t[0] = (a) => e.pageSize = a),
      items: e.pageSizes,
      label: "Page Size"
    }, null, 8, ["modelValue", "items"]),
    h("div", Ro, [
      e.hasPrevious ? (u(), p("a", Vo, Eo)) : S("", !0),
      (u(!0), p(V, null, A(e.pageRange, (a) => (u(), p(V, { key: a }, [
        a === "|" ? (u(), p("div", Lo, "...")) : (u(), p("a", {
          key: 1,
          class: M(["k-pagination-button k-pagination-button-border", e.classObj(a)]),
          onClick: (d) => e.$emit("update:modelValue", a)
        }, T(a), 11, jo))
      ], 64))), 128)),
      e.hasNext ? (u(), p("a", Mo, No)) : S("", !0)
    ]),
    h("div", null, " Displaying " + T(e.pagination.startIndex) + "-" + T(e.pagination.endIndex) + " of " + T(e.pagination.count) + " items. ", 1)
  ])) : S("", !0);
}
const Do = /* @__PURE__ */ y(Co, [["render", Ko]]), Bo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Do
}, Symbol.toStringTag, { value: "Module" })), Io = _({
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
      return $(this.pagination, "offset", 0);
    },
    limit() {
      return $(this.pagination, "limit", 0);
    },
    count() {
      return $(this.pagination, "count", 0);
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
      const e = [], r = Math.max(0, this.pageNumber0 - 5), o = Math.min(this.lastPageNumber0, r + 10), i = Math.max(0, o - 10);
      for (let n = i; n <= o; n++)
        e.push(n);
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
const Uo = { class: "k-pagination2" }, xo = { class: "k-pagination2-buttons" }, zo = /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ h("path", { d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" })
], -1), Wo = [
  zo
], qo = ["onClick"], Ho = /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ h("path", { d: "M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" })
], -1), Go = [
  Ho
];
function Jo(e, t, s, r, o, i) {
  const n = g("KSelect");
  return u(), p("div", Uo, [
    h("div", null, [
      C(n, {
        modelValue: e.pageSize,
        "onUpdate:modelValue": t[0] || (t[0] = (a) => e.pageSize = a),
        items: e.pageSizes,
        label: "Page Size"
      }, null, 8, ["modelValue", "items"])
    ]),
    e.pageCount > 1 ? (u(), p(V, { key: 0 }, [
      h("div", xo, [
        e.hasPrevious ? (u(), p("a", {
          key: 0,
          class: "k-pagination2-arrow-button",
          onClick: t[1] || (t[1] = (a) => e.clickedPageNumber(e.pageNumber0 - 1))
        }, Wo)) : S("", !0),
        (u(!0), p(V, null, A(e.pageRange0, (a) => (u(), p("div", {
          key: a,
          class: M(["k-pagination2-button", e.classObj(a)]),
          onClick: (d) => e.clickedPageNumber(a)
        }, T(a + 1), 11, qo))), 128)),
        e.hasNext ? (u(), p("a", {
          key: 1,
          class: "k-pagination2-arrow-button",
          onClick: t[2] || (t[2] = (a) => e.clickedPageNumber(e.pageNumber0 + 1))
        }, Go)) : S("", !0)
      ]),
      h("div", null, T(e.pageNumber) + " of " + T(e.pageCount) + " pages", 1)
    ], 64)) : S("", !0)
  ]);
}
const Qo = /* @__PURE__ */ y(Io, [["render", Jo]]), Xo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qo
}, Symbol.toStringTag, { value: "Module" })), Zo = _({
  mixins: [J],
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
      return this.isObject(e) ? $(e, this.itemText) : e;
    },
    getItemValue(e) {
      return this.isObject(e) ? $(e, this.itemValue) : e;
    },
    getItemDisabled(e) {
      return this.isObject(e) ? $(e, "disabled", !1) : !1;
    }
  }
});
const Yo = ["id", "value", "disabled"], en = ["for"];
function tn(e, t, s, r, o, i) {
  const n = g("KSpinner"), a = g("KFormFieldWrapper");
  return u(), p("div", null, [
    C(a, {
      label: e.label,
      "success-messages": e.successMessages,
      "error-messages": e.errorMessages
    }, {
      default: v(() => [
        C(oe, {
          name: "fade",
          mode: "out-in"
        }, {
          default: v(() => [
            e.loading ? (u(), P(n, { key: 0 })) : (u(), p("div", {
              key: 1,
              class: M(["k-radiogroup", e.classObj])
            }, [
              (u(!0), p(V, null, A(e.items, (d) => (u(), p("div", {
                key: e.getItemValue(d),
                class: "k-radiogroup-item"
              }, [
                z(h("input", {
                  id: e.getItemValue(d),
                  "onUpdate:modelValue": t[0] || (t[0] = (c) => e.localValue = c),
                  type: "radio",
                  value: e.getItemValue(d),
                  disabled: e.getItemDisabled(d)
                }, null, 8, Yo), [
                  [Bt, e.localValue]
                ]),
                h("label", {
                  for: e.getItemValue(d)
                }, T(e.getItemText(d)), 9, en)
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
const sn = /* @__PURE__ */ y(Zo, [["render", tn]]), rn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: sn
}, Symbol.toStringTag, { value: "Module" })), on = _({
  inject: ["ksnackbar"],
  methods: {
    click() {
    }
  }
});
function nn(e, t, s, r, o, i) {
  return u(), p("div", null, [
    h("button", {
      onClick: t[0] || (t[0] = (...n) => e.click && e.click(...n))
    }, "click")
  ]);
}
const an = /* @__PURE__ */ y(on, [["render", nn]]), ln = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: an
}, Symbol.toStringTag, { value: "Module" })), un = _({
  mixins: [J],
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
    }
  },
  emits: ["update:modelValue"],
  computed: {
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
      return this.isObject(e) ? $(e, this.itemText) : e;
    },
    getItemValue(e) {
      return this.isObject(e) ? $(e, this.itemValue) : e;
    },
    arrify(e) {
      return Array.isArray(e) ? e : [e];
    }
  }
});
const cn = { class: "k-select" }, dn = ["value"];
function pn(e, t, s, r, o, i) {
  const n = g("KSpinner"), a = g("KFormFieldWrapper");
  return u(), P(a, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: v(() => [
      h("div", cn, [
        z(h("select", {
          "onUpdate:modelValue": t[0] || (t[0] = (d) => e.localValue = d),
          class: M(e.classObj)
        }, [
          (u(!0), p(V, null, A(e.items, (d) => (u(), p("option", {
            key: e.getItemValue(d),
            value: e.getItemValue(d)
          }, T(e.getItemText(d)), 9, dn))), 128))
        ], 2), [
          [It, e.localValue]
        ]),
        C(oe, { name: "fade" }, {
          default: v(() => [
            e.loading ? (u(), P(n, {
              key: 0,
              class: "k-select--spinner"
            })) : S("", !0)
          ]),
          _: 1
        })
      ])
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const mn = /* @__PURE__ */ y(un, [["render", pn]]), hn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mn
}, Symbol.toStringTag, { value: "Module" })), fn = _({
  provide() {
    return {
      // @ts-ignore - not sure why this complains
      [Qs]: this
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
      message: s,
      timeout: r = 6e3,
      actionLabel: o = "close",
      action: i
    }) {
      const n = this.nextIndex();
      i == null && (i = () => this.dismiss(n));
      const a = {
        title: t,
        message: s,
        timeout: r,
        actionLabel: o,
        action: i,
        type: e,
        index: n
      };
      this.nitems[n] = a, console.log(r), setInterval(() => this.dismiss(n), r);
    }
  }
});
const _n = { class: "k-snackbar" }, yn = { class: "k-snackbar-item-message" }, bn = {
  key: 0,
  class: "k-snackbar-title"
}, gn = {
  key: 1,
  class: "k-snackbar-text"
}, vn = {
  key: 0,
  class: "k-snackbar-action"
}, Sn = ["onClick"];
function wn(e, t, s, r, o, i) {
  return u(), p(V, null, [
    R(e.$slots, "default"),
    h("div", _n, [
      C(Ee, {
        name: "slide",
        tag: "div",
        mode: "out-in"
      }, {
        default: v(() => [
          (u(!0), p(V, null, A(e.items, (n) => (u(), p("div", {
            key: n.index,
            class: M(["k-snackbar-item", e.classObj(n)])
          }, [
            h("div", yn, [
              n.title ? (u(), p("div", bn, T(n.title), 1)) : S("", !0),
              n.message ? (u(), p("div", gn, T(n.message), 1)) : S("", !0)
            ]),
            n.action ? (u(), p("div", vn, [
              h("a", {
                href: "#",
                onClick: x((a) => e.action(n), ["prevent"])
              }, T(n.actionLabel), 9, Sn)
            ])) : S("", !0)
          ], 2))), 128))
        ]),
        _: 1
      })
    ])
  ], 64);
}
const $n = /* @__PURE__ */ y(fn, [["render", wn]]), kn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $n
}, Symbol.toStringTag, { value: "Module" })), Tn = _({
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
      return Boolean(this.modelValue.sortAsc);
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
const On = {
  key: 0,
  class: "j-sort-header-arrow"
}, Cn = {
  key: 1,
  class: "j-sort-header-arrow"
};
function Pn(e, t, s, r, o, i) {
  return u(), p("a", {
    href: "#",
    onClick: t[0] || (t[0] = x((...n) => e.emitClick && e.emitClick(...n), ["prevent"]))
  }, [
    R(e.$slots, "default"),
    C(oe, {
      name: "fade",
      mode: "out-in"
    }, {
      default: v(() => [
        e.isActive && e.sortAsc ? (u(), p("span", On, "↓")) : e.isActive ? (u(), p("span", Cn, "↑")) : S("", !0)
      ]),
      _: 1
    })
  ]);
}
const Rn = /* @__PURE__ */ y(Tn, [["render", Pn]]), Vn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Rn
}, Symbol.toStringTag, { value: "Module" }));
const Fn = {}, En = { class: "k-spacer" };
function Ln(e, t) {
  return u(), p("div", En);
}
const jn = /* @__PURE__ */ y(Fn, [["render", Ln]]), Mn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: jn
}, Symbol.toStringTag, { value: "Module" })), je = _({
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
}), He = () => {
  ct((e) => ({
    "519b76bc": e.color
  }));
}, Ge = je.setup;
je.setup = Ge ? (e, t) => (He(), Ge(e, t)) : He;
const An = /* @__PURE__ */ h("circle", {
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), Nn = /* @__PURE__ */ h("path", {
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), Kn = [
  An,
  Nn
];
function Dn(e, t, s, r, o, i) {
  return u(), p("svg", {
    style: G(e.measurableStyles),
    class: "k-spinner",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, Kn, 4);
}
const Bn = /* @__PURE__ */ y(je, [["render", Dn]]), In = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Bn
}, Symbol.toStringTag, { value: "Module" })), Me = _({
  props: {
    modelValue: {
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
        "k-switch--on": this.on
      };
    },
    innerSize() {
      return this.height - 2 * this.padding;
    },
    heightPx() {
      return j(this.height);
    },
    innerSizePx() {
      return j(this.innerSize);
    },
    paddingPx() {
      return j(this.padding);
    },
    switchWidthPx() {
      return j(this.trans + this.height);
    },
    transPx() {
      return `translateX(${j(this.trans)})`;
    }
  }
}), Je = () => {
  ct((e) => ({
    f984ea98: e.switchWidthPx,
    "0b657735": e.heightPx,
    "4fc9dc79": e.innerSizePx,
    56563113: e.paddingPx,
    bd22c72c: e.transPx
  }));
}, Qe = Me.setup;
Me.setup = Qe ? (e, t) => (Je(), Qe(e, t)) : Je;
const Un = /* @__PURE__ */ h("span", { class: "k-switch-slider" }, null, -1), xn = [
  Un
];
function zn(e, t, s, r, o, i) {
  return u(), p("div", {
    class: M(["k-switch", e.classObj]),
    onClick: t[0] || (t[0] = (n) => e.on = !e.on)
  }, xn, 2);
}
const Wn = /* @__PURE__ */ y(Me, [["render", zn]]), qn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wn
}, Symbol.toStringTag, { value: "Module" })), Hn = _({
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
function Gn(e, t, s, r, o, i) {
  const n = g("KLinearProgressIndicator");
  return u(), p("div", null, [
    e.loading ? (u(), P(n, { key: 0 })) : S("", !0),
    h("table", {
      class: M(["k-table", e.classObj])
    }, [
      R(e.$slots, "default")
    ], 2)
  ]);
}
const Jn = /* @__PURE__ */ y(Hn, [["render", Gn]]), Qn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Jn
}, Symbol.toStringTag, { value: "Module" })), Xn = _({
  mixins: [J],
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
      const t = e.target, s = this.valueLocal, r = t.selectionStart;
      if (s && r) {
        const o = s.slice(0, r), i = s.slice(r), n = `${o}	${i}`;
        this.valueLocal = n, t.value = n, t.selectionStart = r + 1, t.selectionEnd = r + 1;
      }
    }
  }
});
const Zn = ["rows"];
function Yn(e, t, s, r, o, i) {
  const n = g("KFormFieldWrapper");
  return u(), P(n, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: v(() => [
      z(h("textarea", ut({
        "onUpdate:modelValue": t[0] || (t[0] = (a) => e.valueLocal = a)
      }, e.$attrs, {
        spellcheck: "false",
        class: [e.classObj, "k-textarea"],
        rows: e.rows,
        onKeydown: t[1] || (t[1] = se(x((...a) => e.tabber && e.tabber(...a), ["prevent"]), ["tab"]))
      }), null, 16, Zn), [
        [Fe, e.valueLocal]
      ])
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const ei = /* @__PURE__ */ y(Xn, [["render", Yn]]), ti = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ei
}, Symbol.toStringTag, { value: "Module" })), si = _({
  mixins: [J],
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
const ri = ["placeholder"];
function oi(e, t, s, r, o, i) {
  const n = g("KFormFieldWrapper");
  return u(), P(n, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: v(() => [
      z(h("input", {
        "onUpdate:modelValue": t[0] || (t[0] = (a) => e.value = a),
        class: M(["k-input-text-field", e.classObj]),
        placeholder: e.placeholder
      }, null, 10, ri), [
        [Fe, e.value]
      ])
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const ni = /* @__PURE__ */ y(si, [["render", oi]]), ii = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ni
}, Symbol.toStringTag, { value: "Module" })), ai = _({
  setup() {
    return {
      config: W(fe),
      session: W(Z)
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
      return $(this.userRec, "type", this.type);
    },
    url() {
      return this.userType === this.session.members.USER ? `${this.config.img}guy.gif` : this.userType === this.session.members.GROUP ? `${this.config.img}2-guys.gif` : this.userType > 0 ? `${this.config.img}projectgroup.gif` : null;
    }
  }
}), li = ["src"];
function ui(e, t, s, r, o, i) {
  return e.url ? (u(), p("img", {
    key: 0,
    src: e.url,
    style: G([e.measurableStyles])
  }, null, 12, li)) : S("", !0);
}
const ci = /* @__PURE__ */ y(ai, [["render", ui]]), di = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ci
}, Symbol.toStringTag, { value: "Module" })), ee = new Le();
class pi {
  session;
  queueItems;
  intervalId;
  constructor() {
    this.session = null, this.queueItems = [], this.intervalId = 0;
  }
  resetQueue() {
    this.queueItems = [];
  }
  queue(t, s, r) {
    this.session = t, this.queueItems.push({
      resolveFunc: s,
      userId: r
    }), clearInterval(this.intervalId), this.intervalId = setTimeout(this.processQueue.bind(this), 50);
  }
  async processQueue() {
    const t = this.session.rpcClient("/api/v1/rh/rpc/user/"), s = this.queueItems;
    this.resetQueue(), s.forEach((r) => {
      const o = r.userId;
      t.queue("UserLookup", { userId: o });
    });
    try {
      (await t.batch(!0)).forEach((o, i) => {
        const n = o.userid, a = o.type, d = o.displayname, c = { type: a, text: d, value: n }, m = s[i].resolveFunc;
        m(c);
      });
    } catch {
      s.forEach((r) => r.resolveFunc(null));
    }
  }
}
class mi {
  users;
  userLookupQueue;
  constructor() {
    this.users = {}, this.userLookupQueue = new pi();
  }
  registerUsers(t) {
    t.forEach((s) => this.users[s.value] = s);
  }
  async lookup(t, s) {
    return await ee.acquire(s), this.users[s] ? (ee.release(s), this.users[s]) : new Promise((r) => {
      const o = (i) => {
        this.users[s] = i, r(i), ee.release(s);
      };
      this.userLookupQueue.queue(t, o, s);
    });
  }
  async lookup2(t, s) {
    try {
      if (await ee.acquire(s), !this.users[s]) {
        const o = await t.rpcClient("/api/v1/rh/rpc/user/").request(
          "UserLookup",
          { userId: s }
        ), i = o.userid, n = o.type, a = o.displayname;
        i && (this.users[s] = { type: n, text: a, value: i });
      }
      return this.users[s];
    } finally {
      ee.release(s);
    }
  }
}
const Te = new mi(), hi = _({
  setup() {
    return { session: W(Z) };
  },
  props: {
    user: {
      type: [Number, Object],
      default: null
    },
    //  this is deprecated
    userRec: {
      type: Object,
      default: null
    },
    // @deprecated
    userid: {
      type: Number,
      default: null
    },
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
      return $(this.userRecLocal, "id") ?? $(this.userRecLocal, "userid");
    },
    userLocal() {
      return this.user ?? this.userid ?? this.userRec;
    },
    displayName() {
      return $(this.userRecLocal, "display_name") ?? $(this.userRecLocal, "displayname") ?? $(this.userRecLocal, "name");
    },
    type() {
      return $(this.userRecLocal, "type");
    }
  },
  watch: {
    userLocal: {
      async handler(e) {
        if (this.isInteger(e)) {
          const t = await Te.lookup(this.session, e);
          this.userRecLocal = {
            name: t.text,
            id: t.value,
            type: t.type
          };
        } else
          this.userRecLocal = e;
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
const fi = {
  key: 0,
  class: "k-user-link"
};
function _i(e, t, s, r, o, i) {
  const n = g("KUserGIF");
  return e.userRecLocal ? (u(), p("span", fi, [
    e.gif ? (u(), P(n, {
      key: 0,
      "user-rec": e.userRecLocal
    }, null, 8, ["user-rec"])) : S("", !0),
    L("  "),
    h("a", {
      href: "#",
      onClick: t[0] || (t[0] = x((...a) => e.click && e.click(...a), ["prevent"]))
    }, T(e.displayName), 1)
  ])) : S("", !0);
}
const yi = /* @__PURE__ */ y(hi, [["render", _i]]), bi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: yi
}, Symbol.toStringTag, { value: "Module" })), gi = _({
  mixins: [J],
  setup() {
    return { session: W(Z) };
  },
  props: {
    modelValue: {
      // type: [Number, Object] as PropType<number | Record<string, any> | null>,
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
        this.items = t.data.data.map((s) => ({
          text: $(s, "name_formatted"),
          value: $(s, "id"),
          type: $(s, "type")
        })), Te.registerUsers(this.items);
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
          const t = await Te.lookup(this.session, e);
          t && (this.items = [t], this.select = t.value);
        } finally {
          this.pleaseWait = !1, this.readonly = !1, this.loading = !1;
        }
    }
  }
});
function vi(e, t, s, r, o, i) {
  const n = g("KUserGIF"), a = g("KAutocomplete"), d = g("KUserLink"), c = g("KFormFieldWrapper");
  return u(), P(c, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: v(() => [
      e.editable ? (u(), P(a, {
        key: 0,
        modelValue: e.valueLocal,
        "onUpdate:modelValue": t[0] || (t[0] = (m) => e.valueLocal = m),
        "search-input": e.searchText,
        "onUpdate:searchInput": t[1] || (t[1] = (m) => e.searchText = m),
        class: "k-user-picker",
        placeholder: e.placeholder,
        width: e.width,
        loading: e.loading,
        items: e.items,
        "return-object": e.returnObject,
        combobox: !1
      }, {
        prepend: v(({ item: m }) => [
          C(n, {
            type: m?.type
          }, null, 8, ["type"])
        ]),
        item: v(({ item: m }) => [
          C(n, {
            type: m.type
          }, null, 8, ["type"]),
          L(" " + T(m.text), 1)
        ]),
        _: 1
      }, 8, ["modelValue", "search-input", "placeholder", "width", "loading", "items", "return-object"])) : (u(), P(d, {
        key: 1,
        user: e.modelValue,
        gif: ""
      }, null, 8, ["user"]))
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const Si = /* @__PURE__ */ y(gi, [["render", vi]]), wi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Si
}, Symbol.toStringTag, { value: "Module" })), $i = _({
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
      return this.name == $(this.tabs, "selectedTab");
    }
  }
}), ki = { key: 0 };
function Ti(e, t, s, r, o, i) {
  return e.isSelected ? (u(), p("div", ki, [
    R(e.$slots, "default")
  ])) : S("", !0);
}
const Oi = /* @__PURE__ */ y($i, [["render", Ti]]), Ci = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Oi
}, Symbol.toStringTag, { value: "Module" })), Pi = _({
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
      const e = (i) => i.type.name === "KTabItem", t = (i) => typeof i.type == "symbol" && i.type.description === "Fragment", s = (i) => i.children && i.children.length && i.children.some(e), r = (i) => t(i) && s(i);
      return (this.$slots.default ? this.$slots.default() : []).filter((i) => e(i) || r(i)).flatMap((i) => r(i) ? i.children : i).map((i) => ({
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
        (s) => Boolean(s)
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
const Ri = { class: "k-tabs" }, Vi = { class: "k-tabs-nav" }, Fi = ["href", "onClick"], Ei = { class: "k-tabs-content" };
function Li(e, t, s, r, o, i) {
  return u(), p("div", Ri, [
    h("div", Vi, [
      (u(!0), p(V, null, A(e.tabs, (n) => (u(), p("div", {
        key: n.name,
        class: M(e.classObj(n))
      }, [
        h("a", {
          href: `#${n.name}`,
          onClick: (a) => e.selectTab(n.name)
        }, T(n.title), 9, Fi)
      ], 2))), 128))
    ]),
    h("div", Ei, [
      R(e.$slots, "default")
    ])
  ]);
}
const ji = /* @__PURE__ */ y(Pi, [["render", Li]]), Mi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ji
}, Symbol.toStringTag, { value: "Module" }));
function ht(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: ft } = Object.prototype, { getPrototypeOf: Ae } = Object, Ne = ((e) => (t) => {
  const s = ft.call(t);
  return e[s] || (e[s] = s.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), I = (e) => (e = e.toLowerCase(), (t) => Ne(t) === e), _e = (e) => (t) => typeof t === e, { isArray: Y } = Array, re = _e("undefined");
function Ai(e) {
  return e !== null && !re(e) && e.constructor !== null && !re(e.constructor) && q(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const _t = I("ArrayBuffer");
function Ni(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && _t(e.buffer), t;
}
const Ki = _e("string"), q = _e("function"), yt = _e("number"), Ke = (e) => e !== null && typeof e == "object", Di = (e) => e === !0 || e === !1, ue = (e) => {
  if (Ne(e) !== "object")
    return !1;
  const t = Ae(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Bi = I("Date"), Ii = I("File"), Ui = I("Blob"), xi = I("FileList"), zi = (e) => Ke(e) && q(e.pipe), Wi = (e) => {
  const t = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || ft.call(e) === t || q(e.toString) && e.toString() === t);
}, qi = I("URLSearchParams"), Hi = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ne(e, t, { allOwnKeys: s = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), Y(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    const i = s ? Object.getOwnPropertyNames(e) : Object.keys(e), n = i.length;
    let a;
    for (r = 0; r < n; r++)
      a = i[r], t.call(null, e[a], a, e);
  }
}
function bt(e, t) {
  t = t.toLowerCase();
  const s = Object.keys(e);
  let r = s.length, o;
  for (; r-- > 0; )
    if (o = s[r], t === o.toLowerCase())
      return o;
  return null;
}
const gt = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), vt = (e) => !re(e) && e !== gt;
function Oe() {
  const { caseless: e } = vt(this) && this || {}, t = {}, s = (r, o) => {
    const i = e && bt(t, o) || o;
    ue(t[i]) && ue(r) ? t[i] = Oe(t[i], r) : ue(r) ? t[i] = Oe({}, r) : Y(r) ? t[i] = r.slice() : t[i] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && ne(arguments[r], s);
  return t;
}
const Gi = (e, t, s, { allOwnKeys: r } = {}) => (ne(t, (o, i) => {
  s && q(o) ? e[i] = ht(o, s) : e[i] = o;
}, { allOwnKeys: r }), e), Ji = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Qi = (e, t, s, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), s && Object.assign(e.prototype, s);
}, Xi = (e, t, s, r) => {
  let o, i, n;
  const a = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      n = o[i], (!r || r(n, e, t)) && !a[n] && (t[n] = e[n], a[n] = !0);
    e = s !== !1 && Ae(e);
  } while (e && (!s || s(e, t)) && e !== Object.prototype);
  return t;
}, Zi = (e, t, s) => {
  e = String(e), (s === void 0 || s > e.length) && (s = e.length), s -= t.length;
  const r = e.indexOf(t, s);
  return r !== -1 && r === s;
}, Yi = (e) => {
  if (!e)
    return null;
  if (Y(e))
    return e;
  let t = e.length;
  if (!yt(t))
    return null;
  const s = new Array(t);
  for (; t-- > 0; )
    s[t] = e[t];
  return s;
}, ea = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Ae(Uint8Array)), ta = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const i = o.value;
    t.call(e, i[0], i[1]);
  }
}, sa = (e, t) => {
  let s;
  const r = [];
  for (; (s = e.exec(t)) !== null; )
    r.push(s);
  return r;
}, ra = I("HTMLFormElement"), oa = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(s, r, o) {
    return r.toUpperCase() + o;
  }
), Xe = (({ hasOwnProperty: e }) => (t, s) => e.call(t, s))(Object.prototype), na = I("RegExp"), St = (e, t) => {
  const s = Object.getOwnPropertyDescriptors(e), r = {};
  ne(s, (o, i) => {
    t(o, i, e) !== !1 && (r[i] = o);
  }), Object.defineProperties(e, r);
}, ia = (e) => {
  St(e, (t, s) => {
    if (q(e) && ["arguments", "caller", "callee"].indexOf(s) !== -1)
      return !1;
    const r = e[s];
    if (q(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + s + "'");
      });
    }
  });
}, aa = (e, t) => {
  const s = {}, r = (o) => {
    o.forEach((i) => {
      s[i] = !0;
    });
  };
  return Y(e) ? r(e) : r(String(e).split(t)), s;
}, la = () => {
}, ua = (e, t) => (e = +e, Number.isFinite(e) ? e : t), ve = "abcdefghijklmnopqrstuvwxyz", Ze = "0123456789", wt = {
  DIGIT: Ze,
  ALPHA: ve,
  ALPHA_DIGIT: ve + ve.toUpperCase() + Ze
}, ca = (e = 16, t = wt.ALPHA_DIGIT) => {
  let s = "";
  const { length: r } = t;
  for (; e--; )
    s += t[Math.random() * r | 0];
  return s;
};
function da(e) {
  return !!(e && q(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const pa = (e) => {
  const t = new Array(10), s = (r, o) => {
    if (Ke(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[o] = r;
        const i = Y(r) ? [] : {};
        return ne(r, (n, a) => {
          const d = s(n, o + 1);
          !re(d) && (i[a] = d);
        }), t[o] = void 0, i;
      }
    }
    return r;
  };
  return s(e, 0);
}, l = {
  isArray: Y,
  isArrayBuffer: _t,
  isBuffer: Ai,
  isFormData: Wi,
  isArrayBufferView: Ni,
  isString: Ki,
  isNumber: yt,
  isBoolean: Di,
  isObject: Ke,
  isPlainObject: ue,
  isUndefined: re,
  isDate: Bi,
  isFile: Ii,
  isBlob: Ui,
  isRegExp: na,
  isFunction: q,
  isStream: zi,
  isURLSearchParams: qi,
  isTypedArray: ea,
  isFileList: xi,
  forEach: ne,
  merge: Oe,
  extend: Gi,
  trim: Hi,
  stripBOM: Ji,
  inherits: Qi,
  toFlatObject: Xi,
  kindOf: Ne,
  kindOfTest: I,
  endsWith: Zi,
  toArray: Yi,
  forEachEntry: ta,
  matchAll: sa,
  isHTMLForm: ra,
  hasOwnProperty: Xe,
  hasOwnProp: Xe,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: St,
  freezeMethods: ia,
  toObjectSet: aa,
  toCamelCase: oa,
  noop: la,
  toFiniteNumber: ua,
  findKey: bt,
  global: gt,
  isContextDefined: vt,
  ALPHABET: wt,
  generateString: ca,
  isSpecCompliantForm: da,
  toJSONObject: pa
};
function k(e, t, s, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), s && (this.config = s), r && (this.request = r), o && (this.response = o);
}
l.inherits(k, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: l.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const $t = k.prototype, kt = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  kt[e] = { value: e };
});
Object.defineProperties(k, kt);
Object.defineProperty($t, "isAxiosError", { value: !0 });
k.from = (e, t, s, r, o, i) => {
  const n = Object.create($t);
  return l.toFlatObject(e, n, function(d) {
    return d !== Error.prototype;
  }, (a) => a !== "isAxiosError"), k.call(n, e.message, t, s, r, o), n.cause = e, n.name = e.name, i && Object.assign(n, i), n;
};
const ma = null;
function Ce(e) {
  return l.isPlainObject(e) || l.isArray(e);
}
function Tt(e) {
  return l.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ye(e, t, s) {
  return e ? e.concat(t).map(function(o, i) {
    return o = Tt(o), !s && i ? "[" + o + "]" : o;
  }).join(s ? "." : "") : t;
}
function ha(e) {
  return l.isArray(e) && !e.some(Ce);
}
const fa = l.toFlatObject(l, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function ye(e, t, s) {
  if (!l.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), s = l.toFlatObject(s, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(w, D) {
    return !l.isUndefined(D[w]);
  });
  const r = s.metaTokens, o = s.visitor || m, i = s.dots, n = s.indexes, d = (s.Blob || typeof Blob < "u" && Blob) && l.isSpecCompliantForm(t);
  if (!l.isFunction(o))
    throw new TypeError("visitor must be a function");
  function c(f) {
    if (f === null)
      return "";
    if (l.isDate(f))
      return f.toISOString();
    if (!d && l.isBlob(f))
      throw new k("Blob is not supported. Use a Buffer instead.");
    return l.isArrayBuffer(f) || l.isTypedArray(f) ? d && typeof Blob == "function" ? new Blob([f]) : Buffer.from(f) : f;
  }
  function m(f, w, D) {
    let N = f;
    if (f && !D && typeof f == "object") {
      if (l.endsWith(w, "{}"))
        w = r ? w : w.slice(0, -2), f = JSON.stringify(f);
      else if (l.isArray(f) && ha(f) || (l.isFileList(f) || l.endsWith(w, "[]")) && (N = l.toArray(f)))
        return w = Tt(w), N.forEach(function(ae, At) {
          !(l.isUndefined(ae) || ae === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            n === !0 ? Ye([w], At, i) : n === null ? w : w + "[]",
            c(ae)
          );
        }), !1;
    }
    return Ce(f) ? !0 : (t.append(Ye(D, w, i), c(f)), !1);
  }
  const b = [], F = Object.assign(fa, {
    defaultVisitor: m,
    convertValue: c,
    isVisitable: Ce
  });
  function O(f, w) {
    if (!l.isUndefined(f)) {
      if (b.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + w.join("."));
      b.push(f), l.forEach(f, function(N, Q) {
        (!(l.isUndefined(N) || N === null) && o.call(
          t,
          N,
          l.isString(Q) ? Q.trim() : Q,
          w,
          F
        )) === !0 && O(N, w ? w.concat(Q) : [Q]);
      }), b.pop();
    }
  }
  if (!l.isObject(e))
    throw new TypeError("data must be an object");
  return O(e), t;
}
function et(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function De(e, t) {
  this._pairs = [], e && ye(e, this, t);
}
const Ot = De.prototype;
Ot.append = function(t, s) {
  this._pairs.push([t, s]);
};
Ot.toString = function(t) {
  const s = t ? function(r) {
    return t.call(this, r, et);
  } : et;
  return this._pairs.map(function(o) {
    return s(o[0]) + "=" + s(o[1]);
  }, "").join("&");
};
function _a(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Ct(e, t, s) {
  if (!t)
    return e;
  const r = s && s.encode || _a, o = s && s.serialize;
  let i;
  if (o ? i = o(t, s) : i = l.isURLSearchParams(t) ? t.toString() : new De(t, s).toString(r), i) {
    const n = e.indexOf("#");
    n !== -1 && (e = e.slice(0, n)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class ya {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, s, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: s,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    l.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const tt = ya, Pt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, ba = typeof URLSearchParams < "u" ? URLSearchParams : De, ga = typeof FormData < "u" ? FormData : null, va = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), Sa = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), K = {
  isBrowser: !0,
  classes: {
    URLSearchParams: ba,
    FormData: ga,
    Blob
  },
  isStandardBrowserEnv: va,
  isStandardBrowserWebWorkerEnv: Sa,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function wa(e, t) {
  return ye(e, new K.classes.URLSearchParams(), Object.assign({
    visitor: function(s, r, o, i) {
      return K.isNode && l.isBuffer(s) ? (this.append(r, s.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function $a(e) {
  return l.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function ka(e) {
  const t = {}, s = Object.keys(e);
  let r;
  const o = s.length;
  let i;
  for (r = 0; r < o; r++)
    i = s[r], t[i] = e[i];
  return t;
}
function Rt(e) {
  function t(s, r, o, i) {
    let n = s[i++];
    const a = Number.isFinite(+n), d = i >= s.length;
    return n = !n && l.isArray(o) ? o.length : n, d ? (l.hasOwnProp(o, n) ? o[n] = [o[n], r] : o[n] = r, !a) : ((!o[n] || !l.isObject(o[n])) && (o[n] = []), t(s, r, o[n], i) && l.isArray(o[n]) && (o[n] = ka(o[n])), !a);
  }
  if (l.isFormData(e) && l.isFunction(e.entries)) {
    const s = {};
    return l.forEachEntry(e, (r, o) => {
      t($a(r), o, s, 0);
    }), s;
  }
  return null;
}
const Ta = {
  "Content-Type": void 0
};
function Oa(e, t, s) {
  if (l.isString(e))
    try {
      return (t || JSON.parse)(e), l.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (s || JSON.stringify)(e);
}
const be = {
  transitional: Pt,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, s) {
    const r = s.getContentType() || "", o = r.indexOf("application/json") > -1, i = l.isObject(t);
    if (i && l.isHTMLForm(t) && (t = new FormData(t)), l.isFormData(t))
      return o && o ? JSON.stringify(Rt(t)) : t;
    if (l.isArrayBuffer(t) || l.isBuffer(t) || l.isStream(t) || l.isFile(t) || l.isBlob(t))
      return t;
    if (l.isArrayBufferView(t))
      return t.buffer;
    if (l.isURLSearchParams(t))
      return s.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return wa(t, this.formSerializer).toString();
      if ((a = l.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const d = this.env && this.env.FormData;
        return ye(
          a ? { "files[]": t } : t,
          d && new d(),
          this.formSerializer
        );
      }
    }
    return i || o ? (s.setContentType("application/json", !1), Oa(t)) : t;
  }],
  transformResponse: [function(t) {
    const s = this.transitional || be.transitional, r = s && s.forcedJSONParsing, o = this.responseType === "json";
    if (t && l.isString(t) && (r && !this.responseType || o)) {
      const n = !(s && s.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (n)
          throw a.name === "SyntaxError" ? k.from(a, k.ERR_BAD_RESPONSE, this, null, this.response) : a;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: K.classes.FormData,
    Blob: K.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
l.forEach(["delete", "get", "head"], function(t) {
  be.headers[t] = {};
});
l.forEach(["post", "put", "patch"], function(t) {
  be.headers[t] = l.merge(Ta);
});
const Be = be, Ca = l.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Pa = (e) => {
  const t = {};
  let s, r, o;
  return e && e.split(`
`).forEach(function(n) {
    o = n.indexOf(":"), s = n.substring(0, o).trim().toLowerCase(), r = n.substring(o + 1).trim(), !(!s || t[s] && Ca[s]) && (s === "set-cookie" ? t[s] ? t[s].push(r) : t[s] = [r] : t[s] = t[s] ? t[s] + ", " + r : r);
  }), t;
}, st = Symbol("internals");
function te(e) {
  return e && String(e).trim().toLowerCase();
}
function ce(e) {
  return e === !1 || e == null ? e : l.isArray(e) ? e.map(ce) : String(e);
}
function Ra(e) {
  const t = /* @__PURE__ */ Object.create(null), s = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = s.exec(e); )
    t[r[1]] = r[2];
  return t;
}
function Va(e) {
  return /^[-_a-zA-Z]+$/.test(e.trim());
}
function Se(e, t, s, r, o) {
  if (l.isFunction(r))
    return r.call(this, t, s);
  if (o && (t = s), !!l.isString(t)) {
    if (l.isString(r))
      return t.indexOf(r) !== -1;
    if (l.isRegExp(r))
      return r.test(t);
  }
}
function Fa(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, s, r) => s.toUpperCase() + r);
}
function Ea(e, t) {
  const s = l.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + s, {
      value: function(o, i, n) {
        return this[r].call(this, t, o, i, n);
      },
      configurable: !0
    });
  });
}
class ge {
  constructor(t) {
    t && this.set(t);
  }
  set(t, s, r) {
    const o = this;
    function i(a, d, c) {
      const m = te(d);
      if (!m)
        throw new Error("header name must be a non-empty string");
      const b = l.findKey(o, m);
      (!b || o[b] === void 0 || c === !0 || c === void 0 && o[b] !== !1) && (o[b || d] = ce(a));
    }
    const n = (a, d) => l.forEach(a, (c, m) => i(c, m, d));
    return l.isPlainObject(t) || t instanceof this.constructor ? n(t, s) : l.isString(t) && (t = t.trim()) && !Va(t) ? n(Pa(t), s) : t != null && i(s, t, r), this;
  }
  get(t, s) {
    if (t = te(t), t) {
      const r = l.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!s)
          return o;
        if (s === !0)
          return Ra(o);
        if (l.isFunction(s))
          return s.call(this, o, r);
        if (l.isRegExp(s))
          return s.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, s) {
    if (t = te(t), t) {
      const r = l.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!s || Se(this, this[r], r, s)));
    }
    return !1;
  }
  delete(t, s) {
    const r = this;
    let o = !1;
    function i(n) {
      if (n = te(n), n) {
        const a = l.findKey(r, n);
        a && (!s || Se(r, r[a], a, s)) && (delete r[a], o = !0);
      }
    }
    return l.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const s = Object.keys(this);
    let r = s.length, o = !1;
    for (; r--; ) {
      const i = s[r];
      (!t || Se(this, this[i], i, t, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(t) {
    const s = this, r = {};
    return l.forEach(this, (o, i) => {
      const n = l.findKey(r, i);
      if (n) {
        s[n] = ce(o), delete s[i];
        return;
      }
      const a = t ? Fa(i) : String(i).trim();
      a !== i && delete s[i], s[a] = ce(o), r[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const s = /* @__PURE__ */ Object.create(null);
    return l.forEach(this, (r, o) => {
      r != null && r !== !1 && (s[o] = t && l.isArray(r) ? r.join(", ") : r);
    }), s;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, s]) => t + ": " + s).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...s) {
    const r = new this(t);
    return s.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[st] = this[st] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(n) {
      const a = te(n);
      r[a] || (Ea(o, n), r[a] = !0);
    }
    return l.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
ge.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
l.freezeMethods(ge.prototype);
l.freezeMethods(ge);
const B = ge;
function we(e, t) {
  const s = this || Be, r = t || s, o = B.from(r.headers);
  let i = r.data;
  return l.forEach(e, function(a) {
    i = a.call(s, i, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), i;
}
function Vt(e) {
  return !!(e && e.__CANCEL__);
}
function ie(e, t, s) {
  k.call(this, e ?? "canceled", k.ERR_CANCELED, t, s), this.name = "CanceledError";
}
l.inherits(ie, k, {
  __CANCEL__: !0
});
function La(e, t, s) {
  const r = s.config.validateStatus;
  !s.status || !r || r(s.status) ? e(s) : t(new k(
    "Request failed with status code " + s.status,
    [k.ERR_BAD_REQUEST, k.ERR_BAD_RESPONSE][Math.floor(s.status / 100) - 4],
    s.config,
    s.request,
    s
  ));
}
const ja = K.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(s, r, o, i, n, a) {
        const d = [];
        d.push(s + "=" + encodeURIComponent(r)), l.isNumber(o) && d.push("expires=" + new Date(o).toGMTString()), l.isString(i) && d.push("path=" + i), l.isString(n) && d.push("domain=" + n), a === !0 && d.push("secure"), document.cookie = d.join("; ");
      },
      read: function(s) {
        const r = document.cookie.match(new RegExp("(^|;\\s*)(" + s + ")=([^;]*)"));
        return r ? decodeURIComponent(r[3]) : null;
      },
      remove: function(s) {
        this.write(s, "", Date.now() - 864e5);
      }
    };
  }()
) : (
  // Non standard browser env (web workers, react-native) lack needed support.
  function() {
    return {
      write: function() {
      },
      read: function() {
        return null;
      },
      remove: function() {
      }
    };
  }()
);
function Ma(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Aa(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Ft(e, t) {
  return e && !Ma(t) ? Aa(e, t) : t;
}
const Na = K.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), s = document.createElement("a");
    let r;
    function o(i) {
      let n = i;
      return t && (s.setAttribute("href", n), n = s.href), s.setAttribute("href", n), {
        href: s.href,
        protocol: s.protocol ? s.protocol.replace(/:$/, "") : "",
        host: s.host,
        search: s.search ? s.search.replace(/^\?/, "") : "",
        hash: s.hash ? s.hash.replace(/^#/, "") : "",
        hostname: s.hostname,
        port: s.port,
        pathname: s.pathname.charAt(0) === "/" ? s.pathname : "/" + s.pathname
      };
    }
    return r = o(window.location.href), function(n) {
      const a = l.isString(n) ? o(n) : n;
      return a.protocol === r.protocol && a.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function() {
    return function() {
      return !0;
    };
  }()
);
function Ka(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Da(e, t) {
  e = e || 10;
  const s = new Array(e), r = new Array(e);
  let o = 0, i = 0, n;
  return t = t !== void 0 ? t : 1e3, function(d) {
    const c = Date.now(), m = r[i];
    n || (n = c), s[o] = d, r[o] = c;
    let b = i, F = 0;
    for (; b !== o; )
      F += s[b++], b = b % e;
    if (o = (o + 1) % e, o === i && (i = (i + 1) % e), c - n < t)
      return;
    const O = m && c - m;
    return O ? Math.round(F * 1e3 / O) : void 0;
  };
}
function rt(e, t) {
  let s = 0;
  const r = Da(50, 250);
  return (o) => {
    const i = o.loaded, n = o.lengthComputable ? o.total : void 0, a = i - s, d = r(a), c = i <= n;
    s = i;
    const m = {
      loaded: i,
      total: n,
      progress: n ? i / n : void 0,
      bytes: a,
      rate: d || void 0,
      estimated: d && n && c ? (n - i) / d : void 0,
      event: o
    };
    m[t ? "download" : "upload"] = !0, e(m);
  };
}
const Ba = typeof XMLHttpRequest < "u", Ia = Ba && function(e) {
  return new Promise(function(s, r) {
    let o = e.data;
    const i = B.from(e.headers).normalize(), n = e.responseType;
    let a;
    function d() {
      e.cancelToken && e.cancelToken.unsubscribe(a), e.signal && e.signal.removeEventListener("abort", a);
    }
    l.isFormData(o) && (K.isStandardBrowserEnv || K.isStandardBrowserWebWorkerEnv) && i.setContentType(!1);
    let c = new XMLHttpRequest();
    if (e.auth) {
      const O = e.auth.username || "", f = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(O + ":" + f));
    }
    const m = Ft(e.baseURL, e.url);
    c.open(e.method.toUpperCase(), Ct(m, e.params, e.paramsSerializer), !0), c.timeout = e.timeout;
    function b() {
      if (!c)
        return;
      const O = B.from(
        "getAllResponseHeaders" in c && c.getAllResponseHeaders()
      ), w = {
        data: !n || n === "text" || n === "json" ? c.responseText : c.response,
        status: c.status,
        statusText: c.statusText,
        headers: O,
        config: e,
        request: c
      };
      La(function(N) {
        s(N), d();
      }, function(N) {
        r(N), d();
      }, w), c = null;
    }
    if ("onloadend" in c ? c.onloadend = b : c.onreadystatechange = function() {
      !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(b);
    }, c.onabort = function() {
      c && (r(new k("Request aborted", k.ECONNABORTED, e, c)), c = null);
    }, c.onerror = function() {
      r(new k("Network Error", k.ERR_NETWORK, e, c)), c = null;
    }, c.ontimeout = function() {
      let f = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const w = e.transitional || Pt;
      e.timeoutErrorMessage && (f = e.timeoutErrorMessage), r(new k(
        f,
        w.clarifyTimeoutError ? k.ETIMEDOUT : k.ECONNABORTED,
        e,
        c
      )), c = null;
    }, K.isStandardBrowserEnv) {
      const O = (e.withCredentials || Na(m)) && e.xsrfCookieName && ja.read(e.xsrfCookieName);
      O && i.set(e.xsrfHeaderName, O);
    }
    o === void 0 && i.setContentType(null), "setRequestHeader" in c && l.forEach(i.toJSON(), function(f, w) {
      c.setRequestHeader(w, f);
    }), l.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), n && n !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", rt(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", rt(e.onUploadProgress)), (e.cancelToken || e.signal) && (a = (O) => {
      c && (r(!O || O.type ? new ie(null, e, c) : O), c.abort(), c = null);
    }, e.cancelToken && e.cancelToken.subscribe(a), e.signal && (e.signal.aborted ? a() : e.signal.addEventListener("abort", a)));
    const F = Ka(m);
    if (F && K.protocols.indexOf(F) === -1) {
      r(new k("Unsupported protocol " + F + ":", k.ERR_BAD_REQUEST, e));
      return;
    }
    c.send(o || null);
  });
}, de = {
  http: ma,
  xhr: Ia
};
l.forEach(de, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Ua = {
  getAdapter: (e) => {
    e = l.isArray(e) ? e : [e];
    const { length: t } = e;
    let s, r;
    for (let o = 0; o < t && (s = e[o], !(r = l.isString(s) ? de[s.toLowerCase()] : s)); o++)
      ;
    if (!r)
      throw r === !1 ? new k(
        `Adapter ${s} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        l.hasOwnProp(de, s) ? `Adapter '${s}' is not available in the build` : `Unknown adapter '${s}'`
      );
    if (!l.isFunction(r))
      throw new TypeError("adapter is not a function");
    return r;
  },
  adapters: de
};
function $e(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ie(null, e);
}
function ot(e) {
  return $e(e), e.headers = B.from(e.headers), e.data = we.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Ua.getAdapter(e.adapter || Be.adapter)(e).then(function(r) {
    return $e(e), r.data = we.call(
      e,
      e.transformResponse,
      r
    ), r.headers = B.from(r.headers), r;
  }, function(r) {
    return Vt(r) || ($e(e), r && r.response && (r.response.data = we.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = B.from(r.response.headers))), Promise.reject(r);
  });
}
const nt = (e) => e instanceof B ? e.toJSON() : e;
function X(e, t) {
  t = t || {};
  const s = {};
  function r(c, m, b) {
    return l.isPlainObject(c) && l.isPlainObject(m) ? l.merge.call({ caseless: b }, c, m) : l.isPlainObject(m) ? l.merge({}, m) : l.isArray(m) ? m.slice() : m;
  }
  function o(c, m, b) {
    if (l.isUndefined(m)) {
      if (!l.isUndefined(c))
        return r(void 0, c, b);
    } else
      return r(c, m, b);
  }
  function i(c, m) {
    if (!l.isUndefined(m))
      return r(void 0, m);
  }
  function n(c, m) {
    if (l.isUndefined(m)) {
      if (!l.isUndefined(c))
        return r(void 0, c);
    } else
      return r(void 0, m);
  }
  function a(c, m, b) {
    if (b in t)
      return r(c, m);
    if (b in e)
      return r(void 0, c);
  }
  const d = {
    url: i,
    method: i,
    data: i,
    baseURL: n,
    transformRequest: n,
    transformResponse: n,
    paramsSerializer: n,
    timeout: n,
    timeoutMessage: n,
    withCredentials: n,
    adapter: n,
    responseType: n,
    xsrfCookieName: n,
    xsrfHeaderName: n,
    onUploadProgress: n,
    onDownloadProgress: n,
    decompress: n,
    maxContentLength: n,
    maxBodyLength: n,
    beforeRedirect: n,
    transport: n,
    httpAgent: n,
    httpsAgent: n,
    cancelToken: n,
    socketPath: n,
    responseEncoding: n,
    validateStatus: a,
    headers: (c, m) => o(nt(c), nt(m), !0)
  };
  return l.forEach(Object.keys(e).concat(Object.keys(t)), function(m) {
    const b = d[m] || o, F = b(e[m], t[m], m);
    l.isUndefined(F) && b !== a || (s[m] = F);
  }), s;
}
const Et = "1.3.3", Ie = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ie[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const it = {};
Ie.transitional = function(t, s, r) {
  function o(i, n) {
    return "[Axios v" + Et + "] Transitional option '" + i + "'" + n + (r ? ". " + r : "");
  }
  return (i, n, a) => {
    if (t === !1)
      throw new k(
        o(n, " has been removed" + (s ? " in " + s : "")),
        k.ERR_DEPRECATED
      );
    return s && !it[n] && (it[n] = !0, console.warn(
      o(
        n,
        " has been deprecated since v" + s + " and will be removed in the near future"
      )
    )), t ? t(i, n, a) : !0;
  };
};
function xa(e, t, s) {
  if (typeof e != "object")
    throw new k("options must be an object", k.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o], n = t[i];
    if (n) {
      const a = e[i], d = a === void 0 || n(a, i, e);
      if (d !== !0)
        throw new k("option " + i + " must be " + d, k.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (s !== !0)
      throw new k("Unknown option " + i, k.ERR_BAD_OPTION);
  }
}
const Pe = {
  assertOptions: xa,
  validators: Ie
}, U = Pe.validators;
class me {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new tt(),
      response: new tt()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(t, s) {
    typeof t == "string" ? (s = s || {}, s.url = t) : s = t || {}, s = X(this.defaults, s);
    const { transitional: r, paramsSerializer: o, headers: i } = s;
    r !== void 0 && Pe.assertOptions(r, {
      silentJSONParsing: U.transitional(U.boolean),
      forcedJSONParsing: U.transitional(U.boolean),
      clarifyTimeoutError: U.transitional(U.boolean)
    }, !1), o !== void 0 && Pe.assertOptions(o, {
      encode: U.function,
      serialize: U.function
    }, !0), s.method = (s.method || this.defaults.method || "get").toLowerCase();
    let n;
    n = i && l.merge(
      i.common,
      i[s.method]
    ), n && l.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (f) => {
        delete i[f];
      }
    ), s.headers = B.concat(n, i);
    const a = [];
    let d = !0;
    this.interceptors.request.forEach(function(w) {
      typeof w.runWhen == "function" && w.runWhen(s) === !1 || (d = d && w.synchronous, a.unshift(w.fulfilled, w.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(w) {
      c.push(w.fulfilled, w.rejected);
    });
    let m, b = 0, F;
    if (!d) {
      const f = [ot.bind(this), void 0];
      for (f.unshift.apply(f, a), f.push.apply(f, c), F = f.length, m = Promise.resolve(s); b < F; )
        m = m.then(f[b++], f[b++]);
      return m;
    }
    F = a.length;
    let O = s;
    for (b = 0; b < F; ) {
      const f = a[b++], w = a[b++];
      try {
        O = f(O);
      } catch (D) {
        w.call(this, D);
        break;
      }
    }
    try {
      m = ot.call(this, O);
    } catch (f) {
      return Promise.reject(f);
    }
    for (b = 0, F = c.length; b < F; )
      m = m.then(c[b++], c[b++]);
    return m;
  }
  getUri(t) {
    t = X(this.defaults, t);
    const s = Ft(t.baseURL, t.url);
    return Ct(s, t.params, t.paramsSerializer);
  }
}
l.forEach(["delete", "get", "head", "options"], function(t) {
  me.prototype[t] = function(s, r) {
    return this.request(X(r || {}, {
      method: t,
      url: s,
      data: (r || {}).data
    }));
  };
});
l.forEach(["post", "put", "patch"], function(t) {
  function s(r) {
    return function(i, n, a) {
      return this.request(X(a || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: n
      }));
    };
  }
  me.prototype[t] = s(), me.prototype[t + "Form"] = s(!0);
});
const pe = me;
class Ue {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let s;
    this.promise = new Promise(function(i) {
      s = i;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners)
        return;
      let i = r._listeners.length;
      for (; i-- > 0; )
        r._listeners[i](o);
      r._listeners = null;
    }), this.promise.then = (o) => {
      let i;
      const n = new Promise((a) => {
        r.subscribe(a), i = a;
      }).then(o);
      return n.cancel = function() {
        r.unsubscribe(i);
      }, n;
    }, t(function(i, n, a) {
      r.reason || (r.reason = new ie(i, n, a), s(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const s = this._listeners.indexOf(t);
    s !== -1 && this._listeners.splice(s, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Ue(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
const za = Ue;
function Wa(e) {
  return function(s) {
    return e.apply(null, s);
  };
}
function qa(e) {
  return l.isObject(e) && e.isAxiosError === !0;
}
const Re = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Re).forEach(([e, t]) => {
  Re[t] = e;
});
const Ha = Re;
function Lt(e) {
  const t = new pe(e), s = ht(pe.prototype.request, t);
  return l.extend(s, pe.prototype, t, { allOwnKeys: !0 }), l.extend(s, t, null, { allOwnKeys: !0 }), s.create = function(o) {
    return Lt(X(e, o));
  }, s;
}
const E = Lt(Be);
E.Axios = pe;
E.CanceledError = ie;
E.CancelToken = za;
E.isCancel = Vt;
E.VERSION = Et;
E.toFormData = ye;
E.AxiosError = k;
E.Cancel = E.CanceledError;
E.all = function(t) {
  return Promise.all(t);
};
E.spread = Wa;
E.isAxiosError = qa;
E.mergeConfig = X;
E.AxiosHeaders = B;
E.formToJSON = (e) => Rt(l.isHTMLForm(e) ? new FormData(e) : e);
E.HttpStatusCode = Ha;
E.default = E;
const jt = E;
function Ga(e) {
  return e == null;
}
var Ja = Ga, Qa = function(t) {
  return typeof t == "object" && t !== null;
}, Xa = -18, Za = 5, Ya = 9, el = -72, tl = -74, sl = -68, rl = -69, ol = -7, nl = -127, il = 1, al = -107, ll = 10, ul = 2, cl = -42, dl = -2, pl = -8, ml = -128, hl = 3, fl = -4, _l = -110, yl = -109, bl = -3, gl = -102, vl = -1, Sl = -196, wl = 0, $l = 8, kl = -75, Tl = {
  AssocType: Xa,
  BooleanType: Za,
  ClassType: Ya,
  DapiNodeType: el,
  DapiSessionType: tl,
  DapiStreamType: sl,
  DapiVersionType: rl,
  DateType: ol,
  DynamicType: nl,
  ErrorType: il,
  FileType: al,
  FrameType: ll,
  IntegerType: ul,
  JavaObjectType: cl,
  ListType: dl,
  LongType: pl,
  ObjectType: ml,
  ObjRefType: hl,
  RealType: fl,
  RecArrayType: _l,
  RecordType: yl,
  ScriptType: bl,
  SocketType: gl,
  StringType: vl,
  UAPIType: Sl,
  UndefinedType: wl,
  VoidType: $l,
  WAPIWorkType: kl
}, Mt = {
  createFormData() {
    return new FormData();
  }
};
function Ol(e) {
  const t = jt.create({
    baseURL: e.baseUrl
  });
  return t.interceptors.response.use(
    (s) => {
      const r = $(s, "headers.otcsticket");
      return r && (t.defaults.headers.common.OTCSTicket = r), s;
    },
    (s) => Promise.reject(s)
  ), t;
}
function Cl(e) {
  const t = Ol(e), s = e.username, r = e.password, o = e.otcsticket;
  if (o)
    t.defaults.headers.common.OTCSTicket = o;
  else if (s && r)
    t.interceptors.request.use(async (i) => {
      if (i.headers.common.OTCSTicket)
        return i;
      {
        const n = Mt.createFormData();
        n.append("username", s), n.append("password", r);
        const a = await jt.post(`${e.baseUrl}/api/v1/auth/`, n);
        return i.headers.common.OTCSTicket = $(a, "data.ticket"), i;
      }
    });
  else
    throw Error("You must provide an otcsticket or username and password.");
  return t;
}
class H {
  _session;
  constructor(t) {
    this._session = new WeakRef(t);
  }
  get session() {
    return this._session.deref();
  }
}
class Pl extends H {
  auth() {
    return this.session.get("/api/v1/auth/");
  }
}
var Rl = 834, Vl = 1298, Fl = 30309, El = 907, Ll = 1, jl = 480, Ml = 483, Al = 481, Nl = 31711, Kl = 290, Dl = 291, Bl = 274, Il = 356, Ul = 357, xl = 530, zl = 131, Wl = 132, ql = 207, Hl = 209, Gl = 199, Jl = 196, Ql = 194, Xl = 298, Zl = 902, Yl = 345, eu = 348, tu = 346, su = 3030338, ru = 3030339, ou = 3030329, nu = 3030002, iu = 3030333, au = 3030004, lu = 3030335, uu = 3030334, cu = 3030205, du = 136, pu = 557, mu = 3030372, hu = 146, fu = 844, _u = 270, yu = 276, bu = 277, gu = 215, vu = 602, Su = 144, wu = 1297, $u = 283, ku = 32912, Tu = 32916, Ou = 31707, Cu = 32914, Pu = 31709, Ru = 32917, Vu = 32915, Fu = 32913, Eu = 31602, Lu = 31601, ju = 31603, Mu = 335, Au = 900, Nu = 749, Ku = 2504, Du = 904, Bu = 905, Iu = 903, Uu = 1299, xu = 906, zu = 0, Wu = 223, qu = 2, Hu = 3030371, Gu = 482, Ju = 833, Qu = 282, Xu = 226, Zu = 293, Yu = 731, ec = 368, tc = 147, sc = 281, rc = 924, oc = 541, nc = 542, ic = 361, ac = 259, lc = 272, uc = 123475, cc = 123476, dc = 123469, pc = 123470, mc = 430, hc = 432, fc = 422, _c = 732, yc = 3030331, bc = 31710, gc = 410, vc = 414, Sc = 919, wc = 920, $c = 273, kc = 1281, Tc = 1282, Oc = 372, Cc = 374, Pc = 373, Rc = 870, Vc = 532, Fc = 3030756, Ec = 208, Lc = 257, jc = 371, Mc = 370, Ac = 3030203, Nc = 3030003, Kc = 3030204, Dc = 398, Bc = 3030343, Ic = 424, Uc = 412, xc = 419, zc = 411, Wc = 415, qc = 418, Hc = 416, Gc = 417, Jc = 218, Qc = 271, Xc = 195, Zc = 202, Yc = 543, ed = 201, td = 384, sd = 380, rd = 387, od = 829, nd = 31712, id = 31713, ad = 441, ld = 296, ud = 431, cd = 327, dd = 425, pd = 428, md = 32918, hd = 32919, fd = 138, _d = 381, yd = 134, bd = 299, gd = 139, vd = 555, Sd = 554, wd = 552, $d = 553, kd = 556, Td = 551, Od = 426, Cd = 427, Pd = 558, Rd = 559, Vd = 2505, Fd = 835, Ed = 32901, Ld = 258, jd = 369, Md = 269, Ad = 278, Nd = 383, Kd = 292, Dd = 31678, Bd = 49547, Id = 275, Ud = 1280, xd = 1283, zd = 797, Wd = 796, qd = 795, Hd = 3030202, Gd = 3030201, Jd = 3030001, Qd = 3030130, Xd = 280, Zd = 421, Yd = 231, ep = 206, tp = 205, sp = 204, rp = 210, op = 212, np = 230, ip = 268, ap = 145, lp = 130, up = 423, cp = 531, dp = 526, pp = 527, mp = 3030330, hp = 140, fp = 899, _p = 123461, yp = 133, bp = 198, gp = 347, vp = 987352, Sp = 405, wp = 375, $p = 143, kp = 180, Tp = 336, Op = 162, Cp = 901, Pp = 141, Rp = 403, Vp = 397, Fp = 908, Ep = 413, Lp = 550, jp = 137, Mp = 211, Ap = 148, Np = 149, Kp = 484, Dp = 1296, Bp = 525, Ip = 142, Up = 161, xp = 529, zp = 236, Wp = 235, qp = 234, Hp = 233, Gp = 30303, Jp = 128, Qp = 190, Xp = 5573, Zp = 5574, Yp = 528, em = 154, tm = 286, sm = 285, ke = {
  "2WayTee": 294,
  Accession: Rl,
  ActiveFolder: Vl,
  Activeview: Fl,
  ActivityManager: El,
  Alias: Ll,
  Appearance: jl,
  AppearanceFolder: Ml,
  AppearancesVolume: Al,
  ArchiveFolder: Nl,
  BackupManager: Kl,
  BackupProcess: Dl,
  BestBets: Bl,
  Blog: Il,
  BlogEntry: Ul,
  BoxFolder: xl,
  Category: zl,
  CategoryFolder: Wl,
  Channel: ql,
  ChannelVol: Hl,
  Classification: Gl,
  "Classification Shortcut": 197,
  ClassificationTree: Jl,
  ClassifiedItems: Ql,
  Collection: Xl,
  Column: Zl,
  Comments: Yl,
  CommentsReply: eu,
  CommentsVol: tu,
  CommExpertContainer: su,
  CommExpertGroup: ru,
  CommStore: ou,
  CommTemplate: nu,
  CommTemplateFolder: iu,
  CommTemplateVol: au,
  CommURLStore: lu,
  CommWorkspace: uu,
  CommXSLVolume: cu,
  CompoundDoc: du,
  CompoundEMail: pu,
  ContentModuleFolder: mu,
  "csapps CSApplicationManifest": 32658,
  "csapps CSApplicationsVolume": 32657,
  CustomView: hu,
  CustomViewTemplate: fu,
  DataFlowManager: _u,
  DataSourceFolder: yu,
  DirWalker: bu,
  Discussion: gu,
  DispositionGroup: vu,
  Document: Su,
  DocumentLLNode: wu,
  DocumentServer: $u,
  Dossier: ku,
  DossierCabinet: Tu,
  DossierCabinetArchive: Ou,
  DossierTemplate: Cu,
  DossierTemplateFolder: Pu,
  DossierTemplatesVolume: Ru,
  DossierTemplateVolume: Vu,
  DossierVolume: Fu,
  DPSBinding: Eu,
  DPSFolder: Lu,
  DPSVolume: ju,
  DTDLLNode: Mu,
  DynamicView: Au,
  EMail: Nu,
  EmailConversationItems: Ku,
  "Enterprise Archive Document": 753,
  Facet: Du,
  FacetFolder: Bu,
  FacetTree: Iu,
  FailedFolder: Uu,
  FixedSystemColumn: xu,
  Folder: zu,
  Form: Wu,
  Generation: qu,
  GENERICCONTENTMODULE: Hu,
  GlobalAppearance: Gu,
  HoldContainer: Ju,
  HTMLConversion: Qu,
  HTMLFormView: Xu,
  Importer: Zu,
  Inbox: Yu,
  IndexEngine: ec,
  IndexTracer: tc,
  IndexUpdate: sc,
  InternalOTDS: rc,
  ItemTemplateVol: oc,
  ItemTemplateVolFolder: nc,
  JournalVolume: ic,
  LibraryExtractor: ac,
  LibraryObj: lc,
  "LLNode Email Folder": 751,
  LLNodeFAQ: uc,
  LLNodeFAQEntry: cc,
  LLNodeForum: dc,
  LLNodeForumEntry: pc,
  LLNodeURQuestion: mc,
  LLNodeURReply: hc,
  Locators: fc,
  Mailbox: _c,
  MailStore: yc,
  ManagedSpace: bc,
  MediaType: gc,
  MediaTypesContainer: vc,
  MemcachedFolder: Sc,
  MemcachedProcess: wc,
  Merge: $c,
  MicroPost: kc,
  MicroPostVolume: Tc,
  MultiVolClassification: Oc,
  MultiVolClassificationProxy: Cc,
  MultiVolClassificationTree: Pc,
  MyReservedItems: Rc,
  MyWorkbenches: Vc,
  NAVMENUVOL: Fc,
  News: Ec,
  OTCIndexObj: Lc,
  Partition: jc,
  PartitionMap: Mc,
  PersonalComm: Ac,
  PersonalCommSystemVolume: Nc,
  PersonalCommVol: Kc,
  PersonalStagingFolder: Dc,
  PersonalWebpage: Bc,
  PhysicalItemBox: Ic,
  PhysicalItemContainer: Uc,
  PhysicalItemCopy: xc,
  PhysicalItem_non_Container: zc,
  PhysObjAdmin: Wc,
  PhysObjBatchLabels: qc,
  PhysObjCirculation: Hc,
  PhysObjReports: Gc,
  Poll: Jc,
  Process: Qc,
  Profile: Xc,
  Project: Zc,
  ProjectTemplate: Yc,
  ProjectVol: ed,
  Prospector: td,
  ProspectorQueries: sd,
  ProspectorSnapshot: rd,
  Provenance: od,
  Proxy: 260,
  PublishingFolder: nd,
  PublishingFolderVolume: id,
  QAFolder: ad,
  QueryFile: ld,
  QuestionVolume: ud,
  RecentItems: cd,
  RecordType: dd,
  RecordTypesContainer: pd,
  RedForm: md,
  RedFormVolume: hd,
  Release: fd,
  RemoteLLDataSource: _d,
  Reply: yd,
  Report: bd,
  Revision: gd,
  RIMSDisposition: vd,
  RIMSDispositionsContainer: Sd,
  RIMSHoldMaintenance: wd,
  RIMSRsiContainer: $d,
  RMAdministration: kd,
  RMClassification: Td,
  RMFolder: Od,
  RMPart: Cd,
  RMReportsContainer: Pd,
  RMThesaurus: Rd,
  ScanConfigurationVolume: Vd,
  ScheduledHoldCriteria: Fd,
  ScriptNode: Ed,
  SearchBroker: Ld,
  SearchEngine: jd,
  SearchManager: Md,
  SearchReport: Ad,
  SearchResultsTemplate: Nd,
  SearchTemplate: Kd,
  Simplate: Dd,
  SkyPodLLVolume: Bd,
  SliceFolder: Id,
  SocialObject: Ud,
  SocialObjectVolume: xd,
  SPCJOBDESCR: zd,
  SPCJOBDESCRFOLDER: Wd,
  SPCVOLUME: qd,
  spdcommittee: Hd,
  spdcommitteevol: Gd,
  spdcommitteevolume: Jd,
  spdemail: Qd,
  Spider: Xd,
  StorageManagement: Zd,
  SubmitVersionNode: Yd,
  Task: ep,
  TaskGroup: tp,
  TaskList: sp,
  TaskListVol: rp,
  TaskMilestone: op,
  Template: np,
  TemplateFolder: ip,
  TextDocument: ap,
  Topic: lp,
  Transfers: up,
  TransportBox: cp,
  TransportItem: dp,
  TransportItemPart: pp,
  UrgentRequests: mp,
  URL: hp,
  VirtualFolder: fp,
  VolBlog: _p,
  VolCategories: yp,
  VolClassification: bp,
  VolComments: gp,
  VolDAP: vp,
  VolDeletedItems: Sp,
  VolDirectory: wp,
  VolDiscussion: $p,
  VolDomainWorkspace: kp,
  VolDTD: Tp,
  VolEditWorkflow: Op,
  VolFacets: Cp,
  VolLibrary: Pp,
  VolOrphan: Rp,
  VolPersonalStaging: Vp,
  VolPerspectives: Fp,
  VolPhysObj: Ep,
  VolRecMan: Lp,
  VolRelease: jp,
  VolReports: Mp,
  VolSystem: Ap,
  VolTracer: Np,
  VolumeFolder: Kp,
  VolumeLLVolume: Dp,
  VolWarehouse: Bp,
  VolWorkbin: Ip,
  VolWorkflow: Up,
  WarehouseFolder: xp,
  WebFormConnectionVolume: zp,
  WebFormDatabaseConnection: Wp,
  WebFormLookup: qp,
  WebFormLookupVolume: Hp,
  WebReports: Gp,
  WFMapLLNode: Jp,
  WFStatusNode: Qp,
  WIKI: Xp,
  WIKIPAGE: Zp,
  Workbench: Yp,
  WorkflowAttachments: em,
  XMLActivatorCon: tm,
  XMLActivatorProd: sm
};
class rm extends H {
  addablenodetypes(t) {
    return this.session.get(`api/v1/nodes/${t}/addablenodetypes`);
  }
  async addDocument({
    parent_id: t,
    fileHandler: s,
    apiVersion: r = "v1",
    // v1 or v2
    name: o = null,
    options: i = {}
  }) {
    console.assert(t != null, "parent_id cannot be null"), console.assert(s != null, "fileHandler cannot be null"), console.assert(
      ["v1", "v2"].includes(r),
      "apiVersion must be in ['v1','v2']"
    );
    const n = `api/${r}/nodes`;
    {
      const a = o || s.name, d = {
        ...i,
        type: ke.Document,
        name: a,
        parent_id: t,
        file: {
          file: s,
          name: a
        }
      };
      return this.session.postForm(n, d);
    }
  }
  async addDocumentMajor({
    parent_id: t,
    fileHandler: s,
    name: r = null,
    description: o = null,
    options: i = {}
  }) {
    const n = await this.addDocument({
      parent_id: t,
      fileHandler: s,
      name: r,
      options: {
        ...i,
        advanced_versioning: !0
      }
    }), a = n.data.id;
    return await this.session.versions.promote({
      dataid: a,
      versionNumber: 1,
      description: o
    }), await this.session.versions.deleteVersion({
      dataid: a,
      versionNumber: 1
    }), n;
  }
  addItem(t, s, r, o = {}) {
    return this.session.postBody("api/v2/nodes", {
      type: t,
      parent_id: s,
      name: r,
      ...o
    });
  }
  node({ dataid: t, apiVersion: s = "v2", params: r = {} }) {
    return this.session.get(`api/${s}/nodes/${t}`, {
      params: r
    });
  }
  ancestors(t, s = {}) {
    return this.session.get(`api/v1/nodes/${t}/ancestors`, {
      params: s
    });
  }
  volumeInfo(t) {
    return this.session.get(`api/v1/volumes/${t}`);
  }
  volumes() {
    return this.session.get("api/v2/volumes");
  }
  addFolder(t, s, r = {}) {
    return this.addItem(ke.Folder, t, s, r);
  }
  addGeneration(t, s, r, o, i = {}) {
    return this.addItem(ke.Generation, t, s, {
      original_id: r,
      version_number: o,
      ...i
    });
  }
  nodes(t, s = {}) {
    return this.session.get(`api/v2/nodes/${t}/nodes`, {
      params: s
    });
  }
  children(t, s = {}) {
    return this.nodes(t, s);
  }
  delete(t) {
    return this.session.delete(`api/v1/nodes/${t}`);
  }
  download({ dataid: t, apiVersion: s = "v1", filePath: r }) {
    return Promise.reject("Not implemented yet");
  }
  audit({ dataid: t, apiVersion: s = "v2", params: r = {} }) {
    return this.session.get(`api/${s}/nodes/${t}/audit`, {
      params: r
    });
  }
}
class om extends H {
  start(t) {
    return this.draftprocesses(t).then((s) => $(s, "data.results.draftprocess_id")).then((s) => this.draftprocesses_update(s));
  }
  draftprocesses(t) {
    return this.session.postForm("api/v2/draftprocesses", {
      workflow_id: t
    });
  }
  draftprocesses_update(t) {
    return this.session.get("api/v1/forms/draftprocesses/update", {
      params: {
        draftprocess_id: t
      }
    });
  }
  draftprocesses_put(t, s) {
    return this.session.putForm(`api/v2/draftprocesses/${t}`, {
      body: s
    });
  }
  // draftprocesses_formUpdate(draftprocess_id, values) {
  // const body = {
  // action: "formUpdate",
  // values
  // }
  // return this.draftprocesses_put(draftprocess_id, body)
  // }
}
class nm extends H {
  scriptNode(t, s = {}) {
    return this.session.get(`api/v1/rhcore/${t}`, {
      params: s
    });
  }
}
class im extends H {
  search(t, s = {}) {
    return this.session.postBody("api/v2/search", {
      where: t,
      ...s
    });
  }
  regions(t = {}) {
    return this.session.get("api/v1/regions", t);
  }
}
class am extends H {
  // public readonly USER: 0
  // public readonly GROUP: 1
  USER;
  GROUP;
  constructor(t) {
    super(t), this.USER = 0, this.GROUP = 1;
  }
  userQuery(t, s = {}, r = "v2") {
    const o = {
      limit: 20,
      where_type: JSON.stringify([this.USER, this.GROUP]),
      query: t,
      ...s
    };
    return this.session.get(`api/${r}/members`, { params: o });
  }
  member(t, s = "v2") {
    return this.session.get(`api/${s}/members/${t}`);
  }
}
class lm extends H {
  async addVersion({
    dataid: t,
    fileHandler: s,
    apiVersion: r = "v1",
    fileName: o = null,
    options: i = {}
  }) {
    console.assert(t != null, "dataid cannot be null"), console.assert(s != null, "fileHandler cannot be null");
    const n = `api/${r}/nodes/${t}/versions`;
    {
      const a = o || s.name, d = {
        file: {
          file: s,
          name: a
        },
        ...i
      };
      return this.session.postForm(n, d);
    }
  }
  async download({ dataid: t, version: s, filePath: r }) {
    return console.assert(t != null, "dataid cannot be null"), console.assert(s != null, "version cannot be null"), console.assert(r != null, "filePath cannot be null"), Promise.reject("Not implemented yet");
  }
  async list(t) {
    const s = `api/v1/nodes/${t}/versions`;
    return this.session.get(s);
  }
  async version(t, s = "latest") {
    const r = `api/v1/nodes/${t}/versions/${s}`;
    return this.session.get(r);
  }
  async promote({ dataid: t, versionNumber: s, description: r = null }) {
    console.assert(t != null, "dataid cannot be null"), console.assert(s != null, "number_to_keep must be an integer");
    const o = `api/v2/nodes/${t}/versions/${s}/promote`;
    return this.session.postBody(o, {
      ...!!r && {
        description: r
      }
    });
  }
  async deleteVersion({ dataid: t, versionNumber: s, apiVersion: r = "v1" }) {
    console.assert(t != null, "dataid cannot be null"), console.assert(s != null, "number_to_keep must be an integer");
    const o = `api/${r}/nodes/${t}/versions/${s}`;
    return this.session.delete(o);
  }
  async purge({ dataid: t, number_to_keep: s = 1 }) {
    console.assert(t != null, "dataid cannot be null"), console.assert(!isNaN(s), "number_to_keep must be an integer");
    const r = `api/v2/nodes/${t}/versions`;
    return this.session.deleteForm(r, {
      number_to_keep: s
    });
  }
}
class um extends H {
  run(t, s = {}) {
    const r = `api/v1/nodes/${t}/output`;
    return this.session.get(r, { params: s });
  }
}
const at = {
  PARSEERROR: {
    code: -32700,
    message: "Parse error"
  },
  INVALIDREQUEST: {
    code: -32600,
    message: "Invalid Request"
  },
  METHODNOTFOUND: {
    code: -32601,
    message: "Method not found"
  },
  INVALIDPARAMS: {
    code: -32602,
    message: "Invalid params"
  },
  INTERNALERROR: {
    code: -32603,
    message: "Internal error"
  }
};
class cm extends Error {
  code;
  data;
  constructor(t = at.INTERNALERROR.message, s = null, r = at.INTERNALERROR.code) {
    if (Qa(t)) {
      const o = t;
      super(o.message), this.code = o.code, this.data = o.data;
    } else
      super(t), this.code = r, this.data = s;
  }
}
const le = {
  index: 0,
  get next() {
    return this.index = this.index + 1, this.index;
  }
};
class dm {
  session;
  relativePath;
  _batchQueue;
  constructor(t, s) {
    this.session = t, this.relativePath = s, this.resetQueue();
  }
  requestObject(t, s, r) {
    return {
      jsonrpc: "2.0",
      method: t,
      id: r,
      params: s
    };
  }
  handleResponse(t) {
    if (Object.prototype.hasOwnProperty.call(t, "result"))
      return t.result;
    if (Object.prototype.hasOwnProperty.call(t, "error")) {
      const s = t.error;
      throw new cm(s.message, s.data, s.code);
    } else
      throw Error("The server did not respond correctly.");
  }
  // https://www.jsonrpc.org/specification#request_object
  // params is allowed to be null!
  // also on queue function below
  async request(t, s, r = le.next) {
    const o = await this.session.postBody(this.relativePath, {
      rpc: this.requestObject(t, s, r)
    });
    return this.handleResponse(o.data);
  }
  resetQueue() {
    this._batchQueue = [];
  }
  queue(t, s, r = le.next) {
    return this._batchQueue.push(this.requestObject(t, s, r)), this;
  }
  async batch(t = !1) {
    const s = this._batchQueue;
    this.resetQueue();
    const r = await this.session.postBody(this.relativePath, {
      rpc: s
    });
    return $(r, "data.data", []).map((o) => {
      if (t)
        return this.handleResponse(o);
      try {
        return this.handleResponse(o);
      } catch (i) {
        return i;
      }
    });
  }
  rhnode(t, s, r = [], o = le.next) {
    const i = {
      dataid: t,
      args: r
    };
    return this.request(s, i, o);
  }
  rhnodeQueue(t, s, r = [], o = le.next) {
    const i = {
      dataid: t,
      args: r
    };
    return this.queue(s, i, o);
  }
}
class pm {
  axios;
  _nodes;
  _auth;
  _workflow;
  _rhcore;
  _members;
  _search;
  _webreports;
  _versions;
  constructor(t) {
    this.axios = Cl(t);
  }
  get nodes() {
    return this._nodes == null && (this._nodes = new rm(this)), this._nodes;
  }
  get auth() {
    return this._auth == null && (this._auth = new Pl(this)), this._auth;
  }
  get workflow() {
    return this._workflow == null && (this._workflow = new om(this)), this._workflow;
  }
  get rhcore() {
    return this._rhcore == null && (this._rhcore = new nm(this)), this._rhcore;
  }
  get members() {
    return this._members == null && (this._members = new am(this)), this._members;
  }
  get search() {
    return this._search == null && (this._search = new im(this)), this._search;
  }
  get webreports() {
    return this._webreports == null && (this._webreports = new um(this)), this._webreports;
  }
  get versions() {
    return this._versions == null && (this._versions = new lm(this)), this._versions;
  }
  get dataTypesEnum() {
    return Tl;
  }
  rpcClient(t = "/api/v1/rh/rpc/rhnode/") {
    return new dm(this, t);
  }
  _isObject(t) {
    return t && typeof t == "object" && t.constructor === Object;
  }
  _isString(t) {
    return typeof t == "string" || t instanceof String;
  }
  _isBoolean(t) {
    return typeof t == "boolean";
  }
  objectToForm(t) {
    const s = Mt.createFormData();
    for (const [r, o] of Object.entries(t))
      o && o.name && o.file ? s.append(r, o.file, o.name) : Array.isArray(o) || this._isObject(o) || this._isBoolean(o) ? s.append(r, JSON.stringify(o)) : Ja(o) || s.append(r, o);
    return s;
  }
  putForm(t, s) {
    const r = this.objectToForm(s);
    return this.put(t, r);
  }
  postForm(t, s) {
    const r = this.objectToForm(s);
    return this.post(t, r, {
      maxBodyLength: 1 / 0
    });
  }
  patchForm(t, s) {
    const r = this.objectToForm(s);
    return this.patch(t, r);
  }
  deleteForm(t, s) {
    return this.delete(t);
  }
  putBody(t, s) {
    return this.putForm(t, {
      body: s
    });
  }
  postBody(t, s) {
    return this.postForm(t, {
      body: s
    });
  }
  patchBody(t, s) {
    return this.patchForm(t, {
      body: s
    });
  }
  deleteBody(t, s) {
    return this.deleteForm(t, {
      body: s
    });
  }
  get(t, s) {
    return this.axios.get(t, s);
  }
  // get(...args) {
  //   return this.axios.get(...args)
  // }
  post(t, s, r) {
    return this.axios.post(t, s, r);
  }
  put(t, s, r) {
    return this.axios.put(t, s, r);
  }
  patch(t, s, r) {
    return this.axios.patch(t, s, r);
  }
  options(t, s) {
    return this.axios.options(t, s);
  }
  delete(t, s) {
    return this.axios.delete(t, s);
  }
  // post(...args) {
  //   return this.axios.post(...args)
  // }
  // put(...args) {
  //   return this.axios.put(...args)
  // }
  // delete(...args) {
  //   return this.axios.delete(...args)
  // }
  // options(...args) {
  //   return this.axios.options(...args)
  // }
  // patch(...args) {
  //   return this.axios.patch(...args)
  // }
}
const mm = /* @__PURE__ */ Object.assign({
  "./components/Card/KCard.vue": Gt,
  "./components/Card/KCardActions.vue": Yt,
  "./components/Card/KCardText.vue": os,
  "./components/Card/KCardTitle.vue": us,
  "./components/KAdminLink.vue": fs,
  "./components/KAlert.vue": Ss,
  "./components/KApp.vue": Os,
  "./components/KAutocomplete.vue": js,
  "./components/KBrowseLink.vue": zs,
  "./components/KButton.vue": Js,
  "./components/KConfirm.vue": tr,
  "./components/KDateTimePicker.vue": ar,
  "./components/KDialog.vue": dr,
  "./components/KDot.vue": fr,
  "./components/KFormFieldWrapper.vue": vr,
  "./components/KFunctionMenu.vue": Pr,
  "./components/KLinearProgressIndicator.vue": Lr,
  "./components/KMulti.vue": Ir,
  "./components/KMulti2.vue": Gr,
  "./components/KMultiUserPicker.vue": Zr,
  "./components/KNodeAncestor.vue": ro,
  "./components/KNodePickerField.vue": uo,
  "./components/KOneMoment.vue": _o,
  "./components/KPageDropZone.vue": vo,
  "./components/KPageTitle.vue": Oo,
  "./components/KPagination.vue": Bo,
  "./components/KPagination2.vue": Xo,
  "./components/KRadioGroup.vue": rn,
  "./components/KScratch.vue": ln,
  "./components/KSelect.vue": hn,
  "./components/KSnackbar.vue": kn,
  "./components/KSortHeader.vue": Vn,
  "./components/KSpacer.vue": Mn,
  "./components/KSpinner.vue": In,
  "./components/KSwitch.vue": qn,
  "./components/KTable.vue": Qn,
  "./components/KTextArea.vue": ti,
  "./components/KTextField.vue": ii,
  "./components/KUserGIF.vue": di,
  "./components/KUserLink.vue": bi,
  "./components/KUserPicker.vue": wi,
  "./components/Tabs/KTabItem.vue": Ci,
  "./components/Tabs/KTabs.vue": Mi
}), wm = {
  install(e, t) {
    Object.entries(mm).forEach(
      ([o, i]) => {
        const n = o?.split("/")?.pop()?.replace(/\.\w+$/, "");
        e.component(n, i.default);
      }
    );
    const s = new pm(t), r = {
      img: t.img,
      baseUrl: t.baseUrl,
      jsLongDateFormat: t.datelong,
      jsShortDateFormat: t.dateshort
    };
    e.provide(Z, s), e.provide(fe, r);
  }
};
export {
  fe as configKey,
  Xs as confirmDialogKey,
  wm as default,
  W as injectStrict,
  Z as sessionKey,
  Qs as snackbarKey
};
