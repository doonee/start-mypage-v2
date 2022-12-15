import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

export default function MyBookmarksByCategory({ group, showBookmarkModal }) {
  const groupNo = group.groupNo,
    categoryNo = group.categoryNo,
    categoryName = group.categoryName;
  const bookmarkMannageUrl = `/bookmarkManage/${groupNo}/${categoryNo}`;
  return (
    <h6 key={categoryNo} style={{ lineHeight: '1.7rem' }}>
      <a href={bookmarkMannageUrl} data-category={categoryNo} title={categoryName}>
        <strong>{categoryName}</strong>
      </a>
      &nbsp;&nbsp;
      <span className="align-middle" title="북마크 추가">
        <FontAwesomeIcon
          icon={faPlusCircle}
          size="lg"
          onClick={(e) => showBookmarkModal(null)}
        />
      </span>
    </h6>
  )
}
