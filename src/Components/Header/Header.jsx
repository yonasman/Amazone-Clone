import  { useContext } from 'react'
import { IoSearch } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import classes from "./Header.module.css"
import LowerHeader from './LowerHeader';
import { Link } from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';
import { auth } from '../../Utility/Firebase';

function Header() {
 const [{user,basket,dispatch}]= useContext(DataContext)
    // console.log(basket)
    const totalItem = basket?.reduce((amount,item) => {
        return item.amount + amount
    },0)
    // console.log(totalItem)
  return (
    <section  className={classes.sticky}>
        <section>
            <div className={classes.header__container}>
            <div className={classes.logo__container}>
                {/* amazon logo */}
                <Link to='/'><img src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='amazon logo'/></Link>
                <div className={classes.delivery}>
                    <div>
                    <span>
                        <IoLocationOutline size={20}/>
                    </span>
                    </div>
                    <div>
                    <p>Delivered to</p>
                    <span>Ethiopia</span>
                    </div>
                </div>
            </div>
            <div className={classes.search}>
                <select name='id'>
                    <option value=''>
                        All
                    </option> 
                 </select>
                    <input type='text' name='' id='' placeholder='Search product'/>
                    <IoSearch size={38} />
            </div>
            
            <div className={classes.order__container}>
                    <a href="" className={classes.language}>
                        <img src= "https://media.istockphoto.com/id/1394197218/vector/american-usa-flag-with-real-proportions-and-colors.jpg?s=612x612&w=0&k=20&c=uzSZuRnAqtrCgYmWzW9opveCTzaJOkj2RAAdll7cd98=" alt='flags'/>
                        <select>
                        <option value=''>EN</option>
                        </select>
                        </a>
                
                {/* sign in */}
                <Link to={!user && "/auth"}>
                    <div>
                        {user?
                        (<>
                            <p>Hello, {user?.email?.split("@")[0]}</p>
                            <p  onClick={() => auth.signOut()}>Sign Out</p>    
                        </>):
                        (<>
                            <p>Hello, sign in</p>
                            <span>Account & Lists</span>
                        </>)
                        }
                    </div>
                    
                </Link>
                {/* order */}
                <Link to='/orders'>
                    <p>returns</p>
                    <span>& Orders</span>
                </Link>
                <Link to='/cart' className={classes.cart}>
                    <BsCart3 size={35} />
                    <span>{totalItem}</span>
                </Link>
                </div>
            </div>
        </section>
        <LowerHeader/>
    </section>
  )
}

export default Header
