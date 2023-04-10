import { Link } from 'react-router-dom'
import './Pricing.css'


import React from 'react'

const Pricing = () => {
  return  <div className='Pricing'>
      <div className='card-container'>
       <div className='card'>
        <h3>- lower quality  -</h3>
         <span className='bar'></span>
         <p className='btc'> $ 100</p>
         <p>a pair of shoes</p>
         <p>2 Dozens</p>
         <p> 10 Dozens </p>
         <p>- designers -</p>
         <Link to='/contact' className='btn'> 
          PURCHASE NOW
          </Link>
       </div>
       <div className='card'>
        <h3>medum quality </h3>
         <span className='bar'></span>
         <p className='btc'> $200 </p>
         <p>a pair of shoes</p>
         <p>2 Dozens</p>
         <p> 10 Dozens</p>
         <p>- designers -</p>
         <Link to='/contact' className='btn'> 
          PURCHASE NOW
          </Link>
       </div>

       <div className='card'>
        <h3>Best quality</h3>
         <span className='bar'></span>
         <p className='btc'> $ 450</p>
         <p>a pair of shoes</p>
         <p>2 Dozens</p>
         <p> 10 Dozens</p>
         <p>- designers -</p>
         <Link to='/contact' className='btn'> 
          PURCHASE NOW
          </Link>
       </div>
      </div>
    </div>
  
}

export default Pricing
