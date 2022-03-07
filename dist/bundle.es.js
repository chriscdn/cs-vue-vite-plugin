var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { openBlock, createElementBlock, Fragment, createElementVNode, resolveComponent, createVNode, withCtx, renderSlot, resolveDirective, withDirectives, normalizeStyle, normalizeClass, withKeys, withModifiers, vModelText, renderList, createTextVNode, toDisplayString, createCommentVNode, createBlock, mergeProps, vModelDynamic, Teleport, Transition, setBlockTracking, TransitionGroup, getCurrentInstance, vModelRadio, vModelSelect, useCssVars, h } from "vue";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$B = {};
const _hoisted_1$v = /* @__PURE__ */ createElementVNode("hr", null, null, -1);
const _hoisted_2$h = ["href"];
function _sfc_render$A(_ctx, _cache) {
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1$v,
    createElementVNode("a", {
      href: `${_ctx.$cgi}?func=admin.index`
    }, "Admin Home", 8, _hoisted_2$h)
  ], 64);
}
var KAdminLink = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["render", _sfc_render$A]]);
var __glob_2_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": KAdminLink
}, Symbol.toStringTag, { value: "Module" }));
var KApp_vue_vue_type_style_index_0_lang = "";
const _sfc_main$A = {};
const _hoisted_1$u = { class: "k-app" };
function _sfc_render$z(_ctx, _cache) {
  const _component_KSnackbar = resolveComponent("KSnackbar");
  const _component_KConfirm = resolveComponent("KConfirm");
  return openBlock(), createElementBlock("div", _hoisted_1$u, [
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
var KApp = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["render", _sfc_render$z]]);
var __glob_2_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": KApp
}, Symbol.toStringTag, { value: "Module" }));
const clickEventType = document.ontouchstart !== null ? "click" : "touchstart";
const UNIQUE_ID = "__vue_click_away__";
const onMounted = function(el, binding, vnode) {
  onUnmounted(el);
  let vm = vnode.context;
  let callback = binding.value;
  let nextTick = false;
  setTimeout(function() {
    nextTick = true;
  }, 0);
  el[UNIQUE_ID] = function(event) {
    if ((!el || !el.contains(event.target)) && callback && nextTick && typeof callback === "function") {
      return callback.call(vm, event);
    }
  };
  document.addEventListener(clickEventType, el[UNIQUE_ID], false);
};
const onUnmounted = function(el) {
  document.removeEventListener(clickEventType, el[UNIQUE_ID], false);
  delete el[UNIQUE_ID];
};
const onUpdated = function(el, binding, vnode) {
  if (binding.value === binding.oldValue) {
    return;
  }
  onMounted(el, binding, vnode);
};
const directive = {
  mounted: onMounted,
  updated: onUpdated,
  unmounted: onUnmounted
};
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var FUNC_ERROR_TEXT$1 = "Expected a function";
var HASH_UNDEFINED = "__lodash_hash_undefined__";
var INFINITY = 1 / 0;
var funcTag = "[object Function]", genTag = "[object GeneratorFunction]", symbolTag$1 = "[object Symbol]";
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, reLeadingDot = /^\./, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reEscapeChar = /\\(\\)?/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var freeGlobal$1 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var freeSelf$1 = typeof self == "object" && self && self.Object === Object && self;
var root$1 = freeGlobal$1 || freeSelf$1 || Function("return this")();
function getValue(object, key) {
  return object == null ? void 0 : object[key];
}
function isHostObject(value) {
  var result = false;
  if (value != null && typeof value.toString != "function") {
    try {
      result = !!(value + "");
    } catch (e) {
    }
  }
  return result;
}
var arrayProto = Array.prototype, funcProto = Function.prototype, objectProto$1 = Object.prototype;
var coreJsData = root$1["__core-js_shared__"];
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
var funcToString = funcProto.toString;
var hasOwnProperty = objectProto$1.hasOwnProperty;
var objectToString$1 = objectProto$1.toString;
var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
var Symbol$1 = root$1.Symbol, splice = arrayProto.splice;
var Map = getNative(root$1, "Map"), nativeCreate = getNative(Object, "create");
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;
function Hash(entries) {
  var index2 = -1, length = entries ? entries.length : 0;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}
function hashGet(key) {
  var data2 = this.__data__;
  if (nativeCreate) {
    var result = data2[key];
    return result === HASH_UNDEFINED ? void 0 : result;
  }
  return hasOwnProperty.call(data2, key) ? data2[key] : void 0;
}
function hashHas(key) {
  var data2 = this.__data__;
  return nativeCreate ? data2[key] !== void 0 : hasOwnProperty.call(data2, key);
}
function hashSet(key, value) {
  var data2 = this.__data__;
  data2[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
  return this;
}
Hash.prototype.clear = hashClear;
Hash.prototype["delete"] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
function ListCache(entries) {
  var index2 = -1, length = entries ? entries.length : 0;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
function listCacheClear() {
  this.__data__ = [];
}
function listCacheDelete(key) {
  var data2 = this.__data__, index2 = assocIndexOf(data2, key);
  if (index2 < 0) {
    return false;
  }
  var lastIndex = data2.length - 1;
  if (index2 == lastIndex) {
    data2.pop();
  } else {
    splice.call(data2, index2, 1);
  }
  return true;
}
function listCacheGet(key) {
  var data2 = this.__data__, index2 = assocIndexOf(data2, key);
  return index2 < 0 ? void 0 : data2[index2][1];
}
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
function listCacheSet(key, value) {
  var data2 = this.__data__, index2 = assocIndexOf(data2, key);
  if (index2 < 0) {
    data2.push([key, value]);
  } else {
    data2[index2][1] = value;
  }
  return this;
}
ListCache.prototype.clear = listCacheClear;
ListCache.prototype["delete"] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
function MapCache(entries) {
  var index2 = -1, length = entries ? entries.length : 0;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
function mapCacheClear() {
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map || ListCache)(),
    "string": new Hash()
  };
}
function mapCacheDelete(key) {
  return getMapData(this, key)["delete"](key);
}
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype["delete"] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);
  var index2 = 0, length = path.length;
  while (object != null && index2 < length) {
    object = object[toKey(path[index2++])];
  }
  return index2 && index2 == length ? object : void 0;
}
function baseIsNative(value) {
  if (!isObject$4(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction$1(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isSymbol$1(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
function castPath(value) {
  return isArray$1(value) ? value : stringToPath(value);
}
function getMapData(map, key) {
  var data2 = map.__data__;
  return isKeyable(key) ? data2[typeof key == "string" ? "string" : "hash"] : data2.map;
}
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : void 0;
}
function isKey(value, object) {
  if (isArray$1(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol$1(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
function isKeyable(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var stringToPath = memoize(function(string) {
  string = toString$1(string);
  var result = [];
  if (reLeadingDot.test(string)) {
    result.push("");
  }
  string.replace(rePropName, function(match2, number, quote, string2) {
    result.push(quote ? string2.replace(reEscapeChar, "$1") : number || match2);
  });
  return result;
});
function toKey(value) {
  if (typeof value == "string" || isSymbol$1(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
function memoize(func, resolver) {
  if (typeof func != "function" || resolver && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}
memoize.Cache = MapCache;
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
var isArray$1 = Array.isArray;
function isFunction$1(value) {
  var tag = isObject$4(value) ? objectToString$1.call(value) : "";
  return tag == funcTag || tag == genTag;
}
function isObject$4(value) {
  var type = typeof value;
  return !!value && (type == "object" || type == "function");
}
function isObjectLike$1(value) {
  return !!value && typeof value == "object";
}
function isSymbol$1(value) {
  return typeof value == "symbol" || isObjectLike$1(value) && objectToString$1.call(value) == symbolTag$1;
}
function toString$1(value) {
  return value == null ? "" : baseToString(value);
}
function get$3(object, path, defaultValue) {
  var result = object == null ? void 0 : baseGet(object, path);
  return result === void 0 ? defaultValue : result;
}
var lodash_get = get$3;
var KAutocomplete_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$z = {
  directives: {
    ClickAway: directive
  },
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
      currentFocus: -1,
      focus: false
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
          this.$emit("update:modelValue", lodash_get(value, this.itemValue, value));
        }
      },
      get() {
        return this.isObject(this.modelValue) ? this.modelValue : this.items.find((item) => lodash_get(item, this.itemValue, item) == this.modelValue);
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
          this.inputText = this.isObject(this.localValue) ? lodash_get(this.localValue, this.itemText, "") : this.localValue;
        }
      }
    },
    value: {
      handler(v) {
        this.inputText = lodash_get(this.localValue, this.itemText, v);
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
const _hoisted_1$t = { class: "k-autocomplete-input" };
const _hoisted_2$g = ["placeholder", "readonly"];
const _hoisted_3$a = {
  key: 0,
  class: "k-autocomplete-items"
};
const _hoisted_4$6 = ["onClick"];
function _sfc_render$y(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_click_away = resolveDirective("click-away");
  return withDirectives((openBlock(), createElementBlock("div", {
    class: "k-autocomplete",
    style: normalizeStyle([$options.style])
  }, [
    renderSlot(_ctx.$slots, "prepend", { item: $options.localValue }, void 0, true),
    createElementVNode("div", _hoisted_1$t, [
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
      }, null, 42, _hoisted_2$g), [
        [vModelText, $data.inputText]
      ]),
      $data.focus && $props.items.length && !!$data.inputText ? (openBlock(), createElementBlock("div", _hoisted_3$a, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($options.itemsFiltered, (item, index2) => {
          return openBlock(), createElementBlock("div", {
            key: index2,
            class: normalizeClass(["k-autocomplete-item", { "k-autocomplete-active": $data.currentFocus == index2 }]),
            onClick: ($event) => $options.select(index2)
          }, [
            renderSlot(_ctx.$slots, "item", { item }, () => [
              createTextVNode(toDisplayString(item), 1)
            ], true)
          ], 10, _hoisted_4$6);
        }), 128))
      ])) : createCommentVNode("", true)
    ])
  ], 4)), [
    [_directive_click_away, $options.setBlur]
  ]);
}
var KAutocomplete = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["render", _sfc_render$y], ["__scopeId", "data-v-4dd30455"]]);
var __glob_2_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": KAutocomplete
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$y = {
  props: {
    nodeRec: {
      type: Object,
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
  }
};
const _hoisted_1$s = { key: 0 };
const _hoisted_2$f = ["src"];
const _hoisted_3$9 = /* @__PURE__ */ createTextVNode("\xA0");
const _hoisted_4$5 = ["href"];
const _hoisted_5$2 = /* @__PURE__ */ createTextVNode("\xA0");
const _hoisted_6$2 = ["innerHTML"];
function _sfc_render$x(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_KFunctionMenu = resolveComponent("KFunctionMenu");
  return $props.nodeRec ? (openBlock(), createElementBlock("span", _hoisted_1$s, [
    $props.image ? (openBlock(), createElementBlock("img", {
      key: 0,
      src: $props.nodeRec.gif
    }, null, 8, _hoisted_2$f)) : createCommentVNode("", true),
    _hoisted_3$9,
    createElementVNode("a", {
      href: $props.nodeRec.url
    }, toDisplayString($props.nodeRec.name), 9, _hoisted_4$5),
    _hoisted_5$2,
    $props.clickable ? (openBlock(), createBlock(_component_KFunctionMenu, {
      key: 1,
      dataid: $props.nodeRec.dataid
    }, null, 8, ["dataid"])) : createCommentVNode("", true),
    createElementVNode("span", {
      innerHTML: $props.nodeRec.modifiedImageCallback
    }, null, 8, _hoisted_6$2)
  ])) : createCommentVNode("", true);
}
var KBrowseLink = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["render", _sfc_render$x]]);
var __glob_2_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": KBrowseLink
}, Symbol.toStringTag, { value: "Module" }));
var KButton_vue_vue_type_style_index_0_lang = "";
const _sfc_main$x = {
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
  },
  emits: ["click"],
  computed: {
    classObj() {
      return {
        "k-button--small": this.small,
        "k-button--text": this.text,
        "k-button--disabled": this.disabled
      };
    }
  }
};
const _hoisted_1$r = ["disabled"];
function _sfc_render$w(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", mergeProps({
    class: ["k-button", $options.classObj],
    disabled: $props.disabled,
    type: "button"
  }, _ctx.$attrs, {
    onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click"))
  }), [
    renderSlot(_ctx.$slots, "default")
  ], 16, _hoisted_1$r);
}
var KButton = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["render", _sfc_render$w]]);
var __glob_2_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": KButton
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$w = {
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
var KConfirm = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["render", _sfc_render$v]]);
var __glob_2_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": KConfirm
}, Symbol.toStringTag, { value: "Module" }));
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + " argument" + (required > 1 ? "s" : "") + " required, but only " + args.length + " present");
  }
}
function toDate(argument) {
  requiredArgs(1, arguments);
  var argStr = Object.prototype.toString.call(argument);
  if (argument instanceof Date || typeof argument === "object" && argStr === "[object Date]") {
    return new Date(argument.getTime());
  } else if (typeof argument === "number" || argStr === "[object Number]") {
    return new Date(argument);
  } else {
    if ((typeof argument === "string" || argStr === "[object String]") && typeof console !== "undefined") {
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule");
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}
function addMilliseconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var timestamp = toDate(dirtyDate).getTime();
  var amount = toInteger(dirtyAmount);
  return new Date(timestamp + amount);
}
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}
function isDate$1(value) {
  requiredArgs(1, arguments);
  return value instanceof Date || typeof value === "object" && Object.prototype.toString.call(value) === "[object Date]";
}
function isValid(dirtyDate) {
  requiredArgs(1, arguments);
  if (!isDate$1(dirtyDate) && typeof dirtyDate !== "number") {
    return false;
  }
  var date = toDate(dirtyDate);
  return !isNaN(Number(date));
}
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
};
var formatDistance = function(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }
  return result;
};
var formatDistance$1 = formatDistance;
function buildFormatLongFn(args) {
  return function() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format2 = args.formats[width] || args.formats[args.defaultWidth];
    return format2;
  };
}
var dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
};
var timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
};
var formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: "full"
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: "full"
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: "full"
  })
};
var formatLong$1 = formatLong;
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
};
var formatRelative = function(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};
var formatRelative$1 = formatRelative;
function buildLocalizeFn(args) {
  return function(dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var context = options.context ? String(options.context) : "standalone";
    var valuesArray;
    if (context === "formatting" && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;
      var _width = options.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }
    var index2 = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    return valuesArray[index2];
  };
}
var eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
};
var monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
};
var dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
};
var dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
};
var ordinalNumber = function(dirtyNumber, _options) {
  var number = Number(dirtyNumber);
  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};
var localize = {
  ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: "wide"
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: function(quarter) {
      return quarter - 1;
    }
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: "wide"
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide"
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide"
  })
};
var localize$1 = localize;
function buildMatchFn(args) {
  return function(string) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function(pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function(pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value,
      rest
    };
  };
}
function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
  return void 0;
}
function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return void 0;
}
function buildMatchPatternFn(args) {
  return function(string) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult)
      return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult)
      return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value,
      rest
    };
  };
}
var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function(value) {
      return parseInt(value, 10);
    }
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any"
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: function(index2) {
      return index2 + 1;
    }
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any"
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any"
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any"
  })
};
var match$1 = match;
var locale = {
  code: "en-US",
  formatDistance: formatDistance$1,
  formatLong: formatLong$1,
  formatRelative: formatRelative$1,
  localize: localize$1,
  match: match$1,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
var defaultLocale = locale;
function subMilliseconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMilliseconds(dirtyDate, -amount);
}
var MILLISECONDS_IN_DAY = 864e5;
function getUTCDayOfYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}
function startOfUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var weekStartsOn = 1;
  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}
function getUTCISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}
function startOfUTCISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var year = getUTCISOWeekYear(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCISOWeek(fourthOfJanuary);
  return date;
}
var MILLISECONDS_IN_WEEK$1 = 6048e5;
function getUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfUTCISOWeek(date).getTime() - startOfUTCISOWeekYear(date).getTime();
  return Math.round(diff / MILLISECONDS_IN_WEEK$1) + 1;
}
function startOfUTCWeek(dirtyDate, dirtyOptions) {
  requiredArgs(1, arguments);
  var options = dirtyOptions || {};
  var locale2 = options.locale;
  var localeWeekStartsOn = locale2 && locale2.options && locale2.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}
