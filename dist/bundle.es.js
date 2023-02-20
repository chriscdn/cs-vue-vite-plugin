import { defineComponent as y, h as At, openBlock as u, createElementBlock as d, renderSlot as V, inject as Pe, Fragment as P, createElementVNode as f, createBlock as C, Transition as re, withCtx as w, normalizeStyle as G, createCommentVNode as v, resolveComponent as T, createVNode as R, resolveDirective as lt, withDirectives as z, normalizeClass as N, withKeys as te, withModifiers as x, vModelText as Ve, renderList as M, createTextVNode as L, toDisplayString as k, mergeProps as ut, vModelDynamic as Dt, Teleport as Kt, setBlockTracking as Ue, TransitionGroup as Fe, vModelRadio as Bt, vModelSelect as It, useCssVars as ct } from "vue";
import { directive as dt } from "vue3-click-away";
import _ from "lodash.get";
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
}, me = y({
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
}), Ht = y({
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
}, Symbol.toStringTag, { value: "Module" })), Jt = y({});
const g = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [r, o] of t)
    s[r] = o;
  return s;
}, Qt = { class: "k-card-actions" };
function Xt(e, t, s, r, o, i) {
  return u(), d("div", Qt, [
    V(e.$slots, "default")
  ]);
}
const Zt = /* @__PURE__ */ g(Jt, [["render", Xt]]), Yt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zt
}, Symbol.toStringTag, { value: "Module" })), es = y({});
const ts = { class: "k-card-text" };
function ss(e, t, s, r, o, i) {
  return u(), d("div", ts, [
    V(e.$slots, "default")
  ]);
}
const rs = /* @__PURE__ */ g(es, [["render", ss]]), os = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: rs
}, Symbol.toStringTag, { value: "Module" })), ns = y({});
const is = { class: "k-card-title" };
function as(e, t, s, r, o, i) {
  return u(), d("div", is, [
    V(e.$slots, "default")
  ]);
}
const ls = /* @__PURE__ */ g(ns, [["render", as]]), us = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ls
}, Symbol.toStringTag, { value: "Module" })), cs = y({
  setup() {
    return { config: Pe("config", {}) };
  }
}), ds = /* @__PURE__ */ f("hr", null, null, -1), ps = ["href"];
function ms(e, t, s, r, o, i) {
  return u(), d(P, null, [
    ds,
    f("a", {
      href: `${e.config.baseURL}?func=admin.index`
    }, "Admin Home", 8, ps)
  ], 64);
}
const fs = /* @__PURE__ */ g(cs, [["render", ms]]), hs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fs
}, Symbol.toStringTag, { value: "Module" })), _s = y({
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
}), ys = y({
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
  return u(), C(re, { name: "fade" }, {
    default: w(() => [
      e.visibleLocal ? (u(), d("div", {
        key: 0,
        class: "flex items-center rounded text-main-bright p-2",
        style: G([e.colorableBackgroundStyle])
      }, [
        f("div", bs, [
          V(e.$slots, "default")
        ]),
        f("button", {
          class: "flex-grow-0",
          onClick: t[0] || (t[0] = (...n) => e.dismiss && e.dismiss(...n))
        })
      ], 4)) : v("", !0)
    ]),
    _: 3
  });
}
const vs = /* @__PURE__ */ g(ys, [["render", gs]]), Ss = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vs
}, Symbol.toStringTag, { value: "Module" }));
const ws = {}, $s = { class: "k-app" };
function Ts(e, t) {
  const s = T("KSnackbar"), r = T("KConfirm");
  return u(), d("div", $s, [
    R(r, null, {
      default: w(() => [
        R(s, null, {
          default: w(() => [
            V(e.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    })
  ]);
}
const ks = /* @__PURE__ */ g(ws, [["render", Ts]]), Os = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ks
}, Symbol.toStringTag, { value: "Module" })), Cs = y({
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
        e ? this.returnObject ? this.$emit("update:modelValue", e) : this.$emit("update:modelValue", _(e, this.itemValue, e)) : this.$emit("update:modelValue", null);
      },
      get() {
        return this.isObject(this.modelValue) ? this.modelValue : this.items.find(
          (e) => _(e, this.itemValue, e) == this.modelValue
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
        this.isObject(this.localValue) ? _(this.localValue, this.itemText, "") : this.localValue
      )));
    },
    value: {
      handler(e) {
        this.inputText = _(this.localValue, this.itemText, e);
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
      this.combobox ? t && (this.localValue = t) : (this.localValue = t, this.inputText = _(
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
const Rs = { class: "k-autocomplete-input" }, Ps = ["placeholder", "readonly"], Vs = {
  key: 0,
  class: "k-autocomplete-items"
}, Fs = ["onClick"];
function Es(e, t, s, r, o, i) {
  const n = lt("click-away");
  return z((u(), d("div", {
    class: "k-autocomplete",
    style: G([e.style])
  }, [
    V(e.$slots, "prepend", { item: e.localValue }),
    f("div", Rs, [
      z(f("input", {
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = (a) => e.inputText = a),
        class: N(["k-input", { invalidSelection: !e.isValidSelection }]),
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
      }, null, 42, Ps), [
        [Ve, e.inputText]
      ]),
      e.focus && e.items.length && e.inputText ? (u(), d("div", Vs, [
        (u(!0), d(P, null, M(e.itemsFiltered, (a, p) => (u(), d("div", {
          key: p,
          class: N(["k-autocomplete-item", { "k-autocomplete-active": e.currentFocus == p }]),
          onClick: (c) => e.select(p)
        }, [
          V(e.$slots, "item", { item: a }, () => [
            L(k(a), 1)
          ])
        ], 10, Fs))), 128))
      ])) : v("", !0)
    ])
  ], 4)), [
    [n, e.setBlur]
  ]);
}
const Ls = /* @__PURE__ */ g(Cs, [["render", Es]]), js = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ls
}, Symbol.toStringTag, { value: "Module" })), ze = new Ee();
class Ns {
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
const Ms = new Ns(), As = y({
  setup() {
    return { session: Pe("session", {}) };
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
        e && (this.nodeRecLocal = await Ms.lookup(this.session, e));
      },
      immediate: !0
    }
  }
}), Ds = { key: 0 }, Ks = ["src"], Bs = ["href"], Is = ["innerHTML"];
function Us(e, t, s, r, o, i) {
  const n = T("KFunctionMenu");
  return e.nodeRecResolved ? (u(), d("span", Ds, [
    e.image ? (u(), d("img", {
      key: 0,
      src: e.nodeRecResolved.gif
    }, null, 8, Ks)) : v("", !0),
    L(" "),
    f("a", {
      href: e.nodeRecResolved.url
    }, k(e.nodeRecResolved.name), 9, Bs),
    e.clickable ? (u(), C(n, {
      key: 1,
      dataid: e.nodeRecResolved.dataid
    }, null, 8, ["dataid"])) : v("", !0),
    f("span", {
      innerHTML: e.nodeRecResolved.modifiedImageCallback
    }, null, 8, Is)
  ])) : v("", !0);
}
const xs = /* @__PURE__ */ g(As, [["render", Us]]), zs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xs
}, Symbol.toStringTag, { value: "Module" })), Ws = y({
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
  return u(), d("button", ut({
    class: ["k-button", e.classObj],
    disabled: e.disabled,
    type: "button"
  }, e.$attrs, {
    onClick: t[0] || (t[0] = (n) => e.$emit("click"))
  }), [
    V(e.$slots, "default")
  ], 16, qs);
}
const Gs = /* @__PURE__ */ g(Ws, [["render", Hs]]), Js = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Gs
}, Symbol.toStringTag, { value: "Module" }));
function W(e, t) {
  const s = Pe(e, t);
  if (!s)
    throw new Error(`Could not resolve ${e.description}`);
  return s;
}
const Z = Symbol("session"), fe = Symbol("config"), Qs = Symbol("snackbar"), Xs = Symbol("confirmDialogKey"), Zs = y({
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
  const n = T("KCardTitle"), a = T("KCardText"), p = T("KSpacer"), c = T("KButton"), m = T("KCardActions"), b = T("KCard"), F = T("KDialog");
  return u(), d(P, null, [
    V(e.$slots, "default"),
    R(F, {
      modelValue: e.dialog,
      "onUpdate:modelValue": t[2] || (t[2] = (O) => e.dialog = O),
      "max-width": "30vw",
      "min-width": "20vw"
    }, {
      default: w(() => [
        R(b, null, {
          default: w(() => [
            e.title ? (u(), C(n, { key: 0 }, {
              default: w(() => [
                L(k(e.title), 1)
              ]),
              _: 1
            })) : v("", !0),
            e.message ? (u(), C(a, { key: 1 }, {
              default: w(() => [
                L(k(e.message), 1)
              ]),
              _: 1
            })) : v("", !0),
            R(m, null, {
              default: w(() => [
                R(p),
                e.noLabel ? (u(), C(c, {
                  key: 0,
                  small: "",
                  onClick: t[0] || (t[0] = (O) => e.dismiss(!1))
                }, {
                  default: w(() => [
                    L(k(e.noLabel), 1)
                  ]),
                  _: 1
                })) : v("", !0),
                e.yesLabel ? (u(), C(c, {
                  key: 1,
                  small: "",
                  onClick: t[1] || (t[1] = (O) => e.dismiss(!0))
                }, {
                  default: w(() => [
                    L(k(e.yesLabel), 1)
                  ]),
                  _: 1
                })) : v("", !0)
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
const er = /* @__PURE__ */ g(Zs, [["render", Ys]]), tr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: er
}, Symbol.toStringTag, { value: "Module" })), sr = y({
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
  const n = T("KButton");
  return u(), d("div", rr, [
    z(f("input", {
      "onUpdate:modelValue": t[0] || (t[0] = (a) => e.localModelValue = a),
      class: "k-input",
      type: e.type,
      readonly: !e.editable
    }, null, 8, or), [
      [Dt, e.localModelValue]
    ]),
    e.editable ? (u(), d(P, { key: 0 }, [
      R(n, {
        small: "",
        onClick: e.setToNow
      }, {
        default: w(() => [
          L(" Now ")
        ]),
        _: 1
      }, 8, ["onClick"]),
      R(n, {
        small: "",
        onClick: t[1] || (t[1] = (a) => e.$emit("update:modelValue", null))
      }, {
        default: w(() => [
          L(" Clear ")
        ]),
        _: 1
      })
    ], 64)) : v("", !0)
  ]);
}
const ir = /* @__PURE__ */ g(sr, [["render", nr]]), ar = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ir
}, Symbol.toStringTag, { value: "Module" })), lr = y({
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
  return u(), d(P, null, [
    V(e.$slots, "activator", { on: e.on }),
    e.mounted ? (u(), C(Kt, {
      key: 0,
      to: ".k-app"
    }, [
      R(re, { name: "fade" }, {
        default: w(() => [
          e.dialog ? (u(), d("div", {
            key: 0,
            class: "k-dialog",
            style: G([e.style])
          }, [
            z((u(), d("div", {
              ref: "content",
              class: N(["k-dialog-content", e.classObj]),
              style: G([e.measurableStyles])
            }, [
              V(e.$slots, "default", { on: e.on })
            ], 6)), [
              [n, e.clickAway]
            ])
          ], 4)) : v("", !0)
        ]),
        _: 3
      })
    ])) : v("", !0)
  ], 64);
}
const cr = /* @__PURE__ */ g(lr, [["render", ur]]), dr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cr
}, Symbol.toStringTag, { value: "Module" })), pr = y({
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
  return u(), d("div", {
    class: "k-dot",
    style: G([e.style])
  }, [
    V(e.$slots, "default")
  ], 4);
}
const fr = /* @__PURE__ */ g(pr, [["render", mr]]), hr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fr
}, Symbol.toStringTag, { value: "Module" })), J = y({
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
  return u(), d("div", null, [
    e.label ? (u(), d("div", yr, k(e.label), 1)) : v("", !0),
    V(e.$slots, "default"),
    (u(!0), d(P, null, M(e.successMessages, (n, a) => (u(), d("div", {
      key: a,
      class: "k-formfield--success"
    }, k(n), 1))), 128)),
    (u(!0), d(P, null, M(e.errorMessages, (n, a) => (u(), d("div", {
      key: a,
      class: "k-formfield--error"
    }, k(n), 1))), 128))
  ]);
}
const gr = /* @__PURE__ */ g(_r, [["render", br]]), vr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: gr,
  mixin: J
}, Symbol.toStringTag, { value: "Module" })), Sr = y({
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
}), wr = { key: 0 }, $r = ["id"], Tr = ["src"], kr = ["id", "src"];
function Or(e, t, s, r, o, i) {
  return e.dataid ? (u(), d("span", wr, [
    f("a", {
      id: e.aid,
      href: "#",
      class: "functionMenuHotspot",
      onClick: t[2] || (t[2] = x((...n) => e.onclick && e.onclick(...n), ["prevent"]))
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
      }, null, 40, kr))
    ], 8, $r),
    t[3] || (Ue(-1), t[3] = f("div", {
      id: e.zid,
      ref: "functionMenuDiv",
      class: "functionMenuDiv"
    }, null, 8, ["id"]), Ue(1), t[3])
  ])) : v("", !0);
}
const Cr = /* @__PURE__ */ g(Sr, [["render", Or]]), Rr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Cr
}, Symbol.toStringTag, { value: "Module" })), Pr = y({});
const Vr = { class: "k-progress-line" };
function Fr(e, t, s, r, o, i) {
  return u(), d("div", Vr);
}
const Er = /* @__PURE__ */ g(Pr, [["render", Fr]]), Lr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Er
}, Symbol.toStringTag, { value: "Module" })), jr = y({
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
const Nr = { class: "k-multi-widget" }, Mr = { class: "k-multi-buttons" }, Ar = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ f("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z" })
], -1), Dr = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ f("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" })
], -1);
function Kr(e, t, s, r, o, i) {
  const n = T("KButton"), a = T("KCard");
  return u(), C(a, { class: "k-multi" }, {
    default: w(() => [
      R(Fe, {
        name: "fade",
        tag: "div"
      }, {
        default: w(() => [
          (u(!0), d(P, null, M(e.valueLocal, (p, c) => (u(), d("div", {
            key: `k-multi-${p}`,
            class: "k-multi-item"
          }, [
            f("div", Nr, [
              V(e.$slots, "default", {
                index: c,
                value: p,
                update: (m) => e.update(c, m)
              })
            ]),
            f("div", Mr, [
              e.canRemove ? (u(), C(n, {
                key: 0,
                text: "",
                onClick: (m) => e.remove(c)
              }, {
                default: w(() => [
                  Ar
                ]),
                _: 2
              }, 1032, ["onClick"])) : v("", !0),
              e.canAdd ? (u(), C(n, {
                key: 1,
                text: "",
                onClick: (m) => e.add(c)
              }, {
                default: w(() => [
                  Dr
                ]),
                _: 2
              }, 1032, ["onClick"])) : v("", !0)
            ])
          ]))), 128))
        ]),
        _: 3
      })
    ]),
    _: 3
  });
}
const Br = /* @__PURE__ */ g(jr, [["render", Kr]]), Ir = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Br
}, Symbol.toStringTag, { value: "Module" })), Ur = y({
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
  const n = T("KButton"), a = T("KCard");
  return u(), C(a, { class: "k-multi" }, {
    default: w(() => [
      R(Fe, {
        name: "fade",
        tag: "div"
      }, {
        default: w(() => [
          (u(!0), d(P, null, M(e.valueLocal, (p, c) => (u(), d("div", {
            key: `k-multi-${p}`,
            class: "k-multi-item"
          }, [
            f("div", xr, [
              V(e.$slots, "readonly", {
                index: c,
                value: p
              }, () => [
                L(k(p), 1)
              ])
            ]),
            f("div", zr, [
              R(n, {
                text: "",
                onClick: (m) => e.remove(c)
              }, {
                default: w(() => [
                  Wr
                ]),
                _: 2
              }, 1032, ["onClick"])
            ])
          ]))), 128))
        ]),
        _: 3
      }),
      e.canAdd ? V(e.$slots, "add", {
        key: 0,
        add: e.add
      }) : v("", !0)
    ]),
    _: 3
  });
}
const Hr = /* @__PURE__ */ g(Ur, [["render", qr]]), Gr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Hr
}, Symbol.toStringTag, { value: "Module" })), We = new Ee();
class Jr {
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
        this.nodes[s] = _(r, "data.ancestors", []);
      }
      return this.nodes[s];
    } finally {
      We.release(s);
    }
  }
}
const pt = new Jr(), Qr = y({
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
const Xr = { class: "k-node-breadcrumb" };
function Zr(e, t, s, r, o, i) {
  return u(), d("div", Xr, [
    (u(!0), d(P, null, M(e.breadcrumb, (n, a) => (u(), d(P, {
      key: n.dataid
    }, [
      L(k(n.name) + " ", 1),
      a < e.breadcrumb.length - 1 ? (u(), d(P, { key: 0 }, [
        L(" ▶ ")
      ], 64)) : v("", !0)
    ], 64))), 128))
  ]);
}
const mt = /* @__PURE__ */ g(Qr, [["render", Zr]]), Yr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mt
}, Symbol.toStringTag, { value: "Module" })), eo = y({
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
      return zt(this.config.baseURL, {
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
const to = { class: "k-node-picker-field" }, so = ["value"];
function ro(e, t, s, r, o, i) {
  const n = T("KButton"), a = T("KNodeAncestor");
  return u(), d("div", to, [
    f("input", {
      ref: "input",
      type: "text",
      class: "k-input",
      value: e.name,
      onFocus: t[0] || (t[0] = (...p) => e.openWindow && e.openWindow(...p))
    }, null, 40, so),
    R(n, {
      small: "",
      onClick: e.openWindow
    }, {
      default: w(() => [
        L(k(e.browseButtonLabel), 1)
      ]),
      _: 1
    }, 8, ["onClick"]),
    e.clearable ? (u(), C(n, {
      key: 0,
      small: "",
      onClick: e.clear
    }, {
      default: w(() => [
        L(k(e.clearButtonLabel), 1)
      ]),
      _: 1
    }, 8, ["onClick"])) : v("", !0),
    e.dataid ? (u(), C(a, {
      key: 1,
      dataid: e.dataid
    }, null, 8, ["dataid"])) : v("", !0)
  ]);
}
const oo = /* @__PURE__ */ g(eo, [["render", ro]]), no = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: oo
}, Symbol.toStringTag, { value: "Module" })), io = y({
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
const ao = { class: "k-one-moment" }, lo = { class: "k-one-moment-label" };
function uo(e, t, s, r, o, i) {
  const n = T("KSpinner"), a = T("KDialog");
  return u(), C(a, { "model-value": e.loading }, {
    default: w(() => [
      f("div", ao, [
        R(n, {
          height: 36,
          width: 36
        }),
        f("div", lo, k(e.label), 1)
      ])
    ]),
    _: 1
  }, 8, ["model-value"]);
}
const co = /* @__PURE__ */ g(io, [["render", uo]]), po = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: co
}, Symbol.toStringTag, { value: "Module" })), mo = y({
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
function fo(e, t, s, r, o, i) {
  return u(), d("div", null, [
    V(e.$slots, "default", { active: e.active })
  ]);
}
const ho = /* @__PURE__ */ g(mo, [["render", fo]]), _o = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ho
}, Symbol.toStringTag, { value: "Module" })), yo = y({
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
const bo = { key: 0 }, go = { class: "rhmuted" };
function vo(e, t, s, r, o, i) {
  return u(), d("h1", null, [
    L(k(e.title), 1),
    e.subtitle ? (u(), d("span", bo, [
      L(": "),
      f("span", go, k(e.subtitle) + " - 2", 1)
    ])) : v("", !0)
  ]);
}
const So = /* @__PURE__ */ g(yo, [["render", vo], ["__scopeId", "data-v-8d8d8837"]]), wo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: So
}, Symbol.toStringTag, { value: "Module" })), $o = y({
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
      return _(this.pagination, "pageRange", []);
    },
    pageSizes() {
      return _(this.pagination, "pageSizes", []);
    },
    pageNumber() {
      return _(this.pagination, "pageNumber", 0);
    },
    pageSize: {
      get() {
        return _(this.pagination, "pageSize", 0);
      },
      set(e) {
        this.$emit("update:pageSize", e);
      }
    },
    hasPrevious() {
      return _(this.pagination, "hasPrevious", !1);
    },
    hasNext() {
      return _(this.pagination, "hasNext", !1);
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
const To = {
  key: 0,
  class: "k-pagination"
}, ko = { class: "k-pagination-buttons" }, Oo = {
  key: 0,
  class: "k-pagination-button"
}, Co = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ f("path", { d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" })
], -1), Ro = [
  Co
], Po = { key: 0 }, Vo = ["onClick"], Fo = {
  key: 1,
  class: "k-pagination-button"
}, Eo = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ f("path", { d: "M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" })
], -1), Lo = [
  Eo
];
function jo(e, t, s, r, o, i) {
  const n = T("KSelect");
  return e.pagination.hasOtherPages ? (u(), d("div", To, [
    R(n, {
      modelValue: e.pageSize,
      "onUpdate:modelValue": t[0] || (t[0] = (a) => e.pageSize = a),
      items: e.pageSizes,
      label: "Page Size"
    }, null, 8, ["modelValue", "items"]),
    f("div", ko, [
      e.hasPrevious ? (u(), d("a", Oo, Ro)) : v("", !0),
      (u(!0), d(P, null, M(e.pageRange, (a) => (u(), d(P, { key: a }, [
        a === "|" ? (u(), d("div", Po, "...")) : (u(), d("a", {
          key: 1,
          class: N(["k-pagination-button k-pagination-button-border", e.classObj(a)]),
          onClick: (p) => e.$emit("update:modelValue", a)
        }, k(a), 11, Vo))
      ], 64))), 128)),
      e.hasNext ? (u(), d("a", Fo, Lo)) : v("", !0)
    ]),
    f("div", null, " Displaying " + k(e.pagination.startIndex) + "-" + k(e.pagination.endIndex) + " of " + k(e.pagination.count) + " items. ", 1)
  ])) : v("", !0);
}
const No = /* @__PURE__ */ g($o, [["render", jo]]), Mo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: No
}, Symbol.toStringTag, { value: "Module" })), Ao = y({
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
      return _(this.pagination, "offset", 0);
    },
    limit() {
      return _(this.pagination, "limit", 0);
    },
    count() {
      return _(this.pagination, "count", 0);
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
const Do = { class: "k-pagination2" }, Ko = { class: "k-pagination2-buttons" }, Bo = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ f("path", { d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" })
], -1), Io = [
  Bo
], Uo = ["onClick"], xo = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ f("path", { d: "M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" })
], -1), zo = [
  xo
];
function Wo(e, t, s, r, o, i) {
  const n = T("KSelect");
  return u(), d("div", Do, [
    f("div", null, [
      R(n, {
        modelValue: e.pageSize,
        "onUpdate:modelValue": t[0] || (t[0] = (a) => e.pageSize = a),
        items: e.pageSizes,
        label: "Page Size"
      }, null, 8, ["modelValue", "items"])
    ]),
    e.pageCount > 1 ? (u(), d(P, { key: 0 }, [
      f("div", Ko, [
        e.hasPrevious ? (u(), d("a", {
          key: 0,
          class: "k-pagination2-arrow-button",
          onClick: t[1] || (t[1] = (a) => e.clickedPageNumber(e.pageNumber0 - 1))
        }, Io)) : v("", !0),
        (u(!0), d(P, null, M(e.pageRange0, (a) => (u(), d("div", {
          key: a,
          class: N(["k-pagination2-button", e.classObj(a)]),
          onClick: (p) => e.clickedPageNumber(a)
        }, k(a + 1), 11, Uo))), 128)),
        e.hasNext ? (u(), d("a", {
          key: 1,
          class: "k-pagination2-arrow-button",
          onClick: t[2] || (t[2] = (a) => e.clickedPageNumber(e.pageNumber0 + 1))
        }, zo)) : v("", !0)
      ]),
      f("div", null, k(e.pageNumber) + " of " + k(e.pageCount) + " pages", 1)
    ], 64)) : v("", !0)
  ]);
}
const qo = /* @__PURE__ */ g(Ao, [["render", Wo]]), Ho = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qo
}, Symbol.toStringTag, { value: "Module" })), Go = y({
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
      return this.isObject(e) ? _(e, this.itemText) : e;
    },
    getItemValue(e) {
      return this.isObject(e) ? _(e, this.itemValue) : e;
    },
    getItemDisabled(e) {
      return this.isObject(e) ? _(e, "disabled", !1) : !1;
    }
  }
});
const Jo = ["id", "value", "disabled"], Qo = ["for"];
function Xo(e, t, s, r, o, i) {
  const n = T("KSpinner"), a = T("KFormFieldWrapper");
  return u(), d("div", null, [
    R(a, {
      label: e.label,
      "success-messages": e.successMessages,
      "error-messages": e.errorMessages
    }, {
      default: w(() => [
        R(re, {
          name: "fade",
          mode: "out-in"
        }, {
          default: w(() => [
            e.loading ? (u(), C(n, { key: 0 })) : (u(), d("div", {
              key: 1,
              class: N(["k-radiogroup", e.classObj])
            }, [
              (u(!0), d(P, null, M(e.items, (p) => (u(), d("div", {
                key: e.getItemValue(p),
                class: "k-radiogroup-item"
              }, [
                z(f("input", {
                  id: e.getItemValue(p),
                  "onUpdate:modelValue": t[0] || (t[0] = (c) => e.localValue = c),
                  type: "radio",
                  value: e.getItemValue(p),
                  disabled: e.getItemDisabled(p)
                }, null, 8, Jo), [
                  [Bt, e.localValue]
                ]),
                f("label", {
                  for: e.getItemValue(p)
                }, k(e.getItemText(p)), 9, Qo)
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
const Zo = /* @__PURE__ */ g(Go, [["render", Xo]]), Yo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zo
}, Symbol.toStringTag, { value: "Module" })), en = y({
  inject: ["ksnackbar"],
  methods: {
    click() {
    }
  }
});
function tn(e, t, s, r, o, i) {
  return u(), d("div", null, [
    f("button", {
      onClick: t[0] || (t[0] = (...n) => e.click && e.click(...n))
    }, "click")
  ]);
}
const sn = /* @__PURE__ */ g(en, [["render", tn]]), rn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: sn
}, Symbol.toStringTag, { value: "Module" })), on = y({
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
      return this.isObject(e) ? _(e, this.itemText) : e;
    },
    getItemValue(e) {
      return this.isObject(e) ? _(e, this.itemValue) : e;
    },
    arrify(e) {
      return Array.isArray(e) ? e : [e];
    }
  }
});
const nn = { class: "k-select" }, an = ["value"];
function ln(e, t, s, r, o, i) {
  const n = T("KSpinner"), a = T("KFormFieldWrapper");
  return u(), C(a, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: w(() => [
      f("div", nn, [
        z(f("select", {
          "onUpdate:modelValue": t[0] || (t[0] = (p) => e.localValue = p),
          class: N(e.classObj)
        }, [
          (u(!0), d(P, null, M(e.items, (p) => (u(), d("option", {
            key: e.getItemValue(p),
            value: e.getItemValue(p)
          }, k(e.getItemText(p)), 9, an))), 128))
        ], 2), [
          [It, e.localValue]
        ]),
        R(re, { name: "fade" }, {
          default: w(() => [
            e.loading ? (u(), C(n, {
              key: 0,
              class: "k-select--spinner"
            })) : v("", !0)
          ]),
          _: 1
        })
      ])
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const un = /* @__PURE__ */ g(on, [["render", ln]]), cn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: un
}, Symbol.toStringTag, { value: "Module" })), dn = y({
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
const pn = { class: "k-snackbar" }, mn = { class: "k-snackbar-item-message" }, fn = {
  key: 0,
  class: "k-snackbar-title"
}, hn = {
  key: 1,
  class: "k-snackbar-text"
}, _n = {
  key: 0,
  class: "k-snackbar-action"
}, yn = ["onClick"];
function bn(e, t, s, r, o, i) {
  return u(), d(P, null, [
    V(e.$slots, "default"),
    f("div", pn, [
      R(Fe, {
        name: "slide",
        tag: "div",
        mode: "out-in"
      }, {
        default: w(() => [
          (u(!0), d(P, null, M(e.items, (n) => (u(), d("div", {
            key: n.index,
            class: N(["k-snackbar-item", e.classObj(n)])
          }, [
            f("div", mn, [
              n.title ? (u(), d("div", fn, k(n.title), 1)) : v("", !0),
              n.message ? (u(), d("div", hn, k(n.message), 1)) : v("", !0)
            ]),
            n.action ? (u(), d("div", _n, [
              f("a", {
                href: "#",
                onClick: x((a) => e.action(n), ["prevent"])
              }, k(n.actionLabel), 9, yn)
            ])) : v("", !0)
          ], 2))), 128))
        ]),
        _: 1
      })
    ])
  ], 64);
}
const gn = /* @__PURE__ */ g(dn, [["render", bn]]), vn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: gn
}, Symbol.toStringTag, { value: "Module" })), Sn = y({
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
const wn = {
  key: 0,
  class: "j-sort-header-arrow"
}, $n = {
  key: 1,
  class: "j-sort-header-arrow"
};
function Tn(e, t, s, r, o, i) {
  return u(), d("a", {
    href: "#",
    onClick: t[0] || (t[0] = x((...n) => e.emitClick && e.emitClick(...n), ["prevent"]))
  }, [
    V(e.$slots, "default"),
    R(re, {
      name: "fade",
      mode: "out-in"
    }, {
      default: w(() => [
        e.isActive && e.sortAsc ? (u(), d("span", wn, "↓")) : e.isActive ? (u(), d("span", $n, "↑")) : v("", !0)
      ]),
      _: 1
    })
  ]);
}
const kn = /* @__PURE__ */ g(Sn, [["render", Tn]]), On = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: kn
}, Symbol.toStringTag, { value: "Module" }));
const Cn = {}, Rn = { class: "k-spacer" };
function Pn(e, t) {
  return u(), d("div", Rn);
}
const Vn = /* @__PURE__ */ g(Cn, [["render", Pn]]), Fn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Vn
}, Symbol.toStringTag, { value: "Module" })), Le = y({
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
const En = /* @__PURE__ */ f("circle", {
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), Ln = /* @__PURE__ */ f("path", {
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), jn = [
  En,
  Ln
];
function Nn(e, t, s, r, o, i) {
  return u(), d("svg", {
    style: G(e.measurableStyles),
    class: "k-spinner",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, jn, 4);
}
const Mn = /* @__PURE__ */ g(Le, [["render", Nn]]), An = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Mn
}, Symbol.toStringTag, { value: "Module" })), je = y({
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
const Dn = /* @__PURE__ */ f("span", { class: "k-switch-slider" }, null, -1), Kn = [
  Dn
];
function Bn(e, t, s, r, o, i) {
  return u(), d("div", {
    class: N(["k-switch", e.classObj]),
    onClick: t[0] || (t[0] = (n) => e.on = !e.on)
  }, Kn, 2);
}
const In = /* @__PURE__ */ g(je, [["render", Bn]]), Un = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: In
}, Symbol.toStringTag, { value: "Module" })), xn = y({
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
function zn(e, t, s, r, o, i) {
  const n = T("KLinearProgressIndicator");
  return u(), d(P, null, [
    e.loading ? (u(), C(n, { key: 0 })) : v("", !0),
    f("table", {
      class: N(["k-table", e.classObj])
    }, [
      V(e.$slots, "default")
    ], 2)
  ], 64);
}
const Wn = /* @__PURE__ */ g(xn, [["render", zn]]), qn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wn
}, Symbol.toStringTag, { value: "Module" })), Hn = y({
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
const Gn = ["rows"];
function Jn(e, t, s, r, o, i) {
  const n = T("KFormFieldWrapper");
  return u(), C(n, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: w(() => [
      z(f("textarea", ut({
        "onUpdate:modelValue": t[0] || (t[0] = (a) => e.valueLocal = a)
      }, e.$attrs, {
        spellcheck: "false",
        class: [e.classObj, "k-textarea"],
        rows: e.rows,
        onKeydown: t[1] || (t[1] = te(x((...a) => e.tabber && e.tabber(...a), ["prevent"]), ["tab"]))
      }), null, 16, Gn), [
        [Ve, e.valueLocal]
      ])
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const Qn = /* @__PURE__ */ g(Hn, [["render", Jn]]), Xn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qn
}, Symbol.toStringTag, { value: "Module" })), Zn = y({
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
const Yn = ["placeholder"];
function ei(e, t, s, r, o, i) {
  const n = T("KFormFieldWrapper");
  return u(), C(n, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: w(() => [
      z(f("input", {
        "onUpdate:modelValue": t[0] || (t[0] = (a) => e.value = a),
        class: N(["k-input-text-field", e.classObj]),
        placeholder: e.placeholder
      }, null, 10, Yn), [
        [Ve, e.value]
      ])
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const ti = /* @__PURE__ */ g(Zn, [["render", ei]]), si = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ti
}, Symbol.toStringTag, { value: "Module" })), ri = y({
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
      return _(this.userRec, "type", this.type);
    },
    url() {
      return this.userType === this.session.members.USER ? `${this.config.img}guy.gif` : this.userType === this.session.members.GROUP ? `${this.config.img}2-guys.gif` : this.userType > 0 ? `${this.config.img}projectgroup.gif` : null;
    }
  }
}), oi = ["src"];
function ni(e, t, s, r, o, i) {
  return e.url ? (u(), d("img", {
    key: 0,
    src: e.url,
    style: G([e.measurableStyles])
  }, null, 12, oi)) : v("", !0);
}
const ii = /* @__PURE__ */ g(ri, [["render", ni]]), ai = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ii
}, Symbol.toStringTag, { value: "Module" })), Qe = new Ee();
class li {
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
        const r = await t.members.member(s, "v1"), o = _(r, "data.data.id"), i = _(r, "data.data.type"), n = this.fullName(_(r, "data.data"));
        o && (this.users[s] = { type: i, text: n, value: o });
      }
      return this.users[s];
    } finally {
      Qe.release(s);
    }
  }
}
const Te = new li(), ui = y({
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
      return _(this.userRecLocal, "id") ?? _(this.userRecLocal, "userid");
    },
    userLocal() {
      return this.user ?? this.userid ?? this.userRec;
    },
    displayName() {
      return _(this.userRecLocal, "display_name") ?? _(this.userRecLocal, "displayname") ?? _(this.userRecLocal, "name");
    },
    type() {
      return _(this.userRecLocal, "type");
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
const ci = {
  key: 0,
  class: "k-user-link"
};
function di(e, t, s, r, o, i) {
  const n = T("KUserGIF");
  return e.userRecLocal ? (u(), d("span", ci, [
    e.gif ? (u(), C(n, {
      key: 0,
      "user-rec": e.userRecLocal
    }, null, 8, ["user-rec"])) : v("", !0),
    L("  "),
    f("a", {
      href: "#",
      onClick: t[0] || (t[0] = x((...a) => e.click && e.click(...a), ["prevent"]))
    }, k(e.displayName), 1)
  ])) : v("", !0);
}
const pi = /* @__PURE__ */ g(ui, [["render", di]]), mi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pi
}, Symbol.toStringTag, { value: "Module" })), fi = y({
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
    value: {
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
          text: _(s, "name_formatted"),
          value: _(s, "id"),
          type: _(s, "type")
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
function hi(e, t, s, r, o, i) {
  const n = T("KUserGIF"), a = T("KAutocomplete"), p = T("KUserLink"), c = T("KFormFieldWrapper");
  return u(), C(c, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: w(() => [
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
        prepend: w(({ item: m }) => [
          R(n, {
            type: m?.type
          }, null, 8, ["type"])
        ]),
        item: w(({ item: m }) => [
          R(n, {
            type: m.type
          }, null, 8, ["type"]),
          L(" " + k(m.text), 1)
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
const _i = /* @__PURE__ */ g(fi, [["render", hi]]), yi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _i
}, Symbol.toStringTag, { value: "Module" })), bi = y({
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
      return this.name == _(this.tabs, "selectedTab");
    }
  }
}), gi = { key: 0 };
function vi(e, t, s, r, o, i) {
  return e.isSelected ? (u(), d("div", gi, [
    V(e.$slots, "default")
  ])) : v("", !0);
}
const Si = /* @__PURE__ */ g(bi, [["render", vi]]), wi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Si
}, Symbol.toStringTag, { value: "Module" })), $i = y({
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
    // no types for VNode?
    tabs() {
      return this.$slots.default().filter((e) => Boolean(e.props));
    },
    tabNames() {
      return this.tabs.map((e) => e.props.name);
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
      return [this.selectedTab, e, t].find((s) => Boolean(s));
    },
    selectTab(e) {
      this.selectedTab = this.tabNames.includes(e) ? e : this.tabNames[0];
    },
    classObj(e) {
      return {
        "k-tabs-nav-tab": !0,
        "k-tabs-active": this.selectedTab == _(e, "props.name")
      };
    }
  }
});
const Ti = { class: "k-tabs" }, ki = { class: "k-tabs-nav" }, Oi = ["href", "onClick"], Ci = { class: "k-tabs-content" };
function Ri(e, t, s, r, o, i) {
  return u(), d("div", Ti, [
    f("div", ki, [
      (u(!0), d(P, null, M(e.tabs, (n) => (u(), d("div", {
        key: n.props.name,
        class: N(e.classObj(n))
      }, [
        f("a", {
          href: `#${n.props.name}`,
          onClick: (a) => e.selectTab(n.props.name)
        }, k(n.props.title), 9, Oi)
      ], 2))), 128))
    ]),
    f("div", Ci, [
      V(e.$slots, "default")
    ])
  ]);
}
const Pi = /* @__PURE__ */ g($i, [["render", Ri]]), Vi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pi
}, Symbol.toStringTag, { value: "Module" }));
function ft(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: ht } = Object.prototype, { getPrototypeOf: Ne } = Object, Me = ((e) => (t) => {
  const s = ht.call(t);
  return e[s] || (e[s] = s.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), I = (e) => (e = e.toLowerCase(), (t) => Me(t) === e), he = (e) => (t) => typeof t === e, { isArray: Y } = Array, se = he("undefined");
function Fi(e) {
  return e !== null && !se(e) && e.constructor !== null && !se(e.constructor) && q(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const _t = I("ArrayBuffer");
function Ei(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && _t(e.buffer), t;
}
const Li = he("string"), q = he("function"), yt = he("number"), Ae = (e) => e !== null && typeof e == "object", ji = (e) => e === !0 || e === !1, le = (e) => {
  if (Me(e) !== "object")
    return !1;
  const t = Ne(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Ni = I("Date"), Mi = I("File"), Ai = I("Blob"), Di = I("FileList"), Ki = (e) => Ae(e) && q(e.pipe), Bi = (e) => {
  const t = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || ht.call(e) === t || q(e.toString) && e.toString() === t);
}, Ii = I("URLSearchParams"), Ui = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
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
const xi = (e, t, s, { allOwnKeys: r } = {}) => (oe(t, (o, i) => {
  s && q(o) ? e[i] = ft(o, s) : e[i] = o;
}, { allOwnKeys: r }), e), zi = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Wi = (e, t, s, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), s && Object.assign(e.prototype, s);
}, qi = (e, t, s, r) => {
  let o, i, n;
  const a = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      n = o[i], (!r || r(n, e, t)) && !a[n] && (t[n] = e[n], a[n] = !0);
    e = s !== !1 && Ne(e);
  } while (e && (!s || s(e, t)) && e !== Object.prototype);
  return t;
}, Hi = (e, t, s) => {
  e = String(e), (s === void 0 || s > e.length) && (s = e.length), s -= t.length;
  const r = e.indexOf(t, s);
  return r !== -1 && r === s;
}, Gi = (e) => {
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
}, Ji = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Ne(Uint8Array)), Qi = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const i = o.value;
    t.call(e, i[0], i[1]);
  }
}, Xi = (e, t) => {
  let s;
  const r = [];
  for (; (s = e.exec(t)) !== null; )
    r.push(s);
  return r;
}, Zi = I("HTMLFormElement"), Yi = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(s, r, o) {
    return r.toUpperCase() + o;
  }
), Xe = (({ hasOwnProperty: e }) => (t, s) => e.call(t, s))(Object.prototype), ea = I("RegExp"), St = (e, t) => {
  const s = Object.getOwnPropertyDescriptors(e), r = {};
  oe(s, (o, i) => {
    t(o, i, e) !== !1 && (r[i] = o);
  }), Object.defineProperties(e, r);
}, ta = (e) => {
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
}, sa = (e, t) => {
  const s = {}, r = (o) => {
    o.forEach((i) => {
      s[i] = !0;
    });
  };
  return Y(e) ? r(e) : r(String(e).split(t)), s;
}, ra = () => {
}, oa = (e, t) => (e = +e, Number.isFinite(e) ? e : t), ge = "abcdefghijklmnopqrstuvwxyz", Ze = "0123456789", wt = {
  DIGIT: Ze,
  ALPHA: ge,
  ALPHA_DIGIT: ge + ge.toUpperCase() + Ze
}, na = (e = 16, t = wt.ALPHA_DIGIT) => {
  let s = "";
  const { length: r } = t;
  for (; e--; )
    s += t[Math.random() * r | 0];
  return s;
};
function ia(e) {
  return !!(e && q(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const aa = (e) => {
  const t = new Array(10), s = (r, o) => {
    if (Ae(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[o] = r;
        const i = Y(r) ? [] : {};
        return oe(r, (n, a) => {
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
  isBuffer: Fi,
  isFormData: Bi,
  isArrayBufferView: Ei,
  isString: Li,
  isNumber: yt,
  isBoolean: ji,
  isObject: Ae,
  isPlainObject: le,
  isUndefined: se,
  isDate: Ni,
  isFile: Mi,
  isBlob: Ai,
  isRegExp: ea,
  isFunction: q,
  isStream: Ki,
  isURLSearchParams: Ii,
  isTypedArray: Ji,
  isFileList: Di,
  forEach: oe,
  merge: ke,
  extend: xi,
  trim: Ui,
  stripBOM: zi,
  inherits: Wi,
  toFlatObject: qi,
  kindOf: Me,
  kindOfTest: I,
  endsWith: Hi,
  toArray: Gi,
  forEachEntry: Qi,
  matchAll: Xi,
  isHTMLForm: Zi,
  hasOwnProperty: Xe,
  hasOwnProp: Xe,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: St,
  freezeMethods: ta,
  toObjectSet: sa,
  toCamelCase: Yi,
  noop: ra,
  toFiniteNumber: oa,
  findKey: bt,
  global: gt,
  isContextDefined: vt,
  ALPHABET: wt,
  generateString: na,
  isSpecCompliantForm: ia,
  toJSONObject: aa
};
function $(e, t, s, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), s && (this.config = s), r && (this.request = r), o && (this.response = o);
}
l.inherits($, Error, {
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
const $t = $.prototype, Tt = {};
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
Object.defineProperties($, Tt);
Object.defineProperty($t, "isAxiosError", { value: !0 });
$.from = (e, t, s, r, o, i) => {
  const n = Object.create($t);
  return l.toFlatObject(e, n, function(p) {
    return p !== Error.prototype;
  }, (a) => a !== "isAxiosError"), $.call(n, e.message, t, s, r, o), n.cause = e, n.name = e.name, i && Object.assign(n, i), n;
};
const la = null;
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
function ua(e) {
  return l.isArray(e) && !e.some(Oe);
}
const ca = l.toFlatObject(l, {}, null, function(t) {
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
  function c(h) {
    if (h === null)
      return "";
    if (l.isDate(h))
      return h.toISOString();
    if (!p && l.isBlob(h))
      throw new $("Blob is not supported. Use a Buffer instead.");
    return l.isArrayBuffer(h) || l.isTypedArray(h) ? p && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function m(h, S, K) {
    let A = h;
    if (h && !K && typeof h == "object") {
      if (l.endsWith(S, "{}"))
        S = r ? S : S.slice(0, -2), h = JSON.stringify(h);
      else if (l.isArray(h) && ua(h) || (l.isFileList(h) || l.endsWith(S, "[]")) && (A = l.toArray(h)))
        return S = kt(S), A.forEach(function(ie, Mt) {
          !(l.isUndefined(ie) || ie === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            n === !0 ? Ye([S], Mt, i) : n === null ? S : S + "[]",
            c(ie)
          );
        }), !1;
    }
    return Oe(h) ? !0 : (t.append(Ye(K, S, i), c(h)), !1);
  }
  const b = [], F = Object.assign(ca, {
    defaultVisitor: m,
    convertValue: c,
    isVisitable: Oe
  });
  function O(h, S) {
    if (!l.isUndefined(h)) {
      if (b.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + S.join("."));
      b.push(h), l.forEach(h, function(A, Q) {
        (!(l.isUndefined(A) || A === null) && o.call(
          t,
          A,
          l.isString(Q) ? Q.trim() : Q,
          S,
          F
        )) === !0 && O(A, S ? S.concat(Q) : [Q]);
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
  this._pairs = [], e && _e(e, this, t);
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
function da(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Ct(e, t, s) {
  if (!t)
    return e;
  const r = s && s.encode || da, o = s && s.serialize;
  let i;
  if (o ? i = o(t, s) : i = l.isURLSearchParams(t) ? t.toString() : new De(t, s).toString(r), i) {
    const n = e.indexOf("#");
    n !== -1 && (e = e.slice(0, n)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class pa {
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
const tt = pa, Rt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, ma = typeof URLSearchParams < "u" ? URLSearchParams : De, fa = FormData, ha = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), _a = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), D = {
  isBrowser: !0,
  classes: {
    URLSearchParams: ma,
    FormData: fa,
    Blob
  },
  isStandardBrowserEnv: ha,
  isStandardBrowserWebWorkerEnv: _a,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function ya(e, t) {
  return _e(e, new D.classes.URLSearchParams(), Object.assign({
    visitor: function(s, r, o, i) {
      return D.isNode && l.isBuffer(s) ? (this.append(r, s.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function ba(e) {
  return l.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function ga(e) {
  const t = {}, s = Object.keys(e);
  let r;
  const o = s.length;
  let i;
  for (r = 0; r < o; r++)
    i = s[r], t[i] = e[i];
  return t;
}
function Pt(e) {
  function t(s, r, o, i) {
    let n = s[i++];
    const a = Number.isFinite(+n), p = i >= s.length;
    return n = !n && l.isArray(o) ? o.length : n, p ? (l.hasOwnProp(o, n) ? o[n] = [o[n], r] : o[n] = r, !a) : ((!o[n] || !l.isObject(o[n])) && (o[n] = []), t(s, r, o[n], i) && l.isArray(o[n]) && (o[n] = ga(o[n])), !a);
  }
  if (l.isFormData(e) && l.isFunction(e.entries)) {
    const s = {};
    return l.forEachEntry(e, (r, o) => {
      t(ba(r), o, s, 0);
    }), s;
  }
  return null;
}
const va = {
  "Content-Type": void 0
};
function Sa(e, t, s) {
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
  transitional: Rt,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, s) {
    const r = s.getContentType() || "", o = r.indexOf("application/json") > -1, i = l.isObject(t);
    if (i && l.isHTMLForm(t) && (t = new FormData(t)), l.isFormData(t))
      return o && o ? JSON.stringify(Pt(t)) : t;
    if (l.isArrayBuffer(t) || l.isBuffer(t) || l.isStream(t) || l.isFile(t) || l.isBlob(t))
      return t;
    if (l.isArrayBufferView(t))
      return t.buffer;
    if (l.isURLSearchParams(t))
      return s.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return ya(t, this.formSerializer).toString();
      if ((a = l.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const p = this.env && this.env.FormData;
        return _e(
          a ? { "files[]": t } : t,
          p && new p(),
          this.formSerializer
        );
      }
    }
    return i || o ? (s.setContentType("application/json", !1), Sa(t)) : t;
  }],
  transformResponse: [function(t) {
    const s = this.transitional || ye.transitional, r = s && s.forcedJSONParsing, o = this.responseType === "json";
    if (t && l.isString(t) && (r && !this.responseType || o)) {
      const n = !(s && s.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (n)
          throw a.name === "SyntaxError" ? $.from(a, $.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
  ye.headers[t] = l.merge(va);
});
const Ke = ye, wa = l.toObjectSet([
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
]), $a = (e) => {
  const t = {};
  let s, r, o;
  return e && e.split(`
`).forEach(function(n) {
    o = n.indexOf(":"), s = n.substring(0, o).trim().toLowerCase(), r = n.substring(o + 1).trim(), !(!s || t[s] && wa[s]) && (s === "set-cookie" ? t[s] ? t[s].push(r) : t[s] = [r] : t[s] = t[s] ? t[s] + ", " + r : r);
  }), t;
}, st = Symbol("internals");
function ee(e) {
  return e && String(e).trim().toLowerCase();
}
function ue(e) {
  return e === !1 || e == null ? e : l.isArray(e) ? e.map(ue) : String(e);
}
function Ta(e) {
  const t = /* @__PURE__ */ Object.create(null), s = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = s.exec(e); )
    t[r[1]] = r[2];
  return t;
}
function ka(e) {
  return /^[-_a-zA-Z]+$/.test(e.trim());
}
function ve(e, t, s, r) {
  if (l.isFunction(r))
    return r.call(this, t, s);
  if (l.isString(t)) {
    if (l.isString(r))
      return t.indexOf(r) !== -1;
    if (l.isRegExp(r))
      return r.test(t);
  }
}
function Oa(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, s, r) => s.toUpperCase() + r);
}
function Ca(e, t) {
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
      (!b || o[b] === void 0 || c === !0 || c === void 0 && o[b] !== !1) && (o[b || p] = ue(a));
    }
    const n = (a, p) => l.forEach(a, (c, m) => i(c, m, p));
    return l.isPlainObject(t) || t instanceof this.constructor ? n(t, s) : l.isString(t) && (t = t.trim()) && !ka(t) ? n($a(t), s) : t != null && i(s, t, r), this;
  }
  get(t, s) {
    if (t = ee(t), t) {
      const r = l.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!s)
          return o;
        if (s === !0)
          return Ta(o);
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
      (!t || ve(this, this[i], i, t)) && (delete this[i], o = !0);
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
      const a = t ? Oa(i) : String(i).trim();
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
      r[a] || (Ca(o, n), r[a] = !0);
    }
    return l.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
be.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
l.freezeMethods(be.prototype);
l.freezeMethods(be);
const B = be;
function Se(e, t) {
  const s = this || Ke, r = t || s, o = B.from(r.headers);
  let i = r.data;
  return l.forEach(e, function(a) {
    i = a.call(s, i, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), i;
}
function Vt(e) {
  return !!(e && e.__CANCEL__);
}
function ne(e, t, s) {
  $.call(this, e ?? "canceled", $.ERR_CANCELED, t, s), this.name = "CanceledError";
}
l.inherits(ne, $, {
  __CANCEL__: !0
});
function Ra(e, t, s) {
  const r = s.config.validateStatus;
  !s.status || !r || r(s.status) ? e(s) : t(new $(
    "Request failed with status code " + s.status,
    [$.ERR_BAD_REQUEST, $.ERR_BAD_RESPONSE][Math.floor(s.status / 100) - 4],
    s.config,
    s.request,
    s
  ));
}
const Pa = D.isStandardBrowserEnv ? (
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
function Va(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Fa(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Ft(e, t) {
  return e && !Va(t) ? Fa(e, t) : t;
}
const Ea = D.isStandardBrowserEnv ? (
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
function La(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function ja(e, t) {
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
function rt(e, t) {
  let s = 0;
  const r = ja(50, 250);
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
const Na = typeof XMLHttpRequest < "u", Ma = Na && function(e) {
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
      ), S = {
        data: !n || n === "text" || n === "json" ? c.responseText : c.response,
        status: c.status,
        statusText: c.statusText,
        headers: O,
        config: e,
        request: c
      };
      Ra(function(A) {
        s(A), p();
      }, function(A) {
        r(A), p();
      }, S), c = null;
    }
    if ("onloadend" in c ? c.onloadend = b : c.onreadystatechange = function() {
      !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(b);
    }, c.onabort = function() {
      c && (r(new $("Request aborted", $.ECONNABORTED, e, c)), c = null);
    }, c.onerror = function() {
      r(new $("Network Error", $.ERR_NETWORK, e, c)), c = null;
    }, c.ontimeout = function() {
      let h = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const S = e.transitional || Rt;
      e.timeoutErrorMessage && (h = e.timeoutErrorMessage), r(new $(
        h,
        S.clarifyTimeoutError ? $.ETIMEDOUT : $.ECONNABORTED,
        e,
        c
      )), c = null;
    }, D.isStandardBrowserEnv) {
      const O = (e.withCredentials || Ea(m)) && e.xsrfCookieName && Pa.read(e.xsrfCookieName);
      O && i.set(e.xsrfHeaderName, O);
    }
    o === void 0 && i.setContentType(null), "setRequestHeader" in c && l.forEach(i.toJSON(), function(h, S) {
      c.setRequestHeader(S, h);
    }), l.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), n && n !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", rt(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", rt(e.onUploadProgress)), (e.cancelToken || e.signal) && (a = (O) => {
      c && (r(!O || O.type ? new ne(null, e, c) : O), c.abort(), c = null);
    }, e.cancelToken && e.cancelToken.subscribe(a), e.signal && (e.signal.aborted ? a() : e.signal.addEventListener("abort", a)));
    const F = La(m);
    if (F && D.protocols.indexOf(F) === -1) {
      r(new $("Unsupported protocol " + F + ":", $.ERR_BAD_REQUEST, e));
      return;
    }
    c.send(o || null);
  });
}, ce = {
  http: la,
  xhr: Ma
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
const Aa = {
  getAdapter: (e) => {
    e = l.isArray(e) ? e : [e];
    const { length: t } = e;
    let s, r;
    for (let o = 0; o < t && (s = e[o], !(r = l.isString(s) ? ce[s.toLowerCase()] : s)); o++)
      ;
    if (!r)
      throw r === !1 ? new $(
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
function we(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ne(null, e);
}
function ot(e) {
  return we(e), e.headers = B.from(e.headers), e.data = Se.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Aa.getAdapter(e.adapter || Ke.adapter)(e).then(function(r) {
    return we(e), r.data = Se.call(
      e,
      e.transformResponse,
      r
    ), r.headers = B.from(r.headers), r;
  }, function(r) {
    return Vt(r) || (we(e), r && r.response && (r.response.data = Se.call(
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
    headers: (c, m) => o(nt(c), nt(m), !0)
  };
  return l.forEach(Object.keys(e).concat(Object.keys(t)), function(m) {
    const b = p[m] || o, F = b(e[m], t[m], m);
    l.isUndefined(F) && b !== a || (s[m] = F);
  }), s;
}
const Et = "1.3.2", Be = {};
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
      throw new $(
        o(n, " has been removed" + (s ? " in " + s : "")),
        $.ERR_DEPRECATED
      );
    return s && !it[n] && (it[n] = !0, console.warn(
      o(
        n,
        " has been deprecated since v" + s + " and will be removed in the near future"
      )
    )), t ? t(i, n, a) : !0;
  };
};
function Da(e, t, s) {
  if (typeof e != "object")
    throw new $("options must be an object", $.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o], n = t[i];
    if (n) {
      const a = e[i], p = a === void 0 || n(a, i, e);
      if (p !== !0)
        throw new $("option " + i + " must be " + p, $.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (s !== !0)
      throw new $("Unknown option " + i, $.ERR_BAD_OPTION);
  }
}
const Ce = {
  assertOptions: Da,
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
      const h = [ot.bind(this), void 0];
      for (h.unshift.apply(h, a), h.push.apply(h, c), F = h.length, m = Promise.resolve(s); b < F; )
        m = m.then(h[b++], h[b++]);
      return m;
    }
    F = a.length;
    let O = s;
    for (b = 0; b < F; ) {
      const h = a[b++], S = a[b++];
      try {
        O = h(O);
      } catch (K) {
        S.call(this, K);
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
const Ka = Ie;
function Ba(e) {
  return function(s) {
    return e.apply(null, s);
  };
}
function Ia(e) {
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
const Ua = Re;
function Lt(e) {
  const t = new de(e), s = ft(de.prototype.request, t);
  return l.extend(s, de.prototype, t, { allOwnKeys: !0 }), l.extend(s, t, null, { allOwnKeys: !0 }), s.create = function(o) {
    return Lt(X(e, o));
  }, s;
}
const E = Lt(Ke);
E.Axios = de;
E.CanceledError = ne;
E.CancelToken = Ka;
E.isCancel = Vt;
E.VERSION = Et;
E.toFormData = _e;
E.AxiosError = $;
E.Cancel = E.CanceledError;
E.all = function(t) {
  return Promise.all(t);
};
E.spread = Ba;
E.isAxiosError = Ia;
E.mergeConfig = X;
E.AxiosHeaders = B;
E.formToJSON = (e) => Pt(l.isHTMLForm(e) ? new FormData(e) : e);
E.HttpStatusCode = Ua;
E.default = E;
const jt = E;
function xa(e) {
  return e == null;
}
var za = xa, Wa = function(t) {
  return typeof t == "object" && t !== null;
}, qa = -18, Ha = 5, Ga = 9, Ja = -72, Qa = -74, Xa = -68, Za = -69, Ya = -7, el = -127, tl = 1, sl = -107, rl = 10, ol = 2, nl = -42, il = -2, al = -8, ll = -128, ul = 3, cl = -4, dl = -110, pl = -109, ml = -3, fl = -102, hl = -1, _l = -196, yl = 0, bl = 8, gl = -75, vl = {
  AssocType: qa,
  BooleanType: Ha,
  ClassType: Ga,
  DapiNodeType: Ja,
  DapiSessionType: Qa,
  DapiStreamType: Xa,
  DapiVersionType: Za,
  DateType: Ya,
  DynamicType: el,
  ErrorType: tl,
  FileType: sl,
  FrameType: rl,
  IntegerType: ol,
  JavaObjectType: nl,
  ListType: il,
  LongType: al,
  ObjectType: ll,
  ObjRefType: ul,
  RealType: cl,
  RecArrayType: dl,
  RecordType: pl,
  ScriptType: ml,
  SocketType: fl,
  StringType: hl,
  UAPIType: _l,
  UndefinedType: yl,
  VoidType: bl,
  WAPIWorkType: gl
}, Nt = {
  createFormData() {
    return new FormData();
  }
};
function Sl(e) {
  const t = jt.create(e);
  return t.interceptors.response.use(
    (s) => {
      const r = _(s, "headers.otcsticket");
      return r && (t.defaults.headers.common.OTCSTicket = r), s;
    },
    (s) => Promise.reject(s)
  ), t;
}
function wl(e) {
  const t = Sl(e), s = _(e, "username"), r = _(e, "password"), o = _(e, "otcsticket");
  if (o)
    t.defaults.headers.common.OTCSTicket = o;
  else if (s && r)
    t.interceptors.request.use(async (i) => {
      if (i.headers.common.OTCSTicket)
        return i;
      {
        const n = Nt.createFormData();
        n.append("username", s), n.append("password", r);
        const a = await jt.post(`${e.baseURL}/api/v1/auth/`, n);
        return i.headers.common.OTCSTicket = _(a, "data.ticket"), i;
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
class $l extends H {
  auth() {
    return this.session.get("/api/v1/auth/");
  }
}
var Tl = 834, kl = 1298, Ol = 30309, Cl = 907, Rl = 1, Pl = 480, Vl = 483, Fl = 481, El = 31711, Ll = 290, jl = 291, Nl = 274, Ml = 356, Al = 357, Dl = 530, Kl = 131, Bl = 132, Il = 207, Ul = 209, xl = 199, zl = 196, Wl = 194, ql = 298, Hl = 902, Gl = 345, Jl = 348, Ql = 346, Xl = 3030338, Zl = 3030339, Yl = 3030329, eu = 3030002, tu = 3030333, su = 3030004, ru = 3030335, ou = 3030334, nu = 3030205, iu = 136, au = 557, lu = 3030372, uu = 146, cu = 844, du = 270, pu = 276, mu = 277, fu = 215, hu = 602, _u = 144, yu = 1297, bu = 283, gu = 32912, vu = 32916, Su = 31707, wu = 32914, $u = 31709, Tu = 32917, ku = 32915, Ou = 32913, Cu = 31602, Ru = 31601, Pu = 31603, Vu = 335, Fu = 900, Eu = 749, Lu = 2504, ju = 904, Nu = 905, Mu = 903, Au = 1299, Du = 906, Ku = 0, Bu = 223, Iu = 2, Uu = 3030371, xu = 482, zu = 833, Wu = 282, qu = 226, Hu = 293, Gu = 731, Ju = 368, Qu = 147, Xu = 281, Zu = 924, Yu = 541, ec = 542, tc = 361, sc = 259, rc = 272, oc = 123475, nc = 123476, ic = 123469, ac = 123470, lc = 430, uc = 432, cc = 422, dc = 732, pc = 3030331, mc = 31710, fc = 410, hc = 414, _c = 919, yc = 920, bc = 273, gc = 1281, vc = 1282, Sc = 372, wc = 374, $c = 373, Tc = 870, kc = 532, Oc = 3030756, Cc = 208, Rc = 257, Pc = 371, Vc = 370, Fc = 3030203, Ec = 3030003, Lc = 3030204, jc = 398, Nc = 3030343, Mc = 424, Ac = 412, Dc = 419, Kc = 411, Bc = 415, Ic = 418, Uc = 416, xc = 417, zc = 218, Wc = 271, qc = 195, Hc = 202, Gc = 543, Jc = 201, Qc = 384, Xc = 380, Zc = 387, Yc = 829, ed = 31712, td = 31713, sd = 441, rd = 296, od = 431, nd = 327, id = 425, ad = 428, ld = 32918, ud = 32919, cd = 138, dd = 381, pd = 134, md = 299, fd = 139, hd = 555, _d = 554, yd = 552, bd = 553, gd = 556, vd = 551, Sd = 426, wd = 427, $d = 558, Td = 559, kd = 2505, Od = 835, Cd = 32901, Rd = 258, Pd = 369, Vd = 269, Fd = 278, Ed = 383, Ld = 292, jd = 31678, Nd = 49547, Md = 275, Ad = 1280, Dd = 1283, Kd = 797, Bd = 796, Id = 795, Ud = 3030202, xd = 3030201, zd = 3030001, Wd = 3030130, qd = 280, Hd = 421, Gd = 231, Jd = 206, Qd = 205, Xd = 204, Zd = 210, Yd = 212, ep = 230, tp = 268, sp = 145, rp = 130, op = 423, np = 531, ip = 526, ap = 527, lp = 3030330, up = 140, cp = 899, dp = 123461, pp = 133, mp = 198, fp = 347, hp = 987352, _p = 405, yp = 375, bp = 143, gp = 180, vp = 336, Sp = 162, wp = 901, $p = 141, Tp = 403, kp = 397, Op = 908, Cp = 413, Rp = 550, Pp = 137, Vp = 211, Fp = 148, Ep = 149, Lp = 484, jp = 1296, Np = 525, Mp = 142, Ap = 161, Dp = 529, Kp = 236, Bp = 235, Ip = 234, Up = 233, xp = 30303, zp = 128, Wp = 190, qp = 5573, Hp = 5574, Gp = 528, Jp = 154, Qp = 286, Xp = 285, $e = {
  "2WayTee": 294,
  Accession: Tl,
  ActiveFolder: kl,
  Activeview: Ol,
  ActivityManager: Cl,
  Alias: Rl,
  Appearance: Pl,
  AppearanceFolder: Vl,
  AppearancesVolume: Fl,
  ArchiveFolder: El,
  BackupManager: Ll,
  BackupProcess: jl,
  BestBets: Nl,
  Blog: Ml,
  BlogEntry: Al,
  BoxFolder: Dl,
  Category: Kl,
  CategoryFolder: Bl,
  Channel: Il,
  ChannelVol: Ul,
  Classification: xl,
  "Classification Shortcut": 197,
  ClassificationTree: zl,
  ClassifiedItems: Wl,
  Collection: ql,
  Column: Hl,
  Comments: Gl,
  CommentsReply: Jl,
  CommentsVol: Ql,
  CommExpertContainer: Xl,
  CommExpertGroup: Zl,
  CommStore: Yl,
  CommTemplate: eu,
  CommTemplateFolder: tu,
  CommTemplateVol: su,
  CommURLStore: ru,
  CommWorkspace: ou,
  CommXSLVolume: nu,
  CompoundDoc: iu,
  CompoundEMail: au,
  ContentModuleFolder: lu,
  "csapps CSApplicationManifest": 32658,
  "csapps CSApplicationsVolume": 32657,
  CustomView: uu,
  CustomViewTemplate: cu,
  DataFlowManager: du,
  DataSourceFolder: pu,
  DirWalker: mu,
  Discussion: fu,
  DispositionGroup: hu,
  Document: _u,
  DocumentLLNode: yu,
  DocumentServer: bu,
  Dossier: gu,
  DossierCabinet: vu,
  DossierCabinetArchive: Su,
  DossierTemplate: wu,
  DossierTemplateFolder: $u,
  DossierTemplatesVolume: Tu,
  DossierTemplateVolume: ku,
  DossierVolume: Ou,
  DPSBinding: Cu,
  DPSFolder: Ru,
  DPSVolume: Pu,
  DTDLLNode: Vu,
  DynamicView: Fu,
  EMail: Eu,
  EmailConversationItems: Lu,
  "Enterprise Archive Document": 753,
  Facet: ju,
  FacetFolder: Nu,
  FacetTree: Mu,
  FailedFolder: Au,
  FixedSystemColumn: Du,
  Folder: Ku,
  Form: Bu,
  Generation: Iu,
  GENERICCONTENTMODULE: Uu,
  GlobalAppearance: xu,
  HoldContainer: zu,
  HTMLConversion: Wu,
  HTMLFormView: qu,
  Importer: Hu,
  Inbox: Gu,
  IndexEngine: Ju,
  IndexTracer: Qu,
  IndexUpdate: Xu,
  InternalOTDS: Zu,
  ItemTemplateVol: Yu,
  ItemTemplateVolFolder: ec,
  JournalVolume: tc,
  LibraryExtractor: sc,
  LibraryObj: rc,
  "LLNode Email Folder": 751,
  LLNodeFAQ: oc,
  LLNodeFAQEntry: nc,
  LLNodeForum: ic,
  LLNodeForumEntry: ac,
  LLNodeURQuestion: lc,
  LLNodeURReply: uc,
  Locators: cc,
  Mailbox: dc,
  MailStore: pc,
  ManagedSpace: mc,
  MediaType: fc,
  MediaTypesContainer: hc,
  MemcachedFolder: _c,
  MemcachedProcess: yc,
  Merge: bc,
  MicroPost: gc,
  MicroPostVolume: vc,
  MultiVolClassification: Sc,
  MultiVolClassificationProxy: wc,
  MultiVolClassificationTree: $c,
  MyReservedItems: Tc,
  MyWorkbenches: kc,
  NAVMENUVOL: Oc,
  News: Cc,
  OTCIndexObj: Rc,
  Partition: Pc,
  PartitionMap: Vc,
  PersonalComm: Fc,
  PersonalCommSystemVolume: Ec,
  PersonalCommVol: Lc,
  PersonalStagingFolder: jc,
  PersonalWebpage: Nc,
  PhysicalItemBox: Mc,
  PhysicalItemContainer: Ac,
  PhysicalItemCopy: Dc,
  PhysicalItem_non_Container: Kc,
  PhysObjAdmin: Bc,
  PhysObjBatchLabels: Ic,
  PhysObjCirculation: Uc,
  PhysObjReports: xc,
  Poll: zc,
  Process: Wc,
  Profile: qc,
  Project: Hc,
  ProjectTemplate: Gc,
  ProjectVol: Jc,
  Prospector: Qc,
  ProspectorQueries: Xc,
  ProspectorSnapshot: Zc,
  Provenance: Yc,
  Proxy: 260,
  PublishingFolder: ed,
  PublishingFolderVolume: td,
  QAFolder: sd,
  QueryFile: rd,
  QuestionVolume: od,
  RecentItems: nd,
  RecordType: id,
  RecordTypesContainer: ad,
  RedForm: ld,
  RedFormVolume: ud,
  Release: cd,
  RemoteLLDataSource: dd,
  Reply: pd,
  Report: md,
  Revision: fd,
  RIMSDisposition: hd,
  RIMSDispositionsContainer: _d,
  RIMSHoldMaintenance: yd,
  RIMSRsiContainer: bd,
  RMAdministration: gd,
  RMClassification: vd,
  RMFolder: Sd,
  RMPart: wd,
  RMReportsContainer: $d,
  RMThesaurus: Td,
  ScanConfigurationVolume: kd,
  ScheduledHoldCriteria: Od,
  ScriptNode: Cd,
  SearchBroker: Rd,
  SearchEngine: Pd,
  SearchManager: Vd,
  SearchReport: Fd,
  SearchResultsTemplate: Ed,
  SearchTemplate: Ld,
  Simplate: jd,
  SkyPodLLVolume: Nd,
  SliceFolder: Md,
  SocialObject: Ad,
  SocialObjectVolume: Dd,
  SPCJOBDESCR: Kd,
  SPCJOBDESCRFOLDER: Bd,
  SPCVOLUME: Id,
  spdcommittee: Ud,
  spdcommitteevol: xd,
  spdcommitteevolume: zd,
  spdemail: Wd,
  Spider: qd,
  StorageManagement: Hd,
  SubmitVersionNode: Gd,
  Task: Jd,
  TaskGroup: Qd,
  TaskList: Xd,
  TaskListVol: Zd,
  TaskMilestone: Yd,
  Template: ep,
  TemplateFolder: tp,
  TextDocument: sp,
  Topic: rp,
  Transfers: op,
  TransportBox: np,
  TransportItem: ip,
  TransportItemPart: ap,
  UrgentRequests: lp,
  URL: up,
  VirtualFolder: cp,
  VolBlog: dp,
  VolCategories: pp,
  VolClassification: mp,
  VolComments: fp,
  VolDAP: hp,
  VolDeletedItems: _p,
  VolDirectory: yp,
  VolDiscussion: bp,
  VolDomainWorkspace: gp,
  VolDTD: vp,
  VolEditWorkflow: Sp,
  VolFacets: wp,
  VolLibrary: $p,
  VolOrphan: Tp,
  VolPersonalStaging: kp,
  VolPerspectives: Op,
  VolPhysObj: Cp,
  VolRecMan: Rp,
  VolRelease: Pp,
  VolReports: Vp,
  VolSystem: Fp,
  VolTracer: Ep,
  VolumeFolder: Lp,
  VolumeLLVolume: jp,
  VolWarehouse: Np,
  VolWorkbin: Mp,
  VolWorkflow: Ap,
  WarehouseFolder: Dp,
  WebFormConnectionVolume: Kp,
  WebFormDatabaseConnection: Bp,
  WebFormLookup: Ip,
  WebFormLookupVolume: Up,
  WebReports: xp,
  WFMapLLNode: zp,
  WFStatusNode: Wp,
  WIKI: qp,
  WIKIPAGE: Hp,
  Workbench: Gp,
  WorkflowAttachments: Jp,
  XMLActivatorCon: Qp,
  XMLActivatorProd: Xp
};
class Zp extends H {
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
        type: $e.Document,
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
    return this.addItem($e.Folder, t, s, r);
  }
  addGeneration(t, s, r, o, i = {}) {
    return this.addItem($e.Generation, t, s, {
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
class Yp extends H {
  start(t) {
    return this.draftprocesses(t).then((s) => _(s, "data.results.draftprocess_id")).then((s) => this.draftprocesses_update(s));
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
class em extends H {
  scriptNode(t, s = {}) {
    return this.session.get(`api/v1/rhcore/${t}`, {
      params: s
    });
  }
}
class tm extends H {
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
class sm extends H {
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
class rm extends H {
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
class om extends H {
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
class nm extends Error {
  code;
  data;
  constructor(t = at.INTERNALERROR.message, s = null, r = at.INTERNALERROR.code) {
    Wa(t) ? (super(t.message), this.code = t.code, this.data = t.data) : (super(t), this.code = r, this.data = s);
  }
}
const ae = {
  index: 0,
  get next() {
    return this.index = this.index + 1, this.index;
  }
};
class im {
  session;
  baseURL;
  _batchQueue;
  constructor(t, s) {
    this.session = t, this.baseURL = s, this.resetQueue();
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
      throw new nm(s.message, s.data, s.code);
    } else
      throw Error("The server did not respond correctly.");
  }
  // https://www.jsonrpc.org/specification#request_object
  // params is allowed to be null!
  // also on queue function below
  async request(t, s, r = ae.next) {
    const o = await this.session.postBody(this.baseURL, {
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
    const r = await this.session.postBody(this.baseURL, {
      rpc: s
    });
    return _(r, "data.data", []).map((o) => {
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
class am {
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
    this.axios = wl(t);
  }
  get nodes() {
    return this._nodes == null && (this._nodes = new Zp(this)), this._nodes;
  }
  get auth() {
    return this._auth == null && (this._auth = new $l(this)), this._auth;
  }
  get workflow() {
    return this._workflow == null && (this._workflow = new Yp(this)), this._workflow;
  }
  get rhcore() {
    return this._rhcore == null && (this._rhcore = new em(this)), this._rhcore;
  }
  get members() {
    return this._members == null && (this._members = new sm(this)), this._members;
  }
  get search() {
    return this._search == null && (this._search = new tm(this)), this._search;
  }
  get webreports() {
    return this._webreports == null && (this._webreports = new om(this)), this._webreports;
  }
  get versions() {
    return this._versions == null && (this._versions = new rm(this)), this._versions;
  }
  get dataTypesEnum() {
    return vl;
  }
  rpcClient(t = "/api/v1/rh/rpc/rhnode/") {
    return new im(this, t);
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
    const s = Nt.createFormData();
    for (const [r, o] of Object.entries(t))
      o && o.name && o.file ? s.append(r, o.file, o.name) : Array.isArray(o) || this._isObject(o) || this._isBoolean(o) ? s.append(r, JSON.stringify(o)) : za(o) || s.append(r, o);
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
const lm = /* @__PURE__ */ Object.assign({
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
  "./components/KFunctionMenu.vue": Rr,
  "./components/KLinearProgressIndicator.vue": Lr,
  "./components/KMulti.vue": Ir,
  "./components/KMulti2.vue": Gr,
  "./components/KNodeAncestor.vue": Yr,
  "./components/KNodePickerField.vue": no,
  "./components/KOneMoment.vue": po,
  "./components/KPageDropZone.vue": _o,
  "./components/KPageTitle.vue": wo,
  "./components/KPagination.vue": Mo,
  "./components/KPagination2.vue": Ho,
  "./components/KRadioGroup.vue": Yo,
  "./components/KScratch.vue": rn,
  "./components/KSelect.vue": cn,
  "./components/KSnackbar.vue": vn,
  "./components/KSortHeader.vue": On,
  "./components/KSpacer.vue": Fn,
  "./components/KSpinner.vue": An,
  "./components/KSwitch.vue": Un,
  "./components/KTable.vue": qn,
  "./components/KTextArea.vue": Xn,
  "./components/KTextField.vue": si,
  "./components/KUserGIF.vue": ai,
  "./components/KUserLink.vue": mi,
  "./components/KUserPicker.vue": yi,
  "./components/Tabs/KTabItem.vue": wi,
  "./components/Tabs/KTabs.vue": Vi
}), ym = {
  install(e, t) {
    Object.entries(lm).forEach(
      ([o, i]) => {
        const n = o?.split("/")?.pop()?.replace(/\.\w+$/, "");
        e.component(n, i.default);
      }
    );
    const s = new am(t), r = {
      img: t.img,
      baseURL: t.baseURL,
      jsLongDateFormat: t.datelong,
      jsShortDateFormat: t.dateshort
    };
    e.provide(Z, s), e.provide(fe, r);
  }
};
export {
  fe as configKey,
  Xs as confirmDialogKey,
  ym as default,
  W as injectStrict,
  Z as sessionKey,
  Qs as snackbarKey
};
