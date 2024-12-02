import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLogin = () => {
    if (email === "test@example.com" && password === "password123") {
      alert("로그인 성공!");
      navigate("/main");
    } else {
      alert("이메일 또는 비밀번호가 잘못되었습니다.");
    }
  };

  return (
    <LoginContainer>
      <LoginBox>
        <LogoContainer>
          <Logo src={logo} alt="로고" />
          <Title>WVillage</Title>
        </LogoContainer>
        <InputContainer>
          <Input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Divider />
          <PasswordContainer>
            <Input
              type={passwordVisible ? "text" : "password"}
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <ToggleVisibility
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
            </ToggleVisibility>
          </PasswordContainer>
        </InputContainer>
        <Button onClick={handleLogin}>로그인</Button>
        <LinkContainer>
          <StyledLink to="/passwordreset">아이디 찾기</StyledLink>
          <StyledLink to="/passwordreset">비밀번호 재설정</StyledLink>
          <StyledLink to="/signup">회원가입</StyledLink>
        </LinkContainer>
      </LoginBox>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  transform: translateY(-13%);
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0px;
  padding: 20px;
  width: 1063px;
  height: 1023px;
  background: white;

  @media (max-width: 1200px) {
    width: 90%;
    height: auto;
  }
`;
const LogoContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 60px;
`;

const Logo = styled.img`
  width: 80px;
  height: 80px;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  height: 13%;
  color: #1b5e96;
  text-align: center;
  margin-bottom: 10px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 38%;
  border: 1px solid #ccc;
  border-radius: 15px;
  overflow: hidden;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 3px rgba(183, 0, 255, 0.4);
  }
  &:focus-within {
    border-color: #007bff;
    box-shadow: 0 0 3px rgba(183, 0, 255, 0.4);
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 20px;
  text-align: left;
  border: none;
  outline: none;
  font-size: 14px;

  &::placeholder {
    color: #aaa;
  }
`;

const Divider = styled.div`
  height: 1px;
  background-color: #ccc;
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
  width: 40%;
  padding: 13px;
  margin: 60px 0 20px 0;
  color: #ffffff;
  background-color: #95bfe5;
  border: none;
  border-radius: 15px;
  font-size: large;
  font-weight: 1000;
  cursor: pointer;
  &:hover {
    background-color: #a2d2ff;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 35%;
  margin-top: 30px;
`;

const StyledLink = styled(Link)`
  color: black;
  font-size: 14px;
  text-decoration: none;
`;

export default Login;
