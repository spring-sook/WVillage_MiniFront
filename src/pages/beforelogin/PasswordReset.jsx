import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../images/logo.png";
import AuthAPI from "../../api/AuthAPI";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(null);
  const navigate = useNavigate();

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(value)) {
      setEmailMessage("유효한 이메일입니다.");
      setIsEmailValid(true);
    } else {
      setEmailMessage("유효하지 않은 이메일입니다.");
      setIsEmailValid(false);
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };

  const handleReset = async () => {
    if (!email || !phone) {
      alert("이메일과 전화번호를 입력해주세요.");
      return;
    }

    if (!isEmailValid) {
      alert("유효한 이메일 주소를 입력해주세요.");
      return;
    }

    try {
      const response = await AuthAPI.requestPasswordReset(email, phone);

      if (response.isValid) {
        // 성공 시 다음 페이지로 이동
        navigate(`/passwordreset2?email=${encodeURIComponent(email)}`);
      } else {
        // 실패 시 메시지 표시
        alert(
          response.message || "입력한 이메일과 전화번호가 일치하지 않습니다."
        );
      }
    } catch (error) {
      console.error(
        "비밀번호 재설정 요청 실패:",
        error.response || error.message
      );

      alert(
        error.response?.data?.message ||
          "비밀번호 재설정 요청 중 문제가 발생했습니다."
      );
    }
  };

  return (
    <PasswordResetContainer>
      <Header>
        <Logo src={logo} alt="로고" onClick={() => navigate("/")} />
        <Title>WVillage</Title>
      </Header>

      <PasswordResetBox>
        <InputContainer>
          <InputWrapper>
            <Input
              type="email"
              placeholder="이메일"
              value={email}
              onChange={handleEmailChange}
            />
            {/* 이메일 상태 메시지 */}
            {email && (
              <EmailMessage isValid={isEmailValid}>{emailMessage}</EmailMessage>
            )}
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
        {/* 비밀번호 재설정 페이지 이동 버튼 */}
        <Button onClick={handleReset}>비밀번호 재설정</Button>
      </PasswordResetBox>
    </PasswordResetContainer>
  );
};

export default PasswordReset;

// 스타일링

const EmailMessage = styled.div`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 12px;
  font-weight: bold;
  color: ${(props) => (props.isValid ? "#28a745" : "#dc3545")};
  white-space: nowrap;
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
  cursor: pointer;
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
  padding: 30px;
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
  background-color: #1b5e96;
  border: none;
  border-radius: 15px;
  font-size: large;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.7;
  }
`;
