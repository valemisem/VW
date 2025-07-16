import styled from "styled-components";
import type { Size } from "../../../types/types";
import type { HTMLDivProps } from "../../../types/react";
import { memo, type FC } from "react";
import { TertiaryButton } from "../../buttons/TertiaryButton/TertiaryButton";
import { PrimaryButton } from "../../buttons/PrimaryButton/PrimaryButton";
import { MdDeleteOutline } from "react-icons/md";

const Container = styled.div<{ $size: Size }>`
  display: flex;
  width: ${({ $size }) => ($size === "large" ? "492px;" : "338px;")};
  height: 302px;
  padding: 40px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  background: var(--dark-100);
  overflow: hidden;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;

  h2 {
    font: var(--hero-small);
  }

  p {
    font: var(--title-black);
    text-align: center;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 24px;
`;

interface Props extends HTMLDivProps {
  size: Size;
  title: string;
  description: string;
  confirmLabel: string;
  rejectLabel: string;
  onConfirm?: () => void;
  onReject?: () => void;
  disabled?: boolean;
}

export const ConfirmationModal: FC<Props> = memo(
  ({
    size,
    title,
    description,
    confirmLabel,
    rejectLabel,
    onConfirm,
    onReject,
    disabled = false,
    ...props
  }) => {
    return (
      <Container $size={size} {...props}>
        <TextContainer>
          <h2>{title}</h2>
          <p>{description}</p>
        </TextContainer>
        <ButtonsContainer>
          <PrimaryButton
            Icon={MdDeleteOutline}
            label={confirmLabel}
            onClick={onConfirm}
            disabled={disabled}
          />
          <TertiaryButton
            label={rejectLabel}
            onClick={onReject}
            disabled={disabled}
          />
        </ButtonsContainer>
      </Container>
    );
  }
);
