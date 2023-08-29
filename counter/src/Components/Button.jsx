import React from "react";

export function Button({type, name, logic}){

    const buttonStyle = {
        color: 'white',
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        backgroundColor: '#8488f4',
        border: 'none',
        fontSize: '15pt'
    }

    return(
        <>
           <button className={name} style={buttonStyle} onClick={logic}>
            {type}
            </button> 
        </>
    )
}