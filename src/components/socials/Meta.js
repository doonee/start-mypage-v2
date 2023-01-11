/**
 * https://developers.facebook.com/docs/facebook-login/web
 * https://developers.facebook.com/apps/581729881912209/fb-login/settings/
 * https://chunho.tistory.com/86
 * https://stackoverflow.com/questions/68082354/how-to-customize-the-facebook-login-button-with-reactjs
 * bootstrap 사용자 클래스 만드는법
 * https://5balloons.info/cursor-pointer-and-other-classes-for-bootstrap-5
*/
import React from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { JsonLocalStorage } from '../Common'

export default function Meta({ isConnected }) {
    // const [isLoading, setIsLoading] = useState(true);
    // const loginSdk = "https://connect.facebook.net/en_US/sdk.js";
    // const loginSdkStatus = useScript(loginSdk);
    // const { FB } = window;

    // const [login, setLogin] = useState(false);
    // const [data, setData] = useState({});
    // const [picture, setPicture] = useState("");

    const responseFacebook = (response) => {
        JsonLocalStorage.setItem("meta => ", response)

        // Login failed
        if (response.status === "unknown") {
            alert("Login failed!");
            //setLogin(false);
            return false;
        }

        if (response.accessToken) {
            // setLogin(true);
        } else {
            // setLogin(false);
        }
    };

    return (
        <>
            <FacebookLogin
                appId={`${process.env.REACT_APP_META_APP_ID}`}
                autoLoad={false}
                fields="name,email,picture"
                scope="public_profile,email,user_friends"
                callback={responseFacebook}
                render={renderProps => (
                    <img src="/img/social/meta-icon.png"
                        alt='meta social login'
                        style={{ cursor: 'pointer' }}
                        width={40} height={40} border={0}
                        onClick={renderProps.onClick} />
                )}
            />
        </>
    )
}
