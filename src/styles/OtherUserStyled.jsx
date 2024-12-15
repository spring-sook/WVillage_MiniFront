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
    margin-top: 8px;
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
    font-size: 17px;
    color: #1b5e96;
    font-weight: bold;
    z-index: 100;
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
      border: 2px solid transparent;
      background-color: #d5e8f1;
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
      border: 2px solid transparent;
      transition: border 0.3s ease;
      background-color: #d5e8f1;

      p {
        font-size: 16px;
        font-weight: bold;
        color: #1b5e96;
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
  @media (max-width: 747px) {
    width:100%;
    height: 250px;
    margin-bottom: -80px;
  .userInfo {
    position: absolute;
    top: -50%;
    left: 48%;
    transform: translateX(-50%);
    z-index: 2;
    display: flex;
    h4 {
      padding-top: 10px;
    }
  }

  .box {
    margin-top: 100px;
    width: 90%; /* 박스의 너비를 모바일 화면에 맞게 조정 */
    height: 180px;
    padding: 20px;
    border: 3px double #1b5e96;
    border-radius: 30px;
    position: relative;
    z-index: 1;
  }

  /* 온도 섹션 및 프로필 이미지 크기 조정 */
  .temp {
    position: absolute;
    top: -50px;
    left: 30%;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 80%;
    font-size: 16px;
    font-weight: bold;
    .gauge {
    margin-left: -150px;
  }
  }

}
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: rgba(255, 77, 79, 0.8);
  color: white;
  border: none;
  height: 35px;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 15px;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;
  @media (max-width: 747px) {
    margin-top: 10px;
    margin-bottom: -10px;
  }
  &:hover {
    background-color: rgba(255, 120, 117, 0.7);
  }

  &:focus {
    outline: none;
  }
  &:active {
    background-color: #ff2a2a;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); /* 반투명 배경 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* 다른 내용 위에 나타나게 */
`;

// 모달 내용 박스
export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
  text-align: center;

  h2 {
    margin-bottom: 10px;
    font-size: 24px;
  }

  p {
    margin-bottom: 20px;
    font-size: 16px;
  }
  .ReportButton {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    button {
      background-color: #1b5e96;
      color: white;
      border: none;
      padding: 10px;
      border-radius: 10px;
      cursor: pointer;
      font-size: 16px;
      transition: all 0.3s ease;

      &:hover {
        opacity: 0.7;
      }
    }
  }
`;
export const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  resize: vertical;
  font-size: 16px;
`;

export const Review = styled.div`
@media (max-width: 747px) {
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    height: 8px; /* 스크롤바 높이 (x축에서는 높이) */
  }

  &::-webkit-scrollbar-thumb {
    background: #1b5e96; /* 스크롤바 색상 */
    border-radius: 4px; /* 스크롤바 둥근 모서리 */
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555; /* 스크롤바 hover 시 색상 */
  }

  &::-webkit-scrollbar-track {
    background: #f4f4f4; /* 스크롤바 트랙 배경색 */
    border-radius: 4px; /* 트랙 둥근 모서리 */
  }
}
  .container {
    height: 330px;
    width: 250px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 15px;
    @media (max-width: 747px) {
      height: 100px;
      gap: 0px;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      
    }
  }

  .review-item {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin-left: -10px;
    @media (max-width: 747px){
    flex-direction: column;
    width:50%;
    justify-content: center;
    
  }
  }

  .review-tag {
    padding: 8px 15px;
    border: 1px solid black;
    border-radius: 50px;
    font-weight: bold;
    &.good {
      border-color: #a4d8b9;
    }
    &.bad {
      border-color: #ecb1ab;
    }
  }

  .review-count {
    color: #555;
    text-align: right;
  }
`;
