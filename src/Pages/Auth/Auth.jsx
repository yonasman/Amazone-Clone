import { useState,useContext } from 'react'
import {auth} from "../../Utility/Firebase"
import classes from "./Auth.module.css"
import { Link,useNavigate,useLocation } from 'react-router-dom'
import { signInWithEmailAndPassword,createUserWithEmailAndPassword } from 'firebase/auth'
import {DataContext} from "../../Components/DataProvider/DataProvider"
import { Type } from '../../Utility/Action.type'
import {ClipLoader} from "react-spinners"

function Auth() {
  const [email,setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error,setError] = useState("")
  const [{user},dispatch] = useContext(DataContext)
  const [loading, setLoading] = useState({signIn:false,signup:false})
  const navigate = useNavigate()
  const navStateData = useLocation()
    // console.log(navStateData)

  // function to handle form submit
  const authHandler =async(e) => {
    e.preventDefault()
    if(e.target.name === 'signin') {
      setLoading({...loading,signIn:true})
      // authentication
      signInWithEmailAndPassword(auth,email,password).then((userInfo) => {
        // console.log(userInfo)
        dispatch({
          type:Type.SET_USER,
          user: userInfo.user
        })
        setLoading({...loading,signIn:false})
        navigate(navStateData?.state?.redirect || "/")
      }).catch((err) => {
        // console.log(err)
        setError(err.message)
        setLoading({...loading,signIn:false})
      })
    } else {
      setLoading({...loading,signup:true})
      createUserWithEmailAndPassword(auth,email,password).then((userInfo) => {
        // console.log(userInfo)
        dispatch({
          type:Type.SET_USER,
          user: userInfo.user
        })
        setLoading({...loading,signup:false})
        navigate(navStateData?.state?.redirect || "/")
      }).catch((err) => {
        setError(err.message)
        setLoading({...loading,signup:false})
      })
    }
  }
  return (
    <section className={classes.login}>
      <Link to="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/210px-Amazon_logo.svg.png" alt='amazone-logo'/>
      </Link>
      {/* form */}
      <div className={classes.login__container}>
        <h1>Sign in</h1>
        {
          navStateData?.state?.msg && (<small
          style={{
            padding:"5px",
            textAlign: "center",
            color:"red",
            fontWeight:"bold"
          }}
          >
            {navStateData.state.msg}
          </small>)
        }
        <form action=''>
          <div>
            <label htmlFor='email'>Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' id='email'/>
          </div>
          <div>
            <label htmlFor='password'>PassWord</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' id='password'/>
          </div>
          <button name='signin' onClick={authHandler} type='submit' className={classes.signin__btn}>{loading.signIn ? <ClipLoader  size={15} color='#000'/>:"Sign In"}</button>
        </form>
        {/* Agreement */}
        <p>By signing-in you agree to the Amazone Fake Clone conditions of use and sale.
          Please see our Privacy notice, Cookies notice and our Interest-Based Ads notice. </p>
          <button name='signup' onClick={authHandler} className={classes.register__btn}>{loading.signup ? <ClipLoader  size={15} color='#000'/>:"Create Your Amazone Account"}</button>
          {error && <small style={{paddingTop:"5px",color:"red"}}>{error}</small>}
      </div>
    </section>
     
  )
}
export default Auth
