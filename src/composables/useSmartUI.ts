declare global {
  interface Window {
    csui: any;
  }
}

function generateShow(name: string) {
  return (
    message: string,
    options = {},
  ): Promise<void> => {
    return new Promise((resolve) => {
      window.csui.require(
        ["csui/dialogs/modal.alert/modal.alert"],
        function (ModalAlert: any) {
          ModalAlert[name](resolve, message, null, options);
        },
      );
    });
  };
}
function generateConfirm(name: string) {
  return (
    message: string,
    options = {},
  ): Promise<boolean> => {
    return new Promise((resolve) => {
      window.csui.require(
        ["csui/dialogs/modal.alert/modal.alert"],
        function (ModalAlert: any) {
          ModalAlert[name](resolve, message, null, options);
        },
      );
    });
  };
}

export const useSmartUI = () => ({
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
});
