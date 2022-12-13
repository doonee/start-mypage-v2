import React from "react";
import Masonry from "react-masonry-css";
import BookmarkModal from "./BookmarkModal";
import MyBookmarksData from "../../datas/BookmarkData.json";
import MyBookmarksByCategory from './MyBookmarksByCategory';
import MyBookmarksCategoryTitle from './MyBookmarksCategoryTitle';

const SearchBookmarks = () => {
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
      e.target.closest("p").style.fontWeight = "bold";
    }
    setModalShow(true);
  };

  const myBreakpointsAndCols = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  // 모듈 형태로 넣으면 정렬이 비정상적으로 되서 변수 활용함!
  const BookmarkManage = MyBookmarksData.map(function (items) {
    return (
      <div key={items.categoryNo}>
        <MyBookmarksCategoryTitle item={items} showBookmarkModal={showBookmarkModal} />
        <MyBookmarksByCategory bookmarks={items.bookmarks} showBookmarkModal={showBookmarkModal} />
      </div>
    );
  });

  return (
    <section className="container-xl py-2">
      <Masonry
        breakpointCols={myBreakpointsAndCols}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {BookmarkManage}
      </Masonry>

      <BookmarkModal show={modalShow} onHide={() => setModalShow(false)} />
    </section>
  );
};

export default SearchBookmarks;
