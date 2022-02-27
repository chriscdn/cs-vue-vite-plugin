<template>
  <span v-if="localUserRec">
    <KUserGIF
      v-if="gif"
      :user-rec="localUserRec"
    />&nbsp;<a
      href="#"
      @click.prevent="click"
    >{{ displayName }}</a>
  </span>
</template>
<script>
import get from 'lodash.get'

export default {
  props: {
    userRec: {
      type: Object,
      default: null,
    },
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
      localUserRec: null,
    }
  },

  computed: {
    user_id() {
      return get(this.localUserRec, 'id') || get(this.localUserRec, 'userid')
    },

    displayName() {
      return (
        get(this.localUserRec, 'display_name') ||
        get(this.localUserRec, 'displayname')
      )
    },
    type() {
      return get(this.localUserRec, 'type')
    },
  },
  watch: {
    userid: {
      handler(value) {
        if (value) {
          this.$session.members
            .member(value, 'v1')
            .then(
              (response) => (this.localUserRec = get(response, 'data.data')),
            )
        }
      },
      immediate: true,
    },
    userRec: {
      handler(value) {
        if (this.userid == null) {
          this.localUserRec = value
        }
      },
      immediate: true,
    },
  },

  methods: {
    click() {
      window.baseUrl = window.baseURL
      window.doUserDialog(this.user_id)
    },
  },
}
</script>
