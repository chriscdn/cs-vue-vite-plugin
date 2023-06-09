<template>
  <span v-if="userRecLocal" class="k-user-link">
    <KUserGIF v-if="gif" :user-rec="userRecLocal" />
    &nbsp;
    <a href="#" @click.prevent="click">
      {{ displayName }}
    </a>
  </span>
</template>

<script lang="ts">
import get from "lodash.get";
import { defineComponent, PropType } from "vue";
import userLookup from "../utils/user-lookup";
import { sessionKey, injectStrict } from "../injection";
import { type RHUserSerializer } from "../types/RHUserSerializer";

declare global {
  interface Window {
    baseUrl?: Function;
    baseURL?: Function;
    doUserDialog?: Function;
  }
}

// export type UserRecType = {
//   name: string
//   id: number
//   type: number
// }

export default defineComponent({
  setup() {
    return { session: injectStrict(sessionKey) };
  },

  props: {
    user: {
      type: [Number, Object] as PropType<number | RHUserSerializer | null>,
      default: null,
    },
    // //  this is deprecated
    // userRec: {
    //   type: Object,
    //   default: null,
    // },
    // // @deprecated
    // userid: {
    //   type: Number,
    //   default: null,
    // },

    gif: {
      type: Boolean,
      default: false,
    },
    legacy: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },

  data() {
    return {
      userRecLocal: null as RHUserSerializer | null,
    };
  },

  computed: {
    userIdLocal() {
      return get(this.userRecLocal, "id") ?? get(this.userRecLocal, "userid");
    },
    // userLocal() {
    //   return this.user ?? this.userid ?? this.userRec
    // },

    displayName() {
      return (
        get(this.userRecLocal, "display_name") ??
        get(this.userRecLocal, "displayname") ??
        get(this.userRecLocal, "name")
      );
    },
    type() {
      return get(this.userRecLocal, "type");
    },
  },
  watch: {
    user: {
      async handler(value) {
        if (this.isInteger(value)) {
          this.userRecLocal = await userLookup.lookup(
            this.session,
            value,
            this.legacy
          );
        } else {
          this.userRecLocal = value;
        }
      },
      immediate: true,
    },
  },

  methods: {
    isInteger(value: any) {
      return !isNaN(value) && typeof value === "number";
    },
    click() {
      if (window.baseURL && window.doUserDialog) {
        window.baseUrl = window.baseURL;
        window.doUserDialog(this.userIdLocal);
      }
    },
  },
});
</script>

<style lang="postcss">
.k-user-link {
  @apply inline-flex items-center;
}
</style>
