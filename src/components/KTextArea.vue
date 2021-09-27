<template>
    <textarea v-model="valueLocal" v-bind="$attrs" @keydown.tab.prevent="tabber" spellcheck="false" class="k-input k-textarea" :rows="rows"></textarea>
</template>

<script>
export default {
    inheritAttrs: false,
    props: {
        modelValue: {
            type: String,
            // required: true,
        },
        rows: {
            type: Number,
            default: 5,
        },
    },

    computed: {
        outerStyle() {
            return {
                width: this.width,
                height: this.height,
            }
        },
        lineNumberItemStyle() {
            return {
                // height: this.lineHeight,
                lineHeight: this.lineHeight,
                fontSize: '1em',
            }
        },
        textareaStyle() {
            return {
                lineHeight: this.lineHeight,
                fontSize: this.fontSize,
            }
        },
        lineCount() {
            return (this.valueLocal || '').split(/\r\n|\r|\n/).length
        },
        effectiveLineCount() {
            return Math.max(this.lineCount, this.minLineNumbers)
        },
        valueLocal: {
            set(value) {
                this.$emit('update:modelValue', value)
            },
            get() {
                return this.modelValue
            },
        },
    },
    methods: {
        tabber(event) {
            const text = this.valueLocal
            const originalSelectionStart = event.target.selectionStart
            const textStart = text.slice(0, originalSelectionStart)
            const textEnd = text.slice(originalSelectionStart)

            const newText = `${textStart}\t${textEnd}`

            this.valueLocal = newText

            event.target.value = newText
            event.target.selectionStart = originalSelectionStart + 1
            event.target.selectionEnd = originalSelectionStart + 1
        },
    },
}
</script>

<style lang="postcss">
.k-textarea {
    @apply resize-y w-full rounded border p-2;
}
</style>
