import Button from '@mui/material/Button';

import { Wrapper } from '../styled_components/CartItemStyle';

function CartItem ({item,handleAddToCart,handleRemoveFromCart}){

    return(
        <>
        <Wrapper>
            <h3>{item.name}</h3>
            <div className='information'>
            <p> Price: ${(item.price).toFixed(2)}</p>
            <p> Total:${(item.price*item.quantity).toFixed(2)}</p>
        </div>
        <img src={item.image} alt={item.name}/>
        <div className='buttons'>
             <Button onClick={()=>handleRemoveFromCart(item.id)} style={{maxWidth: '30px', maxHeight: '40px', backgroundColor: "salmon"}}  disableElevation variant='contained'>
                  -
             </Button>
             <p>{item.quantity}</p>
             <Button onClick={()=>handleAddToCart(item)} style={{maxWidth: '30px', maxHeight: '40px', backgroundColor: "salmon"}}   disableElevation variant='contained'>
                 +
             </Button>
         </div>
        </Wrapper>  
        </>)

}
export default CartItem;
