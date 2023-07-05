<template>
  <div class="k-menu" @mouseenter="mouseEnter">
    <div ref="menuActivator" v-click-away="clickAway" @mouseleave="mouseLeave">
      <slot name="activator" :on="{ click: toggleMenu }"></slot>
    </div>

    <Teleport to=".k-app">
      <div
        @mouseenter="mouseEnter"
        @mouseleave="mouseLeave"
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
    </Teleport>
  </div>
</template>

<script lang="ts">
import { ref, PropType, defineComponent, Ref } from "vue";
import { convertToUnit } from "../../mixins/measurables";
import { directive } from "vue3-click-away";
/**
 * Menu Items are teleported to the KApp (or .k-app) component, which has
 * `position:relative;`. This is done to allow menus to show in dialogs, which
 * would otherwise clip the menu due to overflow rules.
 */
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
      appBox: null as DOMRect | null,
      menuActivatorBox: null as DOMRect | null,
      menuItemsBox: null as DOMRect | null,
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
      if (this.appBox && this.menuActivatorBox && this.menuItemsBox) {
        const viewportHeight: number = window.innerHeight;

        const itemsHeight: number = this.menuItemsBox.height;
        const padding: number = 8;

        const maxOffset: number = this.menuActivatorBox.top - padding;

        const bottomOverflow: number = Math.max(
          0,
          padding + this.menuActivatorBox.top + itemsHeight - viewportHeight
        );

        const offset: number = Math.min(bottomOverflow, maxOffset);

        return {
          top: convertToUnit(
            this.menuActivatorBox.top - this.appBox.top - offset
          ),
          left: convertToUnit(this.menuActivatorBox.right - this.appBox.left),
        };
      } else {
        return {};
      }
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

        const kApp: HTMLDivElement | null = document.querySelector(".k-app");

        if (kApp) {
          this.appBox = kApp.getBoundingClientRect();
          this.menuActivatorBox = this.menuActivator.getBoundingClientRect();
          this.menuItemsBox = this.menuItems.getBoundingClientRect();
        }
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

<style lang="postcss">
div.k-menu {
  @apply relative;
}
div.k-menu-items {
  @apply transition absolute;
  @apply inset-y-auto inset-x-0;
  @apply z-10 bg-white rounded-lg w-64 shadow-2xl border border-solid border-gray-300;
}
</style>
