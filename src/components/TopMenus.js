/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
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

const TopMenus = ({ curPath }) => {
  setTimeout(() => {
    const menuLinks = document.querySelectorAll("#ul-topmenu a.nav-link");
    menuLinks.forEach((link) => {
      link.classList.remove("active");
      if (curPath === link.getAttribute("href")) link.classList.add("active");
    });
  }, 0);

  return (
    <header className="container-fluid bg-light">
      <a name="top" />
      <nav className="container-xl navbar navbar-expand-xl">
        <div className="container-fluid navbar-expand">
          <a
            className="navbar-brand col-md-5 col-lg-6 col-xl-7 overflow-hidden"
            href="/mybookmarks/1234">
            <h1 className="h4">편리한 북마크 무료관리툴 - StartMypage.com</h1>
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
                <a className="nav-link" href="/groups">
                  <FontAwesomeIcon icon={faObjectGroup} size={"lg"} />
                  <p>그룹</p>
                </a>
              </li>
              <li className="nav-item" style={{ width: "65px" }}>
                <a className="nav-link" href="/categories/123">
                  <FontAwesomeIcon icon={faChartPie} size={"lg"} />
                  <p>카테고리</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/bookmarks/123/7890">
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
              <li className="nav-item d-none">
                <a className="nav-link" href="/myinfo">
                  <FontAwesomeIcon icon={faCircleInfo} size={"lg"} />
                  <p>내정보</p>
                </a>
              </li>
              <li className="nav-item d-none" style={{ width: "65px" }}>
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
