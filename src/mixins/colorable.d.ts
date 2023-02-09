declare namespace _default {
    namespace props {
        namespace color {
            export const type: StringConstructor;
            const _default: null;
            export { _default as default };
        }
    }
    namespace computed {
        function resolvedColor(): any;
        function colorableTextStyle(): {
            color: () => any;
        };
        function colorableBackgroundStyle(): {
            backgroundColor: () => any;
        };
    }
}
export default _default;
