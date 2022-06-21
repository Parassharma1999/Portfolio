import React from 'react'
import {BsLinkedin,BsTwitter,BsFacebook,BsGithub} from "react-icons/bs"
const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com" target="_blank"><BsGithub/></a>
        <a href="https://facebook.com" target="_blank"><BsFacebook/></a>
        <a href="https://twitter.com" target="_blank"><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocials