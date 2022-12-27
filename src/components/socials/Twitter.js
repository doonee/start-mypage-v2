import React, { useEffect, useState } from 'react'

export default function Twitter({ isConnected }) {
    const [connectText, setConnectText] = useState("");

    useEffect(() => {
        setConnectText(isConnected ? 'connected' : '');
    }, [isConnected])

    const handleClick = (e) => {
        alert(e.target.closest('button').querySelector('img').getAttribute('alt'));
    }
    return (
        <button type="button" className="btn border twitter" onClick={handleClick}>
            <img src='/img/social/twitter.png' alt="Twitter" />
            <p>Twitter</p>
            <p className='fst-italic'>{connectText}</p>
        </button>
    )
}
