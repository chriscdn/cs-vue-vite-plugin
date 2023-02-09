declare namespace _default {
    namespace props {
        namespace height {
            export const type: (StringConstructor | NumberConstructor)[];
            const _default: null;
            export { _default as default };
        }
        namespace maxHeight {
            const type_1: (StringConstructor | NumberConstructor)[];
            export { type_1 as type };
            const _default_1: null;
            export { _default_1 as default };
        }
        namespace maxWidth {
            const type_2: (StringConstructor | NumberConstructor)[];
            export { type_2 as type };
            const _default_2: null;
            export { _default_2 as default };
        }
        namespace minHeight {
            const type_3: (StringConstructor | NumberConstructor)[];
            export { type_3 as type };
            const _default_3: null;
            export { _default_3 as default };
        }
        namespace minWidth {
            const type_4: (StringConstructor | NumberConstructor)[];
            export { type_4 as type };
            const _default_4: null;
            export { _default_4 as default };
        }
        namespace width {
            const type_5: (StringConstructor | NumberConstructor)[];
            export { type_5 as type };
            const _default_5: null;
            export { _default_5 as default };
        }
    }
    namespace computed {
        function measurableStyles(): {
            height: string;
            minHeight: string;
            minWidth: string;
            maxHeight: string;
            maxWidth: string;
            width: string;
        };
    }
}
export default _default;
export function convertToUnit(str: any, unit?: string): string | undefined;
