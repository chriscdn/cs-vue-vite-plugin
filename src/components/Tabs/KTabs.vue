<template>
  <div class="k-tabs">
    <div class="k-tabs-nav">
      <div v-for="tab in tabs" :key="tab.props!.name" :class="classObj(tab)">
        <a :href="`#${tab.props.name}`" @click="selectTab(tab.props.name)">
          {{ tab.props.title }}
        </a>
      </div>
    </div>
    <div class="k-tabs-content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import get from 'lodash.get'
import { defineComponent } from 'vue'
import { KTabItem } from '..'

export default defineComponent({
  provide() {
    return {
      tabs: this,
    }
  },
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: String,
      default: null,
    },
  },

  data() {
    return {
      selectedTab: this.modelValue,
    }
  },

  computed: {
    // no types for VNode?
    tabs(): Array<any> {
      return this.$slots.default!().filter((item) => Boolean(item.props))
    },
    tabNames() {
      return this.tabs.map((tab) => tab.props.name)
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
    initialSelectedTab() {
      const hash = window.location.hash.replace('#', '')
      const firstTab = this.tabNames[0]

      return [this.selectedTab, hash, firstTab].find((item) => Boolean(item))
    },

    selectTab(tabName: string) {
      this.selectedTab = this.tabNames.includes(tabName)
        ? tabName
        : this.tabNames[0]
    },

    classObj(tab: typeof KTabItem) {
      return {
        'k-tabs-nav-tab': true,
        'k-tabs-active': this.selectedTab == get(tab, 'props.name'),
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
