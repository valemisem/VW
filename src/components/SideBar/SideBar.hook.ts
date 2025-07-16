import { useCallback, useContext } from "react";
import { SideBarContext } from "./SideBar.context";

export const useSideBar = () => {
  const { opened, setOpened } = useContext(SideBarContext);

  const openSideBar = useCallback(() => {
    setOpened(true);
  }, [setOpened]);

  const closeSideBar = useCallback(() => {
    setOpened(false);
  }, [setOpened]);

  const toggleSideBar = useCallback(() => {
    setOpened(!opened);
  }, [opened, setOpened]);

  return {
    opened,
    openSideBar,
    closeSideBar,
    toggleSideBar,
  };
};
