import type { FC } from "react";
import { ROUTES } from "../../../routes";
import { useNavigate, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { noteByIdQuery } from "../../../../api/querys/notes";
import { NoteEditor } from "../../../../components/NoteEditor/NoteEditor";
import { StyledLoading } from "../../../../ds/Loading/Loading";

export const EditNote: FC = () => {
  const { noteId } = useParams();
  const { data: note, isError } = useQuery(noteByIdQuery(noteId));
  const navigate = useNavigate();

  if (isError) navigate(ROUTES.home);

  return (
    <>
      {!note && <StyledLoading />}
      {note && <NoteEditor note={note} />}
    </>
  );
};
