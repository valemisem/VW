import { memo, type FC } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import type { Size } from "../../types/types";
import type { HTMLDivProps } from "../../types/react";

type Variant = "good" | "bad";
const DEFAULT_VARIANT: Variant = "good";

const Container = styled.div<{ $variant: Variant; $size: Size }>`
  display: inline-flex;
  padding: ${({ $size }) => ($size === "large" ? "12px 20px" : "12px 10px")};
  align-items: center;
  gap: ${({ $size }) => ($size === "large" ? "14px" : "5px")};
  border-radius: 6px;
  background: var(--good, #543eff);
  ${({ $variant }) =>
    $variant === "good"
      ? `
				background: var(--good);
				box-shadow: 0px 0px 15px 0px rgba(31, 8, 207, 0.51);
				color: var(--light-100);`
      : `
				background: var(--bad);
				box-shadow: 0px 0px 15px 0px rgba(186, 89, 0, 0.61);
				color: var(--secondary-100);`}
  font-family: var(--primary-typography);
  font-size: ${({ $size }) => ($size === "large" ? "14px" : "12px")};
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  white-space: nowrap;
`;

interface Props extends HTMLDivProps {
  variant?: Variant;
  message?: string;
  size: Size;
}

export const Toast: FC<Props> = memo(
  ({ variant = DEFAULT_VARIANT, message = "", size, ...props }) => {
    return (
      <Container $variant={variant} $size={size} {...props}>
        {variant === "good" ? <FaCheck /> : <RxCross1 />}
        <p>{message}</p>
      </Container>
    );
  }
);
