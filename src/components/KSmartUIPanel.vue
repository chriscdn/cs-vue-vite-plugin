<template>
  <div class="k-smart-ui-panel">
    <div class="k-smart-ui-panel-header" v-if="$slots.header">
      <slot name="header" />
    </div>

    <div class="k-smart-ui-panel-body">
      <slot name="default" />
    </div>

    <div class="k-smart-ui-panel-footer" v-if="$slots.footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="postcss">
.binf-widgets {
  .rhcore-smartui {
    @apply relative;

    .k-smart-ui-panel {
      @apply absolute inset-0 flex flex-col min-w-0 overflow-x-hidden;

      .k-smart-ui-panel-header {
        @apply flex-grow-0 flex-shrink-0 basis-0 px-4 py-3;
        @apply border-b border-solid;
        border-color: #ccc;
        background-color: #dce4e8;
      }

      .k-smart-ui-panel-body {
        @apply flex-auto overflow-y-scroll p-8;
      }

      .k-smart-ui-panel-footer {
        @apply flex-grow-0 flex-shrink-0 basis-0 px-4 py-3;
        @apply border-t border-solid;
        border-color: #ccc;
        background-color: #e8e8e8;
      }
    }
  }
}
</style>
