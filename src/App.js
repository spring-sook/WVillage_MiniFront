// import "./App.css";
import GlobalStyled from "./styles/GlobalStyled";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostList from "./pages/post/PostList";
import Main from "./pages/main/Main";

function App() {
  return (
    <>
      <GlobalStyled />
      <Router>
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/post" element={<PostList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
