import React from 'react'
import '../Footer/Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                {/* <img src={assets.logo} alt="" /> */}
                <h1 className='logo'>Cookup Kitchen</h1>
                <p>Choose from a diverse menu featuring a delectable array of Caribbean dishes. Embark on a tantalizing Caribbean Fusion Experience at our restaurant, where vibrant island flavors and global culture converge. </p>
                <div className="footer-social-icon">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>

            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>

                </ul>

            </div>

            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>929-547-3575</li>
                    <li>contact@cookupkitchen.com</li>

                </ul>
            </div>
        </div>

        <hr />
        <p className="footer-copyright">Copyright © 2024 Cookup Kitchen - All Rights Reserved </p>
        
    </div>
  )
}

export default Footer