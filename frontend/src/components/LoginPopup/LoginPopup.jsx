import React, { useState } from 'react'
import './LoginPopup'
import './LoginPopup.css'

import { assets } from '../../assets/assets';

const LoginPopup = ({setShowLogin}) => {
  const [currentState,setCurrentState]=useState("Login");
  return (
    <div className='login-popup' >
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currentState==="Login"?<></>:<input type="text" placeholder='Your Name' required/>}
          
          <input type="email" placeholder='Your Email' required />
          <input type="password" placeholder='Enter Password' required />
        </div>
        <button>{currentState==="Sign Up"?"Create Account":"Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By Continuing ,i agree to the terms of use and privacy policy.</p>
        </div>
        {currentState==='Login'?<p>Create a new account? <span onClick={()=> setCurrentState('Sign Up')}>Click Here</span></p>:<p>Already have an account <span onClick={()=>setCurrentState('Login')}>Login Here</span></p>}
        
        
      </form>
    </div>
  )
}

export default LoginPopup