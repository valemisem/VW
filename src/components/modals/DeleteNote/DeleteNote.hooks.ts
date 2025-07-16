import { useCallback, type FC } from "react";
import { DeleteNote } from "./DeleteNote";
import { useModal } from "../../Modal/Modal.hook";
import type { ModalDef, ModalProps } from "../../Modal/Modal.types";
import { MODAL_STYLE } from "../../Modal/Modal.constants";

export const useDeleteNote = () => {
  const { addModal, removeModal } = useModal();

  const addDeleteNote = useCallback(
    (noteId: string) => {
      addModal({
        Component: DeleteNote as FC<ModalProps>,
        veil: true,
        closeOnVeilClick: true,
        modalStyle: MODAL_STYLE,
        extraProps: { noteId },
      } as ModalDef<ModalProps>);
    },
    [addModal]
  );

  const removeDeleteNote = useCallback(() => {
    removeModal();
  }, [removeModal]);

  return {
    addDeleteNote,
    removeDeleteNote,
  };
};
