import { useContext, type FC } from "react";
import { Outlet } from "react-router";
import styled from "styled-components";
import { LayoutContext } from "../Layout/Layout.context";

const Container = styled.div<{ $isSmall: boolean }>`
  width: 100%;
  height: 100%;
  grid-column: ${({ $isSmall }) => ($isSmall ? "1 / 3" : "2 / 3")};
  grid-row: 2 / 3;
  z-index: 3;
  padding: 30px 20px 0px 20px;
  overflow: hidden;
  position: relative;
`;

export const Content: FC = () => {
  const { size } = useContext(LayoutContext);

  return (
    <Container $isSmall={size === "small"}>
      <Outlet />
    </Container>
  );
};
