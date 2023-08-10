<template>
  <KFormFieldWrapper
    :label="label"
    :success-messages="successMessages"
    :error-messages="errorMessages"
  >
    <!-- {{  hasGroups }} -->
    <!-- {{ itemsGrouped }} -->
    <div class="k-select">
      <select
        v-model="valueLocal"
        :class="classObj"
        :disabled="disabledResolved"
      >
        <template v-if="hasGroups">
          <optgroup
            v-for="(items, group) in itemsGrouped"
            :key="group"
            :label="group"
          >
            <option
              v-for="item in items"
              :key="getItemValue(item)"
              :value="getItemValue(item)"
              :disabled="getItemDisabled(item)"
            >
              {{ getItemText(item) }}
            </option>
          </optgroup>
        </template>

        <template v-else>
          <option
            v-for="item in items"
            :key="getItemValue(item)"
            :value="getItemValue(item)"
            :disabled="getItemDisabled(item)"
          >
            {{ getItemText(item) }}
          </option>
        </template>
      </select>

      <KButton v-if="clearable" @click="valueLocal = null" small>clear</KButton>

      <transition name="fade">
        <KSpinner v-if="loading" class="k-select--spinner" />
      </transition>
    </div>
  </KFormFieldWrapper>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import get from "lodash.get";
import { mixin } from "./KFormFieldWrapper.vue";

export default defineComponent({
  mixins: [mixin],
  props: {
    modelValue: {
      type: [String, Object, Number] as PropType<
        string | number | null | Record<string, any>
      >,
      default: null,
    },
    multiple: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    items: {
      type: Array as PropType<Array<string | Record<string, any>>>,
      default: () => [],
    },
    loading: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    itemValue: {
      type: String as PropType<string>,
      default: "value",
    },
    itemText: {
      type: String as PropType<string>,
      default: "text",
    },
    itemGroup: {
      type: String as PropType<string>,
      default: "group",
    },
    itemDisabled: {
      type: String as PropType<string>,
      default: "disabled",
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    readonly: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    clearable: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  emits: ["update:modelValue"],
  computed: {
    disabledResolved() {
      return this.disabled || this.readonly;
    },
    valueLocal: {
      get() {
        return this.multiple ? this.arrify(this.modelValue) : this.modelValue;
      },
      set(value: any) {
        this.$emit("update:modelValue", value);
      },
    },
    // Only true if each item has a grouped property
    hasGroups() {
      // debugger
      const itemGroup = this.itemGroup;

      return typeof itemGroup === "string" && this.items.length > 0
        ? this.items.every((item) => Boolean(get(item, itemGroup)))
        : false;
    },
    itemsGrouped() {
      // const itemGroup = this.itemGroup;

      return this.hasGroups
        ? this.items.reduce((a: Record<string, Array<any>>, item) => {
            const group: string = get(item, this.itemGroup);

            if (!a[group]) {
              a[group] = [];
            }

            a[group].push(item);

            return a;
          }, {})
        : null;

      // return this.hasGroups ? this.items.reduce((a,item) => {},
      // {}:Record<string, Array<any>>) :null
    },
  },
  methods: {
    isObject(obj: any) {
      return (
        typeof obj === "object" &&
        obj instanceof Object &&
        !(obj instanceof Array)
      );
    },
    getItemText(item: string | object): string {
      return this.isObject(item) ? get(item, this.itemText) : item;
    },

    getItemValue(item: string | object): any {
      return this.isObject(item) ? get(item, this.itemValue) : item;
    },

    getItemDisabled(item: string | object): boolean {
      return this.isObject(item) ? get(item, this.itemDisabled, false) : false;
    },

    arrify(item: any): Array<any> {
      return Array.isArray(item) ? item : [item];
    },
  },
});
</script>

<style lang="postcss">
.k-select {
  @apply flex items-center gap-2;
  .k-select--spinner {
    @apply ml-1;
  }
}
</style>
