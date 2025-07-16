import styled from "styled-components";
import { Link, type LinkProps } from "react-router";
import type { FC } from "react";
import type { IconType } from "react-icons";

const Container = styled(Link)`
  width: 100%;
  height: 50px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 25px;

  & > label {
    font: var(--body-black);
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  & > svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    cursor: pointer;
    background-color: var(--secondary-100);
  }
`;

export type Props = LinkProps & {
  Icon: IconType;
  label: string;
};

export const NavButton: FC<Props> = ({ Icon, label, ...props }) => {
  return (
    <Container {...props}>
      <Icon />
      <label>{label}</label>
    </Container>
  );
};
