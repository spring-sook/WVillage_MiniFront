import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

const ICONS = {
  user: faUser,
  lock: faLock,
  eye: faEye,
  eyeSlash: faEyeSlash,
};

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
        <LogoAndTitle onClick={() => navigate("/main")}>
          <Logo src={logo} alt="로고" />
          <Title>WVillage</Title>
        </LogoAndTitle>
        <InputContainer>
          <InputWrapper>
            <Icon icon={ICONS.user} />
            <Input
              type="email"
              placeholder="이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputWrapper>
          <Divider />
          <InputWrapper isLast>
            <Icon icon={ICONS.lock} />
            <Input
              type={passwordVisible ? "text" : "password"}
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <ToggleVisibility
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              <FontAwesomeIcon
                icon={passwordVisible ? ICONS.eyeSlash : ICONS.eye}
              />
            </ToggleVisibility>
          </InputWrapper>
        </InputContainer>
        <Button onClick={handleLogin}>로그인</Button>
        <LinkContainer>
          <StyledLink to="/Findmail">아이디 찾기</StyledLink>
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
  min-height: 100vh;
  padding: 20px;
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
const LogoAndTitle = styled.div`
  display: flex;

  justify-content: center;
  gap: 10px;
  margin-bottom: 50px;
  cursor: pointer;
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
  width: 40%;
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

  &:hover {
    background-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  transition: background-color 0.3s ease;
  position: relative;
`;
const Icon = styled(FontAwesomeIcon)`
  font-size: 15px;
  margin-right: 10px;
  color: #aaa;
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
  background-color: #a2d2ff;
  border: none;
  border-radius: 15px;
  font-size: large;
  font-weight: 1000;
  cursor: pointer;
  &:hover {
    background-color: #b4d8fa;
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
