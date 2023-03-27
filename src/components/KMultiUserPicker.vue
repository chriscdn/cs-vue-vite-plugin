<template>
  <KMulti2 v-model="userIdsLocal" :readonly="readonly">
    <template #readonly="{ value }">
      <KUserLink :user="value" gif />
    </template>

    <template #add="{ add }">
      <KUserPicker
        @update:model-value="add($event)"
        :users="users"
        :groups="groups"
      />
    </template>
  </KMulti2>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  props: {
    modelValue: {
      type: Array as PropType<number[]>,
      required: true,
    },
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
  },

  computed: {
    userIdsLocal: {
      set(value: Array<number | null>) {
        this.$emit('update:modelValue', value)
      },
      get(): Array<number | null> {
        return this.modelValue
      },
    },
  },
})
</script>
