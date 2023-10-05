<template>
  <div class="k-smart-ui-panel" :style="style">
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
import { PropType, defineComponent } from "vue";
import { convertToUnit } from "../mixins/measurables";

export default defineComponent({
  props: {
    fontSize: {
      type: Number as PropType<number>,
      default: 12,
    },
  },
  computed: {
    style() {
      return {
        fontSize: convertToUnit(this.fontSize),
      };
    },
  },
});
</script>

<style lang="postcss">
.k-smart-ui-panel-header,
.k-smart-ui-panel-footer {
  @apply hidden;
}

.binf-widgets {
  .rhcore-smartui {
    /* Increase the z-index to permit dialog and such to be above the SmartUI components. */
    @apply relative z-10;

    .k-smart-ui-panel {
      @apply absolute inset-0 flex flex-col min-w-0 overflow-x-hidden;

      .k-smart-ui-panel-header {
        @apply flex-grow-0 flex-shrink-0 basis-0 px-4 py-3;
        @apply border-b border-solid;
        border-color: #cccccc;
        background-color: #dce4e8;
        /* undo the hide in classic case */
        @apply block;
      }

      .k-smart-ui-panel-body {
        @apply flex-auto overflow-y-scroll p-8;
      }

      .k-smart-ui-panel-footer {
        @apply flex-grow-0 flex-shrink-0 basis-0 px-4 py-3;
        @apply border-t border-solid;
        border-color: #cccccc;
        background-color: #e8e8e8;
        /* undo the hide in classic case */
        @apply block;
      }
    }
  }
}
</style>
