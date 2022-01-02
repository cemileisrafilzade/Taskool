import React from "react";
import styled from "styled-components";
import ProfileImg from "../images/userImg.png";

export const EditProfile = () => {
  return (
    <Container>
      <UserInfos>
        <UserImg src={ProfileImg} />

        <EditBtn>
          <i class="fas fa-pen"></i> Edit Profile
        </EditBtn>
        <UserName>Mirzə Mammadov</UserName>
        <PositionName>Product Designer</PositionName>
      </UserInfos>
    </Container>
  );
};
const Container = styled.div`
  background: url(https://t4.ftcdn.net/jpg/02/70/43/75/360_F_270437565_k8GzsWCLq7YRMoGzukNs80zudPx0Baql.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 0.5rem;
  padding: 9rem 0 0 0;
`;
const UserImg = styled.img`
  border: 0.0625rem solid white;
  border-radius: 100%;
  width: 6rem;
  height: 6rem;
  margin: 1.25rem;
  margin-top: -5rem;
`;
const UserInfos = styled.div`
  background: white;
  padding: 1.875rem;
  position: relative;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  padding-bottom: 8.125rem;
`;
const EditBtn = styled.button`
  background: #f3f3f3;
  width: 6.875rem;
  padding: 0.625rem;
  border: none;
  border-radius: 0.375rem;
  float: right;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;
  color: #4f4f4f;
`;
const UserName = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
  padding: 0rem 0.5rem;
  color: #4f4f4f;
`;
const PositionName = styled.p`
  font-size: 1rem;
  margin-top: -0.625rem;
  padding: 0rem 0.5rem;
  color: #828282;
`;
