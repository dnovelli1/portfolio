import React from "react";
import crypto from "../assets/cryptonite.gif";
import sporcle from "../assets/sporcle1.gif";
import weather from  "../assets/weather.gif";
import google from "../assets/google.gif";

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
                            <p className="card-text">HTML, CSS, Javascript, React, Bootstrap, MongoDb, Mongoose, Node</p>
                            <a href="https://github.com/dnovelli1/Crytonite-a-cryptocurrency-with-MERN" target="_blank" className="btn btn-primary">Github</a>
                            <a href="http://cryptonite-env.eba-kvnfavpx.us-west-2.elasticbeanstalk.com/" target="_blank" className="btn btn-primary">Full Site</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card text-center">
                        <img src={sporcle} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Sporcle But Better</h5>
                            <p className="card-text">Test your knowledge on the capitals of countries in each continent. Compare your scores to others and track your progress.</p>
                            <p className="card-text">HTML, CSS, Javascript, Node, MySQL, Handlebars, Sequelize, Express</p>
                            <a href="https://github.com/dnovelli1/sporclebutbetter" target="_blank" className="btn btn-primary">Github</a>
                            <a href="https://radiant-chamber-32939.herokuapp.com/" target="_blank" className="btn btn-primary">Full Site</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card text-center">
                        <img src={weather} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Weather Dashboard</h5>
                            <p className="card-text">Type in your city to stay updated with your local weather. Provides a current and 5 day weather forecast.</p>
                            <p className="card-text">HTML, CSS, Javascript, jQuery, Bootstrap, Moment, API's</p>
                            <a href="https://github.com/dnovelli1/weatherdashboard" target="_blank" className="btn btn-primary">Github</a>
                            <a href="https://dnovelli1.github.io/weatherdashboard/" target="_blank" className="btn btn-primary">Full Site</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card text-center">
                        <img src={google} className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title">Googly Search</h5>
                            <p className="card-text">Leverages Google Books API to bring back the most important content from your favorite books.</p>
                            <p className="card-text">HTML, CSS, Javascript, React, Node, Atlas MongoDB</p>
                            <a href="https://github.com/dnovelli1/googly-search" target="_blank" className="btn btn-primary">Github</a>
                            <a href="https://googly-search.herokuapp.com/" target="_blank" className="btn btn-primary">Full Site</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
