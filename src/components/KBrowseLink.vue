<template>
  <div v-if="nodeRecResolved" class="flex items-center gap-2">
    <div class="flex items-center gap-1">
      <img
        v-if="image"
        :src="nodeRecResolved.gif"
        width="16"
        height="16"
      />&nbsp;<a :href="nodeRecResolved.url!">
        {{ nodeRecResolved.name }}
      </a>
    </div>

    <KFunctionMenuModern v-if="clickable" :dataid="nodeRecResolved.dataid" />
    <KFunctionMenu v-if="clickable" :dataid="nodeRecResolved.dataid" />

    <!-- eslint-disable-next-line vue/no-v-html -->
    <div
      class="flex items-center"
      v-html="nodeRecResolved.modifiedImageCallback"
    />
  </div>
</template>

<script lang="ts">
import { injectStrict, sessionKey } from "../injection";
import { type RHNodeSerializer } from "../types/RHNodeSerializer";
import { defineComponent, type PropType } from "vue";
import nodeLookup from "../utils/node-lookup";

export default defineComponent({
  setup() {
    return { session: injectStrict(sessionKey) };
  },
  props: {
    nodeRec: {
      type: Object as PropType<RHNodeSerializer | null>,
      default: null,
    },
    dataid: {
      type: Number as PropType<number | null>,
      default: null,
    },
    image: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
    clickable: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
    legacy: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  data() {
    return {
      nodeRecLocal: null as RHNodeSerializer | null,
    };
  },
  computed: {
    nodeRecResolved() {
      return this.nodeRec ?? this.nodeRecLocal;
    },
  },
  watch: {
    dataid: {
      async handler(value) {
        if (value) {
          this.nodeRecLocal = await nodeLookup.lookup(
            this.session,
            value,
            this.legacy
          );
        }
      },
      immediate: true,
    },
  },
});
</script>
