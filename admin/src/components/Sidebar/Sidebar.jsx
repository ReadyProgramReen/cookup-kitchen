import React from 'react'
import '../Sidebar/Sidebar.css'
import { assets } from '../../assets/admin_assets/assets'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <div className="side-option">
          <img src={assets.add_icon} alt="" />
          <p>Add Items</p>
        </div>

        <div className="side-option">
          <img src={assets.order_icon} alt="" />
          <p>List Items</p>
        </div>

        <div className="side-option">
          <img src={assets.order_icon} alt="" />
          <p>Orders</p>
        </div>

      </div>
      
    </div>
  )
}

export default Sidebar