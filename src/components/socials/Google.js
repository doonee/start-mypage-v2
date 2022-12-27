import React, { useEffect, useState } from 'react'

export default function Google({ isConnected }) {
    const [connectText, setConnectText] = useState("");

    useEffect(() => {
        setConnectText(isConnected ? 'connected' : '');
    }, [isConnected])

    const handleClick = (e) => {
        alert(e.target.closest('button').querySelector('img').getAttribute('alt'));
    }

    return (
        <button type="button" className="btn border google" onClick={handleClick}>
            <img src='/img/social/google.png' alt="Google" />
            <p>Google</p>
            <p className='fst-italic'>{connectText}</p>
        </button>
    )
}
