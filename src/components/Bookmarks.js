import React from "react";
import * as Icon from "react-bootstrap-icons";

export default function Bookmarks() {
  return (
    <section className="container-xl py-3">
      <div className="row">
        <div className="col-12 col-sm-6 col-lg">
          <h2 className="h4">그룹</h2>
          <select className="form-select">
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="3">:: 그룹 관리 ::</option>
          </select>
        </div>
        <div className="col-12 col-sm-6 col-lg mt-4 mt-sm-0">
          <h2 className="h4">카테고리</h2>
          <select className="form-select">
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="3">:: 카테고리 관리 ::</option>
          </select>
        </div>
        <div className="col-12 col-lg-6 mt-4 mt-lg-0">
          <h2 className="h4">북마크</h2>
          <p>* 드래그 해서 순서를 변경하세요.</p>
          <ul className="list-group">
            <li className="list-group-item text-truncate">
              <Icon.GripHorizontal />
              &nbsp;&nbsp;
              <Icon.InfoCircle />
              &nbsp;&nbsp;
              <a
                target="_blank"
                href="https://music.youtube.com/"
                data-bookmark-no="7108">
                deseru Lorem, ipsum dolor.nt. Culpa, vitae veritatis.
                <br />
              </a>
            </li>
            <li className="list-group-item text-truncate">
              <Icon.GripHorizontal />
              &nbsp;&nbsp;
              <Icon.InfoCircle />
              &nbsp;&nbsp;
              <a
                target="_blank"
                href="https://music.youtube.com/"
                data-bookmark-no="7108">
                <strong>
                  deseru Lorem, ipsum dolor.nt. Culpa, vitae veritatis.
                </strong>
              </a>
            </li>
            <li className="list-group-item text-truncate">
              <Icon.GripHorizontal />
              &nbsp;&nbsp;
              <Icon.InfoCircle />
              &nbsp;&nbsp;
              <a
                target="_blank"
                href="https://music.youtube.com/"
                data-bookmark-no="7108">
                <del>
                  deseru Lorem, ipsum dolor.nt. Culpa, vitae veritatis.
                  <br />
                </del>
              </a>
            </li>
            <li className="list-group-item text-truncate">
              <Icon.GripHorizontal />
              &nbsp;&nbsp;
              <Icon.InfoCircle />
              &nbsp;&nbsp;
              <a
                target="_blank"
                href="https://music.youtube.com/"
                data-bookmark-no="7108">
                deseru Lorem, ipsum dolor.nt. Culpa, vitae veritatis.
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
