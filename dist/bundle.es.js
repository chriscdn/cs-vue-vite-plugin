import { defineComponent as _, h as At, openBlock as u, createElementBlock as d, renderSlot as R, inject as Re, Fragment as V, createElementVNode as f, resolveComponent as $, createBlock as C, Transition as re, withCtx as w, normalizeStyle as G, createVNode as P, createTextVNode as j, createCommentVNode as v, resolveDirective as lt, withDirectives as z, normalizeClass as M, withKeys as te, withModifiers as x, vModelText as Ve, renderList as N, toDisplayString as k, mergeProps as ut, vModelDynamic as Dt, Teleport as Kt, setBlockTracking as Ue, TransitionGroup as Fe, vModelRadio as Bt, vModelSelect as It, useCssVars as ct } from "vue";
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
}, L = (e, t = "px") => {
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
      const e = {}, t = L(this.height), s = L(this.minHeight), r = L(this.minWidth), n = L(this.maxHeight), i = L(this.maxWidth), o = L(this.width);
      return t && (e.height = t), s && (e.minHeight = s), r && (e.minWidth = r), n && (e.maxHeight = n), i && (e.maxWidth = i), o && (e.width = o), e;
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
const b = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [r, n] of t)
    s[r] = n;
  return s;
}, Qt = { class: "k-card-actions" };
function Xt(e, t, s, r, n, i) {
  return u(), d("div", Qt, [
    R(e.$slots, "default")
  ]);
}
const Zt = /* @__PURE__ */ b(Jt, [["render", Xt]]), Yt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zt
}, Symbol.toStringTag, { value: "Module" })), es = _({});
const ts = { class: "k-card-text" };
function ss(e, t, s, r, n, i) {
  return u(), d("div", ts, [
    R(e.$slots, "default")
  ]);
}
const rs = /* @__PURE__ */ b(es, [["render", ss]]), ns = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: rs
}, Symbol.toStringTag, { value: "Module" })), os = _({});
const is = { class: "k-card-title" };
function as(e, t, s, r, n, i) {
  return u(), d("div", is, [
    R(e.$slots, "default")
  ]);
}
const ls = /* @__PURE__ */ b(os, [["render", as]]), us = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ls
}, Symbol.toStringTag, { value: "Module" })), cs = _({
  setup() {
    return { config: Re("config", {}) };
  }
}), ds = /* @__PURE__ */ f("hr", null, null, -1), ps = ["href"];
function ms(e, t, s, r, n, i) {
  return u(), d(V, null, [
    ds,
    f("a", {
      href: `${e.config.baseURL}?func=admin.index`
    }, "Admin Home", 8, ps)
  ], 64);
}
const fs = /* @__PURE__ */ b(cs, [["render", ms]]), hs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
function gs(e, t, s, r, n, i) {
  const o = $("KIcon");
  return u(), C(re, { name: "fade" }, {
    default: w(() => [
      e.visibleLocal ? (u(), d("div", {
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
          P(o, { class: "text-main-bright" }, {
            default: w(() => [
              j(" icon-x ")
            ]),
            _: 1
          })
        ])
      ], 4)) : v("", !0)
    ]),
    _: 3
  });
}
const vs = /* @__PURE__ */ b(ys, [["render", gs]]), Ss = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vs
}, Symbol.toStringTag, { value: "Module" }));
const ws = {}, $s = { class: "k-app" };
function Ts(e, t) {
  const s = $("KSnackbar"), r = $("KConfirm");
  return u(), d("div", $s, [
    P(r, null, {
      default: w(() => [
        P(s, null, {
          default: w(() => [
            R(e.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    })
  ]);
}
const ks = /* @__PURE__ */ b(ws, [["render", Ts]]), Os = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
        width: L(this.width)
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
function Es(e, t, s, r, n, i) {
  const o = lt("click-away");
  return z((u(), d("div", {
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
      e.focus && e.items.length && e.inputText ? (u(), d("div", Vs, [
        (u(!0), d(V, null, N(e.itemsFiltered, (a, p) => (u(), d("div", {
          key: p,
          class: M(["k-autocomplete-item", { "k-autocomplete-active": e.currentFocus == p }]),
          onClick: (c) => e.select(p)
        }, [
          R(e.$slots, "item", { item: a }, () => [
            j(k(a), 1)
          ])
        ], 10, Fs))), 128))
      ])) : v("", !0)
    ])
  ], 4)), [
    [o, e.setBlur]
  ]);
}
const js = /* @__PURE__ */ b(Cs, [["render", Es]]), Ls = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: js
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
}), Ds = { key: 0 }, Ks = ["src"], Bs = ["href"], Is = ["innerHTML"];
function Us(e, t, s, r, n, i) {
  const o = $("KFunctionMenu");
  return e.nodeRecResolved ? (u(), d("span", Ds, [
    e.image ? (u(), d("img", {
      key: 0,
      src: e.nodeRecResolved.gif
    }, null, 8, Ks)) : v("", !0),
    j(" "),
    f("a", {
      href: e.nodeRecResolved.url
    }, k(e.nodeRecResolved.name), 9, Bs),
    e.clickable ? (u(), C(o, {
      key: 1,
      dataid: e.nodeRecResolved.dataid
    }, null, 8, ["dataid"])) : v("", !0),
    f("span", {
      innerHTML: e.nodeRecResolved.modifiedImageCallback
    }, null, 8, Is)
  ])) : v("", !0);
}
const xs = /* @__PURE__ */ b(As, [["render", Us]]), zs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
function Hs(e, t, s, r, n, i) {
  return u(), d("button", ut({
    class: ["k-button", e.classObj],
    disabled: e.disabled,
    type: "button"
  }, e.$attrs, {
    onClick: t[0] || (t[0] = (o) => e.$emit("click"))
  }), [
    R(e.$slots, "default")
  ], 16, qs);
}
const Gs = /* @__PURE__ */ b(Ws, [["render", Hs]]), Js = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
      return this.noLabel = e, this.yesLabel = t, this.title = s, this.message = r, new Promise((n) => {
        this.resolve = n, this.dialog = !0;
      });
    }
  }
});
function Ys(e, t, s, r, n, i) {
  const o = $("KCardTitle"), a = $("KCardText"), p = $("KSpacer"), c = $("KButton"), m = $("KCardActions"), y = $("KCard"), F = $("KDialog");
  return u(), d(V, null, [
    R(e.$slots, "default"),
    P(F, {
      modelValue: e.dialog,
      "onUpdate:modelValue": t[2] || (t[2] = (O) => e.dialog = O),
      "max-width": "30vw",
      "min-width": "20vw"
    }, {
      default: w(() => [
        P(y, null, {
          default: w(() => [
            e.title ? (u(), C(o, { key: 0 }, {
              default: w(() => [
                j(k(e.title), 1)
              ]),
              _: 1
            })) : v("", !0),
            e.message ? (u(), C(a, { key: 1 }, {
              default: w(() => [
                j(k(e.message), 1)
              ]),
              _: 1
            })) : v("", !0),
            P(m, null, {
              default: w(() => [
                P(p),
                e.noLabel ? (u(), C(c, {
                  key: 0,
                  small: "",
                  onClick: t[0] || (t[0] = (O) => e.dismiss(!1))
                }, {
                  default: w(() => [
                    j(k(e.noLabel), 1)
                  ]),
                  _: 1
                })) : v("", !0),
                e.yesLabel ? (u(), C(c, {
                  key: 1,
                  small: "",
                  onClick: t[1] || (t[1] = (O) => e.dismiss(!0))
                }, {
                  default: w(() => [
                    j(k(e.yesLabel), 1)
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
const er = /* @__PURE__ */ b(Zs, [["render", Ys]]), tr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
const rr = { class: "k-date-time-picker" }, nr = ["type", "readonly"];
function or(e, t, s, r, n, i) {
  const o = $("KButton");
  return u(), d("div", rr, [
    z(f("input", {
      "onUpdate:modelValue": t[0] || (t[0] = (a) => e.localModelValue = a),
      class: "k-input",
      type: e.type,
      readonly: !e.editable
    }, null, 8, nr), [
      [Dt, e.localModelValue]
    ]),
    e.editable ? (u(), d(V, { key: 0 }, [
      P(o, {
        small: "",
        onClick: e.setToNow
      }, {
        default: w(() => [
          j(" Now ")
        ]),
        _: 1
      }, 8, ["onClick"]),
      P(o, {
        small: "",
        onClick: t[1] || (t[1] = (a) => e.$emit("update:modelValue", null))
      }, {
        default: w(() => [
          j(" Clear ")
        ]),
        _: 1
      })
    ], 64)) : v("", !0)
  ]);
}
const ir = /* @__PURE__ */ b(sr, [["render", or]]), ar = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
function ur(e, t, s, r, n, i) {
  const o = lt("click-away");
  return u(), d(V, null, [
    R(e.$slots, "activator", { on: e.on }),
    e.mounted ? (u(), C(Kt, {
      key: 0,
      to: ".k-app"
    }, [
      P(re, { name: "fade" }, {
        default: w(() => [
          e.dialog ? (u(), d("div", {
            key: 0,
            class: "k-dialog",
            style: G([e.style])
          }, [
            z((u(), d("div", {
              ref: "content",
              class: M(["k-dialog-content", e.classObj]),
              style: G([e.measurableStyles])
            }, [
              R(e.$slots, "default", { on: e.on })
            ], 6)), [
              [o, e.clickAway]
            ])
          ], 4)) : v("", !0)
        ]),
        _: 3
      })
    ])) : v("", !0)
  ], 64);
}
const cr = /* @__PURE__ */ b(lr, [["render", ur]]), dr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
      const e = L(this.size);
      return this.outline ? {
        borderStyle: "solid",
        borderWidth: L(this.outlineWidth),
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
function mr(e, t, s, r, n, i) {
  return u(), d("div", {
    class: "k-dot",
    style: G([e.style])
  }, [
    R(e.$slots, "default")
  ], 4);
}
const fr = /* @__PURE__ */ b(pr, [["render", mr]]), hr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
function br(e, t, s, r, n, i) {
  return u(), d("div", null, [
    e.label ? (u(), d("div", yr, k(e.label), 1)) : v("", !0),
    R(e.$slots, "default"),
    (u(!0), d(V, null, N(e.successMessages, (o, a) => (u(), d("div", {
      key: a,
      class: "k-formfield--success"
    }, k(o), 1))), 128)),
    (u(!0), d(V, null, N(e.errorMessages, (o, a) => (u(), d("div", {
      key: a,
      class: "k-formfield--error"
    }, k(o), 1))), 128))
  ]);
}
const gr = /* @__PURE__ */ b(_r, [["render", br]]), vr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
}), wr = { key: 0 }, $r = ["id"], Tr = ["src"], kr = ["id", "src"];
function Or(e, t, s, r, n, i) {
  return e.dataid ? (u(), d("span", wr, [
    f("a", {
      id: e.aid,
      href: "#",
      class: "functionMenuHotspot",
      onClick: t[2] || (t[2] = x((...o) => e.onclick && e.onclick(...o), ["prevent"]))
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
        onMouseover: t[0] || (t[0] = (...o) => e.onmouseover && e.onmouseover(...o)),
        onMouseout: t[1] || (t[1] = (...o) => e.onmouseout && e.onmouseout(...o))
      }, null, 40, kr))
    ], 8, $r),
    t[3] || (Ue(-1), t[3] = f("div", {
      id: e.zid,
      ref: "functionMenuDiv",
      class: "functionMenuDiv"
    }, null, 8, ["id"]), Ue(1), t[3])
  ])) : v("", !0);
}
const Cr = /* @__PURE__ */ b(Sr, [["render", Or]]), Pr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Cr
}, Symbol.toStringTag, { value: "Module" })), Rr = _({});
const Vr = { class: "k-progress-line" };
function Fr(e, t, s, r, n, i) {
  return u(), d("div", Vr);
}
const Er = /* @__PURE__ */ b(Rr, [["render", Fr]]), jr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Er
}, Symbol.toStringTag, { value: "Module" })), Lr = _({
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
], -1), Dr = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ f("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" })
], -1);
function Kr(e, t, s, r, n, i) {
  const o = $("KButton"), a = $("KCard");
  return u(), C(a, { class: "k-multi" }, {
    default: w(() => [
      P(Fe, {
        name: "fade",
        tag: "div"
      }, {
        default: w(() => [
          (u(!0), d(V, null, N(e.valueLocal, (p, c) => (u(), d("div", {
            key: `k-multi-${p}`,
            class: "k-multi-item"
          }, [
            f("div", Mr, [
              R(e.$slots, "default", {
                index: c,
                value: p,
                update: (m) => e.update(c, m)
              })
            ]),
            f("div", Nr, [
              e.canRemove ? (u(), C(o, {
                key: 0,
                text: "",
                onClick: (m) => e.remove(c)
              }, {
                default: w(() => [
                  Ar
                ]),
                _: 2
              }, 1032, ["onClick"])) : v("", !0),
              e.canAdd ? (u(), C(o, {
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
const Br = /* @__PURE__ */ b(Lr, [["render", Kr]]), Ir = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
function qr(e, t, s, r, n, i) {
  const o = $("KButton"), a = $("KCard");
  return u(), C(a, { class: "k-multi" }, {
    default: w(() => [
      P(Fe, {
        name: "fade",
        tag: "div"
      }, {
        default: w(() => [
          (u(!0), d(V, null, N(e.valueLocal, (p, c) => (u(), d("div", {
            key: `k-multi-${p}`,
            class: "k-multi-item"
          }, [
            f("div", xr, [
              R(e.$slots, "readonly", {
                index: c,
                value: p
              }, () => [
                j(k(p), 1)
              ])
            ]),
            f("div", zr, [
              P(o, {
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
      e.canAdd ? R(e.$slots, "add", {
        key: 0,
        add: e.add
      }) : v("", !0)
    ]),
    _: 3
  });
}
const Hr = /* @__PURE__ */ b(Ur, [["render", qr]]), Gr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
        this.nodes[s] = g(r, "data.ancestors", []);
      }
      return this.nodes[s];
    } finally {
      We.release(s);
    }
  }
}
const pt = new Jr(), Qr = _({
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
function Zr(e, t, s, r, n, i) {
  return u(), d("div", Xr, [
    (u(!0), d(V, null, N(e.breadcrumb, (o, a) => (u(), d(V, {
      key: o.dataid
    }, [
      j(k(o.name) + " ", 1),
      a < e.breadcrumb.length - 1 ? (u(), d(V, { key: 0 }, [
        j(" ▶ ")
      ], 64)) : v("", !0)
    ], 64))), 128))
  ]);
}
const mt = /* @__PURE__ */ b(Qr, [["render", Zr]]), Yr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mt
}, Symbol.toStringTag, { value: "Module" })), en = _({
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
const tn = { class: "k-node-picker-field" }, sn = ["value"];
function rn(e, t, s, r, n, i) {
  const o = $("KButton"), a = $("KNodeAncestor");
  return u(), d("div", tn, [
    f("input", {
      ref: "input",
      type: "text",
      class: "k-input",
      value: e.name,
      onFocus: t[0] || (t[0] = (...p) => e.openWindow && e.openWindow(...p))
    }, null, 40, sn),
    P(o, {
      small: "",
      onClick: e.openWindow
    }, {
      default: w(() => [
        j(k(e.browseButtonLabel), 1)
      ]),
      _: 1
    }, 8, ["onClick"]),
    e.clearable ? (u(), C(o, {
      key: 0,
      small: "",
      onClick: e.clear
    }, {
      default: w(() => [
        j(k(e.clearButtonLabel), 1)
      ]),
      _: 1
    }, 8, ["onClick"])) : v("", !0),
    e.dataid ? (u(), C(a, {
      key: 1,
      dataid: e.dataid
    }, null, 8, ["dataid"])) : v("", !0)
  ]);
}
const nn = /* @__PURE__ */ b(en, [["render", rn]]), on = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nn
}, Symbol.toStringTag, { value: "Module" })), an = _({
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
const ln = { class: "k-one-moment" }, un = { class: "k-one-moment-label" };
function cn(e, t, s, r, n, i) {
  const o = $("KSpinner"), a = $("KDialog");
  return u(), C(a, { "model-value": e.loading }, {
    default: w(() => [
      f("div", ln, [
        P(o, {
          height: 36,
          width: 36
        }),
        f("div", un, k(e.label), 1)
      ])
    ]),
    _: 1
  }, 8, ["model-value"]);
}
const dn = /* @__PURE__ */ b(an, [["render", cn]]), pn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dn
}, Symbol.toStringTag, { value: "Module" })), mn = _({
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
function fn(e, t, s, r, n, i) {
  return u(), d("div", null, [
    R(e.$slots, "default", { active: e.active })
  ]);
}
const hn = /* @__PURE__ */ b(mn, [["render", fn]]), _n = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: hn
}, Symbol.toStringTag, { value: "Module" })), yn = _({
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
const bn = { key: 0 }, gn = { class: "rhmuted" };
function vn(e, t, s, r, n, i) {
  return u(), d("h1", null, [
    j(k(e.title), 1),
    e.subtitle ? (u(), d("span", bn, [
      j(": "),
      f("span", gn, k(e.subtitle) + " - 2", 1)
    ])) : v("", !0)
  ]);
}
const Sn = /* @__PURE__ */ b(yn, [["render", vn], ["__scopeId", "data-v-8d8d8837"]]), wn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sn
}, Symbol.toStringTag, { value: "Module" })), $n = _({
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
const Tn = {
  key: 0,
  class: "k-pagination"
}, kn = { class: "k-pagination-buttons" }, On = {
  key: 0,
  class: "k-pagination-button"
}, Cn = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ f("path", { d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" })
], -1), Pn = [
  Cn
], Rn = { key: 0 }, Vn = ["onClick"], Fn = {
  key: 1,
  class: "k-pagination-button"
}, En = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ f("path", { d: "M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" })
], -1), jn = [
  En
];
function Ln(e, t, s, r, n, i) {
  const o = $("KSelect");
  return e.pagination.hasOtherPages ? (u(), d("div", Tn, [
    P(o, {
      modelValue: e.pageSize,
      "onUpdate:modelValue": t[0] || (t[0] = (a) => e.pageSize = a),
      items: e.pageSizes,
      label: "Page Size"
    }, null, 8, ["modelValue", "items"]),
    f("div", kn, [
      e.hasPrevious ? (u(), d("a", On, Pn)) : v("", !0),
      (u(!0), d(V, null, N(e.pageRange, (a) => (u(), d(V, { key: a }, [
        a === "|" ? (u(), d("div", Rn, "...")) : (u(), d("a", {
          key: 1,
          class: M(["k-pagination-button k-pagination-button-border", e.classObj(a)]),
          onClick: (p) => e.$emit("update:modelValue", a)
        }, k(a), 11, Vn))
      ], 64))), 128)),
      e.hasNext ? (u(), d("a", Fn, jn)) : v("", !0)
    ]),
    f("div", null, " Displaying " + k(e.pagination.startIndex) + "-" + k(e.pagination.endIndex) + " of " + k(e.pagination.count) + " items. ", 1)
  ])) : v("", !0);
}
const Mn = /* @__PURE__ */ b($n, [["render", Ln]]), Nn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Mn
}, Symbol.toStringTag, { value: "Module" })), An = _({
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
      const e = [], r = Math.max(0, this.pageNumber0 - 5), n = Math.min(this.lastPageNumber0, r + 10), i = Math.max(0, n - 10);
      for (let o = i; o <= n; o++)
        e.push(o);
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
const Dn = { class: "k-pagination2" }, Kn = { class: "k-pagination2-buttons" }, Bn = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ f("path", { d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" })
], -1), In = [
  Bn
], Un = ["onClick"], xn = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ f("path", { d: "M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" })
], -1), zn = [
  xn
];
function Wn(e, t, s, r, n, i) {
  const o = $("KSelect");
  return u(), d("div", Dn, [
    f("div", null, [
      P(o, {
        modelValue: e.pageSize,
        "onUpdate:modelValue": t[0] || (t[0] = (a) => e.pageSize = a),
        items: e.pageSizes,
        label: "Page Size"
      }, null, 8, ["modelValue", "items"])
    ]),
    e.pageCount > 1 ? (u(), d(V, { key: 0 }, [
      f("div", Kn, [
        e.hasPrevious ? (u(), d("a", {
          key: 0,
          class: "k-pagination2-arrow-button",
          onClick: t[1] || (t[1] = (a) => e.clickedPageNumber(e.pageNumber0 - 1))
        }, In)) : v("", !0),
        (u(!0), d(V, null, N(e.pageRange0, (a) => (u(), d("div", {
          key: a,
          class: M(["k-pagination2-button", e.classObj(a)]),
          onClick: (p) => e.clickedPageNumber(a)
        }, k(a + 1), 11, Un))), 128)),
        e.hasNext ? (u(), d("a", {
          key: 1,
          class: "k-pagination2-arrow-button",
          onClick: t[2] || (t[2] = (a) => e.clickedPageNumber(e.pageNumber0 + 1))
        }, zn)) : v("", !0)
      ]),
      f("div", null, k(e.pageNumber) + " of " + k(e.pageCount) + " pages", 1)
    ], 64)) : v("", !0)
  ]);
}
const qn = /* @__PURE__ */ b(An, [["render", Wn]]), Hn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qn
}, Symbol.toStringTag, { value: "Module" })), Gn = _({
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
const Jn = ["id", "value", "disabled"], Qn = ["for"];
function Xn(e, t, s, r, n, i) {
  const o = $("KSpinner"), a = $("KFormFieldWrapper");
  return u(), d("div", null, [
    P(a, {
      label: e.label,
      "success-messages": e.successMessages,
      "error-messages": e.errorMessages
    }, {
      default: w(() => [
        P(re, {
          name: "fade",
          mode: "out-in"
        }, {
          default: w(() => [
            e.loading ? (u(), C(o, { key: 0 })) : (u(), d("div", {
              key: 1,
              class: M(["k-radiogroup", e.classObj])
            }, [
              (u(!0), d(V, null, N(e.items, (p) => (u(), d("div", {
                key: e.getItemValue(p),
                class: "k-radiogroup-item"
              }, [
                z(f("input", {
                  id: e.getItemValue(p),
                  "onUpdate:modelValue": t[0] || (t[0] = (c) => e.localValue = c),
                  type: "radio",
                  value: e.getItemValue(p),
                  disabled: e.getItemDisabled(p)
                }, null, 8, Jn), [
                  [Bt, e.localValue]
                ]),
                f("label", {
                  for: e.getItemValue(p)
                }, k(e.getItemText(p)), 9, Qn)
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
const Zn = /* @__PURE__ */ b(Gn, [["render", Xn]]), Yn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zn
}, Symbol.toStringTag, { value: "Module" })), eo = _({
  inject: ["ksnackbar"],
  methods: {
    click() {
    }
  }
});
function to(e, t, s, r, n, i) {
  return u(), d("div", null, [
    f("button", {
      onClick: t[0] || (t[0] = (...o) => e.click && e.click(...o))
    }, "click")
  ]);
}
const so = /* @__PURE__ */ b(eo, [["render", to]]), ro = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: so
}, Symbol.toStringTag, { value: "Module" })), no = _({
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
const oo = { class: "k-select" }, io = ["value"];
function ao(e, t, s, r, n, i) {
  const o = $("KSpinner"), a = $("KFormFieldWrapper");
  return u(), C(a, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: w(() => [
      f("div", oo, [
        z(f("select", {
          "onUpdate:modelValue": t[0] || (t[0] = (p) => e.localValue = p),
          class: M(e.classObj)
        }, [
          (u(!0), d(V, null, N(e.items, (p) => (u(), d("option", {
            key: e.getItemValue(p),
            value: e.getItemValue(p)
          }, k(e.getItemText(p)), 9, io))), 128))
        ], 2), [
          [It, e.localValue]
        ]),
        P(re, { name: "fade" }, {
          default: w(() => [
            e.loading ? (u(), C(o, {
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
const lo = /* @__PURE__ */ b(no, [["render", ao]]), uo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: lo
}, Symbol.toStringTag, { value: "Module" })), co = _({
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
      actionLabel: n = "close",
      action: i
    }) {
      const o = this.nextIndex();
      i == null && (i = () => this.dismiss(o));
      const a = {
        title: t,
        message: s,
        timeout: r,
        actionLabel: n,
        action: i,
        type: e,
        index: o
      };
      this.nitems[o] = a, console.log(r), setInterval(() => this.dismiss(o), r);
    }
  }
});
const po = { class: "k-snackbar" }, mo = { class: "k-snackbar-item-message" }, fo = {
  key: 0,
  class: "k-snackbar-title"
}, ho = {
  key: 1,
  class: "k-snackbar-text"
}, _o = {
  key: 0,
  class: "k-snackbar-action"
}, yo = ["onClick"];
function bo(e, t, s, r, n, i) {
  return u(), d(V, null, [
    R(e.$slots, "default"),
    f("div", po, [
      P(Fe, {
        name: "slide",
        tag: "div",
        mode: "out-in"
      }, {
        default: w(() => [
          (u(!0), d(V, null, N(e.items, (o) => (u(), d("div", {
            key: o.index,
            class: M(["k-snackbar-item", e.classObj(o)])
          }, [
            f("div", mo, [
              o.title ? (u(), d("div", fo, k(o.title), 1)) : v("", !0),
              o.message ? (u(), d("div", ho, k(o.message), 1)) : v("", !0)
            ]),
            o.action ? (u(), d("div", _o, [
              f("a", {
                href: "#",
                onClick: x((a) => e.action(o), ["prevent"])
              }, k(o.actionLabel), 9, yo)
            ])) : v("", !0)
          ], 2))), 128))
        ]),
        _: 1
      })
    ])
  ], 64);
}
const go = /* @__PURE__ */ b(co, [["render", bo]]), vo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: go
}, Symbol.toStringTag, { value: "Module" })), So = _({
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
const wo = {
  key: 0,
  class: "j-sort-header-arrow"
}, $o = {
  key: 1,
  class: "j-sort-header-arrow"
};
function To(e, t, s, r, n, i) {
  return u(), d("a", {
    href: "#",
    onClick: t[0] || (t[0] = x((...o) => e.emitClick && e.emitClick(...o), ["prevent"]))
  }, [
    R(e.$slots, "default"),
    P(re, {
      name: "fade",
      mode: "out-in"
    }, {
      default: w(() => [
        e.isActive && e.sortAsc ? (u(), d("span", wo, "↓")) : e.isActive ? (u(), d("span", $o, "↑")) : v("", !0)
      ]),
      _: 1
    })
  ]);
}
const ko = /* @__PURE__ */ b(So, [["render", To]]), Oo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ko
}, Symbol.toStringTag, { value: "Module" }));
const Co = {}, Po = { class: "k-spacer" };
function Ro(e, t) {
  return u(), d("div", Po);
}
const Vo = /* @__PURE__ */ b(Co, [["render", Ro]]), Fo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Vo
}, Symbol.toStringTag, { value: "Module" })), je = _({
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
}, He = je.setup;
je.setup = He ? (e, t) => (qe(), He(e, t)) : qe;
const Eo = /* @__PURE__ */ f("circle", {
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), jo = /* @__PURE__ */ f("path", {
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), Lo = [
  Eo,
  jo
];
function Mo(e, t, s, r, n, i) {
  return u(), d("svg", {
    style: G(e.measurableStyles),
    class: "k-spinner",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, Lo, 4);
}
const No = /* @__PURE__ */ b(je, [["render", Mo]]), Ao = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: No
}, Symbol.toStringTag, { value: "Module" })), Le = _({
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
      return L(this.height);
    },
    innerSizePx() {
      return L(this.innerSize);
    },
    paddingPx() {
      return L(this.padding);
    },
    switchWidthPx() {
      return L(this.trans + this.height);
    },
    transPx() {
      return `translateX(${L(this.trans)})`;
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
}, Je = Le.setup;
Le.setup = Je ? (e, t) => (Ge(), Je(e, t)) : Ge;
const Do = /* @__PURE__ */ f("span", { class: "k-switch-slider" }, null, -1), Ko = [
  Do
];
function Bo(e, t, s, r, n, i) {
  return u(), d("div", {
    class: M(["k-switch", e.classObj]),
    onClick: t[0] || (t[0] = (o) => e.on = !e.on)
  }, Ko, 2);
}
const Io = /* @__PURE__ */ b(Le, [["render", Bo]]), Uo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Io
}, Symbol.toStringTag, { value: "Module" })), xo = _({
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
function zo(e, t, s, r, n, i) {
  const o = $("KLinearProgressIndicator");
  return u(), d("div", null, [
    e.loading ? (u(), C(o, { key: 0 })) : v("", !0),
    f("table", {
      class: M(["k-table", e.classObj])
    }, [
      R(e.$slots, "default")
    ], 2)
  ]);
}
const Wo = /* @__PURE__ */ b(xo, [["render", zo]]), qo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wo
}, Symbol.toStringTag, { value: "Module" })), Ho = _({
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
        const n = s.slice(0, r), i = s.slice(r), o = `${n}	${i}`;
        this.valueLocal = o, t.value = o, t.selectionStart = r + 1, t.selectionEnd = r + 1;
      }
    }
  }
});
const Go = ["rows"];
function Jo(e, t, s, r, n, i) {
  const o = $("KFormFieldWrapper");
  return u(), C(o, {
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
      }), null, 16, Go), [
        [Ve, e.valueLocal]
      ])
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const Qo = /* @__PURE__ */ b(Ho, [["render", Jo]]), Xo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qo
}, Symbol.toStringTag, { value: "Module" })), Zo = _({
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
const Yo = ["placeholder"];
function ei(e, t, s, r, n, i) {
  const o = $("KFormFieldWrapper");
  return u(), C(o, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: w(() => [
      z(f("input", {
        "onUpdate:modelValue": t[0] || (t[0] = (a) => e.value = a),
        class: M(["k-input-text-field", e.classObj]),
        placeholder: e.placeholder
      }, null, 10, Yo), [
        [Ve, e.value]
      ])
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const ti = /* @__PURE__ */ b(Zo, [["render", ei]]), si = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ti
}, Symbol.toStringTag, { value: "Module" })), ri = _({
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
}), ni = ["src"];
function oi(e, t, s, r, n, i) {
  return e.url ? (u(), d("img", {
    key: 0,
    src: e.url,
    style: G([e.measurableStyles])
  }, null, 12, ni)) : v("", !0);
}
const ii = /* @__PURE__ */ b(ri, [["render", oi]]), ai = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
    const s = t.first_name, r = t.last_name, n = t.name;
    return s || r ? [s, r, `(${n})`].join(" ") : n;
  }
  async lookup(t, s) {
    try {
      if (await Qe.acquire(s), !this.users[s]) {
        const r = await t.members.member(s, "v1"), n = g(r, "data.data.id"), i = g(r, "data.data.type"), o = this.fullName(g(r, "data.data"));
        n && (this.users[s] = { type: i, text: o, value: n });
      }
      return this.users[s];
    } finally {
      Qe.release(s);
    }
  }
}
const Te = new li(), ui = _({
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
const ci = {
  key: 0,
  class: "k-user-link"
};
function di(e, t, s, r, n, i) {
  const o = $("KUserGIF");
  return e.userRecLocal ? (u(), d("span", ci, [
    e.gif ? (u(), C(o, {
      key: 0,
      "user-rec": e.userRecLocal
    }, null, 8, ["user-rec"])) : v("", !0),
    j("  "),
    f("a", {
      href: "#",
      onClick: t[0] || (t[0] = x((...a) => e.click && e.click(...a), ["prevent"]))
    }, k(e.displayName), 1)
  ])) : v("", !0);
}
const pi = /* @__PURE__ */ b(ui, [["render", di]]), mi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pi
}, Symbol.toStringTag, { value: "Module" })), fi = _({
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
function hi(e, t, s, r, n, i) {
  const o = $("KUserGIF"), a = $("KAutocomplete"), p = $("KUserLink"), c = $("KFormFieldWrapper");
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
          P(o, {
            type: m?.type
          }, null, 8, ["type"])
        ]),
        item: w(({ item: m }) => [
          P(o, {
            type: m.type
          }, null, 8, ["type"]),
          j(" " + k(m.text), 1)
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
const _i = /* @__PURE__ */ b(fi, [["render", hi]]), yi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _i
}, Symbol.toStringTag, { value: "Module" })), bi = _({
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
}), gi = { key: 0 };
function vi(e, t, s, r, n, i) {
  return e.isSelected ? (u(), d("div", gi, [
    R(e.$slots, "default")
  ])) : v("", !0);
}
const Si = /* @__PURE__ */ b(bi, [["render", vi]]), wi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Si
}, Symbol.toStringTag, { value: "Module" })), $i = _({
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
const Ti = { class: "k-tabs" }, ki = { class: "k-tabs-nav" }, Oi = ["href", "onClick"], Ci = { class: "k-tabs-content" };
function Pi(e, t, s, r, n, i) {
  return u(), d("div", Ti, [
    f("div", ki, [
      (u(!0), d(V, null, N(e.tabs, (o) => (u(), d("div", {
        key: o.name,
        class: M(e.classObj(o))
      }, [
        f("a", {
          href: `#${o.name}`,
          onClick: (a) => e.selectTab(o.name)
        }, k(o.title), 9, Oi)
      ], 2))), 128))
    ]),
    f("div", Ci, [
      R(e.$slots, "default")
    ])
  ]);
}
const Ri = /* @__PURE__ */ b($i, [["render", Pi]]), Vi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ri
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
function Fi(e) {
  return e !== null && !se(e) && e.constructor !== null && !se(e.constructor) && q(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const _t = I("ArrayBuffer");
function Ei(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && _t(e.buffer), t;
}
const ji = he("string"), q = he("function"), yt = he("number"), Ae = (e) => e !== null && typeof e == "object", Li = (e) => e === !0 || e === !1, le = (e) => {
  if (Ne(e) !== "object")
    return !1;
  const t = Me(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Mi = I("Date"), Ni = I("File"), Ai = I("Blob"), Di = I("FileList"), Ki = (e) => Ae(e) && q(e.pipe), Bi = (e) => {
  const t = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || ht.call(e) === t || q(e.toString) && e.toString() === t);
}, Ii = I("URLSearchParams"), Ui = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ne(e, t, { allOwnKeys: s = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, n;
  if (typeof e != "object" && (e = [e]), Y(e))
    for (r = 0, n = e.length; r < n; r++)
      t.call(null, e[r], r, e);
  else {
    const i = s ? Object.getOwnPropertyNames(e) : Object.keys(e), o = i.length;
    let a;
    for (r = 0; r < o; r++)
      a = i[r], t.call(null, e[a], a, e);
  }
}
function bt(e, t) {
  t = t.toLowerCase();
  const s = Object.keys(e);
  let r = s.length, n;
  for (; r-- > 0; )
    if (n = s[r], t === n.toLowerCase())
      return n;
  return null;
}
const gt = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), vt = (e) => !se(e) && e !== gt;
function ke() {
  const { caseless: e } = vt(this) && this || {}, t = {}, s = (r, n) => {
    const i = e && bt(t, n) || n;
    le(t[i]) && le(r) ? t[i] = ke(t[i], r) : le(r) ? t[i] = ke({}, r) : Y(r) ? t[i] = r.slice() : t[i] = r;
  };
  for (let r = 0, n = arguments.length; r < n; r++)
    arguments[r] && ne(arguments[r], s);
  return t;
}
const xi = (e, t, s, { allOwnKeys: r } = {}) => (ne(t, (n, i) => {
  s && q(n) ? e[i] = ft(n, s) : e[i] = n;
}, { allOwnKeys: r }), e), zi = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Wi = (e, t, s, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), s && Object.assign(e.prototype, s);
}, qi = (e, t, s, r) => {
  let n, i, o;
  const a = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (n = Object.getOwnPropertyNames(e), i = n.length; i-- > 0; )
      o = n[i], (!r || r(o, e, t)) && !a[o] && (t[o] = e[o], a[o] = !0);
    e = s !== !1 && Me(e);
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
}, Ji = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Me(Uint8Array)), Qi = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let n;
  for (; (n = r.next()) && !n.done; ) {
    const i = n.value;
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
  function(s, r, n) {
    return r.toUpperCase() + n;
  }
), Xe = (({ hasOwnProperty: e }) => (t, s) => e.call(t, s))(Object.prototype), ea = I("RegExp"), St = (e, t) => {
  const s = Object.getOwnPropertyDescriptors(e), r = {};
  ne(s, (n, i) => {
    t(n, i, e) !== !1 && (r[i] = n);
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
  const s = {}, r = (n) => {
    n.forEach((i) => {
      s[i] = !0;
    });
  };
  return Y(e) ? r(e) : r(String(e).split(t)), s;
}, ra = () => {
}, na = (e, t) => (e = +e, Number.isFinite(e) ? e : t), ge = "abcdefghijklmnopqrstuvwxyz", Ze = "0123456789", wt = {
  DIGIT: Ze,
  ALPHA: ge,
  ALPHA_DIGIT: ge + ge.toUpperCase() + Ze
}, oa = (e = 16, t = wt.ALPHA_DIGIT) => {
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
  const t = new Array(10), s = (r, n) => {
    if (Ae(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[n] = r;
        const i = Y(r) ? [] : {};
        return ne(r, (o, a) => {
          const p = s(o, n + 1);
          !se(p) && (i[a] = p);
        }), t[n] = void 0, i;
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
  isString: ji,
  isNumber: yt,
  isBoolean: Li,
  isObject: Ae,
  isPlainObject: le,
  isUndefined: se,
  isDate: Mi,
  isFile: Ni,
  isBlob: Ai,
  isRegExp: ea,
  isFunction: q,
  isStream: Ki,
  isURLSearchParams: Ii,
  isTypedArray: Ji,
  isFileList: Di,
  forEach: ne,
  merge: ke,
  extend: xi,
  trim: Ui,
  stripBOM: zi,
  inherits: Wi,
  toFlatObject: qi,
  kindOf: Ne,
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
  toFiniteNumber: na,
  findKey: bt,
  global: gt,
  isContextDefined: vt,
  ALPHABET: wt,
  generateString: oa,
  isSpecCompliantForm: ia,
  toJSONObject: aa
};
function T(e, t, s, r, n) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), s && (this.config = s), r && (this.request = r), n && (this.response = n);
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
const $t = T.prototype, Tt = {};
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
Object.defineProperty($t, "isAxiosError", { value: !0 });
T.from = (e, t, s, r, n, i) => {
  const o = Object.create($t);
  return l.toFlatObject(e, o, function(p) {
    return p !== Error.prototype;
  }, (a) => a !== "isAxiosError"), T.call(o, e.message, t, s, r, n), o.cause = e, o.name = e.name, i && Object.assign(o, i), o;
};
const la = null;
function Oe(e) {
  return l.isPlainObject(e) || l.isArray(e);
}
function kt(e) {
  return l.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ye(e, t, s) {
  return e ? e.concat(t).map(function(n, i) {
    return n = kt(n), !s && i ? "[" + n + "]" : n;
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
  const r = s.metaTokens, n = s.visitor || m, i = s.dots, o = s.indexes, p = (s.Blob || typeof Blob < "u" && Blob) && l.isSpecCompliantForm(t);
  if (!l.isFunction(n))
    throw new TypeError("visitor must be a function");
  function c(h) {
    if (h === null)
      return "";
    if (l.isDate(h))
      return h.toISOString();
    if (!p && l.isBlob(h))
      throw new T("Blob is not supported. Use a Buffer instead.");
    return l.isArrayBuffer(h) || l.isTypedArray(h) ? p && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function m(h, S, K) {
    let A = h;
    if (h && !K && typeof h == "object") {
      if (l.endsWith(S, "{}"))
        S = r ? S : S.slice(0, -2), h = JSON.stringify(h);
      else if (l.isArray(h) && ua(h) || (l.isFileList(h) || l.endsWith(S, "[]")) && (A = l.toArray(h)))
        return S = kt(S), A.forEach(function(ie, Nt) {
          !(l.isUndefined(ie) || ie === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? Ye([S], Nt, i) : o === null ? S : S + "[]",
            c(ie)
          );
        }), !1;
    }
    return Oe(h) ? !0 : (t.append(Ye(K, S, i), c(h)), !1);
  }
  const y = [], F = Object.assign(ca, {
    defaultVisitor: m,
    convertValue: c,
    isVisitable: Oe
  });
  function O(h, S) {
    if (!l.isUndefined(h)) {
      if (y.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + S.join("."));
      y.push(h), l.forEach(h, function(A, Q) {
        (!(l.isUndefined(A) || A === null) && n.call(
          t,
          A,
          l.isString(Q) ? Q.trim() : Q,
          S,
          F
        )) === !0 && O(A, S ? S.concat(Q) : [Q]);
      }), y.pop();
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
  return this._pairs.map(function(n) {
    return s(n[0]) + "=" + s(n[1]);
  }, "").join("&");
};
function da(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Ct(e, t, s) {
  if (!t)
    return e;
  const r = s && s.encode || da, n = s && s.serialize;
  let i;
  if (n ? i = n(t, s) : i = l.isURLSearchParams(t) ? t.toString() : new De(t, s).toString(r), i) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
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
const tt = pa, Pt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, ma = typeof URLSearchParams < "u" ? URLSearchParams : De, fa = typeof FormData < "u" ? FormData : null, ha = (() => {
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
    visitor: function(s, r, n, i) {
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
  const n = s.length;
  let i;
  for (r = 0; r < n; r++)
    i = s[r], t[i] = e[i];
  return t;
}
function Rt(e) {
  function t(s, r, n, i) {
    let o = s[i++];
    const a = Number.isFinite(+o), p = i >= s.length;
    return o = !o && l.isArray(n) ? n.length : o, p ? (l.hasOwnProp(n, o) ? n[o] = [n[o], r] : n[o] = r, !a) : ((!n[o] || !l.isObject(n[o])) && (n[o] = []), t(s, r, n[o], i) && l.isArray(n[o]) && (n[o] = ga(n[o])), !a);
  }
  if (l.isFormData(e) && l.isFunction(e.entries)) {
    const s = {};
    return l.forEachEntry(e, (r, n) => {
      t(ba(r), n, s, 0);
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
  transitional: Pt,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, s) {
    const r = s.getContentType() || "", n = r.indexOf("application/json") > -1, i = l.isObject(t);
    if (i && l.isHTMLForm(t) && (t = new FormData(t)), l.isFormData(t))
      return n && n ? JSON.stringify(Rt(t)) : t;
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
    return i || n ? (s.setContentType("application/json", !1), Sa(t)) : t;
  }],
  transformResponse: [function(t) {
    const s = this.transitional || ye.transitional, r = s && s.forcedJSONParsing, n = this.responseType === "json";
    if (t && l.isString(t) && (r && !this.responseType || n)) {
      const o = !(s && s.silentJSONParsing) && n;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (o)
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
  let s, r, n;
  return e && e.split(`
`).forEach(function(o) {
    n = o.indexOf(":"), s = o.substring(0, n).trim().toLowerCase(), r = o.substring(n + 1).trim(), !(!s || t[s] && wa[s]) && (s === "set-cookie" ? t[s] ? t[s].push(r) : t[s] = [r] : t[s] = t[s] ? t[s] + ", " + r : r);
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
function ve(e, t, s, r, n) {
  if (l.isFunction(r))
    return r.call(this, t, s);
  if (n && (t = s), !!l.isString(t)) {
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
      value: function(n, i, o) {
        return this[r].call(this, t, n, i, o);
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
    const n = this;
    function i(a, p, c) {
      const m = ee(p);
      if (!m)
        throw new Error("header name must be a non-empty string");
      const y = l.findKey(n, m);
      (!y || n[y] === void 0 || c === !0 || c === void 0 && n[y] !== !1) && (n[y || p] = ue(a));
    }
    const o = (a, p) => l.forEach(a, (c, m) => i(c, m, p));
    return l.isPlainObject(t) || t instanceof this.constructor ? o(t, s) : l.isString(t) && (t = t.trim()) && !ka(t) ? o($a(t), s) : t != null && i(s, t, r), this;
  }
  get(t, s) {
    if (t = ee(t), t) {
      const r = l.findKey(this, t);
      if (r) {
        const n = this[r];
        if (!s)
          return n;
        if (s === !0)
          return Ta(n);
        if (l.isFunction(s))
          return s.call(this, n, r);
        if (l.isRegExp(s))
          return s.exec(n);
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
    let n = !1;
    function i(o) {
      if (o = ee(o), o) {
        const a = l.findKey(r, o);
        a && (!s || ve(r, r[a], a, s)) && (delete r[a], n = !0);
      }
    }
    return l.isArray(t) ? t.forEach(i) : i(t), n;
  }
  clear(t) {
    const s = Object.keys(this);
    let r = s.length, n = !1;
    for (; r--; ) {
      const i = s[r];
      (!t || ve(this, this[i], i, t, !0)) && (delete this[i], n = !0);
    }
    return n;
  }
  normalize(t) {
    const s = this, r = {};
    return l.forEach(this, (n, i) => {
      const o = l.findKey(r, i);
      if (o) {
        s[o] = ue(n), delete s[i];
        return;
      }
      const a = t ? Oa(i) : String(i).trim();
      a !== i && delete s[i], s[a] = ue(n), r[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const s = /* @__PURE__ */ Object.create(null);
    return l.forEach(this, (r, n) => {
      r != null && r !== !1 && (s[n] = t && l.isArray(r) ? r.join(", ") : r);
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
    return s.forEach((n) => r.set(n)), r;
  }
  static accessor(t) {
    const r = (this[st] = this[st] = {
      accessors: {}
    }).accessors, n = this.prototype;
    function i(o) {
      const a = ee(o);
      r[a] || (Ca(n, o), r[a] = !0);
    }
    return l.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
be.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
l.freezeMethods(be.prototype);
l.freezeMethods(be);
const B = be;
function Se(e, t) {
  const s = this || Ke, r = t || s, n = B.from(r.headers);
  let i = r.data;
  return l.forEach(e, function(a) {
    i = a.call(s, i, n.normalize(), t ? t.status : void 0);
  }), n.normalize(), i;
}
function Vt(e) {
  return !!(e && e.__CANCEL__);
}
function oe(e, t, s) {
  T.call(this, e ?? "canceled", T.ERR_CANCELED, t, s), this.name = "CanceledError";
}
l.inherits(oe, T, {
  __CANCEL__: !0
});
function Pa(e, t, s) {
  const r = s.config.validateStatus;
  !s.status || !r || r(s.status) ? e(s) : t(new T(
    "Request failed with status code " + s.status,
    [T.ERR_BAD_REQUEST, T.ERR_BAD_RESPONSE][Math.floor(s.status / 100) - 4],
    s.config,
    s.request,
    s
  ));
}
const Ra = D.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(s, r, n, i, o, a) {
        const p = [];
        p.push(s + "=" + encodeURIComponent(r)), l.isNumber(n) && p.push("expires=" + new Date(n).toGMTString()), l.isString(i) && p.push("path=" + i), l.isString(o) && p.push("domain=" + o), a === !0 && p.push("secure"), document.cookie = p.join("; ");
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
    function n(i) {
      let o = i;
      return t && (s.setAttribute("href", o), o = s.href), s.setAttribute("href", o), {
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
    return r = n(window.location.href), function(o) {
      const a = l.isString(o) ? n(o) : o;
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
function ja(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function La(e, t) {
  e = e || 10;
  const s = new Array(e), r = new Array(e);
  let n = 0, i = 0, o;
  return t = t !== void 0 ? t : 1e3, function(p) {
    const c = Date.now(), m = r[i];
    o || (o = c), s[n] = p, r[n] = c;
    let y = i, F = 0;
    for (; y !== n; )
      F += s[y++], y = y % e;
    if (n = (n + 1) % e, n === i && (i = (i + 1) % e), c - o < t)
      return;
    const O = m && c - m;
    return O ? Math.round(F * 1e3 / O) : void 0;
  };
}
function rt(e, t) {
  let s = 0;
  const r = La(50, 250);
  return (n) => {
    const i = n.loaded, o = n.lengthComputable ? n.total : void 0, a = i - s, p = r(a), c = i <= o;
    s = i;
    const m = {
      loaded: i,
      total: o,
      progress: o ? i / o : void 0,
      bytes: a,
      rate: p || void 0,
      estimated: p && o && c ? (o - i) / p : void 0,
      event: n
    };
    m[t ? "download" : "upload"] = !0, e(m);
  };
}
const Ma = typeof XMLHttpRequest < "u", Na = Ma && function(e) {
  return new Promise(function(s, r) {
    let n = e.data;
    const i = B.from(e.headers).normalize(), o = e.responseType;
    let a;
    function p() {
      e.cancelToken && e.cancelToken.unsubscribe(a), e.signal && e.signal.removeEventListener("abort", a);
    }
    l.isFormData(n) && (D.isStandardBrowserEnv || D.isStandardBrowserWebWorkerEnv) && i.setContentType(!1);
    let c = new XMLHttpRequest();
    if (e.auth) {
      const O = e.auth.username || "", h = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(O + ":" + h));
    }
    const m = Ft(e.baseURL, e.url);
    c.open(e.method.toUpperCase(), Ct(m, e.params, e.paramsSerializer), !0), c.timeout = e.timeout;
    function y() {
      if (!c)
        return;
      const O = B.from(
        "getAllResponseHeaders" in c && c.getAllResponseHeaders()
      ), S = {
        data: !o || o === "text" || o === "json" ? c.responseText : c.response,
        status: c.status,
        statusText: c.statusText,
        headers: O,
        config: e,
        request: c
      };
      Pa(function(A) {
        s(A), p();
      }, function(A) {
        r(A), p();
      }, S), c = null;
    }
    if ("onloadend" in c ? c.onloadend = y : c.onreadystatechange = function() {
      !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(y);
    }, c.onabort = function() {
      c && (r(new T("Request aborted", T.ECONNABORTED, e, c)), c = null);
    }, c.onerror = function() {
      r(new T("Network Error", T.ERR_NETWORK, e, c)), c = null;
    }, c.ontimeout = function() {
      let h = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const S = e.transitional || Pt;
      e.timeoutErrorMessage && (h = e.timeoutErrorMessage), r(new T(
        h,
        S.clarifyTimeoutError ? T.ETIMEDOUT : T.ECONNABORTED,
        e,
        c
      )), c = null;
    }, D.isStandardBrowserEnv) {
      const O = (e.withCredentials || Ea(m)) && e.xsrfCookieName && Ra.read(e.xsrfCookieName);
      O && i.set(e.xsrfHeaderName, O);
    }
    n === void 0 && i.setContentType(null), "setRequestHeader" in c && l.forEach(i.toJSON(), function(h, S) {
      c.setRequestHeader(S, h);
    }), l.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), o && o !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", rt(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", rt(e.onUploadProgress)), (e.cancelToken || e.signal) && (a = (O) => {
      c && (r(!O || O.type ? new oe(null, e, c) : O), c.abort(), c = null);
    }, e.cancelToken && e.cancelToken.subscribe(a), e.signal && (e.signal.aborted ? a() : e.signal.addEventListener("abort", a)));
    const F = ja(m);
    if (F && D.protocols.indexOf(F) === -1) {
      r(new T("Unsupported protocol " + F + ":", T.ERR_BAD_REQUEST, e));
      return;
    }
    c.send(n || null);
  });
}, ce = {
  http: la,
  xhr: Na
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
    for (let n = 0; n < t && (s = e[n], !(r = l.isString(s) ? ce[s.toLowerCase()] : s)); n++)
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
function we(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new oe(null, e);
}
function nt(e) {
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
const ot = (e) => e instanceof B ? e.toJSON() : e;
function X(e, t) {
  t = t || {};
  const s = {};
  function r(c, m, y) {
    return l.isPlainObject(c) && l.isPlainObject(m) ? l.merge.call({ caseless: y }, c, m) : l.isPlainObject(m) ? l.merge({}, m) : l.isArray(m) ? m.slice() : m;
  }
  function n(c, m, y) {
    if (l.isUndefined(m)) {
      if (!l.isUndefined(c))
        return r(void 0, c, y);
    } else
      return r(c, m, y);
  }
  function i(c, m) {
    if (!l.isUndefined(m))
      return r(void 0, m);
  }
  function o(c, m) {
    if (l.isUndefined(m)) {
      if (!l.isUndefined(c))
        return r(void 0, c);
    } else
      return r(void 0, m);
  }
  function a(c, m, y) {
    if (y in t)
      return r(c, m);
    if (y in e)
      return r(void 0, c);
  }
  const p = {
    url: i,
    method: i,
    data: i,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: a,
    headers: (c, m) => n(ot(c), ot(m), !0)
  };
  return l.forEach(Object.keys(e).concat(Object.keys(t)), function(m) {
    const y = p[m] || n, F = y(e[m], t[m], m);
    l.isUndefined(F) && y !== a || (s[m] = F);
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
  function n(i, o) {
    return "[Axios v" + Et + "] Transitional option '" + i + "'" + o + (r ? ". " + r : "");
  }
  return (i, o, a) => {
    if (t === !1)
      throw new T(
        n(o, " has been removed" + (s ? " in " + s : "")),
        T.ERR_DEPRECATED
      );
    return s && !it[o] && (it[o] = !0, console.warn(
      n(
        o,
        " has been deprecated since v" + s + " and will be removed in the near future"
      )
    )), t ? t(i, o, a) : !0;
  };
};
function Da(e, t, s) {
  if (typeof e != "object")
    throw new T("options must be an object", T.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let n = r.length;
  for (; n-- > 0; ) {
    const i = r[n], o = t[i];
    if (o) {
      const a = e[i], p = a === void 0 || o(a, i, e);
      if (p !== !0)
        throw new T("option " + i + " must be " + p, T.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (s !== !0)
      throw new T("Unknown option " + i, T.ERR_BAD_OPTION);
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
    const { transitional: r, paramsSerializer: n, headers: i } = s;
    r !== void 0 && Ce.assertOptions(r, {
      silentJSONParsing: U.transitional(U.boolean),
      forcedJSONParsing: U.transitional(U.boolean),
      clarifyTimeoutError: U.transitional(U.boolean)
    }, !1), n !== void 0 && Ce.assertOptions(n, {
      encode: U.function,
      serialize: U.function
    }, !0), s.method = (s.method || this.defaults.method || "get").toLowerCase();
    let o;
    o = i && l.merge(
      i.common,
      i[s.method]
    ), o && l.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (h) => {
        delete i[h];
      }
    ), s.headers = B.concat(o, i);
    const a = [];
    let p = !0;
    this.interceptors.request.forEach(function(S) {
      typeof S.runWhen == "function" && S.runWhen(s) === !1 || (p = p && S.synchronous, a.unshift(S.fulfilled, S.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(S) {
      c.push(S.fulfilled, S.rejected);
    });
    let m, y = 0, F;
    if (!p) {
      const h = [nt.bind(this), void 0];
      for (h.unshift.apply(h, a), h.push.apply(h, c), F = h.length, m = Promise.resolve(s); y < F; )
        m = m.then(h[y++], h[y++]);
      return m;
    }
    F = a.length;
    let O = s;
    for (y = 0; y < F; ) {
      const h = a[y++], S = a[y++];
      try {
        O = h(O);
      } catch (K) {
        S.call(this, K);
        break;
      }
    }
    try {
      m = nt.call(this, O);
    } catch (h) {
      return Promise.reject(h);
    }
    for (y = 0, F = c.length; y < F; )
      m = m.then(c[y++], c[y++]);
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
    return function(i, o, a) {
      return this.request(X(a || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: o
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
    this.promise.then((n) => {
      if (!r._listeners)
        return;
      let i = r._listeners.length;
      for (; i-- > 0; )
        r._listeners[i](n);
      r._listeners = null;
    }), this.promise.then = (n) => {
      let i;
      const o = new Promise((a) => {
        r.subscribe(a), i = a;
      }).then(n);
      return o.cancel = function() {
        r.unsubscribe(i);
      }, o;
    }, t(function(i, o, a) {
      r.reason || (r.reason = new oe(i, o, a), s(r.reason));
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
      token: new Ie(function(n) {
        t = n;
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
const Ua = Pe;
function jt(e) {
  const t = new de(e), s = ft(de.prototype.request, t);
  return l.extend(s, de.prototype, t, { allOwnKeys: !0 }), l.extend(s, t, null, { allOwnKeys: !0 }), s.create = function(n) {
    return jt(X(e, n));
  }, s;
}
const E = jt(Ke);
E.Axios = de;
E.CanceledError = oe;
E.CancelToken = Ka;
E.isCancel = Vt;
E.VERSION = Et;
E.toFormData = _e;
E.AxiosError = T;
E.Cancel = E.CanceledError;
E.all = function(t) {
  return Promise.all(t);
};
E.spread = Ba;
E.isAxiosError = Ia;
E.mergeConfig = X;
E.AxiosHeaders = B;
E.formToJSON = (e) => Rt(l.isHTMLForm(e) ? new FormData(e) : e);
E.HttpStatusCode = Ua;
E.default = E;
const Lt = E;
function xa(e) {
  return e == null;
}
var za = xa, Wa = function(t) {
  return typeof t == "object" && t !== null;
}, qa = -18, Ha = 5, Ga = 9, Ja = -72, Qa = -74, Xa = -68, Za = -69, Ya = -7, el = -127, tl = 1, sl = -107, rl = 10, nl = 2, ol = -42, il = -2, al = -8, ll = -128, ul = 3, cl = -4, dl = -110, pl = -109, ml = -3, fl = -102, hl = -1, _l = -196, yl = 0, bl = 8, gl = -75, vl = {
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
  IntegerType: nl,
  JavaObjectType: ol,
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
}, Mt = {
  createFormData() {
    return new FormData();
  }
};
function Sl(e) {
  const t = Lt.create({
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
function wl(e) {
  const t = Sl(e), s = e.username, r = e.password, n = e.otcsticket;
  if (n)
    t.defaults.headers.common.OTCSTicket = n;
  else if (s && r)
    t.interceptors.request.use(async (i) => {
      if (i.headers.common.OTCSTicket)
        return i;
      {
        const o = Mt.createFormData();
        o.append("username", s), o.append("password", r);
        const a = await Lt.post(`${e.baseUrl}/api/v1/auth/`, o);
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
class $l extends H {
  auth() {
    return this.session.get("/api/v1/auth/");
  }
}
var Tl = 834, kl = 1298, Ol = 30309, Cl = 907, Pl = 1, Rl = 480, Vl = 483, Fl = 481, El = 31711, jl = 290, Ll = 291, Ml = 274, Nl = 356, Al = 357, Dl = 530, Kl = 131, Bl = 132, Il = 207, Ul = 209, xl = 199, zl = 196, Wl = 194, ql = 298, Hl = 902, Gl = 345, Jl = 348, Ql = 346, Xl = 3030338, Zl = 3030339, Yl = 3030329, eu = 3030002, tu = 3030333, su = 3030004, ru = 3030335, nu = 3030334, ou = 3030205, iu = 136, au = 557, lu = 3030372, uu = 146, cu = 844, du = 270, pu = 276, mu = 277, fu = 215, hu = 602, _u = 144, yu = 1297, bu = 283, gu = 32912, vu = 32916, Su = 31707, wu = 32914, $u = 31709, Tu = 32917, ku = 32915, Ou = 32913, Cu = 31602, Pu = 31601, Ru = 31603, Vu = 335, Fu = 900, Eu = 749, ju = 2504, Lu = 904, Mu = 905, Nu = 903, Au = 1299, Du = 906, Ku = 0, Bu = 223, Iu = 2, Uu = 3030371, xu = 482, zu = 833, Wu = 282, qu = 226, Hu = 293, Gu = 731, Ju = 368, Qu = 147, Xu = 281, Zu = 924, Yu = 541, ec = 542, tc = 361, sc = 259, rc = 272, nc = 123475, oc = 123476, ic = 123469, ac = 123470, lc = 430, uc = 432, cc = 422, dc = 732, pc = 3030331, mc = 31710, fc = 410, hc = 414, _c = 919, yc = 920, bc = 273, gc = 1281, vc = 1282, Sc = 372, wc = 374, $c = 373, Tc = 870, kc = 532, Oc = 3030756, Cc = 208, Pc = 257, Rc = 371, Vc = 370, Fc = 3030203, Ec = 3030003, jc = 3030204, Lc = 398, Mc = 3030343, Nc = 424, Ac = 412, Dc = 419, Kc = 411, Bc = 415, Ic = 418, Uc = 416, xc = 417, zc = 218, Wc = 271, qc = 195, Hc = 202, Gc = 543, Jc = 201, Qc = 384, Xc = 380, Zc = 387, Yc = 829, ed = 31712, td = 31713, sd = 441, rd = 296, nd = 431, od = 327, id = 425, ad = 428, ld = 32918, ud = 32919, cd = 138, dd = 381, pd = 134, md = 299, fd = 139, hd = 555, _d = 554, yd = 552, bd = 553, gd = 556, vd = 551, Sd = 426, wd = 427, $d = 558, Td = 559, kd = 2505, Od = 835, Cd = 32901, Pd = 258, Rd = 369, Vd = 269, Fd = 278, Ed = 383, jd = 292, Ld = 31678, Md = 49547, Nd = 275, Ad = 1280, Dd = 1283, Kd = 797, Bd = 796, Id = 795, Ud = 3030202, xd = 3030201, zd = 3030001, Wd = 3030130, qd = 280, Hd = 421, Gd = 231, Jd = 206, Qd = 205, Xd = 204, Zd = 210, Yd = 212, ep = 230, tp = 268, sp = 145, rp = 130, np = 423, op = 531, ip = 526, ap = 527, lp = 3030330, up = 140, cp = 899, dp = 123461, pp = 133, mp = 198, fp = 347, hp = 987352, _p = 405, yp = 375, bp = 143, gp = 180, vp = 336, Sp = 162, wp = 901, $p = 141, Tp = 403, kp = 397, Op = 908, Cp = 413, Pp = 550, Rp = 137, Vp = 211, Fp = 148, Ep = 149, jp = 484, Lp = 1296, Mp = 525, Np = 142, Ap = 161, Dp = 529, Kp = 236, Bp = 235, Ip = 234, Up = 233, xp = 30303, zp = 128, Wp = 190, qp = 5573, Hp = 5574, Gp = 528, Jp = 154, Qp = 286, Xp = 285, $e = {
  "2WayTee": 294,
  Accession: Tl,
  ActiveFolder: kl,
  Activeview: Ol,
  ActivityManager: Cl,
  Alias: Pl,
  Appearance: Rl,
  AppearanceFolder: Vl,
  AppearancesVolume: Fl,
  ArchiveFolder: El,
  BackupManager: jl,
  BackupProcess: Ll,
  BestBets: Ml,
  Blog: Nl,
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
  CommWorkspace: nu,
  CommXSLVolume: ou,
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
  DPSFolder: Pu,
  DPSVolume: Ru,
  DTDLLNode: Vu,
  DynamicView: Fu,
  EMail: Eu,
  EmailConversationItems: ju,
  "Enterprise Archive Document": 753,
  Facet: Lu,
  FacetFolder: Mu,
  FacetTree: Nu,
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
  LLNodeFAQ: nc,
  LLNodeFAQEntry: oc,
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
  OTCIndexObj: Pc,
  Partition: Rc,
  PartitionMap: Vc,
  PersonalComm: Fc,
  PersonalCommSystemVolume: Ec,
  PersonalCommVol: jc,
  PersonalStagingFolder: Lc,
  PersonalWebpage: Mc,
  PhysicalItemBox: Nc,
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
  QuestionVolume: nd,
  RecentItems: od,
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
  SearchBroker: Pd,
  SearchEngine: Rd,
  SearchManager: Vd,
  SearchReport: Fd,
  SearchResultsTemplate: Ed,
  SearchTemplate: jd,
  Simplate: Ld,
  SkyPodLLVolume: Md,
  SliceFolder: Nd,
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
  Transfers: np,
  TransportBox: op,
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
  VolRecMan: Pp,
  VolRelease: Rp,
  VolReports: Vp,
  VolSystem: Fp,
  VolTracer: Ep,
  VolumeFolder: jp,
  VolumeLLVolume: Lp,
  VolWarehouse: Mp,
  VolWorkbin: Np,
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
    name: n = null,
    options: i = {}
  }) {
    console.assert(t != null, "parent_id cannot be null"), console.assert(s != null, "fileHandler cannot be null"), console.assert(
      ["v1", "v2"].includes(r),
      "apiVersion must be in ['v1','v2']"
    );
    const o = `api/${r}/nodes`;
    {
      const a = n || s.name, p = {
        ...i,
        type: $e.Document,
        name: a,
        parent_id: t,
        file: {
          file: s,
          name: a
        }
      };
      return this.session.postForm(o, p);
    }
  }
  async addDocumentMajor({
    parent_id: t,
    fileHandler: s,
    name: r = null,
    description: n = null,
    options: i = {}
  }) {
    const o = await this.addDocument({
      parent_id: t,
      fileHandler: s,
      name: r,
      options: {
        ...i,
        advanced_versioning: !0
      }
    }), a = o.data.id;
    return await this.session.versions.promote({
      dataid: a,
      versionNumber: 1,
      description: n
    }), await this.session.versions.deleteVersion({
      dataid: a,
      versionNumber: 1
    }), o;
  }
  addItem(t, s, r, n = {}) {
    return this.session.postBody("api/v2/nodes", {
      type: t,
      parent_id: s,
      name: r,
      ...n
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
  addGeneration(t, s, r, n, i = {}) {
    return this.addItem($e.Generation, t, s, {
      original_id: r,
      version_number: n,
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
    const n = {
      limit: 20,
      where_type: JSON.stringify([this.USER, this.GROUP]),
      query: t,
      ...s
    };
    return this.session.get(`api/${r}/members`, { params: n });
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
    fileName: n = null,
    options: i = {}
  }) {
    console.assert(t != null, "dataid cannot be null"), console.assert(s != null, "fileHandler cannot be null");
    const o = `api/${r}/nodes/${t}/versions`;
    {
      const a = n || s.name, p = {
        file: {
          file: s,
          name: a
        },
        ...i
      };
      return this.session.postForm(o, p);
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
    const n = `api/v2/nodes/${t}/versions/${s}/promote`;
    return this.session.postBody(n, {
      ...!!r && {
        description: r
      }
    });
  }
  async deleteVersion({ dataid: t, versionNumber: s, apiVersion: r = "v1" }) {
    console.assert(t != null, "dataid cannot be null"), console.assert(s != null, "number_to_keep must be an integer");
    const n = `api/${r}/nodes/${t}/versions/${s}`;
    return this.session.delete(n);
  }
  async purge({ dataid: t, number_to_keep: s = 1 }) {
    console.assert(t != null, "dataid cannot be null"), console.assert(!isNaN(s), "number_to_keep must be an integer");
    const r = `api/v2/nodes/${t}/versions`;
    return this.session.deleteForm(r, {
      number_to_keep: s
    });
  }
}
class nm extends H {
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
class om extends Error {
  code;
  data;
  constructor(t = at.INTERNALERROR.message, s = null, r = at.INTERNALERROR.code) {
    if (Wa(t)) {
      const n = t;
      super(n.message), this.code = n.code, this.data = n.data;
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
class im {
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
      throw new om(s.message, s.data, s.code);
    } else
      throw Error("The server did not respond correctly.");
  }
  // https://www.jsonrpc.org/specification#request_object
  // params is allowed to be null!
  // also on queue function below
  async request(t, s, r = ae.next) {
    const n = await this.session.postBody(this.relativePath, {
      rpc: this.requestObject(t, s, r)
    });
    return this.handleResponse(n.data);
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
    return g(r, "data.data", []).map((n) => {
      if (t)
        return this.handleResponse(n);
      try {
        return this.handleResponse(n);
      } catch (i) {
        return i;
      }
    });
  }
  rhnode(t, s, r = [], n = ae.next) {
    const i = {
      dataid: t,
      args: r
    };
    return this.request(s, i, n);
  }
  rhnodeQueue(t, s, r = [], n = ae.next) {
    const i = {
      dataid: t,
      args: r
    };
    return this.queue(s, i, n);
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
    return this._webreports == null && (this._webreports = new nm(this)), this._webreports;
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
    const s = Mt.createFormData();
    for (const [r, n] of Object.entries(t))
      n && n.name && n.file ? s.append(r, n.file, n.name) : Array.isArray(n) || this._isObject(n) || this._isBoolean(n) ? s.append(r, JSON.stringify(n)) : za(n) || s.append(r, n);
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
  "./components/Card/KCardText.vue": ns,
  "./components/Card/KCardTitle.vue": us,
  "./components/KAdminLink.vue": hs,
  "./components/KAlert.vue": Ss,
  "./components/KApp.vue": Os,
  "./components/KAutocomplete.vue": Ls,
  "./components/KBrowseLink.vue": zs,
  "./components/KButton.vue": Js,
  "./components/KConfirm.vue": tr,
  "./components/KDateTimePicker.vue": ar,
  "./components/KDialog.vue": dr,
  "./components/KDot.vue": hr,
  "./components/KFormFieldWrapper.vue": vr,
  "./components/KFunctionMenu.vue": Pr,
  "./components/KLinearProgressIndicator.vue": jr,
  "./components/KMulti.vue": Ir,
  "./components/KMulti2.vue": Gr,
  "./components/KNodeAncestor.vue": Yr,
  "./components/KNodePickerField.vue": on,
  "./components/KOneMoment.vue": pn,
  "./components/KPageDropZone.vue": _n,
  "./components/KPageTitle.vue": wn,
  "./components/KPagination.vue": Nn,
  "./components/KPagination2.vue": Hn,
  "./components/KRadioGroup.vue": Yn,
  "./components/KScratch.vue": ro,
  "./components/KSelect.vue": uo,
  "./components/KSnackbar.vue": vo,
  "./components/KSortHeader.vue": Oo,
  "./components/KSpacer.vue": Fo,
  "./components/KSpinner.vue": Ao,
  "./components/KSwitch.vue": Uo,
  "./components/KTable.vue": qo,
  "./components/KTextArea.vue": Xo,
  "./components/KTextField.vue": si,
  "./components/KUserGIF.vue": ai,
  "./components/KUserLink.vue": mi,
  "./components/KUserPicker.vue": yi,
  "./components/Tabs/KTabItem.vue": wi,
  "./components/Tabs/KTabs.vue": Vi
}), ym = {
  install(e, t) {
    Object.entries(lm).forEach(
      ([n, i]) => {
        const o = n?.split("/")?.pop()?.replace(/\.\w+$/, "");
        e.component(o, i.default);
      }
    );
    const s = new am(t), r = {
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
  ym as default,
  W as injectStrict,
  Z as sessionKey,
  Qs as snackbarKey
};
