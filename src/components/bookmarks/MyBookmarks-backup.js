import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import BookmarkModal from "./BookmarkModal";
import MyBookmarksByCategory from './MyBookmarksByCategory';
import MyBookmarksCategoryTitle from './MyBookmarksCategoryTitle';
import axios from 'axios'
import LoadingPop from '.././LoadingPop'

const MyBookmarks = ({ groupId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [arrsameGroupCategory, setArrSameGroupCategory] = useState([]);
  const [selGroup, setSelGroup] = useState(() => { return groupId });

  useEffect(() => {
    console.log('useEffect()')
    // Check if the page has already loaded
    if (document.readyState === 'complete') {
      setGroupClickStyle();
    } else {
      window.addEventListener('load', setGroupClickStyle);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener('load', setGroupClickStyle);
    }
  }, []);

  useEffect(() => {
    setContents(selGroup);
  }, [selGroup]);

  const setGroupClickStyle = () => {
    try {
      const groups = document.querySelectorAll('#ul-group > li.nav-item.short-title');
      if (!groups) {
        setTimeout(() => {
          setGroupClickStyle();
        }, 1000);
      }
      groups.forEach(function (g) {
        if (g.classList.contains('active')) {
          setSelGroup(g.getAttribute('data-id'));
        }
        g.addEventListener('click', (e) => {
          setSelGroup(e.target.getAttribute('data-id'))
        });
      });
      if (!selGroup) {
        setTimeout(() => {
          setGroupClickStyle();
        }, 1000);
      }
    } catch (error) {
      console.log('error => ', error);
    }
  }

  const setContents = async (gid) => {
    try {
      await setIsLoading(true);
      const res = await axios.get('/datas/MyBookmarkData.json');
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
  const BookItems = arrsameGroupCategory.map(function (item) {
    return (
      <div key={item.categoryNo}>
        <MyBookmarksCategoryTitle
          item={item}
          showBookmarkModal={showBookmarkModal} />
        <MyBookmarksByCategory
          bookmarks={item.bookmarks}
          showBookmarkModal={showBookmarkModal} />
      </div>
    );
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

      <LoadingPop isLoading={isLoading} />
    </section>
  );
};

export default MyBookmarks;
