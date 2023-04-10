import React from 'react'
import Navbar from '../Component/Navbar'
import  Footer  from '../Component/Footer'
import Heroimages from '../Component/Heroimages'
import Form from '../Component/Form'
const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Heroimages heading="CONTACT" text="Lets have a chat"/>
      <Form/>

      <Footer/>
    </div>
  )
}

export default Contact