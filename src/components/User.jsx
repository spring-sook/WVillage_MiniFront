import ImgDownloader from "../components/Profile";
import { Usermy } from "../styles/UserComstyled";

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
          </div>
          <div className="option">
            <p>내 정보 수정</p>
            <p>즐겨찾기 게시물</p>
            <p>예약 리스트</p>
            <p>포인트</p>
            <p>설정</p>
          </div>
        </div>
      </Usermy>
    </>
  );
};
