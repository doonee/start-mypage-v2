import React, { useEffect, useState } from 'react'

export default function Meta({ isConnected }) {
    const [connectText, setConnectText] = useState("");

    useEffect(() => {
        setConnectText(isConnected ? 'connected' : '');
    }, [isConnected])

    const handleClick = (e) => {
        alert(e.target.closest('button').querySelector('img').getAttribute('alt'));
    }
    return (
        <button type="button" className="btn border meta" onClick={handleClick}>
            <img src='/img/social/facebook-meta.png' alt="Facebook(Meta)" />
            <p>Meta</p>
            <p className='fst-italic'>{connectText}</p>
        </button>
    )
}
