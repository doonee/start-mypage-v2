import React from "react";
import * as Icon from "react-bootstrap-icons";

export default function Categories() {
  return (
    <section className="container-xl">
      <h2 className="h2">카테고리 관리</h2>
      <div className="row">
        <div className="col-md">
          <div className="col-sm-12 col-lg-12 mb-4">
            <h3 className="h4 p-2 bg-gradient bg-dark bg-opacity-25">그룹</h3>
            <select className="form-select">
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="3">:: 그룹 관리 ::</option>
            </select>
          </div>
        </div>
        <div className="col-md-7 mt-4 mt-md-0">
          <h3 className="h4 p-2 bg-gradient bg-dark bg-opacity-25">카테고리</h3>
          <p>* 드래그 해서 순서를 변경하세요.</p>
          <ul className="list-group">
            <li className="list-group-item text-truncate">
              <Icon.GripHorizontal />
              &nbsp;&nbsp;
              <Icon.InfoCircle />
              &nbsp;&nbsp;
              <a
                target="_blank"
                rel="noreferrer"
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
                rel="noreferrer"
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
                rel="noreferrer"
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
                rel="noreferrer"
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
