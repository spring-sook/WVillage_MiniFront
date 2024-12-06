import styled from "styled-components";

export const EditProfileBox = styled.div`
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
export const EditProfileContainer = styled.div`
  width: 78%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Edit = styled.div`
  width: 90%;
  height: 610px;
  background-color: #d5e8f1;
`;
