import React from 'react'
import BasketItem from './BasketItem';
import './Checkout.css';
import { useStateValue } from './StateProvider';
import SubTotal from './SubTotal';


function Checkout() {

  const [{basket, user}, dispatch] =useStateValue();

  return (
    <div className="checkout">
      <div className="checkout-left">

        <div>
          <h3>Hello,{user?.email}</h3>
          <h2 className="checkout-title">Your Shopping Cart</h2>

            {basket.map(item => (
              <BasketItem
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}

        </div>
      </div>
      <div className="checkout-right">
        <SubTotal />
      </div>
    </div>
  )
}

export default Checkout
