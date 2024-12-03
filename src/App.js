// import "./App.css";
import GlobalStyled from "./styles/GlobalStyled";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main";
import PostList from "./pages/post/PostList";
import Login from "./components/Login";
import PasswordReset from "./pages/PasswordReset";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <GlobalStyled />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/post" element={<PostList />} />
          {/* <Route path="/password-reset" element={<PasswordReset />} />
          <Route path="/signup" element={<Signup />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
