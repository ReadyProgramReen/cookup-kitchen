import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/frontend_assets/assets'
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({setshowLogin}) => {

    const [menu, setMenu] = useState("home");

    const {getTotalCartAmount,token,setToken} = useContext(StoreContext)

    const navigate = useNavigate();

    const logOut = ()=>{
      localStorage.removeItem('token');
      setToken('');
      navigate('/');


    }
  return (

    <div className='navbar'>
       <Link to={'/'}><img className="logo" src={assets.logo} alt="" /></Link> 

        <ul className='navbar-menu'>
            <Link to={'/'}  onClick={()=>setMenu('home')} className={menu === 'home' ? 'active' :''}>Home</Link>
            <a href='#exploreMenu' onClick={()=>setMenu('Menu')} className={menu === 'Menu' ? 'active' :''}>Menu</a>
            <a href='#appDownload' onClick={()=>setMenu('Mobile-app')} className={menu === 'Mobile-app' ? 'active' :''}>Mobile-app</a>
            <a href='#footer' onClick={()=>setMenu('Contact us')} className={menu === 'Contact us' ? 'active' :''}>Contact us</a>

        </ul>

        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
               <Link to={'/cart'}>  <img src={assets.basket_icon} alt="" /> </Link>
                <div className={getTotalCartAmount() === 0 ? '': 'dot'}> </div>
             </div>

             {!token?
               <button onClick={()=>setshowLogin(true)}>Sign In</button>
               : <div className="navbar-profile">
                <img src={assets.profile_icon} alt="" />

                <ul className='nav-profile-dropdown'>
                  <li><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                  <hr />
                  <li onClick={logOut}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
                </ul>
               </div>
             } 
        </div>

    </div>
  )
}

export default Navbar