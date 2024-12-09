import styled from "styled-components";
import { headerHeight, navHeight } from "./GlobalStyled";

export const PostBody = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  /* min-height: calc(100vh - ${headerHeight} - ${navHeight}); */
  min-height: 700px;
  margin: 0 2%;
`;

export const PostMainFilter = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 300px;

  h2 {
    margin-bottom: 20px;
  }

  h3 {
    font-size: 22px;
    margin-bottom: 20px;
  }

  p {
    width: 90%;
    height: 40px;
    padding-left: 10px;
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
  }

  hr {
    width: 90%;
    background-color: #ccc;
  }

  .reset-button {
    display: flex;
    position: absolute;
    right: 10px;
    background-color: transparent;
    border: 1px solid #ccc;
    border-radius: 20px;
    padding: 4px;
    cursor: pointer;
  }

  img {
    width: 15px;
    display: flex;
    position: relative;
    right: 0;
    top: 3px;
    margin-left: 2px;
  }

  /* .div-datepicker {
    display: flex;
    flex-direction: column;
    width: 95%;
    margin-top: 2.5%;
  }

  .input-date-picker {
    // DatePicker
    width: 100%;
    caret-color: transparent;
  }

  .react-datepicker {
    // 달력 통으로
    display: flex;
    position: absolute;
    left: -50px;
  }

  .react-datepicker__day--outside-month {
    // 오늘 이전 날들은 선택 불가
    color: #a8a8a8;
    pointer-events: none;
  }

  .input-date-picker {
    // 시작일, 종료일 input
    height: 35px;
    margin-top: 2vh;
    text-align: center;
    color: #777;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 20px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  } */

  .select-region-button,
  .condition-search {
    margin-top: 2vh;
    width: 85%;
    height: 35px;
    background-color: #fff;
    color: #777;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 20px;
    cursor: pointer;
  }

  .condition-search {
    background-color: #95bfe5;
    color: black;

    &:hover {
      background-color: #1b5e96;
      color: white;
    }

    &:active {
      transform: scale(0.99);
    }
  }
`;

export const PostMainList = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 80%;
  margin: 0 8% 0 2%;
  background-color: #cbe5fd;
  padding: 10px;

  button {
    background-color: transparent;
    border: none;
    font-size: 14px;
    padding: 6px 20px;
    cursor: pointer;
  }

  .write-post-button {
    background-color: #ccc;
    border: 1px solid #ccc;
    border-radius: 3px;
    padding: 1vh 3%;
    display: flex;
    position: absolute;
    right: 2.5vh;
    top: 1.8vh;
  }
`;

export const PostDisplay = styled.div`
  width: 100%;
  height: 100%;
  padding: 1%;
`;

export const PostContentTop = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  gap: 5vh;

  .post-content-img {
    width: 350px;
    height: 300px;
    background-color: #71db9a;
    display: flex;
    justify-content: center;
    position: relative;
  }

  .bookmark-icon {
    width: 50px;
    height: 50px;
    display: flex;
    position: absolute;
    left: 5px;
    cursor: pointer;
  }

  .post-content-user {
    width: 350px;
    height: 50px;
    padding: 0 5px;
    display: flex;
    align-items: center;
    position: relative;
  }

  .post-content-userinfo {
    margin-left: 5px;
  }

  .post-content-nick {
    font-size: 16px;
    font-weight: 600;
  }

  .post-content-temp {
    display: flex;
    position: absolute;
    align-items: center;
    right: 10px;
    font-size: 16px;
    font-weight: bold;
  }

  .post-content-region {
    font-size: 14px;
  }

  .temp-img {
    height: 40px;
    margin-right: 5px;
  }

  .post-content-reserve {
    width: 500px;
    height: 350px;
  }

  .post-content-title {
    margin: 20px 30px;
    font-size: 23px;
    font-weight: 800;
  }

  .post-content-cnt {
    font-size: 12px;
    font-weight: normal;
    color: #777;
    margin: 5px 0 0 2px;
  }

  .post-content-price {
    margin: 20px 30px;
    font-size: 18px;
    font-weight: 500;
  }

  .line {
    width: 1px;
    height: 25px;
    background-color: #ccc;
    margin: 0 4px;
  }

  .date-picker {
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid #aaa; */
    border-radius: 20px;
    margin-top: 30px;
  }

  .react-datepicker__day--outside-month {
    // 오늘 이전 날들은 선택 불가
    color: #a8a8a8;
    pointer-events: none;
  }

  .input-date-picker {
    // 시작일, 종료일 input
    height: 35px;
    text-align: center;
    color: #777;
    font-size: 17px;
    border: none;
    border-radius: 20px;
    background-color: transparent;
    cursor: pointer;
    caret-color: transparent; // 키보드 커서 없애기
  }

  .input-date-picker:hover {
    background-color: #ddd;
  }

  .input-date-picker:focus {
    outline: none; // 포커스 시 검은색 테두리 제거
  }

  .post-reserve-button {
    display: flex;
    width: 100%;
    height: 10%;
    justify-content: center;
  }

  .post-reserve-reset-button {
    cursor: pointer;
  }
`;

