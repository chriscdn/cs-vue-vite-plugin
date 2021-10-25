<template>
    <KCard class="k-multi">
        <!-- <KCardTitle v-if="label">
            {{ label }}
            <KSpacer></KSpacer>{{ canAdd }}
        </KCardTitle> -->

        <transition-group name="fade" tag="div">
            <div v-for="(v, i) in valueLocal" :key="`k-multi-${i}`" class="k-multi-item">
                <div class="k-multi-widget">
                    <slot name="default" v-bind:index="i"></slot>
                </div>

                <div class="k-multi-buttons">
                    <KButton text v-if="canRemove" @click="remove(i)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path
                                d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z"
                            />
                        </svg>
                    </KButton>
                    <KButton text v-if="canAdd" @click="add(i)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path
                                d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"
                            />
                        </svg>
                    </KButton>
                </div>
            </div>
        </transition-group>
    </KCard>
</template>
<script>
export default {
    props: {
        modelValue: {
            type: Array,
            required: true,
        },
        // label: {
        //     type: String,
        //     default: null,
        // },
        minItems: {
            type: Number,
            default: 0,
        },
        maxItems: {
            type: Number,
            default: 100,
        },
        template: {
            type: Object,
            // default: () => {},
            default: null,
        },
    },
    data() {
        return {}
    },
    computed: {
        valueLocal: {
            get() {
                return this.modelValue.length == 0 ? [this.template] : this.modelValue
            },
            set(value) {
                this.$emit('update:modelValue', value)
            },
        },
        canAdd() {
            return this.count < this.maxItems
        },
        canRemove() {
            return this.minItems < this.count
        },
        count() {
            return this.valueLocal.length
        },
    },

    methods: {
        add(index) {
            // this.valueLocal = [this.template, ...this.valueLocal]

            const items = [...this.valueLocal]

            items.splice(index + 1, 0, this.template)

            this.valueLocal = items
        },
        remove(index) {
            const myArray = [...this.valueLocal]
            myArray.splice(index, 1)
            this.valueLocal = myArray
        },
    },
}
</script>

<style lang="less">
.k-multi {
    .k-multi-item {
        @apply flex;
        @apply my-2;

        .k-multi-widget {
            @apply whitespace-nowrap;
            @apply flex-grow;
        }

        .k-multi-buttons {
            @apply whitespace-nowrap;
            > * {
                @apply ml-1;
            }
        }
    }
}
</style>
