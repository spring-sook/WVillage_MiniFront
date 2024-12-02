import styled from "styled-components";

//메인 전체 크기
export const MainBody = styled.div`
  height: 920px;
  display: flex;
  flex-direction: column;
`;

// 추천 배너
export const MainRecomm = styled.div`
  height: 420px;
  background-color: lightblue;
`;

// 메인 배너
export const MainBanner = styled.div`
  height: 500px;
  background-color: lightcyan;
`;

export const BannerExplain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  height: 500px;
  .catch {
    height: 170px;
    width: 40vw;
    margin: 20px;
    background-color: gray;
  }
  .explain {
    height: 130px;
    width: 40vw;
    margin: 20px;
    background-color: gray;
  }
`;
