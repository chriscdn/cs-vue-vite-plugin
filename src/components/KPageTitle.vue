<template>
  <div class="text-xl">
    {{ title
    }}<span v-if="subtitle"
      >: <span class="rhmuted">{{ subtitle }}</span></span
    >
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
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
});
</script>
<style scoped>
.rhmuted {
  color: #999;
}
</style>
