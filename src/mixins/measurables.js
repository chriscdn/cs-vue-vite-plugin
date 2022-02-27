const convertToUnit = (str, unit = 'px') => {
  if (str == null || str === '') {
    return undefined
  } else if (isNaN(+str)) {
    return String(str)
  } else {
    return `${Number(str)}${unit}`
  }
}

export { convertToUnit }

export default {
  props: {
    height: {
      type: [Number, String],
      default: null,
    },
    maxHeight: {
      type: [Number, String],
      default: null,
    },
    maxWidth: {
      type: [Number, String],
      default: null,
    },
    minHeight: {
      type: [Number, String],
      default: null,
    },
    minWidth: {
      type: [Number, String],
      default: null,
    },
    width: {
      type: [Number, String],
      default: null,
    },
  },

  computed: {
    measurableStyles() {
      const styles = {}

      const height = convertToUnit(this.height)
      const minHeight = convertToUnit(this.minHeight)
      const minWidth = convertToUnit(this.minWidth)
      const maxHeight = convertToUnit(this.maxHeight)
      const maxWidth = convertToUnit(this.maxWidth)
      const width = convertToUnit(this.width)

      if (height) styles.height = height
      if (minHeight) styles.minHeight = minHeight
      if (minWidth) styles.minWidth = minWidth
      if (maxHeight) styles.maxHeight = maxHeight
      if (maxWidth) styles.maxWidth = maxWidth
      if (width) styles.width = width

      return styles
    },
  },
}
