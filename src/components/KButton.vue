<template>
    <button class="k-button" :class="classObj" type="button" v-bind="$attrs" @click="$emit('click')">
        <slot></slot>
    </button>
</template>

<script>
export default {
    emits: ['click'],
    props: {
        small: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        classObj() {
            return {
                'k-button--small': this.small,
            }
        },
    },
}
</script>
<style lang="postcss">
.k-button {
    @apply px-2 py-1 rounded-md text-sm font-medium border focus:outline-none focus:ring transition text-gray-600 border-gray-600 hover:text-white hover:bg-gray-600 active:bg-gray-700 focus:ring-gray-300;
    @apply whitespace-nowrap;

    &.k-button--small {
        @apply text-xs px-1;
    }
}
</style>
