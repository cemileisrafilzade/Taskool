import React from "react";
import styled from "styled-components";
export const CompletedTasks = () => {
  return (
    <div>
      <TaskComponents>
        <DisplayFlex>
          <Header>Sürətli oxuma və yazma</Header>
          <i class="fas fa-thumbtack"></i>
        </DisplayFlex>
        <LightTxt>Reading, writing</LightTxt>
      </TaskComponents>

      <TaskComponents>
        <DisplayFlex>
          <Header>Lego in our life</Header>
          <i class="fas fa-thumbtack"></i>
        </DisplayFlex>
        <LightTxt>Virtual lab</LightTxt>
      </TaskComponents>
      <TaskComponents>
        <DisplayFlex>
          <Header>UX Fundamentals & Design Research</Header>
          <i class="fas fa-thumbtack"></i>
        </DisplayFlex>
        <LightTxt>Quiz</LightTxt>
      </TaskComponents>

      <Link>Hamısına bax</Link>
    </div>
  );
};
const TaskComponents = styled.div`
  border-radius: 0.5rem;
  margin: 0.9375rem;
  box-shadow: 0px 0px 16px 0px rgba(212, 212, 212, 0.52);
  -webkit-box-shadow: 0px 0px 16px 0px rgba(212, 212, 212, 0.52);
  -moz-box-shadow: 0px 0px 16px 0px rgba(212, 212, 212, 0.52);
  padding: 0.9375rem;
  margin-bottom: 1.25rem;
  cursor: pointer;
`;
const Items = styled.div`
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
`;
const LightTxt = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-left: 0.9375rem;
  color: #828282;
`;
const RedTxt = styled.p`
  font-size: 0.8125rem;
  line-height: 1.25rem;
  margin-left: 0.9375rem;
  color: #eb5757;
`;
const Link = styled.a`
  padding-left: 0.625rem;
  font-size: 1rem;
  cursor: pointer;
  color: #2f80ed;
  display: flex;
  justify-content: center;
`;
const DisplayFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
