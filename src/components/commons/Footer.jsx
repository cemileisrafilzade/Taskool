import React from "react";
import styled from "styled-components";
import Logo from "../../images/Logo.png";
import Instagram from "../../images/icons/instagram.png";
import Facebook from "../../images/icons/facebook.png";
import Youtube from "../../images/icons/youtube.png";
import Twitter from "../../images/icons/twitter.png";

export const Footer = () => {
  return (
    <Container>
      <DisplayFlex>
        <FooterLists>
          <LogoImg src={Logo} alt="" />
          <DisplayFlex>
            <Icons src={Instagram} alt="" />
            <Icons src={Youtube} />
            <Icons src={Facebook} />
            <Icons src={Twitter} />
          </DisplayFlex>
        </FooterLists>

        <FooterLists>
          <Header>Menu</Header>
          <p>Kurslar</p>
          <p>Endirimler</p>
          <p>Haqqımızda</p>
        </FooterLists>

        <FooterLists>
          <Header>Kömək</Header>
          <p>Tez-tez soruşulan suallar</p>
          <p>Necə işləyir</p>
          <p>Tez-tez soruşulan suallar</p>
        </FooterLists>

        <FooterLists>
          <Header>Əlaqə</Header>
          <p>
            {" "}
            <span>
              <i class="fas fa-map-marker-alt"></i>
            </span>{" "}
            M. K. Ataturk avenue 89, Baku, Azerbaijan
          </p>
          <p>
            {" "}
            <span>
              <i class="far fa-envelope"></i>
            </span>{" "}
            gyunelmammedova@gmail.com
          </p>
          <p>
            {" "}
            <span>
              <i class="fas fa-phone-alt"></i>
            </span>{" "}
            *2108
          </p>
        </FooterLists>
      </DisplayFlex>
      <Hr />
      <DisplayFlex>
        <p>
          <i class="far fa-copyright"></i> Taskool 2021. Bütün hüquqlar qorunur.
        </p>
        <div>
          <a>Qaydalar və şərtlər</a>
          <a> Məxfilik siyasəti</a>
        </div>
      </DisplayFlex>
    </Container>
  );
};
const Container = styled.div`
  background: #f5f5f7;
  padding: 10px 100px;
  padding-bottom: 10px;
  width: 100%;
  @media only screen and (max-width: 768px) {
    padding: 10px;
  }
`;
const DisplayFlex = styled.div`
  display: flex;
  justify-content: space-between;
  color: #4f4f4f;
  align-items: center;
  @media only screen and (max-width: 768px) {
    display: block;
    text-align: center;
    font-size: 13px;
    color: #4f4f4f;
    text-decoration: none;
  }
`;
const FooterLists = styled.div`
  font-size: 1rem;
  color: #4f4f4f;
  cursor: pointer;
  opacity: 0.8;
  @media only screen and (max-width: 885px) {
    display: block;
    margin: 0 auto;
    font-size: 13px;
    width: 100%;
  }
`;
const Header = styled.p`
  font-weight: 500;
`;

const LogoImg = styled.img`
  width: 150px;
  height: 35px;
  margin: 1.25rem;
  /* @media only screen and (max-width:885px){

} */
`;
const Icons = styled.img`
  padding: 3px;
  width: 20px;
  height: 20px;
  margin: 0 5px;
`;
const Hr = styled.p`
  border-bottom: 0.5px solid gray;
  opacity: 0.5;
  width: 100%;
`;
