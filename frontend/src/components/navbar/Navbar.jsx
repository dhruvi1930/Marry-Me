import React, { useContext, useState } from 'react'
import logo from '../../assets/logo.png';
import cart_icon from '../../assets/shopping-cart.png'
import './Navbar.css';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';

const Navbar = () => {

    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext)

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='Marry Me' width="100px" height="100px"/>
      </div>
      <ul className='nav-menu'>
        <li onClick={() => {setMenu("shop")}}><Link to='/' style={{textDecoration:'none'}}>Shop</Link>{menu === "shop" ? <hr/>:<></>}</li> 
        <li onClick={() => {setMenu("women")}}><Link to='/women' style={{textDecoration:'none'}}>Women</Link>{menu === "women" ? <hr/>:<></>}</li>
        <li onClick={() => {setMenu("men")}}><Link to='/men' style={{textDecoration:'none'}}>Men</Link>{menu === "men" ? <hr/>:<></>}</li>
        <li onClick={() => {setMenu("couples")}}><Link to='/couples' style={{textDecoration:'none'}}>Couple</Link>{menu === "couples" ? <hr/>:<></>}</li>
      </ul>
      <div className='nav-login-cart'>
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cart"><img src={cart_icon} alt='Cart' width="30px" height="30px"/></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
