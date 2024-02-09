import React from 'react'
import Layout from '../../Components/Layout/Layout'
import classes from "./Auth.module.css"
import { Link } from 'react-router-dom'
function Auth() {
  return (
    <section className={classes.login}>
      <Link to="">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/210px-Amazon_logo.svg.png" alt='amazone-logo'/>
      </Link>
      {/* form */}
      <div className={classes.login__container}>
        <h1>Sign in</h1>
        <form action=''>
          <div>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email'/>
          </div>
          <div>
            <label htmlFor='password'>PassWord</label>
            <input type='password' id='password'/>
          </div>
          <button className={classes.signin__btn}>Sign In</button>
        </form>
        {/* Agreement */}
        <p>By signing-in you agree to the Amazone Fake Clone conditions of use and sale.
          Please see our Privacy notice, Cookies notice and our Interest-Based Ads notice. </p>
          <button className={classes.register__btn}>Create Your Amazone Account</button>
      </div>
    </section>
     
  )
}
export default Auth
