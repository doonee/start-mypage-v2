/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { jsonLocalStorage } from "./Common";
import axios from "axios";

const TopGroupLinks = ({ curPath, getParameter }) => {
  const [topGroupLinksData, setTopGroupLinksData] = useState([]);
  const [selectedGroup, setSelectedGroup] = React.useState(null);
  const [gParameter, setGParameter] = useState('');
  const [config, setConfig] = useState('');
  const [keyword, setKeyword] = useState('');
  const [searchUrl, setSearchUrl] = useState('');

  useEffect(() => {
    setKeyword(getParameter('keyword'));
  }, [getParameter])

  useEffect(() => {
    setSearchUrl(`/searchBookmarks/?keyword=${keyword}`);
  }, [keyword])

  const onChangeKeyword = (e) => {
    e.preventDefault();
    setKeyword(e.target.value);
  }

  const onSearchSubmit = (e) => {
    e.preventDefault();
    window.location.href = searchUrl;
  }

  const initData = async () => {
    try {
      const res = await axios.get('/datas/GroupData.json');
      if (res && res.status === 200 && res.data && res.data.length) {
        const arr = res.data;
        if (arr && arr.length) await setTopGroupLinksData(arr);
      }
    } catch (err) {
      console.log('err => ', err);
    }
  }

  useEffect(() => {
    initData();
    setGParameter(getParameter('group') || '');
    setConfig(jsonLocalStorage.getItem('config') || '');
  }, [getParameter]);

  useEffect(() => {
    const initSelGroup = async () => {
      // [1] 파라미터로 접근하는 그룹
      if (gParameter) {
        await setSelectedGroup(gParameter);
      } else {
        // [2] 파라미터 값이 없으면 시작페이지로 설정 된 그룹
        if (config) {
          await setSelectedGroup(config.startGroup);
        } else {
          // [3] 아무것도 없으면 첫번째 그룹
          const firstGroup = document.querySelector('#ul-group > li:nth-child(1)');
          if (firstGroup) await setSelectedGroup(firstGroup.getAttribute('data-id'));
          //else initSelGroup();
        }
      }
    }

    if (topGroupLinksData && topGroupLinksData.length) {
      if (curPath.toUpperCase().includes('/myBookmarks'.toUpperCase())) {
        if (document.readyState === 'complete') {
          initSelGroup();
        } else {
          window.addEventListener('load', initSelGroup);
          return () => window.removeEventListener('load', initSelGroup);
        }
      }
    }
  }, [topGroupLinksData, curPath, gParameter, config]);

  useEffect(() => {
    const li = document.querySelectorAll('#ul-group > li');
    li.forEach((l) => {
      // eslint-disable-next-line eqeqeq
      if (l.getAttribute('data-id') == selectedGroup) {
        l.tabIndex = 100;
        l.focus();
      }
    })
  }, [selectedGroup]);

  const handleGrouplinkClick = (e) => {
    e.preventDefault();
    const selectedGroup = e.target.getAttribute('data-id');
    if (curPath.toUpperCase().includes('/myBookmarks'.toUpperCase())) {
      setSelectedGroup(selectedGroup);
    } else {
      window.location.href = `/myBookmarks/?group=${selectedGroup}`;
    }
    if (e.target.getAttribute('data-isshare'))
      window.open(`/shareGroup/${selectedGroup}`);
  }

  // 그룹리스트 출력
  const groupMenus = topGroupLinksData.map((item) => {
    const isActive = Number(item.groupNo) === Number(selectedGroup);
    const groupNo = Number(item.groupNo);
    return (
      <li key={groupNo}
        className={isActive ? "nav-item short-title active" : "nav-item short-title"}
        data-id={groupNo}
        title={item.groupName}>
        {/* 폰트어썸 아이콘을 직접 혹은 컴포넌트 방식으로 사용하면 
        selGroup이 null로 변해서 북마크가 사라짐!
        이미지는 괜찮음.
        이미지를 컴포넌트 형식으로 분리해서 리턴받으면 폰트어썸 아이콘과 같은 현상 발생!
        폰트어썸 아이콘도 컴포넌트 이니 컴포넌트 사용방식에 문제가 있는 듯.
        <FontAwesomeIcon icon={faSquareShareNodes} size="lg" color='orange'
          data-id={groupNo} data-isshare="true"
          onClick={handleGrouplinkClick} />&nbsp;&nbsp; */}
        <img src="/img/share.png" width={18} alt={"테스트"}
          data-id={groupNo} data-isshare="true"
          onClick={handleGrouplinkClick} />&nbsp;
        <a data-id={groupNo} onClick={handleGrouplinkClick}>{item.groupName}</a>
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
            <form className="d-flex ms-auto" role="search" onSubmit={onSearchSubmit}>
              <input
                className="form-control me-2 shadow-none"
                type="search"
                placeholder="검색어를 입력하세요."
                aria-label="Search"
                value={keyword}
                onChange={onChangeKeyword}
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
