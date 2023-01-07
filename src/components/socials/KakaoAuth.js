import React, { useCallback, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { JsonLocalStorage } from "../Common";

const KakaoAuth = () => {
  const navigate = useNavigate();

  const getAuthToken = useCallback(async () => {
    const resultParams = new URL(document.location.toString()).searchParams;
    const code = resultParams.get("code"); // 인가코드 받는 부분
    const domain = 'https://kauth.kakao.com/oauth/token';
    const grantType = "authorization_code";
    const clientId = process.env.REACT_APP_KAKAO_API_KEY;
    const redirectUrl = 'http://localhost:3000/kakaoAuth';
    const requestUri = `${domain}?grant_type=${grantType}&client_id=${clientId}&redirect_uri=${redirectUrl}&code=${code}`;
    return await axios.post(requestUri, {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    }).then((res) => {
      if (res && res.status === 200 && res.data) {
        const access_token = res.data.access_token;
        return access_token;
      }
    }).catch((err) => {
      console.log(err)
      navigate(-1);
      return null;
    })
  }, [navigate]);

  const getUserInfo = useCallback(async (access_token) => {
    try {
      const userinfo = await axios.get(`https://kapi.kakao.com/v2/user/me`, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
          'Authorization': `bearer ${access_token}`
        }
      })
      if (userinfo && userinfo.status === 200 && userinfo.data) {
        JsonLocalStorage.setItem('ka_token', access_token);
        JsonLocalStorage.setItem('ka_properties', userinfo.data.properties);
        JsonLocalStorage.setItem('ka_account', userinfo.data.kakao_account);
        setTimeout(() => {
          navigate('/');
        }, 1000);
      } else {
        navigate(-1);
      }
    } catch (error) {
      console.error(error)
      navigate(-1);
    }
  }, [navigate]);

  useEffect(() => {
    const init = async () => {
      await JsonLocalStorage.setItem('ka_token', '');
      const token = await getAuthToken();
      if (token) await getUserInfo(token);
      else navigate(-1);
    }
    init();
  }, [navigate, getAuthToken, getUserInfo])

  return <div className="d-flex justify-content-center align-items-center"
    style={{ 'height': '200px' }}>Loading...</div>;
};

export default KakaoAuth;