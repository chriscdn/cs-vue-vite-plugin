<template>
  <img v-if="url" :src="url" :style="[measurableStyles]" />
</template>

<script lang="ts">
import get from "lodash.get";
import { defineComponent, PropType } from "vue";
import measurable from "../mixins/measurables";
import { configKey, sessionKey, injectStrict } from "../injection";
import { RHUserSerializer } from "../types/RHUserSerializer";

export default defineComponent({
  setup() {
    return {
      config: injectStrict(configKey),
      session: injectStrict(sessionKey),
    };
  },
  mixins: [measurable],
  props: {
    userRec: {
      type: Object as PropType<RHUserSerializer>,
      default: null,
    },
    type: {
      type: Number,
      default: 0,
    },
    height: {
      type: [Number, String],
      default: 16,
    },
    width: {
      type: [Number, String],
      default: 16,
    },
  },
  computed: {
    userType() {
      return get(this.userRec, "type", this.type);
    },

    url() {
      if (this.userType === this.session.members.USER) {
        // user
        return `${this.config.img}guy.gif`;
      } else if (this.userType === this.session.members.GROUP) {
        // group
        return `${this.config.img}2-guys.gif`;
      } else if (this.userType > 0) {
        // role?
        return `${this.config.img}projectgroup.gif`;
      } else {
        return null;
      }
    },
  },
});
</script>
