<template>
  <a href="#" @click.prevent="emitClick">
    <slot />
    <transition name="fade" mode="out-in">
      <span v-if="isActive && sortAsc" class="j-sort-header-arrow"
        >&#8593;</span
      >
      <span v-else-if="isActive" class="j-sort-header-arrow">&#8595;</span>
    </transition>
  </a>
</template>

<script lang="ts">
import { TSort } from "../types";
import { PropType, defineComponent } from "vue";

export default defineComponent({
  props: {
    keypath: {
      type: String,
      required: true,
    },
    modelValue: {
      type: Object as PropType<TSort>,
      default: () => {},
    },
  },
  computed: {
    sortKey() {
      return this.modelValue.sortKey;
    },
    sortAsc() {
      return Boolean(this.modelValue.sortAsc);
    },

    isActive() {
      return this.keypath == this.sortKey;
    },
  },
  methods: {
    emitClick() {
      const sortKey = this.keypath;
      const sortAsc = this.isActive ? !this.sortAsc : true;
      const sortResolved = sortAsc ? sortKey : `-${sortKey}`;

      return this.$emit("update:modelValue", {
        sortKey,
        sortAsc,
        sortResolved,
      });
    },
  },
});
</script>

<style lang="postcss">
.j-sort-header-arrow {
  @apply ml-px;
}
</style>
