<template>
    <div v-click-away="fakeBlur" class="autocomplete" :style="[style]">
        <div class="d-flex">
            <slot name="prepend" :item="localValue"></slot>
            <input
                ref="input"
                v-model="inputText"
                type="search"
                autocomplete="off"
                :class="{ invalidSelection: !isValidSelection }"
                :placeholder="placeholderText"
                :readonly="!editable"
                @keydown="keydown"
                @search="clearInput"
                @keydown.arrow-up.prevent="currentFocus = Math.max(-1, currentFocus - 1)"
                @keydown.arrow-down.prevent="currentFocus = Math.min(items.length - 1, currentFocus + 1)"
                @keydown.enter.prevent="select(currentFocus)"
                @focus="setFocus"
                @keydown.tab="fakeBlur"
            />
        </div>
        <!-- <transition name="custom"> -->
        <div v-if="focus && items.length && !!inputText" class="autocomplete-items">
            <div
                v-for="(item, index) in itemsFiltered"
                :key="index"
                class="autocomplete-item"
                :class="{ 'autocomplete-active': currentFocus == index }"
                @click="select(index)"
            >
                <slot name="item" :item="item">{{ item }}</slot>
            </div>
        </div>
        <!-- {{ localValue }} -->
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
            inputText: '', // this.displayValueFormatter(this.value),
            currentFocus: -1,
            focus: false,
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
                return this.isObject(this.value) ? this.value : this.items.find((item) => get(item, this.itemValue, item) == this.value)
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
                this.destroyWatcher()

                if (!this.combobox) {
                    this.inputText = get(this.localValue, this.itemText, '')
                }
            }
        },

        value: {
            handler(v) {
                this.destroyWatcher()

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
                    this.createWatcher()
                    this.inputText = null
                }
            }
        },
    },
    mounted() {
        this.createWatcher()
    },
    methods: {
        select(index) {
            // default to first item

            if (!this.combobox) {
                index = Math.max(index, 0)
            }

            const selectedItem = this.items[index]

            // on selection we force an immediate blur
            // this order matters...
            this.$refs.input.blur()
            this.fakeBlur()

            if (this.combobox) {
                if (selectedItem) {
                    this.localValue = selectedItem
                }
            } else {
                this.localValue = selectedItem
                this.destroyWatcher()
                this.inputText = selectedItem[this.itemText]
            }
        },

        setFocus() {
            this.focus = true
        },
        // we fake blur due to an IE11 bug, which fires blur() when
        // using the scrollbar
        fakeBlur() {
            this.focus = false
        },
        isObject(obj) {
            return typeof obj == 'object' && obj instanceof Object && !(obj instanceof Array)
        },
        clearInput(_event) {
            this.createWatcher()
            this.localValue = null
        },
        keydown(_event) {
            this.createWatcher()
        },
        createWatcher() {
            if (!this.$watcher) {
                this.$watcher = this.$watch('inputText', (value) => {
                    if (this.combobox) {
                        this.localValue = value
                    } else {
                        this.localValue = null
                    }
                })
            }
        },
        destroyWatcher() {
            if (this.$watcher) {
                this.$watcher()
                this.$watcher = null
            }
        },
    },
}
</script>
<style lang="less" scoped>
.autocomplete {
    width: 100%;
    display: inline-block;
    position: relative;

    input {
        width: 100%;
        // padding: 0.5em;
        border: 1px #ccc solid;
    }

    .autocomplete-items {
        position: absolute;
        border: 1px solid #d4d4d4;
        border-bottom: none;
        border-top: none;
        z-index: 99;
        /*position the autocomplete items to be the same width as the container:*/
        top: 100%;
        left: 0;
        right: 0;
        max-height: 50em;
        overflow-y: scroll;

        .autocomplete-item {
            padding: 10px;
            cursor: pointer;
            background-color: #fff;
            border-bottom: 1px solid #d4d4d4;
            display: flex;
            align-items: center;
            font-size: 1.2em;

            &:hover {
                /*when hovering an item:*/
                background-color: #e9e9e9;
            }
        }
    }

    .autocomplete-active {
        /*when navigating through the items using the arrow keys:*/
        background-color: DodgerBlue !important;
        color: #ffffff;
    }
}
</style>
