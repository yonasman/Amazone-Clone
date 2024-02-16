import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Landing from "./Pages/Landing/Landing"
import Auth from "./Pages/Auth/Auth"
import Payment from "./Pages/Payment/Payment"
import Order from "./Pages/Orders/Order"
import Cart from "./Pages/Cart/Cart"
import Result from './Pages/Result/Result'
import ProductDetail from "../src/Pages/ProductDetails/ProductDetail"
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js'; 
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
const stripePromise = loadStripe('pk_test_51OhubjELREIyy6F4K01KMRCeqmyYufly0PVhWC2gyV1eEz0ImPJBW8BykJr77KbKeMBZqoLfi6a4ZozUYU6fY1Ex00z90bzt06');    
function Routing() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/auth' element={<Auth/>}/>
            <Route path='/payments' element={
            <ProtectedRoute msg={"You must log in first to pay"} redirect={"/payments"}>
              <Elements stripe={stripePromise}>
                <Payment/>
              </Elements>
            </ProtectedRoute>
            }/>

            <Route path='/orders' element={
            <ProtectedRoute msg={"You must log in to access your order"} redirect={"/orders"}>
              <Order/>
            </ProtectedRoute>
            }/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/category/:categoryName' element={<Result/>}/>
            <Route path='/products/:productId' element={<ProductDetail/>}/>
        </Routes>
    </Router>
  )
}

export default Routing
