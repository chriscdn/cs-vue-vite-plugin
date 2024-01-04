declare global {
    interface Window {
        csui: any;
        _rhcore_smartui_view_context: any;
    }
}
declare function isSmartUI(): boolean;
export declare const useSmartUI: () => {
    showSuccess: (message: string, options?: {}) => Promise<void>;
    showInformation: (message: string, options?: {}) => Promise<void>;
    showWarning: (message: string, options?: {}) => Promise<void>;
    showError: (message: string, options?: {}) => Promise<void>;
    showMessage: (message: string, options?: {}) => Promise<void>;
    confirmSuccess: (message: string, options?: {}) => Promise<boolean>;
    confirmInformation: (message: string, options?: {}) => Promise<boolean>;
    confirmWarning: (message: string, options?: {}) => Promise<boolean>;
    confirmError: (message: string, options?: {}) => Promise<boolean>;
    confirmQuestion: (message: string, options?: {}) => Promise<boolean>;
    confirmMessage: (message: string, options?: {}) => Promise<boolean>;
    isSmartUI: typeof isSmartUI;
    openDataId: ({ dataId, selectedTab, selectedProperty, }: {
        dataId: number;
        selectedTab?: string | undefined;
        selectedProperty?: string | undefined;
    }) => void;
};
export {};
