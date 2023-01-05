/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 * https://developers.kakao.com/console/app/846635
 * https://developers.kakao.com/tool/demo/login/login
 * https://developers.kakao.com/docs/latest/ko/kakaologin/common
 * https://han-py.tistory.com/417
 * https://www.youtube.com/watch?v=Re2R2rid1K4
 */
import React, { useEffect } from 'react'
import { jsonLocalStorage } from '../Common';
import { useScript } from "../Hooks";
import IsConnectDiv from './IsConnectDiv';

export default function Kakao({ isConnected }) {
    const { Kakao } = window;
    const kakaoLoginSdk = "https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.min.js";
    const kakaoLoginSdkStatus = useScript(kakaoLoginSdk);

    useEffect(() => {
        if (kakaoLoginSdkStatus === 'ready') {
            // 사용하려는 앱의 JavaScript 키 입력
            Kakao.init(process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY);
            displayToken();
        }
    })

    const displayToken = () => {
        //var token = getCookie('authorize-access-token');
        var token = jsonLocalStorage.getItem('kakao').access_token;
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

    const handleClick = (e) => {
        //alert(e.target.closest('button').querySelector('img').getAttribute('alt'));
        document.getElementById('kakao-login-btn').click()
    }

    const loginWithKakao = () => {
        // const DOMAIN = 'https://kauth.kakao.com/oauth/authorize';
        // const CLIENT_ID = process.env.REACT_APP_KAKAO_API_KEY; // REST API 키
        const REDIRECT_URI = 'http://localhost:3000/kakaoAuth'; // 인가코드를 받고 이동할 Uri
        // const KAKAO_AUTH_URI = `${DOMAIN}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
        // window.location.href = KAKAO_AUTH_URI;
        Kakao.Auth.authorize({
            redirectUri: REDIRECT_URI,
            // scope: 'profile_nickname, account_email, gender'
        })
    }

    // const getCookie = (name) => {
    //     var parts = document.cookie.split(name + '=');
    //     if (parts.length === 2) { return parts[1].split(';')[0]; }
    // }

    return (
        <>
            <a className='d-none' id="kakao-login-btn" onClick={loginWithKakao}>
                <img src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg"
                    width="222" alt="카카오 로그인 버튼" />
            </a>
            <button type="button" className="btn border kakao" onClick={handleClick}>
                <img src='/img/social/kakao.png' alt="Kakao" />
                <IsConnectDiv isConnected={isConnected} name="Kakao" />
            </button>
            <div id='token-result' />
        </>
    )
}
