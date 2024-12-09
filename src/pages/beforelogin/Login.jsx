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
import AuthAPI from "../../api/AuthAPI";

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

  const handleLogin = async () => {
    const response = await AuthAPI.login(email, password);
    // if (email === "test@example.com" && password === "password123") {
    //   alert("로그인 성공!");
    //   navigate("/main");
    // } else {
    //   alert("이메일 또는 비밀번호가 잘못되었습니다.");
    // }
  };

  return (
    <LoginContainer>
      <Header>
        <Logo src={logo} alt="로고" onClick={() => navigate("/intro")} />
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
          <InputWrapper>
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
        <TextLinksContainer>
          <StyledLink to="/findmail">아이디 찾기</StyledLink>
          <Separator>|</Separator>
          <StyledLink to="/passwordreset">비밀번호 재설정</StyledLink>
          <Separator>|</Separator>
          <StyledLink to="/signup">회원가입</StyledLink>
        </TextLinksContainer>
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
  height: 70px;
  margin-bottom: 50px;
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

const TextLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;

const StyledLink = styled(Link)`
  color: #4e4e4e;
  font-size: 14px;
  text-decoration: none;
`;
const Separator = styled.span`
  margin: 0 30px;
  color: #ccc;
`;

export default Login;
