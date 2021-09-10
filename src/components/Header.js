import React from "react";
import Types from "react-typed";

const Header = () => {
    return (
        <div className="headerWrap">
            <div className="quickInfo">
                <Types 
                className="typed-text"
                strings={["Full Stack Developer", "Software Engineer", "HTML, CSS, Javascript, Node, Express, React"]}
                typeSpeed={30}
                backSpeed={60}
                loop
                />
                <a href="https://github.com/dnovelli1" target="_blank" className="btn-home">Github</a>
                <a href="https://www.linkedin.com/in/david-jacob-novelli/" target="_blank" className="btn-home">LinkedIn</a>
            </div>
        </div>
    )
}

export default Header;
