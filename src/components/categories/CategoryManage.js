import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import CategoryItemManage from "./CategoryItemManage";
import GroupSel from "../groups/GroupSel";
import CategoryModal from "./CategoryModal";
import axios from 'axios';

export default function CategoryManage({ groupId }) {
  const [gid, setGid] = useState(() => { return groupId });
  const [groupData, setGroupData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    async function init() {
      await setInitialGroup(gid);
      await setInitialCategory(gid);
    };
    init();
  }, [gid]);

  const setInitialGroup = async (g) => {
    try {
      const group = await axios.get('/datas/GroupData.json');
      if (group && group.status === 200 && group.data && group.data.length) {
        await setGroupData(group.data || []);

        if (!g) await setGid(group.data[0].groupNo);
      }
    } catch (err) {
      console.log('err => ', err);
    }
  }

  const setInitialCategory = async (g) => {
    try {
      if (g) {
        await setGid(g);
        const category = await axios.get('/datas/CategoryData.json');
        if (category && category.status === 200 && category.data && category.data.length) {
          // eslint-disable-next-line eqeqeq
          await setCategoryData(category.data.filter(d => d.groupNo == g));
        }
      }
    } catch (err) {
      console.log('err => ', err);
    }
  }

  const showCategoryModal = (e) => {
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
        <h2 className="h2">카테고리 관리</h2>
        <div className="col-md">
          <div className="col-sm-12 col-lg-12 mb-4">
            <h3 className="h4 p-2 bg-gradient bg-dark bg-opacity-25">그룹</h3>
            <GroupSel
              gid={gid}
              groupData={groupData}
              setGid={setGid} />
          </div>
        </div>
        <div className="col-md-7 mt-4 mt-md-0">
          <h3 className="h4 p-2 bg-gradient bg-dark bg-opacity-25">카테고리
            &nbsp;
            <span className="align-middle" title="카테고리 추가">
              <FontAwesomeIcon
                icon={faPlusCircle}
                size="lg"
                onClick={(e) => showCategoryModal()}
              />
            </span>
          </h3>
          <CategoryItemManage
            categoryData={categoryData}
            showCategoryModal={showCategoryModal} />
        </div>
      </div>
      <CategoryModal show={modalShow} onHide={() => setModalShow(false)} />
    </section>
  );
}
