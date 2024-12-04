import React, { useState } from "react";
import styled from "styled-components";
import logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const ICONS = {
  eye: faEye,
  eyeSlash: faEyeSlash,
};

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const handlePasswordReset = () => {
    if (newPassword !== confirmPassword) {
      alert("새 비밀번호가 일치하지 않습니다.");
    } else {
      alert("비밀번호가 성공적으로 변경되었습니다.");
    }
  };

  return (
    <PasswordResetContainer>
      <PasswordResetBox>
        <Header>
          <BackButton onClick={() => navigate(-1)}>
            {" "}
            {/* 뒤로 가기 버튼 */}⬅
          </BackButton>
          <LogoContainer>
            <Logo src={logo} alt="로고" />
            <Title>비밀번호 변경</Title>
          </LogoContainer>
        </Header>
        <InputWrapper>
          <Label>이메일 입력</Label>
          <Input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <Label>이름 입력</Label>
          <Input
            type="text"
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <Label>전화번호 입력</Label>
          <Input
            type="text"
            placeholder="전화번호"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <Label>새로운 비밀번호 입력</Label>
          <PasswordContainer>
            <Input
              type={passwordVisible ? "text" : "password"}
              placeholder="새로운 비밀번호"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <ToggleVisibility
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              <FontAwesomeIcon
                icon={passwordVisible ? ICONS.eyeSlash : ICONS.eye}
              />
            </ToggleVisibility>
          </PasswordContainer>
        </InputWrapper>
        <InputWrapper>
          <Label>새로운 비밀번호 확인</Label>
          <PasswordContainer>
            <Input
              type={passwordVisible ? "text" : "password"}
              placeholder="새로운 비밀번호 확인"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <ToggleVisibility
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              <FontAwesomeIcon
                icon={passwordVisible ? ICONS.eyeSlash : ICONS.eye}
              />
            </ToggleVisibility>
          </PasswordContainer>
        </InputWrapper>
        <Button onClick={handlePasswordReset}>확인</Button>
      </PasswordResetBox>
    </PasswordResetContainer>
  );
};

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #1b5e96;
  margin-right: 10px;

  &:hover {
    color: #164d7f;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const PasswordResetContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
`;

const PasswordResetBox = styled.div`
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

const InputWrapper = styled.div`
  width: 100%;
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

const PasswordContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

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

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  color: white;
  background-color: #1b5e96;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #164d7f;
  }
`;

export default PasswordReset;
