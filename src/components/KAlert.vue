<template>
  <!-- <transition name="fade"> -->
  <div
    class="k-alert"
    :style="[colorableBackgroundStyle, colorableTextStyleForBackground]"
  >
    <div class="flex-grow">
      <slot name="default" />
    </div>
  </div>
  <!-- </transition> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import colorable from '../mixins/colorable'

export default defineComponent({
  mixins: [colorable],
})
</script>

<style lang="postcss">
.k-alert {
  @apply flex items-center rounded p-2;
}
</style>
