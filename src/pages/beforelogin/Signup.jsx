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
            />
            <StatusMessage
              isValid={checkingStatus.name.includes("사용 가능한")}
            >
              {checkingStatus.name}
            </StatusMessage>
          </InputWrapper>

          <InputWrapper>
            <Input
              type="text"
              name="nickname"
              placeholder="닉네임"
              value={formData.nickname}
              onChange={handleChange}
            />
            <StatusMessage
              isValid={checkingStatus.nickname.includes("사용 가능한")}
            >
              {checkingStatus.nickname}
            </StatusMessage>
          </InputWrapper>

          <InputWrapper>
            <Input
              type="email"
              name="email"
              placeholder="이메일"
              value={formData.email}
              onChange={handleChange}
            />
            <StatusMessage isValid={checkingStatus.email.includes("올바른")}>
              {checkingStatus.email}
            </StatusMessage>
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
            <StatusMessage
              isValid={checkingStatus.password.includes("사용 가능한")}
            >
              {checkingStatus.password}
            </StatusMessage>
          </InputWrapper>

          <InputWrapper>
            <Input
              type={confirmPasswordVisible ? "text" : "password"}
              name="confirmPassword"
              placeholder="비밀번호 확인"
              value={formData.confirmPassword}
              onChange={(e) => {
                const value = e.target.value;
                setFormData({ ...formData, confirmPassword: value });

                setCheckingStatus((prev) => ({
                  ...prev,
                  confirmPassword:
                    value === formData.password
                      ? "비밀번호가 일치합니다."
                      : "비밀번호가 일치하지 않습니다.",
                }));
              }}
            />
            <ToggleVisibility
              onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
            >
              <FontAwesomeIcon
                icon={confirmPasswordVisible ? ICONS.eyeSlash : ICONS.eye}
              />
            </ToggleVisibility>
            <StatusMessage
              isValid={
                checkingStatus.confirmPassword === "비밀번호가 일치합니다."
              }
            >
              {checkingStatus.confirmPassword}
            </StatusMessage>
          </InputWrapper>
          <InputWrapper>
            <Input
              type="text"
              name="phone"
              placeholder="전화번호 ('-' 제외)"
              value={formData.phone} // formData.phone을 그대로 사용
              onChange={(e) => {
                const onlyNumbers = e.target.value.replace(/[^0-9]/g, ""); // 숫자만 허용
                setFormData({ ...formData, phone: onlyNumbers.slice(0, 11) }); // 최대 11자리 제한

                // 유효성 메시지 업데이트
                if (onlyNumbers.length > 0) {
                  setCheckingStatus((prev) => ({
                    ...prev,
                    phone:
                      onlyNumbers.length === 11
                        ? "올바른 전화번호입니다."
                        : "전화번호는 11자리여야 합니다.",
                  }));
                } else {
                  setCheckingStatus((prev) => ({
                    ...prev,
                    phone: "",
                  }));
                }
              }}
            />
            {/* 입력이 있을 때만 메시지 표시 */}
            {formData.phone && (
              <StatusMessage isValid={formData.phone.length === 11}>
                {checkingStatus.phone}
              </StatusMessage>
            )}
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
  margin-top: 5px;
  font-size: 12px;
  color: ${(props) => (props.isValid ? "green" : "red")};
  min-height: 18px; /* 고정된 높이로 레이아웃 안정 */
  visibility: ${(props) =>
    props.children ? "visible" : "hidden"}; /* 메시지가 없을 때도 공간 유지 */
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
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 20px;
  &:hover {
    border-color: #007bff;
    box-shadow: 0 0 3px rgba(183, 0, 255, 0.4);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 15px;
  margin-top: 20px;
  border-radius: 30px;
`;

const Button = styled.button`
  width: 100%;
  padding: 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 30px;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
