import { useContext } from 'react';
import {React,useState} from 'react';
import SingleProduct from './SingleProduct';
var phaker =require('phaker.js');
phaker.seed(100);


const Home = ()=> {
    const productArray =[...Array(20)].map(()=>({
        id:phaker.random.uuid(),
        name:phaker.commerce.productName(),
        price:phaker.commerce.price(),
        image:phaker.random.image(),
    }))
    const[products] = useState(productArray);
  return (
    <div className='productContainer'>
      {
        products.map((prod)=>(
          <SingleProduct prod={prod}
          key={prod.id}/>
        )) 
      }
    </div>
  )
}

export default Home