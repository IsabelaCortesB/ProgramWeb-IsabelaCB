import React from "react";

export function Header() {


    const headerStyle = {
        color:"white",
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '30px',
        backgroundColor: '#8488f4',
        marginBottom: '50px'
    }

    
    return (
        <header style={headerStyle}>
            <h1>Welcome to counter app</h1>
            <section style={{display: 'flex', gap: '10px'}}>
                <a href="">About</a>
                <a href="">Dowload</a>
            </section>
        </header>
    )
}