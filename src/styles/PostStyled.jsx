import styled from "styled-components";
import { headerHeight, navHeight } from "./GlobalStyled";

export const PostBody = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  /* min-height: calc(100vh - ${headerHeight} - ${navHeight}); */
  min-height: 700px;
  margin: 0 2%;
  @media (max-width: 747px) {
    flex-direction: column;
  }
`;

export const PostMainFilter = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 350px;
  min-width: 350px;
  @media (max-width: 747px) {
    width: 100%;
  }

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
  .regiontest {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    @media (max-width: 747px) {
      flex-direction: row;
      gap: 5px;
      margin-left: 80px;
      .select-region {
        width: 150px;
      }
    }
  }
  .select-region,
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
  .select-region {
    padding-left: 20px;
  }

  .condition-search {
    background-color: #1b5e96;
    color: white;
    transition: all 0.3s ease;
    &:hover {
      opacity: 0.7;
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
  /* background-color: #cbe5fd; */
  padding: 10px;
  @media (max-width: 747px) {
    width: 100%;
  }
  button {
    background-color: transparent;
    border: none;
    font-size: 14px;
    padding: 6px 20px;
    cursor: pointer;
  }

  .write-post-button {
    background-color: #1b5e96;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 1vh 3%;
    display: flex;
    position: absolute;
    right: 2.5vh;
    top: 1.8vh;
    color: white;
    transition: all 0.3s ease;
    &:hover {
      opacity: 0.7;
    }
  }
`;

export const PostDisplay = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 20px;
  padding: 1%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  row-gap: 30px;
  @media (max-width: 747px) {
    width: 80%;
    margin-left: 10%;
    margin-bottom: 100px;
  }
`;

export const PostContentTop = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  gap: 5vh;
  @media (max-width: 747px) {
    width: 100%;

    .post-content-top-left {
      margin-right: -50px;
      scale: 90%;
    }
    .input-date-picker {
      width: 80%;
    }
  }
  .post-content-img {
    width: 350px;
    height: 300px;
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
    z-index: 99;
  }

  .post-content-user {
    width: 350px;
    height: 50px;
    padding: 0 5px;
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
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
    font-size: 12px;
    margin-top: 1px;
    color: #444;
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
    display: flex;
    flex-direction: column;
    position: relative;

    .activate-button {
      display: flex;
      position: absolute;
      justify-content: center;
      align-items: center;
      right: -100px;
      font-size: 15px;
      border: none;
      background-color: #ccc;
      width: 80px;
      height: 30px;
      border-radius: 5px;
      cursor: pointer;
      @media (max-width: 747px) {
        top: -60%;
        right: -10%;
      }
    }
    .activate-button.disabled {
      background-color: #ccc;
    }

    .activate-button.disabled:hover {
      background-color: #a8a8a8;
    }

    .activate-button.enabled {
      background-color: #54c458;
    }

    .activate-button.enabled:hover {
      background-color: #47b94d;
    }
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

    span {
      font-size: 20px;
    }
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

  .calc-price {
    width: 80%;
    display: flex;
    justify-content: right;
    align-items: center;
    margin: 0 auto;
    font-size: 17px;
  }

  .post-reserve-button {
    display: flex;
    width: 100%;
    height: 10%;
    justify-content: center;
    transition: all 0.3s ease;
    &:hover {
      opacity: 0.7;
    }
  }

  .post-reserve-reset-button {
    display: inline-flex;
    align-items: center;
    width: auto;
    background-color: transparent;
    border: 1px solid #ccc;
    border-radius: 20px;
    padding: 4px 10px;
    margin-left: 15px;
    cursor: pointer;
    gap: 4px;
    transition: all 0.3s ease;
    &:hover {
      opacity: 0.7;
    }
  }

  .post-reserve-reset-button img {
    width: 15px;
    height: auto;
    margin: 0;
    position: static;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  position: absolute;
  top: 120px;
  width: 350px;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  z-index: 5;
`;

export const Button = styled.button`
  display: flex;
  position: relative;
  width: 30px;
  height: 30px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  z-index: 10;
  & + & {
    margin-left: 20px;
  }
  &::before {
    content: "";
    position: absolute;
    top: 39%;
    left: 45%;
    width: 10px;
    height: 2px;
    background-color: grey;
    transform: translate(-50%, -50%) rotate(-45deg);
  }
  &::after {
    content: "";
    position: absolute;
    top: 61%;
    left: 45%;
    width: 10px;
    height: 2px;
    background-color: grey;
    transform: translate(-50%, -50%) rotate(45deg);
  }
  & + &::before {
    position: absolute;
    top: 39%;
    left: 55%;
    width: 10px;
    height: 2px;
    transform: translate(-50%, -50%) rotate(45deg);
  }
  & + &::after {
    content: "";
    position: absolute;
    top: 61%;
    left: 55%;
    width: 10px;
    height: 2px;
    background-color: grey;
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

export const ReserveButton = styled.button`
  width: 80%;
  height: 100%;
  font-size: 16px;
  background-color: #1b5e96;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  color: white;
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.7;
  }

  &:active {
    transform: scale(0.99);
  }

  &:disabled {
    background-color: #ccc;
    cursor: none;
    pointer-events: none;
  }
`;

export const PostContentBottom = styled.div`
  width: 100%;
  min-height: 255px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  /* align-items: center; */
  @media (max-width: 747px) {
    max-width: 100%;
    padding: 10px 20px;
  }
  .bottom-menu {
    display: flex;
    justify-content: space-between;
    width: 1200px;
    padding: 10px 300px;
    font-size: 16px;
    margin: 0 auto;
    border-bottom: 1px solid #ccc;
    @media (max-width: 747px) {
      max-width: 100%;
      padding: 10px 20px;
    }
  }

  .line {
    width: 1px;
    height: 25px;
    background-color: black;
  }

  .bottom-menu p {
    cursor: pointer;
    flex: 1; /* 동일한 크기 */
    text-align: center;
    margin: 0 10px; /* 여백 추가 */
    min-width: 100px; /* 최소 너비 설정 */

    @media (max-width: 747px) {
      flex: 1; /* 동일한 비율로 유지 */
    }
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
  width: 500px;
  text-align: center;

  h3 {
    margin-bottom: 12px;
  }
  p {
    margin-bottom: 6px;
  }
`;

export const ModalButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #1b5e96; /* 기본 버튼 색상 */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.7;
  }

  /* '확인' 버튼과 '닫기' 버튼 사이 간격 띄우기 */
  &.reserve-confirm {
    margin-right: 10px; /* '확인' 버튼에 오른쪽 여백 추가 */
  }

  /* '닫기' 버튼 스타일 */
  &.reserve-close {
    background-color: #d3d3d3; /* 회색 배경 */
    transition: all 0.3s ease;
    &:hover {
      background-color: #a1a1a1; /* hover 시 더 어두운 회색 */
    }
  }
`;

export const PostWriteContainer = styled.div`
  width: 1000px;
  min-height: 500px;
  margin: 0 auto;
  @media (max-width: 747px) {
    width: 700px;
  }

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
    transition: all 0.3s ease;
  }

  .post-submit:hover {
    opacity: 0.7;
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
    transition: all 0.3s ease;
  }

  .file-upload-label:hover {
    opacity: 0.7;
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
    transition: all 0.3s ease;
  }

  .file-list button:hover {
    background-color: #e53935;
  }
`;
