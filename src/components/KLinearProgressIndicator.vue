<template>
  <div class="k-progress-line" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>

<style lang="postcss">
.k-progress-line,
.k-progress-line:before {
  height: 2px;
  @apply w-full;
  @apply m-0;
}
.k-progress-line {
  /* background-color: #f8f8f8; */
  display: flex;
}
.k-progress-line:before {
  background-color: #05447e;
  content: "";
  -webkit-animation: k-progress-running-progress 2s cubic-bezier(0.4, 0, 0.2, 1)
    infinite;
  animation: k-progress-running-progress 2s cubic-bezier(0.4, 0, 0.2, 1)
    infinite;
}
@-webkit-keyframes k-progress-running-progress {
  0% {
    margin-left: 0px;
    margin-right: 100%;
  }
  50% {
    margin-left: 25%;
    margin-right: 0%;
  }
  100% {
    margin-left: 100%;
    margin-right: 0;
  }
}
@keyframes k-progress-running-progress {
  0% {
    margin-left: 0px;
    margin-right: 100%;
  }
  50% {
    margin-left: 25%;
    margin-right: 0%;
  }
  100% {
    margin-left: 100%;
    margin-right: 0;
  }
}
</style>
