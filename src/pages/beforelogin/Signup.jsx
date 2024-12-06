import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../images/logo.png";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    nickname: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    addressType: "default", // 선택한 주소 유형 (default: "주소 목록", custom: "직접 입력")
    address: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // 실시간 유효성 검사 (선택적으로 추가)
    if (name === "name" && value.length < 2) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "이름은 2글자 이상이어야 합니다.",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };

  const handleAddressChange = (e) => {
    const { value } = e.target;
    if (value === "custom") {
      setFormData({ ...formData, addressType: "custom", address: "" });
    } else {
      setFormData({ ...formData, addressType: "default", address: value });
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
      alert("모든 필드를 입력해주세요.");
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
          {/* 이름 */}
          <InputWrapper>
            <Input
              type="text"
              name="name"
              placeholder="이름"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <Error>{errors.name}</Error>}
          </InputWrapper>
          <Divider />

          {/* 닉네임 */}
          <InputWrapper>
            <Input
              type="text"
              name="nickname"
              placeholder="닉네임"
              value={formData.nickname}
              onChange={handleChange}
            />
          </InputWrapper>
          <Divider />

          {/* 이메일 */}
          <InputWrapper>
            <Input
              type="email"
              name="email"
              placeholder="이메일"
              value={formData.email}
              onChange={handleChange}
            />
          </InputWrapper>
          <Divider />

          {/* 비밀번호 */}
          <InputWrapper>
            <Input
              type="password"
              name="password"
              placeholder="비밀번호"
              value={formData.password}
              onChange={handleChange}
            />
          </InputWrapper>
          <Divider />

          {/* 비밀번호 확인 */}
          <InputWrapper>
            <Input
              type="password"
              name="confirmPassword"
              placeholder="비밀번호 확인"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </InputWrapper>
          <Divider />

          {/* 전화번호 */}
          <InputWrapper>
            <Input
              type="text"
              name="phone"
              placeholder="전화번호 ('-' 제외)"
              value={formData.phone}
              onChange={handleChange}
            />
          </InputWrapper>
          <Divider />

          {/* 주소 */}
          <InputWrapper>
            <Select
              name="address"
              value={formData.address}
              onChange={handleAddressChange}
            >
              <option value="서울특별시 강남구">서울특별시 강남구</option>
              <option value="서울특별시 송파구">서울특별시 송파구</option>
              <option value="부산광역시 해운대구">부산광역시 해운대구</option>
              <option value="custom">직접 입력</option>
            </Select>
          </InputWrapper>

          {/* 직접 입력 필드 */}
          {formData.addressType === "custom" && (
            <InputWrapper>
              <Input
                type="text"
                name="address"
                placeholder="주소를 입력하세요"
                value={formData.address}
                onChange={handleChange}
              />
            </InputWrapper>
          )}
        </InputContainer>

        {/* 회원가입 버튼 */}
        <Button onClick={handleSignup}>회원가입</Button>
      </SignupBox>
    </SignupContainer>
  );
};

export default Signup;

// 스타일링
const Error = styled.span`
  color: red;
  font-size: 12px;
`;

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

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 70px);
  box-sizing: border-box;
  padding-top: 160px;
`;

const SignupBox = styled.div`
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
  padding: 27.5px;
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

const Select = styled.select`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 13px;

  &:hover {
    border-color: #007bff;
    box-shadow: 0 0 3px rgba(183, 0, 255, 0.4);
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

const BackToLoginButton = styled.button`
  width: 130%;
  padding: 20px;
  margin: 20px 0 20px 0;
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
