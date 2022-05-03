import React,{createContext,useState} from "react";

const CartItemsContext = createContext()

function CartItemsProvider({children}){
    const[cartItems,setCartItems]=useState([])


    const value=[cartItems,setCartItems]
    
    
    return(
    <CartItemsContext.Provider value={value}>
        {children}
    </CartItemsContext.Provider>
    )
}

export{CartItemsContext,CartItemsProvider}