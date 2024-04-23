import "./heroimagestyles.css";
import React from 'react';
import IntroImg from "../assets/woman.jpg"
import {Link} from "react-router-dom";

const HeroImage = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            <p>Hi,I am Prakruthi S</p>
            <h1>FullStack Developer</h1>
        
        <div>
            <Link to="/project" className="btn">PROJECTS</Link>
            <Link to="/contact" className="btn btn-light">CONTACT</Link>
        </div>
        </div>
        
    </div>
  )
}

export default HeroImage