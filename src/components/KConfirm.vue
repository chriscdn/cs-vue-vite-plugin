<template>
  <slot />

  <KDialog v-model="dialog" max-width="30vw" min-width="20vw">
    <KCard>
      <KCardTitle v-if="title">
        {{ title }}
      </KCardTitle>
      <KCardText v-if="message">
        {{ message }}
      </KCardText>
      <KCardActions>
        <KSpacer />
        <KButton v-if="noLabel" small @click="dismiss(false)">
          {{ noLabel }}
        </KButton>
        <KButton v-if="yesLabel" small @click="dismiss(true)">
          {{ yesLabel }}
        </KButton>
      </KCardActions>
    </KCard>
  </KDialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { confirmDialogKey } from '../injection'

export default defineComponent({
  provide() {
    return {
      // @ts-ignore - not sure why this complains
      [confirmDialogKey]: this,
    }
  },
  data() {
    return {
      dialog: false as boolean,
      noLabel: 'Cancel' as string | null,
      yesLabel: 'OK' as string | null,
      title: null as string | null,
      message: null as string | null,
      resolve: null as Function | null,
    }
  },
  methods: {
    dismiss(bool: boolean) {
      this.dialog = false
      if (this.resolve) {
        this.resolve(bool)
        this.resolve = null
      }
    },

    alert({
      yesLabel = 'OK',
      title,
      message,
    }: {
      yesLabel: string
      title: string | null
      message: string | null
    }) {
      return this.confirm({ yesLabel, title, message })
    },

    confirm({
      noLabel = 'Cancel',
      yesLabel = 'OK',
      title,
      message,
    }: {
      noLabel?: string
      yesLabel: string
      title: string | null
      message: string | null
    }) {
      this.noLabel = noLabel
      this.yesLabel = yesLabel
      this.title = title
      this.message = message

      return new Promise((resolve) => {
        this.resolve = resolve
        this.dialog = true
      })
    },
  },
})
</script>
