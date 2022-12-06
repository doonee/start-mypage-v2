import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

export default function MyBookmarksByCategory({ item, showBookmarkModal }) {
  return (
    <h6 style={{ lineHeight: '1.7rem' }}>
      <a href="/mybookmarks" data-category="1223" title="북마크 관리">
        <strong>{item.categoryName}</strong>
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
