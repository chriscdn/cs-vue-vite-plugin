export type RHUserSerializer = {
    readonly name: string;
    readonly userid: number;
    readonly displayname: string;
    readonly gif: string | null;
    readonly type: number;
    readonly isDeleted: boolean;
    readonly firstName: string | null;
    readonly lastName: string | null;
    readonly email: string | null;
    readonly groupid: number;
    readonly title: string | null;
    readonly isUser: boolean;
    readonly isGroup: boolean;
    readonly isRole: boolean;
    readonly isRecordsManager: boolean;
    readonly canLogin: boolean;
    readonly isAdmin: boolean;
    readonly locale: string;
    readonly userdata: object | null;
    readonly photoid: string | null;
};
