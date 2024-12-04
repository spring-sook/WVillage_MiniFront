import styled from "styled-components";

export const UserMain = styled.div`
  display: flex;
  align-items: center;
`;

export const PointBox = styled.div`
  width: 80%;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  .select {
    width: 80%;
    height: 100px;
    background-color: #cccccc;
    display: flex;
    justify-content: center;
    align-items: center; /* 세로로 중앙 정렬 */
    gap: 100px; /* 요소들 사이의 간격을 줄임 */

    p {
      font-size: 18px;
      font-weight: bold;
    }

    .point-display {
      font-size: 24px;
      color: #333;
      font-weight: bold;
      background-color: white;
      width: 200px;
      text-align: center;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;

  button {
    width: 100px;
    height: 40px;
    background-color: #cccccc;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;

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
  width: 80%;
  height: 450px;
  background-color: antiquewhite;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  color: #444;
`;

export const AccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  text-align: center;

  label {
    font-size: 16px;
    font-weight: bold;
  }

  select {
    padding: 10px;
    font-size: 16px;
    width: 220px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  button {
    width: 220px;
    height: 40px;
    background-color: #1b5e96;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
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
