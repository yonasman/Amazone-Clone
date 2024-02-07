import React, { useEffect, useState } from 'react'
import axios from "axios"
import ProductCard from './ProductCard'
import classes from "./Product.module.css"
function Product() {
   const [products,setProducts] = useState([])
   useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then(
            (res) => {
                console.log(res)
                setProducts(res.data)
            }
        ).catch((error) => {
            console.log("error",error)
        })
   },[])
  return (
    <div className={classes.products_container}>
      {
        products.map((singleProduct) => (
            <ProductCard product = {singleProduct} key={singleProduct.id}/>
        ))
      }
    </div>
  )
}

export default Product
