declare global {
    interface Window {
        csui: any;
        _rhcore_smartui_view_context: any;
    }
}
declare function isSmartUI(): boolean;
declare function openAssignmentsSmartUI(): void;
declare function openDataIdSmartUI({ dataId, selectedTab, selectedProperty, }: {
    dataId: number;
    selectedTab?: string;
    selectedProperty?: string;
}): void;
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
    openDataIdSmartUI: typeof openDataIdSmartUI;
    openAssignmentsSmartUI: typeof openAssignmentsSmartUI;
};
export {};
