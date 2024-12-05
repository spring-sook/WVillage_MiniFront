import ImgDownloader from "../components/Profile";
import { Usermy } from "../styles/UserComstyled";
import { Link } from "react-router-dom";

export const User = () => {
  const imagePath = "snow_village.webp";

  return (
    <>
      <Usermy>
        <div className="usermy">
          <ImgDownloader imgfile={imagePath} width="120px" height="120px" />
        </div>
        <div className="box">
          <div className="temp">
            <p>온도</p>
            <div className="gauge">
              <p>36.5 ℃</p>
            </div>
          </div>
          <div className="option">
            <p>작성 게시글</p>
            <p>즐겨찾기 게시글</p>
            <p>예약 리스트</p>
            <Link to="/point">
              <p>포인트</p>
            </Link>
            <p>내 정보 수정</p>
            <p>설정</p>
          </div>
        </div>
      </Usermy>
    </>
  );
};
