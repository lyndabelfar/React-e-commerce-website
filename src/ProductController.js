import React from 'react'
import addImg from './images/icon-plus.svg'
import minusImg from './images/icon-minus.svg'


function ProductController({currentProduct, setCurrentProduct}) {

    const handleReduce = ()=>{
        let newNum = currentProduct-1;
        if(newNum <0){
            setCurrentProduct(0)
        }else{
            setCurrentProduct(newNum)
        }
    }

    const handleAdd = ()=>{
        let newNum = currentProduct+1;
        if(newNum >100){
            setCurrentProduct(100)
        }else{
            setCurrentProduct(newNum)
        }
    }
  return (
    <div className="product-controller">
        <button className="reduce" onClick={handleReduce} ><img src={minusImg}/></button>
        <h2 className="current-product">{currentProduct}</h2>
        <button className="add" onClick={handleAdd}><img src={addImg}/></button>
    </div>
  )
}

export default ProductController