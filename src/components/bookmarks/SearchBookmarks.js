import React from "react";
import Masonry from "react-masonry-css";
import BookmarkModal from "./BookmarkModal";
//import MyBookmarksData from "../../datas/BookmarkData.json";
import MyBookmarksByCategory from './MyBookmarksByCategory';
import MyBookmarksCategoryTitle from './MyBookmarksCategoryTitle';
import axios from 'axios'

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
  const [arrBookmark, setArrBookmark] = React.useState([]);

  const setInitialArrBookmark = async (cNo) => {
    try {
      const res = await axios.get('/datas/BookmarkData.json');
      if (res && res.status === 200 && res.data && res.data.length) {
        // eslint-disable-next-line eqeqeq
        const arr = res.data.filter(b => b.categoryNo == cNo);
        if (arr && arr.length) setArrBookmark(arr[0].bookmarks);
      }
    } catch (err) {
      console.log('err >> ', err);
    }
  }

  React.useEffect(() => {
    setInitialArrBookmark();
  }, []);

  // 모듈 형태로 넣으면 정렬이 비정상적으로 되서 변수 활용함!
  const BookmarkManage = arrBookmark.map(function (items) {
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
