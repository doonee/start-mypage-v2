import React from "react";
import HistoryData from '../datas/DevHistoryData.json';
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
        <h4>{item.title}</h4>
        <h6>{item.date}</h6>
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
          <h4>정식오픈</h4>
          <h6>2017-11-19</h6>
          <ul>
            <li>{GetDuration('2017-11-19')}</li>
          </ul>
        </div>
        <div className="mb-5">
          <h4>베타오픈</h4>
          <h6>2017-11-01</h6>
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
