import React from 'react'
import '../Navbar/Navbar.css'
import { assets } from "../../assets/admin_assets/assets"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
     <Link to='/'><h1 className='logo'>Cookup Kitchen Admin Panel</h1></Link>
      <p>S</p>
    </div>
  )
}

export default Navbar