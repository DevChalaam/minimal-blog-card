// Import React
import React from "react";
// Import CSS
import "./minimal.css";

function Minimal() {
    return (
        // Main Container
        <div className="container-main">
            {/* Box Container */}
            <div className="container-second"></div>
            
            {/* Design Box */}
            <div className="container-box-design">
                <p className="text-design">Design</p>
            </div>

            {/* Embracing Box Topic */}
            <div className="container-embracing">
                <h4 className="txt-embracing">Embracing Minimalism</h4>
            </div>

            {/* From Minimalist Box */}
            <div className="container-fromminimalist">
                <p className="txt-fromminimalist">From minimalist sculptures to minimalist paintings, this blog will inspire you to appreciate the beauty that lies in simplicity.</p>
            </div>

            <hr className="container-hr" color="#E5EAF0"></hr>

            {/* Annie Box */}
            <div className="container-annie">
                <p className="txt-annie">Annie Spratt</p>
            </div>
        </div>
    )
};

export default Minimal;