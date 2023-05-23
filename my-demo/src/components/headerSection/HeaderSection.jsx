import React from 'react'
import "./header.css";
import logo from "../images/logo.png";



const HeaderSection = () => {
  return (
    <>
     <div className="container">
        <nav>
            <img src={logo} alt=" "/>
            <div>
                <ul id="list">
                    <li><a href="/">Home</a></li>
                    <li><a href="/Features">Features</a></li>
                    <li><a href="/Pricing">Pricing</a></li>
                    <li><a href="/Contact">Contact</a></li>
                    <button id="btn1">Request Demo</button>
                    <button id="btn2">Request Callback</button>
                </ul>
            </div>
        </nav>
    </div>
    </>
  )
}

export default HeaderSection;