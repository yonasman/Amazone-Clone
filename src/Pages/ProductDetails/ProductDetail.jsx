import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Layout/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../API/Endpoints'
import ProductCard from '../../Components/Product/ProductCard'

function ProductDetail() {
  const [product,setproduct] = useState({})
  const {productId} = useParams()
  
  useEffect(()=> {
    axios.get(`${productUrl}/products/${productId}`).
    then ((res) => {
      console.log(res.data)
      setproduct(res.data)
      }).catch((error) => {
        console.log("Error fetching request",error)
      })
  },[])
  return (
    <Layout>
          {/* {console.log(product)} */}
          <ProductCard  product={product}/>
          

    </Layout>
  )
}

export default ProductDetail
