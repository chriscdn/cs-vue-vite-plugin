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

    <KButton small @click="clear" v-if="clearable">
      {{ clearButtonLabel }}
    </KButton>

    <KNodeAncestor :dataid="dataid" v-if="dataid" />
  </div>
</template>

<script>
import buildUrl from 'build-url'
import cookies from 'js-cookie'
import { defineComponent, getCurrentInstance, inject } from 'vue'
import ancestorLookup from '../utils/ancestor-lookup'
import KNodeAncestor from './KNodeAncestor.vue'

export default defineComponent({
  setup() {
    const session = inject('session', {})
    const config = inject('config', {})
    return { session, config }
  },
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
    clearable: {
      type: Boolean,
      defalut: true,
    },
    clearButtonLabel: {
      type: String,
      default: 'clear',
    },
  },
  data() {
    return {
      breadcrumb: [],
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
    // breadcrumbString() {
    //   if (this.breadcrumb) {
    //     return `Path: ${this.breadcrumb.replace(':', ' &#9654; ')}`
    //   } else {
    //     return null
    //   }
    // },
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
      return buildUrl(this.config.baseURL, {
        queryParams: this.urlParams,
      })
    },
    name() {
      return this.breadcrumb[this.breadcrumb.length - 1]?.name
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
        if (this.dataid) {
          this.breadcrumb = await ancestorLookup.lookup(
            this.session,
            this.dataid,
          )
        } else {
          this.breadcrumb = []
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
      // debugger
      // this.breadcrumb = breadcrumb.split(':')
      this.dataid = dataid
    },
    clear() {
      this.breadcrumb = []
      this.dataid = null
    },
  },
  components: { KNodeAncestor },
})
</script>

<style lang="postcss">
.k-node-picker-field {
  @apply bg-gray-100 rounded p-2;

  input[type='text'] {
    width: 20em;
  }

  .k-button {
    @apply ml-1;
  }
}
</style>
