import React from 'react'

export default function Meta() {
    const handleClick = (e) => {
        alert(e.target.closest('button').querySelector('img').getAttribute('alt'));
    }
    return (
        <button type="button" className="btn border meta" onClick={handleClick}>
            <img src='/img/social/facebook-meta.png' alt="Facebook(Meta)" />
            <p>Meta</p>
        </button>
    )
}
