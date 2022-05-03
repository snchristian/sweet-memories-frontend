import React from 'react';
import{Card} from "../styled_components/CandyItemStyle"


 
function CandyItem ({candy,handleAddToCart}) {

  return (
   <div>
      <Card>
      <div className='card'>
        <div className='body'>
          <img src={candy.image} alt={candy.name}/>
          <h2 className='title'>{candy.name}</h2>
          <h3 className='price'>${(candy.price).toFixed(2)}</h3>
          <button className='button' onClick={() => handleAddToCart(candy)}>ADD TO Cart</button>
        </div>
      </div>
    </Card>
    </div> 
    )
}

export default CandyItem;