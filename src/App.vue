<template>
    <div>
        <KUserPicker v-model="user" />

        {{ user }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: null,
        }
    },
}
</script>

<style></style>
