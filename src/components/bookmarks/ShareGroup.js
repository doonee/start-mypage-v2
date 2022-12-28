import React from "react";
import Masonry from "react-masonry-css";

const ShareGroup = () => {
  const myBreakpointsAndCols = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  var items = [
    { id: 1, name: "1 My First Item" },
    {
      id: 2,
      name: "2 Ipsum aute ipsum ullamco sint anim culpa aliqua est in dolore exercitation.",
    },
    {
      id: 3,
      name: "3 In nostrud sunt proident pariatur exercitation adipisicing. Commodo magna officia proident aute aute nisi laborum commodo laboris enim ex eu nisi exercitation. Esse laborum magna ipsum elit consequat commodo. Ea Lorem occaecat ea exercitation tempor nostrud ad adipisicing dolore. Ut id deserunt sint non esse. Est fugiat eu esse Lorem cillum et commodo esse cupidatat cupidatat sunt magna.",
    },
    { id: 4, name: "4 Here is the Fourth" },
    { id: 5, name: "5 High Five" },
    {
      id: 6,
      name: "6 Ex sit in nostrud sit eiusmod quis nisi sunt nostrud quis mollit occaecat.",
    },
    {
      id: 7,
      name: "7 Deserunt exercitation anim nostrud culpa occaecat deserunt non eiusmod et occaecat elit veniam.",
    },
    { id: 8, name: "8 888" },
    { id: 9, name: "9 abcdefghijk" },
    {
      id: 10,
      name: "10 Nisi cillum aliqua nulla aliquip tempor deserunt cillum sint.",
    },
    { id: 11, name: "11 11번째 카테고리" },
  ];

  items = items.map(function (item) {
    return (
      <div key={item.id}>
        <h6>
          <a href="/shareBookmarks/2/1223" data-category="1223">
            <strong>{item.name}</strong>
          </a>
        </h6>
        <p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://music.youtube.com/"
            data-bookmark-no="7108">
            deseru Lorem, ipsum dolor.nt. Culpa, vitae veritatis.
            <br />
            <small>- small text-muted small text-muted small text-muted</small>
          </a>
        </p>
        <p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://music.youtube.com/"
            data-bookmark-no="7108">
            deseru Lorem, ipsum dolor.nt. Culpa, vitae veritatis.
            <br />
            <small className="text-muted">- small small small small</small>
          </a>
        </p>
        <p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://music.youtube.com/"
            data-bookmark-no="7108">
            <strong>Lorem ipsum dolor sit.</strong>
            <br />
            <small>- Lorem ipsum dolor sit ame7777777777</small>
          </a>
        </p>
        <p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://music.youtube.com/"
            data-bookmark-no="7108">
            <del>
              Lorem, ipsum dolor.11111112222222
              <br />
              <small>- Lorem ipsum dolor sit ame.</small>
            </del>
          </a>
        </p>
        <p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://music.youtube.com/"
            data-bookmark-no="7108">
            Lorem ipsum dolor sit amet.
          </a>
        </p>
      </div>
    );
  });

  return (
    <section className="container-xl py-2">
      <Masonry
        breakpointCols={myBreakpointsAndCols}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {items}
      </Masonry>
    </section>
  );
};

export default ShareGroup;
