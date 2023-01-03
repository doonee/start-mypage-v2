/*
네이버 로그인 API (네아로) 의 모든 것 : 1부 (연동하기)
https://velog.io/@rxxdo/%EB%A6%AC%EC%95%A1%ED%8A%B8%EB%A1%9C-%EB%84%A4%EC%9D%B4%EB%B2%84-%EC%86%8C%EC%85%9C-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0-1%EB%B6%80-%EB%84%A4%EC%95%84%EB%A1%9C-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0
개발 진행중...
*/
import React, { useEffect, useState } from 'react'
import { useScript } from "../Hooks";

export default function Naver({ isConnected, setGetToken, setUserInfo }) {
    const [connectText, setConnectText] = useState("");

    useEffect(() => {
        setConnectText(isConnected ? 'connected' : '');
    }, [isConnected])

    const naverLoginSdkStatus = useScript("https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js");
    useEffect(() => {
        console.log("🚀 ~ file: Signup.js:18 ~ Signup ~ naverLoginSdkStatus", naverLoginSdkStatus)
        if (naverLoginSdkStatus === 'ready') {
            console.log('삽입한 스크립트 로딩 후 작업할 것 기재')
        }
    })

    const handleClick = (e) => {
        alert(e.target.closest('button').querySelector('img').getAttribute('alt'));
    }
    return (
        <button type="button" className="btn border naver" onClick={handleClick}>
            <img src='/img/social/naver.png' alt="Naver" />
            <p>Naver</p>
            <p className='fst-italic'>{connectText}</p>
        </button>
    )
}
