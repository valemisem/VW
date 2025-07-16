import styled from "styled-components";
import { BsChevronDoubleDown } from "react-icons/bs";
import type { FC, Ref } from "react";
import type { HTMLDivProps } from "../../types/react";

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 4px 6px;
  gap: 9px;

  color: var(--light-50);
  background: var(--light-4);

  &:hover {
    background: var(--light-8);
    color: var(--light-100);
    cursor: pointer;
  }
`;

interface Props extends HTMLDivProps {
  label: string;
  ref: Ref<HTMLDivElement>;
}

export const InfiniteScroll: FC<Props> = ({ label, ref, ...props }) => {
  return (
    <Container ref={ref} {...props}>
      <BsChevronDoubleDown />
      {label}
    </Container>
  );
};
