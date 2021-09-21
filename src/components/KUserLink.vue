<template>
    <span v-if="localUserRec"
        ><img v-if="gif" :src="gif_url" />&nbsp;<a href="#" @click.prevent="click">{{ displayName }}</a></span
    >
</template>
<script>
import get from 'lodash.get'

export default {
    props: {
        userrec: {
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
        gif_url() {
            if (this.type == 0) {
                // user
                return `${this.$img}guy.gif`
            } else if (this.type == 1) {
                // group
                return `${this.$img}2-guys.gif`
            } else {
                // role?
                return `${this.$img}projectgroup.gif`
            }
        },
        displayName() {
            return get(this.localUserRec, 'display_name') || get(this.localUserRec, 'displayname')
        },
        type() {
            return get(this.localUserRec, 'type')
        },
    },
    watch: {
        userid: {
            handler(value) {
                if (value) {
                    this.$session.members.member(value, 'v1').then((response) => (this.localUserRec = get(response, 'data.data')))
                }
            },
            immediate: true,
        },
        userrec: {
            handler(value) {
                if (value) {
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
