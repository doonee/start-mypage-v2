import React, { useState } from "react";
import axios from 'axios'
import LoadingMark from "../LoadingMark";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faObjectGroup,
  faBookmark,
  faChartPie,
} from "@fortawesome/free-solid-svg-icons";

const SearchBookmarks = ({ getParameter }) => {
  const [length, setLength] = useState(-1);
  const [msg, setMsg] = useState("Loading...");
  const [arrBookmark, setArrBookmark] = React.useState([]);

  const getBookmarks = (keyword) => {
    setMsg('Loading...');
    setLength(-1);
    setArrBookmark([]);
    if (!keyword) {
      return;
    }
    axios.get('/datas/BookmarkData.json')
      .then(res => {
        if (res && res.status === 200 && res.data && res.data.length) {
          const arr = res.data.filter(b => b.groupName.includes(keyword)
            || b.categoryName.includes(keyword)
            || b.bookmarkName.includes(keyword));
          setLength(arr.length);
          if (arr && arr.length) {
            setArrBookmark(arr);
          }
        } else {
          setLength(0);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  React.useEffect(() => {
    const k = getParameter('keyword');
    if (!k) {
      setMsg('검색어를 입력하세요.');
      return;
    }
    getBookmarks(k);
  }, [getParameter]);

  const bookmarkResults = arrBookmark.map(function (items) {
    const gName = `<a href="/myBookmarks/?group=${items.groupNo}" 
      rel="noopener noreferrer">${items.groupName}</a>`;
    const cName = `<a href="/myBookmarks/?group=${items.groupNo}" 
      rel="noopener noreferrer">${items.categoryName}</a>`;
    const bName = `<a href="${items.bookmarkUrl}" 
      target="_blank" rel="noopener noreferrer">${items.bookmarkName}</a>`;
    let bDesc = "";
    if (items.bookmarkDesc && items.bookmarkDesc.trim().length > 0) {
      bDesc = `<small>- ${items.bookmarkDesc}</small>`;
    }
    const htmlContent = `${gName} &gt; ${cName} &gt; ${bName}${bDesc}`;
    return (
      <li key={items.bookmarkNo}
        dangerouslySetInnerHTML={{ __html: htmlContent }} />
    );
  });

  return (
    <section className="container-xl py-2">
      <h4 className={length > 0 ? "d-block" : "d-none"}>
        <FontAwesomeIcon icon={faObjectGroup} /> 그룹 &gt;&nbsp;
        <FontAwesomeIcon icon={faChartPie} /> 카테고리 &gt;&nbsp;
        <FontAwesomeIcon icon={faBookmark} /> 북마크
      </h4>
      <LoadingMark length={length} msg={msg} />
      <div className="search-results">
        <ul style={{ listStyle: 'circle' }}>{bookmarkResults}</ul>
      </div >
    </section>
  );
};

export default SearchBookmarks;
