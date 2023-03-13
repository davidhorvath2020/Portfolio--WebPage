import React from "react";
import { Link } from "react-router-dom";

const Footer = (props) => {
    return (
        <div className={`Footer ${props.DarkMode && 'Footer--Dark'}`}>
            <div>
                Designed and Built by David Horvath
            </div>
            <div>
                &#169; 2022 #Dave's portfolio
            </div>
        </div>
    )
}

export default Footer;