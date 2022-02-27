export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    link: {
      type: Boolean,
      default: false,
    },
    target: {
      type: String,
      default: '_self',
    },
    nuxt: {
      type: Boolean,
      default: false,
    },
    to: {
      type: [String, Object],
      default: null,
    },
    href: {
      type: String,
      default: null,
    },
  },

  computed: {
    isClickable() {
      return (
        !this.disabled &&
        Boolean(this.$attrs.click || this.link || this.to || this.href)
      )
    },
  },
  methods: {
    click(e) {
      this.$emit('click', e)
    },
    generateRouteLink() {
      let tag = 'div'
      let data = {}

      if (this.href) {
        tag = 'a'
        data = {
          attrs: {
            href: this.href,
            target: this.target,
          },
        }
      } else if (this.to) {
        tag = this.nuxt ? 'nuxt-link' : 'router-link'
        data = {
          props: {
            to: this.to,
          },
        }
      }

      return { tag, data }
    },
  },
}
