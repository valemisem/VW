import type { FC } from "react";
import styled from "styled-components";
import type { HTMLSVGProps } from "../../types/react";

export const LOADING_SIZE = 80;

const LoadingSvg: FC<HTMLSVGProps> = ({ ...props }) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
      <linearGradient id="a9">
        <stop offset="0" stopColor="#FF156D" stop-opacity="0"></stop>
        <stop offset="1" stopColor="#FF156D"></stop>
      </linearGradient>
      <circle
        fill="none"
        stroke="url(#a9)"
        strokeWidth="15"
        strokeLinecap="round"
        strokeDasharray="0 44 0 44 0 44 0 44 0 360"
        cx="100"
        cy="100"
        r="70"
        transform-origin="center"
      >
        <animateTransform
          type="rotate"
          attributeName="transform"
          calcMode="discrete"
          dur="2"
          values="360;324;288;252;216;180;144;108;72;36"
          repeatCount="indefinite"
        ></animateTransform>
      </circle>
    </svg>
  );
};

export const Loading = styled(LoadingSvg)`
  width: ${LOADING_SIZE}px;
  height: ${LOADING_SIZE}px;
`;

export const StyledLoading = styled(Loading)`
  position: absolute;
  top: calc(50% - ${LOADING_SIZE / 2}px);
  left: calc(50% - ${LOADING_SIZE / 2}px);
`;
