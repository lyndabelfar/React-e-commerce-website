import React from 'react'
import { FaShoppingCart } from "react-icons/fa";


function AddToCardButton({contentCart, setContentCart ,currentProduct, numProduct, setNumProduct, cartDeleted, setCartDeleted}) {
  const handleAddCartBtn =()=>{
    if(currentProduct >0){
      setContentCart(true)
      setNumProduct(currentProduct)
      setCartDeleted(false)
    }else{
      setContentCart(false)
    }

  }

  return (
    <button className='add-to-card-btn' onClick={handleAddCartBtn}> <FaShoppingCart/> Add to card</button>
  )
}

export default AddToCardButton