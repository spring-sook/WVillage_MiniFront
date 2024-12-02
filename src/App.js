// import "./App.css";
import GlobalStyled from "./styles/GlobalStyled";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main";
import PostList from "./pages/post/PostList";
import PostContent from "./pages/post/PostContent";

function App() {
  return (
    <>
      <GlobalStyled />
      <Router>
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/post" element={<PostList />} />
          <Route path="/postContent" element={<PostContent />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
