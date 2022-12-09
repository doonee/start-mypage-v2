import React from 'react'
import * as Icon from "react-bootstrap-icons";
import BookmarkManageData from '../datas/BookmarkManageData.json'

export default function BookmarkManage({ showBookmarkModal }) {
  const [selectedLi, setSelectedLi] = React.useState(null);

  const handleRadioChecked = (e) => {
    e.target.closest('ul').querySelectorAll('li').forEach(element => {
      element.style.backgroundColor = 'transparent';
    });
    e.target.closest('li').style.backgroundColor = '#f8f9e1';
    setSelectedLi(e.target.closest('li'));
  }

  const handleBookmarkRowClick = (e) => {
    e.target.closest('li').querySelector('input[type=radio]').click();
  }

  const moveTo = (e) => {
    if (!selectedLi) {
      alert('북마크를 선택하세요.');
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
    alert(`${selectedItem}번 북마크 삭제.`);
  }

  const handleSortSave = () => {
    const arrBookmark = [];
    document.querySelectorAll('#ul-list-group li').forEach((li) => {
      arrBookmark.push(li.getAttribute('data-id'));
    });
    alert(arrBookmark);
  }

  return (
    <>
      <ul className="list-group" id='ul-list-group'>
        {
          BookmarkManageData.map((item) => {
            let outerName = item.bookmarkName;
            if (item.isImportant) outerName = `<strong>${outerName}</strong>`;
            if (item.isLinethrough) outerName = `<del>${outerName}</del>`;
            if (item.bookmarkDesc) outerName = `${outerName} <small>- ${item.bookmarkDesc}</small>`;
            return (
              <li key={item.bookmarkNo}
                className="list-group-item text-truncate"
                data-id={item.bookmarkNo}
                onClick={handleBookmarkRowClick}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="bookmarkRadios"
                  id={`bookmark-${item.bookmarkNo}`}
                  value={item.bookmarkId}
                  onChange={handleRadioChecked} />
                &nbsp;&nbsp;
                <Icon.PencilSquare onClick={(e) => {
                  showBookmarkModal(e);
                  handleBookmarkRowClick(e);
                }}
                  className="align-middle" title="북마크 수정" />
                &nbsp;&nbsp;
                <a
                  onClick={handleBookmarkRowClick}
                  target="_blank"
                  rel="noreferrer"
                  href={item.bookmarkUrl}
                  data-bookmark-id={item.bookmarkId}
                  dangerouslySetInnerHTML={{ __html: outerName }}>
                </a>
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
