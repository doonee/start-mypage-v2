/*
네이버 로그인 API (네아로) 의 모든 것 : 1부 (연동하기)
https://velog.io/@rxxdo/%EB%A6%AC%EC%95%A1%ED%8A%B8%EB%A1%9C-%EB%84%A4%EC%9D%B4%EB%B2%84-%EC%86%8C%EC%85%9C-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0-1%EB%B6%80-%EB%84%A4%EC%95%84%EB%A1%9C-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0
네이버 로그인 API (네아로) 의 모든 것 : 2부 (버튼 커스텀)
https://velog.io/@rxxdo/%EB%84%A4%EC%9D%B4%EB%B2%84-%EB%A1%9C%EA%B7%B8%EC%9D%B8-API-%EB%84%A4%EC%95%84%EB%A1%9C-%EC%9D%98-%EB%AA%A8%EB%93%A0-%EA%B2%83-%EB%B2%84%ED%8A%BC-%EC%BB%A4%EC%8A%A4%ED%85%80-feat.-useRef
[Javascript] Naver 로그인 버튼 커스텀하기
https://minggu92.tistory.com/37
https://developers.naver.com/docs/login/web/web.md
리액트로 네이버 아이디로 로그인 구현하기
https://2mojurmoyang.tistory.com/193
https://devmemory.tistory.com/99
*/
import React, { useState, useEffect } from 'react'
import { IsValidTokenValue } from '../Common';
import IsConnectDiv from './IsConnectDiv';
import { useScript } from "../Hooks";

export default function Naver() {
    const naverLoginSdk = "https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js";
    const naverLoginSdkStatus = useScript(naverLoginSdk);

    const [isConnected, setIsConnected] = useState(false);
    const { naver } = window

    const handleClick = () => {
        // const DOMAIN = 'https://nid.naver.com/oauth2.0/authorize';
        // const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;
        // const NAVER_CALLBACK_URI = process.env.REACT_APP_NAVER_CALLBACK_URI;
        // const STATE = 'RANDOM_STATE';
        // const requestTokenUri = DOMAIN
        //     + '?response_type=code'
        //     + '&client_id=' + NAVER_CLIENT_ID
        //     + '&redirect_uri=' + encodeURI(NAVER_CALLBACK_URI)
        //     + '&state=' + STATE;

        // window.location.href = requestTokenUri;

        document.getElementById('naverIdLogin').firstChild.click();
    }

    const init = () => {
        const naverLogin = new naver.LoginWithNaverId({
            clientId: process.env.REACT_APP_NAVER_CLIENT_ID,
            callbackUrl: process.env.REACT_APP_NAVER_CALLBACK_URI,
            // 팝업창으로 로그인 진행여부
            isPopup: false,
            // 버튼 타입 ( 색상, 타입, 크기 변경 가능 )
            loginButton: { color: 'green', type: 3, height: 58 },
            callbackHandle: true,
        })

        naverLogin.init();
    }

    useEffect(() => {
        if (naverLoginSdkStatus === 'ready') {
            init();
        }
    })

    useEffect(() => {
        setIsConnected(IsValidTokenValue('naverToken'));
    }, [])

    return (
        <>
            <div id="naverIdLogin"></div>
            <button type="button" className="btn border naver"
                onClick={handleClick}>
                <img src='/img/social/naver.png' alt="Naver" />
                <IsConnectDiv isConnected={isConnected} name="Naver" />
            </button>
        </>
    )
}
