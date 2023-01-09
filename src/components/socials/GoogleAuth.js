/**
 * https://carpet-part1.tistory.com/635
 * https://www.youtube.com/watch?v=auD1xmWNztI
 * https://www.youtube.com/watch?v=roxC8SMs7HU
 **/
import React, { useEffect } from 'react'
import { useScript } from "../Hooks";

export default function GoogleAuth({ isConnected }) {
  const loginSdk = "https://accounts.google.com/gsi/client";
  const loginSdkStatus = useScript(loginSdk);
  const { google } = window;

  const handleCredentialResponse = (response) => {
    console.log("🚀 ~ file: GoogleAuth.js:19 ~ handleCredentialResponse ~ response", response)
  };

  useEffect(() => {
    console.log("🚀 ~ file: GoogleAuth.js:43 ~ useEffect ~ loginSdkStatus", loginSdkStatus)
    if (loginSdkStatus === 'ready') {
      console.log("🚀 ~ file: GoogleAuth.js:25 ~ useEffect ~ google", google)

      google.accounts.id.initialize({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        callback: handleCredentialResponse
      });

      google.accounts.id.renderButton(
        document.getElementById('signInDiv'),
        { theme: 'outline', size: 'large' }
      );
    }
  });

  return (
    <div id="signInDiv" />
  )
}
