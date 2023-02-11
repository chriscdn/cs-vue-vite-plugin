declare namespace _default {
    namespace props {
        namespace disabled {
            export const type: BooleanConstructor;
            const _default: boolean;
            export { _default as default };
        }
        namespace link {
            const type_1: BooleanConstructor;
            export { type_1 as type };
            const _default_1: boolean;
            export { _default_1 as default };
        }
        namespace target {
            const type_2: StringConstructor;
            export { type_2 as type };
            const _default_2: string;
            export { _default_2 as default };
        }
        namespace nuxt {
            const type_3: BooleanConstructor;
            export { type_3 as type };
            const _default_3: boolean;
            export { _default_3 as default };
        }
        namespace to {
            const type_4: (ObjectConstructor | StringConstructor)[];
            export { type_4 as type };
            const _default_4: null;
            export { _default_4 as default };
        }
        namespace href {
            const type_5: StringConstructor;
            export { type_5 as type };
            const _default_5: null;
            export { _default_5 as default };
        }
    }
    namespace computed {
        function isClickable(): any;
    }
    namespace methods {
        function click(e: any): void;
        function generateRouteLink(): {
            tag: string;
            data: {};
        };
    }
}
export default _default;
