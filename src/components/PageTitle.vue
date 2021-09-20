<template>
    <h1>
        {{ title }}<span v-if="subtitle">: <span class="rhmuted">{{ subtitle }}</span></span>
    </h1>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        subtitle: {
            type: String,
            default: null,
        },
    },
}
</script>
<style scoped>
.rhmuted {
    color: #999;
}
</style>