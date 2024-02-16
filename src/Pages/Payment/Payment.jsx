import  { useContext, useState } from 'react'
import Layout from '../../Components/Layout/Layout'
import classes from "./Payment.module.css"
import { DataContext } from '../../Components/DataProvider/DataProvider'
import ProductCard from "../../Components/Product/ProductCard"
import {useStripe, useElements,CardElement} from '@stripe/react-stripe-js';
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormater'
import { axiosInstance } from '../../API/axios'
import {ClipLoader} from "react-spinners"
import { db } from '../../Utility/Firebase'
import { useNavigate } from 'react-router-dom'
import { Type } from '../../Utility/Action.type'

function Payment() {
  const stripe = useStripe();
  const elements = useElements();
  const [{user,basket},dispatch] = useContext(DataContext)
  const [processing,setProcessing] = useState(false)
  const navigate = useNavigate()


  const totalItem = basket?.reduce((amount,item) => {
    return item.amount + amount
  },0)
  const [cardError,setcardError] = useState(null)

  const changeHandler = (e) => {
    // console.log(e)
   e.error?.message ? setcardError(e?.error?.message) : setcardError("")
  }

  // total price calculator
  const total = basket?.reduce((amount,item) => {
    const result = amount + item.price * item.amount
    return (result)
  },0)

  // payment handler function
  const handlePayment = async (e) => {
    e.preventDefault()
    try {
      // connecting to the backend
      setProcessing(true)
      const response = await axiosInstance({
        method : "POST",
        url : `/payment/create?total=${total*100}`,
      })
      // console.log(response.data)
      const clientSecret = response.data?.clientSecret;
      // confirmation
      const {paymentIntent} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method:{
            card:elements.getElement(CardElement)
          }
        }
      )
      // console.log(paymentIntent)
      // storing to firestore db and clearing the basket
      await db.collection("users").
      doc(user?.uid).
      collection("orders").doc(paymentIntent?.id).set({
        basket:basket,
        amount:paymentIntent.amount,
        created:paymentIntent.created
      })

      // emptying the basket
      dispatch({
        type:Type.EMPTY_BASKET
      })
      setProcessing(false)
      navigate("/orders",{state:{msg:"You have placed new order!"}})
    } catch (error) {
      console.log(error)
      setProcessing(false)
    }
  }

  return (
    <Layout>
      <div className={classes.payment__header}>Checkout ({totalItem}) items</div>
      <section className={classes.payment}>
        {/* payment method */}
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>123 React Lane</div>
            <div>Chicage, IL</div>
          </div>
        </div>
        <hr/>
        {/* product */}
        <div className={classes.flex}>
          <h3>Review items and Delivery</h3>
          <div>
            {basket?.map((item) => 
              <ProductCard key={item.id} product={item} flex={true}/>
            )}
          </div>
        </div>
        <hr/>
        {/* card form */}
        <div className={classes.flex}>
          <h3>Payment Methods</h3>
          <div className={classes.payment_card_container}>
              <div className={classes.payment__detail}>
                <form onSubmit={handlePayment}>
                  {cardError && <small style={{color:"red"}}>{cardError}</small>}
                  <CardElement onChange={changeHandler}/>
                  {/* price */}
                <div className={classes.payment__price}>
                  <div style={{display:"flex",gap:"6px"}}>
                    <p>Total Order |</p>
                    <span><CurrencyFormat amount={total}/></span>
                  </div>
                  <button type='submit'>
                    {
                      processing?(
                        <div className={classes.loading}>
                          <ClipLoader color="#000" size={14}/>
                          <p>Please wait...</p>
                        </div>
                      ): ("Pay Now")
                    }
                    
                    </button>
                </div>
                </form>
                
              </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Payment
