import { Container } from "../../styles/GlobalStyled";
import { HeaderCom, FooterCom } from "../../components/GlobalComponent";
import { UserInfoFrame } from "../OtherUserProfile";
import OtherUser from "../../components/OtherUser";
import { User } from "../../components/User";
import { useState } from "react";
import { MyPosts } from "./MyPosts";
import { MyBookmark } from "./MyBookmark";
import { MyReserve } from "./MyReserves";
import { UserPoint } from "./UserPoint";
import { EditProfile } from "./EditProfile";
import { UserMain } from "../../styles/MyPostStyled";

export const MyPageMain = () => {
  const [selectedMenu, setSelectedMenu] = useState("작성 게시글");

  return (
    <Container>
      <HeaderCom />
      <UserInfoFrame>
        <User setSelectedMenu={setSelectedMenu} selectedMenu={selectedMenu} />
        {selectedMenu === "작성 게시글" && <MyPosts />}
        {selectedMenu === "즐겨찾기 게시글" && <MyBookmark />}
        {selectedMenu === "예약 리스트" && <MyReserve />}
        {selectedMenu === "포인트" && <UserPoint />}
        {selectedMenu === "내 정보 수정" && <EditProfile />}
      </UserInfoFrame>
      <FooterCom />
    </Container>
  );
};

export default MyPageMain;
