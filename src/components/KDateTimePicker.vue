<template>
  <div>
    <input v-model="localModelValue" class="k-input" :type="type">
    <KButton class="ml-1" small @click="setToNow">
      Now
    </KButton>
    <KButton class="ml-1" small @click="$emit('update:modelValue', null)">
      Clear
    </KButton>
  </div>
</template>

<script>
import { format } from 'date-fns'
export default {
  props: {
    modelValue: {
      type: [String, Date],
      default: null,
    },
    time: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue'],
  computed: {
    type() {
      return this.time ? 'datetime-local' : 'date'
    },
    localModelValue: {
      set(value) {
        this.$emit('update:modelValue', this.formatForDatePicker(value))
      },
      get() {
        return this.formatForDatePicker(this.modelValue)
      },
    },
  },
  methods: {
    parse(value) {
      return value ? new Date(value) : null
    },
    setToNow() {
      this.localModelValue = new Date()
    },
    formatForDatePicker(value) {
      const d = this.parse(value)

      if (d) {
        if (this.time) {
          return format(d, "yyyy-MM-dd'T'HH:mm:ss")
        } else {
          return format(d, 'yyyy-MM-dd')
        }
      } else {
        return null
      }
    },
  },
}
</script>
