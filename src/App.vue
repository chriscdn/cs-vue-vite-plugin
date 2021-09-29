<template>
    <div>
        <button @click="dialog = true">dialog</button>
        <KSnackbar>
            <!-- <KUserPicker v-model="user" /> -->
            <!-- <KInput type="password" /> -->

            <!-- <KButton>Hello</KButton> -->
            <KTable>
                <thead>
                    <tr>
                        <td>hello</td>
                        <td>hello</td>
                    </tr>
                </thead>
                <body>
                    <tr>
                        <td><KUserPicker v-model="user" /></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><KDateTimePicker v-model="d" /></td>
                        <td>{{ JSON.stringify(d) }}</td>
                    </tr>
                    <tr>
                        <td><KDateTimePicker v-model="d" time /></td>
                        <td>{{ JSON.stringify(d) }}</td>
                    </tr>
                    <tr>
                        <td><KUserPicker v-model="user" /></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><KDateTimePicker v-model="d" /></td>
                        <td>{{ JSON.stringify(d) }}</td>
                    </tr>
                    <tr>
                        <td><KDateTimePicker v-model="d" time /></td>
                        <td>{{ JSON.stringify(d) }}</td>
                    </tr>
                    <tr>
                        <td><KUserPicker v-model="user" /></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><KDateTimePicker v-model="d" /></td>
                        <td>{{ JSON.stringify(d) }}</td>
                    </tr>
                    <tr>
                        <td><KDateTimePicker v-model="d" time /></td>
                        <td>{{ JSON.stringify(d) }}</td>
                    </tr>
                    <tr>
                        <td><KUserPicker v-model="user" /></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><KDateTimePicker v-model="d" /></td>
                        <td>{{ JSON.stringify(d) }}</td>
                    </tr>
                    <tr>
                        <td><KDateTimePicker v-model="d" time /></td>
                        <td>{{ JSON.stringify(d) }}</td>
                    </tr>
                    <tr>
                        <td><KUserPicker v-model="user" /></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><KDateTimePicker v-model="d" /></td>
                        <td>{{ JSON.stringify(d) }}</td>
                    </tr>
                    <tr>
                        <td><KDateTimePicker v-model="d" time /></td>
                        <td>{{ JSON.stringify(d) }}</td>
                    </tr>
                    <tr>
                        <td><KUserPicker v-model="user" /></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><KDateTimePicker v-model="d" /></td>
                        <td>{{ JSON.stringify(d) }}</td>
                    </tr>
                    <tr>
                        <td><KDateTimePicker v-model="d" time /></td>
                        <td>{{ JSON.stringify(d) }}</td>
                    </tr>
                    <tr>
                        <td><KUserPicker v-model="user" /></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><KDateTimePicker v-model="d" /></td>
                        <td>{{ JSON.stringify(d) }}</td>
                    </tr>
                    <tr>
                        <td><KDateTimePicker v-model="d" time /></td>
                        <td>{{ JSON.stringify(d) }}</td>
                    </tr>
                    <tr>
                        <td><KUserPicker v-model="user" /></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><KDateTimePicker v-model="d" /></td>
                        <td>{{ JSON.stringify(d) }}</td>
                    </tr>
                    <tr>
                        <td><KDateTimePicker v-model="d" time /></td>
                        <td>{{ JSON.stringify(d) }}</td>
                    </tr>
                    <tr>
                        <td><KUserPicker v-model="user" /></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><KDateTimePicker v-model="d" /></td>
                        <td>{{ JSON.stringify(d) }}</td>
                    </tr>
                    <tr>
                        <td><KDateTimePicker v-model="d" time /></td>
                        <td>{{ JSON.stringify(d) }}</td>
                    </tr>
                    <tr>
                        <td><KUserPicker v-model="user" /></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><KDateTimePicker v-model="d" /></td>
                        <td>{{ JSON.stringify(d) }}</td>
                    </tr>
                    <tr>
                        <td><KDateTimePicker v-model="d" time /></td>
                        <td>{{ JSON.stringify(d) }}</td>
                    </tr>
                    <tr>
                        <td><KUserPicker v-model="user" /></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><KDateTimePicker v-model="d" /></td>
                        <td>{{ JSON.stringify(d) }}</td>
                    </tr>
                    <tr>
                        <td><KDateTimePicker v-model="d" time /></td>
                        <td>{{ JSON.stringify(d) }}</td>
                    </tr>
                </body>
            </KTable>
        </KSnackbar>

        <KDialog scrollable v-model="dialog">
            <KCard>
                <KCardTitle style="background-color: yellow">Title</KCardTitle>
                <KCardText style="background-color: green">
                    <p>Sed ut perspiciatis.</p>
                    <p>Sed ut perspiciatis.</p>
                    <p>Sed ut perspiciatis.</p>
                    <p>Sed ut perspiciatis.</p>
                    <p>Sed ut perspiciatis.</p>
                    <p>Sed ut perspiciatis.</p>
                    <p>Sed ut perspiciatis.</p>
                    <p>Sed ut perspiciatis.</p>
                    <p>Sed ut perspiciatis.</p>
                    <p>Sed ut perspiciatis.</p>
                    <p>Sed ut perspiciatis.</p>
                    <p>Sed ut perspiciatis.</p>
                    <p>Sed ut perspiciatis.</p>
                    <p>Sed ut perspiciatis.</p>
                    <p>Sed ut perspiciatis.</p>
                    <p>Sed ut perspiciatis.</p>
                    <p>Sed ut perspiciatis.</p>
                    <p>Sed ut perspiciatis.</p>
                    <p>Sed ut perspiciatis.</p>
                    <p>Sed ut perspiciatis.</p>
                    <p>Sed ut perspiciatis.</p>
                    <p>Sed ut perspiciatis.</p>
                    <p>Sed ut perspiciatis.</p>
                    <p>Sed ut perspiciatis.</p>
                    <p>Sed ut perspiciatis.</p>
                    <p>Sed ut perspiciatis.</p>
                    <p>Sed ut perspiciatis.</p>
                </KCardText>
                <KCardActions style="background-color: orange">Actions</KCardActions>
            </KCard>
        </KDialog>
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
