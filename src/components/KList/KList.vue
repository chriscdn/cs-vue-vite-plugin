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
