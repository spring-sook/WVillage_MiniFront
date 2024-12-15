import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import logo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import AuthAPI from "../../api/AuthAPI";

const ICONS = {
  eye: faEye,
  eyeSlash: faEyeSlash,
};

const PasswordReset2 = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email");

  if (!email) {
    alert("이메일 정보가 없습니다. 이전 화면으로 돌아갑니다.");
    navigate("/passwordreset");
  }

  const handleReset = async () => {
    if (!newPassword || !confirmPassword) {
      alert("새 비밀번호와 비밀번호 확인을 입력해주세요.");
      return;
    }
    if (newPassword.length < 8) {
      alert("비밀번호는 최소 8자 이상 문자, 특수문자가 포함되어야 합니다.");
      return;
    }
    if (newPassword !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    await handlePasswordReset();
  };

  const handlePasswordReset = async () => {
    try {
      console.log("비밀번호 재설정 요청 중: ", {
        email,
        newPassword,
        confirmPassword,
      });

      const response = await AuthAPI.resetPassword(
        email,
        newPassword,
        confirmPassword
      );

      if (response.status === 200) {
        console.log("비밀번호 변경 성공:", response.data);
        setIsModalOpen(true);
      } else {
        console.log("비밀번호 변경 실패:", response.data);
        alert("비밀번호 변경 실패: " + response.data);
      }
    } catch (error) {
      console.error(
        "비밀번호 변경 요청 실패:",
        error.response || error.message
      );
      alert(
        error.response?.data ||
          "비밀번호 변경 중 오류가 발생했습니다. 다시 시도해주세요."
      );
    }
  };

  const handleCloseModal = () => {
    navigate("/");
  };

  return (
    <PasswordResetContainer>
      <Header>
        <Logo src={logo} alt="로고" onClick={() => navigate("/")} />
        <Title>WVillage</Title>
      </Header>

      <PasswordResetBox>
        <InputContainer>
          <InputWrapper>
            <Input
              type={passwordVisible ? "text" : "password"}
              placeholder="새 비밀번호"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <ToggleVisibility
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              <FontAwesomeIcon
                icon={passwordVisible ? ICONS.eyeSlash : ICONS.eye}
              />
            </ToggleVisibility>
          </InputWrapper>
          <Divider />
          <InputWrapper>
            <Input
              type={confirmPasswordVisible ? "text" : "password"}
              placeholder="비밀번호 확인"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <ToggleVisibility
              onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
            >
              <FontAwesomeIcon
                icon={confirmPasswordVisible ? ICONS.eyeSlash : ICONS.eye}
              />
            </ToggleVisibility>
          </InputWrapper>
        </InputContainer>
        <Button onClick={handleReset}>확인</Button>
      </PasswordResetBox>

      {isModalOpen && (
        <Modal>
          <ModalContent>
            <ModalMessage>비밀번호가 성공적으로 변경되었습니다!</ModalMessage>
            <CloseButton onClick={handleCloseModal}>완료</CloseButton>
          </ModalContent>
        </Modal>
      )}
    </PasswordResetContainer>
  );
};

export default PasswordReset2;

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

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 5px 20px;
  z-index: 1000;
  height: 70px;
  margin-bottom: 20px;
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

const PasswordResetContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 70px);
  box-sizing: border-box;
  padding-top: 10px;
`;

const PasswordResetBox = styled.div`
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

const Button = styled.button`
  width: 130%;
  padding: 20px;
  margin: 52px 0 20px 0;
  color: #ffffff;
  background-color: #1B5E96;
  border: none;
  border-radius: 15px;
  font-size: large;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.7;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px 40px;
  text-align: center;
  max-width: 400px;
  width: 90%;
`;

const ModalMessage = styled.p`
  font-size: 15px;
  color: #000000;
  margin-bottom: 20px;
`;

const CloseButton = styled.button`
  padding: 10px 20px;
  color: white;
  background-color: #1B5E96;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
transition: all 0.3s ease;
  &:hover {
    opacity: 0.7;
  }
`;
