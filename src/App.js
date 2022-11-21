import "bootstrap/dist/css/bootstrap.min.css";
import "./css/main.css";
import React from "react";
import TopMenus from "./components/TopMenus";
import CateLinks from "./components/CateLinks";
import Footer from "./components/Footer";
import TopLink from "./components/TopLink";
import { Outlet, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import GroupsPage from "./pages/GroupsPage";
import CategoriesPage from "./pages/CategoriesPage";
import BookmarksPage from "./pages/BookmarksPage";

const Layout = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TopLink />
        <TopMenus />
        <CateLinks />
        <Outlet />
        <Footer />
        <TopLink />
      </header>
    </div>
  );
};

function App2() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="groups" element={<GroupsPage />} />
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

export default App2;
