<template>
  <span v-if="dataid">
    <a :id="aid" href="#" class="functionMenuHotspot" @click.prevent="onclick">
      <img
        v-if="isModernFunctionMenu"
        :src="`${$img}spacer.gif`"
        alt="Functions"
      />
      <img
        v-else
        :id="xid"
        :src="image"
        border="0"
        alt="Functions"
        title="Functions"
        @mouseover="onmouseover"
        @mouseout="onmouseout"
      />
    </a>
    <div v-once :id="zid" ref="functionMenuDiv" class="functionMenuDiv" />
  </span>
</template>
<script>
/**
 * Creates a Content Server function menu.
 *
 * ```
 * <KFunctionMenu :dataid="2000" />
 * ```
 */
export default {
  props: {
    // The DataId of the node.
    dataid: {
      type: Number,
      required: true,
    },
    func: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      image: '',
    }
  },
  computed: {
    uniqueid() {
      return Math.random().toString(36).substring(2, 15)
    },
    isModernFunctionMenu() {
      return !!window.functionMenuExpansionStatus
    },
    aid() {
      return this.isModernFunctionMenu ? this.xid : null
    },
    xid() {
      return `x${this.dataid}${this.uniqueid}`
    },
    zid() {
      return `z${this.dataid}${this.uniqueid}`
    },
  },
  watch: {
    // reset the cached menu
    dataid() {
      const ele = this.$refs.functionMenuDiv
      if (ele) {
        while (ele.firstChild) {
          ele.removeChild(ele.firstChild)
        }
      }
    },
  },
  mounted() {
    if (!this.isModernFunctionMenu) {
      this.onmouseout()
    }
  },
  methods: {
    onclick(event) {
      // should probably assert these functions are available
      window.setSectionName(this.uniqueid)
      window.showFunctionMenu2('', this.dataid, event, '', this.func)
      window.setSectionName('')
      return false
    },
    onmouseover() {
      this.image = `${this.$img}webdoc/actions_hover.png`
    },
    onmouseout() {
      this.image = `${this.$img}webdoc/actions.png`
    },
  },
}
</script>
