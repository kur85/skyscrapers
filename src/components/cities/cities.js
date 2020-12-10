import React from "react";
import './cities.scss';
import { Link } from "react-router-dom";



function Cities() {
    return (
        <>
        <div className="container">
            <div className="soonDiv">
                <h1 className="soon">wkrótce...</h1>
                <button className="homeButton2">                    
                    <Link to={`/`} className="homeButtonText">
                        Strona główna
                    </Link>
                </button>
            </div>
        </div>
        </>
    )
}

export default Cities;
