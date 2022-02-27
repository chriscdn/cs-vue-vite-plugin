<template>
  <div v-if="isSelected">
    <slot />
  </div>
</template>

<script>
import get from 'lodash.get'

export default {
  inject: ['tabs'],
  props: {
    title: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    isSelected() {
      return this.name == get(this.tabs, 'selectedTab')
    },
  },
}
</script>
