import { useConfig } from "./useConfig";

declare global {
  interface Window {
    csui: any;
    _rhcore_smartui_view_context: any;
  }
}

function generateShow(name: string) {
  return (message: string, options = {}): Promise<void> => {
    return new Promise((resolve) => {
      window.csui.require(
        ["csui/dialogs/modal.alert/modal.alert"],
        function (ModalAlert: any) {
          ModalAlert[name](resolve, message, null, options);
        }
      );
    });
  };
}

function generateConfirm(name: string) {
  return (message: string, options = {}): Promise<boolean> => {
    return new Promise((resolve) => {
      window.csui.require(
        ["csui/dialogs/modal.alert/modal.alert"],
        function (ModalAlert: any) {
          ModalAlert[name](resolve, message, null, options);
        }
      );
    });
  };
}

function _openDataId({
  baseUrl,
  dataId,
  selectedTab = undefined,
  selectedProperty = undefined,
}: {
  baseUrl: string;
  dataId: number;
  selectedTab?: string; // "properties" | "audit" | "versions"
  selectedProperty?: string; // "general" | category name
}) {
  if (isSmartUI()) {
    _openDataIdSmartUI({ dataId, selectedTab, selectedProperty });
  } else {
    _openDataIdClassicUI({ baseUrl, dataId });
  }
}

function isSmartUI() {
  return Boolean(window.csui);
}

function _openDataIdClassicUI({
  baseUrl,
  dataId,
}: {
  baseUrl: string;
  dataId: number;
}) {
  window.location.href = `${baseUrl}/open/${dataId}`;
}

function _openDataIdSmartUI({
  dataId,
  selectedTab = undefined,
  selectedProperty = undefined,
}: {
  dataId: number;
  selectedTab?: string; // "properties" | "audit" | "versions"
  selectedProperty?: string; // "general" | category name
}) {
  window.csui.require(
    [
      "csui/utils/contexts/factories/next.node",
      "csui/utils/contexts/factories/metadata.factory",
    ],
    function (NextNode: any, MetadataFactory: any) {
      // The SmartUI program context.
      const context: any = window._rhcore_smartui_view_context;

      if (selectedTab) {
        const metadataFactory = context.getModel(MetadataFactory);
        metadataFactory.set("metadata_info", {
          id: dataId,
          navigator: true,
          selectedTab: selectedTab, // this works
          selectedProperty: selectedProperty,
        });
      } else {
        const nextNode = context.getModel(NextNode);
        nextNode.set("id", dataId);
      }

      // const nextNode = context.getModel(NextNode);
      // nextNode.set("id", dataId);

      // const metadataFactory = context.getModel(MetadataFactory);
      // metadataFactory.set("metadata_info", {
      //   id: dataId,
      //   navigator: true,
      //   selectedTab: "permissions", // this works
      //   // selectedTab: "versions", // this works
      //   // selectedProperty: "Validity",
      //   // selectedProperty: "General", // Can be a category name.
      // });
    }
  );
}

export const useSmartUI = () => {
  const { baseUrl } = useConfig();

  return {
    showSuccess: generateShow("showSuccess"),
    showInformation: generateShow("showInformation"),
    showWarning: generateShow("showWarning"),
    showError: generateShow("showError"),
    showMessage: generateShow("showMessage"),
    confirmSuccess: generateConfirm("confirmSuccess"),
    confirmInformation: generateConfirm("confirmInformation"),
    confirmWarning: generateConfirm("confirmWarning"),
    confirmError: generateConfirm("confirmError"),
    confirmQuestion: generateConfirm("confirmQuestion"),
    confirmMessage: generateConfirm("confirmMessage"),
    isSmartUI,
    openDataId: ({
      dataId,
      selectedTab,
      selectedProperty,
    }: {
      dataId: number;
      selectedTab?: string;
      selectedProperty?: string;
    }) => _openDataId({ baseUrl, dataId, selectedTab, selectedProperty }),
  };
};
