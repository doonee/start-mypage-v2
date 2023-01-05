import React, { useEffect, useState } from 'react'
import IsConnectDiv from './IsConnectDiv';

export default function Meta({ isConnected }) {
    const handleClick = (e) => {
        alert(e.target.closest('button').querySelector('img').getAttribute('alt'));
    }
    return (
        <button type="button" className="btn border meta" onClick={handleClick}>
            <img src='/img/social/facebook-meta.png' alt="Facebook(Meta)" />
            <IsConnectDiv isConnected={isConnected} name="Meta" />
        </button>
    )
}
