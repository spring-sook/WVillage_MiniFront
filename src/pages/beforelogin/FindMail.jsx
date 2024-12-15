import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../images/logo.png";
import AuthAPI from "../../api/AuthAPI";

const FindMail = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone" && isNaN(value)) return;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "이름을 입력하세요.";
    if (!formData.phone.trim() || formData.phone.length !== 11)
      newErrors.phone = "유효하지 않은 번호 입니다.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFindMail = async () => {
    if (!validateForm()) {
      return;
    }
    try {
      const response = await AuthAPI.FindEmail(formData.name, formData.phone);
      console.log(response);
      alert(
        `이메일 찾기 완료! 이메일: ${formData.email}`
      );
      navigate("/login");
    } catch (err) {
      console.error("에러 발생: ", err);
      alert("이메일 찾기에 실패했습니다. 정보를 확인해주세요.");
    }
  };

  return (
    <FindMailContainer>
      <Header>
        <Logo src={logo} alt="로고" onClick={() => navigate("/")} />
        <Title> WVillage</Title>
      </Header>

      <FindMailBox>
        <InputContainer>
          <InputWrapper>
            <Input
              type="text"
              name="name"
              placeholder="이름"
              value={formData.name}
              onChange={handleChange}
            />
            <ErrorMessage>{errors.name}</ErrorMessage>
          </InputWrapper>
          <Divider />
          <InputWrapper>
            <Input
              type="text"
              name="phone"
              placeholder="전화번호 ('-' 제외 11자리)"
              value={formData.phone}
              onChange={handleChange}
              maxLength="11"
            />
            <ErrorMessage>{errors.phone}</ErrorMessage>
          </InputWrapper>
        </InputContainer>
        <Button onClick={handleFindMail}>이메일 찾기</Button>

        <TextLinksContainer>
          <TextLink onClick={() => navigate("/passwordreset")}>
            비밀번호 재설정
          </TextLink>
          <Separator>|</Separator>
          <TextLink onClick={() => navigate("/signup")}>회원가입</TextLink>
        </TextLinksContainer>
      </FindMailBox>
    </FindMailContainer>
  );
};

export default FindMail;

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

const FindMailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 70px);
  box-sizing: border-box;
  padding-top: 10px;
`;

const FindMailBox = styled.div`
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
  padding: 30px;
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
  margin-top: 50px;
`;

const TextLink = styled.span`
  color: #535353;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Separator = styled.span`
  margin: 0 50px;
  color: #ccc;
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 10px;
  margin-top: 5px;
  display: block;
  min-height: 14px;
  visibility: ${(props) => (props.children ? "visible" : "hidden")};
`;
