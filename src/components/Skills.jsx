import React from "react";
import styled from "styled-components";
export const Skills = () => {
  return (
    <Container>
      <ComponentTitle>
        Skills
        <Link>Edit</Link>
      </ComponentTitle>
      <ul>
        <ListItem>Figma(Software)</ListItem>
        <ListItem>User experience(UX)</ListItem>
        <ListItem>User interace Design</ListItem>
      </ul>
    </Container>
  );
};
const Container = styled.div`
  margin-top: 2.8125rem;
  background: white;
  border-radius: 0.5rem;
  padding: 1.5625rem;
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
  padding: 0.9375rem 0.3125rem;
`;

const Link = styled.a`
  padding-left: 0.625rem;
  font-size: 0.875rem;
  cursor: pointer;
  color: #2f80ed;
`;
