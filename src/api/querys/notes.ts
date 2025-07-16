import { getNoteById, getNotes, type Note } from "../primitives/notes";

export const NOTES_QUERY_KEY = "notes";

export const noteByIdQuery = (id?: string) => {
  return {
    queryKey: [NOTES_QUERY_KEY, id],
    queryFn: async () => {
      return getNoteById(id as string);
    },
    enabled: !!id,
    staleTime: 0,
    retry: 0,
  };
};

export const notesQuery = () => {
  return {
    queryKey: [NOTES_QUERY_KEY],
    queryFn: async () => {
      return getNotes();
    },
  };
};

export const notesQueryPaged = (pageSize: number) => {
  return {
    queryKey: [NOTES_QUERY_KEY, pageSize],
    initialPageParam: 1,
    queryFn: async ({ pageParam = 1 }) => {
      return getNotes({ pageNo: pageParam, pageSize });
    },
    getNextPageParam: (lastPage: Note[], allPages: Array<Note[]>) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
  };
};
