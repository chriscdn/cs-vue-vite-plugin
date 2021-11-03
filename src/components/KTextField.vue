<template>
    <div>
        <KFormFieldWrapper :label="label" :success-messages="successMessages" :error-messages="errorMessages">
            <input class="k-input-text-field" v-model="value" :placeholder="placeholder" :class="classObj" />
        </KFormFieldWrapper>
    </div>
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

<style lang="less">
.k-input-text-field {
    @apply w-full;
}
</style>
