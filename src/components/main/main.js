import React, { useEffect, useState } from "react";
import './main.scss';
import '../Slideshow/slideShow'
import Slideshow from "../Slideshow/slideShow";
import 'react-slideshow-image/dist/styles.css'
// import { Link } from "react-router-dom";
import Skyscraper from "../skyscraper/skyscraper"
import ImageSlider from "../Slideshow/slideShow";


function Main() {
    const [skyscrapers,setSkyscrapers] = useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/skyscrapers").then(response => response.json()).then(skyscrapers=>{
            setSkyscrapers(skyscrapers)
        })
    },[])

    return (
        <>
        <div className="container">
            <div className="main">
                
                <div className="carouselBox">
                    {/* <Slideshow/> */}
                </div>
                <div className="allSkyscrapers">
                {skyscrapers.map(scraper=><Skyscraper key={scraper.id} {...scraper} />)}
                </div>
            </div>
        </div>
        </>
    )
}

export default Main

// function Skyscraper({id,name,image}){

//     return <div className="skyscraper">
//         <Link to={`/skyscraper/${id}`}>
//         <img  src={image} alt="VarsoTower"/>
//         </Link>
        
//     </div>
// }