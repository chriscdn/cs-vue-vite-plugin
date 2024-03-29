<template>
  <div class="flex items-center gap-2">
    <div v-if="loading" class="h-3 w-36 bg-slate-200 rounded animate-pulse" />

    <template v-else-if="nodeRecResolved">
      <div class="flex items-center gap-2">
        <img v-if="image" :src="nodeRecResolved.gif" width="16" height="16" />

        <a :href="nodeRecResolved.url!">
          {{ nodeRecResolved.name }}
        </a>
      </div>

      <template v-if="clickable">
        <KFunctionMenuModern
          v-if="modernMenu"
          :dataid="nodeRecResolved.dataId"
        />
        <KFunctionMenu v-else :dataid="nodeRecResolved.dataId" />
      </template>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div
        class="flex items-center"
        v-html="nodeRecResolved.modifiedImageCallback"
      />
    </template>
  </div>
</template>

<script lang="ts">
import { injectStrict, sessionKey } from "../injection";
import { type RHNodeSerializer } from "../types/RHNodeSerializer";
import { defineComponent, type PropType } from "vue";
import nodeLookup from "../utils/node-lookup";

export default defineComponent({
  setup() {
    return {
      session: injectStrict(sessionKey),
    };
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
    modernMenu: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  data() {
    return {
      nodeRecLocal: null as RHNodeSerializer | null,
      loading: false,
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
          try {
            this.loading = true;
            this.nodeRecLocal = await nodeLookup.lookup(
              this.session,
              value,
              this.legacy
            );
          } finally {
            this.loading = false;
          }
        }
      },
      immediate: true,
    },
  },
});
</script>
