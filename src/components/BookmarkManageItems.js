import React from 'react'
import * as Icon from "react-bootstrap-icons";
import BookmarkManageData from '../datas/BookmarkManageData.json'

export default function BookmarkManage({ showBookmarkModal }) {
  const resetBackground = (e) => {
    console.log(e.target.closest('ul').querySelectorAll('li'));
  }
  const handleRadioChecked = (e) => {
    resetBackground(e);
    const target = e.target;
    console.log(target)
    target.closest('li').style.backgroundColor = 'yellow';
  }

  const handleBookmarkRowClick = (e) => {
    if (e.target.querySelector('input[type=radio]')) {
      resetBackground(e);
      e.target.querySelector('input[type=radio]').checked = true;
      e.target.style.backgroundColor = 'yellow';
    }
  }

  return (
    BookmarkManageData.map((item) => {
      let outerName = item.bookmarkName;
      if (item.isImportant) outerName = `<strong>${outerName}</strong>`;
      if (item.isLinethrough) outerName = `<del>${outerName}</del>`;
      if (item.bookmarkDesc) outerName = `${outerName} <small>- ${item.bookmarkDesc}</small>`;
      return (
        <li key={item.bookmarkNo}
          className="list-group-item text-truncate"
          onClick={handleBookmarkRowClick}>
          <input
            className="form-check-input"
            type="radio"
            name="bookmarkRadios"
            id={`bookmark-${item.bookmarkNo}`}
            value={item.bookmarkId}
            onChange={handleRadioChecked} />
          &nbsp;&nbsp;
          <Icon.PencilSquare onClick={(e) => showBookmarkModal(e)}
            className="align-middle" title="북마크 수정" />
          &nbsp;&nbsp;
          <a
            target="_blank"
            rel="noreferrer"
            href={item.bookmarkUrl}
            data-bookmark-id={item.bookmarkId}
            dangerouslySetInnerHTML={{ __html: outerName }}>
          </a>
        </li>
      )
    })
  )
}
