import { defineComponent as _, h as Nt, openBlock as u, createElementBlock as d, renderSlot as R, inject as it, Fragment as V, createElementVNode as h, normalizeStyle as Q, resolveComponent as v, createVNode as P, withCtx as $, resolveDirective as at, withDirectives as W, normalizeClass as j, withKeys as te, withModifiers as z, vModelText as Ve, renderList as A, createTextVNode as L, toDisplayString as T, createCommentVNode as g, createBlock as C, mergeProps as lt, vModelDynamic as Dt, Teleport as Kt, Transition as pe, setBlockTracking as Ue, TransitionGroup as Fe, vModelRadio as Bt, vModelSelect as It, useCssVars as ut } from "vue";
import { directive as ct } from "vue3-click-away";
import w from "lodash.get";
import Ee from "@chriscdn/promise-semaphore";
import { format as xe } from "date-fns";
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
}, M = (e, t = "px") => {
  if (!(e == null || e === ""))
    return isNaN(+e) ? String(e) : `${Number(e)}${t}`;
}, me = _({
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
      const e = {}, t = M(this.height), s = M(this.minHeight), r = M(this.minWidth), o = M(this.maxHeight), i = M(this.maxWidth), n = M(this.width);
      return t && (e.height = t), s && (e.minHeight = s), r && (e.minWidth = r), o && (e.maxHeight = o), i && (e.maxWidth = i), n && (e.width = n), e;
    }
  }
}), Ht = _({
  mixins: [me, qt],
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
const Qt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ht
}, Symbol.toStringTag, { value: "Module" })), Gt = _({});
const y = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [r, o] of t)
    s[r] = o;
  return s;
}, Jt = { class: "k-card-actions" };
function Xt(e, t, s, r, o, i) {
  return u(), d("div", Jt, [
    R(e.$slots, "default")
  ]);
}
const Zt = /* @__PURE__ */ y(Gt, [["render", Xt]]), Yt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zt
}, Symbol.toStringTag, { value: "Module" })), es = _({});
const ts = { class: "k-card-text" };
function ss(e, t, s, r, o, i) {
  return u(), d("div", ts, [
    R(e.$slots, "default")
  ]);
}
const rs = /* @__PURE__ */ y(es, [["render", ss]]), os = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: rs
}, Symbol.toStringTag, { value: "Module" })), ns = _({});
const is = { class: "k-card-title" };
function as(e, t, s, r, o, i) {
  return u(), d("div", is, [
    R(e.$slots, "default")
  ]);
}
const ls = /* @__PURE__ */ y(ns, [["render", as]]), us = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ls
}, Symbol.toStringTag, { value: "Module" })), cs = _({
  setup() {
    return { config: it("config", {}) };
  }
}), ds = /* @__PURE__ */ h("hr", null, null, -1), ps = ["href"];
function ms(e, t, s, r, o, i) {
  return u(), d(V, null, [
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
  mixins: [_s]
});
const bs = { class: "flex-grow" };
function gs(e, t, s, r, o, i) {
  return u(), d("div", {
    class: "k-alert",
    style: Q([e.colorableBackgroundStyle])
  }, [
    h("div", bs, [
      R(e.$slots, "default")
    ])
  ], 4);
}
const vs = /* @__PURE__ */ y(ys, [["render", gs]]), Ss = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vs
}, Symbol.toStringTag, { value: "Module" }));
const $s = {}, ws = { class: "k-app" };
function ks(e, t) {
  const s = v("KSnackbar"), r = v("KConfirm");
  return u(), d("div", ws, [
    P(r, null, {
      default: $(() => [
        P(s, null, {
          default: $(() => [
            R(e.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    })
  ]);
}
const Ts = /* @__PURE__ */ y($s, [["render", ks]]), Os = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ts
}, Symbol.toStringTag, { value: "Module" })), Cs = _({
  directives: {
    ClickAway: ct
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
        width: M(this.width)
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
        e ? this.returnObject ? this.$emit("update:modelValue", e) : this.$emit("update:modelValue", w(e, this.itemValue, e)) : this.$emit("update:modelValue", null);
      },
      get() {
        return this.isObject(this.modelValue) ? this.modelValue : this.items.find(
          (e) => w(e, this.itemValue, e) == this.modelValue
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
        this.isObject(this.localValue) ? w(this.localValue, this.itemText, "") : this.localValue
      )));
    },
    value: {
      handler(e) {
        this.inputText = w(this.localValue, this.itemText, e);
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
      this.combobox ? t && (this.localValue = t) : (this.localValue = t, this.inputText = w(
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
  const n = at("click-away");
  return W((u(), d("div", {
    class: "k-autocomplete",
    style: Q([e.style])
  }, [
    R(e.$slots, "prepend", { item: e.localValue }),
    h("div", Ps, [
      W(h("input", {
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = (a) => e.inputText = a),
        class: j(["k-input", { invalidSelection: !e.isValidSelection }]),
        type: "search",
        autocomplete: "off",
        placeholder: e.placeholderText,
        readonly: !e.editable,
        onSearch: t[1] || (t[1] = (...a) => e.clearInput && e.clearInput(...a)),
        onKeydown: [
          t[2] || (t[2] = te(z((a) => e.currentFocus = Math.max(-1, e.currentFocus - 1), ["prevent"]), ["arrow-up"])),
          t[3] || (t[3] = te(z((a) => e.currentFocus = Math.min(e.items.length - 1, e.currentFocus + 1), ["prevent"]), ["arrow-down"])),
          t[4] || (t[4] = te(z((a) => e.select(e.currentFocus), ["prevent"]), ["enter"])),
          t[6] || (t[6] = te((...a) => e.setBlur && e.setBlur(...a), ["tab"]))
        ],
        onFocus: t[5] || (t[5] = (...a) => e.setFocus && e.setFocus(...a)),
        onKeyup: t[7] || (t[7] = (...a) => e.keyup && e.keyup(...a))
      }, null, 42, Rs), [
        [Ve, e.inputText]
      ]),
      e.focus && e.items.length && e.inputText ? (u(), d("div", Vs, [
        (u(!0), d(V, null, A(e.itemsFiltered, (a, p) => (u(), d("div", {
          key: p,
          class: j(["k-autocomplete-item", { "k-autocomplete-active": e.currentFocus == p }]),
          onClick: (c) => e.select(p)
        }, [
          R(e.$slots, "item", { item: a }, () => [
            L(T(a), 1)
          ])
        ], 10, Fs))), 128))
      ])) : g("", !0)
    ])
  ], 4)), [
    [n, e.setBlur]
  ]);
}
const Ls = /* @__PURE__ */ y(Cs, [["render", Es]]), Ms = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ls
}, Symbol.toStringTag, { value: "Module" }));
function I(e, t) {
  const s = it(e, t);
  if (!s)
    throw new Error(`Could not resolve ${e.description}`);
  return s;
}
const G = Symbol("session"), he = Symbol("config"), js = Symbol("snackbar"), As = Symbol("confirmDialogKey"), ge = new Ee();
class Ns {
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
      dataId: r
    }), clearInterval(this.intervalId), this.intervalId = setTimeout(this.processQueue.bind(this), 50);
  }
  async processQueue() {
    const t = this.session.rpcClient("/api/v1/rh/rpc/node/"), s = this.queueItems;
    this.resetQueue(), s.forEach((r) => {
      const o = r.dataId;
      t.queue("NodeLookup", { dataId: o });
    });
    try {
      (await t.batch(!0)).forEach((o, i) => {
        const n = s[i].resolveFunc;
        n(o);
      });
    } catch {
      s.forEach((r) => r.resolveFunc(null));
    }
  }
}
class Ds {
  nodes;
  nodeLookupQueue;
  constructor() {
    this.nodes = {}, this.nodeLookupQueue = new Ns();
  }
  registerUsers(t) {
    t.forEach((s) => this.nodes[s.dataid] = s);
  }
  async lookup(t, s) {
    return s ? (await ge.acquire(s), this.nodes[s] ? (ge.release(s), this.nodes[s]) : new Promise((r) => {
      const o = (i) => {
        this.nodes[s] = i, r(i), ge.release(s);
      };
      this.nodeLookupQueue.queue(t, o, s);
    })) : null;
  }
}
const Ks = new Ds(), Bs = _({
  setup() {
    return { session: I(G) };
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
        e && (this.nodeRecLocal = await Ks.lookup(this.session, e));
      },
      immediate: !0
    }
  }
}), Is = { key: 0 }, Us = ["src"], xs = ["href"], zs = ["innerHTML"];
function Ws(e, t, s, r, o, i) {
  const n = v("KFunctionMenu");
  return e.nodeRecResolved ? (u(), d("span", Is, [
    e.image ? (u(), d("img", {
      key: 0,
      src: e.nodeRecResolved.gif
    }, null, 8, Us)) : g("", !0),
    L(" "),
    h("a", {
      href: e.nodeRecResolved.url
    }, T(e.nodeRecResolved.name), 9, xs),
    e.clickable ? (u(), C(n, {
      key: 1,
      dataid: e.nodeRecResolved.dataid
    }, null, 8, ["dataid"])) : g("", !0),
    h("span", {
      innerHTML: e.nodeRecResolved.modifiedImageCallback
    }, null, 8, zs)
  ])) : g("", !0);
}
const qs = /* @__PURE__ */ y(Bs, [["render", Ws]]), Hs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qs
}, Symbol.toStringTag, { value: "Module" })), Qs = _({
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
const Gs = ["disabled"];
function Js(e, t, s, r, o, i) {
  return u(), d("button", lt({
    class: ["k-button", e.classObj],
    disabled: e.disabled,
    type: "button"
  }, e.$attrs, {
    onClick: t[0] || (t[0] = (n) => e.$emit("click"))
  }), [
    R(e.$slots, "default")
  ], 16, Gs);
}
const Xs = /* @__PURE__ */ y(Qs, [["render", Js]]), Zs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xs
}, Symbol.toStringTag, { value: "Module" })), Ys = _({
  provide() {
    return {
      // @ts-ignore - not sure why this complains
      [As]: this
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
function er(e, t, s, r, o, i) {
  const n = v("KCardTitle"), a = v("KCardText"), p = v("KSpacer"), c = v("KButton"), m = v("KCardActions"), b = v("KCard"), F = v("KDialog");
  return u(), d(V, null, [
    R(e.$slots, "default"),
    P(F, {
      modelValue: e.dialog,
      "onUpdate:modelValue": t[2] || (t[2] = (O) => e.dialog = O),
      "max-width": "30vw",
      "min-width": "20vw"
    }, {
      default: $(() => [
        P(b, null, {
          default: $(() => [
            e.title ? (u(), C(n, { key: 0 }, {
              default: $(() => [
                L(T(e.title), 1)
              ]),
              _: 1
            })) : g("", !0),
            e.message ? (u(), C(a, { key: 1 }, {
              default: $(() => [
                L(T(e.message), 1)
              ]),
              _: 1
            })) : g("", !0),
            P(m, null, {
              default: $(() => [
                P(p),
                e.noLabel ? (u(), C(c, {
                  key: 0,
                  small: "",
                  onClick: t[0] || (t[0] = (O) => e.dismiss(!1))
                }, {
                  default: $(() => [
                    L(T(e.noLabel), 1)
                  ]),
                  _: 1
                })) : g("", !0),
                e.yesLabel ? (u(), C(c, {
                  key: 1,
                  small: "",
                  onClick: t[1] || (t[1] = (O) => e.dismiss(!0))
                }, {
                  default: $(() => [
                    L(T(e.yesLabel), 1)
                  ]),
                  _: 1
                })) : g("", !0)
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
const tr = /* @__PURE__ */ y(Ys, [["render", er]]), sr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: tr
}, Symbol.toStringTag, { value: "Module" })), rr = _({
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
      return t ? this.time ? xe(t, "yyyy-MM-dd'T'HH:mm:ss") : xe(t, "yyyy-MM-dd") : null;
    }
  }
});
const or = { class: "k-date-time-picker" }, nr = ["type", "readonly"];
function ir(e, t, s, r, o, i) {
  const n = v("KButton");
  return u(), d("div", or, [
    W(h("input", {
      "onUpdate:modelValue": t[0] || (t[0] = (a) => e.localModelValue = a),
      class: "k-input",
      type: e.type,
      readonly: !e.editable
    }, null, 8, nr), [
      [Dt, e.localModelValue]
    ]),
    e.editable ? (u(), d(V, { key: 0 }, [
      P(n, {
        small: "",
        onClick: e.setToNow
      }, {
        default: $(() => [
          L(" Now ")
        ]),
        _: 1
      }, 8, ["onClick"]),
      P(n, {
        small: "",
        onClick: t[1] || (t[1] = (a) => e.$emit("update:modelValue", null))
      }, {
        default: $(() => [
          L(" Clear ")
        ]),
        _: 1
      })
    ], 64)) : g("", !0)
  ]);
}
const ar = /* @__PURE__ */ y(rr, [["render", ir]]), lr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ar
}, Symbol.toStringTag, { value: "Module" })), ur = _({
  directives: {
    ClickAway: ct
  },
  mixins: [me],
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
function cr(e, t, s, r, o, i) {
  const n = at("click-away");
  return u(), d(V, null, [
    R(e.$slots, "activator", { on: e.on }),
    e.mounted ? (u(), C(Kt, {
      key: 0,
      to: ".k-app"
    }, [
      P(pe, { name: "fade" }, {
        default: $(() => [
          e.dialog ? (u(), d("div", {
            key: 0,
            class: "k-dialog",
            style: Q([e.style])
          }, [
            W((u(), d("div", {
              ref: "content",
              class: j(["k-dialog-content", e.classObj]),
              style: Q([e.measurableStyles])
            }, [
              R(e.$slots, "default", { on: e.on })
            ], 6)), [
              [n, e.clickAway]
            ])
          ], 4)) : g("", !0)
        ]),
        _: 3
      })
    ])) : g("", !0)
  ], 64);
}
const dr = /* @__PURE__ */ y(ur, [["render", cr]]), pr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dr
}, Symbol.toStringTag, { value: "Module" })), mr = _({
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
      const e = M(this.size);
      return this.outline ? {
        borderStyle: "solid",
        borderWidth: M(this.outlineWidth),
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
function hr(e, t, s, r, o, i) {
  return u(), d("div", {
    class: "k-dot",
    style: Q([e.style])
  }, [
    R(e.$slots, "default")
  ], 4);
}
const fr = /* @__PURE__ */ y(mr, [["render", hr]]), _r = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fr
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
}), yr = {
  mixins: [J]
};
const br = {
  key: 0,
  class: "k-form-field-label"
};
function gr(e, t, s, r, o, i) {
  return u(), d("div", null, [
    e.label ? (u(), d("div", br, T(e.label), 1)) : g("", !0),
    R(e.$slots, "default"),
    (u(!0), d(V, null, A(e.successMessages, (n, a) => (u(), d("div", {
      key: a,
      class: "k-formfield--success"
    }, T(n), 1))), 128)),
    (u(!0), d(V, null, A(e.errorMessages, (n, a) => (u(), d("div", {
      key: a,
      class: "k-formfield--error"
    }, T(n), 1))), 128))
  ]);
}
const vr = /* @__PURE__ */ y(yr, [["render", gr]]), Sr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vr,
  mixin: J
}, Symbol.toStringTag, { value: "Module" })), $r = _({
  setup() {
    return { config: I(he) };
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
}), wr = { key: 0 }, kr = ["id"], Tr = ["src"], Or = ["id", "src"];
function Cr(e, t, s, r, o, i) {
  return e.dataid ? (u(), d("span", wr, [
    h("a", {
      id: e.aid,
      href: "#",
      class: "functionMenuHotspot",
      onClick: t[2] || (t[2] = z((...n) => e.onclick && e.onclick(...n), ["prevent"]))
    }, [
      e.isModernFunctionMenu ? (u(), d("img", {
        key: 0,
        src: `${e.config.img}spacer.gif`,
        alt: "Functions"
      }, null, 8, Tr)) : (u(), d("img", {
        key: 1,
        id: e.xid,
        src: e.image,
        border: "0",
        alt: "Functions",
        title: "Functions",
        onMouseover: t[0] || (t[0] = (...n) => e.onmouseover && e.onmouseover(...n)),
        onMouseout: t[1] || (t[1] = (...n) => e.onmouseout && e.onmouseout(...n))
      }, null, 40, Or))
    ], 8, kr),
    t[3] || (Ue(-1), t[3] = h("div", {
      id: e.zid,
      ref: "functionMenuDiv",
      class: "functionMenuDiv"
    }, null, 8, ["id"]), Ue(1), t[3])
  ])) : g("", !0);
}
const Pr = /* @__PURE__ */ y($r, [["render", Cr]]), Rr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pr
}, Symbol.toStringTag, { value: "Module" })), Vr = _({});
const Fr = { class: "k-progress-line" };
function Er(e, t, s, r, o, i) {
  return u(), d("div", Fr);
}
const Lr = /* @__PURE__ */ y(Vr, [["render", Er]]), Mr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Lr
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
const Ar = { class: "k-multi-widget" }, Nr = { class: "k-multi-buttons" }, Dr = /* @__PURE__ */ h("svg", {
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
function Br(e, t, s, r, o, i) {
  const n = v("KButton"), a = v("KCard");
  return u(), C(a, { class: "k-multi" }, {
    default: $(() => [
      P(Fe, {
        name: "fade",
        tag: "div"
      }, {
        default: $(() => [
          (u(!0), d(V, null, A(e.valueLocal, (p, c) => (u(), d("div", {
            key: `k-multi-${p}`,
            class: "k-multi-item"
          }, [
            h("div", Ar, [
              R(e.$slots, "default", {
                index: c,
                value: p,
                update: (m) => e.update(c, m)
              })
            ]),
            h("div", Nr, [
              e.canRemove ? (u(), C(n, {
                key: 0,
                text: "",
                onClick: (m) => e.remove(c)
              }, {
                default: $(() => [
                  Dr
                ]),
                _: 2
              }, 1032, ["onClick"])) : g("", !0),
              e.canAdd ? (u(), C(n, {
                key: 1,
                text: "",
                onClick: (m) => e.add(c)
              }, {
                default: $(() => [
                  Kr
                ]),
                _: 2
              }, 1032, ["onClick"])) : g("", !0)
            ])
          ]))), 128))
        ]),
        _: 3
      })
    ]),
    _: 3
  });
}
const Ir = /* @__PURE__ */ y(jr, [["render", Br]]), Ur = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ir
}, Symbol.toStringTag, { value: "Module" })), xr = _({
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
const zr = { class: "k-multi-widget" }, Wr = { class: "k-multi-buttons" }, qr = /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ h("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z" })
], -1);
function Hr(e, t, s, r, o, i) {
  const n = v("KButton"), a = v("KCard");
  return u(), C(a, { class: "k-multi" }, {
    default: $(() => [
      P(Fe, {
        name: "fade",
        tag: "div"
      }, {
        default: $(() => [
          (u(!0), d(V, null, A(e.valueLocal, (p, c) => (u(), d("div", {
            key: `k-multi-${p}`,
            class: "k-multi-item"
          }, [
            h("div", zr, [
              R(e.$slots, "readonly", {
                index: c,
                value: p
              }, () => [
                L(T(p), 1)
              ])
            ]),
            h("div", Wr, [
              P(n, {
                text: "",
                onClick: (m) => e.remove(c)
              }, {
                default: $(() => [
                  qr
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
      }) : g("", !0)
    ]),
    _: 3
  });
}
const Qr = /* @__PURE__ */ y(xr, [["render", Hr]]), Gr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qr
}, Symbol.toStringTag, { value: "Module" })), Jr = _({
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
function Xr(e, t, s, r, o, i) {
  const n = v("KUserLink"), a = v("KUserPicker"), p = v("KMulti2");
  return u(), C(p, {
    modelValue: e.userIdsLocal,
    "onUpdate:modelValue": t[0] || (t[0] = (c) => e.userIdsLocal = c)
  }, {
    readonly: $(({ value: c }) => [
      P(n, {
        user: c,
        gif: ""
      }, null, 8, ["user"])
    ]),
    add: $(({ add: c }) => [
      P(a, {
        "onUpdate:modelValue": (m) => c(m),
        users: e.users,
        groups: e.groups
      }, null, 8, ["onUpdate:modelValue", "users", "groups"])
    ]),
    _: 1
  }, 8, ["modelValue"]);
}
const Zr = /* @__PURE__ */ y(Jr, [["render", Xr]]), Yr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zr
}, Symbol.toStringTag, { value: "Module" })), ze = new Ee();
class eo {
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
      if (await ze.acquire(s), !this.nodes[s]) {
        const r = await t.nodes.ancestors(s);
        this.nodes[s] = w(r, "data.ancestors", []);
      }
      return this.nodes[s];
    } finally {
      ze.release(s);
    }
  }
}
const dt = new eo(), to = _({
  setup() {
    return { session: I(G) };
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
        e && (this.breadcrumb = await dt.lookup(this.session, e));
      },
      immediate: !0
    }
  }
});
const so = { class: "k-node-breadcrumb" };
function ro(e, t, s, r, o, i) {
  return u(), d("div", so, [
    (u(!0), d(V, null, A(e.breadcrumb, (n, a) => (u(), d(V, {
      key: n.dataid
    }, [
      L(T(n.name) + " ", 1),
      a < e.breadcrumb.length - 1 ? (u(), d(V, { key: 0 }, [
        L(" ▶ ")
      ], 64)) : g("", !0)
    ], 64))), 128))
  ]);
}
const pt = /* @__PURE__ */ y(to, [["render", ro]]), oo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pt
}, Symbol.toStringTag, { value: "Module" })), no = _({
  components: { KNodeAncestor: pt },
  setup() {
    return {
      session: I(G),
      config: I(he)
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
        this.dataid ? this.breadcrumb = await dt.lookup(
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
const io = { class: "k-node-picker-field" }, ao = ["value"];
function lo(e, t, s, r, o, i) {
  const n = v("KButton"), a = v("KNodeAncestor");
  return u(), d("div", io, [
    h("input", {
      ref: "input",
      type: "text",
      class: "k-input",
      value: e.name,
      onFocus: t[0] || (t[0] = (...p) => e.openWindow && e.openWindow(...p))
    }, null, 40, ao),
    P(n, {
      small: "",
      onClick: e.openWindow
    }, {
      default: $(() => [
        L(T(e.browseButtonLabel), 1)
      ]),
      _: 1
    }, 8, ["onClick"]),
    e.clearable ? (u(), C(n, {
      key: 0,
      small: "",
      onClick: e.clear
    }, {
      default: $(() => [
        L(T(e.clearButtonLabel), 1)
      ]),
      _: 1
    }, 8, ["onClick"])) : g("", !0),
    e.dataid ? (u(), C(a, {
      key: 1,
      dataid: e.dataid
    }, null, 8, ["dataid"])) : g("", !0)
  ]);
}
const uo = /* @__PURE__ */ y(no, [["render", lo]]), co = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: uo
}, Symbol.toStringTag, { value: "Module" })), po = _({
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
const mo = { class: "k-one-moment" }, ho = { class: "k-one-moment-label" };
function fo(e, t, s, r, o, i) {
  const n = v("KSpinner"), a = v("KDialog");
  return u(), C(a, { "model-value": e.loading }, {
    default: $(() => [
      h("div", mo, [
        P(n, {
          height: 36,
          width: 36
        }),
        h("div", ho, T(e.label), 1)
      ])
    ]),
    _: 1
  }, 8, ["model-value"]);
}
const _o = /* @__PURE__ */ y(po, [["render", fo]]), yo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _o
}, Symbol.toStringTag, { value: "Module" })), bo = _({
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
function go(e, t, s, r, o, i) {
  return u(), d("div", null, [
    R(e.$slots, "default", { active: e.active })
  ]);
}
const vo = /* @__PURE__ */ y(bo, [["render", go]]), So = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vo
}, Symbol.toStringTag, { value: "Module" })), $o = _({
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
const wo = { key: 0 }, ko = { class: "rhmuted" };
function To(e, t, s, r, o, i) {
  return u(), d("h1", null, [
    L(T(e.title), 1),
    e.subtitle ? (u(), d("span", wo, [
      L(": "),
      h("span", ko, T(e.subtitle) + " - 2", 1)
    ])) : g("", !0)
  ]);
}
const Oo = /* @__PURE__ */ y($o, [["render", To], ["__scopeId", "data-v-8d8d8837"]]), Co = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Oo
}, Symbol.toStringTag, { value: "Module" })), Po = _({
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
      return w(this.pagination, "pageRange", []);
    },
    pageSizes() {
      return w(this.pagination, "pageSizes", []);
    },
    pageNumber() {
      return w(this.pagination, "pageNumber", 0);
    },
    pageSize: {
      get() {
        return w(this.pagination, "pageSize", 0);
      },
      set(e) {
        this.$emit("update:pageSize", e);
      }
    },
    hasPrevious() {
      return w(this.pagination, "hasPrevious", !1);
    },
    hasNext() {
      return w(this.pagination, "hasNext", !1);
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
const Ro = { class: "k-pagination" }, Vo = {
  key: 1,
  class: "k-pagination-buttons"
}, Fo = {
  key: 0,
  class: "k-pagination-button"
}, Eo = /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ h("path", { d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" })
], -1), Lo = [
  Eo
], Mo = { key: 0 }, jo = ["onClick"], Ao = {
  key: 1,
  class: "k-pagination-button"
}, No = /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ h("path", { d: "M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" })
], -1), Do = [
  No
], Ko = { key: 2 };
function Bo(e, t, s, r, o, i) {
  const n = v("KSelect");
  return u(), d("div", Ro, [
    e.potentiallyMultiplePages ? (u(), C(n, {
      key: 0,
      modelValue: e.pageSize,
      "onUpdate:modelValue": t[0] || (t[0] = (a) => e.pageSize = a),
      items: e.pageSizes,
      label: "Page Size"
    }, null, 8, ["modelValue", "items"])) : g("", !0),
    e.hasPrevious || e.hasNext ? (u(), d("div", Vo, [
      e.hasPrevious ? (u(), d("a", Fo, Lo)) : g("", !0),
      (u(!0), d(V, null, A(e.pageRange, (a) => (u(), d(V, { key: a }, [
        a === "|" ? (u(), d("div", Mo, "...")) : (u(), d("a", {
          key: 1,
          class: j(["k-pagination-button k-pagination-button-border", e.classObj(a)]),
          onClick: (p) => e.$emit("update:modelValue", a)
        }, T(a), 11, jo))
      ], 64))), 128)),
      e.hasNext ? (u(), d("a", Ao, Do)) : g("", !0)
    ])) : g("", !0),
    e.potentiallyMultiplePages ? (u(), d("div", Ko, " Displaying " + T(e.pagination.startIndex) + "-" + T(e.pagination.endIndex) + " of " + T(e.pagination.count) + " items. ", 1)) : g("", !0)
  ]);
}
const Io = /* @__PURE__ */ y(Po, [["render", Bo]]), Uo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Io
}, Symbol.toStringTag, { value: "Module" })), xo = _({
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
      return w(this.pagination, "offset", 0);
    },
    limit() {
      return w(this.pagination, "limit", 0);
    },
    count() {
      return w(this.pagination, "count", 0);
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
const zo = { class: "k-pagination2" }, Wo = { class: "k-pagination2-buttons" }, qo = /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ h("path", { d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" })
], -1), Ho = [
  qo
], Qo = ["onClick"], Go = /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ h("path", { d: "M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" })
], -1), Jo = [
  Go
];
function Xo(e, t, s, r, o, i) {
  const n = v("KSelect");
  return u(), d("div", zo, [
    h("div", null, [
      P(n, {
        modelValue: e.pageSize,
        "onUpdate:modelValue": t[0] || (t[0] = (a) => e.pageSize = a),
        items: e.pageSizes,
        label: "Page Size"
      }, null, 8, ["modelValue", "items"])
    ]),
    e.pageCount > 1 ? (u(), d(V, { key: 0 }, [
      h("div", Wo, [
        e.hasPrevious ? (u(), d("a", {
          key: 0,
          class: "k-pagination2-arrow-button",
          onClick: t[1] || (t[1] = (a) => e.clickedPageNumber(e.pageNumber0 - 1))
        }, Ho)) : g("", !0),
        (u(!0), d(V, null, A(e.pageRange0, (a) => (u(), d("div", {
          key: a,
          class: j(["k-pagination2-button", e.classObj(a)]),
          onClick: (p) => e.clickedPageNumber(a)
        }, T(a + 1), 11, Qo))), 128)),
        e.hasNext ? (u(), d("a", {
          key: 1,
          class: "k-pagination2-arrow-button",
          onClick: t[2] || (t[2] = (a) => e.clickedPageNumber(e.pageNumber0 + 1))
        }, Jo)) : g("", !0)
      ]),
      h("div", null, T(e.pageNumber) + " of " + T(e.pageCount) + " pages", 1)
    ], 64)) : g("", !0)
  ]);
}
const Zo = /* @__PURE__ */ y(xo, [["render", Xo]]), Yo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zo
}, Symbol.toStringTag, { value: "Module" })), en = _({
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
      return this.isObject(e) ? w(e, this.itemText) : e;
    },
    getItemValue(e) {
      return this.isObject(e) ? w(e, this.itemValue) : e;
    },
    getItemDisabled(e) {
      return this.isObject(e) ? w(e, "disabled", !1) : !1;
    }
  }
});
const tn = ["id", "value", "disabled"], sn = ["for"];
function rn(e, t, s, r, o, i) {
  const n = v("KSpinner"), a = v("KFormFieldWrapper");
  return u(), d("div", null, [
    P(a, {
      label: e.label,
      "success-messages": e.successMessages,
      "error-messages": e.errorMessages
    }, {
      default: $(() => [
        P(pe, {
          name: "fade",
          mode: "out-in"
        }, {
          default: $(() => [
            e.loading ? (u(), C(n, { key: 0 })) : (u(), d("div", {
              key: 1,
              class: j(["k-radiogroup", e.classObj])
            }, [
              (u(!0), d(V, null, A(e.items, (p) => (u(), d("div", {
                key: e.getItemValue(p),
                class: "k-radiogroup-item"
              }, [
                W(h("input", {
                  id: e.getItemValue(p),
                  "onUpdate:modelValue": t[0] || (t[0] = (c) => e.localValue = c),
                  type: "radio",
                  value: e.getItemValue(p),
                  disabled: e.getItemDisabled(p)
                }, null, 8, tn), [
                  [Bt, e.localValue]
                ]),
                h("label", {
                  for: e.getItemValue(p)
                }, T(e.getItemText(p)), 9, sn)
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
const on = /* @__PURE__ */ y(en, [["render", rn]]), nn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: on
}, Symbol.toStringTag, { value: "Module" })), an = _({
  inject: ["ksnackbar"],
  methods: {
    click() {
    }
  }
});
function ln(e, t, s, r, o, i) {
  return u(), d("div", null, [
    h("button", {
      onClick: t[0] || (t[0] = (...n) => e.click && e.click(...n))
    }, "click")
  ]);
}
const un = /* @__PURE__ */ y(an, [["render", ln]]), cn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: un
}, Symbol.toStringTag, { value: "Module" })), dn = _({
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
    },
    disabled: {
      type: Boolean,
      default: !1
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
      return this.isObject(e) ? w(e, this.itemText) : e;
    },
    getItemValue(e) {
      return this.isObject(e) ? w(e, this.itemValue) : e;
    },
    arrify(e) {
      return Array.isArray(e) ? e : [e];
    }
  }
});
const pn = { class: "k-select" }, mn = ["disabled"], hn = ["value"];
function fn(e, t, s, r, o, i) {
  const n = v("KSpinner"), a = v("KFormFieldWrapper");
  return u(), C(a, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: $(() => [
      h("div", pn, [
        W(h("select", {
          "onUpdate:modelValue": t[0] || (t[0] = (p) => e.localValue = p),
          class: j(e.classObj),
          disabled: e.disabled
        }, [
          (u(!0), d(V, null, A(e.items, (p) => (u(), d("option", {
            key: e.getItemValue(p),
            value: e.getItemValue(p)
          }, T(e.getItemText(p)), 9, hn))), 128))
        ], 10, mn), [
          [It, e.localValue]
        ]),
        P(pe, { name: "fade" }, {
          default: $(() => [
            e.loading ? (u(), C(n, {
              key: 0,
              class: "k-select--spinner"
            })) : g("", !0)
          ]),
          _: 1
        })
      ])
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const _n = /* @__PURE__ */ y(dn, [["render", fn]]), yn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _n
}, Symbol.toStringTag, { value: "Module" })), bn = _({
  provide() {
    return {
      // @ts-ignore - not sure why this complains
      [js]: this
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
const gn = { class: "k-snackbar" }, vn = { class: "k-snackbar-item-message" }, Sn = {
  key: 0,
  class: "k-snackbar-title"
}, $n = {
  key: 1,
  class: "k-snackbar-text"
}, wn = {
  key: 0,
  class: "k-snackbar-action"
}, kn = ["onClick"];
function Tn(e, t, s, r, o, i) {
  return u(), d(V, null, [
    R(e.$slots, "default"),
    h("div", gn, [
      P(Fe, {
        name: "slide",
        tag: "div",
        mode: "out-in"
      }, {
        default: $(() => [
          (u(!0), d(V, null, A(e.items, (n) => (u(), d("div", {
            key: n.index,
            class: j(["k-snackbar-item", e.classObj(n)])
          }, [
            h("div", vn, [
              n.title ? (u(), d("div", Sn, T(n.title), 1)) : g("", !0),
              n.message ? (u(), d("div", $n, T(n.message), 1)) : g("", !0)
            ]),
            n.action ? (u(), d("div", wn, [
              h("a", {
                href: "#",
                onClick: z((a) => e.action(n), ["prevent"])
              }, T(n.actionLabel), 9, kn)
            ])) : g("", !0)
          ], 2))), 128))
        ]),
        _: 1
      })
    ])
  ], 64);
}
const On = /* @__PURE__ */ y(bn, [["render", Tn]]), Cn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: On
}, Symbol.toStringTag, { value: "Module" })), Pn = _({
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
const Rn = {
  key: 0,
  class: "j-sort-header-arrow"
}, Vn = {
  key: 1,
  class: "j-sort-header-arrow"
};
function Fn(e, t, s, r, o, i) {
  return u(), d("a", {
    href: "#",
    onClick: t[0] || (t[0] = z((...n) => e.emitClick && e.emitClick(...n), ["prevent"]))
  }, [
    R(e.$slots, "default"),
    P(pe, {
      name: "fade",
      mode: "out-in"
    }, {
      default: $(() => [
        e.isActive && e.sortAsc ? (u(), d("span", Rn, "↓")) : e.isActive ? (u(), d("span", Vn, "↑")) : g("", !0)
      ]),
      _: 1
    })
  ]);
}
const En = /* @__PURE__ */ y(Pn, [["render", Fn]]), Ln = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: En
}, Symbol.toStringTag, { value: "Module" }));
const Mn = {}, jn = { class: "k-spacer" };
function An(e, t) {
  return u(), d("div", jn);
}
const Nn = /* @__PURE__ */ y(Mn, [["render", An]]), Dn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Nn
}, Symbol.toStringTag, { value: "Module" })), Le = _({
  mixins: [me],
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
}), We = () => {
  ut((e) => ({
    "519b76bc": e.color
  }));
}, qe = Le.setup;
Le.setup = qe ? (e, t) => (We(), qe(e, t)) : We;
const Kn = /* @__PURE__ */ h("circle", {
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), Bn = /* @__PURE__ */ h("path", {
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), In = [
  Kn,
  Bn
];
function Un(e, t, s, r, o, i) {
  return u(), d("svg", {
    style: Q(e.measurableStyles),
    class: "k-spinner",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, In, 4);
}
const xn = /* @__PURE__ */ y(Le, [["render", Un]]), zn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xn
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
      return M(this.height);
    },
    innerSizePx() {
      return M(this.innerSize);
    },
    paddingPx() {
      return M(this.padding);
    },
    switchWidthPx() {
      return M(this.trans + this.height);
    },
    transPx() {
      return `translateX(${M(this.trans)})`;
    }
  }
}), He = () => {
  ut((e) => ({
    f984ea98: e.switchWidthPx,
    "0b657735": e.heightPx,
    "4fc9dc79": e.innerSizePx,
    56563113: e.paddingPx,
    bd22c72c: e.transPx
  }));
}, Qe = Me.setup;
Me.setup = Qe ? (e, t) => (He(), Qe(e, t)) : He;
const Wn = /* @__PURE__ */ h("span", { class: "k-switch-slider" }, null, -1), qn = [
  Wn
];
function Hn(e, t, s, r, o, i) {
  return u(), d("div", {
    class: j(["k-switch", e.classObj]),
    onClick: t[0] || (t[0] = (n) => e.on = !e.on)
  }, qn, 2);
}
const Qn = /* @__PURE__ */ y(Me, [["render", Hn]]), Gn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qn
}, Symbol.toStringTag, { value: "Module" })), Jn = _({
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
function Xn(e, t, s, r, o, i) {
  const n = v("KLinearProgressIndicator");
  return u(), d("div", null, [
    e.loading ? (u(), C(n, { key: 0 })) : g("", !0),
    h("table", {
      class: j(["k-table", e.classObj])
    }, [
      R(e.$slots, "default")
    ], 2)
  ]);
}
const Zn = /* @__PURE__ */ y(Jn, [["render", Xn]]), Yn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zn
}, Symbol.toStringTag, { value: "Module" })), ei = _({
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
const ti = ["rows"];
function si(e, t, s, r, o, i) {
  const n = v("KFormFieldWrapper");
  return u(), C(n, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: $(() => [
      W(h("textarea", lt({
        "onUpdate:modelValue": t[0] || (t[0] = (a) => e.valueLocal = a)
      }, e.$attrs, {
        spellcheck: "false",
        class: [e.classObj, "k-textarea"],
        rows: e.rows,
        onKeydown: t[1] || (t[1] = te(z((...a) => e.tabber && e.tabber(...a), ["prevent"]), ["tab"]))
      }), null, 16, ti), [
        [Ve, e.valueLocal]
      ])
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const ri = /* @__PURE__ */ y(ei, [["render", si]]), oi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ri
}, Symbol.toStringTag, { value: "Module" })), ni = _({
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
const ii = ["placeholder"];
function ai(e, t, s, r, o, i) {
  const n = v("KFormFieldWrapper");
  return u(), C(n, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: $(() => [
      W(h("input", {
        "onUpdate:modelValue": t[0] || (t[0] = (a) => e.value = a),
        class: j(["k-input-text-field", e.classObj]),
        placeholder: e.placeholder
      }, null, 10, ii), [
        [Ve, e.value]
      ])
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const li = /* @__PURE__ */ y(ni, [["render", ai]]), ui = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: li
}, Symbol.toStringTag, { value: "Module" })), ci = _({
  setup() {
    return {
      config: I(he),
      session: I(G)
    };
  },
  mixins: [me],
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
      return w(this.userRec, "type", this.type);
    },
    url() {
      return this.userType === this.session.members.USER ? `${this.config.img}guy.gif` : this.userType === this.session.members.GROUP ? `${this.config.img}2-guys.gif` : this.userType > 0 ? `${this.config.img}projectgroup.gif` : null;
    }
  }
}), di = ["src"];
function pi(e, t, s, r, o, i) {
  return e.url ? (u(), d("img", {
    key: 0,
    src: e.url,
    style: Q([e.measurableStyles])
  }, null, 12, di)) : g("", !0);
}
const mi = /* @__PURE__ */ y(ci, [["render", pi]]), hi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mi
}, Symbol.toStringTag, { value: "Module" })), ve = new Ee();
class fi {
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
        const n = s[i].resolveFunc;
        n(o);
      });
    } catch {
      s.forEach((r) => r.resolveFunc(null));
    }
  }
}
class _i {
  users;
  userLookupQueue;
  constructor() {
    this.users = {}, this.userLookupQueue = new fi();
  }
  registerUsers(t) {
    t.forEach((s) => this.users[s.userid] = s);
  }
  async lookup(t, s) {
    return s ? (await ve.acquire(s), this.users[s] ? (ve.release(s), this.users[s]) : new Promise((r) => {
      const o = (i) => {
        this.users[s] = i, r(i), ve.release(s);
      };
      this.userLookupQueue.queue(t, o, s);
    })) : null;
  }
}
const mt = new _i(), yi = _({
  setup() {
    return { session: I(G) };
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
      return w(this.userRecLocal, "id") ?? w(this.userRecLocal, "userid");
    },
    // userLocal() {
    //   return this.user ?? this.userid ?? this.userRec
    // },
    displayName() {
      return w(this.userRecLocal, "display_name") ?? w(this.userRecLocal, "displayname") ?? w(this.userRecLocal, "name");
    },
    type() {
      return w(this.userRecLocal, "type");
    }
  },
  watch: {
    user: {
      async handler(e) {
        this.isInteger(e) ? this.userRecLocal = await mt.lookup(this.session, e) : this.userRecLocal = e;
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
function gi(e, t, s, r, o, i) {
  const n = v("KUserGIF");
  return e.userRecLocal ? (u(), d("span", bi, [
    e.gif ? (u(), C(n, {
      key: 0,
      "user-rec": e.userRecLocal
    }, null, 8, ["user-rec"])) : g("", !0),
    L("  "),
    h("a", {
      href: "#",
      onClick: t[0] || (t[0] = z((...a) => e.click && e.click(...a), ["prevent"]))
    }, T(e.displayName), 1)
  ])) : g("", !0);
}
const vi = /* @__PURE__ */ y(yi, [["render", gi]]), Si = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vi
}, Symbol.toStringTag, { value: "Module" })), $i = _({
  mixins: [J],
  setup() {
    return { session: I(G) };
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
        this.items = t.data.data.map((s) => ({
          text: w(s, "name_formatted"),
          value: w(s, "id"),
          type: w(s, "type")
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
          const t = await mt.lookup(
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
function ki(e, t, s, r, o, i) {
  const n = v("KUserGIF"), a = v("KAutocomplete"), p = v("KUserLink"), c = v("KFormFieldWrapper");
  return u(), C(c, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: $(() => [
      e.editable ? (u(), C(a, {
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
        prepend: $(({ item: m }) => [
          m ? (u(), C(n, {
            key: 0,
            type: m.type
          }, null, 8, ["type"])) : (u(), C(n, {
            key: 1,
            type: e.USER
          }, null, 8, ["type"]))
        ]),
        item: $(({ item: m }) => [
          h("div", wi, [
            P(n, {
              type: m.type
            }, null, 8, ["type"]),
            L(" " + T(m.text), 1)
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "search-input", "placeholder", "width", "loading", "items", "return-object"])) : (u(), C(p, {
        key: 1,
        user: e.modelValue,
        gif: ""
      }, null, 8, ["user"]))
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const Ti = /* @__PURE__ */ y($i, [["render", ki]]), Oi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ti
}, Symbol.toStringTag, { value: "Module" })), Ci = _({
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
      return this.name == w(this.tabs, "selectedTab");
    }
  }
}), Pi = { key: 0 };
function Ri(e, t, s, r, o, i) {
  return e.isSelected ? (u(), d("div", Pi, [
    R(e.$slots, "default")
  ])) : g("", !0);
}
const Vi = /* @__PURE__ */ y(Ci, [["render", Ri]]), Fi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Vi
}, Symbol.toStringTag, { value: "Module" })), Ei = _({
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
      const e = (i) => i.type.name === "KTabItem", t = (i) => typeof i.type == "symbol", s = (i) => i.children && i.children.length && i.children.some(e), r = (i) => t(i) && s(i);
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
const Li = { class: "k-tabs" }, Mi = { class: "k-tabs-nav" }, ji = ["href", "onClick"], Ai = { class: "k-tabs-content" };
function Ni(e, t, s, r, o, i) {
  return u(), d("div", Li, [
    h("div", Mi, [
      (u(!0), d(V, null, A(e.tabs, (n) => (u(), d("div", {
        key: n.name,
        class: j(e.classObj(n))
      }, [
        h("a", {
          href: `#${n.name}`,
          onClick: (a) => e.selectTab(n.name)
        }, T(n.title), 9, ji)
      ], 2))), 128))
    ]),
    h("div", Ai, [
      R(e.$slots, "default")
    ])
  ]);
}
const Di = /* @__PURE__ */ y(Ei, [["render", Ni]]), Ki = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Di
}, Symbol.toStringTag, { value: "Module" }));
function ht(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: ft } = Object.prototype, { getPrototypeOf: je } = Object, Ae = ((e) => (t) => {
  const s = ft.call(t);
  return e[s] || (e[s] = s.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), U = (e) => (e = e.toLowerCase(), (t) => Ae(t) === e), fe = (e) => (t) => typeof t === e, { isArray: Y } = Array, se = fe("undefined");
function Bi(e) {
  return e !== null && !se(e) && e.constructor !== null && !se(e.constructor) && q(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const _t = U("ArrayBuffer");
function Ii(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && _t(e.buffer), t;
}
const Ui = fe("string"), q = fe("function"), yt = fe("number"), Ne = (e) => e !== null && typeof e == "object", xi = (e) => e === !0 || e === !1, ae = (e) => {
  if (Ae(e) !== "object")
    return !1;
  const t = je(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, zi = U("Date"), Wi = U("File"), qi = U("Blob"), Hi = U("FileList"), Qi = (e) => Ne(e) && q(e.pipe), Gi = (e) => {
  const t = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || ft.call(e) === t || q(e.toString) && e.toString() === t);
}, Ji = U("URLSearchParams"), Xi = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function re(e, t, { allOwnKeys: s = !1 } = {}) {
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
const gt = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), vt = (e) => !se(e) && e !== gt;
function Oe() {
  const { caseless: e } = vt(this) && this || {}, t = {}, s = (r, o) => {
    const i = e && bt(t, o) || o;
    ae(t[i]) && ae(r) ? t[i] = Oe(t[i], r) : ae(r) ? t[i] = Oe({}, r) : Y(r) ? t[i] = r.slice() : t[i] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && re(arguments[r], s);
  return t;
}
const Zi = (e, t, s, { allOwnKeys: r } = {}) => (re(t, (o, i) => {
  s && q(o) ? e[i] = ht(o, s) : e[i] = o;
}, { allOwnKeys: r }), e), Yi = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), ea = (e, t, s, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), s && Object.assign(e.prototype, s);
}, ta = (e, t, s, r) => {
  let o, i, n;
  const a = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      n = o[i], (!r || r(n, e, t)) && !a[n] && (t[n] = e[n], a[n] = !0);
    e = s !== !1 && je(e);
  } while (e && (!s || s(e, t)) && e !== Object.prototype);
  return t;
}, sa = (e, t, s) => {
  e = String(e), (s === void 0 || s > e.length) && (s = e.length), s -= t.length;
  const r = e.indexOf(t, s);
  return r !== -1 && r === s;
}, ra = (e) => {
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
}, oa = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && je(Uint8Array)), na = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const i = o.value;
    t.call(e, i[0], i[1]);
  }
}, ia = (e, t) => {
  let s;
  const r = [];
  for (; (s = e.exec(t)) !== null; )
    r.push(s);
  return r;
}, aa = U("HTMLFormElement"), la = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(s, r, o) {
    return r.toUpperCase() + o;
  }
), Ge = (({ hasOwnProperty: e }) => (t, s) => e.call(t, s))(Object.prototype), ua = U("RegExp"), St = (e, t) => {
  const s = Object.getOwnPropertyDescriptors(e), r = {};
  re(s, (o, i) => {
    t(o, i, e) !== !1 && (r[i] = o);
  }), Object.defineProperties(e, r);
}, ca = (e) => {
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
}, da = (e, t) => {
  const s = {}, r = (o) => {
    o.forEach((i) => {
      s[i] = !0;
    });
  };
  return Y(e) ? r(e) : r(String(e).split(t)), s;
}, pa = () => {
}, ma = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Se = "abcdefghijklmnopqrstuvwxyz", Je = "0123456789", $t = {
  DIGIT: Je,
  ALPHA: Se,
  ALPHA_DIGIT: Se + Se.toUpperCase() + Je
}, ha = (e = 16, t = $t.ALPHA_DIGIT) => {
  let s = "";
  const { length: r } = t;
  for (; e--; )
    s += t[Math.random() * r | 0];
  return s;
};
function fa(e) {
  return !!(e && q(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const _a = (e) => {
  const t = new Array(10), s = (r, o) => {
    if (Ne(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[o] = r;
        const i = Y(r) ? [] : {};
        return re(r, (n, a) => {
          const p = s(n, o + 1);
          !se(p) && (i[a] = p);
        }), t[o] = void 0, i;
      }
    }
    return r;
  };
  return s(e, 0);
}, l = {
  isArray: Y,
  isArrayBuffer: _t,
  isBuffer: Bi,
  isFormData: Gi,
  isArrayBufferView: Ii,
  isString: Ui,
  isNumber: yt,
  isBoolean: xi,
  isObject: Ne,
  isPlainObject: ae,
  isUndefined: se,
  isDate: zi,
  isFile: Wi,
  isBlob: qi,
  isRegExp: ua,
  isFunction: q,
  isStream: Qi,
  isURLSearchParams: Ji,
  isTypedArray: oa,
  isFileList: Hi,
  forEach: re,
  merge: Oe,
  extend: Zi,
  trim: Xi,
  stripBOM: Yi,
  inherits: ea,
  toFlatObject: ta,
  kindOf: Ae,
  kindOfTest: U,
  endsWith: sa,
  toArray: ra,
  forEachEntry: na,
  matchAll: ia,
  isHTMLForm: aa,
  hasOwnProperty: Ge,
  hasOwnProp: Ge,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: St,
  freezeMethods: ca,
  toObjectSet: da,
  toCamelCase: la,
  noop: pa,
  toFiniteNumber: ma,
  findKey: bt,
  global: gt,
  isContextDefined: vt,
  ALPHABET: $t,
  generateString: ha,
  isSpecCompliantForm: fa,
  toJSONObject: _a
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
const wt = k.prototype, kt = {};
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
Object.defineProperty(wt, "isAxiosError", { value: !0 });
k.from = (e, t, s, r, o, i) => {
  const n = Object.create(wt);
  return l.toFlatObject(e, n, function(p) {
    return p !== Error.prototype;
  }, (a) => a !== "isAxiosError"), k.call(n, e.message, t, s, r, o), n.cause = e, n.name = e.name, i && Object.assign(n, i), n;
};
const ya = null;
function Ce(e) {
  return l.isPlainObject(e) || l.isArray(e);
}
function Tt(e) {
  return l.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Xe(e, t, s) {
  return e ? e.concat(t).map(function(o, i) {
    return o = Tt(o), !s && i ? "[" + o + "]" : o;
  }).join(s ? "." : "") : t;
}
function ba(e) {
  return l.isArray(e) && !e.some(Ce);
}
const ga = l.toFlatObject(l, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function _e(e, t, s) {
  if (!l.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), s = l.toFlatObject(s, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(S, K) {
    return !l.isUndefined(K[S]);
  });
  const r = s.metaTokens, o = s.visitor || m, i = s.dots, n = s.indexes, p = (s.Blob || typeof Blob < "u" && Blob) && l.isSpecCompliantForm(t);
  if (!l.isFunction(o))
    throw new TypeError("visitor must be a function");
  function c(f) {
    if (f === null)
      return "";
    if (l.isDate(f))
      return f.toISOString();
    if (!p && l.isBlob(f))
      throw new k("Blob is not supported. Use a Buffer instead.");
    return l.isArrayBuffer(f) || l.isTypedArray(f) ? p && typeof Blob == "function" ? new Blob([f]) : Buffer.from(f) : f;
  }
  function m(f, S, K) {
    let N = f;
    if (f && !K && typeof f == "object") {
      if (l.endsWith(S, "{}"))
        S = r ? S : S.slice(0, -2), f = JSON.stringify(f);
      else if (l.isArray(f) && ba(f) || (l.isFileList(f) || l.endsWith(S, "[]")) && (N = l.toArray(f)))
        return S = Tt(S), N.forEach(function(ne, At) {
          !(l.isUndefined(ne) || ne === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            n === !0 ? Xe([S], At, i) : n === null ? S : S + "[]",
            c(ne)
          );
        }), !1;
    }
    return Ce(f) ? !0 : (t.append(Xe(K, S, i), c(f)), !1);
  }
  const b = [], F = Object.assign(ga, {
    defaultVisitor: m,
    convertValue: c,
    isVisitable: Ce
  });
  function O(f, S) {
    if (!l.isUndefined(f)) {
      if (b.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + S.join("."));
      b.push(f), l.forEach(f, function(N, X) {
        (!(l.isUndefined(N) || N === null) && o.call(
          t,
          N,
          l.isString(X) ? X.trim() : X,
          S,
          F
        )) === !0 && O(N, S ? S.concat(X) : [X]);
      }), b.pop();
    }
  }
  if (!l.isObject(e))
    throw new TypeError("data must be an object");
  return O(e), t;
}
function Ze(e) {
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
  this._pairs = [], e && _e(e, this, t);
}
const Ot = De.prototype;
Ot.append = function(t, s) {
  this._pairs.push([t, s]);
};
Ot.toString = function(t) {
  const s = t ? function(r) {
    return t.call(this, r, Ze);
  } : Ze;
  return this._pairs.map(function(o) {
    return s(o[0]) + "=" + s(o[1]);
  }, "").join("&");
};
function va(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Ct(e, t, s) {
  if (!t)
    return e;
  const r = s && s.encode || va, o = s && s.serialize;
  let i;
  if (o ? i = o(t, s) : i = l.isURLSearchParams(t) ? t.toString() : new De(t, s).toString(r), i) {
    const n = e.indexOf("#");
    n !== -1 && (e = e.slice(0, n)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class Sa {
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
const Ye = Sa, Pt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, $a = typeof URLSearchParams < "u" ? URLSearchParams : De, wa = typeof FormData < "u" ? FormData : null, ka = typeof Blob < "u" ? Blob : null, Ta = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), Oa = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), D = {
  isBrowser: !0,
  classes: {
    URLSearchParams: $a,
    FormData: wa,
    Blob: ka
  },
  isStandardBrowserEnv: Ta,
  isStandardBrowserWebWorkerEnv: Oa,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function Ca(e, t) {
  return _e(e, new D.classes.URLSearchParams(), Object.assign({
    visitor: function(s, r, o, i) {
      return D.isNode && l.isBuffer(s) ? (this.append(r, s.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Pa(e) {
  return l.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Ra(e) {
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
    const a = Number.isFinite(+n), p = i >= s.length;
    return n = !n && l.isArray(o) ? o.length : n, p ? (l.hasOwnProp(o, n) ? o[n] = [o[n], r] : o[n] = r, !a) : ((!o[n] || !l.isObject(o[n])) && (o[n] = []), t(s, r, o[n], i) && l.isArray(o[n]) && (o[n] = Ra(o[n])), !a);
  }
  if (l.isFormData(e) && l.isFunction(e.entries)) {
    const s = {};
    return l.forEachEntry(e, (r, o) => {
      t(Pa(r), o, s, 0);
    }), s;
  }
  return null;
}
const Va = {
  "Content-Type": void 0
};
function Fa(e, t, s) {
  if (l.isString(e))
    try {
      return (t || JSON.parse)(e), l.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (s || JSON.stringify)(e);
}
const ye = {
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
        return Ca(t, this.formSerializer).toString();
      if ((a = l.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const p = this.env && this.env.FormData;
        return _e(
          a ? { "files[]": t } : t,
          p && new p(),
          this.formSerializer
        );
      }
    }
    return i || o ? (s.setContentType("application/json", !1), Fa(t)) : t;
  }],
  transformResponse: [function(t) {
    const s = this.transitional || ye.transitional, r = s && s.forcedJSONParsing, o = this.responseType === "json";
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
    FormData: D.classes.FormData,
    Blob: D.classes.Blob
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
  ye.headers[t] = {};
});
l.forEach(["post", "put", "patch"], function(t) {
  ye.headers[t] = l.merge(Va);
});
const Ke = ye, Ea = l.toObjectSet([
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
]), La = (e) => {
  const t = {};
  let s, r, o;
  return e && e.split(`
`).forEach(function(n) {
    o = n.indexOf(":"), s = n.substring(0, o).trim().toLowerCase(), r = n.substring(o + 1).trim(), !(!s || t[s] && Ea[s]) && (s === "set-cookie" ? t[s] ? t[s].push(r) : t[s] = [r] : t[s] = t[s] ? t[s] + ", " + r : r);
  }), t;
}, et = Symbol("internals");
function ee(e) {
  return e && String(e).trim().toLowerCase();
}
function le(e) {
  return e === !1 || e == null ? e : l.isArray(e) ? e.map(le) : String(e);
}
function Ma(e) {
  const t = /* @__PURE__ */ Object.create(null), s = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = s.exec(e); )
    t[r[1]] = r[2];
  return t;
}
function ja(e) {
  return /^[-_a-zA-Z]+$/.test(e.trim());
}
function $e(e, t, s, r, o) {
  if (l.isFunction(r))
    return r.call(this, t, s);
  if (o && (t = s), !!l.isString(t)) {
    if (l.isString(r))
      return t.indexOf(r) !== -1;
    if (l.isRegExp(r))
      return r.test(t);
  }
}
function Aa(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, s, r) => s.toUpperCase() + r);
}
function Na(e, t) {
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
class be {
  constructor(t) {
    t && this.set(t);
  }
  set(t, s, r) {
    const o = this;
    function i(a, p, c) {
      const m = ee(p);
      if (!m)
        throw new Error("header name must be a non-empty string");
      const b = l.findKey(o, m);
      (!b || o[b] === void 0 || c === !0 || c === void 0 && o[b] !== !1) && (o[b || p] = le(a));
    }
    const n = (a, p) => l.forEach(a, (c, m) => i(c, m, p));
    return l.isPlainObject(t) || t instanceof this.constructor ? n(t, s) : l.isString(t) && (t = t.trim()) && !ja(t) ? n(La(t), s) : t != null && i(s, t, r), this;
  }
  get(t, s) {
    if (t = ee(t), t) {
      const r = l.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!s)
          return o;
        if (s === !0)
          return Ma(o);
        if (l.isFunction(s))
          return s.call(this, o, r);
        if (l.isRegExp(s))
          return s.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, s) {
    if (t = ee(t), t) {
      const r = l.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!s || $e(this, this[r], r, s)));
    }
    return !1;
  }
  delete(t, s) {
    const r = this;
    let o = !1;
    function i(n) {
      if (n = ee(n), n) {
        const a = l.findKey(r, n);
        a && (!s || $e(r, r[a], a, s)) && (delete r[a], o = !0);
      }
    }
    return l.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const s = Object.keys(this);
    let r = s.length, o = !1;
    for (; r--; ) {
      const i = s[r];
      (!t || $e(this, this[i], i, t, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(t) {
    const s = this, r = {};
    return l.forEach(this, (o, i) => {
      const n = l.findKey(r, i);
      if (n) {
        s[n] = le(o), delete s[i];
        return;
      }
      const a = t ? Aa(i) : String(i).trim();
      a !== i && delete s[i], s[a] = le(o), r[a] = !0;
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
    const r = (this[et] = this[et] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(n) {
      const a = ee(n);
      r[a] || (Na(o, n), r[a] = !0);
    }
    return l.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
be.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
l.freezeMethods(be.prototype);
l.freezeMethods(be);
const B = be;
function we(e, t) {
  const s = this || Ke, r = t || s, o = B.from(r.headers);
  let i = r.data;
  return l.forEach(e, function(a) {
    i = a.call(s, i, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), i;
}
function Vt(e) {
  return !!(e && e.__CANCEL__);
}
function oe(e, t, s) {
  k.call(this, e ?? "canceled", k.ERR_CANCELED, t, s), this.name = "CanceledError";
}
l.inherits(oe, k, {
  __CANCEL__: !0
});
function Da(e, t, s) {
  const r = s.config.validateStatus;
  !s.status || !r || r(s.status) ? e(s) : t(new k(
    "Request failed with status code " + s.status,
    [k.ERR_BAD_REQUEST, k.ERR_BAD_RESPONSE][Math.floor(s.status / 100) - 4],
    s.config,
    s.request,
    s
  ));
}
const Ka = D.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(s, r, o, i, n, a) {
        const p = [];
        p.push(s + "=" + encodeURIComponent(r)), l.isNumber(o) && p.push("expires=" + new Date(o).toGMTString()), l.isString(i) && p.push("path=" + i), l.isString(n) && p.push("domain=" + n), a === !0 && p.push("secure"), document.cookie = p.join("; ");
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
function Ba(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Ia(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Ft(e, t) {
  return e && !Ba(t) ? Ia(e, t) : t;
}
const Ua = D.isStandardBrowserEnv ? (
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
function xa(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function za(e, t) {
  e = e || 10;
  const s = new Array(e), r = new Array(e);
  let o = 0, i = 0, n;
  return t = t !== void 0 ? t : 1e3, function(p) {
    const c = Date.now(), m = r[i];
    n || (n = c), s[o] = p, r[o] = c;
    let b = i, F = 0;
    for (; b !== o; )
      F += s[b++], b = b % e;
    if (o = (o + 1) % e, o === i && (i = (i + 1) % e), c - n < t)
      return;
    const O = m && c - m;
    return O ? Math.round(F * 1e3 / O) : void 0;
  };
}
function tt(e, t) {
  let s = 0;
  const r = za(50, 250);
  return (o) => {
    const i = o.loaded, n = o.lengthComputable ? o.total : void 0, a = i - s, p = r(a), c = i <= n;
    s = i;
    const m = {
      loaded: i,
      total: n,
      progress: n ? i / n : void 0,
      bytes: a,
      rate: p || void 0,
      estimated: p && n && c ? (n - i) / p : void 0,
      event: o
    };
    m[t ? "download" : "upload"] = !0, e(m);
  };
}
const Wa = typeof XMLHttpRequest < "u", qa = Wa && function(e) {
  return new Promise(function(s, r) {
    let o = e.data;
    const i = B.from(e.headers).normalize(), n = e.responseType;
    let a;
    function p() {
      e.cancelToken && e.cancelToken.unsubscribe(a), e.signal && e.signal.removeEventListener("abort", a);
    }
    l.isFormData(o) && (D.isStandardBrowserEnv || D.isStandardBrowserWebWorkerEnv) && i.setContentType(!1);
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
      ), S = {
        data: !n || n === "text" || n === "json" ? c.responseText : c.response,
        status: c.status,
        statusText: c.statusText,
        headers: O,
        config: e,
        request: c
      };
      Da(function(N) {
        s(N), p();
      }, function(N) {
        r(N), p();
      }, S), c = null;
    }
    if ("onloadend" in c ? c.onloadend = b : c.onreadystatechange = function() {
      !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(b);
    }, c.onabort = function() {
      c && (r(new k("Request aborted", k.ECONNABORTED, e, c)), c = null);
    }, c.onerror = function() {
      r(new k("Network Error", k.ERR_NETWORK, e, c)), c = null;
    }, c.ontimeout = function() {
      let f = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const S = e.transitional || Pt;
      e.timeoutErrorMessage && (f = e.timeoutErrorMessage), r(new k(
        f,
        S.clarifyTimeoutError ? k.ETIMEDOUT : k.ECONNABORTED,
        e,
        c
      )), c = null;
    }, D.isStandardBrowserEnv) {
      const O = (e.withCredentials || Ua(m)) && e.xsrfCookieName && Ka.read(e.xsrfCookieName);
      O && i.set(e.xsrfHeaderName, O);
    }
    o === void 0 && i.setContentType(null), "setRequestHeader" in c && l.forEach(i.toJSON(), function(f, S) {
      c.setRequestHeader(S, f);
    }), l.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), n && n !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", tt(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", tt(e.onUploadProgress)), (e.cancelToken || e.signal) && (a = (O) => {
      c && (r(!O || O.type ? new oe(null, e, c) : O), c.abort(), c = null);
    }, e.cancelToken && e.cancelToken.subscribe(a), e.signal && (e.signal.aborted ? a() : e.signal.addEventListener("abort", a)));
    const F = xa(m);
    if (F && D.protocols.indexOf(F) === -1) {
      r(new k("Unsupported protocol " + F + ":", k.ERR_BAD_REQUEST, e));
      return;
    }
    c.send(o || null);
  });
}, ue = {
  http: ya,
  xhr: qa
};
l.forEach(ue, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Ha = {
  getAdapter: (e) => {
    e = l.isArray(e) ? e : [e];
    const { length: t } = e;
    let s, r;
    for (let o = 0; o < t && (s = e[o], !(r = l.isString(s) ? ue[s.toLowerCase()] : s)); o++)
      ;
    if (!r)
      throw r === !1 ? new k(
        `Adapter ${s} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        l.hasOwnProp(ue, s) ? `Adapter '${s}' is not available in the build` : `Unknown adapter '${s}'`
      );
    if (!l.isFunction(r))
      throw new TypeError("adapter is not a function");
    return r;
  },
  adapters: ue
};
function ke(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new oe(null, e);
}
function st(e) {
  return ke(e), e.headers = B.from(e.headers), e.data = we.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Ha.getAdapter(e.adapter || Ke.adapter)(e).then(function(r) {
    return ke(e), r.data = we.call(
      e,
      e.transformResponse,
      r
    ), r.headers = B.from(r.headers), r;
  }, function(r) {
    return Vt(r) || (ke(e), r && r.response && (r.response.data = we.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = B.from(r.response.headers))), Promise.reject(r);
  });
}
const rt = (e) => e instanceof B ? e.toJSON() : e;
function Z(e, t) {
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
  const p = {
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
    headers: (c, m) => o(rt(c), rt(m), !0)
  };
  return l.forEach(Object.keys(e).concat(Object.keys(t)), function(m) {
    const b = p[m] || o, F = b(e[m], t[m], m);
    l.isUndefined(F) && b !== a || (s[m] = F);
  }), s;
}
const Et = "1.3.4", Be = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Be[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const ot = {};
Be.transitional = function(t, s, r) {
  function o(i, n) {
    return "[Axios v" + Et + "] Transitional option '" + i + "'" + n + (r ? ". " + r : "");
  }
  return (i, n, a) => {
    if (t === !1)
      throw new k(
        o(n, " has been removed" + (s ? " in " + s : "")),
        k.ERR_DEPRECATED
      );
    return s && !ot[n] && (ot[n] = !0, console.warn(
      o(
        n,
        " has been deprecated since v" + s + " and will be removed in the near future"
      )
    )), t ? t(i, n, a) : !0;
  };
};
function Qa(e, t, s) {
  if (typeof e != "object")
    throw new k("options must be an object", k.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o], n = t[i];
    if (n) {
      const a = e[i], p = a === void 0 || n(a, i, e);
      if (p !== !0)
        throw new k("option " + i + " must be " + p, k.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (s !== !0)
      throw new k("Unknown option " + i, k.ERR_BAD_OPTION);
  }
}
const Pe = {
  assertOptions: Qa,
  validators: Be
}, x = Pe.validators;
class de {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Ye(),
      response: new Ye()
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
    typeof t == "string" ? (s = s || {}, s.url = t) : s = t || {}, s = Z(this.defaults, s);
    const { transitional: r, paramsSerializer: o, headers: i } = s;
    r !== void 0 && Pe.assertOptions(r, {
      silentJSONParsing: x.transitional(x.boolean),
      forcedJSONParsing: x.transitional(x.boolean),
      clarifyTimeoutError: x.transitional(x.boolean)
    }, !1), o !== void 0 && Pe.assertOptions(o, {
      encode: x.function,
      serialize: x.function
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
    let p = !0;
    this.interceptors.request.forEach(function(S) {
      typeof S.runWhen == "function" && S.runWhen(s) === !1 || (p = p && S.synchronous, a.unshift(S.fulfilled, S.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(S) {
      c.push(S.fulfilled, S.rejected);
    });
    let m, b = 0, F;
    if (!p) {
      const f = [st.bind(this), void 0];
      for (f.unshift.apply(f, a), f.push.apply(f, c), F = f.length, m = Promise.resolve(s); b < F; )
        m = m.then(f[b++], f[b++]);
      return m;
    }
    F = a.length;
    let O = s;
    for (b = 0; b < F; ) {
      const f = a[b++], S = a[b++];
      try {
        O = f(O);
      } catch (K) {
        S.call(this, K);
        break;
      }
    }
    try {
      m = st.call(this, O);
    } catch (f) {
      return Promise.reject(f);
    }
    for (b = 0, F = c.length; b < F; )
      m = m.then(c[b++], c[b++]);
    return m;
  }
  getUri(t) {
    t = Z(this.defaults, t);
    const s = Ft(t.baseURL, t.url);
    return Ct(s, t.params, t.paramsSerializer);
  }
}
l.forEach(["delete", "get", "head", "options"], function(t) {
  de.prototype[t] = function(s, r) {
    return this.request(Z(r || {}, {
      method: t,
      url: s,
      data: (r || {}).data
    }));
  };
});
l.forEach(["post", "put", "patch"], function(t) {
  function s(r) {
    return function(i, n, a) {
      return this.request(Z(a || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: n
      }));
    };
  }
  de.prototype[t] = s(), de.prototype[t + "Form"] = s(!0);
});
const ce = de;
class Ie {
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
      r.reason || (r.reason = new oe(i, n, a), s(r.reason));
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
      token: new Ie(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
const Ga = Ie;
function Ja(e) {
  return function(s) {
    return e.apply(null, s);
  };
}
function Xa(e) {
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
const Za = Re;
function Lt(e) {
  const t = new ce(e), s = ht(ce.prototype.request, t);
  return l.extend(s, ce.prototype, t, { allOwnKeys: !0 }), l.extend(s, t, null, { allOwnKeys: !0 }), s.create = function(o) {
    return Lt(Z(e, o));
  }, s;
}
const E = Lt(Ke);
E.Axios = ce;
E.CanceledError = oe;
E.CancelToken = Ga;
E.isCancel = Vt;
E.VERSION = Et;
E.toFormData = _e;
E.AxiosError = k;
E.Cancel = E.CanceledError;
E.all = function(t) {
  return Promise.all(t);
};
E.spread = Ja;
E.isAxiosError = Xa;
E.mergeConfig = Z;
E.AxiosHeaders = B;
E.formToJSON = (e) => Rt(l.isHTMLForm(e) ? new FormData(e) : e);
E.HttpStatusCode = Za;
E.default = E;
const Mt = E;
function Ya(e) {
  return e == null;
}
var el = Ya, tl = function(t) {
  return typeof t == "object" && t !== null;
}, sl = -18, rl = 5, ol = 9, nl = -72, il = -74, al = -68, ll = -69, ul = -7, cl = -127, dl = 1, pl = -107, ml = 10, hl = 2, fl = -42, _l = -2, yl = -8, bl = -128, gl = 3, vl = -4, Sl = -110, $l = -109, wl = -3, kl = -102, Tl = -1, Ol = -196, Cl = 0, Pl = 8, Rl = -75, Vl = {
  AssocType: sl,
  BooleanType: rl,
  ClassType: ol,
  DapiNodeType: nl,
  DapiSessionType: il,
  DapiStreamType: al,
  DapiVersionType: ll,
  DateType: ul,
  DynamicType: cl,
  ErrorType: dl,
  FileType: pl,
  FrameType: ml,
  IntegerType: hl,
  JavaObjectType: fl,
  ListType: _l,
  LongType: yl,
  ObjectType: bl,
  ObjRefType: gl,
  RealType: vl,
  RecArrayType: Sl,
  RecordType: $l,
  ScriptType: wl,
  SocketType: kl,
  StringType: Tl,
  UAPIType: Ol,
  UndefinedType: Cl,
  VoidType: Pl,
  WAPIWorkType: Rl
}, jt = {
  createFormData() {
    return new FormData();
  }
};
function Fl(e) {
  const t = Mt.create({
    baseURL: e.baseUrl
  });
  return t.interceptors.response.use(
    (s) => {
      const r = w(s, "headers.otcsticket");
      return r && (t.defaults.headers.common.OTCSTicket = r), s;
    },
    (s) => Promise.reject(s)
  ), t;
}
function El(e) {
  const t = Fl(e), s = e.username, r = e.password, o = e.otcsticket;
  if (o)
    t.defaults.headers.common.OTCSTicket = o;
  else if (s && r)
    t.interceptors.request.use(async (i) => {
      if (i.headers.common.OTCSTicket)
        return i;
      {
        const n = jt.createFormData();
        n.append("username", s), n.append("password", r);
        const a = await Mt.post(`${e.baseUrl}/api/v1/auth/`, n);
        return i.headers.common.OTCSTicket = w(a, "data.ticket"), i;
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
class Ll extends H {
  auth() {
    return this.session.get("/api/v1/auth/");
  }
}
var Ml = 834, jl = 1298, Al = 30309, Nl = 907, Dl = 1, Kl = 480, Bl = 483, Il = 481, Ul = 31711, xl = 290, zl = 291, Wl = 274, ql = 356, Hl = 357, Ql = 530, Gl = 131, Jl = 132, Xl = 207, Zl = 209, Yl = 199, eu = 196, tu = 194, su = 298, ru = 902, ou = 345, nu = 348, iu = 346, au = 3030338, lu = 3030339, uu = 3030329, cu = 3030002, du = 3030333, pu = 3030004, mu = 3030335, hu = 3030334, fu = 3030205, _u = 136, yu = 557, bu = 3030372, gu = 146, vu = 844, Su = 270, $u = 276, wu = 277, ku = 215, Tu = 602, Ou = 144, Cu = 1297, Pu = 283, Ru = 32912, Vu = 32916, Fu = 31707, Eu = 32914, Lu = 31709, Mu = 32917, ju = 32915, Au = 32913, Nu = 31602, Du = 31601, Ku = 31603, Bu = 335, Iu = 900, Uu = 749, xu = 2504, zu = 904, Wu = 905, qu = 903, Hu = 1299, Qu = 906, Gu = 0, Ju = 223, Xu = 2, Zu = 3030371, Yu = 482, ec = 833, tc = 282, sc = 226, rc = 293, oc = 731, nc = 368, ic = 147, ac = 281, lc = 924, uc = 541, cc = 542, dc = 361, pc = 259, mc = 272, hc = 123475, fc = 123476, _c = 123469, yc = 123470, bc = 430, gc = 432, vc = 422, Sc = 732, $c = 3030331, wc = 31710, kc = 410, Tc = 414, Oc = 919, Cc = 920, Pc = 273, Rc = 1281, Vc = 1282, Fc = 372, Ec = 374, Lc = 373, Mc = 870, jc = 532, Ac = 3030756, Nc = 208, Dc = 257, Kc = 371, Bc = 370, Ic = 3030203, Uc = 3030003, xc = 3030204, zc = 398, Wc = 3030343, qc = 424, Hc = 412, Qc = 419, Gc = 411, Jc = 415, Xc = 418, Zc = 416, Yc = 417, ed = 218, td = 271, sd = 195, rd = 202, od = 543, nd = 201, id = 384, ad = 380, ld = 387, ud = 829, cd = 31712, dd = 31713, pd = 441, md = 296, hd = 431, fd = 327, _d = 425, yd = 428, bd = 32918, gd = 32919, vd = 138, Sd = 381, $d = 134, wd = 299, kd = 139, Td = 555, Od = 554, Cd = 552, Pd = 553, Rd = 556, Vd = 551, Fd = 426, Ed = 427, Ld = 558, Md = 559, jd = 2505, Ad = 835, Nd = 32901, Dd = 258, Kd = 369, Bd = 269, Id = 278, Ud = 383, xd = 292, zd = 31678, Wd = 49547, qd = 275, Hd = 1280, Qd = 1283, Gd = 797, Jd = 796, Xd = 795, Zd = 3030202, Yd = 3030201, ep = 3030001, tp = 3030130, sp = 280, rp = 421, op = 231, np = 206, ip = 205, ap = 204, lp = 210, up = 212, cp = 230, dp = 268, pp = 145, mp = 130, hp = 423, fp = 531, _p = 526, yp = 527, bp = 3030330, gp = 140, vp = 899, Sp = 123461, $p = 133, wp = 198, kp = 347, Tp = 987352, Op = 405, Cp = 375, Pp = 143, Rp = 180, Vp = 336, Fp = 162, Ep = 901, Lp = 141, Mp = 403, jp = 397, Ap = 908, Np = 413, Dp = 550, Kp = 137, Bp = 211, Ip = 148, Up = 149, xp = 484, zp = 1296, Wp = 525, qp = 142, Hp = 161, Qp = 529, Gp = 236, Jp = 235, Xp = 234, Zp = 233, Yp = 30303, em = 128, tm = 190, sm = 5573, rm = 5574, om = 528, nm = 154, im = 286, am = 285, Te = {
  "2WayTee": 294,
  Accession: Ml,
  ActiveFolder: jl,
  Activeview: Al,
  ActivityManager: Nl,
  Alias: Dl,
  Appearance: Kl,
  AppearanceFolder: Bl,
  AppearancesVolume: Il,
  ArchiveFolder: Ul,
  BackupManager: xl,
  BackupProcess: zl,
  BestBets: Wl,
  Blog: ql,
  BlogEntry: Hl,
  BoxFolder: Ql,
  Category: Gl,
  CategoryFolder: Jl,
  Channel: Xl,
  ChannelVol: Zl,
  Classification: Yl,
  "Classification Shortcut": 197,
  ClassificationTree: eu,
  ClassifiedItems: tu,
  Collection: su,
  Column: ru,
  Comments: ou,
  CommentsReply: nu,
  CommentsVol: iu,
  CommExpertContainer: au,
  CommExpertGroup: lu,
  CommStore: uu,
  CommTemplate: cu,
  CommTemplateFolder: du,
  CommTemplateVol: pu,
  CommURLStore: mu,
  CommWorkspace: hu,
  CommXSLVolume: fu,
  CompoundDoc: _u,
  CompoundEMail: yu,
  ContentModuleFolder: bu,
  "csapps CSApplicationManifest": 32658,
  "csapps CSApplicationsVolume": 32657,
  CustomView: gu,
  CustomViewTemplate: vu,
  DataFlowManager: Su,
  DataSourceFolder: $u,
  DirWalker: wu,
  Discussion: ku,
  DispositionGroup: Tu,
  Document: Ou,
  DocumentLLNode: Cu,
  DocumentServer: Pu,
  Dossier: Ru,
  DossierCabinet: Vu,
  DossierCabinetArchive: Fu,
  DossierTemplate: Eu,
  DossierTemplateFolder: Lu,
  DossierTemplatesVolume: Mu,
  DossierTemplateVolume: ju,
  DossierVolume: Au,
  DPSBinding: Nu,
  DPSFolder: Du,
  DPSVolume: Ku,
  DTDLLNode: Bu,
  DynamicView: Iu,
  EMail: Uu,
  EmailConversationItems: xu,
  "Enterprise Archive Document": 753,
  Facet: zu,
  FacetFolder: Wu,
  FacetTree: qu,
  FailedFolder: Hu,
  FixedSystemColumn: Qu,
  Folder: Gu,
  Form: Ju,
  Generation: Xu,
  GENERICCONTENTMODULE: Zu,
  GlobalAppearance: Yu,
  HoldContainer: ec,
  HTMLConversion: tc,
  HTMLFormView: sc,
  Importer: rc,
  Inbox: oc,
  IndexEngine: nc,
  IndexTracer: ic,
  IndexUpdate: ac,
  InternalOTDS: lc,
  ItemTemplateVol: uc,
  ItemTemplateVolFolder: cc,
  JournalVolume: dc,
  LibraryExtractor: pc,
  LibraryObj: mc,
  "LLNode Email Folder": 751,
  LLNodeFAQ: hc,
  LLNodeFAQEntry: fc,
  LLNodeForum: _c,
  LLNodeForumEntry: yc,
  LLNodeURQuestion: bc,
  LLNodeURReply: gc,
  Locators: vc,
  Mailbox: Sc,
  MailStore: $c,
  ManagedSpace: wc,
  MediaType: kc,
  MediaTypesContainer: Tc,
  MemcachedFolder: Oc,
  MemcachedProcess: Cc,
  Merge: Pc,
  MicroPost: Rc,
  MicroPostVolume: Vc,
  MultiVolClassification: Fc,
  MultiVolClassificationProxy: Ec,
  MultiVolClassificationTree: Lc,
  MyReservedItems: Mc,
  MyWorkbenches: jc,
  NAVMENUVOL: Ac,
  News: Nc,
  OTCIndexObj: Dc,
  Partition: Kc,
  PartitionMap: Bc,
  PersonalComm: Ic,
  PersonalCommSystemVolume: Uc,
  PersonalCommVol: xc,
  PersonalStagingFolder: zc,
  PersonalWebpage: Wc,
  PhysicalItemBox: qc,
  PhysicalItemContainer: Hc,
  PhysicalItemCopy: Qc,
  PhysicalItem_non_Container: Gc,
  PhysObjAdmin: Jc,
  PhysObjBatchLabels: Xc,
  PhysObjCirculation: Zc,
  PhysObjReports: Yc,
  Poll: ed,
  Process: td,
  Profile: sd,
  Project: rd,
  ProjectTemplate: od,
  ProjectVol: nd,
  Prospector: id,
  ProspectorQueries: ad,
  ProspectorSnapshot: ld,
  Provenance: ud,
  Proxy: 260,
  PublishingFolder: cd,
  PublishingFolderVolume: dd,
  QAFolder: pd,
  QueryFile: md,
  QuestionVolume: hd,
  RecentItems: fd,
  RecordType: _d,
  RecordTypesContainer: yd,
  RedForm: bd,
  RedFormVolume: gd,
  Release: vd,
  RemoteLLDataSource: Sd,
  Reply: $d,
  Report: wd,
  Revision: kd,
  RIMSDisposition: Td,
  RIMSDispositionsContainer: Od,
  RIMSHoldMaintenance: Cd,
  RIMSRsiContainer: Pd,
  RMAdministration: Rd,
  RMClassification: Vd,
  RMFolder: Fd,
  RMPart: Ed,
  RMReportsContainer: Ld,
  RMThesaurus: Md,
  ScanConfigurationVolume: jd,
  ScheduledHoldCriteria: Ad,
  ScriptNode: Nd,
  SearchBroker: Dd,
  SearchEngine: Kd,
  SearchManager: Bd,
  SearchReport: Id,
  SearchResultsTemplate: Ud,
  SearchTemplate: xd,
  Simplate: zd,
  SkyPodLLVolume: Wd,
  SliceFolder: qd,
  SocialObject: Hd,
  SocialObjectVolume: Qd,
  SPCJOBDESCR: Gd,
  SPCJOBDESCRFOLDER: Jd,
  SPCVOLUME: Xd,
  spdcommittee: Zd,
  spdcommitteevol: Yd,
  spdcommitteevolume: ep,
  spdemail: tp,
  Spider: sp,
  StorageManagement: rp,
  SubmitVersionNode: op,
  Task: np,
  TaskGroup: ip,
  TaskList: ap,
  TaskListVol: lp,
  TaskMilestone: up,
  Template: cp,
  TemplateFolder: dp,
  TextDocument: pp,
  Topic: mp,
  Transfers: hp,
  TransportBox: fp,
  TransportItem: _p,
  TransportItemPart: yp,
  UrgentRequests: bp,
  URL: gp,
  VirtualFolder: vp,
  VolBlog: Sp,
  VolCategories: $p,
  VolClassification: wp,
  VolComments: kp,
  VolDAP: Tp,
  VolDeletedItems: Op,
  VolDirectory: Cp,
  VolDiscussion: Pp,
  VolDomainWorkspace: Rp,
  VolDTD: Vp,
  VolEditWorkflow: Fp,
  VolFacets: Ep,
  VolLibrary: Lp,
  VolOrphan: Mp,
  VolPersonalStaging: jp,
  VolPerspectives: Ap,
  VolPhysObj: Np,
  VolRecMan: Dp,
  VolRelease: Kp,
  VolReports: Bp,
  VolSystem: Ip,
  VolTracer: Up,
  VolumeFolder: xp,
  VolumeLLVolume: zp,
  VolWarehouse: Wp,
  VolWorkbin: qp,
  VolWorkflow: Hp,
  WarehouseFolder: Qp,
  WebFormConnectionVolume: Gp,
  WebFormDatabaseConnection: Jp,
  WebFormLookup: Xp,
  WebFormLookupVolume: Zp,
  WebReports: Yp,
  WFMapLLNode: em,
  WFStatusNode: tm,
  WIKI: sm,
  WIKIPAGE: rm,
  Workbench: om,
  WorkflowAttachments: nm,
  XMLActivatorCon: im,
  XMLActivatorProd: am
};
class lm extends H {
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
      const a = o || s.name, p = {
        ...i,
        type: Te.Document,
        name: a,
        parent_id: t,
        file: {
          file: s,
          name: a
        }
      };
      return this.session.postForm(n, p);
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
    return this.addItem(Te.Folder, t, s, r);
  }
  addGeneration(t, s, r, o, i = {}) {
    return this.addItem(Te.Generation, t, s, {
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
class um extends H {
  start(t) {
    return this.draftprocesses(t).then((s) => w(s, "data.results.draftprocess_id")).then((s) => this.draftprocesses_update(s));
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
class cm extends H {
  scriptNode(t, s = {}) {
    return this.session.get(`api/v1/rhcore/${t}`, {
      params: s
    });
  }
}
class dm extends H {
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
class pm extends H {
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
class mm extends H {
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
      const a = o || s.name, p = {
        file: {
          file: s,
          name: a
        },
        ...i
      };
      return this.session.postForm(n, p);
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
class hm extends H {
  run(t, s = {}) {
    const r = `api/v1/nodes/${t}/output`;
    return this.session.get(r, { params: s });
  }
}
const nt = {
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
class fm extends Error {
  code;
  data;
  constructor(t = nt.INTERNALERROR.message, s = null, r = nt.INTERNALERROR.code) {
    if (tl(t)) {
      const o = t;
      super(o.message), this.code = o.code, this.data = o.data;
    } else
      super(t), this.code = r, this.data = s;
  }
}
const ie = {
  index: 0,
  get next() {
    return this.index = this.index + 1, this.index;
  }
};
class _m {
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
      throw new fm(s.message, s.data, s.code);
    } else
      throw Error("The server did not respond correctly.");
  }
  // https://www.jsonrpc.org/specification#request_object
  // params is allowed to be null!
  // also on queue function below
  async request(t, s, r = ie.next) {
    const o = await this.session.postBody(this.relativePath, {
      rpc: this.requestObject(t, s, r)
    });
    return this.handleResponse(o.data);
  }
  resetQueue() {
    this._batchQueue = [];
  }
  queue(t, s, r = ie.next) {
    return this._batchQueue.push(this.requestObject(t, s, r)), this;
  }
  async batch(t = !1) {
    const s = this._batchQueue;
    this.resetQueue();
    const r = await this.session.postBody(this.relativePath, {
      rpc: s
    });
    return w(r, "data.data", []).map((o) => {
      if (t)
        return this.handleResponse(o);
      try {
        return this.handleResponse(o);
      } catch (i) {
        return i;
      }
    });
  }
  rhnode(t, s, r = [], o = ie.next) {
    const i = {
      dataid: t,
      args: r
    };
    return this.request(s, i, o);
  }
  rhnodeQueue(t, s, r = [], o = ie.next) {
    const i = {
      dataid: t,
      args: r
    };
    return this.queue(s, i, o);
  }
}
class ym {
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
    this.axios = El(t);
  }
  get nodes() {
    return this._nodes == null && (this._nodes = new lm(this)), this._nodes;
  }
  get auth() {
    return this._auth == null && (this._auth = new Ll(this)), this._auth;
  }
  get workflow() {
    return this._workflow == null && (this._workflow = new um(this)), this._workflow;
  }
  get rhcore() {
    return this._rhcore == null && (this._rhcore = new cm(this)), this._rhcore;
  }
  get members() {
    return this._members == null && (this._members = new pm(this)), this._members;
  }
  get search() {
    return this._search == null && (this._search = new dm(this)), this._search;
  }
  get webreports() {
    return this._webreports == null && (this._webreports = new hm(this)), this._webreports;
  }
  get versions() {
    return this._versions == null && (this._versions = new mm(this)), this._versions;
  }
  get dataTypesEnum() {
    return Vl;
  }
  rpcClient(t = "/api/v1/rh/rpc/rhnode/") {
    return new _m(this, t);
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
    const s = jt.createFormData();
    for (const [r, o] of Object.entries(t))
      o && o.name && o.file ? s.append(r, o.file, o.name) : Array.isArray(o) || this._isObject(o) || this._isBoolean(o) ? s.append(r, JSON.stringify(o)) : el(o) || s.append(r, o);
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
const bm = /* @__PURE__ */ Object.assign({
  "./components/Card/KCard.vue": Qt,
  "./components/Card/KCardActions.vue": Yt,
  "./components/Card/KCardText.vue": os,
  "./components/Card/KCardTitle.vue": us,
  "./components/KAdminLink.vue": fs,
  "./components/KAlert.vue": Ss,
  "./components/KApp.vue": Os,
  "./components/KAutocomplete.vue": Ms,
  "./components/KBrowseLink.vue": Hs,
  "./components/KButton.vue": Zs,
  "./components/KConfirm.vue": sr,
  "./components/KDateTimePicker.vue": lr,
  "./components/KDialog.vue": pr,
  "./components/KDot.vue": _r,
  "./components/KFormFieldWrapper.vue": Sr,
  "./components/KFunctionMenu.vue": Rr,
  "./components/KLinearProgressIndicator.vue": Mr,
  "./components/KMulti.vue": Ur,
  "./components/KMulti2.vue": Gr,
  "./components/KMultiUserPicker.vue": Yr,
  "./components/KNodeAncestor.vue": oo,
  "./components/KNodePickerField.vue": co,
  "./components/KOneMoment.vue": yo,
  "./components/KPageDropZone.vue": So,
  "./components/KPageTitle.vue": Co,
  "./components/KPagination.vue": Uo,
  "./components/KPagination2.vue": Yo,
  "./components/KRadioGroup.vue": nn,
  "./components/KScratch.vue": cn,
  "./components/KSelect.vue": yn,
  "./components/KSnackbar.vue": Cn,
  "./components/KSortHeader.vue": Ln,
  "./components/KSpacer.vue": Dn,
  "./components/KSpinner.vue": zn,
  "./components/KSwitch.vue": Gn,
  "./components/KTable.vue": Yn,
  "./components/KTextArea.vue": oi,
  "./components/KTextField.vue": ui,
  "./components/KUserGIF.vue": hi,
  "./components/KUserLink.vue": Si,
  "./components/KUserPicker.vue": Oi,
  "./components/Tabs/KTabItem.vue": Fi,
  "./components/Tabs/KTabs.vue": Ki
}), Cm = {
  install(e, t) {
    Object.entries(bm).forEach(
      ([o, i]) => {
        const n = o?.split("/")?.pop()?.replace(/\.\w+$/, "");
        e.component(n, i.default);
      }
    );
    const s = new ym(t), r = {
      img: t.img,
      baseUrl: t.baseUrl,
      jsLongDateFormat: t.datelong,
      jsShortDateFormat: t.dateshort
    };
    e.provide(G, s), e.provide(he, r);
  }
};
export {
  he as configKey,
  As as confirmDialogKey,
  Cm as default,
  I as injectStrict,
  Ks as nodeLookup,
  G as sessionKey,
  js as snackbarKey,
  mt as userLookup
};
