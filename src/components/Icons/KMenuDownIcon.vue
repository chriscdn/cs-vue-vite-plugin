<template>
  <span
    v-bind="$attrs"
    :aria-hidden="!title"
    :aria-label="title"
    class="material-design-icon menu-down-icon animate-spin"
    role="img"
    @click="$emit('click', $event)"
  >
    <svg
      class="fill-black hover:fill-green-500 transition-colors"
      :width="size"
      :height="size"
      viewBox="7 10 10 5"
    >
      <path d="M7,10L12,15L17,10H7Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

/**
 * Taken from https://github.com/robcresswell/vue-material-design-icons
 */
export default defineComponent({
  name: "MenuDownIcon",
  emits: ["click"],
  props: {
    title: {
      type: String,
    },
    // fillColor: {
    //   type: String,
    //   default: "currentColor",
    // },
    size: {
      type: Number,
      default: 16,
    },
  },
});
</script>
