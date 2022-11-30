import React from "react";
import * as Icon from "react-bootstrap-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleRight,
  faCheck,
  faCompress,
  faHelmetSafety,
  faPlay,
  faBookmark,
  faSort,
} from "@fortawesome/free-solid-svg-icons";
import Masonry from "react-masonry-css";
import MainData from "./MainData.json";

const Main = () => {
  const myBreakpointsAndCols = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };
  let items = MainData.map(function (item) {
    let contentHtml = "",
      linkHtml = "",
      linkArrowIcon = "";
    let icon = "";
    switch (item.icon) {
      case "check":
        icon = <FontAwesomeIcon icon={faCheck} />;
        break;
      case "super":
        icon = <FontAwesomeIcon icon={faCompress} />;
        break;
      case "safe":
        icon = <FontAwesomeIcon icon={faHelmetSafety} />;
        break;
      case "play":
        icon = <FontAwesomeIcon icon={faPlay} />;
        break;
      case "bookmark":
        icon = <FontAwesomeIcon icon={faBookmark} />;
        break;
      case "expand":
        icon = <Icon.ArrowsAngleExpand />;
        break;
      case "battery":
        icon = <Icon.BatteryFull />;
        break;
      case "sort":
        icon = <FontAwesomeIcon icon={faSort} />;
        break;
      case "cash":
        icon = <Icon.CashCoin />;
        break;
      case "question":
        icon = <Icon.QuestionCircle />;
        break;
      default:
        break;
    }
    if (item.content && item.content.length) {
      item.content.forEach((c) => {
        contentHtml += `<p>${c}</p>`;
      });
    }
    if (item.link) {
      linkArrowIcon = <FontAwesomeIcon icon={faArrowCircleRight} />;
      const linkTitle = item.linkTitle ?? "링크";
      const link = `<em><a href="${item.link}">${linkTitle}</a></em>`;
      linkHtml = `<span>${link}</span>`;
    }

    return (
      <div key={item.id}>
        <h4
          className="h6 p-2 text-bg-secondary text-center"
          style={{ opacity: "0.8" }}>
          {icon}&nbsp;
          {item.name}
        </h4>
        <p className="bg-white">
          <span dangerouslySetInnerHTML={{ __html: contentHtml }}></span>
          <span className="d-inline-block w-100 text-end">
            <span>{linkArrowIcon}</span>&nbsp;
            <span dangerouslySetInnerHTML={{ __html: linkHtml }}></span>&nbsp;
          </span>
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

export default Main;
