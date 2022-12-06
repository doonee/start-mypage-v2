import React from "react";
import TopGroupLinksData from './TopGroupLinksData.json';
import { useLocation } from 'react-router-dom';

const TopGroupLinks = () => {
  // setTimeout(() => {
  //   const menuLinks = document.querySelectorAll("#ul-group a.nav-link");
  //   menuLinks.forEach((link) => {
  //     link.classList.remove("active");
  //     if (curPath === link.getAttribute("href")) link.classList.add("active");
  //   });
  // }, 0);

  const curUrl = useLocation().pathname;

  const getParameter = (key) => {
    if (new URLSearchParams(window.location.search).get(key)) {
      return new URLSearchParams(window.location.search).get(key);
    }
    return '';
  }

  const [startGroup, setStartGroup] = React.useState(() => {
    console.log(getParameter('group'));
    if (curUrl.includes('/mybookmarks')) {
      if (getParameter('group')) {
        return getParameter('group');
      } else {
        // 파라미터 값이 없으면 시작페이지로 설정 된 그룹 가져와야 함!
        const startGroupByDb = 3;
        return startGroupByDb;
      }
    } else {
      return 0;
    }
  });

  const handleGrouplinkClick = (e) => {
    e.preventDefault();
    const selectedGroup = e.target.getAttribute('data-id');
    if (curUrl.includes('/mybookmarks')) {
      // 선택 된 그룹의 북마크 리스트 가져와야 함!
      // 성공 후
      setStartGroup(selectedGroup);
    } else {
      window.location.href = `/mybookmarks/?group=${selectedGroup}`;
    }
  }

  // 그룹리스트 출력
  const groupMenus = TopGroupLinksData.map((item) => {
    // eslint-disable-next-line eqeqeq
    const isActive = item.groupNo == startGroup;
    return (
      <li key={item.groupNo}
        className={isActive ? "nav-item short-title active" : "nav-item short-title"}
        onClick={handleGrouplinkClick} data-id={item.groupNo}>
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
            <form className="d-flex ms-auto" role="search">
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
