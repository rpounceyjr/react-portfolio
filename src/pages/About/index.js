import React from "react"
import "./style.css"
import mongoImage from "../../utils/mern-images/mongodb-leaf@4x.png"
import expressImage from "../../utils/mern-images/express-logo.png"
import reactImage from "../../utils/mern-images/react-logo.png"
import nodeImage from "../../utils/mern-images/node-logo.png"
import MernLogo from "../../components/MernLogo";
import Bio from "../../components/Bio"

function About() {
    return (
        <div>
            <div className="container">
                <Bio />
                <section className="row">
                    <div className="col-sm-8 logos-col offset-sm-2 logos-row-container">
                        <div className="row logos-row justify-content-center">
                            <MernLogo
                                image={mongoImage} />
                            <MernLogo
                                image={expressImage} />
                            <MernLogo
                                image={reactImage} />
                            <MernLogo
                                image={nodeImage} />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default About;