import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import axios from 'axios';

const ShareCategory = () => {
  const [datas, setDatas] = useState([]);
  const [title, setTitle] = useState("");

  const myBreakpointsAndCols = {
    default: 2,
    1100: 2,
    800: 1,
  };

  useEffect(() => {
    const initData = async () => {
      try {
        const res = await axios.get('/datas/ShareCategoryData.json');
        if (res && res.status === 200 && res.data && res.data.length) {
          await setDatas(res.data || []);
          await setTitle(res.data[0].categoryName);
          document.querySelector('#root > div > header > div > div.flex-grow-1')
            .innerHTML = title;
        }
      } catch (error) {
        console.log('error => ', error)
      }
    };

    initData();
  }, [title])

  const bookmaks = datas.map(function (item) {
    const id = item.id, name = item.name,
      url = item.url, memo = item.memo ? `- ${item.memo}` : '';
    return (
      <p key={id}>
        <a
          target="_blank"
          rel="noreferrer"
          href={url}
          data-bookmark-no={id}>
          {name}<br />
          <small className="text-muted">{memo}</small>
        </a>
      </p>
    );
  });

  return (
    <section className="container-xl py-2">
      <Masonry
        breakpointCols={myBreakpointsAndCols}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        <div>
          <h6 className="text-white fw-bold">
            {title}
          </h6>
          {bookmaks}
        </div>
      </Masonry>
    </section>
  );
};

export default ShareCategory;
