import React from 'react'
import "./Contact.css"
import {MdOutlineEmail} from "react-icons/md"
import {FiTwitter,FiLinkedin} from "react-icons/fi"
const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>sparas1999@gmail.com</h5>
            <a href="mailto:sparas1999@gmail.com">Send a message</a>
          </article>

          <article className="contact__option">
            <FiLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Paras Kumar sharma</h5>
            <a href="https://www.linkedin.com/in/paras-kumar-sharma-865106233/">Send a message</a>
          </article>

          <article className="contact__option">
            <FiTwitter className='contact__option-icon'/>
            <h4>Twitter</h4>
            <h5>Paras Kumar Sharma</h5>
            <a href="https://twitter.com/ParasKu27161805">Send a message</a>
          </article>
        </div>
          <form action="">
            <input type="text" name="name" placeholder='Your Full Name' required/>
            <input type="email" name="email" placeholder='Your Email' required/>
            <textarea name="message" rows="10">Your Message</textarea>
            <button type="submit" className='btn btn-primary'>Send Message</button>
          </form>
      </div>
    </section>
  )
}

export default Contact