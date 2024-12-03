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
  }
  .logo-img {
    height: 100px;
    width: auto;
    object-fit: contain; /* 이미지 비율에 맞게 맞추기 */
  }
  .name {
    height: 100px;
    width: 200px;
    font-size: 45px;
    color: #1b5e96;
    display: flex;
    justify-content: right;
    align-items: center;
  }
  .search {
    height: 100px;
    flex-grow: 1;
    font-size: 20px;
    height: 50px;
    border-radius: 50px;
    border: 3px solid #1b5e96;
    padding: 20px;
    outline: none;
  }
  .usermy {
    &:hover {
      cursor: pointer;
    }
  }
`;

// nav 스타일
export const Nav = styled.div`
  height: 40px;
  background-color: #f5f6fa;
  display: flex;
  justify-content: right;
  align-items: center;
  .tag {
    margin: 0 50px;
    height: 40px;
    width: 100px;
    background-color: transparent;
    color: #1b5e96;

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
  background-color: #dddddd;
  padding: 20px;
  color: #494949;
  h4 {
    text-decoration: underline;
  }
  p {
  }
`;

export default GlobalStyled;
