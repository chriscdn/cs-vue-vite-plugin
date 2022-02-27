<template>
  <span v-if="nodeRec"><img v-if="image" :src="nodeRec.gif">&nbsp;<a :href="nodeRec.url">{{
    nodeRec.name
  }}</a>&nbsp;<KFunctionMenu v-if="clickable" :dataid="nodeRec.dataid" />
    <!-- eslint-disable-next-line vue/no-v-html -->
    <span v-html="nodeRec.modifiedImageCallback" /></span>
</template>

<script>
export default {
  props: {
    nodeRec: {
      type: Object,
      default: null,
    },
    image: {
      type: Boolean,
      default: true,
    },
    clickable: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
