import React from "react";
//import { Link } from "react-router-dom";
import { FaFacebookF, FaGooglePlusG, FaInstagramSquare, FaTwitter } from 'react-icons/fa';
import { FaYoutubeSquare } from 'react-icons/fa';
// import Typical from "react-typical";
//import classes from "../../../styles/Nav.module.css";
import Nav from "../Nav/Nav";
import "./../Profile/Profile.css";
 
export default function Profile() {

    return (
        <div className="profile-container">
            <Nav />
              
            <div className="profile-parent">

                

                <div className="profile-details">
                 

                    
                    <div className="colz">

                        <div className="colz-icon">
                        <a href="https://facebook.com/ProfileName"><FaFacebookF /></a>
                        <a href="https://www.youtube.com/"><FaGooglePlusG /></a>
                        <a href="https://www.youtube.com/"><FaYoutubeSquare /></a>
                        <a href="https://www.youtube.com/"><FaInstagramSquare /></a>
                        <a href="https://www.youtube.com/"><FaTwitter /></a>

                        </div>
                
                </div>
                <div className="profile-details-name">
                    <span className="primary-text">
                        {" "}
                        Hello, I'M <span className="highlighted-text">Jewel</span>
                    </span>
                </div>
                <div className="profile-details-role">
                    <span className="primary-text">
                        {" "}
                        <h1>
                            {" "}
                            {/* <Typical
                            loop={Infinity}
                            steps={
                                [
                                   "Ethusiastic Developer 😇" ,
                                   1000,
                                   "React Developer  ⌨" ,
                                   1000,
                                   "Android Developer 🦘 ",
                                   1000,
                                   "React/React Native Dev 🐈 " ,
                                   1000,
                                   
                                ]
                            }
                            /> */}
                        </h1>
                        <span className="profile-role-tagline">
                            Jewel of building applications with front and back end operations.
                             </span>
                        
                    </span>
                </div>
                <div className="profile-options">
                    <button className="primary-btn">
                        {""}
                        Hire Me{" "}
                    </button>
                    <a href="Jewel[Original].pdf" download="Jewel[Original].pdf">
                        <button className="highlighted-btn">Get Resume</button>
                    </a>
                    
                </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background">
                        
                    </div>
                </div>

            </div>

        </div>
    )
    
}