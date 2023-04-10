import React from 'react'
import Navbar from '../Component/Navbar'
import  Footer  from '../Component/Footer'
import Heroimages from '../Component/Heroimages'
import AboutContant from '../Component/AboutContant'
const About = () => {
  return (
    <div>
     <Navbar/>
     <Heroimages heading="ABOUT US" text="We are the best ladies heel producer" />
     <AboutContant/>
     <Footer/>
    </div>
  )
}

export default About
