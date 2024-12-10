import styled from "styled-components";

//메인 크기
export const MainBody = styled.div`
  height: 950px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

// 추천 배너
export const RecommBox = styled.div`
  height: 450px;
  width: 100%;
  background-color: #f5f6fa;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const MainRecomm = styled.div`
  height: 450px;
  width: 1300px;
  background-color: #f5f6fa;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden; /* 자식 요소가 화면을 넘지 않도록 */
`;

export const BoxContainer = styled.div`
  display: flex;
  transition: transform 0.3s ease; /* 슬라이드 효과 */
  width: ${(props) =>
    props.slideWidth ||
    "auto"}; /* 이미지가 몇 개 보일지에 맞게 동적으로 조정 */
`;

export const Box = styled.div`
  margin: 0 10px; /* 간격을 조정 */
  height: 300px;
  width: 305px;
  border: 1px solid black; /*테두리 삭제?*/
  box-shadow: 3px 3px 5px #707070;
  background-size: cover;
  background-position: center;
  border-radius: 5% 0 5% 0;
  &:hover {
    cursor: pointer;
  }
  h3 {
    white-space: nowrap; /* 텍스트가 한 줄로만 표시되게 함 */
    overflow: hidden; /* 텍스트가 넘치면 숨김 처리 */
    text-overflow: ellipsis; /* 넘치는 텍스트를 '...'으로 표시 */
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 50%;
  ${(props) => (props.left ? "left: 10px;" : "right: 10px;")}
  transform: translateY(-50%);
  background-color: transparent;
  color: #145a86;
  border: none;
  padding: 4px;
  cursor: pointer;
  z-index: 10;
  scale: 110%;
  /* 비활성화된 버튼 스타일 */
  &:disabled {
    display: none;
    cursor: not-allowed;
  }
`;

// 메인 배너

export const MainBanner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  background-color: #d5e8f1;
  height: 500px;
  width: 100%;
  overflow: hidden; /* 자식 요소가 화면을 넘지 않도록 설정 */

  .catch,
  .explain {
    opacity: 0; /* 처음엔 텍스트가 보이지 않음 */
    transform: translateX(50px); /* 텍스트를 왼쪽 밖으로 이동 */
    animation-duration: 1.5s; /* 애니메이션 지속 시간 */
    animation-timing-function: ease-out; /* 애니메이션 속도 */
    animation-fill-mode: forwards; /* 애니메이션 종료 후 상태 유지 */
    height: 130px;
    width: 35vw;
    margin: 20px;
    background-color: transparent;
    display: flex;
    align-items: center;
    font-size: 30px;
    font-weight: bold;
  }

  .catch {
    animation-name: slideInCatch;
  }

  .explain {
    animation-name: slideInExplain;
    animation-delay: 1s; /* 'explain'은 'catch'가 끝난 후 1초 뒤에 시작 */
  }

  /* catch 텍스트 애니메이션 */
  @keyframes slideInCatch {
    0% {
      opacity: 0; /* 처음에 흐림 */
      transform: translateX(50px); /* 왼쪽 밖으로 시작 */
    }
    100% {
      opacity: 1; /* 마지막엔 선명해짐 */
      transform: translateX(0); /* 원래 위치로 이동 */
    }
  }

  /* explain 텍스트 애니메이션 */
  @keyframes slideInExplain {
    0% {
      opacity: 0; /* 처음에 흐림 */
      transform: translateX(50px); /* 왼쪽 밖으로 시작 */
    }
    100% {
      opacity: 1; /* 마지막엔 선명해짐 */
      transform: translateX(0); /* 원래 위치로 이동 */
    }
  }
`;
export const ChatWidget = styled.div`
  position: fixed;
  bottom: 40px;
  right: 50px;
  width: 60px;
  height: 60px;
  background-color: #1b5e96;
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  z-index: 1000;

  &:hover {
    background-color: #145a86;
  }
  svg {
    font-size: 24px;
  }
`;
// 인트로 스타일-------------------------------------------------------------------------------------------------------
export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start; /* 왼쪽 정렬 유지 */
  padding: 0 20px;

  .logo-img {
    width: 100px;
  }

  p {
    padding: 10px;
    font-size: 50px;
    font-weight: bold;
    color: #1b5e96;
  }

  .menu-icon {
    font-size: 30px;
    color: #1b5e96;
    cursor: pointer;
    margin-left: auto; /* 오른쪽으로 밀어냄 */
  }
`;

export const Sidebar = styled.div`
  position: fixed;
  right: ${(props) => (props.isOpen ? "0" : "-250px")}; /* 우측 끝 기준 */
  height: calc(100% - 50px); /* 약간 아래로 내려오게 */
  width: 250px;
  background-color: #ffffff;
  transition: right 0.5s ease; /* 부드럽게 열리고 닫히는 애니메이션 */
  padding: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  border-radius: 10px 0 0 0;

  .close-btn {
    align-self: flex-end; /* 닫기 버튼을 오른쪽에 배치 */
    font-size: 20px;
    color: #1b5e96;
    cursor: pointer;
    margin-bottom: 20px;

    &:hover {
      color: #145a86;
    }
  }

  .sidebar-item {
    margin: 10px;
    font-size: 18px;
    font-weight: bold;
    color: #1b5e96;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;
