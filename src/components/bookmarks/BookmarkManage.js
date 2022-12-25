import React, { useEffect, useState } from "react";
import BookmarkItemManage from "./BookmarkItemManage";
import BookmarkModal from "./BookmarkModal";
import CategorySel from "../categories/CategorySel";
import GroupSel from "../groups/GroupSel";
import axios from 'axios';

export default function BookmarkManage({ groupId, categoryId }) {
  const [gid, setGid] = useState();
  const [cid, setCid] = useState(() => { return categoryId });
  const [groupData, setGroupData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [bookmarkData, setBookmarkData] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  // useEffect(() => {
  //   async function init() {
  //     await setInitialGroup(gid);
  //     await setInitialCategory(gid);
  //   };
  //   init();
  // }, [gid]);

  // useEffect(() => {
  //   async function init() {
  //     await setInitialBookmark(cid);
  //   };
  //   init();
  // }, [cid]);

  const setInitialGroup = async (g) => {
    try {
      const group = await axios.get('/datas/GroupData.json');
      if (group && group.status === 200 && group.data && group.data.length) {
        await setGroupData(group.data);
        if (!g) await setGid(group.data[0].groupNo);
      }
    } catch (err) {
      console.log('err => ', err);
    }
  }

  useEffect(() => {
    async function initGroup() {
      await setGid(groupId);
      await setInitialGroup(groupId);
    }
    initGroup();
  }, [groupId])

  const setInitialCategory = async (g, c) => {
    try {
      if (g) {
        const category = await axios.get('/datas/CategoryData.json');
        if (category && category.status === 200 && category.data && category.data.length) {
          await setCategoryData(category.data.filter(d => Number(d.groupNo) === Number(g)));
          if (!c) await setCid(category.data.filter(c => Number(c.groupNo) === Number(g))[0].categoryNo);
        }
      }
    } catch (err) {
      console.log('err => ', err);
    }
  }

  useEffect(() => {
    async function initCategory() {
      await setCid(categoryId);
      await setInitialCategory(groupId, categoryId);
    }
    initCategory();
  }, [groupId, categoryId])

  const setInitialBookmark = async (c) => {
    try {
      if (c) {
        const bookmark = await axios.get('/datas/BookmarkData.json');
        if (bookmark && bookmark.status === 200 && bookmark.data && bookmark.data.length) {
          await setBookmarkData(bookmark.data.filter(b => Number(b.categoryNo) === Number(c)));
        }
      }
    } catch (err) {
      console.log('err => ', err);
    }
  }

  useEffect(() => {
    async function initBookmark() {
      await setCid(categoryId);
      await setInitialBookmark(categoryId);
    }
    initBookmark();
  }, [categoryId])

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
            <GroupSel
              groupId={gid}
              groupData={groupData}
              setInitialCategory={setInitialCategory}
              setInitialBookmark={setInitialBookmark} />
          </div>
          <div className="col-sm-12 col-lg-12">
            <h3 className="h4 p-2 bg-gradient bg-dark bg-opacity-25">카테고리</h3>
            <CategorySel
              groupId={gid}
              categoryData={categoryData}
              setInitialCategory={setInitialCategory}
              setInitialBookmark={setInitialBookmark} />
          </div>
        </div>
        <div className="col-md-7 mt-4 mt-md-0">
          <h3 className="h4 p-2 bg-gradient bg-dark bg-opacity-25">북마크</h3>
          <BookmarkItemManage
            showBookmarkModal={showBookmarkModal}
            categoryId={categoryId}
            bookmarkData={bookmarkData}
            setInitialBookmark={setInitialBookmark} />
        </div>
      </div>
      <BookmarkModal show={modalShow} onHide={() => setModalShow(false)} />
    </section>
  );
}
