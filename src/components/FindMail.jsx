import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";

const FindMail = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [result, setResult] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (name && phoneNumber) {
        setResult(`아이디는 example@mail.com 입니다.`);
      } else {
        setResult("이름과 전화번호를 입력해주세요.");
      }
    }
  };

  return (
    <FindMailContainer>
      <FindMailBox>
        <Header onClick={() => navigate("/intro")}>
          <Logo src={logo} alt="로고" />
          <Title>아이디찾기</Title>
        </Header>
        <Description>가입되어있는 이름 / 전화번호 입력</Description>
        <InputWrapper>
          <Label>이름</Label>
          <Input
            type="text"
            placeholder=""
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyPress={handleKeyPress} // Enter 키 이벤트
          />
        </InputWrapper>
        <InputWrapper>
          <Label>전화번호</Label>
          <Input
            type="text"
            placeholder=""
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            onKeyPress={handleKeyPress} // Enter 키 이벤트
          />
        </InputWrapper>
        <ResultText>가입된 아이디는</ResultText>
        <ResultBox>{result}</ResultBox>
        <BackLink onClick={() => navigate("/")}>로그인</BackLink>
        <BackLink onClick={() => navigate("/passwordreset")}>
          비밀번호 변경
        </BackLink>
      </FindMailBox>
    </FindMailContainer>
  );
};

const FindMailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
`;

const FindMailBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 40px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #1b5e96;
`;

const Description = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 30px;
`;

const InputWrapper = styled.div`
  width: 80%;
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;

  &:hover {
    border-color: #007bff;
    box-shadow: 0 0 3px rgba(183, 0, 255, 0.4);
  }
`;

const ResultText = styled.p`
  margin-top: 20px;
  font-size: 14px;
  color: #555;
`;

const ResultBox = styled.div`
  margin: 10px 0;
  padding: 20px;
  width: 90%;
  text-align: center;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  color: #333;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  color: white;
  background-color: #a2d2ff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #164d7f;
  }
`;

const BackLink = styled.button`
  margin-top: 20px;
  font-size: 14px;
  color: #1b5e96;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export default FindMail;
