import React, { useState } from "react";
import axios from 'axios'
import Loading from "../Loading";
import GetResultMark from "../GetResultMark";

const SearchBookmarks = () => {
  const [isEmpty, setIsEmpty] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [arrBookmark, setArrBookmark] = React.useState([]);

  const getBookmarks = (keyword) => {
    if (!keyword) return;
    try {
      setArrBookmark([]);
      axios
        .get('/datas/BookmarkData.json')
        .then(res => {
          if (res && res.status === 200 && res.data && res.data.length) {
            const arr = res.data.filter(b => b.groupName.includes(keyword)
              || b.categoryName.includes(keyword)
              || b.bookmarkName.includes(keyword));
            if (arr && arr.length) {
              setIsEmpty(false);
              setArrBookmark(arr);
            }
          }
        })
        .catch(err => {
          console.log(err);
        });
    } catch (err) {
      console.log('err >> ', err);
    }
  }

  React.useEffect(() => {
    const getKeyword = setInterval(() => {
      setIsLoading(true);
      const keyword = document.getElementById('txt-search').value;
      if (keyword && keyword.length) {
        setKeyword(keyword);
        clearInterval(getKeyword);
      }
    }, 1000);
  }, []);

  React.useEffect(() => {
    async function init() {
      await getBookmarks(keyword);
      await setIsLoading(false);
    }
    init();
  }, [keyword]);

  const bookmarkResults = arrBookmark.map(function (items) {
    const gName = `<a href="${items.groupUrl}" 
      rel="noopener noreferrer">${items.groupName}</a>`;
    const cName = `<a href="${items.categoryUrl}" 
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
      <GetResultMark isEmpty={isEmpty} />
      <h4>그룹 &gt; 카테고리 &gt; 북마크</h4>
      <div className="search-results">
        <ul style={{ listStyle: 'circle' }}>{bookmarkResults}</ul>
      </div >
      <Loading isLoading={isLoading} />
    </section>
  );
};

export default SearchBookmarks;
