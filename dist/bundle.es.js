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
import { openBlock, createElementBlock, Fragment, createElementVNode, resolveDirective, withDirectives, normalizeStyle, renderSlot, normalizeClass, withKeys, withModifiers, vModelText, renderList, createTextVNode, toDisplayString, createCommentVNode, resolveComponent, createBlock, mergeProps, vModelDynamic, createVNode, withCtx, Transition, setBlockTracking, vModelSelect, TransitionGroup, useCssVars, h } from "vue";
var _export_sfc = (sfc, props) => {
  for (const [key, val] of props) {
    sfc[key] = val;
  }
  return sfc;
};
const _sfc_main$p = {};
const _hoisted_1$l = /* @__PURE__ */ createElementVNode("hr", null, null, -1);
const _hoisted_2$a = ["href"];
function _sfc_render$o(_ctx, _cache) {
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1$l,
    createElementVNode("a", {
      href: `${_ctx.$cgi}?func=admin.index`
    }, "Admin Home", 8, _hoisted_2$a)
  ], 64);
}
var KAdminLink = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$o]]);
var __glob_2_0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": KAdminLink
});
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
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? void 0 : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : void 0;
}
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
}
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
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
  var data = this.__data__, index2 = assocIndexOf(data, key);
  if (index2 < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index2 == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index2, 1);
  }
  return true;
}
function listCacheGet(key) {
  var data = this.__data__, index2 = assocIndexOf(data, key);
  return index2 < 0 ? void 0 : data[index2][1];
}
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
function listCacheSet(key, value) {
  var data = this.__data__, index2 = assocIndexOf(data, key);
  if (index2 < 0) {
    data.push([key, value]);
  } else {
    data[index2][1] = value;
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
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
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
const _sfc_main$o = {
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
          this.inputText = lodash_get(this.localValue, this.itemText, "");
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
const _hoisted_1$k = { class: "k-autocomplete-input" };
const _hoisted_2$9 = ["placeholder", "readonly"];
const _hoisted_3$7 = {
  key: 0,
  class: "k-autocomplete-items"
};
const _hoisted_4$4 = ["onClick"];
function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_click_away = resolveDirective("click-away");
  return withDirectives((openBlock(), createElementBlock("div", {
    class: "k-autocomplete",
    style: normalizeStyle([$options.style])
  }, [
    renderSlot(_ctx.$slots, "prepend", { item: $options.localValue }, void 0, true),
    createElementVNode("div", _hoisted_1$k, [
      withDirectives(createElementVNode("input", {
        class: normalizeClass(["k-input", { invalidSelection: !$options.isValidSelection }]),
        ref: "input",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.inputText = $event),
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
      }, null, 42, _hoisted_2$9), [
        [vModelText, $data.inputText]
      ]),
      $data.focus && $props.items.length && !!$data.inputText ? (openBlock(), createElementBlock("div", _hoisted_3$7, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($options.itemsFiltered, (item, index2) => {
          return openBlock(), createElementBlock("div", {
            key: index2,
            class: normalizeClass(["k-autocomplete-item", { "k-autocomplete-active": $data.currentFocus == index2 }]),
            onClick: ($event) => $options.select(index2)
          }, [
            renderSlot(_ctx.$slots, "item", { item }, () => [
              createTextVNode(toDisplayString(item), 1)
            ], true)
          ], 10, _hoisted_4$4);
        }), 128))
      ])) : createCommentVNode("", true)
    ])
  ], 4)), [
    [_directive_click_away, $options.setBlur]
  ]);
}
var KAutocomplete = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$n], ["__scopeId", "data-v-5d5ae3fe"]]);
var __glob_2_1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": KAutocomplete
});
const _sfc_main$n = {
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
const _hoisted_1$j = { key: 0 };
const _hoisted_2$8 = ["src"];
const _hoisted_3$6 = /* @__PURE__ */ createTextVNode("\xA0");
const _hoisted_4$3 = ["href"];
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\xA0");
const _hoisted_6 = /* @__PURE__ */ createTextVNode();
const _hoisted_7 = ["innerHTML"];
function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_KFunctionMenu = resolveComponent("KFunctionMenu");
  return $props.nodeRec ? (openBlock(), createElementBlock("span", _hoisted_1$j, [
    $props.image ? (openBlock(), createElementBlock("img", {
      key: 0,
      src: $props.nodeRec.gif
    }, null, 8, _hoisted_2$8)) : createCommentVNode("", true),
    _hoisted_3$6,
    createElementVNode("a", {
      href: $props.nodeRec.url
    }, toDisplayString($props.nodeRec.name), 9, _hoisted_4$3),
    _hoisted_5,
    $props.clickable ? (openBlock(), createBlock(_component_KFunctionMenu, {
      key: 1,
      dataid: $props.nodeRec.dataid
    }, null, 8, ["dataid"])) : createCommentVNode("", true),
    _hoisted_6,
    createElementVNode("span", {
      innerHTML: $props.nodeRec.modifiedImageCallback
    }, null, 8, _hoisted_7)
  ])) : createCommentVNode("", true);
}
var KBrowseLink = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$m]]);
var __glob_2_2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": KBrowseLink
});
var KButton_vue_vue_type_style_index_0_lang = "";
const _sfc_main$m = {
  emits: ["click"],
  props: {
    small: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classObj() {
      return {
        "k-button--small": this.small
      };
    }
  }
};
function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", mergeProps({
    class: ["k-button", $options.classObj],
    type: "button"
  }, _ctx.$attrs, {
    onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click"))
  }), [
    renderSlot(_ctx.$slots, "default")
  ], 16);
}
var KButton = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$l]]);
var __glob_2_3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": KButton
});
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
  var date = toDate(dirtyDate, dirtyOptions);
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
  var matchResult = pattern.match(/(P+)(p+)?/);
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
const _sfc_main$l = {
  props: {
    modelValue: {
      type: [String, Date],
      default: null
    },
    time: {
      type: Boolean,
      default: false
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
  },
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
  }
};
const _hoisted_1$i = ["type"];
const _hoisted_2$7 = /* @__PURE__ */ createTextVNode("Now");
const _hoisted_3$5 = /* @__PURE__ */ createTextVNode("Clear");
function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_KButton = resolveComponent("KButton");
  return openBlock(), createElementBlock("div", null, [
    withDirectives(createElementVNode("input", {
      class: "k-input",
      type: $options.type,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $options.localModelValue = $event)
    }, null, 8, _hoisted_1$i), [
      [vModelDynamic, $options.localModelValue]
    ]),
    createVNode(_component_KButton, {
      class: "ml-1",
      small: "",
      onClick: $options.setToNow
    }, {
      default: withCtx(() => [
        _hoisted_2$7
      ]),
      _: 1
    }, 8, ["onClick"]),
    createVNode(_component_KButton, {
      class: "ml-1",
      small: "",
      onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("update:modelValue", null))
    }, {
      default: withCtx(() => [
        _hoisted_3$5
      ]),
      _: 1
    })
  ]);
}
var KDateTimePicker = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$k]]);
var __glob_2_4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": KDateTimePicker
});
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
const _sfc_main$k = {
  mixins: [measurables],
  directives: {
    ClickAway: directive
  },
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
  data() {
    return {
      dialog: false
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
const _hoisted_1$h = {
  key: 0,
  class: "k-dialog"
};
function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_click_away = resolveDirective("click-away");
  return openBlock(), createElementBlock(Fragment, null, [
    renderSlot(_ctx.$slots, "activator", { on: $options.on }),
    createVNode(Transition, { name: "fade" }, {
      default: withCtx(() => [
        $data.dialog ? (openBlock(), createElementBlock("div", _hoisted_1$h, [
          withDirectives(createElementVNode("div", {
            ref: "content",
            class: normalizeClass(["k-dialog-content", $options.classObj]),
            style: normalizeStyle([_ctx.measurableStyles])
          }, [
            renderSlot(_ctx.$slots, "default", { on: $options.on })
          ], 6), [
            [_directive_click_away, $options.clickAway]
          ])
        ])) : createCommentVNode("", true)
      ]),
      _: 3
    })
  ], 64);
}
var KDialog = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$j]]);
var __glob_2_5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": KDialog
});
const _sfc_main$j = {
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
const _hoisted_1$g = { key: 0 };
const _hoisted_2$6 = ["id"];
const _hoisted_3$4 = ["src"];
const _hoisted_4$2 = ["id", "src"];
function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.dataid ? (openBlock(), createElementBlock("span", _hoisted_1$g, [
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
      }, null, 8, _hoisted_3$4)) : (openBlock(), createElementBlock("img", {
        key: 1,
        id: $options.xid,
        src: $data.image,
        border: "0",
        alt: "Functions",
        title: "Functions",
        onMouseover: _cache[0] || (_cache[0] = (...args) => $options.onmouseover && $options.onmouseover(...args)),
        onMouseout: _cache[1] || (_cache[1] = (...args) => $options.onmouseout && $options.onmouseout(...args))
      }, null, 40, _hoisted_4$2))
    ], 8, _hoisted_2$6),
    _cache[3] || (setBlockTracking(-1), _cache[3] = createElementVNode("div", {
      id: $options.zid,
      ref: "functionMenuDiv",
      class: "functionMenuDiv"
    }, null, 8, ["id"]), setBlockTracking(1), _cache[3])
  ])) : createCommentVNode("", true);
}
var KFunctionMenu = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$i]]);
var __glob_2_6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": KFunctionMenu
});
var KPageTitle_vue_vue_type_style_index_0_scoped_true_lang = "";
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
const _hoisted_1$f = { key: 0 };
const _hoisted_2$5 = /* @__PURE__ */ createTextVNode(": ");
const _hoisted_3$3 = { class: "rhmuted" };
function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("h1", null, [
    createTextVNode(toDisplayString($props.title), 1),
    $props.subtitle ? (openBlock(), createElementBlock("span", _hoisted_1$f, [
      _hoisted_2$5,
      createElementVNode("span", _hoisted_3$3, toDisplayString($props.subtitle) + " - 2", 1)
    ])) : createCommentVNode("", true)
  ]);
}
var KPageTitle = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$h], ["__scopeId", "data-v-d88a8dd6"]]);
var __glob_2_7 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": KPageTitle
});
const _sfc_main$h = {
  inject: ["ksnackbar"],
  methods: {
    click() {
      this.ksnackbar.success("hello");
    }
  }
};
function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    createElementVNode("button", {
      onClick: _cache[0] || (_cache[0] = (...args) => $options.click && $options.click(...args))
    }, "click")
  ]);
}
var KScratch = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$g]]);
var __glob_2_8 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": KScratch
});
const _sfc_main$g = {
  props: {
    modelValue: {
      type: [String, Object, Number],
      default: null
    },
    items: {
      type: Array,
      default: () => []
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
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      }
    }
  }
};
const _hoisted_1$e = ["value"];
function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("select", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $options.localValue = $event),
    class: "k-input"
  }, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($props.items, (item) => {
      return openBlock(), createElementBlock("option", {
        key: item[$props.itemValue],
        value: item[$props.itemValue]
      }, toDisplayString(item[$props.itemText]), 9, _hoisted_1$e);
    }), 128))
  ], 512)), [
    [vModelSelect, $options.localValue]
  ]);
}
var KSelect = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f]]);
var __glob_2_9 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": KSelect
});
var KSnackbar_vue_vue_type_style_index_0_lang = "";
const _sfc_main$f = {
  data() {
    return {
      index: 0,
      nitems: []
    };
  },
  provide() {
    return {
      ksnackbar: this
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
    nextIndex() {
      this.index += 1;
      return this.index;
    },
    success(msg, timeout = 6e3) {
      this.queue(msg, timeout, "success");
    },
    error(msg, timeout = 6e3) {
      this.queue(msg, timeout, "error");
    },
    queue(msg, timeout, type) {
      const index2 = this.nextIndex();
      this.nitems[index2] = {
        msg,
        index: index2,
        type
      };
      setInterval(() => {
        delete this.nitems[index2];
      }, timeout);
    }
  }
};
const _hoisted_1$d = { class: "k-snackbar" };
function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    renderSlot(_ctx.$slots, "default"),
    createElementVNode("div", _hoisted_1$d, [
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
            }, toDisplayString(item.msg), 3);
          }), 128))
        ]),
        _: 1
      })
    ])
  ], 64);
}
var KSnackbar = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e]]);
var __glob_2_10 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": KSnackbar
});
const _sfc_main$e = {
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
const _hoisted_1$c = /* @__PURE__ */ createTextVNode();
const _hoisted_2$4 = { key: 0 };
const _hoisted_3$2 = { key: 1 };
function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("a", {
    href: "#",
    onClick: _cache[0] || (_cache[0] = withModifiers((...args) => $options.emitClick && $options.emitClick(...args), ["prevent"]))
  }, [
    renderSlot(_ctx.$slots, "default"),
    _hoisted_1$c,
    $options.isActive && $options.sortAsc ? (openBlock(), createElementBlock("span", _hoisted_2$4, "\u2193")) : $options.isActive ? (openBlock(), createElementBlock("span", _hoisted_3$2, "\u2191")) : createCommentVNode("", true)
  ]);
}
var KSortHeader = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d]]);
var __glob_2_11 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": KSortHeader
});
var KSpacer_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$d = {};
const _hoisted_1$b = { class: "k-spacer" };
function _sfc_render$c(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$b);
}
var KSpacer = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__scopeId", "data-v-6a80ea12"]]);
var __glob_2_12 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": KSpacer
});
var KSpinner_vue_vue_type_style_index_0_lang = "";
const _sfc_main$c = {};
const _hoisted_1$a = {
  class: "k-spinner",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
};
const _hoisted_2$3 = /* @__PURE__ */ createElementVNode("circle", {
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1);
const _hoisted_3$1 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1);
const _hoisted_4$1 = [
  _hoisted_2$3,
  _hoisted_3$1
];
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$a, _hoisted_4$1);
}
var KSpinner = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b]]);
var __glob_2_13 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": KSpinner
});
var KSwitch_vue_vue_type_style_index_0_lang = "";
const __default__ = {
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      padding: 4,
      height: 26,
      trans: 20
    };
  },
  methods: {
    clicked() {
      this.on = !this.one;
    }
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
  }
};
const __injectCSSVars__ = () => {
  useCssVars((_ctx) => ({
    "112ec90a": _ctx.switchWidthPx,
    "18f01b1f": _ctx.heightPx,
    "2882b84f": _ctx.innerSizePx,
    "0bbfeb2e": _ctx.paddingPx,
    "592a5980": _ctx.transPx
  }));
};
const __setup__ = __default__.setup;
__default__.setup = __setup__ ? (props, ctx) => {
  __injectCSSVars__();
  return __setup__(props, ctx);
} : __injectCSSVars__;
const _sfc_main$b = __default__;
const _hoisted_1$9 = /* @__PURE__ */ createElementVNode("span", { class: "k-switch-slider" }, null, -1);
const _hoisted_2$2 = [
  _hoisted_1$9
];
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["k-switch", $options.classObj]),
    onClick: _cache[0] || (_cache[0] = ($event) => $options.on = !$options.on)
  }, _hoisted_2$2, 2);
}
var KSwitch = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a]]);
var __glob_2_14 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": KSwitch
});
var KTable_vue_vue_type_style_index_0_lang = "";
const _sfc_main$a = {
  props: {
    properties: {
      type: Boolean,
      default: false
    },
    striped: {
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
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("table", {
    class: normalizeClass(["k-table", $options.classObj])
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var KTable = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9]]);
var __glob_2_15 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": KTable
});
var KTextArea_vue_vue_type_style_index_0_lang = "";
const _sfc_main$9 = {
  inheritAttrs: false,
  props: {
    modelValue: {
      type: String
    },
    rows: {
      type: Number,
      default: 5
    }
  },
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
const _hoisted_1$8 = ["rows"];
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("textarea", mergeProps({
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $options.valueLocal = $event)
  }, _ctx.$attrs, {
    onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers((...args) => $options.tabber && $options.tabber(...args), ["prevent"]), ["tab"])),
    spellcheck: "false",
    class: "k-input k-textarea",
    rows: $props.rows
  }), null, 16, _hoisted_1$8)), [
    [vModelText, $options.valueLocal]
  ]);
}
var KTextArea = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8]]);
var __glob_2_16 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": KTextArea
});
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
var __glob_2_17 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": KUserGIF
});
const _sfc_main$7 = {
  props: {
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
      localUserRec: null
    };
  },
  computed: {
    user_id() {
      return lodash_get(this.localUserRec, "id") || lodash_get(this.localUserRec, "userid");
    },
    displayName() {
      return lodash_get(this.localUserRec, "display_name") || lodash_get(this.localUserRec, "displayname");
    },
    type() {
      return lodash_get(this.localUserRec, "type");
    }
  },
  watch: {
    userid: {
      handler(value) {
        if (value) {
          this.$session.members.member(value, "v1").then((response) => this.localUserRec = lodash_get(response, "data.data"));
        }
      },
      immediate: true
    },
    userRec: {
      handler(value) {
        if (this.userid == null) {
          this.localUserRec = value;
        }
      },
      immediate: true
    }
  },
  methods: {
    click() {
      window.baseUrl = window.baseURL;
      window.doUserDialog(this.user_id);
    }
  }
};
const _hoisted_1$6 = { key: 0 };
const _hoisted_2$1 = /* @__PURE__ */ createTextVNode("\xA0");
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_KUserGIF = resolveComponent("KUserGIF");
  return $data.localUserRec ? (openBlock(), createElementBlock("span", _hoisted_1$6, [
    $props.gif ? (openBlock(), createBlock(_component_KUserGIF, {
      key: 0,
      "user-rec": $data.localUserRec
    }, null, 8, ["user-rec"])) : createCommentVNode("", true),
    _hoisted_2$1,
    createElementVNode("a", {
      href: "#",
      onClick: _cache[0] || (_cache[0] = withModifiers((...args) => $options.click && $options.click(...args), ["prevent"]))
    }, toDisplayString($options.displayName), 1)
  ])) : createCommentVNode("", true);
}
var KUserLink = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6]]);
var __glob_2_18 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": KUserLink
});
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
class SemaphoreItem {
  constructor(max) {
    this.queue = [];
    this.max = max;
    this.count = 0;
  }
  acquire() {
    if (this.count < this.max) {
      this.count++;
      return Promise.resolve();
    } else {
      return new Promise((resolve) => {
        this.queue.push(resolve);
      });
    }
  }
  release() {
    let resolveFunc = this.queue.shift();
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
}
var src = Semaphore;
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
var KUserPicker_vue_vue_type_style_index_0_scoped_true_lang = "";
const userLookup = new UserLookup();
const _sfc_main$6 = {
  props: {
    modelValue: {
      type: [String, Number, Object],
      required: false
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
  }
};
const _hoisted_1$5 = ["innerHTML"];
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_KUserGIF = resolveComponent("KUserGIF");
  const _component_KAutocomplete = resolveComponent("KAutocomplete");
  return openBlock(), createBlock(_component_KAutocomplete, {
    modelValue: $options.localValue,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $options.localValue = $event),
    placeholder: $options.placeholder,
    width: $props.width,
    loading: $data.loading,
    "search-input": $data.searchText,
    "onUpdate:search-input": _cache[1] || (_cache[1] = ($event) => $data.searchText = $event),
    items: $data.items,
    "return-object": $props.returnObject,
    combobox: $props.combobox,
    editable: $props.editable
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
  }, 8, ["modelValue", "placeholder", "width", "loading", "search-input", "items", "return-object", "combobox", "editable"]);
}
var KUserPicker = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__scopeId", "data-v-c73887b6"]]);
var __glob_2_19 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": KUserPicker
});
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
  render() {
    const { tag, data } = this.generateRouteLink();
    return h(tag, __spreadProps(__spreadValues({}, data), { class: this.classObj, style: [this.measurableStyles] }), [...this.$slots.default()]);
  }
};
var __glob_2_20 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$5
});
var KCardActions_vue_vue_type_style_index_0_lang = "";
const _sfc_main$4 = {};
const _hoisted_1$4 = { class: "k-card-actions" };
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$4, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var KCardActions = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
var __glob_2_21 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": KCardActions
});
var KCardText_vue_vue_type_style_index_0_lang = "";
const _sfc_main$3 = {};
const _hoisted_1$3 = { class: "k-card-text" };
function _sfc_render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$3, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var KCardText = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
var __glob_2_22 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": KCardText
});
var KCardTitle_vue_vue_type_style_index_0_lang = "";
const _sfc_main$2 = {};
const _hoisted_1$2 = { class: "k-card-title" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var KCardTitle = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
var __glob_2_23 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": KCardTitle
});
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
      return this.name == this.tabs.selectedTab;
    }
  }
};
const _hoisted_1$1 = { key: 0 };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return $options.isSelected ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
    renderSlot(_ctx.$slots, "default")
  ])) : createCommentVNode("", true);
}
var TabItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
var __glob_2_24 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": TabItem
});
var Tabs_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  provide() {
    return {
      tabs: this
    };
  },
  data() {
    return {
      tabs: [],
      selectedTab: null
    };
  },
  methods: {
    selectTab(tab) {
      this.selectedTab = tab.props.name;
    },
    classObj(tab) {
      return {
        "k-tabs-nav-tab": true,
        "k-tabs-active": this.selectedTab == tab.props.name
      };
    }
  },
  created() {
    this.tabs = this.$slots.default();
    this.selectedTab = lodash_get(this.tabs, "[0].props.name");
  }
};
const _hoisted_1 = { class: "k-tabs" };
const _hoisted_2 = { class: "k-tabs-nav" };
const _hoisted_3 = ["href", "onClick"];
const _hoisted_4 = { class: "k-tabs-content" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("div", _hoisted_2, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($data.tabs, (tab) => {
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
var Tabs = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
var __glob_2_25 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Tabs
});
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
  return toString.call(val) === "[object Array]";
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
  return typeof FormData !== "undefined" && val instanceof FormData;
}
function isArrayBufferView(val) {
  var result;
  if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && val.buffer instanceof ArrayBuffer;
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
  return typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams;
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
var utils$d = {
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
var utils$c = utils$d;
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
  } else if (utils$c.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];
    utils$c.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === "undefined") {
        return;
      }
      if (utils$c.isArray(val)) {
        key = key + "[]";
      } else {
        val = [val];
      }
      utils$c.forEach(val, function parseValue(v) {
        if (utils$c.isDate(v)) {
          v = v.toISOString();
        } else if (utils$c.isObject(v)) {
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
var utils$b = utils$d;
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
  utils$b.forEach(this.handlers, function forEachHandler(h2) {
    if (h2 !== null) {
      fn(h2);
    }
  });
};
var InterceptorManager_1 = InterceptorManager$1;
var utils$a = utils$d;
var normalizeHeaderName$1 = function normalizeHeaderName(headers, normalizedName) {
  utils$a.forEach(headers, function processHeader(value, name2) {
    if (name2 !== normalizedName && name2.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name2];
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
      code: this.code
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
var utils$9 = utils$d;
var cookies$1 = utils$9.isStandardBrowserEnv() ? function standardBrowserEnv() {
  return {
    write: function write(name2, value, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name2 + "=" + encodeURIComponent(value));
      if (utils$9.isNumber(expires)) {
        cookie.push("expires=" + new Date(expires).toGMTString());
      }
      if (utils$9.isString(path)) {
        cookie.push("path=" + path);
      }
      if (utils$9.isString(domain)) {
        cookie.push("domain=" + domain);
      }
      if (secure === true) {
        cookie.push("secure");
      }
      document.cookie = cookie.join("; ");
    },
    read: function read(name2) {
      var match2 = document.cookie.match(new RegExp("(^|;\\s*)(" + name2 + ")=([^;]*)"));
      return match2 ? decodeURIComponent(match2[3]) : null;
    },
    remove: function remove(name2) {
      this.write(name2, "", Date.now() - 864e5);
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
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
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
var utils$8 = utils$d;
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
  utils$8.forEach(headers.split("\n"), function parser(line) {
    i = line.indexOf(":");
    key = utils$8.trim(line.substr(0, i)).toLowerCase();
    val = utils$8.trim(line.substr(i + 1));
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
var utils$7 = utils$d;
var isURLSameOrigin$1 = utils$7.isStandardBrowserEnv() ? function standardBrowserEnv2() {
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
    var parsed = utils$7.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() : function nonStandardBrowserEnv2() {
  return function isURLSameOrigin2() {
    return true;
  };
}();
var utils$6 = utils$d;
var settle2 = settle$1;
var cookies = cookies$1;
var buildURL$1 = buildURL$2;
var buildFullPath2 = buildFullPath$1;
var parseHeaders2 = parseHeaders$1;
var isURLSameOrigin = isURLSameOrigin$1;
var createError2 = createError$2;
var xhr = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    var responseType = config.responseType;
    if (utils$6.isFormData(requestData)) {
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
      settle2(resolve, reject, response);
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
      var timeoutErrorMessage = "timeout of " + config.timeout + "ms exceeded";
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError2(timeoutErrorMessage, config, config.transitional && config.transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", request2));
      request2 = null;
    };
    if (utils$6.isStandardBrowserEnv()) {
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : void 0;
      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }
    if ("setRequestHeader" in request2) {
      utils$6.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") {
          delete requestHeaders[key];
        } else {
          request2.setRequestHeader(key, val);
        }
      });
    }
    if (!utils$6.isUndefined(config.withCredentials)) {
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
    if (config.cancelToken) {
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request2) {
          return;
        }
        request2.abort();
        reject(cancel);
        request2 = null;
      });
    }
    if (!requestData) {
      requestData = null;
    }
    request2.send(requestData);
  });
};
var utils$5 = utils$d;
var normalizeHeaderName2 = normalizeHeaderName$1;
var enhanceError2 = enhanceError$2;
var DEFAULT_CONTENT_TYPE = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function setContentTypeIfUnset(headers, value) {
  if (!utils$5.isUndefined(headers) && utils$5.isUndefined(headers["Content-Type"])) {
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
  if (utils$5.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils$5.trim(rawValue);
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
  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName2(headers, "Accept");
    normalizeHeaderName2(headers, "Content-Type");
    if (utils$5.isFormData(data) || utils$5.isArrayBuffer(data) || utils$5.isBuffer(data) || utils$5.isStream(data) || utils$5.isFile(data) || utils$5.isBlob(data)) {
      return data;
    }
    if (utils$5.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils$5.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
      return data.toString();
    }
    if (utils$5.isObject(data) || headers && headers["Content-Type"] === "application/json") {
      setContentTypeIfUnset(headers, "application/json");
      return stringifySafely(data);
    }
    return data;
  }],
  transformResponse: [function transformResponse(data) {
    var transitional2 = this.transitional;
    var silentJSONParsing = transitional2 && transitional2.silentJSONParsing;
    var forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === "json";
    if (strictJSONParsing || forcedJSONParsing && utils$5.isString(data) && data.length) {
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === "SyntaxError") {
            throw enhanceError2(e, this, "E_JSON_PARSE");
          }
          throw e;
        }
      }
    }
    return data;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};
defaults$3.headers = {
  common: {
    "Accept": "application/json, text/plain, */*"
  }
};
utils$5.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
  defaults$3.headers[method] = {};
});
utils$5.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
  defaults$3.headers[method] = utils$5.merge(DEFAULT_CONTENT_TYPE);
});
var defaults_1 = defaults$3;
var utils$4 = utils$d;
var defaults$2 = defaults_1;
var transformData$1 = function transformData(data, headers, fns) {
  var context = this || defaults$2;
  utils$4.forEach(fns, function transform(fn) {
    data = fn.call(context, data, headers);
  });
  return data;
};
var isCancel$1 = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};
var utils$3 = utils$d;
var transformData2 = transformData$1;
var isCancel2 = isCancel$1;
var defaults$1 = defaults_1;
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}
var dispatchRequest$1 = function dispatchRequest(config) {
  throwIfCancellationRequested(config);
  config.headers = config.headers || {};
  config.data = transformData2.call(config, config.data, config.headers, config.transformRequest);
  config.headers = utils$3.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
  utils$3.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function cleanHeaderConfig(method) {
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
var utils$2 = utils$d;
var mergeConfig$2 = function mergeConfig(config1, config2) {
  config2 = config2 || {};
  var config = {};
  var valueFromConfig2Keys = ["url", "method", "data"];
  var mergeDeepPropertiesKeys = ["headers", "auth", "proxy", "params"];
  var defaultToConfig2Keys = [
    "baseURL",
    "transformRequest",
    "transformResponse",
    "paramsSerializer",
    "timeout",
    "timeoutMessage",
    "withCredentials",
    "adapter",
    "responseType",
    "xsrfCookieName",
    "xsrfHeaderName",
    "onUploadProgress",
    "onDownloadProgress",
    "decompress",
    "maxContentLength",
    "maxBodyLength",
    "maxRedirects",
    "transport",
    "httpAgent",
    "httpsAgent",
    "cancelToken",
    "socketPath",
    "responseEncoding"
  ];
  var directMergeKeys = ["validateStatus"];
  function getMergedValue(target, source2) {
    if (utils$2.isPlainObject(target) && utils$2.isPlainObject(source2)) {
      return utils$2.merge(target, source2);
    } else if (utils$2.isPlainObject(source2)) {
      return utils$2.merge({}, source2);
    } else if (utils$2.isArray(source2)) {
      return source2.slice();
    }
    return source2;
  }
  function mergeDeepProperties(prop) {
    if (!utils$2.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils$2.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(void 0, config1[prop]);
    }
  }
  utils$2.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils$2.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(void 0, config2[prop]);
    }
  });
  utils$2.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);
  utils$2.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils$2.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(void 0, config2[prop]);
    } else if (!utils$2.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(void 0, config1[prop]);
    }
  });
  utils$2.forEach(directMergeKeys, function merge2(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(void 0, config1[prop]);
    }
  });
  var axiosKeys = valueFromConfig2Keys.concat(mergeDeepPropertiesKeys).concat(defaultToConfig2Keys).concat(directMergeKeys);
  var otherKeys = Object.keys(config1).concat(Object.keys(config2)).filter(function filterAxiosKeys(key) {
    return axiosKeys.indexOf(key) === -1;
  });
  utils$2.forEach(otherKeys, mergeDeepProperties);
  return config;
};
const name = "axios";
const version = "0.21.4";
const description = "Promise based HTTP client for the browser and node.js";
const main = "index.js";
const scripts = {
  test: "grunt test",
  start: "node ./sandbox/server.js",
  build: "NODE_ENV=production grunt build",
  preversion: "npm test",
  version: "npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",
  postversion: "git push && git push --tags",
  examples: "node ./examples/server.js",
  coveralls: "cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",
  fix: "eslint --fix lib/**/*.js"
};
const repository = {
  type: "git",
  url: "https://github.com/axios/axios.git"
};
const keywords = [
  "xhr",
  "http",
  "ajax",
  "promise",
  "node"
];
const author = "Matt Zabriskie";
const license = "MIT";
const bugs = {
  url: "https://github.com/axios/axios/issues"
};
const homepage = "https://axios-http.com";
const devDependencies = {
  coveralls: "^3.0.0",
  "es6-promise": "^4.2.4",
  grunt: "^1.3.0",
  "grunt-banner": "^0.6.0",
  "grunt-cli": "^1.2.0",
  "grunt-contrib-clean": "^1.1.0",
  "grunt-contrib-watch": "^1.0.0",
  "grunt-eslint": "^23.0.0",
  "grunt-karma": "^4.0.0",
  "grunt-mocha-test": "^0.13.3",
  "grunt-ts": "^6.0.0-beta.19",
  "grunt-webpack": "^4.0.2",
  "istanbul-instrumenter-loader": "^1.0.0",
  "jasmine-core": "^2.4.1",
  karma: "^6.3.2",
  "karma-chrome-launcher": "^3.1.0",
  "karma-firefox-launcher": "^2.1.0",
  "karma-jasmine": "^1.1.1",
  "karma-jasmine-ajax": "^0.1.13",
  "karma-safari-launcher": "^1.0.0",
  "karma-sauce-launcher": "^4.3.6",
  "karma-sinon": "^1.0.5",
  "karma-sourcemap-loader": "^0.3.8",
  "karma-webpack": "^4.0.2",
  "load-grunt-tasks": "^3.5.2",
  minimist: "^1.2.0",
  mocha: "^8.2.1",
  sinon: "^4.5.0",
  "terser-webpack-plugin": "^4.2.3",
  typescript: "^4.0.5",
  "url-search-params": "^0.10.0",
  webpack: "^4.44.2",
  "webpack-dev-server": "^3.11.0"
};
const browser = {
  "./lib/adapters/http.js": "./lib/adapters/xhr.js"
};
const jsdelivr = "dist/axios.min.js";
const unpkg = "dist/axios.min.js";
const typings = "./index.d.ts";
const dependencies = {
  "follow-redirects": "^1.14.0"
};
const bundlesize = [
  {
    path: "./dist/axios.min.js",
    threshold: "5kB"
  }
];
var require$$0$1 = {
  name,
  version,
  description,
  main,
  scripts,
  repository,
  keywords,
  author,
  license,
  bugs,
  homepage,
  devDependencies,
  browser,
  jsdelivr,
  unpkg,
  typings,
  dependencies,
  bundlesize
};
var pkg = require$$0$1;
var validators$1 = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(type, i) {
  validators$1[type] = function validator2(thing) {
    return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
  };
});
var deprecatedWarnings = {};
var currentVerArr = pkg.version.split(".");
function isOlderVersion(version2, thanVersion) {
  var pkgVersionArr = thanVersion ? thanVersion.split(".") : currentVerArr;
  var destVer = version2.split(".");
  for (var i = 0; i < 3; i++) {
    if (pkgVersionArr[i] > destVer[i]) {
      return true;
    } else if (pkgVersionArr[i] < destVer[i]) {
      return false;
    }
  }
  return false;
}
validators$1.transitional = function transitional(validator2, version2, message) {
  var isDeprecated = version2 && isOlderVersion(version2);
  function formatMessage(opt, desc) {
    return "[Axios v" + pkg.version + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
  }
  return function(value, opt, opts) {
    if (validator2 === false) {
      throw new Error(formatMessage(opt, " has been removed in " + version2));
    }
    if (isDeprecated && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      console.warn(formatMessage(opt, " has been deprecated since v" + version2 + " and will be removed in the near future"));
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
  isOlderVersion,
  assertOptions,
  validators: validators$1
};
var utils$1 = utils$d;
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
Axios$1.prototype.request = function request(config) {
  if (typeof config === "string") {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
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
      silentJSONParsing: validators.transitional(validators.boolean, "1.0.0"),
      forcedJSONParsing: validators.transitional(validators.boolean, "1.0.0"),
      clarifyTimeoutError: validators.transitional(validators.boolean, "1.0.0")
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
utils$1.forEach(["delete", "get", "head", "options"], function forEachMethodNoData2(method) {
  Axios$1.prototype[method] = function(url, config) {
    return this.request(mergeConfig$1(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});
utils$1.forEach(["post", "put", "patch"], function forEachMethodWithData2(method) {
  Axios$1.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig$1(config || {}, {
      method,
      url,
      data
    }));
  };
});
var Axios_1 = Axios$1;
function Cancel$1(message) {
  this.message = message;
}
Cancel$1.prototype.toString = function toString2() {
  return "Cancel" + (this.message ? ": " + this.message : "");
};
Cancel$1.prototype.__CANCEL__ = true;
var Cancel_1 = Cancel$1;
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
var isAxiosError = function isAxiosError2(payload) {
  return typeof payload === "object" && payload.isAxiosError === true;
};
var utils = utils$d;
var bind2 = bind$2;
var Axios = Axios_1;
var mergeConfig2 = mergeConfig$2;
var defaults = defaults_1;
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind2(Axios.prototype.request, context);
  utils.extend(instance, Axios.prototype, context);
  utils.extend(instance, context);
  return instance;
}
var axios$2 = createInstance(defaults);
axios$2.Axios = Axios;
axios$2.create = function create(instanceConfig) {
  return createInstance(mergeConfig2(axios$2.defaults, instanceConfig));
};
axios$2.Cancel = Cancel_1;
axios$2.CancelToken = CancelToken_1;
axios$2.isCancel = isCancel$1;
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
    name: name2 = null,
    options = {}
  }) {
    console.assert(parent_id != null, "parent_id cannot be null");
    console.assert(fileHandler != null, "fileHandler cannot be null");
    console.assert(["v1", "v2"].includes(apiVersion), "apiVersion must be in ['v1','v2']");
    const url = `api/${apiVersion}/nodes`;
    {
      const csName = name2 || fileHandler.name;
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
    name: name2 = null,
    description: description2 = null,
    options = {}
  }) {
    const response = await this.addDocument({
      parent_id,
      fileHandler,
      name: name2,
      options: __spreadProps(__spreadValues({}, options), {
        advanced_versioning: true
      })
    });
    const dataid = response.data.id;
    await session.versions.promote({
      dataid,
      versionNumber: 1,
      description: description2
    });
    await session.versions.deleteVersion({
      dataid,
      versionNumber: 1
    });
    return response;
  },
  addItem(type, parent_id, name2, params = {}) {
    return session.postBody("api/v2/nodes", __spreadValues({
      type,
      parent_id,
      name: name2
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
  addFolder(parent_id, name2, params = {}) {
    return this.addItem(SubTypes.Folder, parent_id, name2, params);
  },
  addGeneration(parent_id, name2, original_id, version_number, params = {}) {
    return this.addItem(SubTypes.Generation, parent_id, name2, __spreadValues({
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
  userQuery(query, options = {}, version2 = "v2") {
    const params = __spreadValues({
      limit: 20,
      where_type: JSON.stringify([this.USER, this.GROUP]),
      query
    }, options);
    return session.get(`api/${version2}/members`, { params });
  },
  member(id, version2 = "v2") {
    return session.get(`api/${version2}/members/${id}`);
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
      const name2 = fileName || fileHandler.name;
      const params = __spreadValues({
        file: {
          file: fileHandler,
          name: name2
        }
      }, options);
      return session.postForm(url, params);
    }
  },
  async download({
    dataid,
    version: version2,
    filePath
  }) {
    console.assert(dataid != null, "dataid cannot be null");
    console.assert(version2 != null, "version cannot be null");
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
    description: description2 = null
  }) {
    console.assert(dataid != null, "dataid cannot be null");
    console.assert(versionNumber != null, "number_to_keep must be an integer");
    const url = `api/v2/nodes/${dataid}/versions/${versionNumber}/promote`;
    return session.postBody(url, __spreadValues({}, !!description2 && {
      description: description2
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
  constructor(message = ErrorCodes.INTERNALERROR.message, data = null, code = ErrorCodes.INTERNALERROR.code) {
    if (isObject2(message)) {
      super(message.message);
      this.code = message.code;
      this.data = message.data;
    } else {
      super(message);
      this.code = code;
      this.data = data;
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
  handleResponse(data) {
    if (Object.prototype.hasOwnProperty.call(data, "result")) {
      return data.result;
    } else if (Object.prototype.hasOwnProperty.call(data, "error")) {
      const err = data.error;
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
    const components = { "./components/KAdminLink.vue": __glob_2_0, "./components/KAutocomplete.vue": __glob_2_1, "./components/KBrowseLink.vue": __glob_2_2, "./components/KButton.vue": __glob_2_3, "./components/KDateTimePicker.vue": __glob_2_4, "./components/KDialog.vue": __glob_2_5, "./components/KFunctionMenu.vue": __glob_2_6, "./components/KPageTitle.vue": __glob_2_7, "./components/KScratch.vue": __glob_2_8, "./components/KSelect.vue": __glob_2_9, "./components/KSnackbar.vue": __glob_2_10, "./components/KSortHeader.vue": __glob_2_11, "./components/KSpacer.vue": __glob_2_12, "./components/KSpinner.vue": __glob_2_13, "./components/KSwitch.vue": __glob_2_14, "./components/KTable.vue": __glob_2_15, "./components/KTextArea.vue": __glob_2_16, "./components/KUserGIF.vue": __glob_2_17, "./components/KUserLink.vue": __glob_2_18, "./components/KUserPicker.vue": __glob_2_19, "./components/Card/KCard.vue": __glob_2_20, "./components/Card/KCardActions.vue": __glob_2_21, "./components/Card/KCardText.vue": __glob_2_22, "./components/Card/KCardTitle.vue": __glob_2_23, "./components/Tabs/TabItem.vue": __glob_2_24, "./components/Tabs/Tabs.vue": __glob_2_25 };
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