function getUTCWeekYear(dirtyDate, dirtyOptions) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getUTCFullYear();
  var options = dirtyOptions || {};
  var locale2 = options.locale;
  var localeFirstWeekContainsDate = locale2 && locale2.options && locale2.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate);
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  }
  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCWeek(firstWeekOfNextYear, dirtyOptions);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCWeek(firstWeekOfThisYear, dirtyOptions);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}
function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
  requiredArgs(1, arguments);
  var options = dirtyOptions || {};
  var locale2 = options.locale;
  var localeFirstWeekContainsDate = locale2 && locale2.options && locale2.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate);
  var year = getUTCWeekYear(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCWeek(firstWeek, dirtyOptions);
  return date;
}
var MILLISECONDS_IN_WEEK = 6048e5;
function getUTCWeek(dirtyDate, options) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfUTCWeek(date, options).getTime() - startOfUTCWeekYear(date, options).getTime();
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? "-" : "";
  var output = Math.abs(number).toString();
  while (output.length < targetLength) {
    output = "0" + output;
  }
  return sign + output;
}
var formatters$2 = {
  y: function(date, token) {
    var signedYear = date.getUTCFullYear();
    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return addLeadingZeros(token === "yy" ? year % 100 : year, token.length);
  },
  M: function(date, token) {
    var month = date.getUTCMonth();
    return token === "M" ? String(month + 1) : addLeadingZeros(month + 1, 2);
  },
  d: function(date, token) {
    return addLeadingZeros(date.getUTCDate(), token.length);
  },
  a: function(date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },
  h: function(date, token) {
    return addLeadingZeros(date.getUTCHours() % 12 || 12, token.length);
  },
  H: function(date, token) {
    return addLeadingZeros(date.getUTCHours(), token.length);
  },
  m: function(date, token) {
    return addLeadingZeros(date.getUTCMinutes(), token.length);
  },
  s: function(date, token) {
    return addLeadingZeros(date.getUTCSeconds(), token.length);
  },
  S: function(date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return addLeadingZeros(fractionalSeconds, token.length);
  }
};
var formatters$3 = formatters$2;
var dayPeriodEnum = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
};
var formatters = {
  G: function(date, token, localize2) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;
    switch (token) {
      case "G":
      case "GG":
      case "GGG":
        return localize2.era(era, {
          width: "abbreviated"
        });
      case "GGGGG":
        return localize2.era(era, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return localize2.era(era, {
          width: "wide"
        });
    }
  },
  y: function(date, token, localize2) {
    if (token === "yo") {
      var signedYear = date.getUTCFullYear();
      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize2.ordinalNumber(year, {
        unit: "year"
      });
    }
    return formatters$3.y(date, token);
  },
  Y: function(date, token, localize2, options) {
    var signedWeekYear = getUTCWeekYear(date, options);
    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
    if (token === "YY") {
      var twoDigitYear = weekYear % 100;
      return addLeadingZeros(twoDigitYear, 2);
    }
    if (token === "Yo") {
      return localize2.ordinalNumber(weekYear, {
        unit: "year"
      });
    }
    return addLeadingZeros(weekYear, token.length);
  },
  R: function(date, token) {
    var isoWeekYear = getUTCISOWeekYear(date);
    return addLeadingZeros(isoWeekYear, token.length);
  },
  u: function(date, token) {
    var year = date.getUTCFullYear();
    return addLeadingZeros(year, token.length);
  },
  Q: function(date, token, localize2) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      case "Q":
        return String(quarter);
      case "QQ":
        return addLeadingZeros(quarter, 2);
      case "Qo":
        return localize2.ordinalNumber(quarter, {
          unit: "quarter"
        });
      case "QQQ":
        return localize2.quarter(quarter, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return localize2.quarter(quarter, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return localize2.quarter(quarter, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  q: function(date, token, localize2) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      case "q":
        return String(quarter);
      case "qq":
        return addLeadingZeros(quarter, 2);
      case "qo":
        return localize2.ordinalNumber(quarter, {
          unit: "quarter"
        });
      case "qqq":
        return localize2.quarter(quarter, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return localize2.quarter(quarter, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return localize2.quarter(quarter, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  M: function(date, token, localize2) {
    var month = date.getUTCMonth();
    switch (token) {
      case "M":
      case "MM":
        return formatters$3.M(date, token);
      case "Mo":
        return localize2.ordinalNumber(month + 1, {
          unit: "month"
        });
      case "MMM":
        return localize2.month(month, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return localize2.month(month, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return localize2.month(month, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  L: function(date, token, localize2) {
    var month = date.getUTCMonth();
    switch (token) {
      case "L":
        return String(month + 1);
      case "LL":
        return addLeadingZeros(month + 1, 2);
      case "Lo":
        return localize2.ordinalNumber(month + 1, {
          unit: "month"
        });
      case "LLL":
        return localize2.month(month, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return localize2.month(month, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return localize2.month(month, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  w: function(date, token, localize2, options) {
    var week = getUTCWeek(date, options);
    if (token === "wo") {
      return localize2.ordinalNumber(week, {
        unit: "week"
      });
    }
    return addLeadingZeros(week, token.length);
  },
  I: function(date, token, localize2) {
    var isoWeek = getUTCISOWeek(date);
    if (token === "Io") {
      return localize2.ordinalNumber(isoWeek, {
        unit: "week"
      });
    }
    return addLeadingZeros(isoWeek, token.length);
  },
  d: function(date, token, localize2) {
    if (token === "do") {
      return localize2.ordinalNumber(date.getUTCDate(), {
        unit: "date"
      });
    }
    return formatters$3.d(date, token);
  },
  D: function(date, token, localize2) {
    var dayOfYear = getUTCDayOfYear(date);
    if (token === "Do") {
      return localize2.ordinalNumber(dayOfYear, {
        unit: "dayOfYear"
      });
    }
    return addLeadingZeros(dayOfYear, token.length);
  },
  E: function(date, token, localize2) {
    var dayOfWeek = date.getUTCDay();
    switch (token) {
      case "E":
      case "EE":
      case "EEE":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  e: function(date, token, localize2, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      case "e":
        return String(localDayOfWeek);
      case "ee":
        return addLeadingZeros(localDayOfWeek, 2);
      case "eo":
        return localize2.ordinalNumber(localDayOfWeek, {
          unit: "day"
        });
      case "eee":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  c: function(date, token, localize2, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      case "c":
        return String(localDayOfWeek);
      case "cc":
        return addLeadingZeros(localDayOfWeek, token.length);
      case "co":
        return localize2.ordinalNumber(localDayOfWeek, {
          unit: "day"
        });
      case "ccc":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  i: function(date, token, localize2) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      case "i":
        return String(isoDayOfWeek);
      case "ii":
        return addLeadingZeros(isoDayOfWeek, token.length);
      case "io":
        return localize2.ordinalNumber(isoDayOfWeek, {
          unit: "day"
        });
      case "iii":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  a: function(date, token, localize2) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  b: function(date, token, localize2) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }
    switch (token) {
      case "b":
      case "bb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  B: function(date, token, localize2) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }
    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  h: function(date, token, localize2) {
    if (token === "ho") {
      var hours = date.getUTCHours() % 12;
      if (hours === 0)
        hours = 12;
      return localize2.ordinalNumber(hours, {
        unit: "hour"
      });
    }
    return formatters$3.h(date, token);
  },
  H: function(date, token, localize2) {
    if (token === "Ho") {
      return localize2.ordinalNumber(date.getUTCHours(), {
        unit: "hour"
      });
    }
    return formatters$3.H(date, token);
  },
  K: function(date, token, localize2) {
    var hours = date.getUTCHours() % 12;
    if (token === "Ko") {
      return localize2.ordinalNumber(hours, {
        unit: "hour"
      });
    }
    return addLeadingZeros(hours, token.length);
  },
  k: function(date, token, localize2) {
    var hours = date.getUTCHours();
    if (hours === 0)
      hours = 24;
    if (token === "ko") {
      return localize2.ordinalNumber(hours, {
        unit: "hour"
      });
    }
    return addLeadingZeros(hours, token.length);
  },
  m: function(date, token, localize2) {
    if (token === "mo") {
      return localize2.ordinalNumber(date.getUTCMinutes(), {
        unit: "minute"
      });
    }
    return formatters$3.m(date, token);
  },
  s: function(date, token, localize2) {
    if (token === "so") {
      return localize2.ordinalNumber(date.getUTCSeconds(), {
        unit: "second"
      });
    }
    return formatters$3.s(date, token);
  },
  S: function(date, token) {
    return formatters$3.S(date, token);
  },
  X: function(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    if (timezoneOffset === 0) {
      return "Z";
    }
    switch (token) {
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      case "XXXX":
      case "XX":
        return formatTimezone(timezoneOffset);
      case "XXXXX":
      case "XXX":
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  x: function(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      case "xxxx":
      case "xx":
        return formatTimezone(timezoneOffset);
      case "xxxxx":
      case "xxx":
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  O: function(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  z: function(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      case "zzzz":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  t: function(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1e3);
    return addLeadingZeros(timestamp, token.length);
  },
  T: function(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return addLeadingZeros(timestamp, token.length);
  }
};
function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? "-" : "+";
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  var delimiter = dirtyDelimiter || "";
  return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? "-" : "+";
    return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, dirtyDelimiter);
}
function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || "";
  var sign = offset > 0 ? "-" : "+";
  var absOffset = Math.abs(offset);
  var hours = addLeadingZeros(Math.floor(absOffset / 60), 2);
  var minutes = addLeadingZeros(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}
var formatters$1 = formatters;
function dateLongFormatter(pattern, formatLong2) {
  switch (pattern) {
    case "P":
      return formatLong2.date({
        width: "short"
      });
    case "PP":
      return formatLong2.date({
        width: "medium"
      });
    case "PPP":
      return formatLong2.date({
        width: "long"
      });
    case "PPPP":
    default:
      return formatLong2.date({
        width: "full"
      });
  }
}
function timeLongFormatter(pattern, formatLong2) {
  switch (pattern) {
    case "p":
      return formatLong2.time({
        width: "short"
      });
    case "pp":
      return formatLong2.time({
        width: "medium"
      });
    case "ppp":
      return formatLong2.time({
        width: "long"
      });
    case "pppp":
    default:
      return formatLong2.time({
        width: "full"
      });
  }
}
function dateTimeLongFormatter(pattern, formatLong2) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];
  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong2);
  }
  var dateTimeFormat;
  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong2.dateTime({
        width: "short"
      });
      break;
    case "PP":
      dateTimeFormat = formatLong2.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      dateTimeFormat = formatLong2.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong2.dateTime({
        width: "full"
      });
      break;
  }
  return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong2)).replace("{{time}}", timeLongFormatter(timePattern, formatLong2));
}
var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
var longFormatters$1 = longFormatters;
var protectedDayOfYearTokens = ["D", "DD"];
var protectedWeekYearTokens = ["YY", "YYYY"];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format2, input) {
  if (token === "YYYY") {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format2, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === "YY") {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format2, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === "D") {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format2, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === "DD") {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format2, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  }
}
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  requiredArgs(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var options = dirtyOptions || {};
  var locale2 = options.locale || defaultLocale;
  var localeFirstWeekContainsDate = locale2.options && locale2.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate);
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  }
  var localeWeekStartsOn = locale2.options && locale2.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  if (!locale2.localize) {
    throw new RangeError("locale must contain localize property");
  }
  if (!locale2.formatLong) {
    throw new RangeError("locale must contain formatLong property");
  }
  var originalDate = toDate(dirtyDate);
  if (!isValid(originalDate)) {
    throw new RangeError("Invalid time value");
  }
  var timezoneOffset = getTimezoneOffsetInMilliseconds(originalDate);
  var utcDate = subMilliseconds(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale: locale2,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function(substring) {
    var firstCharacter = substring[0];
    if (firstCharacter === "p" || firstCharacter === "P") {
      var longFormatter = longFormatters$1[firstCharacter];
      return longFormatter(substring, locale2.formatLong, formatterOptions);
    }
    return substring;
  }).join("").match(formattingTokensRegExp).map(function(substring) {
    if (substring === "''") {
      return "'";
    }
    var firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }
    var formatter = formatters$1[firstCharacter];
    if (formatter) {
      if (!options.useAdditionalWeekYearTokens && isProtectedWeekYearToken(substring)) {
        throwProtectedError(substring, dirtyFormatStr, dirtyDate);
      }
      if (!options.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(substring)) {
        throwProtectedError(substring, dirtyFormatStr, dirtyDate);
      }
      return formatter(utcDate, substring, locale2.localize, formatterOptions);
    }
    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
    }
    return substring;
  }).join("");
  return result;
}
function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}
const _sfc_main$v = {
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
const _hoisted_1$q = ["type", "readonly"];
const _hoisted_2$e = /* @__PURE__ */ createTextVNode(" Now ");
const _hoisted_3$8 = /* @__PURE__ */ createTextVNode(" Clear ");
function _sfc_render$u(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_KButton = resolveComponent("KButton");
  return openBlock(), createElementBlock("div", null, [
    withDirectives(createElementVNode("input", {
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $options.localModelValue = $event),
      class: "k-input",
      type: $options.type,
      readonly: !$props.editable
    }, null, 8, _hoisted_1$q), [
      [vModelDynamic, $options.localModelValue]
    ]),
    $props.editable ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
      createVNode(_component_KButton, {
        class: "ml-1",
        small: "",
        onClick: $options.setToNow
      }, {
        default: withCtx(() => [
          _hoisted_2$e
        ]),
        _: 1
      }, 8, ["onClick"]),
      createVNode(_component_KButton, {
        class: "ml-1",
        small: "",
        onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("update:modelValue", null))
      }, {
        default: withCtx(() => [
          _hoisted_3$8
        ]),
        _: 1
      })
    ], 64)) : createCommentVNode("", true)
  ]);
}
var KDateTimePicker = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["render", _sfc_render$u]]);
var __glob_2_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": KDateTimePicker
}, Symbol.toStringTag, { value: "Module" }));
const convertToUnit = (str, unit = "px") => {
  if (str == null || str === "") {
    return void 0;
  } else if (isNaN(+str)) {
    return String(str);
  } else {
    return `${Number(str)}${unit}`;
  }
};
var measurables = {
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
function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  } else {
    return Array.from(arr);
  }
}
var hasPassiveEvents = false;
if (typeof window !== "undefined") {
  var passiveTestOptions = {
    get passive() {
      hasPassiveEvents = true;
      return void 0;
    }
  };
  window.addEventListener("testPassive", null, passiveTestOptions);
  window.removeEventListener("testPassive", null, passiveTestOptions);
}
var isIosDevice = typeof window !== "undefined" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
var locks = [];
var documentListenerAdded = false;
var initialClientY = -1;
var previousBodyOverflowSetting = void 0;
var previousBodyPosition = void 0;
var previousBodyPaddingRight = void 0;
var allowTouchMove = function allowTouchMove2(el) {
  return locks.some(function(lock) {
    if (lock.options.allowTouchMove && lock.options.allowTouchMove(el)) {
      return true;
    }
    return false;
  });
};
var preventDefault = function preventDefault2(rawEvent) {
  var e = rawEvent || window.event;
  if (allowTouchMove(e.target)) {
    return true;
  }
  if (e.touches.length > 1)
    return true;
  if (e.preventDefault)
    e.preventDefault();
  return false;
};
var setOverflowHidden = function setOverflowHidden2(options) {
  if (previousBodyPaddingRight === void 0) {
    var _reserveScrollBarGap = !!options && options.reserveScrollBarGap === true;
    var scrollBarGap = window.innerWidth - document.documentElement.clientWidth;
    if (_reserveScrollBarGap && scrollBarGap > 0) {
      var computedBodyPaddingRight = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"), 10);
      previousBodyPaddingRight = document.body.style.paddingRight;
      document.body.style.paddingRight = computedBodyPaddingRight + scrollBarGap + "px";
    }
  }
  if (previousBodyOverflowSetting === void 0) {
    previousBodyOverflowSetting = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  }
};
var restoreOverflowSetting = function restoreOverflowSetting2() {
  if (previousBodyPaddingRight !== void 0) {
    document.body.style.paddingRight = previousBodyPaddingRight;
    previousBodyPaddingRight = void 0;
  }
  if (previousBodyOverflowSetting !== void 0) {
    document.body.style.overflow = previousBodyOverflowSetting;
    previousBodyOverflowSetting = void 0;
  }
};
var setPositionFixed = function setPositionFixed2() {
  return window.requestAnimationFrame(function() {
    if (previousBodyPosition === void 0) {
      previousBodyPosition = {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left
      };
      var _window = window, scrollY = _window.scrollY, scrollX = _window.scrollX, innerHeight = _window.innerHeight;
      document.body.style.position = "fixed";
      document.body.style.top = -scrollY;
      document.body.style.left = -scrollX;
      setTimeout(function() {
        return window.requestAnimationFrame(function() {
          var bottomBarHeight = innerHeight - window.innerHeight;
          if (bottomBarHeight && scrollY >= innerHeight) {
            document.body.style.top = -(scrollY + bottomBarHeight);
          }
        });
      }, 300);
    }
  });
};
var restorePositionSetting = function restorePositionSetting2() {
  if (previousBodyPosition !== void 0) {
    var y = -parseInt(document.body.style.top, 10);
    var x = -parseInt(document.body.style.left, 10);
    document.body.style.position = previousBodyPosition.position;
    document.body.style.top = previousBodyPosition.top;
    document.body.style.left = previousBodyPosition.left;
    window.scrollTo(x, y);
    previousBodyPosition = void 0;
  }
};
var isTargetElementTotallyScrolled = function isTargetElementTotallyScrolled2(targetElement) {
  return targetElement ? targetElement.scrollHeight - targetElement.scrollTop <= targetElement.clientHeight : false;
};
var handleScroll = function handleScroll2(event, targetElement) {
  var clientY = event.targetTouches[0].clientY - initialClientY;
  if (allowTouchMove(event.target)) {
    return false;
  }
  if (targetElement && targetElement.scrollTop === 0 && clientY > 0) {
    return preventDefault(event);
  }
  if (isTargetElementTotallyScrolled(targetElement) && clientY < 0) {
    return preventDefault(event);
  }
  event.stopPropagation();
  return true;
};
var disableBodyScroll = function disableBodyScroll2(targetElement, options) {
  if (!targetElement) {
    console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
    return;
  }
  if (locks.some(function(lock2) {
    return lock2.targetElement === targetElement;
  })) {
    return;
  }
  var lock = {
    targetElement,
    options: options || {}
  };
  locks = [].concat(_toConsumableArray(locks), [lock]);
  if (isIosDevice) {
    setPositionFixed();
  } else {
    setOverflowHidden(options);
  }
  if (isIosDevice) {
    targetElement.ontouchstart = function(event) {
      if (event.targetTouches.length === 1) {
        initialClientY = event.targetTouches[0].clientY;
      }
    };
    targetElement.ontouchmove = function(event) {
      if (event.targetTouches.length === 1) {
        handleScroll(event, targetElement);
      }
    };
    if (!documentListenerAdded) {
      document.addEventListener("touchmove", preventDefault, hasPassiveEvents ? { passive: false } : void 0);
      documentListenerAdded = true;
    }
  }
};
var enableBodyScroll = function enableBodyScroll2(targetElement) {
  if (!targetElement) {
    console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");
    return;
  }
  locks = locks.filter(function(lock) {
    return lock.targetElement !== targetElement;
  });
  if (isIosDevice) {
    targetElement.ontouchstart = null;
    targetElement.ontouchmove = null;
    if (documentListenerAdded && locks.length === 0) {
      document.removeEventListener("touchmove", preventDefault, hasPassiveEvents ? { passive: false } : void 0);
      documentListenerAdded = false;
    }
  }
  if (isIosDevice) {
    restorePositionSetting();
  } else {
    restoreOverflowSetting();
  }
};
var KDialog_vue_vue_type_style_index_0_lang = "";
const _sfc_main$u = {
  directives: {
    ClickAway: directive
  },
  mixins: [measurables],
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
const _hoisted_1$p = {
  key: 0,
  class: "k-dialog"
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
          $data.dialog ? (openBlock(), createElementBlock("div", _hoisted_1$p, [
            withDirectives((openBlock(), createElementBlock("div", {
              ref: "content",
              class: normalizeClass(["k-dialog-content", $options.classObj]),
              style: normalizeStyle([_ctx.measurableStyles])
            }, [
              renderSlot(_ctx.$slots, "default", { on: $options.on })
            ], 6)), [
              [_directive_click_away, $options.clickAway]
            ])
          ])) : createCommentVNode("", true)
        ]),
        _: 3
      })
    ])) : createCommentVNode("", true)
  ], 64);
}
var KDialog = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["render", _sfc_render$t]]);
var __glob_2_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": KDialog
}, Symbol.toStringTag, { value: "Module" }));
var KDot_vue_vue_type_style_index_0_lang = "";
const _sfc_main$t = {
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
var KDot = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$s]]);
var __glob_2_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": KDot
}, Symbol.toStringTag, { value: "Module" }));
var KFormFieldWrapper_vue_vue_type_style_index_0_lang = "";
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
const _sfc_main$s = {
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
var KFormFieldWrapper = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["render", _sfc_render$r]]);
var __glob_2_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  mixin,
  "default": KFormFieldWrapper
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$r = {
  props: {
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
      this.image = `${this.$img}webdoc/actions_hover.png`;
    },
    onmouseout() {
      this.image = `${this.$img}webdoc/actions.png`;
    }
  }
};
const _hoisted_1$n = { key: 0 };
const _hoisted_2$d = ["id"];
const _hoisted_3$7 = ["src"];
const _hoisted_4$4 = ["id", "src"];
function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.dataid ? (openBlock(), createElementBlock("span", _hoisted_1$n, [
    createElementVNode("a", {
      id: $options.aid,
      href: "#",
      class: "functionMenuHotspot",
      onClick: _cache[2] || (_cache[2] = withModifiers((...args) => $options.onclick && $options.onclick(...args), ["prevent"]))
    }, [
      $options.isModernFunctionMenu ? (openBlock(), createElementBlock("img", {
        key: 0,
        src: `${_ctx.$img}spacer.gif`,
        alt: "Functions"
      }, null, 8, _hoisted_3$7)) : (openBlock(), createElementBlock("img", {
        key: 1,
        id: $options.xid,
        src: $data.image,
        border: "0",
        alt: "Functions",
        title: "Functions",
        onMouseover: _cache[0] || (_cache[0] = (...args) => $options.onmouseover && $options.onmouseover(...args)),
        onMouseout: _cache[1] || (_cache[1] = (...args) => $options.onmouseout && $options.onmouseout(...args))
      }, null, 40, _hoisted_4$4))
    ], 8, _hoisted_2$d),
    _cache[3] || (setBlockTracking(-1), _cache[3] = createElementVNode("div", {
      id: $options.zid,
      ref: "functionMenuDiv",
      class: "functionMenuDiv"
    }, null, 8, ["id"]), setBlockTracking(1), _cache[3])
  ])) : createCommentVNode("", true);
}
var KFunctionMenu = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$q]]);
var __glob_2_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": KFunctionMenu
}, Symbol.toStringTag, { value: "Module" }));
var KLinearProgressIndicator_vue_vue_type_style_index_0_lang = "";
const _sfc_main$q = {};
const _hoisted_1$m = { class: "k-progress-line" };
function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$m);
}
var KLinearProgressIndicator = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$p]]);
var __glob_2_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": KLinearProgressIndicator
}, Symbol.toStringTag, { value: "Module" }));
var KMulti_vue_vue_type_style_index_0_lang = "";
const _sfc_main$p = {
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
    }
  }
};
const _hoisted_1$l = { class: "k-multi-widget" };
const _hoisted_2$c = { class: "k-multi-buttons" };
const _hoisted_3$6 = /* @__PURE__ */ createElementVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ createElementVNode("path", { d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z" })
], -1);
const _hoisted_4$3 = /* @__PURE__ */ createElementVNode("svg", {
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
          (openBlock(true), createElementBlock(Fragment, null, renderList($options.valueLocal, (v, i) => {
            return openBlock(), createElementBlock("div", {
              key: `k-multi-${i}`,
              class: "k-multi-item"
            }, [
              createElementVNode("div", _hoisted_1$l, [
                renderSlot(_ctx.$slots, "default", { index: i })
              ]),
              createElementVNode("div", _hoisted_2$c, [
                $options.canRemove ? (openBlock(), createBlock(_component_KButton, {
                  key: 0,
                  text: "",
                  onClick: ($event) => $options.remove(i)
                }, {
                  default: withCtx(() => [
                    _hoisted_3$6
                  ]),
                  _: 2
                }, 1032, ["onClick"])) : createCommentVNode("", true),
                $options.canAdd ? (openBlock(), createBlock(_component_KButton, {
                  key: 1,
                  text: "",
                  onClick: ($event) => $options.add(i)
                }, {
                  default: withCtx(() => [
                    _hoisted_4$3
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
var KMulti = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$o]]);
var __glob_2_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": KMulti
}, Symbol.toStringTag, { value: "Module" }));
var buildUrl$1 = { exports: {} };
/**
 * build-url - A small library that builds a URL given its components
 * @version v6.0.0
 * @link https://github.com/steverydz/build-url#readme
 * @license MIT
 */
(function(module, exports) {
  (function() {
    var root2 = this;
    var previousBuildUrl = root2.buildUrl;
    var encodedParam = function(param) {
      return param === null ? "" : encodeURIComponent(String(param).trim());
    };
    var buildUrl2 = function(url, options) {
      var queryString = [];
      var key;
      var builtUrl;
      var caseChange;
      if (options && options.lowerCase) {
        caseChange = !!options.lowerCase;
      } else {
        caseChange = false;
      }
      if (url === null) {
        builtUrl = "";
      } else if (typeof url === "object") {
        builtUrl = "";
        options = url;
      } else {
        builtUrl = url;
      }
      if (options) {
        if (options.path) {
          if (builtUrl && builtUrl[builtUrl.length - 1] === "/") {
            builtUrl = builtUrl.slice(0, -1);
          }
          var localVar = String(options.path).trim();
          if (caseChange) {
            localVar = localVar.toLowerCase();
          }
          if (localVar.indexOf("/") === 0) {
            builtUrl += localVar;
          } else {
            builtUrl += "/" + localVar;
          }
        }
        if (options.queryParams) {
          for (key in options.queryParams) {
            if (options.queryParams.hasOwnProperty(key) && options.queryParams[key] !== void 0) {
              var param;
              if (options.disableCSV && Array.isArray(options.queryParams[key]) && options.queryParams[key].length) {
                for (var i = 0; i < options.queryParams[key].length; i++) {
                  param = options.queryParams[key][i];
                  queryString.push(key + "=" + encodedParam(param));
                }
              } else {
                if (caseChange) {
                  param = options.queryParams[key].toLowerCase();
                } else {
                  param = options.queryParams[key];
                }
                queryString.push(key + "=" + encodedParam(param));
              }
            }
          }
          builtUrl += "?" + queryString.join("&");
        }
        if (options.hash) {
          if (caseChange)
            builtUrl += "#" + String(options.hash).trim().toLowerCase();
          else
            builtUrl += "#" + String(options.hash).trim();
        }
      }
      return builtUrl;
    };
    buildUrl2.noConflict = function() {
      root2.buildUrl = previousBuildUrl;
      return buildUrl2;
    };
    {
      if (module.exports) {
        exports = module.exports = buildUrl2;
      }
      exports.buildUrl = buildUrl2;
    }
  }).call(commonjsGlobal);
})(buildUrl$1, buildUrl$1.exports);
var buildUrl = buildUrl$1.exports;
/*! js-cookie v3.0.1 | MIT */
function assign(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source2 = arguments[i];
    for (var key in source2) {
      target[key] = source2[key];
    }
  }
  return target;
}
var defaultConverter = {
  read: function(value) {
    if (value[0] === '"') {
      value = value.slice(1, -1);
    }
    return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
  },
  write: function(value) {
    return encodeURIComponent(value).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
  }
};
function init(converter, defaultAttributes) {
  function set(key, value, attributes) {
    if (typeof document === "undefined") {
      return;
    }
    attributes = assign({}, defaultAttributes, attributes);
    if (typeof attributes.expires === "number") {
      attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
    }
    if (attributes.expires) {
      attributes.expires = attributes.expires.toUTCString();
    }
    key = encodeURIComponent(key).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
    var stringifiedAttributes = "";
    for (var attributeName in attributes) {
      if (!attributes[attributeName]) {
        continue;
      }
      stringifiedAttributes += "; " + attributeName;
      if (attributes[attributeName] === true) {
        continue;
      }
      stringifiedAttributes += "=" + attributes[attributeName].split(";")[0];
    }
    return document.cookie = key + "=" + converter.write(value, key) + stringifiedAttributes;
  }
  function get2(key) {
    if (typeof document === "undefined" || arguments.length && !key) {
      return;
    }
    var cookies2 = document.cookie ? document.cookie.split("; ") : [];
    var jar = {};
    for (var i = 0; i < cookies2.length; i++) {
      var parts = cookies2[i].split("=");
      var value = parts.slice(1).join("=");
      try {
        var foundKey = decodeURIComponent(parts[0]);
        jar[foundKey] = converter.read(value, foundKey);
        if (key === foundKey) {
          break;
        }
      } catch (e) {
      }
    }
    return key ? jar[key] : jar;
  }
  return Object.create({
    set,
    get: get2,
    remove: function(key, attributes) {
      set(key, "", assign({}, attributes, {
        expires: -1
      }));
    },
    withAttributes: function(attributes) {
      return init(this.converter, assign({}, this.attributes, attributes));
    },
    withConverter: function(converter2) {
      return init(assign({}, this.converter, converter2), this.attributes);
    }
  }, {
    attributes: { value: Object.freeze(defaultAttributes) },
    converter: { value: Object.freeze(converter) }
  });
}
var api = init(defaultConverter, { path: "/" });
class SemaphoreItem {
  constructor(max) {
    this.queue = [];
    this.max = max;
    this.count = 0;
  }
  get canAcquire() {
    return this.count < this.max;
  }
  acquire() {
    if (this.canAcquire) {
      this.count++;
      return Promise.resolve();
    } else {
      return new Promise((resolve) => {
        this.queue.push(resolve);
      });
    }
  }
  release() {
    const resolveFunc = this.queue.shift();
    if (resolveFunc) {
      setTimeout(resolveFunc, 0);
    } else {
      this.count--;
    }
  }
}
const defaultKey = "_default";
class Semaphore {
  constructor(max = 1) {
    this.semaphoreItems = {};
    this.max = max;
  }
  _getSemaphoreInstance(key = defaultKey) {
    if (!this.semaphoreItems[key]) {
      this.semaphoreItems[key] = new SemaphoreItem(this.max);
    }
    return this.semaphoreItems[key];
  }
  _tidy(key = defaultKey) {
    if (this._getSemaphoreInstance(key).count == 0) {
      delete this.semaphoreItems[key];
    }
  }
  canAcquire(key = defaultKey) {
    return this._getSemaphoreInstance(key).canAcquire;
  }
  acquire(key = defaultKey) {
    return this._getSemaphoreInstance(key).acquire();
  }
  release(key = defaultKey) {
    this._getSemaphoreInstance(key).release();
    this._tidy(key);
  }
  count(key = defaultKey) {
    if (this.semaphoreItems[key]) {
      return this.semaphoreItems[key].count;
    } else {
      return 0;
    }
  }
  hasTasks(key = defaultKey) {
    return this.count(key) > 0;
  }
  async request(fn, key = defaultKey) {
    try {
      await this.acquire(key);
      return await fn();
    } finally {
      this.release(key);
    }
  }
  async requestIfAvailable(fn, key = defaultKey) {
    if (this.canAcquire(key)) {
      return this.request(fn, key);
    } else {
      return null;
    }
  }
}
var src = Semaphore;
const semaphore$1 = new src();
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
        this.nodes[dataId] = lodash_get(response, "data.ancestors", []);
      }
      return this.nodes[dataId];
    } finally {
      semaphore$1.release(dataId);
    }
  }
}
var KNodePickerField_vue_vue_type_style_index_0_lang = "";
const ancestorLookup = new AncestorLookup();
const _sfc_main$o = {
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
    clearButtonLabel: {
      type: String,
      default: "clear"
    }
  },
  data() {
    return {
      breadcrumb: null
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
    breadcrumbString() {
      if (this.breadcrumb) {
        return `Path: ${this.breadcrumb.replace(":", " &#9654; ")}`;
      } else {
        return null;
      }
    },
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
      return __spreadProps(__spreadValues({
        func: "ll",
        objAction: "TargetBrowse",
        headerLabel: this.title,
        objid: this.targetBrowseObjID(),
        selectPerm: this.selectperm
      }, this.selectScreenString), {
        formname: "ignored",
        fieldPrefix: this.uniqueID
      });
    },
    url() {
      return buildUrl(this.$cgi, {
        queryParams: this.urlParams
      });
    },
    name() {
      return (this.breadcrumb || "").split(":").slice(-1)[0];
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
        if (this.dataid && !this.breadcrumb) {
          const ancestors = await ancestorLookup.lookup(this.$session, this.dataid);
          this.breadcrumb = ancestors.map((item) => item.name).join(":");
        } else if (!this.dataid) {
          this.breadcrumb = null;
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
      return this.objid || parseInt(api.get("TargetBrowseObjID")) || 0;
    },
    didCloseWindow() {
      console.log("didClose");
    },
    callback(dataid, breadcrumb) {
      this.breadcrumb = breadcrumb;
      this.dataid = dataid;
    },
    clear() {
      this.breadcrumb = null;
      this.dataid = null;
    }
  }
};
const _hoisted_1$k = { class: "k-node-picker-field" };
const _hoisted_2$b = ["value"];
const _hoisted_3$5 = ["innerHTML"];
function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_KButton = resolveComponent("KButton");
  return openBlock(), createElementBlock("div", _hoisted_1$k, [
    createElementVNode("input", {
      ref: "input",
      type: "text",
      class: "k-input",
      value: $options.name,
      onFocus: _cache[0] || (_cache[0] = (...args) => $options.openWindow && $options.openWindow(...args))
    }, null, 40, _hoisted_2$b),
    createVNode(_component_KButton, {
      small: "",
      onClick: $options.openWindow
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString($props.browseButtonLabel), 1)
      ]),
      _: 1
    }, 8, ["onClick"]),
    createVNode(_component_KButton, {
      small: "",
      onClick: $options.clear
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString($props.clearButtonLabel), 1)
      ]),
      _: 1
    }, 8, ["onClick"]),
    createElementVNode("div", {
      class: "k-node-picker-breadcrumb",
      innerHTML: $options.breadcrumbString
    }, null, 8, _hoisted_3$5)
  ]);
}
var KNodePickerField = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$n]]);
var __glob_2_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": KNodePickerField
}, Symbol.toStringTag, { value: "Module" }));
var KOneMoment_vue_vue_type_style_index_0_lang = "";
const _sfc_main$n = {
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
const _hoisted_1$j = { class: "k-one-moment" };
const _hoisted_2$a = { class: "k-one-moment-label" };
function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_KSpinner = resolveComponent("KSpinner");
  const _component_KDialog = resolveComponent("KDialog");
  return openBlock(), createBlock(_component_KDialog, {
    "model-value": $props.loading,
    width: null
  }, {
    default: withCtx(() => [
      createElementVNode("div", _hoisted_1$j, [
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
var KOneMoment = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$m]]);
var __glob_2_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": KOneMoment
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$m = {
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
function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    renderSlot(_ctx.$slots, "default", { active: $data.active })
  ]);
}
var KPageDropZone = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$l]]);
var __glob_2_15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": KPageDropZone
}, Symbol.toStringTag, { value: "Module" }));
var KPageTitle_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$l = {
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
const _hoisted_1$i = { key: 0 };
const _hoisted_2$9 = /* @__PURE__ */ createTextVNode(": ");
const _hoisted_3$4 = { class: "rhmuted" };
function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("h1", null, [
    createTextVNode(toDisplayString($props.title), 1),
    $props.subtitle ? (openBlock(), createElementBlock("span", _hoisted_1$i, [
      _hoisted_2$9,
      createElementVNode("span", _hoisted_3$4, toDisplayString($props.subtitle) + " - 2", 1)
    ])) : createCommentVNode("", true)
  ]);
}
var KPageTitle = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$k], ["__scopeId", "data-v-3c9ef876"]]);
var __glob_2_16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": KPageTitle
}, Symbol.toStringTag, { value: "Module" }));
var KPagination_vue_vue_type_style_index_0_lang = "";
const _sfc_main$k = {
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
      return lodash_get(this.pagination, "pageRange", []);
    },
    pageSizes() {
      return lodash_get(this.pagination, "pageSizes", []);
    },
    pageNumber() {
      return lodash_get(this.pagination, "pageNumber", 0);
    },
    pageSize: {
      get() {
        return lodash_get(this.pagination, "pageSize", []);
      },
      set(value) {
        this.$emit("update:pageSize", value);
      }
    },
    hasPrevious() {
      return lodash_get(this.pagination, "hasPrevious", false);
    },
    hasNext() {
      return lodash_get(this.pagination, "hasNext", false);
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
const _hoisted_1$h = {
  key: 0,
  class: "k-pagination"
};
const _hoisted_2$8 = { class: "k-pagination-buttons" };
const _hoisted_3$3 = {
  key: 0,
  class: "k-pagination-button"
};
const _hoisted_4$2 = /* @__PURE__ */ createElementVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ createElementVNode("path", { d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" })
], -1);
const _hoisted_5$1 = [
  _hoisted_4$2
];
const _hoisted_6$1 = { key: 0 };
const _hoisted_7 = ["onClick"];
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
function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_KSelect = resolveComponent("KSelect");
  return $props.pagination.hasOtherPages ? (openBlock(), createElementBlock("div", _hoisted_1$h, [
    createVNode(_component_KSelect, {
      modelValue: $options.pageSize,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $options.pageSize = $event),
      items: $options.pageSizes,
      label: "Page Size"
    }, null, 8, ["modelValue", "items"]),
    createElementVNode("div", _hoisted_2$8, [
      $options.hasPrevious ? (openBlock(), createElementBlock("a", _hoisted_3$3, _hoisted_5$1)) : createCommentVNode("", true),
      (openBlock(true), createElementBlock(Fragment, null, renderList($options.pageRange, (page) => {
        return openBlock(), createElementBlock(Fragment, { key: page }, [
          page == "|" ? (openBlock(), createElementBlock("div", _hoisted_6$1, " ... ")) : (openBlock(), createElementBlock("a", {
            key: 1,
            class: normalizeClass(["k-pagination-button k-pagination-button-border", $options.classObj(page)]),
            onClick: ($event) => _ctx.$emit("update:modelValue", page)
          }, toDisplayString(page), 11, _hoisted_7))
        ], 64);
      }), 128)),
      $options.hasNext ? (openBlock(), createElementBlock("a", _hoisted_8, _hoisted_10)) : createCommentVNode("", true)
    ]),
    createElementVNode("div", null, " Displaying " + toDisplayString($props.pagination.startIndex) + "-" + toDisplayString($props.pagination.endIndex) + " of " + toDisplayString($props.pagination.count) + " items. ", 1)
  ])) : createCommentVNode("", true);
}
var KPagination = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$j]]);
var __glob_2_17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": KPagination
}, Symbol.toStringTag, { value: "Module" }));
var KRadioGroup_vue_vue_type_style_index_0_lang = "";
const _sfc_main$j = {
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
      return this.isObject(item) ? lodash_get(item, this.itemText) : item;
    },
    getItemValue(item) {
      return this.isObject(item) ? lodash_get(item, this.itemValue) : item;
    },
    getItemDisabled(item) {
      return this.isObject(item) ? lodash_get(item, "disabled", false) : false;
    }
  }
};
const _hoisted_1$g = ["id", "value", "disabled"];
const _hoisted_2$7 = ["for"];
function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
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
                  }, null, 8, _hoisted_1$g), [
                    [vModelRadio, $options.localValue]
                  ]),
                  createElementVNode("label", {
                    for: $options.getItemValue(item)
                  }, toDisplayString($options.getItemText(item)), 9, _hoisted_2$7)
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
var KRadioGroup = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$i]]);
var __glob_2_18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": KRadioGroup
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$i = {
  inject: ["ksnackbar"],
  methods: {
    click() {
      this.ksnackbar.success("hello");
    }
  }
};
function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    createElementVNode("button", {
      onClick: _cache[0] || (_cache[0] = (...args) => $options.click && $options.click(...args))
    }, " click ")
  ]);
}
var KScratch = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$h]]);
var __glob_2_19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": KScratch
}, Symbol.toStringTag, { value: "Module" }));
var KSelect_vue_vue_type_style_index_0_lang = "";
const _sfc_main$h = {
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
      return this.isObject(item) ? lodash_get(item, this.itemText) : item;
    },
    getItemValue(item) {
      return this.isObject(item) ? lodash_get(item, this.itemValue) : item;
    },
    arrify(item) {
      return Array.isArray(item) ? item : [item];
    }
  }
};
const _hoisted_1$f = { class: "k-select" };
const _hoisted_2$6 = ["value"];
function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_KSpinner = resolveComponent("KSpinner");
  const _component_KFormFieldWrapper = resolveComponent("KFormFieldWrapper");
  return openBlock(), createElementBlock("div", null, [
    createVNode(_component_KFormFieldWrapper, {
      label: _ctx.label,
      "success-messages": _ctx.successMessages,
      "error-messages": _ctx.errorMessages
    }, {
      default: withCtx(() => [
        createElementVNode("div", _hoisted_1$f, [
          withDirectives(createElementVNode("select", {
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $options.localValue = $event),
            class: normalizeClass(_ctx.classObj)
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList($props.items, (item) => {
              return openBlock(), createElementBlock("option", {
                key: $options.getItemValue(item),
                value: $options.getItemValue(item)
              }, toDisplayString($options.getItemText(item)), 9, _hoisted_2$6);
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
var KSelect = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$g]]);
var __glob_2_20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": KSelect
}, Symbol.toStringTag, { value: "Module" }));
var KSnackbar_vue_vue_type_style_index_0_lang = "";
const _sfc_main$g = {
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
const _hoisted_1$e = { class: "k-snackbar" };
const _hoisted_2$5 = { class: "k-snackbar-item-message" };
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
function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    renderSlot(_ctx.$slots, "default"),
    createElementVNode("div", _hoisted_1$e, [
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
              createElementVNode("div", _hoisted_2$5, [
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
var KSnackbar = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f]]);
var __glob_2_21 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": KSnackbar
}, Symbol.toStringTag, { value: "Module" }));
var KSortHeader_vue_vue_type_style_index_0_lang = "";
const _sfc_main$f = {
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
const _hoisted_1$d = {
  key: 0,
  class: "j-sort-header-arrow"
};
const _hoisted_2$4 = {
  key: 1,
  class: "j-sort-header-arrow"
};
function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
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
        $options.isActive && $options.sortAsc ? (openBlock(), createElementBlock("span", _hoisted_1$d, "\u2193")) : $options.isActive ? (openBlock(), createElementBlock("span", _hoisted_2$4, "\u2191")) : createCommentVNode("", true)
      ]),
      _: 1
    })
  ]);
}
var KSortHeader = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e]]);
var __glob_2_22 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": KSortHeader
}, Symbol.toStringTag, { value: "Module" }));
var KSpacer_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$e = {};
const _hoisted_1$c = { class: "k-spacer" };
function _sfc_render$d(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$c);
}
var KSpacer = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__scopeId", "data-v-3b45ed3e"]]);
var __glob_2_23 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": KSpacer
}, Symbol.toStringTag, { value: "Module" }));
var KSpinner_vue_vue_type_style_index_0_lang = "";
const __default__$1 = {
  mixins: [measurables],
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
    "3c497448": _ctx.color
  }));
};
const __setup__$1 = __default__$1.setup;
__default__$1.setup = __setup__$1 ? (props, ctx) => {
  __injectCSSVars__$1();
  return __setup__$1(props, ctx);
} : __injectCSSVars__$1;
const _sfc_main$d = __default__$1;
const _hoisted_1$b = /* @__PURE__ */ createElementVNode("circle", {
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1);
const _hoisted_2$3 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_1$b,
  _hoisted_2$3
];
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    style: normalizeStyle([_ctx.measurableStyles]),
    class: "k-spinner",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, _hoisted_3$1, 4);
}
var KSpinner = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c]]);
var __glob_2_24 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": KSpinner
}, Symbol.toStringTag, { value: "Module" }));
var KSwitch_vue_vue_type_style_index_0_lang = "";
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
    "9e4f3e2a": _ctx.switchWidthPx,
    "cd254ac4": _ctx.heightPx,
    "d07a5720": _ctx.innerSizePx,
    "ed6a8a6c": _ctx.paddingPx,
    "0ecfb03e": _ctx.transPx
  }));
};
const __setup__ = __default__.setup;
__default__.setup = __setup__ ? (props, ctx) => {
  __injectCSSVars__();
  return __setup__(props, ctx);
} : __injectCSSVars__;
const _sfc_main$c = __default__;
const _hoisted_1$a = /* @__PURE__ */ createElementVNode("span", { class: "k-switch-slider" }, null, -1);
const _hoisted_2$2 = [
  _hoisted_1$a
];
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["k-switch", $options.classObj]),
    onClick: _cache[0] || (_cache[0] = ($event) => $options.on = !$options.on)
  }, _hoisted_2$2, 2);
}
var KSwitch = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b]]);
var __glob_2_25 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": KSwitch
}, Symbol.toStringTag, { value: "Module" }));
var KTable_vue_vue_type_style_index_0_lang = "";
const _sfc_main$b = {
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
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
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
var KTable = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a]]);
var __glob_2_26 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": KTable
}, Symbol.toStringTag, { value: "Module" }));
var KTextArea_vue_vue_type_style_index_0_lang = "";
const _sfc_main$a = {
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
const _hoisted_1$9 = ["rows"];
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_KFormFieldWrapper = resolveComponent("KFormFieldWrapper");
  return openBlock(), createElementBlock("div", null, [
    createVNode(_component_KFormFieldWrapper, {
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
        }), null, 16, _hoisted_1$9), [
          [vModelText, $options.valueLocal]
        ])
      ]),
      _: 1
    }, 8, ["label", "success-messages", "error-messages"])
  ]);
}
var KTextArea = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9]]);
var __glob_2_27 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": KTextArea
}, Symbol.toStringTag, { value: "Module" }));
var KTextField_vue_vue_type_style_index_0_lang = "";
const _sfc_main$9 = {
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
const _hoisted_1$8 = ["placeholder"];
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_KFormFieldWrapper = resolveComponent("KFormFieldWrapper");
  return openBlock(), createElementBlock("div", null, [
    createVNode(_component_KFormFieldWrapper, {
      label: _ctx.label,
      "success-messages": _ctx.successMessages,
      "error-messages": _ctx.errorMessages
    }, {
      default: withCtx(() => [
        withDirectives(createElementVNode("input", {
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $options.value = $event),
          class: normalizeClass(["k-input-text-field", _ctx.classObj]),
          placeholder: $props.placeholder
        }, null, 10, _hoisted_1$8), [
          [vModelText, $options.value]
        ])
      ]),
      _: 1
    }, 8, ["label", "success-messages", "error-messages"])
  ]);
}
var KTextField = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8]]);
var __glob_2_28 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": KTextField
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$8 = {
  mixins: [measurables],
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
      return lodash_get(this.userRec, "type", this.type);
    },
    url() {
      if (this.userType == 0) {
        return `${this.$img}guy.gif`;
      } else if (this.userType == 1) {
        return `${this.$img}2-guys.gif`;
      } else if (this.userType > 0) {
        return `${this.$img}projectgroup.gif`;
      } else {
        return null;
      }
    }
  }
};
const _hoisted_1$7 = ["src"];
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return $options.url ? (openBlock(), createElementBlock("img", {
    key: 0,
    src: $options.url,
    style: normalizeStyle([_ctx.measurableStyles])
  }, null, 12, _hoisted_1$7)) : createCommentVNode("", true);
}
var KUserGIF = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7]]);
var __glob_2_29 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": KUserGIF
}, Symbol.toStringTag, { value: "Module" }));
var KUserLink_vue_vue_type_style_index_0_lang = "";
const _sfc_main$7 = {
  props: {
    user: {
      type: [Number, Object],
      default: null
    },
    userRec: {
      type: Object,
      default: null
    },
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
      userRecLocal: null
    };
  },
  computed: {
    userIdLocal() {
      var _a;
      return (_a = lodash_get(this.userRecLocal, "id")) != null ? _a : lodash_get(this.userRecLocal, "userid");
    },
    userLocal() {
      var _a, _b;
      return (_b = (_a = this.user) != null ? _a : this.userid) != null ? _b : this.userRec;
    },
    displayName() {
      var _a, _b;
      return (_b = (_a = lodash_get(this.userRecLocal, "display_name")) != null ? _a : lodash_get(this.userRecLocal, "displayname")) != null ? _b : lodash_get(this.userRecLocal, "name");
    },
    type() {
      return lodash_get(this.userRecLocal, "type");
    }
  },
  watch: {
    userLocal: {
      async handler(value) {
        if (this.isInteger(value)) {
          const response = await this.$session.members.member(value, "v1");
          this.userRecLocal = lodash_get(response, "data.data");
        } else {
          this.userRecLocal = value;
        }
      },
      immediate: true
    }
  },
  methods: {
    isInteger(value) {
      return !isNaN(value) && typeof value == "number";
    },
    click() {
      window.baseUrl = window.baseURL;
      window.doUserDialog(this.userIdLocal);
    }
  }
};
const _hoisted_1$6 = {
  key: 0,
  class: "k-user-link"
};
const _hoisted_2$1 = /* @__PURE__ */ createTextVNode("\xA0");
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_KUserGIF = resolveComponent("KUserGIF");
  return $data.userRecLocal ? (openBlock(), createElementBlock("span", _hoisted_1$6, [
    $props.gif ? (openBlock(), createBlock(_component_KUserGIF, {
      key: 0,
      "user-rec": $data.userRecLocal
    }, null, 8, ["user-rec"])) : createCommentVNode("", true),
    _hoisted_2$1,
    createElementVNode("a", {
      href: "#",
      onClick: _cache[0] || (_cache[0] = withModifiers((...args) => $options.click && $options.click(...args), ["prevent"]))
    }, toDisplayString($options.displayName), 1)
  ])) : createCommentVNode("", true);
}
var KUserLink = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6]]);
var __glob_2_30 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": KUserLink
}, Symbol.toStringTag, { value: "Module" }));
var FUNC_ERROR_TEXT = "Expected a function";
var NAN = 0 / 0;
var symbolTag = "[object Symbol]";
var reTrim = /^\s+|\s+$/g;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal || freeSelf || Function("return this")();
var objectProto = Object.prototype;
var objectToString = objectProto.toString;
var nativeMax = Math.max, nativeMin = Math.min;
var now = function() {
  return root.Date.now();
};
function debounce(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject$3(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result2 = wait - timeSinceLastCall;
    return maxing ? nativeMin(result2, maxWait - timeSinceLastInvoke) : result2;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now());
  }
  function debounced() {
    var time = now(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
function isObject$3(value) {
  var type = typeof value;
  return !!value && (type == "object" || type == "function");
}
function isObjectLike(value) {
  return !!value && typeof value == "object";
}
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject$3(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject$3(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, "");
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var lodash_debounce = debounce;
const semaphore = new src();
class UserLookup {
  constructor() {
    this.users = {};
  }
  registerUsers(items) {
    items.forEach((user) => {
      this.users[user.value] = user;
    });
  }
  async lookup(session, userId) {
    try {
      await semaphore.acquire(userId);
      if (!this.users[userId]) {
        const response = await session.members.member(userId, "v1");
        const value = lodash_get(response, "data.data.id");
        const type = lodash_get(response, "data.data.type");
        const text = lodash_get(response, "data.data.name");
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
var KUserPicker_vue_vue_type_style_index_0_lang = "";
const userLookup = new UserLookup();
const _sfc_main$6 = {
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
    combobox: {
      type: Boolean,
      default: false
    },
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
      return this.$session.members.USER;
    },
    GROUP() {
      return this.$session.members.GROUP;
    },
    localValue: {
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
    querySelections: lodash_debounce(async function(v) {
      try {
        this.loading = true;
        const response = await this.$session.members.userQuery(v, this.options, "v1");
        this.items = response.data.data.map((item) => ({
          text: lodash_get(item, "name_formatted"),
          value: lodash_get(item, "id"),
          type: lodash_get(item, "type")
        }));
        userLookup.registerUsers(this.items);
      } finally {
        this.loading = false;
      }
    }, 500),
    formatChoice(item) {
      return lodash_get(item, "text", "");
    },
    async loadInitialValue() {
      const initialValue = this.modelValue;
      if (initialValue && !this.combobox) {
        try {
          this.pleaseWait = true;
          this.readonly = true;
          this.loading = true;
          const user = await userLookup.lookup(this.$session, initialValue);
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
};
const _hoisted_1$5 = ["innerHTML"];
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_KUserGIF = resolveComponent("KUserGIF");
  const _component_KAutocomplete = resolveComponent("KAutocomplete");
  const _component_KUserLink = resolveComponent("KUserLink");
  return $props.editable ? (openBlock(), createBlock(_component_KAutocomplete, {
    key: 0,
    modelValue: $options.localValue,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $options.localValue = $event),
    "search-input": $data.searchText,
    "onUpdate:search-input": _cache[1] || (_cache[1] = ($event) => $data.searchText = $event),
    class: "k-user-picker",
    placeholder: $options.placeholder,
    width: $props.width,
    loading: $data.loading,
    items: $data.items,
    "return-object": $props.returnObject,
    combobox: $props.combobox
  }, {
    prepend: withCtx(({ item }) => [
      createVNode(_component_KUserGIF, { "user-rec": item }, null, 8, ["user-rec"])
    ]),
    item: withCtx(({ item }) => [
      createVNode(_component_KUserGIF, {
        type: item.type
      }, null, 8, ["type"]),
      createElementVNode("span", {
        innerHTML: $options.formatChoice(item)
      }, null, 8, _hoisted_1$5)
    ]),
    _: 1
  }, 8, ["modelValue", "search-input", "placeholder", "width", "loading", "items", "return-object", "combobox"])) : (openBlock(), createBlock(_component_KUserLink, {
    key: 1,
    user: $props.modelValue,
    gif: ""
  }, null, 8, ["user"]));
}
var KUserPicker = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5]]);
var __glob_2_31 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": KUserPicker
}, Symbol.toStringTag, { value: "Module" }));
var clickable = {
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
      let data2 = {};
      if (this.href) {
        tag = "a";
        data2 = {
          attrs: {
            href: this.href,
            target: this.target
          }
        };
      } else if (this.to) {
        tag = this.nuxt ? "nuxt-link" : "router-link";
        data2 = {
          props: {
            to: this.to
          }
        };
      }
      return { tag, data: data2 };
    }
  }
};
var KCard_vue_vue_type_style_index_0_lang = "";
const _sfc_main$5 = {
  mixins: [measurables, clickable],
  computed: {
    classObj() {
      return {
        "k-card": true,
        "k-card-clickable": this.isClickable
      };
    }
  },
  methods: {
    renderCard() {
      const { tag, data: data2 } = this.generateRouteLink();
      return h(tag, __spreadProps(__spreadValues({}, data2), {
        class: this.classObj,
        style: [this.measurableStyles]
      }), [...this.$slots.default()]);
    }
  },
  render() {
    return this.renderCard();
  }
};
var __glob_2_32 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$5
}, Symbol.toStringTag, { value: "Module" }));
var KCardActions_vue_vue_type_style_index_0_lang = "";
const _sfc_main$4 = {};
const _hoisted_1$4 = { class: "k-card-actions" };
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$4, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var KCardActions = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
var __glob_2_33 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": KCardActions
}, Symbol.toStringTag, { value: "Module" }));
var KCardText_vue_vue_type_style_index_0_lang = "";
const _sfc_main$3 = {};
const _hoisted_1$3 = { class: "k-card-text" };
function _sfc_render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$3, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var KCardText = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
var __glob_2_34 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": KCardText
}, Symbol.toStringTag, { value: "Module" }));
var KCardTitle_vue_vue_type_style_index_0_lang = "";
const _sfc_main$2 = {};
const _hoisted_1$2 = { class: "k-card-title" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var KCardTitle = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
var __glob_2_35 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": KCardTitle
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
      return this.name == lodash_get(this.tabs, "selectedTab");
    }
  }
};
const _hoisted_1$1 = { key: 0 };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return $options.isSelected ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
    renderSlot(_ctx.$slots, "default")
  ])) : createCommentVNode("", true);
}
var KTabItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
var __glob_2_36 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": KTabItem
}, Symbol.toStringTag, { value: "Module" }));
var KTabs_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  provide() {
    return {
      tabs: this
    };
  },
  data() {
    return {
      selectedTab: null
    };
  },
  computed: {
    tabs() {
      return this.$slots.default().filter((item) => Boolean(item.props));
    }
  },
  mounted() {
    const hash = window.location.hash.replace("#", "");
    const firstTab = lodash_get(this.tabs, "[0].props.name");
    this.selectedTab = [hash, firstTab].find((item) => Boolean(item));
  },
  methods: {
    selectTab(tab) {
      this.selectedTab = lodash_get(tab, "props.name");
    },
    classObj(tab) {
      return {
        "k-tabs-nav-tab": true,
        "k-tabs-active": this.selectedTab == lodash_get(tab, "props.name")
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
            onClick: ($event) => $options.selectTab(tab)
          }, toDisplayString(tab.props.title), 9, _hoisted_3)
        ], 2);
      }), 128))
    ]),
    createElementVNode("div", _hoisted_4, [
      renderSlot(_ctx.$slots, "default")
    ])
  ]);
}
var KTabs = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
var __glob_2_37 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": KTabs
}, Symbol.toStringTag, { value: "Module" }));
var axios$3 = { exports: {} };
var bind$2 = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};
var bind$1 = bind$2;
var toString = Object.prototype.toString;
function isArray(val) {
  return Array.isArray(val);
}
function isUndefined(val) {
  return typeof val === "undefined";
}
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
}
function isArrayBuffer(val) {
  return toString.call(val) === "[object ArrayBuffer]";
}
function isFormData(val) {
  return toString.call(val) === "[object FormData]";
}
function isArrayBufferView(val) {
  var result;
  if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && isArrayBuffer(val.buffer);
  }
  return result;
}
function isString(val) {
  return typeof val === "string";
}
function isNumber(val) {
  return typeof val === "number";
}
function isObject$2(val) {
  return val !== null && typeof val === "object";
}
function isPlainObject(val) {
  if (toString.call(val) !== "[object Object]") {
    return false;
  }
  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}
