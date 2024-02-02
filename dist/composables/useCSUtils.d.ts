export declare const useCSUtils: () => {
    isSmartUI: () => boolean;
    openDataId: ({ dataId, selectedTab, selectedProperty, }: {
        dataId: number;
        selectedTab?: string | undefined;
        selectedProperty?: string | undefined;
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
