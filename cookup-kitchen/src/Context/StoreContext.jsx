import axios from "axios";
import { createContext, useEffect, useState } from "react";
// import { food_list } from "../assets/frontend_assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider =(props)=>{
    

    const [cartItem, setCartItem] = useState({});
    const url = 'http://localhost:4000';
    const [token,setToken] = useState('');
    const [food_list, setFoodList] = useState([])


    // add to card
    const addToCart=(itemid)=>{
        if(!cartItem[itemid]){
            setCartItem((prev)=>({...prev,[itemid]:1}))
        }
        else{
            setCartItem((prev)=>({...prev,[itemid]:prev[itemid]+1}))
        }

    }

    // remove from card

    const removeFromCart =(itemid)=>{
        setCartItem((prev)=>({...prev, [itemid]:prev[itemid]-1}))

    }

    // useEffect(()=>{
    //     console.log(cartItem);

    // },[cartItem])

    const getTotalCartAmount = ()=>{
        let totalAmount = 0 ;
        for(const item in cartItem){

            if(cartItem[item]> 0){
                let itemInfo = food_list.find((product)=>product._id === item);
                totalAmount += itemInfo.price* cartItem[item]
            }   
        }
        return totalAmount;
    }

    const fetchFoodList = async ()=>{
        const response = await axios.get(url+'/api/food/list');
        setFoodList(response.data.data)
    }

    useEffect(()=>{
        async function loadData() {
            await fetchFoodList();
            if(localStorage.getItem('token')){
                setToken(localStorage.getItem('token'))
            }
            
        }
        loadData();
    },[])

    const contextValue ={
        food_list,
        cartItem,
        setCartItem,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
        

    }
    return(
    <StoreContext.Provider value={contextValue} >
        {props.children}
    </StoreContext.Provider>

    )
        

    
}

export default StoreContextProvider