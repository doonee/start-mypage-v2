import React, { useCallback, useState } from "react";
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
  const [msg, setMsg] = useState("LoadingPop...");
  const [arrBookmark, setArrBookmark] = React.useState([]);

  const getBookmarks = useCallback(async (keyword) => {
    setMsg('LoadingPop...');
    setLength(-1);
    setArrBookmark([]);
    if (!keyword) {
      return;
    }
    await axios.get('/datas/BookmarkData.json')
      .then(res => {
        if (res && res.status === 200 && res.data && res.data.length) {
          const arr = res.data.filter(b => b.groupName.toUpperCase().includes(keyword.toUpperCase())
            || b.categoryName.toUpperCase().includes(keyword.toUpperCase())
            || b.bookmarkName.toUpperCase().includes(keyword.toUpperCase()));
          setLength(arr.length);
          if (arr && arr.length) {
            const result = [];
            const k = keyword;
            arr.forEach((item) => {
              const regExp = new RegExp(keyword, 'gi');
              let gname = item.groupName.replace(regExp, `<mark>${k}</mark>`);
              let cname = item.categoryName.replace(regExp, `<mark>${k}</mark>`);
              let bname = item.bookmarkName.replace(regExp, `<mark>${k}</mark>`);
              const markedItem = JSON.parse(JSON.stringify(item));
              markedItem.groupName = gname;
              markedItem.categoryName = cname;
              markedItem.bookmarkName = bname;
              result.push(markedItem)
            });
            setArrBookmark(result);
          }
        } else {
          setLength(0);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    const k = getParameter('keyword');
    if (!k) {
      setMsg('검색어를 입력하세요.');
      return;
    }
    getBookmarks(k);
  }, [getParameter, getBookmarks]);

  const bookmarkResults = arrBookmark.map(function (items) {
    const gName = `<a href="/myBookmarks/?group=${items.groupNo}" 
      rel="noopener noreferrer">${items.groupName}</a>`;
    const cName = `<a href="/myBookmarks/?group=${items.groupNo}" 
      rel="noopener noreferrer">${items.categoryName}</a>`;
    let bName = `<a href="${items.bookmarkUrl}" 
      target="_blank" rel="noopener noreferrer">${items.bookmarkName}</a>`;
    if (items.bookmarkDesc && items.bookmarkDesc.trim().length > 0) {
      const bDesc = `<small> - ${items.bookmarkDesc}</small>`;
      bName = `<a href="${items.bookmarkUrl}" 
      target="_blank" rel="noopener noreferrer">${items.bookmarkName}${bDesc}</a>`;
    }
    const htmlContent = `${gName} &gt; ${cName} &gt; <strong>${bName}</strong>`;
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
