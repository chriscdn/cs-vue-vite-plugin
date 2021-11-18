<template>
    <div class="k-card-text">
        <slot></slot>
    </div>
</template>

<style lang="less">
.k-card-text {
    @apply flex-grow;
    @apply p-3;
}

.k-card-title + .k-card-text {
    @apply pt-0;
}
</style>
