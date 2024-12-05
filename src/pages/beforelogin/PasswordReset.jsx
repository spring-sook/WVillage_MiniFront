import React, { useState } from "react";
import styled from "styled-components";
import { HeaderCom, FooterCom } from "../../components/GlobalComponent";
import { useNavigate } from "react-router-dom";
import { Container } from "../../styles/GlobalStyled";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const handlePasswordReset = () => {
    if (!email || !name || !phoneNumber) {
      alert("공백을 입력해주세요.");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("새 비밀번호가 일치하지 않습니다.");
      return;
    }

    navigate("/passwordreset2");
  };

  return (
    <Container>
      <PageContainer>
        <HeaderWrapper>
          <HeaderCom />
        </HeaderWrapper>

        <Content>
          <PasswordResetContainer>
            <Title>비밀번호 변경</Title>
            <InputWrapper>
              <Label>이메일</Label>
              <Input
                type="email"
                placeholder="이메일 입력"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputWrapper>
            <InputWrapper>
              <Label>이름</Label>
              <Input
                type="text"
                placeholder="이름 입력"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </InputWrapper>
            <InputWrapper>
              <Label>전화번호</Label>
              <Input
                type="text"
                placeholder="전화번호 입력"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </InputWrapper>
            <InputWrapper>
              <Label>새로운 비밀번호</Label>
              <Input
                type={passwordVisible ? "text" : "password"}
                placeholder="새 비밀번호 입력"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </InputWrapper>
            <InputWrapper>
              <Label>새로운 비밀번호 확인</Label>
              <Input
                type={passwordVisible ? "text" : "password"}
                placeholder="비밀번호 확인"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </InputWrapper>
            <Button onClick={handlePasswordReset}>확인</Button>
          </PasswordResetContainer>
        </Content>

        <FooterWrapper>
          <FooterCom />
        </FooterWrapper>
      </PageContainer>
    </Container>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const HeaderWrapper = styled.header`
  flex-shrink: 0;
  background-color: #ffffff;
`;

const FooterWrapper = styled.footer`
  flex-shrink: 0;
  background-color: #ffffff;
`;

const Content = styled.main`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
`;

const PasswordResetContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const InputWrapper = styled.div`
  margin-bottom: 15px;
  width: 100%;
  max-width: 400px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default PasswordReset;
