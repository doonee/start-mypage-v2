import React from "react";
import ConfigManage from "./ConfigManage";

export default function BookmarkManage() {
  return (
    <section className="container-xl">
      <div className="row d-flex justify-content-center">
        <h2 className="h2">설정</h2>
        <div className="col-md-7 mt-md-0">
          <ConfigManage />
        </div>
      </div>
    </section>
  );
}
