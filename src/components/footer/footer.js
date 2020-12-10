import React from "react";
import './footer.scss';
import Clock from "../clock&date/clock";

function Footer() {
    return (
        <>
        <div className="container">
            <div className="footer">
                <div><Clock/></div>
            </div>
        </div>
        </>
    )
}

export default Footer;


