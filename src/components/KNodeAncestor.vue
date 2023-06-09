<template>
  <div class="k-node-breadcrumb">
    <template v-for="(item, index) in breadcrumb" :key="item.dataid">
      {{ item.name }}
      <template v-if="index < breadcrumb.length - 1"> &#9654; </template>
    </template>
  </div>
</template>

<script lang="ts">
import { injectStrict, sessionKey } from "../injection";
import { defineComponent } from "vue";
import ancestorLookup from "../utils/ancestor-lookup";
export default defineComponent({
  setup() {
    return { session: injectStrict(sessionKey) };
  },

  props: {
    dataid: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      breadcrumb: [] as Array<Record<string, any>>,
    };
  },

  watch: {
    dataid: {
      async handler(value) {
        if (value) {
          this.breadcrumb = await ancestorLookup.lookup(this.session, value);
        }
      },
      immediate: true,
    },
  },
});
</script>

<style lang="postcss">
.k-node-breadcrumb {
  @apply text-xs mt-1 ml-1;

  span:not(:last-child):after {
    /* content: ' &#9654; '; */
  }
}
</style>
