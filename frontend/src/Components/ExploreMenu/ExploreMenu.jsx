import React from 'react'
import '../ExploreMenu/ExploreMenu.css'
import { menu_list } from '../../assets/frontend_assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='exploreMenu'>
        <h1>Explore Our Countries</h1>
        <p className='explore-menu-text'>Explore our vibrant menu showcasing an exquisite selection of African dishes. Our mission is to delight your taste buds and elevate your dining experience with every flavorful meal.</p>

        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name ? 'All': item.menu_name)} key={index} className="explore-menu-list-item">
                        <img className={category === item.menu_name?'active':''} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu