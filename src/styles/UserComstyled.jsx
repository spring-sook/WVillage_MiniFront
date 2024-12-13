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
  h4 {
    margin-top: 8px;
    color: #1b5e96;
    font-weight: bold;
    width: 300px;
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
    top: 100px;
    left: 50%;
    border-radius: 10px;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 80%;
    font-size: 17px;
    font-weight: bold;
    img {
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
      width: 70px;
      height: 70px;
      border-radius: 50%;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
      background-color: white;
      z-index: 2;
      cursor: pointer;
      border: 2px solid transparent;
      transition: border 0.3s ease;
      background-color: #d5e8f1;
      &:hover {
        border: 1px solid #1b5e96;
      }
    }
  }
  .gauge {
    margin-left: 20px;
    height: 35px;
    width: 200px;
    background-color: white;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    border: 2px solid transparent;
    transition: border 0.3s ease;
    background-color: #d5e8f1;

    p {
      font-size: 16px;
      font-weight: bold;
      color: #1b5e96;
    }
  }
  .option {
    color: #1b5e96;
    font-weight: bold;
    font-size: 18px;
    margin-top: 55%;

    p {
      margin: 10%;
      transition: color 0.3s ease, transform 0.3s ease; /* 부드러운 애니메이션 추가 */
      cursor: pointer;
    }

    p:hover,
    p.selected {
      color: #3c8dbc;
      text-decoration: underline;
    }
  }
  
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: fadeIn 0.3s ease; /* 페이드인 애니메이션 추가 */

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 500px;
    animation: scaleUp 0.3s ease; /* 확대 애니메이션 추가 */

    @keyframes scaleUp {
      from {
        transform: scale(0.8);
      }
      to {
        transform: scale(1);
      }
    }
    h2 {
      margin-bottom: 10px;
    }

    button {
      margin-top: 20px;
      padding: 10px 20px;
      background-color: #1b5e96;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-weight: bold;
      transition: background-color 0.3s;

      &:hover {
        background-color: #145a86;
      }
    }
    .warning {
      color: #e03838;
      font-weight: bold;
      margin-top: 10px;
      font-size: 15px;
    }
    .tier-intro {
      margin-top: 10px;
      font-size: 13px;
    }
  }
`;
// temp-info와 tier 관련 스타일
export const TempInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
`;

export const Tier = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 11px;

  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;

    h3 {
      font-size: 18px;
      font-weight: bold;
      color: #1b5e96;
    }

    p {
      font-size: 14px;
      color: #333;
    }
  }
`;
