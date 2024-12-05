
import {Usermy} from "../styles/UserComstyled";
import ImgDownloader from "./Profile";
import {UserReviewRecord} from "./UserReviewRecord";
import {ReportBtn} from "./ReportBtn";
import {useState} from "react";

export const OtherUser = () =>{
  const [imagePath, setImagePath] = useState();

  return(
    <>
      <Usermy>
        <div className="usermy">
          <ImgDownloader imgfile={imagePath} width="120px" height="120px"/>
        </div>
        <div>상대유저명</div>
        <div className="box">
          <div className="temp">
            <p>온도</p>
          </div>
          <UserReviewRecord/>
          <ReportBtn/>
        </div>
      </Usermy>
    </>
  );
}

export default OtherUser;