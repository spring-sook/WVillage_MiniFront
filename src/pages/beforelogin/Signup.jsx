import React, { useState } from "react";
import styled from "styled-components";
import { HeaderCom, FooterCom } from "../../components/GlobalComponent";
import { useNavigate } from "react-router-dom";
import { Container } from "../../styles/GlobalStyled";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    nickname: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthYear: "",
    birthMonth: "",
    birthDay: "",
    phone: "",
    address: "",
    addressDetail: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "이름을 입력하세요.";
    if (!formData.nickname.trim()) newErrors.nickname = "닉네임을 입력하세요.";
    if (!formData.email.trim()) newErrors.email = "이메일을 입력하세요.";
    if (formData.password.length < 8)
      newErrors.password = "비밀번호는 최소 8자 이상이어야 합니다.";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "비밀번호가 일치하지 않습니다.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = () => {
    if (!validateForm()) return;
    alert("가입 완료!");
    navigate("/");
  };

  return (
    <Container>
      <SignupContainer>
        <HeaderCom />
        <SignupBox>
          <Title>회원가입</Title>
          <InputWrapper>
            <InputLabel>이름</InputLabel>
            <Input
              type="text"
              name="name"
              placeholder="이름을 입력하세요"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
          </InputWrapper>
          <InputWrapper>
            <InputLabel>닉네임</InputLabel>
            <Input
              type="text"
              name="nickname"
              placeholder="닉네임을 입력하세요"
              value={formData.nickname}
              onChange={handleChange}
            />
            {errors.nickname && <ErrorMessage>{errors.nickname}</ErrorMessage>}
          </InputWrapper>
          <InputWrapper>
            <InputLabel>이메일</InputLabel>
            <Input
              type="text"
              name="email"
              placeholder="이메일을 입력하세요"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
          </InputWrapper>
          <InputWrapper>
            <InputLabel>비밀번호</InputLabel>
            <Input
              type="password"
              name="password"
              placeholder="비밀번호를 입력하세요"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
          </InputWrapper>
          <InputWrapper>
            <InputLabel>비밀번호 확인</InputLabel>
            <Input
              type="password"
              name="confirmPassword"
              placeholder="비밀번호를 다시 입력하세요"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <ErrorMessage>{errors.confirmPassword}</ErrorMessage>
            )}
          </InputWrapper>
          <Button onClick={handleSignup}>가입하기</Button>
        </SignupBox>
        <FooterCom />
      </SignupContainer>
    </Container>
  );
};

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const SignupBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const InputWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  margin-bottom: 15px;
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

export default Signup;
