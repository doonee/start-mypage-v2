import React, { useEffect } from 'react'
import SignupForm from './SignupForm';
import Google from '../socials/Google'
import Meta from '../socials/Meta'
import Naver from '../socials/Naver'
import Kakao from '../socials/Kakao'
import Twitter from '../socials/Twitter'
import '../../css/social.css'

export default function Signup() {
  useEffect(() => {
    document.querySelector('#root > div > header > div > div.flex-grow-1')
      .innerHTML = "회원가입";
  }, [])

  return (
    <section className="container-xl">
      <div className="row d-flex justify-content-center">
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
