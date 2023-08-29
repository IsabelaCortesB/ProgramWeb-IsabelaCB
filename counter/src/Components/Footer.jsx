import React from "react";

export function Footer() {
    const footerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: '0px',
        width: '100%',
        padding: '10px',
        backgroundColor: '#8488f4',
        color: 'white'
    }

    return(
        <footer style={footerStyle}>
            <h3>Isabela Cortes Builes</h3>
            <h4>A00359458</h4>
        </footer>
    )
}