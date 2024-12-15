import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import logo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import AuthAPI from "../../api/AuthAPI";
import CommonAPI from "../../api/CommonAPI";
import { RegionSelect } from "../../components/RegionSelect";

const ICONS = {
  eye: faEye,
  eyeSlash: faEyeSlash,
};

const Signup = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [sidoOpt, setSidoOpt] = useState([]);
  const [sigunguOpt, setSigunguOpt] = useState([]);
  const [emdOpt, setEmdOpt] = useState([]);
  const [riOpt, setRiOpt] = useState([]);
  const [searchArea, setSearchArea] = useState("");
  const [regionFilter, setRegionFilter] = useState({
    sido: null,
    sigungu: null,
    emd: null,
    ri: null,
    sidoName: null,
    sigunguName: null,
    emdName: null,
    riName: null,
  });

  const [formData, setFormData] = useState({
    name: "",
    nickname: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    addressType: "default",
    areaCode: "",
  });

  const [checkingStatus, setCheckingStatus] = useState({
    name: "",
    nickname: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  useEffect(() => {
    const getSido = async () => {
      const responseSido = await CommonAPI.GetSido();
      setSidoOpt(responseSido.data);
    };
    getSido();
  }, []);

  useEffect(() => {
    const fetchRegionData = async () => {
      try {
        let responseRegion;
        if (regionFilter.emd) {
          responseRegion = await CommonAPI.GetRegionFilter(regionFilter.emd);
          setRiOpt(responseRegion.data);
        } else if (regionFilter.sigungu) {
          responseRegion = await CommonAPI.GetRegionFilter(
            regionFilter.sigungu
          );
          setEmdOpt(responseRegion.data);
        } else if (regionFilter.sido) {
          responseRegion = await CommonAPI.GetRegionFilter(regionFilter.sido);
          setSigunguOpt(responseRegion.data);
        } else {
          return;
        }
      } catch (error) {
        console.error("Error fetching region data: ", error);
      }
    };
    fetchRegionData();

    const updateAddress = () => {
      const address = regionFilter.ri || regionFilter.emd || "";
      setFormData((prevData) => ({
        ...prevData,
        areaCode: address,
      }));
    };
    updateAddress();
  }, [regionFilter]);

  const handleRegionChange = (key) => (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    const regionNameKey = `${key}Name`;

    setRegionFilter((prevState) => ({
      ...prevState,
      [key]: e.target.value,
      [regionNameKey]: selectedOption.text,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    const trimmedValue = value.trimStart();
    let sanitizedValue = trimmedValue;

    if (name === "phone") {
      sanitizedValue = trimmedValue.replace(/[^0-9]/g, "");

      if (sanitizedValue.length > 11) {
        sanitizedValue = sanitizedValue.slice(0, 11);
      }

      if (
        sanitizedValue.length > 0 &&
        !sanitizedValue.startsWith("010") &&
        !sanitizedValue.startsWith("011")
      ) {
        return;
      }
    }

    setFormData({ ...formData, [name]: sanitizedValue });

    // 유효성 검사
    if (sanitizedValue.trim() === "") {
      setCheckingStatus((prev) => ({ ...prev, [name]: "" }));
    } else {
      if (name === "phone") {
        const startsWithValidPrefix =
          sanitizedValue.startsWith("010") || sanitizedValue.startsWith("011");
        const isValidLength = sanitizedValue.length === 11;

        setCheckingStatus((prev) => ({
          ...prev,
          phone:
            startsWithValidPrefix && isValidLength
              ? "올바른 전화번호입니다."
              : "전화번호는 010, 011로 시작하는 11자리여야 합니다.",
        }));
      }

      if (name === "name") {
        setCheckingStatus((prev) => ({
          ...prev,
          name:
            sanitizedValue.length >= 2
              ? "사용 가능한 이름입니다."
              : "이름은 2글자 이상이어야 합니다.",
        }));
      }

      if (name === "nickname") {
        setCheckingStatus((prev) => ({
          ...prev,
          nickname:
            sanitizedValue.length >= 2
              ? "사용 가능한 닉네임입니다."
              : "닉네임은 2글자 이상이어야 합니다.",
        }));
      }

      if (name === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setCheckingStatus((prev) => ({
          ...prev,
          email: emailRegex.test(sanitizedValue)
            ? "올바른 이메일 형식입니다."
            : "유효하지 않은 이메일 형식입니다.",
        }));
      }

      if (name === "password") {
        const hasNumber = /\d/.test(sanitizedValue);
        const hasAllowedSpecialChar = /^[a-zA-Z0-9!#$@%^&*\~\-]*$/.test(
          sanitizedValue
        );
        const hasSpecialChar = /[!#$%^&*\~\-]/.test(sanitizedValue);

        setCheckingStatus((prev) => ({
          ...prev,
          password:
            sanitizedValue.length >= 8 &&
            hasNumber &&
            hasSpecialChar &&
            hasAllowedSpecialChar
              ? "사용 가능한 비밀번호입니다."
              : "비밀번호는 숫자, (!, #, $, @,%, ^, &, *, ~, -) 포함 8자 이상입니다.",
        }));
      }

      if (name === "confirmPassword") {
        setCheckingStatus((prev) => ({
          ...prev,
          confirmPassword:
            sanitizedValue === formData.password
              ? "비밀번호가 일치합니다."
              : "비밀번호가 일치하지 않습니다.",
        }));
      }
    }
  };
  const handleSignup = async () => {
    const { confirmPassword, ...apiData } = formData;

    if (formData.password !== formData.confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    console.log("회원가입 요청 데이터:", apiData); //

    try {
      const response = await AuthAPI.signup(apiData);
      console.log("서버 응답:", response);
      if (response.status === 200) {
        alert("회원가입이 완료되었습니다.");
        navigate("/");
      }
    } catch (error) {
      console.error("회원가입 요청 실패:", error.response || error.message);
      alert(error.response?.data || "회원가입 중 오류가 발생했습니다.");
    }
  };

  return (
    <SignupContainer>
      <Header>
        <Logo src={logo} alt="로고" onClick={() => navigate("/")} />
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
            <StatusMessage
              isValid={checkingStatus.name.includes("사용 가능한")}
              isVisible={!!formData.name}
            >
              {checkingStatus.name}
            </StatusMessage>
          </InputWrapper>

          {/* 닉네임 */}
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
              isVisible={!!formData.nickname}
            >
              {checkingStatus.nickname}
            </StatusMessage>
          </InputWrapper>

          {/* 이메일 */}
          <InputWrapper>
            <Input
              type="email"
              name="email"
              placeholder="이메일"
              value={formData.email}
              onChange={handleChange}
            />
            <StatusMessage
              isValid={checkingStatus.email.includes("올바른")}
              isVisible={!!formData.email}
            >
              {checkingStatus.email}
            </StatusMessage>
          </InputWrapper>

          {/* 비밀번호 */}
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
              isVisible={!!formData.password}
            >
              {checkingStatus.password}
            </StatusMessage>
          </InputWrapper>

          {/* 비밀번호 확인 */}
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
            <StatusMessage
              isValid={
                checkingStatus.confirmPassword === "비밀번호가 일치합니다."
              }
              isVisible={!!formData.confirmPassword}
            >
              {checkingStatus.confirmPassword}
            </StatusMessage>
          </InputWrapper>

          {/* 전화번호 */}
          <InputWrapper>
            <Input
              type="text"
              name="phone"
              placeholder="전화번호 ('-' 제외)"
              value={formData.phone}
              onChange={(e) => {
                let onlyNumbers = e.target.value.replace(/[^0-9]/g, ""); // 숫자만 허용

                // 입력 제한: 최대 11자리까지만 허용
                if (onlyNumbers.length > 11) {
                  onlyNumbers = onlyNumbers.slice(0, 11);
                }

                const startsWithValidPrefix =
                  onlyNumbers.startsWith("010") ||
                  onlyNumbers.startsWith("011");

                // 앞 3자리가 010 또는 011로 시작하지 않으면 입력 무시
                if (onlyNumbers.length <= 3 || startsWithValidPrefix) {
                  setFormData({ ...formData, phone: onlyNumbers });
                }

                // 유효성 검사 상태 업데이트
                setCheckingStatus((prev) => ({
                  ...prev,
                  phone:
                    onlyNumbers.length === 11 && startsWithValidPrefix
                      ? "올바른 전화번호입니다."
                      : "전화번호는 010 또는 011로 시작하는 11자리여야 합니다.",
                }));
              }}
            />
            <StatusMessage
              isValid={checkingStatus.phone === "올바른 전화번호입니다."}
            >
              {checkingStatus.phone}
            </StatusMessage>
          </InputWrapper>

          {/* 주소 */}
          <InputWrapper>
            <RegionSelect
              regionFilter={regionFilter}
              sidoOpt={sidoOpt}
              sigunguOpt={sigunguOpt}
              setSigunguOpt={setSigunguOpt}
              emdOpt={emdOpt}
              setEmdOpt={setEmdOpt}
              riOpt={riOpt}
              setRiOpt={setRiOpt}
              setSearchParams={setSearchParams}
              setRegionFilter={setRegionFilter}
              handleRegionChange={handleRegionChange}
              setSearchArea={setSearchArea}
            />
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
  transform: translateY(-100%);
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
  min-height: 18px;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 5px 20px;
`;

const Logo = styled.img`
  width: 135px;
  height: 100px;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 70px;
  font-weight: bold;
  color: #1b5e96;
`;

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const SignupBox = styled.div`
  display: flex;
  flex-direction: column;
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
  margin-bottom: 7px;

  .select-region {
    width: 100%;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 20px;
    &:hover {
      border-color: #007bff;
      box-shadow: 0 0 3px rgba(183, 0, 255, 0.4);
    }
  }
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
  margin-top: 10px;
`;

const Button = styled.button`
  width: 100%;
  padding: 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 20px;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
