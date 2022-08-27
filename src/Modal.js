import React from 'react'


import productImg1 from "./images/image-product-1.jpg";
import productImg2 from "./images/image-product-2.jpg";
import productImg3 from "./images/image-product-3.jpg";
import productImg4 from "./images/image-product-4.jpg";


import productImg1Thumb from "./images/image-product-1-thumbnail.jpg";
import productImg2Thumb from "./images/image-product-2-thumbnail.jpg";
import productImg3Thumb from "./images/image-product-3-thumbnail.jpg";
import productImg4Thumb from "./images/image-product-4-thumbnail.jpg";

function Modal({setOpenedModal, currentImage, focusedButton1, focusedButton2, focusedButton3, focusedButton4, changeThumbnailImage1, changeThumbnailImage2, changeThumbnailImage3, changeThumbnailImage4}) {
  return(
    <>
      <div className="modal">
        <button className="close-modal-btn" onClick={()=>{setOpenedModal(false)}} >&#10005;</button>
        <img className="thumbnail-img" src={currentImage}/>
        <div className="btns-modal">
            <button className={`product1-btn ${focusedButton1?'focused-btn':''}`} onClick={changeThumbnailImage1}><img src={productImg1}/></button>
            <button className={`product2-btn ${focusedButton2?'focused-btn':''}`}  onClick={changeThumbnailImage2}><img src={productImg2} /></button>
            <button className={`product3-btn ${focusedButton3?'focused-btn':''}`}  onClick={changeThumbnailImage3}><img src={productImg3}/></button>
            <button className={`product4-btn ${focusedButton4?'focused-btn':''}`}  onClick={changeThumbnailImage4}><img src={productImg4}/></button>
          </div>
      </div>
      <div className="overlay" onClick={()=>{setOpenedModal(false)}}></div>
      
    </>
  )
}

export default Modal