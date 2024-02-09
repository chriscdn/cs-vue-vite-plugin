/**
 * This is a simplified version of useAsyncData from Nuxt3. I've tried to keep
 * the api the same, to permit easy migration to Nuxt.
 */
import { ComputedRef, Ref } from "vue";
type TAsyncDataOptions<T, R = null> = {
    default: () => R;
    watch: Array<Ref<any> | ComputedRef<any> | (() => any)>;
    immediate: boolean;
    transform?: (input: T) => T;
};
type TAsyncDataResponse<T> = {
    data: Ref<T>;
    pending: Ref<boolean>;
    error: Ref<any>;
    refresh: () => void;
};
declare function useAsyncData<T, DefaultT = null>(promiseFunc: () => Promise<T>, options?: Partial<TAsyncDataOptions<T, DefaultT>>): TAsyncDataResponse<T | DefaultT>;
export { useAsyncData };
