<template>
  <img v-if="url" :src="url" :style="[measurableStyles]" />
</template>

<script>
import get from 'lodash.get'
import { defineComponent, inject } from 'vue'
import measurable from '../mixins/measurables'
export default defineComponent({
  setup() {
    const config = inject('config')
    return { config }
  },
  mixins: [measurable],
  props: {
    userRec: {
      type: Object,
      default: null,
    },
    type: {
      type: Number,
      default: 0,
    },
    height: {
      type: [Number, String],
      default: 16,
    },
    width: {
      type: [Number, String],
      default: 16,
    },
  },
  computed: {
    userType() {
      return get(this.userRec, 'type', this.type)
    },

    url() {
      if (this.userType == 0) {
        // user
        return `${this.config.img}guy.gif`
      } else if (this.userType == 1) {
        // group
        return `${this.config.img}2-guys.gif`
      } else if (this.userType > 0) {
        // role?
        return `${this.config.img}projectgroup.gif`
      } else {
        return null
      }
    },
  },
})
</script>
