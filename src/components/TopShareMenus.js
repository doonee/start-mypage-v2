/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
} from "@fortawesome/free-solid-svg-icons";

const TopMenus = ({ curPath }) => {
  const appTitle = "";

  useEffect(() => {
    const menuLinks = document.querySelectorAll("#ul-topmenu a.nav-link");
    menuLinks.forEach((link) => {
      link.classList.remove("active");
      if (curPath.replaceAll('/', '') === link.getAttribute("href").replaceAll('/', ''))
        link.classList.add("active");
    });
  }, [curPath]);

  return (
    <header className="container-fluid bg-light border-bottom">
      <div className="d-flex align-items-center justify-content-center">
        <div className="p-3 flex-grow-1 text-center fw-bold overflow-hidden"
        >{appTitle}</div>
        <div className="p-3 text-center">
          <a href="/">
            <small><FontAwesomeIcon icon={faHome} /></small>
          </a>
        </div>
      </div>
    </header >
  );
};

export default TopMenus;
