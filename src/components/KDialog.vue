<template>
    <transition name="fade">
        <div v-if="dialog" class="k-dialog">
            <div ref="content" v-click-away="closeDialog" class="k-dialog-content" :style="[innerStyle]">
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
    model: {
        prop: 'value',
        event: 'change',
    },
    props: {
        modelValue: {
            type: Boolean,
            required: false,
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
                console.log(value)
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
        closeDialog() {
            if (this.dialog) {
                this.dialog = false
            }
        },
    },
}
</script>

<style lang="less">
.k-dialog {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.4);

    .k-dialog-content {
        background-color: #fff;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 10px;
        max-height: 80vh;
        overflow: auto;
        border-radius: 8px;
    }
}
</style>
