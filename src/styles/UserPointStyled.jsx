import styled from "styled-components";

export const PointBox = styled.div`
  width: 78%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: #1b5e96;
  .select {
    width: 90%;
    height: 100px;
    background-color: #d5e8f1;
    display: flex;
    justify-content: center;
    align-items: center; /* 세로로 중앙 정렬 */
    gap: 10%; /* 요소들 사이의 간격을 줄임 */

    p {
      font-size: 18px;
      font-weight: bold;
      width: 100px;
    }

    .point-display {
      font-size: 18px;
      color: #333;
      font-weight: bold;
      background-color: white;
      width: 200px;
      height: 40px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
    }
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  button {
    width: 100px;
    height: 40px;
    background-color: #f5f6fa;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;
    color: #1b5e96;

    &.active {
      background-color: #1b5e96;
      color: white;
    }

    &:hover {
      background-color: #145a86;
      color: white;
    }
  }
`;
export const ChargeBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 500px;
  background-color: #f5f6fa;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  color: #444;
  button {
    width: 250px;
    height: 50px;
    padding: 12px;
    font-size: 18px;
    background-color: #1b5e96;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-top: 20px;

    &:hover {
      background-color: #145a86;
    }
  }
  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const ChargeRefundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-top: 20px;
  width: 100%;
  padding: 0 20px;

  p {
    font-size: 16px;
    font-weight: bold;
    color: #333;
  }

  input {
    width: 500px;
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-top: 5px;
    outline: none;

    &:focus {
      border-color: #1b5e96;
    }
  }
`;

export const AccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  text-align: center;
  justify-content: center;
  align-items: center;

  label {
    font-size: 16px;
    font-weight: bold;
  }

  select {
    padding: 10px;
    font-size: 16px;
    width: 500px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  button {
    width: 130px;
    height: 40px;
    background-color: #95bfe5;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 10px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #145a86;
    }
  }

  p {
    font-size: 16px;
    color: #333;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999; /* 다른 요소보다 위에 배치 */

  display: flex;
  justify-content: center;
  align-items: center;

  .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    width: 500px;
    height: 400px;
    text-align: center;

    h2 {
      margin-top: 10px;
      margin-bottom: 30px;
    }

    label {
      display: block;
      margin-bottom: 10px;
      font-size: 16px;
    }

    input,
    select {
      width: 100%;
      padding: 10px;
      margin-bottom: 20px;
      border-radius: 5px;
      border: 1px solid #ccc;
    }

    .button-container {
      margin-top: 10px;
      display: flex;
      flex-direction: column; /* 세로 정렬 */
      align-items: center; /* 가운데 정렬 */

      button {
        width: 80%;
        padding: 12px;
        background-color: #1b5e96;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
        margin-top: 10px;

        &:hover {
          background-color: #145a86;
        }
      }

      button:nth-child(2) {
        background-color: #ccc;
        margin-top: 5px;

        &:hover {
          background-color: #999;
        }
      }
    }
  }
`;
