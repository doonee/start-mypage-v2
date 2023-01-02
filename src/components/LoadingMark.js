import React from 'react'

export default function LoadingMark({ length, msg }) {
  const Frm = (props) => {
    return (
      <div className="d-flex justify-content-center align-items-center"
        style={{ height: '200px' }}>{props.msg}</div>
    )
  }

  if (length === -1) {
    return <Frm key={length} msg={msg} />
  } else if (length === 0) {
    return <Frm key={length} msg="검색 결과가 없습니다." />
  } else {
    return <></>
  }
}
