# @kweli/cs-vue-vite-plugin

## TypeScript Notes

In February 2023 I attempted to port this library to Vue3 with TypeScript. Outstanding issues:

## Issue 1 - TypeScript globals

How to register global components to make them visible by modules that use this library? It seems something like this is required:

```ts
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    KCard: typeof KCard
    ....
  }
}
```

The unknown is where to put this to make it visible. I had some success putting it in the `~/src/components/` directory of the module where it's being used, but that's not optimal. It should register automatically when using the module.

See `~/scripts/generate-global-compoents-types.ts` for a script to generate this.

See here for more information:

https://stackoverflow.com/questions/69645079/how-to-add-type-support-for-global-components-in-vue-3

Perhaps this something? But seems to be getting more and more complicated:

https://www.npmjs.com/package/unplugin-vue-components

I don't mind explicit imports since it's clear what's happening.

## Issue 2 - Context in debounce

TypeScript doesn't like my `debounce` usage. The `this` context is broken. Search project for debouce to see where this is applicable.

## Issue 3 - Snackbar and Confirm

These simply need to be completed, and implemented in projects that use this module. See `~/src/snackbar.ts` for more information.

## Issue 4 - any shortcuts

This needs to be reviewed. In many cases I simply used `any` as a type because it worked. This will come in time.

## Issue 4 - Configuration Type

The module injects basic configuration, which can be read in child components. This is usually read from `window.__INITIAL_STATE__`. See `~/src/index.ts`.

This needs to be generalised, and somehow made possible to have extra keys that are specific to the application. Perhaps a generic of sorts that is defined in the module using this package?
