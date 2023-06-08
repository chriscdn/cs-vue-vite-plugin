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
.k-list {
  @apply py-2;
}

.k-menu {
  .k-list {
    @apply shadow;

    a {
      @apply no-underline;
    }
  }
}
</style>
