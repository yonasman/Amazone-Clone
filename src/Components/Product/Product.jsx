import React, { useEffect, useState } from 'react'
import axios from "axios"
import ProductCard from './ProductCard'
import classes from "./Product.module.css"
import Loader from '../Loader/Loader'
function Product() {
   const [products,setProducts] = useState([])
   const [isLoading,setIsLoading] = useState(false)
   useEffect(() => {
      setIsLoading(true)
        axios.get("https://fakestoreapi.com/products").then(
            (res) => {
                // console.log(res)
                setProducts(res.data)
                setIsLoading(false)
            }
        ).catch((error) => {
            console.log("error",error)
            setIsLoading(false)
        })
   },[])
  return (
    <>
      {
        isLoading? (<Loader/>) : (
          <section className={classes.products_container}>
          {
            products.map((singleProduct) => (
                <ProductCard product = {singleProduct} key={singleProduct.id} renderAdd={true} renderDesc={false}/>
            ))
          }
        </section>
        )
      }
    </>
   
  )
}

export default Product
