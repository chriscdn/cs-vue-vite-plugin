<template>
  <div class="flex items-center gap-2">
    <template v-if="lookupError"></template>

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
          :dataid="nodeRecResolved.dataid"
        />
        <KFunctionMenu v-else :dataid="nodeRecResolved.dataid" />
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
      lookupError: false,
    };
  },
  computed: {
    nodeRecResolved() {
      return this.nodeRec ?? this.nodeRecLocal;
    },
    isError() {
      return this.nodeRecLocal instanceof Error;
    },
  },
  watch: {
    dataid: {
      async handler(value) {
        if (value) {
          this.nodeRecLocal = await nodeLookup
            .lookup(this.session, value, this.legacy)
            .catch((_) => {
              this.lookupError = true;
              return null;
            });
        }
      },
      immediate: true,
    },
  },
});
</script>
