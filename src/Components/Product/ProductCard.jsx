import React from 'react'
import Rating from "@mui/material/Rating"
import CurrencyFormat from '../CurrencyFormat/CurrencyFormater'
import classes from "./Product.module.css"
import { Link } from 'react-router-dom'

function ProductCard({product}) {
    const {title, image,id, rating,price} = product;
    
  return (
    <div className={classes.card__container}>
      <Link to={`/products/${id}`}>
        <img src={image} alt=''/>
      </Link>
      <div>
        <h3>{title}</h3>
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
        <button className={classes.button}>
            Add to cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
