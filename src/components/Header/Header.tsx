import { useContext, type FC } from "react";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RoundButton } from "../../ds/buttons/RoundButton/RoundButton";
import { useSideBar } from "../SideBar/SideBar.hook";
import { LayoutContext } from "../Layout/Layout.context";
import { useNavigate } from "react-router";
import { ROUTES } from "../../pages/routes";
import { Logo } from "../../ds/Logo/Logo";
import type { IconType } from "react-icons";

const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: var(--secondary-80);
  grid-column: 1 / 4;
  grid-row: 1 / 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: 2;

  & .left-buttons {
    display: flex;
    gap: 10px;
  }
`;

export const Header: FC = () => {
  const { toggleSideBar } = useSideBar();
  const { size } = useContext(LayoutContext);
  const navigate = useNavigate();

  return (
    <Container>
      <div className="left-buttons">
        {size === "small" && (
          <RoundButton
            Icon={GiHamburgerMenu}
            onClick={() => {
              toggleSideBar();
            }}
            aria-label="menu button"
          />
        )}

        <RoundButton
          data-cy="create-note-btn"
          Icon={FaPlus}
          onClick={() => {
            navigate(`${ROUTES.notes}/new`);
          }}
          aria-label="new note button"
        />
      </div>
      <RoundButton
        Icon={Logo as IconType}
        onClick={() => {
          navigate(`${ROUTES.home}`);
        }}
        aria-label="home button"
      />
    </Container>
  );
};
