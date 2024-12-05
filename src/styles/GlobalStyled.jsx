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
    left: 55px; /* 검색창 내부 여백 */
    top: 48%;
    transform: translateY(-50%);
    font-size: 16px;
    font-weight: bold;
    color: #1b5e96;
    pointer-events: none; /* 클릭 불가능하게 설정 */
  }
  .divider {
    position: absolute;
    left: 100px; /* 선택된 옵션 바로 옆에 배치 */
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
    position: relative; /* 뱃지를 배치하기 위한 기준 */
    margin-right: 50px; /* 오른쪽 여백 */
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
      box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5); /* 입체감 추가 */
      z-index: 1; /* 이미지보다 위에 표시 */
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
