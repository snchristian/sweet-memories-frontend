import React,{useState,useEffect} from "react";
import { Container } from "../styled_components/CustomersStyle";
import {Hr, ProductCard} from "../styled_components/OrderStyle"

function Customers () {
    const [customers,setCustomers] = useState([])
    const [selected, setSelected] = useState(1)
    const [customerData, setCustomersData] = useState([])

      
    useEffect ( ()=>{
        fetch("http://localhost:9292/customers")
        .then ((res) => res.json())
        .then ((data) => setCustomers(data))
        },[])
       
    useEffect ( ()=>{
        fetch(`http://localhost:9292/customers/${selected}`)
        .then ((res) => res.json())
        .then ((data) => setCustomersData(data))
        },[selected])

            
        function handleChange (event) {
            setSelected(event.target.value)  
        }
        
        const customersCandy = customerData.map(customerData =>
            customerData.map(candy => 
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
                    </ProductCard>
                    <Hr/>
                </div>))

        console.log(customerData)

    return(
        <Container>
             <h1>Customers</h1>
                <div className="select">
                    <select value={selected} onChange={handleChange}>
                    <option>Select A customer</option>
                    {customers.map(customer => <option key={customer.id} value={customer.id}>{customer.name}</option>)}
                    </select>
                </div>
                {customersCandy}  
        </Container>
    )

}

export default Customers;