import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import BookmarkModal from "./BookmarkModal";
import MyBookmarksByCategory from './MyBookmarksByCategory';
import MyBookmarksCategoryTitle from './MyBookmarksCategoryTitle';
import axios from 'axios'

const MyBookmarks = ({ groupId }) => {
  const [modalShow, setModalShow] = useState(false);
  const [arrsameGroupCategory, setArrSameGroupCategory] = useState([]);

  useEffect(() => {
    setInitialArrBookmark(groupId);
  }, [groupId]);

  const setInitialArrBookmark = async (gid) => {
    try {
      const res = await axios.get('/datas/BookmarkData.json');
      if (res && res.status === 200 && res.data && res.data.length) {
        // eslint-disable-next-line eqeqeq
        const sameGroupCategory = res.data.filter(b => b.groupNo == gid);
        if (sameGroupCategory && sameGroupCategory.length)
          setArrSameGroupCategory(sameGroupCategory);
      }
    } catch (err) {
      console.log('err => ', err);
    }
  }

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
  const BookItems = arrsameGroupCategory.map(function (sameGroupCategory) {
    const bookmarks = sameGroupCategory.bookmarks;
    if (bookmarks && bookmarks.length) {
      const validCategory = sameGroupCategory;
      console.log('validCategory => ', validCategory)
      return (
        <div key={validCategory.categoryNo}>
          <MyBookmarksCategoryTitle
            group={validCategory}
            showBookmarkModal={showBookmarkModal} />
          <MyBookmarksByCategory
            bookmarks={validCategory.bookmarks}
            showBookmarkModal={showBookmarkModal} />
        </div>
      );
    }
    return "";
  });

  return (
    <section className="container-xl py-2">
      <Masonry
        breakpointCols={myBreakpointsAndCols}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {BookItems}
      </Masonry>

      <BookmarkModal show={modalShow} onHide={() => setModalShow(false)} />
    </section>
  );
};

export default MyBookmarks;
