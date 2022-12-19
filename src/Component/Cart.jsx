import React from 'react'
import SingleProduct from './SingleProduct'
import {Carts} from '../Context.js'
import { useContext } from 'react'

const Cart= ()=> {
  const{cart,setCart}=useContext(Carts)
  return (
    <div>
      <span style={{fontSize:30}}>
        My Cart
      </span>
      <br/>
<span style={{fontSize:30}}>
  Total: Rs.100
</span>
<div className="productContainer">
  {
    cart.map((prod)=>(
      <SingleProduct
      prod={prod}
      key={prod.id}
      />
    ))
  }
</div>
    </div>
  )
}

export default Cart