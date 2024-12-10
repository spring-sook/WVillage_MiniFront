// import "./App.css";
import GlobalStyled from "./styles/GlobalStyled";
import UserStore from "./context/UserStore";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main";
import PostList from "./pages/post/PostList";
import PostContent from "./pages/post/PostContent";
import PostWrite from "./pages/post/PostWrite";
import Login from "./pages/beforelogin/Login";
import PasswordReset from "./pages/beforelogin/PasswordReset";
import Signup from "./pages/beforelogin/Signup";
import Intro from "./pages/main/Intro";
import FindMail from "./pages/beforelogin/FindMail";
import PasswordReset2 from "./pages/beforelogin/PasswordReset2";
import OtherUserProfile from "./pages/OtherUserProfile";
import MyPageMain from "./pages/mypage/MyPageMain";
import UserInfo from "./pages/test";

function App() {
  return (
    <>
      <GlobalStyled />
      <UserStore>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/main" element={<Main />} />
            <Route path="/" element={<Intro />} />
            <Route path="/post" element={<PostList />} />
            <Route path="/post/:postId" element={<PostContent />} />
            <Route path="/postWrite" element={<PostWrite />} />
            <Route path="/passwordreset" element={<PasswordReset />} />
            <Route path="/passwordreset2" element={<PasswordReset2 />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/findmail" element={<FindMail />} />
            <Route path="/userProfile" element={<OtherUserProfile />} />
            <Route path="/mypage" element={<MyPageMain />} />
            <Route path="/test" element={<UserInfo />} />
          </Routes>
        </Router>
      </UserStore>
    </>
  );
}

export default App;
