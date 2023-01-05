import React from 'react'
import IsConnectDiv from './IsConnectDiv';

export default function Twitter({ isConnected }) {
    const handleClick = (e) => {
        alert(e.target.closest('button').querySelector('img').getAttribute('alt'));
    }
    return (
        <button type="button" className="btn border twitter" onClick={handleClick}>
            <img src='/img/social/twitter.png' alt="Twitter" />
            <IsConnectDiv isConnected={isConnected} name="Twitter" />
        </button>
    )
}
