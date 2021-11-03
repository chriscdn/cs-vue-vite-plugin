<template>
    <div>
        <KFormFieldWrapper :label="label" :success-messages="successMessages" :error-messages="errorMessages">
            <div class="k-select">
                <select v-model="localValue" :class="classObj">
                    <option v-for="item in items" :key="getItemValue(item)" :value="getItemValue(item)">{{ getItemText(item) }}</option>
                </select>
                <transition name="fade">
                    <KSpinner v-if="loading" class="k-select--spinner" />
                </transition>
            </div>
        </KFormFieldWrapper>
    </div>
</template>

<script>
import get from 'lodash.get'
import { mixin } from './KFormFieldWrapper.vue'
export default {
    mixins: [mixin],
    props: {
        modelValue: {
            type: [String, Object, Number],
            default: null,
        },
        multiple: {
            type: Boolean,
            default: false,
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
    },
    emits: ['update:modelValue'],
    computed: {
        localValue: {
            get() {
                return this.multiple ? this.arrify(this.modelValue) : this.modelValue
            },
            set(value) {
                this.$emit('update:modelValue', value)
            },
        },
    },
    methods: {
        isObject(obj) {
            return typeof obj == 'object' && obj instanceof Object && !(obj instanceof Array)
        },
        getItemText(item) {
            return this.isObject(item) ? get(item, this.itemText) : item
        },
        getItemValue(item) {
            return this.isObject(item) ? get(item, this.itemValue) : item
        },

        arrify(item) {
            return Array.isArray(item) ? item : [item]
        },
    },
}
</script>

<style lang="less">
.k-select {
    @apply flex items-center;
    .k-select--spinner {
        @apply ml-1;
    }
}
</style>
