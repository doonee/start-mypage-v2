import React, { useCallback, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import BookmarkItemManage from "./BookmarkItemManage";
import BookmarkModal from "./BookmarkModal";
import CategorySel from "../categories/CategorySel";
import GroupSel from "../groups/GroupSel";
import axios from 'axios';

export default function BookmarkManage({ groupId, categoryId }) {
  const [gid, setGid] = useState(() => { return groupId });
  const [cid, setCid] = useState(() => { return categoryId });
  const [firstCategory, setFirstCategory] = useState(true);
  const [groupData, setGroupData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [bookmarkData, setBookmarkData] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  const initGroupData = useCallback(async () => {
    try {
      const res = await axios.get('/datas/GroupData.json');
      if (res && res.status === 200 && res.data && res.data.length) {
        const arr = res.data;
        if (arr && arr.length) {
          setGroupData(arr);
        }

        if (Number(gid) > 0) return Number(gid);
        else return Number(arr[0].groupNo);

      }
    } catch (err) {
      console.log('err => ', err);
    }
  }, [gid])

  useEffect(() => {
    const init = async () => {
      const newGid = await initGroupData();
      setGid(newGid);
    }
    init();
  }, [initGroupData])

  const initCategoryData = useCallback(async () => {
    try {
      setCategoryData([]);
      const res = await axios.get('/datas/CategoryData.json');
      if (res && res.status === 200 && res.data && res.data.length) {
        const arr = res.data.filter(c => Number(c.groupNo) === Number(gid));
        if (arr && arr.length) {
          setCategoryData(arr);

          if (firstCategory) {
            return Number(cid);
          } else {
            if (cid) return Number(cid);
            else return Number(arr[0].categoryNo);
          }
        }
      }
    } catch (err) {
      console.log('err => ', err);
    }
  }, [gid, cid, firstCategory])

  useEffect(() => {
    const init = async () => {
      const newCid = await initCategoryData();
      setCid(newCid);
    }
    init();
  }, [initCategoryData, gid, cid])

  const initBookmarkData = useCallback(async () => {
    try {
      await setBookmarkData([]);
      const res = await axios.get('/datas/BookmarkData.json');
      if (res && res.status === 200 && res.data && res.data.length) {
        const arr = res.data.filter(c => Number(c.categoryNo) === Number(cid));
        if (arr && arr.length) {
          await setBookmarkData(arr);
        }
      }
    } catch (err) {
      console.log('err => ', err);
    }
  }, [cid])

  useEffect(() => {
    const init = async () => {
      await initBookmarkData();
      if (Number(groupId) !== Number(gid) || Number(categoryId) !== Number(cid)) {
        await setFirstCategory(false);
      }
    }
    init();
  }, [initBookmarkData, categoryId, gid, groupId, cid])

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
              setGid={setGid}
              setCid={setCid} />
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
          <h3 className="h4 p-2 bg-gradient bg-dark bg-opacity-25">북마크
            &nbsp;
            <span className="align-middle" title="카테고리 추가">
              <FontAwesomeIcon
                icon={faPlusCircle}
                size="lg"
                onClick={(e) => showBookmarkModal()}
              />
            </span>
          </h3>
          <BookmarkItemManage
            bookmarkData={bookmarkData}
            showBookmarkModal={showBookmarkModal} />
        </div>
      </div>
      <BookmarkModal show={modalShow} onHide={() => setModalShow(false)} />
    </section>
  );
}
