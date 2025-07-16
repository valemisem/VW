import {
  fetchData,
  type FetchRequestData,
  type PaginationOptions,
} from "../utils";

export type Note = {
  id: string;
  title: string;
  content: string;
};

export const getNotes = async (
  pagination?: PaginationOptions
): Promise<Note[]> => {
  const body: FetchRequestData = {
    method: "GET",
    action: "notes",
  };
  if (pagination) body.pagination = pagination;
  return fetchData(body);
};

export const getNoteById = async (id: string): Promise<Note> => {
  return fetchData({
    method: "GET",
    action: "notes",
    path: `/${id}`,
  });
};

export const createNote = async (note: Note): Promise<Note> => {
  return fetchData({
    method: "POST",
    action: "notes",
    body: note,
  });
};

export const updateNote = async (note: Note): Promise<Note> => {
  return fetchData({
    method: "PATCH",
    action: "notes",
    path: `/${note.id}`,
    body: {
      title: note.title,
      content: note.content,
    },
  });
};

export const deleteNote = async (id: string): Promise<Note> => {
  return fetchData({
    method: "DELETE",
    action: "notes",
    path: `/${id}`,
  });
};
