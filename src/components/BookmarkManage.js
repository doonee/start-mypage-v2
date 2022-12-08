import React from 'react'
import * as Icon from "react-bootstrap-icons";
import BookmarkManageItems from './BookmarkManageItems';

export default function BookmarkManage({ showBookmarkModal }) {
  return (
    <>
      <ul className="list-group">
        <BookmarkManageItems showBookmarkModal={showBookmarkModal} />
      </ul>
      <div className="btn-group col-12 mt-2">
        <button type="button" className="col btn btn-outline-secondary"><Icon.ChevronDoubleUp /></button>
        <button type="button" className="col btn btn-outline-secondary"><Icon.ChevronUp /></button>
        <button type="button" className="col btn btn-outline-secondary"><Icon.ChevronDown /></button>
        <button type="button" className="col btn btn-outline-secondary"><Icon.ChevronDoubleDown /></button>
      </div>
      <div className="btn-group col-12 mt-2">
        <button type="button" className="col btn btn-outline-danger">삭제</button>
        <button type="button" className="col btn btn-outline-primary">저장</button>
      </div>
    </>
  )
}
