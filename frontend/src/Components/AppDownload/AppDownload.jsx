import React from 'react'
import '../AppDownload/AppDownload.css'
import { assets } from '../../assets/frontend_assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='appDownload'>
        <p>For Better Experience Download <br /> Cookup Kitchen app</p>
        <div className="app-downlaod-platforms">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />

        </div>
    </div>
  )
}

export default AppDownload