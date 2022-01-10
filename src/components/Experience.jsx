import ExampleImg from "../images/example.png";
import SecondExampleImg from "../images/example2.jpg";
import React from "react";
import styled from "styled-components";
export const Experience = () => {
  return (
    <Container>
      <ComponentTitle>
        Experience <i className="fas fa-plus"></i>
      </ComponentTitle>
      <ul>
        <ListItem>
          <DisplayFlex>
            <Img src={SecondExampleImg} />
            <div>
              <Header>Product Designer(UX/UI)</Header>
              <LightTxt>Taskilled, Freelance</LightTxt>
              <LighterTxt>Oct 2021 - present</LighterTxt>
            </div>
          </DisplayFlex>
          <Link>Edit</Link>
        </ListItem>

        <ListItem>
          <DisplayFlex>
            <Img src={ExampleImg} />
            <div>
              <Header>Product Designer (UX/UI)</Header>
              <LightTxt>PASHA Bank, Full-time</LightTxt>
              <LighterTxt>Oct 2021 - present</LighterTxt>
            </div>
          </DisplayFlex>
          <Link>Edit</Link>
        </ListItem>
      </ul>
      <Link>Show More Experience</Link>

      <Hr />
      <ComponentTitle>
        Education <i className="fas fa-plus"></i>
      </ComponentTitle>
      <ul>
        <ListItem>
          <DisplayFlex>
            <Img src={SecondExampleImg} />
            <div>
              <Header>Baku Engineering University</Header>
              <LightTxt>Computer Engineering</LightTxt>
              <LighterTxt>2019 - present</LighterTxt>
            </div>
          </DisplayFlex>
          <Link>Edit</Link>
        </ListItem>
      </ul>
    </Container>
  );
};
const Container = styled.div`
  margin-top: 2.8125rem;
  background: white;
  border-radius: 0.5rem;
  padding: 1.5625rem;
  @media only screen and (max-width: 768px) {
    margin-top: 1.8rem;
  }
`;
const ComponentTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  padding: 0rem 0.5rem;
  color: #4f4f4f;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;
const ListItem = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin-left: -2.5rem;
  cursor: pointer;
  border-bottom: 0.0313rem solid #c2ccde;
  margin-bottom: 0.3125rem;
`;
const Header = styled.p`
  font-size: 1rem;
  line-height: 1.25rem;
  font-weight: 500;
  margin-left: 0.9375rem;
  @media only screen and (max-width: 768px) {
    font-size: 0.8125rem;
    width: 100%;
  }
`;
const LightTxt = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-top: -0.3125rem;
  margin-left: 0.9375rem;
  @media only screen and (max-width: 768px) {
    font-size: 0.75rem;
  }
`;
const LighterTxt = styled.p`
  font-size: 0.8125rem;
  line-height: 1.25rem;
  margin-top: -0.625rem;
  margin-left: 0.9375rem;
  color: #828282;
  @media only screen and (max-width: 768px) {
    font-size: 11px;
  }
`;
const Link = styled.a`
  padding-left: 0.625rem;
  font-size: 0.875rem;
  cursor: pointer;
  color: #2f80ed;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
const DisplayFlex = styled.div`
  display: flex;
  align-items: center;
`;
const Img = styled.img`
  width: 4.5rem;
  height: 3.5rem;
  border-radius: 0.3125rem;
  @media only screen and (max-width: 768px) {
    width: 3.5rem;
    height: 2.8rem;
  }
`;
const Hr = styled.p`
  padding: 0.3125rem;
  border-bottom: 0.0313rem solid #c2ccde;
  margin-left: -1.5625rem;
  margin-right: -1.5625rem;
`;
