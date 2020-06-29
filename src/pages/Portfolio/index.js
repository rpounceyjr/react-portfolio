import React from "react";
import PortfolioCard from "../../components/PortfolioCard";
import portfolioInfo from "../../utils/porfolioInfo.json"

function Portfolio() {
    return (
        <div className="row">
            {portfolioInfo.map(info => (
                <PortfolioCard
                    key={info.id}
                    name={info.name}
                    description={info.description}
                    gitHub={info.gitHub}
                    url={info.url} />
            )
            )}
        </div>
    )
}

export default Portfolio;