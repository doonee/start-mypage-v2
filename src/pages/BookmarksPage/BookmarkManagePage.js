import React from "react";
import { useParams } from 'react-router';
import BookmarkManage from "../../components/bookmarks/BookmarkManage";

export default function BookmarkManagePage() {
  const params = useParams();
  return <BookmarkManage groudId={params.groudId} categoryId={params.categoryId} />;
}
