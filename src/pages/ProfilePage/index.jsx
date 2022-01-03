import React from "react";
import { Layout } from "../../commons/Layout";
import styled from "styled-components";
import {
  BuildingPortfolio,
  EditProfile,
  Experience,
  Recommendation,
  Skills,
  Tasks,
} from "../../components";

export const ProfilePage = () => {
  return (
    <Layout>
      <Container>
        <MainContent>
          <EditProfile />
          <Tasks />
          <Skills />
          <Experience />
        </MainContent>

        <RightContent>
          <BuildingPortfolio />
          <Recommendation />
        </RightContent>
      </Container>
    </Layout>
  );
};
const Container = styled.div`
  padding: 3.125rem 6.25rem;
  background: rgb(248 248 248 / 4);
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media only screen and (max-width: 768px) {
    display: block;
    padding: 25px 0;
  }
`;
const MainContent = styled.div`
  width: 67%;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
const RightContent = styled.div`
  width: 31%;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
