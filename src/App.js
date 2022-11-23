import "bootstrap/dist/css/bootstrap.min.css";
import "./css/main.css";
import React from "react";
import TopMenus from "./components/TopMenus";
import GroupLinks from "./components/GroupLinks";
import Footer from "./components/Footer";
import TopLink from "./components/TopLink";
import { Outlet, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import GroupsPage from "./pages/GroupsPage";
import MyBookmarks from "./pages/GroupsPage/view";
import CategoriesPage from "./pages/CategoriesPage";
import BookmarksPage from "./pages/BookmarksPage";

const Layout = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TopLink />
        <TopMenus />
        <GroupLinks />
        <Outlet />
        <Footer />
        <TopLink />
      </header>
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
          <Route path="mybookmarks/:groupId" element={<MyBookmarks />} />
          <Route path="shareBookmarks/:groupId" element={<MyBookmarks />} />
          <Route path="categories/:groudId" element={<CategoriesPage />} />
          <Route
            path="bookmarks/:groudId/:categoryId"
            element={<BookmarksPage />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
