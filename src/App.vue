<template>
    <div>
        <button @click="dialog = true">dialog</button>
        <KSwitch />
        <KSnackbar>
            <!-- <KUserPicker v-model="user" /> -->
            <!-- <KInput type="password" /> -->
        </KSnackbar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: 1000,
            d: '1974-06-20',
            dialog: false,
        }
    },
}
</script>
