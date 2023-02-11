<template>
  <div class="k-card-text">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({})
</script>

<style lang="postcss">
.k-card-text {
  @apply flex-grow;
  @apply p-3;
}

.k-card-title + .k-card-text {
  @apply pt-0;
}
</style>
