import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import CartItem from './Pages/CartItem/CartItem'
import Footer from './Components/Footer/Footer'
import LoginPopups from './Components/LoginPopups/LoginPopups'



const App = () => {

const [showlogin,setshowLogin] = useState(false);

  return (
    <>
      {showlogin? <LoginPopups setshowLogin ={setshowLogin} /> :<></>}

    <div className='app'>
    

      <Navbar setshowLogin ={setshowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path ='/order' element={<PlaceOrder/>}/>
        <Route path='/cart' element={<CartItem/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App