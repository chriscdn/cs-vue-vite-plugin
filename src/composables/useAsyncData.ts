/**
 * This is a simplified version of useAsyncData from Nuxt3. I've tried to keep
 * the api the same, to permit easy migration to Nuxt.
 */
import { ComputedRef, Ref, ref, watch } from "vue";

type TAsyncDataOptions<T, R = null> = {
  default: () => R; // | Ref<R>;
  watch: Array<Ref<any> | ComputedRef<any> | (() => any)>;
  immediate: boolean;
  transform?: (input: T) => T;
  deep?: boolean;
};

type TAsyncDataResponse<T> = {
  data: Ref<T>;
  pending: Ref<boolean>;
  error: Ref<any>;
  refresh: () => void;
};

function useAsyncData<T, DefaultT = null>(
  promiseFunc: () => Promise<T>,
  options?: Partial<TAsyncDataOptions<T, DefaultT>>
): TAsyncDataResponse<T | DefaultT> {
  const defaultFunc = options?.default ?? ((() => null) as () => DefaultT);
  const watches = options?.watch ?? [];

  const immediate = options?.immediate ?? true;

  const transform = options?.transform ?? ((item: T) => item);
  const deep = options?.deep ?? true;

  const data: Ref<T | DefaultT> = ref(defaultFunc()) as Ref<DefaultT>;
  const pending = ref(false);
  const error: Ref<any> = ref(null);

  const refresh = async () => {
    try {
      pending.value = true;
      data.value = transform(await promiseFunc());
      error.value = null;
    } catch (e) {
      data.value = defaultFunc();
      error.value = e;
    } finally {
      pending.value = false;
    }
  };

  watches.map((watchVar) => watch(watchVar, refresh, { deep }));

  // Initial load
  if (immediate) {
    refresh();
  }

  return { data, pending, error, refresh };
}

export { useAsyncData };
