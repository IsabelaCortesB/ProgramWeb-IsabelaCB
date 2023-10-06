import React from "react";
import './catimg.css'

export function CatImg({content}) {
    return (
        <div className="img-container">
            <img className="cat-image" src={content} alt="Cat-image" />
        </div>
    )
}