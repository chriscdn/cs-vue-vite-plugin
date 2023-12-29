export declare const useConfirmDialog: () => {
    confirm({ noLabel, yesLabel, title, message, }: {
        noLabel?: string | undefined;
        yesLabel?: string | undefined;
        title?: string | undefined;
        message?: string | undefined;
    }): Promise<boolean>;
    alert({ yesLabel, title, message, }: {
        noLabel?: string | undefined;
        yesLabel?: string | undefined;
        title?: string | undefined;
        message?: string | undefined;
    }): Promise<boolean>;
};
