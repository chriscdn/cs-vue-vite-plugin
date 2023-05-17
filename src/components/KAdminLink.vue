<template>
  <div clsas="space-y-2">
    <hr />
    <a :href="`${config.baseUrl}?func=admin.index`">Admin Home</a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { configKey, injectStrict } from "..";
export default defineComponent({
  setup() {
    return { config: injectStrict(configKey) };
  },
});
</script>
