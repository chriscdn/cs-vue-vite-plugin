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
import { defineComponent } from 'vue'
import { mixin } from './KFormFieldWrapper.vue'

export default defineComponent({
  mixins: [mixin],
  inheritAttrs: false,
  props: {
    modelValue: {
      type: String,
      default: null,
    },
    rows: {
      type: Number,
      default: 5,
    },
  },
  emits: ['update:modelValue'],

  computed: {
    // outerStyle() {
    //   return {
    //     width: this.width,
    //     height: this.height,
    //   }
    // },
    // lineNumberItemStyle() {
    //   return {
    //     // height: this.lineHeight,
    //     lineHeight: this.lineHeight,
    //     fontSize: '1em',
    //   }
    // },
    // textareaStyle() {
    //   return {
    //     lineHeight: this.lineHeight,
    //     fontSize: this.fontSize,
    //   }
    // },
    // lineCount() {
    //   return (this.valueLocal || '').split(/\r\n|\r|\n/).length
    // },
    // effectiveLineCount() {
    //   return Math.max(this.lineCount, this.minLineNumbers)
    // },
    valueLocal: {
      set(value: string) {
        this.$emit('update:modelValue', value)
      },
      get(): string {
        return this.modelValue
      },
    },
  },
  methods: {
    tabber(event: Event) {
      const target = event.target as HTMLInputElement

      const text = this.valueLocal
      const originalSelectionStart = target.selectionStart

      if (originalSelectionStart) {
        const textStart = text.slice(0, originalSelectionStart)
        const textEnd = text.slice(originalSelectionStart)

        const newText = `${textStart}\t${textEnd}`

        this.valueLocal = newText

        target.value = newText
        target.selectionStart = originalSelectionStart + 1
        target.selectionEnd = originalSelectionStart + 1
      }
    },
  },
})
</script>

<style lang="postcss">
.k-textarea {
  @apply resize-y w-full rounded border p-2;
}
</style>
