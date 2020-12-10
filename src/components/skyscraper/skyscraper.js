import React from "react";
import { Link } from "react-router-dom";


function Skyscraper({id,name,image}){

    return <div className="skyscraper">
        <Link to={`/skyscraper/${id}`}>
        <img  src={image} alt="VarsoTower"/>
        </Link>
        
    </div>
}

export default Skyscraper;