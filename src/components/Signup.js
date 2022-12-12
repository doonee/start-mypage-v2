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
            <h4>소셜로 가입</h4>
            <Naver />
            <Kakao />
            <Google />
            <Meta />
            <Twitter />
          </article>
          <div className="col-12 mt-3">
            <h4 className='text-center'>직접 가입</h4>
            <SignupForm />
          </div >
        </div>
      </div>
    </section>
  );
}
