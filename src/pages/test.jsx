import React, { useContext } from "react";
import { UserContext } from "../context/UserStore";

const UserInfo = () => {
  const { userInfo } = useContext(UserContext); // UserContext에서 userInfo를 가져옵니다.

  // userInfo가 존재하는지 확인하고 출력
  return (
    <div>
      {userInfo ? (
        <div>
          <h3>사용자 정보</h3>
          <p>닉네임: {userInfo.nickname}</p>
          <p>점수: {userInfo.score}</p>
          <p>등급: {userInfo.grade}</p>
          <p>지역 코드: {userInfo.areaCode}</p>
          <p>포인트: {userInfo.point}</p>
        </div>
      ) : (
        <p>로그인되지 않았습니다.</p>
      )}
    </div>
  );
};

export default UserInfo;
