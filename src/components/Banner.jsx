import React from "react";

const Banner = ({ message , ctaText , backgroundColor }) => {
    return (
        <div className="banner" style={{ backgroundColor: backgroundColor }}>
            <h2>{message}</h2>
            <p>Discover the best solutions for your business needs</p>
            <button className="cta-button">
                {ctaText}
            </button>
        </div>
    );
}

export default Banner;
            