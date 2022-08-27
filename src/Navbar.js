import React, { useState } from 'react'
import logo from './images/logo.svg'
import profileImg from './images/image-avatar.png'
import { FaShoppingCart } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

import productImg1 from "./images/image-product-1.jpg";




function Navbar({contentCart, currentProduct, numProduct, cartDeleted, setCartDeleted}) {

  const [visibleCart, setVisibleCart] = useState(false)


  const showHideCart =()=>{
    setVisibleCart(!visibleCart)
  }

  const handleCartDelete =()=>{
    setCartDeleted(true)
  }

  return (
    <nav>
        <img src={logo}/>
        <div className="links">
            <ul>
                <li><a href="#">Collections</a></li>
                <li><a href="#">Men</a></li>
                <li><a href="#">Women</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
        <div className="items">
            <div className="card-div">
              <button className="card-btn" onClick={showHideCart}><FaShoppingCart/></button>
              <div className={`card ${visibleCart? 'active-cart':''}`}>
                <div className="card-top">Cart</div>
                <div className="card-content">
                  {contentCart && !cartDeleted? 
                  <div className="full-cart">
                    <div className="top-cart-full">
                      <img src={productImg1} alt="" className='full-cart-img' />
                      <div className="cart-data">
                        <div className="product-title">Fall Limited Edition Sneakers</div>
                        <div className="price"> $125.00 x {numProduct}  <span> ${numProduct*125}.00 </span> </div>
                      </div>
                      <button className="delete-cart-content-btn" onClick={handleCartDelete}> <FaTrashAlt/> </button>

                    </div>
                    <button className="checkout-btn">Checkout</button>

                  </div>
                  : 'Your cart is empty.'}
                </div>

              </div>
            </div>

            <img className="profile-pic" src={profileImg} onClick={showHideCart} />
        </div>
    </nav>
  )
}

export default Navbar