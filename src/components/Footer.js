import "./footerstyles.css";
import React from 'react';
import {FaHome,FaPhone,FaMailBulk,FaGithub, FaTwitter, FaLinkedin} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                        <div className="location">
                        <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                        <div>
                            <p>Bengaluru</p>
                            <p>Karnataka 560018</p>
                        </div>
                        </div>
                        {/* <div className="phone">
                            <h4> <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                        +91 7022 ******</h4>
                        </div> */}
                        <div className="email">
                            <h4> <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                        prakruthis888@gmail.com</h4>
                        </div>
            </div>

            <div className="right">
            <h4>About me</h4>
            <p>I am fresher,Aspiring FullStack developer dedicated to learning, growing, and making a positive impact.</p>
            <div className="social">
            <FaGithub size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            <FaTwitter size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            <FaLinkedin size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            </div>
    

            </div>
            </div>
    </div>
  );
};


export default Footer