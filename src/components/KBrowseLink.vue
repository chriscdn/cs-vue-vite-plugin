<template>
  <span v-if="nodeRecResolved">
    <img v-if="image" :src="nodeRecResolved.gif" />&nbsp;<a
      :href="nodeRecResolved.url"
    >
      {{ nodeRecResolved.name }}
    </a>
    <KFunctionMenu v-if="clickable" :dataid="nodeRecResolved.dataid" />
    <!-- eslint-disable-next-line vue/no-v-html -->
    <span v-html="nodeRecResolved.modifiedImageCallback" />
  </span>
</template>

<script lang="ts">
import { defineComponent, inject, type PropType } from 'vue'
import nodeLookup from '../utils/node-lookup'

export default defineComponent({
  setup() {
    const session = inject('session', {})
    return { session }
  },
  props: {
    nodeRec: {
      type: Object as PropType<Record<string, any> | null>,
      default: null,
    },
    dataid: {
      type: Number as PropType<number | null>,
      default: null,
    },
    image: {
      type: Boolean as PropType<boolean | null>,
      default: true,
    },
    clickable: {
      type: Boolean as PropType<boolean | null>,
      default: true,
    },
  },
  data() {
    return {
      nodeRecLocal: null,
    }
  },
  computed: {
    nodeRecResolved() {
      return this.nodeRec ?? this.nodeRecLocal
    },
  },
  watch: {
    dataid: {
      async handler(value) {
        if (value) {
          this.nodeRecLocal = await nodeLookup.lookup(this.session, value)
        }
      },
      immediate: true,
    },
  },
})
</script>
