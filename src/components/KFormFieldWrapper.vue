<template>
  <div>
    <div v-if="label" class="k-form-field-label">
      {{ label }}
    </div>
    <slot />
    <div
      v-for="(successMessage, index) in successMessages"
      :key="index"
      class="k-formfield--success"
    >
      {{ successMessage }}
    </div>
    <div
      v-for="(errorMessage, index) in errorMessages"
      :key="index"
      class="k-formfield--error"
    >
      {{ errorMessage }}
    </div>
  </div>
</template>

<script>
const mixin = {
  props: {
    label: {
      type: String,
      default: null,
    },
    successMessages: {
      type: Array,
      default: () => [],
    },
    errorMessages: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    hasSuccess() {
      return Boolean(this.successMessages.length)
    },
    hasError() {
      return Boolean(this.errorMessages.length)
    },
    classObj() {
      return {
        'k-input': true,
        'k-input--success': this.hasSuccess && !this.hasError,
        'k-input--error': this.hasError,
      }
    },
  },
}

export default {
  mixins: [mixin],
}

export { mixin }
</script>

<style lang="postcss">
.k-form-field-label {
  @apply text-xs font-thin;
  @apply my-px;
}

.k-input {
  min-width: 7rem;
  @apply rounded p-1;
  @apply border border-solid rounded border-gray-300;
  /* @apply focus:border-transparent focus:outline-none focus:ring-1 focus:ring-blue-600; */
  @apply focus:border-transparent  focus:outline-blue-500;

  &.k-input--success {
    @apply border-green-700;
  }

  &.k-input--error {
    @apply border-red-600;
  }
}

.k-formfield--success {
  @apply text-green-700;
  @apply my-px;
}

.k-formfield--error {
  @apply text-red-600;
  @apply my-px;
}
</style>
