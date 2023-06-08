<template>
  <div class="k-menu" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
    <div ref="menuButton" v-click-away="clickAway">
      <slot name="activator" :on="{ click: toggleMenu }"></slot>
    </div>

    <div
      class="k-menu-items"
      :class="dropDownMenuItemsClassObj"
      :style="styleDropDownItems"
    >
      <slot name="default" />
    </div>
  </div>
</template>

<script lang="ts">
import { ref, PropType, defineComponent } from "vue";
import { convertToUnit } from "@/mixins/measurables";
import { directive } from "vue3-click-away";

export default defineComponent({
  directives: {
    ClickAway: directive,
  },
  setup() {
    const menuButton = ref();
    return { menuButton };
  },
  props: {
    submenu: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },

  data() {
    return {
      visible: false,
      left: 0,
      top: 0,
      height: 0,
      width: 0,
    };
  },

  computed: {
    styleDropDownItems() {
      return this.submenu
        ? {
            left: convertToUnit(this.width),
            top: convertToUnit(0),
          }
        : {
            left: convertToUnit(this.left),
            top: convertToUnit(this.height),
          };
    },
    dropDownMenuItemsClassObj() {
      return {
        hidden: !this.visible,
      };
    },
  },

  methods: {
    clickAway() {
      if (this.visible) {
        this.showMenu(false);
      }
    },
    updatePosition() {
      if (this.menuButton) {
        this.left = this.menuButton.offsetLeft;
        this.height = this.menuButton.offsetHeight;
        this.width = this.menuButton.offsetWidth;
      }
    },
    showMenu(visibility: boolean) {
      this.updatePosition();
      this.visible = visibility;
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

<style lang="postcss">
.k-menu {
  @apply relative;

  .k-menu-button {
    @apply text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800;
  }

  .k-menu-items {
    @apply transition absolute;
    @apply inset-y-auto inset-x-0;
    @apply z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700;

    .k-menu-item {
      @apply block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white;
    }
  }
}
</style>
