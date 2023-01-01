import React from 'react'

export default function GetResultMark({ isEmpty }) {
  if (isEmpty) {
    return <div className="d-flex justify-content-center align-items-center"
      style={{ height: '100px' }}>검색 결과가 없습니다.</div>
  } else if (isEmpty === false) {
    return <></>
  } else {
    return <div className="d-flex justify-content-center align-items-center"
      style={{ height: '100px' }}>Loading...</div>
  }
}
