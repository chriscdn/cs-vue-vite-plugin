<template>
  <div class="k-switch" :class="classObj" @click="on = !on">
    <span class="k-switch-slider" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
// https://www.w3schools.com/howto/howto_css_switch.asp
import { convertToUnit } from '../mixins/measurables'
export default defineComponent({
  props: {
    modelValue: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  emits: ['update:modelValue'],

  data() {
    return {
      padding: 4,
      height: 26,
      trans: 20,
    }
  },

  computed: {
    on: {
      get() {
        return this.modelValue
      },
      set(value: boolean) {
        this.$emit('update:modelValue', value)
      },
    },

    classObj() {
      return {
        'k-switch--on': this.on,
      }
    },
    innerSize() {
      return this.height - 2 * this.padding
    },
    heightPx() {
      return convertToUnit(this.height)
    },
    innerSizePx() {
      return convertToUnit(this.innerSize)
    },
    paddingPx() {
      return convertToUnit(this.padding)
    },
    switchWidthPx() {
      // Why height? Because it's also the width of the circle thingie
      return convertToUnit(this.trans + this.height)
    },
    transPx() {
      return `translateX(${convertToUnit(this.trans)})`
    },
  },
})
</script>

<style lang="postcss">
.k-switch {
  @apply relative inline-block align-middle;

  width: v-bind(switchWidthPx);
  height: v-bind(heightPx);
  @apply cursor-pointer;
  @apply bg-gray-400;
  @apply rounded-full;

  /* The slider */
  .k-switch-slider {
    @apply absolute;
    @apply rounded-full;
    @apply duration-300;

    height: v-bind(innerSizePx);
    width: v-bind(innerSizePx);
    left: v-bind(paddingPx);
    bottom: v-bind(paddingPx);
    background-color: white;
  }
}
.k-switch--on {
  @apply bg-blue-500;

  .k-switch-slider {
    transform: v-bind(transPx);
  }
}
</style>
