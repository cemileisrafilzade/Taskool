import React from "react";
import styled from "styled-components";

export const BuildingPortfolio = () => {
  return (
    <Container>
      <Title>For Building Portfolio</Title>
      <ul>
        <ListItem>
          <i class="fas fa-brain"></i>
          <div>
            <Header>Skill building</Header>
            <LightTxt>Build your future</LightTxt>
          </div>
        </ListItem>
        <ListItem>
          <i class="far fa-clipboard"></i>
          <div>
            <Header>Testing and Simulation</Header>
            <LightTxt>Take a quiz and improve your skills </LightTxt>
          </div>
        </ListItem>
        <ListItem>
          <i class="fas fa-chart-pie"></i>
          <div>
            <Header>Business task</Header>
            <LightTxt>Learn creating business plan</LightTxt>
          </div>
        </ListItem>
      </ul>
    </Container>
  );
};

const Container = styled.div`
  background: white;
  padding: 1.25rem;
  border-radius: 0.5rem;
  margin-bottom: 2.5rem;
  @media only screen and (max-width: 768px) {
    margin-top: 1.875rem;
  }
`;
const Title = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
  color: #4f4f4f;
  @media only screen and (max-width: 830px) {
    font-size: 1rem;
  }
`;
const ListItem = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  margin-left: -2.5rem;
  cursor: pointer;
`;
const Header = styled.p`
  font-size: 1rem;
  line-height: 1.25rem;
  margin-left: 0.9375rem;
  @media only screen and (max-width: 830px) {
    font-size: 0.875rem;
  }
`;
const LightTxt = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #828282;
  margin-top: -0.9375rem;
  margin-left: 0.9375rem;
  @media only screen and (max-width: 768px) {
    font-size: 0.75rem;
  }
`;
