import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { jsonLocalStorage } from "./Common";
import axios from "axios";

const TopGroupLinks = () => {
  const curUrl = useLocation().pathname;
  const getParameter = (key) => {
    if (new URLSearchParams(window.location.search).get(key)) {
      return new URLSearchParams(window.location.search).get(key);
    }
    return '';
  }
  const [topGroupLinksData, setTopGroupLinksData] = useState([]);
  const [selectedGroup, setSelectedGroup] = React.useState(null);

  useEffect(() => {
    initData();
  }, [topGroupLinksData]);

  useEffect(() => {
    if (curUrl.toUpperCase().includes('/myBookmarks'.toUpperCase())) {
      // Check if the page has already loaded
      if (document.readyState === 'complete') {
        intiConfig();
      } else {
        window.addEventListener('load', intiConfig);
        // Remove the event listener when component unmounts
        return () => window.removeEventListener('load', intiConfig);
      }
    }
  }, []);

  const intiConfig = () => {
    if (getParameter('group')) {
      setSelectedGroup(getParameter('group'));
    } else {
      // 파라미터 값이 없으면 시작페이지로 설정 된 그룹
      if (jsonLocalStorage.getItem('config')) {
        setSelectedGroup(jsonLocalStorage.getItem('config').startGroup);
      } else {
        const el = document.querySelector('#ul-group > li:nth-child(1)');
        //el.classList.add('active');
        setSelectedGroup(el.getAttribute('data-id'));
      }
    }
  }

  const initData = async () => {
    try {
      const res = await axios.get('/datas/GroupData.json');
      if (res && res.status === 200 && res.data && res.data.length) {
        // eslint-disable-next-line eqeqeq
        const arr = res.data;
        if (arr && arr.length) await setTopGroupLinksData(arr);
      }
    } catch (err) {
      console.log('err => ', err);
    }
  }

  const handleGrouplinkClick = (e) => {
    e.preventDefault();
    const selectedGroup = e.target.getAttribute('data-id');
    if (curUrl.toUpperCase().includes('/myBookmarks'.toUpperCase())) {
      setSelectedGroup(selectedGroup);
    } else {
      window.location.href = `/myBookmarks/?group=${selectedGroup}`;
    }
  }

  // 그룹리스트 출력
  const groupMenus = topGroupLinksData.map((item) => {
    // eslint-disable-next-line eqeqeq
    const isActive = item.groupNo == selectedGroup;
    return (
      <li key={item.groupNo}
        className={isActive ? "nav-item short-title active" : "nav-item short-title"}
        onClick={handleGrouplinkClick}
        data-id={item.groupNo}
        title={item.groupName}>
        {item.groupName}
      </li>
    )
  });

  return (
    <header
      className="container-fluid sticky-top border-bottom bg-light"
      id="group-link">
      <nav className="container-xl navbar navbar-expand-xl">
        <div className="container-fluid navbar-expand">
          <ul
            className="nav nav-pills nav-fill text-nowrap flex-nowrap col-md-7 col-lg-8 list-group list-group-horizontal overflow-auto"
            id="ul-group">
            {groupMenus}
          </ul>
          <div
            className="collapse navbar-collapse col-md-4 col-lg-3 pt-3 pt-md-0 overflow-hidden"
            id="navbarText">
            <form className="d-flex ms-auto" role="search" action="/searchBookmarks">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default TopGroupLinks;
