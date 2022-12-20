import React from "react";
import BookmarkManage from "../../components/bookmarks/BookmarkManage";

export default function BookmarkManagePage() {
  const queryParams = new URLSearchParams(window.location.search);
  const groupId = queryParams.get("group");
  const categoryId = queryParams.get("category");
  return <BookmarkManage groupId={groupId} categoryId={categoryId} />;
}
