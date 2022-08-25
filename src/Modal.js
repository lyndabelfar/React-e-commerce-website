import React from 'react'
import ImageChanger from './ImageChanger';

function Modal({currentImage, setCurrentImage}) {
  return (
    <div className='modal'>
        <button className="close-modal">X</button>
        <ImageChanger  currentImage={currentImage} setCurrentImage={setCurrentImage} />

    </div>
  )
}

export default Modal