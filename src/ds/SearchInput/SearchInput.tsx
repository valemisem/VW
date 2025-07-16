import { GoSearch } from "react-icons/go";
import styled from "styled-components";
import type { FC, Ref } from "react";
import type { HTMLInputProps } from "../../types/react";

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 14px;
  align-items: center;
  gap: 15px;
  background-color: var(--light-8);
  border-radius: 4px;
  color: var(--light-100);
`;

const StyledInput = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  box-shadow: none;
  color: var(--light-100);
  font: var(--content-light);
  letter-spacing: 0.48px;
  outline: none;
  &:focus::placeholder {
    color: transparent;
  }
  &::placeholder {
    color: var(--light-100);
    font-weight: 300;
  }
  &:hover {
    cursor: text;
    font-weight: 300;
    color: var(--light-50);
  }
`;

interface Props extends HTMLInputProps {
  onClear?: () => void;
  ref?: Ref<HTMLInputElement>;
}

export const SearchInput: FC<Props> = ({ className, ref, ...props }) => {
  return (
    <Container className={className}>
      <GoSearch role="img" />
      <StyledInput ref={ref} type="text" {...props} />
    </Container>
  );
};
