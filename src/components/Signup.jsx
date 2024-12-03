import React, { useState } from "react";
import styled from "styled-components";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    year: "",
    month: "",
    day: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    alert("회원가입 성공!");
  };

  return (
    <SignupContainer>
      <SignupForm onSubmit={handleSubmit}>
        <Logo>로고</Logo>
        <Title>계정 만들기</Title>

        <InputWrapper>
          <Label>이메일</Label>
          <Input
            type="email"
            name="email"
            placeholder="이메일 입력"
            value={formData.email}
            onChange={handleChange}
          />
        </InputWrapper>

        <InputWrapper>
          <Label>비밀번호</Label>
          <Input
            type="password"
            name="password"
            placeholder="비밀번호 입력"
            value={formData.password}
            onChange={handleChange}
          />
        </InputWrapper>

        <InputWrapper>
          <Label>비밀번호 확인</Label>
          <Input
            type="password"
            name="confirmPassword"
            placeholder="비밀번호 확인"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </InputWrapper>

        <InputWrapper>
          <Label>생년월일</Label>
          <DateWrapper>
            <Input
              type="number"
              name="year"
              placeholder="년"
              value={formData.year}
              onChange={handleChange}
            />
            <Input
              type="number"
              name="month"
              placeholder="월"
              value={formData.month}
              onChange={handleChange}
            />
            <Input
              type="number"
              name="day"
              placeholder="일"
              value={formData.day}
              onChange={handleChange}
            />
          </DateWrapper>
        </InputWrapper>

        <InputWrapper>
          <Label>전화번호</Label>
          <Input
            type="tel"
            name="phone"
            placeholder="전화번호 입력"
            value={formData.phone}
            onChange={handleChange}
          />
        </InputWrapper>

        <SubmitButton type="submit">회원가입</SubmitButton>
      </SignupForm>
    </SignupContainer>
  );
};

const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const SignupForm = styled.form`
  width: 500px;
  padding: 20px;
  background-color: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  background-color: #95bfe5;
  padding: 10px;
  color: white;
  border-radius: 5px;
`;

const InputWrapper = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
`;

const DateWrapper = styled.div`
  display: flex;
  gap: 10px;

  input {
    width: calc(33.33% - 10px);
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
    text-align: center;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

export default Signup;
