import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimage2 from '../components/Heroimage2';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
      <Navbar/>
      <Heroimage2 heading="ABOUT," text="Im a aspiring Fullstack Developer."/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About