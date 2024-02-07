import React from 'react'
import { AiOutlineMenuFold } from "react-icons/ai";
import head from "./Header.module.css"
function LowerHeader() {
  return (
    <div className={head.lower__container}>
      <ul>
        <li>
            <AiOutlineMenuFold />
            <p>All</p>
        </li>
        <li>
            Today's Deals
        </li>
        <li>
            Customer Service
        </li>
        <li>
            Registry
        </li>
        <li>
            Gift Cards
        </li>
        <li>
            Sell
        </li>
      </ul>
    </div>
  )
}

export default LowerHeader
