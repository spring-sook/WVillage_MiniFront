
import {Usermy} from "../styles/UserComstyled";
import ImgDownloader from "./Profile";
import {UserReviewRecord} from "./UserReviewRecord";

export const OtherUser = () =>{

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