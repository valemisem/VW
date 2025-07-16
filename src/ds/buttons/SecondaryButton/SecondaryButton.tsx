import { memo, type FC } from "react";
import styled from "styled-components";
import type { Size } from "../../../types/types";
import type { HTMLButtonProps } from "../../../types/react";
import type { IconType } from "react-icons";

const Container = styled.button`
  display: flex;
  height: 46px;
  padding: 2px 24px;
  justify-content: center;
  align-items: center;
  border-radius: 41px;
  border: 1px solid var(--primary-gradient-color);
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7px;
  }
  svg {
    width: 18px;
    height: 18px;
  }

  color: var(--light-100);
  font: var(--body-black);
  white-space: nowrap;

  &:not([disabled]) {
    cursor: pointer;
    &:hover {
      background: var(--primary-100);
      color: var(--secondary-100);
    }
  }
  &:disabled {
    opacity: 0.25;
    background: var(--primary-100);
    color: var(--secondary-100);
  }
`;

interface Props extends HTMLButtonProps {
  ["data-cy"]?: string;
  id?: string;
  Icon?: IconType;
  disabled?: boolean;
  size?: Size;
  label?: string;
}

export const SecondaryButton: FC<Props> = memo(
  ({ id, Icon, disabled, label, onClick, className, ...rest }) => {
    return (
      <Container
        id={id}
        disabled={disabled}
        onClick={onClick}
        className={className}
        {...rest}
      >
        <div>
          {Icon && <Icon />}
          {label && <span>{label}</span>}
        </div>
      </Container>
    );
  }
);
