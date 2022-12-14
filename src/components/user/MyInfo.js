import React, { useEffect, useState } from 'react'
import MyInfoForm from './MyInfoForm';
import Google from '../socials/Google'
import Meta from '../socials/Meta'
import Naver from '../socials/Naver'
import Kakao from '../socials/Kakao'
import '../../css/social.css'

export default function MyInfo() {
  const [userId, setUserId] = useState('');
  const [naverConnected, setNaverConnected] = useState(false);
  const [kakaoConnected, setKakaoConnected] = useState(false);
  const [googleConnected, setGoogleConnected] = useState(false);
  const [metaConnected, setMetaConnected] = useState(false);

  useEffect(() => {
    // from DB!
    setUserId('abcd');

    const socialConnects = ['naver', 'google'];
    socialConnects.forEach(c => {
      if (c === 'naver') setNaverConnected(true);
      else if (c === 'kakao') setKakaoConnected(true);
      else if (c === 'google') setGoogleConnected(true);
      else if (c === 'meta') setMetaConnected(true);
    })
  }, [])

  return (
    <section className="container-xl">
      <div className="row d-flex justify-content-center">
        <h2 className="h2">내 정보</h2>
        <div className="col-md-7 mt-md-0">
          <article className='text-center mb-5' id="social-links">
            <h4>소셜 계정 연결정보</h4>
            <Naver isConnected={naverConnected} />
            <Kakao isConnected={kakaoConnected} />
            <Google isConnected={googleConnected} />
            <Meta isConnected={metaConnected} />
          </article>
          <div className="col-12 mt-5">
            <h4 className='text-center'>직접 가입정보</h4>
            <MyInfoForm userId={userId} />
          </div >
        </div>
      </div>
    </section>
  );
}
