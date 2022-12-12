import React from 'react'
import SignupForm from './SignupForm';
import Google from '../components/socials/Google'
import Meta from '../components/socials/Meta'
import Naver from '../components/socials/Naver'
import Kakao from '../components/socials/Kakao'
import Twitter from '../components/socials/Twitter'
import '../css/social.css'

export default function Signup() {
  return (
    <section className="container-xl">
      <div className="row d-flex justify-content-center">
        <h2 className="h2">회원가입</h2>
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
            <SignupForm />
          </div >
        </div>
      </div>
    </section>
  );
}
