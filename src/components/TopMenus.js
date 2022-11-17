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

const TopMenus = () => {
  return (
    <header className="container-fluid bg-light">
      <a name="top"></a>
      <nav className="container-xl navbar navbar-expand-xl">
        <div className="container-fluid navbar-expand">
          <a
            className="navbar-brand col-md-5 col-lg-6 col-xl-7 overflow-hidden"
            href="./">
            <h1 className="h4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
              ad facilis accusantium distinctio, magnam quia eius rerum? Impedit
              maiores omnis doloribus aut? Dignissimos nobis temporibus sapiente
              mollitia nisi quos sed.
            </h1>
          </a>
          <div
            className="collapse navbar-collapse col-md-6 col-lg-5 col-xl-4 pt-3 pt-lg-1 overflow-auto"
            id="navbarText">
            <ul className="navbar-nav navbar-nav-scroll ms-auto mb-2 mb-lg-0 text-center">
              <li className="nav-item">
                <a className="nav-link" href="./">
                  <FontAwesomeIcon icon={faHome} size={"lg"} />
                  <p>Home</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  <FontAwesomeIcon icon={faObjectGroup} size={"lg"} />
                  <p>그룹</p>
                </a>
              </li>
              <li className="nav-item" style={{ width: "65px" }}>
                <a className="nav-link" href="#">
                  <FontAwesomeIcon icon={faChartPie} size={"lg"} />
                  <p>카테고리</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./bookmarks.html">
                  <FontAwesomeIcon icon={faBookmark} size={"lg"} />
                  <p>북마크</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FontAwesomeIcon icon={faGears} size={"lg"} />
                  <p>설정</p>
                </a>
              </li>
              <li className="nav-item" style={{ width: "65px" }}>
                <a className="nav-link" href="#">
                  <FontAwesomeIcon icon={faUserPlus} size={"lg"} />
                  <p>회원가입</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FontAwesomeIcon icon={faRightToBracket} size={"lg"} />
                  <p>로그인</p>
                </a>
              </li>
              <li className="nav-item d-none">
                <a className="nav-link" href="#">
                  <FontAwesomeIcon icon={faCircleInfo} size={"lg"} />
                  <p>내정보</p>
                </a>
              </li>
              <li className="nav-item d-none" style={{ width: "65px" }}>
                <a className="nav-link" href="#">
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
