<template>
    <select v-model="localValue" class="k-input">
        <option v-for="item in items" :key="item[itemValue]" :value="item[itemValue]">{{ item[itemText] }}</option>
    </select>
</template>

<script>
export default {
    props: {
        modelValue: {
            type: [String, Object, Number],
            default: null,
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
                return this.modelValue
            },
            set(value) {
                this.$emit('update:modelValue', value)
            },
        },
    },
}
</script>

<style></style>
