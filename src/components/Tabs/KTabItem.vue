<template>
  <div v-if="isSelected">
    <slot />
  </div>
</template>

<script lang="ts">
import get from 'lodash.get'
import { defineComponent } from 'vue'

export default defineComponent({
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
})
</script>
