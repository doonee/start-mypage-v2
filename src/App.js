import "bootstrap/dist/css/bootstrap.min.css";
import "./css/main.css";
import React from "react";
import TopMenus from "./components/TopMenus";
import TopGroupLinks from "./components/TopGroupLinks";
import Footer from "./components/Footer";
import GoToTopIcon from "./components/GoToTopIcon";
import { Outlet, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import GroupsPage from "./pages/GroupsPage";
import MyBookmarks from "./pages/GroupsPage/view";
import CategoriesPage from "./pages/CategoriesPage";
import BookmarksPage from "./pages/BookmarksPage";
import { useLocation } from "react-router-dom";
import DevHistoryPage from "./pages/DevHistoryPage";
import BrowserSettingPage from "./pages/BrowserSettingPage";
import ConfigPage from "./pages/ConfigPage";
import SignupPage from "./pages/UserPage/signup";
import SigninPage from "./pages/UserPage/signin";
import MyInfoPage from "./pages/UserPage/myinfo";
import NotFound from "./pages/NotFound";

const Layout = () => {
  const location = useLocation();
  const curPath = location.pathname;

  return (
    <div className="App">
      <TopMenus curPath={curPath} />
      <TopGroupLinks />
      <Outlet />
      <Footer />
      <GoToTopIcon />
    </div>
  );
};

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="groups" element={<GroupsPage />} />
          <Route path="config" element={<ConfigPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="signin" element={<SigninPage />} />
          <Route path="myinfo" element={<MyInfoPage />} />
          <Route path="mybookmarks" element={<MyBookmarks />} />
          <Route path="shareBookmarks/:groupId" element={<MyBookmarks />} />
          <Route path="categories/:groudId" element={<CategoriesPage />} />
          <Route
            path="bookmarks/:groudId/:categoryId"
            element={<BookmarksPage />}
          />
          <Route path="devHistory" element={<DevHistoryPage />} />
          <Route path="browserSetting" element={<BrowserSettingPage />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
