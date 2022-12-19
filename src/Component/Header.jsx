import React from 'react';
import {Link} from "react-router-dom";
import './style.css'
function Header() {
  return (
    <div>
      <span className='header'>React Context API Tutorial</span>
      <ul className='nav'>
        <li>
          <Link to="/">Homepage</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header