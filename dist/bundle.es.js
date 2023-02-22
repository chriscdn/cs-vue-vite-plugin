import { defineComponent as _, h as At, openBlock as u, createElementBlock as p, renderSlot as R, inject as Re, Fragment as V, createElementVNode as f, resolveComponent as v, createBlock as P, Transition as re, withCtx as S, normalizeStyle as G, createVNode as C, createTextVNode as L, createCommentVNode as $, resolveDirective as lt, withDirectives as z, normalizeClass as M, withKeys as te, withModifiers as x, vModelText as Ve, renderList as N, toDisplayString as k, mergeProps as ut, vModelDynamic as Kt, Teleport as Dt, setBlockTracking as Ue, TransitionGroup as Fe, vModelRadio as Bt, vModelSelect as It, useCssVars as ct } from "vue";
import { directive as dt } from "vue3-click-away";
import g from "lodash.get";
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
}, j = (e, t = "px") => {
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
      const e = {}, t = j(this.height), s = j(this.minHeight), r = j(this.minWidth), o = j(this.maxHeight), i = j(this.maxWidth), n = j(this.width);
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
      return At(
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
    return { config: Re("config", {}) };
  }
}), ds = /* @__PURE__ */ f("hr", null, null, -1), ps = ["href"];
function ms(e, t, s, r, o, i) {
  return u(), p(V, null, [
    ds,
    f("a", {
      href: `${e.config.baseURL}?func=admin.index`
    }, "Admin Home", 8, ps)
  ], 64);
}
const fs = /* @__PURE__ */ y(cs, [["render", ms]]), hs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fs
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
  const n = v("KIcon");
  return u(), P(re, { name: "fade" }, {
    default: S(() => [
      e.visibleLocal ? (u(), p("div", {
        key: 0,
        class: "flex items-center rounded text-main-bright p-2",
        style: G([e.colorableBackgroundStyle])
      }, [
        f("div", bs, [
          R(e.$slots, "default")
        ]),
        f("button", {
          class: "flex-grow-0",
          onClick: t[0] || (t[0] = (...a) => e.dismiss && e.dismiss(...a))
        }, [
          C(n, { class: "text-main-bright" }, {
            default: S(() => [
              L(" icon-x ")
            ]),
            _: 1
          })
        ])
      ], 4)) : $("", !0)
    ]),
    _: 3
  });
}
const vs = /* @__PURE__ */ y(ys, [["render", gs]]), Ss = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vs
}, Symbol.toStringTag, { value: "Module" }));
const $s = {}, ws = { class: "k-app" };
function Ts(e, t) {
  const s = v("KSnackbar"), r = v("KConfirm");
  return u(), p("div", ws, [
    C(r, null, {
      default: S(() => [
        C(s, null, {
          default: S(() => [
            R(e.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    })
  ]);
}
const ks = /* @__PURE__ */ y($s, [["render", Ts]]), Os = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ks
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
        e ? this.returnObject ? this.$emit("update:modelValue", e) : this.$emit("update:modelValue", g(e, this.itemValue, e)) : this.$emit("update:modelValue", null);
      },
      get() {
        return this.isObject(this.modelValue) ? this.modelValue : this.items.find(
          (e) => g(e, this.itemValue, e) == this.modelValue
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
        this.isObject(this.localValue) ? g(this.localValue, this.itemText, "") : this.localValue
      )));
    },
    value: {
      handler(e) {
        this.inputText = g(this.localValue, this.itemText, e);
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
      this.combobox ? t && (this.localValue = t) : (this.localValue = t, this.inputText = g(
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
    f("div", Ps, [
      z(f("input", {
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = (a) => e.inputText = a),
        class: M(["k-input", { invalidSelection: !e.isValidSelection }]),
        type: "search",
        autocomplete: "off",
        placeholder: e.placeholderText,
        readonly: !e.editable,
        onSearch: t[1] || (t[1] = (...a) => e.clearInput && e.clearInput(...a)),
        onKeydown: [
          t[2] || (t[2] = te(x((a) => e.currentFocus = Math.max(-1, e.currentFocus - 1), ["prevent"]), ["arrow-up"])),
          t[3] || (t[3] = te(x((a) => e.currentFocus = Math.min(e.items.length - 1, e.currentFocus + 1), ["prevent"]), ["arrow-down"])),
          t[4] || (t[4] = te(x((a) => e.select(e.currentFocus), ["prevent"]), ["enter"])),
          t[6] || (t[6] = te((...a) => e.setBlur && e.setBlur(...a), ["tab"]))
        ],
        onFocus: t[5] || (t[5] = (...a) => e.setFocus && e.setFocus(...a)),
        onKeyup: t[7] || (t[7] = (...a) => e.keyup && e.keyup(...a))
      }, null, 42, Rs), [
        [Ve, e.inputText]
      ]),
      e.focus && e.items.length && e.inputText ? (u(), p("div", Vs, [
        (u(!0), p(V, null, N(e.itemsFiltered, (a, d) => (u(), p("div", {
          key: d,
          class: M(["k-autocomplete-item", { "k-autocomplete-active": e.currentFocus == d }]),
          onClick: (c) => e.select(d)
        }, [
          R(e.$slots, "item", { item: a }, () => [
            L(k(a), 1)
          ])
        ], 10, Fs))), 128))
      ])) : $("", !0)
    ])
  ], 4)), [
    [n, e.setBlur]
  ]);
}
const Ls = /* @__PURE__ */ y(Cs, [["render", Es]]), js = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ls
}, Symbol.toStringTag, { value: "Module" })), ze = new Ee();
class Ms {
  constructor() {
    this.nodes = {};
  }
  // registerUsers(items) {
  //   items.forEach((user) => (this.users[user.value] = user))
  // }
  async lookup(t, s) {
    try {
      if (await ze.acquire(s), this.nodes[s] == null) {
        const r = await t.get(`/api/v1/rh/nodes/${s}/lite/`);
        this.nodes[s] = r.data;
      }
      return this.nodes[s];
    } finally {
      ze.release(s);
    }
  }
}
const Ns = new Ms(), As = _({
  setup() {
    return { session: Re("session", {}) };
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
        e && (this.nodeRecLocal = await Ns.lookup(this.session, e));
      },
      immediate: !0
    }
  }
}), Ks = { key: 0 }, Ds = ["src"], Bs = ["href"], Is = ["innerHTML"];
function Us(e, t, s, r, o, i) {
  const n = v("KFunctionMenu");
  return e.nodeRecResolved ? (u(), p("span", Ks, [
    e.image ? (u(), p("img", {
      key: 0,
      src: e.nodeRecResolved.gif
    }, null, 8, Ds)) : $("", !0),
    L(" "),
    f("a", {
      href: e.nodeRecResolved.url
    }, k(e.nodeRecResolved.name), 9, Bs),
    e.clickable ? (u(), P(n, {
      key: 1,
      dataid: e.nodeRecResolved.dataid
    }, null, 8, ["dataid"])) : $("", !0),
    f("span", {
      innerHTML: e.nodeRecResolved.modifiedImageCallback
    }, null, 8, Is)
  ])) : $("", !0);
}
const xs = /* @__PURE__ */ y(As, [["render", Us]]), zs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
  const s = Re(e, t);
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
  const n = v("KCardTitle"), a = v("KCardText"), d = v("KSpacer"), c = v("KButton"), m = v("KCardActions"), b = v("KCard"), F = v("KDialog");
  return u(), p(V, null, [
    R(e.$slots, "default"),
    C(F, {
      modelValue: e.dialog,
      "onUpdate:modelValue": t[2] || (t[2] = (O) => e.dialog = O),
      "max-width": "30vw",
      "min-width": "20vw"
    }, {
      default: S(() => [
        C(b, null, {
          default: S(() => [
            e.title ? (u(), P(n, { key: 0 }, {
              default: S(() => [
                L(k(e.title), 1)
              ]),
              _: 1
            })) : $("", !0),
            e.message ? (u(), P(a, { key: 1 }, {
              default: S(() => [
                L(k(e.message), 1)
              ]),
              _: 1
            })) : $("", !0),
            C(m, null, {
              default: S(() => [
                C(d),
                e.noLabel ? (u(), P(c, {
                  key: 0,
                  small: "",
                  onClick: t[0] || (t[0] = (O) => e.dismiss(!1))
                }, {
                  default: S(() => [
                    L(k(e.noLabel), 1)
                  ]),
                  _: 1
                })) : $("", !0),
                e.yesLabel ? (u(), P(c, {
                  key: 1,
                  small: "",
                  onClick: t[1] || (t[1] = (O) => e.dismiss(!0))
                }, {
                  default: S(() => [
                    L(k(e.yesLabel), 1)
                  ]),
                  _: 1
                })) : $("", !0)
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
      return t ? this.time ? xe(t, "yyyy-MM-dd'T'HH:mm:ss") : xe(t, "yyyy-MM-dd") : null;
    }
  }
});
const rr = { class: "k-date-time-picker" }, or = ["type", "readonly"];
function nr(e, t, s, r, o, i) {
  const n = v("KButton");
  return u(), p("div", rr, [
    z(f("input", {
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
        default: S(() => [
          L(" Now ")
        ]),
        _: 1
      }, 8, ["onClick"]),
      C(n, {
        small: "",
        onClick: t[1] || (t[1] = (a) => e.$emit("update:modelValue", null))
      }, {
        default: S(() => [
          L(" Clear ")
        ]),
        _: 1
      })
    ], 64)) : $("", !0)
  ]);
}
const ir = /* @__PURE__ */ y(sr, [["render", nr]]), ar = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ir
}, Symbol.toStringTag, { value: "Module" })), lr = _({
  directives: {
    ClickAway: dt
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
function ur(e, t, s, r, o, i) {
  const n = lt("click-away");
  return u(), p(V, null, [
    R(e.$slots, "activator", { on: e.on }),
    e.mounted ? (u(), P(Dt, {
      key: 0,
      to: ".k-app"
    }, [
      C(re, { name: "fade" }, {
        default: S(() => [
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
          ], 4)) : $("", !0)
        ]),
        _: 3
      })
    ])) : $("", !0)
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
const fr = /* @__PURE__ */ y(pr, [["render", mr]]), hr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
}), _r = {
  mixins: [J]
};
const yr = {
  key: 0,
  class: "k-form-field-label"
};
function br(e, t, s, r, o, i) {
  return u(), p("div", null, [
    e.label ? (u(), p("div", yr, k(e.label), 1)) : $("", !0),
    R(e.$slots, "default"),
    (u(!0), p(V, null, N(e.successMessages, (n, a) => (u(), p("div", {
      key: a,
      class: "k-formfield--success"
    }, k(n), 1))), 128)),
    (u(!0), p(V, null, N(e.errorMessages, (n, a) => (u(), p("div", {
      key: a,
      class: "k-formfield--error"
    }, k(n), 1))), 128))
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
}), $r = { key: 0 }, wr = ["id"], Tr = ["src"], kr = ["id", "src"];
function Or(e, t, s, r, o, i) {
  return e.dataid ? (u(), p("span", $r, [
    f("a", {
      id: e.aid,
      href: "#",
      class: "functionMenuHotspot",
      onClick: t[2] || (t[2] = x((...n) => e.onclick && e.onclick(...n), ["prevent"]))
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
      }, null, 40, kr))
    ], 8, wr),
    t[3] || (Ue(-1), t[3] = f("div", {
      id: e.zid,
      ref: "functionMenuDiv",
      class: "functionMenuDiv"
    }, null, 8, ["id"]), Ue(1), t[3])
  ])) : $("", !0);
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
const Mr = { class: "k-multi-widget" }, Nr = { class: "k-multi-buttons" }, Ar = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ f("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z" })
], -1), Kr = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ f("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" })
], -1);
function Dr(e, t, s, r, o, i) {
  const n = v("KButton"), a = v("KCard");
  return u(), P(a, { class: "k-multi" }, {
    default: S(() => [
      C(Fe, {
        name: "fade",
        tag: "div"
      }, {
        default: S(() => [
          (u(!0), p(V, null, N(e.valueLocal, (d, c) => (u(), p("div", {
            key: `k-multi-${d}`,
            class: "k-multi-item"
          }, [
            f("div", Mr, [
              R(e.$slots, "default", {
                index: c,
                value: d,
                update: (m) => e.update(c, m)
              })
            ]),
            f("div", Nr, [
              e.canRemove ? (u(), P(n, {
                key: 0,
                text: "",
                onClick: (m) => e.remove(c)
              }, {
                default: S(() => [
                  Ar
                ]),
                _: 2
              }, 1032, ["onClick"])) : $("", !0),
              e.canAdd ? (u(), P(n, {
                key: 1,
                text: "",
                onClick: (m) => e.add(c)
              }, {
                default: S(() => [
                  Kr
                ]),
                _: 2
              }, 1032, ["onClick"])) : $("", !0)
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
const xr = { class: "k-multi-widget" }, zr = { class: "k-multi-buttons" }, Wr = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ f("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z" })
], -1);
function qr(e, t, s, r, o, i) {
  const n = v("KButton"), a = v("KCard");
  return u(), P(a, { class: "k-multi" }, {
    default: S(() => [
      C(Fe, {
        name: "fade",
        tag: "div"
      }, {
        default: S(() => [
          (u(!0), p(V, null, N(e.valueLocal, (d, c) => (u(), p("div", {
            key: `k-multi-${d}`,
            class: "k-multi-item"
          }, [
            f("div", xr, [
              R(e.$slots, "readonly", {
                index: c,
                value: d
              }, () => [
                L(k(d), 1)
              ])
            ]),
            f("div", zr, [
              C(n, {
                text: "",
                onClick: (m) => e.remove(c)
              }, {
                default: S(() => [
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
      }) : $("", !0)
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
  const n = v("KUserLink"), a = v("KUserPicker"), d = v("KMulti2");
  return u(), P(d, {
    modelValue: e.userIdsLocal,
    "onUpdate:modelValue": t[0] || (t[0] = (c) => e.userIdsLocal = c)
  }, {
    readonly: S(({ value: c }) => [
      C(n, {
        user: c,
        gif: ""
      }, null, 8, ["user"])
    ]),
    add: S(({ add: c }) => [
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
}, Symbol.toStringTag, { value: "Module" })), We = new Ee();
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
      if (await We.acquire(s), !this.nodes[s]) {
        const r = await t.nodes.ancestors(s);
        this.nodes[s] = g(r, "data.ancestors", []);
      }
      return this.nodes[s];
    } finally {
      We.release(s);
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
    (u(!0), p(V, null, N(e.breadcrumb, (n, a) => (u(), p(V, {
      key: n.dataid
    }, [
      L(k(n.name) + " ", 1),
      a < e.breadcrumb.length - 1 ? (u(), p(V, { key: 0 }, [
        L(" ▶ ")
      ], 64)) : $("", !0)
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
  const n = v("KButton"), a = v("KNodeAncestor");
  return u(), p("div", no, [
    f("input", {
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
      default: S(() => [
        L(k(e.browseButtonLabel), 1)
      ]),
      _: 1
    }, 8, ["onClick"]),
    e.clearable ? (u(), P(n, {
      key: 0,
      small: "",
      onClick: e.clear
    }, {
      default: S(() => [
        L(k(e.clearButtonLabel), 1)
      ]),
      _: 1
    }, 8, ["onClick"])) : $("", !0),
    e.dataid ? (u(), P(a, {
      key: 1,
      dataid: e.dataid
    }, null, 8, ["dataid"])) : $("", !0)
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
function fo(e, t, s, r, o, i) {
  const n = v("KSpinner"), a = v("KDialog");
  return u(), P(a, { "model-value": e.loading }, {
    default: S(() => [
      f("div", po, [
        C(n, {
          height: 36,
          width: 36
        }),
        f("div", mo, k(e.label), 1)
      ])
    ]),
    _: 1
  }, 8, ["model-value"]);
}
const ho = /* @__PURE__ */ y(co, [["render", fo]]), _o = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ho
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
const $o = { key: 0 }, wo = { class: "rhmuted" };
function To(e, t, s, r, o, i) {
  return u(), p("h1", null, [
    L(k(e.title), 1),
    e.subtitle ? (u(), p("span", $o, [
      L(": "),
      f("span", wo, k(e.subtitle) + " - 2", 1)
    ])) : $("", !0)
  ]);
}
const ko = /* @__PURE__ */ y(So, [["render", To], ["__scopeId", "data-v-8d8d8837"]]), Oo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ko
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
      return g(this.pagination, "pageRange", []);
    },
    pageSizes() {
      return g(this.pagination, "pageSizes", []);
    },
    pageNumber() {
      return g(this.pagination, "pageNumber", 0);
    },
    pageSize: {
      get() {
        return g(this.pagination, "pageSize", 0);
      },
      set(e) {
        this.$emit("update:pageSize", e);
      }
    },
    hasPrevious() {
      return g(this.pagination, "hasPrevious", !1);
    },
    hasNext() {
      return g(this.pagination, "hasNext", !1);
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
}, Fo = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ f("path", { d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" })
], -1), Eo = [
  Fo
], Lo = { key: 0 }, jo = ["onClick"], Mo = {
  key: 1,
  class: "k-pagination-button"
}, No = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ f("path", { d: "M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" })
], -1), Ao = [
  No
];
function Ko(e, t, s, r, o, i) {
  const n = v("KSelect");
  return e.pagination.hasOtherPages ? (u(), p("div", Po, [
    C(n, {
      modelValue: e.pageSize,
      "onUpdate:modelValue": t[0] || (t[0] = (a) => e.pageSize = a),
      items: e.pageSizes,
      label: "Page Size"
    }, null, 8, ["modelValue", "items"]),
    f("div", Ro, [
      e.hasPrevious ? (u(), p("a", Vo, Eo)) : $("", !0),
      (u(!0), p(V, null, N(e.pageRange, (a) => (u(), p(V, { key: a }, [
        a === "|" ? (u(), p("div", Lo, "...")) : (u(), p("a", {
          key: 1,
          class: M(["k-pagination-button k-pagination-button-border", e.classObj(a)]),
          onClick: (d) => e.$emit("update:modelValue", a)
        }, k(a), 11, jo))
      ], 64))), 128)),
      e.hasNext ? (u(), p("a", Mo, Ao)) : $("", !0)
    ]),
    f("div", null, " Displaying " + k(e.pagination.startIndex) + "-" + k(e.pagination.endIndex) + " of " + k(e.pagination.count) + " items. ", 1)
  ])) : $("", !0);
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
      return g(this.pagination, "offset", 0);
    },
    limit() {
      return g(this.pagination, "limit", 0);
    },
    count() {
      return g(this.pagination, "count", 0);
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
const Uo = { class: "k-pagination2" }, xo = { class: "k-pagination2-buttons" }, zo = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ f("path", { d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" })
], -1), Wo = [
  zo
], qo = ["onClick"], Ho = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ f("path", { d: "M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" })
], -1), Go = [
  Ho
];
function Jo(e, t, s, r, o, i) {
  const n = v("KSelect");
  return u(), p("div", Uo, [
    f("div", null, [
      C(n, {
        modelValue: e.pageSize,
        "onUpdate:modelValue": t[0] || (t[0] = (a) => e.pageSize = a),
        items: e.pageSizes,
        label: "Page Size"
      }, null, 8, ["modelValue", "items"])
    ]),
    e.pageCount > 1 ? (u(), p(V, { key: 0 }, [
      f("div", xo, [
        e.hasPrevious ? (u(), p("a", {
          key: 0,
          class: "k-pagination2-arrow-button",
          onClick: t[1] || (t[1] = (a) => e.clickedPageNumber(e.pageNumber0 - 1))
        }, Wo)) : $("", !0),
        (u(!0), p(V, null, N(e.pageRange0, (a) => (u(), p("div", {
          key: a,
          class: M(["k-pagination2-button", e.classObj(a)]),
          onClick: (d) => e.clickedPageNumber(a)
        }, k(a + 1), 11, qo))), 128)),
        e.hasNext ? (u(), p("a", {
          key: 1,
          class: "k-pagination2-arrow-button",
          onClick: t[2] || (t[2] = (a) => e.clickedPageNumber(e.pageNumber0 + 1))
        }, Go)) : $("", !0)
      ]),
      f("div", null, k(e.pageNumber) + " of " + k(e.pageCount) + " pages", 1)
    ], 64)) : $("", !0)
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
      return this.isObject(e) ? g(e, this.itemText) : e;
    },
    getItemValue(e) {
      return this.isObject(e) ? g(e, this.itemValue) : e;
    },
    getItemDisabled(e) {
      return this.isObject(e) ? g(e, "disabled", !1) : !1;
    }
  }
});
const Yo = ["id", "value", "disabled"], en = ["for"];
function tn(e, t, s, r, o, i) {
  const n = v("KSpinner"), a = v("KFormFieldWrapper");
  return u(), p("div", null, [
    C(a, {
      label: e.label,
      "success-messages": e.successMessages,
      "error-messages": e.errorMessages
    }, {
      default: S(() => [
        C(re, {
          name: "fade",
          mode: "out-in"
        }, {
          default: S(() => [
            e.loading ? (u(), P(n, { key: 0 })) : (u(), p("div", {
              key: 1,
              class: M(["k-radiogroup", e.classObj])
            }, [
              (u(!0), p(V, null, N(e.items, (d) => (u(), p("div", {
                key: e.getItemValue(d),
                class: "k-radiogroup-item"
              }, [
                z(f("input", {
                  id: e.getItemValue(d),
                  "onUpdate:modelValue": t[0] || (t[0] = (c) => e.localValue = c),
                  type: "radio",
                  value: e.getItemValue(d),
                  disabled: e.getItemDisabled(d)
                }, null, 8, Yo), [
                  [Bt, e.localValue]
                ]),
                f("label", {
                  for: e.getItemValue(d)
                }, k(e.getItemText(d)), 9, en)
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
    f("button", {
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
      return this.isObject(e) ? g(e, this.itemText) : e;
    },
    getItemValue(e) {
      return this.isObject(e) ? g(e, this.itemValue) : e;
    },
    arrify(e) {
      return Array.isArray(e) ? e : [e];
    }
  }
});
const cn = { class: "k-select" }, dn = ["value"];
function pn(e, t, s, r, o, i) {
  const n = v("KSpinner"), a = v("KFormFieldWrapper");
  return u(), P(a, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: S(() => [
      f("div", cn, [
        z(f("select", {
          "onUpdate:modelValue": t[0] || (t[0] = (d) => e.localValue = d),
          class: M(e.classObj)
        }, [
          (u(!0), p(V, null, N(e.items, (d) => (u(), p("option", {
            key: e.getItemValue(d),
            value: e.getItemValue(d)
          }, k(e.getItemText(d)), 9, dn))), 128))
        ], 2), [
          [It, e.localValue]
        ]),
        C(re, { name: "fade" }, {
          default: S(() => [
            e.loading ? (u(), P(n, {
              key: 0,
              class: "k-select--spinner"
            })) : $("", !0)
          ]),
          _: 1
        })
      ])
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const mn = /* @__PURE__ */ y(un, [["render", pn]]), fn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mn
}, Symbol.toStringTag, { value: "Module" })), hn = _({
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
function $n(e, t, s, r, o, i) {
  return u(), p(V, null, [
    R(e.$slots, "default"),
    f("div", _n, [
      C(Fe, {
        name: "slide",
        tag: "div",
        mode: "out-in"
      }, {
        default: S(() => [
          (u(!0), p(V, null, N(e.items, (n) => (u(), p("div", {
            key: n.index,
            class: M(["k-snackbar-item", e.classObj(n)])
          }, [
            f("div", yn, [
              n.title ? (u(), p("div", bn, k(n.title), 1)) : $("", !0),
              n.message ? (u(), p("div", gn, k(n.message), 1)) : $("", !0)
            ]),
            n.action ? (u(), p("div", vn, [
              f("a", {
                href: "#",
                onClick: x((a) => e.action(n), ["prevent"])
              }, k(n.actionLabel), 9, Sn)
            ])) : $("", !0)
          ], 2))), 128))
        ]),
        _: 1
      })
    ])
  ], 64);
}
const wn = /* @__PURE__ */ y(hn, [["render", $n]]), Tn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: wn
}, Symbol.toStringTag, { value: "Module" })), kn = _({
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
    C(re, {
      name: "fade",
      mode: "out-in"
    }, {
      default: S(() => [
        e.isActive && e.sortAsc ? (u(), p("span", On, "↓")) : e.isActive ? (u(), p("span", Cn, "↑")) : $("", !0)
      ]),
      _: 1
    })
  ]);
}
const Rn = /* @__PURE__ */ y(kn, [["render", Pn]]), Vn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
}), qe = () => {
  ct((e) => ({
    "519b76bc": e.color
  }));
}, He = Le.setup;
Le.setup = He ? (e, t) => (qe(), He(e, t)) : qe;
const Nn = /* @__PURE__ */ f("circle", {
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), An = /* @__PURE__ */ f("path", {
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), Kn = [
  Nn,
  An
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
const Bn = /* @__PURE__ */ y(Le, [["render", Dn]]), In = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Bn
}, Symbol.toStringTag, { value: "Module" })), je = _({
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
}), Ge = () => {
  ct((e) => ({
    f984ea98: e.switchWidthPx,
    "0b657735": e.heightPx,
    "4fc9dc79": e.innerSizePx,
    56563113: e.paddingPx,
    bd22c72c: e.transPx
  }));
}, Je = je.setup;
je.setup = Je ? (e, t) => (Ge(), Je(e, t)) : Ge;
const Un = /* @__PURE__ */ f("span", { class: "k-switch-slider" }, null, -1), xn = [
  Un
];
function zn(e, t, s, r, o, i) {
  return u(), p("div", {
    class: M(["k-switch", e.classObj]),
    onClick: t[0] || (t[0] = (n) => e.on = !e.on)
  }, xn, 2);
}
const Wn = /* @__PURE__ */ y(je, [["render", zn]]), qn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
  const n = v("KLinearProgressIndicator");
  return u(), p("div", null, [
    e.loading ? (u(), P(n, { key: 0 })) : $("", !0),
    f("table", {
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
  const n = v("KFormFieldWrapper");
  return u(), P(n, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: S(() => [
      z(f("textarea", ut({
        "onUpdate:modelValue": t[0] || (t[0] = (a) => e.valueLocal = a)
      }, e.$attrs, {
        spellcheck: "false",
        class: [e.classObj, "k-textarea"],
        rows: e.rows,
        onKeydown: t[1] || (t[1] = te(x((...a) => e.tabber && e.tabber(...a), ["prevent"]), ["tab"]))
      }), null, 16, Zn), [
        [Ve, e.valueLocal]
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
  const n = v("KFormFieldWrapper");
  return u(), P(n, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: S(() => [
      z(f("input", {
        "onUpdate:modelValue": t[0] || (t[0] = (a) => e.value = a),
        class: M(["k-input-text-field", e.classObj]),
        placeholder: e.placeholder
      }, null, 10, ri), [
        [Ve, e.value]
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
      return g(this.userRec, "type", this.type);
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
  }, null, 12, li)) : $("", !0);
}
const ci = /* @__PURE__ */ y(ai, [["render", ui]]), di = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ci
}, Symbol.toStringTag, { value: "Module" })), Qe = new Ee();
class pi {
  users;
  constructor() {
    this.users = {};
  }
  registerUsers(t) {
    t.forEach((s) => this.users[s.value] = s);
  }
  fullName(t) {
    const s = t.first_name, r = t.last_name, o = t.name;
    return s || r ? [s, r, `(${o})`].join(" ") : o;
  }
  async lookup(t, s) {
    try {
      if (await Qe.acquire(s), !this.users[s]) {
        const r = await t.members.member(s, "v1"), o = g(r, "data.data.id"), i = g(r, "data.data.type"), n = this.fullName(g(r, "data.data"));
        o && (this.users[s] = { type: i, text: n, value: o });
      }
      return this.users[s];
    } finally {
      Qe.release(s);
    }
  }
}
const Te = new pi(), mi = _({
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
      return g(this.userRecLocal, "id") ?? g(this.userRecLocal, "userid");
    },
    userLocal() {
      return this.user ?? this.userid ?? this.userRec;
    },
    displayName() {
      return g(this.userRecLocal, "display_name") ?? g(this.userRecLocal, "displayname") ?? g(this.userRecLocal, "name");
    },
    type() {
      return g(this.userRecLocal, "type");
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
function hi(e, t, s, r, o, i) {
  const n = v("KUserGIF");
  return e.userRecLocal ? (u(), p("span", fi, [
    e.gif ? (u(), P(n, {
      key: 0,
      "user-rec": e.userRecLocal
    }, null, 8, ["user-rec"])) : $("", !0),
    L("  "),
    f("a", {
      href: "#",
      onClick: t[0] || (t[0] = x((...a) => e.click && e.click(...a), ["prevent"]))
    }, k(e.displayName), 1)
  ])) : $("", !0);
}
const _i = /* @__PURE__ */ y(mi, [["render", hi]]), yi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _i
}, Symbol.toStringTag, { value: "Module" })), bi = _({
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
          text: g(s, "name_formatted"),
          value: g(s, "id"),
          type: g(s, "type")
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
function gi(e, t, s, r, o, i) {
  const n = v("KUserGIF"), a = v("KAutocomplete"), d = v("KUserLink"), c = v("KFormFieldWrapper");
  return u(), P(c, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: S(() => [
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
        prepend: S(({ item: m }) => [
          C(n, {
            type: m?.type
          }, null, 8, ["type"])
        ]),
        item: S(({ item: m }) => [
          C(n, {
            type: m.type
          }, null, 8, ["type"]),
          L(" " + k(m.text), 1)
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
const vi = /* @__PURE__ */ y(bi, [["render", gi]]), Si = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vi
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
      return this.name == g(this.tabs, "selectedTab");
    }
  }
}), wi = { key: 0 };
function Ti(e, t, s, r, o, i) {
  return e.isSelected ? (u(), p("div", wi, [
    R(e.$slots, "default")
  ])) : $("", !0);
}
const ki = /* @__PURE__ */ y($i, [["render", Ti]]), Oi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ki
}, Symbol.toStringTag, { value: "Module" })), Ci = _({
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
const Pi = { class: "k-tabs" }, Ri = { class: "k-tabs-nav" }, Vi = ["href", "onClick"], Fi = { class: "k-tabs-content" };
function Ei(e, t, s, r, o, i) {
  return u(), p("div", Pi, [
    f("div", Ri, [
      (u(!0), p(V, null, N(e.tabs, (n) => (u(), p("div", {
        key: n.name,
        class: M(e.classObj(n))
      }, [
        f("a", {
          href: `#${n.name}`,
          onClick: (a) => e.selectTab(n.name)
        }, k(n.title), 9, Vi)
      ], 2))), 128))
    ]),
    f("div", Fi, [
      R(e.$slots, "default")
    ])
  ]);
}
const Li = /* @__PURE__ */ y(Ci, [["render", Ei]]), ji = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Li
}, Symbol.toStringTag, { value: "Module" }));
function ft(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: ht } = Object.prototype, { getPrototypeOf: Me } = Object, Ne = ((e) => (t) => {
  const s = ht.call(t);
  return e[s] || (e[s] = s.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), I = (e) => (e = e.toLowerCase(), (t) => Ne(t) === e), he = (e) => (t) => typeof t === e, { isArray: Y } = Array, se = he("undefined");
function Mi(e) {
  return e !== null && !se(e) && e.constructor !== null && !se(e.constructor) && q(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const _t = I("ArrayBuffer");
function Ni(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && _t(e.buffer), t;
}
const Ai = he("string"), q = he("function"), yt = he("number"), Ae = (e) => e !== null && typeof e == "object", Ki = (e) => e === !0 || e === !1, le = (e) => {
  if (Ne(e) !== "object")
    return !1;
  const t = Me(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Di = I("Date"), Bi = I("File"), Ii = I("Blob"), Ui = I("FileList"), xi = (e) => Ae(e) && q(e.pipe), zi = (e) => {
  const t = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || ht.call(e) === t || q(e.toString) && e.toString() === t);
}, Wi = I("URLSearchParams"), qi = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function oe(e, t, { allOwnKeys: s = !1 } = {}) {
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
function ke() {
  const { caseless: e } = vt(this) && this || {}, t = {}, s = (r, o) => {
    const i = e && bt(t, o) || o;
    le(t[i]) && le(r) ? t[i] = ke(t[i], r) : le(r) ? t[i] = ke({}, r) : Y(r) ? t[i] = r.slice() : t[i] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && oe(arguments[r], s);
  return t;
}
const Hi = (e, t, s, { allOwnKeys: r } = {}) => (oe(t, (o, i) => {
  s && q(o) ? e[i] = ft(o, s) : e[i] = o;
}, { allOwnKeys: r }), e), Gi = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Ji = (e, t, s, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), s && Object.assign(e.prototype, s);
}, Qi = (e, t, s, r) => {
  let o, i, n;
  const a = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      n = o[i], (!r || r(n, e, t)) && !a[n] && (t[n] = e[n], a[n] = !0);
    e = s !== !1 && Me(e);
  } while (e && (!s || s(e, t)) && e !== Object.prototype);
  return t;
}, Xi = (e, t, s) => {
  e = String(e), (s === void 0 || s > e.length) && (s = e.length), s -= t.length;
  const r = e.indexOf(t, s);
  return r !== -1 && r === s;
}, Zi = (e) => {
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
}, Yi = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Me(Uint8Array)), ea = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const i = o.value;
    t.call(e, i[0], i[1]);
  }
}, ta = (e, t) => {
  let s;
  const r = [];
  for (; (s = e.exec(t)) !== null; )
    r.push(s);
  return r;
}, sa = I("HTMLFormElement"), ra = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(s, r, o) {
    return r.toUpperCase() + o;
  }
), Xe = (({ hasOwnProperty: e }) => (t, s) => e.call(t, s))(Object.prototype), oa = I("RegExp"), St = (e, t) => {
  const s = Object.getOwnPropertyDescriptors(e), r = {};
  oe(s, (o, i) => {
    t(o, i, e) !== !1 && (r[i] = o);
  }), Object.defineProperties(e, r);
}, na = (e) => {
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
}, ia = (e, t) => {
  const s = {}, r = (o) => {
    o.forEach((i) => {
      s[i] = !0;
    });
  };
  return Y(e) ? r(e) : r(String(e).split(t)), s;
}, aa = () => {
}, la = (e, t) => (e = +e, Number.isFinite(e) ? e : t), ge = "abcdefghijklmnopqrstuvwxyz", Ze = "0123456789", $t = {
  DIGIT: Ze,
  ALPHA: ge,
  ALPHA_DIGIT: ge + ge.toUpperCase() + Ze
}, ua = (e = 16, t = $t.ALPHA_DIGIT) => {
  let s = "";
  const { length: r } = t;
  for (; e--; )
    s += t[Math.random() * r | 0];
  return s;
};
function ca(e) {
  return !!(e && q(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const da = (e) => {
  const t = new Array(10), s = (r, o) => {
    if (Ae(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[o] = r;
        const i = Y(r) ? [] : {};
        return oe(r, (n, a) => {
          const d = s(n, o + 1);
          !se(d) && (i[a] = d);
        }), t[o] = void 0, i;
      }
    }
    return r;
  };
  return s(e, 0);
}, l = {
  isArray: Y,
  isArrayBuffer: _t,
  isBuffer: Mi,
  isFormData: zi,
  isArrayBufferView: Ni,
  isString: Ai,
  isNumber: yt,
  isBoolean: Ki,
  isObject: Ae,
  isPlainObject: le,
  isUndefined: se,
  isDate: Di,
  isFile: Bi,
  isBlob: Ii,
  isRegExp: oa,
  isFunction: q,
  isStream: xi,
  isURLSearchParams: Wi,
  isTypedArray: Yi,
  isFileList: Ui,
  forEach: oe,
  merge: ke,
  extend: Hi,
  trim: qi,
  stripBOM: Gi,
  inherits: Ji,
  toFlatObject: Qi,
  kindOf: Ne,
  kindOfTest: I,
  endsWith: Xi,
  toArray: Zi,
  forEachEntry: ea,
  matchAll: ta,
  isHTMLForm: sa,
  hasOwnProperty: Xe,
  hasOwnProp: Xe,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: St,
  freezeMethods: na,
  toObjectSet: ia,
  toCamelCase: ra,
  noop: aa,
  toFiniteNumber: la,
  findKey: bt,
  global: gt,
  isContextDefined: vt,
  ALPHABET: $t,
  generateString: ua,
  isSpecCompliantForm: ca,
  toJSONObject: da
};
function T(e, t, s, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), s && (this.config = s), r && (this.request = r), o && (this.response = o);
}
l.inherits(T, Error, {
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
const wt = T.prototype, Tt = {};
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
  Tt[e] = { value: e };
});
Object.defineProperties(T, Tt);
Object.defineProperty(wt, "isAxiosError", { value: !0 });
T.from = (e, t, s, r, o, i) => {
  const n = Object.create(wt);
  return l.toFlatObject(e, n, function(d) {
    return d !== Error.prototype;
  }, (a) => a !== "isAxiosError"), T.call(n, e.message, t, s, r, o), n.cause = e, n.name = e.name, i && Object.assign(n, i), n;
};
const pa = null;
function Oe(e) {
  return l.isPlainObject(e) || l.isArray(e);
}
function kt(e) {
  return l.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ye(e, t, s) {
  return e ? e.concat(t).map(function(o, i) {
    return o = kt(o), !s && i ? "[" + o + "]" : o;
  }).join(s ? "." : "") : t;
}
function ma(e) {
  return l.isArray(e) && !e.some(Oe);
}
const fa = l.toFlatObject(l, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function _e(e, t, s) {
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
  function c(h) {
    if (h === null)
      return "";
    if (l.isDate(h))
      return h.toISOString();
    if (!d && l.isBlob(h))
      throw new T("Blob is not supported. Use a Buffer instead.");
    return l.isArrayBuffer(h) || l.isTypedArray(h) ? d && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function m(h, w, D) {
    let A = h;
    if (h && !D && typeof h == "object") {
      if (l.endsWith(w, "{}"))
        w = r ? w : w.slice(0, -2), h = JSON.stringify(h);
      else if (l.isArray(h) && ma(h) || (l.isFileList(h) || l.endsWith(w, "[]")) && (A = l.toArray(h)))
        return w = kt(w), A.forEach(function(ie, Nt) {
          !(l.isUndefined(ie) || ie === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            n === !0 ? Ye([w], Nt, i) : n === null ? w : w + "[]",
            c(ie)
          );
        }), !1;
    }
    return Oe(h) ? !0 : (t.append(Ye(D, w, i), c(h)), !1);
  }
  const b = [], F = Object.assign(fa, {
    defaultVisitor: m,
    convertValue: c,
    isVisitable: Oe
  });
  function O(h, w) {
    if (!l.isUndefined(h)) {
      if (b.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + w.join("."));
      b.push(h), l.forEach(h, function(A, Q) {
        (!(l.isUndefined(A) || A === null) && o.call(
          t,
          A,
          l.isString(Q) ? Q.trim() : Q,
          w,
          F
        )) === !0 && O(A, w ? w.concat(Q) : [Q]);
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
function Ke(e, t) {
  this._pairs = [], e && _e(e, this, t);
}
const Ot = Ke.prototype;
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
function ha(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Ct(e, t, s) {
  if (!t)
    return e;
  const r = s && s.encode || ha, o = s && s.serialize;
  let i;
  if (o ? i = o(t, s) : i = l.isURLSearchParams(t) ? t.toString() : new Ke(t, s).toString(r), i) {
    const n = e.indexOf("#");
    n !== -1 && (e = e.slice(0, n)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class _a {
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
const tt = _a, Pt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, ya = typeof URLSearchParams < "u" ? URLSearchParams : Ke, ba = typeof FormData < "u" ? FormData : null, ga = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), va = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), K = {
  isBrowser: !0,
  classes: {
    URLSearchParams: ya,
    FormData: ba,
    Blob
  },
  isStandardBrowserEnv: ga,
  isStandardBrowserWebWorkerEnv: va,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function Sa(e, t) {
  return _e(e, new K.classes.URLSearchParams(), Object.assign({
    visitor: function(s, r, o, i) {
      return K.isNode && l.isBuffer(s) ? (this.append(r, s.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function $a(e) {
  return l.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function wa(e) {
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
    return n = !n && l.isArray(o) ? o.length : n, d ? (l.hasOwnProp(o, n) ? o[n] = [o[n], r] : o[n] = r, !a) : ((!o[n] || !l.isObject(o[n])) && (o[n] = []), t(s, r, o[n], i) && l.isArray(o[n]) && (o[n] = wa(o[n])), !a);
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
function ka(e, t, s) {
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
        return Sa(t, this.formSerializer).toString();
      if ((a = l.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const d = this.env && this.env.FormData;
        return _e(
          a ? { "files[]": t } : t,
          d && new d(),
          this.formSerializer
        );
      }
    }
    return i || o ? (s.setContentType("application/json", !1), ka(t)) : t;
  }],
  transformResponse: [function(t) {
    const s = this.transitional || ye.transitional, r = s && s.forcedJSONParsing, o = this.responseType === "json";
    if (t && l.isString(t) && (r && !this.responseType || o)) {
      const n = !(s && s.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (n)
          throw a.name === "SyntaxError" ? T.from(a, T.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
  ye.headers[t] = {};
});
l.forEach(["post", "put", "patch"], function(t) {
  ye.headers[t] = l.merge(Ta);
});
const De = ye, Oa = l.toObjectSet([
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
]), Ca = (e) => {
  const t = {};
  let s, r, o;
  return e && e.split(`
`).forEach(function(n) {
    o = n.indexOf(":"), s = n.substring(0, o).trim().toLowerCase(), r = n.substring(o + 1).trim(), !(!s || t[s] && Oa[s]) && (s === "set-cookie" ? t[s] ? t[s].push(r) : t[s] = [r] : t[s] = t[s] ? t[s] + ", " + r : r);
  }), t;
}, st = Symbol("internals");
function ee(e) {
  return e && String(e).trim().toLowerCase();
}
function ue(e) {
  return e === !1 || e == null ? e : l.isArray(e) ? e.map(ue) : String(e);
}
function Pa(e) {
  const t = /* @__PURE__ */ Object.create(null), s = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = s.exec(e); )
    t[r[1]] = r[2];
  return t;
}
function Ra(e) {
  return /^[-_a-zA-Z]+$/.test(e.trim());
}
function ve(e, t, s, r, o) {
  if (l.isFunction(r))
    return r.call(this, t, s);
  if (o && (t = s), !!l.isString(t)) {
    if (l.isString(r))
      return t.indexOf(r) !== -1;
    if (l.isRegExp(r))
      return r.test(t);
  }
}
function Va(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, s, r) => s.toUpperCase() + r);
}
function Fa(e, t) {
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
    function i(a, d, c) {
      const m = ee(d);
      if (!m)
        throw new Error("header name must be a non-empty string");
      const b = l.findKey(o, m);
      (!b || o[b] === void 0 || c === !0 || c === void 0 && o[b] !== !1) && (o[b || d] = ue(a));
    }
    const n = (a, d) => l.forEach(a, (c, m) => i(c, m, d));
    return l.isPlainObject(t) || t instanceof this.constructor ? n(t, s) : l.isString(t) && (t = t.trim()) && !Ra(t) ? n(Ca(t), s) : t != null && i(s, t, r), this;
  }
  get(t, s) {
    if (t = ee(t), t) {
      const r = l.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!s)
          return o;
        if (s === !0)
          return Pa(o);
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
      return !!(r && this[r] !== void 0 && (!s || ve(this, this[r], r, s)));
    }
    return !1;
  }
  delete(t, s) {
    const r = this;
    let o = !1;
    function i(n) {
      if (n = ee(n), n) {
        const a = l.findKey(r, n);
        a && (!s || ve(r, r[a], a, s)) && (delete r[a], o = !0);
      }
    }
    return l.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const s = Object.keys(this);
    let r = s.length, o = !1;
    for (; r--; ) {
      const i = s[r];
      (!t || ve(this, this[i], i, t, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(t) {
    const s = this, r = {};
    return l.forEach(this, (o, i) => {
      const n = l.findKey(r, i);
      if (n) {
        s[n] = ue(o), delete s[i];
        return;
      }
      const a = t ? Va(i) : String(i).trim();
      a !== i && delete s[i], s[a] = ue(o), r[a] = !0;
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
      const a = ee(n);
      r[a] || (Fa(o, n), r[a] = !0);
    }
    return l.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
be.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
l.freezeMethods(be.prototype);
l.freezeMethods(be);
const B = be;
function Se(e, t) {
  const s = this || De, r = t || s, o = B.from(r.headers);
  let i = r.data;
  return l.forEach(e, function(a) {
    i = a.call(s, i, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), i;
}
function Vt(e) {
  return !!(e && e.__CANCEL__);
}
function ne(e, t, s) {
  T.call(this, e ?? "canceled", T.ERR_CANCELED, t, s), this.name = "CanceledError";
}
l.inherits(ne, T, {
  __CANCEL__: !0
});
function Ea(e, t, s) {
  const r = s.config.validateStatus;
  !s.status || !r || r(s.status) ? e(s) : t(new T(
    "Request failed with status code " + s.status,
    [T.ERR_BAD_REQUEST, T.ERR_BAD_RESPONSE][Math.floor(s.status / 100) - 4],
    s.config,
    s.request,
    s
  ));
}
const La = K.isStandardBrowserEnv ? (
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
function ja(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Ma(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Ft(e, t) {
  return e && !ja(t) ? Ma(e, t) : t;
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
function Aa(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Ka(e, t) {
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
  const r = Ka(50, 250);
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
const Da = typeof XMLHttpRequest < "u", Ba = Da && function(e) {
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
      const O = e.auth.username || "", h = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(O + ":" + h));
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
      Ea(function(A) {
        s(A), d();
      }, function(A) {
        r(A), d();
      }, w), c = null;
    }
    if ("onloadend" in c ? c.onloadend = b : c.onreadystatechange = function() {
      !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(b);
    }, c.onabort = function() {
      c && (r(new T("Request aborted", T.ECONNABORTED, e, c)), c = null);
    }, c.onerror = function() {
      r(new T("Network Error", T.ERR_NETWORK, e, c)), c = null;
    }, c.ontimeout = function() {
      let h = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const w = e.transitional || Pt;
      e.timeoutErrorMessage && (h = e.timeoutErrorMessage), r(new T(
        h,
        w.clarifyTimeoutError ? T.ETIMEDOUT : T.ECONNABORTED,
        e,
        c
      )), c = null;
    }, K.isStandardBrowserEnv) {
      const O = (e.withCredentials || Na(m)) && e.xsrfCookieName && La.read(e.xsrfCookieName);
      O && i.set(e.xsrfHeaderName, O);
    }
    o === void 0 && i.setContentType(null), "setRequestHeader" in c && l.forEach(i.toJSON(), function(h, w) {
      c.setRequestHeader(w, h);
    }), l.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), n && n !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", rt(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", rt(e.onUploadProgress)), (e.cancelToken || e.signal) && (a = (O) => {
      c && (r(!O || O.type ? new ne(null, e, c) : O), c.abort(), c = null);
    }, e.cancelToken && e.cancelToken.subscribe(a), e.signal && (e.signal.aborted ? a() : e.signal.addEventListener("abort", a)));
    const F = Aa(m);
    if (F && K.protocols.indexOf(F) === -1) {
      r(new T("Unsupported protocol " + F + ":", T.ERR_BAD_REQUEST, e));
      return;
    }
    c.send(o || null);
  });
}, ce = {
  http: pa,
  xhr: Ba
};
l.forEach(ce, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Ia = {
  getAdapter: (e) => {
    e = l.isArray(e) ? e : [e];
    const { length: t } = e;
    let s, r;
    for (let o = 0; o < t && (s = e[o], !(r = l.isString(s) ? ce[s.toLowerCase()] : s)); o++)
      ;
    if (!r)
      throw r === !1 ? new T(
        `Adapter ${s} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        l.hasOwnProp(ce, s) ? `Adapter '${s}' is not available in the build` : `Unknown adapter '${s}'`
      );
    if (!l.isFunction(r))
      throw new TypeError("adapter is not a function");
    return r;
  },
  adapters: ce
};
function $e(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ne(null, e);
}
function ot(e) {
  return $e(e), e.headers = B.from(e.headers), e.data = Se.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Ia.getAdapter(e.adapter || De.adapter)(e).then(function(r) {
    return $e(e), r.data = Se.call(
      e,
      e.transformResponse,
      r
    ), r.headers = B.from(r.headers), r;
  }, function(r) {
    return Vt(r) || ($e(e), r && r.response && (r.response.data = Se.call(
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
const Et = "1.3.3", Be = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Be[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const it = {};
Be.transitional = function(t, s, r) {
  function o(i, n) {
    return "[Axios v" + Et + "] Transitional option '" + i + "'" + n + (r ? ". " + r : "");
  }
  return (i, n, a) => {
    if (t === !1)
      throw new T(
        o(n, " has been removed" + (s ? " in " + s : "")),
        T.ERR_DEPRECATED
      );
    return s && !it[n] && (it[n] = !0, console.warn(
      o(
        n,
        " has been deprecated since v" + s + " and will be removed in the near future"
      )
    )), t ? t(i, n, a) : !0;
  };
};
function Ua(e, t, s) {
  if (typeof e != "object")
    throw new T("options must be an object", T.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o], n = t[i];
    if (n) {
      const a = e[i], d = a === void 0 || n(a, i, e);
      if (d !== !0)
        throw new T("option " + i + " must be " + d, T.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (s !== !0)
      throw new T("Unknown option " + i, T.ERR_BAD_OPTION);
  }
}
const Ce = {
  assertOptions: Ua,
  validators: Be
}, U = Ce.validators;
class pe {
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
    r !== void 0 && Ce.assertOptions(r, {
      silentJSONParsing: U.transitional(U.boolean),
      forcedJSONParsing: U.transitional(U.boolean),
      clarifyTimeoutError: U.transitional(U.boolean)
    }, !1), o !== void 0 && Ce.assertOptions(o, {
      encode: U.function,
      serialize: U.function
    }, !0), s.method = (s.method || this.defaults.method || "get").toLowerCase();
    let n;
    n = i && l.merge(
      i.common,
      i[s.method]
    ), n && l.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (h) => {
        delete i[h];
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
      const h = [ot.bind(this), void 0];
      for (h.unshift.apply(h, a), h.push.apply(h, c), F = h.length, m = Promise.resolve(s); b < F; )
        m = m.then(h[b++], h[b++]);
      return m;
    }
    F = a.length;
    let O = s;
    for (b = 0; b < F; ) {
      const h = a[b++], w = a[b++];
      try {
        O = h(O);
      } catch (D) {
        w.call(this, D);
        break;
      }
    }
    try {
      m = ot.call(this, O);
    } catch (h) {
      return Promise.reject(h);
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
  pe.prototype[t] = function(s, r) {
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
  pe.prototype[t] = s(), pe.prototype[t + "Form"] = s(!0);
});
const de = pe;
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
      r.reason || (r.reason = new ne(i, n, a), s(r.reason));
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
const xa = Ie;
function za(e) {
  return function(s) {
    return e.apply(null, s);
  };
}
function Wa(e) {
  return l.isObject(e) && e.isAxiosError === !0;
}
const Pe = {
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
Object.entries(Pe).forEach(([e, t]) => {
  Pe[t] = e;
});
const qa = Pe;
function Lt(e) {
  const t = new de(e), s = ft(de.prototype.request, t);
  return l.extend(s, de.prototype, t, { allOwnKeys: !0 }), l.extend(s, t, null, { allOwnKeys: !0 }), s.create = function(o) {
    return Lt(X(e, o));
  }, s;
}
const E = Lt(De);
E.Axios = de;
E.CanceledError = ne;
E.CancelToken = xa;
E.isCancel = Vt;
E.VERSION = Et;
E.toFormData = _e;
E.AxiosError = T;
E.Cancel = E.CanceledError;
E.all = function(t) {
  return Promise.all(t);
};
E.spread = za;
E.isAxiosError = Wa;
E.mergeConfig = X;
E.AxiosHeaders = B;
E.formToJSON = (e) => Rt(l.isHTMLForm(e) ? new FormData(e) : e);
E.HttpStatusCode = qa;
E.default = E;
const jt = E;
function Ha(e) {
  return e == null;
}
var Ga = Ha, Ja = function(t) {
  return typeof t == "object" && t !== null;
}, Qa = -18, Xa = 5, Za = 9, Ya = -72, el = -74, tl = -68, sl = -69, rl = -7, ol = -127, nl = 1, il = -107, al = 10, ll = 2, ul = -42, cl = -2, dl = -8, pl = -128, ml = 3, fl = -4, hl = -110, _l = -109, yl = -3, bl = -102, gl = -1, vl = -196, Sl = 0, $l = 8, wl = -75, Tl = {
  AssocType: Qa,
  BooleanType: Xa,
  ClassType: Za,
  DapiNodeType: Ya,
  DapiSessionType: el,
  DapiStreamType: tl,
  DapiVersionType: sl,
  DateType: rl,
  DynamicType: ol,
  ErrorType: nl,
  FileType: il,
  FrameType: al,
  IntegerType: ll,
  JavaObjectType: ul,
  ListType: cl,
  LongType: dl,
  ObjectType: pl,
  ObjRefType: ml,
  RealType: fl,
  RecArrayType: hl,
  RecordType: _l,
  ScriptType: yl,
  SocketType: bl,
  StringType: gl,
  UAPIType: vl,
  UndefinedType: Sl,
  VoidType: $l,
  WAPIWorkType: wl
}, Mt = {
  createFormData() {
    return new FormData();
  }
};
function kl(e) {
  const t = jt.create({
    baseURL: e.baseUrl
  });
  return t.interceptors.response.use(
    (s) => {
      const r = g(s, "headers.otcsticket");
      return r && (t.defaults.headers.common.OTCSTicket = r), s;
    },
    (s) => Promise.reject(s)
  ), t;
}
function Ol(e) {
  const t = kl(e), s = e.username, r = e.password, o = e.otcsticket;
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
        return i.headers.common.OTCSTicket = g(a, "data.ticket"), i;
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
class Cl extends H {
  auth() {
    return this.session.get("/api/v1/auth/");
  }
}
var Pl = 834, Rl = 1298, Vl = 30309, Fl = 907, El = 1, Ll = 480, jl = 483, Ml = 481, Nl = 31711, Al = 290, Kl = 291, Dl = 274, Bl = 356, Il = 357, Ul = 530, xl = 131, zl = 132, Wl = 207, ql = 209, Hl = 199, Gl = 196, Jl = 194, Ql = 298, Xl = 902, Zl = 345, Yl = 348, eu = 346, tu = 3030338, su = 3030339, ru = 3030329, ou = 3030002, nu = 3030333, iu = 3030004, au = 3030335, lu = 3030334, uu = 3030205, cu = 136, du = 557, pu = 3030372, mu = 146, fu = 844, hu = 270, _u = 276, yu = 277, bu = 215, gu = 602, vu = 144, Su = 1297, $u = 283, wu = 32912, Tu = 32916, ku = 31707, Ou = 32914, Cu = 31709, Pu = 32917, Ru = 32915, Vu = 32913, Fu = 31602, Eu = 31601, Lu = 31603, ju = 335, Mu = 900, Nu = 749, Au = 2504, Ku = 904, Du = 905, Bu = 903, Iu = 1299, Uu = 906, xu = 0, zu = 223, Wu = 2, qu = 3030371, Hu = 482, Gu = 833, Ju = 282, Qu = 226, Xu = 293, Zu = 731, Yu = 368, ec = 147, tc = 281, sc = 924, rc = 541, oc = 542, nc = 361, ic = 259, ac = 272, lc = 123475, uc = 123476, cc = 123469, dc = 123470, pc = 430, mc = 432, fc = 422, hc = 732, _c = 3030331, yc = 31710, bc = 410, gc = 414, vc = 919, Sc = 920, $c = 273, wc = 1281, Tc = 1282, kc = 372, Oc = 374, Cc = 373, Pc = 870, Rc = 532, Vc = 3030756, Fc = 208, Ec = 257, Lc = 371, jc = 370, Mc = 3030203, Nc = 3030003, Ac = 3030204, Kc = 398, Dc = 3030343, Bc = 424, Ic = 412, Uc = 419, xc = 411, zc = 415, Wc = 418, qc = 416, Hc = 417, Gc = 218, Jc = 271, Qc = 195, Xc = 202, Zc = 543, Yc = 201, ed = 384, td = 380, sd = 387, rd = 829, od = 31712, nd = 31713, id = 441, ad = 296, ld = 431, ud = 327, cd = 425, dd = 428, pd = 32918, md = 32919, fd = 138, hd = 381, _d = 134, yd = 299, bd = 139, gd = 555, vd = 554, Sd = 552, $d = 553, wd = 556, Td = 551, kd = 426, Od = 427, Cd = 558, Pd = 559, Rd = 2505, Vd = 835, Fd = 32901, Ed = 258, Ld = 369, jd = 269, Md = 278, Nd = 383, Ad = 292, Kd = 31678, Dd = 49547, Bd = 275, Id = 1280, Ud = 1283, xd = 797, zd = 796, Wd = 795, qd = 3030202, Hd = 3030201, Gd = 3030001, Jd = 3030130, Qd = 280, Xd = 421, Zd = 231, Yd = 206, ep = 205, tp = 204, sp = 210, rp = 212, op = 230, np = 268, ip = 145, ap = 130, lp = 423, up = 531, cp = 526, dp = 527, pp = 3030330, mp = 140, fp = 899, hp = 123461, _p = 133, yp = 198, bp = 347, gp = 987352, vp = 405, Sp = 375, $p = 143, wp = 180, Tp = 336, kp = 162, Op = 901, Cp = 141, Pp = 403, Rp = 397, Vp = 908, Fp = 413, Ep = 550, Lp = 137, jp = 211, Mp = 148, Np = 149, Ap = 484, Kp = 1296, Dp = 525, Bp = 142, Ip = 161, Up = 529, xp = 236, zp = 235, Wp = 234, qp = 233, Hp = 30303, Gp = 128, Jp = 190, Qp = 5573, Xp = 5574, Zp = 528, Yp = 154, em = 286, tm = 285, we = {
  "2WayTee": 294,
  Accession: Pl,
  ActiveFolder: Rl,
  Activeview: Vl,
  ActivityManager: Fl,
  Alias: El,
  Appearance: Ll,
  AppearanceFolder: jl,
  AppearancesVolume: Ml,
  ArchiveFolder: Nl,
  BackupManager: Al,
  BackupProcess: Kl,
  BestBets: Dl,
  Blog: Bl,
  BlogEntry: Il,
  BoxFolder: Ul,
  Category: xl,
  CategoryFolder: zl,
  Channel: Wl,
  ChannelVol: ql,
  Classification: Hl,
  "Classification Shortcut": 197,
  ClassificationTree: Gl,
  ClassifiedItems: Jl,
  Collection: Ql,
  Column: Xl,
  Comments: Zl,
  CommentsReply: Yl,
  CommentsVol: eu,
  CommExpertContainer: tu,
  CommExpertGroup: su,
  CommStore: ru,
  CommTemplate: ou,
  CommTemplateFolder: nu,
  CommTemplateVol: iu,
  CommURLStore: au,
  CommWorkspace: lu,
  CommXSLVolume: uu,
  CompoundDoc: cu,
  CompoundEMail: du,
  ContentModuleFolder: pu,
  "csapps CSApplicationManifest": 32658,
  "csapps CSApplicationsVolume": 32657,
  CustomView: mu,
  CustomViewTemplate: fu,
  DataFlowManager: hu,
  DataSourceFolder: _u,
  DirWalker: yu,
  Discussion: bu,
  DispositionGroup: gu,
  Document: vu,
  DocumentLLNode: Su,
  DocumentServer: $u,
  Dossier: wu,
  DossierCabinet: Tu,
  DossierCabinetArchive: ku,
  DossierTemplate: Ou,
  DossierTemplateFolder: Cu,
  DossierTemplatesVolume: Pu,
  DossierTemplateVolume: Ru,
  DossierVolume: Vu,
  DPSBinding: Fu,
  DPSFolder: Eu,
  DPSVolume: Lu,
  DTDLLNode: ju,
  DynamicView: Mu,
  EMail: Nu,
  EmailConversationItems: Au,
  "Enterprise Archive Document": 753,
  Facet: Ku,
  FacetFolder: Du,
  FacetTree: Bu,
  FailedFolder: Iu,
  FixedSystemColumn: Uu,
  Folder: xu,
  Form: zu,
  Generation: Wu,
  GENERICCONTENTMODULE: qu,
  GlobalAppearance: Hu,
  HoldContainer: Gu,
  HTMLConversion: Ju,
  HTMLFormView: Qu,
  Importer: Xu,
  Inbox: Zu,
  IndexEngine: Yu,
  IndexTracer: ec,
  IndexUpdate: tc,
  InternalOTDS: sc,
  ItemTemplateVol: rc,
  ItemTemplateVolFolder: oc,
  JournalVolume: nc,
  LibraryExtractor: ic,
  LibraryObj: ac,
  "LLNode Email Folder": 751,
  LLNodeFAQ: lc,
  LLNodeFAQEntry: uc,
  LLNodeForum: cc,
  LLNodeForumEntry: dc,
  LLNodeURQuestion: pc,
  LLNodeURReply: mc,
  Locators: fc,
  Mailbox: hc,
  MailStore: _c,
  ManagedSpace: yc,
  MediaType: bc,
  MediaTypesContainer: gc,
  MemcachedFolder: vc,
  MemcachedProcess: Sc,
  Merge: $c,
  MicroPost: wc,
  MicroPostVolume: Tc,
  MultiVolClassification: kc,
  MultiVolClassificationProxy: Oc,
  MultiVolClassificationTree: Cc,
  MyReservedItems: Pc,
  MyWorkbenches: Rc,
  NAVMENUVOL: Vc,
  News: Fc,
  OTCIndexObj: Ec,
  Partition: Lc,
  PartitionMap: jc,
  PersonalComm: Mc,
  PersonalCommSystemVolume: Nc,
  PersonalCommVol: Ac,
  PersonalStagingFolder: Kc,
  PersonalWebpage: Dc,
  PhysicalItemBox: Bc,
  PhysicalItemContainer: Ic,
  PhysicalItemCopy: Uc,
  PhysicalItem_non_Container: xc,
  PhysObjAdmin: zc,
  PhysObjBatchLabels: Wc,
  PhysObjCirculation: qc,
  PhysObjReports: Hc,
  Poll: Gc,
  Process: Jc,
  Profile: Qc,
  Project: Xc,
  ProjectTemplate: Zc,
  ProjectVol: Yc,
  Prospector: ed,
  ProspectorQueries: td,
  ProspectorSnapshot: sd,
  Provenance: rd,
  Proxy: 260,
  PublishingFolder: od,
  PublishingFolderVolume: nd,
  QAFolder: id,
  QueryFile: ad,
  QuestionVolume: ld,
  RecentItems: ud,
  RecordType: cd,
  RecordTypesContainer: dd,
  RedForm: pd,
  RedFormVolume: md,
  Release: fd,
  RemoteLLDataSource: hd,
  Reply: _d,
  Report: yd,
  Revision: bd,
  RIMSDisposition: gd,
  RIMSDispositionsContainer: vd,
  RIMSHoldMaintenance: Sd,
  RIMSRsiContainer: $d,
  RMAdministration: wd,
  RMClassification: Td,
  RMFolder: kd,
  RMPart: Od,
  RMReportsContainer: Cd,
  RMThesaurus: Pd,
  ScanConfigurationVolume: Rd,
  ScheduledHoldCriteria: Vd,
  ScriptNode: Fd,
  SearchBroker: Ed,
  SearchEngine: Ld,
  SearchManager: jd,
  SearchReport: Md,
  SearchResultsTemplate: Nd,
  SearchTemplate: Ad,
  Simplate: Kd,
  SkyPodLLVolume: Dd,
  SliceFolder: Bd,
  SocialObject: Id,
  SocialObjectVolume: Ud,
  SPCJOBDESCR: xd,
  SPCJOBDESCRFOLDER: zd,
  SPCVOLUME: Wd,
  spdcommittee: qd,
  spdcommitteevol: Hd,
  spdcommitteevolume: Gd,
  spdemail: Jd,
  Spider: Qd,
  StorageManagement: Xd,
  SubmitVersionNode: Zd,
  Task: Yd,
  TaskGroup: ep,
  TaskList: tp,
  TaskListVol: sp,
  TaskMilestone: rp,
  Template: op,
  TemplateFolder: np,
  TextDocument: ip,
  Topic: ap,
  Transfers: lp,
  TransportBox: up,
  TransportItem: cp,
  TransportItemPart: dp,
  UrgentRequests: pp,
  URL: mp,
  VirtualFolder: fp,
  VolBlog: hp,
  VolCategories: _p,
  VolClassification: yp,
  VolComments: bp,
  VolDAP: gp,
  VolDeletedItems: vp,
  VolDirectory: Sp,
  VolDiscussion: $p,
  VolDomainWorkspace: wp,
  VolDTD: Tp,
  VolEditWorkflow: kp,
  VolFacets: Op,
  VolLibrary: Cp,
  VolOrphan: Pp,
  VolPersonalStaging: Rp,
  VolPerspectives: Vp,
  VolPhysObj: Fp,
  VolRecMan: Ep,
  VolRelease: Lp,
  VolReports: jp,
  VolSystem: Mp,
  VolTracer: Np,
  VolumeFolder: Ap,
  VolumeLLVolume: Kp,
  VolWarehouse: Dp,
  VolWorkbin: Bp,
  VolWorkflow: Ip,
  WarehouseFolder: Up,
  WebFormConnectionVolume: xp,
  WebFormDatabaseConnection: zp,
  WebFormLookup: Wp,
  WebFormLookupVolume: qp,
  WebReports: Hp,
  WFMapLLNode: Gp,
  WFStatusNode: Jp,
  WIKI: Qp,
  WIKIPAGE: Xp,
  Workbench: Zp,
  WorkflowAttachments: Yp,
  XMLActivatorCon: em,
  XMLActivatorProd: tm
};
class sm extends H {
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
        type: we.Document,
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
    return this.addItem(we.Folder, t, s, r);
  }
  addGeneration(t, s, r, o, i = {}) {
    return this.addItem(we.Generation, t, s, {
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
class rm extends H {
  start(t) {
    return this.draftprocesses(t).then((s) => g(s, "data.results.draftprocess_id")).then((s) => this.draftprocesses_update(s));
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
class om extends H {
  scriptNode(t, s = {}) {
    return this.session.get(`api/v1/rhcore/${t}`, {
      params: s
    });
  }
}
class nm extends H {
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
class im extends H {
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
class am extends H {
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
class lm extends H {
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
class um extends Error {
  code;
  data;
  constructor(t = at.INTERNALERROR.message, s = null, r = at.INTERNALERROR.code) {
    if (Ja(t)) {
      const o = t;
      super(o.message), this.code = o.code, this.data = o.data;
    } else
      super(t), this.code = r, this.data = s;
  }
}
const ae = {
  index: 0,
  get next() {
    return this.index = this.index + 1, this.index;
  }
};
class cm {
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
      throw new um(s.message, s.data, s.code);
    } else
      throw Error("The server did not respond correctly.");
  }
  // https://www.jsonrpc.org/specification#request_object
  // params is allowed to be null!
  // also on queue function below
  async request(t, s, r = ae.next) {
    const o = await this.session.postBody(this.relativePath, {
      rpc: this.requestObject(t, s, r)
    });
    return this.handleResponse(o.data);
  }
  resetQueue() {
    this._batchQueue = [];
  }
  queue(t, s, r = ae.next) {
    return this._batchQueue.push(this.requestObject(t, s, r)), this;
  }
  async batch(t = !1) {
    const s = this._batchQueue;
    this.resetQueue();
    const r = await this.session.postBody(this.relativePath, {
      rpc: s
    });
    return g(r, "data.data", []).map((o) => {
      if (t)
        return this.handleResponse(o);
      try {
        return this.handleResponse(o);
      } catch (i) {
        return i;
      }
    });
  }
  rhnode(t, s, r = [], o = ae.next) {
    const i = {
      dataid: t,
      args: r
    };
    return this.request(s, i, o);
  }
  rhnodeQueue(t, s, r = [], o = ae.next) {
    const i = {
      dataid: t,
      args: r
    };
    return this.queue(s, i, o);
  }
}
class dm {
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
    this.axios = Ol(t);
  }
  get nodes() {
    return this._nodes == null && (this._nodes = new sm(this)), this._nodes;
  }
  get auth() {
    return this._auth == null && (this._auth = new Cl(this)), this._auth;
  }
  get workflow() {
    return this._workflow == null && (this._workflow = new rm(this)), this._workflow;
  }
  get rhcore() {
    return this._rhcore == null && (this._rhcore = new om(this)), this._rhcore;
  }
  get members() {
    return this._members == null && (this._members = new im(this)), this._members;
  }
  get search() {
    return this._search == null && (this._search = new nm(this)), this._search;
  }
  get webreports() {
    return this._webreports == null && (this._webreports = new lm(this)), this._webreports;
  }
  get versions() {
    return this._versions == null && (this._versions = new am(this)), this._versions;
  }
  get dataTypesEnum() {
    return Tl;
  }
  rpcClient(t = "/api/v1/rh/rpc/rhnode/") {
    return new cm(this, t);
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
      o && o.name && o.file ? s.append(r, o.file, o.name) : Array.isArray(o) || this._isObject(o) || this._isBoolean(o) ? s.append(r, JSON.stringify(o)) : Ga(o) || s.append(r, o);
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
const pm = /* @__PURE__ */ Object.assign({
  "./components/Card/KCard.vue": Gt,
  "./components/Card/KCardActions.vue": Yt,
  "./components/Card/KCardText.vue": os,
  "./components/Card/KCardTitle.vue": us,
  "./components/KAdminLink.vue": hs,
  "./components/KAlert.vue": Ss,
  "./components/KApp.vue": Os,
  "./components/KAutocomplete.vue": js,
  "./components/KBrowseLink.vue": zs,
  "./components/KButton.vue": Js,
  "./components/KConfirm.vue": tr,
  "./components/KDateTimePicker.vue": ar,
  "./components/KDialog.vue": dr,
  "./components/KDot.vue": hr,
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
  "./components/KSelect.vue": fn,
  "./components/KSnackbar.vue": Tn,
  "./components/KSortHeader.vue": Vn,
  "./components/KSpacer.vue": Mn,
  "./components/KSpinner.vue": In,
  "./components/KSwitch.vue": qn,
  "./components/KTable.vue": Qn,
  "./components/KTextArea.vue": ti,
  "./components/KTextField.vue": ii,
  "./components/KUserGIF.vue": di,
  "./components/KUserLink.vue": yi,
  "./components/KUserPicker.vue": Si,
  "./components/Tabs/KTabItem.vue": Oi,
  "./components/Tabs/KTabs.vue": ji
}), Sm = {
  install(e, t) {
    Object.entries(pm).forEach(
      ([o, i]) => {
        const n = o?.split("/")?.pop()?.replace(/\.\w+$/, "");
        e.component(n, i.default);
      }
    );
    const s = new dm(t), r = {
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
  Sm as default,
  W as injectStrict,
  Z as sessionKey,
  Qs as snackbarKey
};
