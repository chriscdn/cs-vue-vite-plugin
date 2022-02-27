<template>
  <div class="k-app">
    <KConfirm>
      <KSnackbar>
        <slot />
      </KSnackbar>
    </KConfirm>
  </div>
</template>

<style lang="less">
.k-app {
  * {
    @apply box-border;
  }
}
</style>
