<template>
  <KFormFieldWrapper
    :label="label"
    :success-messages="successMessages"
    :error-messages="errorMessages"
  >
    <div class="k-select">
      <select v-model="localValue" :class="classObj">
        <option
          v-for="item in items"
          :key="getItemValue(item)"
          :value="getItemValue(item)"
        >
          {{ getItemText(item) }}
        </option>
      </select>
      <transition name="fade">
        <KSpinner v-if="loading" class="k-select--spinner" />
      </transition>
    </div>
  </KFormFieldWrapper>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import get from 'lodash.get'
import { mixin } from './KFormFieldWrapper.vue'
export default defineComponent({
  mixins: [mixin],
  props: {
    modelValue: {
      type: [String, Object, Number],
      default: null,
    },
    multiple: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    items: {
      type: Array as PropType<string | Record<string, any>>,
      default: () => [],
    },
    loading: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    itemValue: {
      type: String as PropType<string>,
      default: 'value',
    },
    itemText: {
      type: String as PropType<string>,
      default: 'text',
    },
  },
  emits: ['update:modelValue'],
  computed: {
    localValue: {
      get() {
        return this.multiple ? this.arrify(this.modelValue) : this.modelValue
      },
      set(value: any) {
        this.$emit('update:modelValue', value)
      },
    },
  },
  methods: {
    isObject(obj: any) {
      return (
        typeof obj == 'object' &&
        obj instanceof Object &&
        !(obj instanceof Array)
      )
    },
    getItemText(item: string) {
      return this.isObject(item) ? get(item, this.itemText) : item
    },
    getItemValue(item: any) {
      return this.isObject(item) ? get(item, this.itemValue) : item
    },

    arrify(item: any): Array<any> {
      return Array.isArray(item) ? item : [item]
    },
  },
})
</script>

<style lang="postcss">
.k-select {
  @apply flex items-center;
  .k-select--spinner {
    @apply ml-1;
  }
}
</style>
