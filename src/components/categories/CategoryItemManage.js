import React, { useState } from 'react'
import * as Icon from "react-bootstrap-icons";

export default function CategoryItemManage({ showCategoryModal, groupId, categoryData }) {
  const [selectedLi, setSelectedLi] = useState(null);

  const handleRadioChecked = (e) => {
    e.target.closest('ul').querySelectorAll('li').forEach(element => {
      element.style.backgroundColor = 'transparent';
    });
    e.target.closest('li').style.backgroundColor = '#f8f9e1';
    setSelectedLi(e.target.closest('li'));
  }

  const handleCategoryRowClick = (e) => {
    e.target.closest('li').querySelector('input[type=radio]').click();
  }

  const moveTo = (e) => {
    if (!selectedLi) {
      alert('카테고리를 선택하세요.');
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
    alert(`${selectedItem}번 카테고리 삭제.`);
  }

  const handleSortSave = () => {
    const arrCategory = [],
      group = document.getElementById('sel-group'),
      arrLi = document.querySelectorAll('#ul-list-group li');
    if (!arrLi.length) {
      alert('저장할 카테고리가 없습니다.');
      return;
    }
    arrLi.forEach((li) => {
      arrCategory.push(li.getAttribute('data-id'));
    });
    const data = {
      group: group.value,
      arrCategory: arrCategory
    }
    console.log('data => ', data);
    setTimeout(() => {
      alert('카테고리 순서가 저장되었습니다.');
      window.location.replace(`/categoryManage/${data.group}`);
    }, 2000);
  }

  return (
    <>
      <ul className="list-group" id='ul-list-group'>
        {
          categoryData.map((item) => {
            const groupNo = item.groupNo;
            const categoryNo = item.categoryNo;
            let outerName = `<a href="/bookmarkManage/?group=${groupNo}&category=${categoryNo}">${item.categoryName}</a>`;
            if (item.isImportant) outerName = `<strong>${outerName}</strong>`;
            if (item.isLinethrough) outerName = `<del>${outerName}</del>`;
            if (item.categoryDesc) outerName = `${outerName} <small>- ${item.categoryDesc}</small>`;
            return (
              <li key={item.categoryNo}
                className="list-group-item text-truncate"
                data-id={item.categoryNo}
                onClick={handleCategoryRowClick}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="categoryRadios"
                  id={`category-${item.categoryNo}`}
                  value={item.categoryId}
                  onChange={handleRadioChecked} />
                &nbsp;&nbsp;
                <Icon.PencilSquare
                  onClick={(e) => {
                    showCategoryModal(e);
                    handleCategoryRowClick(e);
                  }}
                  className="align-middle"
                  title="카테고리 수정" />
                &nbsp;&nbsp;
                <span
                  onClick={handleCategoryRowClick}
                  data-category-id={item.categoryId}
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
