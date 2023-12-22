/**
 * This is a simplified version of useAsyncData from Nuxt3. I've tried to keep
 * the api the same, to permit easy migration to Nuxt.
 *
 * I tried placing this file in @kweli/cs-vue-vite-plugin, but somehow the
 * reactivity fell apart (no automatic unwrapping of the reactive return value.)
 */
import { ComputedRef, Ref, ref, watch } from "vue";

type TAsyncDataOptions<R = null> = {
  default: () => R; // | Ref<R>;
  watch: Array<Ref<any> | ComputedRef<any> | (() => any)>;
};

type TAsyncDataResponse<T> = {
  data: Ref<T>;
  pending: Ref<boolean>;
  error: Ref<any>;
  refresh: () => void;
};

function useAsyncData<T, DefaultT = null>(
  promiseFunc: () => Promise<T>,
  options?: Partial<TAsyncDataOptions<DefaultT>>
): TAsyncDataResponse<T | DefaultT> {
  const defaultFunc = options?.default ?? ((() => null) as () => DefaultT);
  const watches = options?.watch ?? [];

  const data: Ref<T | DefaultT> = ref(defaultFunc()) as Ref<DefaultT>;
  const pending = ref(false);
  const error: Ref<any> = ref(null);

  const refresh = async () => {
    try {
      pending.value = true;
      data.value = await promiseFunc();
      error.value = null;
    } catch (e) {
      error.value = e;
    } finally {
      pending.value = false;
    }
  };

  watches.map((watchVar) => watch(watchVar, refresh));

  // Initial load
  refresh();

  return { data, pending, error, refresh };
}

export { useAsyncData };
