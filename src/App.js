import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import styled from "styled-components";
// Pages
import MainPage from "./component/page/MainPage";
import PostWritePage from "./component/page/PostWritePage";
import PostViewPage from "./component/page/PostViewPage";

const MaintTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

function App() {
  return (
    <BrowserRouter>
      <MaintTitleText>미니 블로그</MaintTitleText>
      <Routes>
        <Route index element={<MainPage />}></Route>
        <Route path="post-write" element={<PostWritePage />}></Route>
        <Route path="post/:postId" element={<PostViewPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
