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

  /* z-index is ignored since this is a static component */
  /* @apply z-10; */
  /* @apply z-auto; */
}
</style>
