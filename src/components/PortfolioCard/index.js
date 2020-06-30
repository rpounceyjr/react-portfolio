import React from "react";
import "./style.css"

function PortfolioCard({name, description, gitHub, url, image}) {
    return (
    <div className="col-lg-6 col-xs-12">
                <div className="card mx-auto">
                    <img src={image} className="card-img-top" alt={name} />
                    <div className="card-body text-center">
                        <h5 className="card-title text-center">{name}</h5>
                        <hr />
                        <p className="card-text">{description}</p>
                        <hr />
                        {url && <a href={url} className="btn btn-secondary">Click
                            Here</a>}
                        <a href={gitHub} className="btn btn-secondary">GitHub</a>
                    </div>
                </div>
            </div>
    )
            
}

export default PortfolioCard;