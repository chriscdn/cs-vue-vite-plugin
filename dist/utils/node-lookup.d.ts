import { type RHNodeSerializer } from "../types/RHNodeSerializer";
import { Session } from "@kweli/cs-rest";
type TResolveFunction = (item: RHNodeSerializer | null) => void;
declare class NodeLookupQueue {
    session: Session | null;
    private queueItems;
    private intervalId;
    constructor();
    resetQueue(): void;
    queue(session: Session, resolveFunc: TResolveFunction, dataId: number): void;
    private processQueue;
}
declare class NodeLookup {
    nodes: Record<number, RHNodeSerializer | null>;
    nodeLookupQueue: NodeLookupQueue;
    constructor();
    lookupLegacy(session: Session, dataId: number | null): Promise<any>;
    lookupRPC(session: Session, dataId: number | null): Promise<RHNodeSerializer | null>;
    lookup(session: Session, dataId: number | null, legacy?: boolean): Promise<RHNodeSerializer | null>;
}
declare const _default: NodeLookup;
export default _default;
