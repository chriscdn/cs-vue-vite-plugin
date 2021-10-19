<template>
    <div v-if="isSelected">
        <slot></slot>
    </div>
</template>

<script>
export default {
    inject: ['tabs'],
    props: {
        title: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
    },
    computed: {
        isSelected() {
            return this.name == this.tabs.selectedTab
        },
    },
}
</script>
