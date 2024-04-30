<template>
  <KMulti2 v-model="userIdsLocal" :readonly="readonly">
    <template #readonly="{ value }">
      <KUserLink :user="value" gif :legacy="legacy" />
    </template>

    <template #add="{ add }">
      <KUserPicker
        @update:model-value="add($event)"
        :users="users"
        :groups="groups"
        :legacy="legacy"
      />
    </template>
  </KMulti2>
</template>

<script lang="ts" setup>
import { PropType, computed } from "vue";

const userIdsLocal = defineModel<number | null>({ required: true });

defineProps({
  users: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  groups: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  readonly: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  legacy: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
});

// const userIdsLocal = computed({
//   set(value: Array<number | null>) {
//     this.$emit("update:modelValue", value);
//   },
//   get(): Array<number | null> {
//     return this.modelValue;
//   },
// });
</script>
