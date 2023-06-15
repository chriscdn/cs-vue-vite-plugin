<template>
  <KMenu v-model="visible" :loading="loading">
    <template #activator="{ on }">
      <KMenuDownIcon :size="size" v-on="on" class="cursor-pointer" />
    </template>

    <KList>
      <template v-for="(action, index) in actions">
        <KDivider v-if="action.signature === '-'" :key="`${index}`" />

        <KMenu v-else-if="action.children.length" submenu :key="`a${index}`">
          <template #activator="{ on }">
            <KListItem :title="action.name" v-on="on">
              <template #append>
                <KRightCaret />
              </template>
            </KListItem>
          </template>
          <KList>
            <KListItem
              v-for="(subaction, index) in action.children"
              :key="`b${index}`"
              :title="subaction.name"
              :href="subaction.url"
            />
          </KList>
        </KMenu>

        <KListItem
          :title="action.name"
          v-else
          :href="action.url"
          :key="`c${index}`"
        />
      </template>
    </KList>
  </KMenu>
</template>

<script lang="ts">
type TAction = {
  name: string;
  url: string;
  children: TAction[];
  signature: string;
};

import { PropType, defineComponent } from "vue";
import KMenuDownIcon from "./Icons/KMenuDownIcon.vue";
import KListItem from "./KList/KListItem.vue";
import KDivider from "./KDivider.vue";
import Semaphore from "@chriscdn/promise-semaphore";
import { useSession } from "../index";

const semaphore = new Semaphore();

export default defineComponent({
  components: { KMenuDownIcon, KListItem, KDivider },
  setup() {
    const session = useSession();

    return { session };
  },
  props: {
    dataid: {
      type: Number as PropType<number>,
      required: true,
    },
    size: {
      type: Number as PropType<number>,
      default: 12,
    },
  },
  data() {
    return {
      visible: false,
      actions: [] as TAction[],
      loading: false as Boolean,
    };
  },
  watch: {
    visible: {
      handler(value: boolean) {
        if (value) {
          this.refreshActions();
        }
      },
    },
  },
  methods: {
    async refreshActions() {
      try {
        await semaphore.acquire(this.dataid);

        if (this.actions.length === 0) {
          this.loading = true;
          const { data } = await this.session.get(
            `/api/v1/nodes/${this.dataid}/actions`
          );
          this.actions = data.actions as TAction[];
        }
      } finally {
        this.loading = false;
        semaphore.release(this.dataid);
      }
    },
  },
});
</script>
