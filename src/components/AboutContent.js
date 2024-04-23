import { Link } from "react-router-dom"
import "./aboutContentstyles.css"
import React1 from "../assets/pic1.jpg"
import React2 from "../assets/pic2.jpg"

import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Techical Skills</h1>
            <p>Java,SQL</p>
            <p>Javascript</p>
            <p>HTML,CSS</p>
            <p>Reactjs</p>
            <p>SpringBoot</p>
            <p>Servlet,JSP</p>
            <p>JDBC,J2EE</p>
            <Link to ="/contact">
                <button className="btn">Contact</button>
            </Link>

        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React2} className="img" alt="true"/>

                </div>
                <div className="img-stack bottom">
                    <img src={React1} className="img" alt="true"/>

                </div>
            </div>

        </div>

    </div>
  )
}

export default AboutContent