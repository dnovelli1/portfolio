import React from "react";
import Types from "react-typed";

const Header = () => {
    return (
        <div className="headerWrap">
            <div className="quickInfo">
                <Types 
                className="typed-text"
                strings={["Web Developer", "Software Engineer", ""]}
                typeSpeed={30}
                backSpeed={60}
                loop
                />
                <a href="https://github.com/dnovelli1" className="btn-home">Github</a>
                <a href="https://www.linkedin.com/in/david-jacob-novelli/" className="btn-home">LinkedIn</a>
            </div>
        </div>
    )
}

export default Header;
