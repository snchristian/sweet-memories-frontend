import React from "react";
import {useNavigate} from "react-router-dom"
import CartItem from "./CartItem";

function Cart ({cartItems,handleAddToCart,handleRemoveFromCart}) {
  const history=useNavigate()

function handleRedirectToCheckout(){
    history("/checkout")
  }

  function subTotal(candyItems){
     return candyItems.reduce((previousValue, candy) => previousValue + candy.quantity * candy.price,0)


  }

  const cartLineItem = cartItems.map(item => <CartItem
  key={item.id}
  item={item}
  handleAddToCart={handleAddToCart}
  handleRemoveFromCart={handleRemoveFromCart}
  />)

return(
    <>
     <h3>Your Candies</h3>
     {cartItems.length === 0 ? <p>Empty Cart</p>:null}
     {cartLineItem}
    <h3>Total: ${subTotal(cartItems).toFixed(2)}</h3>
     {cartItems.length > 0 ? <button onClick={handleRedirectToCheckout}>Proceed to Checkout</button>:null}
     </>)  
}

export default Cart;