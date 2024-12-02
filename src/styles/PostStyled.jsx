import styled from "styled-components";
import { headerHeight, navHeight } from "./GlobalStyled";

export const Container = styled.div`
  margin: 0 2%;
`;

export const PostBody = styled.div`
  display: flex;
  width: 100%;
  min-height: calc(100vh - ${headerHeight} - ${navHeight});
`;

export const PostMainFilter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  background-color: antiquewhite;

  p {
    width: 100%;
    height: 40px;
    margin-left: 10px;
    display: flex;
    align-items: center;
    background-color: blueviolet;
  }

  .div-datepicker {
    display: flex;
    flex-direction: column;
    width: 95%;
    margin-top: 2%;
  }

  .input-date-picker {
    width: 100%;
  }

  .react-datepicker {
    display: flex;
    position: absolute;
    left: -50px;
  }

  .react-datepicker__day--outside-month {
    color: #a8a8a8;
    pointer-events: none;
  }

  .input-date-picker {
    height: 35px;
    margin-top: 1vh;
    text-align: center;
    font-size: 2.15vh;
  }

  button {
    margin-top: 1vh;
    width: 95%;
    height: 35px;
    background-color: #fff;
    font-size: 2.15vh;
  }
`;

export const PostMainList = styled.div`
  display: flex;
  width: 80%;
  background-color: #b98230;
`;
