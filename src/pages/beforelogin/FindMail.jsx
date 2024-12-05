import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";

const FindMail = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleFindMail = () => {
    if (name && phoneNumber) {
      alert("아이디는 example@mail.com 입니다.");
    } else {
      alert("이름과 전화번호를 입력해주세요.");
    }
  };

  return (
    <FindMailContainer>
      {/* 헤더 */}
      <Header>
        <Logo src={logo} alt="로고" />
        <Title>WVillage</Title>
      </Header>

      {/* 아이디 찾기 박스 */}
      <FindMailBox>
        <InputContainer>
          <InputWrapper>
            <Input
              type="text"
              placeholder="이름"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </InputWrapper>
          <Divider />
          <InputWrapper>
            <Input
              type="text"
              placeholder="전화번호"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </InputWrapper>
        </InputContainer>
        <Button onClick={handleFindMail}>아이디 찾기</Button>
        <LinkContainer>
          <StyledLink onClick={() => navigate("/passwordreset")}>
            비밀번호 재설정
          </StyledLink>
          <StyledLink onClick={() => navigate("/signup")}>회원가입</StyledLink>
        </LinkContainer>
      </FindMailBox>
    </FindMailContainer>
  );
};

export default FindMail;

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 5px 20px;
  z-index: 1000;
  height: 90px;
  margin-bottom: 18px;
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

const FindMailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 70px);
  box-sizing: border-box;
  padding-top: 10px;
`;

const FindMailBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0px;
  padding: 20px;
  width: 100%;
  max-width: 400px;
  background: white;

  @media (max-width: 1200px) {
    width: 90%;
    height: auto;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 130%;
  border: 1px solid #ccc;
  border-radius: 15px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: #007bff;
    box-shadow: 0 0 3px rgba(183, 0, 255, 0.4);
  }
`;

const Divider = styled.div`
  height: 1px;
  background-color: #ccc;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 27.5px;
  transition: background-color 0.3s ease;
  position: relative;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 13px;

  &::placeholder {
    color: #aaa;
  }
`;

const Button = styled.button`
  width: 130%;
  padding: 20px;
  margin: 60px 0 20px 0;
  color: #ffffff;
  background-color: #a2d2ff;
  border: none;
  border-radius: 15px;
  font-size: large;
  cursor: pointer;
  &:hover {
    background-color: #b4d8fa;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 120%;
  margin-top: 50px;
  margin-bottom: 100px;
`;

const StyledLink = styled.p`
  color: black;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
