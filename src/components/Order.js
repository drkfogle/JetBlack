import React from 'react'
import './Order.css'
import moment from 'moment';
import BasketItem from './BasketItem';
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from './StateProvider'; 



function Order({ order }) {


  return (
    <div className="order">
      <p>{moment.unix(order.data.created).format('MMMM DD YYYY, h:mma')}</p>
      <p className="order-id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map( item => (
        <BasketItem
        id={item.id}
        title={item.title}
        image={item.image}
        price={item.price}
        rating={item.rating}
        hideButton
      />
      ))}
      <CurrencyFormat 
      renderText={(value) => (
        <div>
          <h3 className="order-total">Order Value: {value}</h3>
        </div>
      )}
      decimalScale={2}
      value={order.data.amount / 100}
      displayType={"text"}
      thousandSeparator={true}
      prefix = {'$'}
      />
    </div>
  )
}

export default Order
