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

export const Container = styled.div`
  margin: 0 2%;
`;

// 헤더 스타일
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 20px;
  margin: 5px;
  .logo {
    height: 100px;
    width: 100px;
    background-color: aliceblue;
  }
  .name {
    height: 100px;
    width: 200px;
    background-color: bisque;
  }
  .search {
    height: 100px;
    flex-grow: 1;
    height: 70px;
    background-color: darkcyan;
  }
  .my {
    height: 100px;
    width: 100px;
    background-color: cadetblue;
  }
`;

// nav 스타일
export const Nav = styled.div`
  height: 50px;
  background-color: darkseagreen;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .tag {
    margin-right: 50px;
    margin-left: 50px;
    height: 40px;
    width: 100px;
    background-color: lightgray;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

// 푸터 스타일
export const Footer = styled.div`
  height: 150px;
  background-color: lightgray;
`;

export default GlobalStyled;
