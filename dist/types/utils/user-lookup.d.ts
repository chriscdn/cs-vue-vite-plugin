declare const _default: UserLookup;
export default _default;
declare class UserLookup {
    users: {};
    registerUsers(items: any): void;
    fullName(userRec: any): any;
    lookup(session: any, userId: any): Promise<any>;
}
