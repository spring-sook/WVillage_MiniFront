import styled from "styled-components";
import { headerHeight, navHeight } from "./GlobalStyled";

export const PostBody = styled.div`
  display: flex;
  width: 100%;
  min-height: calc(100vh - ${headerHeight} - ${navHeight});
`;

export const PostMainFilter = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 20%;
  background-color: antiquewhite;

  p {
    width: 100%;
    height: 40px;
    padding-left: 10px;
    display: flex;
    align-items: center;
    background-color: blueviolet;
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

  .div-datepicker {
    display: flex;
    flex-direction: column;
    width: 95%;
    margin-top: 2%;
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
    margin-top: 1vh;
    text-align: center;
    color: #777;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 20px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  .select-region-button {
    margin-top: 1vh;
    width: 95%;
    height: 35px;
    background-color: #fff;
    color: #777;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 20px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;

export const PostMainList = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 80%;
  background-color: #b98230;
  padding: 1%;

  button {
    background-color: transparent;
    border: none;
    font-size: 14px;
    padding: 10px;
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
  /* background-color: blanchedalmond; */
  width: 100%;
  height: 100%;
  padding: 1%;
`;

export const PostContentTop = styled.div`
  background-color: #93dada;
  width: 100%;
  height: 400px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  gap: 5vh;

  .post-content-img {
    width: 350px;
    height: 350px;
    background-color: #71db9a;
  }

  .post-content-reserve {
    width: 500px;
    height: 350px;
    background-color: blanchedalmond;
  }

  .post-content-title {
    margin: 20px 30px;
    font-size: 23px;
    font-weight: 800;
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
  }

  .date-picker {
    display: flex;
    /* justify-content: center; */
    align-items: center;
    /* border: 1px solid #aaa; */
    border-radius: 20px;
    margin-top: 40px;
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
    background-color: #fff;
  }

  .input-date-picker:focus {
    outline: none; // 포커스 시 검은색 테두리 제거
  }
`;
