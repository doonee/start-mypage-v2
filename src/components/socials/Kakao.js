/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 * https://developers.kakao.com/console/app/846635
 * https://developers.kakao.com/tool/demo/login/login
 * https://developers.kakao.com/docs/latest/ko/kakaologin/common
 * https://han-py.tistory.com/417
 * https://www.youtube.com/watch?v=Re2R2rid1K4
 * https://devmemory.tistory.com/99
 */
import React, { useEffect } from 'react'
import { useScript } from "../Hooks";

export default function Kakao() {
    const { Kakao } = window;
    const kakaoLoginSdk = "https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.min.js";
    const kakaoLoginSdkStatus = useScript(kakaoLoginSdk);

    useEffect(() => {
        if (kakaoLoginSdkStatus === 'ready') {
            Kakao.init(process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY);
        }
    })

    const handleClick = () => {
        // 카카오 로그인 요청
        Kakao.Auth.authorize({
            redirectUri: 'http://localhost:3000/kakaoAuth',
        })
    }

    return (
        <>
            <img src='/img/social/kakao-icon.png'
                alt="Kakao"
                width="40"
                height="40"
                style={{ cursor: 'pointer' }}
                onClick={handleClick} />
        </>
    )
}
