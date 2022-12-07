import React from "react";
import * as Icon from "react-bootstrap-icons";

export default function Groups() {
  return (
    <section className="container-xl">
      <h2 className="h2">그룹 관리</h2>
      <div className="row d-flex justify-content-center">
        <div className="col-md-7 mt-4 mt-md-0">
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
