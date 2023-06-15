<template>
  <div class="k-menu" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
    <div ref="menuActivator" v-click-away="clickAway">
      <slot name="activator" :on="{ click: toggleMenu }"></slot>
    </div>

    <div
      ref="menuItems"
      class="k-menu-items"
      :class="dropDownMenuItemsClassObj"
      :style="styleDropDownItems"
    >
      <div v-if="loading" class="flex items-center justify-center p-2">
        <KSpinner />
      </div>
      <slot v-else name="default" />
    </div>
  </div>
</template>

<script lang="ts">
import { ref, PropType, defineComponent, Ref } from "vue";
import { convertToUnit } from "../../mixins/measurables";
import { directive } from "vue3-click-away";

type TSize = {
  width: number;
  height: number;
};

type TBox = TSize & {
  top: number;
  left: number;

  topRelativeToViewport: number;
  leftRelativeToViewport: number;
};

export default defineComponent({
  directives: {
    ClickAway: directive,
  },
  setup() {
    const menuActivator: Ref<HTMLDivElement | null> = ref(null);
    const menuItems: Ref<HTMLDivElement | null> = ref(null);
    return { menuItems, menuActivator };
  },

  props: {
    modelValue: {
      type: Boolean as PropType<boolean | null>,
      default: null,
    },
    submenu: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    loading: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },

  data() {
    return {
      visibleLocal: this.modelValue ?? false,
      activatorBox: {
        top: 0,
        left: 0,
        width: 0,
        height: 0,
        topRelativeToViewport: 0,
        leftRelativeToViewport: 0,
      } as TBox,
      menuItemsSize: {
        width: 0,
        height: 0,
      } as TSize,
      // viewportSize: {
      //   width: 0,
      //   height: 0,
      // },
    };
  },
  emits: ["update:modelValue"],
  computed: {
    visible: {
      get() {
        return this.modelValue ?? this.visibleLocal;
      },
      set(value: boolean) {
        this.visibleLocal = value;
        this.$emit("update:modelValue", value);
      },
    },

    styleDropDownItems() {
      // const top: number = this.activatorBox.topRelativeToViewport;

      // const topRelativeToDocument =
      //   this.activatorBox.topRelativeToViewport + this.activatorBox.scrollTop;

      const topRelativeToViewport: number =
        this.activatorBox.topRelativeToViewport;

      const bottomRelativeToViewport: number =
        this.activatorBox.topRelativeToViewport + this.menuItemsSize.height;

      const viewportHeight: number = window.innerHeight;

      // const offset: number = Math.max(
      //   Math.min(
      //     topRelativeToViewport - 24,
      //     bottomRelativeToViewport + 24 - viewportHeight
      //   ),
      //   0
      // );

      const offset: number = Math.max(
        Math.min(
          topRelativeToViewport - 16,
          bottomRelativeToViewport + 16 - viewportHeight
        ),
        0
      );

      return this.submenu
        ? {
            top: convertToUnit(-offset),
            left: convertToUnit(
              this.activatorBox.left + this.activatorBox.width
            ),
          }
        : {
            top: convertToUnit(-offset),
            left: convertToUnit(this.activatorBox.left),
          };
    },

    dropDownMenuItemsClassObj() {
      return {
        hidden: !this.visible,
      };
    },
  },
  watch: {
    loading: {
      async handler(value) {
        if (!value) {
          this.updatePosition();
        }
      },
    },
  },
  methods: {
    clickAway() {
      if (this.visible) {
        this.showMenu(false);
      }
    },

    async updatePosition() {
      // We need the DOM to render everything before repositioning it.
      if (this.menuActivator && this.menuItems) {
        await this.$nextTick();

        // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
        // https://developer.mozilla.org/en-US/docs/Web/API/DOMRect

        // getBoundingClientRect is relative to the viewport  See docs on this
        // method for relative to document.
        const boundingRect: DOMRect =
          this.menuActivator.getBoundingClientRect();

        this.activatorBox = {
          left: this.menuActivator.offsetLeft,
          top: this.menuActivator.offsetTop,
          width: this.menuActivator.offsetWidth,
          height: this.menuActivator.offsetHeight,
          topRelativeToViewport: boundingRect.top,
          leftRelativeToViewport: boundingRect.left,
        };

        this.menuItemsSize = {
          width: this.menuItems.offsetWidth,
          height: this.menuItems.offsetHeight,
        };
      }
    },
    showMenu(visibility: boolean) {
      this.visible = visibility;
      this.updatePosition();
    },
    toggleMenu() {
      this.showMenu(!this.visible);
    },
    mouseEnter() {
      if (this.submenu) {
        this.showMenu(true);
      }
    },
    mouseLeave() {
      if (this.submenu) {
        this.showMenu(false);
      }
    },
  },
});
</script>

<style lang="postcss" scoped>
.k-menu {
  @apply relative;

  .k-menu-items {
    @apply transition absolute;
    @apply inset-y-auto inset-x-0;
    @apply z-10 bg-white rounded-lg w-64 shadow-2xl border border-solid border-gray-300;
  }
}
</style>