function isDate(val) {
  return toString.call(val) === "[object Date]";
}
function isFile(val) {
  return toString.call(val) === "[object File]";
}
function isBlob(val) {
  return toString.call(val) === "[object Blob]";
}
function isFunction(val) {
  return toString.call(val) === "[object Function]";
}
function isStream(val) {
  return isObject$2(val) && isFunction(val.pipe);
}
function isURLSearchParams(val) {
  return toString.call(val) === "[object URLSearchParams]";
}
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
}
function isStandardBrowserEnv() {
  if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) {
    return false;
  }
  return typeof window !== "undefined" && typeof document !== "undefined";
}
function forEach(obj, fn) {
  if (obj === null || typeof obj === "undefined") {
    return;
  }
  if (typeof obj !== "object") {
    obj = [obj];
  }
  if (isArray(obj)) {
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}
function merge() {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }
  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === "function") {
      a[key] = bind$1(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}
function stripBOM(content) {
  if (content.charCodeAt(0) === 65279) {
    content = content.slice(1);
  }
  return content;
}
var utils$e = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isObject: isObject$2,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isFunction,
  isStream,
  isURLSearchParams,
  isStandardBrowserEnv,
  forEach,
  merge,
  extend,
  trim,
  stripBOM
};
var utils$d = utils$e;
function encode(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var buildURL$2 = function buildURL(url, params, paramsSerializer) {
  if (!params) {
    return url;
  }
  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils$d.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];
    utils$d.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === "undefined") {
        return;
      }
      if (utils$d.isArray(val)) {
        key = key + "[]";
      } else {
        val = [val];
      }
      utils$d.forEach(val, function parseValue(v) {
        if (utils$d.isDate(v)) {
          v = v.toISOString();
        } else if (utils$d.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + "=" + encode(v));
      });
    });
    serializedParams = parts.join("&");
  }
  if (serializedParams) {
    var hashmarkIndex = url.indexOf("#");
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
  }
  return url;
};
var utils$c = utils$e;
function InterceptorManager$1() {
  this.handlers = [];
}
InterceptorManager$1.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled,
    rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};
