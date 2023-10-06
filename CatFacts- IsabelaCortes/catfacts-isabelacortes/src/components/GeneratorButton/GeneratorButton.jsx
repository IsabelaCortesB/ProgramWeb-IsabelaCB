import React from "react";
import './generatorButton.css'

export function GeneratorButton({onClick}) {
    return(
        <button className="button-style" onClick={onClick}>Generate New Fact</button>
    )
}