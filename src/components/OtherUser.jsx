import ProfileImgDownloader from "./Profile";
import { UserReviewRecord } from "./UserReviewRecord";
import { ReportBtn } from "./ReportBtn";
import { UserProfileBox } from "../styles/OtherUserStyled";
import fire1 from "../../src/images/fire1.jpg";
import fire2 from "../../src/images/fire2.jpg";
import fire3 from "../../src/images/fire3.jpg";
import fire4 from "../../src/images/fire4.jpg";
import fire5 from "../../src/images/fire5.jpg";
import fire6 from "../../src/images/fire6.jpg";

export const OtherUser = ({ email }) => {
  const imagePath = "snow_village.webp";

  const temperature = 10; /*(300.0 + parseInt(userInfo.score)) / 10.0*/
  let temperatureImage = fire1; // 기본 이미지를 설정 (기본값)

  if (temperature >= 0 && temperature <= 10) {
    temperatureImage = fire1;
  } else if (temperature >= 11 && temperature <= 30) {
    temperatureImage = fire2;
  } else if (temperature >= 31 && temperature <= 50) {
    temperatureImage = fire3;
  } else if (temperature >= 51 && temperature <= 70) {
    temperatureImage = fire4;
  } else if (temperature >= 71 && temperature <= 90) {
    temperatureImage = fire5;
  } else if (temperature >= 91) {
    temperatureImage = fire6;
  }

  return (
    <>
      <UserProfileBox>
        <div className="box">
          <div className="userInfo">
            <ProfileImgDownloader
              imgfile={imagePath}
              width="120px"
              height="120px"
            />
            <h4>상대유저명</h4>
          </div>
          <div className="temp">
            <img
              src={temperatureImage}
              alt="온도 이미지"
              className="temperature-image"
            />
            <div className="gauge">
              <p>{temperature} ℃</p>
            </div>
          </div>
          <UserReviewRecord email={email} />
          <ReportBtn />
        </div>
      </UserProfileBox>
    </>
  );
};

export default OtherUser;