InterceptorManager$1.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};
InterceptorManager$1.prototype.forEach = function forEach2(fn) {
  utils$c.forEach(this.handlers, function forEachHandler(h2) {
    if (h2 !== null) {
      fn(h2);
    }
  });
};
var InterceptorManager_1 = InterceptorManager$1;
var utils$b = utils$e;
var normalizeHeaderName$1 = function normalizeHeaderName(headers, normalizedName) {
  utils$b.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};
var enhanceError$2 = function enhanceError(error, config, code, request2, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request2;
  error.response = response;
  error.isAxiosError = true;
  error.toJSON = function toJSON() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  };
  return error;
};
var enhanceError$1 = enhanceError$2;
var createError$2 = function createError(message, config, code, request2, response) {
  var error = new Error(message);
  return enhanceError$1(error, config, code, request2, response);
};
var createError$1 = createError$2;
var settle$1 = function settle(resolve, reject, response) {
  var validateStatus2 = response.config.validateStatus;
  if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
    resolve(response);
  } else {
    reject(createError$1("Request failed with status code " + response.status, response.config, null, response.request, response));
  }
};
var utils$a = utils$e;
var cookies$1 = utils$a.isStandardBrowserEnv() ? function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name + "=" + encodeURIComponent(value));
      if (utils$a.isNumber(expires)) {
        cookie.push("expires=" + new Date(expires).toGMTString());
      }
      if (utils$a.isString(path)) {
        cookie.push("path=" + path);
      }
      if (utils$a.isString(domain)) {
        cookie.push("domain=" + domain);
      }
      if (secure === true) {
        cookie.push("secure");
      }
      document.cookie = cookie.join("; ");
    },
    read: function read(name) {
      var match2 = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
      return match2 ? decodeURIComponent(match2[3]) : null;
    },
    remove: function remove(name) {
      this.write(name, "", Date.now() - 864e5);
    }
  };
}() : function nonStandardBrowserEnv() {
  return {
    write: function write() {
    },
    read: function read() {
      return null;
    },
    remove: function remove() {
    }
  };
}();
var isAbsoluteURL$1 = function isAbsoluteURL(url) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
};
var combineURLs$1 = function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
};
var isAbsoluteURL2 = isAbsoluteURL$1;
var combineURLs2 = combineURLs$1;
var buildFullPath$1 = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL2(requestedURL)) {
    return combineURLs2(baseURL, requestedURL);
  }
  return requestedURL;
};
var utils$9 = utils$e;
var ignoreDuplicateOf = [
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
];
var parseHeaders$1 = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;
  if (!headers) {
    return parsed;
  }
  utils$9.forEach(headers.split("\n"), function parser(line) {
    i = line.indexOf(":");
    key = utils$9.trim(line.substr(0, i)).toLowerCase();
    val = utils$9.trim(line.substr(i + 1));
    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === "set-cookie") {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
      }
    }
  });
  return parsed;
};
var utils$8 = utils$e;
var isURLSameOrigin$1 = utils$8.isStandardBrowserEnv() ? function standardBrowserEnv2() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement("a");
  var originURL;
  function resolveURL(url) {
    var href = url;
    if (msie) {
      urlParsingNode.setAttribute("href", href);
      href = urlParsingNode.href;
    }
    urlParsingNode.setAttribute("href", href);
    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
    };
  }
  originURL = resolveURL(window.location.href);
  return function isURLSameOrigin2(requestURL) {
    var parsed = utils$8.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() : function nonStandardBrowserEnv2() {
  return function isURLSameOrigin2() {
    return true;
  };
}();
function Cancel$3(message) {
  this.message = message;
}
Cancel$3.prototype.toString = function toString2() {
  return "Cancel" + (this.message ? ": " + this.message : "");
};
Cancel$3.prototype.__CANCEL__ = true;
var Cancel_1 = Cancel$3;
var utils$7 = utils$e;
var settle2 = settle$1;
var cookies = cookies$1;
var buildURL$1 = buildURL$2;
var buildFullPath2 = buildFullPath$1;
var parseHeaders2 = parseHeaders$1;
var isURLSameOrigin = isURLSameOrigin$1;
var createError2 = createError$2;
var defaults$4 = defaults_1;
var Cancel$2 = Cancel_1;
var xhr = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    var responseType = config.responseType;
    var onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }
      if (config.signal) {
        config.signal.removeEventListener("abort", onCanceled);
      }
    }
    if (utils$7.isFormData(requestData)) {
      delete requestHeaders["Content-Type"];
    }
    var request2 = new XMLHttpRequest();
    if (config.auth) {
      var username = config.auth.username || "";
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
      requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
    }
    var fullPath = buildFullPath2(config.baseURL, config.url);
    request2.open(config.method.toUpperCase(), buildURL$1(fullPath, config.params, config.paramsSerializer), true);
    request2.timeout = config.timeout;
    function onloadend() {
      if (!request2) {
        return;
      }
      var responseHeaders = "getAllResponseHeaders" in request2 ? parseHeaders2(request2.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === "text" || responseType === "json" ? request2.responseText : request2.response;
      var response = {
        data: responseData,
        status: request2.status,
        statusText: request2.statusText,
        headers: responseHeaders,
        config,
        request: request2
      };
      settle2(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);
      request2 = null;
    }
    if ("onloadend" in request2) {
      request2.onloadend = onloadend;
    } else {
      request2.onreadystatechange = function handleLoad() {
        if (!request2 || request2.readyState !== 4) {
          return;
        }
        if (request2.status === 0 && !(request2.responseURL && request2.responseURL.indexOf("file:") === 0)) {
          return;
        }
        setTimeout(onloadend);
      };
    }
    request2.onabort = function handleAbort() {
      if (!request2) {
        return;
      }
      reject(createError2("Request aborted", config, "ECONNABORTED", request2));
      request2 = null;
    };
    request2.onerror = function handleError() {
      reject(createError2("Network Error", config, null, request2));
      request2 = null;
    };
    request2.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
      var transitional2 = config.transitional || defaults$4.transitional;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError2(timeoutErrorMessage, config, transitional2.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", request2));
      request2 = null;
    };
    if (utils$7.isStandardBrowserEnv()) {
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : void 0;
      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }
    if ("setRequestHeader" in request2) {
      utils$7.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") {
          delete requestHeaders[key];
        } else {
          request2.setRequestHeader(key, val);
        }
      });
    }
    if (!utils$7.isUndefined(config.withCredentials)) {
      request2.withCredentials = !!config.withCredentials;
    }
    if (responseType && responseType !== "json") {
      request2.responseType = config.responseType;
    }
    if (typeof config.onDownloadProgress === "function") {
      request2.addEventListener("progress", config.onDownloadProgress);
    }
    if (typeof config.onUploadProgress === "function" && request2.upload) {
      request2.upload.addEventListener("progress", config.onUploadProgress);
    }
    if (config.cancelToken || config.signal) {
      onCanceled = function(cancel) {
        if (!request2) {
          return;
        }
        reject(!cancel || cancel && cancel.type ? new Cancel$2("canceled") : cancel);
        request2.abort();
        request2 = null;
      };
      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
      }
    }
    if (!requestData) {
      requestData = null;
    }
    request2.send(requestData);
  });
};
var utils$6 = utils$e;
var normalizeHeaderName2 = normalizeHeaderName$1;
var enhanceError2 = enhanceError$2;
var DEFAULT_CONTENT_TYPE = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function setContentTypeIfUnset(headers, value) {
  if (!utils$6.isUndefined(headers) && utils$6.isUndefined(headers["Content-Type"])) {
    headers["Content-Type"] = value;
  }
}
function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== "undefined") {
    adapter = xhr;
  } else if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") {
    adapter = xhr;
  }
  return adapter;
}
function stringifySafely(rawValue, parser, encoder) {
  if (utils$6.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils$6.trim(rawValue);
    } catch (e) {
      if (e.name !== "SyntaxError") {
        throw e;
      }
    }
  }
  return (encoder || JSON.stringify)(rawValue);
}
var defaults$3 = {
  transitional: {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  },
  adapter: getDefaultAdapter(),
  transformRequest: [function transformRequest(data2, headers) {
    normalizeHeaderName2(headers, "Accept");
    normalizeHeaderName2(headers, "Content-Type");
    if (utils$6.isFormData(data2) || utils$6.isArrayBuffer(data2) || utils$6.isBuffer(data2) || utils$6.isStream(data2) || utils$6.isFile(data2) || utils$6.isBlob(data2)) {
      return data2;
    }
    if (utils$6.isArrayBufferView(data2)) {
      return data2.buffer;
    }
    if (utils$6.isURLSearchParams(data2)) {
      setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
      return data2.toString();
    }
    if (utils$6.isObject(data2) || headers && headers["Content-Type"] === "application/json") {
      setContentTypeIfUnset(headers, "application/json");
      return stringifySafely(data2);
    }
    return data2;
  }],
  transformResponse: [function transformResponse(data2) {
    var transitional2 = this.transitional || defaults$3.transitional;
    var silentJSONParsing = transitional2 && transitional2.silentJSONParsing;
    var forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === "json";
    if (strictJSONParsing || forcedJSONParsing && utils$6.isString(data2) && data2.length) {
      try {
        return JSON.parse(data2);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === "SyntaxError") {
            throw enhanceError2(e, this, "E_JSON_PARSE");
          }
          throw e;
        }
      }
    }
    return data2;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      "Accept": "application/json, text/plain, */*"
    }
  }
};
utils$6.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
  defaults$3.headers[method] = {};
});
utils$6.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
  defaults$3.headers[method] = utils$6.merge(DEFAULT_CONTENT_TYPE);
});
var defaults_1 = defaults$3;
var utils$5 = utils$e;
var defaults$2 = defaults_1;
var transformData$1 = function transformData(data2, headers, fns) {
  var context = this || defaults$2;
  utils$5.forEach(fns, function transform(fn) {
    data2 = fn.call(context, data2, headers);
  });
  return data2;
};
var isCancel$1 = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};
var utils$4 = utils$e;
var transformData2 = transformData$1;
var isCancel2 = isCancel$1;
var defaults$1 = defaults_1;
var Cancel$1 = Cancel_1;
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
  if (config.signal && config.signal.aborted) {
    throw new Cancel$1("canceled");
  }
}
var dispatchRequest$1 = function dispatchRequest(config) {
  throwIfCancellationRequested(config);
  config.headers = config.headers || {};
  config.data = transformData2.call(config, config.data, config.headers, config.transformRequest);
  config.headers = utils$4.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
  utils$4.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function cleanHeaderConfig(method) {
    delete config.headers[method];
  });
  var adapter = config.adapter || defaults$1.adapter;
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);
    response.data = transformData2.call(config, response.data, response.headers, config.transformResponse);
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel2(reason)) {
      throwIfCancellationRequested(config);
      if (reason && reason.response) {
        reason.response.data = transformData2.call(config, reason.response.data, reason.response.headers, config.transformResponse);
      }
    }
    return Promise.reject(reason);
  });
};
var utils$3 = utils$e;
var mergeConfig$2 = function mergeConfig(config1, config2) {
  config2 = config2 || {};
  var config = {};
  function getMergedValue(target, source2) {
    if (utils$3.isPlainObject(target) && utils$3.isPlainObject(source2)) {
      return utils$3.merge(target, source2);
    } else if (utils$3.isPlainObject(source2)) {
      return utils$3.merge({}, source2);
    } else if (utils$3.isArray(source2)) {
      return source2.slice();
    }
    return source2;
  }
  function mergeDeepProperties(prop) {
    if (!utils$3.isUndefined(config2[prop])) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (!utils$3.isUndefined(config1[prop])) {
      return getMergedValue(void 0, config1[prop]);
    }
  }
  function valueFromConfig2(prop) {
    if (!utils$3.isUndefined(config2[prop])) {
      return getMergedValue(void 0, config2[prop]);
    }
  }
  function defaultToConfig2(prop) {
    if (!utils$3.isUndefined(config2[prop])) {
      return getMergedValue(void 0, config2[prop]);
    } else if (!utils$3.isUndefined(config1[prop])) {
      return getMergedValue(void 0, config1[prop]);
    }
  }
  function mergeDirectKeys(prop) {
    if (prop in config2) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      return getMergedValue(void 0, config1[prop]);
    }
  }
  var mergeMap = {
    "url": valueFromConfig2,
    "method": valueFromConfig2,
    "data": valueFromConfig2,
    "baseURL": defaultToConfig2,
    "transformRequest": defaultToConfig2,
    "transformResponse": defaultToConfig2,
    "paramsSerializer": defaultToConfig2,
    "timeout": defaultToConfig2,
    "timeoutMessage": defaultToConfig2,
    "withCredentials": defaultToConfig2,
    "adapter": defaultToConfig2,
    "responseType": defaultToConfig2,
    "xsrfCookieName": defaultToConfig2,
    "xsrfHeaderName": defaultToConfig2,
    "onUploadProgress": defaultToConfig2,
    "onDownloadProgress": defaultToConfig2,
    "decompress": defaultToConfig2,
    "maxContentLength": defaultToConfig2,
    "maxBodyLength": defaultToConfig2,
    "transport": defaultToConfig2,
    "httpAgent": defaultToConfig2,
    "httpsAgent": defaultToConfig2,
    "cancelToken": defaultToConfig2,
    "socketPath": defaultToConfig2,
    "responseEncoding": defaultToConfig2,
    "validateStatus": mergeDirectKeys
  };
  utils$3.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    var merge2 = mergeMap[prop] || mergeDeepProperties;
    var configValue = merge2(prop);
    utils$3.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
  });
  return config;
};
var data = {
  "version": "0.26.0"
};
var VERSION = data.version;
var validators$1 = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(type, i) {
  validators$1[type] = function validator2(thing) {
    return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
  };
});
var deprecatedWarnings = {};
validators$1.transitional = function transitional(validator2, version, message) {
  function formatMessage(opt, desc) {
    return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
  }
  return function(value, opt, opts) {
    if (validator2 === false) {
      throw new Error(formatMessage(opt, " has been removed" + (version ? " in " + version : "")));
    }
    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      console.warn(formatMessage(opt, " has been deprecated since v" + version + " and will be removed in the near future"));
    }
    return validator2 ? validator2(value, opt, opts) : true;
  };
};
function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== "object") {
    throw new TypeError("options must be an object");
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator2 = schema[opt];
    if (validator2) {
      var value = options[opt];
      var result = value === void 0 || validator2(value, opt, options);
      if (result !== true) {
        throw new TypeError("option " + opt + " must be " + result);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw Error("Unknown option " + opt);
    }
  }
}
var validator$1 = {
  assertOptions,
  validators: validators$1
};
var utils$2 = utils$e;
var buildURL2 = buildURL$2;
var InterceptorManager = InterceptorManager_1;
var dispatchRequest2 = dispatchRequest$1;
var mergeConfig$1 = mergeConfig$2;
var validator = validator$1;
var validators = validator.validators;
function Axios$1(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}
Axios$1.prototype.request = function request(configOrUrl, config) {
  if (typeof configOrUrl === "string") {
    config = config || {};
    config.url = configOrUrl;
  } else {
    config = configOrUrl || {};
  }
  config = mergeConfig$1(this.defaults, config);
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = "get";
  }
  var transitional2 = config.transitional;
  if (transitional2 !== void 0) {
    validator.assertOptions(transitional2, {
      silentJSONParsing: validators.transitional(validators.boolean),
      forcedJSONParsing: validators.transitional(validators.boolean),
      clarifyTimeoutError: validators.transitional(validators.boolean)
    }, false);
  }
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
      return;
    }
    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });
  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });
  var promise;
  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest2, void 0];
    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);
    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }
    return promise;
  }
  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }
  try {
    promise = dispatchRequest2(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }
  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }
  return promise;
};
Axios$1.prototype.getUri = function getUri(config) {
  config = mergeConfig$1(this.defaults, config);
  return buildURL2(config.url, config.params, config.paramsSerializer).replace(/^\?/, "");
};
utils$2.forEach(["delete", "get", "head", "options"], function forEachMethodNoData2(method) {
  Axios$1.prototype[method] = function(url, config) {
    return this.request(mergeConfig$1(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});
utils$2.forEach(["post", "put", "patch"], function forEachMethodWithData2(method) {
  Axios$1.prototype[method] = function(url, data2, config) {
    return this.request(mergeConfig$1(config || {}, {
      method,
      url,
      data: data2
    }));
  };
});
var Axios_1 = Axios$1;
var Cancel = Cancel_1;
function CancelToken(executor) {
  if (typeof executor !== "function") {
    throw new TypeError("executor must be a function.");
  }
  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });
  var token = this;
  this.promise.then(function(cancel) {
    if (!token._listeners)
      return;
    var i;
    var l = token._listeners.length;
    for (i = 0; i < l; i++) {
      token._listeners[i](cancel);
    }
    token._listeners = null;
  });
  this.promise.then = function(onfulfilled) {
    var _resolve;
    var promise = new Promise(function(resolve) {
      token.subscribe(resolve);
      _resolve = resolve;
    }).then(onfulfilled);
    promise.cancel = function reject() {
      token.unsubscribe(_resolve);
    };
    return promise;
  };
  executor(function cancel(message) {
    if (token.reason) {
      return;
    }
    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};
CancelToken.prototype.subscribe = function subscribe(listener) {
  if (this.reason) {
    listener(this.reason);
    return;
  }
  if (this._listeners) {
    this._listeners.push(listener);
  } else {
    this._listeners = [listener];
  }
};
CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
  if (!this._listeners) {
    return;
  }
  var index2 = this._listeners.indexOf(listener);
  if (index2 !== -1) {
    this._listeners.splice(index2, 1);
  }
};
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token,
    cancel
  };
};
var CancelToken_1 = CancelToken;
var spread = function spread2(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};
var utils$1 = utils$e;
var isAxiosError = function isAxiosError2(payload) {
  return utils$1.isObject(payload) && payload.isAxiosError === true;
};
var utils = utils$e;
var bind2 = bind$2;
var Axios = Axios_1;
var mergeConfig2 = mergeConfig$2;
var defaults = defaults_1;
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind2(Axios.prototype.request, context);
  utils.extend(instance, Axios.prototype, context);
  utils.extend(instance, context);
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig2(defaultConfig, instanceConfig));
  };
  return instance;
}
var axios$2 = createInstance(defaults);
axios$2.Axios = Axios;
axios$2.Cancel = Cancel_1;
axios$2.CancelToken = CancelToken_1;
axios$2.isCancel = isCancel$1;
axios$2.VERSION = data.version;
axios$2.all = function all(promises) {
  return Promise.all(promises);
};
axios$2.spread = spread;
axios$2.isAxiosError = isAxiosError;
axios$3.exports = axios$2;
axios$3.exports.default = axios$2;
var axios$1 = axios$3.exports;
function isNil(value) {
  return value == null;
}
var lodash_isnil = isNil;
var isObject$1 = function isObject(x) {
  return typeof x === "object" && x !== null;
};
var formDataFactory = {
  createFormData() {
    {
      return new FormData();
    }
  }
};
const axios = axios$1;
const get$2 = lodash_get;
const FormDataFactory$1 = formDataFactory;
function getInstance(options) {
  const instance = axios.create(options);
  instance.interceptors.response.use((response) => {
    const otcsticket = get$2(response, "headers.otcsticket");
    if (otcsticket) {
      instance.defaults.headers.common.OTCSTicket = otcsticket;
    }
    return response;
  }, (error) => {
    return Promise.reject(error);
  });
  return instance;
}
function axiosFactory$1(options) {
  const instance = getInstance(options);
  const username = get$2(options, "username");
  const password = get$2(options, "password");
  const otcsticket = get$2(options, "otcsticket");
  if (otcsticket) {
    instance.defaults.headers.common.OTCSTicket = otcsticket;
  } else if (username && password) {
    instance.interceptors.request.use(async (request2) => {
      if (request2.headers.common.OTCSTicket) {
        return request2;
      } else {
        const formData = FormDataFactory$1.createFormData();
        formData.append("username", username);
        formData.append("password", password);
        const response = await axios.post(`${options.baseURL}/api/v1/auth/`, formData);
        request2.headers.common.OTCSTicket = get$2(response, "data.ticket");
        return request2;
      }
    });
  } else {
    throw Error("You must provide an otcsticket or username and password.");
  }
  return instance;
}
var axiosFactory_1 = axiosFactory$1;
var auth$1 = (session) => ({
  auth() {
    return session.get("/api/v1/auth/");
  }
});
var Accession = 834;
var ActiveFolder = 1298;
var Activeview = 30309;
var ActivityManager = 907;
var Alias = 1;
var Appearance = 480;
var AppearanceFolder = 483;
var AppearancesVolume = 481;
var ArchiveFolder = 31711;
var BackupManager = 290;
var BackupProcess = 291;
var BestBets = 274;
var Blog = 356;
var BlogEntry = 357;
var BoxFolder = 530;
var Category = 131;
var CategoryFolder = 132;
var Channel = 207;
var ChannelVol = 209;
var Classification = 199;
var ClassificationTree = 196;
var ClassifiedItems = 194;
var Collection = 298;
var Column = 902;
var Comments = 345;
var CommentsReply = 348;
var CommentsVol = 346;
var CommExpertContainer = 3030338;
var CommExpertGroup = 3030339;
var CommStore = 3030329;
var CommTemplate = 3030002;
var CommTemplateFolder = 3030333;
var CommTemplateVol = 3030004;
var CommURLStore = 3030335;
var CommWorkspace = 3030334;
var CommXSLVolume = 3030205;
var CompoundDoc = 136;
var CompoundEMail = 557;
var ContentModuleFolder = 3030372;
var CustomView = 146;
var CustomViewTemplate = 844;
var DataFlowManager = 270;
var DataSourceFolder = 276;
var DirWalker = 277;
var Discussion = 215;
var DispositionGroup = 602;
var Document = 144;
var DocumentLLNode = 1297;
var DocumentServer = 283;
var Dossier = 32912;
var DossierCabinet = 32916;
var DossierCabinetArchive = 31707;
var DossierTemplate = 32914;
var DossierTemplateFolder = 31709;
var DossierTemplatesVolume = 32917;
var DossierTemplateVolume = 32915;
var DossierVolume = 32913;
var DPSBinding = 31602;
var DPSFolder = 31601;
var DPSVolume = 31603;
var DTDLLNode = 335;
var DynamicView = 900;
var EMail = 749;
var EmailConversationItems = 2504;
var Facet = 904;
var FacetFolder = 905;
var FacetTree = 903;
var FailedFolder = 1299;
var FixedSystemColumn = 906;
var Folder = 0;
var Form = 223;
var Generation = 2;
var GENERICCONTENTMODULE = 3030371;
var GlobalAppearance = 482;
var HoldContainer = 833;
var HTMLConversion = 282;
var HTMLFormView = 226;
var Importer = 293;
var Inbox = 731;
var IndexEngine = 368;
var IndexTracer = 147;
var IndexUpdate = 281;
var InternalOTDS = 924;
var ItemTemplateVol = 541;
var ItemTemplateVolFolder = 542;
var JournalVolume = 361;
var LibraryExtractor = 259;
var LibraryObj = 272;
var LLNodeFAQ = 123475;
var LLNodeFAQEntry = 123476;
var LLNodeForum = 123469;
var LLNodeForumEntry = 123470;
var LLNodeURQuestion = 430;
var LLNodeURReply = 432;
var Locators = 422;
var Mailbox = 732;
var MailStore = 3030331;
var ManagedSpace = 31710;
var MediaType = 410;
var MediaTypesContainer = 414;
var MemcachedFolder = 919;
var MemcachedProcess = 920;
var Merge = 273;
var MicroPost = 1281;
var MicroPostVolume = 1282;
var MultiVolClassification = 372;
var MultiVolClassificationProxy = 374;
var MultiVolClassificationTree = 373;
var MyReservedItems = 870;
var MyWorkbenches = 532;
var NAVMENUVOL = 3030756;
var News = 208;
var OTCIndexObj = 257;
var Partition = 371;
var PartitionMap = 370;
var PersonalComm = 3030203;
var PersonalCommSystemVolume = 3030003;
var PersonalCommVol = 3030204;
var PersonalStagingFolder = 398;
var PersonalWebpage = 3030343;
var PhysicalItemBox = 424;
var PhysicalItemContainer = 412;
var PhysicalItemCopy = 419;
var PhysicalItem_non_Container = 411;
var PhysObjAdmin = 415;
var PhysObjBatchLabels = 418;
var PhysObjCirculation = 416;
var PhysObjReports = 417;
var Poll = 218;
var Process = 271;
var Profile = 195;
var Project = 202;
var ProjectTemplate = 543;
var ProjectVol = 201;
var Prospector = 384;
var ProspectorQueries = 380;
var ProspectorSnapshot = 387;
var Provenance = 829;
var PublishingFolder = 31712;
var PublishingFolderVolume = 31713;
var QAFolder = 441;
var QueryFile = 296;
var QuestionVolume = 431;
var RecentItems = 327;
var RecordType$1 = 425;
var RecordTypesContainer = 428;
var RedForm = 32918;
var RedFormVolume = 32919;
var Release = 138;
var RemoteLLDataSource = 381;
var Reply = 134;
var Report = 299;
var Revision = 139;
var RIMSDisposition = 555;
var RIMSDispositionsContainer = 554;
var RIMSHoldMaintenance = 552;
var RIMSRsiContainer = 553;
var RMAdministration = 556;
var RMClassification = 551;
var RMFolder = 426;
var RMPart = 427;
var RMReportsContainer = 558;
var RMThesaurus = 559;
var ScanConfigurationVolume = 2505;
var ScheduledHoldCriteria = 835;
var ScriptNode = 32901;
var SearchBroker = 258;
var SearchEngine = 369;
var SearchManager = 269;
var SearchReport = 278;
var SearchResultsTemplate = 383;
var SearchTemplate = 292;
var Simplate = 31678;
var SkyPodLLVolume = 49547;
var SliceFolder = 275;
var SocialObject = 1280;
var SocialObjectVolume = 1283;
var SPCJOBDESCR = 797;
var SPCJOBDESCRFOLDER = 796;
var SPCVOLUME = 795;
var spdcommittee = 3030202;
var spdcommitteevol = 3030201;
var spdcommitteevolume = 3030001;
var spdemail = 3030130;
var Spider = 280;
var StorageManagement = 421;
var SubmitVersionNode = 231;
var Task = 206;
var TaskGroup = 205;
var TaskList = 204;
var TaskListVol = 210;
var TaskMilestone = 212;
var Template = 230;
var TemplateFolder = 268;
var TextDocument = 145;
var Topic = 130;
var Transfers = 423;
var TransportBox = 531;
var TransportItem = 526;
var TransportItemPart = 527;
var UrgentRequests = 3030330;
var URL = 140;
var VirtualFolder = 899;
var VolBlog = 123461;
var VolCategories = 133;
var VolClassification = 198;
var VolComments = 347;
var VolDAP = 987352;
var VolDeletedItems = 405;
var VolDirectory = 375;
var VolDiscussion = 143;
var VolDomainWorkspace = 180;
var VolDTD = 336;
var VolEditWorkflow = 162;
var VolFacets = 901;
var VolLibrary = 141;
var VolOrphan = 403;
var VolPersonalStaging = 397;
var VolPerspectives = 908;
var VolPhysObj = 413;
var VolRecMan = 550;
var VolRelease = 137;
var VolReports = 211;
var VolSystem = 148;
var VolTracer = 149;
var VolumeFolder = 484;
var VolumeLLVolume = 1296;
var VolWarehouse = 525;
var VolWorkbin = 142;
var VolWorkflow = 161;
var WarehouseFolder = 529;
var WebFormConnectionVolume = 236;
var WebFormDatabaseConnection = 235;
var WebFormLookup = 234;
var WebFormLookupVolume = 233;
var WebReports = 30303;
var WFMapLLNode = 128;
var WFStatusNode = 190;
var WIKI = 5573;
var WIKIPAGE = 5574;
var Workbench = 528;
var WorkflowAttachments = 154;
var XMLActivatorCon = 286;
var XMLActivatorProd = 285;
var require$$0 = {
  "2WayTee": 294,
  Accession,
  ActiveFolder,
  Activeview,
  ActivityManager,
  Alias,
  Appearance,
  AppearanceFolder,
  AppearancesVolume,
  ArchiveFolder,
  BackupManager,
  BackupProcess,
  BestBets,
  Blog,
  BlogEntry,
  BoxFolder,
  Category,
  CategoryFolder,
  Channel,
  ChannelVol,
  Classification,
  "Classification Shortcut": 197,
  ClassificationTree,
  ClassifiedItems,
  Collection,
  Column,
  Comments,
  CommentsReply,
  CommentsVol,
  CommExpertContainer,
  CommExpertGroup,
  CommStore,
  CommTemplate,
  CommTemplateFolder,
  CommTemplateVol,
  CommURLStore,
  CommWorkspace,
  CommXSLVolume,
  CompoundDoc,
  CompoundEMail,
  ContentModuleFolder,
  "csapps CSApplicationManifest": 32658,
  "csapps CSApplicationsVolume": 32657,
  CustomView,
  CustomViewTemplate,
  DataFlowManager,
  DataSourceFolder,
  DirWalker,
  Discussion,
  DispositionGroup,
  Document,
  DocumentLLNode,
  DocumentServer,
  Dossier,
  DossierCabinet,
  DossierCabinetArchive,
  DossierTemplate,
  DossierTemplateFolder,
  DossierTemplatesVolume,
  DossierTemplateVolume,
  DossierVolume,
  DPSBinding,
  DPSFolder,
  DPSVolume,
  DTDLLNode,
  DynamicView,
  EMail,
  EmailConversationItems,
  "Enterprise Archive Document": 753,
  Facet,
  FacetFolder,
  FacetTree,
  FailedFolder,
  FixedSystemColumn,
  Folder,
  Form,
  Generation,
  GENERICCONTENTMODULE,
  GlobalAppearance,
  HoldContainer,
  HTMLConversion,
  HTMLFormView,
  Importer,
  Inbox,
  IndexEngine,
  IndexTracer,
  IndexUpdate,
  InternalOTDS,
  ItemTemplateVol,
  ItemTemplateVolFolder,
  JournalVolume,
  LibraryExtractor,
  LibraryObj,
  "LLNode Email Folder": 751,
  LLNodeFAQ,
  LLNodeFAQEntry,
  LLNodeForum,
  LLNodeForumEntry,
  LLNodeURQuestion,
  LLNodeURReply,
  Locators,
  Mailbox,
  MailStore,
  ManagedSpace,
  MediaType,
  MediaTypesContainer,
  MemcachedFolder,
  MemcachedProcess,
  Merge,
  MicroPost,
  MicroPostVolume,
  MultiVolClassification,
  MultiVolClassificationProxy,
  MultiVolClassificationTree,
  MyReservedItems,
  MyWorkbenches,
  NAVMENUVOL,
  News,
  OTCIndexObj,
  Partition,
  PartitionMap,
  PersonalComm,
  PersonalCommSystemVolume,
  PersonalCommVol,
  PersonalStagingFolder,
  PersonalWebpage,
  PhysicalItemBox,
  PhysicalItemContainer,
  PhysicalItemCopy,
  PhysicalItem_non_Container,
  PhysObjAdmin,
  PhysObjBatchLabels,
  PhysObjCirculation,
  PhysObjReports,
  Poll,
  Process,
  Profile,
  Project,
  ProjectTemplate,
  ProjectVol,
  Prospector,
  ProspectorQueries,
  ProspectorSnapshot,
  Provenance,
  "Proxy": 260,
  PublishingFolder,
  PublishingFolderVolume,
  QAFolder,
  QueryFile,
  QuestionVolume,
  RecentItems,
  RecordType: RecordType$1,
  RecordTypesContainer,
  RedForm,
  RedFormVolume,
  Release,
  RemoteLLDataSource,
  Reply,
  Report,
  Revision,
  RIMSDisposition,
  RIMSDispositionsContainer,
  RIMSHoldMaintenance,
  RIMSRsiContainer,
  RMAdministration,
  RMClassification,
  RMFolder,
  RMPart,
  RMReportsContainer,
  RMThesaurus,
  ScanConfigurationVolume,
  ScheduledHoldCriteria,
  ScriptNode,
  SearchBroker,
  SearchEngine,
  SearchManager,
  SearchReport,
  SearchResultsTemplate,
  SearchTemplate,
  Simplate,
  SkyPodLLVolume,
  SliceFolder,
  SocialObject,
  SocialObjectVolume,
  SPCJOBDESCR,
  SPCJOBDESCRFOLDER,
  SPCVOLUME,
  spdcommittee,
  spdcommitteevol,
  spdcommitteevolume,
  spdemail,
  Spider,
  StorageManagement,
  SubmitVersionNode,
  Task,
  TaskGroup,
  TaskList,
  TaskListVol,
  TaskMilestone,
  Template,
  TemplateFolder,
  TextDocument,
  Topic,
  Transfers,
  TransportBox,
  TransportItem,
  TransportItemPart,
  UrgentRequests,
  URL,
  VirtualFolder,
  VolBlog,
  VolCategories,
  VolClassification,
  VolComments,
  VolDAP,
  VolDeletedItems,
  VolDirectory,
  VolDiscussion,
  VolDomainWorkspace,
  VolDTD,
  VolEditWorkflow,
  VolFacets,
  VolLibrary,
  VolOrphan,
  VolPersonalStaging,
  VolPerspectives,
  VolPhysObj,
  VolRecMan,
  VolRelease,
  VolReports,
  VolSystem,
  VolTracer,
  VolumeFolder,
  VolumeLLVolume,
  VolWarehouse,
  VolWorkbin,
  VolWorkflow,
  WarehouseFolder,
  WebFormConnectionVolume,
  WebFormDatabaseConnection,
  WebFormLookup,
  WebFormLookupVolume,
  WebReports,
  WFMapLLNode,
  WFStatusNode,
  WIKI,
  WIKIPAGE,
  Workbench,
  WorkflowAttachments,
  XMLActivatorCon,
  XMLActivatorProd
};
const SubTypes = require$$0;
var nodes$1 = (session) => ({
  addablenodetypes(dataid) {
    return session.get(`api/v1/nodes/${dataid}/addablenodetypes`);
  },
  async addDocument({
    parent_id,
    fileHandler,
    apiVersion = "v1",
    name = null,
    options = {}
  }) {
    console.assert(parent_id != null, "parent_id cannot be null");
    console.assert(fileHandler != null, "fileHandler cannot be null");
    console.assert(["v1", "v2"].includes(apiVersion), "apiVersion must be in ['v1','v2']");
    const url = `api/${apiVersion}/nodes`;
    {
      const csName = name || fileHandler.name;
      const params = __spreadProps(__spreadValues({}, options), {
        type: SubTypes.Document,
        name: csName,
        parent_id,
        file: {
          file: fileHandler,
          name: csName
        }
      });
      return session.postForm(url, params);
    }
  },
  async addDocumentMajor({
    parent_id,
    fileHandler,
    name = null,
    description = null,
    options = {}
  }) {
    const response = await this.addDocument({
      parent_id,
      fileHandler,
      name,
      options: __spreadProps(__spreadValues({}, options), {
        advanced_versioning: true
      })
    });
    const dataid = response.data.id;
    await session.versions.promote({
      dataid,
      versionNumber: 1,
      description
    });
    await session.versions.deleteVersion({
      dataid,
      versionNumber: 1
    });
    return response;
  },
  addItem(type, parent_id, name, params = {}) {
    return session.postBody("api/v2/nodes", __spreadValues({
      type,
      parent_id,
      name
    }, params));
  },
  node({ dataid, apiVersion = "v2", params = {} }) {
    return session.get(`api/${apiVersion}/nodes/${dataid}`, {
      params
    });
  },
  ancestors(dataid, params = {}) {
    return session.get(`api/v1/nodes/${dataid}/ancestors`, {
      params
    });
  },
  volumeInfo(objType) {
    return session.get(`api/v1/volumes/${objType}`);
  },
  volumes() {
    return session.get("api/v2/volumes");
  },
  addFolder(parent_id, name, params = {}) {
    return this.addItem(SubTypes.Folder, parent_id, name, params);
  },
  addGeneration(parent_id, name, original_id, version_number, params = {}) {
    return this.addItem(SubTypes.Generation, parent_id, name, __spreadValues({
      original_id,
      version_number
    }, params));
  },
  nodes(dataid, params = {}) {
    return session.get(`api/v2/nodes/${dataid}/nodes`, {
      params
    });
  },
  children(dataid, params = {}) {
    return this.nodes(dataid, params);
  },
  delete(dataid) {
    return session.delete(`api/v1/nodes/${dataid}`);
  },
  download({ dataid, apiVersion = "v1", filePath }) {
    {
      return Promise.reject("Not implemented yet");
    }
  },
  audit({
    dataid,
    apiVersion = "v2",
    params = {}
  }) {
    return session.get(`api/${apiVersion}/nodes/${dataid}/audit`, { params });
  }
});
var workflow$1 = (session) => ({
  start(map_id) {
    return this.draftprocesses(map_id).then((response) => get(response, "data.results.draftprocess_id")).then((draftprocess_id) => this.draftprocesses_update(draftprocess_id));
  },
  draftprocesses(workflow_id) {
    return session.postForm("api/v2/draftprocesses", {
      workflow_id
    });
  },
  draftprocesses_update(draftprocess_id) {
    return session.get("api/v1/forms/draftprocesses/update", {
      params: {
        draftprocess_id
      }
    });
  },
  draftprocesses_put(draftprocess_id, body) {
    return session.putForm(`api/v2/draftprocesses/${draftprocess_id}`, {
      body
    });
  }
});
var rhcore$1 = (session) => ({
  scriptNode(id, params = {}) {
    return session.get(`api/v1/rhcore/${id}`, {
      params
    });
  }
});
var search$1 = (session) => ({
  search(where, params = {}) {
    return session.postBody("api/v2/search", __spreadValues({
      where
    }, params));
  },
  regions(params = {}) {
    return session.get("api/v1/regions", params);
  }
});
var members$1 = (session) => ({
  USER: 0,
  GROUP: 1,
  userQuery(query, options = {}, version = "v2") {
    const params = __spreadValues({
      limit: 20,
      where_type: JSON.stringify([this.USER, this.GROUP]),
      query
    }, options);
    return session.get(`api/${version}/members`, { params });
  },
  member(id, version = "v2") {
    return session.get(`api/${version}/members/${id}`);
  }
});
var versions$1 = (session) => ({
  async addVersion({
    dataid,
    fileHandler,
    apiVersion = "v1",
    fileName = null,
    options = {}
  }) {
    console.assert(dataid != null, "dataid cannot be null");
    console.assert(fileHandler != null, "fileHandler cannot be null");
    const url = `api/${apiVersion}/nodes/${dataid}/versions`;
    {
      const name = fileName || fileHandler.name;
      const params = __spreadValues({
        file: {
          file: fileHandler,
          name
        }
      }, options);
      return session.postForm(url, params);
    }
  },
  async download({
    dataid,
    version,
    filePath
  }) {
    console.assert(dataid != null, "dataid cannot be null");
    console.assert(version != null, "version cannot be null");
    console.assert(filePath != null, "filePath cannot be null");
    {
      return Promise.reject("Not implemented yet");
    }
  },
  async list(dataid) {
    const url = `api/v1/nodes/${dataid}/versions`;
    return session.get(url);
  },
  async version(dataid, version_number = "latest") {
    const url = `api/v1/nodes/${dataid}/versions/${version_number}`;
    return session.get(url);
  },
  async promote({
    dataid,
    versionNumber,
    description = null
  }) {
    console.assert(dataid != null, "dataid cannot be null");
    console.assert(versionNumber != null, "number_to_keep must be an integer");
    const url = `api/v2/nodes/${dataid}/versions/${versionNumber}/promote`;
    return session.postBody(url, __spreadValues({}, !!description && {
      description
    }));
  },
  async deleteVersion({
    dataid,
    versionNumber,
    apiVersion = "v1"
  }) {
    console.assert(dataid != null, "dataid cannot be null");
    console.assert(versionNumber != null, "number_to_keep must be an integer");
    const url = `api/${apiVersion}/nodes/${dataid}/versions/${versionNumber}`;
    return session.delete(url);
  },
  async purge({
    dataid,
    number_to_keep = 1
  }) {
    console.assert(dataid != null, "dataid cannot be null");
    console.assert(!isNaN(number_to_keep), "number_to_keep must be an integer");
    const url = `api/v2/nodes/${dataid}/versions`;
    return session.deleteForm(url, {
      number_to_keep
    });
  }
});
var webreports$1 = (session) => ({
  run(dataid, params = {}) {
    const url = `api/v1/nodes/${dataid}/output`;
    return session.get(url, { params });
  }
});
const isObject2 = isObject$1;
const ErrorCodes = {
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
class CustomError$1 extends Error {
  constructor(message = ErrorCodes.INTERNALERROR.message, data2 = null, code = ErrorCodes.INTERNALERROR.code) {
    if (isObject2(message)) {
      super(message.message);
      this.code = message.code;
      this.data = message.data;
    } else {
      super(message);
      this.code = code;
      this.data = data2;
    }
  }
}
var errorCodes = {
  CustomError: CustomError$1,
  ErrorCodes
};
const {
  CustomError
} = errorCodes;
const get$1 = lodash_get;
const sequence = {
  index: 0,
  get next() {
    this.index = this.index + 1;
    return this.index;
  }
};
var rpcClient = class RPCClient {
  constructor(session, baseURL) {
    this.session = session;
    this.baseURL = baseURL;
    this.resetQueue();
  }
  requestObject(method, params, id) {
    return {
      jsonrpc: "2.0",
      method,
      id,
      params
    };
  }
  handleResponse(data2) {
    if (Object.prototype.hasOwnProperty.call(data2, "result")) {
      return data2.result;
    } else if (Object.prototype.hasOwnProperty.call(data2, "error")) {
      const err = data2.error;
      throw new CustomError(err.message, err.data, err.code);
    } else {
      throw Error("The server did not respond correctly.");
    }
  }
  async request(method, params, id = sequence.next) {
    const response = await this.session.postBody(this.baseURL, {
      rpc: this.requestObject(method, params, id)
    });
    return this.handleResponse(response.data);
  }
  resetQueue() {
    this._batchQueue = [];
  }
  queue(method, params, id = sequence.next) {
    this._batchQueue.push(this.requestObject(method, params, id));
    return this;
  }
  async batch(throwOnError = false) {
    const queue = this._batchQueue;
    this.resetQueue();
    const response = await this.session.postBody(this.baseURL, {
      rpc: queue
    });
    return get$1(response, "data.data", []).map((item) => {
      if (throwOnError) {
        return this.handleResponse(item);
      } else {
        try {
          return this.handleResponse(item);
        } catch (e) {
          return e;
        }
      }
    });
  }
  rhnode(dataid, method, args = [], id = sequence.next) {
    const params = {
      dataid,
      args
    };
    return this.request(method, params, id);
  }
  rhnodeQueue(dataid, method, args = [], id = sequence.next) {
    const params = {
      dataid,
      args
    };
    return this.queue(method, params, id);
  }
};
var AssocType = -18;
var BooleanType = 5;
var ClassType = 9;
var DapiNodeType = -72;
var DapiSessionType = -74;
var DapiStreamType = -68;
var DapiVersionType = -69;
var DateType = -7;
var DynamicType = -127;
var ErrorType = 1;
var FileType = -107;
var FrameType = 10;
var IntegerType = 2;
var JavaObjectType = -42;
var ListType = -2;
var LongType = -8;
var ObjectType = -128;
var ObjRefType = 3;
var RealType = -4;
var RecArrayType = -110;
var RecordType = -109;
var ScriptType = -3;
var SocketType = -102;
var StringType = -1;
var UAPIType = -196;
var UndefinedType = 0;
var VoidType = 8;
var WAPIWorkType = -75;
var require$$12 = {
  AssocType,
  BooleanType,
  ClassType,
  DapiNodeType,
  DapiSessionType,
  DapiStreamType,
  DapiVersionType,
  DateType,
  DynamicType,
  ErrorType,
  FileType,
  FrameType,
  IntegerType,
  JavaObjectType,
  ListType,
  LongType,
  ObjectType,
  ObjRefType,
  RealType,
  RecArrayType,
  RecordType,
  ScriptType,
  SocketType,
  StringType,
  UAPIType,
  UndefinedType,
  VoidType,
  WAPIWorkType
};
const axiosFactory = axiosFactory_1;
const auth = auth$1;
const nodes = nodes$1;
const workflow = workflow$1;
const rhcore = rhcore$1;
const search = search$1;
const members = members$1;
const versions = versions$1;
const webreports = webreports$1;
const FormDataFactory = formDataFactory;
const isnil = lodash_isnil;
const RPCClient2 = rpcClient;
const dataTypesEnum = require$$12;
var Session_1$1 = class Session {
  constructor(options) {
    this.axios = axiosFactory(options);
  }
  get nodes() {
    if (this._nodes == null) {
      this._nodes = nodes(this);
    }
    return this._nodes;
  }
  get auth() {
    if (this._auth == null) {
      this._auth = auth(this);
    }
    return this._auth;
  }
  get workflow() {
    if (this._workflow == null) {
      this._workflow = workflow(this);
    }
    return this._workflow;
  }
  get rhcore() {
    if (this._rhcore == null) {
      this._rhcore = rhcore(this);
    }
    return this._rhcore;
  }
  get members() {
    if (this._members == null) {
      this._members = members(this);
    }
    return this._members;
  }
  get search() {
    if (this._search == null) {
      this._search = search(this);
    }
    return this._search;
  }
  get webreports() {
    if (this._webreports == null) {
      this._webreports = webreports(this);
    }
    return this._webreports;
  }
  get versions() {
    if (this._versions == null) {
      this._versions = versions(this);
    }
    return this._versions;
  }
  get dataTypesEnum() {
    return dataTypesEnum;
  }
  rpcClient(baseURL = "/api/v1/rh/rpc/rhnode/") {
    return new RPCClient2(this, baseURL);
  }
  _isObject(value) {
    return value && typeof value === "object" && value.constructor === Object;
  }
  _isString(value) {
    return typeof value === "string" || value instanceof String;
  }
  _isBoolean(value) {
    return typeof value === "boolean";
  }
  objectToForm(obj) {
    const formData = FormDataFactory.createFormData();
    for (const [key, value] of Object.entries(obj)) {
      if (value && value.name && value.file) {
        formData.append(key, value.file, value.name);
      } else if (Array.isArray(value) || this._isObject(value) || this._isBoolean(value)) {
        formData.append(key, JSON.stringify(value));
      } else if (!isnil(value)) {
        formData.append(key, value);
      }
    }
    return formData;
  }
  get(...args) {
    return this.axios.get(...args);
  }
  putForm(url, params) {
    const formData = this.objectToForm(params);
    return this.put(url, formData);
  }
  postForm(url, params) {
    const formData = this.objectToForm(params);
    return this.post(url, formData, {
      maxBodyLength: Infinity
    });
  }
  patchForm(url, params) {
    const formData = this.objectToForm(params);
    return this.patch(url, formData);
  }
  deleteForm(url, params) {
    const formData = this.objectToForm(params);
    return this.delete(url, formData);
  }
  putBody(url, body) {
    return this.putForm(url, {
      body
    });
  }
  postBody(url, body) {
    return this.postForm(url, {
      body
    });
  }
  patchBody(url, body) {
    return this.patchForm(url, {
      body
    });
  }
  deleteBody(url, body) {
    return this.deleteForm(url, {
      body
    });
  }
  post(...args) {
    return this.axios.post(...args);
  }
  put(...args) {
    return this.axios.put(...args);
  }
  delete(...args) {
    return this.axios.delete(...args);
  }
  options(...args) {
    return this.axios.options(...args);
  }
  patch(...args) {
    return this.axios.patch(...args);
  }
};
const Session2 = Session_1$1;
var Session_1 = Session2;
var styles = "";
var index = {
  install(Vue, options) {
    const components = { "./components/KAdminLink.vue": __glob_2_0, "./components/KApp.vue": __glob_2_1, "./components/KAutocomplete.vue": __glob_2_2, "./components/KBrowseLink.vue": __glob_2_3, "./components/KButton.vue": __glob_2_4, "./components/KConfirm.vue": __glob_2_5, "./components/KDateTimePicker.vue": __glob_2_6, "./components/KDialog.vue": __glob_2_7, "./components/KDot.vue": __glob_2_8, "./components/KFormFieldWrapper.vue": __glob_2_9, "./components/KFunctionMenu.vue": __glob_2_10, "./components/KLinearProgressIndicator.vue": __glob_2_11, "./components/KMulti.vue": __glob_2_12, "./components/KNodePickerField.vue": __glob_2_13, "./components/KOneMoment.vue": __glob_2_14, "./components/KPageDropZone.vue": __glob_2_15, "./components/KPageTitle.vue": __glob_2_16, "./components/KPagination.vue": __glob_2_17, "./components/KRadioGroup.vue": __glob_2_18, "./components/KScratch.vue": __glob_2_19, "./components/KSelect.vue": __glob_2_20, "./components/KSnackbar.vue": __glob_2_21, "./components/KSortHeader.vue": __glob_2_22, "./components/KSpacer.vue": __glob_2_23, "./components/KSpinner.vue": __glob_2_24, "./components/KSwitch.vue": __glob_2_25, "./components/KTable.vue": __glob_2_26, "./components/KTextArea.vue": __glob_2_27, "./components/KTextField.vue": __glob_2_28, "./components/KUserGIF.vue": __glob_2_29, "./components/KUserLink.vue": __glob_2_30, "./components/KUserPicker.vue": __glob_2_31, "./components/Card/KCard.vue": __glob_2_32, "./components/Card/KCardActions.vue": __glob_2_33, "./components/Card/KCardText.vue": __glob_2_34, "./components/Card/KCardTitle.vue": __glob_2_35, "./components/Tabs/KTabItem.vue": __glob_2_36, "./components/Tabs/KTabs.vue": __glob_2_37 };
    Object.entries(components).forEach(([path, definition]) => {
      const componentName = path.split("/").pop().replace(/\.\w+$/, "");
      Vue.component(componentName, definition.default);
    });
    Vue.config.globalProperties.$img = options.img;
    Vue.config.globalProperties.$cgi = options.baseURL;
    Vue.config.globalProperties.$jsLongDateFormat = options.datelong;
    Vue.config.globalProperties.$jsShortDateFormat = options.dateshort;
    Vue.config.globalProperties.$session = new Session_1(options);
  }
};
export { index as default };
