import { type RHUserSerializer } from "../types/RHUserSerializer";
import { Session } from "@kweli/cs-rest";
declare class UserLookupQueue {
    session: Session | null;
    private queueItems;
    private intervalId;
    constructor();
    resetQueue(): void;
    queue(session: Session, resolveFunc: Function, userId: number): void;
    private processQueue;
}
declare class UserLookup {
    users: Record<number, RHUserSerializer | null>;
    userLookupQueue: UserLookupQueue;
    constructor();
    lookupLegacy(session: Session, userId: number | null): Promise<RHUserSerializer | null>;
    lookupRPC(session: Session, userId: number | null): Promise<RHUserSerializer | null>;
    lookup(session: Session, userId: number | null, legacy?: boolean): Promise<RHUserSerializer | null>;
}
declare const _default: UserLookup;
export default _default;
