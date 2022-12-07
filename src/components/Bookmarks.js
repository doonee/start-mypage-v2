import React from "react";
import * as Icon from "react-bootstrap-icons";
import BookmarkModal from "./BookmarkModal";

export default function Bookmarks() {
  const [modalShow, setModalShow] = React.useState(false);

  const showBookmarkModal = (e) => {
    // 애니메이션 적용안됨
    // var groupModal = new bootstrap.Modal(
    //   document.getElementById("newModal"),
    //   {}
    // );
    // document
    //   .getElementById("newModal")
    //   .classList.add("animate__animated", "animate__pulse");
    // groupModal.show();
    if (e) {
      e.preventDefault();
      e.target.closest("li").style.fontWeight = "bold";
    }
    setModalShow(true);
  };

  return (
    <section className="container-xl">
      <h2 className="h2">북마크 관리</h2>
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
          <div className="col-sm-12 col-lg-12">
            <h3 className="h4 p-2 bg-gradient bg-dark bg-opacity-25">카테고리</h3>
            <select className="form-select">
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="3">:: 카테고리 관리 ::</option>
            </select>
          </div>
        </div>
        <div className="col-md-7 mt-4 mt-md-0">
          <h3 className="h4 p-2 bg-gradient bg-dark bg-opacity-25">북마크</h3>
          <ul className="list-group">
            <li className="list-group-item text-truncate">
              <input className="form-check-input" type="radio"
                name="exampleRadios" id="exampleRadios1" value="option1" defaultChecked />
              &nbsp;&nbsp;
              <Icon.PencilSquare onClick={(e) => showBookmarkModal(e)}
                className="align-middle" title="북마크 수정" />
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
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
              &nbsp;&nbsp;
              <Icon.PencilSquare onClick={(e) => showBookmarkModal(e)}
                className="align-middle" title="북마크 수정" />
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
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" />
              &nbsp;&nbsp;
              <Icon.PencilSquare onClick={(e) => showBookmarkModal(e)}
                className="align-middle" title="북마크 수정" />
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
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4" value="option4" />
              &nbsp;&nbsp;
              <Icon.PencilSquare onClick={(e) => showBookmarkModal(e)}
                className="align-middle" title="북마크 수정" />
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
          <div className="btn-group col-12 mt-2">
            <button type="button" className="col btn btn-outline-secondary"><Icon.ChevronDoubleUp /></button>
            <button type="button" className="col btn btn-outline-secondary"><Icon.ChevronUp /></button>
            <button type="button" className="col btn btn-outline-secondary"><Icon.ChevronDown /></button>
            <button type="button" className="col btn btn-outline-secondary"><Icon.ChevronDoubleDown /></button>
          </div>
          <div className="btn-group col-12 mt-2">
            <button type="button" className="col btn btn-outline-danger">삭제</button>
            <button type="button" className="col btn btn-outline-primary">저장</button>
          </div>
        </div>
      </div>

      <BookmarkModal show={modalShow} onHide={() => setModalShow(false)} />
    </section>
  );
}
