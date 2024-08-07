import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/frontend_assets/assets'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [menu, setMenu] = useState("home");

  return (

    <div className='navbar'>
        <img className="logo" src={assets.logo} alt="" />

        <ul className='navbar-menu'>
            <Link to={'/'}  onClick={()=>setMenu('home')} className={menu === 'home' ? 'active' :''}>Home</Link>
            <a href='#exploreMenu' onClick={()=>setMenu('Menu')} className={menu === 'Menu' ? 'active' :''}>Menu</a>
            <a href='#appDownload' onClick={()=>setMenu('Mobile-app')} className={menu === 'Mobile-app' ? 'active' :''}>Mobile-app</a>
            <a href='#footer' onClick={()=>setMenu('Contact us')} className={menu === 'Contact us' ? 'active' :''}>Contact us</a>

        </ul>

        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <img src={assets.basket_icon} alt="" />
                <div className="dot"> </div>
             </div>
                <button>Sign In</button>
            
        </div>

    </div>
  )
}

export default Navbar