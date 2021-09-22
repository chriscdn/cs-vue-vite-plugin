<template>
    <div>
        <button @click="click">click</button>
    </div>
</template>

<script>
export default {
    inject: ['ksnackbar'],
    methods: {
        click() {
            this.ksnackbar.success('hello')
        },
    },
}
</script>

<style></style>
