<script>
import measurables from '../../mixins/measurables'
import clickable from '../../mixins/clickable'
import { h } from 'vue'
// import KLinearProgressIndicator from '../KLinearProgressIndicator.vue'

export default {
    mixins: [measurables, clickable],
    // props: {
    //     loading: {
    //         type: Boolean,
    //         default: false,
    //     },
    // },
    computed: {
        classObj() {
            return {
                'k-card': true,
                'k-card-clickable': this.isClickable,
            }
        },
    },
    methods: {
        // renderLoading() {
        //     return this.loading ? h(KLinearProgressIndicator) : null
        // },
        renderCard() {
            const { tag, data } = this.generateRouteLink()

            return h(
                tag,
                {
                    ...data,
                    class: this.classObj,
                    style: [this.measurableStyles],
                },
                [...this.$slots.default()],
            )
        },
    },
    render() {
        // return h('div', {}, [this.renderLoading(), this.renderCard()])
        return this.renderCard()
    },
}
</script>

<style lang="less">
.k-card {
    @apply flex flex-col block;
}
</style>
