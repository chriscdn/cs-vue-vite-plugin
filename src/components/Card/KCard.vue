<script lang="ts">
import { defineComponent, h } from "vue";
import clickable from "../../mixins/clickable";
import measurables from "../../mixins/measurables";

export default defineComponent({
  mixins: [measurables, clickable],

  computed: {
    classObj() {
      return {
        "k-card": true,
        "k-card-clickable": this.isClickable,
      };
    },
  },
  methods: {
    renderCard() {
      const { tag, data } = this.generateRouteLink();

      return h(
        tag,
        {
          ...data,
          class: this.classObj,
          style: [this.measurableStyles],
        },
        [...this.$slots.default!()]
      );
    },
  },
  render() {
    // return h('div', {}, [this.renderLoading(), this.renderCard()])
    return this.renderCard();
  },
});
</script>

<style lang="postcss">
.k-card {
  @apply flex flex-col;
}
</style>
