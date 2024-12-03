import { Header, Nav, Footer } from "../styles/GlobalStyled";
import LogoImg from "../images/logo.png";
import { Link } from "react-router-dom";
import ImgDownloader from "../components/Profile";
import { useState } from "react";

export const HeaderCom = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("검색 옵션");
  const toggleOptions = () => {
    setShowOptions((prev) => !prev);
  };
  const selectOption = (option) => {
    setSelectedOption(option); // 선택된 옵션 표시
    setShowOptions(false); // 옵션 창 닫기
  };

  const imagePath = "snow_village.webp";

  return (
    <Header>
      <Link to="/main" className="logo">
        <img src={LogoImg} alt="로고" className="logo-img" />
      </Link>
      <div className="name">
        <h4>W.Village</h4>
      </div>
      <Nav>
        <div className="tag">product</div>
        <p>/</p>
        <div className="tag">part-time</div>
        <p>/</p>
        <div className="tag">place</div>
      </Nav>
      <div className="search-container">
        <button className="search-toggle" onClick={toggleOptions}>
          ▼
        </button>
        <div className="search-wrapper">
          <span className="selected-option">{selectedOption}</span>
          <span className="divider">|</span>
          <input
            type="text"
            className="search"
            placeholder="검색어를 입력하세요"
          />
        </div>
        {showOptions && (
          <div className="search-options active">
            <div className="options-list">
              <p onClick={() => selectOption("전체")}>전체</p>
              <p onClick={() => selectOption("물건")}>물건</p>
              <p onClick={() => selectOption("알바")}>알바</p>
              <p onClick={() => selectOption("장소")}>장소</p>
            </div>
          </div>
        )}
      </div>
      <div className="usermy">
        <ImgDownloader imgfile={imagePath} width="60px" height="60px" />
      </div>
    </Header>
  );
};

export const FooterCom = () => {
  return (
    <Footer>
      <h4>(주)어디서 빌리지</h4>
      <p>WVillage@Where.com</p>
      <p>call: 02-524-0000</p>
      <p>
        개인간의 거래 문제가 발생하였을 때 관련된 의무와 책임은 판매자에게
        있습니다.
      </p>
    </Footer>
  );
};
