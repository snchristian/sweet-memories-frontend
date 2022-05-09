import React,{useState,useContext} from "react";
import { CartItemsContext } from '../content/cartItems';
import { FormContainer, Wrapper } from "../styled_components/OrderFormStyle";
import {useNavigate} from "react-router-dom"


function OrderForm (){
    const[cartItems,setCartItems]=useContext(CartItemsContext) 
    const history=useNavigate()

    const [CustomerData,setNewCustomerData]= useState({
        fullname:"",
        phone_Number:"",
        email_Address:"",
        address:"",
        credit_Card_Number:"",
        zipCode:"",
        state:"",
        cvc:"",
        cardholder_name:"",
        expiration_Date:"",
        order_status:"Processing"
    })

    const formatedCartItems = cartItems.map(item => {
        return {
            candy_id:item.id,
            quantity:item.quantity   
        }
    })

    function handleClearCart (){
      setCartItems([])
    }

    const cartItem = cartItems.map(candy => {
       return(
           <Wrapper>
              <div className="productdetail">
                    <img src={candy.image} alt={candy.name}/>
                    <div className="details">
                        <span className="productName">{candy.name}</span>
                        <span>Qty:{candy.quantity}</span>
                        <div>${candy.price}</div>
                    </div>
                </div>
                <div className="productprice">
                    <div className="productAmount">
                        <span className="span" >Total ${(candy.quantity*candy.price).toFixed(2)}</span>
                    </div>    
                </div>   

           </Wrapper>
       )
    })


    function subTotal(candyItems){
        return candyItems.reduce((previousValue, candy) => previousValue + candy.quantity * candy.price,0)
   
     }

    function handleChange(event){
        setNewCustomerData({
            ...CustomerData,
            [event.target.name]:event.target.value
        });
    }
    
function handleSubmit(event){
        event.preventDefault();

        const newOrder ={
            customer:{
                name:CustomerData.fullname,
                phone_number:CustomerData.phone_Number,
                email:CustomerData.email_Address
            },

            order:{
                order_status:CustomerData.order_status,
                address:CustomerData.address,
                state: CustomerData.state,
                zipcode:CustomerData.zipCode,
                credit_card_number:CustomerData.credit_Card_Number,
                card_holder_name:CustomerData.cardholder_name,
                cvc:CustomerData.cvc,
            },
            
            candy:formatedCartItems


        }

        fetch("http://localhost:9292/orders",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify(newOrder),
        })
        .then((r)=>r.json())
        .then((newOrder)=>console.log(newOrder))
        
        history("/confirmation")
        handleClearCart()
       

    }
    return (
        <FormContainer>
            <h1 className='Title'>Customer Info</h1>
            <div className="row">
    <div className="col-75">
        <div className="container">
        <form onSubmit={handleSubmit}>
            <div className="row">
            <div className="col-50">
                <h3>Shipping Address</h3>
                    <label>Full Name:</label>
                    <input type='text' name='fullname' placeholder='Violet Beauregrade' value={CustomerData.fullname} onChange={handleChange}/>
                    <label>Phone Number:</label>
                    <input type='text' name='phone_Number' placeholder='2226239336' value={CustomerData.phone_Number} onChange={handleChange}/>
                    <label>Email Address:</label>
                    <input type='text' name='email_Address' placeholder='candyFeen@example.com' value={CustomerData.email_Address} onChange={handleChange}/>
                    <label>Address:</label>
                    <input type='text' name='address' placeholder= '7809 Druy Lane' value={CustomerData.address} onChange={handleChange}/>
                <div className="row">
                <div className="col-50">
                    <label>State</label>
                    <input type="text" name="state" placeholder="NY" value={CustomerData.state} onChange={handleChange}></input>
                </div>
                <div className="col-50">
                    <label>Zip Code</label>
                    <input type='text'name='zipCode' placeholder="22639" value={CustomerData.zipCode} onChange={handleChange}/>
                </div>
                </div>
            </div>

            <div className="col-50">
                <h3>Payment</h3>
                <label>Credit Card Number</label>
                <input type='text' name='credit_Card_Number' placeholder="2263956837002022" value={CustomerData.credit_Card_Number} onChange={handleChange}/>
                <label>Cardholder Name</label>
                <input type='text' name='cardholder_name' value={CustomerData.cardholder_name} placeholder="Violet Beauregrade" onChange={handleChange}/>

                <div className="row">
                    <div className="col-50">
                        <label>Expiration Date</label> 
                        <input type='text' name='expiration_Date' placeholder='MM/YYYY' value={CustomerData.expiration_Date} onChange={handleChange}/>
                    </div>
                    <div className="col-50">
                        <label>CVC</label>
                        <input type='text' name='cvc' placeholder='123' value={CustomerData.cvc} onChange={handleChange}/>
                    </div>
                </div>
            </div>
            </div>
            <div className="cart">
                <h3>Cart</h3>
                {cartItem}
                <div className="subtotal">
                    <div className="total">SubTotal:</div>
                    <span className="price"><b>${subTotal(cartItems).toFixed(2)}</b></span>
                </div>
                
            </div>
            <input type="submit" value=" Checkout" className="btn"/>
        </form>
        </div>
    </div>  
    </div>
        </FormContainer>  
    )
}

export default OrderForm