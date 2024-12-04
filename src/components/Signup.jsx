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

  const [step, setStep] = useState(1); // 단계: 1 -> 기본정보, 2 -> 주소와 가입
  const [formData, setFormData] = useState({
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

  const handleNextStep = () => {
    if (step === 1) {
      setStep(2);
    } else {
      alert("가입이 완료되었습니다.");
      navigate("/"); // 로그인 페이지로 이동
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const generateYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let year = currentYear - 100; year <= currentYear; year++) {
      years.push(
        <option key={year} value={year}>
          {year}
        </option>
      );
    }
    return years;
  };

  const generateMonthOptions = () => {
    return Array.from({ length: 12 }, (_, i) => (
      <option key={i + 1} value={i + 1}>
        {i + 1}
      </option>
    ));
  };

  const generateDayOptions = () => {
    return Array.from({ length: 31 }, (_, i) => (
      <option key={i + 1} value={i + 1}>
        {i + 1}
      </option>
    ));
  };

  return (
    <SignupContainer>
      <SignupBox>
        <Header>
          <Logo src={logo} alt="로고" onClick={() => navigate("/main")} />
          <Title>계정 만들기</Title>
        </Header>
        {step === 1 ? (
          <StepOne>
            <InputWrapper>
              <Label>이메일</Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </InputWrapper>
            <InputWrapper>
              <Label>비밀번호</Label>
              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </InputWrapper>
            <InputWrapper>
              <Label>비밀번호 확인</Label>
              <Input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </InputWrapper>
            <InputWrapper>
              <Label>생년월일</Label>
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
            </InputWrapper>
            <InputWrapper>
              <Label>전화번호</Label>
              <Input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </InputWrapper>
            <Button onClick={handleNextStep}>다음</Button>
          </StepOne>
        ) : (
          <StepTwo>
            <InputWrapper>
              <Label>주소</Label>
              <Input
                type="text"
                name="address"
                placeholder="주소 입력"
                value={formData.address}
                onChange={handleChange}
              />
            </InputWrapper>
            <InputWrapper>
              <Label>상세 주소</Label>
              <Input
                type="text"
                name="addressDetail"
                placeholder="상세 주소 입력"
                value={formData.addressDetail}
                onChange={handleChange}
              />
            </InputWrapper>
            <ButtonContainer>
              <PreviousButton onClick={() => setStep(1)}>이전</PreviousButton>
              <Button onClick={handleNextStep}>가입하기</Button>
            </ButtonContainer>
          </StepTwo>
        )}
      </SignupBox>
    </SignupContainer>
  );
};

const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
`;

const SignupBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 40px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #1b5e96;
`;

const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 15px;
  padding: 20px;
`;

const PasswordContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const ToggleVisibility = styled.div`
  position: absolute;
  right: 10px;
  font-size: 18px;
  color: #aaa;
  cursor: pointer;

  &:hover {
    color: #007bff;
  }
`;

const Label = styled.label`
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

const BirthInputContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Select = styled.select`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;

  &:hover {
    border-color: #007bff;
    box-shadow: 0 0 3px rgba(183, 0, 255, 0.4);
  }
`;
const BirthInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
`;

const AddressContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const SearchButton = styled.button`
  padding: 10px 20px;
  background-color: #1b5e96;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #164d7f;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  color: white;
  background-color: #1b5e96;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #164d7f;
  }
`;

const PreviousButton = styled(Button)`
  background-color: #a9a9a9;

  &:hover {
    background-color: #888;
  }
`;

const StepOne = styled.div`
  width: 100%;
`;

const StepTwo = styled.div`
  width: 100%;
`;

export default Signup;
