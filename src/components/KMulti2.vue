<template>
  <KCard class="k-multi">
    <transition-group name="fade" tag="div">
      <div
        v-for="(value, index) in valueLocal"
        :key="`k-multi-${value}`"
        class="k-multi-item"
      >
        <div class="k-multi-widget">
          <slot name="readonly" :index="index" :value="value">{{ value }}</slot>
        </div>

        <div class="k-multi-buttons">
          <KButton text @click="remove(index)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z"
              />
            </svg>
          </KButton>
        </div>
      </div>
    </transition-group>
    <slot name="add" :add="add" v-if="canAdd" />
  </KCard>
</template>
<script>
export default {
  props: {
    modelValue: {
      type: Array,
      required: true,
    },
    maxItems: {
      type: Number,
      default: 100,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue'],
  computed: {
    valueLocal: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      },
    },

    count() {
      return this.valueLocal?.length ?? 0
    },

    canAdd() {
      return this.count < this.maxItems && !this.readonly
    },
  },
  methods: {
    add(item) {
      if (item) {
        this.valueLocal = [...this.valueLocal, item].filter(
          (item, index, items) => items.indexOf(item) === index,
        )
      }
    },
    remove(index) {
      const myArray = [...this.valueLocal]
      myArray.splice(index, 1)
      this.valueLocal = myArray
    },
  },
}
</script>

<style lang="postcss">
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
