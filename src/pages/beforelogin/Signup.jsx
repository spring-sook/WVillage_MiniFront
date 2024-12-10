import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const ICONS = {
  eye: faEye,
  eyeSlash: faEyeSlash,
};

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    nickname: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    addressType: "default",
    address: "",
  });

  const [checkingStatus, setCheckingStatus] = useState({
    name: "",
    nickname: "",
    email: "",
    password: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // 실시간 유효성 검사
    if (name === "name") {
      setCheckingStatus((prev) => ({
        ...prev,
        name:
          value.length >= 2
            ? "사용 가능한 이름입니다."
            : "이름은 2글자 이상이어야 합니다.",
      }));
    }
    if (name === "nickname") {
      setCheckingStatus((prev) => ({
        ...prev,
        nickname:
          value.length >= 2
            ? "사용 가능한 닉네임입니다."
            : "닉네임은 2글자 이상이어야 합니다.",
      }));
    }
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setCheckingStatus((prev) => ({
        ...prev,
        email: emailRegex.test(value)
          ? "올바른 이메일 형식입니다."
          : "유효하지 않은 이메일 형식입니다.",
      }));
    }
    if (name === "password") {
      const hasNumber = /\d/.test(value);
      const hasSpecialChar = /[!@#$%^&*]/.test(value);
      setCheckingStatus((prev) => ({
        ...prev,
        password:
          value.length >= 8 && hasNumber && hasSpecialChar
            ? "사용 가능한 비밀번호입니다."
            : "비밀번호는 숫자, 특수문자 포함 8자 이상이어야 합니다.",
      }));
    }
  };

  const checkDuplicate = async (type) => {
    const value = formData[type];
    if (!value) {
      alert(`${type === "name" ? "이름" : "닉네임"}을 입력해주세요.`);
      return;
    }

    try {
      const response = { isDuplicate: false };

      if (response.isDuplicate) {
        setCheckingStatus((prev) => ({
          ...prev,
          [type]: `${type === "name" ? "이름" : "닉네임"}이 이미 존재합니다.`,
        }));
      } else {
        setCheckingStatus((prev) => ({
          ...prev,
          [type]: "사용 가능한 값입니다.",
        }));
      }
    } catch (error) {
      console.error("중복 확인 오류:", error);
      setCheckingStatus((prev) => ({
        ...prev,
        [type]: "오류 발생. 다시 시도해주세요.",
      }));
    }
  };

  const handleSignup = () => {
    if (
      !formData.name ||
      !formData.nickname ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword ||
      !formData.address
    ) {
      alert("공백을 전부 입력해주세요.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    alert("회원가입이 완료되었습니다!");
    navigate("/");
  };

  return (
    <SignupContainer>
      <Header>
        <Logo src={logo} alt="로고" />
        <Title>WVillage</Title>
      </Header>

      <SignupBox>
        <InputContainer>
          <InputWrapper>
            <Input
              type="text"
              name="name"
              placeholder="이름"
              value={formData.name}
              onChange={handleChange}
              onBlur={() => checkDuplicate("name")}
            />
            <StatusMessage>{checkingStatus.name}</StatusMessage>
          </InputWrapper>

          <InputWrapper>
            <Input
              type="text"
              name="nickname"
              placeholder="닉네임"
              value={formData.nickname}
              onChange={handleChange}
              onBlur={() => checkDuplicate("nickname")}
            />
            <StatusMessage>{checkingStatus.nickname}</StatusMessage>
          </InputWrapper>

          <InputWrapper>
            <Input
              type="email"
              name="email"
              placeholder="이메일"
              value={formData.email}
              onChange={handleChange}
            />
            <StatusMessage>{checkingStatus.email}</StatusMessage>
          </InputWrapper>

          <InputWrapper>
            <Input
              type={passwordVisible ? "text" : "password"}
              name="password"
              placeholder="비밀번호"
              value={formData.password}
              onChange={handleChange}
            />
            <ToggleVisibility
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              <FontAwesomeIcon
                icon={passwordVisible ? ICONS.eyeSlash : ICONS.eye}
              />
            </ToggleVisibility>
            <StatusMessage>{checkingStatus.password}</StatusMessage>
          </InputWrapper>

          <InputWrapper>
            <Input
              type={confirmPasswordVisible ? "text" : "password"}
              name="confirmPassword"
              placeholder="비밀번호 확인"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <ToggleVisibility
              onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
            >
              <FontAwesomeIcon
                icon={confirmPasswordVisible ? ICONS.eyeSlash : ICONS.eye}
              />
            </ToggleVisibility>
          </InputWrapper>

          <InputWrapper>
            <Input
              type="text"
              name="phone"
              placeholder="전화번호 ('-' 제외)"
              value={formData.phone.replace(/-/g, "")}
              onChange={handleChange}
            />
          </InputWrapper>

          <InputWrapper>
            <Select
              name="address"
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
            >
              <option value="">주소를 선택하세요</option>
              <option value="서울특별시 강남구">서울특별시 강남구</option>
              <option value="서울특별시 송파구">서울특별시 송파구</option>
              <option value="부산광역시 해운대구">부산광역시 해운대구</option>
              <option value="custom">직접 입력</option>
            </Select>
          </InputWrapper>
        </InputContainer>

        <Button onClick={handleSignup}>회원가입</Button>
      </SignupBox>
    </SignupContainer>
  );
};

export default Signup;

// 스타일링
const ToggleVisibility = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px;
  color: #aaa;
  cursor: pointer;

  &:hover {
    color: #007bff;
  }
`;

const StatusMessage = styled.div`
  font-size: 12px;
  color: ${(props) => (props.children.includes("사용 가능") ? "green" : "red")};
  margin-top: 5px;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 5px 20px;
  height: 90px;
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

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 90px);
`;

const SignupBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 400px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 15px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
`;

const Button = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
