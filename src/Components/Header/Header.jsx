import React from 'react'
import { IoSearch } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import classes from "./Header.module.css"
import LowerHeader from './LowerHeader';
function Header() {
  return (
    <>
        <section>
            <div className={classes.header__container}>
            <div className={classes.logo__container}>
                {/* amazon logo */}
                <a href='/'><img src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='amazon logo'/></a>
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
                    <IoSearch size={25} />
            </div>
            
            <div className={classes.order__container}>
                    <a href="" className={classes.language}>
                        <img src= "https://media.istockphoto.com/id/1394197218/vector/american-usa-flag-with-real-proportions-and-colors.jpg?s=612x612&w=0&k=20&c=uzSZuRnAqtrCgYmWzW9opveCTzaJOkj2RAAdll7cd98=" alt='flags'/>
                        <select>
                        <option value=''>EN</option>
                        </select>
                        </a>
                
                {/* sign in */}
                <a href=''>
                    <div>
                        <p>Sign In</p>
                        <span>Account & Lists</span>
                    </div>
                </a>
                {/* order */}
                <a href=''>
                    <p>returns</p>
                    <span>& Orders</span>
                </a>
                <a href='' className={classes.cart}>
                    <BsCart3 size={35} />
                    <span>0</span>
                </a>
                </div>
            </div>
        </section>
        <LowerHeader/>
    </>
  )
}

export default Header
