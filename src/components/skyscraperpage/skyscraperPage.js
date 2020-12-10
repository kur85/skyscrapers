import React, {useEffect, useState} from "react";
import Homepage from "../homepage/home";
import './skyscraperPage.scss';
import { Link } from "react-router-dom";



function SkyscraperPage(props) {
    const [skyscraper,setSkyscraper] = useState(null)
    useEffect(()=>{
        fetch(`http://localhost:3000/skyscrapers/${props.match.params.id}`).then(response => response.json()).then(skyscraper=>{
            setSkyscraper(skyscraper)
        })
    },[])

    return (
        <>
        <div className="container">
            <div className="skyscraperPage">
                <div className="infoAndImage">
                    <div className="scraperInfo">
                        {skyscraper&&<h1>{skyscraper.name}</h1>}
                        {skyscraper&&<h3>państwo: {skyscraper.country}</h3>}
                        {skyscraper&&<h3>miasto: {skyscraper.city}</h3>}
                        {skyscraper&&<h3>rok ukończenia: {skyscraper.build}</h3>}
                        {skyscraper&&<h3>piętra: {skyscraper.floors}</h3>}
                        {skyscraper&&<h3>wysokość góry anteny: {skyscraper.antena} m</h3>}
                        {skyscraper&&<h3>wysokość góry iglicy: {skyscraper.spire} m</h3>}
                        {skyscraper&&<h2>wysokość góry konstrukcji: {skyscraper.roof} m</h2>}
                    </div>
                    <div className="scraperImage">
                        {skyscraper&& <img src={skyscraper.image}/>};
                    </div>
                </div>

                <div className="navigationScraperPage">
                    <button className="homeButton">                    
                    <Link to={`/`} className="homeButtonText">Strona główna</Link>
                    </button>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default SkyscraperPage;

