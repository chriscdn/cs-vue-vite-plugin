<template>
  <div class="k-list">
    <slot name="default" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="postcss">
div.k-list {
  @apply py-2;
}
</style>

<style lang="postcss">
.k-menu {
  .k-list {
    .k-list-item {
      @apply no-underline;
      &:link,
      &:visited {
        @apply text-inherit;
      }
    }
  }
}
</style>
