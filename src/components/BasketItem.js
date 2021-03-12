import React from 'react'
import './BasketItem.css'
import { useStateValue } from './StateProvider';


function BasketItem({id, title, image, price, rating, hideButton}) {

  const [{basket}, dispatch] = useStateValue();
  
  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    });
  };


  return (
    <div className='basketItem'>
      <img src={image} alt="" className="basketItem-img"/>
      <div className="basketItem-info">
        <p className="basketItem-title">{title}</p>
        <p className="basketItem-price">
          <small>$</small>
          <strong>{price}</strong>
          </p>
        <div className="basketItem-rating">
        {Array(rating)
          .fill()
          .map((_, i ) => (
          <p>★</p>
        ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove From Basket</button>

        )}
      </div>
    </div>
  )
}

export default BasketItem
