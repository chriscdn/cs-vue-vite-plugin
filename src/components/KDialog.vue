<template>
    <slot name="activator" :on="on"></slot>
    <transition name="fade">
        <div v-if="dialog" class="k-dialog">
            <div ref="content" v-click-away="clickAway" class="k-dialog-content" :style="[innerStyle]">
                <slot></slot>
            </div>
        </div>
    </transition>
</template>

<script>
import { directive } from 'vue3-click-away'
export default {
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
        width: {
            type: String,
            default: '600px',
        },
    },
    data() {
        return {
            dialog: false,
        }
    },
    computed: {
        innerStyle() {
            return {
                width: this.width,
            }
        },
    },

    watch: {
        modelValue: {
            handler(value) {
                // console.log(value)
                this.dialog = value
            },
            immediate: true,
        },
        async dialog(value) {
            this.$emit('update:modelValue', value)

            /*if (value) {
				await this.$nextTick()
				disableBodyScroll(this.$refs.content)
			} else {
				enableBodyScroll(this.$refs.content)
			}*/
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
        max-height: 80vh;
        overflow: auto;
        // background-color: #fff;
        // position: fixed;
        // top: 50%;
        // left: 50%;
        // transform: translate(-50%, -50%);
        // padding: 10px;

        // border-radius: 8px;
    }
}
</style>
