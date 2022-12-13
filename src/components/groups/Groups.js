import React from "react";
import GroupManage from "./GroupManage";

export default function Bookmarks() {
  return (
    <section className="container-xl">
      <div className="row d-flex justify-content-center">
        <h2 className="h2">그룹 관리</h2>
        <div className="col-md-7 mt-md-0">
          <h3 className="h4 p-2 bg-gradient bg-dark bg-opacity-25">그룹</h3>
          <GroupManage />
        </div>
      </div>
    </section>
  );
}
