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
        <!-- <KIcon class="text-main-bright"> icon-x </KIcon> -->
      </button>
    </div>
  </transition>
</template>

<script lang="ts">
// INCOMPLEtE!  Actually, this doesn't work at all
import { defineComponent } from 'vue'
import colorable from '../mixins/colorable'

export default defineComponent({
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
})
</script>
