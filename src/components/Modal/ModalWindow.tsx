import { useContext, useEffect, type FC } from "react";
import { ModalContext } from "./Modal.context";
import styled from "styled-components";
import type { ModalStyle, ModalStyleProp, StyleProp } from "./Modal.types";
import { useModal } from "./Modal.hook";
import { LayoutContext } from "../Layout/Layout.context";
import type { HTMLDivProps } from "../../types/react";

const Container = styled.div<{
  $transitioning: boolean;
  $style?: ModalStyle;
}>`
  position: absolute;
  ${({ $style }) => $style && $style.bottom && `bottom: ${$style.bottom}`};
  ${({ $style }) => $style && $style.top && `top: ${$style.top}`};
  ${({ $style }) => $style && $style.left && `left: ${$style.left}`};
  ${({ $style }) => $style && $style.right && `right: ${$style.right}`};
  ${({ $style }) =>
    $style && $style.transition && `transition: ${$style.transition}`};
  ${({ $style }) =>
    $style && $style.transform && `transform: ${$style.transform}`};
  ${({ $transitioning, $style }) => $transitioning && $style && $style.origPos};
  transition-delay: 0.5ms;
  z-index: 11;
`;

interface Props extends HTMLDivProps {
  style?: StyleProp;
  modalStyle?: ModalStyleProp;
}

export const ModalWindow: FC<Props> = ({ children, className, modalStyle }) => {
  const { size } = useContext(LayoutContext);
  const { transitioning, setTransitioning } = useContext(ModalContext);
  const { removeModal } = useModal();

  const onTransitionEnd = () => {
    if (transitioning) {
      removeModal();
    }
  };

  useEffect(() => {
    setTransitioning(false);
  }, [setTransitioning]);

  return (
    <Container
      role="dialog"
      aria-modal="true"
      onTransitionEnd={onTransitionEnd}
      className={className}
      $style={typeof modalStyle === "function" ? modalStyle(size) : modalStyle}
      $transitioning={transitioning}
    >
      {children}
    </Container>
  );
};
