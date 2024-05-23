export declare const useCSUtils: () => {
    isSmartUI: () => boolean;
    openDataId: ({ dataId, selectedTab, selectedProperty, }: {
        dataId: number;
        selectedTab?: string;
        selectedProperty?: string;
    }) => void;
    openDataIdBind: (dataId: number, target?: "_self" | "_blank") => {
        href: string;
        target: "_self" | "_blank";
        onClick: (event: MouseEvent) => void;
    } | {
        href: string;
        target: "_self" | "_blank";
        onClick?: undefined;
    };
    openDataIdClassicBind: (dataId: number, target?: "_self" | "_blank") => {
        href: string;
        target: "_self" | "_blank";
    };
    openAssignmentsBind: () => {
        href: string;
        onClick: (event: MouseEvent) => void;
    } | {
        href: string;
        onClick?: undefined;
    };
    nodeLookup: (dataId: number | undefined | null, legacy?: boolean) => Promise<import("..").RHNodeSerializer | null>;
    userLookup: (userId: number | undefined | null, legacy?: boolean) => Promise<import("..").RHUserSerializer | null>;
};
