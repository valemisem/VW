import { useMemo, useState, type FC } from "react";
import type { ModalDef, ModalProps } from "./Modal.types";
import type { HOCProps } from "../../types/react";
import { ModalContext, type ModalContextType } from "./Modal.context";

export const ModalProvider: FC<HOCProps> = ({ children }) => {
  const [modal, setModal] = useState<ModalDef<ModalProps> | undefined>();
  const [transitioning, setTransitioning] = useState<boolean>(true);
  const [output, setOutput] = useState<unknown>();

  const contextValue: ModalContextType = useMemo(
    () => ({
      modal,
      setModal,
      transitioning,
      setTransitioning,
      output,
      setOutput,
    }),
    [modal, setModal, transitioning, setTransitioning, output, setOutput]
  );

  return <ModalContext value={contextValue}>{children}</ModalContext>;
};
