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
  width: 200px;
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
  .catch {
    height: 170px;
    width: 40vw;
    margin: 20px;
    background-color: transparent;

    display: flex;
    align-items: center;
  }
  .explain {
    height: 130px;
    width: 40vw;
    margin: 20px;
    background-color: transparent;

    display: flex;
    align-items: center;
  }
`;
