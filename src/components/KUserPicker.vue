<template>
  <KFormFieldWrapper
    :label="label"
    :success-messages="successMessages"
    :error-messages="errorMessages"
  >
    <KAutocomplete
      v-if="editable"
      v-model="valueLocal"
      v-model:search-input="searchText"
      class="k-user-picker"
      :placeholder="placeholder"
      :width="width"
      :loading="loading"
      :items="items"
      :return-object="returnObject"
      :combobox="false"
    >
      <template #prepend="{ item }">
        <KUserGIF :user-rec="item" />
      </template>

      <template #item="{ item }">
        <KUserGIF :type="item.type" />
        <!-- eslint-disable-next-line vue/no-v-html -->
        <span v-html="formatChoice(item)" />
      </template>
    </KAutocomplete>
    <KUserLink v-else :user="modelValue" gif />
  </KFormFieldWrapper>
</template>

<script>
import debounce from 'lodash.debounce'
import get from 'lodash.get'
import { defineComponent, inject } from 'vue'
import { mixin } from './KFormFieldWrapper.vue'

import userLookup from '../utils/user-lookup'
// const userLookup = new UserLookup()

export default defineComponent({
  mixins: [mixin],
  setup() {
    const session = inject('session', {})
    return { session }
  },

  props: {
    modelValue: {
      type: [String, Number, Object],
      default: null,
    },
    users: {
      type: Boolean,
      default: true,
    },
    groups: {
      type: Boolean,
      default: false,
    },
    width: {
      type: [String, Number],
      default: '100%',
    },
    returnObject: {
      type: Boolean,
      default: false,
    },
    // Why?  document if you add this back
    // combobox: {
    //   type: Boolean,
    //   default: false,
    // },
    editable: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['update:modelValue'],

  data() {
    return {
      loading: false,
      searchText: null,
      readonly: false,
      pleaseWait: false,
      items: [],
    }
  },

  computed: {
    USER() {
      return this.session.members.USER
    },
    GROUP() {
      return this.session.members.GROUP
    },
    valueLocal: {
      /**
       * @param {number} value
       */
      set(value) {
        this.$emit('update:modelValue', value)
      },
      get() {
        return this.modelValue
      },
    },

    options() {
      let where_type = null

      if (this.users && this.groups) {
        where_type = null // defaults to both
      } else if (this.users) {
        where_type = this.USER
      } else if (this.groups) {
        where_type = this.GROUP
      }

      return {
        where_type,
      }
    },
    placeholder() {
      if (this.pleaseWait) {
        return 'Loading...'
      } else if (this.users && this.groups) {
        return 'Search for user or group...'
      } else if (this.users) {
        return 'Search for user...'
      } else if (this.groups) {
        return 'Search for group...'
      } else {
        return ''
      }
    },
  },
  watch: {
    searchText(val) {
      val && val !== this.select && this.querySelections(val)
    },
    value: {
      handler() {
        // TODO: this catches ALL changes, including edits using the widget.
        // this might not be so bad... but it does create extra network requests
        // to think about ....
        this.loadInitialValue()
      },
      immediate: true,
    },
  },
  methods: {
    querySelections: debounce(async function (v) {
      try {
        this.loading = true

        const response = await this.session.members.userQuery(
          v,
          this.options,
          'v1',
        )

        this.items = response.data.data.map((item) => ({
          text: get(item, 'name_formatted'),
          value: get(item, 'id'),
          type: get(item, 'type'),
        }))

        userLookup.registerUsers(this.items)

        // v2
        // this.items = response.data.results.map((item) => ({
        //     id: item.data.properties.id,
        //     first_name: item.data.properties.first_name,
        //     last_name: item.data.properties.last_name,
        //     name: item.data.properties.name,
        //     name_formatted: item.data.properties.name_formatted,
        //     group_id: item.data.properties.group_id,
        //     text: item.data.properties.name_formatted,
        //     value: item.data.properties.id,
        //     type: item.data.properties.type,
        // }))
      } finally {
        this.loading = false
      }
    }, 500),

    formatChoice(item) {
      return get(item, 'text', '')
    },

    async loadInitialValue() {
      const initialValue = this.modelValue
      // debugger
      if (initialValue && !this.combobox) {
        try {
          this.pleaseWait = true
          this.readonly = true
          this.loading = true

          const user = await userLookup.lookup(this.session, initialValue)

          if (user) {
            this.items = [user]
            this.select = user.value
          }
        } finally {
          this.pleaseWait = false
          this.readonly = false
          this.loading = false
        }
      }
    },
  },
})
</script>

<style lang="postcss">
/* spacing between user/group icon and label */
.k-user-picker {
  @apply gap-1;
}
</style>
