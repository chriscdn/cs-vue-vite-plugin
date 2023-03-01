<template>
  <div class="k-tabs">
    <div class="k-tabs-nav">
      <div v-for="tab in tabs" :key="tab.name" :class="classObj(tab)">
        <a :href="`#${tab.name}`" @click="selectTab(tab.name)">
          {{ tab.title }}
        </a>
      </div>
    </div>

    <div class="k-tabs-content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

type Tab = {
  name: string
  title: string
}

export default defineComponent({
  provide() {
    return {
      tabs: this,
    }
  },
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: String as PropType<string>,
      default: null,
    },
  },

  data() {
    return {
      selectedTab: this.modelValue,
    }
  },

  computed: {
    /**
     * This implementation has to do with tabs being dynamically rendered with a for loop.
     * The child is not of type KTabItem if rendered in a loop.  The `.children` lookup
     * takes care of that.
     */
    tabs(): Array<Tab> {
      const isTab = (node: any) => node.type.name === 'KTabItem'

      // This fragment condition doesn't resolve to true on the production build.
      const isFragment = (node: any) => typeof node.type === 'symbol' // && node.type.description === 'Fragment'

      const hasTabs = (node: any) =>
        node.children && node.children.length && node.children.some(isTab)

      const isTabParent = (node: any) => isFragment(node) && hasTabs(node)

      const slots = this.$slots.default ? this.$slots.default() : []

      return slots
        .filter((node) => isTab(node) || isTabParent(node))
        .flatMap((node) => (isTabParent(node) ? node.children : node))
        .map((node: any) => {
          return {
            name: node.props.name,
            title: node.props.title,
          } as Tab
        })
    },

    tabNames() {
      return this.tabs.map((tab) => tab.name)
    },
  },

  mounted() {
    this.selectedTab = this.initialSelectedTab()
  },

  watch: {
    selectedTab(value) {
      this.$emit('update:modelValue', value)
    },
    modelValue(value) {
      this.selectTab(value)
    },
  },

  methods: {
    initialSelectedTab(): string {
      const hash = window.location.hash.replace('#', '')
      const firstTab = this.tabNames[0]

      return [this.selectedTab, hash, firstTab].find((item) =>
        Boolean(item),
      ) as string
    },

    selectTab(tabName: string) {
      this.selectedTab = this.tabNames.includes(tabName)
        ? tabName
        : this.tabNames[0]
    },

    classObj(tab: Tab) {
      return {
        'k-tabs-nav-tab': true,
        'k-tabs-active': this.selectedTab == tab.name,
      }
    },
  },
})
</script>

<style lang="postcss">
.k-tabs {
  /* margin-top: 1em; */
  @apply my-4;
  .k-tabs-nav {
    @apply border border-solid border-gray-400 border-t-0 border-l-0 border-r-0;
    @apply flex;

    .k-tabs-nav-tab {
      @apply ml-2;
      @apply px-2 py-1;
      @apply whitespace-nowrap;
      @apply bg-gray-200;
      @apply rounded-t;
      @apply border border-solid border-gray-400 border-b-0;

      a {
        @apply text-lg;
        @apply no-underline;
      }

      &.k-tabs-active {
        margin-bottom: -1px;
        padding-bottom: 1px;
        background-color: #f7f8f8;
        a {
          @apply text-black;
        }
      }
    }
  }
  .k-tabs-content {
    @apply p-2 pt-3;
  }
}
</style>
