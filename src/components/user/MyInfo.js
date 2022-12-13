import React from 'react'
import MyInfoForm from './MyInfoForm';
import Google from '../socials/Google'
import Meta from '../socials/Meta'
import Naver from '../socials/Naver'
import Kakao from '../socials/Kakao'
import Twitter from '../socials/Twitter'
import '../../css/social.css'

export default function MyInfo() {
  return (
    <section className="container-xl">
      <div className="row d-flex justify-content-center">
        <h2 className="h2">내 정보</h2>
        <div className="col-md-7 mt-md-0">
          <article className='text-center mb-4' id="social-links">
            <h4>소셜 가입정보</h4>
            <Naver />
            <Kakao />
            <Google />
            <Meta />
            <Twitter />
          </article>
          <div className="col-12 mt-3">
            <h4 className='text-center'>직접 가입정보</h4>
            <MyInfoForm />
          </div >
        </div>
      </div>
    </section>
  );
}