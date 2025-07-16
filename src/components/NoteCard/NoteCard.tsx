import type { FC, MouseEventHandler } from "react";
import {
  NoteCard as NoteCardDS,
  type NoteCardProps,
} from "../../ds/NoteCard/NoteCard";

export const NoteCard: FC<NoteCardProps> = ({ ...props }) => {
  const handleClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    if ((e.target as HTMLElement).closest("button")) {
      e.preventDefault();
      return;
    }
  };

  return <NoteCardDS onClick={handleClick} {...props} />;
};
