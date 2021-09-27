<script>
import measurables from '../../mixins/measurables'
import clickable from '../../mixins/clickable'
import { h } from 'vue'

export default {
    mixins: [measurables, clickable],
    computed: {
        classObj() {
            return {
                'k-card': true,
                'k-card-clickable': this.isClickable,
            }
        },
    },
    render() {
        // we'll probably need to revisit this if we ever create a clickable card.
        const { tag, data } = this.generateRouteLink()

        return h(tag, { ...data, class: this.classObj, style: [this.measurableStyles] }, [...this.$slots.default()])
    },
}
</script>

<style lang="less">
.k-card {
    @apply flex flex-col block;

    // &.k-card-clickable {
    //     // @apply bg-g;
    //     // @apply hover:bg-support-4;
    // }
}
</style>
