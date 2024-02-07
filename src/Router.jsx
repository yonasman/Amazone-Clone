import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Landing from "./Pages/Landing/Landing"
import Signup from "./Pages/Auth/Signup"
import Payment from "./Pages/Payment/Payment"
import Order from "./Pages/Orders/Order"
import Cart from "./Pages/Cart/Cart"
import Result from './Pages/Result/Result'

function Routing() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/auth' element={<Signup/>}/>
            <Route path='/payments' element={<Payment/>}/>
            <Route path='/orders' element={<Order/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/category/:categoryName' element={<Result/>}/>
        </Routes>
    </Router>
  )
}

export default Routing
