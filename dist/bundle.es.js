import { defineComponent as _, h as Nt, openBlock as u, createElementBlock as p, renderSlot as R, inject as it, Fragment as V, createElementVNode as h, resolveComponent as g, createBlock as C, Transition as oe, withCtx as v, normalizeStyle as Q, createVNode as P, createTextVNode as L, createCommentVNode as S, resolveDirective as at, withDirectives as W, normalizeClass as j, withKeys as se, withModifiers as z, vModelText as Ve, renderList as A, toDisplayString as T, mergeProps as lt, vModelDynamic as Kt, Teleport as Dt, setBlockTracking as Ue, TransitionGroup as Fe, vModelRadio as Bt, vModelSelect as It, useCssVars as ut } from "vue";
import { directive as ct } from "vue3-click-away";
import $ from "lodash.get";
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
      const e = {}, t = M(this.height), s = M(this.minHeight), r = M(this.minWidth), o = M(this.maxHeight), i = M(this.maxWidth), n = M(this.width);
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
  return u(), p("div", Jt, [
    R(e.$slots, "default")
  ]);
}
const Zt = /* @__PURE__ */ y(Gt, [["render", Xt]]), Yt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
    return { config: it("config", {}) };
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
  return u(), C(oe, { name: "fade" }, {
    default: v(() => [
      e.visibleLocal ? (u(), p("div", {
        key: 0,
        class: "flex items-center rounded text-main-bright p-2",
        style: Q([e.colorableBackgroundStyle])
      }, [
        h("div", bs, [
          R(e.$slots, "default")
        ]),
        h("button", {
          class: "flex-grow-0",
          onClick: t[0] || (t[0] = (...a) => e.dismiss && e.dismiss(...a))
        }, [
          P(n, { class: "text-main-bright" }, {
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
    P(r, null, {
      default: v(() => [
        P(s, null, {
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
  const n = at("click-away");
  return W((u(), p("div", {
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
          t[2] || (t[2] = se(z((a) => e.currentFocus = Math.max(-1, e.currentFocus - 1), ["prevent"]), ["arrow-up"])),
          t[3] || (t[3] = se(z((a) => e.currentFocus = Math.min(e.items.length - 1, e.currentFocus + 1), ["prevent"]), ["arrow-down"])),
          t[4] || (t[4] = se(z((a) => e.select(e.currentFocus), ["prevent"]), ["enter"])),
          t[6] || (t[6] = se((...a) => e.setBlur && e.setBlur(...a), ["tab"]))
        ],
        onFocus: t[5] || (t[5] = (...a) => e.setFocus && e.setFocus(...a)),
        onKeyup: t[7] || (t[7] = (...a) => e.keyup && e.keyup(...a))
      }, null, 42, Rs), [
        [Ve, e.inputText]
      ]),
      e.focus && e.items.length && e.inputText ? (u(), p("div", Vs, [
        (u(!0), p(V, null, A(e.itemsFiltered, (a, d) => (u(), p("div", {
          key: d,
          class: j(["k-autocomplete-item", { "k-autocomplete-active": e.currentFocus == d }]),
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
const G = Symbol("session"), fe = Symbol("config"), js = Symbol("snackbar"), As = Symbol("confirmDialogKey"), ve = new Ee();
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
class Ks {
  nodes;
  nodeLookupQueue;
  constructor() {
    this.nodes = {}, this.nodeLookupQueue = new Ns();
  }
  registerUsers(t) {
    t.forEach((s) => this.nodes[s.dataid] = s);
  }
  async lookup(t, s) {
    return await ve.acquire(s), this.nodes[s] ? (ve.release(s), this.nodes[s]) : new Promise((r) => {
      const o = (i) => {
        this.nodes[s] = i, r(i), ve.release(s);
      };
      this.nodeLookupQueue.queue(t, o, s);
    });
  }
}
const Ds = new Ks(), Bs = _({
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
        e && (this.nodeRecLocal = await Ds.lookup(this.session, e));
      },
      immediate: !0
    }
  }
}), Is = { key: 0 }, Us = ["src"], xs = ["href"], zs = ["innerHTML"];
function Ws(e, t, s, r, o, i) {
  const n = g("KFunctionMenu");
  return e.nodeRecResolved ? (u(), p("span", Is, [
    e.image ? (u(), p("img", {
      key: 0,
      src: e.nodeRecResolved.gif
    }, null, 8, Us)) : S("", !0),
    L(" "),
    h("a", {
      href: e.nodeRecResolved.url
    }, T(e.nodeRecResolved.name), 9, xs),
    e.clickable ? (u(), C(n, {
      key: 1,
      dataid: e.nodeRecResolved.dataid
    }, null, 8, ["dataid"])) : S("", !0),
    h("span", {
      innerHTML: e.nodeRecResolved.modifiedImageCallback
    }, null, 8, zs)
  ])) : S("", !0);
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
  return u(), p("button", lt({
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
  const n = g("KCardTitle"), a = g("KCardText"), d = g("KSpacer"), c = g("KButton"), m = g("KCardActions"), b = g("KCard"), F = g("KDialog");
  return u(), p(V, null, [
    R(e.$slots, "default"),
    P(F, {
      modelValue: e.dialog,
      "onUpdate:modelValue": t[2] || (t[2] = (O) => e.dialog = O),
      "max-width": "30vw",
      "min-width": "20vw"
    }, {
      default: v(() => [
        P(b, null, {
          default: v(() => [
            e.title ? (u(), C(n, { key: 0 }, {
              default: v(() => [
                L(T(e.title), 1)
              ]),
              _: 1
            })) : S("", !0),
            e.message ? (u(), C(a, { key: 1 }, {
              default: v(() => [
                L(T(e.message), 1)
              ]),
              _: 1
            })) : S("", !0),
            P(m, null, {
              default: v(() => [
                P(d),
                e.noLabel ? (u(), C(c, {
                  key: 0,
                  small: "",
                  onClick: t[0] || (t[0] = (O) => e.dismiss(!1))
                }, {
                  default: v(() => [
                    L(T(e.noLabel), 1)
                  ]),
                  _: 1
                })) : S("", !0),
                e.yesLabel ? (u(), C(c, {
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
  const n = g("KButton");
  return u(), p("div", or, [
    W(h("input", {
      "onUpdate:modelValue": t[0] || (t[0] = (a) => e.localModelValue = a),
      class: "k-input",
      type: e.type,
      readonly: !e.editable
    }, null, 8, nr), [
      [Kt, e.localModelValue]
    ]),
    e.editable ? (u(), p(V, { key: 0 }, [
      P(n, {
        small: "",
        onClick: e.setToNow
      }, {
        default: v(() => [
          L(" Now ")
        ]),
        _: 1
      }, 8, ["onClick"]),
      P(n, {
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
const ar = /* @__PURE__ */ y(rr, [["render", ir]]), lr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ar
}, Symbol.toStringTag, { value: "Module" })), ur = _({
  directives: {
    ClickAway: ct
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
function cr(e, t, s, r, o, i) {
  const n = at("click-away");
  return u(), p(V, null, [
    R(e.$slots, "activator", { on: e.on }),
    e.mounted ? (u(), C(Dt, {
      key: 0,
      to: ".k-app"
    }, [
      P(oe, { name: "fade" }, {
        default: v(() => [
          e.dialog ? (u(), p("div", {
            key: 0,
            class: "k-dialog",
            style: Q([e.style])
          }, [
            W((u(), p("div", {
              ref: "content",
              class: j(["k-dialog-content", e.classObj]),
              style: Q([e.measurableStyles])
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
  return u(), p("div", {
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
  return u(), p("div", null, [
    e.label ? (u(), p("div", br, T(e.label), 1)) : S("", !0),
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
const vr = /* @__PURE__ */ y(yr, [["render", gr]]), Sr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vr,
  mixin: J
}, Symbol.toStringTag, { value: "Module" })), wr = _({
  setup() {
    return { config: I(fe) };
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
}), $r = { key: 0 }, kr = ["id"], Tr = ["src"], Or = ["id", "src"];
function Cr(e, t, s, r, o, i) {
  return e.dataid ? (u(), p("span", $r, [
    h("a", {
      id: e.aid,
      href: "#",
      class: "functionMenuHotspot",
      onClick: t[2] || (t[2] = z((...n) => e.onclick && e.onclick(...n), ["prevent"]))
    }, [
      e.isModernFunctionMenu ? (u(), p("img", {
        key: 0,
        src: `${e.config.img}spacer.gif`,
        alt: "Functions"
      }, null, 8, Tr)) : (u(), p("img", {
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
  ])) : S("", !0);
}
const Pr = /* @__PURE__ */ y(wr, [["render", Cr]]), Rr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pr
}, Symbol.toStringTag, { value: "Module" })), Vr = _({});
const Fr = { class: "k-progress-line" };
function Er(e, t, s, r, o, i) {
  return u(), p("div", Fr);
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
const Ar = { class: "k-multi-widget" }, Nr = { class: "k-multi-buttons" }, Kr = /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ h("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z" })
], -1), Dr = /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ h("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" })
], -1);
function Br(e, t, s, r, o, i) {
  const n = g("KButton"), a = g("KCard");
  return u(), C(a, { class: "k-multi" }, {
    default: v(() => [
      P(Fe, {
        name: "fade",
        tag: "div"
      }, {
        default: v(() => [
          (u(!0), p(V, null, A(e.valueLocal, (d, c) => (u(), p("div", {
            key: `k-multi-${d}`,
            class: "k-multi-item"
          }, [
            h("div", Ar, [
              R(e.$slots, "default", {
                index: c,
                value: d,
                update: (m) => e.update(c, m)
              })
            ]),
            h("div", Nr, [
              e.canRemove ? (u(), C(n, {
                key: 0,
                text: "",
                onClick: (m) => e.remove(c)
              }, {
                default: v(() => [
                  Kr
                ]),
                _: 2
              }, 1032, ["onClick"])) : S("", !0),
              e.canAdd ? (u(), C(n, {
                key: 1,
                text: "",
                onClick: (m) => e.add(c)
              }, {
                default: v(() => [
                  Dr
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
  const n = g("KButton"), a = g("KCard");
  return u(), C(a, { class: "k-multi" }, {
    default: v(() => [
      P(Fe, {
        name: "fade",
        tag: "div"
      }, {
        default: v(() => [
          (u(!0), p(V, null, A(e.valueLocal, (d, c) => (u(), p("div", {
            key: `k-multi-${d}`,
            class: "k-multi-item"
          }, [
            h("div", zr, [
              R(e.$slots, "readonly", {
                index: c,
                value: d
              }, () => [
                L(T(d), 1)
              ])
            ]),
            h("div", Wr, [
              P(n, {
                text: "",
                onClick: (m) => e.remove(c)
              }, {
                default: v(() => [
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
      }) : S("", !0)
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
  const n = g("KUserLink"), a = g("KUserPicker"), d = g("KMulti2");
  return u(), C(d, {
    modelValue: e.userIdsLocal,
    "onUpdate:modelValue": t[0] || (t[0] = (c) => e.userIdsLocal = c)
  }, {
    readonly: v(({ value: c }) => [
      P(n, {
        user: c,
        gif: ""
      }, null, 8, ["user"])
    ]),
    add: v(({ add: c }) => [
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
        this.nodes[s] = $(r, "data.ancestors", []);
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
  return u(), p("div", so, [
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
const pt = /* @__PURE__ */ y(to, [["render", ro]]), oo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pt
}, Symbol.toStringTag, { value: "Module" })), no = _({
  components: { KNodeAncestor: pt },
  setup() {
    return {
      session: I(G),
      config: I(fe)
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
  const n = g("KButton"), a = g("KNodeAncestor");
  return u(), p("div", io, [
    h("input", {
      ref: "input",
      type: "text",
      class: "k-input",
      value: e.name,
      onFocus: t[0] || (t[0] = (...d) => e.openWindow && e.openWindow(...d))
    }, null, 40, ao),
    P(n, {
      small: "",
      onClick: e.openWindow
    }, {
      default: v(() => [
        L(T(e.browseButtonLabel), 1)
      ]),
      _: 1
    }, 8, ["onClick"]),
    e.clearable ? (u(), C(n, {
      key: 0,
      small: "",
      onClick: e.clear
    }, {
      default: v(() => [
        L(T(e.clearButtonLabel), 1)
      ]),
      _: 1
    }, 8, ["onClick"])) : S("", !0),
    e.dataid ? (u(), C(a, {
      key: 1,
      dataid: e.dataid
    }, null, 8, ["dataid"])) : S("", !0)
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
  const n = g("KSpinner"), a = g("KDialog");
  return u(), C(a, { "model-value": e.loading }, {
    default: v(() => [
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
  return u(), p("div", null, [
    R(e.$slots, "default", { active: e.active })
  ]);
}
const vo = /* @__PURE__ */ y(bo, [["render", go]]), So = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vo
}, Symbol.toStringTag, { value: "Module" })), wo = _({
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
const $o = { key: 0 }, ko = { class: "rhmuted" };
function To(e, t, s, r, o, i) {
  return u(), p("h1", null, [
    L(T(e.title), 1),
    e.subtitle ? (u(), p("span", $o, [
      L(": "),
      h("span", ko, T(e.subtitle) + " - 2", 1)
    ])) : S("", !0)
  ]);
}
const Oo = /* @__PURE__ */ y(wo, [["render", To], ["__scopeId", "data-v-8d8d8837"]]), Co = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
const Ro = {
  key: 0,
  class: "k-pagination"
}, Vo = { class: "k-pagination-buttons" }, Fo = {
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
], -1), Ko = [
  No
];
function Do(e, t, s, r, o, i) {
  const n = g("KSelect");
  return e.pagination.hasOtherPages ? (u(), p("div", Ro, [
    P(n, {
      modelValue: e.pageSize,
      "onUpdate:modelValue": t[0] || (t[0] = (a) => e.pageSize = a),
      items: e.pageSizes,
      label: "Page Size"
    }, null, 8, ["modelValue", "items"]),
    h("div", Vo, [
      e.hasPrevious ? (u(), p("a", Fo, Lo)) : S("", !0),
      (u(!0), p(V, null, A(e.pageRange, (a) => (u(), p(V, { key: a }, [
        a === "|" ? (u(), p("div", Mo, "...")) : (u(), p("a", {
          key: 1,
          class: j(["k-pagination-button k-pagination-button-border", e.classObj(a)]),
          onClick: (d) => e.$emit("update:modelValue", a)
        }, T(a), 11, jo))
      ], 64))), 128)),
      e.hasNext ? (u(), p("a", Ao, Ko)) : S("", !0)
    ]),
    h("div", null, " Displaying " + T(e.pagination.startIndex) + "-" + T(e.pagination.endIndex) + " of " + T(e.pagination.count) + " items. ", 1)
  ])) : S("", !0);
}
const Bo = /* @__PURE__ */ y(Po, [["render", Do]]), Io = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Bo
}, Symbol.toStringTag, { value: "Module" })), Uo = _({
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
const xo = { class: "k-pagination2" }, zo = { class: "k-pagination2-buttons" }, Wo = /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ h("path", { d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" })
], -1), qo = [
  Wo
], Ho = ["onClick"], Qo = /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ h("path", { d: "M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" })
], -1), Go = [
  Qo
];
function Jo(e, t, s, r, o, i) {
  const n = g("KSelect");
  return u(), p("div", xo, [
    h("div", null, [
      P(n, {
        modelValue: e.pageSize,
        "onUpdate:modelValue": t[0] || (t[0] = (a) => e.pageSize = a),
        items: e.pageSizes,
        label: "Page Size"
      }, null, 8, ["modelValue", "items"])
    ]),
    e.pageCount > 1 ? (u(), p(V, { key: 0 }, [
      h("div", zo, [
        e.hasPrevious ? (u(), p("a", {
          key: 0,
          class: "k-pagination2-arrow-button",
          onClick: t[1] || (t[1] = (a) => e.clickedPageNumber(e.pageNumber0 - 1))
        }, qo)) : S("", !0),
        (u(!0), p(V, null, A(e.pageRange0, (a) => (u(), p("div", {
          key: a,
          class: j(["k-pagination2-button", e.classObj(a)]),
          onClick: (d) => e.clickedPageNumber(a)
        }, T(a + 1), 11, Ho))), 128)),
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
const Xo = /* @__PURE__ */ y(Uo, [["render", Jo]]), Zo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xo
}, Symbol.toStringTag, { value: "Module" })), Yo = _({
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
const en = ["id", "value", "disabled"], tn = ["for"];
function sn(e, t, s, r, o, i) {
  const n = g("KSpinner"), a = g("KFormFieldWrapper");
  return u(), p("div", null, [
    P(a, {
      label: e.label,
      "success-messages": e.successMessages,
      "error-messages": e.errorMessages
    }, {
      default: v(() => [
        P(oe, {
          name: "fade",
          mode: "out-in"
        }, {
          default: v(() => [
            e.loading ? (u(), C(n, { key: 0 })) : (u(), p("div", {
              key: 1,
              class: j(["k-radiogroup", e.classObj])
            }, [
              (u(!0), p(V, null, A(e.items, (d) => (u(), p("div", {
                key: e.getItemValue(d),
                class: "k-radiogroup-item"
              }, [
                W(h("input", {
                  id: e.getItemValue(d),
                  "onUpdate:modelValue": t[0] || (t[0] = (c) => e.localValue = c),
                  type: "radio",
                  value: e.getItemValue(d),
                  disabled: e.getItemDisabled(d)
                }, null, 8, en), [
                  [Bt, e.localValue]
                ]),
                h("label", {
                  for: e.getItemValue(d)
                }, T(e.getItemText(d)), 9, tn)
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
const rn = /* @__PURE__ */ y(Yo, [["render", sn]]), on = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: rn
}, Symbol.toStringTag, { value: "Module" })), nn = _({
  inject: ["ksnackbar"],
  methods: {
    click() {
    }
  }
});
function an(e, t, s, r, o, i) {
  return u(), p("div", null, [
    h("button", {
      onClick: t[0] || (t[0] = (...n) => e.click && e.click(...n))
    }, "click")
  ]);
}
const ln = /* @__PURE__ */ y(nn, [["render", an]]), un = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ln
}, Symbol.toStringTag, { value: "Module" })), cn = _({
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
const dn = { class: "k-select" }, pn = ["value"];
function mn(e, t, s, r, o, i) {
  const n = g("KSpinner"), a = g("KFormFieldWrapper");
  return u(), C(a, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: v(() => [
      h("div", dn, [
        W(h("select", {
          "onUpdate:modelValue": t[0] || (t[0] = (d) => e.localValue = d),
          class: j(e.classObj)
        }, [
          (u(!0), p(V, null, A(e.items, (d) => (u(), p("option", {
            key: e.getItemValue(d),
            value: e.getItemValue(d)
          }, T(e.getItemText(d)), 9, pn))), 128))
        ], 2), [
          [It, e.localValue]
        ]),
        P(oe, { name: "fade" }, {
          default: v(() => [
            e.loading ? (u(), C(n, {
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
const hn = /* @__PURE__ */ y(cn, [["render", mn]]), fn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: hn
}, Symbol.toStringTag, { value: "Module" })), _n = _({
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
const yn = { class: "k-snackbar" }, bn = { class: "k-snackbar-item-message" }, gn = {
  key: 0,
  class: "k-snackbar-title"
}, vn = {
  key: 1,
  class: "k-snackbar-text"
}, Sn = {
  key: 0,
  class: "k-snackbar-action"
}, wn = ["onClick"];
function $n(e, t, s, r, o, i) {
  return u(), p(V, null, [
    R(e.$slots, "default"),
    h("div", yn, [
      P(Fe, {
        name: "slide",
        tag: "div",
        mode: "out-in"
      }, {
        default: v(() => [
          (u(!0), p(V, null, A(e.items, (n) => (u(), p("div", {
            key: n.index,
            class: j(["k-snackbar-item", e.classObj(n)])
          }, [
            h("div", bn, [
              n.title ? (u(), p("div", gn, T(n.title), 1)) : S("", !0),
              n.message ? (u(), p("div", vn, T(n.message), 1)) : S("", !0)
            ]),
            n.action ? (u(), p("div", Sn, [
              h("a", {
                href: "#",
                onClick: z((a) => e.action(n), ["prevent"])
              }, T(n.actionLabel), 9, wn)
            ])) : S("", !0)
          ], 2))), 128))
        ]),
        _: 1
      })
    ])
  ], 64);
}
const kn = /* @__PURE__ */ y(_n, [["render", $n]]), Tn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: kn
}, Symbol.toStringTag, { value: "Module" })), On = _({
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
const Cn = {
  key: 0,
  class: "j-sort-header-arrow"
}, Pn = {
  key: 1,
  class: "j-sort-header-arrow"
};
function Rn(e, t, s, r, o, i) {
  return u(), p("a", {
    href: "#",
    onClick: t[0] || (t[0] = z((...n) => e.emitClick && e.emitClick(...n), ["prevent"]))
  }, [
    R(e.$slots, "default"),
    P(oe, {
      name: "fade",
      mode: "out-in"
    }, {
      default: v(() => [
        e.isActive && e.sortAsc ? (u(), p("span", Cn, "↓")) : e.isActive ? (u(), p("span", Pn, "↑")) : S("", !0)
      ]),
      _: 1
    })
  ]);
}
const Vn = /* @__PURE__ */ y(On, [["render", Rn]]), Fn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Vn
}, Symbol.toStringTag, { value: "Module" }));
const En = {}, Ln = { class: "k-spacer" };
function Mn(e, t) {
  return u(), p("div", Ln);
}
const jn = /* @__PURE__ */ y(En, [["render", Mn]]), An = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: jn
}, Symbol.toStringTag, { value: "Module" })), Le = _({
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
}), We = () => {
  ut((e) => ({
    "519b76bc": e.color
  }));
}, qe = Le.setup;
Le.setup = qe ? (e, t) => (We(), qe(e, t)) : We;
const Nn = /* @__PURE__ */ h("circle", {
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), Kn = /* @__PURE__ */ h("path", {
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), Dn = [
  Nn,
  Kn
];
function Bn(e, t, s, r, o, i) {
  return u(), p("svg", {
    style: Q(e.measurableStyles),
    class: "k-spinner",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, Dn, 4);
}
const In = /* @__PURE__ */ y(Le, [["render", Bn]]), Un = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: In
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
const xn = /* @__PURE__ */ h("span", { class: "k-switch-slider" }, null, -1), zn = [
  xn
];
function Wn(e, t, s, r, o, i) {
  return u(), p("div", {
    class: j(["k-switch", e.classObj]),
    onClick: t[0] || (t[0] = (n) => e.on = !e.on)
  }, zn, 2);
}
const qn = /* @__PURE__ */ y(Me, [["render", Wn]]), Hn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qn
}, Symbol.toStringTag, { value: "Module" })), Qn = _({
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
    e.loading ? (u(), C(n, { key: 0 })) : S("", !0),
    h("table", {
      class: j(["k-table", e.classObj])
    }, [
      R(e.$slots, "default")
    ], 2)
  ]);
}
const Jn = /* @__PURE__ */ y(Qn, [["render", Gn]]), Xn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Jn
}, Symbol.toStringTag, { value: "Module" })), Zn = _({
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
const Yn = ["rows"];
function ei(e, t, s, r, o, i) {
  const n = g("KFormFieldWrapper");
  return u(), C(n, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: v(() => [
      W(h("textarea", lt({
        "onUpdate:modelValue": t[0] || (t[0] = (a) => e.valueLocal = a)
      }, e.$attrs, {
        spellcheck: "false",
        class: [e.classObj, "k-textarea"],
        rows: e.rows,
        onKeydown: t[1] || (t[1] = se(z((...a) => e.tabber && e.tabber(...a), ["prevent"]), ["tab"]))
      }), null, 16, Yn), [
        [Ve, e.valueLocal]
      ])
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const ti = /* @__PURE__ */ y(Zn, [["render", ei]]), si = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ti
}, Symbol.toStringTag, { value: "Module" })), ri = _({
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
const oi = ["placeholder"];
function ni(e, t, s, r, o, i) {
  const n = g("KFormFieldWrapper");
  return u(), C(n, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: v(() => [
      W(h("input", {
        "onUpdate:modelValue": t[0] || (t[0] = (a) => e.value = a),
        class: j(["k-input-text-field", e.classObj]),
        placeholder: e.placeholder
      }, null, 10, oi), [
        [Ve, e.value]
      ])
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const ii = /* @__PURE__ */ y(ri, [["render", ni]]), ai = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ii
}, Symbol.toStringTag, { value: "Module" })), li = _({
  setup() {
    return {
      config: I(fe),
      session: I(G)
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
}), ui = ["src"];
function ci(e, t, s, r, o, i) {
  return e.url ? (u(), p("img", {
    key: 0,
    src: e.url,
    style: Q([e.measurableStyles])
  }, null, 12, ui)) : S("", !0);
}
const di = /* @__PURE__ */ y(li, [["render", ci]]), pi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: di
}, Symbol.toStringTag, { value: "Module" })), ee = new Ee();
class mi {
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
class hi {
  users;
  userLookupQueue;
  constructor() {
    this.users = {}, this.userLookupQueue = new mi();
  }
  registerUsers(t) {
    t.forEach((s) => this.users[s.userid] = s);
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
const mt = new hi(), fi = _({
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
      return $(this.userRecLocal, "id") ?? $(this.userRecLocal, "userid");
    },
    // userLocal() {
    //   return this.user ?? this.userid ?? this.userRec
    // },
    displayName() {
      return $(this.userRecLocal, "display_name") ?? $(this.userRecLocal, "displayname") ?? $(this.userRecLocal, "name");
    },
    type() {
      return $(this.userRecLocal, "type");
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
const _i = {
  key: 0,
  class: "k-user-link"
};
function yi(e, t, s, r, o, i) {
  const n = g("KUserGIF");
  return e.userRecLocal ? (u(), p("span", _i, [
    e.gif ? (u(), C(n, {
      key: 0,
      "user-rec": e.userRecLocal
    }, null, 8, ["user-rec"])) : S("", !0),
    L("  "),
    h("a", {
      href: "#",
      onClick: t[0] || (t[0] = z((...a) => e.click && e.click(...a), ["prevent"]))
    }, T(e.displayName), 1)
  ])) : S("", !0);
}
const bi = /* @__PURE__ */ y(fi, [["render", yi]]), gi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bi
}, Symbol.toStringTag, { value: "Module" })), vi = _({
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
          text: $(s, "name_formatted"),
          value: $(s, "id"),
          type: $(s, "type")
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
const Si = { class: "flex items-center gap-1" };
function wi(e, t, s, r, o, i) {
  const n = g("KUserGIF"), a = g("KAutocomplete"), d = g("KUserLink"), c = g("KFormFieldWrapper");
  return u(), C(c, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: v(() => [
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
        prepend: v(({ item: m }) => [
          m ? (u(), C(n, {
            key: 0,
            type: m.type
          }, null, 8, ["type"])) : (u(), C(n, {
            key: 1,
            type: e.USER
          }, null, 8, ["type"]))
        ]),
        item: v(({ item: m }) => [
          h("div", Si, [
            P(n, {
              type: m.type
            }, null, 8, ["type"]),
            L(" " + T(m.text), 1)
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "search-input", "placeholder", "width", "loading", "items", "return-object"])) : (u(), C(d, {
        key: 1,
        user: e.modelValue,
        gif: ""
      }, null, 8, ["user"]))
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const $i = /* @__PURE__ */ y(vi, [["render", wi]]), ki = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $i
}, Symbol.toStringTag, { value: "Module" })), Ti = _({
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
}), Oi = { key: 0 };
function Ci(e, t, s, r, o, i) {
  return e.isSelected ? (u(), p("div", Oi, [
    R(e.$slots, "default")
  ])) : S("", !0);
}
const Pi = /* @__PURE__ */ y(Ti, [["render", Ci]]), Ri = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pi
}, Symbol.toStringTag, { value: "Module" })), Vi = _({
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
const Fi = { class: "k-tabs" }, Ei = { class: "k-tabs-nav" }, Li = ["href", "onClick"], Mi = { class: "k-tabs-content" };
function ji(e, t, s, r, o, i) {
  return u(), p("div", Fi, [
    h("div", Ei, [
      (u(!0), p(V, null, A(e.tabs, (n) => (u(), p("div", {
        key: n.name,
        class: j(e.classObj(n))
      }, [
        h("a", {
          href: `#${n.name}`,
          onClick: (a) => e.selectTab(n.name)
        }, T(n.title), 9, Li)
      ], 2))), 128))
    ]),
    h("div", Mi, [
      R(e.$slots, "default")
    ])
  ]);
}
const Ai = /* @__PURE__ */ y(Vi, [["render", ji]]), Ni = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ai
}, Symbol.toStringTag, { value: "Module" }));
function ht(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: ft } = Object.prototype, { getPrototypeOf: je } = Object, Ae = ((e) => (t) => {
  const s = ft.call(t);
  return e[s] || (e[s] = s.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), U = (e) => (e = e.toLowerCase(), (t) => Ae(t) === e), _e = (e) => (t) => typeof t === e, { isArray: Y } = Array, re = _e("undefined");
function Ki(e) {
  return e !== null && !re(e) && e.constructor !== null && !re(e.constructor) && q(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const _t = U("ArrayBuffer");
function Di(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && _t(e.buffer), t;
}
const Bi = _e("string"), q = _e("function"), yt = _e("number"), Ne = (e) => e !== null && typeof e == "object", Ii = (e) => e === !0 || e === !1, ue = (e) => {
  if (Ae(e) !== "object")
    return !1;
  const t = je(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Ui = U("Date"), xi = U("File"), zi = U("Blob"), Wi = U("FileList"), qi = (e) => Ne(e) && q(e.pipe), Hi = (e) => {
  const t = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || ft.call(e) === t || q(e.toString) && e.toString() === t);
}, Qi = U("URLSearchParams"), Gi = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
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
const Ji = (e, t, s, { allOwnKeys: r } = {}) => (ne(t, (o, i) => {
  s && q(o) ? e[i] = ht(o, s) : e[i] = o;
}, { allOwnKeys: r }), e), Xi = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Zi = (e, t, s, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), s && Object.assign(e.prototype, s);
}, Yi = (e, t, s, r) => {
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
}, ea = (e, t, s) => {
  e = String(e), (s === void 0 || s > e.length) && (s = e.length), s -= t.length;
  const r = e.indexOf(t, s);
  return r !== -1 && r === s;
}, ta = (e) => {
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
}, sa = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && je(Uint8Array)), ra = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const i = o.value;
    t.call(e, i[0], i[1]);
  }
}, oa = (e, t) => {
  let s;
  const r = [];
  for (; (s = e.exec(t)) !== null; )
    r.push(s);
  return r;
}, na = U("HTMLFormElement"), ia = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(s, r, o) {
    return r.toUpperCase() + o;
  }
), Ge = (({ hasOwnProperty: e }) => (t, s) => e.call(t, s))(Object.prototype), aa = U("RegExp"), St = (e, t) => {
  const s = Object.getOwnPropertyDescriptors(e), r = {};
  ne(s, (o, i) => {
    t(o, i, e) !== !1 && (r[i] = o);
  }), Object.defineProperties(e, r);
}, la = (e) => {
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
}, ua = (e, t) => {
  const s = {}, r = (o) => {
    o.forEach((i) => {
      s[i] = !0;
    });
  };
  return Y(e) ? r(e) : r(String(e).split(t)), s;
}, ca = () => {
}, da = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Se = "abcdefghijklmnopqrstuvwxyz", Je = "0123456789", wt = {
  DIGIT: Je,
  ALPHA: Se,
  ALPHA_DIGIT: Se + Se.toUpperCase() + Je
}, pa = (e = 16, t = wt.ALPHA_DIGIT) => {
  let s = "";
  const { length: r } = t;
  for (; e--; )
    s += t[Math.random() * r | 0];
  return s;
};
function ma(e) {
  return !!(e && q(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const ha = (e) => {
  const t = new Array(10), s = (r, o) => {
    if (Ne(r)) {
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
  isBuffer: Ki,
  isFormData: Hi,
  isArrayBufferView: Di,
  isString: Bi,
  isNumber: yt,
  isBoolean: Ii,
  isObject: Ne,
  isPlainObject: ue,
  isUndefined: re,
  isDate: Ui,
  isFile: xi,
  isBlob: zi,
  isRegExp: aa,
  isFunction: q,
  isStream: qi,
  isURLSearchParams: Qi,
  isTypedArray: sa,
  isFileList: Wi,
  forEach: ne,
  merge: Oe,
  extend: Ji,
  trim: Gi,
  stripBOM: Xi,
  inherits: Zi,
  toFlatObject: Yi,
  kindOf: Ae,
  kindOfTest: U,
  endsWith: ea,
  toArray: ta,
  forEachEntry: ra,
  matchAll: oa,
  isHTMLForm: na,
  hasOwnProperty: Ge,
  hasOwnProp: Ge,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: St,
  freezeMethods: la,
  toObjectSet: ua,
  toCamelCase: ia,
  noop: ca,
  toFiniteNumber: da,
  findKey: bt,
  global: gt,
  isContextDefined: vt,
  ALPHABET: wt,
  generateString: pa,
  isSpecCompliantForm: ma,
  toJSONObject: ha
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
const fa = null;
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
function _a(e) {
  return l.isArray(e) && !e.some(Ce);
}
const ya = l.toFlatObject(l, {}, null, function(t) {
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
      else if (l.isArray(f) && _a(f) || (l.isFileList(f) || l.endsWith(w, "[]")) && (N = l.toArray(f)))
        return w = Tt(w), N.forEach(function(ae, At) {
          !(l.isUndefined(ae) || ae === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            n === !0 ? Xe([w], At, i) : n === null ? w : w + "[]",
            c(ae)
          );
        }), !1;
    }
    return Ce(f) ? !0 : (t.append(Xe(D, w, i), c(f)), !1);
  }
  const b = [], F = Object.assign(ya, {
    defaultVisitor: m,
    convertValue: c,
    isVisitable: Ce
  });
  function O(f, w) {
    if (!l.isUndefined(f)) {
      if (b.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + w.join("."));
      b.push(f), l.forEach(f, function(N, X) {
        (!(l.isUndefined(N) || N === null) && o.call(
          t,
          N,
          l.isString(X) ? X.trim() : X,
          w,
          F
        )) === !0 && O(N, w ? w.concat(X) : [X]);
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
function Ke(e, t) {
  this._pairs = [], e && ye(e, this, t);
}
const Ot = Ke.prototype;
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
function ba(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Ct(e, t, s) {
  if (!t)
    return e;
  const r = s && s.encode || ba, o = s && s.serialize;
  let i;
  if (o ? i = o(t, s) : i = l.isURLSearchParams(t) ? t.toString() : new Ke(t, s).toString(r), i) {
    const n = e.indexOf("#");
    n !== -1 && (e = e.slice(0, n)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class ga {
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
const Ye = ga, Pt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, va = typeof URLSearchParams < "u" ? URLSearchParams : Ke, Sa = typeof FormData < "u" ? FormData : null, wa = typeof Blob < "u" ? Blob : null, $a = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), ka = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), K = {
  isBrowser: !0,
  classes: {
    URLSearchParams: va,
    FormData: Sa,
    Blob: wa
  },
  isStandardBrowserEnv: $a,
  isStandardBrowserWebWorkerEnv: ka,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function Ta(e, t) {
  return ye(e, new K.classes.URLSearchParams(), Object.assign({
    visitor: function(s, r, o, i) {
      return K.isNode && l.isBuffer(s) ? (this.append(r, s.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Oa(e) {
  return l.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Ca(e) {
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
    return n = !n && l.isArray(o) ? o.length : n, d ? (l.hasOwnProp(o, n) ? o[n] = [o[n], r] : o[n] = r, !a) : ((!o[n] || !l.isObject(o[n])) && (o[n] = []), t(s, r, o[n], i) && l.isArray(o[n]) && (o[n] = Ca(o[n])), !a);
  }
  if (l.isFormData(e) && l.isFunction(e.entries)) {
    const s = {};
    return l.forEachEntry(e, (r, o) => {
      t(Oa(r), o, s, 0);
    }), s;
  }
  return null;
}
const Pa = {
  "Content-Type": void 0
};
function Ra(e, t, s) {
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
        return Ta(t, this.formSerializer).toString();
      if ((a = l.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const d = this.env && this.env.FormData;
        return ye(
          a ? { "files[]": t } : t,
          d && new d(),
          this.formSerializer
        );
      }
    }
    return i || o ? (s.setContentType("application/json", !1), Ra(t)) : t;
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
  be.headers[t] = l.merge(Pa);
});
const De = be, Va = l.toObjectSet([
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
]), Fa = (e) => {
  const t = {};
  let s, r, o;
  return e && e.split(`
`).forEach(function(n) {
    o = n.indexOf(":"), s = n.substring(0, o).trim().toLowerCase(), r = n.substring(o + 1).trim(), !(!s || t[s] && Va[s]) && (s === "set-cookie" ? t[s] ? t[s].push(r) : t[s] = [r] : t[s] = t[s] ? t[s] + ", " + r : r);
  }), t;
}, et = Symbol("internals");
function te(e) {
  return e && String(e).trim().toLowerCase();
}
function ce(e) {
  return e === !1 || e == null ? e : l.isArray(e) ? e.map(ce) : String(e);
}
function Ea(e) {
  const t = /* @__PURE__ */ Object.create(null), s = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = s.exec(e); )
    t[r[1]] = r[2];
  return t;
}
function La(e) {
  return /^[-_a-zA-Z]+$/.test(e.trim());
}
function we(e, t, s, r, o) {
  if (l.isFunction(r))
    return r.call(this, t, s);
  if (o && (t = s), !!l.isString(t)) {
    if (l.isString(r))
      return t.indexOf(r) !== -1;
    if (l.isRegExp(r))
      return r.test(t);
  }
}
function Ma(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, s, r) => s.toUpperCase() + r);
}
function ja(e, t) {
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
    return l.isPlainObject(t) || t instanceof this.constructor ? n(t, s) : l.isString(t) && (t = t.trim()) && !La(t) ? n(Fa(t), s) : t != null && i(s, t, r), this;
  }
  get(t, s) {
    if (t = te(t), t) {
      const r = l.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!s)
          return o;
        if (s === !0)
          return Ea(o);
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
      return !!(r && this[r] !== void 0 && (!s || we(this, this[r], r, s)));
    }
    return !1;
  }
  delete(t, s) {
    const r = this;
    let o = !1;
    function i(n) {
      if (n = te(n), n) {
        const a = l.findKey(r, n);
        a && (!s || we(r, r[a], a, s)) && (delete r[a], o = !0);
      }
    }
    return l.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const s = Object.keys(this);
    let r = s.length, o = !1;
    for (; r--; ) {
      const i = s[r];
      (!t || we(this, this[i], i, t, !0)) && (delete this[i], o = !0);
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
      const a = t ? Ma(i) : String(i).trim();
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
    const r = (this[et] = this[et] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(n) {
      const a = te(n);
      r[a] || (ja(o, n), r[a] = !0);
    }
    return l.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
ge.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
l.freezeMethods(ge.prototype);
l.freezeMethods(ge);
const B = ge;
function $e(e, t) {
  const s = this || De, r = t || s, o = B.from(r.headers);
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
function Aa(e, t, s) {
  const r = s.config.validateStatus;
  !s.status || !r || r(s.status) ? e(s) : t(new k(
    "Request failed with status code " + s.status,
    [k.ERR_BAD_REQUEST, k.ERR_BAD_RESPONSE][Math.floor(s.status / 100) - 4],
    s.config,
    s.request,
    s
  ));
}
const Na = K.isStandardBrowserEnv ? (
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
function Ka(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Da(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Ft(e, t) {
  return e && !Ka(t) ? Da(e, t) : t;
}
const Ba = K.isStandardBrowserEnv ? (
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
function Ia(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Ua(e, t) {
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
function tt(e, t) {
  let s = 0;
  const r = Ua(50, 250);
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
const xa = typeof XMLHttpRequest < "u", za = xa && function(e) {
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
      Aa(function(N) {
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
      const O = (e.withCredentials || Ba(m)) && e.xsrfCookieName && Na.read(e.xsrfCookieName);
      O && i.set(e.xsrfHeaderName, O);
    }
    o === void 0 && i.setContentType(null), "setRequestHeader" in c && l.forEach(i.toJSON(), function(f, w) {
      c.setRequestHeader(w, f);
    }), l.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), n && n !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", tt(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", tt(e.onUploadProgress)), (e.cancelToken || e.signal) && (a = (O) => {
      c && (r(!O || O.type ? new ie(null, e, c) : O), c.abort(), c = null);
    }, e.cancelToken && e.cancelToken.subscribe(a), e.signal && (e.signal.aborted ? a() : e.signal.addEventListener("abort", a)));
    const F = Ia(m);
    if (F && K.protocols.indexOf(F) === -1) {
      r(new k("Unsupported protocol " + F + ":", k.ERR_BAD_REQUEST, e));
      return;
    }
    c.send(o || null);
  });
}, de = {
  http: fa,
  xhr: za
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
const Wa = {
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
function ke(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ie(null, e);
}
function st(e) {
  return ke(e), e.headers = B.from(e.headers), e.data = $e.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Wa.getAdapter(e.adapter || De.adapter)(e).then(function(r) {
    return ke(e), r.data = $e.call(
      e,
      e.transformResponse,
      r
    ), r.headers = B.from(r.headers), r;
  }, function(r) {
    return Vt(r) || (ke(e), r && r.response && (r.response.data = $e.call(
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
    headers: (c, m) => o(rt(c), rt(m), !0)
  };
  return l.forEach(Object.keys(e).concat(Object.keys(t)), function(m) {
    const b = d[m] || o, F = b(e[m], t[m], m);
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
function qa(e, t, s) {
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
  assertOptions: qa,
  validators: Be
}, x = Pe.validators;
class me {
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
      const f = [st.bind(this), void 0];
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
  me.prototype[t] = function(s, r) {
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
  me.prototype[t] = s(), me.prototype[t + "Form"] = s(!0);
});
const pe = me;
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
      token: new Ie(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
const Ha = Ie;
function Qa(e) {
  return function(s) {
    return e.apply(null, s);
  };
}
function Ga(e) {
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
const Ja = Re;
function Lt(e) {
  const t = new pe(e), s = ht(pe.prototype.request, t);
  return l.extend(s, pe.prototype, t, { allOwnKeys: !0 }), l.extend(s, t, null, { allOwnKeys: !0 }), s.create = function(o) {
    return Lt(Z(e, o));
  }, s;
}
const E = Lt(De);
E.Axios = pe;
E.CanceledError = ie;
E.CancelToken = Ha;
E.isCancel = Vt;
E.VERSION = Et;
E.toFormData = ye;
E.AxiosError = k;
E.Cancel = E.CanceledError;
E.all = function(t) {
  return Promise.all(t);
};
E.spread = Qa;
E.isAxiosError = Ga;
E.mergeConfig = Z;
E.AxiosHeaders = B;
E.formToJSON = (e) => Rt(l.isHTMLForm(e) ? new FormData(e) : e);
E.HttpStatusCode = Ja;
E.default = E;
const Mt = E;
function Xa(e) {
  return e == null;
}
var Za = Xa, Ya = function(t) {
  return typeof t == "object" && t !== null;
}, el = -18, tl = 5, sl = 9, rl = -72, ol = -74, nl = -68, il = -69, al = -7, ll = -127, ul = 1, cl = -107, dl = 10, pl = 2, ml = -42, hl = -2, fl = -8, _l = -128, yl = 3, bl = -4, gl = -110, vl = -109, Sl = -3, wl = -102, $l = -1, kl = -196, Tl = 0, Ol = 8, Cl = -75, Pl = {
  AssocType: el,
  BooleanType: tl,
  ClassType: sl,
  DapiNodeType: rl,
  DapiSessionType: ol,
  DapiStreamType: nl,
  DapiVersionType: il,
  DateType: al,
  DynamicType: ll,
  ErrorType: ul,
  FileType: cl,
  FrameType: dl,
  IntegerType: pl,
  JavaObjectType: ml,
  ListType: hl,
  LongType: fl,
  ObjectType: _l,
  ObjRefType: yl,
  RealType: bl,
  RecArrayType: gl,
  RecordType: vl,
  ScriptType: Sl,
  SocketType: wl,
  StringType: $l,
  UAPIType: kl,
  UndefinedType: Tl,
  VoidType: Ol,
  WAPIWorkType: Cl
}, jt = {
  createFormData() {
    return new FormData();
  }
};
function Rl(e) {
  const t = Mt.create({
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
function Vl(e) {
  const t = Rl(e), s = e.username, r = e.password, o = e.otcsticket;
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
class Fl extends H {
  auth() {
    return this.session.get("/api/v1/auth/");
  }
}
var El = 834, Ll = 1298, Ml = 30309, jl = 907, Al = 1, Nl = 480, Kl = 483, Dl = 481, Bl = 31711, Il = 290, Ul = 291, xl = 274, zl = 356, Wl = 357, ql = 530, Hl = 131, Ql = 132, Gl = 207, Jl = 209, Xl = 199, Zl = 196, Yl = 194, eu = 298, tu = 902, su = 345, ru = 348, ou = 346, nu = 3030338, iu = 3030339, au = 3030329, lu = 3030002, uu = 3030333, cu = 3030004, du = 3030335, pu = 3030334, mu = 3030205, hu = 136, fu = 557, _u = 3030372, yu = 146, bu = 844, gu = 270, vu = 276, Su = 277, wu = 215, $u = 602, ku = 144, Tu = 1297, Ou = 283, Cu = 32912, Pu = 32916, Ru = 31707, Vu = 32914, Fu = 31709, Eu = 32917, Lu = 32915, Mu = 32913, ju = 31602, Au = 31601, Nu = 31603, Ku = 335, Du = 900, Bu = 749, Iu = 2504, Uu = 904, xu = 905, zu = 903, Wu = 1299, qu = 906, Hu = 0, Qu = 223, Gu = 2, Ju = 3030371, Xu = 482, Zu = 833, Yu = 282, ec = 226, tc = 293, sc = 731, rc = 368, oc = 147, nc = 281, ic = 924, ac = 541, lc = 542, uc = 361, cc = 259, dc = 272, pc = 123475, mc = 123476, hc = 123469, fc = 123470, _c = 430, yc = 432, bc = 422, gc = 732, vc = 3030331, Sc = 31710, wc = 410, $c = 414, kc = 919, Tc = 920, Oc = 273, Cc = 1281, Pc = 1282, Rc = 372, Vc = 374, Fc = 373, Ec = 870, Lc = 532, Mc = 3030756, jc = 208, Ac = 257, Nc = 371, Kc = 370, Dc = 3030203, Bc = 3030003, Ic = 3030204, Uc = 398, xc = 3030343, zc = 424, Wc = 412, qc = 419, Hc = 411, Qc = 415, Gc = 418, Jc = 416, Xc = 417, Zc = 218, Yc = 271, ed = 195, td = 202, sd = 543, rd = 201, od = 384, nd = 380, id = 387, ad = 829, ld = 31712, ud = 31713, cd = 441, dd = 296, pd = 431, md = 327, hd = 425, fd = 428, _d = 32918, yd = 32919, bd = 138, gd = 381, vd = 134, Sd = 299, wd = 139, $d = 555, kd = 554, Td = 552, Od = 553, Cd = 556, Pd = 551, Rd = 426, Vd = 427, Fd = 558, Ed = 559, Ld = 2505, Md = 835, jd = 32901, Ad = 258, Nd = 369, Kd = 269, Dd = 278, Bd = 383, Id = 292, Ud = 31678, xd = 49547, zd = 275, Wd = 1280, qd = 1283, Hd = 797, Qd = 796, Gd = 795, Jd = 3030202, Xd = 3030201, Zd = 3030001, Yd = 3030130, ep = 280, tp = 421, sp = 231, rp = 206, op = 205, np = 204, ip = 210, ap = 212, lp = 230, up = 268, cp = 145, dp = 130, pp = 423, mp = 531, hp = 526, fp = 527, _p = 3030330, yp = 140, bp = 899, gp = 123461, vp = 133, Sp = 198, wp = 347, $p = 987352, kp = 405, Tp = 375, Op = 143, Cp = 180, Pp = 336, Rp = 162, Vp = 901, Fp = 141, Ep = 403, Lp = 397, Mp = 908, jp = 413, Ap = 550, Np = 137, Kp = 211, Dp = 148, Bp = 149, Ip = 484, Up = 1296, xp = 525, zp = 142, Wp = 161, qp = 529, Hp = 236, Qp = 235, Gp = 234, Jp = 233, Xp = 30303, Zp = 128, Yp = 190, em = 5573, tm = 5574, sm = 528, rm = 154, om = 286, nm = 285, Te = {
  "2WayTee": 294,
  Accession: El,
  ActiveFolder: Ll,
  Activeview: Ml,
  ActivityManager: jl,
  Alias: Al,
  Appearance: Nl,
  AppearanceFolder: Kl,
  AppearancesVolume: Dl,
  ArchiveFolder: Bl,
  BackupManager: Il,
  BackupProcess: Ul,
  BestBets: xl,
  Blog: zl,
  BlogEntry: Wl,
  BoxFolder: ql,
  Category: Hl,
  CategoryFolder: Ql,
  Channel: Gl,
  ChannelVol: Jl,
  Classification: Xl,
  "Classification Shortcut": 197,
  ClassificationTree: Zl,
  ClassifiedItems: Yl,
  Collection: eu,
  Column: tu,
  Comments: su,
  CommentsReply: ru,
  CommentsVol: ou,
  CommExpertContainer: nu,
  CommExpertGroup: iu,
  CommStore: au,
  CommTemplate: lu,
  CommTemplateFolder: uu,
  CommTemplateVol: cu,
  CommURLStore: du,
  CommWorkspace: pu,
  CommXSLVolume: mu,
  CompoundDoc: hu,
  CompoundEMail: fu,
  ContentModuleFolder: _u,
  "csapps CSApplicationManifest": 32658,
  "csapps CSApplicationsVolume": 32657,
  CustomView: yu,
  CustomViewTemplate: bu,
  DataFlowManager: gu,
  DataSourceFolder: vu,
  DirWalker: Su,
  Discussion: wu,
  DispositionGroup: $u,
  Document: ku,
  DocumentLLNode: Tu,
  DocumentServer: Ou,
  Dossier: Cu,
  DossierCabinet: Pu,
  DossierCabinetArchive: Ru,
  DossierTemplate: Vu,
  DossierTemplateFolder: Fu,
  DossierTemplatesVolume: Eu,
  DossierTemplateVolume: Lu,
  DossierVolume: Mu,
  DPSBinding: ju,
  DPSFolder: Au,
  DPSVolume: Nu,
  DTDLLNode: Ku,
  DynamicView: Du,
  EMail: Bu,
  EmailConversationItems: Iu,
  "Enterprise Archive Document": 753,
  Facet: Uu,
  FacetFolder: xu,
  FacetTree: zu,
  FailedFolder: Wu,
  FixedSystemColumn: qu,
  Folder: Hu,
  Form: Qu,
  Generation: Gu,
  GENERICCONTENTMODULE: Ju,
  GlobalAppearance: Xu,
  HoldContainer: Zu,
  HTMLConversion: Yu,
  HTMLFormView: ec,
  Importer: tc,
  Inbox: sc,
  IndexEngine: rc,
  IndexTracer: oc,
  IndexUpdate: nc,
  InternalOTDS: ic,
  ItemTemplateVol: ac,
  ItemTemplateVolFolder: lc,
  JournalVolume: uc,
  LibraryExtractor: cc,
  LibraryObj: dc,
  "LLNode Email Folder": 751,
  LLNodeFAQ: pc,
  LLNodeFAQEntry: mc,
  LLNodeForum: hc,
  LLNodeForumEntry: fc,
  LLNodeURQuestion: _c,
  LLNodeURReply: yc,
  Locators: bc,
  Mailbox: gc,
  MailStore: vc,
  ManagedSpace: Sc,
  MediaType: wc,
  MediaTypesContainer: $c,
  MemcachedFolder: kc,
  MemcachedProcess: Tc,
  Merge: Oc,
  MicroPost: Cc,
  MicroPostVolume: Pc,
  MultiVolClassification: Rc,
  MultiVolClassificationProxy: Vc,
  MultiVolClassificationTree: Fc,
  MyReservedItems: Ec,
  MyWorkbenches: Lc,
  NAVMENUVOL: Mc,
  News: jc,
  OTCIndexObj: Ac,
  Partition: Nc,
  PartitionMap: Kc,
  PersonalComm: Dc,
  PersonalCommSystemVolume: Bc,
  PersonalCommVol: Ic,
  PersonalStagingFolder: Uc,
  PersonalWebpage: xc,
  PhysicalItemBox: zc,
  PhysicalItemContainer: Wc,
  PhysicalItemCopy: qc,
  PhysicalItem_non_Container: Hc,
  PhysObjAdmin: Qc,
  PhysObjBatchLabels: Gc,
  PhysObjCirculation: Jc,
  PhysObjReports: Xc,
  Poll: Zc,
  Process: Yc,
  Profile: ed,
  Project: td,
  ProjectTemplate: sd,
  ProjectVol: rd,
  Prospector: od,
  ProspectorQueries: nd,
  ProspectorSnapshot: id,
  Provenance: ad,
  Proxy: 260,
  PublishingFolder: ld,
  PublishingFolderVolume: ud,
  QAFolder: cd,
  QueryFile: dd,
  QuestionVolume: pd,
  RecentItems: md,
  RecordType: hd,
  RecordTypesContainer: fd,
  RedForm: _d,
  RedFormVolume: yd,
  Release: bd,
  RemoteLLDataSource: gd,
  Reply: vd,
  Report: Sd,
  Revision: wd,
  RIMSDisposition: $d,
  RIMSDispositionsContainer: kd,
  RIMSHoldMaintenance: Td,
  RIMSRsiContainer: Od,
  RMAdministration: Cd,
  RMClassification: Pd,
  RMFolder: Rd,
  RMPart: Vd,
  RMReportsContainer: Fd,
  RMThesaurus: Ed,
  ScanConfigurationVolume: Ld,
  ScheduledHoldCriteria: Md,
  ScriptNode: jd,
  SearchBroker: Ad,
  SearchEngine: Nd,
  SearchManager: Kd,
  SearchReport: Dd,
  SearchResultsTemplate: Bd,
  SearchTemplate: Id,
  Simplate: Ud,
  SkyPodLLVolume: xd,
  SliceFolder: zd,
  SocialObject: Wd,
  SocialObjectVolume: qd,
  SPCJOBDESCR: Hd,
  SPCJOBDESCRFOLDER: Qd,
  SPCVOLUME: Gd,
  spdcommittee: Jd,
  spdcommitteevol: Xd,
  spdcommitteevolume: Zd,
  spdemail: Yd,
  Spider: ep,
  StorageManagement: tp,
  SubmitVersionNode: sp,
  Task: rp,
  TaskGroup: op,
  TaskList: np,
  TaskListVol: ip,
  TaskMilestone: ap,
  Template: lp,
  TemplateFolder: up,
  TextDocument: cp,
  Topic: dp,
  Transfers: pp,
  TransportBox: mp,
  TransportItem: hp,
  TransportItemPart: fp,
  UrgentRequests: _p,
  URL: yp,
  VirtualFolder: bp,
  VolBlog: gp,
  VolCategories: vp,
  VolClassification: Sp,
  VolComments: wp,
  VolDAP: $p,
  VolDeletedItems: kp,
  VolDirectory: Tp,
  VolDiscussion: Op,
  VolDomainWorkspace: Cp,
  VolDTD: Pp,
  VolEditWorkflow: Rp,
  VolFacets: Vp,
  VolLibrary: Fp,
  VolOrphan: Ep,
  VolPersonalStaging: Lp,
  VolPerspectives: Mp,
  VolPhysObj: jp,
  VolRecMan: Ap,
  VolRelease: Np,
  VolReports: Kp,
  VolSystem: Dp,
  VolTracer: Bp,
  VolumeFolder: Ip,
  VolumeLLVolume: Up,
  VolWarehouse: xp,
  VolWorkbin: zp,
  VolWorkflow: Wp,
  WarehouseFolder: qp,
  WebFormConnectionVolume: Hp,
  WebFormDatabaseConnection: Qp,
  WebFormLookup: Gp,
  WebFormLookupVolume: Jp,
  WebReports: Xp,
  WFMapLLNode: Zp,
  WFStatusNode: Yp,
  WIKI: em,
  WIKIPAGE: tm,
  Workbench: sm,
  WorkflowAttachments: rm,
  XMLActivatorCon: om,
  XMLActivatorProd: nm
};
class im extends H {
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
        type: Te.Document,
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
class am extends H {
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
class lm extends H {
  scriptNode(t, s = {}) {
    return this.session.get(`api/v1/rhcore/${t}`, {
      params: s
    });
  }
}
class um extends H {
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
class cm extends H {
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
class dm extends H {
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
class pm extends H {
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
class mm extends Error {
  code;
  data;
  constructor(t = nt.INTERNALERROR.message, s = null, r = nt.INTERNALERROR.code) {
    if (Ya(t)) {
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
class hm {
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
      throw new mm(s.message, s.data, s.code);
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
class fm {
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
    this.axios = Vl(t);
  }
  get nodes() {
    return this._nodes == null && (this._nodes = new im(this)), this._nodes;
  }
  get auth() {
    return this._auth == null && (this._auth = new Fl(this)), this._auth;
  }
  get workflow() {
    return this._workflow == null && (this._workflow = new am(this)), this._workflow;
  }
  get rhcore() {
    return this._rhcore == null && (this._rhcore = new lm(this)), this._rhcore;
  }
  get members() {
    return this._members == null && (this._members = new cm(this)), this._members;
  }
  get search() {
    return this._search == null && (this._search = new um(this)), this._search;
  }
  get webreports() {
    return this._webreports == null && (this._webreports = new pm(this)), this._webreports;
  }
  get versions() {
    return this._versions == null && (this._versions = new dm(this)), this._versions;
  }
  get dataTypesEnum() {
    return Pl;
  }
  rpcClient(t = "/api/v1/rh/rpc/rhnode/") {
    return new hm(this, t);
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
      o && o.name && o.file ? s.append(r, o.file, o.name) : Array.isArray(o) || this._isObject(o) || this._isBoolean(o) ? s.append(r, JSON.stringify(o)) : Za(o) || s.append(r, o);
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
const _m = /* @__PURE__ */ Object.assign({
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
  "./components/KPagination.vue": Io,
  "./components/KPagination2.vue": Zo,
  "./components/KRadioGroup.vue": on,
  "./components/KScratch.vue": un,
  "./components/KSelect.vue": fn,
  "./components/KSnackbar.vue": Tn,
  "./components/KSortHeader.vue": Fn,
  "./components/KSpacer.vue": An,
  "./components/KSpinner.vue": Un,
  "./components/KSwitch.vue": Hn,
  "./components/KTable.vue": Xn,
  "./components/KTextArea.vue": si,
  "./components/KTextField.vue": ai,
  "./components/KUserGIF.vue": pi,
  "./components/KUserLink.vue": gi,
  "./components/KUserPicker.vue": ki,
  "./components/Tabs/KTabItem.vue": Ri,
  "./components/Tabs/KTabs.vue": Ni
}), Tm = {
  install(e, t) {
    Object.entries(_m).forEach(
      ([o, i]) => {
        const n = o?.split("/")?.pop()?.replace(/\.\w+$/, "");
        e.component(n, i.default);
      }
    );
    const s = new fm(t), r = {
      img: t.img,
      baseUrl: t.baseUrl,
      jsLongDateFormat: t.datelong,
      jsShortDateFormat: t.dateshort
    };
    e.provide(G, s), e.provide(fe, r);
  }
};
export {
  fe as configKey,
  As as confirmDialogKey,
  Tm as default,
  I as injectStrict,
  G as sessionKey,
  js as snackbarKey
};
