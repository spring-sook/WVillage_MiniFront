import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        <h2>WVillage</h2>
        <Input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>로그인</Button>

        <Link to="/passwordreset">비밀번호 재설정</Link>
        <Link to="/signup">새 계정 만들기</Link>
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
  background-color: #f5f5f5;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 20px;
  width: 1063px;
  height: 1023px;
  background: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 1200px) {
    width: 90%;
    height: auto;
  }
`;

const Input = styled.input`
  width: 50%;
  padding: 20px;
  border: 3px solid #ccc;
  border-radius: 1px;
  text-align: center;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 50%;
  padding: 30px;
  margin: 30px 0 20px 0;
  color: black;
  background-color: #95bfe5;
  border: none;
  border-radius: 5px;
  font-size: medium;
  cursor: pointer;
  &:hover {
    background-color: #a2d2ff;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin-top: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: medium;
  &:hover {
    text-decoration: underline;
  }
`;

export default Login;
