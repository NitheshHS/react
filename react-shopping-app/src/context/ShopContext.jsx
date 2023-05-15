import React, { createContext, useState } from 'react'
import { productList } from '../products';

export const shopContext = createContext(null);

const getDefaultCart = ()=>{
    let cart={};
    for(let i=1; i<=productList.length;i++){
        cart[i] = 0;
    }
    return cart;
}
function ShopContextProvider(props) {
    const [cartItem, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId)=>{
        setCartItems(prev=>({...prev, [itemId]:prev[itemId]+1}))
    }
    const removeItemFromCart = (itemId)=>{
        setCartItems(prev=>({...prev, [itemId]:prev[itemId]-1}))
    }
    console.log(cartItem);
  return (
   <shopContext.Provider value={{cartItem, addToCart, removeItemFromCart}}>
    {props.children}
   </shopContext.Provider>
  )
}

export default ShopContextProvider