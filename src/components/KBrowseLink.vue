<template>
  <div class="flex items-center gap-2">
    <KSkeletonLoader v-if="loading" />
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

<script lang="ts" setup>
import { type RHNodeSerializer } from "../types/RHNodeSerializer";
import { computed, ref, toRefs, watch, type PropType } from "vue";
import nodeLookup from "../utils/node-lookup";
import { useSession } from "../composables/useSession";
import KSkeletonLoader from "./KSkeletonLoader.vue";

const session = useSession();

const props = defineProps({
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
});

const { nodeRec, dataid, image, clickable, legacy, modernMenu } = toRefs(props);

const nodeRecLocal = ref<RHNodeSerializer | null>(null);
const loading = ref(false);

const nodeRecResolved = computed(() => nodeRec.value ?? nodeRecLocal.value);

watch(
  dataid,
  async (value) => {
    if (value) {
      try {
        loading.value = true;
        nodeRecLocal.value = await nodeLookup.lookup(
          session,
          value,
          legacy.value,
        );
      } finally {
        loading.value = false;
      }
    }
  },
  { immediate: true },
);
</script>
