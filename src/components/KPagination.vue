<template>
  <div v-if="pagination.hasOtherPages" class="k-pagination">
    <KSelect v-model="pageSize" :items="pageSizes" label="Page Size" />
    <div class="k-pagination-buttons">
      <a v-if="hasPrevious" class="k-pagination-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
        >
          <path
            d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
          />
        </svg>
      </a>
      <template v-for="page in pageRange" :key="page">
        <div v-if="page === '|'">...</div>

        <a
          v-else
          class="k-pagination-button k-pagination-button-border"
          :class="classObj(page as number)"
          @click="$emit('update:modelValue', page)"
        >
          {{ page }}
        </a>
      </template>

      <a v-if="hasNext" class="k-pagination-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
        >
          <path
            d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"
          />
        </svg>
      </a>
    </div>
    <div>
      Displaying {{ pagination.startIndex }}-{{ pagination.endIndex }} of
      {{ pagination.count }} items.
    </div>
  </div>
  <!-- <div>{{ pagination }}</div> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import get from 'lodash.get'
export default defineComponent({
  props: {
    modelValue: {
      type: Number,
      required: true,
    },
    pagination: {
      type: Object,
      required: true,
    },
    length: {
      type: Number,
      required: true,
    },
  },
  emits: ['update:modelValue', 'update:pageSize'],
  computed: {
    pageRange(): Array<number | string> {
      return get(this.pagination, 'pageRange', [])
    },
    pageSizes(): Array<number> {
      return get(this.pagination, 'pageSizes', [])
    },
    pageNumber(): number {
      return get(this.pagination, 'pageNumber', 0)
    },
    pageSize: {
      get() {
        return get(this.pagination, 'pageSize', 0)
      },
      set(value: number) {
        this.$emit('update:pageSize', value)
      },
    },
    hasPrevious(): boolean {
      return get(this.pagination, 'hasPrevious', false)
    },
    hasNext(): boolean {
      return get(this.pagination, 'hasNext', false)
    },
  },
  methods: {
    classObj(pageNumber: number) {
      return {
        'k-pagination-button-selected': pageNumber == this.pageNumber,
      }
    },
  },
})
</script>

<style lang="postcss">
.k-pagination {
  @apply flex justify-between items-center;

  .k-pagination-buttons {
    @apply flex justify-center items-center cursor-pointer;

    .k-pagination-button {
      @apply inline-block;
      @apply mx-1 w-8 h-6 rounded-lg flex items-center justify-center;

      &.k-pagination-button-selected {
        @apply bg-blue-500 text-white;
      }

      &.k-pagination-button-border {
        @apply border border-solid border-blue-500;
      }
    }
  }
}
</style>
