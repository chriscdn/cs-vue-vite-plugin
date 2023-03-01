<template>
  <div class="k-card-actions">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({})
</script>

<style lang="postcss">
.k-card-actions {
  @apply flex flex-grow-0 p-2 gap-2 items-center;
}
</style>
