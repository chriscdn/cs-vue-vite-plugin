<template>
    <button class="k-button" :disabled="disabled" :class="classObj" type="button" v-bind="$attrs" @click="$emit('click')">
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
        disabled: {
            type: Boolean,
            default: false,
        },
        // icon: {
        //     type: Boolean,
        //     default: false,
        // },
    },
    computed: {
        classObj() {
            return {
                'k-button--small': this.small,
                'k-button--text': this.text,
                'k-button--disabled': this.disabled,
                // 'k-button--icon': this.icon,
            }
        },
    },
}
</script>
<style lang="less">
.k-button {
    @apply px-3 py-1 rounded-full text-sm font-medium border;
    @apply focus:outline-none focus:ring focus:ring-gray-300;
    @apply transition bg-white border-gray-600;
    @apply hover:text-white hover:bg-gray-600 active:bg-gray-700;
    @apply whitespace-nowrap;

    min-width: 5rem;

    &.k-button--small {
        @apply text-xs px-2 py-px;
        min-width: 4rem;
    }

    &.k-button--text {
        background: none;
        @apply border-none p-0 m-0 cursor-pointer;
        min-width: 0;
    }

    // &.k-button--icon {
    //     @apply rounded-full;
    //     @apply w-10 h-10;
    // }

    &.k-button--disabled {
        @apply cursor-not-allowed;
        @apply hover:text-gray-400 hover:bg-white;
    }
}
</style>
