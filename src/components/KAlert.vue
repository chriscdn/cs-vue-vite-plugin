<template>
  <transition name="fade">
    <div
      v-if="visibleLocal"
      class="flex items-center rounded text-main-bright p-2"
      :style="[colorableBackgroundStyle]"
    >
      <div class="flex-grow">
        <slot name="default" />
      </div>

      <button class="flex-grow-0" @click="dismiss">
        <JIcon class="text-main-bright"> icon-x </JIcon>
      </button>
    </div>
  </transition>
</template>

<script>
// INCOMPLEtE!  Actually, this doesn't work at all

import colorable from '../mixins/colorable'
export default {
  mixins: [colorable],
  props: {
    visible: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      visibleLocal: true,
    }
  },
  watch: {
    visible: {
      handler(value) {
        this.visibleLocal = value
      },
      immediate: true,
    },
  },
  methods: {
    dismiss() {
      this.visibleLocal = false
    },
  },
}
</script>
