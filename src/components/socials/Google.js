/**
 * https://carpet-part1.tistory.com/635
 * https://www.youtube.com/watch?v=auD1xmWNztI
 * https://www.youtube.com/watch?v=roxC8SMs7HU
 * https://youtu.be/roxC8SMs7HU
 * https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow#redirecting
 * https://cloud.google.com/identity-platform/docs/web/google?hl=ko#web-version-9_4
 * https://devmemory.tistory.com/99
 **/
import React, { useEffect, useState } from 'react'
import IsConnectDiv from './IsConnectDiv';
import { useScript } from "../Hooks";
import jwt_decode from "jwt-decode";

export default function Google({ isConnected }) {
    const loginSdk = "https://accounts.google.com/gsi/client";
    const loginSdkStatus = useScript(loginSdk);
    const { google } = window;
    const [user, setUser] = useState({});

    const handleClick = (e) => {
        window.location.href = './GoogleAuth';
    }

    const handleCredentialResponse = (response) => {
        console.log("🚀 ~ file: Google.js:27 ~ handleCredentialResponse ~ response.credential", response.credential)
        const userObject = jwt_decode(response.credential);
        console.log("🚀 ~ file: Google.js:28 ~ handleCredentialResponse ~ userObject", userObject)
        setUser(userObject);
        document.getElementById('signInDiv').hidden = true;
    };

    const handleSignout = (e) => {
        setUser({});
        document.getElementById('signInDiv').hidden = false;
    }

    useEffect(() => {
        if (loginSdkStatus === 'ready') {
            google.accounts.id.initialize({
                client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
                callback: handleCredentialResponse
            });

            google.accounts.id.renderButton(
                document.getElementById('signInDiv'),
                { theme: 'outline', size: 'large' }
            );

            // 로그인 자동 모달팝업
            // google.accounts.id.prompt();
        }
    });

    /**
     * if we have no user : sign in button
     * if we have a user : show the log out button
     */
    return (
        <>
            <div id="signInDiv" className='btnGoogleLogin' />
            {Object.keys(user).length !== 0 &&
                <button onClick={(e) => handleSignout(e)}>Sign Out</button>
            }
            {user &&
                <div>
                    <img src={user.picture} alt={user.given_name} />
                    <h3>{user.given_name}</h3>
                </div>
            }
            <button type="button" className="btn border google" onClick={handleClick}>
                <img src='/img/social/google.png' alt="Google" />
                <IsConnectDiv isConnected={isConnected} name="Google" />
            </button>
        </>
    )
}
