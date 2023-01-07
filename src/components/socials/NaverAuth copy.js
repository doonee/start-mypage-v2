/*
네이버 로그인 API (네아로) 의 모든 것 : 1부 (연동하기)
https://velog.io/@rxxdo/%EB%A6%AC%EC%95%A1%ED%8A%B8%EB%A1%9C-%EB%84%A4%EC%9D%B4%EB%B2%84-%EC%86%8C%EC%85%9C-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0-1%EB%B6%80-%EB%84%A4%EC%95%84%EB%A1%9C-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0
네이버 로그인 API (네아로) 의 모든 것 : 2부 (버튼 커스텀)
https://velog.io/@rxxdo/%EB%84%A4%EC%9D%B4%EB%B2%84-%EB%A1%9C%EA%B7%B8%EC%9D%B8-API-%EB%84%A4%EC%95%84%EB%A1%9C-%EC%9D%98-%EB%AA%A8%EB%93%A0-%EA%B2%83-%EB%B2%84%ED%8A%BC-%EC%BB%A4%EC%8A%A4%ED%85%80-feat.-useRef
[Javascript] Naver 로그인 버튼 커스텀하기
https://minggu92.tistory.com/37
https://developers.naver.com/docs/login/web/web.md
netlify cors 해결하기
https://velog.io/@yunsungyang-omc/React-React-App%EC%97%90%EC%84%9C-CORS-%EC%9D%B4%EC%8A%88-%ED%95%B4%EA%B2%B0%ED%95%98%EA%B8%B0
리액트로 네이버 아이디로 로그인 구현하기
https://2mojurmoyang.tistory.com/193
*/
import React, { useEffect } from 'react'
import axios from 'axios';
// import { useScript } from "../Hooks";

export default function NaverAuth() {
    // const naverLoginSdk = "https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js";
    // const naverLoginSdkStatus = useScript(naverLoginSdk);

    const reqUserInfo = async () => {
        const resultParams = new URL(document.location.toString()).searchParams;
        const CODE = resultParams.get("code"); // 인가코드 받는 부분
        const STATE = resultParams.get("state");
        const DOMAIN = 'https://nid.naver.com/oauth2.0/token';
        const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;
        const NAVER_CLIENT_SECRET = process.env.REACT_APP_NAVER_CLIENT_SECRET;
        const NAVER_CALLBACK_URI = process.env.REACT_APP_NAVER_CALLBACK_URI;

        const requestUserInfoUri = DOMAIN
            + '?grant_type=authorization_code'
            + '&client_id=' + NAVER_CLIENT_ID
            + '&client_secret=' + NAVER_CLIENT_SECRET
            + '&redirect_uri=' + encodeURI(NAVER_CALLBACK_URI)
            + '&code=' + CODE
            + '&state=' + STATE;

        try {
            const userinfo = await axios.get(requestUserInfoUri, {
                headers: {
                    'X-Naver-Client-Id': NAVER_CLIENT_ID,
                    'X-Naver-Client-Secret': NAVER_CLIENT_SECRET
                }
            })
            console.log("🚀 ~ file: NaverAuth.js:44 ~ reqUserInfo ~ userinfo", userinfo)
        } catch (error) {
            console.log("🚀 ~ file: NaverAuth.js:46 ~ reqUserInfo ~ error", error)
            //console.error(error)
        }
    }

    useEffect(() => {
        reqUserInfo();
    }, []);

    /**
     * https://nid.naver.com/oauth2.0/token
     * ?grant_type=authorization_code
     * &client_id=ZZdNDHnpRPHT46EMuVU_
     * &client_secret=1Pc6DNz5So
     * &redirect_uri=http://localhost:3000/naverAuth
     * &code=wUjWgtdMFi6S0K0Val
     * &state=RANDOM_STATE 
     */

    /**
     * http://localhost:3000/naverAuth
     * ?code=DbJtTpbfteFZWICeKJ
     * &state=RANDOM_STATE
     */

    //window.location.href = requestUserInfoUri;
    //console.log("🚀 ~ file: NaverAuth.js:26 ~ NaverAuth ~ requestUserInfoUri", requestUserInfoUri)

    // const init = () => {
    //     const naverLogin = new naver.LoginWithNaverId({
    //         clientId: NAVER_CLIENT_ID,
    //         callbackUrl: NAVER_CALLBACK_URL,
    //         // 팝업창으로 로그인을 진행할 것인지?           
    //         isPopup: false,
    //         // 버튼 타입 ( 색상, 타입, 크기 변경 가능 )
    //         loginButton: { color: 'green', type: 3, height: 58 },
    //         callbackHandle: true,
    //     })

    //     naverLogin.init()

    //     // 선언된 naverLogin 을 이용하여 유저 (사용자) 정보를 불러오는데  
    //     // 함수 내부에서 naverLogin을 선언하였기에 지역변수처리가 되어  
    //     // userinfo 정보를 추출하는 것은 지역변수와 같은 함수에서 진행주어야한다.

    //     // 아래와 같이 로그인한 유저 ( 사용자 ) 정보를 직접 접근하여 추출가능하다.
    //     // 이때, 데이터는 첫 연동시 정보 동의한 데이터만 추출 가능하다.

    //     // 백엔드 개발자가 정보를 전달해준다면 아래 요기! 라고 작성된 부분까지는 
    //     // 코드 생략이 가능하다.  

    //     naverLogin.getLoginStatus(async function (status) {
    //         if (status) {
    //             // 아래처럼 선택하여 추출이 가능하고, 
    //             // const userid = naverLogin.user.getEmail()
    //             // const nickname = naverLogin.user.getNickName()

    //             // 정보 전체를 아래처럼 state 에 저장하여 추출하여 사용가능하다. 
    //             // setUserInfo(naverLogin.user)

    //             // console.log('naverLogin.user.t.id => ', naverLogin.user.id);
    //             // console.log('naverLogin.user.t.email => ', naverLogin.user.email);
    //             // console.log('naverLogin.user.t.nickname => ', naverLogin.user.nickname);

    //             setToken('naver', naverLogin.user);
    //         }
    //     })
    //     // // 요기!
    // }

    // // 네이버 소셜 로그인 (네아로) 는 URL 에 엑세스 토큰이 붙어서 전달된다.
    // // 우선 아래와 같이 토큰을 추출 할 수 있으며,
    // // 3부에 작성 될 Redirect 페이지를 통해 빠르고, 깨끗하게 처리가 가능하다.
    // const userAccessToken = () => {
    //     if (window.location.href.includes('access_token')) {
    //         return window.location.href.split('=')[1].split('&')[0];
    //     }
    // }

    // useEffect(() => {
    //     if (naverLoginSdkStatus === 'ready') {
    //         reqUserInfo();
    //     }
    // })

    return <div className="d-flex justify-content-center align-items-center"
        style={{ 'height': '200px' }}>Loading...</div>;
}
