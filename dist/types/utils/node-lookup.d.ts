import { type RHNodeSerializer } from '@/types/RHNodeSerializer';
import { Session } from '@kweli/cs-rest';
declare class NodeLookupQueue {
    session: Session | null;
    private queueItems;
    private intervalId;
    constructor();
    resetQueue(): void;
    queue(session: Session, resolveFunc: Function, dataId: number): void;
    processQueue(): Promise<void>;
}
declare class NodeLookup {
    nodes: Record<number, any>;
    nodeLookupQueue: NodeLookupQueue;
    constructor();
    registerUsers(items: Array<RHNodeSerializer>): void;
    lookup(session: Session, dataId: number | null): Promise<RHNodeSerializer | null>;
}
declare const _default: NodeLookup;
export default _default;
