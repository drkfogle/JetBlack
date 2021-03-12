import React, {useState, useEffect} from 'react'
import './Payment.css' 
import BasketItem from './BasketItem'
import { useStateValue } from './StateProvider'
import { Link, useHistory } from 'react-router-dom';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './Axios';
import {db} from '../firebase';



function Payment() {
  const [{basket, user}, dispatch] = useStateValue();

  const stripe = useStripe(); 
  const elements = useElements();
  const history = useHistory();


  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true)
  const [clientSecret, setClientSecret] = useState(true)

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`
      });
      setClientSecret(response.data.clientSecret)
    }
    getClientSecret();
  }, [basket])
  
  console.log('Secret key,', clientSecret);


  const handleSubmit = async(e) => {
    e.preventDefault();
    setProcessing(true)

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method:{
        card: elements.getElement(CardElement)
      }
    }).then(({paymentIntent}) => {

      db
      .collection('users')
      .doc(user?.uid)
      .collection('orders')
      .doc(paymentIntent.id)
      .set({
        basket: basket,
        amount: paymentIntent.amount,
        created: paymentIntent.created
      })

      setSucceeded(true);
      setError(null)
      setProcessing(false)


      dispatch({
        type: 'EMPTY_BASKET'
      })

      history.replace('/orders')
    })
  }

  const handleChange = e => {
    setDisabled(e.empty)
    setError(e.error ? e.error.message : "")
  }


  return (
    <div className="payment">
      <div className="payment-container">
        <h1>
          Checkout (<Link to="/Checkout">{basket?.length} items</Link>)
        </h1>


        <div className="payment-section">
          <div className="payment-title">
              <h3>Delivery Address</h3>
          </div>
          <div className="payment-address">
            <p>{user?.email}</p>
            <p>321 Something Blvd</p>
            <p>New York, NY</p>
          </div>
        </div>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment-items">
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
        <div className="payment-section">
          <div className="payment-title">
              <h3>Payment Method</h3>
          </div>
          <div className="payment-details">
              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange}/>
                  <div className="payment-priceContainer">
                    <CurrencyFormat 
                    renderText={(value) => (
                      <div>
                        <h3>Order Value: {value}</h3>
                      </div>
                    )}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix = {'$'}
                    />
                    <button disabled={processing || disabled || succeeded}>
                      <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                    </button>
                  </div>
              </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
