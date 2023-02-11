import type { Session } from '@kweli/cs-rest';
declare class AncestorLookup {
    nodes: Record<number, Array<Record<string, any>>>;
    constructor();
    lookup(session: Session, dataId: number): Promise<Array<Record<string, any>>>;
}
declare const _default: AncestorLookup;
export default _default;
