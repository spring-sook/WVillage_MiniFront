import { Header, Nav, Footer } from "../styles/GlobalStyled";
import LogoImg from "../images/logo.png";
import { Link } from "react-router-dom";
import ImgDownloader from "../components/Profile";

export const HeaderCom = () => {
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
        <div className="tag">part-time</div>
        <div className="tag">place</div>
      </Nav>
      <input type="text" className="search" placeholder="검색창" />
      <div className="usermy">
        <ImgDownloader imgfile={imagePath} width="60px" height="60px" />
      </div>
    </Header>
  );
};

// export const NavCom = () => {
//   return (

//   );
// };

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
