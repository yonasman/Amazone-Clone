import React, { useContext } from 'react'
import Layout from '../../Components/Layout/Layout'
import { DataContext } from '../../Components/DataProvider/DataProvider'
import ProductCard from '../../Components/Product/ProductCard'
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormater'
import { Link } from 'react-router-dom'
import classes from "./Cart.module.css"
import { Type } from '../../Utility/Action.type'
import { IoMdArrowDropupCircle } from "react-icons/io";
import { MdArrowDropDownCircle } from "react-icons/md";
function Cart() {
  const [{basket,user},dispatch]= useContext(DataContext)
  const total = basket?.reduce((amount,item) => {
    const result = amount + item.price * item.amount
    return (result)
  },0)
  // increment function
  const increment = (item) => {
    dispatch({
      type:Type.ADD_TO_BASKET,
      item
    })
  }
// decrement function
  const decrement = (id) => {
    dispatch(
      {
        type:Type.REMOVE_FROM_BASKET,
        id
      }
    )
  }

  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.card__container}>
          <h1>Hello, Your shopping Cart</h1>
          <hr/>
          {
            basket?.length == 0?(<p>Opps! Your cart is Empty.</p>): (
              basket?.map((item,i) => {
                return (
                  <section className={classes.cart__product}>

                  
                  <ProductCard key={i} product={item} renderDesc={true} flex={true} renderAdd={false}/>
                 <div className={classes.btn__container}>
                 <button className={classes.btn} onClick={()=>increment(item)}><IoMdArrowDropupCircle size={25}/></button>
                 <span>{item.amount}</span>
                  <button className={classes.btn} onClick={()=>decrement(item.id)}><MdArrowDropDownCircle size={25} /></button>
                 </div>
                  </section>
                )

              })
            )
          }
        </div>
        {
          basket?.length !== 0 && (
            <div className={classes.subtotal}>
               <div>
                <p>SubTotal: {basket?.length} items</p>
                <CurrencyFormat amount={total}/>
                </div> 
                <span>
                  <input type="Checkbox"/>
                  <small>This order contains a gift</small>
                </span>
                <Link to='/payments'>Continue to checkOut</Link>
            </div>
          )
        }
      </section>
    </Layout>
  )
}

export default Cart
