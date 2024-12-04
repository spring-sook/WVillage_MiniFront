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
    background-color: rgba(0, 0, 0, 0.2);
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
