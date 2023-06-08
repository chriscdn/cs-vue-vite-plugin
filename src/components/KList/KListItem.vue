<script lang="ts">
import { PropType, defineComponent, h } from "vue";
import clickable from "../../mixins/clickable";
import KListItemTitle from "./KListItemTitle.vue";
import KListItemSubTitle from "./KListItemSubtitle.vue";

export default defineComponent({
  mixins: [clickable],

  props: {
    title: {
      type: String as PropType<string | null>,
      default: null,
    },
    subtitle: {
      type: String as PropType<string | null>,
      default: null,
    },
  },
  computed: {
    classObj() {
      return {
        "k-list-item": true,
        "k-list-item-clickable": this.isClickable,
      };
    },
  },
  render() {
    const { tag, data } = this.generateRouteLink();

    const titleSlot = this.title
      ? h(KListItemTitle, {}, { default: () => [this.title] })
      : null;

    const subtitleSlot = this.subtitle
      ? h(KListItemSubTitle, {}, { default: () => [this.subtitle] })
      : null;

    /*
    const bodySlot = this.$slots.default
      ? this.$slots.default()
      : h(
          "div",
          { class: "flex-grow" },
          {
            default: () =>
              [titleSlot, subtitleSlot].filter((item) => Boolean(item)),
          }
        );
        */

    const bodySlotContents = this.$slots.default
      ? this.$slots.default()
      : [titleSlot, subtitleSlot].filter((item) => Boolean(item));

    const bodySlot = h(
      "div",
      { class: "k-list-item-body" },
      {
        default: () => bodySlotContents,
      }
    );

    const prependSlot = this.$slots.prepend
      ? h(
          "div",
          { class: "k-list-item-prepend" },
          {
            default: () => this.$slots.prepend!(),
          }
        )
      : null;

    const appendSlot = this.$slots.append
      ? h(
          "div",
          { class: "k-list-item-append" },
          {
            default: () => this.$slots.append!(),
          }
        )
      : null;

    const struct = h(
      tag,
      {
        ...data,
        class: this.classObj,
      },
      [prependSlot, bodySlot, appendSlot].filter((item) => Boolean(item))
    );

    return struct;

    // return h(
    //   tag,
    //   {
    //     ...data,
    //     class: this.classObj,
    //   },
    //   { default: () => [struct] }
    // );
  },
});
</script>

<style lang="postcss">
.k-list-item {
  @apply px-4 py-1 flex gap-2;

  /* &a { */
  /* @apply no-underline; */
  /* } */

  .k-list-item-prepend {
    @apply flex-grow-0;
  }

  .k-list-item-append {
    @apply flex-grow-0;
  }

  .k-list-item-body {
    @apply flex-grow;
  }

  &.k-list-item-clickable {
    @apply cursor-pointer hover:bg-blue-50;
  }
}
</style>
