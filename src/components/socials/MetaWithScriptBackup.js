/**
 * https://developers.facebook.com/docs/facebook-login/web
 * https://developers.facebook.com/apps/581729881912209/fb-login/settings/
 * https://jasonwatmore.com/post/2020/10/25/react-facebook-login-tutorial-example
 * https://developers.facebook.com/docs/facebook-login/web?locale=ko_KR
 */
import React, { useEffect } from 'react'
import IsConnectDiv from './IsConnectDiv';
import { useScript } from "../Hooks";

export default function MetaWithScriptBackup({ isConnected }) {
    const loginSdk = "https://connect.facebook.net/en_US/sdk.js";
    const loginSdkStatus = useScript(loginSdk);

    const handleClick = (e) => {
        alert(e.target.closest('button').querySelector('img').getAttribute('alt'));
    }

    async function login() {
        // login with facebook then authenticate with the API to get a JWT auth token
        const { authResponse } = await new Promise(window.FB.login);
        console.log("🚀 ~ file: Meta.js:22 ~ login ~ authResponse", authResponse)
        console.log("🚀 ~ file: Meta.js:27 ~ login ~ authResponse.accessToken", authResponse.accessToken)
    }

    useEffect(() => {
        if (loginSdkStatus === 'ready') {
            window.fbAsyncInit = function () {
                window.FB.init({
                    appId: `${process.env.REACT_APP_META_APP_ID}`,
                    cookie: true,
                    xfbml: true,
                    version: 'v8.0'
                });

                // // auto authenticate with the api if already logged in with facebook
                // window.FB.getLoginStatus(({ authResponse }) => {
                //     console.log("🚀 ~ file: Meta.js:60 ~ window.FB.getLoginStatus ~ authResponse", authResponse)
                // });
            };
        }
    });

    return (
        <>
            <button type="button" className="btn border meta" onClick={handleClick}>
                <img src='/img/social/facebook-meta.png' alt="Facebook(Meta)" />
                <IsConnectDiv isConnected={isConnected} name="Meta" />
            </button>

            <div className="col-md-6 offset-md-3 mt-5 text-center">
                <div className="card">
                    <h4 className="card-header">React - Facebook Login Example</h4>
                    <div className="card-body">
                        <button className="btn btn-facebook" onClick={login}>
                            <i className="fa fa-facebook mr-1"></i>
                            Login with Facebook
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
