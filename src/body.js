import React from "react";
import "./body.css";
import Banner from "./Banner.svg"

function Body() {
    return (
        <div className="image-container">
            <img className="image" src={Banner} alt="background" /> 
            <div className="text-image">
                <h1 >Discover Exciting Events Happening Near You- Stay Turned for Updates!</h1>
                <h3 className="text-image-h3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h3>
            </div>
        </div>
    );
}

export default Body;
