/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 * https://developers.kakao.com/console/app/846635
 * https://developers.kakao.com/tool/demo/login/login
 * https://developers.kakao.com/docs/latest/ko/kakaologin/common
 * https://han-py.tistory.com/417
 * https://www.youtube.com/watch?v=Re2R2rid1K4
 * https://devmemory.tistory.com/99
 */
import React, { useEffect, useState } from 'react'
import { IsValidTokenValue } from '../Common';
import { useScript } from "../Hooks";
import IsConnectDiv from './IsConnectDiv';

export default function Kakao() {
    const [isConnected, setIsConnected] = useState(false);
    const { Kakao } = window;
    const kakaoLoginSdk = "https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.min.js";
    const kakaoLoginSdkStatus = useScript(kakaoLoginSdk);

    useEffect(() => {
        if (kakaoLoginSdkStatus === 'ready') {
            Kakao.init(process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY);
        }
    })

    const checkToken = () => {
        setIsConnected(IsValidTokenValue('ka_token'));

        // const token = JsonLocalStorage.getItem('ka_token');
        // if (token) {
        //     Kakao.Auth.setAccessToken(token);
        //     Kakao.Auth.getStatusInfo()
        //         .then(function (res) {
        //             if (res.status === 'connected') {
        //                 //window.location.href = '/';
        //                 setIsConnected(true);
        //             }
        //         })
        //         .catch(function (err) {
        //             Kakao.Auth.setAccessToken(null);
        //         });
        // }
    }

    useEffect(() => {
        checkToken();
    }, [])

    const handleClick = () => {
        // 카카오 로그인 요청
        Kakao.Auth.authorize({
            redirectUri: 'http://localhost:3000/kakaoAuth',
        })
    }

    return (
        <button type="button" className="btn border kakao" onClick={handleClick}>
            <img src='/img/social/kakao.png' alt="Kakao" />
            <IsConnectDiv isConnected={isConnected} name="Kakao" />
        </button>
    )
}
