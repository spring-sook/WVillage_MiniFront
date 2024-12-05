import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
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
      <Header>
        <Logo src={logo} alt="로고" />
        <Title>WVillage</Title>
      </Header>

      <LoginBox>
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
          <StyledLink to="/findmail">아이디 찾기</StyledLink>
          <StyledLink to="/passwordreset">비밀번호 재설정</StyledLink>
          <StyledLink to="/signup">회원가입</StyledLink>
        </LinkContainer>
      </LoginBox>
    </LoginContainer>
  );
};

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

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 70px);
  box-sizing: border-box;
  padding-top: 10px;
`;
const LoginBox = styled.div`
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
  padding: 25px;
  transition: background-color 0.3s ease;
  position: relative;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 20px;
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

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 120%;
  margin-top: 50px;
  margin-bottom: 100px;
`;

const StyledLink = styled(Link)`
  color: black;
  font-size: 14px;
  text-decoration: none;
`;

export default Login;
