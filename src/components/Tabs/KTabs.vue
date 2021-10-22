<template>
    <div class="k-tabs">
        <div class="k-tabs-nav">
            <div v-for="tab in tabs" :key="tab.props.name" :class="classObj(tab)">
                <a :href="`#${tab.props.name}`" @click="selectTab(tab)">{{ tab.props.title }}</a>
            </div>
        </div>
        <div class="k-tabs-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import get from 'lodash.get'
export default {
    provide() {
        return {
            tabs: this,
        }
    },

    data() {
        return {
            // tabs: [],
            selectedTab: null,
        }
    },

    methods: {
        selectTab(tab) {
            this.selectedTab = get(tab, 'props.name')
        },
        classObj(tab) {
            return {
                'k-tabs-nav-tab': true,
                'k-tabs-active': this.selectedTab == get(tab, 'props.name'),
            }
        },
    },
    computed: {
        tabs() {
            return this.$slots.default().filter((item) => Boolean(item.props))
        },
    },
    mounted() {
        // this.tabs = this.$slots.default()
        // todo - use the #anchor
        this.selectedTab = get(this.tabs, '[0].props.name')
    },
}
</script>

<style lang="less">
.k-tabs {
    // margin-top: 1em;
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
