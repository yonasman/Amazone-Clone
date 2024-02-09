import React from 'react'
import {CategoryInfos} from "./CategoryFullInfos"
import CategoryCard from './CategoryCard'
import classes from "./Category.module.css"
function Category() {
  return (
   <section className={classes.category__container}>
    {
        CategoryInfos.map((info) => (
            <CategoryCard  data={info}/>
        ))
    }
   </section>
  )
}

export default Category
