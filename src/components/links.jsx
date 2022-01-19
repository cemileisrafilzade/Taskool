import {React} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


export const RouteLinks=() => (
    <div>
  
  <Link  style={{ textDecoration: "none" }} to="/profilePage">
            <NavLinks> Current</NavLinks>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/profilePage/completed">
            <NavLinks>Completed</NavLinks>
          </Link>
   
    </div>
  )
  const NavLinks = styled.a`
  color: #bdbdbd;
  margin-bottom: 0.625rem;
  text-decoration: none;
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
  @media only screen and (max-width: 768px) {
    padding: 0.625rem 0.625rem;
  }
`;