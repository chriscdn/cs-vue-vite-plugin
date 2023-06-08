<template>
  <KMenu v-model="visible">
    <template #activator="{ on }">
      <KMenuDownIcon :size="size" v-on="on" />
    </template>

    <KList>
      <template v-for="(action, index) in actions" :key="index">
        <KDivider v-if="action.signature === '-'" />

        <KMenu v-else-if="action.children.length" submenu>
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
              :key="index"
              :title="subaction.name"
              :href="subaction.url"
            />
          </KList>
        </KMenu>

        <KListItem :title="action.name" v-else :href="action.url" />
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

import { PropType, defineComponent, ref } from "vue";
import KMenuDownIcon from "./Icons/KMenuDownIcon.vue";
import { useSession } from "..";
import KListItem from "./KList/KListItem.vue";
import KDivider from "./KDivider.vue";
import Semaphore from "@chriscdn/promise-semaphore";

const semaphore = new Semaphore();

export default defineComponent({
  components: { KMenuDownIcon, KListItem, KDivider },
  setup(props) {
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
      default: 32,
    },
  },
  data() {
    return {
      visible: false,
      actions: [] as TAction[],
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
          const { data } = await this.session.get(
            `/api/v1/nodes/${this.dataid}/actions`
          );
          this.actions = data.actions as TAction[];
        }
      } finally {
        semaphore.release(this.dataid);
      }
    },
  },
  mounted() {
    this.refreshActions();
  },
});
</script>
