import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../images/logo.png";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    nickname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = () => {
    if (
      !formData.name ||
      !formData.nickname ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("모든 필드를 입력해주세요.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    alert("회원가입이 완료되었습니다!");
    navigate("/");
  };

  return (
    <SignupContainer>
      <Header>
        <Logo src={logo} alt="로고" />
        <Title>WVillage</Title>
      </Header>

      <SignupBox>
        <InputContainer>
          <InputWrapper>
            <Input
              type="text"
              name="name"
              placeholder="이름"
              value={formData.name}
              onChange={handleChange}
            />
          </InputWrapper>
          <Divider />
          <InputWrapper>
            <Input
              type="text"
              name="nickname"
              placeholder="닉네임"
              value={formData.nickname}
              onChange={handleChange}
            />
          </InputWrapper>
          <Divider />
          <InputWrapper>
            <Input
              type="email"
              name="email"
              placeholder="이메일"
              value={formData.email}
              onChange={handleChange}
            />
          </InputWrapper>
          <Divider />
          <InputWrapper>
            <Input
              type="password"
              name="password"
              placeholder="비밀번호"
              value={formData.password}
              onChange={handleChange}
            />
          </InputWrapper>
          <Divider />
          <InputWrapper>
            <Input
              type="password"
              name="confirmPassword"
              placeholder="비밀번호 확인"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </InputWrapper>
        </InputContainer>
        <Button onClick={handleSignup}>회원가입</Button>
        <BackToLoginButton onClick={() => navigate("/")}>
          로그인
        </BackToLoginButton>
      </SignupBox>
    </SignupContainer>
  );
};

export default Signup;

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

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 70px);
  box-sizing: border-box;
  padding-top: 160px;
`;

const SignupBox = styled.div`
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

const BackToLoginButton = styled.button`
  width: 130%;
  padding: 20px;
  margin: 20px 0 20px 0;
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
