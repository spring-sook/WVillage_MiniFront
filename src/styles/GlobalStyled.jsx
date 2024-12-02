import styled, { createGlobalStyle } from "styled-components";

export const headerHeight = "150px";
export const navHeight = "50px";

// 전체 스타일
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
  .logo-img {
    height: 100px;
    width: auto;
    object-fit: contain; /* 이미지 비율에 맞게 맞추기 */
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
  justify-content: right;
  align-items: center;
  .tag {
    margin: 0 50px;
    height: 40px;
    width: 100px;
    background-color: lightblue;

    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: bold;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

// 푸터 스타일
export const Footer = styled.div`
  height: 180px;
  background-color: lightgray;
  padding: 20px;
  color: #494949;
  h4 {
    text-decoration: underline;
  }
  p {
  }
`;

export default GlobalStyled;
