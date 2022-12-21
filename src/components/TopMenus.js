/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 * '편리한 북마크 무료관리툴 - StartMypage.com' DB에 저장해서 사용하기
 */
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faObjectGroup,
  faChartPie,
  faBookmark,
  faGears,
  faUserPlus,
  faRightToBracket,
  faCircleInfo,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";
import { jsonLocalStorage } from "./Common";

const TopMenus = ({ curPath }) => {
  const [appTitle, setAppTitle] = useState('');

  useEffect(() => {
    const basic = '편리한 북마크 무료관리툴 - StartMypage.com';
    if (jsonLocalStorage.getItem('config')) {
      setAppTitle(jsonLocalStorage.getItem('config').appTitle) || setAppTitle(basic);
    } else setAppTitle(basic);
  }, []);

  useEffect(() => {
    const menuLinks = document.querySelectorAll("#ul-topmenu a.nav-link");
    menuLinks.forEach((link) => {
      link.classList.remove("active");
      if (curPath.replaceAll('/', '') === link.getAttribute("href").replaceAll('/', ''))
        link.classList.add("active");
    });
  }, [curPath]);

  return (
    <header className="container-fluid bg-light">
      <a name="top" />
      <nav className="container-xl navbar navbar-expand-xl">
        <div className="container-fluid navbar-expand">
          <a
            className="navbar-brand col-md-5 col-lg-6 col-xl-7 overflow-hidden"
            href="/myBookmarks" rel="noreferrer">
            <h1 className="h4">{appTitle}</h1>
          </a>
          <div
            className="collapse navbar-collapse col-md-6 col-lg-5 col-xl-4 pt-3 pt-lg-1 overflow-auto"
            id="navbarText2">
            <ul
              className="navbar-nav navbar-nav-scroll ms-auto mb-2 mb-lg-0 text-center"
              id="ul-topmenu">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <FontAwesomeIcon icon={faHome} size={"lg"} />
                  <p>Home</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/groupManage">
                  <FontAwesomeIcon icon={faObjectGroup} size={"lg"} />
                  <p>그룹</p>
                </a>
              </li>
              <li className="nav-item" style={{ width: "65px" }}>
                <a className="nav-link" href="/categoryManage">
                  <FontAwesomeIcon icon={faChartPie} size={"lg"} />
                  <p>카테고리</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/bookmarkManage">
                  <FontAwesomeIcon icon={faBookmark} size={"lg"} />
                  <p>북마크</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/config">
                  <FontAwesomeIcon icon={faGears} size={"lg"} />
                  <p>설정</p>
                </a>
              </li>
              <li className="nav-item" style={{ width: "65px" }}>
                <a className="nav-link" href="/signup">
                  <FontAwesomeIcon icon={faUserPlus} size={"lg"} />
                  <p>회원가입</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/signin">
                  <FontAwesomeIcon icon={faRightToBracket} size={"lg"} />
                  <p>로그인</p>
                </a>
              </li>
              <li className="nav-item d-block">
                <a className="nav-link" href="/myinfo">
                  <FontAwesomeIcon icon={faCircleInfo} size={"lg"} />
                  <p>내정보</p>
                </a>
              </li>
              <li className="nav-item d-block" style={{ width: "65px" }}>
                <a className="nav-link" href="/signout">
                  <FontAwesomeIcon icon={faPowerOff} size={"lg"} />
                  <p>로그아웃</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default TopMenus;
