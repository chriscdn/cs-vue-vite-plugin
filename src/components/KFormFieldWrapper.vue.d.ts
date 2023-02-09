declare const _default: import("vue").DefineComponent<{}, {}, {}, {}, {}, {
    props: {
        label: {
            type: StringConstructor;
            default: null;
        };
        successMessages: {
            type: ArrayConstructor;
            default: () => never[];
        };
        errorMessages: {
            type: ArrayConstructor;
            default: () => never[];
        };
    };
    computed: {
        hasSuccess(): any;
        hasError(): any;
        classObj(): {
            'k-input': boolean;
            'k-input--success': boolean;
            'k-input--error': () => any;
        };
    };
}, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _default;
export namespace mixin {
    namespace props {
        namespace label {
            export const type: StringConstructor;
            const _default: null;
            export { _default as default };
        }
        namespace successMessages {
            const type_1: ArrayConstructor;
            export { type_1 as type };
            function _default_1(): never[];
            export { _default_1 as default };
        }
        namespace errorMessages {
            const type_2: ArrayConstructor;
            export { type_2 as type };
            function _default_2(): never[];
            export { _default_2 as default };
        }
    }
    namespace computed {
        function hasSuccess(): any;
        function hasError(): any;
        function classObj(): {
            'k-input': boolean;
            'k-input--success': boolean;
            'k-input--error': () => any;
        };
    }
}
