import { useCallback, useContext } from "react";
import { ModalContext } from "./Modal.context";
import type { ModalDef, ModalProps } from "./Modal.types";

export const useModal = () => {
  const { modal, setModal, setTransitioning, output } =
    useContext(ModalContext);

  const addModal = useCallback(
    (modalDef: ModalDef<ModalProps>) => {
      setModal(modalDef);
    },
    [setModal]
  );

  const removeModal = useCallback(
    (o?: unknown) => {
      setModal(undefined);
      setTransitioning(true);
      modal?.callback?.(o ?? output);
    },
    [modal, setModal, setTransitioning, output]
  );

  return {
    addModal,
    removeModal,
  };
};
