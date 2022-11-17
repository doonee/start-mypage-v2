import React from "react";
//import bootstrap from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Masonry from "react-masonry-css";
import BookmarkModal from "./BookmarkModal";
import Button from "react-bootstrap/Button";

const Contents = () => {
  const [modalShow, setModalShow] = React.useState(false);
  // var el = document.querySelectorAll("section div > p > svg");
  // el.forEach((el) => {
  //   el.addEventListener("click", function (e) {
  //     e.preventDefault();
  //     console.log(e.target);
  //     e.target.parentElement.style.fontWeight = "bold";
  //     setModalShow(true);
  //   });
  // });

  const showBookmarkModal = (e) => {
    // var groupModal = new bootstrap.Modal(
    //   document.getElementById("newModal"),
    //   {}
    // );
    // document
    //   .getElementById("newModal")
    //   .classList.add("animate__animated", "animate__pulse");
    // groupModal.show();
    e.preventDefault();
    e.target.closest("p").style.fontWeight = "bold";
    setModalShow(true);
  };

  const myBreakpointsAndCols = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  var items = [
    { id: 1, name: "My First Item" },
    {
      id: 2,
      name: "Ipsum aute ipsum ullamco sint anim culpa aliqua est in dolore exercitation.",
    },
    {
      id: 3,
      name: "In nostrud sunt proident pariatur exercitation adipisicing. Commodo magna officia proident aute aute nisi laborum commodo laboris enim ex eu nisi exercitation. Esse laborum magna ipsum elit consequat commodo. Ea Lorem occaecat ea exercitation tempor nostrud ad adipisicing dolore. Ut id deserunt sint non esse. Est fugiat eu esse Lorem cillum et commodo esse cupidatat cupidatat sunt magna.",
    },
    { id: 4, name: "Here is the Fourth" },
    { id: 5, name: "High Five" },
  ];

  // Convert array to JSX items
  items = items.map(function (item) {
    //return <div key={item.id}>{item.name}</div>;
    return (
      <div key={item.id}>
        <h6>
          <a href="/bookmarks/2/1223" data-category="1223">
            <strong>자주 찾는 페이지</strong>
          </a>
          <a
            href="wrapWindowByMask(null, 1223);"
            title="새 북마크 추가"
            alt="새 북마크 추가">
            (<FontAwesomeIcon icon={faPlus} />)
          </a>
        </h6>
        <p>
          <Icon.InfoCircle onClick={(e) => showBookmarkModal(e)} />
          &nbsp;&nbsp;
          <a
            target="_blank"
            href="https://music.youtube.com/"
            data-bookmark-no="7108">
            deseru Lorem, ipsum dolor.nt. Culpa, vitae veritatis.
            <br />
            <small>- Lorem ipsum dolor sit amet consect</small>
          </a>
        </p>
        <p>
          <Icon.InfoCircle onClick={(e) => showBookmarkModal(e)} />
          &nbsp;&nbsp;
          <a
            target="_blank"
            href="https://music.youtube.com/"
            data-bookmark-no="7108">
            <strong>Lorem ipsum dolor sit.</strong>
          </a>
        </p>
        <p>
          <Icon.InfoCircle onClick={(e) => showBookmarkModal(e)} />
          &nbsp;&nbsp;
          <a
            target="_blank"
            href="https://music.youtube.com/"
            data-bookmark-no="7108">
            <del>
              Lorem, ipsum dolor.
              <br />
              <small>- Lorem ipsum dolor sit amet.</small>
            </del>
          </a>
        </p>
        <p>
          <Icon.InfoCircle onClick={(e) => showBookmarkModal(e)} />
          &nbsp;&nbsp;
          <a
            target="_blank"
            href="https://music.youtube.com/"
            data-bookmark-no="7108">
            Lorem ipsum dolor sit amet.
          </a>
        </p>
      </div>
    );
  });

  return (
    <section className="container-xl pt-2 pb-2">
      <Masonry
        breakpointCols={myBreakpointsAndCols}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {items}
      </Masonry>

      <BookmarkModal show={modalShow} onHide={() => setModalShow(false)} />
    </section>
  );
};

export default Contents;
