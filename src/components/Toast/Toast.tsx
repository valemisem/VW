import { useContext, type FC } from "react";
import { Toast as ToastDS } from "../../ds/Toast/Toast";
import styled, { keyframes } from "styled-components";
import { ToastContext } from "./Toast.context";
import { LayoutContext } from "../Layout/Layout.context";

const slideUp = keyframes`
	0% {
		bottom: 0px;
		opacity: 0;
	}
	25% {
		bottom: 20px;
		opacity: 1;
	}
	75% {
		bottom: 20px;
		opacity: 1;
	}
	100% {
		bottom: 0px;
		opacity: 0;
	}
`;

const ToastContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 10;
  animation: ${slideUp} 3s ease-in-out 0s 1 forwards;
`;

export const Toast: FC = () => {
  const { variant, message } = useContext(ToastContext);
  const { size } = useContext(LayoutContext);

  return (
    <>
      {message && (
        <ToastContainer role={variant === "bad" ? "alert" : "status"}>
          <ToastDS size={size} variant={variant} message={message} />
        </ToastContainer>
      )}
    </>
  );
};
