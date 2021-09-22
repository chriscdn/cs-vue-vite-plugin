<template>
    <div>
        <KSnackbar>
            <KUserPicker v-model="user" />
            <!-- <KInput type="password" /> -->
        </KSnackbar>
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
