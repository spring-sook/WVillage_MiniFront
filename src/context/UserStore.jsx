import { createContext, useState } from "react";

const UserContext = createContext(null);

export const UserStore = (props) => {
  const [userInfo, setUserInfo] = useState(null);
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserStore;
