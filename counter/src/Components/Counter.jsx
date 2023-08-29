import React from "react";

export function Counter({result}){

    const counterStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '20pt',
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        backgroundColor: '#696ef3',
        color: 'white'
    }

    

    return(
        <main style={counterStyle}>
            <h1>  
                {result}
            </h1>
        </main>
    )
}