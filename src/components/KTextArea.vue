<template>
  <KFormFieldWrapper
    :label="label"
    :success-messages="successMessages"
    :error-messages="errorMessages"
  >
    <textarea
      v-model="valueLocal"
      v-bind="$attrs"
      spellcheck="false"
      :class="classObj"
      class="k-textarea"
      :rows="rows"
      @keydown.tab.prevent="tabber"
    />
  </KFormFieldWrapper>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import { mixin } from "./KFormFieldWrapper.vue";

export default defineComponent({
  mixins: [mixin],
  inheritAttrs: false,
  props: {
    modelValue: {
      type: String as PropType<string | null>,
      default: null,
    },
    rows: {
      type: Number as PropType<number>,
      default: 5,
    },
  },
  emits: ["update:modelValue"],

  computed: {
    valueLocal: {
      // The <textarea> element expects a string or undefined.
      get(): string | undefined {
        return this.modelValue || undefined;
      },
      // We emit a string or null.
      set(value: string | null) {
        this.$emit("update:modelValue", value || null);
      },
    },
  },
  methods: {
    tabber(event: Event) {
      const target = event.target as HTMLInputElement;

      const text = this.valueLocal;
      const originalSelectionStart = target.selectionStart;

      if (text && originalSelectionStart) {
        const textStart = text.slice(0, originalSelectionStart);
        const textEnd = text.slice(originalSelectionStart);

        const newText = `${textStart}\t${textEnd}`;

        this.valueLocal = newText;

        target.value = newText;
        target.selectionStart = originalSelectionStart + 1;
        target.selectionEnd = originalSelectionStart + 1;
      }
    },
  },
});
</script>

<style lang="postcss">
.k-textarea {
  @apply resize-y w-full rounded border p-2;
}
</style>
