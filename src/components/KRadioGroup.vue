<template>
    <div>
        <KFormFieldWrapper :label="label" :success-messages="successMessages" :error-messages="errorMessages">
            <transition name="fade" mode="out-in">
                <KSpinner v-if="loading" />
                <div class="k-radiogroup" :class="classObj" v-else>
                    <div class="k-radiogroup-item" v-for="item in items" :key="getItemValue(item)">
                        <input type="radio" :id="getItemValue(item)" :value="getItemValue(item)" v-model="localValue" />
                        <label :for="getItemValue(item)">{{ getItemText(item) }}</label>
                    </div>
                </div>
            </transition>
        </KFormFieldWrapper>
    </div>
</template>

<script>
/**
 * This component is based on KSelect
 */
import get from 'lodash.get'
import { mixin } from './KFormFieldWrapper.vue'
export default {
    mixins: [mixin],
    props: {
        modelValue: {
            type: [String, Object, Number],
            default: null,
        },

        items: {
            type: Array,
            default: () => [],
        },
        loading: {
            type: Boolean,
            default: false,
        },
        itemValue: {
            type: String,
            default: 'value',
        },
        itemText: {
            type: String,
            default: 'text',
        },
        vertical: {
            type: Boolean,
            default: false,
        },
    },
    emits: ['update:modelValue'],
    computed: {
        localValue: {
            get() {
                return this.modelValue
            },
            set(value) {
                this.$emit('update:modelValue', value)
            },
        },
        classObj() {
            return {
                'k-radiogroup--vertical': this.vertical,
            }
        },
    },
    methods: {
        isObject(obj) {
            return typeof obj == 'object' && obj instanceof Object && !(obj instanceof Array)
        },
        getItemText(item) {
            return this.isObject(item) ? get(item, this.itemText) : item
        },
        getItemValue(item) {
            return this.isObject(item) ? get(item, this.itemValue) : item
        },
    },
}
</script>

<style lang="less">
.k-radiogroup {
    @apply flex;

    .k-radiogroup-item {
        @apply mb-1;
    }

    &.k-radiogroup--vertical {
        @apply flex-col;
    }
}
</style>
