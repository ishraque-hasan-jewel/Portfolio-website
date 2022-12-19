import React from "react";
import Profile from "./Profile/Profile";
import Footer from "./Footer/Footer";
import About from "./About/About";
import Testimonial from "./Testimonial/Testimonial";

import "../Home/Home.css";
import Header from "./Header/Header";
import Resume from "./Resume/Resume";
import Contact from "./Contact/Contact";
// import Nav from "./Nav/Nav";

 export default function Home(){
    return(
        <div className="home-container">
            {/* <Nav /> */}
            <Profile />
            <Footer />
            <About />
            <Resume />
             <Header /> 
             <Testimonial />
            <Footer />
            <Contact />

        </div>
    )
 }