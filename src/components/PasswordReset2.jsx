import React from "react";
import styled from "styled-components";
import { HeaderCom, FooterCom } from "../components/GlobalComponent";

const PasswordResetComplete = () => {
  return (
    <PageContainer>
      {/* 상단 헤더 */}
      <HeaderWrapper>
        <HeaderCom />
      </HeaderWrapper>

      {/* 본문 */}
      <Content>
        <MessageContainer>
          <Message>비밀번호가 성공적으로 변경되었습니다!</Message>
          <LinkButton href="/">로그인 페이지로 이동</LinkButton>
        </MessageContainer>
      </Content>

      {/* 하단 푸터 */}
      <FooterWrapper>
        <FooterCom />
      </FooterWrapper>
    </PageContainer>
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
  background-color: #f8f9fa;
`;

const FooterWrapper = styled.footer`
  flex-shrink: 0;
  background-color: #f8f9fa;
`;

const Content = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const MessageContainer = styled.div`
  text-align: center;
`;

const Message = styled.h1`
  margin-bottom: 100px;
  color: #333;
`;

const LinkButton = styled.a`
  color: white;
  background-color: #007bff;
  padding: 10px 10px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

export default PasswordResetComplete;
