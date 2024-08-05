import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import CartItem from './Pages/CartItem/CartItem'
import Footer from './Components/Footer/Footer'



const App = () => {
  return (
    <>
    <div className='app'>
    

      <Navbar/>
      <Routes>a
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