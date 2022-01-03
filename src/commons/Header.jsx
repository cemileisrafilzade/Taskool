import React from "react";
import styled from "styled-components";
import Logo from "../images/Logo.png";
import ProfileImg from "../images/userImg.png";
import SearchIcon from "../images/icons/search.png";
export const Header = () => {
  return (
    <Container>
      <LogoImg src={Logo} alt="" />
      <Input>
        <Searchicon src={SearchIcon} alt="" />
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
  justify-content: space-around;
  padding: 1.25rem;
  width: 100%;
  background-color: white;
  @media screen and (max-width: 768px) {
    padding: 1.25rem 0.3125rem;
  }
`;
const LogoImg = styled.img`
  width: 10rem;
  @media only screen and (max-width: 768px) {
    width: 6.25rem;
    float: left;
  }
`;
const UserImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100%;
  @media only screen and (max-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;
const SearchInput = styled.input`
  border: none;
  background: none;
  padding: 5px;
  width: 90%;

  @media only screen and (max-width: 768px) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    ::-webkit-input-placeholder {
      color: transparent;
    }
  }
`;

const Input = styled.div`
  display: flex;
  align-items: center;
  background: #edf1f7;
  width: 30%;
  border: none;
  padding: 5px;
  border-radius: 0.3125rem;
  justify-content: space-around;
  @media only screen and (max-width: 768px) {
    background: white;
    border: none;
    position: relative;
    width: 30%;
    padding: 0;
  }
`;
const Searchicon = styled.img`
  width: 15px;
  height: 15px;
  @media only screen and (max-width: 768px) {
    right: 10%;
    position: absolute;
  }
`;
