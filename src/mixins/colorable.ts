import { PropType, defineComponent } from 'vue'

export default defineComponent({
  props: {
    color: {
      type: String as PropType<string>,
      default: null,
    },
  },
  computed: {
    resolvedColor(): string {
      return this.color
    },

    colorableTextStyle() {
      return {
        color: this.resolvedColor,
      }
    },

    colorableBackgroundStyle() {
      return {
        backgroundColor: this.resolvedColor,
      }
    },
  },
})
