import React from 'react'

export const GifItem = ({ id, title, url }) => {
    return (
        <div className="card animate__animated animate__fadeIn animate__delay-0.5s">
            <img src={url} alt=""/>
            <p>{title}</p>
        </div>
    )
}
