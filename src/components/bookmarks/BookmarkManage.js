import React from "react";
import BookmarkItemManage from "./BookmarkItemManage";
import BookmarkModal from "./BookmarkModal";
import CategorySel from "../categories/CategorySel";
import GroupSel from "../groups/GroupSel";

export default function BookmarkManage({ groupId, categoryId }) {
  const [modalShow, setModalShow] = React.useState(false);

  const showBookmarkModal = (e) => {
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
      <div className="row">
        <h2 className="h2">북마크 관리</h2>
        <div className="col-md">
          <div className="col-sm-12 col-lg-12 mb-4">
            <h3 className="h4 p-2 bg-gradient bg-dark bg-opacity-25">그룹</h3>
            <GroupSel groupId={groupId} />
          </div>
          <div className="col-sm-12 col-lg-12">
            <h3 className="h4 p-2 bg-gradient bg-dark bg-opacity-25">카테고리</h3>
            <CategorySel categoryId={categoryId} />
          </div>
        </div>
        <div className="col-md-7 mt-4 mt-md-0">
          <h3 className="h4 p-2 bg-gradient bg-dark bg-opacity-25">북마크</h3>
          <BookmarkItemManage showBookmarkModal={showBookmarkModal} categoryId={categoryId} />
        </div>
      </div>
      <BookmarkModal show={modalShow} onHide={() => setModalShow(false)} />
    </section>
  );
}
