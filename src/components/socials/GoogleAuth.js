import React, { useEffect } from 'react'
import jwt_decode from "jwt-decode";
import { JsonLocalStorage } from '../Common'

export default function GoogleAuth(response) {
  console.log("🚀 ~ file: GoogleAuth.js:6 ~ GoogleAuth ~ response", response)

  useEffect(() => {
    const userObject = jwt_decode(response.credential);
    JsonLocalStorage.setItem('googleTest', userObject);
  }, [response.credential]);

  return (
    <div>GoogleAuth</div>
  )
}
