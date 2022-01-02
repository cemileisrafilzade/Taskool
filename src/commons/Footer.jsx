import React from "react";
import styled from "styled-components";
import Logo from "../images/Logo.png";
export const Footer = () => {
  return (
    <Container>
      <DisplayFlex>
        <FooterLists>
          <LogoImg src={Logo} alt="" />
          <DisplayFlex>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-facebook"></i>
            <i class="fab fa-youtube"></i>
            <i class="fab fa-twitter"></i>
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
          <p>
            Qaydalar və şərtlər <span> Məxfilik siyasəti</span>
          </p>
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
  /* @media only screen and (max-width:768px){
} */
`;
const DisplayFlex = styled.div`
  display: flex;
  justify-content: space-between;
  color:#4f4f4f;
  
  @media only screen and (max-width:768px){
display:block;
text-align: center;


  }
`;
const FooterLists = styled.div`
  font-size: 1rem;
  color: #4f4f4f;
  cursor: pointer;
  opacity: 0.8;
  min-width: 25%;
  @media only screen and (max-width:768px){
display:block;
text-align: center;
align-items: center;
margin:0 auto;
white-space: nowrap;
/* text-overflow: ellipsis; */
overflow: hidden;
  }
`;
const Header = styled.p`
  font-weight: 500;
`;

const LogoImg = styled.img`
  width: 9.9375rem;
  height: 2.5rem;
  margin: 1.25rem;
  @media only screen and (max-width:768px){

}
`;
const Hr = styled.p`
  border-bottom: 0.5px solid gray;
  opacity: 0.5;
  margin-left: -3.125rem;
  margin-right: -3.125rem;
`;
