import React from "react";
import GroupManage from "./GroupManage";

export default function Groups() {
  return (
    <section className="container-xl d-flex justify-content-center">
      <div className="row">
        <div className="col-md-7 mt-4 mt-md-0">
          <h2 className="h2">그룹 관리</h2>
          <h3 className="h4 p-2 bg-gradient bg-dark bg-opacity-25">그룹</h3>
          <GroupManage />
        </div>
      </div>
    </section>
  );
}
