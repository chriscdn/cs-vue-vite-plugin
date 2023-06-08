<template>
  <div class="k-list-item-subtitle"><slot /></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="postcss">
.k-list-item-subtitle {
  @apply font-light;
}
</style>
