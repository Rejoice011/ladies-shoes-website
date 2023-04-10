import './Form.css'


import React from 'react'

const Form = () => {
  return <div className='form'>
     <form>
        <label>Your Name</label>
        <input type='text'></input>
        <label>Email</label>
        <input type='email'></input>
        <label>Phone Number</label>
        <input type='phone'></input>
        <label>Message</label>
      <textarea rows='6' placeholder='Type your message here'> </textarea>
       <button className='btn'>Submit</button>
        </form> 
    </div>
  
}

export default Form
