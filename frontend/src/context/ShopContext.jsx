import React, { createContext, useState } from "react";
import all_product from "../assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = ()=>{
    let cart = {};
    for(let index=0;index<all_product.length+1;index++){
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems,setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((previous) => ({
            ...previous,
            [itemId]:previous[itemId]+1
        }))
    }


    const removeFromCart = (itemId) => {
        setCartItems((previous) => ({
            ...previous,
            [itemId]:previous[itemId]-1
        }))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        Object.keys(cartItems).forEach((key) => {
            if(cartItems[key] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(key));
                if(itemInfo) { 
                    totalAmount += itemInfo.new_price * cartItems[key];
                }
            }
        });
        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItems = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItems+=cartItems[item];
            }
        }
        return totalItems
    }
    

    const contextValue = {getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;