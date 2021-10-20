<template>
    <slot></slot>

    <div class="k-snackbar">
        <transition-group name="slide" tag="div" mode="out-in">
            <div v-for="item in items" :key="item.index" class="k-snackbar-item" :class="classObj(item)">{{ item.msg }}</div>
        </transition-group>
    </div>
</template>

<script>
export default {
    data() {
        return {
            index: 0,
            nitems: {},
        }
    },
    provide() {
        return {
            ksnackbar: this,
        }
    },
    computed: {
        items() {
            return Object.values(this.nitems).sort((a, b) => b.index - a.index)
        },
    },
    methods: {
        classObj(item) {
            return {
                'k-snackbar-item--success': item.type == 'success',
                'k-snackbar-item--error': item.type == 'error',
            }
        },
        nextIndex() {
            this.index += 1
            return this.index
        },
        success(msg, timeout = 6000) {
            this.queue(msg, timeout, 'success')
        },
        error(msg, timeout = 6000) {
            this.queue(msg, timeout, 'error')
        },
        queue(msg, timeout, type) {
            const index = this.nextIndex()

            this.nitems[index] = {
                msg,
                index,
                type,
            }

            setInterval(() => {
                delete this.nitems[index]
            }, timeout)
        },
    },
}
</script>

<style lang="less">
.k-snackbar {
    // z-20 puts it above the KDialog overlay, which has z-10
    @apply fixed top-0 right-0 z-20;
    .k-snackbar-item {
        @apply py-3 px-6  my-3 mx-6 rounded text-lg;
        &.k-snackbar-item--success {
            @apply text-white bg-green-700 bg-opacity-95;
        }
        &.k-snackbar-item--error {
            @apply text-white bg-red-700 bg-opacity-95;
        }
    }
}

/*

 twsnackbar
            mx-4
            text-${this.fontColor}-${this.fontTone}
            px-6
            py-4
            border-0
            ${this.shape}
            relative
            mb-4
            ${this.color}
            flex
            items-center
            justify-center
*/
</style>
