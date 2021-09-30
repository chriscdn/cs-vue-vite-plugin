<template>
    <div class="k-switch" :class="classObj" @click="on = !on">
        <span class="k-switch-slider"></span>
    </div>
</template>

<script>
// https://www.w3schools.com/howto/howto_css_switch.asp
import { convertToUnit } from '../mixins/measurables'
export default {
    data() {
        return {
            on: false,
        }
    },

    computed: {
        classObj() {
            return {
                'k-switch--on': this.on,
            }
        },
        padding() {
            return 5
        },
        height() {
            return 36
        },
        trans() {
            return 60
        },
        innerSize() {
            return this.height - 2 * this.padding
        },
        heightPx() {
            return convertToUnit(this.height)
        },
        innerSizePx() {
            return convertToUnit(this.innerSize)
        },
        paddingPx() {
            return convertToUnit(this.padding)
        },
        switchWidthPx() {
            // Why height? Because it's also the width of the circle thingie
            return convertToUnit(this.trans + this.height)
        },
        transPx() {
            return `translateX(${convertToUnit(this.trans)})`
        },
    },
}
</script>

<style lang="less">
.k-switch {
    position: relative;
    display: inline-block;
    width: v-bind(switchWidthPx);
    height: v-bind(heightPx);
}

/* The slider */
.k-switch-slider {
    @apply absolute bg-gray-400;
    @apply cursor-pointer inset-0;
    @apply rounded-full;
    @apply duration-300;
}

/* this is the ball */
.k-switch-slider:before {
    @apply rounded-full;
    @apply absolute;
    @apply duration-300;
    content: '';
    height: v-bind(innerSizePx);
    width: v-bind(innerSizePx);
    left: v-bind(paddingPx);
    bottom: v-bind(paddingPx);
    background-color: white;
}

.k-switch--on {
    .k-switch-slider {
        @apply bg-blue-500;
    }

    .k-switch-slider:before {
        transform: v-bind(transPx);
    }
}
</style>
