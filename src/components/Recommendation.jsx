import React from "react";
import styled from "styled-components";
import ExampleImg from "../images/example.png";
import SecondExampleImg from "../images/example2.jpg";
export const Recommendation = () => {
  return (
    <Container>
      <Title>Recommendation</Title>
      <ul>
        <ListItem>
          <ListImg src={ExampleImg} />
          <div>
            <Header>UX Fundamentals & Design Research</Header>
            <LightTxt>Product design starts...</LightTxt>
          </div>
        </ListItem>

        <ListItem>
          <ListImg src={SecondExampleImg} />
          <div>
            <Header>UX Fundamentals & Design Research</Header>
            <LightTxt>Product design starts...</LightTxt>
          </div>
        </ListItem>
        <ListItem>
          <ListImg src={ExampleImg} />
          <div>
            <Header>UX Fundamentals & Design Research</Header>
            <LightTxt>Product design starts...</LightTxt>
          </div>
        </ListItem>

        <ListItem>
          <ListImg src={SecondExampleImg} />
          <div>
            <Header>UX Fundamentals & Design Research</Header>
            <LightTxt>Product design starts...</LightTxt>
          </div>
        </ListItem>
      </ul>
      <MoreLink>Daha Çox</MoreLink>
    </Container>
  );
};

const Container = styled.div`
  background: white;
  padding: 1.25rem;
  border-radius: 0.5rem;
  margin-bottom: 2.5rem;
`;
const ListImg = styled.img`
  border-radius: 1rem;
  width: 6.875rem;
  height: 4.375rem;
`;
const Title = styled.p`
  font-size: 1.25rem;
  line-height: 1.25rem;
  font-weight: 600;
  color: #4f4f4f;
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
  font-weight: 500;
  margin-left: 0.9375rem;
  @media only screen and (max-width:780px){
    font-size: 0.875rem;

  max-width: 9.375rem;
      white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
  }

`;
const LightTxt = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #828282;
  margin-top: -0.9375rem;
  margin-left: 0.9375rem;
  @media only screen and (max-width:780px){
    font-size: 0.75rem;
  min-width: 6.25rem;
      white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
  }
`;
const MoreLink = styled.a`
  display: flex;
  cursor: pointer;
  justify-content: center;
  color: #2f80ed;
`;
