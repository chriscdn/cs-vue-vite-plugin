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
  /* z-index:10 useful when displaying modals over the browsetables.   */
  @apply relative z-10;
}
</style>
