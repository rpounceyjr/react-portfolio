import React from "react";
import "./style.css"

function Footer() {
    return(
        <footer className="navbar navbar-dark bg-dark fixed-bottom justify-content-center">
        Roger Pouncey (804)389 3518
        <a href= "mailto:rpounceyjr@gmail.com"><img className="github-mark" alt="GitHub link" src={process.env.PUBLIC_URL + "/images/gmail-logo.png"} /></a>
        <a href= "https://github.com/rpounceyjr"><img className="github-mark" alt="GitHub link" src={process.env.PUBLIC_URL + "/images/GitHub-Mark-Light-32px.png"} /></a>
        <a href= "https://www.linkedin.com/in/roger-pouncey-48568b198/"><img className="linkedin-mark" alt="LinkedIn link" src={process.env.PUBLIC_URL + "/images/LI-In-Bug.png"} /></a>
    </footer>
    )
}

export default Footer;