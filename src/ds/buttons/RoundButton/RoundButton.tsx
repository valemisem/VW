import type { FC } from "react";
import styled from "styled-components";
import type { HTMLButtonProps } from "../../../types/react";
import type { IconType } from "react-icons";

const Container = styled.button`
  width: 34px;
  height: 34px;

  border-radius: 50%;
  background-color: var(--dark-30);
  color: var(--light-100);
  border: 2px solid var(--light-100);
  display: flex;
  align-items: center;
  justify-content: center;

  &:not([disabled]) {
    &:hover {
      cursor: pointer;
      fill-opacity: 0.5;
      border-color: var(--primary-60);
      color: var(--primary-100);
    }
  }

  &:disabled {
    color: var(--light-50);
  }
`;

interface Props extends HTMLButtonProps {
  Icon: IconType;
  ariaLabel?: string;
}

export const RoundButton: FC<Props> = ({ Icon, ariaLabel, ...props }) => {
  return (
    <Container {...props}>
      <Icon aria-hidden="true" focusable="false" aria-label={ariaLabel} />
    </Container>
  );
};
