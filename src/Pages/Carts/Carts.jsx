import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import '../Carts/Carts.css'

const Carts = () => {
   const {cartItem,food_list,removeFromCart} = useContext(StoreContext);
  return (
    <div className='cart'>
        <div className="cart-items">
            <div className="cart-items-title">
                <p>Items</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>

            </div>
            <br />
            <hr />

            {food_list.map((item,index)=>{
                if(cartItem[item._id] > 0){
                    return (
                        <div className="cart-item-title cart-item-item">
                            <img src={item.image} alt="" />
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                            <p>{cartItem[item._id]}</p>
                            <p>{item.price *cartItem[item._id]}</p>
                            <p>x</p>

                        </div>
                    )
                }

            })}
        </div>
    </div>
  )
}

export default Carts