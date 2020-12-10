import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import Main from "../main/main";
import About from "../about/about";
import './home.scss';


function Homepage() {
    return (
        <>
        <div className="container">
            <Header/>
            <Main/>
            <About/>
            <Footer/>
        </div>
        </>
    )
}

export default Homepage;