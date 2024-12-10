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
  /* overflow: hidden; */
`;

// 헤더 스타일
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 20px;
  margin: 5px;
  width: 93vw;

  .logo {
    height: 100px;
    width: 100px;
  }
  .logo-img {
    height: 90px;
    width: auto;
    object-fit: contain;
  }
  .name {
    height: 100px;
    width: 200px;
    padding-left: 20px;
    font-size: 45px;
    color: #1b5e96;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    a {
      color: inherit;
      text-decoration: none;
    }
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
    position: absolute;
    left: 55px;
    top: 48%;
    transform: translateY(-50%);
    font-size: 16px;
    font-weight: bold;
    color: #1b5e96;
    pointer-events: none;
  }
  .divider {
    position: absolute;
    left: 100px;
    top: 43%;
    transform: translateY(-50%);
    color: #1b5e96;
    font-size: 20px;
    pointer-events: none;
  }

  .search {
    font-size: 14px;
    height: 40px;
    border-radius: 50px;
    border: 2.5px solid #1b5e96;
    padding-left: 120px;
    outline: none;
    width: 100%;
    box-sizing: border-box;
  }

  .search-toggle {
    position: absolute;
    left: 10px;
    top: 50%;
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
    border: 1px solid #1b5e96;
    border-radius: 5px;
    z-index: 10;
    width: 120px;

    opacity: 0;
    transform: translateY(-10px);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .search-options.active {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }

  .options-list p {
    padding: 5px;
    cursor: pointer;
    text-align: center;
    font-size: 14px;
  }

  .options-list p:hover {
    background-color: #f0f0f0;
  }
  .usermy {
    position: relative;

    &:hover {
      cursor: pointer;
    }

    .badge {
      position: absolute;
      top: -5px;
      right: -5px;
      padding: 5px;
      width: auto;
      height: 20px;
      background-color: #df3232;
      color: white;
      font-size: 15px;
      font-weight: bold;
      border-radius: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
      z-index: 1;
    }
  }
  .dropdown {
    position: absolute;
    top: 100%;
    right: 0;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 10;
    width: 150px;
    font-size: 15px;
  }

  .dropdown-item {
    padding: 10px;
    color: black;
    text-decoration: none;
    display: block;
    text-align: center;
  }

  .dropdown-item:hover {
    background-color: #f0f0f0;
  }

  .dropdown button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 15px;
    padding: 10px;
    text-align: center;
    width: 100%;
    display: block;
  }

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;

    .modal-content {
      background: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      text-align: center;
      width: 300px;

      p {
        margin-bottom: 20px;
        font-size: 16px;
      }

      button {
        margin: 5px;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 14px;
      }

      button:first-of-type {
        background-color: #1b5e96;
        color: white;
      }

      button:last-of-type {
        background-color: #f0f0f0;
        color: black;
      }
    }
  }
`;

// nav 스타일
export const Nav = styled.div`
  height: 40px;
  width: 100%; /* 컨테이너의 너비를 100%로 설정하여 창 크기에 맞게 조정 */
  display: flex;
  justify-content: space-between;
  max-width: 350px;
  align-items: center;
  .tag {
    color: #1b5e96;
    font-weight: bold;
    text-decoration: none;
    flex: 0.8;
    text-align: center; /* 태그 내부의 텍스트를 중앙에 배치 */
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
  position: relative; /* 부모 컨텍스트를 유지하면서 직접 조정 가능 */
  left: -2%; /* Container의 좌측 여백 제거 */
  width: calc(100% + 4%); /* Container의 좌우 여백을 포함한 너비 */
  height: 150px;
  background-color: #dddddd;
  padding: 20px;
  color: #494949;
  h4 {
    font-size: small;
    text-decoration: underline;
  }
  p {
    font-size: smaller;
  }
`;

export default GlobalStyled;
