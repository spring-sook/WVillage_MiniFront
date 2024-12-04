import styled from "styled-components";

export const Usermy = styled.div`
  width: 400px;
  height: 750px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;
  .usermy {
    position: absolute; /* 부모 컨테이너 기준으로 배치 */
    top: 1%; /* 위쪽에 위치 */
    left: 50%; /* 가로 정중앙 */
    transform: translateX(-50%); /* 가운데 정렬 */
    z-index: 2; /* .box 위로 올라오도록 설정 */
  }
  .box {
    width: 350px;
    height: 600px;
    border: 2px double #1b5e96;
    border-radius: 5%;

    position: relative; /* 기본 설정 */
    z-index: 1; /* .usermy보다 뒤로 배치 */
  }
  .temp {
    margin: 80px 0 0 0;
    background-color: aliceblue;
  }
  .option {
    color: #1b5e96;
    font-weight: bold;
    font-size: 20px;
    margin-top: 80px;
    p {
      margin: 30px;
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`;