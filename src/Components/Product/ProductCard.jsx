import React, { useState } from 'react'
import Rating from "@mui/material/Rating"
import CurrencyFormat from '../CurrencyFormat/CurrencyFormater'
import classes from "./Product.module.css"
import { Link } from 'react-router-dom'
import { DataContext } from '../DataProvider/DataProvider'
import { Type } from '../../Utility/Action.type'
import { useContext } from 'react'

function ProductCard({product,renderDesc,flex,renderAdd}) {
    const {title, image,id, rating,price,description} = product;
    const [state,dispatch] = useContext(DataContext)
    // console.log(description)

    const Add_to_cart = () => {
      dispatch({
        type:Type.ADD_TO_BASKET,
        item:{title, image,id, rating,price,description}
      })
    }


  return (
    <div className={`${classes.card__container} ${flex? classes.product__flexed:''}`}>
      <Link to={`/products/${id}`}>
        <img src={image} alt=''className={classes.imag}/>
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{maxWidth:'750px'}}>{description}</div>}
        <div className={classes.rating}>
            {/* rating */}
            {rating?.rate && 
            <>
            <Rating value={rating.rate} precision={0.1}/>
            {/* count */}
            <small>{rating.count}</small>
            </>}
        </div>
        <div>
            <CurrencyFormat amount={price}/>
        </div>
        {
          renderAdd && <button onClick={Add_to_cart} className={`${classes.button} ${flex? classes.f_button: ''}`}>
          Add to cart
      </button>
        }
        
      </div>
    </div>
  )
}

export default ProductCard
