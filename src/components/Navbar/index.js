import React from "react";
import "./style.css"
import { Link } from "react-router-dom"

function Navbar() {
    return(
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" href="/">Roger Pouncey</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <Link to="/react-portfolio">About</Link>
                </li>
                <li className="nav-item">
                    <Link to="/react-portfolio/portfolio">Portfolio</Link>
                </li>
                <li className="nav-item">
                    <Link to="/react-portfolio/contact">Contact</Link>
                </li>
            </ul>
        </div>
    </nav>
    )
}

export default Navbar;