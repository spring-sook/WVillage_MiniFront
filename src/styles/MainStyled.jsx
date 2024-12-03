import styled from "styled-components";

//메인 크기
export const MainBody = styled.div`
  height: 920px;
  display: flex;
  flex-direction: column;
`;

// 추천 배너
export const MainRecomm = styled.div`
  height: 420px;
  background-color: lightblue;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden; /* 자식 요소가 화면을 넘지 않도록 */
`;

export const BoxContainer = styled.div`
  display: flex;
  transition: transform 0.3s ease; /* 슬라이드 효과 */
`;

export const Box = styled.div`
  margin: 0 10px; /* 간격을 조정 */
  height: 300px;
  width: 300px;
  border: 1px solid black;
  background-size: cover;
  background-position: center;
`;

export const Button = styled.button`
  position: absolute;
  top: 50%;
  ${(props) => (props.left ? "left: 10px;" : "right: 10px;")}
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
  border-radius: 50%;

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
  background-color: lightcyan;
  height: 500px;
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
