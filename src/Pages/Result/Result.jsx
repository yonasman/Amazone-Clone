import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Layout/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../API/Endpoints'
import classes from "./Result.module.css"
import ProductCard from '../../Components/Product/ProductCard'
function Result() {
  const [result,setresult] = useState([])
  const {categoryName} = useParams()

  useEffect(() => {
    axios.get(`${productUrl}/products/category/${categoryName}`).then((res) => {
      setresult(res.data)
    }).catch((error) => {
    console.log("error",error)
})
  },[])
 
  return (
    <Layout>
      <section>
        <h1 style={{padding: "30px"}}>Results</h1>
        <p style={{padding: "30px"}}>Category / {categoryName}</p>
        <hr/>
        <div className={classes.products_container}>
          {result?.map((pro) => (
            <ProductCard key={pro.id} product={pro}/>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default Result
