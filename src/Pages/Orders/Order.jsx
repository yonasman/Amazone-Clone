import {useContext, useEffect,useState} from 'react'
import Layout from '../../Components/Layout/Layout'
import { db } from '../../Utility/Firebase'
import { DataContext } from '../../Components/DataProvider/DataProvider'
import classes from "./Order.module.css"
import ProductCard from "../../Components/Product/ProductCard"

function Order() {
  const [{user}] = useContext(DataContext)
  const [orders,setOrders] = useState([])

  useEffect(() => {
    if(user){
      db.collection("users").doc(user.uid).collection("orders").orderBy("created","desc").
      onSnapshot((snapShot) => {
        // console.log(snapShot)
        setOrders(
          snapShot.docs.map((doc) => (
            {
              id:doc.id,
              data:doc.data()
            }
          ))
        )
      })
    } else {
      setOrders([])
    }

  },[])

  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.orders__container}>
          <h2>Your Orders</h2> 
          {orders?.length == 0 && 
            <div style={{padding:"20px"}}>
              You don't have any order yet.
            </div>
          }
          {/* orders */}
          <div>
            {
              orders?.map((eachOrder,i) => (
                <div key={i}>
                  <hr/>
                  <p style={{fontWeight:"bold"}}>Order ID: {eachOrder?.id}</p>
                  {
                    eachOrder?.data?.basket?.map((order) => (
                      <ProductCard flex={true} key={order.id} product={order}/>
                    )

                    )
                  }
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Order
