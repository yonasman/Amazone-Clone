import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Layout/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../API/Endpoints'
import classes from "./Result.module.css"
import ProductCard from '../../Components/Product/ProductCard'
import Loader from '../../Components/Loader/Loader'
function Result() {
  const [result,setresult] = useState([])
  const {categoryName} = useParams()
  const [isLoading,setIsLoading] = useState(false)
  
  useEffect(() => {
    setIsLoading(true)
    axios.get(`${productUrl}/products/category/${categoryName}`).then((res) => {
      setresult(res.data)
      setIsLoading(false)
    }).catch((error) => {
    console.log("error",error)
    setIsLoading(false)
})
  },[])
 
  return (
    <Layout>
      <>
      {
        isLoading? <Loader/> : (
          <section>
          <h1 style={{padding: "30px"}}>Results</h1>
          <p style={{padding: "30px"}}>Category / {categoryName}</p>
          <hr/>
          <div className={classes.products_container}>
            {result?.map((pro) => (
              <ProductCard  key={pro.id} product={pro} renderAdd={true} renderDesc={false}/>
            ))}
          </div>
        </section>
        )
      }
      </>
     
    </Layout>
  )
}

export default Result
