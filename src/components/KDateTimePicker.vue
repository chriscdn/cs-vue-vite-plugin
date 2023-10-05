<template>
  <div class="k-date-time-picker">
    <input
      v-model="localModelValue"
      class="k-input"
      :type="type"
      :readonly="!editable"
    />
    <template v-if="editable">
      <KButton small @click="setToNow"> Now </KButton>
      <KButton small @click="$emit('update:modelValue', null)"> Clear </KButton>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { format } from "date-fns";
export default defineComponent({
  props: {
    modelValue: {
      type: [String, Date] as PropType<Date | string | null>,
      default: null,
    },
    time: {
      type: Boolean,
      default: false,
    },
    editable: {
      type: Boolean,
      default: true,
    },
  },
  emits: ["update:modelValue"],
  computed: {
    type() {
      return this.time ? "datetime-local" : "date";
    },
    localModelValue: {
      set(value: string | Date | null) {
        this.$emit("update:modelValue", this.formatForDatePicker(value));
      },
      get(): string | Date | null {
        return this.formatForDatePicker(this.modelValue);
      },
    },
  },
  methods: {
    parse(value: string | Date | null) {
      return value ? new Date(value) : null;
    },
    setToNow() {
      this.localModelValue = new Date();
    },
    formatForDatePicker(value: string | Date | null): string | null {
      const d = this.parse(value);

      if (d) {
        if (this.time) {
          return format(d, "yyyy-MM-dd'T'HH:mm:ss");
        } else {
          return format(d, "yyyy-MM-dd");
        }
      } else {
        return null;
      }
    },
  },
});
</script>

<style lang="postcss">
.k-date-time-picker {
  @apply flex gap-2 items-center;
  input.k-input {
    /* forced to override SmartUI. */
    @apply leading-normal;
  }
}
</style>
