import React from "react";
//import { useLocation } from "react-router-dom";
import SearchBookmarks from "../../components/bookmarks/SearchBookmarks";

export default function SearchBookmarksPage() {
  // const location = useLocation();
  // const curPath = location.pathname;
  const getParameter = (key) => {
    if (new URLSearchParams(window.location.search).get(key)) {
      return new URLSearchParams(window.location.search).get(key);
    }
    return '';
  }
  return <SearchBookmarks getParameter={getParameter} />;
}
