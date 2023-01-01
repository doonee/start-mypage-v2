import React, { useState } from "react";
import axios from 'axios'
import Loading from "../Loading";

const SearchBookmarks = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [arrGroup, setArrGroup] = React.useState([]);
  const [arrCategory, setArrCategory] = React.useState([]);
  const [arrBookmark, setArrBookmark] = React.useState([]);

  const getGroups = (keyword) => {
    if (!keyword) return;
    try {
      setArrGroup([]);
      const res = axios.get('/datas/GroupData.json');
      if (res && res.status === 200 && res.data && res.data.length) {
        const arr = res.data.filter(b => b.groupName.includes(keyword));
        if (arr && arr.length) setArrGroup(arr);
      }
    } catch (err) {
      console.log('err >> ', err);
    }
  }

  const getCategories = (keyword) => {
    if (!keyword) return;
    try {
      setArrCategory([]);
      const res = axios.get('/datas/CategoryData.json');
      if (res && res.status === 200 && res.data && res.data.length) {
        const arr = res.data.filter(b => b.categoryName.includes(keyword));
        if (arr && arr.length) setArrCategory(arr);
      }
    } catch (err) {
      console.log('err >> ', err);
    }
  }

  const getBookmarks = (keyword) => {
    if (!keyword) return;
    try {
      setArrBookmark([]);
      axios
        .get('/datas/BookmarkData.json')
        .then(res => {
          if (res && res.status === 200 && res.data && res.data.length) {
            const arr = res.data.filter(b => b.bookmarkName.includes(keyword));
            setArrBookmark(arr);
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
      await getGroups(keyword);
      await getCategories(keyword);
      await getBookmarks(keyword);
      await setIsLoading(false);
    }
    init();
  }, [keyword]);

  const groupResults = arrGroup.map(function (items) {
    return (
      <li key={items.groupNo}>
        {items.groupName}
      </li>
    );
  });

  const categoryResults = arrCategory.map(function (items) {
    return (
      <li key={items.categoryNo}>
        {items.categoryName}
      </li>
    );
  });

  const bookmarkResults = arrBookmark.map(function (items) {
    const name = `<a href="${items.bookmarkUrl}" 
      target="_blank" rel="noopener noreferrer">${items.bookmarkName}</a>`;
    let desc = "";
    if (items.bookmarkDesc && items.bookmarkDesc.trim().length > 0) {
      desc = `<small>- ${items.bookmarkDesc}</small>`;
    }
    return (
      <li key={items.bookmarkNo}>
        {name}{desc}
      </li>
    );
  });

  return (
    <section className="container-xl py-2">
      <h4>그룹</h4>
      <div className="search-results"><ul>{groupResults}</ul></div>
      <hr />
      <h4>카테고리</h4>
      <div className="search-results"><ul>{categoryResults}</ul></div>
      <hr />
      <h4>북마크</h4>
      <div className="search-results"><ul>{bookmarkResults}</ul></div >
      <Loading isLoading={isLoading} />
    </section>
  );
};

export default SearchBookmarks;
