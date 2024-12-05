import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../images/logo.png";

const PasswordReset2 = () => {
  const navigate = useNavigate();

  return (
    <PasswordReset2Container>
      {/* 헤더 */}
      <Header>
        <Logo src={logo} alt="로고" />
        <Title>WVillage</Title>
      </Header>

      {/* 비밀번호 재설정 완료 메시지 박스 */}
      <MessageBox>
        <Message>비밀번호가 성공적으로 변경되었습니다!</Message>
        <Button onClick={() => navigate("/")}>로그인</Button>
      </MessageBox>
    </PasswordReset2Container>
  );
};

export default PasswordReset2;

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 5px 20px;
  z-index: 1000;
  height: 0px;
  margin-bottom: 100px;
`;

const Logo = styled.img`
  width: 120px;
  height: 100px;
`;

const Title = styled.h1`
  font-size: 70px;
  font-weight: bold;
  color: #1b5e96;
  margin-left: 15px;
`;

const PasswordReset2Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 70px);
  box-sizing: border-box;
  padding-top: 0px;
`;

const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 20px;
  width: 100%;
  max-width: 400px;
  background: white;
  border-radius: 15px;

  @media (max-width: 1200px) {
    width: 90%;
    height: auto;
  }
`;

const Message = styled.p`
  font-size: 18px;
  color: #333;
  text-align: center;
  margin: 0;
`;

const Button = styled.button`
  width: 50%;
  padding: 25px;
  margin: 40px 0 195px 0;
  color: #ffffff;
  background-color: #1b5e96;
  border: none;
  border-radius: 15px;
  font-size: large;
  cursor: pointer;
  &:hover {
    background-color: #164d7f;
  }
`;
