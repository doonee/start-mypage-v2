import React, { useEffect, useState } from 'react'
import * as Icon from "react-bootstrap-icons";
import axios from 'axios';

export default function GroupItemManage({ showGroupModal }) {
  const [selectedLi, setSelectedLi] = useState(null);
  const [groupData, setGroupData] = useState([]);

  const initialGroupData = async () => {
    try {
      const res = await axios.get('/datas/GroupData.json');
      if (res && res.status === 200 && res.data && res.data.length) {
        const arr = res.data;
        if (arr && arr.length) await setGroupData(arr);
      }
    } catch (err) {
      console.log('err => ', err);
    }
  }

  useEffect(() => {
    initialGroupData();
  }, [])

  const handleRadioChecked = (e) => {
    e.target.closest('ul').querySelectorAll('li').forEach(element => {
      element.style.backgroundColor = 'transparent';
    });
    e.target.closest('li').style.backgroundColor = '#f8f9e1';
    setSelectedLi(e.target.closest('li'));
  }

  const handleGroupRowClick = (e) => {
    e.target.closest('li').querySelector('input[type=radio]').click();
  }

  const moveTo = (e) => {
    if (!selectedLi) {
      alert('그룹를 선택하세요.');
      return;
    }
    const ul = document.getElementById('ul-list-group');
    const direction = e.target.closest('button').getAttribute('data-direction');
    if (direction === 'top') {
      ul.insertBefore(selectedLi, ul.firstChild);
    }
    else if (direction === 'up') {
      const wrapperParent = selectedLi.parentNode;
      const wrapperPervious = selectedLi.previousElementSibling;
      if (wrapperPervious) wrapperParent.insertBefore(selectedLi, wrapperPervious);
    }
    else if (direction === 'down') {
      const wrapperParent = selectedLi.parentNode;
      const wrapperNext = selectedLi.nextElementSibling;
      if (wrapperNext) wrapperParent.insertBefore(wrapperNext, selectedLi);
    }
    else if (direction === 'bottom') {
      ul.insertBefore(selectedLi, null);
    }
  }

  const handleSelectedDelete = () => {
    let selectedItem = null;
    document.querySelectorAll('#ul-list-group li').forEach((li) => {
      if (li.querySelector('input[type=radio]').checked) {
        selectedItem = li.getAttribute('data-id');
      }
    });
    alert(`${selectedItem}번 그룹 삭제.`);
  }

  const handleSortSave = () => {
    const arrGroup = [],
      arrLi = document.querySelectorAll('#ul-list-group li');
    if (!arrLi.length) {
      alert('저장할 그룹이 없습니다.');
      return;
    }
    arrLi.forEach((li) => {
      arrGroup.push(li.getAttribute('data-id'));
    });
    const data = {
      arrGroup: arrGroup
    }
    console.log('data => ', data);
    setTimeout(() => {
      alert('그룹순서가 저장되었습니다.');
      window.location.replace(`/groups`);
    }, 2000);
  }

  return (
    <>
      <ul className="list-group" id='ul-list-group'>
        {
          groupData.map((item) => {
            const groupNo = item.groupNo;
            let outerName = `<a href="/categoryManage/?group=${groupNo}">${item.groupName}</a>`;
            if (item.isImportant) outerName = `<strong>${outerName}</strong>`;
            if (item.isLinethrough) outerName = `<del>${outerName}</del>`;
            if (item.groupDesc) outerName = `${outerName} <small>- ${item.groupDesc}</small>`;
            return (
              <li key={groupNo}
                className="list-group-item text-truncate"
                data-id={groupNo}
                onClick={handleGroupRowClick}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="groupRadios"
                  id={`group-${groupNo}`}
                  value={item.groupId}
                  onChange={handleRadioChecked} />
                &nbsp;&nbsp;
                <Icon.PencilSquare
                  onClick={(e) => {
                    showGroupModal(e);
                    handleGroupRowClick(e);
                  }}
                  className="align-middle"
                  title="그룹 수정" />
                &nbsp;&nbsp;
                <span
                  onClick={handleGroupRowClick}
                  data-group-id={item.groupId}
                  dangerouslySetInnerHTML={{ __html: outerName }}>
                </span>
              </li>
            )
          })
        }
      </ul>
      <div className="btn-group col-12 mt-2">
        <button type="button" className="col btn btn-outline-secondary" onClick={moveTo} data-direction="top"><Icon.ChevronDoubleUp /></button>
        <button type="button" className="col btn btn-outline-secondary" onClick={moveTo} data-direction="up"><Icon.ChevronUp /></button>
        <button type="button" className="col btn btn-outline-secondary" onClick={moveTo} data-direction="down"><Icon.ChevronDown /></button>
        <button type="button" className="col btn btn-outline-secondary" onClick={moveTo} data-direction="bottom"><Icon.ChevronDoubleDown /></button>
      </div>
      <div className="btn-group col-12 mt-2">
        <button type="button" className="col btn btn-outline-danger" onClick={handleSelectedDelete}>선택 삭제</button>
        <button type="button" className="col btn btn-outline-primary" onClick={handleSortSave}>순서 저장</button>
      </div>
    </>
  )
}
