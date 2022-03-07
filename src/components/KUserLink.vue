<template>
  <!-- testing flex -->
  <span v-if="userRecLocal" class="k-user-link">
    <KUserGIF v-if="gif" :user-rec="userRecLocal" />&nbsp;<a
      href="#"
      @click.prevent="click"
    >
      {{ displayName }}
    </a>
  </span>
</template>
<script>
import get from 'lodash.get'

export default {
  props: {
    user: {
      type: [Number, Object],
      default: null,
    },
    // @deprecated
    userRec: {
      type: Object,
      default: null,
    },
    // @deprecated
    userid: {
      type: Number,
      default: null,
    },

    gif: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      // userIdLocal: null,
      userRecLocal: null,
    }
  },

  computed: {
    userIdLocal() {
      return get(this.userRecLocal, 'id') ?? get(this.userRecLocal, 'userid')
    },
    userLocal() {
      return this.user ?? this.userid ?? this.userRec
    },

    displayName() {
      return (
        get(this.userRecLocal, 'display_name') ??
        get(this.userRecLocal, 'displayname') ??
        get(this.userRecLocal, 'name')
      )
    },
    type() {
      return get(this.userRecLocal, 'type')
    },
  },
  watch: {
    userLocal: {
      async handler(value) {
        if (this.isInteger(value)) {
          const response = await this.$session.members.member(value, 'v1')

          this.userRecLocal = get(response, 'data.data')
        } else {
          this.userRecLocal = value
        }
      },
      immediate: true,
    },
  },

  methods: {
    isInteger(value) {
      return !isNaN(value) && typeof value == 'number'
    },
    click() {
      window.baseUrl = window.baseURL
      window.doUserDialog(this.userIdLocal)
    },
  },
}
</script>

<style lang="less">
.k-user-link {
  @apply inline-flex items-center;
}
</style>