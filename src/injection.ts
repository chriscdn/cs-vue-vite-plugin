/**
 * This file provides TypeScript friendly keys for provide/inject.
 *
 * This module injects the session and configuration into the applicaiton, to make them
 * available to children.  The InjectionKey type is used to make things type safe.
 *
 * In a child component:
 *
 * import { configKey, injectStrict } from '@kweli/cs-vue-vite-plugin'
 *
 * then, in setup()
 *
 * const config = injectStrict(configKey) // configu is properly typed
 *
 * The `injectStrict` method is a convenient function to ensure we have a resolved value.
 *
 * Motivated by this blog post: https://logaretm.com/blog/type-safe-provide-inject/
 */
import { inject, type InjectionKey } from 'vue'
import type { Session } from '@kweli/cs-rest'
// import { type SnackbarInterface } from './snackbar'

export interface ConfigurationType {
  img: string
  baseURL: string
  jsLongDateFormat: string
  jsShortDateFormat: string
}

function injectStrict<T>(key: InjectionKey<T>, fallback?: T) {
  const resolved = inject(key, fallback)
  if (!resolved) {
    throw new Error(`Could not resolve ${key.description}`)
  }
  return resolved
}

type ConfirmDialogParameters = {
  noLabel?: string
  yesLabel?: string
  title?: string
  message?: string
}

interface ConfirmDialog {
  confirm({
    noLabel,
    yesLabel,
    title,
    message,
  }: ConfirmDialogParameters): Promise<boolean>

  alert({ yesLabel, title, message }: ConfirmDialogParameters): Promise<boolean>
}

export type SnackbarParameters = {
  title?: string
  message?: string
  timeout?: number
  actionLabel?: string
  action?(cb: Function): void
}

type Snackbar = {
  success({
    title,
    message,
    timeout,
    actionLabel,
    action,
  }: SnackbarParameters): void
  error({
    title,
    message,
    timeout,
    actionLabel,
    action,
  }: SnackbarParameters): void
}

const sessionKey: InjectionKey<Session> = Symbol('session')
const configKey: InjectionKey<ConfigurationType> = Symbol('config')
const snackbarKey: InjectionKey<Snackbar> = Symbol('snackbar')
const confirmDialogKey: InjectionKey<ConfirmDialog> = Symbol('confirmDialogKey')

export { injectStrict, sessionKey, configKey, snackbarKey, confirmDialogKey }
