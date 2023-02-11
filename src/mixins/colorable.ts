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
      //   const color = get(colors, this.color)
      //   return typeof color == 'string' ? color : this.color
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
