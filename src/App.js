import React from "react";
import { Outlet, Routes, Route, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/main.css";
import TopMenus from "./components/TopMenus";
import TopShareMenus from "./components/TopShareMenus";
import TopGroupLinks from "./components/TopGroupLinks";
import Footer from "./components/Footer";
import GoToTopIcon from "./components/GoToTopIcon";
import MainPage from "./pages/MainPage";
import GroupManagePage from "./pages/GroupsPage/GroupManagePage";
import BookmarkManagePage from "./pages/BookmarksPage/BookmarkManagePage";
import CategoryManagePage from "./pages/CategoriesPage/CategoryManagePage";
import MyBookmarksPage from "./pages/BookmarksPage/MyBookmarksPage";
import ShareGroupPage from "./pages/BookmarksPage/ShareGroupPage";
import ShareCategoryPage from "./pages/BookmarksPage/ShareCategoryPage";
import SearchBookmarksPage from "./pages/BookmarksPage/SearchBookmarksPage";
import DevHistoryPage from "./pages/DevHistoryPage";
import BrowserSettingPage from "./pages/BrowserSettingPage";
import ConfigPage from "./pages/ConfigPage";
import SignupPage from "./pages/UserPage/signup";
import SigninPage from "./pages/UserPage/signin";
import SignoutPage from "./pages/UserPage/signout";
import MyInfoPage from "./pages/UserPage/myinfo";
import NotFound from "./pages/NotFound";
import KakaoRedirectHandeler from "./components/socials/KakaoRedirectHandeler";

const Layout = () => {
  const location = useLocation();
  const curPath = location.pathname;
  const getParameter = (key) => {
    if (new URLSearchParams(window.location.search).get(key)) {
      return new URLSearchParams(window.location.search).get(key);
    }
    return '';
  }

  return (
    <div className="App">
      <TopMenus curPath={curPath} />
      <TopGroupLinks curPath={curPath} getParameter={getParameter} />
      <Outlet />
      <Footer />
      <GoToTopIcon />
    </div>
  );
};

const AnonLayout = () => {
  const location = useLocation();
  const curPath = location.pathname;
  const getParameter = (key) => {
    if (new URLSearchParams(window.location.search).get(key)) {
      return new URLSearchParams(window.location.search).get(key);
    }
    return '';
  }

  return (
    <div className="App">
      <TopShareMenus curPath={curPath} getParameter={getParameter} />
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
          <Route path="groupManage" element={<GroupManagePage />} />
          <Route path="categoryManage" element={<CategoryManagePage />} />
          <Route path="bookmarkManage" element={<BookmarkManagePage />} />
          <Route path="config" element={<ConfigPage />} />
          <Route path="myinfo" element={<MyInfoPage />} />
          <Route path="myBookmarks" element={<MyBookmarksPage />} />
          <Route path="searchBookmarks" element={<SearchBookmarksPage />} />
          <Route path="devHistory" element={<DevHistoryPage />} />
          <Route path="browserSetting" element={<BrowserSettingPage />} />
        </Route>
        <Route path="/" element={<AnonLayout />}>
          <Route path="signup" element={<SignupPage />} />
          <Route path="kakaoAuth" element={<KakaoRedirectHandeler />} />
          <Route path="signin" element={<SigninPage />} />
          <Route path="shareGroup/:groupId" element={<ShareGroupPage />} />
          <Route path="shareCategory/:categoryId" element={<ShareCategoryPage />} />
          <Route path="signout" element={<SignoutPage />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
