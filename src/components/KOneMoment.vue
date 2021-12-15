<template>
    <KDialog :model-value="loading" :width="null">
        <div class="k-one-moment">
            <KSpinner :height="36" :width="36" />
            <div class="k-one-moment-label">{{ label }}</div>
        </div>
    </KDialog>
</template>

<script>
export default {
    props: {
        loading: {
            type: Boolean,
            default: false,
        },
        label: {
            type: String,
            default: 'One moment...',
        },
    },
}
</script>

<style lang="less">
.k-one-moment {
    @apply flex items-center;
    .k-one-moment-label {
        @apply p-2 whitespace-nowrap text-lg;
    }
}
</style>
