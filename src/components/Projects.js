import React from "react";
import crypto from "../assets/cryptonite.gif";

const Projects = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <div className="card text-center">
                        <img src={crypto} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Cryptonite</h5>
                            <p className="card-text">A cryptocurrency full-stack application built with React.js. Create an account, buy/send coins, or check on the current price of Cryptonite!</p>
                            <a href="https://github.com/dnovelli1/Crytonite-a-cryptocurrency-with-MERN" className="btn btn-primary">Github</a>
                            <a href="http://cryptonite-env.eba-kvnfavpx.us-west-2.elasticbeanstalk.com/" className="btn btn-primary">Full Site</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card text-center">
                        <img src="..." className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Sporcle But Better</h5>
                            <p className="card-text">Test your knowledge on the capitals of countries in each continent. Compare your scores to others and track your progress.</p>
                            <a href="https://github.com/dnovelli1/sporclebutbetter" className="btn btn-primary">Github</a>
                            <a href="https://radiant-chamber-32939.herokuapp.com/" className="btn btn-primary">Full Site</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card text-center">
                        <img src="..." className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="https://github.com/dnovelli1/Crytonite-a-cryptocurrency-with-MERN" className="btn btn-primary">Github</a>
                            <a href="http://cryptonite-env.eba-kvnfavpx.us-west-2.elasticbeanstalk.com/" className="btn btn-primary">Full Site</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card text-center">
                        <img src="..." className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="https://github.com/dnovelli1/Crytonite-a-cryptocurrency-with-MERN" className="btn btn-primary">Github</a>
                            <a href="http://cryptonite-env.eba-kvnfavpx.us-west-2.elasticbeanstalk.com/" className="btn btn-primary">Full Site</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
