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

<script lang="ts">
import { mixin } from "./KFormFieldWrapper.vue";

import { defineComponent, PropType } from "vue";
export default defineComponent({
  mixins: [mixin],
  props: {
    modelValue: {
      type: String as PropType<string | null>,
      default: null,
    },
    placeholder: {
      type: String as PropType<string | undefined>,
      default: undefined,
    },
  },
  emits: ["update:modelValue"],
  computed: {
    value: {
      get(): string | undefined {
        return this.modelValue || undefined;
      },
      set(value: string | null) {
        this.$emit("update:modelValue", value || null);
      },
    },
  },
});
</script>

<style lang="postcss">
.k-input-text-field {
  @apply w-full;
}
</style>
