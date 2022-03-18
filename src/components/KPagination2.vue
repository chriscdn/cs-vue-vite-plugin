<template>
  <!-- <div>{{ offset }} - {{ limit }} - {{ count }} - {{ pageCount }}</div> -->

  <div class="k-pagination2">
    <div>
      <KSelect v-model="pageSize" :items="pageSizes" label="Page Size" />
    </div>
    <template v-if="pageCount > 1">
      <div class="k-pagination2-buttons">
        <a
          v-if="hasPrevious"
          class="k-pagination2-arrow-button"
          @click="clickedPageNumber(pageNumber0 - 1)"
        >
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

        <div
          v-for="page in pageRange0"
          :key="page"
          class="k-pagination2-button"
          :class="classObj(page)"
          @click="clickedPageNumber(page)"
        >
          {{ page + 1 }}
        </div>

        <a
          v-if="hasNext"
          class="k-pagination2-arrow-button"
          @click="clickedPageNumber(pageNumber0 + 1)"
        >
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

      <div>{{ pageNumber }} of {{ pageCount }} pages</div>
    </template>
  </div>
</template>

<script>
import get from 'lodash.get'

// const schema = {
//   type: 'object',
//   properties: {
//     offset: { type: 'integer' },
//     limit: { type: 'integer' },
//     count: { type: 'integer' },
//   },
//   required: ['offset', 'limit', 'count'],
// }

export default {
  props: {
    modelValue: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      pageSizes: [10, 25, 50, 100],
    }
  },
  computed: {
    pageSize: {
      get() {
        return this.limit
      },
      set(value) {
        this.$emit('update:modelValue', {
          ...this.pagination,
          offset: 0,
          limit: value,
        })
      },
    },

    pagination() {
      return this.modelValue
    },
    offset() {
      return get(this.pagination, 'offset', 0)
    },

    limit() {
      return get(this.pagination, 'limit', 0)
    },

    count() {
      return get(this.pagination, 'count', 0)
    },

    lastPageNumber0() {
      return Math.ceil(this.count / this.limit) - 1
    },

    lastPageNumber() {
      return this.lastPageNumber0 + 1
    },

    pageCount() {
      return this.lastPageNumber
    },

    pageRange0() {
      const rang = []

      const plusMinus = 5
      const plusMinus2 = 2 * plusMinus

      const min1 = Math.max(0, this.pageNumber0 - plusMinus)
      const max = Math.min(this.lastPageNumber0, min1 + plusMinus2)
      const min = Math.max(0, max - plusMinus2)

      for (let i = min; i <= max; i++) {
        rang.push(i)
      }
      return rang
    },

    pageNumber0() {
      return Math.floor(this.offset / this.limit)
    },

    pageNumber() {
      return this.pageNumber0 + 1
    },

    hasPrevious() {
      return this.pageNumber0 > 0
    },

    hasNext() {
      return this.pageNumber0 < this.lastPageNumber0
    },
  },
  methods: {
    classObj(pageNumber) {
      return {
        'k-pagination2-button-selected': pageNumber == this.pageNumber0,
      }
    },
    clickedPageNumber(pageNumber0) {
      const p = Math.max(0, Math.min(pageNumber0, this.lastPageNumber0))

      this.$emit('update:modelValue', {
        ...this.pagination,
        offset: p * this.limit,
      })
    },
  },
}
</script>

<style lang="less">
.k-pagination2 {
  @apply flex justify-between items-center;

  .k-pagination2-buttons {
    @apply flex justify-center items-center;

    .k-pagination2-button {
      @apply cursor-pointer ml-1 w-6 h-5 flex items-center justify-center;

      &:hover {
        @apply bg-gray-200 border border-solid border-gray-400;
      }

      &.k-pagination2-button-selected {
        @apply bg-white border border-solid border-gray-400;
      }
    }

    .k-pagination2-arrow-button {
      @apply cursor-pointer ml-1 w-6 h-5 flex items-center justify-center;
    }
  }
}
</style>
