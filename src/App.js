// import "./App.css";
import GlobalStyled from "./styles/GlobalStyled";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main";
import PostList from "./pages/post/PostList";
import PostContent from "./pages/post/PostContent";
import PostWrite from "./pages/post/PostWrite";
import Login from "./components/Login";
import PasswordReset from "./components/PasswordReset";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <GlobalStyled />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/post" element={<PostList />} />
          <Route path="/postContent" element={<PostContent />} />
          <Route path="/postWrite" element={<PostWrite />} />
          <Route path="/passwordreset" element={<PasswordReset />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
