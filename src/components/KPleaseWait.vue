<template>
  <div v-if="loading" class="centerOverlay">
    <KSpinner :max-width="size" :max-height="size" />
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'
import KSpinner from './KSpinner.vue'
export default defineComponent({
  components: { KSpinner },
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    size: {
      type: Number as PropType<number>,
      default: 100,
    },
  },
})
</script>

<style lang="postcss">
.centerOverlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 50;
}
</style>
