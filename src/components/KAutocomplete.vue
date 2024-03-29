<template>
  <div v-click-away="setBlur" class="k-autocomplete" :style="[style]">
    <slot name="prepend" :item="valueLocal" />
    <div class="k-autocomplete-input">
      <input
        ref="input"
        v-model="inputText"
        class="k-input"
        type="search"
        autocomplete="off"
        :class="{ invalidSelection: !isValidSelection }"
        :placeholder="placeholderText"
        :readonly="!editable"
        @search="clearInput"
        @keydown.arrow-up.prevent="
          currentFocus = Math.max(-1, currentFocus - 1)
        "
        @keydown.arrow-down.prevent="
          currentFocus = Math.min(items.length - 1, currentFocus + 1)
        "
        @keydown.enter.prevent="select(currentFocus)"
        @focus="setFocus"
        @keydown.tab="setBlur"
        @keyup="keyup"
      />
      <div
        v-if="focus && items.length && !!inputText"
        class="k-autocomplete-items"
      >
        <div
          v-for="(item, index) in itemsFiltered"
          :key="index"
          class="k-autocomplete-item"
          :class="{ 'k-autocomplete-active': currentFocus == index }"
          @click="select(index)"
        >
          <slot name="item" :item="item">
            {{ item }}
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { directive } from "vue3-click-away";
import get from "lodash.get";
import { defineComponent, PropType } from "vue";
import { convertToUnit } from "../mixins/measurables";
export default defineComponent({
  directives: {
    ClickAway: directive,
  },
  // model: {
  //     prop: 'value',
  //     event: 'change',
  // },
  props: {
    modelValue: {
      type: [String, Object, Number] as PropType<
        string | Record<string, any> | number | null
      >,
      default: null,
    },
    itemValue: {
      type: String,
      default: "value",
    },
    itemText: {
      type: String,
      default: "text",
    },
    returnObject: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    placeholder: {
      type: String,
      default: "Start typing...",
    },
    // readonly: {
    //  type: Boolean,
    //  default: false
    // },
    width: {
      type: [String, Number],
      default: "100%",
    },
    items: {
      type: Array as PropType<Array<string | Record<string, any>>>,
      default: () => [],
    },
    loading: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    combobox: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    filter: {
      type: Function,
      default: (item: any) => !!item,
    },
    editable: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
  },
  data() {
    return {
      inputText: null as string | null, // this.displayValueFormatter(this.modelValue),
      currentFocus: -1,
      focus: false,
      // captureKeyStrokes: true,
    };
  },
  computed: {
    style() {
      return {
        width: convertToUnit(this.width),
      };
    },

    itemsFiltered() {
      return this.items.filter((item: string | Record<string, any>) =>
        this.filter(item)
      );
    },

    placeholderText() {
      return this.editable ? this.placeholder : undefined;
    },

    valueLocal: {
      set(value: any) {
        if (!value) {
          this.$emit("update:modelValue", null);
        } else if (this.returnObject) {
          this.$emit("update:modelValue", value);
        } else {
          this.$emit("update:modelValue", get(value, this.itemValue, value));
        }
      },
      get(): any {
        return this.isObject(this.modelValue)
          ? this.modelValue
          : this.items.find(
              (item: any) => get(item, this.itemValue, item) == this.modelValue
            );
      },
    },
    isValidSelection() {
      return !!this.valueLocal;
    },
  },
  watch: {
    inputText(value) {
      this.$emit("update:search-input", value);
    },

    items() {
      this.currentFocus = -1;

      if (this.valueLocal) {
        if (!this.combobox) {
          this.inputText = String(
            this.isObject(this.valueLocal)
              ? get(this.valueLocal, this.itemText, "")
              : this.valueLocal
          );
        }
      }
    },

    valueLocal: {
      handler(v) {
        // this.destroyWatcher()

        // this check needs to be tested with combobox
        // if (this.valueLocal) {
        this.inputText = get(this.valueLocal, this.itemText, v);
        // }
      },
      immediate: true,
    },

    focus(value) {
      if (value) {
        // focus
      } else {
        // blur
        if (this.valueLocal) {
          // all good, keep it
        } else if (!this.combobox) {
          // otherwise, clear the text field
          // this.createWatcher()
          this.inputText = null;
        }
      }
    },
  },

  methods: {
    async select(index: number) {
      // default to first item

      if (!this.combobox) {
        index = Math.max(index, 0);
      }

      const selectedItem = this.items[index];

      if (this.combobox) {
        if (selectedItem) {
          this.valueLocal = selectedItem;
        }
      } else {
        this.valueLocal = selectedItem;
        // this.destroyWatcher()
        this.inputText = get(
          selectedItem,
          this.itemText,
          selectedItem
        ) as string;
      }

      // Let the reactive system all sync before blurring the field.
      await this.$nextTick();

      this.setBlur();
    },

    setFocus() {
      this.focus = true;
    },

    setBlur() {
      const inputElmenet = this.$refs.input as HTMLInputElement;
      inputElmenet.blur();
      this.focus = false;
    },
    isObject(obj: any): boolean {
      return (
        typeof obj == "object" &&
        obj instanceof Object &&
        !(obj instanceof Array)
      );
    },
    clearInput() {
      this.valueLocal = null;
    },

    keyup() {
      if (this.combobox) {
        this.valueLocal = this.inputText;
      } else {
        this.valueLocal = null;
      }
    },
  },
});
</script>
<style lang="postcss">
.k-autocomplete {
  @apply flex items-center;

  .k-autocomplete-input {
    @apply flex-grow relative;

    input {
      @apply w-full;
    }
  }

  .k-autocomplete-items {
    @apply absolute;

    /* border: 1px solid #d4d4d4; */
    border-bottom: none;
    border-top: none;
    @apply border border-t-0 border-b-0 border-solid rounded border-gray-300;
    @apply rounded;

    z-index: 99;

    top: 100%;
    left: 0;
    right: 0;
    max-height: 50em;
    overflow-y: scroll;

    .k-autocomplete-item {
      @apply p-2 bg-white cursor-pointer;
      @apply border border-t-0 border-l-0 border-r-0 border-solid border-gray-300;
      @apply flex items-center;
      @apply hover:bg-gray-200;
    }
  }

  .k-autocomplete-active {
    /* when navigating through the items using the arrow keys: */
    background-color: DodgerBlue !important;
    color: #ffffff;
  }
}
</style>
