import { memo, type FC } from "react";
import styled from "styled-components";
import type { Size } from "../../../types/types";
import type { HTMLButtonProps } from "../../../types/react";

const DEFAULT_SIZE: Size = "small";

const Container = styled.button<{ $size: Size }>`
  display: flex;
  height: 46px;
  padding: 2px 24px;
  justify-content: center;
  align-items: center;
  border-radius: 41px;
  background: var(--secondary-100);
  ${({ $size }) => $size === "large" && "min-width: 312px;"}

  color: var(--light-100);
  font: var(--body-black);
  white-space: nowrap;

  &:not([disabled]) {
    cursor: pointer;
    &:hover {
      background: var(--light-15);
    }
  }
  &:disabled {
    color: var(--light-15);
  }
`;

interface Props extends HTMLButtonProps {
  id?: string;
  disabled?: boolean;
  size?: Size;
  label?: string;
}

export const TertiaryButton: FC<Props> = memo(
  ({ id, disabled, size = DEFAULT_SIZE, label, onClick, className }) => {
    return (
      <Container
        id={id}
        disabled={disabled}
        $size={size}
        onClick={onClick}
        className={className}
      >
        {label && <span>{label}</span>}
      </Container>
    );
  }
);
