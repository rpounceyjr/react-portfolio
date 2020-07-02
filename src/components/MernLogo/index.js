import React from "react"
import "./style.css"

function MernLogo({ image }) {
    return (
        <div className="logo-background-div">
            <img className="logo-img" alt="logo" src={image} />
        </div>
    )
}

export default MernLogo;