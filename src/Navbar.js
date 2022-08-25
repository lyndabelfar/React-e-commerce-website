import React from 'react'
import logo from './images/logo.svg'
import profileImg from './images/image-avatar.png'


function Navbar() {
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
            <button className="card">card</button>
            <img className="profile-pic" src={profileImg} />
        </div>
    </nav>
  )
}

export default Navbar