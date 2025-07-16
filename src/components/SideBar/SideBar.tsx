import { useContext, type FC } from "react";
import styled from "styled-components";
import { SideBarContext } from "./SideBar.context";
import { NavButton } from "../../ds/buttons/NavButton/NavButton";
import { FaHome } from "react-icons/fa";
import { TbNotes } from "react-icons/tb";
import { ROUTES } from "../../pages/routes";
import { LayoutContext } from "../Layout/Layout.context";
import { useSideBar } from "./SideBar.hook";

const Container = styled.nav`
  position: relative;
  width: 100%;
  height: 100%;
  grid-column: 1 / 2;
  grid-row: 2 / 3;
`;

const Content = styled.nav<{
  $opened: boolean;
  $isSmall: boolean;
}>`
  position: absolute;
  transition: left 0.3s ease-in-out;
  left: ${({ $opened, $isSmall }) => (!$opened && $isSmall ? "-100%" : "0")};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: var(--secondary-80);
  padding: 10px 5px;
  border-top: 1px solid var(--dark-100);
  z-index: 4;
`;

export const SideBar: FC = () => {
  const { size } = useContext(LayoutContext);
  const { opened } = useContext(SideBarContext);
  const { closeSideBar } = useSideBar();

  const onNavClick = () => {
    closeSideBar();
  };

  return (
    <Container>
      <Content $opened={opened} $isSmall={size === "small"}>
        <NavButton
          to={`${ROUTES.home}`}
          Icon={FaHome}
          label="Home"
          onClick={onNavClick}
        />
        <NavButton
          to={`${ROUTES.notes}`}
          Icon={TbNotes}
          label="Notes"
          onClick={onNavClick}
        />
      </Content>
    </Container>
  );
};
