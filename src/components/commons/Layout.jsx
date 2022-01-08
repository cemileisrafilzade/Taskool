import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import styled from "styled-components";
export const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  @media only screen and (max-width: 768px) {
  }
`;
const MainContainer = styled.div`
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
