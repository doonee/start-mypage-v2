/**
 * https://developers.facebook.com/docs/facebook-login/web
 * https://developers.facebook.com/apps/581729881912209/fb-login/settings/
 */
import React from 'react'
import FacebookLogin from "react-facebook-login";
import IsConnectDiv from './IsConnectDiv';
// import { useScript } from "../Hooks";

export default function Meta({ isConnected }) {
    // const loginSdk = "https://connect.facebook.net/en_US/sdk.js";
    // const loginSdkStatus = useScript(loginSdk);
    // const { FB } = window;

    const handleClick = (e) => {
        alert(e.target.closest('button').querySelector('img').getAttribute('alt'));
    }

    // const [login, setLogin] = useState(false);
    // const [data, setData] = useState({});
    // const [picture, setPicture] = useState("");

    const responseFacebook = (response) => {
        console.log(response);
        // Login failed
        if (response.status === "unknown") {
            alert("Login failed!");
            //setLogin(false);
            return false;
        }
        // setData(response);
        // setPicture(response.picture.data.url);
        if (response.accessToken) {
            // setLogin(true);
        } else {
            // setLogin(false);
        }
    };

    return (
        <>
            <button type="button" className="btn border meta" onClick={handleClick}>
                <img src='/img/social/facebook-meta.png' alt="Facebook(Meta)" />
                <IsConnectDiv isConnected={isConnected} name="Meta" />
            </button>
            <FacebookLogin
                appId={process.env.REACT_APP_META_APP_ID}
                autoLoad={false}
                // fields="name,email,picture"
                // scope="public_profile,email,user_friends"
                cssClass="my-facebook-button-class"
                callback={responseFacebook}
                icon="fa-facebook"
            />
        </>
    )
}
