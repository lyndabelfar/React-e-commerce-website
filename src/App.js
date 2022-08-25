import Navbar from "./Navbar";
import ProductController from "./ProductController";
import AddToCardButton from "./AddToCardButton";


import productImg1 from "./images/image-product-1.jpg";
import productImg2 from "./images/image-product-2.jpg";
import productImg3 from "./images/image-product-3.jpg";
import productImg4 from "./images/image-product-4.jpg";


import productImg1Thumb from "./images/image-product-1-thumbnail.jpg";
import productImg2Thumb from "./images/image-product-2-thumbnail.jpg";
import productImg3Thumb from "./images/image-product-3-thumbnail.jpg";
import productImg4Thumb from "./images/image-product-4-thumbnail.jpg";
import { useState } from "react";




function App() {

  const [currentProduct, setCurrentProduct] = useState(0)
  const [currentImage, setCurrentImage] = useState(productImg1Thumb)
  const [focusedButton1, setFocusedButton1] = useState(true)
  const [focusedButton2, setFocusedButton2] = useState(false)
  const [focusedButton3, setFocusedButton3] = useState(false)
  const [focusedButton4, setFocusedButton4] = useState(false)



  const changeThumbnailImage1 =()=>{
    setCurrentImage(productImg1Thumb)
    setFocusedButton1(true)
    setFocusedButton2(false)
    setFocusedButton3(false)
    setFocusedButton4(false)
  }

  const changeThumbnailImage2 =()=>{
    setCurrentImage(productImg2Thumb)
    setFocusedButton2(true)
    setFocusedButton1(false)
    setFocusedButton3(false)
    setFocusedButton4(false)

  }

  const changeThumbnailImage3 =()=>{
    setCurrentImage(productImg3Thumb)
    setFocusedButton3(true)
    setFocusedButton1(false)
    setFocusedButton2(false)
    setFocusedButton4(false)
  }

  const changeThumbnailImage4 =()=>{
    setCurrentImage(productImg4Thumb)
    setFocusedButton4(true)
    setFocusedButton2(false)
    setFocusedButton3(false)
    setFocusedButton1(false)

  }

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="container-left">
          <img className="thumbnail-img" src={currentImage}/>
          <div className="btns">
            <button className={`product1-btn ${focusedButton1?'focused-btn':''}`} onClick={changeThumbnailImage1}><img src={productImg1}/></button>
            <button className={`product2-btn ${focusedButton2?'focused-btn':''}`}  onClick={changeThumbnailImage2}><img src={productImg2} /></button>
            <button className={`product3-btn ${focusedButton3?'focused-btn':''}`}  onClick={changeThumbnailImage3}><img src={productImg3}/></button>
            <button className={`product4-btn ${focusedButton4?'focused-btn':''}`}  onClick={changeThumbnailImage4}><img src={productImg4}/></button>
          </div>


        </div>



        <div className="container-right">
          <h3>SNEAKER COMPANY</h3>
          <h1 className="title">Fall Limited Edition Sneakers</h1>
          <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
          <div className="price">
            <h1 className="current-price">$125.00</h1>
            <div className="percentage">50%</div>
          </div>
          <div className="prev-price">$250.00</div>

          
          <div className="bottom">
            <ProductController currentProduct={currentProduct} setCurrentProduct={setCurrentProduct} />
            <AddToCardButton />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
