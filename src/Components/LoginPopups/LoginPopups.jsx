import React, { useState } from 'react'
import '../LoginPopups/LoginPopups.css'
import { assets } from '../../assets/frontend_assets/assets'

const LoginPopups = ({setshowLogin}) => {

    const [currentState, setCurrentState] = useState('Sign up')
  return (
    <div className='login-popup'>
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currentState}</h2>

                <img onClick={()=>setshowLogin(false)} src={assets.cross_icon} alt="" />
            </div>

        <div className="login-popup-input">
            {currentState === 'Login'? <></>: <input type="text" placeholder='Name'  required/>}
            
            <input type="email"  placeholder='Email' required/>
            <input type="password" placeholder='Password' required />
        </div>
            <button>{currentState=== 'Sign up' ? 'Create Account': 'Login'}</button>
        
        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, I agree to the terms of use & privacy policy</p>

        </div>
            {currentState === 'Login'?
             <p>Create a New Accout ? <span onClick={()=>setCurrentState('Sign Up')}>Click Here</span></p>
             :
             <p>Already have an account ? <span onClick={()=>setCurrentState('Login')}>Login here </span></p>
            }
        </form>
    </div>
  )
}

export default LoginPopups