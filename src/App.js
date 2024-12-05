// import "./App.css";
import GlobalStyled from "./styles/GlobalStyled";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Main from "./pages/main/Main";
import PostList from "./pages/post/PostList";
import PostContent from "./pages/post/PostContent";
import PostWrite from "./pages/post/PostWrite";
import Login from "./components/Login";
import PasswordReset from "./components/PasswordReset";
import Signup from "./components/Signup";
import Intro from "./pages/main/Intro";
import UserPoint from "./pages/UserPoint";
import FindMail from "./components/FindMail";
import PasswordReset2 from "./components/PasswordReset2";
import OtherUserProfile from "./pages/OtherUserProfile";

function App() {
  return (
    <>
      <GlobalStyled/>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/main" element={<Main/>}/>
          <Route path="/intro" element={<Intro/>}/>
          <Route path="/post" element={<PostList/>}/>
          <Route path="/postContent" element={<PostContent/>}/>
          <Route path="/postWrite" element={<PostWrite/>}/>
          <Route path="/passwordreset" element={<PasswordReset/>}/>
          <Route path="/passwordreset2" element={<PasswordReset2/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/point" element={<UserPoint/>}/>
          <Route path="/findmail" element={<FindMail/>}/>
          <Route path="/userProfile" element={<OtherUserProfile/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
