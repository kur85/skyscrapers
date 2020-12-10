import React from "react";
import './header.scss';
import { Link } from "react-router-dom";
import MapContainer from "../maps/maps"


function Header() {
    return (
        <>
        <div className="container">
            <div className="header">
                <h1 className='title'>SkyCrapers</h1>
                <nav className="nav">
                    <ul className="menu">
                        {/* <li className="li"><a href="#">Strona główna</a></li> */}
                        <li className="li"><Link to="/mapa">Mapa</Link></li>
                        <li className="li"><Link to="/miasta">Miasta</Link></li>
                        <li className="li"><a href="#aboutMe">O mnie</a></li>
                    </ul>
                </nav>
            </div>
        </div>
        </>
    )
}

export default Header;

