<template>
    <button class="k-button" type="button" v-bind="$attrs" @click="$emit('click')">
        <slot></slot>
    </button>
</template>

<script>
export default {
    emits: ['click'],
}
</script>
<style lang="postcss">
.k-button {
    @apply px-2 py-1 rounded-md text-xs font-medium border focus:outline-none focus:ring transition text-gray-600 border-gray-600 hover:text-white hover:bg-gray-600 active:bg-gray-700 focus:ring-gray-300;
}
</style>
