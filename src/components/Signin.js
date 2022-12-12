import React from 'react'
import SigninForm from './SigninForm';
import Google from './socials/Google'
import Meta from './socials/Meta'
import Naver from './socials/Naver'
import Kakao from './socials/Kakao'
import Twitter from './socials/Twitter'
import '../css/social.css'

export default function Signin() {
  return (
    <section className="container-xl">
      <div className="row d-flex justify-content-center">
        <h2 className="h2">로그인</h2>
        <div className="col-md-7 mt-md-0">
          <article className='text-center mb-4' id="social-links">
            <Naver />
            <Kakao />
            <Google />
            <Meta />
            <Twitter />
          </article>
          <p className="text-muted text-center"><small>* 소셜을 통한 가입과 일반가입 중 선택할 수 있습니다.</small></p>
          <div className="col-12 mt-2">
            <SigninForm />
          </div >
        </div>
      </div>
    </section>
  );
}
