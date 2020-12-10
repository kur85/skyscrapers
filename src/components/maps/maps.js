import React,{useEffect,useState} from "react";
import "./maps.scss";
import { Link } from "react-router-dom";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';



function MapContainer (props) { 

    const [locations,setLocations] = useState(null)
    useEffect(()=>{
        fetch(`http://localhost:3000/skyscrapers`).then(response => response.json()).then(data=>{
          let tempLocations = data.map(scraper=>{
            return {
                name: scraper.name,
                location: { 
                  lat: scraper.lat,
                  lng: scraper.lng
                },
              }
          })
          setLocations(tempLocations)
        })
    },[])
  
    const mapStyles = {        
      height: "100vh",
      width: "100%"};
    
    const defaultCenter = {
      lat: 52.237049, lng: 21.017532
    }

    // const locations = [
    // //     {
    // // //       name: "VarsoTower",
    // //       location: {scraperLocation,map(scraper=><Skyscraper key={scraper.lat} key={scraper.lng} {...scraper}/>}

    // //     },
    // //     },
    //     // {
    //     //   name: "Location 2",
    //     //   location: { 
    //     //     lat: 41.3917,
    //     //     lng: 2.1649
    //     //   },
    //     // },
    //     // {
    //     //   name: "Location 3",
    //     //   location: { 
    //     //     lat: 41.3773,
    //     //     lng: 2.1585
    //     //   },
    //     // },
    //     // {
    //     //   name: "Location 4",
    //     //   location: { 
    //     //     lat: 41.3797,
    //     //     lng: 2.1682
    //     //   },
    //     // },
    //     // {
    //     //   name: "Location 5",
    //     //   location: { 
    //     //     lat: 52.1344,
    //     //     lng: 21.0001
    //     //   },
    //     // }
    //   ];
    
    return (
        <>
        <div className="mapsDiv">
       {locations&&<LoadScript
         key="AIzaSyAyp-f1Dp3t2V3-cZG6kva1ZiHBc_RAgNQ">
          <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={12}
          center={defaultCenter}>
         {
            locations.map(item => {
              return (
              <Marker key={item.name} position={item.location} />
              )
            })
         }
        </GoogleMap>
        </LoadScript>}
        </div>
        <div className="navigationScraperPage">
                    <button className="homeButton">                    
                    <Link to={`/`} className="homeButtonText">Strona główna</Link>
                    </button>
                </div>
         </>
    )
}
export default MapContainer;



