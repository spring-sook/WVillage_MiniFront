import { Header, Nav, Footer } from "../styles/GlobalStyled";
import LogoImg from "../images/logo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ProfileImgDownloader } from "./Profile";
import { useState, useEffect, useRef, useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { UserContext } from "../context/UserStore";
import UserProfileAPI from "../api/OtherUserProfileAPI";

export const HeaderCom = () => {
  const [showOptions, setShowOptions] = useState(false);
  const optionsRef = useRef(null);
  const [selectedOption, setSelectedOption] = useState("전체");
  const [searchQuery, setSearchQuery] = useState(""); // 검색어 상태 추가
  const [showUserMenu, setShowUserMenu] = useState(false); // 유저 메뉴 표시 상태
  const [showLogoutModal, setShowLogoutModal] = useState(false); // 로그아웃 모달 상태
  const location = useLocation();
  const { userInfo } = useContext(UserContext); // setUserInfo 추가
  const [hasNotification, setHasNotification] = useState(false); // 초기값 false로 변경

  const isActive = (path, queryParams = null) => {
    const currentPath = location.pathname; // 현재 경로
    const currentSearch = location.search; // 현재 쿼리 파라미터

    // '전체' 링크 처리 (쿼리 파라미터가 없는 경우에만 활성화)
    if (path === "/post" && !queryParams) {
      // 경로가 /post 이고 쿼리 파라미터가 없을 경우 활성화
      return currentPath === path && currentSearch === "";
    }

    // 경로 비교
    const isPathMatch = currentPath === path;

    // 쿼리 파라미터 비교
    if (queryParams) {
      const currentParams = new URLSearchParams(currentSearch);
      const targetParams = new URLSearchParams(queryParams);

      const isQueryMatch = [...targetParams].every(
        ([key, value]) => currentParams.get(key) === value
      );
      return isPathMatch && isQueryMatch; // 경로와 쿼리 파라미터가 모두 일치하는지 확인
    }

    // 쿼리 파라미터가 없는 경우 (전체 링크의 경우)
    return isPathMatch;
  };

  const navigate = useNavigate();

  const toggleOptions = (event) => {
    event.stopPropagation(); // 클릭 이벤트 전파 방지
    setShowOptions((prev) => !prev); // 상태 반전
  };

  const handleClickOutside = (event) => {
    if (
      optionsRef.current &&
      !optionsRef.current.contains(event.target) && // 옵션 리스트가 아닌 경우
      !event.target.closest(".search-toggle") // 토글 버튼이 아닌 경우
    ) {
      setShowOptions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const fetchNotifications = async () => {
      if (userInfo?.email) {
        try {
          const responseAlarm = await UserProfileAPI.getAlarm(userInfo.email);
          if (responseAlarm.status === 200) {
            const alarmCount = responseAlarm.data;
            const reserveMsgLent = alarmCount.reserveMsgLent;
            const reserveMsgLented = alarmCount.reserveMsgLented;

            // updateUserInfo를 사용하여 컨텍스트 업데이트
            UserContext.updateUserInfo({
              ...userInfo, // 기존 userInfo 정보 유지
              reserveMsgLent: reserveMsgLent,
              reserveMsgLented: reserveMsgLented,
              reserveMsgTotal: reserveMsgLent + reserveMsgLented,
            });

            setHasNotification(reserveMsgLent + reserveMsgLented > 0);
          } else {
            console.error("알림 요청 실패");
          }
        } catch (error) {
          console.error("알림 요청 중 오류 발생:", error);
        }
      }
    };

    fetchNotifications();
  }, [userInfo]);

  const selectOption = (option) => {
    setSelectedOption(option); // 선택된 옵션 표시
    setShowOptions(false); // 옵션 창 닫기
  };

  const handleSearch = () => {
    if (searchQuery.length < 2) {
      alert("검색어는 2자리 이상 입력해 주세요."); // 길이가 2자 미만일 경우 팝업
    } else {
      const params = new URLSearchParams();
      if (selectedOption !== "전체") {
        params.set("category", selectedOption);
      }
      if (searchQuery) {
        params.set("search", searchQuery);
      }
      navigate(`/post?${params.toString()}`);
      setSearchQuery("");
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      // Enter 키가 눌렸을 때
      handleSearch(); // 검색 함수 호출
    }
  };

  const handleMouseEnter = () => setShowUserMenu(true); // 마우스 진입 시 메뉴 표시
  const handleMouseLeave = () => setShowUserMenu(false); // 마우스 나갈 시 메뉴 숨김

  const handleLogout = () => {
    // 로그아웃 실행
    localStorage.clear();
    setShowLogoutModal(false);
    navigate("/");
  };

  const imagePath = userInfo.profileImg;

  return (
    <Header>
      <Link
        to={{
          pathname: "/post",
          state: { userInfo },
        }}
        className="logo"
      >
        <img src={LogoImg} alt="로고" className="logo-img" />
      </Link>
      <div className="name">
        <Link to="/main">
          <h4>WVillage</h4>
        </Link>
      </div>
      <Nav>
        <Link to="/post" className={`tag ${isActive("/post") ? "active" : ""}`}>
          전체
        </Link>
        <p>/</p>
        <Link
          to="/post?category=제품"
          className={`tag ${
            isActive("/post", "category=제품") ? "active" : ""
          }`}
        >
          제품
        </Link>
        <p>/</p>
        <Link
          to="/post?category=구직"
          className={`tag ${
            isActive("/post", "category=구직") ? "active" : ""
          }`}
        >
          구직
        </Link>
        <p>/</p>
        <Link
          to="/post?category=장소"
          className={`tag ${
            isActive("/post", "category=장소") ? "active" : ""
          }`}
        >
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
        <div
          ref={optionsRef}
          className={`search-options ${showOptions ? "active" : ""}`}
          style={{ pointerEvents: showOptions ? "auto" : "none" }}
        >
          <div className="options-list">
            <p onClick={() => selectOption("전체")}>전체</p>
            <p onClick={() => selectOption("제품")}>제품</p>
            <p onClick={() => selectOption("구직")}>구직</p>
            <p onClick={() => selectOption("장소")}>장소</p>
          </div>
        </div>
      </div>
      <div
        className="usermy"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link to="/mypage" className="profile-link">
          <ProfileImgDownloader
            imgfile={imagePath}
            width="60px"
            height="60px"
          />
        </Link>
        {hasNotification && userInfo.reserveMsgTotal > 0 && (
          <div className="badge">{userInfo.reserveMsgTotal}</div>
        )}
        {/* 알림 뱃지 */}
        {showUserMenu && (
          <div className="dropdown">
            <Link to="/mypage" className="dropdown-item">
              마이페이지
            </Link>
            <button
              className="dropdown-item"
              onClick={() => setShowLogoutModal(true)}
            >
              로그아웃
            </button>
          </div>
        )}
      </div>
      {showLogoutModal && (
        <div className="modal">
          <div className="modal-content">
            <p>로그아웃 하시겠습니까?</p>
            <button onClick={handleLogout}>확인</button>
            <button onClick={() => setShowLogoutModal(false)}>취소</button>
          </div>
        </div>
      )}
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
