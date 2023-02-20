<template>
  <KFormFieldWrapper
    :label="label"
    :success-messages="successMessages"
    :error-messages="errorMessages"
  >
    <!-- <KFormFieldWrapper> -->
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
      <template #prepend="{ item }: { item: UserSimple }">
        <KUserGIF :type="item?.type" />
      </template>

      <template #item="{ item }: { item: UserSimple }">
        <KUserGIF :type="item.type" /> {{ item.text }}
      </template>
    </KAutocomplete>
    <KUserLink v-else :user="modelValue" gif />
  </KFormFieldWrapper>
</template>

<script lang="ts">
// import debounce from 'lodash.debounce'

import get from 'lodash.get'
import { defineComponent, PropType } from 'vue'
import { mixin } from './KFormFieldWrapper.vue'
import userLookup from '../utils/user-lookup'
import { type UserSimple } from '../utils/user-lookup'
import { injectStrict, sessionKey } from '@/injection'

export default defineComponent({
  mixins: [mixin],
  setup() {
    return { session: injectStrict(sessionKey) }
  },

  props: {
    modelValue: {
      // type: [Number, Object] as PropType<number | Record<string, any> | null>,
      type: Number as PropType<number | null>,
      default: null,
    },
    users: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
    groups: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    width: {
      type: [String, Number],
      default: '100%',
    },
    returnObject: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    // Why?  document if you add this back
    // combobox: {
    //   type: Boolean,
    //   default: false,
    // },
    editable: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
  },
  emits: ['update:modelValue'],

  data() {
    return {
      loading: false as boolean,
      readonly: false as boolean,
      pleaseWait: false as boolean,
      searchText: null,
      items: [] as Array<UserSimple>,
      select: null as any,
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
      set(value: number) {
        this.$emit('update:modelValue', value)
      },
      get() {
        return this.modelValue
      },
    },

    options() {
      let whereType: number | null = null

      if (this.users && this.groups) {
        whereType = null // defaults to both
      } else if (this.users) {
        whereType = this.USER
      } else if (this.groups) {
        whereType = this.GROUP
      }

      return {
        where_type: whereType,
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
    // querySelections: debounce(async function (v) {
    async querySelections(v: string) {
      console.log('KUserPicker: needs debounce')

      try {
        this.loading = true

        const response = await this.session.members.userQuery(
          v,
          this.options,
          'v1',
        )

        this.items = response.data.data.map((item: Record<string, any>) => ({
          text: get(item, 'name_formatted'),
          value: get(item, 'id'),
          type: get(item, 'type'),
        })) as Array<UserSimple>

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
    },
    // }, 500),

    // formatChoice(item: Record<string, any>) {
    //   return get(item, 'text', '')
    // },

    async loadInitialValue() {
      const initialValue = this.modelValue

      if (initialValue) {
        // && !this.combobox) {
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
