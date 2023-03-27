import { defineComponent as c, h as ce, openBlock as o, createElementBlock as i, renderSlot as $, inject as te, Fragment as S, createElementVNode as d, normalizeStyle as C, resolveComponent as _, createVNode as v, withCtx as h, resolveDirective as se, withDirectives as P, normalizeClass as O, withKeys as z, withModifiers as M, vModelText as q, renderList as T, createTextVNode as K, toDisplayString as b, createCommentVNode as m, createBlock as y, mergeProps as oe, vModelDynamic as pe, Teleport as me, Transition as B, setBlockTracking as G, TransitionGroup as E, vModelRadio as _e, vModelSelect as he, useCssVars as ne } from "vue";
import { directive as re } from "vue3-click-away";
import g from "lodash.get";
import W from "@chriscdn/promise-semaphore";
import { format as Z } from "date-fns";
import { disableBodyScroll as fe, enableBodyScroll as ge } from "body-scroll-lock";
import be from "build-url";
import ye from "js-cookie";
import { Session as ve } from "@kweli/cs-rest";
const $e = {
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
}, j = (e, t = "px") => {
  if (!(e == null || e === ""))
    return isNaN(+e) ? String(e) : `${Number(e)}${t}`;
}, F = c({
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
      const e = {}, t = j(this.height), s = j(this.minHeight), r = j(this.minWidth), u = j(this.maxHeight), l = j(this.maxWidth), n = j(this.width);
      return t && (e.height = t), s && (e.minHeight = s), r && (e.minWidth = r), u && (e.maxHeight = u), l && (e.maxWidth = l), n && (e.width = n), e;
    }
  }
}), ke = c({
  mixins: [F, $e],
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
      return ce(
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
const Se = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ke
}, Symbol.toStringTag, { value: "Module" })), we = c({});
const p = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [r, u] of t)
    s[r] = u;
  return s;
}, Ke = { class: "k-card-actions" };
function je(e, t, s, r, u, l) {
  return o(), i("div", Ke, [
    $(e.$slots, "default")
  ]);
}
const Oe = /* @__PURE__ */ p(we, [["render", je]]), Te = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Oe
}, Symbol.toStringTag, { value: "Module" })), Ve = c({});
const Me = { class: "k-card-text" };
function Pe(e, t, s, r, u, l) {
  return o(), i("div", Me, [
    $(e.$slots, "default")
  ]);
}
const Ce = /* @__PURE__ */ p(Ve, [["render", Pe]]), Le = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ce
}, Symbol.toStringTag, { value: "Module" })), Ne = c({});
const ze = { class: "k-card-title" };
function Be(e, t, s, r, u, l) {
  return o(), i("div", ze, [
    $(e.$slots, "default")
  ]);
}
const Fe = /* @__PURE__ */ p(Ne, [["render", Be]]), Ae = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fe
}, Symbol.toStringTag, { value: "Module" })), Ie = c({
  setup() {
    return { config: te("config", {}) };
  }
}), Ue = /* @__PURE__ */ d("hr", null, null, -1), Re = ["href"];
function De(e, t, s, r, u, l) {
  return o(), i(S, null, [
    Ue,
    d("a", {
      href: `${e.config.baseURL}?func=admin.index`
    }, "Admin Home", 8, Re)
  ], 64);
}
const qe = /* @__PURE__ */ p(Ie, [["render", De]]), Ee = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qe
}, Symbol.toStringTag, { value: "Module" })), We = c({
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
}), He = c({
  mixins: [We]
});
const Qe = { class: "flex-grow" };
function Ge(e, t, s, r, u, l) {
  return o(), i("div", {
    class: "k-alert",
    style: C([e.colorableBackgroundStyle])
  }, [
    d("div", Qe, [
      $(e.$slots, "default")
    ])
  ], 4);
}
const Ze = /* @__PURE__ */ p(He, [["render", Ge]]), Xe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ze
}, Symbol.toStringTag, { value: "Module" }));
const Je = {}, Ye = { class: "k-app" };
function xe(e, t) {
  const s = _("KSnackbar"), r = _("KConfirm");
  return o(), i("div", Ye, [
    v(r, null, {
      default: h(() => [
        v(s, null, {
          default: h(() => [
            $(e.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    })
  ]);
}
const et = /* @__PURE__ */ p(Je, [["render", xe]]), tt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: et
}, Symbol.toStringTag, { value: "Module" })), st = c({
  directives: {
    ClickAway: re
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
const ot = { class: "k-autocomplete-input" }, nt = ["placeholder", "readonly"], rt = {
  key: 0,
  class: "k-autocomplete-items"
}, lt = ["onClick"];
function it(e, t, s, r, u, l) {
  const n = se("click-away");
  return P((o(), i("div", {
    class: "k-autocomplete",
    style: C([e.style])
  }, [
    $(e.$slots, "prepend", { item: e.localValue }),
    d("div", ot, [
      P(d("input", {
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = (a) => e.inputText = a),
        class: O(["k-input", { invalidSelection: !e.isValidSelection }]),
        type: "search",
        autocomplete: "off",
        placeholder: e.placeholderText,
        readonly: !e.editable,
        onSearch: t[1] || (t[1] = (...a) => e.clearInput && e.clearInput(...a)),
        onKeydown: [
          t[2] || (t[2] = z(M((a) => e.currentFocus = Math.max(-1, e.currentFocus - 1), ["prevent"]), ["arrow-up"])),
          t[3] || (t[3] = z(M((a) => e.currentFocus = Math.min(e.items.length - 1, e.currentFocus + 1), ["prevent"]), ["arrow-down"])),
          t[4] || (t[4] = z(M((a) => e.select(e.currentFocus), ["prevent"]), ["enter"])),
          t[6] || (t[6] = z((...a) => e.setBlur && e.setBlur(...a), ["tab"]))
        ],
        onFocus: t[5] || (t[5] = (...a) => e.setFocus && e.setFocus(...a)),
        onKeyup: t[7] || (t[7] = (...a) => e.keyup && e.keyup(...a))
      }, null, 42, nt), [
        [q, e.inputText]
      ]),
      e.focus && e.items.length && e.inputText ? (o(), i("div", rt, [
        (o(!0), i(S, null, T(e.itemsFiltered, (a, f) => (o(), i("div", {
          key: f,
          class: O(["k-autocomplete-item", { "k-autocomplete-active": e.currentFocus == f }]),
          onClick: (k) => e.select(f)
        }, [
          $(e.$slots, "item", { item: a }, () => [
            K(b(a), 1)
          ])
        ], 10, lt))), 128))
      ])) : m("", !0)
    ])
  ], 4)), [
    [n, e.setBlur]
  ]);
}
const at = /* @__PURE__ */ p(st, [["render", it]]), ut = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: at
}, Symbol.toStringTag, { value: "Module" }));
function V(e, t) {
  const s = te(e, t);
  if (!s)
    throw new Error(`Could not resolve ${e.description}`);
  return s;
}
const L = Symbol("session"), A = Symbol("config"), dt = Symbol("snackbar"), ct = Symbol("confirmDialogKey"), U = new W();
class pt {
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
      const u = r.dataId;
      t.queue("NodeLookup", { dataId: u });
    });
    try {
      (await t.batch(!0)).forEach((u, l) => {
        const n = s[l].resolveFunc;
        n(u);
      });
    } catch {
      s.forEach((r) => r.resolveFunc(null));
    }
  }
}
class mt {
  nodes;
  nodeLookupQueue;
  constructor() {
    this.nodes = {}, this.nodeLookupQueue = new pt();
  }
  registerUsers(t) {
    t.forEach((s) => this.nodes[s.dataid] = s);
  }
  async lookup(t, s) {
    return s ? (await U.acquire(s), this.nodes[s] ? (U.release(s), this.nodes[s]) : new Promise((r) => {
      const u = (l) => {
        this.nodes[s] = l, r(l), U.release(s);
      };
      this.nodeLookupQueue.queue(t, u, s);
    })) : null;
  }
}
const _t = new mt(), ht = c({
  setup() {
    return { session: V(L) };
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
        e && (this.nodeRecLocal = await _t.lookup(this.session, e));
      },
      immediate: !0
    }
  }
}), ft = { key: 0 }, gt = ["src"], bt = ["href"], yt = ["innerHTML"];
function vt(e, t, s, r, u, l) {
  const n = _("KFunctionMenu");
  return e.nodeRecResolved ? (o(), i("span", ft, [
    e.image ? (o(), i("img", {
      key: 0,
      src: e.nodeRecResolved.gif
    }, null, 8, gt)) : m("", !0),
    K(" "),
    d("a", {
      href: e.nodeRecResolved.url
    }, b(e.nodeRecResolved.name), 9, bt),
    e.clickable ? (o(), y(n, {
      key: 1,
      dataid: e.nodeRecResolved.dataid
    }, null, 8, ["dataid"])) : m("", !0),
    d("span", {
      innerHTML: e.nodeRecResolved.modifiedImageCallback
    }, null, 8, yt)
  ])) : m("", !0);
}
const $t = /* @__PURE__ */ p(ht, [["render", vt]]), kt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $t
}, Symbol.toStringTag, { value: "Module" })), St = c({
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
const wt = ["disabled"];
function Kt(e, t, s, r, u, l) {
  return o(), i("button", oe({
    class: ["k-button", e.classObj],
    disabled: e.disabled,
    type: "button"
  }, e.$attrs, {
    onClick: t[0] || (t[0] = (n) => e.$emit("click"))
  }), [
    $(e.$slots, "default")
  ], 16, wt);
}
const jt = /* @__PURE__ */ p(St, [["render", Kt]]), Ot = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: jt
}, Symbol.toStringTag, { value: "Module" })), Tt = c({
  provide() {
    return {
      // @ts-ignore - not sure why this complains
      [ct]: this
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
      return this.noLabel = e, this.yesLabel = t, this.title = s, this.message = r, new Promise((u) => {
        this.resolve = u, this.dialog = !0;
      });
    }
  }
});
function Vt(e, t, s, r, u, l) {
  const n = _("KCardTitle"), a = _("KCardText"), f = _("KSpacer"), k = _("KButton"), w = _("KCardActions"), ue = _("KCard"), de = _("KDialog");
  return o(), i(S, null, [
    $(e.$slots, "default"),
    v(de, {
      modelValue: e.dialog,
      "onUpdate:modelValue": t[2] || (t[2] = (I) => e.dialog = I),
      "max-width": "30vw",
      "min-width": "20vw"
    }, {
      default: h(() => [
        v(ue, null, {
          default: h(() => [
            e.title ? (o(), y(n, { key: 0 }, {
              default: h(() => [
                K(b(e.title), 1)
              ]),
              _: 1
            })) : m("", !0),
            e.message ? (o(), y(a, { key: 1 }, {
              default: h(() => [
                K(b(e.message), 1)
              ]),
              _: 1
            })) : m("", !0),
            v(w, null, {
              default: h(() => [
                v(f),
                e.noLabel ? (o(), y(k, {
                  key: 0,
                  small: "",
                  onClick: t[0] || (t[0] = (I) => e.dismiss(!1))
                }, {
                  default: h(() => [
                    K(b(e.noLabel), 1)
                  ]),
                  _: 1
                })) : m("", !0),
                e.yesLabel ? (o(), y(k, {
                  key: 1,
                  small: "",
                  onClick: t[1] || (t[1] = (I) => e.dismiss(!0))
                }, {
                  default: h(() => [
                    K(b(e.yesLabel), 1)
                  ]),
                  _: 1
                })) : m("", !0)
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
const Mt = /* @__PURE__ */ p(Tt, [["render", Vt]]), Pt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Mt
}, Symbol.toStringTag, { value: "Module" })), Ct = c({
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
      return t ? this.time ? Z(t, "yyyy-MM-dd'T'HH:mm:ss") : Z(t, "yyyy-MM-dd") : null;
    }
  }
});
const Lt = { class: "k-date-time-picker" }, Nt = ["type", "readonly"];
function zt(e, t, s, r, u, l) {
  const n = _("KButton");
  return o(), i("div", Lt, [
    P(d("input", {
      "onUpdate:modelValue": t[0] || (t[0] = (a) => e.localModelValue = a),
      class: "k-input",
      type: e.type,
      readonly: !e.editable
    }, null, 8, Nt), [
      [pe, e.localModelValue]
    ]),
    e.editable ? (o(), i(S, { key: 0 }, [
      v(n, {
        small: "",
        onClick: e.setToNow
      }, {
        default: h(() => [
          K(" Now ")
        ]),
        _: 1
      }, 8, ["onClick"]),
      v(n, {
        small: "",
        onClick: t[1] || (t[1] = (a) => e.$emit("update:modelValue", null))
      }, {
        default: h(() => [
          K(" Clear ")
        ]),
        _: 1
      })
    ], 64)) : m("", !0)
  ]);
}
const Bt = /* @__PURE__ */ p(Ct, [["render", zt]]), Ft = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Bt
}, Symbol.toStringTag, { value: "Module" })), At = c({
  directives: {
    ClickAway: re
  },
  mixins: [F],
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
      this.$emit("update:modelValue", e), e ? (await this.$nextTick(), fe(this.$refs.content)) : ge(this.$refs.content);
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
function It(e, t, s, r, u, l) {
  const n = se("click-away");
  return o(), i(S, null, [
    $(e.$slots, "activator", { on: e.on }),
    e.mounted ? (o(), y(me, {
      key: 0,
      to: ".k-app"
    }, [
      v(B, { name: "fade" }, {
        default: h(() => [
          e.dialog ? (o(), i("div", {
            key: 0,
            class: "k-dialog",
            style: C([e.style])
          }, [
            P((o(), i("div", {
              ref: "content",
              class: O(["k-dialog-content", e.classObj]),
              style: C([e.measurableStyles])
            }, [
              $(e.$slots, "default", { on: e.on })
            ], 6)), [
              [n, e.clickAway]
            ])
          ], 4)) : m("", !0)
        ]),
        _: 3
      })
    ])) : m("", !0)
  ], 64);
}
const Ut = /* @__PURE__ */ p(At, [["render", It]]), Rt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ut
}, Symbol.toStringTag, { value: "Module" })), Dt = c({
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
function qt(e, t, s, r, u, l) {
  return o(), i("div", {
    class: "k-dot",
    style: C([e.style])
  }, [
    $(e.$slots, "default")
  ], 4);
}
const Et = /* @__PURE__ */ p(Dt, [["render", qt]]), Wt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Et
}, Symbol.toStringTag, { value: "Module" })), N = c({
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
}), Ht = {
  mixins: [N]
};
const Qt = {
  key: 0,
  class: "k-form-field-label"
};
function Gt(e, t, s, r, u, l) {
  return o(), i("div", null, [
    e.label ? (o(), i("div", Qt, b(e.label), 1)) : m("", !0),
    $(e.$slots, "default"),
    (o(!0), i(S, null, T(e.successMessages, (n, a) => (o(), i("div", {
      key: a,
      class: "k-formfield--success"
    }, b(n), 1))), 128)),
    (o(!0), i(S, null, T(e.errorMessages, (n, a) => (o(), i("div", {
      key: a,
      class: "k-formfield--error"
    }, b(n), 1))), 128))
  ]);
}
const Zt = /* @__PURE__ */ p(Ht, [["render", Gt]]), Xt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zt,
  mixin: N
}, Symbol.toStringTag, { value: "Module" })), Jt = c({
  setup() {
    return { config: V(A) };
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
}), Yt = { key: 0 }, xt = ["id"], es = ["src"], ts = ["id", "src"];
function ss(e, t, s, r, u, l) {
  return e.dataid ? (o(), i("span", Yt, [
    d("a", {
      id: e.aid,
      href: "#",
      class: "functionMenuHotspot",
      onClick: t[2] || (t[2] = M((...n) => e.onclick && e.onclick(...n), ["prevent"]))
    }, [
      e.isModernFunctionMenu ? (o(), i("img", {
        key: 0,
        src: `${e.config.img}spacer.gif`,
        alt: "Functions"
      }, null, 8, es)) : (o(), i("img", {
        key: 1,
        id: e.xid,
        src: e.image,
        border: "0",
        alt: "Functions",
        title: "Functions",
        onMouseover: t[0] || (t[0] = (...n) => e.onmouseover && e.onmouseover(...n)),
        onMouseout: t[1] || (t[1] = (...n) => e.onmouseout && e.onmouseout(...n))
      }, null, 40, ts))
    ], 8, xt),
    t[3] || (G(-1), t[3] = d("div", {
      id: e.zid,
      ref: "functionMenuDiv",
      class: "functionMenuDiv"
    }, null, 8, ["id"]), G(1), t[3])
  ])) : m("", !0);
}
const os = /* @__PURE__ */ p(Jt, [["render", ss]]), ns = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: os
}, Symbol.toStringTag, { value: "Module" })), rs = c({});
const ls = { class: "k-progress-line" };
function is(e, t, s, r, u, l) {
  return o(), i("div", ls);
}
const as = /* @__PURE__ */ p(rs, [["render", is]]), us = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: as
}, Symbol.toStringTag, { value: "Module" })), ds = c({
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
const cs = { class: "k-multi-widget" }, ps = { class: "k-multi-buttons" }, ms = /* @__PURE__ */ d("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ d("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z" })
], -1), _s = /* @__PURE__ */ d("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ d("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" })
], -1);
function hs(e, t, s, r, u, l) {
  const n = _("KButton"), a = _("KCard");
  return o(), y(a, { class: "k-multi" }, {
    default: h(() => [
      v(E, {
        name: "fade",
        tag: "div"
      }, {
        default: h(() => [
          (o(!0), i(S, null, T(e.valueLocal, (f, k) => (o(), i("div", {
            key: `k-multi-${f}`,
            class: "k-multi-item"
          }, [
            d("div", cs, [
              $(e.$slots, "default", {
                index: k,
                value: f,
                update: (w) => e.update(k, w)
              })
            ]),
            d("div", ps, [
              e.canRemove ? (o(), y(n, {
                key: 0,
                text: "",
                onClick: (w) => e.remove(k)
              }, {
                default: h(() => [
                  ms
                ]),
                _: 2
              }, 1032, ["onClick"])) : m("", !0),
              e.canAdd ? (o(), y(n, {
                key: 1,
                text: "",
                onClick: (w) => e.add(k)
              }, {
                default: h(() => [
                  _s
                ]),
                _: 2
              }, 1032, ["onClick"])) : m("", !0)
            ])
          ]))), 128))
        ]),
        _: 3
      })
    ]),
    _: 3
  });
}
const fs = /* @__PURE__ */ p(ds, [["render", hs]]), gs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fs
}, Symbol.toStringTag, { value: "Module" })), bs = c({
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
const ys = { class: "k-multi-widget" }, vs = /* @__PURE__ */ d("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ d("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z" })
], -1);
function $s(e, t, s, r, u, l) {
  const n = _("KButton"), a = _("KCard");
  return o(), y(a, { class: "k-multi" }, {
    default: h(() => [
      v(E, {
        name: "fade",
        tag: "div"
      }, {
        default: h(() => [
          (o(!0), i(S, null, T(e.valueLocal, (f, k) => (o(), i("div", {
            key: `k-multi-${f}`,
            class: "k-multi-item"
          }, [
            d("div", ys, [
              $(e.$slots, "readonly", {
                index: k,
                value: f
              }, () => [
                K(b(f), 1)
              ])
            ]),
            e.readonly ? m("", !0) : (o(), y(n, {
              key: 0,
              text: "",
              onClick: (w) => e.remove(k)
            }, {
              default: h(() => [
                vs
              ]),
              _: 2
            }, 1032, ["onClick"]))
          ]))), 128))
        ]),
        _: 3
      }),
      e.canAdd ? $(e.$slots, "add", {
        key: 0,
        add: e.add
      }) : m("", !0)
    ]),
    _: 3
  });
}
const ks = /* @__PURE__ */ p(bs, [["render", $s]]), Ss = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ks
}, Symbol.toStringTag, { value: "Module" })), ws = c({
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
function Ks(e, t, s, r, u, l) {
  const n = _("KUserLink"), a = _("KUserPicker"), f = _("KMulti2");
  return o(), y(f, {
    modelValue: e.userIdsLocal,
    "onUpdate:modelValue": t[0] || (t[0] = (k) => e.userIdsLocal = k),
    readonly: e.readonly
  }, {
    readonly: h(({ value: k }) => [
      v(n, {
        user: k,
        gif: ""
      }, null, 8, ["user"])
    ]),
    add: h(({ add: k }) => [
      v(a, {
        "onUpdate:modelValue": (w) => k(w),
        users: e.users,
        groups: e.groups
      }, null, 8, ["onUpdate:modelValue", "users", "groups"])
    ]),
    _: 1
  }, 8, ["modelValue", "readonly"]);
}
const js = /* @__PURE__ */ p(ws, [["render", Ks]]), Os = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: js
}, Symbol.toStringTag, { value: "Module" })), X = new W();
class Ts {
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
      if (await X.acquire(s), !this.nodes[s]) {
        const r = await t.nodes.ancestors(s);
        this.nodes[s] = g(r, "data.ancestors", []);
      }
      return this.nodes[s];
    } finally {
      X.release(s);
    }
  }
}
const le = new Ts(), Vs = c({
  setup() {
    return { session: V(L) };
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
        e && (this.breadcrumb = await le.lookup(this.session, e));
      },
      immediate: !0
    }
  }
});
const Ms = { class: "k-node-breadcrumb" };
function Ps(e, t, s, r, u, l) {
  return o(), i("div", Ms, [
    (o(!0), i(S, null, T(e.breadcrumb, (n, a) => (o(), i(S, {
      key: n.dataid
    }, [
      K(b(n.name) + " ", 1),
      a < e.breadcrumb.length - 1 ? (o(), i(S, { key: 0 }, [
        K(" ▶ ")
      ], 64)) : m("", !0)
    ], 64))), 128))
  ]);
}
const ie = /* @__PURE__ */ p(Vs, [["render", Ps]]), Cs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ie
}, Symbol.toStringTag, { value: "Module" })), Ls = c({
  components: { KNodeAncestor: ie },
  setup() {
    return {
      session: V(L),
      config: V(A)
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
      return be(this.config.baseUrl, {
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
        this.dataid ? this.breadcrumb = await le.lookup(
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
      return this.objid ?? parseInt(ye.get("TargetBrowseObjID") ?? "0");
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
const Ns = { class: "k-node-picker-field" }, zs = ["value"];
function Bs(e, t, s, r, u, l) {
  const n = _("KButton"), a = _("KNodeAncestor");
  return o(), i("div", Ns, [
    d("input", {
      ref: "input",
      type: "text",
      class: "k-input",
      value: e.name,
      onFocus: t[0] || (t[0] = (...f) => e.openWindow && e.openWindow(...f))
    }, null, 40, zs),
    v(n, {
      small: "",
      onClick: e.openWindow
    }, {
      default: h(() => [
        K(b(e.browseButtonLabel), 1)
      ]),
      _: 1
    }, 8, ["onClick"]),
    e.clearable ? (o(), y(n, {
      key: 0,
      small: "",
      onClick: e.clear
    }, {
      default: h(() => [
        K(b(e.clearButtonLabel), 1)
      ]),
      _: 1
    }, 8, ["onClick"])) : m("", !0),
    e.dataid ? (o(), y(a, {
      key: 1,
      dataid: e.dataid
    }, null, 8, ["dataid"])) : m("", !0)
  ]);
}
const Fs = /* @__PURE__ */ p(Ls, [["render", Bs]]), As = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fs
}, Symbol.toStringTag, { value: "Module" })), Is = c({
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
const Us = { class: "k-one-moment" }, Rs = { class: "k-one-moment-label" };
function Ds(e, t, s, r, u, l) {
  const n = _("KSpinner"), a = _("KDialog");
  return o(), y(a, { "model-value": e.loading }, {
    default: h(() => [
      d("div", Us, [
        v(n, {
          height: 36,
          width: 36
        }),
        d("div", Rs, b(e.label), 1)
      ])
    ]),
    _: 1
  }, 8, ["model-value"]);
}
const qs = /* @__PURE__ */ p(Is, [["render", Ds]]), Es = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qs
}, Symbol.toStringTag, { value: "Module" })), Ws = c({
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
function Hs(e, t, s, r, u, l) {
  return o(), i("div", null, [
    $(e.$slots, "default", { active: e.active })
  ]);
}
const Qs = /* @__PURE__ */ p(Ws, [["render", Hs]]), Gs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qs
}, Symbol.toStringTag, { value: "Module" })), Zs = c({
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
const Xs = { key: 0 }, Js = { class: "rhmuted" };
function Ys(e, t, s, r, u, l) {
  return o(), i("h1", null, [
    K(b(e.title), 1),
    e.subtitle ? (o(), i("span", Xs, [
      K(": "),
      d("span", Js, b(e.subtitle) + " - 2", 1)
    ])) : m("", !0)
  ]);
}
const xs = /* @__PURE__ */ p(Zs, [["render", Ys], ["__scopeId", "data-v-8d8d8837"]]), eo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xs
}, Symbol.toStringTag, { value: "Module" })), to = c({
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
const so = { class: "k-pagination" }, oo = {
  key: 1,
  class: "k-pagination-buttons"
}, no = {
  key: 0,
  class: "k-pagination-button"
}, ro = /* @__PURE__ */ d("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ d("path", { d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" })
], -1), lo = [
  ro
], io = { key: 0 }, ao = ["onClick"], uo = {
  key: 1,
  class: "k-pagination-button"
}, co = /* @__PURE__ */ d("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ d("path", { d: "M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" })
], -1), po = [
  co
], mo = { key: 2 };
function _o(e, t, s, r, u, l) {
  const n = _("KSelect");
  return o(), i("div", so, [
    e.potentiallyMultiplePages ? (o(), y(n, {
      key: 0,
      modelValue: e.pageSize,
      "onUpdate:modelValue": t[0] || (t[0] = (a) => e.pageSize = a),
      items: e.pageSizes,
      label: "Page Size"
    }, null, 8, ["modelValue", "items"])) : m("", !0),
    e.hasPrevious || e.hasNext ? (o(), i("div", oo, [
      e.hasPrevious ? (o(), i("a", no, lo)) : m("", !0),
      (o(!0), i(S, null, T(e.pageRange, (a) => (o(), i(S, { key: a }, [
        a === "|" ? (o(), i("div", io, "...")) : (o(), i("a", {
          key: 1,
          class: O(["k-pagination-button k-pagination-button-border", e.classObj(a)]),
          onClick: (f) => e.$emit("update:modelValue", a)
        }, b(a), 11, ao))
      ], 64))), 128)),
      e.hasNext ? (o(), i("a", uo, po)) : m("", !0)
    ])) : m("", !0),
    e.potentiallyMultiplePages ? (o(), i("div", mo, " Displaying " + b(e.pagination.startIndex) + "-" + b(e.pagination.endIndex) + " of " + b(e.pagination.count) + " items. ", 1)) : m("", !0)
  ]);
}
const ho = /* @__PURE__ */ p(to, [["render", _o]]), fo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ho
}, Symbol.toStringTag, { value: "Module" })), go = c({
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
      const e = [], r = Math.max(0, this.pageNumber0 - 5), u = Math.min(this.lastPageNumber0, r + 10), l = Math.max(0, u - 10);
      for (let n = l; n <= u; n++)
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
const bo = { class: "k-pagination2" }, yo = { class: "k-pagination2-buttons" }, vo = /* @__PURE__ */ d("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ d("path", { d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" })
], -1), $o = [
  vo
], ko = ["onClick"], So = /* @__PURE__ */ d("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ d("path", { d: "M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" })
], -1), wo = [
  So
];
function Ko(e, t, s, r, u, l) {
  const n = _("KSelect");
  return o(), i("div", bo, [
    d("div", null, [
      v(n, {
        modelValue: e.pageSize,
        "onUpdate:modelValue": t[0] || (t[0] = (a) => e.pageSize = a),
        items: e.pageSizes,
        label: "Page Size"
      }, null, 8, ["modelValue", "items"])
    ]),
    e.pageCount > 1 ? (o(), i(S, { key: 0 }, [
      d("div", yo, [
        e.hasPrevious ? (o(), i("a", {
          key: 0,
          class: "k-pagination2-arrow-button",
          onClick: t[1] || (t[1] = (a) => e.clickedPageNumber(e.pageNumber0 - 1))
        }, $o)) : m("", !0),
        (o(!0), i(S, null, T(e.pageRange0, (a) => (o(), i("div", {
          key: a,
          class: O(["k-pagination2-button", e.classObj(a)]),
          onClick: (f) => e.clickedPageNumber(a)
        }, b(a + 1), 11, ko))), 128)),
        e.hasNext ? (o(), i("a", {
          key: 1,
          class: "k-pagination2-arrow-button",
          onClick: t[2] || (t[2] = (a) => e.clickedPageNumber(e.pageNumber0 + 1))
        }, wo)) : m("", !0)
      ]),
      d("div", null, b(e.pageNumber) + " of " + b(e.pageCount) + " pages", 1)
    ], 64)) : m("", !0)
  ]);
}
const jo = /* @__PURE__ */ p(go, [["render", Ko]]), Oo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: jo
}, Symbol.toStringTag, { value: "Module" })), To = c({
  mixins: [N],
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
const Vo = ["id", "value", "disabled"], Mo = ["for"];
function Po(e, t, s, r, u, l) {
  const n = _("KSpinner"), a = _("KFormFieldWrapper");
  return o(), i("div", null, [
    v(a, {
      label: e.label,
      "success-messages": e.successMessages,
      "error-messages": e.errorMessages
    }, {
      default: h(() => [
        v(B, {
          name: "fade",
          mode: "out-in"
        }, {
          default: h(() => [
            e.loading ? (o(), y(n, { key: 0 })) : (o(), i("div", {
              key: 1,
              class: O(["k-radiogroup", e.classObj])
            }, [
              (o(!0), i(S, null, T(e.items, (f) => (o(), i("div", {
                key: e.getItemValue(f),
                class: "k-radiogroup-item"
              }, [
                P(d("input", {
                  id: e.getItemValue(f),
                  "onUpdate:modelValue": t[0] || (t[0] = (k) => e.localValue = k),
                  type: "radio",
                  value: e.getItemValue(f),
                  disabled: e.getItemDisabled(f)
                }, null, 8, Vo), [
                  [_e, e.localValue]
                ]),
                d("label", {
                  for: e.getItemValue(f)
                }, b(e.getItemText(f)), 9, Mo)
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
const Co = /* @__PURE__ */ p(To, [["render", Po]]), Lo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Co
}, Symbol.toStringTag, { value: "Module" })), No = c({
  inject: ["ksnackbar"],
  methods: {
    click() {
    }
  }
});
function zo(e, t, s, r, u, l) {
  return o(), i("div", null, [
    d("button", {
      onClick: t[0] || (t[0] = (...n) => e.click && e.click(...n))
    }, "click")
  ]);
}
const Bo = /* @__PURE__ */ p(No, [["render", zo]]), Fo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Bo
}, Symbol.toStringTag, { value: "Module" })), Ao = c({
  mixins: [N],
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
    }
  },
  emits: ["update:modelValue"],
  computed: {
    disabledResolved() {
      return this.disabled || this.readonly;
    },
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
    getItemDisabled(e) {
      return this.isObject(e) ? g(e, this.itemDisabled, !1) : !1;
    },
    arrify(e) {
      return Array.isArray(e) ? e : [e];
    }
  }
});
const Io = { class: "k-select" }, Uo = ["disabled"], Ro = ["value", "disabled"];
function Do(e, t, s, r, u, l) {
  const n = _("KSpinner"), a = _("KFormFieldWrapper");
  return o(), y(a, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: h(() => [
      d("div", Io, [
        P(d("select", {
          "onUpdate:modelValue": t[0] || (t[0] = (f) => e.localValue = f),
          class: O(e.classObj),
          disabled: e.disabledResolved
        }, [
          (o(!0), i(S, null, T(e.items, (f) => (o(), i("option", {
            key: e.getItemValue(f),
            value: e.getItemValue(f),
            disabled: e.getItemDisabled(f)
          }, b(e.getItemText(f)), 9, Ro))), 128))
        ], 10, Uo), [
          [he, e.localValue]
        ]),
        v(B, { name: "fade" }, {
          default: h(() => [
            e.loading ? (o(), y(n, {
              key: 0,
              class: "k-select--spinner"
            })) : m("", !0)
          ]),
          _: 1
        })
      ])
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const qo = /* @__PURE__ */ p(Ao, [["render", Do]]), Eo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qo
}, Symbol.toStringTag, { value: "Module" })), Wo = c({
  provide() {
    return {
      // @ts-ignore - not sure why this complains
      [dt]: this
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
      actionLabel: u = "close",
      action: l
    }) {
      const n = this.nextIndex();
      l == null && (l = () => this.dismiss(n));
      const a = {
        title: t,
        message: s,
        timeout: r,
        actionLabel: u,
        action: l,
        type: e,
        index: n
      };
      this.nitems[n] = a, console.log(r), setInterval(() => this.dismiss(n), r);
    }
  }
});
const Ho = { class: "k-snackbar" }, Qo = { class: "k-snackbar-item-message" }, Go = {
  key: 0,
  class: "k-snackbar-title"
}, Zo = {
  key: 1,
  class: "k-snackbar-text"
}, Xo = {
  key: 0,
  class: "k-snackbar-action"
}, Jo = ["onClick"];
function Yo(e, t, s, r, u, l) {
  return o(), i(S, null, [
    $(e.$slots, "default"),
    d("div", Ho, [
      v(E, {
        name: "slide",
        tag: "div",
        mode: "out-in"
      }, {
        default: h(() => [
          (o(!0), i(S, null, T(e.items, (n) => (o(), i("div", {
            key: n.index,
            class: O(["k-snackbar-item", e.classObj(n)])
          }, [
            d("div", Qo, [
              n.title ? (o(), i("div", Go, b(n.title), 1)) : m("", !0),
              n.message ? (o(), i("div", Zo, b(n.message), 1)) : m("", !0)
            ]),
            n.action ? (o(), i("div", Xo, [
              d("a", {
                href: "#",
                onClick: M((a) => e.action(n), ["prevent"])
              }, b(n.actionLabel), 9, Jo)
            ])) : m("", !0)
          ], 2))), 128))
        ]),
        _: 1
      })
    ])
  ], 64);
}
const xo = /* @__PURE__ */ p(Wo, [["render", Yo]]), en = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xo
}, Symbol.toStringTag, { value: "Module" })), tn = c({
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
const sn = {
  key: 0,
  class: "j-sort-header-arrow"
}, on = {
  key: 1,
  class: "j-sort-header-arrow"
};
function nn(e, t, s, r, u, l) {
  return o(), i("a", {
    href: "#",
    onClick: t[0] || (t[0] = M((...n) => e.emitClick && e.emitClick(...n), ["prevent"]))
  }, [
    $(e.$slots, "default"),
    v(B, {
      name: "fade",
      mode: "out-in"
    }, {
      default: h(() => [
        e.isActive && e.sortAsc ? (o(), i("span", sn, "↓")) : e.isActive ? (o(), i("span", on, "↑")) : m("", !0)
      ]),
      _: 1
    })
  ]);
}
const rn = /* @__PURE__ */ p(tn, [["render", nn]]), ln = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: rn
}, Symbol.toStringTag, { value: "Module" }));
const an = {}, un = { class: "k-spacer" };
function dn(e, t) {
  return o(), i("div", un);
}
const cn = /* @__PURE__ */ p(an, [["render", dn]]), pn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cn
}, Symbol.toStringTag, { value: "Module" })), H = c({
  mixins: [F],
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
}), J = () => {
  ne((e) => ({
    "519b76bc": e.color
  }));
}, Y = H.setup;
H.setup = Y ? (e, t) => (J(), Y(e, t)) : J;
const mn = /* @__PURE__ */ d("circle", {
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), _n = /* @__PURE__ */ d("path", {
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), hn = [
  mn,
  _n
];
function fn(e, t, s, r, u, l) {
  return o(), i("svg", {
    style: C(e.measurableStyles),
    class: "k-spinner",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, hn, 4);
}
const gn = /* @__PURE__ */ p(H, [["render", fn]]), bn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: gn
}, Symbol.toStringTag, { value: "Module" })), Q = c({
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
}), x = () => {
  ne((e) => ({
    "005bd1d4": e.switchWidthPx,
    b8c194da: e.heightPx,
    "110bcd4a": e.innerSizePx,
    75578316: e.paddingPx,
    "19f49a4c": e.transPx
  }));
}, ee = Q.setup;
Q.setup = ee ? (e, t) => (x(), ee(e, t)) : x;
const yn = /* @__PURE__ */ d("span", { class: "k-switch-slider" }, null, -1), vn = [
  yn
];
function $n(e, t, s, r, u, l) {
  return o(), i("div", {
    class: O(["k-switch", e.classObj]),
    onClick: t[0] || (t[0] = (...n) => e.toggle && e.toggle(...n))
  }, vn, 2);
}
const kn = /* @__PURE__ */ p(Q, [["render", $n]]), Sn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: kn
}, Symbol.toStringTag, { value: "Module" })), wn = c({
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
function Kn(e, t, s, r, u, l) {
  const n = _("KLinearProgressIndicator");
  return o(), i("div", null, [
    e.loading ? (o(), y(n, { key: 0 })) : m("", !0),
    d("table", {
      class: O(["k-table", e.classObj])
    }, [
      $(e.$slots, "default")
    ], 2)
  ]);
}
const jn = /* @__PURE__ */ p(wn, [["render", Kn]]), On = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: jn
}, Symbol.toStringTag, { value: "Module" })), Tn = c({
  mixins: [N],
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
        const u = s.slice(0, r), l = s.slice(r), n = `${u}	${l}`;
        this.valueLocal = n, t.value = n, t.selectionStart = r + 1, t.selectionEnd = r + 1;
      }
    }
  }
});
const Vn = ["rows"];
function Mn(e, t, s, r, u, l) {
  const n = _("KFormFieldWrapper");
  return o(), y(n, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: h(() => [
      P(d("textarea", oe({
        "onUpdate:modelValue": t[0] || (t[0] = (a) => e.valueLocal = a)
      }, e.$attrs, {
        spellcheck: "false",
        class: [e.classObj, "k-textarea"],
        rows: e.rows,
        onKeydown: t[1] || (t[1] = z(M((...a) => e.tabber && e.tabber(...a), ["prevent"]), ["tab"]))
      }), null, 16, Vn), [
        [q, e.valueLocal]
      ])
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const Pn = /* @__PURE__ */ p(Tn, [["render", Mn]]), Cn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pn
}, Symbol.toStringTag, { value: "Module" })), Ln = c({
  mixins: [N],
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
const Nn = ["placeholder"];
function zn(e, t, s, r, u, l) {
  const n = _("KFormFieldWrapper");
  return o(), y(n, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: h(() => [
      P(d("input", {
        "onUpdate:modelValue": t[0] || (t[0] = (a) => e.value = a),
        class: O(["k-input-text-field", e.classObj]),
        placeholder: e.placeholder
      }, null, 10, Nn), [
        [q, e.value]
      ])
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const Bn = /* @__PURE__ */ p(Ln, [["render", zn]]), Fn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Bn
}, Symbol.toStringTag, { value: "Module" })), An = c({
  setup() {
    return {
      config: V(A),
      session: V(L)
    };
  },
  mixins: [F],
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
}), In = ["src"];
function Un(e, t, s, r, u, l) {
  return e.url ? (o(), i("img", {
    key: 0,
    src: e.url,
    style: C([e.measurableStyles])
  }, null, 12, In)) : m("", !0);
}
const Rn = /* @__PURE__ */ p(An, [["render", Un]]), Dn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Rn
}, Symbol.toStringTag, { value: "Module" })), R = new W();
class qn {
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
      const u = r.userId;
      t.queue("UserLookup", { userId: u });
    });
    try {
      (await t.batch(!0)).forEach((u, l) => {
        const n = s[l].resolveFunc;
        n(u);
      });
    } catch {
      s.forEach((r) => r.resolveFunc(null));
    }
  }
}
class En {
  users;
  userLookupQueue;
  constructor() {
    this.users = {}, this.userLookupQueue = new qn();
  }
  registerUsers(t) {
    t.forEach((s) => this.users[s.userid] = s);
  }
  async lookup(t, s) {
    return s ? (await R.acquire(s), this.users[s] ? (R.release(s), this.users[s]) : new Promise((r) => {
      const u = (l) => {
        this.users[s] = l, r(l), R.release(s);
      };
      this.userLookupQueue.queue(t, u, s);
    })) : null;
  }
}
const ae = new En(), Wn = c({
  setup() {
    return { session: V(L) };
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
      return g(this.userRecLocal, "id") ?? g(this.userRecLocal, "userid");
    },
    // userLocal() {
    //   return this.user ?? this.userid ?? this.userRec
    // },
    displayName() {
      return g(this.userRecLocal, "display_name") ?? g(this.userRecLocal, "displayname") ?? g(this.userRecLocal, "name");
    },
    type() {
      return g(this.userRecLocal, "type");
    }
  },
  watch: {
    user: {
      async handler(e) {
        this.isInteger(e) ? this.userRecLocal = await ae.lookup(this.session, e) : this.userRecLocal = e;
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
const Hn = {
  key: 0,
  class: "k-user-link"
};
function Qn(e, t, s, r, u, l) {
  const n = _("KUserGIF");
  return e.userRecLocal ? (o(), i("span", Hn, [
    e.gif ? (o(), y(n, {
      key: 0,
      "user-rec": e.userRecLocal
    }, null, 8, ["user-rec"])) : m("", !0),
    K("  "),
    d("a", {
      href: "#",
      onClick: t[0] || (t[0] = M((...a) => e.click && e.click(...a), ["prevent"]))
    }, b(e.displayName), 1)
  ])) : m("", !0);
}
const Gn = /* @__PURE__ */ p(Wn, [["render", Qn]]), Zn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Gn
}, Symbol.toStringTag, { value: "Module" })), Xn = c({
  mixins: [N],
  setup() {
    return { session: V(L) };
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
          text: g(s, "name_formatted"),
          value: g(s, "id"),
          type: g(s, "type")
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
          const t = await ae.lookup(
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
const Jn = { class: "flex items-center gap-1" };
function Yn(e, t, s, r, u, l) {
  const n = _("KUserGIF"), a = _("KAutocomplete"), f = _("KUserLink"), k = _("KFormFieldWrapper");
  return o(), y(k, {
    label: e.label,
    "success-messages": e.successMessages,
    "error-messages": e.errorMessages
  }, {
    default: h(() => [
      e.editable ? (o(), y(a, {
        key: 0,
        modelValue: e.valueLocal,
        "onUpdate:modelValue": t[0] || (t[0] = (w) => e.valueLocal = w),
        "search-input": e.searchText,
        "onUpdate:searchInput": t[1] || (t[1] = (w) => e.searchText = w),
        class: "k-user-picker",
        placeholder: e.placeholder,
        width: e.width,
        loading: e.loading,
        items: e.items,
        "return-object": e.returnObject,
        combobox: !1
      }, {
        prepend: h(({ item: w }) => [
          w ? (o(), y(n, {
            key: 0,
            type: w.type
          }, null, 8, ["type"])) : (o(), y(n, {
            key: 1,
            type: e.USER
          }, null, 8, ["type"]))
        ]),
        item: h(({ item: w }) => [
          d("div", Jn, [
            v(n, {
              type: w.type
            }, null, 8, ["type"]),
            K(" " + b(w.text), 1)
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "search-input", "placeholder", "width", "loading", "items", "return-object"])) : (o(), y(f, {
        key: 1,
        user: e.modelValue,
        gif: ""
      }, null, 8, ["user"]))
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const xn = /* @__PURE__ */ p(Xn, [["render", Yn]]), er = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xn
}, Symbol.toStringTag, { value: "Module" })), tr = c({
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
}), sr = { key: 0 };
function or(e, t, s, r, u, l) {
  return e.isSelected ? (o(), i("div", sr, [
    $(e.$slots, "default")
  ])) : m("", !0);
}
const nr = /* @__PURE__ */ p(tr, [["render", or]]), rr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nr
}, Symbol.toStringTag, { value: "Module" })), lr = c({
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
      const e = (l) => l.type.name === "KTabItem", t = (l) => typeof l.type == "symbol", s = (l) => l.children && Array.isArray(l.children) && l.children.length && l.children.some(e), r = (l) => t(l) && s(l);
      return (this.$slots.default ? this.$slots.default() : []).filter((l) => e(l) || r(l)).flatMap((l) => r(l) ? l.children : l).map((l) => ({
        name: l.props.name,
        title: l.props.title
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
        (s) => !!s
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
const ir = { class: "k-tabs" }, ar = { class: "k-tabs-nav" }, ur = ["href", "onClick"], dr = { class: "k-tabs-content" };
function cr(e, t, s, r, u, l) {
  return o(), i("div", ir, [
    d("div", ar, [
      (o(!0), i(S, null, T(e.tabs, (n) => (o(), i("div", {
        key: n.name,
        class: O(e.classObj(n))
      }, [
        d("a", {
          href: `#${n.name}`,
          onClick: (a) => e.selectTab(n.name)
        }, b(n.title), 9, ur)
      ], 2))), 128))
    ]),
    d("div", dr, [
      $(e.$slots, "default")
    ])
  ]);
}
const pr = /* @__PURE__ */ p(lr, [["render", cr]]), mr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pr
}, Symbol.toStringTag, { value: "Module" }));
const _r = /* @__PURE__ */ Object.assign({
  "./components/Card/KCard.vue": Se,
  "./components/Card/KCardActions.vue": Te,
  "./components/Card/KCardText.vue": Le,
  "./components/Card/KCardTitle.vue": Ae,
  "./components/KAdminLink.vue": Ee,
  "./components/KAlert.vue": Xe,
  "./components/KApp.vue": tt,
  "./components/KAutocomplete.vue": ut,
  "./components/KBrowseLink.vue": kt,
  "./components/KButton.vue": Ot,
  "./components/KConfirm.vue": Pt,
  "./components/KDateTimePicker.vue": Ft,
  "./components/KDialog.vue": Rt,
  "./components/KDot.vue": Wt,
  "./components/KFormFieldWrapper.vue": Xt,
  "./components/KFunctionMenu.vue": ns,
  "./components/KLinearProgressIndicator.vue": us,
  "./components/KMulti.vue": gs,
  "./components/KMulti2.vue": Ss,
  "./components/KMultiUserPicker.vue": Os,
  "./components/KNodeAncestor.vue": Cs,
  "./components/KNodePickerField.vue": As,
  "./components/KOneMoment.vue": Es,
  "./components/KPageDropZone.vue": Gs,
  "./components/KPageTitle.vue": eo,
  "./components/KPagination.vue": fo,
  "./components/KPagination2.vue": Oo,
  "./components/KRadioGroup.vue": Lo,
  "./components/KScratch.vue": Fo,
  "./components/KSelect.vue": Eo,
  "./components/KSnackbar.vue": en,
  "./components/KSortHeader.vue": ln,
  "./components/KSpacer.vue": pn,
  "./components/KSpinner.vue": bn,
  "./components/KSwitch.vue": Sn,
  "./components/KTable.vue": On,
  "./components/KTextArea.vue": Cn,
  "./components/KTextField.vue": Fn,
  "./components/KUserGIF.vue": Dn,
  "./components/KUserLink.vue": Zn,
  "./components/KUserPicker.vue": er,
  "./components/Tabs/KTabItem.vue": rr,
  "./components/Tabs/KTabs.vue": mr
});
let D;
const wr = {
  install(e, t) {
    Object.entries(_r).forEach(
      ([r, u]) => {
        const l = r?.split("/")?.pop()?.replace(/\.\w+$/, "");
        e.component(l, u.default);
      }
    ), D = new ve(t);
    const s = {
      img: t.img,
      baseUrl: t.baseUrl,
      jsLongDateFormat: t.datelong,
      jsShortDateFormat: t.dateshort
    };
    e.provide(L, D), e.provide(A, s);
  }
}, Kr = () => D;
export {
  A as configKey,
  ct as confirmDialogKey,
  wr as default,
  V as injectStrict,
  _t as nodeLookup,
  L as sessionKey,
  dt as snackbarKey,
  Kr as useSession,
  ae as userLookup
};
