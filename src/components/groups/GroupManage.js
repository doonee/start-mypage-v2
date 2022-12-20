import React from "react";
import GroupItemManage from "./GroupItemManage";
import GroupModal from "./GroupModal";

export default function BookmarkManage() {
  const [modalShow, setModalShow] = React.useState(false);

  const showGroupModal = (e) => {
    // 애니메이션 적용안됨
    // var groupModal = new bootstrap.Modal(
    //   document.getElementById("newModal"),
    //   {}
    // );
    // document
    //   .getElementById("newModal")
    //   .classList.add("animate__animated", "animate__pulse");
    // groupModal.show();
    if (e) {
      e.preventDefault();
      e.target.closest("li").style.fontWeight = "bold";
    }
    setModalShow(true);
  };

  return (
    <section className="container-xl">
      <div className="row d-flex justify-content-center">
        <h2 className="h2">그룹 관리</h2>
        <div className="col-md-7 mt-md-0">
          <h3 className="h4 p-2 bg-gradient bg-dark bg-opacity-25">그룹</h3>
          <GroupItemManage showGroupModal={showGroupModal} />
        </div>
      </div>
      <GroupModal show={modalShow} onHide={() => setModalShow(false)} />
    </section>
  );
}
