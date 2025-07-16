import type { FC } from "react";
import { SideBar } from "../SideBar/SideBar";
import { Header } from "../Header/Header";
import { Content } from "../Content/Content";
import styled from "styled-components";
import { Modal } from "../Modal/Modal";
import { Toast } from "../Toast/Toast";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 200px 1fr auto;
  grid-template-rows: auto 1fr;
  overflow: hidden;
  background-color: var(--dark-30);

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-track {
    width: 7px;
    background: var(--light-8);
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb {
    width: 7px;
    background: var(--light-50);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--light-100);
  }
`;

export const Layout: FC = () => {
  return (
    <Container>
      <Header />
      <SideBar />
      <Content />
      <Toast />
      <Modal />
    </Container>
  );
};
