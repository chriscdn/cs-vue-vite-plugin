<template>
    <select v-model="localValue" class="k-input">
        <option v-for="item in items" :key="getItemValue(item)" :value="getItemValue(item)">{{ getItemText(item) }}</option>
    </select>
</template>

<script>
import get from 'lodash.get'
export default {
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
