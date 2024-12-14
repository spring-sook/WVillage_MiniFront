import styled, { keyframes } from "styled-components";
import mainImg from "./../images/Hallstatt-Cover.jpg";

//메인 크기
export const MainBody = styled.div`
  height: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 747px) {
    max-width: 747px;
  }
`;

// 추천 배너
export const RecommBox = styled.div`
  height: 500px;
  width: 100%;
  background-color: #f5f6fa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 747px) {
    max-width: 747px;
  }
  h2 {
    font-size: 25px;
    color: #1b5e96;
    z-index: 10;
  }
`;

export const MainRecomm = styled.div`
  height: 450px;
  width: 1900px;
  background-color: #f5f6fa;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden; /* 자식 요소가 화면을 넘지 않도록 */
  margin-top: -20px;
  @media (max-width: 747px) {
    width: 747px;
  }
  .swiper {
    width: 70%;
    position: relative;
    z-index: 1;
  }
`;

export const SlickBtnContainer = styled.div`
  display: flex;
  position: absolute;
  top: 120px;
  width: 80%;
  height: 200px;
  justify-content: space-between;
  align-items: center;
  z-index: 5;
`;

export const SlickBtn = styled.button`
  display: flex;
  position: relative;
  width: 50px; /* 버튼 크기 조정 */
  height: 50px;
  border: none;
  cursor: pointer;
  /* background-color: rgba(0, 0, 0, 0.5); */
  background-color: transparent;
  border-radius: 50%; /* 원형으로 만들기 */
  z-index: 10;
  /* transition: background-color 0.3s ease; */

  /* &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  } */

  &::before {
    content: "";
    position: absolute;
    top: 35%;
    left: 50%;
    width: 20px;
    height: 2px;
    background-color: #333; /* 화살표 색상 */
    transform: translateX(-50%) rotate(-45deg);
  }

  &::after {
    content: "";
    position: absolute;
    top: 60%;
    left: 50%;
    width: 20px;
    height: 2px;
    background-color: #333; /* 화살표 색상 */
    transform: translateX(-50%) rotate(45deg);
  }

  /* 다음 버튼(화살표 방향을 반대로 설정) */
  &.next::before {
    transform: translateX(-50%) rotate(45deg);
  }

  &.next::after {
    transform: translateX(-50%) rotate(-45deg);
  }
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
  height: 380px;
  width: 305px;
  background-color: white;
  box-shadow: 3px 3px 5px #707070;
  background-size: cover;
  background-position: center;
  &:hover {
    cursor: pointer;
  }
  h3 {
    margin-left: 5px;
    margin-top: 5px;
    white-space: nowrap; /* 텍스트가 한 줄로만 표시되게 함 */
    overflow: hidden; /* 텍스트가 넘치면 숨김 처리 */
    text-overflow: ellipsis; /* 넘치는 텍스트를 '...'으로 표시 */
  }
  p {
    color: #555555;
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
  background-image: url(${mainImg});
  background-size: cover; /* 이미지를 전체 영역에 맞춤 */
  background-position: center; /* 배경 이미지 위치 */
  background-repeat: no-repeat; /* 반복 방지 */

  .catch,
  .explain {
    opacity: 0; /* 처음엔 텍스트가 보이지 않음 */
    transform: translateX(50px); /* 텍스트를 왼쪽 밖으로 이동 */
    animation-duration: 1.5s; /* 애니메이션 지속 시간 */
    animation-timing-function: ease-out; /* 애니메이션 속도 */
    animation-fill-mode: forwards; /* 애니메이션 종료 후 상태 유지 */
    height: 130px;
    width: 35vw;

    background-color: transparent;
    display: flex;
    align-items: center;
    font-size: 30px;
    font-weight: bold;
    color: #1b5e96;
  }

  .catch {
    text-shadow: -2px -2px 0 #fff, /* 왼쪽 위 */ 2px -2px 0 #fff,
      /* 오른쪽 위 */ -2px 2px 0 #fff, /* 왼쪽 아래 */ 2px 2px 0 #fff; /* 오른쪽 아래 */
    animation-name: slideInCatch;
  }

  .explain {
    color: black;
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
  @media (max-width: 747px) {
    .explain {
      width: 300px;
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
  top: 60px;
  height: calc(100% - 60px); /* 약간 아래로 내려오게 */
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

export const Wrapper = styled.div`
  background-image: url(${mainImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh; /* 전체 화면 크기 */
  display: flex;
  flex-direction: column;
  flex-direction: column;
  position: relative;
`;

const slideIn = keyframes`
  from {
    transform: translateX(-100%); /* 화면 왼쪽에서 시작 */
    opacity: 0; /* 투명도 0 */
  }
  to {
    transform: translateX(0); /* 원래 위치로 */
    opacity: 1; /* 완전히 보임 */
  }
`;

// TextContainer 스타일
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /* 세로 가운데 정렬 */
  align-items: flex-start; /* 왼쪽 정렬 */
  margin-left: 20px; /* 왼쪽 여백 */
  height: 60%; /* 부모 컨테이너의 높이를 채움 */
  h1,
  h4 {
    color: #1b5e96; /* 텍스트 색상 */
    text-shadow: -2px -2px 0 #fff, /* 왼쪽 위 */ 2px -2px 0 #fff,
      /* 오른쪽 위 */ -2px 2px 0 #fff, /* 왼쪽 아래 */ 2px 2px 0 #fff; /* 오른쪽 아래 */
  }

  h1 {
    font-size: 80px;
    font-weight: bold;
    margin: 0;
    animation: ${slideIn} 3s ease-out; /* 슬라이드 애니메이션 추가 */
  }

  h4 {
    font-size: 40px;
    font-weight: normal;
    color: #333;
    margin-top: 10px;
    animation: ${slideIn} 3.5s ease-out; /* 약간 느리게 슬라이드 애니메이션 */
  }
`;
