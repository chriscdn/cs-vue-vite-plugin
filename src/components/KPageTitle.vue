<template>
  <h1>
    {{ title
    }}<span v-if="subtitle"
      >: <span class="rhmuted">{{ subtitle }} - 2</span></span
    >
  </h1>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },

    subtitle: {
      type: String,
      default: null,
    },
  },
})
</script>
<style scoped>
.rhmuted {
  color: #999;
}
</style>
