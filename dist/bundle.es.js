import { defineComponent as y, h as Kt, openBlock as u, createElementBlock as d, renderSlot as V, inject as H, Fragment as P, createElementVNode as f, createBlock as C, Transition as re, withCtx as w, normalizeStyle as G, createCommentVNode as v, resolveComponent as T, createVNode as R, resolveDirective as ut, withDirectives as z, normalizeClass as A, withKeys as te, withModifiers as x, vModelText as Pe, renderList as M, createTextVNode as L, toDisplayString as k, mergeProps as ct, vModelDynamic as Bt, Teleport as It, setBlockTracking as xe, TransitionGroup as Ve, getCurrentInstance as Ut, vModelRadio as xt, vModelSelect as zt, useCssVars as dt } from "vue";
import { directive as pt } from "vue3-click-away";
import _ from "lodash.get";
import Ee from "@chriscdn/promise-semaphore";
import { format as ze } from "date-fns";
import { disableBodyScroll as Wt, enableBodyScroll as qt } from "body-scroll-lock";
import Ht from "build-url";
import Gt from "js-cookie";
import Jt from "mitt";
const Qt = {
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
}, fe = y({
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
}), Xt = y({
  mixins: [fe, Qt],
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
      return Kt(
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
const Zt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xt
}, Symbol.toStringTag, { value: "Module" })), Yt = y({});
const g = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [r, o] of t)
    s[r] = o;
  return s;
}, es = { class: "k-card-actions" };
function ts(e, t, s, r, o, i) {
  return u(), d("div", es, [
    V(e.$slots, "default")
  ]);
}
const ss = /* @__PURE__ */ g(Yt, [["render", ts]]), rs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ss
}, Symbol.toStringTag, { value: "Module" })), os = y({});
const ns = { class: "k-card-text" };
function is(e, t, s, r, o, i) {
  return u(), d("div", ns, [
    V(e.$slots, "default")
  ]);
}
const as = /* @__PURE__ */ g(os, [["render", is]]), ls = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: as
}, Symbol.toStringTag, { value: "Module" })), us = y({});
const cs = { class: "k-card-title" };
function ds(e, t, s, r, o, i) {
  return u(), d("div", cs, [
    V(e.$slots, "default")
  ]);
}
const ps = /* @__PURE__ */ g(us, [["render", ds]]), ms = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ps
}, Symbol.toStringTag, { value: "Module" })), fs = y({
  setup() {
    return { config: H("config", {}) };
  }
}), hs = /* @__PURE__ */ f("hr", null, null, -1), _s = ["href"];
function ys(e, t, s, r, o, i) {
  return u(), d(P, null, [
    hs,
    f("a", {
      href: `${e.config.baseURL}?func=admin.index`
    }, "Admin Home", 8, _s)
  ], 64);
}
const bs = /* @__PURE__ */ g(fs, [["render", ys]]), gs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bs
}, Symbol.toStringTag, { value: "Module" })), vs = y({
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
}), Ss = y({
  mixins: [vs],
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
}), ws = { class: "flex-grow" };
function $s(e, t, s, r, o, i) {
  return u(), C(re, { name: "fade" }, {
    default: w(() => [
      e.visibleLocal ? (u(), d("div", {
        key: 0,
        class: "flex items-center rounded text-main-bright p-2",
        style: G([e.colorableBackgroundStyle])
      }, [
        f("div", ws, [
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
const Ts = /* @__PURE__ */ g(Ss, [["render", $s]]), ks = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ts
}, Symbol.toStringTag, { value: "Module" }));
const Os = {}, Cs = { class: "k-app" };
function Rs(e, t) {
  const s = T("KSnackbar"), r = T("KConfirm");
  return u(), d("div", Cs, [
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
const Ps = /* @__PURE__ */ g(Os, [["render", Rs]]), Vs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ps
}, Symbol.toStringTag, { value: "Module" })), Es = y({
  directives: {
    ClickAway: pt
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
const Fs = { class: "k-autocomplete-input" }, Ls = ["placeholder", "readonly"], js = {
  key: 0,
  class: "k-autocomplete-items"
}, As = ["onClick"];
function Ms(e, t, s, r, o, i) {
  const n = ut("click-away");
  return z((u(), d("div", {
    class: "k-autocomplete",
    style: G([e.style])
  }, [
    V(e.$slots, "prepend", { item: e.localValue }),
    f("div", Fs, [
      z(f("input", {
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = (a) => e.inputText = a),
        class: A(["k-input", { invalidSelection: !e.isValidSelection }]),
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
      }, null, 42, Ls), [
        [Pe, e.inputText]
      ]),
      e.focus && e.items.length && e.inputText ? (u(), d("div", js, [
        (u(!0), d(P, null, M(e.itemsFiltered, (a, p) => (u(), d("div", {
          key: p,
          class: A(["k-autocomplete-item", { "k-autocomplete-active": e.currentFocus == p }]),
          onClick: (c) => e.select(p)
        }, [
          V(e.$slots, "item", { item: a }, () => [
            L(k(a), 1)
          ])
        ], 10, As))), 128))
      ])) : v("", !0)
    ])
  ], 4)), [
    [n, e.setBlur]
  ]);
}
const Ns = /* @__PURE__ */ g(Es, [["render", Ms]]), Ds = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ns
}, Symbol.toStringTag, { value: "Module" })), We = new Ee();
class Ks {
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
const Bs = new Ks(), Is = y({
  setup() {
    return { session: H("session", {}) };
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
        e && (this.nodeRecLocal = await Bs.lookup(this.session, e));
      },
      immediate: !0
    }
  }
}), Us = { key: 0 }, xs = ["src"], zs = ["href"], Ws = ["innerHTML"];
function qs(e, t, s, r, o, i) {
  const n = T("KFunctionMenu");
  return e.nodeRecResolved ? (u(), d("span", Us, [
    e.image ? (u(), d("img", {
      key: 0,
      src: e.nodeRecResolved.gif
    }, null, 8, xs)) : v("", !0),
    L(" "),
    f("a", {
      href: e.nodeRecResolved.url
    }, k(e.nodeRecResolved.name), 9, zs),
    e.clickable ? (u(), C(n, {
      key: 1,
      dataid: e.nodeRecResolved.dataid
    }, null, 8, ["dataid"])) : v("", !0),
    f("span", {
      innerHTML: e.nodeRecResolved.modifiedImageCallback
    }, null, 8, Ws)
  ])) : v("", !0);
}
const Hs = /* @__PURE__ */ g(Is, [["render", qs]]), Gs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Hs
}, Symbol.toStringTag, { value: "Module" })), Js = y({
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
const Qs = ["disabled"];
function Xs(e, t, s, r, o, i) {
  return u(), d("button", ct({
    class: ["k-button", e.classObj],
    disabled: e.disabled,
    type: "button"
  }, e.$attrs, {
    onClick: t[0] || (t[0] = (n) => e.$emit("click"))
  }), [
    V(e.$slots, "default")
  ], 16, Qs);
}
const Zs = /* @__PURE__ */ g(Js, [["render", Xs]]), Ys = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zs
}, Symbol.toStringTag, { value: "Module" })), er = y({
  provide() {
    return {
      kconfirm: this,
      resolve: null
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
function tr(e, t, s, r, o, i) {
  const n = T("KCardTitle"), a = T("KCardText"), p = T("KSpacer"), c = T("KButton"), m = T("KCardActions"), b = T("KCard"), E = T("KDialog");
  return u(), d(P, null, [
    V(e.$slots, "default"),
    R(E, {
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
                  class: "ml-1",
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
const sr = /* @__PURE__ */ g(er, [["render", tr]]), rr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: sr
}, Symbol.toStringTag, { value: "Module" })), or = y({
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
const nr = { class: "k-date-time-picker" }, ir = ["type", "readonly"];
function ar(e, t, s, r, o, i) {
  const n = T("KButton");
  return u(), d("div", nr, [
    z(f("input", {
      "onUpdate:modelValue": t[0] || (t[0] = (a) => e.localModelValue = a),
      class: "k-input",
      type: e.type,
      readonly: !e.editable
    }, null, 8, ir), [
      [Bt, e.localModelValue]
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
const lr = /* @__PURE__ */ g(or, [["render", ar]]), ur = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: lr
}, Symbol.toStringTag, { value: "Module" })), cr = y({
  directives: {
    ClickAway: pt
  },
  mixins: [fe],
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
      this.$emit("update:modelValue", e), e ? (await this.$nextTick(), Wt(this.$refs.content)) : qt(this.$refs.content);
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
function dr(e, t, s, r, o, i) {
  const n = ut("click-away");
  return u(), d(P, null, [
    V(e.$slots, "activator", { on: e.on }),
    e.mounted ? (u(), C(It, {
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
              class: A(["k-dialog-content", e.classObj]),
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
const pr = /* @__PURE__ */ g(cr, [["render", dr]]), mr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pr
}, Symbol.toStringTag, { value: "Module" })), fr = y({
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
function hr(e, t, s, r, o, i) {
  return u(), d("div", {
    class: "k-dot",
    style: G([e.style])
  }, [
    V(e.$slots, "default")
  ], 4);
}
const _r = /* @__PURE__ */ g(fr, [["render", hr]]), yr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _r
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
}), br = {
  mixins: [J]
};
const gr = {
  key: 0,
  class: "k-form-field-label"
};
function vr(e, t, s, r, o, i) {
  return u(), d("div", null, [
    e.label ? (u(), d("div", gr, k(e.label), 1)) : v("", !0),
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
const Sr = /* @__PURE__ */ g(br, [["render", vr]]), wr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sr,
  mixin: J
}, Symbol.toStringTag, { value: "Module" }));
function pe(e, t) {
  const s = H(e, t);
  if (!s)
    throw new Error(`Could not resolve ${e.description}`);
  return s;
}
const Fe = Symbol("session"), Le = Symbol("config"), wm = Symbol("snackbar"), $r = y({
  setup() {
    return { config: pe(Le) };
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
}), Tr = { key: 0 }, kr = ["id"], Or = ["src"], Cr = ["id", "src"];
function Rr(e, t, s, r, o, i) {
  return e.dataid ? (u(), d("span", Tr, [
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
      }, null, 8, Or)) : (u(), d("img", {
        key: 1,
        id: e.xid,
        src: e.image,
        border: "0",
        alt: "Functions",
        title: "Functions",
        onMouseover: t[0] || (t[0] = (...n) => e.onmouseover && e.onmouseover(...n)),
        onMouseout: t[1] || (t[1] = (...n) => e.onmouseout && e.onmouseout(...n))
      }, null, 40, Cr))
    ], 8, kr),
    t[3] || (xe(-1), t[3] = f("div", {
      id: e.zid,
      ref: "functionMenuDiv",
      class: "functionMenuDiv"
    }, null, 8, ["id"]), xe(1), t[3])
  ])) : v("", !0);
}
const Pr = /* @__PURE__ */ g($r, [["render", Rr]]), Vr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pr
}, Symbol.toStringTag, { value: "Module" })), Er = y({});
const Fr = { class: "k-progress-line" };
function Lr(e, t, s, r, o, i) {
  return u(), d("div", Fr);
}
const jr = /* @__PURE__ */ g(Er, [["render", Lr]]), Ar = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: jr
}, Symbol.toStringTag, { value: "Module" })), Mr = y({
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
const Nr = { class: "k-multi-widget" }, Dr = { class: "k-multi-buttons" }, Kr = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ f("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z" })
], -1), Br = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ f("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" })
], -1);
function Ir(e, t, s, r, o, i) {
  const n = T("KButton"), a = T("KCard");
  return u(), C(a, { class: "k-multi" }, {
    default: w(() => [
      R(Ve, {
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
            f("div", Dr, [
              e.canRemove ? (u(), C(n, {
                key: 0,
                text: "",
                onClick: (m) => e.remove(c)
              }, {
                default: w(() => [
                  Kr
                ]),
                _: 2
              }, 1032, ["onClick"])) : v("", !0),
              e.canAdd ? (u(), C(n, {
                key: 1,
                text: "",
                onClick: (m) => e.add(c)
              }, {
                default: w(() => [
                  Br
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
const Ur = /* @__PURE__ */ g(Mr, [["render", Ir]]), xr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ur
}, Symbol.toStringTag, { value: "Module" })), zr = y({
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
const Wr = { class: "k-multi-widget" }, qr = { class: "k-multi-buttons" }, Hr = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ f("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z" })
], -1);
function Gr(e, t, s, r, o, i) {
  const n = T("KButton"), a = T("KCard");
  return u(), C(a, { class: "k-multi" }, {
    default: w(() => [
      R(Ve, {
        name: "fade",
        tag: "div"
      }, {
        default: w(() => [
          (u(!0), d(P, null, M(e.valueLocal, (p, c) => (u(), d("div", {
            key: `k-multi-${p}`,
            class: "k-multi-item"
          }, [
            f("div", Wr, [
              V(e.$slots, "readonly", {
                index: c,
                value: p
              }, () => [
                L(k(p), 1)
              ])
            ]),
            f("div", qr, [
              R(n, {
                text: "",
                onClick: (m) => e.remove(c)
              }, {
                default: w(() => [
                  Hr
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
const Jr = /* @__PURE__ */ g(zr, [["render", Gr]]), Qr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Jr
}, Symbol.toStringTag, { value: "Module" })), qe = new Ee();
class Xr {
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
        this.nodes[s] = _(r, "data.ancestors", []);
      }
      return this.nodes[s];
    } finally {
      qe.release(s);
    }
  }
}
const mt = new Xr(), Zr = y({
  setup() {
    return { session: H("session", {}) };
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
  //   computed: {},
  watch: {
    dataid: {
      async handler(e) {
        e && (this.breadcrumb = await mt.lookup(this.session, e));
      },
      immediate: !0
    }
  }
});
const Yr = { class: "k-node-breadcrumb" };
function eo(e, t, s, r, o, i) {
  return u(), d("div", Yr, [
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
const ft = /* @__PURE__ */ g(Zr, [["render", eo]]), to = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ft
}, Symbol.toStringTag, { value: "Module" })), so = y({
  setup() {
    const e = H("session", {}), t = H("config", {});
    return { session: e, config: t };
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
    uniqueID() {
      return `targetbrowse_${Ut().uid}`;
    },
    // breadcrumbString() {
    //   if (this.breadcrumb) {
    //     return `Path: ${this.breadcrumb.replace(':', ' &#9654; ')}`
    //   } else {
    //     return null
    //   }
    // },
    globalCallbackFunctionName() {
      return `${this.uniqueID}_DoSelection`;
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
        formname: "ignored",
        fieldPrefix: this.uniqueID
      };
    },
    url() {
      return Ht(this.config.baseURL, {
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
        this.dataid ? this.breadcrumb = await mt.lookup(
          this.session,
          this.dataid
        ) : this.breadcrumb = [];
      },
      immediate: !0
    }
  },
  async mounted() {
    window.PGDLORCOJEEWEAQEFAUS = this.callback;
  },
  beforeUnmount() {
    delete window.PGDLORCOJEEWEAQEFAUS;
  },
  methods: {
    openWindow() {
      window.open(this.url, "WindowName", this.windowParams);
      const e = this.$refs.input;
      e && e.blur();
    },
    targetBrowseObjID() {
      return this.objid ?? parseInt(Gt.get("TargetBrowseObjID") ?? "0");
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
  },
  components: { KNodeAncestor: ft }
});
const ro = { class: "k-node-picker-field" }, oo = ["value"];
function no(e, t, s, r, o, i) {
  const n = T("KButton"), a = T("KNodeAncestor");
  return u(), d("div", ro, [
    f("input", {
      ref: "input",
      type: "text",
      class: "k-input",
      value: e.name,
      onFocus: t[0] || (t[0] = (...p) => e.openWindow && e.openWindow(...p))
    }, null, 40, oo),
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
const io = /* @__PURE__ */ g(so, [["render", no]]), ao = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: io
}, Symbol.toStringTag, { value: "Module" })), lo = y({
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
const uo = { class: "k-one-moment" }, co = { class: "k-one-moment-label" };
function po(e, t, s, r, o, i) {
  const n = T("KSpinner"), a = T("KDialog");
  return u(), C(a, { "model-value": e.loading }, {
    default: w(() => [
      f("div", uo, [
        R(n, {
          height: 36,
          width: 36
        }),
        f("div", co, k(e.label), 1)
      ])
    ]),
    _: 1
  }, 8, ["model-value"]);
}
const mo = /* @__PURE__ */ g(lo, [["render", po]]), fo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mo
}, Symbol.toStringTag, { value: "Module" })), ho = y({
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
function _o(e, t, s, r, o, i) {
  return u(), d("div", null, [
    V(e.$slots, "default", { active: e.active })
  ]);
}
const yo = /* @__PURE__ */ g(ho, [["render", _o]]), bo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: yo
}, Symbol.toStringTag, { value: "Module" })), go = y({
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
const vo = { key: 0 }, So = { class: "rhmuted" };
function wo(e, t, s, r, o, i) {
  return u(), d("h1", null, [
    L(k(e.title), 1),
    e.subtitle ? (u(), d("span", vo, [
      L(": "),
      f("span", So, k(e.subtitle) + " - 2", 1)
    ])) : v("", !0)
  ]);
}
const $o = /* @__PURE__ */ g(go, [["render", wo], ["__scopeId", "data-v-8d8d8837"]]), To = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $o
}, Symbol.toStringTag, { value: "Module" })), ko = y({
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
const Oo = {
  key: 0,
  class: "k-pagination"
}, Co = { class: "k-pagination-buttons" }, Ro = {
  key: 0,
  class: "k-pagination-button"
}, Po = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ f("path", { d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" })
], -1), Vo = [
  Po
], Eo = { key: 0 }, Fo = ["onClick"], Lo = {
  key: 1,
  class: "k-pagination-button"
}, jo = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ f("path", { d: "M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" })
], -1), Ao = [
  jo
];
function Mo(e, t, s, r, o, i) {
  const n = T("KSelect");
  return e.pagination.hasOtherPages ? (u(), d("div", Oo, [
    R(n, {
      modelValue: e.pageSize,
      "onUpdate:modelValue": t[0] || (t[0] = (a) => e.pageSize = a),
      items: e.pageSizes,
      label: "Page Size"
    }, null, 8, ["modelValue", "items"]),
    f("div", Co, [
      e.hasPrevious ? (u(), d("a", Ro, Vo)) : v("", !0),
      (u(!0), d(P, null, M(e.pageRange, (a) => (u(), d(P, { key: a }, [
        a === "|" ? (u(), d("div", Eo, "...")) : (u(), d("a", {
          key: 1,
          class: A(["k-pagination-button k-pagination-button-border", e.classObj(a)]),
          onClick: (p) => e.$emit("update:modelValue", a)
        }, k(a), 11, Fo))
      ], 64))), 128)),
      e.hasNext ? (u(), d("a", Lo, Ao)) : v("", !0)
    ]),
    f("div", null, " Displaying " + k(e.pagination.startIndex) + "-" + k(e.pagination.endIndex) + " of " + k(e.pagination.count) + " items. ", 1)
  ])) : v("", !0);
}
const No = /* @__PURE__ */ g(ko, [["render", Mo]]), Do = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: No
}, Symbol.toStringTag, { value: "Module" })), Ko = y({
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
const Bo = { class: "k-pagination2" }, Io = { class: "k-pagination2-buttons" }, Uo = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ f("path", { d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" })
], -1), xo = [
  Uo
], zo = ["onClick"], Wo = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ f("path", { d: "M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" })
], -1), qo = [
  Wo
];
function Ho(e, t, s, r, o, i) {
  const n = T("KSelect");
  return u(), d("div", Bo, [
    f("div", null, [
      R(n, {
        modelValue: e.pageSize,
        "onUpdate:modelValue": t[0] || (t[0] = (a) => e.pageSize = a),
        items: e.pageSizes,
        label: "Page Size"
      }, null, 8, ["modelValue", "items"])
    ]),
    e.pageCount > 1 ? (u(), d(P, { key: 0 }, [
      f("div", Io, [
        e.hasPrevious ? (u(), d("a", {
          key: 0,
          class: "k-pagination2-arrow-button",
          onClick: t[1] || (t[1] = (a) => e.clickedPageNumber(e.pageNumber0 - 1))
        }, xo)) : v("", !0),
        (u(!0), d(P, null, M(e.pageRange0, (a) => (u(), d("div", {
          key: a,
          class: A(["k-pagination2-button", e.classObj(a)]),
          onClick: (p) => e.clickedPageNumber(a)
        }, k(a + 1), 11, zo))), 128)),
        e.hasNext ? (u(), d("a", {
          key: 1,
          class: "k-pagination2-arrow-button",
          onClick: t[2] || (t[2] = (a) => e.clickedPageNumber(e.pageNumber0 + 1))
        }, qo)) : v("", !0)
      ]),
      f("div", null, k(e.pageNumber) + " of " + k(e.pageCount) + " pages", 1)
    ], 64)) : v("", !0)
  ]);
}
const Go = /* @__PURE__ */ g(Ko, [["render", Ho]]), Jo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Go
}, Symbol.toStringTag, { value: "Module" })), Qo = y({
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
const Xo = ["id", "value", "disabled"], Zo = ["for"];
function Yo(e, t, s, r, o, i) {
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
              class: A(["k-radiogroup", e.classObj])
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
                }, null, 8, Xo), [
                  [xt, e.localValue]
                ]),
                f("label", {
                  for: e.getItemValue(p)
                }, k(e.getItemText(p)), 9, Zo)
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
const en = /* @__PURE__ */ g(Qo, [["render", Yo]]), tn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: en
}, Symbol.toStringTag, { value: "Module" })), X = Jt();
function ht(e) {
  X.emit("success", e);
}
function sn(e) {
  X.emit("error", e);
}
const rn = y({
  inject: ["ksnackbar"],
  methods: {
    click() {
      ht({ message: "hello" });
    }
  }
});
function on(e, t, s, r, o, i) {
  return u(), d("div", null, [
    f("button", {
      onClick: t[0] || (t[0] = (...n) => e.click && e.click(...n))
    }, "click")
  ]);
}
const nn = /* @__PURE__ */ g(rn, [["render", on]]), an = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nn
}, Symbol.toStringTag, { value: "Module" })), ln = y({
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
const un = { class: "k-select" }, cn = ["value"];
function dn(e, t, s, r, o, i) {
  const n = T("KSpinner"), a = T("KFormFieldWrapper");
  return u(), C(a, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: w(() => [
      f("div", un, [
        z(f("select", {
          "onUpdate:modelValue": t[0] || (t[0] = (p) => e.localValue = p),
          class: A(e.classObj)
        }, [
          (u(!0), d(P, null, M(e.items, (p) => (u(), d("option", {
            key: e.getItemValue(p),
            value: e.getItemValue(p)
          }, k(e.getItemText(p)), 9, cn))), 128))
        ], 2), [
          [zt, e.localValue]
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
const pn = /* @__PURE__ */ g(ln, [["render", dn]]), mn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pn
}, Symbol.toStringTag, { value: "Module" })), fn = y({
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
  mounted() {
    X.on("success", this.success), X.on("error", this.error);
  },
  unmounted() {
    X.off("success", this.success), X.off("error", this.error);
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
const hn = { class: "k-snackbar" }, _n = { class: "k-snackbar-item-message" }, yn = {
  key: 0,
  class: "k-snackbar-title"
}, bn = {
  key: 1,
  class: "k-snackbar-text"
}, gn = {
  key: 0,
  class: "k-snackbar-action"
}, vn = ["onClick"];
function Sn(e, t, s, r, o, i) {
  return u(), d(P, null, [
    V(e.$slots, "default"),
    f("div", hn, [
      R(Ve, {
        name: "slide",
        tag: "div",
        mode: "out-in"
      }, {
        default: w(() => [
          (u(!0), d(P, null, M(e.items, (n) => (u(), d("div", {
            key: n.index,
            class: A(["k-snackbar-item", e.classObj(n)])
          }, [
            f("div", _n, [
              n.title ? (u(), d("div", yn, k(n.title), 1)) : v("", !0),
              n.message ? (u(), d("div", bn, k(n.message), 1)) : v("", !0)
            ]),
            n.action ? (u(), d("div", gn, [
              f("a", {
                href: "#",
                onClick: x((a) => e.action(n), ["prevent"])
              }, k(n.actionLabel), 9, vn)
            ])) : v("", !0)
          ], 2))), 128))
        ]),
        _: 1
      })
    ])
  ], 64);
}
const wn = /* @__PURE__ */ g(fn, [["render", Sn]]), $n = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: wn
}, Symbol.toStringTag, { value: "Module" })), Tn = y({
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
const kn = {
  key: 0,
  class: "j-sort-header-arrow"
}, On = {
  key: 1,
  class: "j-sort-header-arrow"
};
function Cn(e, t, s, r, o, i) {
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
        e.isActive && e.sortAsc ? (u(), d("span", kn, "↓")) : e.isActive ? (u(), d("span", On, "↑")) : v("", !0)
      ]),
      _: 1
    })
  ]);
}
const Rn = /* @__PURE__ */ g(Tn, [["render", Cn]]), Pn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Rn
}, Symbol.toStringTag, { value: "Module" }));
const Vn = {}, En = { class: "k-spacer" };
function Fn(e, t) {
  return u(), d("div", En);
}
const Ln = /* @__PURE__ */ g(Vn, [["render", Fn]]), jn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ln
}, Symbol.toStringTag, { value: "Module" })), je = y({
  mixins: [fe],
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
  dt((e) => ({
    "519b76bc": e.color
  }));
}, Ge = je.setup;
je.setup = Ge ? (e, t) => (He(), Ge(e, t)) : He;
const An = /* @__PURE__ */ f("circle", {
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), Mn = /* @__PURE__ */ f("path", {
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), Nn = [
  An,
  Mn
];
function Dn(e, t, s, r, o, i) {
  return u(), d("svg", {
    style: G(e.measurableStyles),
    class: "k-spinner",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, Nn, 4);
}
const Kn = /* @__PURE__ */ g(je, [["render", Dn]]), Bn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Kn
}, Symbol.toStringTag, { value: "Module" })), Ae = y({
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
  dt((e) => ({
    f984ea98: e.switchWidthPx,
    "0b657735": e.heightPx,
    "4fc9dc79": e.innerSizePx,
    56563113: e.paddingPx,
    bd22c72c: e.transPx
  }));
}, Qe = Ae.setup;
Ae.setup = Qe ? (e, t) => (Je(), Qe(e, t)) : Je;
const In = /* @__PURE__ */ f("span", { class: "k-switch-slider" }, null, -1), Un = [
  In
];
function xn(e, t, s, r, o, i) {
  return u(), d("div", {
    class: A(["k-switch", e.classObj]),
    onClick: t[0] || (t[0] = (n) => e.on = !e.on)
  }, Un, 2);
}
const zn = /* @__PURE__ */ g(Ae, [["render", xn]]), Wn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zn
}, Symbol.toStringTag, { value: "Module" })), qn = y({
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
function Hn(e, t, s, r, o, i) {
  const n = T("KLinearProgressIndicator");
  return u(), d(P, null, [
    e.loading ? (u(), C(n, { key: 0 })) : v("", !0),
    f("table", {
      class: A(["k-table", e.classObj])
    }, [
      V(e.$slots, "default")
    ], 2)
  ], 64);
}
const Gn = /* @__PURE__ */ g(qn, [["render", Hn]]), Jn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Gn
}, Symbol.toStringTag, { value: "Module" })), Qn = y({
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
    // outerStyle() {
    //   return {
    //     width: this.width,
    //     height: this.height,
    //   }
    // },
    // lineNumberItemStyle() {
    //   return {
    //     // height: this.lineHeight,
    //     lineHeight: this.lineHeight,
    //     fontSize: '1em',
    //   }
    // },
    // textareaStyle() {
    //   return {
    //     lineHeight: this.lineHeight,
    //     fontSize: this.fontSize,
    //   }
    // },
    // lineCount() {
    //   return (this.valueLocal || '').split(/\r\n|\r|\n/).length
    // },
    // effectiveLineCount() {
    //   return Math.max(this.lineCount, this.minLineNumbers)
    // },
    valueLocal: {
      set(e) {
        this.$emit("update:modelValue", e);
      },
      get() {
        return this.modelValue;
      }
    }
  },
  methods: {
    tabber(e) {
      const t = e.target, s = this.valueLocal, r = t.selectionStart;
      if (r) {
        const o = s.slice(0, r), i = s.slice(r), n = `${o}	${i}`;
        this.valueLocal = n, t.value = n, t.selectionStart = r + 1, t.selectionEnd = r + 1;
      }
    }
  }
});
const Xn = ["rows"];
function Zn(e, t, s, r, o, i) {
  const n = T("KFormFieldWrapper");
  return u(), C(n, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: w(() => [
      z(f("textarea", ct({
        "onUpdate:modelValue": t[0] || (t[0] = (a) => e.valueLocal = a)
      }, e.$attrs, {
        spellcheck: "false",
        class: [e.classObj, "k-textarea"],
        rows: e.rows,
        onKeydown: t[1] || (t[1] = te(x((...a) => e.tabber && e.tabber(...a), ["prevent"]), ["tab"]))
      }), null, 16, Xn), [
        [Pe, e.valueLocal]
      ])
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const Yn = /* @__PURE__ */ g(Qn, [["render", Zn]]), ei = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Yn
}, Symbol.toStringTag, { value: "Module" })), ti = y({
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
        return this.modelValue;
      },
      set(e) {
        this.$emit("update:modelValue", e);
      }
    }
  }
});
const si = ["placeholder"];
function ri(e, t, s, r, o, i) {
  const n = T("KFormFieldWrapper");
  return u(), C(n, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: w(() => [
      z(f("input", {
        "onUpdate:modelValue": t[0] || (t[0] = (a) => e.value = a),
        class: A(["k-input-text-field", e.classObj]),
        placeholder: e.placeholder
      }, null, 10, si), [
        [Pe, e.value]
      ])
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const oi = /* @__PURE__ */ g(ti, [["render", ri]]), ni = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: oi
}, Symbol.toStringTag, { value: "Module" })), ii = y({
  setup() {
    const e = pe(Le), t = pe(Fe);
    return { config: e, session: t };
  },
  mixins: [fe],
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
}), ai = ["src"];
function li(e, t, s, r, o, i) {
  return e.url ? (u(), d("img", {
    key: 0,
    src: e.url,
    style: G([e.measurableStyles])
  }, null, 12, ai)) : v("", !0);
}
const ui = /* @__PURE__ */ g(ii, [["render", li]]), ci = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ui
}, Symbol.toStringTag, { value: "Module" })), Xe = new Ee();
class di {
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
      if (await Xe.acquire(s), !this.users[s]) {
        const r = await t.members.member(s, "v1"), o = _(r, "data.data.id"), i = _(r, "data.data.type"), n = this.fullName(_(r, "data.data"));
        o && (this.users[s] = { type: i, text: n, value: o });
      }
      return this.users[s];
    } finally {
      Xe.release(s);
    }
  }
}
const Te = new di(), pi = y({
  setup() {
    return { session: pe(Fe) };
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
const mi = {
  key: 0,
  class: "k-user-link"
};
function fi(e, t, s, r, o, i) {
  const n = T("KUserGIF");
  return e.userRecLocal ? (u(), d("span", mi, [
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
const hi = /* @__PURE__ */ g(pi, [["render", fi]]), _i = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: hi
}, Symbol.toStringTag, { value: "Module" })), yi = y({
  mixins: [J],
  setup() {
    return { session: H("session", {}) };
  },
  props: {
    modelValue: {
      type: [Number, Object],
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
    formatChoice(e) {
      return _(e, "text", "");
    },
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
const bi = ["innerHTML"];
function gi(e, t, s, r, o, i) {
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
          R(n, { "user-rec": m }, null, 8, ["user-rec"])
        ]),
        item: w(({ item: m }) => [
          R(n, {
            type: m.type
          }, null, 8, ["type"]),
          f("span", {
            innerHTML: e.formatChoice(m)
          }, null, 8, bi)
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
const vi = /* @__PURE__ */ g(yi, [["render", gi]]), Si = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vi
}, Symbol.toStringTag, { value: "Module" })), wi = y({
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
}), $i = { key: 0 };
function Ti(e, t, s, r, o, i) {
  return e.isSelected ? (u(), d("div", $i, [
    V(e.$slots, "default")
  ])) : v("", !0);
}
const ki = /* @__PURE__ */ g(wi, [["render", Ti]]), Oi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ki
}, Symbol.toStringTag, { value: "Module" })), Ci = y({
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
const Ri = { class: "k-tabs" }, Pi = { class: "k-tabs-nav" }, Vi = ["href", "onClick"], Ei = { class: "k-tabs-content" };
function Fi(e, t, s, r, o, i) {
  return u(), d("div", Ri, [
    f("div", Pi, [
      (u(!0), d(P, null, M(e.tabs, (n) => (u(), d("div", {
        key: n.props.name,
        class: A(e.classObj(n))
      }, [
        f("a", {
          href: `#${n.props.name}`,
          onClick: (a) => e.selectTab(n.props.name)
        }, k(n.props.title), 9, Vi)
      ], 2))), 128))
    ]),
    f("div", Ei, [
      V(e.$slots, "default")
    ])
  ]);
}
const Li = /* @__PURE__ */ g(Ci, [["render", Fi]]), ji = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Li
}, Symbol.toStringTag, { value: "Module" }));
function _t(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: yt } = Object.prototype, { getPrototypeOf: Me } = Object, Ne = ((e) => (t) => {
  const s = yt.call(t);
  return e[s] || (e[s] = s.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), I = (e) => (e = e.toLowerCase(), (t) => Ne(t) === e), he = (e) => (t) => typeof t === e, { isArray: Y } = Array, se = he("undefined");
function Ai(e) {
  return e !== null && !se(e) && e.constructor !== null && !se(e.constructor) && W(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const bt = I("ArrayBuffer");
function Mi(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && bt(e.buffer), t;
}
const Ni = he("string"), W = he("function"), gt = he("number"), De = (e) => e !== null && typeof e == "object", Di = (e) => e === !0 || e === !1, le = (e) => {
  if (Ne(e) !== "object")
    return !1;
  const t = Me(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Ki = I("Date"), Bi = I("File"), Ii = I("Blob"), Ui = I("FileList"), xi = (e) => De(e) && W(e.pipe), zi = (e) => {
  const t = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || yt.call(e) === t || W(e.toString) && e.toString() === t);
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
function vt(e, t) {
  t = t.toLowerCase();
  const s = Object.keys(e);
  let r = s.length, o;
  for (; r-- > 0; )
    if (o = s[r], t === o.toLowerCase())
      return o;
  return null;
}
const St = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), wt = (e) => !se(e) && e !== St;
function ke() {
  const { caseless: e } = wt(this) && this || {}, t = {}, s = (r, o) => {
    const i = e && vt(t, o) || o;
    le(t[i]) && le(r) ? t[i] = ke(t[i], r) : le(r) ? t[i] = ke({}, r) : Y(r) ? t[i] = r.slice() : t[i] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && oe(arguments[r], s);
  return t;
}
const Hi = (e, t, s, { allOwnKeys: r } = {}) => (oe(t, (o, i) => {
  s && W(o) ? e[i] = _t(o, s) : e[i] = o;
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
  if (!gt(t))
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
), Ze = (({ hasOwnProperty: e }) => (t, s) => e.call(t, s))(Object.prototype), oa = I("RegExp"), $t = (e, t) => {
  const s = Object.getOwnPropertyDescriptors(e), r = {};
  oe(s, (o, i) => {
    t(o, i, e) !== !1 && (r[i] = o);
  }), Object.defineProperties(e, r);
}, na = (e) => {
  $t(e, (t, s) => {
    if (W(e) && ["arguments", "caller", "callee"].indexOf(s) !== -1)
      return !1;
    const r = e[s];
    if (W(r)) {
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
}, la = (e, t) => (e = +e, Number.isFinite(e) ? e : t), ge = "abcdefghijklmnopqrstuvwxyz", Ye = "0123456789", Tt = {
  DIGIT: Ye,
  ALPHA: ge,
  ALPHA_DIGIT: ge + ge.toUpperCase() + Ye
}, ua = (e = 16, t = Tt.ALPHA_DIGIT) => {
  let s = "";
  const { length: r } = t;
  for (; e--; )
    s += t[Math.random() * r | 0];
  return s;
};
function ca(e) {
  return !!(e && W(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const da = (e) => {
  const t = new Array(10), s = (r, o) => {
    if (De(r)) {
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
  isArrayBuffer: bt,
  isBuffer: Ai,
  isFormData: zi,
  isArrayBufferView: Mi,
  isString: Ni,
  isNumber: gt,
  isBoolean: Di,
  isObject: De,
  isPlainObject: le,
  isUndefined: se,
  isDate: Ki,
  isFile: Bi,
  isBlob: Ii,
  isRegExp: oa,
  isFunction: W,
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
  hasOwnProperty: Ze,
  hasOwnProp: Ze,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: $t,
  freezeMethods: na,
  toObjectSet: ia,
  toCamelCase: ra,
  noop: aa,
  toFiniteNumber: la,
  findKey: vt,
  global: St,
  isContextDefined: wt,
  ALPHABET: Tt,
  generateString: ua,
  isSpecCompliantForm: ca,
  toJSONObject: da
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
const kt = $.prototype, Ot = {};
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
  Ot[e] = { value: e };
});
Object.defineProperties($, Ot);
Object.defineProperty(kt, "isAxiosError", { value: !0 });
$.from = (e, t, s, r, o, i) => {
  const n = Object.create(kt);
  return l.toFlatObject(e, n, function(p) {
    return p !== Error.prototype;
  }, (a) => a !== "isAxiosError"), $.call(n, e.message, t, s, r, o), n.cause = e, n.name = e.name, i && Object.assign(n, i), n;
};
const pa = null;
function Oe(e) {
  return l.isPlainObject(e) || l.isArray(e);
}
function Ct(e) {
  return l.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function et(e, t, s) {
  return e ? e.concat(t).map(function(o, i) {
    return o = Ct(o), !s && i ? "[" + o + "]" : o;
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
    let N = h;
    if (h && !K && typeof h == "object") {
      if (l.endsWith(S, "{}"))
        S = r ? S : S.slice(0, -2), h = JSON.stringify(h);
      else if (l.isArray(h) && ma(h) || (l.isFileList(h) || l.endsWith(S, "[]")) && (N = l.toArray(h)))
        return S = Ct(S), N.forEach(function(ie, Dt) {
          !(l.isUndefined(ie) || ie === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            n === !0 ? et([S], Dt, i) : n === null ? S : S + "[]",
            c(ie)
          );
        }), !1;
    }
    return Oe(h) ? !0 : (t.append(et(K, S, i), c(h)), !1);
  }
  const b = [], E = Object.assign(fa, {
    defaultVisitor: m,
    convertValue: c,
    isVisitable: Oe
  });
  function O(h, S) {
    if (!l.isUndefined(h)) {
      if (b.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + S.join("."));
      b.push(h), l.forEach(h, function(N, Q) {
        (!(l.isUndefined(N) || N === null) && o.call(
          t,
          N,
          l.isString(Q) ? Q.trim() : Q,
          S,
          E
        )) === !0 && O(N, S ? S.concat(Q) : [Q]);
      }), b.pop();
    }
  }
  if (!l.isObject(e))
    throw new TypeError("data must be an object");
  return O(e), t;
}
function tt(e) {
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
const Rt = Ke.prototype;
Rt.append = function(t, s) {
  this._pairs.push([t, s]);
};
Rt.toString = function(t) {
  const s = t ? function(r) {
    return t.call(this, r, tt);
  } : tt;
  return this._pairs.map(function(o) {
    return s(o[0]) + "=" + s(o[1]);
  }, "").join("&");
};
function ha(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Pt(e, t, s) {
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
const st = _a, Vt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, ya = typeof URLSearchParams < "u" ? URLSearchParams : Ke, ba = FormData, ga = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), va = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), D = {
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
  return _e(e, new D.classes.URLSearchParams(), Object.assign({
    visitor: function(s, r, o, i) {
      return D.isNode && l.isBuffer(s) ? (this.append(r, s.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function wa(e) {
  return l.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function $a(e) {
  const t = {}, s = Object.keys(e);
  let r;
  const o = s.length;
  let i;
  for (r = 0; r < o; r++)
    i = s[r], t[i] = e[i];
  return t;
}
function Et(e) {
  function t(s, r, o, i) {
    let n = s[i++];
    const a = Number.isFinite(+n), p = i >= s.length;
    return n = !n && l.isArray(o) ? o.length : n, p ? (l.hasOwnProp(o, n) ? o[n] = [o[n], r] : o[n] = r, !a) : ((!o[n] || !l.isObject(o[n])) && (o[n] = []), t(s, r, o[n], i) && l.isArray(o[n]) && (o[n] = $a(o[n])), !a);
  }
  if (l.isFormData(e) && l.isFunction(e.entries)) {
    const s = {};
    return l.forEachEntry(e, (r, o) => {
      t(wa(r), o, s, 0);
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
  transitional: Vt,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, s) {
    const r = s.getContentType() || "", o = r.indexOf("application/json") > -1, i = l.isObject(t);
    if (i && l.isHTMLForm(t) && (t = new FormData(t)), l.isFormData(t))
      return o && o ? JSON.stringify(Et(t)) : t;
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
        const p = this.env && this.env.FormData;
        return _e(
          a ? { "files[]": t } : t,
          p && new p(),
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
  ye.headers[t] = l.merge(Ta);
});
const Be = ye, Oa = l.toObjectSet([
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
}, rt = Symbol("internals");
function ee(e) {
  return e && String(e).trim().toLowerCase();
}
function ue(e) {
  return e === !1 || e == null ? e : l.isArray(e) ? e.map(ue) : String(e);
}
function Ra(e) {
  const t = /* @__PURE__ */ Object.create(null), s = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = s.exec(e); )
    t[r[1]] = r[2];
  return t;
}
function Pa(e) {
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
function Va(e) {
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
    return l.isPlainObject(t) || t instanceof this.constructor ? n(t, s) : l.isString(t) && (t = t.trim()) && !Pa(t) ? n(Ca(t), s) : t != null && i(s, t, r), this;
  }
  get(t, s) {
    if (t = ee(t), t) {
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
    const r = (this[rt] = this[rt] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(n) {
      const a = ee(n);
      r[a] || (Ea(o, n), r[a] = !0);
    }
    return l.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
be.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
l.freezeMethods(be.prototype);
l.freezeMethods(be);
const B = be;
function Se(e, t) {
  const s = this || Be, r = t || s, o = B.from(r.headers);
  let i = r.data;
  return l.forEach(e, function(a) {
    i = a.call(s, i, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), i;
}
function Ft(e) {
  return !!(e && e.__CANCEL__);
}
function ne(e, t, s) {
  $.call(this, e ?? "canceled", $.ERR_CANCELED, t, s), this.name = "CanceledError";
}
l.inherits(ne, $, {
  __CANCEL__: !0
});
function Fa(e, t, s) {
  const r = s.config.validateStatus;
  !s.status || !r || r(s.status) ? e(s) : t(new $(
    "Request failed with status code " + s.status,
    [$.ERR_BAD_REQUEST, $.ERR_BAD_RESPONSE][Math.floor(s.status / 100) - 4],
    s.config,
    s.request,
    s
  ));
}
const La = D.isStandardBrowserEnv ? (
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
function ja(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Aa(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Lt(e, t) {
  return e && !ja(t) ? Aa(e, t) : t;
}
const Ma = D.isStandardBrowserEnv ? (
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
function Na(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Da(e, t) {
  e = e || 10;
  const s = new Array(e), r = new Array(e);
  let o = 0, i = 0, n;
  return t = t !== void 0 ? t : 1e3, function(p) {
    const c = Date.now(), m = r[i];
    n || (n = c), s[o] = p, r[o] = c;
    let b = i, E = 0;
    for (; b !== o; )
      E += s[b++], b = b % e;
    if (o = (o + 1) % e, o === i && (i = (i + 1) % e), c - n < t)
      return;
    const O = m && c - m;
    return O ? Math.round(E * 1e3 / O) : void 0;
  };
}
function ot(e, t) {
  let s = 0;
  const r = Da(50, 250);
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
const Ka = typeof XMLHttpRequest < "u", Ba = Ka && function(e) {
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
    const m = Lt(e.baseURL, e.url);
    c.open(e.method.toUpperCase(), Pt(m, e.params, e.paramsSerializer), !0), c.timeout = e.timeout;
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
      Fa(function(N) {
        s(N), p();
      }, function(N) {
        r(N), p();
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
      const S = e.transitional || Vt;
      e.timeoutErrorMessage && (h = e.timeoutErrorMessage), r(new $(
        h,
        S.clarifyTimeoutError ? $.ETIMEDOUT : $.ECONNABORTED,
        e,
        c
      )), c = null;
    }, D.isStandardBrowserEnv) {
      const O = (e.withCredentials || Ma(m)) && e.xsrfCookieName && La.read(e.xsrfCookieName);
      O && i.set(e.xsrfHeaderName, O);
    }
    o === void 0 && i.setContentType(null), "setRequestHeader" in c && l.forEach(i.toJSON(), function(h, S) {
      c.setRequestHeader(S, h);
    }), l.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), n && n !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", ot(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", ot(e.onUploadProgress)), (e.cancelToken || e.signal) && (a = (O) => {
      c && (r(!O || O.type ? new ne(null, e, c) : O), c.abort(), c = null);
    }, e.cancelToken && e.cancelToken.subscribe(a), e.signal && (e.signal.aborted ? a() : e.signal.addEventListener("abort", a)));
    const E = Na(m);
    if (E && D.protocols.indexOf(E) === -1) {
      r(new $("Unsupported protocol " + E + ":", $.ERR_BAD_REQUEST, e));
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
function nt(e) {
  return we(e), e.headers = B.from(e.headers), e.data = Se.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Ia.getAdapter(e.adapter || Be.adapter)(e).then(function(r) {
    return we(e), r.data = Se.call(
      e,
      e.transformResponse,
      r
    ), r.headers = B.from(r.headers), r;
  }, function(r) {
    return Ft(r) || (we(e), r && r.response && (r.response.data = Se.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = B.from(r.response.headers))), Promise.reject(r);
  });
}
const it = (e) => e instanceof B ? e.toJSON() : e;
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
    headers: (c, m) => o(it(c), it(m), !0)
  };
  return l.forEach(Object.keys(e).concat(Object.keys(t)), function(m) {
    const b = p[m] || o, E = b(e[m], t[m], m);
    l.isUndefined(E) && b !== a || (s[m] = E);
  }), s;
}
const jt = "1.3.2", Ie = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ie[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const at = {};
Ie.transitional = function(t, s, r) {
  function o(i, n) {
    return "[Axios v" + jt + "] Transitional option '" + i + "'" + n + (r ? ". " + r : "");
  }
  return (i, n, a) => {
    if (t === !1)
      throw new $(
        o(n, " has been removed" + (s ? " in " + s : "")),
        $.ERR_DEPRECATED
      );
    return s && !at[n] && (at[n] = !0, console.warn(
      o(
        n,
        " has been deprecated since v" + s + " and will be removed in the near future"
      )
    )), t ? t(i, n, a) : !0;
  };
};
function Ua(e, t, s) {
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
  assertOptions: Ua,
  validators: Ie
}, U = Ce.validators;
class me {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new st(),
      response: new st()
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
    let m, b = 0, E;
    if (!p) {
      const h = [nt.bind(this), void 0];
      for (h.unshift.apply(h, a), h.push.apply(h, c), E = h.length, m = Promise.resolve(s); b < E; )
        m = m.then(h[b++], h[b++]);
      return m;
    }
    E = a.length;
    let O = s;
    for (b = 0; b < E; ) {
      const h = a[b++], S = a[b++];
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
    for (b = 0, E = c.length; b < E; )
      m = m.then(c[b++], c[b++]);
    return m;
  }
  getUri(t) {
    t = Z(this.defaults, t);
    const s = Lt(t.baseURL, t.url);
    return Pt(s, t.params, t.paramsSerializer);
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
const de = me;
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
      token: new Ue(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
const xa = Ue;
function za(e) {
  return function(s) {
    return e.apply(null, s);
  };
}
function Wa(e) {
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
const qa = Re;
function At(e) {
  const t = new de(e), s = _t(de.prototype.request, t);
  return l.extend(s, de.prototype, t, { allOwnKeys: !0 }), l.extend(s, t, null, { allOwnKeys: !0 }), s.create = function(o) {
    return At(Z(e, o));
  }, s;
}
const F = At(Be);
F.Axios = de;
F.CanceledError = ne;
F.CancelToken = xa;
F.isCancel = Ft;
F.VERSION = jt;
F.toFormData = _e;
F.AxiosError = $;
F.Cancel = F.CanceledError;
F.all = function(t) {
  return Promise.all(t);
};
F.spread = za;
F.isAxiosError = Wa;
F.mergeConfig = Z;
F.AxiosHeaders = B;
F.formToJSON = (e) => Et(l.isHTMLForm(e) ? new FormData(e) : e);
F.HttpStatusCode = qa;
F.default = F;
const Mt = F;
function Ha(e) {
  return e == null;
}
var Ga = Ha, Ja = function(t) {
  return typeof t == "object" && t !== null;
}, Qa = -18, Xa = 5, Za = 9, Ya = -72, el = -74, tl = -68, sl = -69, rl = -7, ol = -127, nl = 1, il = -107, al = 10, ll = 2, ul = -42, cl = -2, dl = -8, pl = -128, ml = 3, fl = -4, hl = -110, _l = -109, yl = -3, bl = -102, gl = -1, vl = -196, Sl = 0, wl = 8, $l = -75, Tl = {
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
  VoidType: wl,
  WAPIWorkType: $l
}, Nt = {
  createFormData() {
    return new FormData();
  }
};
function kl(e) {
  const t = Mt.create(e);
  return t.interceptors.response.use(
    (s) => {
      const r = _(s, "headers.otcsticket");
      return r && (t.defaults.headers.common.OTCSTicket = r), s;
    },
    (s) => Promise.reject(s)
  ), t;
}
function Ol(e) {
  const t = kl(e), s = _(e, "username"), r = _(e, "password"), o = _(e, "otcsticket");
  if (o)
    t.defaults.headers.common.OTCSTicket = o;
  else if (s && r)
    t.interceptors.request.use(async (i) => {
      if (i.headers.common.OTCSTicket)
        return i;
      {
        const n = Nt.createFormData();
        n.append("username", s), n.append("password", r);
        const a = await Mt.post(`${e.baseURL}/api/v1/auth/`, n);
        return i.headers.common.OTCSTicket = _(a, "data.ticket"), i;
      }
    });
  else
    throw Error("You must provide an otcsticket or username and password.");
  return t;
}
class q {
  _session;
  constructor(t) {
    this._session = new WeakRef(t);
  }
  get session() {
    return this._session.deref();
  }
}
class Cl extends q {
  auth() {
    return this.session.get("/api/v1/auth/");
  }
}
var Rl = 834, Pl = 1298, Vl = 30309, El = 907, Fl = 1, Ll = 480, jl = 483, Al = 481, Ml = 31711, Nl = 290, Dl = 291, Kl = 274, Bl = 356, Il = 357, Ul = 530, xl = 131, zl = 132, Wl = 207, ql = 209, Hl = 199, Gl = 196, Jl = 194, Ql = 298, Xl = 902, Zl = 345, Yl = 348, eu = 346, tu = 3030338, su = 3030339, ru = 3030329, ou = 3030002, nu = 3030333, iu = 3030004, au = 3030335, lu = 3030334, uu = 3030205, cu = 136, du = 557, pu = 3030372, mu = 146, fu = 844, hu = 270, _u = 276, yu = 277, bu = 215, gu = 602, vu = 144, Su = 1297, wu = 283, $u = 32912, Tu = 32916, ku = 31707, Ou = 32914, Cu = 31709, Ru = 32917, Pu = 32915, Vu = 32913, Eu = 31602, Fu = 31601, Lu = 31603, ju = 335, Au = 900, Mu = 749, Nu = 2504, Du = 904, Ku = 905, Bu = 903, Iu = 1299, Uu = 906, xu = 0, zu = 223, Wu = 2, qu = 3030371, Hu = 482, Gu = 833, Ju = 282, Qu = 226, Xu = 293, Zu = 731, Yu = 368, ec = 147, tc = 281, sc = 924, rc = 541, oc = 542, nc = 361, ic = 259, ac = 272, lc = 123475, uc = 123476, cc = 123469, dc = 123470, pc = 430, mc = 432, fc = 422, hc = 732, _c = 3030331, yc = 31710, bc = 410, gc = 414, vc = 919, Sc = 920, wc = 273, $c = 1281, Tc = 1282, kc = 372, Oc = 374, Cc = 373, Rc = 870, Pc = 532, Vc = 3030756, Ec = 208, Fc = 257, Lc = 371, jc = 370, Ac = 3030203, Mc = 3030003, Nc = 3030204, Dc = 398, Kc = 3030343, Bc = 424, Ic = 412, Uc = 419, xc = 411, zc = 415, Wc = 418, qc = 416, Hc = 417, Gc = 218, Jc = 271, Qc = 195, Xc = 202, Zc = 543, Yc = 201, ed = 384, td = 380, sd = 387, rd = 829, od = 31712, nd = 31713, id = 441, ad = 296, ld = 431, ud = 327, cd = 425, dd = 428, pd = 32918, md = 32919, fd = 138, hd = 381, _d = 134, yd = 299, bd = 139, gd = 555, vd = 554, Sd = 552, wd = 553, $d = 556, Td = 551, kd = 426, Od = 427, Cd = 558, Rd = 559, Pd = 2505, Vd = 835, Ed = 32901, Fd = 258, Ld = 369, jd = 269, Ad = 278, Md = 383, Nd = 292, Dd = 31678, Kd = 49547, Bd = 275, Id = 1280, Ud = 1283, xd = 797, zd = 796, Wd = 795, qd = 3030202, Hd = 3030201, Gd = 3030001, Jd = 3030130, Qd = 280, Xd = 421, Zd = 231, Yd = 206, ep = 205, tp = 204, sp = 210, rp = 212, op = 230, np = 268, ip = 145, ap = 130, lp = 423, up = 531, cp = 526, dp = 527, pp = 3030330, mp = 140, fp = 899, hp = 123461, _p = 133, yp = 198, bp = 347, gp = 987352, vp = 405, Sp = 375, wp = 143, $p = 180, Tp = 336, kp = 162, Op = 901, Cp = 141, Rp = 403, Pp = 397, Vp = 908, Ep = 413, Fp = 550, Lp = 137, jp = 211, Ap = 148, Mp = 149, Np = 484, Dp = 1296, Kp = 525, Bp = 142, Ip = 161, Up = 529, xp = 236, zp = 235, Wp = 234, qp = 233, Hp = 30303, Gp = 128, Jp = 190, Qp = 5573, Xp = 5574, Zp = 528, Yp = 154, em = 286, tm = 285, $e = {
  "2WayTee": 294,
  Accession: Rl,
  ActiveFolder: Pl,
  Activeview: Vl,
  ActivityManager: El,
  Alias: Fl,
  Appearance: Ll,
  AppearanceFolder: jl,
  AppearancesVolume: Al,
  ArchiveFolder: Ml,
  BackupManager: Nl,
  BackupProcess: Dl,
  BestBets: Kl,
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
  DocumentServer: wu,
  Dossier: $u,
  DossierCabinet: Tu,
  DossierCabinetArchive: ku,
  DossierTemplate: Ou,
  DossierTemplateFolder: Cu,
  DossierTemplatesVolume: Ru,
  DossierTemplateVolume: Pu,
  DossierVolume: Vu,
  DPSBinding: Eu,
  DPSFolder: Fu,
  DPSVolume: Lu,
  DTDLLNode: ju,
  DynamicView: Au,
  EMail: Mu,
  EmailConversationItems: Nu,
  "Enterprise Archive Document": 753,
  Facet: Du,
  FacetFolder: Ku,
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
  Merge: wc,
  MicroPost: $c,
  MicroPostVolume: Tc,
  MultiVolClassification: kc,
  MultiVolClassificationProxy: Oc,
  MultiVolClassificationTree: Cc,
  MyReservedItems: Rc,
  MyWorkbenches: Pc,
  NAVMENUVOL: Vc,
  News: Ec,
  OTCIndexObj: Fc,
  Partition: Lc,
  PartitionMap: jc,
  PersonalComm: Ac,
  PersonalCommSystemVolume: Mc,
  PersonalCommVol: Nc,
  PersonalStagingFolder: Dc,
  PersonalWebpage: Kc,
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
  RIMSRsiContainer: wd,
  RMAdministration: $d,
  RMClassification: Td,
  RMFolder: kd,
  RMPart: Od,
  RMReportsContainer: Cd,
  RMThesaurus: Rd,
  ScanConfigurationVolume: Pd,
  ScheduledHoldCriteria: Vd,
  ScriptNode: Ed,
  SearchBroker: Fd,
  SearchEngine: Ld,
  SearchManager: jd,
  SearchReport: Ad,
  SearchResultsTemplate: Md,
  SearchTemplate: Nd,
  Simplate: Dd,
  SkyPodLLVolume: Kd,
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
  VolDiscussion: wp,
  VolDomainWorkspace: $p,
  VolDTD: Tp,
  VolEditWorkflow: kp,
  VolFacets: Op,
  VolLibrary: Cp,
  VolOrphan: Rp,
  VolPersonalStaging: Pp,
  VolPerspectives: Vp,
  VolPhysObj: Ep,
  VolRecMan: Fp,
  VolRelease: Lp,
  VolReports: jp,
  VolSystem: Ap,
  VolTracer: Mp,
  VolumeFolder: Np,
  VolumeLLVolume: Dp,
  VolWarehouse: Kp,
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
class sm extends q {
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
class rm extends q {
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
class om extends q {
  scriptNode(t, s = {}) {
    return this.session.get(`api/v1/rhcore/${t}`, {
      params: s
    });
  }
}
class nm extends q {
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
class im extends q {
  USER;
  GROUP;
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
class am extends q {
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
class lm extends q {
  run(t, s = {}) {
    const r = `api/v1/nodes/${t}/output`;
    return this.session.get(r, { params: s });
  }
}
const lt = {
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
  constructor(t = lt.INTERNALERROR.message, s = null, r = lt.INTERNALERROR.code) {
    Ja(t) ? (super(t.message), this.code = t.code, this.data = t.data) : (super(t), this.code = r, this.data = s);
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
      throw new um(s.message, s.data, s.code);
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
    const s = Nt.createFormData();
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
const $m = { success: ht, error: sn }, pm = /* @__PURE__ */ Object.assign({
  "./components/Card/KCard.vue": Zt,
  "./components/Card/KCardActions.vue": rs,
  "./components/Card/KCardText.vue": ls,
  "./components/Card/KCardTitle.vue": ms,
  "./components/KAdminLink.vue": gs,
  "./components/KAlert.vue": ks,
  "./components/KApp.vue": Vs,
  "./components/KAutocomplete.vue": Ds,
  "./components/KBrowseLink.vue": Gs,
  "./components/KButton.vue": Ys,
  "./components/KConfirm.vue": rr,
  "./components/KDateTimePicker.vue": ur,
  "./components/KDialog.vue": mr,
  "./components/KDot.vue": yr,
  "./components/KFormFieldWrapper.vue": wr,
  "./components/KFunctionMenu.vue": Vr,
  "./components/KLinearProgressIndicator.vue": Ar,
  "./components/KMulti.vue": xr,
  "./components/KMulti2.vue": Qr,
  "./components/KNodeAncestor.vue": to,
  "./components/KNodePickerField.vue": ao,
  "./components/KOneMoment.vue": fo,
  "./components/KPageDropZone.vue": bo,
  "./components/KPageTitle.vue": To,
  "./components/KPagination.vue": Do,
  "./components/KPagination2.vue": Jo,
  "./components/KRadioGroup.vue": tn,
  "./components/KScratch.vue": an,
  "./components/KSelect.vue": mn,
  "./components/KSnackbar.vue": $n,
  "./components/KSortHeader.vue": Pn,
  "./components/KSpacer.vue": jn,
  "./components/KSpinner.vue": Bn,
  "./components/KSwitch.vue": Wn,
  "./components/KTable.vue": Jn,
  "./components/KTextArea.vue": ei,
  "./components/KTextField.vue": ni,
  "./components/KUserGIF.vue": ci,
  "./components/KUserLink.vue": _i,
  "./components/KUserPicker.vue": Si,
  "./components/Tabs/KTabItem.vue": Oi,
  "./components/Tabs/KTabs.vue": ji
}), Tm = {
  install(e, t) {
    Object.entries(pm).forEach(
      ([o, i]) => {
        const n = o?.split("/")?.pop()?.replace(/\.\w+$/, "");
        e.component(n, i.default);
      }
    );
    const s = new dm(t), r = {
      img: t.img,
      baseURL: t.baseURL,
      jsLongDateFormat: t.datelong,
      jsShortDateFormat: t.dateshort
    };
    e.provide(Fe, s), e.provide(Le, r);
  }
};
export {
  Le as configKey,
  Tm as default,
  pe as injectStrict,
  Fe as sessionKey,
  $m as snackbar,
  wm as snackbarKey
};
