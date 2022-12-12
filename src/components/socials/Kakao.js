import React from 'react'

export default function Kakao() {
    const handleClick = (e) => {
        alert(e.target.closest('button').querySelector('img').getAttribute('alt'));
    }
    return (
        <button type="button" className="btn border kakao" onClick={handleClick}>
            <img src='/img/social/kakao.png' alt="Kakao" />
            <p>Kakao</p>
        </button>
    )
}
