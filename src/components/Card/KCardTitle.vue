<template>
  <div class="k-card-title">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>

<style lang="postcss">
.k-card-title {
  @apply flex flex-grow-0 flex-wrap p-3 text-lg;
}
</style>
