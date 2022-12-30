import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import axios from 'axios';

const ShareGroup = () => {
  const [datas, setDatas] = useState([]);
  const myBreakpointsAndCols = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  useEffect(() => {
    initData();
  }, [])

  const initData = async () => {
    try {
      const res = await axios.get('/datas/ShareGroupData.json');
      if (res && res.status === 200 && res.data && res.data.length) {
        await setDatas(res.data || []);
        document.querySelector('#root > div > header > div > div.p-3.flex-grow-1.text-center')
          .innerHTML = res.data[0].groupName;
      }
    } catch (error) {
      console.log('error => ', error)
    }
  }

  const getBookmarks = datas.map(function (item) {
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
        {getBookmarks}
      </Masonry>
    </section>
  );
};

export default ShareGroup;
