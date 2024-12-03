import { Header, Nav, Footer } from "../styles/GlobalStyled";
import LogoImg from "../images/logo.png";
import { Link } from "react-router-dom";

export const HeaderCom = () => {
  return (
    <Header>
      <Link to="/main" className="logo">
        <img src={LogoImg} alt="로고" className="logo-img" />
      </Link>
      <div className="name">
        <h4>W.Village</h4>
      </div>
      <input type="text" className="search" placeholder="검색창" />
      <div className="my">마이페이지</div>
    </Header>
  );
};

export const NavCom = () => {
  return (
    <Nav>
      <div className="tag">product</div>
      <div className="tag">part-time</div>
      <div className="tag">place</div>
    </Nav>
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
