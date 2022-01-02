import React from "react";
import styled from "styled-components";
import Logo from "../images/Logo.png";
import ProfileImg from "../images/userImg.png";
export const Header = () => {
  return (
    <Container>
      <LogoImg src={Logo} alt="" />
<Input> 
  <i class="fas fa-search"></i>
      <SearchInput placeholder="Axtarış..." />
      </Input>
      <UserImg src={ProfileImg} alt="" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 6.25rem;
  width: 100%;
  background-color: white;
  @media only screen and (max-width:768px){
  }
`;
const LogoImg = styled.img`
  // widht:160px;
  // height:40px;
`;
const UserImg = styled.img`
  background: yellow;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100%;
`;
const SearchInput = styled.input`
border:none;
background: none;
padding:0.3125rem;
@media only screen and (max-width:768px){
  ::-webkit-input-placeholder {
        
         color: transparent;
  }}`

const Input = styled.div`
display: flex;
align-items: center;
background: #edf1f7;
  width: 28%;
  border: none;
  border-radius: 0.3125rem;
  justify-content: space-around;
  @media only screen and (max-width:768px){
    background: white;
  border: none;
  padding: 0.625rem 1.25rem;
  ::-webkit-input-placeholder {
         color: transparent;
  }}`;
