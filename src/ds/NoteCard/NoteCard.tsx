import type { FC } from "react";
import styled from "styled-components";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { Link, type LinkProps } from "react-router";
import { RoundButton } from "../buttons/RoundButton/RoundButton";
import type { Note } from "../../api/primitives/notes";

export const NOTE_CARD_WIDTH = 300;

const Container = styled(Link)`
  position: relative;
  width: ${NOTE_CARD_WIDTH}px;
  height: 180px;
  padding: 35px 15px 15px 15px;
  border-radius: 5px;
  background-color: var(--primary-60);
  border: 2px solid var(--dark-100);
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;

  & > h3 {
    text-align: center;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    font: var(--body-black);
    white-space: nowrap;
  }

  & > p {
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font: var(--body-light);
  }

  &:hover {
    cursor: pointer;
    background-color: var(--primary-100);
  }
`;

const EditButton = styled(RoundButton)`
  position: absolute;
  top: 10px;
  left: 15px;
  width: 20px;
  height: 20px;
  padding: 0;
  background-color: transparent;
  border: none;
  color: var(--dark-100);
  z-index: 15;

  &:not([disabled]) {
    &:hover {
      color: var(--dark-100);
    }
  }
`;

const DeleteButton = styled(EditButton)`
  left: auto;
  right: 15px;
`;

export type NoteCardProps = LinkProps &
  Omit<Note, "id"> & {
    onEditClick?: () => void;
    onDeleteClick?: () => void;
  };

export const NoteCard: FC<NoteCardProps> = ({
  title,
  content,
  onEditClick,
  onDeleteClick,
  ...props
}) => {
  return (
    <Container {...props}>
      <EditButton
        Icon={FaRegEdit}
        onClick={onEditClick}
        aria-label="edit button"
      />
      <DeleteButton
        Icon={MdDeleteOutline}
        onClick={onDeleteClick}
        aria-label="delete button"
      />
      <h3>{title}</h3>
      <p>{content}</p>
    </Container>
  );
};
