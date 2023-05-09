<template>
  <hr />
  <a :href="`${config.baseURL}?func=admin.index`">Admin Home</a>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
export default defineComponent({
  setup() {
    const config: any = inject("config", {});
    return { config };
  },
});
</script>
