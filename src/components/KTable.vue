<template>
  <!-- <KOneMoment :loading="loading" /> -->
  <div>
    <KLinearProgressIndicator v-if="loading" />
    <table class="k-table" :class="classObj">
      <slot />
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    properties: {
      type: Boolean,
      default: false,
    },
    striped: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classObj() {
      return {
        "k-table--properties": this.properties,
        "k-table--striped": this.isStriped,
      };
    },
    isStriped() {
      return this.striped && !this.properties;
    },
  },
});
</script>

<style lang="postcss">
table.k-table {
  @apply border-collapse table-auto  w-full;

  background-color: #ffffff;
  border: 1px solid #b4b4b4;

  thead {
    td,
    th {
      a {
        color: #00609e;
        text-decoration: none;
      }

      border-bottom: 1px solid #b4b4b4;
      font-weight: 700;
      padding: 10px 8px;
      white-space: nowrap;
      @apply align-middle;
      &.min-width {
        width: 1%;
      }
    }
  }

  tbody {
    td {
      border-top: 1px solid #cccccc;
      padding: 10px 8px;
      @apply align-middle;

      &:first-child {
        border-left: 1px solid #b4b4b4;
      }

      &:last-child {
        border-right: 1px solid #b4b4b4;
      }
    }
  }

  tfoot {
    td {
      @apply align-middle;
      padding: 10px 8px;
      @apply text-center;
    }
  }

  &.k-table--properties {
    > tbody {
      td {
        /* border: 1px solid #b4b4b4; */
        @apply border border-solid border-gray-300;

        &:nth-child(odd) {
          @apply bg-gray-200 font-bold whitespace-nowrap;
          width: 1%;
        }
      }
    }
  }

  &.k-table--striped {
    > tbody {
      > tr:nth-child(even) {
        background-color: #fafafa;
      }
    }
  }
}
</style>
