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

<script lang="ts">
import { defineComponent } from "vue";
import { snackbarKey, SnackbarParameters } from "../injection";

interface SnackbarQueueInterface extends SnackbarParameters {
  index: number;
  type: "success" | "error";
}

export default defineComponent({
  provide() {
    return {
      // @ts-ignore - not sure why this complains
      [snackbarKey]: this,
    };
  },

  data() {
    return {
      index: 0,
      nitems: {} as Array<SnackbarQueueInterface>,
    };
  },
  computed: {
    items() {
      return Object.values(this.nitems).sort((a, b) => b.index - a.index);
    },
  },
  // mounted() {
  //   // debugger
  //   emitter.on('success', this.success)
  //   emitter.on('error', this.error)
  // },

  // unmounted() {
  //   emitter.off('success', this.success)
  //   emitter.off('error', this.error)
  // },

  methods: {
    classObj(item: SnackbarQueueInterface) {
      return {
        "k-snackbar-item--success": item.type === "success",
        "k-snackbar-item--error": item.type === "error",
      };
    },
    action(item: SnackbarQueueInterface) {
      const cb = item.action;
      if (cb) {
        cb(() => this.dismiss(item.index));
      }
    },
    dismiss(index: number) {
      delete this.nitems[index];
    },
    nextIndex() {
      this.index += 1;
      return this.index;
    },

    success(params: SnackbarParameters) {
      // debugger
      this.queue("success", params);
    },
    error(params: SnackbarParameters) {
      this.queue("error", params);
    },

    queue(
      type: "success" | "error",
      {
        title,
        message,
        timeout = 6000,
        actionLabel = "close",
        action,
      }: SnackbarParameters
    ) {
      const index = this.nextIndex();
      // const timeout = snackbar.timeout ?? 6000

      // let { action } = snackbar

      if (action == null) {
        // if no action is specified, then make the default the close action
        action = () => this.dismiss(index);
      }

      const item: SnackbarQueueInterface = {
        title,
        message,
        timeout,
        actionLabel,
        action,
        type,
        index,
      };
      // const item: SnackbarQueueInterface = {
      //   ...snackbar,
      //   index,
      //   type,
      //   action,
      // }

      this.nitems[index] = item;

      console.log(timeout);
      // console.log(this.nitems)

      setInterval(() => this.dismiss(index), timeout);
    },
  },
});
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
