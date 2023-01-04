/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 * https://developers.kakao.com/console/app/846635
 * https://developers.kakao.com/tool/demo/login/login
 * https://developers.kakao.com/docs/latest/ko/kakaologin/common
 * https://han-py.tistory.com/417
 */
import React, { useEffect, useState } from 'react'
import { useScript } from "../Hooks";
// import { jsonLocalStorage } from '../Common';

export default function Kakao({ isConnected }) {
    const [connectText, setConnectText] = useState("");
    const { Kakao } = window

    useEffect(() => {
        setConnectText(isConnected ? 'connected' : '');
    }, [isConnected])

    const kakaoLoginSdk = "https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.min.js";
    const kakaoLoginSdkStatus = useScript(kakaoLoginSdk);

    // 화면 첫 렌더링이후 바로 실행하기 위해 useEffect 를 사용하였다.
    useEffect(() => {
        if (kakaoLoginSdkStatus === 'ready') {
            // 삽입한 스크립트 로딩 후 작업할 것 기재
            // 사용하려는 앱의 JavaScript 키 입력
            // Kakao.init(process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY);
            Kakao.init('dc127d6aecefd7e0e12396bb8ab1f1fd');
            displayToken();
        }
        console.log('kakaoLoginSdkStatus => ', kakaoLoginSdkStatus)
    })

    const handleClick = (e) => {
        //alert(e.target.closest('button').querySelector('img').getAttribute('alt'));
        document.getElementById('kakao-login-btn').click()
    }

    const loginWithKakao = () => {
        // Kakao.Auth.authorize({
        //     //redirectUri: 'https://developers.kakao.com/tool/demo/oauth',
        //     redirectUri: 'http://localhost:3000/signin',
        //     //http://localhost:3000/signin?code=6EsnBpE2DL8LSxH-H2b1bj8WcKpqaFVkv4nC6RnzF32jZqrTEFnOzOve5W_CXEdYNeQk7Qo9dJcAAAGFerT2mQ
        // });
        const DOMAIN = 'https://kauth.kakao.com/oauth/authorize';
        const CLIENT_ID = '103bf033d2e99956bfeb3b7abb123278'; // REST API 키
        const REDIRECT_URI = 'http://localhost:3000/oauth/callback/kakao';
        const KAKAO_AUTH_URL = `${DOMAIN}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
        console.log("🚀 ~ file: Kakao.js:50 ~ loginWithKakao ~ KAKAO_AUTH_URL", KAKAO_AUTH_URL);
        //https://kauth.kakao.com/oauth/authorize?client_id=dc127d6aecefd7e0e12396bb8ab1f1fd&redirect_uri=http://localhost:3000/signin&response_type=code
        window.location.href = KAKAO_AUTH_URL;
        //http://localhost:3000/signin?code=Ql2NgZvyzUqX6i4gFsHveqxU3yX2KNl9NdKApZii_BxsO4Perchl5cPcDHAKr3kaaM4Lago9c-sAAAGFeuekzQ
    }

    const getCookie = (name) => {
        var parts = document.cookie.split(name + '=');
        console.log("🚀 ~ file: Kakao.js:47 ~ getCookie ~ parts", parts)
        if (parts.length === 2) { return parts[1].split(';')[0]; }
    }

    const displayToken = () => {
        var token = getCookie('authorize-access-token');
        console.log("🚀 ~ file: Kakao.js:52 ~ displayToken ~ token", token)

        if (token) {
            Kakao.Auth.setAccessToken(token);
            Kakao.Auth.getStatusInfo()
                .then(function (res) {
                    if (res.status === 'connected') {
                        document.getElementById('token-result').innerText
                            = 'login success, token: ' + Kakao.Auth.getAccessToken();
                    }
                })
                .catch(function (err) {
                    Kakao.Auth.setAccessToken(null);
                });
        }
    }

    return (
        <>
            <a className='d-none' id="kakao-login-btn" onClick={loginWithKakao}>
                <img src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg"
                    width="222" alt="카카오 로그인 버튼" />
            </a>
            <button type="button" className="btn border kakao" onClick={handleClick}>
                <img src='/img/social/kakao.png' alt="Kakao" />
                <p>Kakao</p>
                <p className='fst-italic'>{connectText}</p>
            </button>
        </>
    )
}
