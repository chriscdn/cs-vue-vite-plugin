<template>
  <div class="k-list-item-title"><slot /></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="postcss">
.k-list-item-title {
  @apply font-medium text-sm;
}
</style>
