<template>
  <div class="k-node-picker-field">
    <input
      ref="input"
      type="text"
      class="k-input"
      :value="name"
      @focus="openWindow"
    />
    <KButton small @click="openWindow">
      {{ browseButtonLabel }}
    </KButton>
    <KButton small @click="clear">
      {{ clearButtonLabel }}
    </KButton>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="k-node-picker-breadcrumb" v-html="breadcrumbString" />
  </div>
</template>

<script>
import buildUrl from 'build-url'

import cookies from 'js-cookie'
import { getCurrentInstance } from 'vue'

import AncestorLookup from '../utils/ancestor-lookup'

const ancestorLookup = new AncestorLookup()

export default {
  props: {
    modelValue: {
      type: Number,
      default: null,
    },
    title: {
      type: String,
      default: 'Target Browse',
    },
    objid: {
      type: Number,
      default: null,
    },
    selectPerm: {
      type: Number,
      default: 2, // read permissions
    },
    width: {
      type: Number,
      default: 800,
    },
    height: {
      type: Number,
      default: 600,
    },
    selectScreen: {
      type: Array,
      default: () => [],
    },
    browseButtonLabel: {
      type: String,
      default: 'Browse Content Server...',
    },
    clearButtonLabel: {
      type: String,
      default: 'clear',
    },
  },
  data() {
    return {
      breadcrumb: null,
    }
  },
  computed: {
    dataid: {
      set(value) {
        this.$emit('update:modelValue', value)
      },
      get() {
        return this.modelValue
      },
    },

    uniqueID() {
      const uid = getCurrentInstance().uid
      return `targetbrowse_${uid}`
    },

    breadcrumbString() {
      if (this.breadcrumb) {
        return `Path: ${this.breadcrumb.replace(':', ' &#9654; ')}`
      } else {
        return null
      }
    },

    globalCallbackFunctionName() {
      return `${this.uniqueID}_DoSelection`
    },

    selectScreenString() {
      if (this.selectScreen.length) {
        return {
          selectScreen: `{${this.selectScreen.join(',')}}`,
        }
      } else {
        return null
      }
    },

    urlParams() {
      return {
        func: 'll',
        objAction: 'TargetBrowse',
        headerLabel: this.title,
        objid: this.targetBrowseObjID(),
        selectPerm: this.selectperm,
        ...this.selectScreenString,
        formname: 'ignored',
        fieldPrefix: this.uniqueID,
      }
    },

    url() {
      return buildUrl(this.$cgi, {
        queryParams: this.urlParams,
      })
    },

    name() {
      return (this.breadcrumb || '').split(':').slice(-1)[0]
    },

    windowParams() {
      const windowParams = {
        width: this.width,
        height: this.height,
        resizable: 'yes',
        menubar: 'no',
        scrollbars: 'yes',
        toolbar: 'yes',
      }

      return Object.entries(windowParams)
        .map(([key, value]) => `${key}=${value}`)
        .join(',')
    },
  },

  watch: {
    dataid: {
      async handler() {
        if (this.dataid && !this.breadcrumb) {
          const ancestors = await ancestorLookup.lookup(
            this.$session,
            this.dataid,
          )
          this.breadcrumb = ancestors.map((item) => item.name).join(':')
        } else if (!this.dataid) {
          this.breadcrumb = null
        }
      },
      immediate: true,
    },
  },

  async mounted() {
    window[this.globalCallbackFunctionName] = this.callback
  },

  beforeUnmount() {
    delete window[this.globalCallbackFunctionName]
  },

  methods: {
    openWindow() {
      window.open(this.url, 'WindowName', this.windowParams)
      if (this.$refs.input) {
        this.$refs.input.blur()
      }
    },

    targetBrowseObjID() {
      // not computed, since cookies are not reactive
      return this.objid || parseInt(cookies.get('TargetBrowseObjID')) || 0
    },
    didCloseWindow() {
      console.log('didClose')
    },
    callback(dataid, breadcrumb) {
      this.breadcrumb = breadcrumb
      this.dataid = dataid
    },
    clear() {
      this.breadcrumb = null
      this.dataid = null
    },
  },
}
</script>

<style lang="less">
.k-node-picker-field {
  @apply bg-gray-100 rounded p-2;

  input[type='text'] {
    width: 20em;
  }
  .k-node-picker-breadcrumb {
    @apply text-xs mt-1 ml-1;
  }

  .k-button {
    @apply ml-1;
  }
}
</style>
