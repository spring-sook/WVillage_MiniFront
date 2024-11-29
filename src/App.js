// import "./App.css";
import GlobalStyled from "./styles/GlobalStyled";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostList from "./pages/post/PostList";

function App() {
  return (
    <>
      <GlobalStyled />
      <Router>
        <Routes>
          <Route path="/post" element={<PostList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
