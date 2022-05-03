import React, {useState,useEffect} from "react"
import { Hr,ProductCard, Title } from "../styld_components/OrderStyle"


function Orders(){

    const[order,setOrder]=useState([])

    useEffect ( ()=>{
        fetch("http://localhost:9292/orders")
        .then ((res) => res.json())
        .then ((data) => setOrder(data))
        },[])

        function deleteOrderCandies(candy){
            setOrder(order.filter(order => order.id !==candy.id))

        }

        
        function handleRemove(candy){
            console.log(candy)
            fetch(`http://localhost:9292/orders/delete/${candy.id}}`,{
                method: "DELETE",
                headers:{
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
            })
            .then(res => res.json())
            .then (data => deleteOrderCandies(data))
        }

        
       const candies = order
       console.log(candies)

       const orderd = candies.map(candy => {
            return(
                <div key={candy.id}>
                    <ProductCard >
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
                            <button className="button" onClick={()=>handleRemove(candy)}>Remove From Order</button>
                        </div>    
                        </div>   
                    </ProductCard>
                    <Hr/>
                </div> 
            )            
       })
    return(
    <div>
        <Title>Order Details</Title> 
        {orderd} 
        
    </div>
    
    )

}

export default Orders