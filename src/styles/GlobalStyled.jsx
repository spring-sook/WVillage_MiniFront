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
  overflow: hidden;
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
    object-fit: contain;
  }
  .name {
    height: 100px;
    width: 250px;
    padding-left: 10px;
    font-size: 45px;
    color: #1b5e96;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .search-container {
    position: relative;
    flex-grow: 1;
    display: flex;
    align-items: center;
  }

  .search-wrapper {
    position: relative;
    flex-grow: 1;
    display: flex;
    align-items: center;
  }

  .selected-option {
    position: absolute; /* 검색창 내부에 배치 */
    left: 50px; /* 검색창 내부 여백 */
    top: 48%;
    transform: translateY(-50%);
    font-size: 20px;
    font-weight: bold;
    color: #1b5e96;
    pointer-events: none; /* 클릭 불가능하게 설정 */
  }
  .divider {
    position: absolute;
    left: 100px; /* 선택된 옵션 바로 옆에 배치 */
    top: 45%;
    transform: translateY(-50%);
    color: #1b5e96;
    font-size: 20px;
    pointer-events: none;
  }

  .search {
    font-size: 18px;
    height: 50px;
    border-radius: 50px;
    border: 3px solid #1b5e96;
    padding-left: 110px;
    outline: none;
    width: 100%;
    box-sizing: border-box;
  }

  .search-toggle {
    position: absolute;
    left: 10px; /* 검색창 왼쪽에 고정 */
    top: 50%; /* 검색창의 세로 중심에 위치 */
    transform: translateY(-50%);
    padding: 5px 10px;
    background-color: #1b5e96;
    color: white;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    z-index: 1;
  }
  .search-button {
    position: absolute;
    right: 15px;
    top: 30%;
    scale: 110%;
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 20px;
    color: #1b5e96;
  }

  .search-options {
    position: absolute;
    top: 105%;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 5px;
    z-index: 10;
    width: 150px;
  }

  .options-list p {
    padding: 5px;
    cursor: pointer;
    text-align: center;
  }

  .options-list p:hover {
    background-color: #f0f0f0;
  }
`;

// nav 스타일
export const Nav = styled.div`
  height: 40px;
  display: flex;
  justify-content: right;
  align-items: center;
  .tag {
    margin: 0 50px;
    height: 40px;
    width: 80px;
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
  p {
    color: #1b5e96;
    margin: -10px;
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
