import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import BookmarkModal from "./BookmarkModal";
import MyBookmarksByCategory from './MyBookmarksByCategory';
import MyBookmarksCategoryTitle from './MyBookmarksCategoryTitle';
import axios from 'axios'
import Loading from '../Loading'

const MyBookmarks = ({ groupId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selGroup, setSelGroup] = useState(() => { return groupId });
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const initGroup = setInterval(() => {
      const groupEl = document.querySelectorAll('#ul-group > li.nav-item.short-title');
      if (groupEl && groupEl.length) {
        setGroups(groupEl);
        clearInterval(initGroup);
      }
    }, 300);
  }, []);

  useEffect(() => {
    groups.forEach(function (g) {
      if (g.classList.contains('active')) {
        setSelGroup(g.getAttribute('data-id'));
      }
      g.addEventListener('click', (e) => {
        setSelGroup(e.target.getAttribute('data-id'))
      });
    });
  }, [groups]);

  useEffect(() => {
    const getData = async () => {
      try {
        await setIsLoading(true);
        await setCategories([]);
        const res = await axios.get('/datas/MyBookmarkData.json');
        if (res && res.status === 200 && res.data && res.data.length) {
          const sameGroupCategory = res.data.filter(b => Number(b.groupNo) === Number(selGroup));
          if (sameGroupCategory && sameGroupCategory.length) {
            await setCategories(sameGroupCategory);
          }
        }
      } catch (err) {
        console.error(err);
      } finally {
        await setIsLoading(false);
      }
    }
    getData();
  }, [selGroup]);

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
  const BookItems = categories.map(function (item) {
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

      <Loading isLoading={isLoading} />
    </section>
  );
};

export default MyBookmarks;
