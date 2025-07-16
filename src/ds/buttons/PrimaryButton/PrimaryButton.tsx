import { memo, type FC } from "react";
import styled, { keyframes } from "styled-components";
import type { HTMLButtonProps } from "../../../types/react";
import type { IconType } from "react-icons";

const translation = keyframes`
	0% {		
		translate: -10px;
	}
	100% {
		translate: 0px;
	}
`;

const colorAnimation = keyframes`
	0% {		
		color: var(--light-100);
	}
	100% {
		color: var(--dark-100);
	}
`;

const backgroundAnimation = keyframes`
	0% {		
		background: var(--dark-100);
	}
	100% {
		background: var(--primary-100);
	}
`;

const Container = styled.button`
  display: flex;
  height: 46px;
  align-items: center;
  border-radius: 41px;
  border: 1px solid var(--primary-gradient-color);
  color: var(--light-100);
  font: var(--body-black);
  white-space: nowrap;

  .primary-button-text-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
  }
  .primary-button-icon-container {
    display: flex;
    width: 46px;
    height: 46px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    border-radius: 43px;
    background: var(--primary-gradient);
    svg {
      width: 18px;
      height: 18px;
      color: var(--dark-100);
    }
  }
  &:not([disabled]) {
    cursor: pointer;
    &:hover {
      animation: ${backgroundAnimation} 200ms ease-in-out 0s 1 forwards;
      .primary-button-text-container {
        animation: ${colorAnimation} 200ms ease-in-out 0s 1 forwards;
        display: flex;
        padding: 0 43px;
        width: 100%;
        span {
          animation: ${translation} 500ms ease-in-out 0s 1 forwards;
        }
      }
      .primary-button-icon-container {
        display: none;
        box-sizing: border-box;
        border: 1px solid var(--primary-gradient-color);
        background: var(--secondary-100);
      }
    }
  }
  &:disabled {
    opacity: 0.5;
  }
`;

interface Props extends HTMLButtonProps {
  Icon: IconType;
  disabled?: boolean;
  label?: string;
}

export const PrimaryButton: FC<Props> = memo(
  ({ Icon, disabled, label, onClick, className }) => {
    return (
      <Container disabled={disabled} onClick={onClick} className={className}>
        <div className="primary-button-text-container">
          <span>{label}</span>
        </div>
        <div className="primary-button-icon-container">
          <Icon />
        </div>
      </Container>
    );
  }
);
