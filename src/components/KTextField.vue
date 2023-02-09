<template>
  <KFormFieldWrapper
    :label="label"
    :success-messages="successMessages"
    :error-messages="errorMessages"
  >
    <input
      v-model="value"
      class="k-input-text-field"
      :placeholder="placeholder"
      :class="classObj"
    />
  </KFormFieldWrapper>
</template>

<script>
import { mixin } from './KFormFieldWrapper.vue'
export default {
  mixins: [mixin],
  props: {
    modelValue: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: null,
    },
  },
  emits: ['update:modelValue'],
  computed: {
    value: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      },
    },
  },
}
</script>

<style lang="postcss">
.k-input-text-field {
  @apply w-full;
}
</style>
