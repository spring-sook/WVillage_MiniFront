import React, { useState } from "react";
import styled from "styled-components";
import { HeaderCom, FooterCom } from "../../components/GlobalComponent"; // 헤더와 푸터 가져오기
import { useNavigate } from "react-router-dom";
import { Container } from "../../styles/GlobalStyled";

const FindMail = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [result, setResult] = useState("");
  const navigate = useNavigate();

  const handleFindMail = () => {
    if (name && phoneNumber) {
      setResult("아이디는 example@mail.com 입니다.");
    } else {
      setResult("이름과 전화번호를 입력해주세요.");
    }
  };

  return (
    <Container>
      <PageContainer>
        <HeaderWrapper>
          <HeaderCom />
        </HeaderWrapper>
        <Content>
          <FindMailContainer>
            <Title>아이디 찾기</Title>
            <Description>가입된 이름 / 전화번호를 입력하세요</Description>
            <InputWrapper>
              <Label>이름</Label>
              <Input
                type="text"
                placeholder="이름을 입력하세요"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </InputWrapper>
            <InputWrapper>
              <Label>전화번호</Label>
              <Input
                type="text"
                placeholder="전화번호를 입력하세요"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </InputWrapper>
            <Button onClick={handleFindMail}>확인</Button>
            {result && <ResultBox>{result}</ResultBox>}

            {/* 비밀번호 재설정 버튼 추가 */}
            <SecondaryButton onClick={() => navigate("/passwordreset")}>
              비밀번호 재설정
            </SecondaryButton>
          </FindMailContainer>
        </Content>

        {/* 하단 푸터 */}
        <FooterWrapper>
          <FooterCom />
        </FooterWrapper>
      </PageContainer>
    </Container>
  );
};

// Styled Components
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const HeaderWrapper = styled.header`
  flex-shrink: 0;
  background-color: #ffffff;
`;

const FooterWrapper = styled.footer`
  flex-shrink: 0;
  background-color: #ffffff;
`;

const Content = styled.main`
  flex: 1;
  padding: 10px 20px; /* 기존보다 패딩을 줄임 */
  display: flex;
  justify-content: center;
  align-items: flex-start; /* 컨텐츠를 상단에 정렬 */
`;

const FindMailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 20px; /* 헤더와의 간격 */
  width: 100%;
  max-width: 500px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const Description = styled.p`
  margin-bottom: 20px;
`;

const InputWrapper = styled.div`
  margin-bottom: 15px;
  width: 100%;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const SecondaryButton = styled(Button)`
  margin-top: 10px;
  background-color: #6c757d;

  &:hover {
    background-color: #5a6268;
  }
`;

const ResultBox = styled.div`
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #f8f8f8;
  border-radius: 5px;
  color: #333;
`;

export default FindMail;
