declare namespace _default {
    namespace props {
        namespace disabled {
            export let type: BooleanConstructor;
            let _default: boolean;
            export { _default as default };
        }
        namespace link {
            let type_1: BooleanConstructor;
            export { type_1 as type };
            let _default_1: boolean;
            export { _default_1 as default };
        }
        namespace target {
            let type_2: StringConstructor;
            export { type_2 as type };
            let _default_2: string;
            export { _default_2 as default };
        }
        namespace nuxt {
            let type_3: BooleanConstructor;
            export { type_3 as type };
            let _default_3: boolean;
            export { _default_3 as default };
        }
        namespace to {
            let type_4: (StringConstructor | ObjectConstructor)[];
            export { type_4 as type };
            let _default_4: null;
            export { _default_4 as default };
        }
        namespace href {
            let type_5: StringConstructor;
            export { type_5 as type };
            let _default_5: null;
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
