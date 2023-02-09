<template>
  <slot />

  <div class="k-snackbar">
    <transition-group name="slide" tag="div" mode="out-in">
      <div
        v-for="item in items"
        :key="item.index"
        class="k-snackbar-item"
        :class="classObj(item)"
      >
        <div class="k-snackbar-item-message">
          <div v-if="item.title" class="k-snackbar-title">
            {{ item.title }}
          </div>
          <div v-if="item.message" class="k-snackbar-text">
            {{ item.message }}
          </div>
        </div>
        <div v-if="item.action" class="k-snackbar-action">
          <a href="#" @click.prevent="action(item)">{{ item.actionLabel }}</a>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  provide() {
    return {
      ksnackbar: this,
    }
  },
  data() {
    return {
      index: 0,
      nitems: {},
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
    action(item) {
      const cb = item.action
      cb(() => this.dismiss(item.index))
    },
    dismiss(index) {
      // this.$delete(this.nitems, index)
      delete this.nitems[index]
    },
    nextIndex() {
      this.index += 1
      return this.index
    },
    success({ title, message, timeout, actionLabel, action }) {
      this.queue('success', { message, title, timeout, actionLabel, action })
    },
    error({ title, message, timeout, actionLabel, action }) {
      this.queue('error', { message, title, timeout, actionLabel, action })
    },
    queue(
      type,
      { title, message, timeout = 6000, actionLabel = 'close', action },
    ) {
      const index = this.nextIndex()

      if (action == null) {
        // if no action is specified, then make the default the close action
        action = () => this.dismiss(index)
      }

      this.nitems[index] = {
        title,
        message,
        index,
        type,
        actionLabel,
        action,
      }

      // Vue3
      // this.nitems[index] = {
      // 	message,
      // 	index,
      // 	type,
      // }

      setInterval(() => this.dismiss(index), timeout)
    },
  },
}
</script>

<style lang="postcss">
.k-snackbar {
  @apply fixed top-0 right-0 z-20 w-80;
  .k-snackbar-item {
    @apply py-5 px-4 my-3 mx-4 rounded flex items-center;

    .k-snackbar-item-message {
      @apply flex-grow;

      .k-snackbar-title {
        @apply flex items-center;
        @apply text-lg;
      }
      .k-snackbar-text {
        @apply flex items-center;
        @apply text-base;
      }
    }

    .k-snackbar-action {
      @apply pl-5;
      a {
        @apply flex items-center;
        @apply text-sm text-white;
      }
    }

    &.k-snackbar-item--success {
      @apply text-white bg-green-700 bg-opacity-95;
      @apply bg-opacity-95;
    }
    &.k-snackbar-item--error {
      @apply text-white bg-red-700 bg-opacity-95;
      @apply bg-opacity-95;
    }
  }
}

.slide-leave-active,
.slide-enter-active {
  transition: 0.3s;
}
.slide-enter-from, /* Vue3 */
.slide-enter, /* Vue2 */
.slide-leave-to {
  transform: translate(100%, 0);
  opacity: 0;
}
</style>
