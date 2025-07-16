import { useContext, type FC } from "react";
import { useDeleteNote } from "./DeleteNote.hooks";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteNoteMutation } from "../../../api/mutations/notes";
import { ConfirmationModal } from "../../../ds/modals/ConfirmationModal/ConfirmationModal";
import type { ModalProps } from "../../Modal/Modal.types";
import { LayoutContext } from "../../Layout/Layout.context";
import { useToast } from "../../Toast/Toast.hook";

export const DeleteNote: FC<ModalProps & { noteId: string }> = ({ noteId }) => {
  const { size } = useContext(LayoutContext);
  const { removeDeleteNote } = useDeleteNote();
  const queryClient = useQueryClient();
  const { isPending, mutateAsync } = useMutation(
    deleteNoteMutation(queryClient)
  );
  const { showToast } = useToast();

  const onConfirm = async () => {
    showToast("Note deleted successfully", "good");

    try {
      await mutateAsync(noteId);
      showToast("Note deleted successfully", "good");
    } catch {
      showToast("Failed to delete note", "bad");
    } finally {
      // Ensure the modal is closed after the operation
      removeDeleteNote();
    }
  };

  const onReject = () => {
    removeDeleteNote();
  };

  return (
    <ConfirmationModal
      size={size}
      title="Deleting a note"
      description="Are you sure you want to delete this note?"
      confirmLabel="Delete"
      rejectLabel="Cancel"
      onConfirm={onConfirm}
      onReject={onReject}
      disabled={isPending}
    />
  );
};
