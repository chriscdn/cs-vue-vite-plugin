<template>
    <a href="#" @click.prevent="emitClick"><slot></slot> <span v-if="isActive && sortAsc">&#8595;</span> <span v-else-if="isActive">&#8593;</span> </a>
</template>

<script>
export default {
    props: {
        keypath: {
            type: String,
            required: true,
        },
        modelValue: {
            type: Object,
            default: () => {},
        },
    },
    computed: {
        sortKey() {
            return this.modelValue.sortKey
        },
        sortAsc() {
            return Boolean(this.modelValue.sortAsc)
        },
        isActive() {
            return this.keypath == this.sortKey
        },
    },
    methods: {
        emitClick() {
            return this.$emit('update:modelValue', {
                sortKey: this.keypath,
                sortAsc: this.isActive ? !this.sortAsc : true,
            })
        },
    },
}
</script>
