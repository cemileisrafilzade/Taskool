import {React} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


export const RouteLinks=() => (
    <Container>
  
  <Link className="links" style={{ textDecoration: "none" }} to="/profilePage">
           Current
          </Link>
          <Link className="links" style={{ textDecoration: "none" }} to="/profilePage/completed">
       Completed
          </Link>
   
    </Container>
  )
  const Container=styled.div`
  
  .links{
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
  }}
`;