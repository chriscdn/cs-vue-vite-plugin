import { type RHUserSerializer } from '@/types/RHUserSerializer';
import { Session } from '@kweli/cs-rest';
declare class UserLookupQueue {
    session: Session | null;
    private queueItems;
    private intervalId;
    constructor();
    resetQueue(): void;
    queue(session: Session, resolveFunc: Function, userId: number): void;
    processQueue(): Promise<void>;
}
declare class UserLookup {
    users: Record<number, any>;
    userLookupQueue: UserLookupQueue;
    constructor();
    registerUsers(items: Array<RHUserSerializer>): void;
    lookup(session: Session, userId: number): Promise<RHUserSerializer>;
    lookup2(session: Session, userId: number): Promise<any>;
}
declare const _default: UserLookup;
export default _default;
