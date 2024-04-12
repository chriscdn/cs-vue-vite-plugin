import { useConfig, useSession, useSmartUI } from "..";
import nodeLookupInstance from "../utils/node-lookup";
import userLookupInstance from "../utils/user-lookup";

export const useCSUtils = () => {
  const smartUI = useSmartUI();
  const config = useConfig();
  const session = useSession();

  const _openDataIdClassicUI = ({
    baseUrl,
    dataId,
  }: {
    baseUrl: string;
    dataId: number;
  }) => {
    window.location.href = `${baseUrl}/open/${dataId}`;
  };

  const _openDataId = ({
    dataId,
    selectedTab = undefined,
    selectedProperty = undefined,
  }: {
    dataId: number;
    selectedTab?: string; // "properties" | "audit" | "versions"
    selectedProperty?: string; // "general" | category name
  }) => {
    if (smartUI.isSmartUI()) {
      smartUI.openDataIdSmartUI({ dataId, selectedTab, selectedProperty });
    } else {
      _openDataIdClassicUI({ baseUrl: config.baseUrl, dataId });
    }
  };

  const openDataId = ({
    dataId,
    selectedTab,
    selectedProperty,
  }: {
    dataId: number;
    selectedTab?: string;
    selectedProperty?: string;
  }) => {
    _openDataId({ dataId, selectedTab, selectedProperty });
  };

  const openAssignmentsBind = () => {
    return smartUI.isSmartUI()
      ? {
          href: `${config.baseUrl}/app/myassignments`,
          onClick: (event: MouseEvent) => {
            smartUI.openAssignmentsSmartUI();
            event.preventDefault();
          },
        }
      : {
          href: `${config.baseUrl}?func=Personal.Assignments`,
        };
  };

  const openDataIdBind = (
    dataId: number,
    target: "_self" | "_blank" = "_self"
  ) => {
    return smartUI.isSmartUI()
      ? {
          href: `${config.baseUrl}/app/nodes/${dataId}`,
          target,
          onClick: (event: MouseEvent) => {
            if (target === "_self") {
              smartUI.openDataIdSmartUI({ dataId });
              event.preventDefault();
            }
          },
        }
      : {
          href: `${config.baseUrl}/open/${dataId}`,
          target,
        };
  };

  const nodeLookup = (dataId: number | undefined | null, legacy?: boolean) => {
    return nodeLookupInstance.lookup(session, dataId ?? null, legacy);
  };

  const userLookup = (userId: number | undefined | null, legacy?: boolean) => {
    return userLookupInstance.lookup(session, userId ?? null, legacy);
  };

  return {
    isSmartUI: smartUI.isSmartUI,
    openDataId,
    openDataIdBind,
    openAssignmentsBind,
    nodeLookup,
    userLookup,
  };
};
