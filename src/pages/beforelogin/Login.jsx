import React, { useContext, useState } from "react";
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
import UserProfileAPI from "../../api/OtherUserProfileAPI";
import { UserContext } from "../../context/UserStore";

const ICONS = {
  user: faUser,
  lock: faLock,
  eye: faEye,
  eyeSlash: faEyeSlash,
};

const Login = () => {
  const navigate = useNavigate();
  const { setUserInfo } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [emailMessage, setEmailMessage] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(null);

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

  const handleLogin = async () => {
    try {
      const response = await AuthAPI.login(email, password);
      console.log("Response:", response); // 응답 데이터 확인

      if (response.status === 200) {
        // 로그인 성공
        const userInfo = response.data;
        setUserInfo(userInfo);
        navigate("/main");
      }
    } catch (error) {
      // 백엔드의 에러 메시지 표시
      alert(error.response.data);
    }
  };
  
  
  

  return (
    <LoginContainer>
      <Header>
        <Logo src={logo} alt="로고" onClick={() => navigate("/")} />
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
              onChange={handleEmailChange}
            />
            {/* 이메일 상태 메시지 */}
            {email && (
              <EmailMessage isValid={isEmailValid}>{emailMessage}</EmailMessage>
            )}
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
          <StyledLink to="/findmail">이메일 찾기</StyledLink>
          <Separator>|</Separator>
          <StyledLink to="/passwordreset">비밀번호 재설정</StyledLink>
          <Separator>|</Separator>
          <StyledLink to="/signup">회원가입</StyledLink>
        </TextLinksContainer>
      </LoginBox>
    </LoginContainer>
  );
};

const EmailMessage = styled.div`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 10px;
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
  position: relative;
  display: flex;
  align-items: center;
  padding: 30px;
  transition: background-color 0.3s ease;
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
  padding-right: 100px;
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
  background-color: #1B5E96;
  border: none;
  border-radius: 15px;
  font-size: large;
  cursor: pointer;
  transition: all  0.3s ease;
  &:hover {
    opacity: 0.7;
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
