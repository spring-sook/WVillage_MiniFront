import { createContext, useState, useEffect } from "react";
import UserProfileAPI from "../api/OtherUserProfileAPI";

export const UserContext = createContext(null);

export const UserStore = (props) => {
  const [userInfo, setUserInfo] = useState(() => {
    // 로컬 스토리지에서 이전 사용자 정보 가져오기
    const savedUserInfo = localStorage.getItem("userInfo");
    return savedUserInfo ? JSON.parse(savedUserInfo) : null; // 없으면 null 반환
  });
  const updateUserInfo = (info) => {
    setUserInfo(info);
    localStorage.setItem("userInfo", JSON.stringify(info)); // 로컬 스토리지에 저장
  };
  // 포인트 업데이트 관련
  const updateUserPoints = (newPoints) => {
    const updatedUserInfo = { ...userInfo, point: newPoints };
    updateUserInfo(updatedUserInfo);
  };

  useEffect(() => {
    const fetchRegion = async () => {
      if (!userInfo || !userInfo.areaCode) return; // userInfo 또는 areaCode가 없으면 중단

      try {
        const rspRegion = await UserProfileAPI.getRegion(userInfo.areaCode);
        const regionData = rspRegion.data[0];
        const filteredRegion = Object.values(regionData)
          .filter((value) => value && value !== "nan")
          .join(" ");

        // 업데이트 후 상태 확인
        const updatedUserInfo = { ...userInfo, filteredRegion };
        updateUserInfo(updatedUserInfo);
        console.log("업데이트된 userInfo:", updatedUserInfo);
      } catch (error) {
        console.error("지역 정보를 가져오는 중 오류 발생:", error);
      }
    };

    fetchRegion();
  }, [userInfo?.areaCode]);

  return (
    <UserContext.Provider
      value={{
        userInfo,
        setUserInfo: updateUserInfo,
        updateUserPoints,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserStore;
