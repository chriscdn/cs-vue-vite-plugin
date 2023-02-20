import { Session } from '@kweli/cs-rest';
export type UserSimple = {
    value: number;
    type: number;
    text: string;
};
declare class UserLookup {
    users: Record<string, any>;
    constructor();
    registerUsers(items: Array<UserSimple>): void;
    fullName(userRec: Record<string, any>): any;
    lookup(session: Session, userId: number): Promise<any>;
}
declare const _default: UserLookup;
export default _default;
