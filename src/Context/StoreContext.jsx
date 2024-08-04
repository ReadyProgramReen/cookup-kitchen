import { createContext, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider =(props)=>{

    const [cartItem, setCartItem] = useState({});

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

    const contextValue ={
        food_list
        

    }
    return(
    <StoreContext.Provider value={contextValue} >
        {props.children}
    </StoreContext.Provider>

    )
        

    
}

export default StoreContextProvider