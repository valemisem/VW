import "./setup/api";
import type { FC } from "react";
import { LayoutProvider } from "./components/Layout/Layout.provider";
import { Router } from "./Router/Router";
import { SideBarProvider } from "./components/SideBar/SideBar.provider";
import { ModalProvider } from "./components/Modal/Modal.provider";
import { ToastProvider } from "./components/Toast/Toast.provider";
import { VWConfig } from "./ds/config/vw/Config";

export const App: FC = () => {
  return (
    <>
      <VWConfig />
      <LayoutProvider>
        <SideBarProvider>
          <ModalProvider>
            <ToastProvider>
              <Router />
            </ToastProvider>
          </ModalProvider>
        </SideBarProvider>
      </LayoutProvider>
    </>
  );
};
