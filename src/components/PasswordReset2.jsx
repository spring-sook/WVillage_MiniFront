import React from "react";
import styled from "styled-components";
import logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";

const PasswordReset2 = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <Logo src={logo} alt="로고" onClick={() => navigate("/intro")} />
        <Message>비밀번호 변경이 완료되었습니다</Message>
        <Button onClick={() => navigate("/")}>로그인</Button>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
  text-align: center;
`;

const Logo = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 20px; /* 로고와 텍스트 사이 간격 */
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const Message = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Button = styled.button`
  width: 200px;
  padding: 25px;
  background-color: #1b5e96;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;

  &:hover {
    background-color: #164d7f;
  }
`;

export default PasswordReset2;
