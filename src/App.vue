<template>
    <div>
        <KSnackbar>
            <KUserPicker v-model="user" />
            <!-- <KInput type="password" /> -->

            <!-- <KButton>Hello</KButton> -->
            <KTable>
                <thead>
                    <tr>
                        <td>hello</td>
                    </tr>
                </thead>
                <body>
                    <tr>
                        <td>hello</td>
                    </tr>
                </body>
            </KTable>
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
