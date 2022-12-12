import React from 'react'

export default function Naver() {
    const handleClick = (e) => {
        alert(e.target.closest('button').querySelector('img').getAttribute('alt'));
    }
    return (
        <button type="button" className="btn border naver" onClick={handleClick}>
            <img src='/img/social/naver.png' alt="Naver" />
            <p>Naver</p>
        </button>
    )
}
