import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faSquareShareNodes } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

export default function MyBookmarksByCategory({ item, showBookmarkModal }) {
  const groupNo = item.groupNo,
    categoryNo = item.categoryNo,
    categoryName = item.categoryName;
  const bookmarkMannageUrl = `/bookmarkManage/?group=${groupNo}&category=${categoryNo}`;

  return (
    <h6 key={categoryNo} style={{ lineHeight: '1.7rem' }}>
      <Link to={`/shareCategory/${categoryNo}`}
        target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faSquareShareNodes} size="lg" color='#ffff00b8' />
      </Link>
      &nbsp;&nbsp;
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
