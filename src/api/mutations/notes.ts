import type { QueryClient } from "@tanstack/react-query";
import {
  createNote,
  deleteNote,
  updateNote,
  type Note,
} from "../primitives/notes";
import { NOTES_QUERY_KEY } from "../querys/notes";

export const createNoteMutation = (queryClient: QueryClient) => {
  return {
    mutationKey: ["notes-create"],
    mutationFn: (body: Omit<Note, "id">) => {
      return createNote({ ...body, id: crypto.randomUUID() });
    },
    onMutate: () => {
      queryClient.cancelQueries({
        queryKey: [NOTES_QUERY_KEY],
        exact: true,
      });
    },
    onSettled: (note: Note | undefined) => {
      if (note !== undefined) {
        queryClient.invalidateQueries({
          queryKey: [NOTES_QUERY_KEY],
          exact: true,
        });
      }
    },
  };
};

export const updateNoteMutation = (queryClient: QueryClient) => {
  return {
    mutationKey: ["notes-update"],
    mutationFn: (body: Note) => {
      return updateNote(body);
    },
    onMutate: () => {
      queryClient.cancelQueries({
        queryKey: [NOTES_QUERY_KEY],
        exact: false,
      });
    },
    onSettled: (note: Note | undefined) => {
      if (note !== undefined) {
        queryClient.invalidateQueries({
          queryKey: [NOTES_QUERY_KEY],
          exact: false,
        });
      }
    },
  };
};

export const deleteNoteMutation = (queryClient: QueryClient) => {
  // eslint-disable-next-line prefer-const
  let id: string = "";
  return {
    mutationKey: ["notes-delete"],
    mutationFn: ((id: string) => {
      return deleteNote(id);
    }).bind(this),
    onMutate: () => {
      queryClient.cancelQueries({
        queryKey: [NOTES_QUERY_KEY],
        exact: true,
      });
      queryClient.cancelQueries({
        queryKey: [NOTES_QUERY_KEY, id],
        exact: true,
      });
    },
    onSettled: (note: Note | undefined) => {
      if (note !== undefined) {
        queryClient.invalidateQueries({
          queryKey: [NOTES_QUERY_KEY],
          exact: true,
        });
      }
    },
  };
};
