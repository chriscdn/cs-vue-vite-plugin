<template>
    <div v-click-away="setBlur" class="k-autocomplete" :style="[style]">
        <slot name="prepend" :item="localValue"></slot>

        <div class="k-autocomplete-input">
            <input
                class="k-input"
                ref="input"
                v-model="inputText"
                type="search"
                autocomplete="off"
                :class="{ invalidSelection: !isValidSelection }"
                :placeholder="placeholderText"
                :readonly="!editable"
                @search="clearInput"
                @keydown.arrow-up.prevent="currentFocus = Math.max(-1, currentFocus - 1)"
                @keydown.arrow-down.prevent="currentFocus = Math.min(items.length - 1, currentFocus + 1)"
                @keydown.enter.prevent="select(currentFocus)"
                @focus="setFocus"
                @keydown.tab="setBlur"
                @keyup="keyup"
            />

            <div v-if="focus && items.length && !!inputText" class="k-autocomplete-items">
                <div
                    v-for="(item, index) in itemsFiltered"
                    :key="index"
                    class="k-autocomplete-item"
                    :class="{ 'k-autocomplete-active': currentFocus == index }"
                    @click="select(index)"
                >
                    <slot name="item" :item="item">{{ item }}</slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { directive } from 'vue3-click-away'

import get from 'lodash.get'

export default {
    directives: {
        ClickAway: directive,
    },
    // model: {
    //     prop: 'value',
    //     event: 'change',
    // },
    props: {
        modelValue: {
            type: [String, Object, Number],
            default: null,
        },
        itemValue: {
            type: String,
            default: 'value',
        },
        itemText: {
            type: String,
            default: 'text',
        },
        returnObject: {
            type: Boolean,
            default: false,
        },
        placeholder: {
            type: String,
            default: 'Start typing...',
        },
        // readonly: {
        // 	type: Boolean,
        // 	default: false
        // },
        width: {
            type: [String, Number],
            default: '100%',
        },
        items: {
            type: Array,
            default: () => [],
        },
        loading: {
            type: Boolean,
            default: false,
        },
        combobox: {
            type: Boolean,
            default: false,
        },
        filter: {
            type: Function,
            default: (item) => !!item,
        },
        editable: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            inputText: '', // this.displayValueFormatter(this.modelValue),
            currentFocus: -1,
            focus: false,
            // captureKeyStrokes: true,
        }
    },
    computed: {
        style() {
            return {
                width: isNaN(this.width) ? this.width : `${this.width}px`,
            }
        },

        itemsFiltered() {
            return this.items.filter((item) => this.filter(item))
        },

        placeholderText() {
            return this.editable ? this.placeholder : null
        },

        localValue: {
            set(value) {
                if (!value) {
                    this.$emit('update:modelValue', null)
                } else if (this.returnObject) {
                    this.$emit('update:modelValue', value)
                } else {
                    this.$emit('update:modelValue', get(value, this.itemValue, value))
                }
            },
            get() {
                return this.isObject(this.modelValue) ? this.modelValue : this.items.find((item) => get(item, this.itemValue, item) == this.modelValue)
            },
        },
        isValidSelection() {
            return !!this.localValue
        },
    },
    watch: {
        inputText(value) {
            this.$emit('update:search-input', value)
        },

        items() {
            this.currentFocus = -1

            if (this.localValue) {
                // this.destroyWatcher()

                if (!this.combobox) {
                    this.inputText = get(this.localValue, this.itemText, '')
                }
            }
        },

        value: {
            handler(v) {
                // this.destroyWatcher()

                // this check needs to be tested with combobox
                // if (this.localValue) {
                this.inputText = get(this.localValue, this.itemText, v)
                // }
            },
            immediate: true,
        },

        focus(value) {
            if (value) {
                // focus
            } else {
                // blur
                if (this.localValue) {
                    // all good, keep it
                } else if (!this.combobox) {
                    // otherwise, clear the text field
                    // this.createWatcher()
                    this.inputText = null
                }
            }
        },
    },
    mounted() {
        // this.createWatcher()
    },
    methods: {
        async select(index) {
            // default to first item

            if (!this.combobox) {
                index = Math.max(index, 0)
            }

            const selectedItem = this.items[index]

            if (this.combobox) {
                if (selectedItem) {
                    this.localValue = selectedItem
                }
            } else {
                this.localValue = selectedItem
                // this.destroyWatcher()
                this.inputText = selectedItem[this.itemText]
            }

            // Let the reactive system all sync before blurring the field.
            await this.$nextTick()

            this.setBlur()
        },

        setFocus() {
            this.focus = true
        },

        setBlur() {
            this.$refs.input.blur()
            this.focus = false
        },
        isObject(obj) {
            return typeof obj == 'object' && obj instanceof Object && !(obj instanceof Array)
        },
        clearInput(_event) {
            this.localValue = null
        },

        keyup(_event) {
            if (this.combobox) {
                this.localValue = this.inputText
            } else {
                this.localValue = null
            }
        },
    },
}
</script>
<style lang="less" scoped>
.k-autocomplete {
    @apply flex items-center;

    .k-autocomplete-input {
        @apply flex-grow relative;
        input {
            @apply w-full;
        }
    }

    .k-autocomplete-items {
        @apply absolute;

        // border: 1px solid #d4d4d4;
        border-bottom: none;
        border-top: none;
        @apply border border-t-0 border-b-0 border-solid rounded border-gray-300;
        @apply rounded;

        z-index: 99;

        top: 100%;
        left: 0;
        right: 0;
        max-height: 50em;
        overflow-y: scroll;

        .k-autocomplete-item {
            @apply p-2 bg-white cursor-pointer;
            // border-bottom: 1px solid #d4d4d4;
            @apply border border-t-0 border-l-0 border-r-0  border-solid  border-gray-300;
            @apply flex items-center;

            // font-size: 1.2em;

            @apply hover:bg-gray-200;

            // &:hover {
            //     /*when hovering an item:*/
            //     background-color: #e9e9e9;
            // }
        }
    }

    .k-autocomplete-active {
        /*when navigating through the items using the arrow keys:*/
        background-color: DodgerBlue !important;
        color: #ffffff;
    }
}
</style>
