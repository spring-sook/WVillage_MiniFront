import styled from "styled-components";

export const Usermy = styled.div`
  width: 400px;
  height: 750px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  .usermy {
    position: absolute;
    top: 1%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
  }
  .box {
    width: 350px;
    height: 600px;
    border: 3px double #1b5e96;
    border-radius: 30px;
    position: relative;
    z-index: 1; /* .usermy보다 뒤로 배치 */
  }
  .temp {
    position: absolute;
    top: 80px;
    left: 50%;
    border-radius: 10px;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 80%;
    background-color: #95bfe5;
    font-size: 17px;
    color: #1b5e96;
    font-weight: bold;
    .gauge {
      margin-left: 20px;
      height: 35px;
      width: 150px;
      background-color: white;
      border-radius: 50px;

      display: flex;
      justify-content: center;
      align-items: center;

      p {
        font-size: 15px;
        font-weight: bold;
        color: #1b5e96;
        text-align: center;
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
