<template>
  <!-- <KOneMoment :loading="loading" /> -->
  <KLinearProgressIndicator v-if="loading" />
  <table class="k-table" :class="classObj">
    <slot />
  </table>
</template>

<script>
export default {
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
        'k-table--properties': this.properties,
        'k-table--striped': this.isStriped,
      }
    },
    isStriped() {
      return this.striped && !this.properties
    },
  },
}
</script>

<style lang="postcss">
.k-table {
  @apply border-collapse;

  background-color: #ffffff;
  /* border-collapse: collapse;
  border-spacing: 0; */
  border: 1px solid #b4b4b4;
  margin-bottom: 1.67em;
  width: 100%;

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
      &.min-width {
        width: 1%;
      }
    }
  }

  tbody {
    td {
      border-top: 1px solid #cccccc;
      padding: 10px 8px;

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
      padding: 10px 8px;
      text-align: center;
    }
  }

  &.k-table--properties {
    > tbody {
      td {
        border: 1px solid #b4b4b4;

        &:nth-child(odd) {
          color: #333333;
          font-weight: 700;
          white-space: nowrap;
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
