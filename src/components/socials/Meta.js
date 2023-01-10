/**
 * https://developers.facebook.com/docs/facebook-login/web
 * https://developers.facebook.com/apps/581729881912209/fb-login/settings/
 */
import React from 'react'
import FacebookLogin from "react-facebook-login";

export default function Meta({ isConnected }) {
    // const loginSdk = "https://connect.facebook.net/en_US/sdk.js";
    // const loginSdkStatus = useScript(loginSdk);
    // const { FB } = window;

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
            <FacebookLogin
                appId={process.env.REACT_APP_META_APP_ID}
                autoLoad={false}
                fields="name,email,picture"
                scope="public_profile,email,user_friends"
                cssClass="my-facebook-button-class"
                callback={responseFacebook}
                icon="fa-facebook"
            />
        </>
    )
}
