import React, { useState } from 'react'
import Head from '../../Components/Head/Head'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import AppDownload from '../../Components/AppDownload/AppDownload'

const Home = () => {

  const [category,setCategory] = useState('All')
  return (
    <div>
      <Head/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/> 
      <AppDownload/>
    </div>
  )
}

export default Home