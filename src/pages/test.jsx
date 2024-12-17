import React, { useContext } from "react";
import { UserContext } from "../context/UserStore";
import { ProfileImgDownloader } from "../components/Profile";

const UserInfo = () => {
  const { userInfo } = useContext(UserContext); // UserContext에서 userInfo를 가져옵니다.

  // userInfo가 존재하는지 확인하고 출력
  return (
    <div>
      {userInfo ? (
        <div>
          <h3>사용자 정보</h3>
          <p>이메일: {userInfo.email}</p>
          <p>닉네임: {userInfo.nickname}</p>
          <p>핸드폰 : {userInfo.phone}</p>
          <p>점수: {userInfo.score}</p>
          <p>등급: {userInfo.grade}</p>
          <p>지역 코드: {userInfo.areaCode}</p>
          <p>지역명 : {userInfo.filteredRegion}</p>
          <p>포인트: {userInfo.point}</p>
          <p>프로필 이미지 경로 : {userInfo.profileImg}</p>
          <p>reserveMsgLent : {userInfo.reserveMsgLent}</p>
          <p>reserveMsgLented : {userInfo.reserveMsgLented}</p>
          <p>총 알림 수 : {userInfo.reserveMsgTotal}</p>
          <p>alarmCount : {userInfo.alarmCount}</p>
          <div>
            <h4>프로필 이미지</h4>
            <ProfileImgDownloader
              src={userInfo.profileImg}
              alt="Profile"
              style={{ width: "100px", height: "100px", borderRadius: "50%" }}
            />
          </div>
        </div>
      ) : (
        <p>로그인되지 않았습니다.</p>
      )}
    </div>
  );
};

export default UserInfo;
