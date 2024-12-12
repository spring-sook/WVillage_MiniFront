import { useState } from "react";
import { Title, Sidebar, Overlay, Wrapper, TextContainer } from "../../styles/MainStyled";
import { FaBars } from "react-icons/fa"; // 메뉴 아이콘
import LogoImg from "../../images/logo.png";
import { Link } from "react-router-dom";

const Intro = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Wrapper>
      {/* 상단 헤더 */}
      <Title>
        <img src={LogoImg} alt="로고" className="logo-img" />
        <p>WVillage</p>
        <FaBars className="menu-icon" onClick={toggleSidebar} />
      </Title>
      <TextContainer>
      <h1>어디서 Viillage?</h1>
      <h4>안쓰는 물건의 마을</h4>
      </TextContainer>
      {/* 사이드바 */}
      <Sidebar isOpen={isSidebarOpen}>
        <Link className="sidebar-item" to="/login">
          로그인
        </Link>
        <Link className="sidebar-item" to="/signup">
          회원가입
        </Link>
      </Sidebar>
      {/* 오버레이 */}
      <Overlay isOpen={isSidebarOpen} onClick={toggleSidebar} />
    </Wrapper>
  );
};

export default Intro;
