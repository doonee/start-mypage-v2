import React from 'react'
import '../css/main.css'

export default function Loading({ isLoading }) {
    return (
        <div id="loading-image" className={isLoading ? 'show-loading' : 'hide-loading'}></div>
    )
}
