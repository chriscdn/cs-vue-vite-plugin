<template>
    <slot></slot>

    <KDialog v-model="dialog" max-width="30vw" min-width="20vw">
        <KCard>
            <KCardTitle v-if="title">{{ title }}</KCardTitle>
            <KCardText v-if="message">{{ message }}</KCardText>
            <KCardActions>
                <KSpacer></KSpacer>
                <KButton small v-if="noLabel" @click="dismiss(false)">{{ noLabel }}</KButton>
                <KButton small v-if="yesLabel" @click="dismiss(true)" class="ml-1">{{ yesLabel }}</KButton>
            </KCardActions>
        </KCard>
    </KDialog>
</template>

<script>
export default {
    provide() {
        return {
            kconfirm: this,
            resolve: null,
        }
    },
    data() {
        return {
            dialog: false,
            noLabel: 'Cancel',
            yesLabel: 'OK',
            title: null,
            message: null,
        }
    },
    methods: {
        dismiss(bool) {
            this.dialog = false
            this.resolve(bool)
            this.resolve = false
        },

        alert({ yesLabel = 'OK', title, message }) {
            return this.confirm({ yesLabel, title, message })
        },

        confirm({ noLabel = 'Cancel', yesLabel = 'OK', title, message }) {
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
}
</script>
