import React from 'react'
import * as Icon from "react-bootstrap-icons";
import BookmarkManageData from '../datas/BookmarkManageData.json'

export default function BookmarkManage({ showBookmarkModal }) {
  const resetBackground = (e) => {
    e.target.closest('ul').querySelectorAll('li').forEach(element => {
      element.style.backgroundColor = 'transparent';
    });
  }

  const handleRadioChecked = (e) => {
    resetBackground(e);
    e.target.closest('li').style.backgroundColor = '#f8f9e1';
  }

  const handleBookmarkRowClick = (e) => {
    e.target.closest('li').querySelector('input[type=radio]').click();
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
  )
}
