import React from "react";
import { useLocation } from "react-router-dom";

const GroupLinks = ({ curPath }) => {
  setTimeout(() => {
    const menuLinks = document.querySelectorAll("#ul-group a.nav-link");
    menuLinks.forEach((link) => {
      link.classList.remove("active");
      if (curPath === link.getAttribute("href")) link.classList.add("active");
    });
  }, 0);

  return (
    <header
      className="container-fluid sticky-top border-bottom bg-light d-none"
      id="group-link">
      <nav className="container-xl navbar navbar-expand-xl">
        <div className="container-fluid navbar-expand">
          <ul
            className="nav nav-pills nav-fill text-nowrap flex-nowrap col-md-7 col-lg-8 list-group list-group-horizontal overflow-auto"
            id="ul-group">
            <li className="nav-item">
              <a href="/mybookmarks/7890" className="nav-link">
                0001
              </a>
            </li>
            <li className="nav-item">
              <a href="/mybookmarks/1234" className="nav-link">
                0002
              </a>
            </li>
            <li className="nav-item">
              <a href="/mybookmarks/5678" className="nav-link">
                0003
              </a>
            </li>
            <li className="nav-item">
              <a href="/mybookmarks/7890" className="nav-link">
                0004
              </a>
            </li>
            <li className="nav-item">
              <a href="/mybookmarks/7890" className="nav-link">
                0005
              </a>
            </li>
            <li className="nav-item">
              <a href="/mybookmarks/7890" className="nav-link">
                0006
              </a>
            </li>
            <li className="nav-item">
              <a href="/mybookmarks/7890" className="nav-link">
                0007
              </a>
            </li>
            <li className="nav-item">
              <a href="/mybookmarks/7890" className="nav-link">
                0008
              </a>
            </li>
            <li className="nav-item">
              <a href="/mybookmarks/7890" className="nav-link">
                0009
              </a>
            </li>
            <li className="nav-item">
              <a href="/mybookmarks/7890" className="nav-link">
                00010
              </a>
            </li>
            <li className="nav-item">
              <a href="/mybookmarks/7890" className="nav-link">
                00011
              </a>
            </li>
            <li className="nav-item">
              <a href="/mybookmarks/7890" className="nav-link">
                00012
              </a>
            </li>
            <li className="nav-item">
              <a href="/mybookmarks/7890" className="nav-link">
                00013
              </a>
            </li>
            <li className="nav-item">
              <a href="/mybookmarks/7890" className="nav-link">
                00014
              </a>
            </li>
            <li className="nav-item">
              <a href="/mybookmarks/7890" className="nav-link">
                00015
              </a>
            </li>
            <li className="nav-item">
              <a href="/mybookmarks/7890" className="nav-link">
                00016
              </a>
            </li>
            <li className="nav-item">
              <a href="/mybookmarks/7890" className="nav-link">
                00017
              </a>
            </li>
            <li className="nav-item">
              <a href="/mybookmarks/7890" className="nav-link">
                00018
              </a>
            </li>
            <li className="nav-item">
              <a href="/mybookmarks/7890" className="nav-link">
                00019
              </a>
            </li>
            <li className="nav-item">
              <a href="/mybookmarks/7890" className="nav-link">
                00020
              </a>
            </li>
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

export default GroupLinks;
