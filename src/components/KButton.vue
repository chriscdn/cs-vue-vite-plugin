y
<template>
  <button
    class="k-button"
    :disabled="disabled"
    :class="classObj"
    type="button"
    v-bind="$attrs"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
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
  },
  emits: ["click"],
  computed: {
    classObj() {
      return {
        "k-button--small": this.small,
        "k-button--text": this.text,
        "k-button--disabled": this.disabled,
        // 'k-button--icon': this.icon,
      };
    },
  },
});
</script>

<style lang="postcss">
.k-button {
  @apply px-3 py-1 rounded-full text-sm font-medium border;
  @apply focus:outline-none focus:ring focus:ring-gray-300;
  @apply transition bg-white border-gray-600;
  @apply hover:text-white hover:bg-gray-600 active:bg-gray-700;
  @apply whitespace-nowrap;
  @apply cursor-pointer;
  min-width: 5rem;

  &.k-button--small {
    @apply text-xs px-2 py-px;
    min-width: 4rem;
  }

  &.k-button--text {
    background: none;
    @apply border-none p-0 m-0;
    min-width: 0;
  }

  /* &.k-button--icon {
      @apply rounded-full;
      @apply w-10 h-10;
  } */

  &.k-button--disabled {
    @apply cursor-not-allowed;
    @apply hover:text-gray-400 hover:bg-white;
  }
}
</style>
