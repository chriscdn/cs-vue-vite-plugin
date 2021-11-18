<template>
    <slot name="activator" :on="on"></slot>
    <teleport to=".k-app">
        <transition name="fade">
            <div v-if="dialog" class="k-dialog">
                <div ref="content" v-click-away="clickAway" class="k-dialog-content" :class="classObj" :style="[measurableStyles]">
                    <slot :on="on"></slot>
                </div>
            </div>
        </transition>
    </teleport>
</template>

<script>
import { directive } from 'vue3-click-away'
import measurables from '../mixins/measurables'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

export default {
    mixins: [measurables],
    directives: {
        ClickAway: directive,
    },

    props: {
        modelValue: {
            type: Boolean,
            required: false,
        },
        persistent: {
            type: Boolean,
            default: false,
        },
        scrollable: {
            type: Boolean,
            default: false,
        },
        width: {
            type: [Number, String],
            default: '75vw',
        },
        maxHeight: {
            type: [Number, String],
            default: '90%',
        },
    },
    data() {
        return {
            dialog: false,
        }
    },
    computed: {
        classObj() {
            return {
                'k-dialog--scrollable': this.scrollable,
            }
        },
    },

    watch: {
        modelValue: {
            handler(value) {
                this.dialog = value
            },
            immediate: true,
        },
        async dialog(value) {
            this.$emit('update:modelValue', value)

            if (value) {
                await this.$nextTick()
                disableBodyScroll(this.$refs.content)
            } else {
                enableBodyScroll(this.$refs.content)
            }
        },
    },
    methods: {
        clickAway() {
            if (!this.persistent) {
                this.closeDialog()
            }
        },
        closeDialog() {
            if (this.dialog) {
                this.dialog = false
            }
        },
        on() {
            this.dialog = !this.dialog
        },
    },
}
</script>

<style lang="less">
.k-dialog {
    @apply fixed inset-0 z-10;
    @apply bg-gray-900 bg-opacity-50;
    @apply flex justify-center items-center;

    .k-dialog-content {
        @apply bg-white p-3 rounded;
        @apply overflow-y-auto;
    }

    .k-dialog--scrollable {
        @apply flex;
        .k-card {
            @apply flex-grow;

            .k-card-text {
                @apply overflow-y-auto;
            }
        }
    }
}
</style>
