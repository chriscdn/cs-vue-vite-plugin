<template>
  <div class="k-app">
    <KConfirm>
      <KSnackbar>
        <slot />
      </KSnackbar>
    </KConfirm>
  </div>
</template>

<style lang="postcss">
.k-app {
  * {
    @apply box-border;
  }
  @apply relative;
}
</style>
