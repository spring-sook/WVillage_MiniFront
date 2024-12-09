import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../images/logo.png";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleReset = () => {
    if (!email || !phone) {
      alert("이메일과 전화번호를 입력해주세요.");
      return;
    }
    navigate("/passwordreset2");
  };

  return (
    <PasswordResetContainer>
      <Header>
        <Logo src={logo} alt="로고" />
        <Title>WVillage</Title>
      </Header>

      <PasswordResetBox>
        <InputContainer>
          <InputWrapper>
            <Input
              type="email"
              placeholder="이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputWrapper>
          <Divider />
          <InputWrapper>
            <Input
              type="text"
              placeholder="전화번호  '-'를 제외 (11자리)"
              value={phone}
              onChange={(e) => {
                if (!isNaN(e.target.value)) setPhone(e.target.value);
              }}
              maxLength="11"
            />
          </InputWrapper>
        </InputContainer>
        <Button onClick={handleReset}>재설정</Button>
      </PasswordResetBox>
    </PasswordResetContainer>
  );
};

export default PasswordReset;

const ToggleVisibility = styled.div`
  position: absolute;
  right: 15px;
  font-size: 18px;
  color: #aaa;
  cursor: pointer;

  &:hover {
    color: #007bff;
  }
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 5px 20px;
  z-index: 1000;
  height: 70px;
  margin-bottom: 20px;
`;

const Logo = styled.img`
  width: 135px;
  height: 100px;
`;

const Title = styled.h1`
  font-size: 65px;
  font-weight: bold;
  color: #1b5e96;
  margin-left: 15px;
`;

const PasswordResetContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 70px);
  box-sizing: border-box;
  padding-top: 10px;
`;

const PasswordResetBox = styled.div`
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
  margin: 52px 0 20px 0;
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

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px 40px;
  text-align: center;
  max-width: 400px;
  width: 90%;
`;

const ModalMessage = styled.p`
  font-size: 15px;
  color: #000000;
  margin-bottom: 20px;
`;

const CloseButton = styled.button`
  padding: 10px 20px;
  color: white;
  background-color: #a2d2ff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #b4d8fa;
  }
`;
