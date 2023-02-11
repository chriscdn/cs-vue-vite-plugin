<template>
  <div class="k-dot" :style="[style]">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { convertToUnit } from '../mixins/measurables'
export default defineComponent({
  props: {
    color: {
      type: String,
      default: 'green',
    },
    size: {
      type: [String, Number],
      default: '0.75em',
    },

    outline: {
      type: Boolean,
      default: false,
    },

    outlineWidth: {
      type: [String, Number],
      default: 2,
    },
  },

  computed: {
    style() {
      const size = convertToUnit(this.size)

      if (this.outline) {
        const borderSize = convertToUnit(this.outlineWidth)

        return {
          borderStyle: 'solid',
          borderWidth: borderSize,
          borderColor: this.color,
          width: size,
          height: size,
        }
      } else {
        return {
          width: size,
          height: size,
          backgroundColor: this.color,
        }
      }
    },
  },
})
</script>

<style lang="postcss">
.k-dot {
  @apply rounded-full inline-block;
}
</style>
