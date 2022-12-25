import React, { useEffect, useState } from "react";
import BookmarkItemManage from "./BookmarkItemManage";
import BookmarkModal from "./BookmarkModal";
import CategorySel from "../categories/CategorySel";
import GroupSel from "../groups/GroupSel";
import axios from 'axios';

export default function BookmarkManage({ groupId, categoryId }) {
  const [gid, setGid] = useState(() => { return groupId });
  const [cid, setCid] = useState(() => { return categoryId });
  const [groupData, setGroupData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [bookmarkData, setBookmarkData] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  const setGroupInit = async (gid) => {
    try {
      const group = await axios.get('/datas/GroupData.json');
      if (group && group.status === 200 && group.data && group.data.length) {
        const gr = group.data.sort((a, b) => a.groupNo - b.groupNo);

        await setGroupData(gr);

        if (Number(gid) > 0) return gid;
        else return gr[0].groupNo;
      }
      return null;
    } catch (err) {
      console.log('err => ', err);
    }
  }

  useEffect(() => {
    const init = async (gid) => {
      await setGid(gid);
      await setGroupData([]);
      const gd = await setGroupInit(gid);
      await setGid(gd);
    }
    init(gid);
  }, [gid])

  const setCategoryInit = async (gd, cd) => {
    try {
      const groupNo = gd || gid;
      const category = await axios.get('/datas/CategoryData.json');
      if (category && category.status === 200 && category.data && category.data.length) {
        const cate = await category.data.filter(c => Number(c.groupNo) === Number(groupNo))
          .sort((a, b) => a.categoryNo - b.categoryNo);

        await setCategoryData(cate);

        //if (Number(cd) > 0) return cd;
        //else 
        return cate[0].categoryNo;
      }
      return null;
    } catch (err) {
      console.log('err => ', err);
    }
  }

  useEffect(() => {
    const init = async (gid, cid) => {
      console.log("🚀 ~ file: BookmarkManage.js:64 ~ init ~ gid", gid)
      console.log("🚀 ~ file: BookmarkManage.js:64 ~ init ~ cid", cid)
      await setCid(cid);
      await setCategoryData([]);
      const ccd = await setCategoryInit(gid, cid);
      await setCid(ccd);
      await setBookmarkInit(ccd);
    }
    init(gid, cid);
  }, [gid])

  useEffect(() => {
    const init = async (cid) => {
      await setBookmarkInit(cid);
    }
    init(cid);
  }, [cid])

  const setBookmarkInit = async (cd) => {
    try {
      await setBookmarkData([]);
      const bookmark = await axios.get('/datas/BookmarkData.json');
      console.log('bookmark => ', bookmark)
      if (bookmark && bookmark.status === 200 && bookmark.data && bookmark.data.length) {
        const arrBookmark = await bookmark.data.filter(b => Number(b.categoryNo) === Number(cd));

        await setBookmarkData(arrBookmark.sort((a, b) => a.bookmarkNo - b.bookmarkNo));
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
              groupData={groupData}
              gid={gid}
              setGid={setGid} />
          </div>
          <div className="col-sm-12 col-lg-12">
            <h3 className="h4 p-2 bg-gradient bg-dark bg-opacity-25">카테고리</h3>
            <CategorySel
              categoryData={categoryData}
              cid={cid}
              setCid={setCid}
              gid={gid} />
          </div>
        </div>
        <div className="col-md-7 mt-4 mt-md-0">
          <h3 className="h4 p-2 bg-gradient bg-dark bg-opacity-25">북마크</h3>
          <BookmarkItemManage
            bookmarkData={bookmarkData}
            showBookmarkModal={showBookmarkModal} />
        </div>
      </div>
      <BookmarkModal show={modalShow} onHide={() => setModalShow(false)} />
    </section>
  );
}
