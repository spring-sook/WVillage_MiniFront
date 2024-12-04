import { Header, Nav, Footer } from "../styles/GlobalStyled";
import LogoImg from "../images/logo.png";
import { Link } from "react-router-dom";
import ImgDownloader from "../components/Profile";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export const HeaderCom = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("전체");
  const [searchQuery, setSearchQuery] = useState(""); // 검색어 상태 추가
  const [hasNotification, setHasNotification] = useState(true); // 알림 상태

  const toggleOptions = () => {
    setShowOptions((prev) => !prev);
  };
  const selectOption = (option) => {
    setSelectedOption(option); // 선택된 옵션 표시
    setShowOptions(false); // 옵션 창 닫기
  };

  const handleSearch = () => {
    if (searchQuery.length < 2) {
      alert("검색어는 2자리 이상 입력해 주세요."); // 길이가 2자 미만일 경우 팝업
    } else {
      console.log("검색어:", searchQuery);
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      // Enter 키가 눌렸을 때
      handleSearch(); // 검색 함수 호출
    }
  };
  const imagePath = "snow_village.webp";

  return (
    <Header>
      <Link to="/main" className="logo">
        <img src={LogoImg} alt="로고" className="logo-img" />
      </Link>
      <div className="name">
        <h4>WVillage</h4>
      </div>
      <Nav>
        <Link to="/post" className="tag">
          제품
        </Link>
        <p>/</p>
        <Link to="/post" className="tag">
          알바
        </Link>
        <p>/</p>
        <Link to="/post" className="tag">
          장소
        </Link>
      </Nav>
      <div className="search-container">
        <button className="search-toggle" onClick={toggleOptions}>
          {showOptions ? "▲" : "▼"} {/* showOptions 상태에 따라 기호 변경 */}
        </button>
        <div className="search-wrapper">
          <span className="selected-option">{selectedOption}</span>
          <span className="divider">|</span>
          <input
            type="text"
            className="search"
            placeholder="검색어 입력"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // 검색어 업데이트
            onKeyDown={handleKeyDown} // 엔터 키 이벤트 처리
          />
          <button className="search-button" onClick={handleSearch}>
            <FaSearch /> {/* 검색 아이콘 */}
          </button>
        </div>
        <div className={`search-options ${showOptions ? "active" : ""}`}>
          <div className="options-list">
            <p onClick={() => selectOption("전체")}>전체</p>
            <p onClick={() => selectOption("물건")}>물건</p>
            <p onClick={() => selectOption("알바")}>알바</p>
            <p onClick={() => selectOption("장소")}>장소</p>
          </div>
        </div>
      </div>
      <div className="usermy">
        <ImgDownloader imgfile={imagePath} width="60px" height="60px" />
        {hasNotification && <div className="badge">!</div>} {/* 알림 뱃지 */}
        {/* !!!!db연결하며 상태관리 기능 추가 필요!!!! */}
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