export const ReserveButton = styled.button`
  width: 80%;
  height: 100%;
  font-size: 16px;
  background-color: #95bfe5;
  border: none;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background-color: #1b5e96;
    color: white;
  }

  &:active {
    transform: scale(0.99);
  }
`;

export const PostContentBottom = styled.div`
  width: 100%;
  min-height: 200px;
  background-color: #56943a;
  display: flex;
  flex-direction: column;
  align-items: center;

  .bottom-menu {
    display: flex;
    justify-content: space-between;
    width: 1200px;
    padding: 10px 300px;
    font-size: 16px;
    background-color: #f0cca0;
  }

  .line {
    width: 1px;
    height: 25px;
    background-color: black;
  }

  p {
    cursor: pointer;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  text-align: center;

  h3 {
    margin-bottom: 12px;
  }
`;

export const ModalButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #1b5e96;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #95bfe5;
  }
`;

export const PostWriteContainer = styled.div`
  width: 1000px;
  min-height: 500px;
  margin: 0 auto;

  h2 {
    margin: 40px 0 10px;
  }

  .post-top {
    display: flex;
    justify-content: space-between;
  }

  .post-submit {
    margin: 40px 10px 10px;
    padding: 0 20px;
    box-sizing: border-box;
    font-size: 14px;
    font-weight: bold;
    color: white;
    border: none;
    background-color: #1b5e96;
    border-radius: 5px;
    cursor: pointer;
  }

  .post-submit:hover {
    background-color: #95bfe5;
  }

  .post-submit:active {
    transform: scale(0.99);
  }

  .post-submit:disabled {
    background-color: #ccc;
    transform: none;
  }
`;

export const PostWriteContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin: 10px 0;

  .post-write-place {
    padding: 5px 30px 20px;
    display: flex;
    align-items: center;
    height: 50px;
    width: 95%;
    font-size: 17px;
  }

  .post-write-addr {
    width: 40%;
    border: none;
    border-bottom: 1px solid #ccc;
    margin-left: 10px;
    padding: 10px;
    font-size: 17px;
  }

  .post-write-title {
    margin-bottom: 20px;
    height: 50px;
    width: 95%;
    font-size: 16px;
    box-sizing: border-box;
    padding: 5px 20px;
    background-color: #eee;
    border: none;
    border-radius: 10px;

    &:focus {
      background-color: transparent;
    }
  }

  .post-write-place {
    width: 100%;
    height: 50px;
    display: flex;
  }

  .post-write-context {
    margin-bottom: 30px;
    border: 1px solid #ccc;
    width: 95%;
    min-height: 200px;
    padding: 8px;
  }
`;

export const PostWriteSelect = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  margin: 20px 0;

  .post-write-dropbox {
    border: none;
    border-bottom: 1px solid #ccc;
    font-size: 16px;
    padding: 10px;
    appearance: none; /* 기본 브라우저 스타일 제거 */
    background-size: 10px;
    background: no-repeat;
    background-position: right 10px center;
    cursor: pointer;
  }

  .post-write-category {
    width: 45%;
    margin-right: 5%;
  }

  .post-write-hour {
    width: 22%;
    text-align: right;
    font-size: 17px;
    padding: 13px 10px;
  }

  .post-write-price {
    border: none;
    border-bottom: 1px solid #ccc;
    margin-right: 10px;
    padding: 10px;
    width: 20%;
    font-size: 17px;
  }

  span {
    font-size: 17px;
    padding-top: 12px;
  }

  select option {
    color: #333;
    padding: 10px;
    font-size: 16px;
  }
`;

export const Attachment = styled.div`
  width: 95%;
  margin-bottom: 20px;

  span {
    font-size: 14px;
  }

  .file-upload-label {
    display: inline-block;
    background-color: #1b5e96;
    color: white;
    padding: 8px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
  }

  .file-upload-label:hover {
    background-color: #95bfe5;
  }

  .file-upload-label:active {
    transform: scale(0.99);
  }

  .file-list {
    margin-top: 10px;
    padding: 0 10px;
    border: 1px solid #ccc;
    width: 100%;
    height: 100px;
    overflow-y: auto;
    box-sizing: border-box;
  }

  .file-list ul {
    list-style-type: none;
    padding: 0;
  }

  .file-list li {
    background-color: #f1f1f1;
    padding: 3px;
    margin: 5px 0;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
  }

  .file-list button {
    background-color: #f44336;
    color: white;
    border: none;
    padding: 3px 10px;
    font-size: 14px;
    border-radius: 5px;
    cursor: pointer;
  }

  .file-list button:hover {
    background-color: #e53935;
  }
`;
