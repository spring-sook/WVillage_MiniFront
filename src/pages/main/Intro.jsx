import { useState } from "react";
import { Title, Sidebar, Overlay } from "../../styles/MainStyled";
import { FaBars } from "react-icons/fa"; // 메뉴 아이콘
import LogoImg from "../../images/logo.png";
import { Link } from "react-router-dom";

const Intro = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* 상단 헤더 */}
      <Title>
        <img src={LogoImg} alt="로고" className="logo-img" />
        <p>WVillage</p>
        <FaBars className="menu-icon" onClick={toggleSidebar} />
      </Title>

      {/* 사이드바 */}
      <Sidebar isOpen={isSidebarOpen}>
        <Link className="sidebar-item" to="/">
          로그인
        </Link>
        <Link className="sidebar-item" to="/signup">
          회원가입
        </Link>
      </Sidebar>
      {/* 오버레이 */}
      <Overlay isOpen={isSidebarOpen} onClick={toggleSidebar} />
    </>
  );
};

export default Intro;
