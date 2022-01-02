import React from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { CurrentTasks, CompletedTasks } from "../routes";

export const Tasks = () => {
  return (
    <Container>
      <ComponentTitle>Tasks</ComponentTitle>

      <Router>
        <NavBar>
       <Link style={{textDecoration:"none" }} to="/">  
          <NavLinks > Current</NavLinks></Link>
         <Link style={{textDecoration:"none"}} to="completed"><NavLinks>Completed
          </NavLinks></Link> 
        </NavBar>

        <Routes>
          <Route exact path="/" element={<CurrentTasks />}></Route>
          <Route exact path="/completed" element={<CompletedTasks />}></Route>
        </Routes>
      </Router>
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
const NavBar = styled.div`
  display: flex;
  padding: 0.9375rem;
  margin:0.3125rem;

`;

const NavLinks = styled.a`
  color: #bdbdbd;
  margin-bottom: 0.625rem;
  text-decoration:none;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
  padding: 0.625rem 3.4375rem;
  border-bottom: 0.0625rem solid #bdbdbd;
  cursor: pointer;
  &:hover {
    color: #78de78;
    border-bottom: 0.125rem solid #78de78;
  }
  &:active {
    color: #78de78;
  }
  @media only screen and (max-width:768px){
  padding: 0.625rem 0.625rem;

}
`;
