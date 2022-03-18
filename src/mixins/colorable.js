export default {
  props: {
    color: {
      type: String,
      default: null,
    },
  },
  computed: {
    resolvedColor() {
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
}
