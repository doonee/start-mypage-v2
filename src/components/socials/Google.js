/**
 * https://carpet-part1.tistory.com/635
 * https://www.youtube.com/watch?v=auD1xmWNztI
 * https://www.youtube.com/watch?v=roxC8SMs7HU
 * https://youtu.be/roxC8SMs7HU
 * https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow#redirecting
 * https://cloud.google.com/identity-platform/docs/web/google?hl=ko#web-version-9_4
 * https://devmemory.tistory.com/99
 * 로그인버튼 커스텀
 * https://developers.google.com/identity/gsi/web/reference/js-reference
 **/
import React, { useEffect, useState } from 'react'
import { useScript } from "../Hooks";
import jwt_decode from "jwt-decode";
// import LoadingPop from '../LoadingPop';

export default function Google({ isConnected }) {
    //const [isLoading, setIsLoading] = useState(true);
    const loginSdk = "https://accounts.google.com/gsi/client";
    const loginSdkStatus = useScript(loginSdk);
    const { google } = window;
    const [user, setUser] = useState({});

    const handleCredentialResponse = (response) => {
        const userObject = jwt_decode(response.credential);
        setUser(userObject);
        document.getElementById('signInDiv').hidden = true;
    };

    const handleSignout = (e) => {
        setUser({});
        document.getElementById('signInDiv').hidden = false;
    }

    const onClickHandler = () => {
        console.log("Sign in with Google button clicked...")
    }

    useEffect(() => {
        if (loginSdkStatus === 'ready') {
            google.accounts.id.initialize({
                client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
                callback: handleCredentialResponse,
                ux_mode: "redirect",
                //abc temp
            });

            google.accounts.id.renderButton(
                document.getElementById('signInDiv'),
                {
                    type: 'icon', theme: 'outline', width: 50,
                    size: 'large', logo_alignment: 'center',
                    click_listener: onClickHandler
                }
            );

            // 로그인 자동 모달팝업
            // google.accounts.id.prompt();

            // changeToComplete();
        }
    });

    // function changeToComplete() {
    //     setIsLoading(false);
    // }

    /**
     * if we have no user : sign in button
     * if we have a user : show the log out button
     */
    return (
        <>
            <div id="signInDiv" className='btnGoogleLogin' data-width="300" />
            {Object.keys(user).length !== 0 &&
                <button onClick={(e) => handleSignout(e)}>Sign Out</button>
            }
            {user &&
                <div>
                    <img src={user.picture} alt={user.given_name} />
                    <h3>{user.given_name}</h3>
                </div>
            }
            {/* <LoadingPop isLoading={isLoading} /> */}
        </>
    )
}
