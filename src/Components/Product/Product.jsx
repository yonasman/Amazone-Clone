import React, { useEffect, useState } from 'react'

function Product() {
   [fisrt,setfirst] = useState()
   useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then(
            (res) => {
                console.log(res)
            }
        )
   },[])
  return (
    <div>
      
    </div>
  )
}

export default Product
