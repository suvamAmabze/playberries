import React from 'react'

export default function MessageBox(props) {
    return (
        <div style={{color:"red", textAlign:"center"}}>
            {props.children}
        </div>
    )
}
