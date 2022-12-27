import React, { useEffect, useState } from 'react'

export default function Kakao({ isConnected }) {
    const [connectText, setConnectText] = useState("");

    useEffect(() => {
        setConnectText(isConnected ? 'connected' : '');
    }, [isConnected])

    const handleClick = (e) => {
        alert(e.target.closest('button').querySelector('img').getAttribute('alt'));
    }
    return (
        <button type="button" className="btn border kakao" onClick={handleClick}>
            <img src='/img/social/kakao.png' alt="Kakao" />
            <p>Kakao</p>
            <p className='fst-italic'>{connectText}</p>
        </button>
    )
}
