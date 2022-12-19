import './style.css'
import {Carts} from '../Context.js'
import { useContext } from 'react'


const SingleProduct = ({prod})=>{
  const{cart,setCart}=useContext(Carts)
    return(
        <div className="products">
      <img src={prod.image} alt={prod.name} />
      <div className="productDesc">
        <span style={{ fontWeight: 700 }}>{prod.name}</span>
        <span>₹ {prod.price.substring(0, 3)}</span>
      </div>
      {
        cart.includes(prod)?(
<button className="add" onClick={
        ()=>{
            setCart(cart.filter(c=>c.id!==prod.id));
        }
      }>Remove to Cart
      </button>
        ):
        <button className="add" onClick={
            ()=>{
                setCart([...cart,prod]);
            }
          }>Add to Cart
          </button>
      }
    </div>
    )
}

export default SingleProduct;