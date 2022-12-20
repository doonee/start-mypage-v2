import React from "react";
import CategoryManage from "../../components/categories/CategoryManage";

export default function CategoryManagePage() {
  const queryParams = new URLSearchParams(window.location.search);
  const groupId = queryParams.get("group");
  return <CategoryManage groupId={groupId} />;
}
