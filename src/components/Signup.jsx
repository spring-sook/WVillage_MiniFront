import React, { useState } from "react";
import styled from "styled-components";
import logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";
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
    birthYear: "",
    birthMonth: "",
    birthDay: "",
    phone: "",
    address: "",
    addressDetail: "",
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({}); // 유효성 검사 상태

  // 입력 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // 유효성 검사 로직
  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]+$/;

    if (!formData.name.trim()) newErrors.name = "이름을 입력하세요.";
    if (!formData.nickname.trim()) newErrors.nickname = "닉네임을 입력하세요.";
    if (!emailRegex.test(formData.email))
      newErrors.email = "유효한 이메일 주소를 입력하세요.";
    if (formData.password.length < 8)
      newErrors.password = "비밀번호는 최소 8자 이상이어야 합니다.";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "비밀번호가 일치하지 않습니다.";
    if (!formData.birthYear || !formData.birthMonth || !formData.birthDay)
      newErrors.birthDate = "생년월일을 모두 선택하세요.";
    if (!phoneRegex.test(formData.phone))
      newErrors.phone = "전화번호는 숫자만 입력할 수 있습니다.";
    if (!formData.address.trim()) newErrors.address = "주소를 입력하세요.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 회원가입 핸들러
  const handleSignup = () => {
    if (!validateForm()) {
      return;
    }
    alert("계정 생성이 완료되었습니다!");
    navigate("/");
  };

  // 년/월/일 드롭다운 옵션 생성
  const generateYearOptions = () => {
    const currentYear = new Date().getFullYear();
    return Array.from({ length: 100 }, (_, i) => (
      <option key={i} value={currentYear - i}>
        {currentYear - i}
      </option>
    ));
  };

  const generateMonthOptions = () =>
    Array.from({ length: 12 }, (_, i) => (
      <option key={i + 1} value={i + 1}>
        {i + 1}
      </option>
    ));

  const generateDayOptions = () =>
    Array.from({ length: 31 }, (_, i) => (
      <option key={i + 1} value={i + 1}>
        {i + 1}
      </option>
    ));

  return (
    <SignupContainer>
      <SignupBox>
        <Header>
          <Logo src={logo} alt="로고" onClick={() => navigate("/intro")} />
          <Title>회원가입</Title>
        </Header>
        <InputWrapper>
          <InputLabel>이름</InputLabel>
          <Input
            type="text"
            name="name"
            placeholder="이름을 입력하세요"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
        </InputWrapper>
        <InputWrapper>
          <InputLabel>닉네임</InputLabel>
          <Input
            type="text"
            name="nickname"
            placeholder="닉네임을 입력하세요"
            value={formData.nickname}
            onChange={handleChange}
          />
          {errors.nickname && <ErrorMessage>{errors.nickname}</ErrorMessage>}
        </InputWrapper>
        <InputWrapper>
          <InputLabel>이메일</InputLabel>
          <EmailContainer>
            <Input
              type="text"
              name="email"
              placeholder="이메일 주소"
              value={formData.email}
              onChange={handleChange}
            />
            <DomainSelect
              name="domain"
              value={formData.domain || "example.com"} // 기본값 설정
              onChange={handleChange}
            >
              <option value="gmail.com">@gmail.com</option>
              <option value="naver.com">@naver.com</option>
              <option value="daum.net">@daum.net</option>
            </DomainSelect>
          </EmailContainer>
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </InputWrapper>
        <InputWrapper>
          <InputLabel>비밀번호</InputLabel>
          <PasswordContainer>
            <Input
              type={passwordVisible ? "text" : "password"}
              name="password"
              placeholder="비밀번호 입력(문자,숫자,특수문자 포함 8~10자) "
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
          </PasswordContainer>
          {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        </InputWrapper>
        <InputWrapper>
          <InputLabel>비밀번호 확인</InputLabel>
          <PasswordContainer>
            <Input
              type={confirmPasswordVisible ? "text" : "password"}
              name="confirmPassword"
              placeholder="비밀번호 재입력"
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
          </PasswordContainer>
          {errors.confirmPassword && (
            <ErrorMessage>{errors.confirmPassword}</ErrorMessage>
          )}
        </InputWrapper>
        <InputWrapper>
          <InputLabel>생년월일</InputLabel>
          <BirthInputContainer>
            <Select
              name="birthYear"
              value={formData.birthYear}
              onChange={handleChange}
            >
              <option value="">년</option>
              {generateYearOptions()}
            </Select>
            <Select
              name="birthMonth"
              value={formData.birthMonth}
              onChange={handleChange}
            >
              <option value="">월</option>
              {generateMonthOptions()}
            </Select>
            <Select
              name="birthDay"
              value={formData.birthDay}
              onChange={handleChange}
            >
              <option value="">일</option>
              {generateDayOptions()}
            </Select>
          </BirthInputContainer>
          {errors.birthDate && <ErrorMessage>{errors.birthDate}</ErrorMessage>}
        </InputWrapper>
        <InputWrapper>
          <InputLabel>전화번호</InputLabel>
          <Input
            type="text"
            name="phone"
            placeholder="휴대폰 번호 입력 (`-`제외 11자리 입력)"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}
        </InputWrapper>
        <InputWrapper>
          <InputLabel>주소</InputLabel>
          <Input
            type="text"
            name="address"
            placeholder="주소를 입력하세요"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && <ErrorMessage>{errors.address}</ErrorMessage>}
        </InputWrapper>
        <InputWrapper>
          <InputLabel>상세 주소</InputLabel>
          <Input
            type="text"
            name="addressDetail"
            placeholder="상세 주소를 입력하세요"
            value={formData.addressDetail}
            onChange={handleChange}
          />
        </InputWrapper>
        <ButtonContainer>
          <PreviousButton onClick={() => navigate(-1)}>이전</PreviousButton>
          <Button onClick={handleSignup}>가입하기</Button>
        </ButtonContainer>
      </SignupBox>
    </SignupContainer>
  );
};

const EmailContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const DomainSelect = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  background-color: #fff;
  cursor: pointer;
  font-style: normal;

  &:hover {
    border-color: #007bff;
    box-shadow: 0 0 3px rgba(183, 0, 255, 0.4);
  }
`;

// 오류 메시지 스타일
const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 5px;
  display: block;
`;

const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh; /* 변경 */
  background-color: #f5f5f5;
  padding: 40px; /* 유연한 레이아웃 */
`;

const SignupBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 700px; /* 너비 고정 */
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 40px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

const Logo = styled.img`
  width: 70px;
  height: 70px;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #1b5e96;
  margin-top: 10px;
  text-align: center;
`;

const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 15px;
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;

  &:hover {
    border-color: #007bff;
    box-shadow: 0 0 3px rgba(183, 0, 255, 0.4);
  }
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

const BirthInputContainer = styled.div`
  display: flex;
  gap: 60px;
`;

const Select = styled.select`
  padding: 18px;
  border: 1px solid #ccc;
  border-radius: 5px;
  position: center;
  font-size: 12px;

  &:hover {
    border-color: #007bff;
    box-shadow: 0 0 3px rgba(183, 0, 255, 0.4);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-top: 20px;
`;

const PreviousButton = styled.button`
  padding: 10px 20px;
  background-color: #ccc;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #bbb;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #1b5e96;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #164d7f;
  }
`;

export default Signup;
