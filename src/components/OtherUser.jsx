import ImgDownloader from "./Profile";
import {UserReviewRecord} from "./UserReviewRecord";
import {ReportBtn} from "./ReportBtn";
import {UserProfileBox} from "../styles/OtherUserStyled";
import {Typography} from "@mui/material";

export const OtherUser = ({email}) => {
  const imagePath = "snow_village.webp";

  return (
    <>
      <UserProfileBox>
        <div className="box">
          <div className="userInfo">
            <ImgDownloader imgfile={imagePath} width="120px" height="120px"/>
            <Typography variant="h6" color={"black"}>상대유저명</Typography>
          </div>
          <div className="temp">
            <p>온도</p>
            <div className="gauge">
              <p>36.5 ℃</p>
            </div>
          </div>
          <UserReviewRecord email={email}/>
          <ReportBtn/>
        </div>
      </UserProfileBox>
    </>
  );
}

export default OtherUser;