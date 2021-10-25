<template>
    <div>
        <KMulti v-model="scope">
            <template #default="{ index }">
                <KNodePickerField v-model="scope[index]" />
                <!-- {{ index }} -->
            </template>
        </KMulti>
        <br />
        <div>{{ scope }}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            scope: [2000, 2000],
        }
    },
}
</script>
