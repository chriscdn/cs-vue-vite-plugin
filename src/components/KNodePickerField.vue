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

<script lang="ts">
import type { Session } from '@kweli/cs-rest'
import buildUrl from 'build-url'
import cookies from 'js-cookie'
import { defineComponent, getCurrentInstance, inject, PropType } from 'vue'
import ancestorLookup from '../utils/ancestor-lookup'
import KNodeAncestor from './KNodeAncestor.vue'

declare global {
  interface Window {
    PGDLORCOJEEWEAQEFAUS?: Function
  }
}

export default defineComponent({
  setup() {
    const session = inject('session', {}) as Session
    // TODO
    const config = inject('config', {}) as any
    return { session, config }
  },
  props: {
    modelValue: {
      type: Number as PropType<number | null>,
      default: null,
    },
    title: {
      type: String as PropType<string>,
      default: 'Target Browse',
    },
    objid: {
      type: Number as PropType<number>,
      default: null,
    },
    selectPerm: {
      type: Number as PropType<number>,
      default: 2, // read permissions
    },
    width: {
      type: Number as PropType<number>,
      default: 800,
    },
    height: {
      type: Number as PropType<number>,
      default: 600,
    },
    selectScreen: {
      type: Array as PropType<Array<number>>,
      default: () => [],
    },
    browseButtonLabel: {
      type: String as PropType<string>,
      default: 'Browse Content Server...',
    },
    clearable: {
      type: Boolean as PropType<boolean>,
      defalut: true,
    },
    clearButtonLabel: {
      type: String as PropType<string>,
      default: 'clear',
    },
  },
  data() {
    return {
      breadcrumb: [] as Array<Record<string, any>>,
    }
  },
  computed: {
    dataid: {
      set(value: number) {
        this.$emit('update:modelValue', value)
      },
      get(): number | null {
        return this.modelValue
      },
    },
    uniqueID() {
      const uid = getCurrentInstance()!.uid
      return `targetbrowse_${uid}`
    },
    // breadcrumbString() {
    //   if (this.breadcrumb) {
    //     return `Path: ${this.breadcrumb.replace(':', ' &#9654; ')}`
    //   } else {
    //     return null
    //   }
    // },
    globalCallbackFunctionName(): string {
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
        objid: String(this.targetBrowseObjID()),
        selectPerm: String(this.selectPerm),
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
    window['PGDLORCOJEEWEAQEFAUS'] = this.callback
  },
  beforeUnmount() {
    delete window['PGDLORCOJEEWEAQEFAUS']
  },
  methods: {
    openWindow() {
      window.open(this.url, 'WindowName', this.windowParams)

      const inputElmenet = this.$refs.input as HTMLInputElement

      if (inputElmenet) {
        inputElmenet.blur()
      }
    },
    targetBrowseObjID(): number {
      // not computed, since cookies are not reactive
      return this.objid ?? parseInt(cookies.get('TargetBrowseObjID') ?? '0')
    },
    didCloseWindow() {
      console.log('didClose')
    },
    // callback(dataid: number, breadcrumb: string) {
    callback(dataid: number) {
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
