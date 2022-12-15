import React from "react";
import MyBookmarks from "../../components/bookmarks/MyBookmarks";

export default function MyBookmarksPage() {
  const queryParams = new URLSearchParams(window.location.search);
  const groupId = queryParams.get("group");
  return <MyBookmarks groupId={groupId} />;
}
