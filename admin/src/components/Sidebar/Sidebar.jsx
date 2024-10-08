import React from 'react'
import '../Sidebar/Sidebar.css'
import { assets } from '../../assets/admin_assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <NavLink to='/add' className="side-option">
          <img src={assets.add_icon} alt="" />
          <p>Add Items</p>
        </NavLink>

        <NavLink to="/list" className="side-option">
          <img src={assets.order_icon} alt="" />
          <p>List Items</p>
        </NavLink>

        {/* <NavLink to="/order" className="side-option">
          <img src={assets.order_icon} alt="" />
          <p>Orders</p>
        </NavLink> */}

      </div>
      
    </div>
  )
}

export default Sidebar