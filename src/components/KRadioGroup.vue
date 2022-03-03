<template>
  <div>
    <KFormFieldWrapper
      :label="label"
      :success-messages="successMessages"
      :error-messages="errorMessages"
    >
      <transition name="fade" mode="out-in">
        <KSpinner v-if="loading" />
        <div v-else class="k-radiogroup" :class="classObj">
          <div
            v-for="item in items"
            :key="getItemValue(item)"
            class="k-radiogroup-item"
          >
            <input
              :id="getItemValue(item)"
              v-model="localValue"
              type="radio"
              :value="getItemValue(item)"
              :disabled="getItemDisabled(item)"
            >

            <label :for="getItemValue(item)">{{ getItemText(item) }}</label>
          </div>
        </div>
      </transition>
    </KFormFieldWrapper>
  </div>
</template>

<script>
/**
 * This component is based on KSelect
 */
import get from 'lodash.get'
import { mixin } from './KFormFieldWrapper.vue'
export default {
  mixins: [mixin],
  props: {
    modelValue: {
      type: [String, Object, Number],
      default: null,
    },

    items: {
      type: Array,
      default: () => [],
    },
    loading: {
      type: Boolean,
      default: false,
    },
    itemValue: {
      type: String,
      default: 'value',
    },
    itemText: {
      type: String,
      default: 'text',
    },
    vertical: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue'],
  computed: {
    localValue: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      },
    },
    classObj() {
      return {
        'k-radiogroup--vertical': this.vertical,
      }
    },
  },
  methods: {
    isObject(obj) {
      return (
        typeof obj == 'object' &&
        obj instanceof Object &&
        !(obj instanceof Array)
      )
    },
    getItemText(item) {
      return this.isObject(item) ? get(item, this.itemText) : item
    },
    getItemValue(item) {
      return this.isObject(item) ? get(item, this.itemValue) : item
    },
    getItemDisabled(item) {
      return this.isObject(item) ? get(item, 'disabled', false) : false
    },
  },
}
</script>

<style lang="less">
.k-radiogroup {
  @apply flex;

  .k-radiogroup-item {
    @apply mb-1;
  }

  &.k-radiogroup--vertical {
    @apply flex-col;
  }
}
</style>
