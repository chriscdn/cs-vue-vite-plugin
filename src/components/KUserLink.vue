<template>
  <KSkeletonLoader v-if="loading" />
  <span v-else-if="userRecLocal" class="k-user-link">
    <KUserGIF v-if="gif" :user-rec="userRecLocal" />
    &nbsp;
    <a href="#" @click.prevent="click">{{ displayName }}</a>
  </span>
</template>

<script lang="ts" setup>
import get from "lodash.get";
import { computed, PropType, ref, toRefs, watch } from "vue";
import userLookup from "../utils/user-lookup";
import { type RHUserSerializer } from "../types/RHUserSerializer";
import { useSession } from "../composables/useSession";

const session = useSession();

declare global {
  interface Window {
    baseUrl?: Function;
    baseURL?: Function;
    doUserDialog?: Function;
  }
}

const props = defineProps({
  user: {
    type: [Number, Object] as PropType<number | RHUserSerializer | null>,
    default: null,
  },
  gif: {
    type: Boolean,
    default: false,
  },
  legacy: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
});

const { user, gif, legacy } = toRefs(props);

const userRecLocal = ref<RHUserSerializer | null>(null);
const loading = ref(false);
const userIdLocal = computed(() => {
  return get(userRecLocal.value, "id") ?? get(userRecLocal.value, "userid");
});

const displayName = computed(() => {
  return (
    get(userRecLocal.value, "display_name") ??
    get(userRecLocal.value, "displayName") ??
    get(userRecLocal.value, "name")
  );
});

// const userType = computed(() => {
//   return get(userRecLocal.value, "type");
// });

const isInteger = (value: unknown): value is number =>
  typeof value === "number" && !isNaN(value);

watch(
  user,
  async (value) => {
    if (isInteger(value)) {
      try {
        loading.value = true;
        userRecLocal.value = await userLookup.lookup(
          session,
          value,
          legacy.value
        );
      } finally {
        loading.value = false;
      }
    } else {
      userRecLocal.value = value;
    }
  },
  { immediate: true }
);

const click = () => {
  if (window.baseURL && window.doUserDialog) {
    window.baseUrl = window.baseURL;
    window.doUserDialog(userIdLocal.value);
  }
};
</script>

<style lang="postcss">
.k-user-link {
  @apply inline-flex items-center;
}
</style>
