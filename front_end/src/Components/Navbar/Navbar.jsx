import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'


const Navbar = () => {

    const [menu,setMenu] = useState("shop");

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>CLOTH CLOUD</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={()=>{setMenu("shop")}}><Link to='/'>Shop</Link>Shop{menu ==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("mens")}}><Link to='/mens'>Men</Link>ShopMen{menu ==="mens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Women")}}><Link to='/women'>Women</Link>ShopWomen{menu ==="Women"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link to='/Kids'>kids</Link>ShopKids{menu ==="kids"?<hr/>:<></>}</li>
            </ul>
            <div className="Nave-login-cart">
                <link to='/login'><button>Login</button></link>
                <Link to='cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar