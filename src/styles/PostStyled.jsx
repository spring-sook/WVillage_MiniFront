import styled from "styled-components";
import { headerHeight, navHeight } from "./GlobalStyled";

export const PostBody = styled.div`
  display: flex;
  width: 100%;
  min-height: calc(100vh - ${headerHeight} - ${navHeight});
`;

export const PostMainFilter = styled.div`
  display: flex;
  flex-direction: column;
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
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 2.5%;
  }

  .input-date-picker {
    width: 95%;
  }
`;

export const PostMainList = styled.div`
  display: flex;
  width: 80%;
  background-color: #b98230;
`;
