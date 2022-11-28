import "bootstrap/dist/css/bootstrap.min.css";
import "./css/main.css";
import React from "react";
import TopMenus from "./components/TopMenus";
import GroupLinks from "./components/GroupLinks";
import Footer from "./components/Footer";
import ToTopLink from "./components/ToTopLink";
import { Outlet, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import GroupsPage from "./pages/GroupsPage";
import MyBookmarks from "./pages/GroupsPage/view";
import CategoriesPage from "./pages/CategoriesPage";
import BookmarksPage from "./pages/BookmarksPage";
import { useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const curPath = location.pathname;
  // React.useState(() => {
  //   // remove all and add active class on current menu
  //   window.onload = () => {
  //     console.log(789);
  //     // const menuLinks = document.querySelectorAll("#ul-topmenu a.nav-link");
  //     // menuLinks.forEach((link) => {
  //     //   link.classList.remove("active");
  //     //   console.log(curPath, link.getAttribute("href"));
  //     //   if (curPath === link.getAttribute("href")) link.classList.add("active");
  //     // });
  //   };
  // });

  return (
    <div className="App">
      <header className="App-header">
        <TopMenus curPath={curPath} />
        <GroupLinks curPath={curPath} />
        <Outlet />
        <Footer />
        <ToTopLink />
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
