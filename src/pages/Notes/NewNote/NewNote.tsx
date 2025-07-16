import type { FC } from "react";
import { NoteEditor } from "../../../components/NoteEditor/NoteEditor";

export const NewNote: FC = () => {
  return <NoteEditor note={{ id: "", title: "", content: "" }} />;
};
