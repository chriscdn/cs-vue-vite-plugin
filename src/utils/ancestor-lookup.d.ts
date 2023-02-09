declare const _default: AncestorLookup;
export default _default;
declare class AncestorLookup {
    nodes: {};
    registerNodes(items: any): void;
    lookup(session: any, dataId: any): Promise<any>;
}
