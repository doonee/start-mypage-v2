import React from "react";
import HistoryData from './DevHistoryData.json';
import Moment from 'react-moment';
import 'moment/locale/ko';

export default function DevHistory() {
  function GetDuration(dt) {
    return <Moment durationFromNow>{dt}</Moment>
  }

  const ComtentLiItems = ({ content }) => {
    return (
      content.map((item) => (
        <li key={item} dangerouslySetInnerHTML={{ __html: item }}></li>
      ))
    )
  }

  const ContentItems = ({ item }) => {
    return (
      <div className="mb-5">
        <h4>{item.date}</h4>
        <p className="fw-bold fs-4">{item.title}</p>
        <ul>
          <ComtentLiItems content={item.content} />
        </ul>
      </div>
    );
  }

  const Conents = ({ data }) => {
    return (
      <div className="container col-lg-8">
        {
          data.map((item) => (
            <ContentItems item={item} key={item.date} />
          ))
        }
        <div className="mb-5">
          <h4 fs-6>2017-11-19</h4>
          <p className="fw-bold fs-4">정식오픈</p>
          <ul>
            <li>{GetDuration('2017-11-19')}</li>
          </ul>
        </div>
        <div className="mb-5">
          <h4 fs-6>2017-11-01</h4>
          <p className="fw-bold fs-4">베타오픈</p>
          <ul>
            <li>{GetDuration('2017-11-01')}</li>
          </ul>
        </div>
      </div>
    )
  }

  return (
    <section className="container">
      <h2 className="h2">개발 히스토리</h2>
      <Conents data={HistoryData} />
    </section>
  );
}
