import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Layout/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../API/Endpoints'
import ProductCard from '../../Components/Product/ProductCard'
import Loader from '../../Components/Loader/Loader'

function ProductDetail() {
  const [product,setproduct] = useState({})
  const {productId} = useParams()
  const [isLoading,setIsLoading] = useState(false)

  useEffect(()=> {
    setIsLoading(true)
    axios.get(`${productUrl}/products/${productId}`).
    then ((res) => {
      // console.log(res.data)
      setproduct(res.data)
      setIsLoading(false)
      }).catch((error) => {
        console.log("Error fetching request",error)
        setIsLoading(false)
      })
  },[])
  return (
    <Layout>
          {/* {console.log(product)} */}
          {
            isLoading? (<Loader/>):(<ProductCard  product={product} renderAdd={true} renderDesc={true} flex={true}/>)
          }
          

    </Layout>
  )
}

export default ProductDetail
