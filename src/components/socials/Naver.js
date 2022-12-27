import React, { useEffect, useState } from 'react'

export default function Naver({ isConnected }) {
    const [connectText, setConnectText] = useState("");

    useEffect(() => {
        setConnectText(isConnected ? 'connected' : '');
    }, [isConnected])

    const handleClick = (e) => {
        alert(e.target.closest('button').querySelector('img').getAttribute('alt'));
    }
    return (
        <button type="button" className="btn border naver" onClick={handleClick}>
            <img src='/img/social/naver.png' alt="Naver" />
            <p>Naver</p>
            <p className='fst-italic'>{connectText}</p>
        </button>
    )
}
