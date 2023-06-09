<template>
  <span v-if="dataid">
    <a :id="aid" href="#" class="functionMenuHotspot" @click.prevent="onclick">
      <img
        v-if="isModernFunctionMenu"
        :src="`${config.img}spacer.gif`"
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

<script lang="ts">
declare global {
  interface Window {
    functionMenuExpansionStatus?: any;
    setSectionName?: Function;
    showFunctionMenu2: Function;
  }
}

/**
 * Creates a Content Server function menu.
 *
 * ```
 * <KFunctionMenu :dataid="2000" />
 * ```
 */

import { defineComponent, PropType } from "vue";
import { configKey, injectStrict } from "../injection";
export default defineComponent({
  setup() {
    const config = injectStrict(configKey);
    return { config };
  },
  props: {
    // The DataId of the node.
    dataid: {
      type: Number as PropType<number>,
      required: true,
    },
    func: {
      type: String as PropType<string>,
      default: "",
    },
  },
  data() {
    return {
      image: "",
    };
  },
  computed: {
    uniqueid() {
      return Math.random().toString(36).substring(2, 15);
    },
    isModernFunctionMenu() {
      return Boolean(window.functionMenuExpansionStatus);
    },
    aid() {
      return this.isModernFunctionMenu ? this.xid : undefined;
    },
    xid() {
      return `x${this.dataid}${this.uniqueid}`;
    },
    zid() {
      return `z${this.dataid}${this.uniqueid}`;
    },
  },
  watch: {
    // reset the cached menu
    dataid() {
      const ele = this.$refs.functionMenuDiv as Element;
      if (ele) {
        while (ele.firstChild) {
          ele.removeChild(ele.firstChild);
        }
      }
    },
  },
  mounted() {
    if (!this.isModernFunctionMenu) {
      this.onmouseout();
    }
  },
  methods: {
    onclick(event: Event) {
      if (window.setSectionName && window.showFunctionMenu2) {
        window.setSectionName(this.uniqueid);
        window.showFunctionMenu2("", this.dataid, event, "", this.func);
        window.setSectionName("");
        return false;
      } else {
        throw new Error("KFunctionMenu window global functions missing.");
      }
    },
    onmouseover() {
      this.image = `${this.config.img}webdoc/actions_hover.png`;
    },
    onmouseout() {
      this.image = `${this.config.img}webdoc/actions.png`;
    },
  },
});
</script>
