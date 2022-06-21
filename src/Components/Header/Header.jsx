import React from 'react'
import "./Header.css"
import CTA from './CTA'
import ME from "../../Assets/my Pic.png"
import pic from "../../Assets/me.png"
import Socials from "./HeaderSocials"
const Header = () => {
  return (
    <header>
    <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Paras Kumar Sharma</h1>
       <h5 className="text-light">Full Stack Developer</h5>
       <CTA/>
      <Socials/>

       <div className="me">
         <img src={pic} alt="" />
        </div>          
      
        <a href="#contact" className="scroll__down">Scroll Down</a>
    </div>
    </header>
  )
}

export default Header