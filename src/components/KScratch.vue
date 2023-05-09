<template>
  <div>
    <button @click="click">click</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  inject: ["ksnackbar"],
  methods: {
    click() {
      // success({ message: 'hello' })
    },
  },
});
</script>

<style></style>
