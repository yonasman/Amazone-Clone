import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Landing from "./Pages/Landing/Landing"
import Auth from "./Pages/Auth/Auth"
import Payment from "./Pages/Payment/Payment"
import Order from "./Pages/Orders/Order"
import Cart from "./Pages/Cart/Cart"
import Result from './Pages/Result/Result'
import ProductDetail from "../src/Pages/ProductDetails/ProductDetail"
function Routing() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/auth' element={<Auth/>}/>
            <Route path='/payments' element={<Payment/>}/>
            <Route path='/orders' element={<Order/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/category/:categoryName' element={<Result/>}/>
            <Route path='/products/:productId' element={<ProductDetail/>}/>
        </Routes>
    </Router>
  )
}

export default Routing
