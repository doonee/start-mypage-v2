import React, { useEffect } from "react";
import axios from 'axios';
import { jsonLocalStorage } from "../Common";

const KakaoRedirectHandler = () => {
  useEffect(() => {
    const resultParams = new URL(document.location.toString()).searchParams;
    const authCode = resultParams.get("code"); // 인가코드 받는 부분
    const domain = 'https://kauth.kakao.com/oauth/token';
    const grantType = "authorization_code";
    const clientId = process.env.REACT_APP_KAKAO_API_KEY;
    const redirectUrl = 'http://localhost:3000/oauth/callback/kakao';
    const requestUri = `${domain}?grant_type=${grantType}&client_id=${clientId}&redirect_uri=${redirectUrl}&code=${authCode}`;
    axios.post(requestUri, {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    }).then((res) => {
      console.log('res => ', res);
      if (res && res.status === 200 && res.data) {
        jsonLocalStorage.setItem('kakao', res.data);
        window.location.href = '/';
      }
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  return <></>;
};

export default KakaoRedirectHandler;