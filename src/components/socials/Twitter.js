import React from 'react'

export default function Twitter() {
    const handleClick = (e) => {
        alert(e.target.closest('button').querySelector('img').getAttribute('alt'));
    }
    return (
        <button type="button" className="btn border twitter" onClick={handleClick}>
            <img src='/img/social/twitter.png' alt="Twitter" />
            <p>Twitter</p>
        </button>
    )
}
