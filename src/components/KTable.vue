<template>
    <table class="k-table" :class="classObj">
        <slot></slot>
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

<style lang="less">
@color0: #b4b4b4; // Appears 6 times
@color1: #f4f3f3; // Appears 5 times
@color2: #cccccc; // Appears 4 times
@color3: #ffffff; // Appears 2 times
@color4: #00609e; // Appears 2 times
@color5: #c8c8c8; // Appears 2 times

@tdpadding: 10px 8px;
@tdpaddingcompact: 1px 4px;

.k-table {
    @apply border-collapse;

    background-color: @color3;
    // border-collapse: collapse;
    // border-spacing: 0;
    border: 1px solid @color0;
    margin-bottom: 1.67em;
    width: 100%;

    thead {
        td,
        th {
            a {
                color: @color4;
                text-decoration: none;
            }

            background-color: @color1;
            border-bottom: 1px solid @color0;
            font-weight: 700;
            padding: @tdpadding;
            white-space: nowrap;
            &.min-width {
                width: 1%;
            }
        }
    }

    tbody {
        td {
            border-top: 1px solid @color2;
            padding: @tdpadding;

            &:first-child {
                border-left: 1px solid @color0;
            }

            &:last-child {
                border-right: 1px solid @color0;
            }
        }
    }

    tfoot {
        td {
            padding: @tdpadding;
            text-align: center;
        }
    }

    &.k-table--properties {
        > tbody {
            td {
                border: 1px solid @color0;

                &:nth-child(odd) {
                    background-color: @color1;
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
