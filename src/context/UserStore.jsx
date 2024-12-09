import { createContext, useState } from "react";

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
