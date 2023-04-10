
import './Productc1.css'
import React from 'react'
import first from '../asset/about.webp'
import { NavLink } from 'react-router-dom'



const Productc1 = () => {
  return <div className='work-container'>
    <h1 className='product-heading'>products</h1>
    <div className='product-container'>
        <div className='product-card'>
            <img src={first} alt='fhome'/>
            <h2 className='product-title'>product Title</h2>
            <div className='pro-details'>
              < p>this text</ p>
              <div className='prb-btns'>
                <NavLink to='url.com' 
                className='btn'>View</NavLink>
                <NavLink to='url.com' 
                className='btn'>Source</NavLink>

              
         </div>
     </div>
  </div>
</div>
 
 </div>
     
    
  
}

export default Productc1
