import { useContext, type FC } from "react";
import { ModalContext } from "./Modal.context";
import styled from "styled-components";
import { ModalWindow } from "./ModalWindow";
import type { ModalDef, ModalProps } from "./Modal.types";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
`;

const Veil = styled.div`
  background: var(--dark-50);
  width: 100%;
  height: 100%;
  z-index: 10;
`;

export const Modal: FC = () => {
  const { modal, setOutput } = useContext(ModalContext);
  const { Component, style, modalStyle, veil, closeOnVeilClick, extraProps } =
    modal ?? ({} as ModalDef<ModalProps>);
  const { transitioning, setTransitioning } = useContext(ModalContext);

  const onClose = (output?: unknown) => {
    setOutput(output);
    setTransitioning(true);
  };

  return (
    <Container>
      {modal && (
        <>
          {veil && !transitioning && (
            <Veil
              onClick={
                closeOnVeilClick
                  ? () => {
                      onClose();
                    }
                  : undefined
              }
            />
          )}
          <ModalWindow style={style} modalStyle={modalStyle}>
            <Component onClose={onClose} {...extraProps} />
          </ModalWindow>
        </>
      )}
    </Container>
  );
};
