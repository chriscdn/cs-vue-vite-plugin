<template>
    <div>
        <button @click="dialog = true">dialog</button>
        <KSwitch />
        <KSnackbar>
            <!-- <KUserPicker v-model="user" /> -->
            <!-- <KInput type="password" /> -->
        </KSnackbar>

        <Tabs>
            <TabItem name="process" title="Process"> hello1 </TabItem>
            <TabItem name="govtopic" title="Gov Topic"> hello2 </TabItem>
            <TabItem name="admin" title="Admin"> hello3 </TabItem>
        </Tabs>
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
