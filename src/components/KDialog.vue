<template>
  <slot name="activator" :on="on" />
  <teleport v-if="mounted" to=".k-app">
    <transition name="fade">
      <div v-if="dialog" class="k-dialog" :style="[style]">
        <div
          ref="content"
          v-click-away="clickAway"
          class="k-dialog-content"
          :class="classObj"
          :style="[measurableStyles]"
        >
          <slot :on="on" />
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { directive } from "vue3-click-away";
import measurables from "../mixins/measurables";
import hotkeys from "hotkeys-js";

export default defineComponent({
  directives: {
    ClickAway: directive,
  },
  mixins: [measurables],

  props: {
    modelValue: {
      type: Boolean as PropType<boolean>,
      required: false,
    },
    persistent: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    scrollable: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    width: {
      type: [Number, String] as PropType<number | string>,
      default: "75vw",
    },
    maxHeight: {
      type: [Number, String] as PropType<number | string>,
      default: "90%",
    },
    zIndex: {
      type: [Number] as PropType<number>,
      default: 10,
    },
  },
  emits: ["update:modelValue"],
  data() {
    return {
      dialog: false,
      mounted: false,
    };
  },
  computed: {
    classObj() {
      return {
        "k-dialog--scrollable": this.scrollable,
      };
    },
    style() {
      return {
        zIndex: this.zIndex,
      };
    },
  },
  watch: {
    modelValue: {
      handler(value) {
        this.dialog = value;
      },
      immediate: true,
    },
    async dialog(value) {
      this.$emit("update:modelValue", value);

      if (value) {
        await this.$nextTick();
        disableBodyScroll(this.$refs.content as Element);
      } else {
        enableBodyScroll(this.$refs.content as Element);
      }
    },
  },
  mounted() {
    // this ensures the target .k-app is rendered before we try to teleport to it
    this.mounted = true;

    hotkeys("esc", () => {
      if (this.persistent) {
        // do nothing
      } else {
        this.dialog = false;
      }
    });
  },
  beforeUnmount() {
    hotkeys.unbind("esc");
  },
  methods: {
    clickAway() {
      if (!this.persistent) {
        this.closeDialog();
      }
    },
    closeDialog() {
      if (this.dialog) {
        this.dialog = false;
      }
    },
    on() {
      this.dialog = !this.dialog;
    },
  },
});
</script>

<style lang="postcss">
.k-dialog {
  @apply fixed inset-0;
  @apply bg-gray-600 bg-opacity-70;
  @apply flex justify-center items-center;

  .k-dialog-content {
    @apply bg-white p-3 rounded;
    @apply overflow-y-auto;
    @apply shadow-2xl;
  }

  .k-dialog--scrollable {
    @apply flex;
    .k-card {
      @apply flex-grow;

      .k-card-text {
        @apply overflow-y-auto;
      }
    }
  }
}
</style>
