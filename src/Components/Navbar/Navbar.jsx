import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/frontend_assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img className="logo" src={assets.logo} alt="" />

        <ul className='navbar-menu'>
            <li>Home</li>
            <li>Menu</li>
            <li>Mobile-app</li>
            <li>Contact us</li>

        </ul>

        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="search-icon">
                <img src={assets.basket_icon} alt="" />
                <div className="dot">
                    
                </div>
                <button>Sign In</button>
            </div>
        </div>

    </div>
  )
}

export default Navbar