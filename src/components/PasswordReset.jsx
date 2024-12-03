import React, { useState } from "react";
import styled from "styled-components";

const PasswordReset = () => {
  const [formData, setFormData] = useState({
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      alert("새로운 비밀번호가 일치하지 않습니다.");
      return;
    }
    alert("비밀번호가 성공적으로 변경되었습니다!");
  };

  return (
    <ResetContainer>
      <ResetForm onSubmit={handleSubmit}>
        <Logo>로고</Logo>
        <Title>비밀번호 변경</Title>

        <InputWrapper>
          <Label>이메일 입력</Label>
          <Input
            type="email"
            name="email"
            placeholder="이메일 입력"
            value={formData.email}
            onChange={handleChange}
          />
        </InputWrapper>

        <InputWrapper>
          <Label>기존 비밀번호 입력</Label>
          <Input
            type="password"
            name="currentPassword"
            placeholder="기존 비밀번호 입력"
            value={formData.currentPassword}
            onChange={handleChange}
          />
        </InputWrapper>

        <InputWrapper>
          <Label>새로운 비밀번호 입력</Label>
          <Input
            type="password"
            name="newPassword"
            placeholder="새로운 비밀번호 입력"
            value={formData.newPassword}
            onChange={handleChange}
          />
        </InputWrapper>

        <InputWrapper>
          <Label>새로운 비밀번호 확인</Label>
          <Input
            type="password"
            name="confirmPassword"
            placeholder="새로운 비밀번호 확인"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </InputWrapper>

        <SubmitButton type="submit">비밀번호 변경</SubmitButton>
      </ResetForm>
    </ResetContainer>
  );
};

const ResetContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const ResetForm = styled.form`
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

export default PasswordReset;
