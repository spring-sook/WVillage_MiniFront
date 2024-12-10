import styled from "styled-components";

export const UserProfileBox = styled.div`
  width: 400px;
  height: 750px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;

  .userInfo {
    position: absolute;
    top: 1%;
    left: 50%;
    transform: translateX(-50%) translateY(-80px);
    z-index: 2;
  }
  h4 {
    margin-top: 5px;
    color: #1b5e96;
    font-weight: bold;
    width: 300px;
  }

  .box {
    width: 350px;
    height: 600px; /* 자동 높이 조정 */
    border: 3px double #1b5e96;
    border-radius: 30px;
    position: relative;
    z-index: 0;
    display: flex;
    flex-direction: column; /* 자식 요소들을 세로로 배치 */
    align-items: center; /* 중앙 정렬 */
    justify-content: space-between;
    /* 내부 여백 추가 */
    padding: 85px 20px 20px;
  }

  .temp {
    position: relative;
    //top: 100px;
    //left: 50%;
    border-radius: 10px;
    //transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 90%;
    background-color: #95bfe5;
    font-size: 17px;
    color: #1b5e96;
    font-weight: bold;
    z-index: 100;

    .gauge {
      margin-left: 20px;
      height: 35px;
      width: 150px;
      background-color: white;
      border-radius: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      p {
        font-size: 15px;
        font-weight: bold;
        color: #1b5e96;
      }
      img {
        position: absolute;
        right: -20px;
        top: 50%;
        transform: translateY(-50%);
        width: 45px;
        height: 45px;
        border-radius: 50%;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
        background-color: white;
      }
    }
  }

  .option {
    color: #1b5e96;
    font-weight: bold;
    font-size: 18px;
    margin-top: 50%;

    p {
      margin: 10%;
      transition: color 0.3s ease, transform 0.3s ease; /* 부드러운 애니메이션 추가 */
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    p:hover {
      cursor: pointer;
      color: #3c8dbc;
      text-decoration: underline;
    }
  }
`;
