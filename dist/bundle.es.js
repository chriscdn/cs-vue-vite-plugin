import { h, openBlock, createElementBlock, renderSlot, Fragment, createElementVNode, resolveComponent, createBlock, Transition, withCtx, normalizeStyle, createVNode, createTextVNode, createCommentVNode, resolveDirective, withDirectives, normalizeClass, withKeys, withModifiers, vModelText, renderList, toDisplayString, defineComponent, inject, mergeProps, vModelDynamic, Teleport, setBlockTracking, TransitionGroup, getCurrentInstance, vModelRadio, vModelSelect, useCssVars } from "vue";
import { directive } from "vue3-click-away";
import get from "lodash.get";
import Semaphore from "@chriscdn/promise-semaphore";
import { format } from "date-fns";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import buildUrl from "build-url";
import cookies from "js-cookie";
import debounce from "lodash.debounce";
import { Session } from "@kweli/cs-rest";
const clickable = {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    link: {
      type: Boolean,
      default: false
    },
    target: {
      type: String,
      default: "_self"
    },
    nuxt: {
      type: Boolean,
      default: false
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
      let tag = "div";
      let data = {};
      if (this.href) {
        tag = "a";
        data = {
          attrs: {
            href: this.href,
            target: this.target
          }
        };
      } else if (this.to) {
        tag = this.nuxt ? "nuxt-link" : "router-link";
        data = {
          props: {
            to: this.to
          }
        };
      }
      return { tag, data };
    }
  }
};
const convertToUnit = (str, unit = "px") => {
  if (str == null || str === "") {
    return void 0;
  } else if (isNaN(+str)) {
    return String(str);
  } else {
    return `${Number(str)}${unit}`;
  }
};
const measurable = {
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
      const styles2 = {};
      const height = convertToUnit(this.height);
      const minHeight = convertToUnit(this.minHeight);
      const minWidth = convertToUnit(this.minWidth);
      const maxHeight = convertToUnit(this.maxHeight);
      const maxWidth = convertToUnit(this.maxWidth);
      const width = convertToUnit(this.width);
      if (height)
        styles2.height = height;
      if (minHeight)
        styles2.minHeight = minHeight;
      if (minWidth)
        styles2.minWidth = minWidth;
      if (maxHeight)
        styles2.maxHeight = maxHeight;
      if (maxWidth)
        styles2.maxWidth = maxWidth;
      if (width)
        styles2.width = width;
      return styles2;
    }
  }
};
const KCard_vue_vue_type_style_index_0_lang = "";
const _sfc_main$F = {
  mixins: [measurable, clickable],
  // props: {
  //     loading: {
  //         type: Boolean,
  //         default: false,
  //     },
  // },
  computed: {
    classObj() {
      return {
        "k-card": true,
        "k-card-clickable": this.isClickable
      };
    }
  },
  methods: {
    // renderLoading() {
    //     return this.loading ? h(KLinearProgressIndicator) : null
    // },
    renderCard() {
      const { tag, data } = this.generateRouteLink();
      return h(
        tag,
        {
          ...data,
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
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$F
}, Symbol.toStringTag, { value: "Module" }));
const KCardActions_vue_vue_type_style_index_0_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$E = {};
const _hoisted_1$y = { class: "k-card-actions" };
function _sfc_render$E(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$y, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
const KCardActions = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["render", _sfc_render$E]]);
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: KCardActions
}, Symbol.toStringTag, { value: "Module" }));
const KCardText_vue_vue_type_style_index_0_lang = "";
const _sfc_main$D = {};
const _hoisted_1$x = { class: "k-card-text" };
function _sfc_render$D(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$x, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
const KCardText = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["render", _sfc_render$D]]);
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: KCardText
}, Symbol.toStringTag, { value: "Module" }));
const KCardTitle_vue_vue_type_style_index_0_lang = "";
const _sfc_main$C = {};
const _hoisted_1$w = { class: "k-card-title" };
function _sfc_render$C(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$w, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
const KCardTitle = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["render", _sfc_render$C]]);
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: KCardTitle
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$B = {};
const _hoisted_1$v = /* @__PURE__ */ createElementVNode("hr", null, null, -1);
const _hoisted_2$i = ["href"];
function _sfc_render$B(_ctx, _cache) {
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1$v,
    createElementVNode("a", {
      href: `${_ctx.$cgi}?func=admin.index`
    }, "Admin Home", 8, _hoisted_2$i)
  ], 64);
}
const KAdminLink = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["render", _sfc_render$B]]);
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: KAdminLink
}, Symbol.toStringTag, { value: "Module" }));
const colorable = {
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
};
const _sfc_main$A = {
  mixins: [colorable],
  props: {
    visible: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      visibleLocal: true
    };
  },
  watch: {
    visible: {
      handler(value) {
        this.visibleLocal = value;
      },
      immediate: true
    }
  },
  methods: {
    dismiss() {
      this.visibleLocal = false;
    }
  }
};
const _hoisted_1$u = { class: "flex-grow" };
function _sfc_render$A(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_JIcon = resolveComponent("JIcon");
  return openBlock(), createBlock(Transition, { name: "fade" }, {
    default: withCtx(() => [
      $data.visibleLocal ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "flex items-center rounded text-main-bright p-2",
        style: normalizeStyle([_ctx.colorableBackgroundStyle])
      }, [
        createElementVNode("div", _hoisted_1$u, [
          renderSlot(_ctx.$slots, "default")
        ]),
        createElementVNode("button", {
          class: "flex-grow-0",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.dismiss && $options.dismiss(...args))
        }, [
          createVNode(_component_JIcon, { class: "text-main-bright" }, {
            default: withCtx(() => [
              createTextVNode(" icon-x ")
            ]),
            _: 1
          })
        ])
      ], 4)) : createCommentVNode("", true)
    ]),
    _: 3
  });
}
const KAlert = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["render", _sfc_render$A]]);
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: KAlert
}, Symbol.toStringTag, { value: "Module" }));
const KApp_vue_vue_type_style_index_0_lang = "";
const _sfc_main$z = {};
const _hoisted_1$t = { class: "k-app" };
function _sfc_render$z(_ctx, _cache) {
  const _component_KSnackbar = resolveComponent("KSnackbar");
  const _component_KConfirm = resolveComponent("KConfirm");
  return openBlock(), createElementBlock("div", _hoisted_1$t, [
    createVNode(_component_KConfirm, null, {
      default: withCtx(() => [
        createVNode(_component_KSnackbar, null, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    })
  ]);
}
const KApp = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["render", _sfc_render$z]]);
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: KApp
}, Symbol.toStringTag, { value: "Module" }));
const KAutocomplete_vue_vue_type_style_index_0_lang = "";
const _sfc_main$y = {
  directives: {
    ClickAway: directive
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
      default: false
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
      default: false
    },
    combobox: {
      type: Boolean,
      default: false
    },
    filter: {
      type: Function,
      default: (item) => !!item
    },
    editable: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      inputText: "",
      // this.displayValueFormatter(this.modelValue),
      currentFocus: -1,
      focus: false
      // captureKeyStrokes: true,
    };
  },
  computed: {
    style() {
      return {
        width: isNaN(this.width) ? this.width : `${this.width}px`
      };
    },
    itemsFiltered() {
      return this.items.filter((item) => this.filter(item));
    },
    placeholderText() {
      return this.editable ? this.placeholder : null;
    },
    localValue: {
      set(value) {
        if (!value) {
          this.$emit("update:modelValue", null);
        } else if (this.returnObject) {
          this.$emit("update:modelValue", value);
        } else {
          this.$emit("update:modelValue", get(value, this.itemValue, value));
        }
      },
      get() {
        return this.isObject(this.modelValue) ? this.modelValue : this.items.find(
          (item) => get(item, this.itemValue, item) == this.modelValue
        );
      }
    },
    isValidSelection() {
      return !!this.localValue;
    }
  },
  watch: {
    inputText(value) {
      this.$emit("update:search-input", value);
    },
    items() {
      this.currentFocus = -1;
      if (this.localValue) {
        if (!this.combobox) {
          this.inputText = this.isObject(this.localValue) ? get(this.localValue, this.itemText, "") : this.localValue;
        }
      }
    },
    value: {
      handler(v) {
        this.inputText = get(this.localValue, this.itemText, v);
      },
      immediate: true
    },
    focus(value) {
      if (value)
        ;
      else {
        if (this.localValue)
          ;
        else if (!this.combobox) {
          this.inputText = null;
        }
      }
    }
  },
  methods: {
    async select(index2) {
      if (!this.combobox) {
        index2 = Math.max(index2, 0);
      }
      const selectedItem = this.items[index2];
      if (this.combobox) {
        if (selectedItem) {
          this.localValue = selectedItem;
        }
      } else {
        this.localValue = selectedItem;
        this.inputText = selectedItem[this.itemText];
      }
      await this.$nextTick();
      this.setBlur();
    },
    setFocus() {
      this.focus = true;
    },
    setBlur() {
      this.$refs.input.blur();
      this.focus = false;
    },
    isObject(obj) {
      return typeof obj == "object" && obj instanceof Object && !(obj instanceof Array);
    },
    clearInput(_event) {
      this.localValue = null;
    },
    keyup(_event) {
      if (this.combobox) {
        this.localValue = this.inputText;
      } else {
        this.localValue = null;
      }
    }
  }
};
const _hoisted_1$s = { class: "k-autocomplete-input" };
const _hoisted_2$h = ["placeholder", "readonly"];
const _hoisted_3$9 = {
  key: 0,
  class: "k-autocomplete-items"
};
const _hoisted_4$7 = ["onClick"];
function _sfc_render$y(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_click_away = resolveDirective("click-away");
  return withDirectives((openBlock(), createElementBlock("div", {
    class: "k-autocomplete",
    style: normalizeStyle([$options.style])
  }, [
    renderSlot(_ctx.$slots, "prepend", { item: $options.localValue }),
    createElementVNode("div", _hoisted_1$s, [
      withDirectives(createElementVNode("input", {
        ref: "input",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.inputText = $event),
        class: normalizeClass(["k-input", { invalidSelection: !$options.isValidSelection }]),
        type: "search",
        autocomplete: "off",
        placeholder: $options.placeholderText,
        readonly: !$props.editable,
        onSearch: _cache[1] || (_cache[1] = (...args) => $options.clearInput && $options.clearInput(...args)),
        onKeydown: [
          _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => $data.currentFocus = Math.max(-1, $data.currentFocus - 1), ["prevent"]), ["arrow-up"])),
          _cache[3] || (_cache[3] = withKeys(withModifiers(($event) => $data.currentFocus = Math.min($props.items.length - 1, $data.currentFocus + 1), ["prevent"]), ["arrow-down"])),
          _cache[4] || (_cache[4] = withKeys(withModifiers(($event) => $options.select($data.currentFocus), ["prevent"]), ["enter"])),
          _cache[6] || (_cache[6] = withKeys((...args) => $options.setBlur && $options.setBlur(...args), ["tab"]))
        ],
        onFocus: _cache[5] || (_cache[5] = (...args) => $options.setFocus && $options.setFocus(...args)),
        onKeyup: _cache[7] || (_cache[7] = (...args) => $options.keyup && $options.keyup(...args))
      }, null, 42, _hoisted_2$h), [
        [vModelText, $data.inputText]
      ]),
      $data.focus && $props.items.length && !!$data.inputText ? (openBlock(), createElementBlock("div", _hoisted_3$9, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($options.itemsFiltered, (item, index2) => {
          return openBlock(), createElementBlock("div", {
            key: index2,
            class: normalizeClass(["k-autocomplete-item", { "k-autocomplete-active": $data.currentFocus == index2 }]),
            onClick: ($event) => $options.select(index2)
          }, [
            renderSlot(_ctx.$slots, "item", { item }, () => [
              createTextVNode(toDisplayString(item), 1)
            ])
          ], 10, _hoisted_4$7);
        }), 128))
      ])) : createCommentVNode("", true)
    ])
  ], 4)), [
    [_directive_click_away, $options.setBlur]
  ]);
}
const KAutocomplete = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["render", _sfc_render$y]]);
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: KAutocomplete
}, Symbol.toStringTag, { value: "Module" }));
const semaphore$2 = new Semaphore();
class NodeLookup {
  constructor() {
    this.nodes = {};
  }
  // registerUsers(items) {
  //   items.forEach((user) => (this.users[user.value] = user))
  // }
  async lookup(session, dataId) {
    try {
      await semaphore$2.acquire(dataId);
      if (this.nodes[dataId] == null) {
        const response = await session.get(`/api/v1/rh/nodes/${dataId}/lite/`);
        this.nodes[dataId] = response.data;
      }
      return this.nodes[dataId];
    } finally {
      semaphore$2.release(dataId);
    }
  }
}
const nodeLookup = new NodeLookup();
const _sfc_main$x = defineComponent({
  setup() {
    const session = inject("session", {});
    return { session };
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
      default: true
    },
    clickable: {
      type: Boolean,
      default: true
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
      async handler(value) {
        if (value) {
          this.nodeRecLocal = await nodeLookup.lookup(this.session, value);
        }
      },
      immediate: true
    }
  }
});
const _hoisted_1$r = { key: 0 };
const _hoisted_2$g = ["src"];
const _hoisted_3$8 = ["href"];
const _hoisted_4$6 = ["innerHTML"];
function _sfc_render$x(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_KFunctionMenu = resolveComponent("KFunctionMenu");
  return _ctx.nodeRecResolved ? (openBlock(), createElementBlock("span", _hoisted_1$r, [
    _ctx.image ? (openBlock(), createElementBlock("img", {
      key: 0,
      src: _ctx.nodeRecResolved.gif
    }, null, 8, _hoisted_2$g)) : createCommentVNode("", true),
    createTextVNode(" "),
    createElementVNode("a", {
      href: _ctx.nodeRecResolved.url
    }, toDisplayString(_ctx.nodeRecResolved.name), 9, _hoisted_3$8),
    _ctx.clickable ? (openBlock(), createBlock(_component_KFunctionMenu, {
      key: 1,
      dataid: _ctx.nodeRecResolved.dataid
    }, null, 8, ["dataid"])) : createCommentVNode("", true),
    createElementVNode("span", {
      innerHTML: _ctx.nodeRecResolved.modifiedImageCallback
    }, null, 8, _hoisted_4$6)
  ])) : createCommentVNode("", true);
}
const KBrowseLink = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["render", _sfc_render$x]]);
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: KBrowseLink
}, Symbol.toStringTag, { value: "Module" }));
const KButton_vue_vue_type_style_index_0_lang = "";
const _sfc_main$w = {
  props: {
    small: {
      type: Boolean,
      default: false
    },
    text: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
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
};
const _hoisted_1$q = ["disabled"];
function _sfc_render$w(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", mergeProps({
    class: ["k-button", $options.classObj],
    disabled: $props.disabled,
    type: "button"
  }, _ctx.$attrs, {
    onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click"))
  }), [
    renderSlot(_ctx.$slots, "default")
  ], 16, _hoisted_1$q);
}
const KButton = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["render", _sfc_render$w]]);
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: KButton
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$v = {
  provide() {
    return {
      kconfirm: this,
      resolve: null
    };
  },
  data() {
    return {
      dialog: false,
      noLabel: "Cancel",
      yesLabel: "OK",
      title: null,
      message: null
    };
  },
  methods: {
    dismiss(bool) {
      this.dialog = false;
      this.resolve(bool);
      this.resolve = false;
    },
    alert({ yesLabel = "OK", title, message }) {
      return this.confirm({ yesLabel, title, message });
    },
    confirm({ noLabel = "Cancel", yesLabel = "OK", title, message }) {
      this.noLabel = noLabel;
      this.yesLabel = yesLabel;
      this.title = title;
      this.message = message;
      return new Promise((resolve) => {
        this.resolve = resolve;
        this.dialog = true;
      });
    }
  }
};
function _sfc_render$v(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_KCardTitle = resolveComponent("KCardTitle");
  const _component_KCardText = resolveComponent("KCardText");
  const _component_KSpacer = resolveComponent("KSpacer");
  const _component_KButton = resolveComponent("KButton");
  const _component_KCardActions = resolveComponent("KCardActions");
  const _component_KCard = resolveComponent("KCard");
  const _component_KDialog = resolveComponent("KDialog");
  return openBlock(), createElementBlock(Fragment, null, [
    renderSlot(_ctx.$slots, "default"),
    createVNode(_component_KDialog, {
      modelValue: $data.dialog,
      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.dialog = $event),
      "max-width": "30vw",
      "min-width": "20vw"
    }, {
      default: withCtx(() => [
        createVNode(_component_KCard, null, {
          default: withCtx(() => [
            $data.title ? (openBlock(), createBlock(_component_KCardTitle, { key: 0 }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString($data.title), 1)
              ]),
              _: 1
            })) : createCommentVNode("", true),
            $data.message ? (openBlock(), createBlock(_component_KCardText, { key: 1 }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString($data.message), 1)
              ]),
              _: 1
            })) : createCommentVNode("", true),
            createVNode(_component_KCardActions, null, {
              default: withCtx(() => [
                createVNode(_component_KSpacer),
                $data.noLabel ? (openBlock(), createBlock(_component_KButton, {
                  key: 0,
                  small: "",
                  onClick: _cache[0] || (_cache[0] = ($event) => $options.dismiss(false))
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString($data.noLabel), 1)
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                $data.yesLabel ? (openBlock(), createBlock(_component_KButton, {
                  key: 1,
                  small: "",
                  class: "ml-1",
                  onClick: _cache[1] || (_cache[1] = ($event) => $options.dismiss(true))
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString($data.yesLabel), 1)
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
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
const KConfirm = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["render", _sfc_render$v]]);
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: KConfirm
}, Symbol.toStringTag, { value: "Module" }));
const KDateTimePicker_vue_vue_type_style_index_0_lang = "";
const _sfc_main$u = {
  props: {
    modelValue: {
      type: [String, Date],
      default: null
    },
    time: {
      type: Boolean,
      default: false
    },
    editable: {
      type: Boolean,
      default: true
    }
  },
  emits: ["update:modelValue"],
  computed: {
    type() {
      return this.time ? "datetime-local" : "date";
    },
    localModelValue: {
      set(value) {
        this.$emit("update:modelValue", this.formatForDatePicker(value));
      },
      get() {
        return this.formatForDatePicker(this.modelValue);
      }
    }
  },
  methods: {
    parse(value) {
      return value ? new Date(value) : null;
    },
    setToNow() {
      this.localModelValue = new Date();
    },
    formatForDatePicker(value) {
      const d = this.parse(value);
      if (d) {
        if (this.time) {
          return format(d, "yyyy-MM-dd'T'HH:mm:ss");
        } else {
          return format(d, "yyyy-MM-dd");
        }
      } else {
        return null;
      }
    }
  }
};
const _hoisted_1$p = { class: "k-date-time-picker" };
const _hoisted_2$f = ["type", "readonly"];
function _sfc_render$u(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_KButton = resolveComponent("KButton");
  return openBlock(), createElementBlock("div", _hoisted_1$p, [
    withDirectives(createElementVNode("input", {
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $options.localModelValue = $event),
      class: "k-input",
      type: $options.type,
      readonly: !$props.editable
    }, null, 8, _hoisted_2$f), [
      [vModelDynamic, $options.localModelValue]
    ]),
    $props.editable ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
      createVNode(_component_KButton, {
        small: "",
        onClick: $options.setToNow
      }, {
        default: withCtx(() => [
          createTextVNode(" Now ")
        ]),
        _: 1
      }, 8, ["onClick"]),
      createVNode(_component_KButton, {
        small: "",
        onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("update:modelValue", null))
      }, {
        default: withCtx(() => [
          createTextVNode(" Clear ")
        ]),
        _: 1
      })
    ], 64)) : createCommentVNode("", true)
  ]);
}
const KDateTimePicker = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["render", _sfc_render$u]]);
const __vite_glob_0_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: KDateTimePicker
}, Symbol.toStringTag, { value: "Module" }));
const KDialog_vue_vue_type_style_index_0_lang = "";
const _sfc_main$t = {
  directives: {
    ClickAway: directive
  },
  mixins: [measurable],
  props: {
    modelValue: {
      type: Boolean,
      required: false
    },
    persistent: {
      type: Boolean,
      default: false
    },
    scrollable: {
      type: Boolean,
      default: false
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
      dialog: false,
      mounted: false
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
      handler(value) {
        this.dialog = value;
      },
      immediate: true
    },
    async dialog(value) {
      this.$emit("update:modelValue", value);
      if (value) {
        await this.$nextTick();
        disableBodyScroll(this.$refs.content);
      } else {
        enableBodyScroll(this.$refs.content);
      }
    }
  },
  mounted() {
    this.mounted = true;
  },
  methods: {
    clickAway() {
      if (!this.persistent) {
        this.closeDialog();
      }
    },
    closeDialog() {
      if (this.dialog) {
        this.dialog = false;
      }
    },
    on() {
      this.dialog = !this.dialog;
    }
  }
};
function _sfc_render$t(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_click_away = resolveDirective("click-away");
  return openBlock(), createElementBlock(Fragment, null, [
    renderSlot(_ctx.$slots, "activator", { on: $options.on }),
    $data.mounted ? (openBlock(), createBlock(Teleport, {
      key: 0,
      to: ".k-app"
    }, [
      createVNode(Transition, { name: "fade" }, {
        default: withCtx(() => [
          $data.dialog ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "k-dialog",
            style: normalizeStyle([$options.style])
          }, [
            withDirectives((openBlock(), createElementBlock("div", {
              ref: "content",
              class: normalizeClass(["k-dialog-content", $options.classObj]),
              style: normalizeStyle([_ctx.measurableStyles])
            }, [
              renderSlot(_ctx.$slots, "default", { on: $options.on })
            ], 6)), [
              [_directive_click_away, $options.clickAway]
            ])
          ], 4)) : createCommentVNode("", true)
        ]),
        _: 3
      })
    ])) : createCommentVNode("", true)
  ], 64);
}
const KDialog = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$t]]);
const __vite_glob_0_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: KDialog
}, Symbol.toStringTag, { value: "Module" }));
const KDot_vue_vue_type_style_index_0_lang = "";
const _sfc_main$s = {
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
      default: false
    },
    outlineWidth: {
      type: [String, Number],
      default: 2
    }
  },
  computed: {
    style() {
      const size = convertToUnit(this.size);
      if (this.outline) {
        const borderSize = convertToUnit(this.outlineWidth);
        return {
          borderStyle: "solid",
          borderWidth: borderSize,
          borderColor: this.color,
          width: size,
          height: size
        };
      } else {
        return {
          width: size,
          height: size,
          backgroundColor: this.color
        };
      }
    }
  }
};
function _sfc_render$s(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "k-dot",
    style: normalizeStyle([$options.style])
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 4);
}
const KDot = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["render", _sfc_render$s]]);
const __vite_glob_0_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: KDot
}, Symbol.toStringTag, { value: "Module" }));
const KFormFieldWrapper_vue_vue_type_style_index_0_lang = "";
const mixin = {
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
        "k-input": true,
        "k-input--success": this.hasSuccess && !this.hasError,
        "k-input--error": this.hasError
      };
    }
  }
};
const _sfc_main$r = {
  mixins: [mixin]
};
const _hoisted_1$o = {
  key: 0,
  class: "k-form-field-label"
};
function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    _ctx.label ? (openBlock(), createElementBlock("div", _hoisted_1$o, toDisplayString(_ctx.label), 1)) : createCommentVNode("", true),
    renderSlot(_ctx.$slots, "default"),
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.successMessages, (successMessage, index2) => {
      return openBlock(), createElementBlock("div", {
        key: index2,
        class: "k-formfield--success"
      }, toDisplayString(successMessage), 1);
    }), 128)),
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.errorMessages, (errorMessage, index2) => {
      return openBlock(), createElementBlock("div", {
        key: index2,
        class: "k-formfield--error"
      }, toDisplayString(errorMessage), 1);
    }), 128))
  ]);
}
const KFormFieldWrapper = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$r]]);
const __vite_glob_0_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: KFormFieldWrapper,
  mixin
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$q = defineComponent({
  setup() {
    const config = inject("config", {});
    return { config };
  },
  props: {
    // The DataId of the node.
    dataid: {
      type: Number,
      required: true
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
      return this.isModernFunctionMenu ? this.xid : null;
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
      const ele = this.$refs.functionMenuDiv;
      if (ele) {
        while (ele.firstChild) {
          ele.removeChild(ele.firstChild);
        }
      }
    }
  },
  mounted() {
    if (!this.isModernFunctionMenu) {
      this.onmouseout();
    }
  },
  methods: {
    onclick(event) {
      window.setSectionName(this.uniqueid);
      window.showFunctionMenu2("", this.dataid, event, "", this.func);
      window.setSectionName("");
      return false;
    },
    onmouseover() {
      this.image = `${this.config.img}webdoc/actions_hover.png`;
    },
    onmouseout() {
      this.image = `${this.config.img}webdoc/actions.png`;
    }
  }
});
const _hoisted_1$n = { key: 0 };
const _hoisted_2$e = ["id"];
const _hoisted_3$7 = ["src"];
const _hoisted_4$5 = ["id", "src"];
function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.dataid ? (openBlock(), createElementBlock("span", _hoisted_1$n, [
    createElementVNode("a", {
      id: _ctx.aid,
      href: "#",
      class: "functionMenuHotspot",
      onClick: _cache[2] || (_cache[2] = withModifiers((...args) => _ctx.onclick && _ctx.onclick(...args), ["prevent"]))
    }, [
      _ctx.isModernFunctionMenu ? (openBlock(), createElementBlock("img", {
        key: 0,
        src: `${_ctx.config.img}spacer.gif`,
        alt: "Functions"
      }, null, 8, _hoisted_3$7)) : (openBlock(), createElementBlock("img", {
        key: 1,
        id: _ctx.xid,
        src: _ctx.image,
        border: "0",
        alt: "Functions",
        title: "Functions",
        onMouseover: _cache[0] || (_cache[0] = (...args) => _ctx.onmouseover && _ctx.onmouseover(...args)),
        onMouseout: _cache[1] || (_cache[1] = (...args) => _ctx.onmouseout && _ctx.onmouseout(...args))
      }, null, 40, _hoisted_4$5))
    ], 8, _hoisted_2$e),
    _cache[3] || (setBlockTracking(-1), _cache[3] = createElementVNode("div", {
      id: _ctx.zid,
      ref: "functionMenuDiv",
      class: "functionMenuDiv"
    }, null, 8, ["id"]), setBlockTracking(1), _cache[3])
  ])) : createCommentVNode("", true);
}
const KFunctionMenu = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$q]]);
const __vite_glob_0_15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: KFunctionMenu
}, Symbol.toStringTag, { value: "Module" }));
const KLinearProgressIndicator_vue_vue_type_style_index_0_lang = "";
const _sfc_main$p = {};
const _hoisted_1$m = { class: "k-progress-line" };
function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$m);
}
const KLinearProgressIndicator = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$p]]);
const __vite_glob_0_16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: KLinearProgressIndicator
}, Symbol.toStringTag, { value: "Module" }));
const KMulti_vue_vue_type_style_index_0_lang = "";
const _sfc_main$o = {
  props: {
    modelValue: {
      type: Array,
      required: true
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
      set(value) {
        this.$emit("update:modelValue", value);
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
    add(index2) {
      const items = [...this.valueLocal];
      items.splice(index2 + 1, 0, this.template);
      this.valueLocal = items;
    },
    remove(index2) {
      const myArray = [...this.valueLocal];
      myArray.splice(index2, 1);
      this.valueLocal = myArray;
    },
    update(index2, value) {
      const items = [...this.valueLocal];
      items[index2] = value;
      this.valueLocal = items;
    }
  }
};
const _hoisted_1$l = { class: "k-multi-widget" };
const _hoisted_2$d = { class: "k-multi-buttons" };
const _hoisted_3$6 = /* @__PURE__ */ createElementVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ createElementVNode("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z" })
], -1);
const _hoisted_4$4 = /* @__PURE__ */ createElementVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ createElementVNode("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" })
], -1);
function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_KButton = resolveComponent("KButton");
  const _component_KCard = resolveComponent("KCard");
  return openBlock(), createBlock(_component_KCard, { class: "k-multi" }, {
    default: withCtx(() => [
      createVNode(TransitionGroup, {
        name: "fade",
        tag: "div"
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList($options.valueLocal, (value, index2) => {
            return openBlock(), createElementBlock("div", {
              key: `k-multi-${value}`,
              class: "k-multi-item"
            }, [
              createElementVNode("div", _hoisted_1$l, [
                renderSlot(_ctx.$slots, "default", {
                  index: index2,
                  value,
                  update: (updatedValue) => $options.update(index2, updatedValue)
                })
              ]),
              createElementVNode("div", _hoisted_2$d, [
                $options.canRemove ? (openBlock(), createBlock(_component_KButton, {
                  key: 0,
                  text: "",
                  onClick: ($event) => $options.remove(index2)
                }, {
                  default: withCtx(() => [
                    _hoisted_3$6
                  ]),
                  _: 2
                }, 1032, ["onClick"])) : createCommentVNode("", true),
                $options.canAdd ? (openBlock(), createBlock(_component_KButton, {
                  key: 1,
                  text: "",
                  onClick: ($event) => $options.add(index2)
                }, {
                  default: withCtx(() => [
                    _hoisted_4$4
                  ]),
                  _: 2
                }, 1032, ["onClick"])) : createCommentVNode("", true)
              ])
            ]);
          }), 128))
        ]),
        _: 3
      })
    ]),
    _: 3
  });
}
const KMulti = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$o]]);
const __vite_glob_0_17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: KMulti
}, Symbol.toStringTag, { value: "Module" }));
const KMulti2_vue_vue_type_style_index_0_lang = "";
const _sfc_main$n = {
  props: {
    modelValue: {
      type: Array,
      required: true
    },
    maxItems: {
      type: Number,
      default: 100
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue"],
  computed: {
    valueLocal: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      }
    },
    count() {
      var _a;
      return ((_a = this.valueLocal) == null ? void 0 : _a.length) ?? 0;
    },
    canAdd() {
      return this.count < this.maxItems && !this.readonly;
    }
  },
  methods: {
    add(item) {
      if (item) {
        this.valueLocal = [...this.valueLocal, item].filter(
          (item2, index2, items) => items.indexOf(item2) === index2
        );
      }
    },
    remove(index2) {
      const myArray = [...this.valueLocal];
      myArray.splice(index2, 1);
      this.valueLocal = myArray;
    }
  }
};
const _hoisted_1$k = { class: "k-multi-widget" };
const _hoisted_2$c = { class: "k-multi-buttons" };
const _hoisted_3$5 = /* @__PURE__ */ createElementVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ createElementVNode("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z" })
], -1);
function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_KButton = resolveComponent("KButton");
  const _component_KCard = resolveComponent("KCard");
  return openBlock(), createBlock(_component_KCard, { class: "k-multi" }, {
    default: withCtx(() => [
      createVNode(TransitionGroup, {
        name: "fade",
        tag: "div"
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList($options.valueLocal, (value, index2) => {
            return openBlock(), createElementBlock("div", {
              key: `k-multi-${value}`,
              class: "k-multi-item"
            }, [
              createElementVNode("div", _hoisted_1$k, [
                renderSlot(_ctx.$slots, "readonly", {
                  index: index2,
                  value
                }, () => [
                  createTextVNode(toDisplayString(value), 1)
                ])
              ]),
              createElementVNode("div", _hoisted_2$c, [
                createVNode(_component_KButton, {
                  text: "",
                  onClick: ($event) => $options.remove(index2)
                }, {
                  default: withCtx(() => [
                    _hoisted_3$5
                  ]),
                  _: 2
                }, 1032, ["onClick"])
              ])
            ]);
          }), 128))
        ]),
        _: 3
      }),
      $options.canAdd ? renderSlot(_ctx.$slots, "add", {
        key: 0,
        add: $options.add
      }) : createCommentVNode("", true)
    ]),
    _: 3
  });
}
const KMulti2 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$n]]);
const __vite_glob_0_18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: KMulti2
}, Symbol.toStringTag, { value: "Module" }));
const semaphore$1 = new Semaphore();
class AncestorLookup {
  constructor() {
    this.nodes = {};
  }
  registerNodes(items) {
    items.forEach((user) => {
      this.nodes[user.value] = user;
    });
  }
  async lookup(session, dataId) {
    try {
      await semaphore$1.acquire(dataId);
      if (!this.nodes[dataId]) {
        const response = await session.nodes.ancestors(dataId);
        this.nodes[dataId] = get(response, "data.ancestors", []);
      }
      return this.nodes[dataId];
    } finally {
      semaphore$1.release(dataId);
    }
  }
}
const ancestorLookup = new AncestorLookup();
const KNodeAncestor_vue_vue_type_style_index_0_lang = "";
const _sfc_main$m = defineComponent({
  setup() {
    const session = inject("session", {});
    return { session };
  },
  props: {
    dataid: {
      type: Number,
      required: true
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
      async handler(value) {
        if (value) {
          this.breadcrumb = await ancestorLookup.lookup(this.session, value);
        }
      },
      immediate: true
    }
  }
});
const _hoisted_1$j = { class: "k-node-breadcrumb" };
function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$j, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.breadcrumb, (item, index2) => {
      return openBlock(), createElementBlock(Fragment, {
        key: item.dataid
      }, [
        createTextVNode(toDisplayString(item.name) + " ", 1),
        index2 < _ctx.breadcrumb.length - 1 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createTextVNode(" ▶ ")
        ], 64)) : createCommentVNode("", true)
      ], 64);
    }), 128))
  ]);
}
const KNodeAncestor = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$m]]);
const __vite_glob_0_19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: KNodeAncestor
}, Symbol.toStringTag, { value: "Module" }));
const KNodePickerField_vue_vue_type_style_index_0_lang = "";
const _sfc_main$l = defineComponent({
  setup() {
    const session = inject("session", {});
    const config = inject("config", {});
    return { session, config };
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
      defalut: true
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
      set(value) {
        this.$emit("update:modelValue", value);
      },
      get() {
        return this.modelValue;
      }
    },
    uniqueID() {
      const uid = getCurrentInstance().uid;
      return `targetbrowse_${uid}`;
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
      if (this.selectScreen.length) {
        return {
          selectScreen: `{${this.selectScreen.join(",")}}`
        };
      } else {
        return null;
      }
    },
    urlParams() {
      return {
        func: "ll",
        objAction: "TargetBrowse",
        headerLabel: this.title,
        objid: this.targetBrowseObjID(),
        selectPerm: this.selectperm,
        ...this.selectScreenString,
        formname: "ignored",
        fieldPrefix: this.uniqueID
      };
    },
    url() {
      return buildUrl(this.config.baseURL, {
        queryParams: this.urlParams
      });
    },
    name() {
      var _a;
      return (_a = this.breadcrumb[this.breadcrumb.length - 1]) == null ? void 0 : _a.name;
    },
    windowParams() {
      const windowParams = {
        width: this.width,
        height: this.height,
        resizable: "yes",
        menubar: "no",
        scrollbars: "yes",
        toolbar: "yes"
      };
      return Object.entries(windowParams).map(([key, value]) => `${key}=${value}`).join(",");
    }
  },
  watch: {
    dataid: {
      async handler() {
        if (this.dataid) {
          this.breadcrumb = await ancestorLookup.lookup(
            this.session,
            this.dataid
          );
        } else {
          this.breadcrumb = [];
        }
      },
      immediate: true
    }
  },
  async mounted() {
    window[this.globalCallbackFunctionName] = this.callback;
  },
  beforeUnmount() {
    delete window[this.globalCallbackFunctionName];
  },
  methods: {
    openWindow() {
      window.open(this.url, "WindowName", this.windowParams);
      if (this.$refs.input) {
        this.$refs.input.blur();
      }
    },
    targetBrowseObjID() {
      return this.objid || parseInt(cookies.get("TargetBrowseObjID")) || 0;
    },
    didCloseWindow() {
      console.log("didClose");
    },
    callback(dataid, breadcrumb) {
      this.dataid = dataid;
    },
    clear() {
      this.breadcrumb = [];
      this.dataid = null;
    }
  },
  components: { KNodeAncestor }
});
const _hoisted_1$i = { class: "k-node-picker-field" };
const _hoisted_2$b = ["value"];
function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_KButton = resolveComponent("KButton");
  const _component_KNodeAncestor = resolveComponent("KNodeAncestor");
  return openBlock(), createElementBlock("div", _hoisted_1$i, [
    createElementVNode("input", {
      ref: "input",
      type: "text",
      class: "k-input",
      value: _ctx.name,
      onFocus: _cache[0] || (_cache[0] = (...args) => _ctx.openWindow && _ctx.openWindow(...args))
    }, null, 40, _hoisted_2$b),
    createVNode(_component_KButton, {
      small: "",
      onClick: _ctx.openWindow
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString(_ctx.browseButtonLabel), 1)
      ]),
      _: 1
    }, 8, ["onClick"]),
    _ctx.clearable ? (openBlock(), createBlock(_component_KButton, {
      key: 0,
      small: "",
      onClick: _ctx.clear
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString(_ctx.clearButtonLabel), 1)
      ]),
      _: 1
    }, 8, ["onClick"])) : createCommentVNode("", true),
    _ctx.dataid ? (openBlock(), createBlock(_component_KNodeAncestor, {
      key: 1,
      dataid: _ctx.dataid
    }, null, 8, ["dataid"])) : createCommentVNode("", true)
  ]);
}
const KNodePickerField = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$l]]);
const __vite_glob_0_20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: KNodePickerField
}, Symbol.toStringTag, { value: "Module" }));
const KOneMoment_vue_vue_type_style_index_0_lang = "";
const _sfc_main$k = {
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: "One moment..."
    }
  }
};
const _hoisted_1$h = { class: "k-one-moment" };
const _hoisted_2$a = { class: "k-one-moment-label" };
function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_KSpinner = resolveComponent("KSpinner");
  const _component_KDialog = resolveComponent("KDialog");
  return openBlock(), createBlock(_component_KDialog, {
    "model-value": $props.loading,
    width: null
  }, {
    default: withCtx(() => [
      createElementVNode("div", _hoisted_1$h, [
        createVNode(_component_KSpinner, {
          height: 36,
          width: 36
        }),
        createElementVNode("div", _hoisted_2$a, toDisplayString($props.label), 1)
      ])
    ]),
    _: 1
  }, 8, ["model-value"]);
}
const KOneMoment = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$k]]);
const __vite_glob_0_21 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: KOneMoment
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$j = {
  props: {
    mimetypes: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      active: false,
      lastTarget: null
    };
  },
  mounted() {
    window.addEventListener("dragenter", this.dragenter);
    window.addEventListener("dragleave", this.dragleave);
    window.addEventListener("dragover", this.dragover);
    window.addEventListener("drop", this.drop);
  },
  beforeUnmount() {
    window.removeEventListener("dragenter", this.dragenter);
    window.removeEventListener("dragleave", this.dragleave);
    window.removeEventListener("dragover", this.dragover);
    window.removeEventListener("drop", this.drop);
  },
  methods: {
    isFile(event) {
      return event.dataTransfer.types.some((item) => item === "Files");
    },
    dragenter(event) {
      if (this.isFile(event)) {
        this.lastTarget = event.target;
        this.active = true;
      }
    },
    dragleave(event) {
      event.preventDefault();
      if (event.target === this.lastTarget || event.target === window.document) {
        this.active = false;
      }
    },
    dragover(event) {
      event.preventDefault();
    },
    drop(event) {
      event.preventDefault();
      if (event.dataTransfer && event.dataTransfer.files.length) {
        this.$emit("predrop");
        let files = Array.from(event.dataTransfer.files);
        if (this.mimetypes) {
          files = files.filter((file) => this.mimetypes.includes(file.type));
        }
        this.$emit("drop", files);
      }
      this.active = false;
    }
  }
};
function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    renderSlot(_ctx.$slots, "default", { active: $data.active })
  ]);
}
const KPageDropZone = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$j]]);
const __vite_glob_0_22 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: KPageDropZone
}, Symbol.toStringTag, { value: "Module" }));
const KPageTitle_vue_vue_type_style_index_0_scoped_d62e479f_lang = "";
const _sfc_main$i = {
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      default: null
    }
  }
};
const _hoisted_1$g = { key: 0 };
const _hoisted_2$9 = { class: "rhmuted" };
function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("h1", null, [
    createTextVNode(toDisplayString($props.title), 1),
    $props.subtitle ? (openBlock(), createElementBlock("span", _hoisted_1$g, [
      createTextVNode(": "),
      createElementVNode("span", _hoisted_2$9, toDisplayString($props.subtitle) + " - 2", 1)
    ])) : createCommentVNode("", true)
  ]);
}
const KPageTitle = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$i], ["__scopeId", "data-v-d62e479f"]]);
const __vite_glob_0_23 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: KPageTitle
}, Symbol.toStringTag, { value: "Module" }));
const KPagination_vue_vue_type_style_index_0_lang = "";
const _sfc_main$h = {
  props: {
    modelValue: {
      type: Number,
      required: true
    },
    pagination: {
      type: Object,
      required: true
    },
    length: {
      type: Number,
      required: true
    }
  },
  emits: ["update:modelValue", "update:pageSize"],
  computed: {
    pageRange() {
      return get(this.pagination, "pageRange", []);
    },
    pageSizes() {
      return get(this.pagination, "pageSizes", []);
    },
    pageNumber() {
      return get(this.pagination, "pageNumber", 0);
    },
    pageSize: {
      get() {
        return get(this.pagination, "pageSize", []);
      },
      set(value) {
        this.$emit("update:pageSize", value);
      }
    },
    hasPrevious() {
      return get(this.pagination, "hasPrevious", false);
    },
    hasNext() {
      return get(this.pagination, "hasNext", false);
    }
  },
  methods: {
    classObj(pageNumber) {
      return {
        "k-pagination-button-selected": pageNumber == this.pageNumber
      };
    }
  }
};
const _hoisted_1$f = {
  key: 0,
  class: "k-pagination"
};
const _hoisted_2$8 = { class: "k-pagination-buttons" };
const _hoisted_3$4 = {
  key: 0,
  class: "k-pagination-button"
};
const _hoisted_4$3 = /* @__PURE__ */ createElementVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ createElementVNode("path", { d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" })
], -1);
const _hoisted_5$2 = [
  _hoisted_4$3
];
const _hoisted_6$2 = { key: 0 };
const _hoisted_7$1 = ["onClick"];
const _hoisted_8 = {
  key: 1,
  class: "k-pagination-button"
};
const _hoisted_9 = /* @__PURE__ */ createElementVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ createElementVNode("path", { d: "M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" })
], -1);
const _hoisted_10 = [
  _hoisted_9
];
function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_KSelect = resolveComponent("KSelect");
  return $props.pagination.hasOtherPages ? (openBlock(), createElementBlock("div", _hoisted_1$f, [
    createVNode(_component_KSelect, {
      modelValue: $options.pageSize,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $options.pageSize = $event),
      items: $options.pageSizes,
      label: "Page Size"
    }, null, 8, ["modelValue", "items"]),
    createElementVNode("div", _hoisted_2$8, [
      $options.hasPrevious ? (openBlock(), createElementBlock("a", _hoisted_3$4, _hoisted_5$2)) : createCommentVNode("", true),
      (openBlock(true), createElementBlock(Fragment, null, renderList($options.pageRange, (page) => {
        return openBlock(), createElementBlock(Fragment, { key: page }, [
          page == "|" ? (openBlock(), createElementBlock("div", _hoisted_6$2, "...")) : (openBlock(), createElementBlock("a", {
            key: 1,
            class: normalizeClass(["k-pagination-button k-pagination-button-border", $options.classObj(page)]),
            onClick: ($event) => _ctx.$emit("update:modelValue", page)
          }, toDisplayString(page), 11, _hoisted_7$1))
        ], 64);
      }), 128)),
      $options.hasNext ? (openBlock(), createElementBlock("a", _hoisted_8, _hoisted_10)) : createCommentVNode("", true)
    ]),
    createElementVNode("div", null, " Displaying " + toDisplayString($props.pagination.startIndex) + "-" + toDisplayString($props.pagination.endIndex) + " of " + toDisplayString($props.pagination.count) + " items. ", 1)
  ])) : createCommentVNode("", true);
}
const KPagination = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$h]]);
const __vite_glob_0_24 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: KPagination
}, Symbol.toStringTag, { value: "Module" }));
const KPagination2_vue_vue_type_style_index_0_lang = "";
const _sfc_main$g = {
  props: {
    modelValue: {
      type: Object,
      required: true
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
      set(value) {
        this.$emit("update:modelValue", {
          ...this.pagination,
          offset: 0,
          limit: value
        });
      }
    },
    pagination() {
      return this.modelValue;
    },
    offset() {
      return get(this.pagination, "offset", 0);
    },
    limit() {
      return get(this.pagination, "limit", 0);
    },
    count() {
      return get(this.pagination, "count", 0);
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
      const rang = [];
      const plusMinus = 5;
      const plusMinus2 = 2 * plusMinus;
      const min1 = Math.max(0, this.pageNumber0 - plusMinus);
      const max = Math.min(this.lastPageNumber0, min1 + plusMinus2);
      const min = Math.max(0, max - plusMinus2);
      for (let i = min; i <= max; i++) {
        rang.push(i);
      }
      return rang;
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
    classObj(pageNumber) {
      return {
        "k-pagination2-button-selected": pageNumber == this.pageNumber0
      };
    },
    clickedPageNumber(pageNumber0) {
      const p = Math.max(0, Math.min(pageNumber0, this.lastPageNumber0));
      this.$emit("update:modelValue", {
        ...this.pagination,
        offset: p * this.limit
      });
    }
  }
};
const _hoisted_1$e = { class: "k-pagination2" };
const _hoisted_2$7 = { class: "k-pagination2-buttons" };
const _hoisted_3$3 = /* @__PURE__ */ createElementVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ createElementVNode("path", { d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" })
], -1);
const _hoisted_4$2 = [
  _hoisted_3$3
];
const _hoisted_5$1 = ["onClick"];
const _hoisted_6$1 = /* @__PURE__ */ createElementVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ createElementVNode("path", { d: "M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" })
], -1);
const _hoisted_7 = [
  _hoisted_6$1
];
function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_KSelect = resolveComponent("KSelect");
  return openBlock(), createElementBlock("div", _hoisted_1$e, [
    createElementVNode("div", null, [
      createVNode(_component_KSelect, {
        modelValue: $options.pageSize,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $options.pageSize = $event),
        items: $data.pageSizes,
        label: "Page Size"
      }, null, 8, ["modelValue", "items"])
    ]),
    $options.pageCount > 1 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
      createElementVNode("div", _hoisted_2$7, [
        $options.hasPrevious ? (openBlock(), createElementBlock("a", {
          key: 0,
          class: "k-pagination2-arrow-button",
          onClick: _cache[1] || (_cache[1] = ($event) => $options.clickedPageNumber($options.pageNumber0 - 1))
        }, _hoisted_4$2)) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList($options.pageRange0, (page) => {
          return openBlock(), createElementBlock("div", {
            key: page,
            class: normalizeClass(["k-pagination2-button", $options.classObj(page)]),
            onClick: ($event) => $options.clickedPageNumber(page)
          }, toDisplayString(page + 1), 11, _hoisted_5$1);
        }), 128)),
        $options.hasNext ? (openBlock(), createElementBlock("a", {
          key: 1,
          class: "k-pagination2-arrow-button",
          onClick: _cache[2] || (_cache[2] = ($event) => $options.clickedPageNumber($options.pageNumber0 + 1))
        }, _hoisted_7)) : createCommentVNode("", true)
      ]),
      createElementVNode("div", null, toDisplayString($options.pageNumber) + " of " + toDisplayString($options.pageCount) + " pages", 1)
    ], 64)) : createCommentVNode("", true)
  ]);
}
const KPagination2 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$g]]);
const __vite_glob_0_25 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: KPagination2
}, Symbol.toStringTag, { value: "Module" }));
const KRadioGroup_vue_vue_type_style_index_0_lang = "";
const _sfc_main$f = {
  mixins: [mixin],
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
      default: false
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
      default: false
    }
  },
  emits: ["update:modelValue"],
  computed: {
    localValue: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      }
    },
    classObj() {
      return {
        "k-radiogroup--vertical": this.vertical
      };
    }
  },
  methods: {
    isObject(obj) {
      return typeof obj == "object" && obj instanceof Object && !(obj instanceof Array);
    },
    getItemText(item) {
      return this.isObject(item) ? get(item, this.itemText) : item;
    },
    getItemValue(item) {
      return this.isObject(item) ? get(item, this.itemValue) : item;
    },
    getItemDisabled(item) {
      return this.isObject(item) ? get(item, "disabled", false) : false;
    }
  }
};
const _hoisted_1$d = ["id", "value", "disabled"];
const _hoisted_2$6 = ["for"];
function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_KSpinner = resolveComponent("KSpinner");
  const _component_KFormFieldWrapper = resolveComponent("KFormFieldWrapper");
  return openBlock(), createElementBlock("div", null, [
    createVNode(_component_KFormFieldWrapper, {
      label: _ctx.label,
      "success-messages": _ctx.successMessages,
      "error-messages": _ctx.errorMessages
    }, {
      default: withCtx(() => [
        createVNode(Transition, {
          name: "fade",
          mode: "out-in"
        }, {
          default: withCtx(() => [
            $props.loading ? (openBlock(), createBlock(_component_KSpinner, { key: 0 })) : (openBlock(), createElementBlock("div", {
              key: 1,
              class: normalizeClass(["k-radiogroup", $options.classObj])
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList($props.items, (item) => {
                return openBlock(), createElementBlock("div", {
                  key: $options.getItemValue(item),
                  class: "k-radiogroup-item"
                }, [
                  withDirectives(createElementVNode("input", {
                    id: $options.getItemValue(item),
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $options.localValue = $event),
                    type: "radio",
                    value: $options.getItemValue(item),
                    disabled: $options.getItemDisabled(item)
                  }, null, 8, _hoisted_1$d), [
                    [vModelRadio, $options.localValue]
                  ]),
                  createElementVNode("label", {
                    for: $options.getItemValue(item)
                  }, toDisplayString($options.getItemText(item)), 9, _hoisted_2$6)
                ]);
              }), 128))
            ], 2))
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["label", "success-messages", "error-messages"])
  ]);
}
const KRadioGroup = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$f]]);
const __vite_glob_0_26 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: KRadioGroup
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$e = {
  inject: ["ksnackbar"],
  methods: {
    click() {
      this.ksnackbar.success("hello");
    }
  }
};
function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    createElementVNode("button", {
      onClick: _cache[0] || (_cache[0] = (...args) => $options.click && $options.click(...args))
    }, "click")
  ]);
}
const KScratch = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$e]]);
const __vite_glob_0_27 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: KScratch
}, Symbol.toStringTag, { value: "Module" }));
const KSelect_vue_vue_type_style_index_0_lang = "";
const _sfc_main$d = {
  mixins: [mixin],
  props: {
    modelValue: {
      type: [String, Object, Number],
      default: null
    },
    multiple: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: false
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
      set(value) {
        this.$emit("update:modelValue", value);
      }
    }
  },
  methods: {
    isObject(obj) {
      return typeof obj == "object" && obj instanceof Object && !(obj instanceof Array);
    },
    getItemText(item) {
      return this.isObject(item) ? get(item, this.itemText) : item;
    },
    getItemValue(item) {
      return this.isObject(item) ? get(item, this.itemValue) : item;
    },
    arrify(item) {
      return Array.isArray(item) ? item : [item];
    }
  }
};
const _hoisted_1$c = { class: "k-select" };
const _hoisted_2$5 = ["value"];
function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_KSpinner = resolveComponent("KSpinner");
  const _component_KFormFieldWrapper = resolveComponent("KFormFieldWrapper");
  return openBlock(), createElementBlock("div", null, [
    createVNode(_component_KFormFieldWrapper, {
      label: _ctx.label,
      "success-messages": _ctx.successMessages,
      "error-messages": _ctx.errorMessages
    }, {
      default: withCtx(() => [
        createElementVNode("div", _hoisted_1$c, [
          withDirectives(createElementVNode("select", {
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $options.localValue = $event),
            class: normalizeClass(_ctx.classObj)
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList($props.items, (item) => {
              return openBlock(), createElementBlock("option", {
                key: $options.getItemValue(item),
                value: $options.getItemValue(item)
              }, toDisplayString($options.getItemText(item)), 9, _hoisted_2$5);
            }), 128))
          ], 2), [
            [vModelSelect, $options.localValue]
          ]),
          createVNode(Transition, { name: "fade" }, {
            default: withCtx(() => [
              $props.loading ? (openBlock(), createBlock(_component_KSpinner, {
                key: 0,
                class: "k-select--spinner"
              })) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["label", "success-messages", "error-messages"])
  ]);
}
const KSelect = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$d]]);
const __vite_glob_0_28 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: KSelect
}, Symbol.toStringTag, { value: "Module" }));
const KSnackbar_vue_vue_type_style_index_0_lang = "";
const _sfc_main$c = {
  provide() {
    return {
      ksnackbar: this
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
      return Object.values(this.nitems).sort((a, b) => b.index - a.index);
    }
  },
  methods: {
    classObj(item) {
      return {
        "k-snackbar-item--success": item.type == "success",
        "k-snackbar-item--error": item.type == "error"
      };
    },
    action(item) {
      const cb = item.action;
      cb(() => this.dismiss(item.index));
    },
    dismiss(index2) {
      delete this.nitems[index2];
    },
    nextIndex() {
      this.index += 1;
      return this.index;
    },
    success({ title, message, timeout, actionLabel, action }) {
      this.queue("success", { message, title, timeout, actionLabel, action });
    },
    error({ title, message, timeout, actionLabel, action }) {
      this.queue("error", { message, title, timeout, actionLabel, action });
    },
    queue(type, { title, message, timeout = 6e3, actionLabel = "close", action }) {
      const index2 = this.nextIndex();
      if (action == null) {
        action = () => this.dismiss(index2);
      }
      this.nitems[index2] = {
        title,
        message,
        index: index2,
        type,
        actionLabel,
        action
      };
      setInterval(() => this.dismiss(index2), timeout);
    }
  }
};
const _hoisted_1$b = { class: "k-snackbar" };
const _hoisted_2$4 = { class: "k-snackbar-item-message" };
const _hoisted_3$2 = {
  key: 0,
  class: "k-snackbar-title"
};
const _hoisted_4$1 = {
  key: 1,
  class: "k-snackbar-text"
};
const _hoisted_5 = {
  key: 0,
  class: "k-snackbar-action"
};
const _hoisted_6 = ["onClick"];
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    renderSlot(_ctx.$slots, "default"),
    createElementVNode("div", _hoisted_1$b, [
      createVNode(TransitionGroup, {
        name: "slide",
        tag: "div",
        mode: "out-in"
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList($options.items, (item) => {
            return openBlock(), createElementBlock("div", {
              key: item.index,
              class: normalizeClass(["k-snackbar-item", $options.classObj(item)])
            }, [
              createElementVNode("div", _hoisted_2$4, [
                item.title ? (openBlock(), createElementBlock("div", _hoisted_3$2, toDisplayString(item.title), 1)) : createCommentVNode("", true),
                item.message ? (openBlock(), createElementBlock("div", _hoisted_4$1, toDisplayString(item.message), 1)) : createCommentVNode("", true)
              ]),
              item.action ? (openBlock(), createElementBlock("div", _hoisted_5, [
                createElementVNode("a", {
                  href: "#",
                  onClick: withModifiers(($event) => $options.action(item), ["prevent"])
                }, toDisplayString(item.actionLabel), 9, _hoisted_6)
              ])) : createCommentVNode("", true)
            ], 2);
          }), 128))
        ]),
        _: 1
      })
    ])
  ], 64);
}
const KSnackbar = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$c]]);
const __vite_glob_0_29 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: KSnackbar
}, Symbol.toStringTag, { value: "Module" }));
const KSortHeader_vue_vue_type_style_index_0_lang = "";
const _sfc_main$b = {
  props: {
    keypath: {
      type: String,
      required: true
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
        sortAsc: this.isActive ? !this.sortAsc : true
      });
    }
  }
};
const _hoisted_1$a = {
  key: 0,
  class: "j-sort-header-arrow"
};
const _hoisted_2$3 = {
  key: 1,
  class: "j-sort-header-arrow"
};
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("a", {
    href: "#",
    onClick: _cache[0] || (_cache[0] = withModifiers((...args) => $options.emitClick && $options.emitClick(...args), ["prevent"]))
  }, [
    renderSlot(_ctx.$slots, "default"),
    createVNode(Transition, {
      name: "fade",
      mode: "out-in"
    }, {
      default: withCtx(() => [
        $options.isActive && $options.sortAsc ? (openBlock(), createElementBlock("span", _hoisted_1$a, "↓")) : $options.isActive ? (openBlock(), createElementBlock("span", _hoisted_2$3, "↑")) : createCommentVNode("", true)
      ]),
      _: 1
    })
  ]);
}
const KSortHeader = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$b]]);
const __vite_glob_0_30 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: KSortHeader
}, Symbol.toStringTag, { value: "Module" }));
const KSpacer_vue_vue_type_style_index_0_scoped_3ce52385_lang = "";
const _sfc_main$a = {};
const _hoisted_1$9 = { class: "k-spacer" };
function _sfc_render$a(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$9);
}
const KSpacer = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a], ["__scopeId", "data-v-3ce52385"]]);
const __vite_glob_0_31 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: KSpacer
}, Symbol.toStringTag, { value: "Module" }));
const KSpinner_vue_vue_type_style_index_0_lang = "";
const __default__$1 = {
  mixins: [measurable],
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
};
const __injectCSSVars__$1 = () => {
  useCssVars((_ctx) => ({
    "497b0a56": _ctx.color
  }));
};
const __setup__$1 = __default__$1.setup;
__default__$1.setup = __setup__$1 ? (props, ctx) => {
  __injectCSSVars__$1();
  return __setup__$1(props, ctx);
} : __injectCSSVars__$1;
const _sfc_main$9 = __default__$1;
const _hoisted_1$8 = /* @__PURE__ */ createElementVNode("circle", {
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1);
const _hoisted_2$2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_1$8,
  _hoisted_2$2
];
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    style: normalizeStyle([_ctx.measurableStyles]),
    class: "k-spinner",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, _hoisted_3$1, 4);
}
const KSpinner = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9]]);
const __vite_glob_0_32 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: KSpinner
}, Symbol.toStringTag, { value: "Module" }));
const KSwitch_vue_vue_type_style_index_0_lang = "";
const __default__ = {
  props: {
    modelValue: {
      type: Boolean,
      default: false
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
      set(value) {
        this.$emit("update:modelValue", value);
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
      return convertToUnit(this.height);
    },
    innerSizePx() {
      return convertToUnit(this.innerSize);
    },
    paddingPx() {
      return convertToUnit(this.padding);
    },
    switchWidthPx() {
      return convertToUnit(this.trans + this.height);
    },
    transPx() {
      return `translateX(${convertToUnit(this.trans)})`;
    }
  },
  methods: {
    clicked() {
      this.on = !this.one;
    }
  }
};
const __injectCSSVars__ = () => {
  useCssVars((_ctx) => ({
    "02fd72cf": _ctx.switchWidthPx,
    "5d54ab8c": _ctx.heightPx,
    "c9e9e158": _ctx.innerSizePx,
    "4e6c5eae": _ctx.paddingPx,
    "6e4d1676": _ctx.transPx
  }));
};
const __setup__ = __default__.setup;
__default__.setup = __setup__ ? (props, ctx) => {
  __injectCSSVars__();
  return __setup__(props, ctx);
} : __injectCSSVars__;
const _sfc_main$8 = __default__;
const _hoisted_1$7 = /* @__PURE__ */ createElementVNode("span", { class: "k-switch-slider" }, null, -1);
const _hoisted_2$1 = [
  _hoisted_1$7
];
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["k-switch", $options.classObj]),
    onClick: _cache[0] || (_cache[0] = ($event) => $options.on = !$options.on)
  }, _hoisted_2$1, 2);
}
const KSwitch = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8]]);
const __vite_glob_0_33 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: KSwitch
}, Symbol.toStringTag, { value: "Module" }));
const KTable_vue_vue_type_style_index_0_lang = "";
const _sfc_main$7 = {
  props: {
    properties: {
      type: Boolean,
      default: false
    },
    striped: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
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
};
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_KLinearProgressIndicator = resolveComponent("KLinearProgressIndicator");
  return openBlock(), createElementBlock(Fragment, null, [
    $props.loading ? (openBlock(), createBlock(_component_KLinearProgressIndicator, { key: 0 })) : createCommentVNode("", true),
    createElementVNode("table", {
      class: normalizeClass(["k-table", $options.classObj])
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 2)
  ], 64);
}
const KTable = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7]]);
const __vite_glob_0_34 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: KTable
}, Symbol.toStringTag, { value: "Module" }));
const KTextArea_vue_vue_type_style_index_0_lang = "";
const _sfc_main$6 = {
  mixins: [mixin],
  inheritAttrs: false,
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
    outerStyle() {
      return {
        width: this.width,
        height: this.height
      };
    },
    lineNumberItemStyle() {
      return {
        // height: this.lineHeight,
        lineHeight: this.lineHeight,
        fontSize: "1em"
      };
    },
    textareaStyle() {
      return {
        lineHeight: this.lineHeight,
        fontSize: this.fontSize
      };
    },
    lineCount() {
      return (this.valueLocal || "").split(/\r\n|\r|\n/).length;
    },
    effectiveLineCount() {
      return Math.max(this.lineCount, this.minLineNumbers);
    },
    valueLocal: {
      set(value) {
        this.$emit("update:modelValue", value);
      },
      get() {
        return this.modelValue;
      }
    }
  },
  methods: {
    tabber(event) {
      const text = this.valueLocal;
      const originalSelectionStart = event.target.selectionStart;
      const textStart = text.slice(0, originalSelectionStart);
      const textEnd = text.slice(originalSelectionStart);
      const newText = `${textStart}	${textEnd}`;
      this.valueLocal = newText;
      event.target.value = newText;
      event.target.selectionStart = originalSelectionStart + 1;
      event.target.selectionEnd = originalSelectionStart + 1;
    }
  }
};
const _hoisted_1$6 = ["rows"];
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_KFormFieldWrapper = resolveComponent("KFormFieldWrapper");
  return openBlock(), createBlock(_component_KFormFieldWrapper, {
    label: _ctx.label,
    "success-messages": _ctx.successMessages,
    "error-messages": _ctx.errorMessages
  }, {
    default: withCtx(() => [
      withDirectives(createElementVNode("textarea", mergeProps({
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $options.valueLocal = $event)
      }, _ctx.$attrs, {
        spellcheck: "false",
        class: [_ctx.classObj, "k-textarea"],
        rows: $props.rows,
        onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers((...args) => $options.tabber && $options.tabber(...args), ["prevent"]), ["tab"]))
      }), null, 16, _hoisted_1$6), [
        [vModelText, $options.valueLocal]
      ])
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const KTextArea = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6]]);
const __vite_glob_0_35 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: KTextArea
}, Symbol.toStringTag, { value: "Module" }));
const KTextField_vue_vue_type_style_index_0_lang = "";
const _sfc_main$5 = {
  mixins: [mixin],
  props: {
    modelValue: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    }
  },
  emits: ["update:modelValue"],
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      }
    }
  }
};
const _hoisted_1$5 = ["placeholder"];
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_KFormFieldWrapper = resolveComponent("KFormFieldWrapper");
  return openBlock(), createBlock(_component_KFormFieldWrapper, {
    label: _ctx.label,
    "success-messages": _ctx.successMessages,
    "error-messages": _ctx.errorMessages
  }, {
    default: withCtx(() => [
      withDirectives(createElementVNode("input", {
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $options.value = $event),
        class: normalizeClass(["k-input-text-field", _ctx.classObj]),
        placeholder: $props.placeholder
      }, null, 10, _hoisted_1$5), [
        [vModelText, $options.value]
      ])
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const KTextField = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5]]);
const __vite_glob_0_36 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: KTextField
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = defineComponent({
  setup() {
    const config = inject("config");
    return { config };
  },
  mixins: [measurable],
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
      return get(this.userRec, "type", this.type);
    },
    url() {
      if (this.userType == 0) {
        return `${this.config.img}guy.gif`;
      } else if (this.userType == 1) {
        return `${this.config.img}2-guys.gif`;
      } else if (this.userType > 0) {
        return `${this.config.img}projectgroup.gif`;
      } else {
        return null;
      }
    }
  }
});
const _hoisted_1$4 = ["src"];
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.url ? (openBlock(), createElementBlock("img", {
    key: 0,
    src: _ctx.url,
    style: normalizeStyle([_ctx.measurableStyles])
  }, null, 12, _hoisted_1$4)) : createCommentVNode("", true);
}
const KUserGIF = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
const __vite_glob_0_37 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: KUserGIF
}, Symbol.toStringTag, { value: "Module" }));
const semaphore = new Semaphore();
class UserLookup {
  constructor() {
    this.users = {};
  }
  registerUsers(items) {
    items.forEach((user) => this.users[user.value] = user);
  }
  fullName(userRec) {
    const firstName = userRec.first_name;
    const lastName = userRec.last_name;
    const username = userRec.name;
    if (firstName || lastName) {
      return [firstName, lastName, `(${username})`].join(" ");
    } else {
      return username;
    }
  }
  async lookup(session, userId) {
    try {
      await semaphore.acquire(userId);
      if (!this.users[userId]) {
        const response = await session.members.member(userId, "v1");
        const value = get(response, "data.data.id");
        const type = get(response, "data.data.type");
        const text = this.fullName(get(response, "data.data"));
        if (value) {
          this.users[userId] = { type, text, value };
        }
      }
      return this.users[userId];
    } finally {
      semaphore.release(userId);
    }
  }
}
const userLookup = new UserLookup();
const KUserLink_vue_vue_type_style_index_0_lang = "";
const _sfc_main$3 = defineComponent({
  setup() {
    const session = inject("session", {});
    return { session };
  },
  props: {
    user: {
      type: [Number, Object],
      default: null
    },
    // @deprecated
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
      default: false
    }
  },
  data() {
    return {
      // userIdLocal: null,
      userRecLocal: null
    };
  },
  computed: {
    userIdLocal() {
      return get(this.userRecLocal, "id") ?? get(this.userRecLocal, "userid");
    },
    userLocal() {
      return this.user ?? this.userid ?? this.userRec;
    },
    displayName() {
      return get(this.userRecLocal, "display_name") ?? get(this.userRecLocal, "displayname") ?? get(this.userRecLocal, "name");
    },
    type() {
      return get(this.userRecLocal, "type");
    }
  },
  watch: {
    userLocal: {
      async handler(value) {
        if (this.isInteger(value)) {
          const response = await userLookup.lookup(this.session, value);
          this.userRecLocal = {
            name: response.text,
            id: response.value,
            type: response.type
          };
        } else {
          this.userRecLocal = value;
        }
      },
      immediate: true
    }
  },
  methods: {
    isInteger(value) {
      return !isNaN(value) && typeof value === "number";
    },
    click() {
      window.baseUrl = window.baseURL;
      window.doUserDialog(this.userIdLocal);
    }
  }
});
const _hoisted_1$3 = {
  key: 0,
  class: "k-user-link"
};
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_KUserGIF = resolveComponent("KUserGIF");
  return _ctx.userRecLocal ? (openBlock(), createElementBlock("span", _hoisted_1$3, [
    _ctx.gif ? (openBlock(), createBlock(_component_KUserGIF, {
      key: 0,
      "user-rec": _ctx.userRecLocal
    }, null, 8, ["user-rec"])) : createCommentVNode("", true),
    createTextVNode(" "),
    createElementVNode("a", {
      href: "#",
      onClick: _cache[0] || (_cache[0] = withModifiers((...args) => _ctx.click && _ctx.click(...args), ["prevent"]))
    }, toDisplayString(_ctx.displayName), 1)
  ])) : createCommentVNode("", true);
}
const KUserLink = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
const __vite_glob_0_38 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: KUserLink
}, Symbol.toStringTag, { value: "Module" }));
const KUserPicker_vue_vue_type_style_index_0_lang = "";
const _sfc_main$2 = defineComponent({
  mixins: [mixin],
  setup() {
    const session = inject("session", {});
    return { session };
  },
  props: {
    modelValue: {
      type: [String, Number, Object],
      default: null
    },
    users: {
      type: Boolean,
      default: true
    },
    groups: {
      type: Boolean,
      default: false
    },
    width: {
      type: [String, Number],
      default: "100%"
    },
    returnObject: {
      type: Boolean,
      default: false
    },
    // Why?  document if you add this back
    // combobox: {
    //   type: Boolean,
    //   default: false,
    // },
    editable: {
      type: Boolean,
      default: true
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      loading: false,
      searchText: null,
      readonly: false,
      pleaseWait: false,
      items: []
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
      set(value) {
        this.$emit("update:modelValue", value);
      },
      get() {
        return this.modelValue;
      }
    },
    options() {
      let where_type = null;
      if (this.users && this.groups) {
        where_type = null;
      } else if (this.users) {
        where_type = this.USER;
      } else if (this.groups) {
        where_type = this.GROUP;
      }
      return {
        where_type
      };
    },
    placeholder() {
      if (this.pleaseWait) {
        return "Loading...";
      } else if (this.users && this.groups) {
        return "Search for user or group...";
      } else if (this.users) {
        return "Search for user...";
      } else if (this.groups) {
        return "Search for group...";
      } else {
        return "";
      }
    }
  },
  watch: {
    searchText(val) {
      val && val !== this.select && this.querySelections(val);
    },
    value: {
      handler() {
        this.loadInitialValue();
      },
      immediate: true
    }
  },
  methods: {
    querySelections: debounce(async function(v) {
      try {
        this.loading = true;
        const response = await this.session.members.userQuery(
          v,
          this.options,
          "v1"
        );
        this.items = response.data.data.map((item) => ({
          text: get(item, "name_formatted"),
          value: get(item, "id"),
          type: get(item, "type")
        }));
        userLookup.registerUsers(this.items);
      } finally {
        this.loading = false;
      }
    }, 500),
    formatChoice(item) {
      return get(item, "text", "");
    },
    async loadInitialValue() {
      const initialValue = this.modelValue;
      if (initialValue && !this.combobox) {
        try {
          this.pleaseWait = true;
          this.readonly = true;
          this.loading = true;
          const user = await userLookup.lookup(this.session, initialValue);
          if (user) {
            this.items = [user];
            this.select = user.value;
          }
        } finally {
          this.pleaseWait = false;
          this.readonly = false;
          this.loading = false;
        }
      }
    }
  }
});
const _hoisted_1$2 = ["innerHTML"];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_KUserGIF = resolveComponent("KUserGIF");
  const _component_KAutocomplete = resolveComponent("KAutocomplete");
  const _component_KUserLink = resolveComponent("KUserLink");
  const _component_KFormFieldWrapper = resolveComponent("KFormFieldWrapper");
  return openBlock(), createBlock(_component_KFormFieldWrapper, {
    label: _ctx.label,
    "success-messages": _ctx.successMessages,
    "error-messages": _ctx.errorMessages
  }, {
    default: withCtx(() => [
      _ctx.editable ? (openBlock(), createBlock(_component_KAutocomplete, {
        key: 0,
        modelValue: _ctx.valueLocal,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.valueLocal = $event),
        "search-input": _ctx.searchText,
        "onUpdate:search-input": _cache[1] || (_cache[1] = ($event) => _ctx.searchText = $event),
        class: "k-user-picker",
        placeholder: _ctx.placeholder,
        width: _ctx.width,
        loading: _ctx.loading,
        items: _ctx.items,
        "return-object": _ctx.returnObject,
        combobox: false
      }, {
        prepend: withCtx(({ item }) => [
          createVNode(_component_KUserGIF, { "user-rec": item }, null, 8, ["user-rec"])
        ]),
        item: withCtx(({ item }) => [
          createVNode(_component_KUserGIF, {
            type: item.type
          }, null, 8, ["type"]),
          createElementVNode("span", {
            innerHTML: _ctx.formatChoice(item)
          }, null, 8, _hoisted_1$2)
        ]),
        _: 1
      }, 8, ["modelValue", "search-input", "placeholder", "width", "loading", "items", "return-object"])) : (openBlock(), createBlock(_component_KUserLink, {
        key: 1,
        user: _ctx.modelValue,
        gif: ""
      }, null, 8, ["user"]))
    ]),
    _: 1
  }, 8, ["label", "success-messages", "error-messages"]);
}
const KUserPicker = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const __vite_glob_0_39 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: KUserPicker
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = {
  inject: ["tabs"],
  props: {
    title: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    isSelected() {
      return this.name == get(this.tabs, "selectedTab");
    }
  }
};
const _hoisted_1$1 = { key: 0 };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return $options.isSelected ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
    renderSlot(_ctx.$slots, "default")
  ])) : createCommentVNode("", true);
}
const KTabItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const __vite_glob_0_40 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: KTabItem
}, Symbol.toStringTag, { value: "Module" }));
const KTabs_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
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
    tabs() {
      return this.$slots.default().filter((item) => Boolean(item.props));
    },
    tabNames() {
      return this.tabs.map((tab) => tab.props.name);
    }
  },
  mounted() {
    this.selectedTab = this.initialSelectedTab();
  },
  watch: {
    selectedTab(value) {
      this.$emit("update:modelValue", value);
    },
    modelValue(value) {
      this.selectTab(value);
    }
  },
  methods: {
    initialSelectedTab() {
      const hash = window.location.hash.replace("#", "");
      const firstTab = this.tabNames[0];
      return [this.selectedTab, hash, firstTab].find((item) => Boolean(item));
    },
    selectTab(tabName) {
      this.selectedTab = this.tabNames.includes(tabName) ? tabName : this.tabNames[0];
    },
    classObj(tab) {
      return {
        "k-tabs-nav-tab": true,
        "k-tabs-active": this.selectedTab == get(tab, "props.name")
      };
    }
  }
};
const _hoisted_1 = { class: "k-tabs" };
const _hoisted_2 = { class: "k-tabs-nav" };
const _hoisted_3 = ["href", "onClick"];
const _hoisted_4 = { class: "k-tabs-content" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("div", _hoisted_2, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($options.tabs, (tab) => {
        return openBlock(), createElementBlock("div", {
          key: tab.props.name,
          class: normalizeClass($options.classObj(tab))
        }, [
          createElementVNode("a", {
            href: `#${tab.props.name}`,
            onClick: ($event) => $options.selectTab(tab.props.name)
          }, toDisplayString(tab.props.title), 9, _hoisted_3)
        ], 2);
      }), 128))
    ]),
    createElementVNode("div", _hoisted_4, [
      renderSlot(_ctx.$slots, "default")
    ])
  ]);
}
const KTabs = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const __vite_glob_0_41 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: KTabs
}, Symbol.toStringTag, { value: "Module" }));
const styles = "";
const index = {
  install(app, options) {
    const components = /* @__PURE__ */ Object.assign({ "./components/Card/KCard.vue": __vite_glob_0_0, "./components/Card/KCardActions.vue": __vite_glob_0_1, "./components/Card/KCardText.vue": __vite_glob_0_2, "./components/Card/KCardTitle.vue": __vite_glob_0_3, "./components/KAdminLink.vue": __vite_glob_0_4, "./components/KAlert.vue": __vite_glob_0_5, "./components/KApp.vue": __vite_glob_0_6, "./components/KAutocomplete.vue": __vite_glob_0_7, "./components/KBrowseLink.vue": __vite_glob_0_8, "./components/KButton.vue": __vite_glob_0_9, "./components/KConfirm.vue": __vite_glob_0_10, "./components/KDateTimePicker.vue": __vite_glob_0_11, "./components/KDialog.vue": __vite_glob_0_12, "./components/KDot.vue": __vite_glob_0_13, "./components/KFormFieldWrapper.vue": __vite_glob_0_14, "./components/KFunctionMenu.vue": __vite_glob_0_15, "./components/KLinearProgressIndicator.vue": __vite_glob_0_16, "./components/KMulti.vue": __vite_glob_0_17, "./components/KMulti2.vue": __vite_glob_0_18, "./components/KNodeAncestor.vue": __vite_glob_0_19, "./components/KNodePickerField.vue": __vite_glob_0_20, "./components/KOneMoment.vue": __vite_glob_0_21, "./components/KPageDropZone.vue": __vite_glob_0_22, "./components/KPageTitle.vue": __vite_glob_0_23, "./components/KPagination.vue": __vite_glob_0_24, "./components/KPagination2.vue": __vite_glob_0_25, "./components/KRadioGroup.vue": __vite_glob_0_26, "./components/KScratch.vue": __vite_glob_0_27, "./components/KSelect.vue": __vite_glob_0_28, "./components/KSnackbar.vue": __vite_glob_0_29, "./components/KSortHeader.vue": __vite_glob_0_30, "./components/KSpacer.vue": __vite_glob_0_31, "./components/KSpinner.vue": __vite_glob_0_32, "./components/KSwitch.vue": __vite_glob_0_33, "./components/KTable.vue": __vite_glob_0_34, "./components/KTextArea.vue": __vite_glob_0_35, "./components/KTextField.vue": __vite_glob_0_36, "./components/KUserGIF.vue": __vite_glob_0_37, "./components/KUserLink.vue": __vite_glob_0_38, "./components/KUserPicker.vue": __vite_glob_0_39, "./components/Tabs/KTabItem.vue": __vite_glob_0_40, "./components/Tabs/KTabs.vue": __vite_glob_0_41 });
    Object.entries(components).forEach(([path, definition]) => {
      const componentName = path.split("/").pop().replace(/\.\w+$/, "");
      app.component(componentName, definition.default);
    });
    const session = new Session(options);
    app.provide("session", session);
    app.provide("config", {
      img: options.img,
      baseURL: options.baseURL,
      jsLongDateFormat: options.datelong,
      jsShortDateFormat: options.dateshort
    });
  }
};
export {
  index as default
};
