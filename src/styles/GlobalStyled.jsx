import styled, { createGlobalStyle } from "styled-components";

export const headerHeight = "150px";
export const navHeight = "50px";

const GlobalStyled = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyled;
