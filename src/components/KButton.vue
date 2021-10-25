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
        text: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        classObj() {
            return {
                'k-button--small': this.small,
                'k-button--text': this.text,
            }
        },
    },
}
</script>
<style lang="less">
.k-button {
    @apply px-3 py-1 rounded-full text-sm font-medium border focus:outline-none focus:ring transition text-gray-600 border-gray-600 hover:text-white hover:bg-gray-600 active:bg-gray-700 focus:ring-gray-300;
    @apply whitespace-nowrap;

    min-width: 5rem;

    &.k-button--small {
        @apply text-xs px-2 py-px;
        min-width: 4rem;
    }

    &.k-button--text {
        background: none;
        @apply border-none  p-0 m-0 cursor-pointer;
        min-width: 0;
    }
}
</style>
