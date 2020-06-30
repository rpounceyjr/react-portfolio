import React from "react";
import PortfolioCard from "../../components/PortfolioCard";
import portfolioInfo from "../../utils/porfolioInfo.json"
import "./style.css"

function Portfolio() {
    return (
        <div className="container">
            <div className="row">
                {portfolioInfo.map(info => (
                    <PortfolioCard
                        key={info.id}
                        name={info.name}
                        image= {info.image}
                        description={info.description}
                        gitHub={info.gitHub}
                        url={info.url} />
                )
                )}
            </div>
        </div>
    )
}

export default Portfolio;