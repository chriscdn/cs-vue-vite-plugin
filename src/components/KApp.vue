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

  /* relative removed 5.10.2023.  If you add it back, document why, and be sure to test with SmartUI. */

  @apply z-10;
  /* @apply relative z-10; */
}
</style>
