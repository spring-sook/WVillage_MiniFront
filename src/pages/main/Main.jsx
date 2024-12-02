import {
  BannerExplain,
  MainBanner,
  MainBody,
  MainRecomm,
} from "../../styles/MainStyled";
import { Header, Nav, Footer } from "../../styles/GlobalStyled";

const Main = () => {
  return (
    <>
      <Header>
        <div className="logo">로고</div>
        <div className="name">사이트명</div>
        <div className="search">검색창</div>
        <div className="my">마이페이지</div>
      </Header>
      <Nav>
        <div className="tag">전체보기</div>
        <div className="tag">물건</div>
        <div className="tag">사람</div>
        <div className="tag">집</div>
        <div className="tag">?</div>
      </Nav>
      <MainBody>
        <MainRecomm>
          <p>main recommend</p>
        </MainRecomm>
        <MainBanner>
          <BannerExplain>
            <div className="catch">캐치프레이즈</div>
            <div className="explain">설명설명</div>
          </BannerExplain>
        </MainBanner>
      </MainBody>
      <Footer>footer</Footer>
    </>
  );
};
export default Main;
