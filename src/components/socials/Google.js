import React from 'react'
import IsConnectDiv from './IsConnectDiv';

export default function Google({ isConnected }) {
    const handleClick = (e) => {
        alert(e.target.closest('button').querySelector('img').getAttribute('alt'));
    }

    return (
        <button type="button" className="btn border google" onClick={handleClick}>
            <img src='/img/social/google.png' alt="Google" />
            <IsConnectDiv isConnected={isConnected} name="Google" />
        </button>
    )
}
