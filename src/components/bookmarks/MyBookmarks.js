import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import BookmarkModal from "./BookmarkModal";
import MyBookmarksByCategory from './MyBookmarksByCategory';
import MyBookmarksCategoryTitle from './MyBookmarksCategoryTitle';
import axios from 'axios'
import Loading from '.././Loading'

const MyBookmarks = ({ groupId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [arrsameGroupCategory, setArrSameGroupCategory] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(() => {
    if (groupId) return groupId;
    else {
      const groups = document.querySelectorAll('#ul-group > li.nav-item.short-title');
      groups.forEach(function (g) {
        if (g.classList.contains('active')) {
          return (g.getAttribute('data-id'));
        }
      });
    }
  });

  useEffect(() => {
    const groups = document.querySelectorAll('#ul-group > li.nav-item.short-title');
    groups.forEach(function (g) {
      if (g.classList.contains('active')) {
        setSelectedGroup(g.getAttribute('data-id'));
      }
      g.addEventListener('click', (e) => {
        setSelectedGroup(e.target.getAttribute('data-id'))
      });
    });
  }, []);

  useEffect(() => {
    setContents(selectedGroup);
  }, [selectedGroup]);

  const setContents = async (gid) => {
    try {
      await setIsLoading(true);
      const res = await axios.get('/datas/BookmarkData.json');
      if (res && res.status === 200 && res.data && res.data.length) {
        // eslint-disable-next-line eqeqeq
        const sameGroupCategory = await res.data.filter(b => b.groupNo == gid);
        if (sameGroupCategory && sameGroupCategory.length)
          await setArrSameGroupCategory(sameGroupCategory);
      }
    } catch (err) {
      console.log('err => ', err);
    } finally {
      await setIsLoading(false);
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

      <Loading isLoading={isLoading} />
    </section>
  );
};

export default MyBookmarks;
