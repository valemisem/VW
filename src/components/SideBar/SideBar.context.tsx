import { createContext } from "react";
import type { UseStateSetter } from "../../types/react";

export type SidebarContextType = {
  opened: boolean;
  setOpened: UseStateSetter<boolean>;
};

export const SideBarContext = createContext<SidebarContextType>(
  {} as SidebarContextType
);
