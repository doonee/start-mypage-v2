import React from 'react'

export default function Google() {
    const handleClick = (e) => {
        alert(e.target.closest('button').querySelector('img').getAttribute('alt'));
    }
    return (
        <button type="button" className="btn border google" onClick={handleClick}>
            <img src='/img/social/google.png' alt="Google" />
            <p>Google</p>
        </button>
    )
}
