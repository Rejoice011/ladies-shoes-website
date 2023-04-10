import React from 'react'
import Navbar from '../Component/Navbar'
import  Footer  from '../Component/Footer'
import Heroimages from '../Component/Heroimages'
// import Productc1 from '../Component/Productc1'
import Pricing from '../Component/Pricing'
import Work from '../Component/work'


const Project = () => {
  return (
    <div>
     <Navbar/>
     <Heroimages heading="PRODUCT." 
     text="Some of my most recent products" />
     <Work/>
      <Pricing/>
     {/* <Productc1 /> */}
     <Footer/>
     
    </div>
  )
}

export default Project
